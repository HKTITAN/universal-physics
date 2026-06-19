<!--
Read CONTRIBUTING.md and AGENTS.md §4 before opening a PR. The analytical
program is at terminal saturation: the verdict moves only on new input. For a
proof attempt on the one open mathematical gate, read the carrier-problem
dossier first:
  notes/2026-06-19-iter15-carrier-problem-dossier.md
"We do not know, stated precisely" is a publishable result here; overclaiming
is not.
-->

## What this PR changes

<!-- One or two sentences. Which registry items (OP-n / GC-n / Hn / A-n /
named HYP-*) or pages does it touch? -->

## Anti-crank checklist (required)

- [ ] Every nontrivial claim carries exactly one epistemic tag: `[ESTABLISHED]` / `[INFERENCE]` / `[SPECULATIVE]` / `[OPEN]` / `[CONTESTED]`.
- [ ] No fabricated citation, number, theorem, or arXiv ID — every reference web-verified against the live source (a missing reference is fine; a fake one is disqualifying). Unresolved bibliographic detail is flagged `[unverified]` per `EPISTEMICS.md` §4.
- [ ] Red-teamed against the relevant no-go theorems (Weinberg–Witten, Coleman–Mandula/HLS, Haag, Bell/PBR/Kochen–Specker, Reeh–Schlieder, the singularity theorems, unitarity/causality bounds) **and** against this wiki's own closures (the dS cardinality no-go; HYP-CKV-VACUITY; the OP-48c conditional no-go; the iter-12 Krein closure). I did not re-derive what is already closed.
- [ ] It does not "explain everything and predict nothing."
- [ ] Stable IDs (`OP-n`, `GC-n`, `Hn`, `A-n`, named `HYP-*`) preserved; any new item takes the next free ID; the change is logged in `CHANGELOG.md`.
- [ ] For a new framework/hypothesis: the AGENTS.md §4 referee self-report is included (no-gos checked, severity self-assessment).

## CI

CI must be green before merge. The current required checks are the **link checker** (`scripts/check-links.mjs`) and the **book-manifest checker** (`scripts/check-book-manifest.mjs`); the **manifest-drift**, **citation**, and **site-build** checks run as they are added. Run the available checkers locally first.

## Pointers

- Contribution bar and process: [CONTRIBUTING.md](../CONTRIBUTING.md)
- The one open mathematical gate (carrier problem), posed formally: [the dossier](../notes/2026-06-19-iter15-carrier-problem-dossier.md)
