#!/usr/bin/env node
// Read-only citation integrity check for the universal-physics wiki.
// Scans every source .md file for arXiv IDs and DOIs and validates their
// well-formedness (offline, deterministic, no deps). This is the automated
// half of the anti-crank protocol: "never fabricate a citation, number,
// theorem, or arXiv ID." It does NOT verify liveness by default — format only.
//
//   error  = structurally impossible ID (e.g. month 13, too-short serial,
//            empty DOI suffix). Fails CI (exit 1). This is a real anti-crank
//            finding — report the file:line, do not paper over it.
//   warn   = well-formed but worth a glance (e.g. a YYMM dated in the future).
//            Printed, but never fails CI. Ordinary trailing prose punctuation
//            (a citation ending a sentence/parenthetical) is normal and silently
//            stripped — it is NOT warned, to keep the signal clean.
//
// Flags:
//   --online    HEAD/GET arxiv.org and doi.org for each distinct ID, log
//               non-200s informationally. NEVER changes the exit code (network
//               is non-deterministic). Manual/nightly use only — keep out of CI.
//   --selftest  Run the built-in fixture asserting good IDs pass and bad IDs
//               are classified `error`. Exit 1 if any assertion fails.
//
// arXiv schemes covered:
//   new (post-2007): YYMM.NNNNN  (4-digit YYMM + 4-or-5-digit serial)
//   old:             category/NNNNNNN  (e.g. hep-th/9905026, math.GT/0011084)
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
// Skip build artifacts, deps, and generated copies of the wiki — we validate
// the source .md, not the rendered duplicates under site/content and book/dist.
// `plans/` is advisor handoff scratch (mirrors check-links.mjs): plan docs cite
// DELIBERATELY-malformed example IDs (e.g. arXiv:9913.00001) to describe the
// checker itself; those illustrative strings are not live wiki citations and
// must not be treated as anti-crank findings.
const SKIP = new Set([
  "node_modules",
  ".git",
  ".next",
  "content", // site/content (generated copy of the wiki)
  "dist", // book/dist and any other build output
  ".vercel",
  ".obsidian",
  "plans", // advisor scratch; contains intentional malformed-ID examples
]);

// Trailing characters that are document punctuation/markdown, never part of an
// arXiv ID or a DOI tail (handled paren-aware for DOIs; see stripDoiTail).
const TRAILING = /[.,;:)\]\s]+$/;

function walk(dir) {
  let out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP.has(e.name)) continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out = out.concat(walk(p));
    else if (e.name.endsWith(".md")) out.push(p);
  }
  return out;
}

// ── arXiv validation ───────────────────────────────────────────────────────
// Current YYMM ceiling for the "far future" heuristic. Recompute at runtime so
// the check never goes stale; allow a generous slack so a plausibly-real recent
// preprint (corpus already uses 2026 IDs like 2606.17983) is never errored.
const now = new Date();
const CUR_YY = now.getUTCFullYear() % 100; // e.g. 26 for 2026
const CUR_YYMM_NUM = CUR_YY * 100 + (now.getUTCMonth() + 1); // e.g. 2606
const FUTURE_SLACK = 6; // months of grace before "far future" is even a warning

// Returns { kind: "new"|"old", class: "ok"|"warn"|"error", reason }.
function classifyArxiv(rawId) {
  const id = rawId.replace(TRAILING, "");
  const hadTail = id !== rawId.replace(/\s+$/, "");

  // New scheme: YYMM.NNNNN
  const mNew = /^(\d{2})(\d{2})\.(\d{4,5})$/.exec(id);
  if (mNew) {
    const yy = Number(mNew[1]);
    const mm = Number(mNew[2]);
    if (mm < 1 || mm > 12) {
      return { kind: "new", class: "error", id, reason: `month ${mNew[2]} out of range 01-12` };
    }
    // year must be >= 07 (post-2007 scheme start) and not absurdly in the future.
    const yymmNum = yy * 100 + mm;
    if (yy < 7) {
      return { kind: "new", class: "error", id, reason: `year ${mNew[1]} predates the 0704 scheme` };
    }
    if (yymmNum > CUR_YYMM_NUM + FUTURE_SLACK) {
      // Plausibly-real but ahead of "now" — never hard-fail on this.
      return { kind: "new", class: "warn", id, reason: `YYMM ${yy}${mNew[2]} is in the future (>${CUR_YYMM_NUM}+${FUTURE_SLACK})` };
    }
    // hadTail = ordinary trailing prose punctuation was stripped; that is normal, not a warning.
    return { kind: "new", class: "ok", id, reason: "" };
  }

  // Old scheme: category[.SUBCLASS]/NNNNNNN  (e.g. hep-th/9905026, math.GT/0011084)
  const mOld = /^([a-z-]+)(\.[A-Z]{2})?\/(\d{7})$/.exec(id);
  if (mOld) {
    return { kind: "old", class: "ok", id, reason: "" };
  }

  // Something that lexed as an arXiv ID but matches neither scheme.
  return { kind: "unknown", class: "error", id, reason: "matches neither new (YYMM.NNNNN) nor old (cat/NNNNNNN) scheme" };
}

// ── DOI validation ───────────────────────────────────────────────────────────
// DOI suffixes legitimately contain balanced parens (e.g. JHEP09(2024)160), so
// we strip a trailing close-paren only when it is unbalanced (closes nothing),
// then strip ordinary trailing punctuation. Returns the cleaned DOI.
function stripDoiTail(raw) {
  let s = raw;
  // Iteratively peel: an unbalanced ")" at the end, or any of . , ; : ] .
  // A balanced ")" (one that has a matching "(" within s) is kept.
  for (;;) {
    const last = s[s.length - 1];
    if (last === ")") {
      const opens = (s.match(/\(/g) || []).length;
      const closes = (s.match(/\)/g) || []).length;
      if (closes > opens) {
        s = s.slice(0, -1); // unbalanced trailing ) → document punctuation
        continue;
      }
      break; // balanced → part of the DOI suffix, stop
    }
    if (last === "." || last === "," || last === ";" || last === ":" || last === "]") {
      s = s.slice(0, -1);
      continue;
    }
    break;
  }
  return s;
}

function classifyDoi(rawTok) {
  const doi = stripDoiTail(rawTok);
  const hadTail = doi !== rawTok;
  // 10.<registrant 4-9 digits>/<suffix, non-empty>
  const m = /^10\.(\d{4,9})\/(.+)$/.exec(doi);
  if (!m) {
    return { class: "error", id: doi, reason: "not a well-formed DOI (expected 10.NNNN/suffix)" };
  }
  if (!m[2] || m[2].trim() === "") {
    return { class: "error", id: doi, reason: "empty DOI suffix after the slash" };
  }
  // hadTail = ordinary trailing prose punctuation was stripped; that is normal, not a warning.
  return { class: "ok", id: doi, reason: "" };
}

// ── Extraction ───────────────────────────────────────────────────────────────
// Match an arXiv reference token (both schemes) after an "arXiv:" prefix, plus
// the new-scheme bare form when it appears in an arxiv.org/abs/ URL. We anchor
// on the prefix to avoid false hits on unrelated NNNN.NNNNN-looking text.
const ARXIV_RE = /arxiv[:/](?:abs\/)?([a-z-]+(?:\.[A-Z]{2})?\/\d{7}[.,;:)\]]?|\d{4}\.\d{1,6}[.,;:)\]]?)/gi;
// DOI: the prefix 10.<4-9 digits>/ then a run of non-space, non-bracket chars.
// We deliberately include ) here and resolve balance later in stripDoiTail.
const DOI_RE = /\b10\.\d{4,9}\/[^\s"'<>\]]+/g;

function lineNumberOf(text, index) {
  let line = 1;
  for (let i = 0; i < index && i < text.length; i++) if (text[i] === "\n") line++;
  return line;
}

// ── Self-test ────────────────────────────────────────────────────────────────
function selftest() {
  const cases = [
    // [input, validator, expectedClass]
    ["2412.07318", "arxiv", "ok"],
    ["2606.17983", "arxiv", "ok"], // recent/future-ish but plausible → ok
    ["hep-th/9905026", "arxiv", "ok"],
    ["math.GT/0011084", "arxiv", "ok"],
    ["0705.3129.", "arxiv", "ok"], // trailing dot is ordinary prose punctuation → stripped, not warned
    ["9912.00001", "arxiv", "warn"], // YYMM 2099-12 is far-future → warn (well-formed, worth a glance)
    ["2412.073", "arxiv", "error"], // serial too short (3 digits)
    ["9913.00001", "arxiv", "error"], // month 13
    ["0612.00001", "arxiv", "error"], // year 06 predates 0704 scheme
    ["10.1007/JHEP11(2023)109", "doi", "ok"],
    ["10.1103/PhysRevD.111.026014.", "doi", "ok"], // trailing dot stripped silently
    ["10.1007/JHEP12(2023)074),", "doi", "ok"], // unbalanced ) + comma stripped silently
    ["10./bad", "doi", "error"], // no registrant digits
    ["10.1007/", "doi", "error"], // empty suffix
  ];
  let failures = 0;
  for (const [input, kind, expected] of cases) {
    const got = kind === "arxiv" ? classifyArxiv(input) : classifyDoi(input);
    const ok = got.class === expected;
    if (!ok) failures++;
    console.log(`  [${ok ? "PASS" : "FAIL"}] ${kind} ${JSON.stringify(input)} → ${got.class} (expected ${expected})${got.reason ? "  // " + got.reason : ""}`);
  }
  if (failures) {
    console.error(`selftest: ${failures} assertion(s) failed`);
    process.exit(1);
  }
  console.log(`selftest: all ${cases.length} assertions passed`);
  process.exit(0);
}

// ── Optional online liveness probe (never affects exit code) ─────────────────
async function probe(url) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), 8000);
  try {
    const res = await fetch(url, { method: "GET", redirect: "follow", signal: ctrl.signal });
    return res.status;
  } catch (e) {
    return `ERR ${e && e.name === "AbortError" ? "timeout" : (e && e.message) || e}`;
  } finally {
    clearTimeout(t);
  }
}

async function runOnline(arxivIds, doiIds) {
  console.log("\n--online: probing liveness (informational only; does NOT affect exit code)");
  for (const id of arxivIds) {
    const status = await probe(`https://arxiv.org/abs/${id}`);
    if (status !== 200) console.log(`  arXiv ${id}: ${status}`);
  }
  for (const id of doiIds) {
    const status = await probe(`https://doi.org/${id}`);
    if (status !== 200) console.log(`  doi ${id}: ${status}`);
  }
  console.log("--online: done");
}

// ── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  const args = new Set(process.argv.slice(2));
  if (args.has("--selftest")) return selftest();

  const files = walk(ROOT);
  const arxivDistinct = new Set();
  const doiDistinct = new Set();
  const errors = [];
  const warnings = [];

  for (const f of files) {
    const txt = fs.readFileSync(f, "utf8");
    const rel = path.relative(ROOT, f);

    let m;
    ARXIV_RE.lastIndex = 0;
    while ((m = ARXIV_RE.exec(txt))) {
      const res = classifyArxiv(m[1]);
      const loc = `${rel}:${lineNumberOf(txt, m.index)}`;
      if (res.class === "ok" || res.class === "warn") arxivDistinct.add(res.id);
      if (res.class === "error") errors.push(`${loc}  arXiv:${m[1]}  — ${res.reason}`);
      else if (res.class === "warn") warnings.push(`${loc}  arXiv:${m[1]}  — ${res.reason}`);
    }

    DOI_RE.lastIndex = 0;
    while ((m = DOI_RE.exec(txt))) {
      const res = classifyDoi(m[0]);
      const loc = `${rel}:${lineNumberOf(txt, m.index)}`;
      if (res.class === "ok" || res.class === "warn") doiDistinct.add(res.id);
      if (res.class === "error") errors.push(`${loc}  ${m[0]}  — ${res.reason}`);
      else if (res.class === "warn") warnings.push(`${loc}  ${m[0]}  — ${res.reason}`);
    }
  }

  console.log(`md files scanned:    ${files.length}`);
  console.log(`distinct arXiv IDs:  ${arxivDistinct.size}`);
  console.log(`distinct DOIs:       ${doiDistinct.size}`);
  console.log(`errors:              ${errors.length}`);
  console.log(`warnings:            ${warnings.length}`);

  if (errors.length) {
    console.log("\nERRORS (structurally malformed — anti-crank findings):");
    for (const e of errors) console.log(`  ${e}`);
  }
  if (warnings.length) {
    console.log("\nwarnings (formatting only — not a failure):");
    for (const w of warnings) console.log(`  ${w}`);
  }

  if (args.has("--online")) {
    await runOnline([...arxivDistinct], [...doiDistinct]);
  }

  process.exit(errors.length === 0 ? 0 : 1);
}

main();
