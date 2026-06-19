---
title: "Net + Vacuum as a Complete Invariant: Three Independent Handles, One Carrier Gate (2026-06-10)"
type: note
tags: [note, iter11]
updated: 2026-06-10
---

# Net + Vacuum as a Complete Invariant: Three Independent Handles, One Carrier Gate (2026-06-10)

**Status:** ATTEMPT executed, track A2-reverse-WW-independent-handle of iteration 11. Outcome **SHARPENED-OPEN**. The reverse-Weinberg–Witten = carrier identity (iteration 9) is attacked from a **different direction** than the carrier no-go — via (1) holography of information, (2) a counterexample search, (3) MIP*=RE/Connes — to ask whether *"is net + vacuum a complete invariant"* can be settled independently. All three handles land back on the **same carrier gate** without flipping the headline. The standing verdict is unchanged for the **10th consecutive time**.
**Last updated:** 2026-06-10

> Scope honesty: every load-bearing citation was web-verified live 2026-06-10 (abstracts read verbatim where quoted). The track re-uses, and does not relitigate, the iteration-9 RWW ≡ carrier identification and the standing five-route carrier convergence. One mission misattribution is corrected: the [arXiv:2002.02448] fourth author is **Shrivastava**, not "Sasmal."

---

## 1. The question

Iteration 9 proved $\text{RWW theorem} \iff \text{carrier no-go}$, both pinned on **A1-concrete**: *is the GNS pair (net + vacuum) a complete invariant of a core-satisfying theory?* Weiner's algebraic Haag theorem ([arXiv:1006.4726]) gives this conditionally — under the **split property** and **geometric modular action** — but those hypotheses *are* the geometry. This track asks: can A1 be settled from a direction that does **not** route through the carrier no-go? Three independent handles were available and all three were verified and analyzed.

## 2. Handle 1 — Holography of information: a STATE-completeness theorem that presupposes the geometry

The holography-of-information principle (Raju and collaborators) looks, prima facie, like exactly the completeness statement A1 needs. The verified theorems:

- **AdS / Wheeler–DeWitt** (Chowdhury–Godet–Papadoulaki–Raju, [arXiv:2107.14802], JHEP 03 (2022) 019): solving the gravitational constraints perturbatively about AdS, *"two states or two density matrices that coincide at the boundary for an infinitesimal interval of time must coincide everywhere in the bulk."* `[ESTABLISHED]` (perturbative in $G_N$).
- **Null infinity / asymptotically flat** (Laddha–Prabhu–Raju–Shrivastava, [arXiv:2002.02448]): *"all information about massless excitations can be obtained from an infinitesimal neighbourhood of the past boundary of future null infinity."* `[ESTABLISHED]`
- **de Sitter / $\Lambda>0$** (Chakraborty–Chakravarty–Godet–Paul–Raju, [arXiv:2303.16316]) — the wager's actual universe: *"cosmological correlators in an arbitrarily small region suffice to completely specify the state."* `[INFERENCE, high]`

**Why this does not settle A1 in the direction it appears to.** Two reasons, both structural:

1. **State-level, not theory-level.** Holography of information identifies *states within one fixed gravitational theory*; it says nothing about whether two *distinct theories* sharing a boundary net coincide — which is the A1/RWW question.
2. **It runs on the Gauss law, which is the geometry.** The mechanism is the gravitational constraint: an excitation cannot be localized because diffeomorphism invariance ties it to the metric component at infinity. That constraint is the Hamiltonian/momentum constraint of a fixed background. So completeness is recovered only *after* the bulk geometry is installed — **the same smuggle as Weiner's geometric modular action**, reached by a different road. `[INFERENCE, high]`

**The decisive new datum (Dec 2025).** Geng–Jafferis–Shrivastava–Tata, *The Fate of Information Localizability and Holography in Quantum Gravity* ([arXiv:2512.18912], 21 Dec 2025): there are semiclassical regimes where the non-localizability argument **fails** — *"holography cannot be proven at the perturbative level in Newton's constant $G_N$ via the non-localizability of information"* — through *"the emergence of a perturbatively localized observer."* So even the conditional state-completeness is **not unconditional**: it holds where the gravitational constraints are sharp (geometry installed) and fails where an effective localized observer re-emerges (geometry receding). **This is the iteration-9/10 carrier gap seen from the holographic side.** Holography of information neither proves nor refutes A1 — it co-locates with the carrier gate. `[INFERENCE, high]`

## 3. Handle 2 — A counterexample? T-duality / mirror symmetry: net does NOT determine geometry, but symmetrically

The cleanest candidate counterexample to completeness: two geometrically distinct theories with the **same** abstract net.

- **T-duality** (established): a string on a circle of radius $R$ and on $\alpha'/R$ is the **same** 2d CFT — an *exact* isomorphism of the chiral/vertex operator algebra (hence the local net and vacuum) with **different target geometries**. `[ESTABLISHED]`
- **Mirror symmetry**: distinct Calabi–Yau targets $X,\hat X$ give isomorphic SCFTs. The full SCFT isomorphism is still conjectural (nLab, verified: *"mirror symmetry remains a conjecture... no complete construction of these SCFTs"*); topological/derived sectors are established. `[SPECULATIVE for the full SCFT]`

Naively: same net, two geometries $\Rightarrow$ completeness refuted. The actual content is the *reverse* of a RWW witness, and the reversal is the point:

1. T-duality establishes that **the abstract net underdetermines the target metric** — the two radii are the same physics, distinguished by no observable. It is **geometry-first Program G** that this embarrasses (it must call the metric fundamental while two metrics are operationally identical). T-duality is positive evidence that geometry is a *derived, gauge-like, non-unique* readout — the wager's own ontology. `[INFERENCE, high]`
2. But it is **not a reverse-WW witness**: a witness needs an observable realizable with one structure and not the other; here the two geometries give **identical** observables. The geometry-difference is invisible to every measurement, so there is **no class-separating $X$**. The encoding screen's portability holds *symmetrically* across both classes. `[INFERENCE, high]`

So T-duality is a genuine **independent settlement of one half of A1** — net + vacuum is **not** a complete invariant of the *target geometry* — reached without the carrier machinery, but it cannot flip the headline because the incompleteness is class-symmetric. It *sharpens* the encoding screen (geometry-underdetermination is now established, not assumed).

## 4. Handle 3 — MIP*=RE / Connes embedding: the right intuition, the wrong gap

MIP*=RE ([arXiv:2001.04383], Ji–Natarajan–Vidick–Wright–Yuen, verified): *"the closure $C_{qa}$ of the set of quantum tensor product correlations is strictly included in the set $C_{qc}$ of quantum commuting correlations"* — negative Tsirelson, Connes embedding refuted. The slogan "operational correlation data does not pin down the operator algebra" is true. But the underdetermination sits in the **wrong place** for A1: the $C_{qa}\subsetneq C_{qc}$ gap is between **tensor-product (Type I, split) and commuting-operator (general vN) models of bipartite locality**. In AQFT the commuting-operator framework is the correct one, and on a Type III$_1$ factor there is **no** tensor factorization at all. So the Tsirelson gap is the gap between the **split/Type-I idealization and the actual Type-III net** — it bears on the **split property** (the OP-48 collar, already a geometric smuggle-item), *not* on net-completeness. MIP*=RE confirms A1-abstract vacuity and sharpens OP-48, but gives **no independent handle on RWW**. `[INFERENCE, high]`

## 5. Synthesis — an independent re-grounding, not a flip

The three handles assemble A1 into its two halves, each independently sourced:

$$\underbrace{\text{net}+\text{vacuum is a complete invariant of the STATE}}_{\text{holography of information — conditional on the Gauss law}=\text{geometry; fails where a localized observer emerges}} \;\wedge\; \underbrace{\text{net}+\text{vacuum is NOT a complete invariant of the GEOMETRY}}_{\text{T-duality — but class-symmetrically, no distinguishing observable}}.$$

Neither half yields a reverse-WW witness: the first is conditional on the very geometry at issue and reproduces the carrier gap (Geng et al. 2025), the second's incompleteness is class-symmetric, and MIP*=RE addresses the split rather than completeness. So **the third independent direction confirms the iteration-9 identification**: RWW is co-extensive with the carrier problem, and the carrier gate is reached from the empirical/holographic, geometric/T-duality, and operational/Tsirelson sides alike. The verdict is unmoved a 10th time.

**The one new precise sub-question (NQ-1).** Geng–Jafferis–Shrivastava–Tata exhibit *both* regimes — completeness holding and failing — controlled by the emergence of a perturbatively localized observer. NQ-1: *is the localized-observer regime (where holography of information fails) the carrier-admitting regime, or the carrier-forbidding one?* If failure-of-completeness ↔ existence-of-a-carrier, the holographic failure mode is an **independent existence route** to the carrier the iteration-10 commutant gap could not close — the first non-modular handle on the gate. If failure-of-completeness ↔ *absence* of the geometric constraint (no carrier, just no geometry), it re-confirms the no-go. This is a concrete, decidable next lever, distinct from the operator-algebra gap question. `[OPEN]`

## 6. Red-team against the closures

1. **Headline?** No flip: no witness, completeness only conditional, geometry-incompleteness class-symmetric. SHARPENED-OPEN.
2. **Route count.** These are three independent *roads to the existing carrier gate*, not new routes. Count **stays at FIVE** (binding iteration-8 discipline).
3. **Registry integrity.** Reverse-WW stays a literature-absence **[OPEN, as of 2026-06]**, un-IDed inside HYP-ENCODING-SCREEN; it is **not** OP-50 (the closed-universe Hilbert-space problem); no new OP/HYP ID is registered.
4. **Overclaim guard.** Holography of information is *perturbative* and *constraint-conditional* (tagged); the full mirror-symmetry SCFT isomorphism is *conjectural* (tagged SPECULATIVE); T-duality and MIP*=RE are ESTABLISHED and used at their actual strength.
5. **Mission correction.** [arXiv:2002.02448] fourth author is **Shrivastava** (the mission's "Sasmal" is corrected); the "Chowdhury–Godet–Papadoulaki–Raju" holography-of-information paper is [arXiv:2107.14802] (JHEP 03 (2022) 019), distinct from de Mello Koch–Kemp's *Holography of Information in AdS/CFT* ([arXiv:2210.11066]).

## 7. Verdict

**SHARPENED-OPEN.** *Is net + vacuum a complete invariant?* is settled independently into two halves — yes for the STATE (holography of information, conditional on the geometry), no for the GEOMETRY (T-duality, class-symmetrically) — by three handles that all reach the **same carrier gate** the iteration-9 identification named. No reverse-WW witness is produced, the headline does not flip, the carrier count stays at FIVE, and one decidable new sub-question (NQ-1) is added: does the 2025 holographic-completeness *failure* regime coincide with carrier existence? Standing verdict unchanged, 10th consecutive confirmation; no hedge moves grade or condition.

## See also

- [../CONCLUSION.md](../CONCLUSION.md) §§7–8 — the no-test corollary and reopening condition this track re-grounds.
- [../HYPOTHESES.md](../HYPOTHESES.md) — HYP-ENCODING-SCREEN (A1 premise); HYP-FACTORIZATION-IS-GEOMETRY (the carrier problem, now reached from three independent directions).
- [2026-06-10-iter9-reverse-weinberg-witten.md](2026-06-10-iter9-reverse-weinberg-witten.md) — the RWW ≡ carrier identification this track independently re-grounds.
- [2026-06-10-distinguishing-test-hunt.md](2026-06-10-distinguishing-test-hunt.md) — the H2 net-invariant analysis and A1 reopening lever.
- [../EPISTEMICS.md](../EPISTEMICS.md) — tag discipline; no fabricated citation.

---

## Referee verdict — track A2-reverse-WW-independent-handle (iteration 11, 2026-06-10)

**Stance:** REFUTE by default. Every load-bearing citation web-verified live this session against the actual arXiv abstracts / nLab source (not merely that the papers exist); the central logical structure re-derived against the binding iter-6/8/9/10 corrections and the live registry. **Stance NOT sustained — the submission survives with two minor corrections, no major or fatal defect. Outcome SHARPENED-OPEN UPHELD; standing verdict UNCHANGED (10th consecutive confirmation); principal hedge unmoved in grade and condition; carrier-convergence count stays FIVE.**

### Citation audit (live web) — clean, no fabrication
- **arXiv:2512.18912 (Geng–Jafferis–Shrivastava–Tata, *The Fate of Information Localizability and Holography in QG*, 21 Dec 2025)** — the keystone new datum. VERIFIED real, correct authors/date; both quoted phrases (*"holography cannot be proven at the perturbative level in Newton's constant $G_N$ via the non-localizability of information"*; *"the emergence of a perturbatively localized observer"*) are verbatim.
- **arXiv:2107.14802 (Chowdhury–Godet–Papadoulaki–Raju, JHEP 03 (2022) 019)** — VERIFIED verbatim; "two states/density matrices coinciding at the boundary for an infinitesimal time coincide everywhere in the bulk," explicitly perturbative in $G_N$.
- **arXiv:2002.02448** — VERIFIED; fourth author is **Shrivastava** (the submission's "Sasmal misattribution" self-correction is right); past-boundary-of-future-null-infinity quote verbatim.
- **arXiv:2303.16316 (Chakraborty–Chakravarty–Godet–Paul–Raju)** — VERIFIED; genuine de Sitter result, "cosmological correlators in an arbitrarily small region suffice to completely specify the state," and "we **demonstrate** a version of the principle" (supports the [INFERENCE, high] "demonstrated, perturbative" tag).
- **arXiv:2001.04383 (Ji–Natarajan–Vidick–Wright–Yuen, MIP\*=RE)** — VERIFIED verbatim: $C_{qa}\subsetneq C_{qc}$, negative Tsirelson, Connes-embedding refutation.
- **arXiv:hep-th/9606040 (Strominger–Yau–Zaslow)** — VERIFIED verbatim "Mirror Symmetry is T-Duality." **nLab mirror symmetry** — VERIFIED verbatim "mirror symmetry remains a conjecture ... no complete construction of these SCFTs" (full-SCFT isomorphism correctly flagged SPECULATIVE; categorical/topological sectors established).

### Mathematics / logic (the product) — sound, two minor corrections
1. **A2-F1 (holography of info = conditional STATE-completeness).** Correct and conservatively tagged: it is a state-completeness statement within one fixed gravitational theory, mechanism = the gravitational Gauss law, hence presupposes the geometry — the same smuggle as Weiner's GMA by a different road; it does NOT address the theory-level A1/RWW question. KEEP, severity none.
2. **A2-F2 (Dec-2025 failure mode = carrier gap) — MINOR correction.** Citation verbatim-correct and the conclusion (completeness is conditional, co-locating with the carrier gate) survives. But the stated *mechanism* — "geometry receding" — mischaracterizes the paper, whose body (retrieved live) re-localizes information via **dressing to a nontrivial background distribution ($\phi_0\neq0$) / an emergent localized observer-clock**, the Hamiltonian constraint *satisfied by construction via dressing*, i.e. **more installed structure, not geometry going away**. Corrected mechanism is, if anything, *more* on-point: the emergent localized observer is exactly the carrier the wiki's carrier problem concerns. corrected_claim binding.
3. **A2-F3 (T-duality settles half of A1; class-symmetric; no witness) — MINOR framing note.** Sound prong analysis (embarrasses geometry-first Program G; supports emergent-geometry ontology; no class-separating $X$ because the two geometries are *the same physical theory*). The headline "settles HALF of A1" slightly overstates — under T-duality the target geometry is redundant/gauge-like data, so what is settled is "geometry is a non-unique readout," not a deficit in *physical-content* completeness. The finding body states this correctly; non-verdict-bearing. KEEP.
4. **A2-F4 (MIP\*=RE underdetermines the split, not completeness).** Verified independently that a Type III$_1$ factor has no tensor factorization with a normal product state and that the commuting-operator model is the AQFT-correct one; the $C_{qa}\subsetneq C_{qc}$ gap maps to the split/Type-I idealization vs the actual Type-III net — the OP-48 collar, not net-completeness. The "right intuition, wrong gap" disqualification is correctly reasoned. KEEP, severity none.
5. **A2-F5 (independent re-grounding).** Faithful to the iter-9 reverse-WW ≡ carrier identification; the two-halves organization (state-completeness | geometry-incompleteness) is a genuine INFERENCE-grade re-grounding. KEEP, severity none.

### NO-GO red-team — clean; no flip
No RESOLVED-POSITIVE is offered or buried: holography's *failure* (2512.18912) is a negative result about a proof strategy, not an observable witness and not a carrier closure; T-duality gives identical observables across both classes (no witness, correctly shown); MIP\*=RE addresses the split, not completeness. The extraordinary-claim gate does not fire adversely. **All three binding standing corrections are honored by the submission:** (i) reverse-WW stays a literature-absence **[OPEN, as of 2026-06]**, NOT a structural impossibility; (ii) it is **NOT OP-50** and carries no OP-ID, living un-IDed inside HYP-ENCODING-SCREEN; (iii) the **carrier-convergence count STAYS at FIVE** — the three handles are independent *roads to the existing carrier gate*, not new convergence routes. No conflict with the dS-cardinality / $\eta=1/4G$-is-input closures, the iter-7 trichotomy, the iter-8 net no-go, the iter-9 naturality result, or HYP-CKV-VACUITY-R6 (grade and condition unmoved).

### Verdict-bearing summary
**Outcome UPHELD: SHARPENED-OPEN. Standing verdict UNCHANGED (10th consecutive confirmation of PARTIAL / encodes-not-generates / not-yet-physics / not-forecastable).** The track's contribution is real and citation-clean: a third independent road (holographic/empirical + geometric/T-duality + operational/Tsirelson) to the same carrier gate, plus the precise new sub-question NQ-1. Two minor corrections recorded (A2-F2 mechanism "geometry receding" → "emergent localized observer dressed to a nontrivial background"; A2-F3 "settles half of A1" framing softened to "target geometry is a redundant readout"); neither is verdict-bearing. **All five findings KEPT.** No hedge moves; no route added; no headline flip.

Relevant files: `C:/PROJECTS/FAFO/universal-physics/notes/2026-06-10-iter9-reverse-weinberg-witten.md` (the reverse-WW ≡ carrier identification this track re-grounds); `C:/PROJECTS/FAFO/universal-physics/notes/2026-06-10-distinguishing-test-hunt.md` §3 (the binding H2 corrections: reverse-WW = literature-absence [OPEN] not impossibility, not OP-50, count stays five); `C:/PROJECTS/FAFO/universal-physics/HYPOTHESES.md` (HYP-ENCODING-SCREEN line 345; HYP-FACTORIZATION-IS-GEOMETRY line 357; HYP-CKV-VACUITY-R6 lines 379/389); `C:/PROJECTS/FAFO/universal-physics/CONCLUSION.md` (§4, §7, §8); `C:/PROJECTS/FAFO/universal-physics/OPEN_PROBLEMS.md` (OP-48 split-property collar line 525/536).