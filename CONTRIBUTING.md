# Contributing to Universal Physics

This is a live, adversarially-refereed research wiki toward a universal theory of physics. Contributions are welcome — from typo fixes to full attack tracks on the open problems. The bar is **proper backing**, not credentials.

## The contribution bar (non-negotiable)

Everything in this wiki obeys [EPISTEMICS.md](EPISTEMICS.md) and the verification protocol in [AGENTS.md](AGENTS.md) §4. In short:

1. **Tag every nontrivial claim** with exactly one of `[ESTABLISHED]` / `[INFERENCE]` / `[SPECULATIVE]` / `[OPEN]` / `[CONTESTED]`. Never let speculation wear established clothes.
2. **Never fabricate a citation, number, theorem, or arXiv ID.** Verify every reference against the live source; mark anything you couldn't verify `[unverified]`. A missing reference is acceptable; a fake one is disqualifying.
3. **Red-team your own claim** against the relevant no-go theorems (Weinberg–Witten, Coleman–Mandula/HLS, Haag, Bell/PBR/Kochen–Specker, Reeh–Schlieder, the singularity theorems, unitarity/causality bounds) — and against this wiki's own closures (the dS cardinality no-go; HYP-CKV-VACUITY; the OP-48c conditional no-go). Do not re-derive what is already closed.
4. **A candidate framework that "explains everything and predicts nothing" fails by construction.**
5. **Enrich pages in place.** Stable IDs (`OP-n`, `GC-n`, `Hn`, `A-n`, named `HYP-*`) are permanent; new items take the next free ID. Log every change in [CHANGELOG.md](CHANGELOG.md). Cross-link.

## Where help is most valuable right now

The analytical program is saturated; the verdict moves only on **new input**. The open levers (see [CONCLUSION.md](CONCLUSION.md) §5 and [EXPERIMENT_WATCHLIST.md](EXPERIMENT_WATCHLIST.md)):

- **The verdict-flipper:** derive the indefinite pairing (Krein η / a canonical (n,n) operator class) from (algebra, state) modular data — no symmetry, η-form, foliation, twist, indefinite-pairing axiom, or signature-valued template installed by hand. Any serious sketch reopens the capstone.
- **OP-44:** the order-$G_N^2$ proof obligation (quadratic boost linearization-instability constraints) — the one named decidable analytical step.
- **OP-49 residual:** the stated SVD-entropy hemisphere computation.
- **OP-50:** the closed-universe Hilbert-space dispute — theorems on any branch.
- **Watchlist maintenance:** new bounds/results in any channel (DESI/Euclid w(z), GQuEST, CQ-gravity squeezes, collapse bounds, GW nulls, BMV progress), with citations.
- **Lint:** broken links, stale numbers, tag inconsistencies, `[unverified]` references you can resolve to a DOI.

## Process

1. Fork → branch → PR against `main`.
2. PRs that add or change claims must include: epistemic tags, verified citations, the CHANGELOG entry, and (for new frameworks/hypotheses) the §4 referee self-report (no-gos checked, severity self-assessment).
3. PRs are reviewed against the protocol above. "We do not know, stated precisely" is a publishable result here; overclaiming is not.

## Authorship

Research direction: **Harshit Khemani**. Research labor: **Claude** (Anthropic), via multi-agent workflows. Contributors are credited in CHANGELOG entries and git history.

Website: [universal-physics.khe.money](https://universal-physics.khe.money) · License: [CC BY-SA 4.0 (content) + MIT (code)](LICENSE.md)
