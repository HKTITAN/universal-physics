/**
 * Copies the wiki's markdown content from the repo root (../) into site/content/
 * so the Next.js build (whose project root is site/) is self-contained.
 * Runs automatically via the prebuild / predev npm hooks.
 */
import { cpSync, mkdirSync, rmSync, readdirSync, copyFileSync, existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const siteRoot = resolve(here, "..");
const repoRoot = resolve(siteRoot, "..");
const dest = join(siteRoot, "content");

if (!existsSync(join(repoRoot, "CONCLUSION.md"))) {
  console.error(
    "prepare-content: could not find the wiki at " +
      repoRoot +
      " (expected CONCLUSION.md). Is the site checked out inside the universal-physics repo?"
  );
  process.exit(1);
}

rmSync(dest, { recursive: true, force: true });
mkdirSync(dest, { recursive: true });

// 1. root-level .md files
let n = 0;
for (const entry of readdirSync(repoRoot, { withFileTypes: true })) {
  if (entry.isFile() && entry.name.endsWith(".md")) {
    copyFileSync(join(repoRoot, entry.name), join(dest, entry.name));
    n++;
  }
}

// 2. domains/ and notes/
for (const dir of ["domains", "notes"]) {
  const src = join(repoRoot, dir);
  if (existsSync(src)) {
    cpSync(src, join(dest, dir), {
      recursive: true,
      filter: (p) => !p.endsWith(".pdf"),
    });
    n++;
  }
}

console.log(`prepare-content: copied wiki content into site/content/ (${n} top-level items).`);
