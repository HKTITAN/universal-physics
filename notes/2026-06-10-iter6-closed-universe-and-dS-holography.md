---
title: "Iteration 6 — de Sitter and closed-universe quantum gravity: the 2023–2026 literature delta"
type: note
tags: [note, iter6, de-sitter, holography]
updated: 2026-06-10
---

# Iteration 6 — de Sitter and closed-universe quantum gravity: the 2023–2026 literature delta

**Status:** Research-sweep note (iteration 6, track R1-dS-closed-universe). External-literature delta relative to the saturated iteration-5 baseline; **no verdict change** — the standing [../CONCLUSION.md](../CONCLUSION.md) verdict and both hedges survive, with one hedge (OP-48c horn C) *reinforced from an independent direction* and one hypothesis (HYP-dS-CARDINALITY-R1) *extended to two new routes*.
**Last updated:** 2026-06-10
**Iteration:** 6

All citations below were verified against live arXiv abstract pages (or arXiv listing + journal records) this session; per-paper claims are tagged [ESTABLISHED] *as statements of what the paper claims/proves*, with proof-vs-claim distinguished inline. Epistemic markers per [../EPISTEMICS.md](../EPISTEMICS.md).

---

## Scope

What exists in the 2023–2026 dS-holography and closed-universe literature that the wiki has **not** incorporated, and does any of it bear on OP-41, OP-42, OP-49, the dS no-gos' scope, or HYP-dS-CARDINALITY-R1? Already covered and excluded from the delta: CLPW (arXiv:2206.10780), KLS, Chen–Xu (arXiv:2511.00622), the dS/CFT pseudo-entropy first law (arXiv:2511.07915), Narovlansky–Verlinde (arXiv:2310.16994), Rahman–Susskind (arXiv:2312.04097, 2401.08555), $T\bar T+\Lambda_2$ (GST), Susskind's stretched horizon (arXiv:2109.14104), Jacobson (arXiv:1505.04753), FGHMVR (arXiv:1312.7856).

---

## 1. The closed-universe Hilbert-space debate (2024–2026) — the headline delta

### 1.1 The one-dimensionality claims

**Proven, in 2D models** [ESTABLISHED]: in JT gravity coupled to matter and in a topological toy model, perturbatively distinct closed-universe states $|\Psi_i\rangle$ develop nonperturbative inner products from spacetime wormholes; the Gram matrix $M_{ij}=\langle\Psi_i|\Psi_j\rangle$, computed by cylinder/wormhole amplitudes, degenerates to **rank 1**: there is a *unique* closed-universe state per theory, despite rich semiclassical physics at the perturbative level (Usatyuk–Wang–Zhao, arXiv:2402.00098, SciPost Phys. 17, 051 (2024)).

**Claimed, in general** [INFERENCE in the literature / CONTESTED]: quantum-extremal-surface and gravitational-path-integral arguments extend this to closed universes generally — *the nonperturbative Hilbert space of a closed universe is one-dimensional (and real) per $\alpha$-sector* (Harlow–Usatyuk–Zhao, arXiv:2501.02359, JHEP **02** (2026) 108; Nomura–Ugajin, arXiv:2505.20390). The lineage is McNamara–Vafa's swampland argument that the baby-universe Hilbert space is one-dimensional (arXiv:2004.06738) and Usatyuk–Wang–Zhao's 2D realization. Note the scope: global de Sitter has compact spatial slices — eternal dS *is* a closed universe — so this debate is exactly the **no-external-observer regime** the wiki's Program A/B merge analysis identified as the breaking point ([../OPEN_PROBLEMS.md](../OPEN_PROBLEMS.md) OP-48).

### 1.2 The observer rescue

Four mutually consistent rescues, all routing through an **internal observer**:

- **Harlow–Usatyuk–Zhao** [ESTABLISHED as claim; argued, not a theorem]: any observer with $S_{Ob}$ degrees of freedom is described by an *effective* quantum mechanics on a Hilbert space of dimension $\sim e^{S_{Ob}}$, with errors **exponentially small in $S_{Ob}$** (arXiv:2501.02359).
- **Nomura–Ugajin** [ESTABLISHED as claims]: *partial observability* — tracing out degrees of freedom inaccessible to the observer suppresses the ensemble fluctuations of the topology sum and restores semiclassical predictability; extended (arXiv:2602.13387, Feb 2026) to the Hartle–Hawking state with conditioning on observational data, recovering classical probabilities and an effective arrow of time from a single state.
- **Wei** [ESTABLISHED as claims]: the problem of time and the one-dimensionality arise from two *distinct* nonperturbative effects — summing over **metrics** vs summing over **topologies** — and both are resolved by a Page–Wootters observer/timekeeper hierarchy (an observer is a subsystem whose specification yields a nontrivial Hilbert space; a timekeeper is an observer with a specified history) (arXiv:2506.21489).
- **Harlow follow-up** [ESTABLISHED as claim]: the third-quantized description can arise from a holographic theory with a one-dimensional Hilbert space *without* $\alpha$-parameters, via the observer decoherence rule; in landscapes with both AdS and dS minima, observers \"almost surely\" find themselves in dS (arXiv:2602.03835, Feb 2026).

### 1.3 The counter-camp

The premise itself is **actively contested** [CONTESTED]:

- **Antonini–Rath–Sasieta–Swingle–Vilar López** (arXiv:2507.10649): one-dimensionality is an *external-access artifact* — \"the limitation of the external (CFT) Hilbert space to access the quantum information in the closed universe,\" analogous to an observer outside a perfectly isolated lab; effective field theory in the closed universe is recoverable from CFT data (final-state-projection reading). The baby universe is fine, and the CFT knows it.
- **Hong Liu** (arXiv:2509.14327): subregion-subalgebra duality plus an *averaged large-$N$* dictionary; \"for small but finite $G_N$ there should exist a semiclassical description of a macroscopic closed universe\" — explicitly challenging the one-dimensionality conclusion.
- **Engelhardt–Gesteau** (arXiv:2504.14586): from a low-energy boundary operator, the actual CFT dual of the ambiguous Antonini–Rath state is the spacetime **without** a semiclassical baby universe — dissolving the puzzle in the opposite direction (no semiclassical baby universe in AdS/CFT at all).
- **Higginbotham** (arXiv:2512.17993, JHEP **03** (2026) 183): \"observer complementarity\" — an AdS bulk observer's SWAP test concludes there is no closed universe while the inside observer disagrees; holographic maps improve both descriptions, and the AdS observer *cannot rule out* a baby universe.

No theorem exists on either side. [OPEN/CONTESTED]

### 1.4 Bearing on OP-48 — the inference chain [INFERENCE, medium-high]

- **P1** [ESTABLISHED in 2D models; CONTESTED generally]: nonperturbative topology sums collapse $\dim\mathcal H_{\rm closed}$ to 1 per $\alpha$-sector.
- **P2** [ESTABLISHED as claims]: standard quantum mechanics is recovered *only relative to an internal observer*, with effective dimension $\sim e^{S_{Ob}}$ and errors $O(e^{-\#S_{Ob}})$.
- **P3** [wiki, ESTABLISHED/INFERENCE]: OP-48(c) — on a single Type III₁ factor, \"collar-free + state-independent\" composition and \"singles out QM\" are mutually exclusive; QM-selection forces interposing an observer-anchored Type I factor, re-importing the collar/reference state ([2026-06-08-iter5-op48c-collarfree-composition.md](2026-06-08-iter5-op48c-collarfree-composition.md)).
- **C**: two *independent* formalisms — algebraic/kinematic (Type III₁, no factorization) and path-integral/nonperturbative (topology sum, no Hilbert-space dimension) — converge on the same conditional structure: **the fundamental no-observer description does not support QM's composition/probability structure; QM is recovered only by an observer-anchored factorization, and the observer-selecting move coincides with the geometry-importing move** (worldline, clock energy bound, collar). This *reinforces* the wiki's finding that the A+B merge fails in the no-external-observer regime — as cross-framework convergence rather than a single-framework result. It does **not** harden OP-48c horn (C) into a theorem: the path-integral premise (P1, general form) is contested, and on the ARSSV/Liu branch the global description is not actually trivial. Crucially, though, on *every* branch of the dispute the recovery of semiclassical physics routes through an observer- or algebra-anchored choice not contained in the global state — so the conditional structure is stable across the whole debate. [INFERENCE]

A further consistency check: De Vuyst–Eccles–Höhn–Kirklin prove **PW=CLPW** — the Page–Wootters formalism invoked by the closed-universe rescues is *equivalent* to the CLPW crossed-product description (arXiv:2405.00114, JHEP (2025) 146) [ESTABLISHED as published]. The closed-universe observer rescue and the CLPW observer are literally the same mechanism.

## 2. Observer/QRF-dependence of gravitational entropy

De Vuyst–Eccles–Höhn–Kirklin (arXiv:2405.00114) also show that with multiple possible observers, the density operators and entropies assigned to one subregion relative to distinct observers (= quantum reference frames) \"can drastically differ\" [ESTABLISHED as published]. [INFERENCE] This sharpens the iter-5 referee point on route (b) of [2026-06-08-iter5-surviving-dS-routes.md](2026-06-08-iter5-surviving-dS-routes.md): not only is the Type II trace normalization a single observer-tied input — the *entropy value itself* is QRF-relative. This strengthens both the OP-44 framing (crossed product as observer-relational truncation) and HYP-dS-CARDINALITY-R1 (the area normalization is supplied per-observer, not derived). A follow-up, \"Crossed products and quantum reference frames: on the observer-dependence of gravitational entropy\" (arXiv:2412.15502), develops the dictionary [unverified beyond title — abstract not fetched].

## 3. Maldacena's observer and the sphere partition function phase

The one-loop Euclidean dS sphere partition function — the standard object behind $\log Z \sim A/4G$ — carries a dimension-dependent phase $i^{D+2}$ obstructing its reading as a state count. **Maldacena** (arXiv:2412.14014): including an observer cancels this phase (mostly) for the quantity that should count states; an overall minus sign remains [ESTABLISHED as the paper's claim]. A 2026 follow-up (Ali, arXiv:2603.18068) argues an information-bearing clock is necessary but insufficient — only observers whose fluctuations couple to the negative conformal-factor modes resolve the phase [ESTABLISHED as that paper's claim; its weight in the field is unclear].

[INFERENCE] Two bearings: (i) this is a *third* independent frontier — after the CLPW entropy algebra and the closed-universe Hilbert space — where $\Lambda>0$ physics becomes well-defined only once an observer is inserted **by hand**. Observer-centrality is now the organizing pattern of the 2024–2026 $\Lambda>0$ literature across entropy, state-counting, and Hilbert-space structure. (ii) For HYP-dS-CARDINALITY-R1: the observer fixes the *phase* of $Z_{S^D}$, not the coefficient — $A/4G$ still comes from the classical saddle action. η remains an input.

## 4. OP-42 status: the DSSYK camps' targets have diverged; the sub-threads are merging technically

- Narovlansky–Verlinde's dS₃ reading is published without retraction (JHEP **05** (2025) 032; arXiv:2310.16994). [ESTABLISHED publication status]
- The Susskind camp's current statement is **Miyashita–Sekino–Susskind** (arXiv:2506.18054, JHEP **11** (2025) 107): DSSYK at infinite temperature yields, in the semiclassical/infinite-radius limit where dS becomes locally flat and the static patch tends to Rindler space, a bulk that is a strongly coupled **'t Hooft model** — (1+1)d QCD with one quark flavor, mesons on a single Regge trajectory; equivalently an open-string theory. [ESTABLISHED as published] So the camps now disagree not merely on the entropy↔area factor (the $N$-divergent discrepancy of OP-42) but on **what spacetime DSSYK∞ describes** (dS₃ vs the flat-space limit). [INFERENCE: this divergence-of-targets lowers near-term odds of an agreed unitary dS dual.]
- **Aguilar-Gutierrez** (arXiv:2602.06113, Feb 2026): sequential $T^2(+\Lambda_1)$ deformations of DSSYK — the 1d analog of $T\bar T+\Lambda_2$ — concretely realize Susskind's cosmological stretched horizon, with the inter-algebra entanglement entropy taking RT (minimal codimension-two area) form in a triple-scaling limit. [ESTABLISHED as the paper's claims] The three sub-threads OP-42 tracks as distinct (DSSYK, $T\bar T+\Lambda_2$, stretched horizon) are **merging technically** while the physical interpretation stays contested.

None of this produces a dS first law, an RT prescription with positive real entropy for dS proper, or an η output. OP-42 remains [CONTESTED]; update its entry with the two items above.

## 5. Cauchy-slice holography reaches de Sitter (post-2025-11)

**Araujo-Regado–Thavanesan–Wall**, \"Holographic Cosmology at Finite Time\" (arXiv:2511.04511, Nov 6 2025; JHEP **04** (2026) 121), building on Cauchy-slice holography in AdS (Araujo-Regado–Khan–Wall, arXiv:2204.00591, JHEP **03** (2023) 026): a $T^2$ deformation of a bottom-up dS/CFT model yields a holographic theory on flat **Cauchy slices** of dS, with **time as an emergent dimension associated with RG flow** and dS/CFT as an **IR** (not UV) fixed point; deformed-theory scalar and graviton two-point functions match independently computed finite-time wavefunction coefficients; **holographic counterterms are purely imaginary**. [ESTABLISHED as the paper's claims; scope = correlators/wavefunction coefficients — no Einstein-equation derivation, no entropy result]

[INFERENCE] (i) **OP-46 grading: ENCODES.** The $T^2$ deformation is engineered precisely so the deformed partition function satisfies the Wheeler–DeWitt/Hamiltonian constraint — the bulk gravitational dynamics (including $G$) are input to *define* the flow. Emergent time-as-RG here is a reorganization of the WDW equation, not generation of Lorentzian structure from non-symmetric data; the §8 reopening condition of [../CONCLUSION.md](../CONCLUSION.md) is not met. (ii) **OP-49 corroboration:** the purely-imaginary counterterm structure independently corroborates the iter-5 sharpened expectation that dS-intrinsic holographic data carries irreducible imaginary/complex structure that cannot be nulled without deforming back toward AdS-type unitarity.

## 6. Holography of information at $\Lambda>0$ — real, radical, perturbatively contested

**Chakraborty–Chakravarty–Godet–Paul–Raju** (arXiv:2303.16316, JHEP **12** (2023) 120): with a gauge-fixed (Faddeev–Popov) norm on Wheeler–DeWitt states in asymptotically-dS spacetime, **cosmological correlators in an arbitrarily small region suffice to completely specify the state** — maximal delocalization of information at $\Lambda>0$. [ESTABLISHED as the paper's claim]

Counter-line: **state-dressed operators** (Bahiru–Belin–Papadodimas–Sárosi–Vardian, arXiv:2209.06845) construct approximately-local bulk observables commuting to all orders in $1/N$ with boundary charges — information *can* be localized relative to state-dressing, weakening the perturbative force of the principle [ESTABLISHED as published]; **Geng–Jafferis–Shrivastava–Tata** (arXiv:2512.18912, Dec 2025) exhibit a one-parameter family interpolating between regimes where perturbative holography-of-information works and where it fails, concluding \"holography cannot be proven at the perturbative level in Newton's constant via the non-localizability of information\" [ESTABLISHED as the paper's claim]. Status: [CONTESTED].

[INFERENCE] Bearings: (a) the principle is **kinematic** (state specification) and is derived **from** the gravitational constraints/Gauss law — the metric theory is input, so it ENCODES; it is not, and cannot become, the hypothetical no-symmetry OP-46 readout. (b) It supplies no η and no equation of motion: OP-41 and HYP-dS-CARDINALITY-R1 untouched. (c) Structurally, holography-of-information and the closed-universe one-dimensionality are two faces of one constraint phenomenon — constraints make global data redundant; the compact-slice (dS/closed) case is the extreme limit where the redundancy swallows the whole Hilbert space. This links §1 and §6 as a single \"constraints vs locality\" axis along which the 2023–2026 literature has reorganized.

## 7. New dS entropy results and HYP-dS-CARDINALITY-R1

- **Zigdon**, \"de Sitter in String Theory vs. Gibbons & Hawking\" (arXiv:2604.25918, Apr 2026): assuming the QG partition function's logarithm contains nonzero $\propto 1/G_N$ terms, perturbative string theory yields **no** dS×compact solutions at any order in $\alpha'$ and $g_s$, because the **tree-level action vanishes for closed Euclidean target-space solutions** — in direct tension with $\log Z_{S^D}\sim A/4G_N$. [ESTABLISHED as the paper's claim] [INFERENCE] A *microscopic-side* instance of the cardinality diagnostic: the candidate UV-complete framework fails to produce the $1/G_N$ saddle the η-count requires. η is not output there either — possibly nothing is (\"cardinality from above\").
- **J. Zhao** (arXiv:2503.16138, Eur. Phys. J. C **85**, 750 (2025)): the Hollands–Wald–Zhang dynamical black-hole entropy lifted to **dynamical dS cosmological event horizons**, generalizing the Gibbons–Hawking first law to non-stationary eras plus a physical-process first law between arbitrary cross-sections. [ESTABLISHED that the construction exists] [INFERENCE] The coefficient is supplied by the Wald-type Noether-charge formalism (η input), as in every other route — not verified line-by-line; flagged for the referee.
- **Confirmation:** arXiv:2511.00622 verified as **Bin Chen & Jie Xu**, \"An algebra for covariant observers in de Sitter space\" (v2 Feb 2026): a quantum reference frame $L^2(SO(1,d))$ of superposed geodesics and an **averaged modular crossed product** over static patches, giving a Type II algebra with explicit trace — matching the wiki's OP-41 characterization (entropy structure, no $\delta G_{\mu\nu}$). The wiki's attribution is correct.

**Net for HYP-dS-CARDINALITY-R1** [INFERENCE, high]: reinforced and extended. In the newly surveyed routes the area-entropy coefficient is again an input (HWZ-dS; Maldacena's observer fixes phase not coefficient; QRF entropies are observer-normalized) or absent altogether (string tree level). No route makes η an output.

## 8. What does NOT change

- No surveyed construction outputs Lorentzian causal/metric structure from non-symmetric data installing no symmetry/η/foliation/twist — the [../CONCLUSION.md](../CONCLUSION.md) §8 reopening condition is **not met**. [INFERENCE, high]
- No dS entanglement first law in the strict FGHMVR sense appeared post-2025-11; the pseudo-entropy route (OP-49) acquired corroboration of its imaginarity obstruction, not a resolution. [ESTABLISHED absence within the surveyed corpus]
- The closed-universe debate **reinforces** the OP-48 structure from an independent direction but, being itself [CONTESTED], cannot discharge the horn-(C) hedge. The two CONCLUSION hedges stand. [INFERENCE]

## Proposed registry items

1. **OP-50 — The closed-universe Hilbert-space problem** [CONTESTED]. Is $\dim\mathcal H_{\rm closed}=1$ per $\alpha$-sector a theorem of nonperturbative quantum gravity (topology sum; proven in 2D models, claimed generally) or an artifact of external/boundary description (ARSSV; Liu)? Either resolution routes recovery of QM through an observer/algebra-anchored factorization — decisive context for OP-48's no-external-observer regime. Watch: responses to Engelhardt–Gesteau; Liu's subregion-subalgebra program; Harlow's α-parameter line.
2. **OP-42 update**: add the camps' target-divergence (dS₃ vs flat-space/'t Hooft readings of DSSYK∞; arXiv:2506.18054) and the DSSYK↔$T^2(+\Lambda_1)$↔stretched-horizon bridge (arXiv:2602.06113). Keep [CONTESTED].
3. **OP-44 / HYP-dS-CARDINALITY-R1 annotation**: PW=CLPW equivalence and drastic observer-dependence of entropy values (arXiv:2405.00114); two new η-as-input-or-absent instances (arXiv:2503.16138; arXiv:2604.25918).
4. **OP-49 annotation**: purely imaginary holographic counterterms in Cauchy-slice dS holography (arXiv:2511.04511) corroborate the expected ENCODES-only resolution direction.
5. **OP-48 annotation**: cross-framework convergence (algebraic + path-integral) on observer-conditional QM; explicitly NOT a discharge of horn (C).

## Open subquestions

1. [OPEN] Can the Harlow–Usatyuk–Zhao $e^{S_{Ob}}$ effective Hilbert space be derived as the image of a *collar-free* conditional expectation, or does it require the same Type I interposition as OP-48(c)? (If the former, horn (C) weakens; if the latter, it hardens.)
2. [OPEN] Does the ARSSV final-state-projection reading, transplanted to dS (no external CFT), reduce to the pseudo-entropy structure of arXiv:2511.07915 — unifying OP-49 and OP-50?
3. [OPEN] Is there any formulation of holography of information that does *not* presuppose the gravitational constraints (i.e., that could in principle serve as a no-symmetry OP-46 readout)? Current formulations are constraint-derived; expectation: no.
4. [OPEN] Does the vanishing tree-level string action for closed Euclidean targets (arXiv:2604.25918) survive nonperturbative effects (e.g. branes/instantons), or does the $A/4G_N$ term reappear nonperturbatively — and if so, is η *derived* there for the first time?

## See also

- [../CONCLUSION.md](../CONCLUSION.md) — standing verdict and reopening conditions
- [../OPEN_PROBLEMS.md](../OPEN_PROBLEMS.md) — OP-41, OP-42, OP-44, OP-46, OP-48, OP-49
- [../HYPOTHESES.md](../HYPOTHESES.md) — H2, H4; HYP-dS-CARDINALITY-R1
- [../FINDINGS.md](../FINDINGS.md) · [../EXPERIMENT_WATCHLIST.md](../EXPERIMENT_WATCHLIST.md) · [../BIBLIOGRAPHY.md](../BIBLIOGRAPHY.md)
- [2026-06-08-iter5-surviving-dS-routes.md](2026-06-08-iter5-surviving-dS-routes.md) — the two failed dS routes this note extends
- [2026-06-08-iter5-op48c-collarfree-composition.md](2026-06-08-iter5-op48c-collarfree-composition.md) — the OP-48(c) no-go the closed-universe debate corroborates
- [2026-06-08-de-sitter-and-emergent-spacetime.md](2026-06-08-de-sitter-and-emergent-spacetime.md) — the dS-holography baseline this note updates

## References

All verified against live arXiv abstract pages or arXiv listings + journal records, 2026-06-10:

- M. Usatyuk, Z.-Y. Wang, Y. Zhao, *Closed universes in two dimensional gravity*, arXiv:2402.00098, SciPost Phys. 17, 051 (2024).
- J. McNamara, C. Vafa, *Baby Universes, Holography, and the Swampland*, arXiv:2004.06738.
- D. Harlow, M. Usatyuk, Y. Zhao, *Quantum mechanics and observers for gravity in a closed universe*, arXiv:2501.02359, JHEP 02 (2026) 108.
- Y. Nomura, T. Ugajin, *Nonperturbative Quantum Gravity in a Closed Lorentzian Universe*, arXiv:2505.20390.
- Y. Nomura, T. Ugajin, *Physical Predictions in Closed Quantum Gravity*, arXiv:2602.13387.
- Z. Wei, *Observers and Timekeepers: From the Page-Wootters Mechanism to the Gravitational Path Integral*, arXiv:2506.21489.
- D. Harlow, *Observers, α-parameters, and the Hartle-Hawking state*, arXiv:2602.03835.
- S. Antonini, P. Rath, M. Sasieta, B. Swingle, A. Vilar López, *The Baby Universe is Fine and the CFT Knows It: On Holography for Closed Universes*, arXiv:2507.10649.
- H. Liu, *Towards a holographic description of closed universes*, arXiv:2509.14327.
- N. Engelhardt, E. Gesteau, *Further Evidence Against a Semiclassical Baby Universe in AdS/CFT*, arXiv:2504.14586.
- K. Higginbotham, *Helping observers in closed universes reach their full potential*, arXiv:2512.17993, JHEP 03 (2026) 183.
- J. De Vuyst, S. Eccles, P. A. Höhn, J. Kirklin, *Gravitational entropy is observer-dependent*, arXiv:2405.00114, JHEP (2025) 146.
- J. Maldacena, *Real observers solving imaginary problems*, arXiv:2412.14014.
- A. F. Ali, *When do real observers resolve de Sitter's imaginary problem?*, arXiv:2603.18068.
- S. Miyashita, Y. Sekino, L. Susskind, *DSSYK at Infinite Temperature: The Flat-Space Limit and the 't Hooft Model*, arXiv:2506.18054, JHEP 11 (2025) 107.
- S. E. Aguilar-Gutierrez, *Deforming the Double-Scaled SYK & Reaching the Stretched Horizon From Finite Cutoff Holography*, arXiv:2602.06113.
- G. Araujo-Regado, A. Thavanesan, A. C. Wall, *Holographic Cosmology at Finite Time*, arXiv:2511.04511, JHEP 04 (2026) 121.
- G. Araujo-Regado, R. Khan, A. C. Wall, *Cauchy Slice Holography: A New AdS/CFT Dictionary*, arXiv:2204.00591, JHEP 03 (2023) 026.
- T. Chakraborty, J. Chakravarty, V. Godet, P. Paul, S. Raju, *Holography of information in de Sitter space*, arXiv:2303.16316, JHEP 12 (2023) 120.
- E. Bahiru, A. Belin, K. Papadodimas, G. Sárosi, N. Vardian, *State-dressed local operators in the AdS/CFT correspondence*, arXiv:2209.06845.
- H. Geng, D. Jafferis, P. Shrivastava, N. Tata, *The Fate of Information Localizability and Holography in Quantum Gravity*, arXiv:2512.18912.
- Y. Zigdon, *de Sitter in String Theory vs. Gibbons & Hawking*, arXiv:2604.25918.
- J. Zhao, *The entropy of dynamical de Sitter horizons*, arXiv:2503.16138, Eur. Phys. J. C 85, 750 (2025).
- B. Chen, J. Xu, *An algebra for covariant observers in de Sitter space*, arXiv:2511.00622.
- De Vuyst et al., *Crossed products and quantum reference frames: on the observer-dependence of gravitational entropy*, arXiv:2412.15502 — [unverified: title/ID sighted in search results only; abstract not fetched].

> **Binding note.** Where a correction in the referee verdict below conflicts with the body above, the **referee correction governs**; the body is the pre-referee submission, retained for the audit trail per house convention.

## Referee verdict

**Track:** R1-dS-closed-universe · **Iteration 6** · adversarial pass per [AGENTS.md §4](../AGENTS.md). Citation audit: all 24 arXiv IDs fetched/resolved this session; every abstract supports the claim made of it. Systematic defect: six JHEP journal refs (2501.02359, 2512.17993, 2506.18054, 2310.16994, 2511.04511, 2303.16316) are Springer-sighting-only and absent from the arXiv pages — enter all six in [BIBLIOGRAPHY.md](../BIBLIOGRAPHY.md) as `[unverified]` pending DOI check (Higginbotham's page says only "Submitted to JHEP"). No finding engages a standard no-go adversely; none quietly contradicts a wiki closure; CONCLUSION §8 is **not** triggered.

> **R6-F1 (closed-universe debate is real and mapped) — keep, severity MINOR.** All three citations real and accurate. Corrections: the rank-1 Gram-matrix mechanism is UWZ paper-body content (abstract verifies only "a unique closed universe state in each theory") — cite as their construction; HUZ journal ref `[unverified]`; scope the `[ESTABLISHED]` tag to the *existence and content of the literature* — the physical one-dimensionality claim enters only as `[CONTESTED]`. OP-50 approved; ID free.

> **R6-F2 (observer rescue ↔ OP-48(c)) — keep, severity MINOR.** All five papers verified, including both 2602.* post-cutoff entries. Corrections: Harlow 2602.03835 *argues* (decoherence-rule path integral), does not *show*; and the convergence with OP-48(c) is a structural **analogy**, not a derivation in either direction — the algebraic result concerns composition on a III₁ factor, the path-integral result nonperturbative state-counting. With that wording, the annotation "reinforces but does not harden horn (C)" is endorsed.

> **R6-F3 (one-dimensionality contested, three counter-positions) — keep, severity MINOR.** All four citations real and accurate; `[CONTESTED]` is exactly right. Correction (substantive): "OP-48's conditional structure is stable across the *whole* debate" overreaches on the Liu branch — subregion-subalgebra duality is explicitly observer-free, and Liu would deny that a subalgebra selection is the relevant kind of extra input (the same choice exists in ordinary AdS/CFT subregion duality without observer-conditional QM). Replace with: *consistent with every branch, enforced by only some.* Higginbotham JHEP ref `[unverified]`.

> **R6-F4 (PW=CLPW; entropy observer-dependent) — keep, severity MINOR.** 2405.00114 fully verified (PW=CLPW verbatim in abstract; JHEP ref on the arXiv page). **Upgrade:** 2412.15502, submitted as unverified-beyond-title, was fetched by this referee — authors (De Vuyst–Eccles–Höhn–Kirklin) and content confirmed; remove the hedge. Caveat for the OP-44 annotation: "literally the same mechanism" holds in the perturbative crossed-product regime where PW=CLPW is proven; identifying it with the *nonperturbative* closed-universe rescue (R6-F2) is `[INFERENCE]`.

> **R6-F5 (Maldacena: observer cancels the dS phase) — keep, severity MINOR.** 2412.14014 verified, matches precisely; the phase-not-coefficient reading (η stays input) is correct and is the finding's most valuable sentence. Correction: Ali 2603.18068 is real and matches the description, but is a peripheral single-author follow-up — cite at `[SPECULATIVE]` weight pending field uptake, not as a coequal follow-up.

> **R6-F6 (OP-42: camps' targets diverged; proposed bridge) — keep, severity MINOR.** MSS 2506.18054 and Aguilar-Gutierrez 2602.06113 verified against abstracts; NV 2310.16994 re-fetched successfully. Corrections: both JHEP refs `[unverified]`; "(iii) technically bridging" → "*proposing* a technical bridge" (one paper, no camp endorsement); divergence-of-targets sentence enters OP-42 tagged `[INFERENCE]`. OP-42 stays `[CONTESTED]`.

> **R6-F7 (Cauchy-slice holography reaches dS) — keep, severity MINOR.** 2511.04511 verified in detail (RG-flow time, IR fixed point, imaginary counterterms, two-point matching all in abstract). The ENCODES verdict is correct and **strengthened**: the construction also installs a preferred flat-slice *foliation* by hand, so it fails the [CONCLUSION §8](../CONCLUSION.md) condition on two independent clauses (foliation; WDW/bulk action defining the flow). Correction: the OP-49 corroboration is *analogical* — imaginary counterterms (wavefunction coefficients) ≠ imaginary pseudo-entropy (density matrices); keep at `[INFERENCE, medium]` with that distinction stated. JHEP ref `[unverified]`.

> **R6-F8 (holography of information at Λ>0) — keep, severity MINOR.** 2303.16316 verified ("arbitrarily small region suffices" verbatim); Reeh–Schlieder checked explicitly — no conflict (constrained WDW states, not local-QFT cyclicity). Corrections: the counter-line (2209.06845; 2512.18912) is formulated in **AdS/CFT** — the dS claim's `[CONTESTED]` status is by extension of the perturbative argument, say so; point (d) ("two faces of the same constraint phenomenon") is a unification conjecture — retag `[SPECULATIVE]`. ENCODES verdict and the does-not-meet-§8 record endorsed. JHEP ref `[unverified]`.

> **R6-F9 (new dS entropy results extend HYP-dS-CARDINALITY-R1) — keep, severity MINOR.** All three verified; Zhao's abstract confirmed to make *no* coefficient-derivation claim (the finder's ESTABLISHED/INFERENCE split on exactly that point is accurate); Chen–Xu attribution confirmed. Corrections: carry Zigdon's conditionality inline (assumes a nonzero 1/G_N sphere-partition contribution; perturbative-string, silent on nonperturbative dS); soften "possibly nothing is"; tag the "cardinality-from-above" framing and the η-input reading of the HWZ lift `[INFERENCE, medium]`.

**Bottom line.** Track verdict endorsed as corrected: nothing flips the standing CONCLUSION (PARTIAL / encodes-not-generates / not-yet-physics); the OP-46 residual hedge is not met (both new constructions ENCODE — one doubly); OP-48(c) horn (C) is reinforced by an independent route whose premise is itself `[CONTESTED]`, hence not hardened; HYP-dS-CARDINALITY-R1 is reinforced and extended — η is input or absent on every newly surveyed route, never output. File OP-50 at `[CONTESTED]` with the R6-F3 corrected wording; log the six `[unverified]` journal refs and the 2412.15502 verification upgrade in [CHANGELOG.md](../CHANGELOG.md).
