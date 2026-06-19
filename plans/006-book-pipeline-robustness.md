# Plan 006 — Book pipeline robustness (fail-loud + cross-ref check + verify.js + schema)

**Written against commit `ad72b5a`.** Priority P2. Effort M.

## Why this matters

The book is a 791-page, 38-chapter PDF built in two stages (`node book/build.js` → `book/dist/book.html`, then `pagedjs-cli` → `universal-physics-book.pdf`). Several silent-failure modes exist: (1) `build.js` reads manifest sources with bare `fs.readFileSync` — a missing source throws a generic `ENOENT` with no "which chapter" context; (2) nothing validates that internal cross-reference anchors (`#ch-N`, `#bm-ID`) actually resolve; (3) `verify.js` checks only page-size/count, so a build that dropped a chapter or rendered KaTeX errors still "passes"; (4) `book/manifest.json` declares `"$schema": "./manifest.schema.json"` but **that file does not exist**, so the declaration is dead. Each is a credibility risk for a project whose entire point is rigor.

## Scope

**In scope — these files only:**
- `book/build.js` (add fail-loud + post-render cross-ref check)
- `book/verify.js` (extend assertions)
- `book/manifest.schema.json` (NEW — create the referenced schema)
- `book/manifest.json` — **read only** except you may NOT change chapter content; touching it is out of scope here (the stale `~30 notes` comment is handled by plan 008).

**Out of scope:** the PDF itself (the integrator rebuilds it), `scripts/`, `site/`, `.github/`. Do NOT run `pagedjs-cli` (needs system Chrome) — you may run `node book/build.js` (stage 1 only, safe) and `node book/verify.js` against the EXISTING committed PDF.

## Current state

- `book/build.js`: `loadRaw(rel)` at ~L29-33 does `fs.readFileSync(path.resolve(REPO, rel))` with no try/catch. The manifest is walked (`parts[].chapters[].sources[]`, `backMatter`) around L240-295. Backmatter has an asymmetry: `about` uses `bm.source` (singular, manifest L433) while others use `bm.sources[]` (plural) — build.js L283 vs L288 branch on this. Link rewriting (`rewriteLink`) builds `#ch-${n}` / `#bm-${id}` hrefs around L96-150. KaTeX is configured `throwOnError:false, strict:false` (L24) so math errors render as red text silently. The final HTML is written to `book/dist/book.html`.
- `book/verify.js`: loads the PDF via `pdf-lib`, prints `{file, sizeMB, pages, pageSizePts, pageSizeIn}`, checks page 50 size. No threshold assertions, no exit(1) on regression. (Current PDF: 791 pages, 5.99 MB, 6×9in.)
- `book/manifest.json` L2: `"$schema": "./manifest.schema.json"` — **file absent**.

## Steps

1. **Fail-loud sources (build.js).** Wrap `loadRaw` (and any direct `readFileSync` of a manifest source) so a missing/unreadable source throws `Error('book/build.js: chapter/backmatter source not found: <rel> (manifest entry "<title>")')`. Prefer a pre-flight loop right after the manifest is parsed that asserts every `sources[]`/`source` path exists, collecting ALL missing ones and throwing a single listing — mirror how `check-book-manifest.mjs` already does existence checking (reuse its approach).
2. **Cross-reference resolver (build.js, post-render).** After the full HTML string is assembled, before writing it: collect the set of defined anchor ids (every `id="ch-N"`, `id="bm-ID"`, and any `id="..."` the build emits for targets) and the set of referenced targets (every `href="#..."`). Assert every internal `href="#X"` has a matching `id="X"`. On any dangling reference, throw with the list. (This catches a renamed/removed chapter that a cross-ref still points at.) Keep it to INTERNAL `#` anchors only — ignore external `http(s)` links.
3. **verify.js assertions.** Extend so it `process.exit(1)` on regression: assert `pages >= 700` (sanity floor; current 791 — use a floor, not an exact, so legitimate growth passes), assert page size is 6×9in (432×648pt) within tolerance, and assert the PDF text layer contains expected anchors of structure — at minimum search the text for `"Contents"`/TOC and a couple of known part/chapter titles (e.g. the book title, "Bibliography"/"Conclusion"). Use `pdf-lib` only if it can read text; if not, keep the structural checks to what `pdf-lib` exposes (page count, sizes, metadata title/author) and assert those, and add a comment noting text-layer checks would need a different lib. Print a PASS/FAIL summary.
4. **Create `book/manifest.schema.json`.** A minimal but real JSON Schema (draft 2020-12) matching the actual `book/manifest.json` shape: top-level `book`, `conventions`, `frontMatter`, `parts` (array of `{part, title, opener, chapters:[{number, title, sources:[string], trim?}]}`), `backMatter` (array; allow EITHER `source: string` OR `sources: [string]` to match the current `about` asymmetry — document the asymmetry in a schema `description`). Validate it parses and that `book/manifest.json` conforms — if you add `ajv` you MUST keep it a `book/`-local devDependency and NOT wire it into root CI (the integrator decides CI); simpler: write the schema for editor/tooling use and have `check-book-manifest.mjs`-style validation remain JS. Do NOT add a heavy validation dependency to the build path.
5. Run `node book/build.js` (stage 1) — it must still succeed and write `book/dist/book.html`. Run `node book/verify.js` against the existing committed PDF — it must PASS. **Do not** run pagedjs-cli.

## Done criteria

- `node book/build.js` exits 0, writes `book/dist/book.html`, and now FAILS LOUDLY (clear message naming the source + chapter) if a manifest source is temporarily renamed (demonstrate, then restore).
- The cross-ref check passes on the current content and would throw on a synthetic dangling `#ch-999`.
- `node book/verify.js` exits 0 on the current PDF and would exit 1 if `pages` dropped below the floor.
- `book/manifest.schema.json` exists and `book/manifest.json` validates against it (demonstrate with a one-off `ajv` run or a hand check); the dead `$schema` reference is now live.

## Maintenance note

These guards make a broken book build fail at build time instead of at "someone finally reads the PDF." When chapters are added, the page floor in `verify.js` and the schema stay valid (floors and structural shape don't churn). Keep `pagedjs-cli` out of CI (system-Chrome dependency).

## Escape hatches

- If `pdf-lib` cannot read the text layer, do NOT add Puppeteer/pdf.js to verify.js — keep the structural checks to page count/size/metadata and note the limitation in a comment. Partial hardening beats a heavy new dependency.
- If the cross-ref scan produces false positives because the build emits anchors you didn't account for, widen the "defined ids" collection to match reality; do not disable the check.
- Do NOT alter any chapter's rendered content or the manifest's chapter set.
