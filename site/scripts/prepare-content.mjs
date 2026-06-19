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
  // CLI deploys upload only site/ — the wiki sources aren't present remotely.
  // If a pre-generated content/ snapshot was uploaded with the deployment, use it.
  if (existsSync(join(dest, "CONCLUSION.md"))) {
    console.log("prepare-content: wiki sources not found; using the bundled content/ snapshot.");
    process.exit(0);
  }
  console.error(
    "prepare-content: could not find the wiki at " +
      repoRoot +
      " (expected CONCLUSION.md) and no content/ snapshot exists. " +
      "Either check the site out inside the universal-physics repo, or set the Vercel project Root Directory to `site` on a full-repo (git) deployment."
  );
  process.exit(1);
}

rmSync(dest, { recursive: true, force: true });
mkdirSync(dest, { recursive: true });

/** Count the .md files (recursively, excluding .pdf) under a directory. */
function countMarkdown(dir) {
  let n = 0;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) n += countMarkdown(full);
    else if (entry.isFile() && entry.name.endsWith(".md")) n++;
  }
  return n;
}

// 1. root-level .md files — copy each, failing loud on the offending path.
let rootCount = 0;
for (const entry of readdirSync(repoRoot, { withFileTypes: true })) {
  if (entry.isFile() && entry.name.endsWith(".md")) {
    const from = join(repoRoot, entry.name);
    try {
      copyFileSync(from, join(dest, entry.name));
    } catch (err) {
      console.error(`prepare-content: failed to copy ${from}: ${err.message}`);
      process.exit(1);
    }
    rootCount++;
  }
}

// 2. domains/ and notes/ — recursive copy, failing loud on the offending tree.
const dirCounts = {};
for (const dir of ["domains", "notes"]) {
  const src = join(repoRoot, dir);
  if (existsSync(src)) {
    try {
      cpSync(src, join(dest, dir), {
        recursive: true,
        filter: (p) => !p.endsWith(".pdf"),
      });
    } catch (err) {
      console.error(`prepare-content: failed to copy ${src}: ${err.message}`);
      process.exit(1);
    }
    dirCounts[dir] = countMarkdown(join(dest, dir));
  }
}

const dirSummary = Object.entries(dirCounts)
  .map(([dir, count]) => `${count} ${dir}`)
  .join(", ");
const total = rootCount + Object.values(dirCounts).reduce((a, b) => a + b, 0);
console.log(
  `prepare-content: copied ${rootCount} root${dirSummary ? ", " + dirSummary : ""} = ${total} markdown files into site/content/.`
);
