# Plan 001: Fix the 15 broken internal links, add a link-checker, and gate the repo with CI

> **Executor instructions**: Follow step by step. Run every verification command and confirm its expected result before the next step. If a "STOP condition" occurs, stop and report — do not improvise. When done, set this plan's row in `plans/README.md` to DONE (unless a reviewer told you they maintain the index).
>
> **Drift check (run first)**: `git diff --stat 71d585f..HEAD -- notes/2026-06-08-iter3-de-sitter-first-law-attempt.md notes/2026-06-08-iter5-op48c-collarfree-composition.md` — if either file changed since `71d585f`, re-confirm the "Current state" link lines below before editing.

## Status
- **Priority**: P1
- **Effort**: M
- **Risk**: LOW
- **Depends on**: none
- **Category**: docs / dx
- **Planned at**: commit `71d585f`, 2026-06-19

## Why this matters
The repo is a public research wiki (github.com/HKTITAN/universal-physics) and a built website + book, all generated from the same markdown. A read-only sweep found **15 broken internal links** in two early notes — they point to files that were never created (pre-publication path conventions). A reader or a would-be contributor following them hits a dead end, and the site renders dead links. There is also **no CI**: nothing prevents the next broken link, a `book/manifest.json` chapter-number collision, or a site build break from landing — which is unacceptable once outside contributors start opening PRs (the whole point of plan 002). This plan fixes the existing breaks, adds a link-checker, and wires both into GitHub Actions so every push/PR is validated.

## Current state
Two notes contain all 15 broken links. The targets fall into three classes:

1. **Clear renames** — fix the path:
   - `../open-problems.md` → `../OPEN_PROBLEMS.md` (3 occurrences in `notes/2026-06-08-iter5-op48c-collarfree-composition.md`, lines 22, 164)
   - `../verdicts.md` → `../CONCLUSION.md` (2 occurrences in the same file, lines 89, 165)
2. **Targets that were never created** — these reference domain pages and predecessor notes that do not exist in the repo (the `domains/` dir has only: classical-mechanics, cosmology, general-relativity, information-theory, mathematics, particle-physics, quantum-field-theory, quantum-mechanics, statistical-mechanics, thermodynamics; there are no `iter2` notes and no `2026-05-xx` note). **De-link these**: replace the markdown link `[TEXT](DEAD.md)` with just `TEXT` (keep the visible text, drop the link), so the prose is preserved with no dead link. The dead targets are:
   - `../domains/holography.md`, `../domains/de-sitter.md`, `../domains/algebraic-qft.md` (in `notes/2026-06-08-iter3-de-sitter-first-law-attempt.md`, lines 253–255)
   - `2026-06-07-iter2-algebraic-background-independence.md`, `2026-06-07-iter2-de-sitter-first-law.md` (same file, lines 151, 256, 257)
   - `../domains/operator-algebras.md`, `../domains/quantum-foundations.md`, `2026-05-xx-iter4-op48-split-composition.md` (in `notes/2026-06-08-iter5-op48c-collarfree-composition.md`, lines 22, 166, 167, 168)

Exemplar of an existing valid cross-link to match (do NOT de-link valid ones): `[CONCLUSION.md](../CONCLUSION.md)` and `[OPEN_PROBLEMS.md](../OPEN_PROBLEMS.md)` as used throughout `notes/2026-06-19-iter15-carrier-problem-dossier.md`.

Build/verify commands that already work in this repo (from `site/package.json` and `book/`):
- Site build/typecheck: `cd site && node scripts/prepare-content.mjs && npm run build`
- Book manifest is `book/manifest.json` (parts → chapters with a `number` field, must be contiguous 1..N, no dupes; each chapter `sources[]` path must exist relative to repo root).

## Commands you will need
| Purpose | Command | Expected |
|---|---|---|
| Link check | `node scripts/check-links.mjs` | exit 0, "broken internal links: 0" |
| Book manifest validate | `node scripts/check-book-manifest.mjs` | exit 0, "chapters contiguous; all sources exist" |
| Site build | `cd site && node scripts/prepare-content.mjs && npm run build` | "Compiled successfully", exit 0 |

## Scope
**In scope** (only these):
- `notes/2026-06-08-iter3-de-sitter-first-law-attempt.md` (fix links)
- `notes/2026-06-08-iter5-op48c-collarfree-composition.md` (fix links)
- `scripts/check-links.mjs` (create)
- `scripts/check-book-manifest.mjs` (create)
- `.github/workflows/ci.yml` (create)
- `plans/README.md` (status row only)

**Out of scope** (do NOT touch): any other `.md` content; `site/`, `book/` source beyond running their build; the `book/manifest.json` data itself (the checker only *reads* it); `site/lib/manifest.ts`.

## Git workflow
- Branch: `advisor/001-link-integrity-ci`.
- Commit per logical unit. Message style matches the repo (imperative subject; the repo uses a `Co-Authored-By:` trailer — include `Co-Authored-By: Claude <noreply@anthropic.com>` if you commit). Do NOT push or open a PR unless the operator says so.

## Steps

### Step 1: Fix the renames in `notes/2026-06-08-iter5-op48c-collarfree-composition.md`
Replace every `](../open-problems.md)` with `](../OPEN_PROBLEMS.md)` and every `](../verdicts.md)` with `](../CONCLUSION.md)` in that file only. Also update the link *text* `../verdicts.md` → `CONCLUSION.md` where it appears as visible text in a See-also bullet (line ~165).
**Verify**: `grep -n "open-problems.md\|verdicts.md" notes/2026-06-08-iter5-op48c-collarfree-composition.md` → no matches.

### Step 2: De-link the never-created targets in both notes
For each dead target listed in "Current state" class 2, replace the markdown link `[TEXT](DEAD)` with plain `TEXT`. Example: `See [2026-06-07-iter2-algebraic-background-independence.md](2026-06-07-iter2-algebraic-background-independence.md).` → `See the iteration-2 algebraic-background-independence verdict.` Keep the See-also bullets as plain text lines (drop the `- [..](..)` link syntax, keep the descriptive text after the em-dash). Do not invent replacement targets.
**Verify**: (after Step 4's checker exists) `node scripts/check-links.mjs` → "broken internal links: 0".

### Step 3: Create `scripts/check-links.mjs`
A Node ESM script that walks all `.md` files under the repo root (skipping `node_modules`, `.git`, `.next`, `site/content`, `book/dist`), extracts every markdown link `[..](target)`, ignores external (`http(s):`, `mailto:`, `#`-anchors) and non-`.md`/`.canvas`/`.pdf` targets, strips any `#anchor`, resolves the target relative to the linking file, and reports any that do not exist. Exit 1 with a list if any are broken; exit 0 and print `broken internal links: 0` otherwise. (A working reference implementation was used during recon — reproduce that behavior.)
**Verify**: `node scripts/check-links.mjs` → exit 0, `broken internal links: 0` (after Steps 1–2).

### Step 4: Create `scripts/check-book-manifest.mjs`
A Node ESM script that reads `book/manifest.json`, collects every chapter `number` across all `parts[].chapters[]`, asserts they are contiguous `1..N` with no duplicates, and asserts every `sources[]` path (and every part `opener`, if present) exists relative to the repo root. Exit 1 with the offending item on failure; else print `chapters contiguous (1..N); all sources exist` and exit 0.
**Verify**: `node scripts/check-book-manifest.mjs` → exit 0.

### Step 5: Create `.github/workflows/ci.yml`
GitHub Actions, triggered on `push` and `pull_request`. One job `validate` on `ubuntu-latest`, Node 20: checkout; `node scripts/check-links.mjs`; `node scripts/check-book-manifest.mjs`; then `cd site && npm ci && node scripts/prepare-content.mjs && npm run build`. (Do not attempt the Paged.js/Chrome book PDF render in CI — it needs system Chrome; the manifest check is the book gate.)
**Verify**: `node -e "require('js-yaml')" 2>/dev/null || true` is not required; instead confirm the file is valid YAML by eye and that the three script/build commands above each pass locally.

## Done criteria
ALL must hold:
- [ ] `node scripts/check-links.mjs` exits 0 and prints `broken internal links: 0`
- [ ] `node scripts/check-book-manifest.mjs` exits 0
- [ ] `cd site && node scripts/prepare-content.mjs && npm run build` compiles successfully
- [ ] `.github/workflows/ci.yml` exists and runs the three checks above on push + pull_request
- [ ] `git status` shows only the in-scope files changed
- [ ] `plans/README.md` row 001 set to DONE

## STOP conditions
Stop and report if: a "rename" target (`OPEN_PROBLEMS.md`, `CONCLUSION.md`) does not exist at the repo root (it should); the link-checker reports broken links you cannot resolve by rename-or-delink without inventing a target; the site build fails for a reason unrelated to your link edits; or `book/manifest.json` is already non-contiguous (that is a pre-existing bug — report it, don't fix it here).

## Maintenance notes
- The link-checker is intentionally strict on `.md`/`.canvas`/`.pdf` targets only; if image or other asset links are added later, extend the extension allow-list.
- When future iterations add notes + manifest entries, CI will now catch a missing `sources[]` file or a chapter-number collision before merge — the integration scripts should keep numbering contiguous.
- A reviewer should confirm the de-linked prose still reads cleanly (no dangling "See ." fragments).
