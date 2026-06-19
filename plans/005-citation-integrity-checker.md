# Plan 005 — Citation integrity checker (arXiv/DOI well-formedness) + CI

**Written against commit `ad72b5a`.** Priority P1. Effort M. Depends on: none (CI wiring coordinated by integrator).

## Why this matters

The wiki's whole credibility rests on the anti-crank rule: *never fabricate a citation, number, theorem, or arXiv ID.* There are ≈392 distinct arXiv IDs and a growing set of DOIs across the wiki. Today the only enforcement is manual review. A malformed or fabricated arXiv ID (`arXiv:2099.99999`, `arXiv:1234.5678a`) or a syntactically-broken DOI can enter unnoticed. A cheap, deterministic, offline format checker turns "never fabricate" from a norm into a CI gate, and gives external contributors immediate feedback. (The current corpus is believed clean — 0 malformed — so this is primarily a guard against future drift, plus it catches trailing-punctuation glue that breaks external resolvers.)

## Scope

**In scope — create ONE new file:**
- `scripts/check-citations.mjs` (new, read-only checker; offline by default, optional `--online`)

**Out of scope (DO NOT touch):**
- `.github/workflows/ci.yml` — the integrator wires the CI step.
- Any wiki content / `BIBLIOGRAPHY.md` — read only. If you find a malformed ID, REPORT it; do not "fix" content in this plan.

## Current state

- Citations appear across all `.md` files as `arXiv:YYMM.NNNNN` (post-2007 scheme, e.g. `arXiv:2412.07318`, 4-digit YYMM + 5-digit, occasionally 4-digit serial for old years) and the **old scheme** `arXiv:hep-th/9905026` style (`category/NNNNNNN`). DOIs appear as `10.XXXX/...` (e.g. `10.1007/JHEP11(2023)109`, `10.1103/PhysRevD.111.026014`, `10.1007/s11005-025-02035-7`).
- Real glue/punctuation variance exists, e.g. `arXiv:0705.3129.` (trailing dot), `arXiv:0810.5294 (2009)`. The checker must normalize trailing punctuation (`. , ; ) ]`) off an extracted ID before validating.
- Match `scripts/check-links.mjs` conventions: ESM `.mjs`, `node:fs`/`node:path`, no deps for the default (offline) path. The directory SKIP set: `node_modules`, `.git`, `.next`, `site/content`, `book/dist`, `dist`, `.vercel`, `.obsidian` (scan the source wiki `.md`, not generated copies).

## Steps

1. Read `scripts/check-links.mjs` for structure/conventions.
2. Create `scripts/check-citations.mjs`:
   - Walk all `.md` under repo root excluding the SKIP set.
   - Extract arXiv IDs with a regex covering BOTH schemes; strip trailing punctuation; validate:
     - new scheme: `^\d{4}\.\d{4,5}$` AND the `YYMM` is a sane year-month (month 01–12; year ≥ `07` for 2007+; reject e.g. `2099.99999` only if you can do so without false-positiving future-but-valid — prefer flagging `YY > current+0` and month>12 as malformed, but DO NOT hard-fail on a plausibly-real recent ID; when unsure, classify as `warn`, not `error`).
     - old scheme: `^[a-z-]+(\.[A-Z]{2})?/\d{7}$`.
   - Extract DOIs (`10\.\d{4,9}/\S+`), strip trailing punctuation/markdown, validate the `10.` prefix + registrant + suffix structure.
   - Classify findings as `error` (structurally impossible — fail CI) vs `warn` (formatting-only, e.g. embedded trailing punctuation in source; print but do not fail). Print counts: distinct arXiv IDs, distinct DOIs, errors, warnings.
   - `process.exit(1)` only on `error`-class findings; `exit(0)` otherwise.
   - Add an opt-in `--online` flag (default OFF): when set, HEAD/GET `https://arxiv.org/abs/<id>` and `https://doi.org/<doi>` with a short timeout, log non-200s as informational, and **never** change the exit code based on liveness (network is non-deterministic). Online mode is for manual/nightly use, NOT CI.
3. Run `node scripts/check-citations.mjs`. It MUST exit `0` on the current tree (corpus believed clean). Print the distinct-ID counts (expect ~392 arXiv). **If it reports an `error`-class malformed ID, STOP and report the exact `file:line` to the integrator** — that is a real anti-crank finding, not a checker bug.

## Done criteria (machine-checkable)

- `node scripts/check-citations.mjs` exits `0` on commit `ad72b5a`'s tree and reports a plausible distinct-arXiv count (~390+).
- A synthetic malformed ID (`arXiv:2412.073` — too short; or `arXiv:9913.00001` — month 13) routed through the validator is classified `error` and would exit `1`. Demonstrate via a `--selftest` mode (synthetic strings; NOT wired to CI).
- `--online` runs without throwing when the network is unavailable (it logs and continues; exit code unaffected).
- No runtime dependency for the offline path.

## Test plan

`--selftest`: feed a fixture array of known-good IDs (`2412.07318`, `hep-th/9905026`, `10.1007/JHEP11(2023)109`) and known-bad (`2412.073`, `9913.00001`, `10./bad`) and assert each lands in the right class.

## Maintenance note

This is the automated half of the anti-crank protocol; `plans/003` was the manual sweep. When a referee promotes a DOI, this checker confirms it is at least well-formed. If arXiv changes its ID scheme, update the regex + a comment. Keep `--online` out of CI to preserve determinism.

## Escape hatches

- Do NOT make the year/month bound so strict that it false-positives real recent IDs (the corpus uses 2026 IDs like `2604.16276`, `2606.17983`). When in doubt, `warn` not `error`.
- If extraction finds far fewer than ~392 arXiv IDs, your regex is too narrow — fix it before trusting a green result.
