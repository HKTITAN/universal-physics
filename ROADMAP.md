---
title: Research Roadmap
type: schema
tags: [schema, roadmap, prioritization]
updated: 2026-06-08
---

# Research Roadmap

**Status:** Post-saturation watch-list mode (revised each iteration).
**Last updated:** 2026-06-08

> **Update (post-iteration-5):** the analytical program is **saturated** — five iterations converged on a stable PARTIAL / encodes-not-generates / not-yet-physics verdict, and the one designated verdict-flipping lever (OP-46 Lorentzian non-CKV readout) was executed and did not flip. The standing verdict is consolidated in [CONCLUSION.md](CONCLUSION.md). Active effort now shifts from analysis to **lightweight experiment-tracking** ([EXPERIMENT_WATCHLIST.md](EXPERIMENT_WATCHLIST.md)). The Tier-1/2 analytical items below are retained as a *record of what was attacked and closed*; the only genuinely-open analytical lever is OP-44/OP-CP1 (nonperturbative crossed-product fate, regime boundary $N_\ast$), plus the standing "what would reopen the analysis" trigger in [CONCLUSION.md](CONCLUSION.md) §8.

What to work on next, and why. Items are framed as *questions to resolve* or *artifacts to produce*, prioritized by leverage — how much a credible answer would move the central question of whether a universal theory is possible. Cross-references point to where the work lands.

> Selection principle: prefer questions that are (a) load-bearing for unification, (b) at least partly decidable by existing or near-term evidence or by rigorous math, and (c) currently under-served in this wiki. De-prioritize questions whose answers would change nothing downstream.

---

## Tier 0 — Maintenance & integrity (every iteration)
- **Lint pass** per [AGENTS.md](AGENTS.md): contradictions across pages, stale numbers, orphan pages, missing links, overclaiming, ID integrity.
- **Bibliography verification**: replace every `[unverified]` in [BIBLIOGRAPHY.md](BIBLIOGRAPHY.md) with a checked reference, or remove it.
- **Quantitative refresh**: re-check measured values and tensions (e.g. $H_0$, $S_8$, muon $g\!-\!2$ after lattice/experiment updates) and re-tag in [CONSTANTS_AND_SCALES.md](CONSTANTS_AND_SCALES.md).

## Tier 1 — Highest leverage (drive the central question)
1. **Sharpen the GR↔QFT interface.** Make precise, in [GAPS_AND_CONTRADICTIONS.md](GAPS_AND_CONTRADICTIONS.md), exactly which incompatibilities are *logical* vs *domain-of-validity*. Treat gravity as an effective field theory and document what is actually known to fail (and at what scale) vs assumed to fail.
2. **The black-hole information problem as a decisive test bed.** Track the status of unitarity, the Page curve, island/replica-wormhole results, and what they do and do not establish. This is the cleanest arena where quantum theory and gravity must be reconciled.
3. **The measurement problem, operationalized.** Catalogue what each resolution (decoherence + branching, objective collapse, hidden variables, epistemic/QBist) *costs* and which make distinguishable predictions (e.g. collapse-model bounds from interferometry). Promote anything testable from `[CONTESTED]` toward decidability.
4. **Cosmological-constant problem, stated without folklore.** A careful, regularization-aware account (see [CONSTANTS_AND_SCALES.md](CONSTANTS_AND_SCALES.md)) of what is genuinely puzzling vs an artifact of naive cutoff estimates.

## Tier 2 — Structural / mathematical
5. **Assumption demotion program.** For each `fundamental`/`plausibly-fundamental` entry in [ASSUMPTIONS_LEDGER.md](ASSUMPTIONS_LEDGER.md), ask: is there a derivation that would demote it? Highest-value targets: smooth-continuum spacetime, exact linearity of QM, the Born rule, locality, 3+1 dimensions.
6. **Rigor gap in interacting QFT.** Document the constructive-QFT frontier and the Yang–Mills mass-gap problem; clarify what "the Standard Model exists mathematically" would even require.
7. **Information-theoretic reconstructions of QM.** Evaluate how far axiomatic reconstructions (Hardy; entropic; CBH) actually *explain* the Hilbert-space formalism vs re-encode it.

## Tier 3 — Candidate-framework development (gated by the verification protocol)
8. **Emergent-spacetime program.** Stress-test the entanglement→geometry claim (Ryu–Takayanagi, Jacobson's derivation, tensor networks): what would count as evidence *outside* AdS, and is there a falsifiable prediction? See [HYPOTHESES.md](HYPOTHESES.md), [UNIFICATION_LANDSCAPE.md](UNIFICATION_LANDSCAPE.md).
9. **Distinguishing predictions audit.** For every program in [UNIFICATION_LANDSCAPE.md](UNIFICATION_LANDSCAPE.md), record the single most plausible near-term *distinguishing* observation. Programs with none are flagged accordingly.

## Tier 4 — Empirical anchors to monitor
- Gravitational-wave catalogues (strong-field GR, possible deviations).
- CMB / large-scale-structure surveys (dark sector, inflationary predictions, tensions).
- Precision tests: equivalence-principle, Lorentz-invariance, and constancy-of-constants bounds (each tightens an entry in [ASSUMPTIONS_LEDGER.md](ASSUMPTIONS_LEDGER.md)).
- Collider / flavor / neutrino results bearing on beyond-Standard-Model structure.
- Tabletop quantum-gravity proposals (gravitationally-induced entanglement) and collapse-model bounds.

---

## Method for each iteration
1. Pick a small number of Tier-1/2 items.
2. Fan out reading; write structured findings; **verify adversarially** before promoting any claim (see [AGENTS.md](AGENTS.md) §4).
3. Update the affected pages in place; reconcile [FINDINGS.md](FINDINGS.md); log in [CHANGELOG.md](CHANGELOG.md).
4. Re-ask the central question: did anything move the case for/against a universal theory? Record the delta in [FINDINGS.md](FINDINGS.md).

## See also
- [OPEN_PROBLEMS.md](OPEN_PROBLEMS.md) · [FINDINGS.md](FINDINGS.md) · [AGENTS.md](AGENTS.md)
