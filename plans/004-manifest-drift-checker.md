# Plan 004 — Unified manifest-drift checker + CI wiring

**Written against commit `ad72b5a`.** Priority P1. Effort M. Depends on: none (CI wiring coordinated by integrator).

## Why this matters

The repo has THREE sources of truth for "what pages are published": (1) the actual `.md` files on disk (21 top-level + 74 `notes/` + the `domains/` set), (2) the static `CHAPTERS`/`FLAT`/`LINK_MAP` arrays in `site/lib/manifest.ts`, (3) `book/manifest.json` (`parts[].chapters[].sources[]` + `backMatter[].sources[]`). Adding a note means hand-editing two static lists. Nothing checks that they agree. A note added to the vault but forgotten in `site/lib/manifest.ts` is silently invisible on the site; a `file:` entry pointing at a deleted file 404s at runtime. `check-book-manifest.mjs` only validates the book side. This is the project's single most-cited footgun (see `BIBLIOGRAPHY.md` top-of-file note and the memory).

## Scope

**In scope — create ONE new file:**
- `scripts/check-manifests.mjs` (new, read-only checker)

**Out of scope (DO NOT touch — the integrator wires CI):**
- `.github/workflows/ci.yml` — leave it; the integrator adds the CI step.
- `site/lib/manifest.ts`, `book/manifest.json` — read only, never edit.
- Any wiki content.

## Current state

- `site/lib/manifest.ts` is a TypeScript module (~850 lines). It contains object literals with `file: "<path>"` entries (≈102 of them) plus a `LINK_MAP` near the end mapping bare filenames (e.g. `'contributing.md' -> '/contribute'`, `'readme.md' -> '/'`). The paths in `file:` are repo-root-relative (e.g. `"notes/2026-06-19-iter15-carrier-problem-dossier.md"`, `"FINDINGS.md"`). Because it is `.ts`, do NOT try to `import` it — **extract entries by regex** from the source text: match `/\bfile:\s*["'`]([^"'`]+)["'`]/g` for manifest files and `/["'`]([a-z0-9._-]+\.md)["'`]\s*:/gi` (or read the `LINK_MAP` block) for special-cased files.
- `book/manifest.json` parses as JSON; sources live at `parts[].chapters[].sources[]` and `backMatter[].sources[]`. `book/build.js` resolves them relative to repo root; `README.md` and `book/backmatter/*.md` are valid sources.
- Files on disk that are intentionally NOT published to the site: the `book/` internal markdown (`book/frontmatter/**`, `book/backmatter/**`), `plans/**`, `.obsidian/**`, `MEMORY` files, `MAP.canvas`. Treat `book/`, `plans/`, `.obsidian/`, `node_modules/`, `.git/`, `.next/`, `site/` as excluded directories when scanning "publishable" vault files.
- Existing checkers (`scripts/check-links.mjs`, `scripts/check-book-manifest.mjs`) are the style to match: plain Node ESM (`.mjs`), `node:fs`/`node:path`, no deps, print a summary, `process.exit(1)` on failure, `exit(0)` clean. Read `scripts/check-links.mjs` first and mirror its structure (the SKIP-set pattern, the summary lines).

## Steps

1. Read `scripts/check-links.mjs` and `scripts/check-book-manifest.mjs` to match conventions (ESM, no deps, summary + exit code, the directory SKIP set including `plans`, `node_modules`, `.git`, `.next`, `site`/`content`, `dist`, `.vercel`).
2. Create `scripts/check-manifests.mjs` asserting these invariants:
   - **(A) site manifest → disk:** every `file:` path extracted from `site/lib/manifest.ts` exists on disk (repo-root-relative). Report each missing one.
   - **(B) disk → site manifest:** every publishable vault `.md` (root `*.md` + `notes/**.md` + `domains/**.md`, minus a documented allow-list of files that are intentionally rendered via TSX landing pages — currently `CONTRIBUTING.md` and `LICENSE.md`, which appear in `LINK_MAP` not `FLAT`) appears either as a `file:` entry OR in the `LINK_MAP`. Report orphans.
   - **(C) book → site:** every `book/manifest.json` source that is a repo wiki page (i.e. matches a root `*.md` or `notes/**` or `domains/**` path; EXCLUDE `book/**` internal sources like `book/frontmatter/...` and `README.md` which is special-cased) also appears in the site manifest. Report book-only pages.
   - Make the allow-list and the excluded-dir set explicit named constants at the top with a one-line comment each, so a future maintainer can adjust them.
3. Print a clear summary (counts per invariant) and `process.exit(1)` if ANY invariant fails, listing the offending files; `exit(0)` clean.
4. Run it: `node scripts/check-manifests.mjs`. It MUST pass `exit(0)` against the current tree (the manifests are believed in sync). **If it reports a real drift, STOP and report it to the integrator** rather than editing manifests to silence it — a genuine drift is a finding, not a checker bug.

## Done criteria (machine-checkable)

- `node scripts/check-manifests.mjs` exits `0` against commit `ad72b5a`'s tree and prints per-invariant counts.
- Temporarily appending a fake `file: "notes/__does_not_exist__.md"` to a scratch copy of the manifest text (in-memory test inside the script's own run, or a manual one-off) makes invariant (A) report it and exit `1`. (You may add a tiny `--selftest` mode that runs the assertions against synthetic fixtures and is NOT wired into CI.)
- No dependency added; pure `node:*`.

## Test plan

Add a `--selftest` flag (optional) that feeds synthetic manifest text + a synthetic file list through the assertion functions and confirms each invariant fires. Keep assertion logic in small pure functions so this is easy.

## Maintenance note

When a new note is added, this checker is the gate that catches a missing manifest entry. If the site ever adds a third special-cased TSX page, add it to the allow-list constant. The integrator will wire `node scripts/check-manifests.mjs` into `.github/workflows/ci.yml` after the book-manifest step.

## Escape hatches

- If `site/lib/manifest.ts` structure makes regex extraction unreliable (e.g. computed paths), STOP and report — do not ship a checker that silently matches nothing. Verify your extraction found ≈102 `file:` entries before trusting it.
- If invariant (B) produces a large list of "orphans" that are actually intentional, the allow-list/exclude-set is wrong — widen it conservatively and document why; do not weaken the check to vacuity.
