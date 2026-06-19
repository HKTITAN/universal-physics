# Plan 008 — Repo hygiene + contribution-pathway completeness

**Written against commit `ad72b5a`.** Priority P2. Effort S.

## Why this matters

The contribution front door (plan 002) exists but has small gaps: no PR template, one-way links between `CONTRIBUTING.md` and the issue templates, no `.gitattributes` for the 6 MB binary PDF (every rebuild makes a large binary diff), and one stale build-instruction comment. These are cheap, safe, high-signal polish items for an open repo inviting outside solvers.

## Scope

**In scope — these files only:**
- `.github/pull_request_template.md` (NEW)
- `.gitattributes` (NEW)
- `CONTRIBUTING.md` (add bidirectional links + a short citation-format note)
- `book/manifest.json` — **only** the stale comment string at the `"notes"` key (~L255); change the count, nothing else.

**Out of scope:** `.github/workflows/ci.yml`, `scripts/`, `site/`, any wiki research content, the book chapter set. Do NOT edit `CHANGELOG.md` (its `~620pp/29ch` line is a correctly-scoped historical record — leave it).

## Current state

- `.github/ISSUE_TEMPLATE/` has `carrier-problem-proof.md`, `attack-track.md`, `config.yml` (`blank_issues_enabled:false`; `contact_links` → CONTRIBUTING + dossier). There is NO `pull_request_template.md`.
- `CONTRIBUTING.md` links to the dossier and states the anti-crank bar (epistemic tags, no fabricated citations, red-team, CHANGELOG) but does not point readers at the issue templates; `config.yml` points back at CONTRIBUTING (one-way).
- `.gitignore` excludes build dirs but there is no `.gitattributes`; `universal-physics-book.pdf` (~6 MB) is committed and rebuilt each iteration.
- `book/manifest.json` ~L255 `"notes"` value says "The ~30 non-synthesis working notes under notes/ are NOT chapters." Actual: 74 notes, ~11 synthesis → ~63 non-synthesis. The "~30" is ~2× wrong.

## Steps

1. **PR template (`.github/pull_request_template.md`).** Mirror the issue-template anti-crank checklist: epistemic tag on every nontrivial claim; no fabricated citation/number/theorem/arXiv ID (every reference web-verified); red-teamed against the relevant no-go theorems AND this wiki's own closures; stable IDs preserved + change logged in `CHANGELOG.md`; note that CI (link + book-manifest + manifest-drift + citation + site build) must be green. Link to `CONTRIBUTING.md` and the dossier.
2. **Bidirectional links (`CONTRIBUTING.md`).** Add a short "Use the issue templates" pointer to `.github/ISSUE_TEMPLATE/carrier-problem-proof.md` and `attack-track.md`, and a 3–4 line "Citation format" note: cite arXiv as `arXiv:YYMM.NNNNN` (or the old `category/NNNNNNN` scheme); never guess a DOI/volume/page — if unsure, cite arXiv-ID-only and add an `[unverified journal-ref]` flag per `EPISTEMICS.md`; CI runs `scripts/check-citations.mjs` on every push.
3. **`.gitattributes`.** Add `universal-physics-book.pdf binary -delta` (and `*.pdf binary -delta`) so git stops attempting deltas on the binary. Keep the PDF tracked (it is a distributed artifact); this only stops pathological diffing/bloat. Optionally add `* text=auto eol=lf` to normalize line endings repo-wide IF that won't churn the tree — verify with `git add --renormalize --dry-run`-style caution; if it would rewrite many files, SKIP the `text=auto` line and keep only the PDF rule.
4. **Stale comment (`book/manifest.json` ~L255).** Change "~30 non-synthesis working notes" to an accurate, less-brittle phrasing, e.g. "Most of the 74 working notes under notes/ are NOT chapters (only the synthesis notes listed above are)." Do not alter any other key.
5. Verify: `node scripts/check-book-manifest.mjs` still exits 0 (you only touched a comment string, but confirm the JSON still parses). `git status` shows only the intended files.

## Done criteria

- `.github/pull_request_template.md` and `.gitattributes` exist with the content above.
- `CONTRIBUTING.md` links to both issue templates and carries the citation-format note.
- `book/manifest.json` parses (`node -e "require('./book/manifest.json')"` succeeds) and the notes-comment count is corrected.
- `node scripts/check-book-manifest.mjs` exits 0.

## Maintenance note

The PR template references the new checkers (manifest-drift, citation) — consistent once plans 004/005 land. If line endings ever cause noise, revisit `.gitattributes text=auto` deliberately.

## Escape hatches

- If `* text=auto eol=lf` would renormalize many files (large diff), DROP that line — ship only the PDF binary rule. A line-ending churn is not worth it here.
- Do NOT edit `CHANGELOG.md` or any chapter content. The only `book/manifest.json` edit allowed is the one comment string.
