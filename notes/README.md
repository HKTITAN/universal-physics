---
title: Research Notes
type: index
tags: [index, notes, research-log]
---

# Research Notes

Dated, deep-dive investigation logs. Each note records one focused research question pursued in an iteration, with full epistemic tagging and an adversarial **referee verdict** on every new claim. Notes are the long-form working memory of the wiki; their distilled conclusions are folded into [FINDINGS.md](../FINDINGS.md) and the registries ([OPEN_PROBLEMS.md](../OPEN_PROBLEMS.md), [ASSUMPTIONS_LEDGER.md](../ASSUMPTIONS_LEDGER.md), [HYPOTHESES.md](../HYPOTHESES.md)).

## Iteration 2 — 2026-06-08
Theme: stress-test the central wager (*causal/algebraic/entanglement structure is more fundamental than metric geometry*) and the foundations of the quantum framework. 38 agents; recent (2020–2026) literature web-verified; 0/25 new claims flagged unsound.

- [de Sitter & emergent spacetime](2026-06-08-de-sitter-and-emergent-spacetime.md) — can holography/entanglement→geometry reach our Λ>0 universe? **Verdict: structural barrier; CLPW Type II₁ is a genuine Λ>0 *entropy* foothold, but no dS RT surface and no dS dynamics-from-entanglement.**
- [Born rule & quantum linearity](2026-06-08-born-rule-and-quantum-linearity.md) — is Born derivable; is linearity fundamental? **Verdict: form forced (Gleason + Busch); quantitative meaning OPEN; deterministic nonlinearity excluded by no-signaling, stochastic collapse the live untested exception.**
- [Tabletop quantum gravity (BMV)](2026-06-08-tabletop-quantum-gravity.md) — would gravitationally-induced entanglement prove gravity is quantum? **Verdict: valid but premise-dependent; falsifies a *class* of classical theories, does not prove graviton quantization.**
- [Entropic & emergent gravity](2026-06-08-entropic-and-emergent-gravity.md) — derivation or analogy? **Verdict: one theorem (Jacobson, given inputs) + a rewriting (Padmanabhan) + a mechanism (Sakharov); Verlinde dark matter contested→disfavored. Corrects an iteration-1 lensing inversion.**
- [Algebraic background-independence](2026-06-08-algebraic-background-independence.md) — does the modular/crossed-product program derive geometry? **Verdict: rigorous reorganization of semiclassical gravity on a fixed background; *encodes*, does not *generate*, geometry.**
- [Unified-program synthesis](2026-06-08-unified-program-synthesis.md) — does it all cohere? **Verdict: PARTIAL — two coherent programs (geometry-from-algebra; is-the-quantum-framework-final) joined by thin bridges (no-signaling/causal-order + BMV as a logical gate); the "it's all information" fusion is refused.**

## Iteration 3 — 2026-06-08
Theme: shift from *surveying* to **attempting** — try to derive the dS first law, formalize encode-vs-generate, attempt to merge Programs A & B, and red-team our own posture. Coherence verdict **unchanged at PARTIAL**; progress real but **negative/structural**.

- [Attempt: de Sitter entanglement first law (OP-41)](2026-06-08-iter3-de-sitter-first-law-attempt.md) — **located the exact obstruction:** dS supplies *one* Killing vector / *one* region, so δS_gen=δ⟨K⟩ gives only the ξ-integrated Hamiltonian constraint (the dS GSL), not the tensor δG_μν; plus a sign-reversed *maximization* (empty dS maximizes S_gen). Jacobson-2015 already gives the local Einstein equation at any Λ but is non-holographic. One un-foreclosed escape: an SO(d+1,1) modular-Hamiltonian family. **OPEN**, not a no-go.
- [Formalize: encode-vs-generate criterion (OP-46)](2026-06-08-iter3-encode-vs-generate-criterion.md) — a decision-usable criterion (graded axes Δ_geo, κ_Φ + a 5-item smuggling checklist); six constructions graded; **none generates Lorentzian spacetime from factorization-free, region-free, symmetric-state-free data** — the encode/generate frontier coincides with the Type III₁ no-factorization fact.
- [Attempt: merge Programs A & B](2026-06-08-iter3-merge-attempt-operational-substrate.md) — **succeeded narrowly, failed deeply:** one (M, ω) substrate non-circularly co-derives the Born *form* + thermal/entropic structure, but the GPT framework-fixing axioms (composition, purification, reversibility) have *no* Type III₁ formulation (candidate-no-go OP-48) — and fail precisely in the no-observer cosmological regime.
- [Red-team: the demotion-and-derivation posture](2026-06-08-iter3-redteam-demotion-and-derivation.md) — 0 fatal, 4 serious cracks: the "fixed cores" are heterogeneous, three conditional (Type III₁ not fixed once gravity is on — Giddings); "demotion-and-derivation" is a *heuristic*, not a falsifiable program; the six-lens "convergence" partly a shared-input streetlight effect; CLPW II₁ is a bounded-area feature, not Λ-diagnostic (KLS: Schwarzschild–dS is II∞×II∞).
- [Iteration-3 synthesis](2026-06-08-iter3-synthesis.md) — verdict + the **empirical falsifiability portfolio** (BMV ~10–20+ yr; objective-collapse decisive by ~2035; DESI w(z) 2–7 yr; LIV/EP null anchors; matter-wave the shared enabling tech). **None of the live channels tests the geometry-from-algebra wager itself** — by the wiki's own standard, *still not yet physics*.

## Iteration 4 — 2026-06-08
Theme: attack the three named decidable problems, **web-verify the literature**, and audit distance-to-conclusion. Verdict **unchanged at PARTIAL** (third consecutive); trend **diminishing**.

- [Attempt: dS first-law SO(d+1,1) escape (OP-41)](2026-06-08-iter4-ds-first-law-escape.md) (+ [raw attempt](2026-06-08-iter4-dS-firstlaw-SO-family-attempt.md)) — **executed and failed:** a finite isometry orbit gives ≤10 global Killing-charge constraints, no Radon inversion to the local δG_μν; promoted toward a scoped near-no-go (HYP-dS-NOMIN-R3, HYP-dS-CARDINALITY). Corroborated by Chen–Xu 2511.00622.
- [Resolve OP-48 (GPT on Type III₁)](2026-06-08-iter4-gpt-type3-resolution.md) — **sharp disjunction:** no-go for exact composition on a single III₁ factor; split-property qualified *yes* that relocates the BW/CHM circularity (HYP-SPLIT-GEOM).
- [Break the modular circularity (OP-46)](2026-06-08-iter4-modular-circularity.md) — **near-vacuous under the standard readout** (Borchers/Wiesbrock + Caminiti et al.; Connes gives only a Riemannian metric — GAP-NCG-LORENTZIAN-SIGNATURE); a non-CKV Lorentzian readout is the live target.
- [Literature refresh](2026-06-08-iter4-literature-refresh.md) — **muon g−2 now SM-consistent** (WP2025, arXiv:2505.21476); the three flagged 2026 preprints all real / web-confirmed; collapse bounds tighter, not closed.
- [Convergence audit](2026-06-08-iter4-convergence-audit.md) — analytical saturation ≈1–3 iterations away; object-level confirmation non-forecastable; recommendation **HYBRID**.
- [Iteration-4 synthesis](2026-06-08-iter4-synthesis.md) — consolidated verdict + next targets.

## Iteration 5 — 2026-06-08 (closing push → saturation)
The closing analytical push. Executed the one designated verdict-flipping move (OP-46 Lorentzian non-CKV readout) — **it did not flip**. Named list settled; **analytical saturation reached**; capstone [../CONCLUSION.md](../CONCLUSION.md) written.

- [OP-48(c) collar-free composition](2026-06-08-iter5-op48c-collarfree-composition.md) — **conditional no-go:** "collar-free + state-independent" and "singles out QM" mutually exclusive on a single III₁ factor (van Luijk embezzlement κ_max).
- [OP-44 nonperturbative crossed-product](2026-06-08-iter5-op44-nonperturbative-crossed-product.md) — **regime-dependent** (boundary N\*); Type III₁-for-any-Λ is a leading-order input, not a fixed nonperturbative core.
- [OP-46 Lorentzian non-CKV readout](2026-06-08-iter5-op46-lorentzian-nonckv-readout.md) — the verdict-flipper: produced the **first emergent Lorentzian metric** (Huang–Ma dS₂) but **signature inherited from symmetry** → did not flip; obstruction now **readout-independent**.
- [Surviving dS routes](2026-06-08-iter5-surviving-dS-routes.md) — pseudo-entropy inherits non-unitarity; Jacobson-in-CLPW re-imports η. Root: the area-entropy coefficient is an input, not an output, everywhere (HYP-dS-CARDINALITY-R1).
- [Iteration-5 synthesis](2026-06-08-iter5-synthesis.md) — **saturation reached; capstone recommended and written.**

## Iteration 6 — 2026-06-10 (new-input iteration)
Theme: the first post-saturation iteration — inject **new 2023–2026 input** (6 research + 4 attack tracks, 22 agents, all adversarially refereed; ~90 findings kept, 0 fatal) and test whether the saturated verdict survives contact with the field. **It does: headline unchanged for the fifth consecutive iteration; hedges restructured** (OP-48c shrunk; OP-49 closed-negative; HYP-ENCODING-SCREEN added; obstruction now four readout families). Synthesis: [iteration-6 synthesis](2026-06-10-iter6-synthesis.md).

- [Distinguishing-prediction hunt (attack)](2026-06-10-iter6-distinguishing-prediction-hunt.md) — can ANY published channel distinguish the wager even in principle? **Verdict: no — and the no-test fact is now a corollary of encode-not-generate (ENCODING-SCREEN), inheriting the OP-46 MEDIUM hedge; a class test would need a "reverse Weinberg–Witten" theorem (none exists); GQuEST added as a decision-grade EFT-breakdown channel, not a wager test.**
- [Generation-construction survey (attack)](2026-06-10-iter6-generation-construction-survey.md) — does any construction generate Lorentzian signature? **Verdict: no — causal fermion systems are a fourth readout family closing at the same signature-installation step ((≤n,≤n) axiom = relocated Krein η); new selection-type pattern (Lee 2020) generates only the *choice*; HYP-CKV-VACUITY-R3; target compresses to deriving the indefinite pairing from modular data.**
- [OP-44 / OP-48c levers (attack)](2026-06-10-iter6-op44-op48c-levers.md) — move the two residual analytical levers. **Verdict: both moved, neither flips — JRS no-commutant + crossed-product rigidity; order-G_N² obligation located (quadratic boost constraints); horn C partially discharged (theorem-shaped under the full-pair reading; residue = formalization choice + III₁-embezzlement alternative).**
- [OP-49 pseudo-entropy reality (attack)](2026-06-10-iter6-op49-pseudo-entropy-reality.md) — can Im S be nulled keeping nontrivial δG? **Verdict: NEAR-NO-GO (resolved-negative, conditional) — the Einstein content lives entirely in the imaginary channel; reality forces triviality; three named residuals; corrects the iter-5 Re/Im parenthetical.**
- [Closed universe & dS holography](2026-06-10-iter6-closed-universe-and-dS-holography.md) — the 2024–26 dim H_closed = 1 debate. **Verdict: real, live, [CONTESTED] → new OP-50; the observer rescue independently corroborates OP-48(c)'s structure (analogy, not derivation); HYP-dS-CARDINALITY-R1 extended — η input or absent, never output.**
- [Algebraic frontier](2026-06-10-iter6-algebraic-frontier.md) — 2024–26 operator-algebra sweep. **Verdict: survival side theorem-hardened perturbatively (KLS II; CF: non-stationary GSL + QFC proof); failure side acquires algebraic replacements (stringy split breakdown; survives-after-averaging); N* unmoved; encode-direction evidence (Engelhardt–Liu).**
- [Amplitudes & positive geometry](2026-06-10-iter6-amplitudes-positive-geometry.md) — surfaceology/zeros/cosmohedra. **Verdict: H5 scope expands (confidence low → low-to-medium), but no positive geometry for gravity (structural) and all kinematic data presuppose flat space — encodes; verdict untouched.**
- [Background-independent programs](2026-06-10-iter6-background-independent-programs.md) — landscape refresh. **Verdict: two new entries warranted (Oppenheim CQ; dark dimension — both genuinely testable, sharpening the wager's demotion by contrast); six stale-fixes; no program supplies a new signature readout.**
- [QG phenomenology](2026-06-10-iter6-qg-phenomenology.md) — 2022–26 sweep. **Verdict: GQuEST/VZ is Program-A-adjacent, not a wager test (chain re-imports η=1/4G); CQ gate may close from the classical side before BMV; DSW deflated (Biggs–Maldacena); dead-end ledger (Hogan dead; Aziz–Howl dying).**
- [Experiment refresh](2026-06-10-iter6-experiment-refresh.md) — mid-2026 numbers. **Verdict: all standing numbers hold; w(z) decision point compresses to 2027; four watchlist rows change (GW nulls incl. area-law confirmation; neutrino-mass; matter-wave 1.7×10⁵ Da; LHCb ~4σ); nothing touches the wager.**
- [Iteration-6 synthesis](2026-06-10-iter6-synthesis.md) — **hedge-accounting table (2 hedges → 3, one shrunk), registry deltas, why the verdict stands, and what could move it next (only new input: 2027 w(z); GQuEST; CQ falsification; the order-G_N² obligation; the compressed OP-46 target).**

## See also
- [../CONCLUSION.md](../CONCLUSION.md) · [../EXPERIMENT_WATCHLIST.md](../EXPERIMENT_WATCHLIST.md) · [../FINDINGS.md](../FINDINGS.md) · [../ROADMAP.md](../ROADMAP.md) · [../CHANGELOG.md](../CHANGELOG.md) · [../AGENTS.md](../AGENTS.md) · [../README.md](../README.md)
