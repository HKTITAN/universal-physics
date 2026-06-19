#!/usr/bin/env node
// Read-only internal-link integrity check for the universal-physics wiki.
// Scans every .md file for markdown links and reports any internal .md/.canvas/.pdf
// target that does not exist on disk. Exits 1 if any are broken, 0 otherwise.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
// Skip build artifacts and advisor scratch (plans/ holds handoff docs whose
// example links and repo-root-relative instructions are not live wiki links).
const SKIP = new Set(["node_modules", ".git", ".next", "content", "dist", ".vercel", "plans"]);
const LINK_EXT = /\.(md|canvas|pdf)$/i;

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

const files = walk(ROOT);
const linkRe = /\[[^\]]*\]\(([^)]+)\)/g;
const broken = [];

for (const f of files) {
  const txt = fs.readFileSync(f, "utf8");
  let m;
  while ((m = linkRe.exec(txt))) {
    let target = m[1].trim();
    if (/^(https?:|mailto:|#)/i.test(target)) continue; // external / anchor-only
    target = target.split("#")[0].split("?")[0]; // strip anchors / queries
    if (!target || !LINK_EXT.test(target)) continue; // only check md/canvas/pdf links
    const resolved = path.resolve(path.dirname(f), target);
    if (!fs.existsSync(resolved)) {
      broken.push(`${path.relative(ROOT, f)} -> ${m[1]}`);
    }
  }
}

console.log(`md files scanned: ${files.length}`);
console.log(`broken internal links: ${broken.length}`);
for (const b of broken) console.log(`  ${b}`);
process.exit(broken.length === 0 ? 0 : 1);
