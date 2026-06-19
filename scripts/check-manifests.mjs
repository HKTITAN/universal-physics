#!/usr/bin/env node
// Read-only cross-manifest drift checker for the universal-physics wiki.
//
// The repo keeps THREE views of "what pages are published" that must agree:
//   (1) the actual .md files on disk (root *.md + notes/** + domains/**),
//   (2) the static CHAPTERS/FLAT/LINK_MAP lists in site/lib/manifest.ts,
//   (3) the book sources in book/manifest.json.
// Adding a note means hand-editing static lists; nothing checked they stayed
// in sync until now. This asserts three invariants and exits 1 on any drift:
//   (A) site manifest -> disk:  every `file:` path in site/lib/manifest.ts exists.
//   (B) disk -> site manifest:  every publishable vault .md is referenced by the
//       site manifest (as a `file:` entry OR a LINK_MAP key), minus an allow-list.
//   (C) book -> site:           every book wiki-page source also appears in the
//       site manifest (book/** internals and README.md are special-cased out).
//
// Pure node:* , no deps. Mirrors scripts/check-links.mjs / check-book-manifest.mjs.
// `--selftest` runs the pure assertion functions against synthetic fixtures to
// confirm each invariant fires; it is NOT wired into CI.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

// Directories that hold files which are intentionally NOT published to the site:
// build artifacts, the book's internal markdown, advisor scratch (plans/), the
// Obsidian vault config, and the site app itself (its own content/ is generated).
const EXCLUDED_DIRS = new Set([
  "node_modules",
  ".git",
  ".next",
  ".vercel",
  "dist",
  "content",
  "site",
  "book",
  "plans",
  ".obsidian",
]);

// Publishable vault .md files that are rendered via a TSX landing page (so they
// live in LINK_MAP, not FLAT). These are still "covered" for invariant (B); the
// list exists so a future maintainer can see exactly which pages are special.
// README.md and index.md both resolve to "/" and are also covered via LINK_MAP.
const SITE_TSX_ALLOWLIST = new Set([
  "CONTRIBUTING.md", // -> /contribute  (TSX landing page)
  "LICENSE.md", // -> /about#license  (rendered inside the About page)
]);

// Book sources that are NOT repo wiki pages and so are exempt from invariant (C):
// anything under book/** (the book's own front/back matter) plus README.md, which
// the site special-cases to "/" rather than a /manual/ slug.
const BOOK_SOURCE_EXEMPT = (src) =>
  src.startsWith("book/") || src.toLowerCase() === "readme.md";

// ---------------------------------------------------------------------------
// Pure helpers (exercised by --selftest)
// ---------------------------------------------------------------------------

/** Extract every `file: "<path>"` literal from site/lib/manifest.ts source text. */
export function extractSiteFiles(manifestSrc) {
  const re = /\bfile:\s*["'`]([^"'`]+)["'`]/g;
  const out = [];
  let m;
  while ((m = re.exec(manifestSrc))) out.push(m[1]);
  return out;
}

/** Extract the set of LINK_MAP keys (bare quoted "<name>.md": entries). */
export function extractLinkMapKeys(manifestSrc) {
  const re = /["'`]([a-z0-9._/-]+\.md)["'`]\s*:/gi;
  const out = new Set();
  let m;
  while ((m = re.exec(manifestSrc))) out.add(m[1].toLowerCase());
  return out;
}

/** Invariant (A): site `file:` paths that do not exist on disk. */
export function invariantA(siteFiles, existsFn) {
  return siteFiles.filter((p) => !existsFn(p));
}

/**
 * Invariant (B): publishable vault files not covered by the site manifest.
 * A file is "covered" if it appears as a `file:` entry, a LINK_MAP key, or in
 * the TSX allow-list. Paths are compared lowercased (LINK_MAP is lowercased).
 */
export function invariantB(vaultFiles, siteFiles, linkMapKeys, allowlist) {
  const covered = new Set(siteFiles.map((p) => p.toLowerCase()));
  for (const k of linkMapKeys) covered.add(k.toLowerCase());
  const allow = new Set([...allowlist].map((p) => p.toLowerCase()));
  return vaultFiles.filter(
    (p) => !covered.has(p.toLowerCase()) && !allow.has(p.toLowerCase()),
  );
}

/**
 * Invariant (C): book wiki-page sources missing from the site manifest.
 * `siteCovered` is the lowercased set of every site `file:` path + LINK_MAP key.
 */
export function invariantC(bookSources, siteCovered, exemptFn) {
  return bookSources.filter(
    (s) => !exemptFn(s) && !siteCovered.has(s.toLowerCase()),
  );
}

// ---------------------------------------------------------------------------
// Disk scanning
// ---------------------------------------------------------------------------

/** Repo-root-relative list of publishable vault .md files (root + notes + domains). */
function listVaultFiles() {
  const out = [];
  // root *.md
  for (const e of fs.readdirSync(ROOT, { withFileTypes: true })) {
    if (e.isFile() && e.name.endsWith(".md")) out.push(e.name);
  }
  // notes/** and domains/** (recursive, skipping excluded dirs defensively)
  for (const sub of ["notes", "domains"]) {
    const base = path.join(ROOT, sub);
    if (!fs.existsSync(base)) continue;
    const walk = (dir) => {
      for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
        if (EXCLUDED_DIRS.has(e.name)) continue;
        const p = path.join(dir, e.name);
        if (e.isDirectory()) walk(p);
        else if (e.name.endsWith(".md")) {
          out.push(path.relative(ROOT, p).split(path.sep).join("/"));
        }
      }
    };
    walk(base);
  }
  return out;
}

function readBookSources() {
  const m = JSON.parse(
    fs.readFileSync(path.join(ROOT, "book", "manifest.json"), "utf8"),
  );
  const srcs = new Set();
  const add = (arr) => {
    for (const s of arr || []) srcs.add(s);
  };
  for (const part of m.parts || []) {
    for (const ch of part.chapters || []) add(ch.sources);
  }
  for (const bm of m.backMatter || []) add(bm.sources);
  for (const fm of m.frontMatter || []) add(fm.sources);
  return [...srcs];
}

// ---------------------------------------------------------------------------
// Self-test: feed synthetic fixtures through the pure assertions
// ---------------------------------------------------------------------------

function selftest() {
  let failures = 0;
  const assert = (cond, msg) => {
    if (!cond) {
      console.error(`  SELFTEST FAIL: ${msg}`);
      failures++;
    }
  };

  const fakeSrc = `
    export const CHAPTERS = [
      { file: "REAL.md" },
      { file: "notes/__does_not_exist__.md" },
      { file: "domains/real-domain.md" },
    ];
    export const LINK_MAP = { "license.md": "/about#license", "contributing.md": "/contribute" };
  `;
  const siteFiles = extractSiteFiles(fakeSrc);
  assert(siteFiles.length === 3, `extractSiteFiles found ${siteFiles.length}, want 3`);
  const linkKeys = extractLinkMapKeys(fakeSrc);
  assert(linkKeys.has("license.md") && linkKeys.has("contributing.md"),
    `extractLinkMapKeys missing keys: ${[...linkKeys].join(",")}`);

  // (A): only REAL.md and domains/real-domain.md "exist".
  const existsFn = (p) => p === "REAL.md" || p === "domains/real-domain.md";
  const aMiss = invariantA(siteFiles, existsFn);
  assert(aMiss.length === 1 && aMiss[0] === "notes/__does_not_exist__.md",
    `invariantA expected the fake missing file, got [${aMiss.join(", ")}]`);

  // (B): an on-disk orphan note not referenced anywhere should be reported;
  // LICENSE.md is allow-listed; REAL.md is a file: entry, so both are covered.
  const vault = ["REAL.md", "LICENSE.md", "notes/orphan-note.md", "CONTRIBUTING.md"];
  const bOrphans = invariantB(vault, siteFiles, linkKeys, new Set(["LICENSE.md"]));
  assert(bOrphans.length === 1 && bOrphans[0] === "notes/orphan-note.md",
    `invariantB expected the orphan note, got [${bOrphans.join(", ")}]`);

  // (C): a book wiki source absent from the site is reported; book/** + README exempt.
  const siteCovered = new Set([
    ...siteFiles.map((p) => p.toLowerCase()),
    ...linkKeys,
  ]);
  const bookSrcs = [
    "REAL.md", // in site -> ok
    "book/frontmatter/preface.md", // exempt
    "README.md", // exempt
    "notes/book-only.md", // missing from site -> reported
  ];
  const cMiss = invariantC(bookSrcs, siteCovered, BOOK_SOURCE_EXEMPT);
  assert(cMiss.length === 1 && cMiss[0] === "notes/book-only.md",
    `invariantC expected the book-only page, got [${cMiss.join(", ")}]`);

  if (failures) {
    console.error(`SELFTEST: ${failures} assertion(s) failed`);
    process.exit(1);
  }
  console.log("SELFTEST: all invariant assertions fired correctly");
  process.exit(0);
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

if (process.argv.includes("--selftest")) {
  selftest();
}

const manifestSrc = fs.readFileSync(
  path.join(ROOT, "site", "lib", "manifest.ts"),
  "utf8",
);
const siteFiles = extractSiteFiles(manifestSrc);
const linkMapKeys = extractLinkMapKeys(manifestSrc);

// Escape hatch: regex extraction must actually find the manifest entries.
if (siteFiles.length < 50) {
  console.error(
    `site/lib/manifest.ts: extracted only ${siteFiles.length} file: entries ` +
      `(expected ~100). Extraction is unreliable — refusing to run a vacuous ` +
      `check. Inspect the manifest structure.`,
  );
  process.exit(1);
}

const vaultFiles = listVaultFiles();
const bookSources = readBookSources();
const siteCovered = new Set([
  ...siteFiles.map((p) => p.toLowerCase()),
  ...linkMapKeys,
]);

const existsFn = (p) => fs.existsSync(path.resolve(ROOT, p));
const aMissing = invariantA(siteFiles, existsFn);
const bOrphans = invariantB(vaultFiles, siteFiles, linkMapKeys, SITE_TSX_ALLOWLIST);
const cBookOnly = invariantC(bookSources, siteCovered, BOOK_SOURCE_EXEMPT);

console.log(`site/lib/manifest.ts: ${siteFiles.length} file: entries, ${linkMapKeys.size} LINK_MAP .md keys`);
console.log(`vault publishable .md files scanned: ${vaultFiles.length}`);
console.log(`book/manifest.json sources: ${bookSources.length}`);
console.log("");
console.log(`(A) site file: entries missing on disk:        ${aMissing.length}`);
for (const p of aMissing) console.log(`      ${p}`);
console.log(`(B) vault .md not in site manifest (orphans):  ${bOrphans.length}`);
for (const p of bOrphans) console.log(`      ${p}`);
console.log(`(C) book wiki sources missing from site:       ${cBookOnly.length}`);
for (const p of cBookOnly) console.log(`      ${p}`);

const failed = aMissing.length + bOrphans.length + cBookOnly.length;
if (failed) {
  console.error(`\nMANIFEST DRIFT: ${failed} issue(s) across invariants A/B/C.`);
  process.exit(1);
}
console.log("\nall three manifest views agree");
process.exit(0);
