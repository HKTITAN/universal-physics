#!/usr/bin/env node
// Read-only validation of book/manifest.json: chapter numbers must be contiguous
// 1..N with no duplicates, and every chapter source (and part opener) must exist.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const manifestPath = path.join(ROOT, "book", "manifest.json");
const m = JSON.parse(fs.readFileSync(manifestPath, "utf8"));

const numbers = [];
const missing = [];
function checkSource(p) {
  if (!p) return;
  if (!fs.existsSync(path.resolve(ROOT, p))) missing.push(p);
}

for (const part of m.parts || []) {
  checkSource(part.opener);
  for (const ch of part.chapters || []) {
    numbers.push(ch.number);
    for (const s of ch.sources || []) checkSource(s);
  }
}
for (const bm of m.backMatter || []) for (const s of bm.sources || []) checkSource(s);
for (const fm of m.frontMatter || []) for (const s of fm.sources || []) checkSource(s);

const sorted = [...numbers].sort((a, b) => a - b);
const dupes = sorted.filter((n, i) => i > 0 && n === sorted[i - 1]);
const contiguous = sorted.every((n, i) => n === i + 1);

const errs = [];
if (dupes.length) errs.push(`duplicate chapter numbers: ${[...new Set(dupes)].join(", ")}`);
if (!contiguous) errs.push(`chapter numbers not contiguous 1..${numbers.length}: got [${sorted.join(", ")}]`);
if (missing.length) errs.push(`missing sources:\n  ${missing.join("\n  ")}`);

if (errs.length) {
  console.error("book/manifest.json INVALID:");
  for (const e of errs) console.error("  " + e);
  process.exit(1);
}
console.log(`chapters contiguous (1..${numbers.length}); all ${numbers.length} chapters' sources exist`);
process.exit(0);
