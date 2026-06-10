---
title: "OP-44 literature delta (2024–2026): the survival side hardens perturbatively; the failure side turns out algebraic; no theorem on either side of $N_\\ast$"
type: note
tags: [note, iter6, crossed-product, literature-review]
updated: 2026-06-10
---

# OP-44 literature delta (2024–2026): the survival side hardens perturbatively; the failure side turns out algebraic; no theorem on either side of $N_\ast$

**Status:** Research sweep executed (iteration 6, track R2-algebraic) — 17 abstracts individually fetched and verified this session; OP-44/OP-CP1 verdict UNCHANGED (regime-dependent, no theorem on either side of $N_\ast$) but its interior structure is refined: perturbative survival is now theorem-grade including non-stationary cuts and the QFC; all published post-breakdown candidates remain algebraic; a fourth verdict option ("survives-after-averaging over $N$") enters the literature. Two orchestrator leads corrected.
**Last updated:** 2026-06-10
**Iteration:** 6

This note is the iteration-6 literature delta for [OP-44/OP-CP1](../OPEN_PROBLEMS.md), relative to the iteration-5 baseline [2026-06-08-iter5-op44-nonperturbative-crossed-product.md](2026-06-08-iter5-op44-nonperturbative-crossed-product.md) and the Program-A verdict note [2026-06-08-algebraic-background-independence.md](2026-06-08-algebraic-background-independence.md). Everything below is **new input**: no paper cited here (except baseline anchors) appears in the wiki with a fetched abstract.

---

## 1. Baseline being updated

Iteration 5 left OP-44/OP-CP1 as the sole residual analytical lever: the von Neumann-algebraic subregion description survives under dynamical gravity only as an approximate / QRF-relational Type II structure below the (author-estimated) boundary $N_\ast \sim R/2GE_f$, degenerates above it (Giddings' algebraic spacetime disruption), with **no theorem on either side** and three admissible verdicts (survives / fails / regime-dependent). The live downside was open subquestion #1: does the $O(\kappa)$ spacelike noncommutativity already destroy the conditional-expectation / split structure the crossed product silently requires? The live upside was subquestion #2: a controlled all-orders dressing. `[baseline]`

**Headline of this sweep `[INFERENCE, medium-high]`:** nothing published in 2024–2026 supplies either theorem; OP-44 stays open and regime-dependent. But the open problem's *interior* moved in three specific ways, each below.

---

## 2. The survival side hardens to theorem-grade at linearized order

### 2.1 The complete constraint group: KLS II (Jan 2026)

Klinger–Kudler-Flam–Satishchandran, *Generalized Entropy is von Neumann Entropy II: The complete symmetry group and edge modes* (arXiv:2601.07910, 12 Jan 2026, 104 pp) impose, for the exterior of a stationary black hole and the dS static patch, the **complete family of constraints** of perturbative quantum gravity — not the single boost generator of KLS I (arXiv:2309.15897, *PRD* **111**, 025013). Gravitational backreaction produces angle-dependent horizon-area perturbations encoded in **edge modes** tied to *boost supertranslation* symmetries; the complete observable algebra satisfies infinitely many constraints and is **still Type II** with a universal trace; the entropy is
$$S \;=\; S_{\rm gen} + S_{\rm edge} + \text{const},$$
with Type II$_\infty$ (black hole, no max-entropy state) and Type II$_1$ (dS, max-entropy state exists once observer properties such as rotational kinetic energy are included). `[ESTABLISHED — abstract verified; ESTABLISHED as mathematics / INFERENCE as physics, per house convention]`

*Delta:* the iteration-4 literature refresh ([2026-06-08-iter4-literature-refresh.md](2026-06-08-iter4-literature-refresh.md)) listed 2601.07910 as \"incremental follow-up, action=none, abstract not fetched.\" That gloss is **superseded**: surviving the *full infinite-dimensional* constraint group, with a computed edge-mode correction to $S_{\rm gen}$, is a nontrivial robustness theorem for the survival side. It also bears on iter5 open subquestion #4: the dS II$_1$ structure tolerates the complete perturbative constraint family. `[INFERENCE]`

### 2.2 GSL for non-stationary perturbations + the QFC becomes a perturbative theorem: Chandrasekaran–Flanagan (Jan 2026)

Chandrasekaran–Flanagan, *Subregion algebras in classical and quantum gravity* (arXiv:2601.07915, 12 Jan 2026, 111 pp) study subregion algebras for **portions of null surfaces** — event horizons and **finite causal diamonds**. The inference chain, from the verbatim abstract `[ESTABLISHED]`:

1. Extend the subregion phase space by doubled **corner edge modes** (relative boosts and null translations of the corners), carrying a corner symplectic form;
2. these generate canonical charges for **half-sided boosts and translations** acting nontrivially on gravitationally dressed horizon observables, so the horizon subalgebra \"naturally takes the form of a **crossed product** by the associated automorphism group\";
3. quantizing around a black-hole background: for **each horizon cut** a Type II$_\infty$ algebra with trace, vN entropy $=S_{\rm gen}$ of that cut;
4. the half-sided null translation generator lifts to a self-adjoint operator implementing null time evolution on the cut algebras; the **area operator is the bulk implementation of Connes cocycle flow** for one-sided observables in excited states;
5. **nesting** of the one-parameter family of cut algebras $\mathcal A(s')\subseteq\mathcal A(s)$, $s'\ge s$, implies \"a **generalized second law for non-stationary linearized perturbations** of Killing horizons\";
6. gravitational **half-sided modular inclusions** are used to \"**prove the quantum focusing conjecture** in the perturbative quantum gravity regime\" (verbatim).

*Delta:* this is the strongest movement on the wiki's algebraic-GSL ledger since Faulkner–Speranza (arXiv:2405.00847, Killing-horizon cuts, semiclassical): the GSL now covers **non-stationary** linearized perturbations, and the QFC — listed in the wiki only as a conjecture — is a **theorem within the linearized regime**. `[ESTABLISHED for the results as scoped]` Scope honesty `[INFERENCE]`: a fixed black-hole background to linearize around, the null-surface structure, and the edge-mode extension are inputs; this hardens the sub-$N_\ast$ regime and is silent on the nonperturbative one. It does not derive geometry — the crossed product's automorphism group is built from a *pre-installed* corner symmetry, exactly the pattern of [A-CP-KILLING](../ASSUMPTIONS_LEDGER.md), now at the corner-symmetry level.

### 2.3 Physical clocks replace external observers; non-stationary backgrounds

- Chen–Penington, *A clock is just a way to tell the time: gravitational algebras in cosmological spacetimes* (arXiv:2406.02116): in slow-roll inflation and **evaporating Schwarzschild–de Sitter black holes** — out-of-equilibrium, non-stationary — diff-invariant observables exist **without external clocks or asymptotic charges** (the inflaton / the evaporating hole is the clock); algebras are Type II$_\infty$; Type II entropy $=S_{\rm gen}$. `[ESTABLISHED — abstract verified]`
- Kudler-Flam–Leutheusser–Satishchandran, *Algebraic Observational Cosmology* (arXiv:2406.01669): the dressed algebra of a comoving FLRW observer (inflationary origin); all accessible states are mixed with vN entropy $=S_{\rm gen}$ of the observer's causal diamond. `[ESTABLISHED — abstract verified]`
- Background fill (2023, absent from wiki): Jensen–Sorce–Speranza, *Generalized entropy for general subregions in quantum gravity* (arXiv:2306.01837, JHEP 12 (2023) 020) — Type II for **general subregions without isometries** in the $G_N\to 0$ limit (observer model for compact regions, ADM Hamiltonian for asymptotic ones); compact case II$_1$ with the max-entropy state realizing **Jacobson's entanglement-equilibrium** hypothesis. `[ESTABLISHED — abstract verified]` Cross-link: this is directly relevant to route (b) of [2026-06-08-iter5-surviving-dS-routes.md](2026-06-08-iter5-surviving-dS-routes.md).
- Ali Ahmad–Klinger–Lin, *Semifinite von Neumann algebras in gauge theory and gravity* (arXiv:2407.01695, *PRD* **111**, 045006): sufficient conditions for semifiniteness of crossed products by **any locally compact group containing the modular flow** (centrality of modular flow in the symmetry group), with evidence of necessity — the structural theorem behind \"which constraint groups still give a trace.\" `[ESTABLISHED — abstract verified]`

### 2.4 Beyond subleading order, and state-independence

- Ali Ahmad–Jefferson, *Algebraic perturbation theory: traversable wormholes and generalized entropy beyond subleading order* (arXiv:2501.01487): perturbative crossed products from unitary deformations; **new contributions to $S_{\rm gen}$ beyond subleading order**; black-hole information transfer to radiation modeled \"by passing to a perturbative crossed product exhibiting a degree of non-locality in its modular structure.\" `[ESTABLISHED — abstract verified]` This is the first published machinery past the order at which iter5 froze the expansion — the upside lever (subq. #2) moved from \"nothing exists\" to \"order-by-order constructible, no remainder bound\"; note the price is modular **non-locality**, consonant with Giddings' leading-order noncommutativity. `[INFERENCE]`
- Krishnan–Mohan, *State-independent Black Hole Interiors from the Crossed Product* (arXiv:2310.05912, JHEP 05 (2024) 278): via extended half-sided modular translations and the Connes cocycle, the crossed-product Type II$_\infty$ algebra is **independent of the cyclic-separating vector** (and other choices); with an interior observer it can be Type I or II$_1$ depending on whether the light cone contains a full Cauchy slice. `[ESTABLISHED — abstract verified]` Sharper than the additive-constant state-independence the wiki records. `[INFERENCE]`

---

## 3. The failure side becomes concrete — and stays algebraic

### 3.1 The split property DOES fail — but from strings, not dressing

Herderschee–Kudler-Flam, *Stringy algebras, stretched horizons, and quantum-connected wormholes* (arXiv:2510.01556, v2 Dec 2025), verbatim: in the $g_s\to 0$ limit with excited string modes as free particles, \"the resulting **Hagedorn spectrum leads to the breakdown of the split property**, a strengthening of the locality principle, **for regions that are within a string length of each other**\"; this gives \"a precise **algebraic definition of stretched horizons** and stretched quantum extremal surfaces\"; where stretched horizons exist there is \"an associated nontrivial horizon ★-algebra\"; the algebraic ER=EPR proposal then yields **Type III von Neumann factors** characterizing quantum Einstein–Rosen bridges between geometrically disjoint regions. `[ESTABLISHED — verbatim abstract]`

Mechanism (standard AQFT + the paper's application): split follows from Buchholz–Wichmann-type **nuclearity**, which requires $\mathrm{Tr}\,e^{-\beta H}<\infty$ for all $\beta>0$; a Hagedorn density $\rho(m)\sim e^{m/T_H}$ makes the partition function diverge for $\beta < 1/T_H$, so nuclearity — and with it the standard route to split — fails below string-length separations. `[ESTABLISHED inputs; the application is the paper's]`

*Bearing on OP-44* `[INFERENCE — mine]`: iter5's \"genuinely live downside\" (subq. #1) was that loss of the conditional-expectation/split structure would kill even the approximate subalgebra. The split **does** fail — but (i) from the string tower, not from $O(\kappa)$ dressing; (ii) only below $\ell_s$ separations; (iii) the replacement is still an **algebraic** object. So the downside is *realized in a controlled form* that does not propagate to macroscopic separations, and the $O(\kappa)$-dressing version of subq. #1 remains open.

*Wiki-internal corollary* `[INFERENCE — mine, for referee]`: the iter4 GPT-composition resolution ([2026-06-08-iter4-gpt-type3-resolution.md](2026-06-08-iter4-gpt-type3-resolution.md)) used a split-property collar with an intermediate Type I factor; in stringy completions that collar acquires a **minimal width $\ell_s$** — it cannot be shrunk to zero, sharpening the iter5 OP-48(c) conditional no-go from the dynamical side. `[SPECULATIVE rider: whether the stringy breakdown scale and the Giddings dressing boundary $N_\ast\sim R/2GE_f$ meet at a Horowitz–Polchinski-type correspondence point is untested.]`

### 3.2 A fourth verdict option: survives-after-averaging over $N$

Kudler-Flam–Witten, *Emergent Mixed States for Baby Universes and Black Holes* (arXiv:2510.06376), verbatim: large-$N$ sequences of states \"generally fail to converge as pure states\"; with diverging coarse-grained entropy they converge to **mixed states for the large-$N$ algebra** (black holes); for Euclidean preparations producing baby universes \"the sequences do not converge, due to wormhole contributions, and so these states **cannot admit large $N$ limits**\" — yet \"appropriate **averaging over $N$** can lead to convergence to a mixed state,\" the associated algebras having \"nontrivial commutants, which can possibly be interpreted as operators in the baby universe.\" Companion: *Wormholes and Averaging over N* (arXiv:2605.15180, May 2026) — **Mellin averaging** over $N$ defines asymptotic averages reproducing apparent wormhole randomness, given analytic continuation in $N$ and superpolynomially small fluctuations. `[ESTABLISHED — abstracts verified]`

*Bearing on OP-44* `[INFERENCE — mine]`: iter5 admitted three verdicts (survives / fails / regime-dependent). This line publishes a fourth: **survives-after-averaging** — at fixed $N$ a nonperturbative vN-subregion description may simply not exist for wormhole/baby-universe sectors, while an $N$-ensemble-averaged algebra does. This is the most concrete published proposal for what \"the algebra\" could mean past the perturbative regime, and it is — again — algebraic.

### 3.3 Even at infinite $N$, the vN property is dynamical: Engelhardt–Liu

Engelhardt–Liu, *The Making of von Neumann Algebras from Bulk Focusing* (arXiv:2509.05413): whether single-trace (infinite-$N$) boundary subregion algebras close into von Neumann algebras at all is **GNS-sector-dependent**, and the bulk dual of the sector-dependence is **null geodesic focusing** (\"the well-known difference between null congruences fired from the bulk and those fired from the boundary\"); causal wedge reconstruction is rigorously formulated and proven for subregions whose single-trace algebras do support vN algebras. `[ESTABLISHED — abstract verified]`

*Bearing* `[INFERENCE]`: this sharpens OP-44's framing question — the vN property is not free even before $1/N$ corrections; it is a *dynamical, geometry-correlated* property. For the headline verdict this cuts in the ENCODE direction: the algebra's existence is read off pre-installed bulk geometry (focusing), not conversely. Related: Leutheusser–Liu's subregion-subalgebra duality (arXiv:2212.13266) is now published as *Phys. Rev. D* **111**, 066021 (2025) — the wiki cites only their 2112.12156; the duality paper defines entanglement wedges without entropy and assigns duals to bulk regions not touching the boundary. A mathematically rigorous instance: Crann–Kang, *Algebraic approach to spacetime bulk reconstruction* (arXiv:2412.00298), operator-algebraic subregion-subregion duality for Klein–Gordon fields with type III$_1$ bulk/boundary correspondence. `[ESTABLISHED — abstracts/publication verified]`

### 3.4 Multi-region structure: two areas, generalized wedges

- Cao–Faulkner–Wang, *Gravitational Algebras with Two Areas* (arXiv:2512.04435): long-wormhole model with two compact extremal surfaces; via the split property, **Type II algebras from crossed products in the left/right/middle regions**; microcanonical treatments keeping only the area **sum** or **difference** yield Type II *or Type III*; the area-difference crossed product gives a weight restricting to a trace on the middle region, with relative-entropy differences $=$ variations of $S_{\rm gen}$ — an algebraic order parameter for **entanglement-wedge phase transitions**. `[ESTABLISHED — abstract verified]` (Supersedes iter4's \"abstract not fetched\" status for this ID.)
- Sahu–van der Heijden–Van Raamsdonk–Zibakhsh, *Algebras for generalized entanglement wedges* (arXiv:2511.21852, v2 May 2026): conjectural assignment of algebras to **generalized entanglement wedges in non-asymptotically-AdS spacetimes**, with a proposed RT generalization; inclusion monotonicity and SSA would follow from algebraic entropy inequalities. Explicitly conjectural. `[ESTABLISHED that the proposal exists; the proposal itself SPECULATIVE/OPEN]`

---

## 4. The universal additive constant: demonstrated in JT

Blommaert–Kudler-Flam–Urbach, *Absolute entropy and the observer's no-boundary state* (arXiv:2505.14771, JHEP 11 (2025) 113): for closed universes with an observer, \"the observer's **no-boundary state is the identity operator** on the physical Hilbert space, i.e., the **maximum entropy state**,\" demonstrated in **JT gravity**; geometrically a bra-ket wormhole; expectation values in it **furnish a trace** for the observer's algebra, so cross-universe vN entropies are relative entropies against the no-boundary state. `[ESTABLISHED — abstract verified]`

*Delta:* [2026-06-08-algebraic-background-independence.md](2026-06-08-algebraic-background-independence.md) open subquestion #1 recorded Witten's Hartle–Hawking universal-constant proposal as \"speculative ... demonstrated only for de Sitter vacua.\" Upgrade: **worked construction in a solvable model**; absolute gravitational entropy is well-posed in JT. Beyond JT: `[OPEN]`.

---

## 5. Lead corrections (binding-rule 3 items)

1. **No Kudler-Flam–Leutheusser–Satishchandran review exists** (orchestrator lead garbled). Kudler-Flam's complete recent arXiv listing (API-checked this session) contains only research papers with that trio (2309.15897; 2312.07646; 2406.01669). The actual synthesis is **Hong Liu, *Lectures on entanglement, von Neumann algebras, and emergence of spacetime*, arXiv:2510.07017 (Oct 2025, 119 pp)**: vN-algebra fundamentals, modular flow and emergent time, algebraic large-$N$ AdS/CFT, subregion-subalgebra duality, operator-algebraic gravitational entropy, firewall diagnostics, islands. `[ESTABLISHED — abstract verified]` New results inside it relative to the wiki: none claim-moving; it is consolidation (its firewall-diagnostic and island sections are presentation of the Leutheusser–Liu / Engelhardt–Liu line covered above). `[INFERENCE from abstract; full-text not audited]`
2. **No Giddings follow-up, rebuttal, or sharpening post-2510.24833.** His hep-th listing ends (as of this sweep) at 2510.24833 v3 (Jan 9, 2026 — already in the wiki) and 2507.13351 (Jul 2025, unitary-evolution pictures, not on this thread). Targeted searches found no published response to \"algebraic spacetime disruption.\" The $N_\ast$ boundary is exactly where iteration 5 left it. `[ESTABLISHED-negative — API listing + searches this session]`

---

## 6. Explicit judgment on OP-44 (mission deliverable)

**Does anything published move OP-44 from \"no theorem on either side\"? NO.** `[INFERENCE, high confidence as a literature judgment]`

- No all-orders survival proof: 2501.01487 is order-by-order with no remainder bound; 2601.07910/2601.07915 are linearized-regime theorems.
- No no-go: 2510.01556's split breakdown is stringy and confined below $\ell_s$; 2510.06376's non-convergence concerns baby-universe sectors and is cured by $N$-averaging; neither derives a finite-$N$ commutant collapse at $N_\ast$.

**What DID move** `[INFERENCE]`:
1. *Survival side, sub-$N_\ast$*: from \"approximate / QRF-relational, no theorem\" to **theorem-grade at linearized order** — complete constraint group with edge modes (II survives), GSL for non-stationary perturbations, QFC proven perturbatively, state-independence of the algebra, physical clocks replacing external observers, first beyond-subleading entropy contributions.
2. *Failure side, post-breakdown*: every published candidate replacement structure is **algebraic** — stretched-horizon ★-algebras, Type III ER=EPR factors, $N$-averaged algebras with nontrivial commutants — weakening (not refuting) Giddings' \"beyond algebras\" horn.
3. *Verdict space*: add a fourth admissible verdict, **survives-after-averaging over $N$**.
4. *Even-at-$N=\infty$ subtlety*: the vN property is GNS-sector-dependent and dual to bulk focusing (Engelhardt–Liu) — the framing question \"does a vN algebra survive\" must now be asked per-sector even before $1/N$ corrections.

**Headline impact: none.** All constructions import a background (stationary exterior, FLRW, AdS, JT); KLS II installs an infinite-dimensional pre-given corner symmetry; Engelhardt–Liu read algebra-existence off geometry. Encodes-not-generates is reinforced, not challenged. `[INFERENCE]`

### Proposed registry updates

- **[OP-44/OP-CP1 wording]** Keep \"regime-dependent, no theorem on either side of $N_\ast$\"; append: (a) the sub-$N_\ast$ survival is now theorem-grade at linearized order including non-stationary cuts (GSL) and the QFC (2601.07915), for the complete constraint group with edge-mode-corrected entropy (2601.07910); (b) admissible verdicts now include \"survives-after-averaging over $N$\" (2510.06376, 2605.15180); (c) published post-breakdown candidates are all algebraic (2510.01556), weakening the \"beyond algebras\" horn.
- **[Subq. #1 update]** Split-property strain: realized in the stringy regime via Hagedorn/nuclearity failure below $\ell_s$ (2510.01556); the $O(\kappa)$-dressing version remains `[OPEN]`.
- **[Subq. #2 update]** Beyond-subleading machinery now exists with modular non-locality as the price (2501.01487); still no bounded remainder. `[OPEN]`
- **[Subq. #4 update]** dS II$_1$ survives the complete perturbative constraint group (2601.07910). `[OPEN beyond perturbative]`
- **[A-23 / A-CP-KILLING annotation]** The geometric input has migrated from \"Killing horizon\" to \"pre-installed corner symmetry group (boost supertranslations + null translations)\" — same circularity, finer resolution.
- **[Algebraic-background-independence note]** Open subquestion #1 (universal constant): upgraded from \"speculative, dS-only\" to \"demonstrated in JT (2505.14771); OPEN beyond.\"
- **[iter4-literature-refresh correction]** The \"incremental, action=none\" gloss on 2601.07910 / 2512.04435 is superseded by the verified abstracts above.

---

## 7. Open subquestions (updated)

1. Does the $O(\kappa)$ gravitational dressing (as opposed to the string tower) strain the split/conditional-expectation structure at *macroscopic* separations, or is gravitational split-failure also confined to a microscopic collar? `[OPEN — the surviving form of the iter5 downside]`
2. Can the Ali Ahmad–Jefferson perturbative crossed product be given a bounded remainder below $N_\ast$ — and does its modular non-locality grow with order in a way that locates $N_\ast$ intrinsically? `[OPEN — the surviving form of the iter5 upside]`
3. Is the Kudler-Flam–Witten $N$-averaged algebra a *subregion* algebra (does it admit localized subalgebras with commutants), or only a global structure — i.e., does \"survives-after-averaging\" extend to OP-44's subregion question? `[OPEN]`
4. Does the Engelhardt–Liu focusing criterion have a finite-$N$ analog — and if vN-ness is sector-dependent at $N=\infty$, what replaces \"the\" subregion algebra in sectors where it fails? `[OPEN]`
5. Do the Chandrasekaran–Flanagan half-sided modular inclusion methods extend off Killing-horizon *backgrounds* (not just non-stationary perturbations of them), closing the gap to fully dynamical horizons? `[OPEN]`

---

## See also

- [2026-06-08-iter5-op44-nonperturbative-crossed-product.md](2026-06-08-iter5-op44-nonperturbative-crossed-product.md) — the iteration-5 baseline this note updates.
- [2026-06-08-algebraic-background-independence.md](2026-06-08-algebraic-background-independence.md) — Program A verdict; frontier section to be extended with §§2–4 above.
- [2026-06-08-iter4-gpt-type3-resolution.md](2026-06-08-iter4-gpt-type3-resolution.md) — split-property collar; minimal-width corollary (§3.1).
- [2026-06-08-iter4-modular-circularity.md](2026-06-08-iter4-modular-circularity.md) — geometry only where symmetry is pre-installed; now at corner-symmetry resolution.
- [2026-06-08-iter5-surviving-dS-routes.md](2026-06-08-iter5-surviving-dS-routes.md) — Jensen–Sorce–Speranza entanglement-equilibrium connection (§2.3).
- [../OPEN_PROBLEMS.md](../OPEN_PROBLEMS.md) — OP-36, OP-37, OP-44; [../HYPOTHESES.md](../HYPOTHESES.md) — H0, H4; [../ASSUMPTIONS_LEDGER.md](../ASSUMPTIONS_LEDGER.md) — A-23, A-CP-KILLING; [../CONCLUSION.md](../CONCLUSION.md) — residual lever #1; [../EPISTEMICS.md](../EPISTEMICS.md) — tags.

## References

*All entries below were individually verified this session by fetching the arXiv abstract page (or the arXiv API listing), except where marked.*

- M. S. Klinger, J. Kudler-Flam, G. Satishchandran, *Generalized Entropy is von Neumann Entropy II: The complete symmetry group and edge modes*, arXiv:2601.07910 (12 Jan 2026, 104 pp).
- V. Chandrasekaran, É. É. Flanagan, *Subregion algebras in classical and quantum gravity*, arXiv:2601.07915 (12 Jan 2026, 111 pp).
- C.-H. Chen, G. Penington, *A clock is just a way to tell the time: gravitational algebras in cosmological spacetimes*, arXiv:2406.02116 (2024).
- J. Kudler-Flam, S. Leutheusser, G. Satishchandran, *Algebraic Observational Cosmology*, arXiv:2406.01669 (2024).
- K. Jensen, J. Sorce, A. Speranza, *Generalized entropy for general subregions in quantum gravity*, arXiv:2306.01837, JHEP 12 (2023) 020.
- S. Ali Ahmad, M. S. Klinger, S. Lin, *Semifinite von Neumann algebras in gauge theory and gravity*, arXiv:2407.01695, Phys. Rev. D 111, 045006 (2025).
- S. Ali Ahmad, R. Jefferson, *Algebraic perturbation theory: traversable wormholes and generalized entropy beyond subleading order*, arXiv:2501.01487 (v2 Dec 2025).
- C. Krishnan, V. Mohan, *State-independent Black Hole Interiors from the Crossed Product*, arXiv:2310.05912, JHEP 05 (2024) 278.
- A. Herderschee, J. Kudler-Flam, *Stringy algebras, stretched horizons, and quantum-connected wormholes*, arXiv:2510.01556 (v2 Dec 2025).
- J. Kudler-Flam, E. Witten, *Emergent Mixed States for Baby Universes and Black Holes*, arXiv:2510.06376 (2025).
- J. Kudler-Flam, E. Witten, *Wormholes and Averaging over N*, arXiv:2605.15180 (May 2026).
- N. Engelhardt, H. Liu, *The Making of von Neumann Algebras from Bulk Focusing*, arXiv:2509.05413 (2025).
- S. Leutheusser, H. Liu, *Subregion-subalgebra duality: emergence of space and time in holography*, arXiv:2212.13266, Phys. Rev. D 111, 066021 (2025). [publication verified via APS record]
- J. Crann, M. J. Kang, *Algebraic approach to spacetime bulk reconstruction*, arXiv:2412.00298 (2024).
- X. Cao, T. Faulkner, Z. Wang, *Gravitational Algebras with Two Areas*, arXiv:2512.04435 (Dec 2025).
- A. Sahu, J. van der Heijden, M. Van Raamsdonk, R. Zibakhsh, *Algebras for generalized entanglement wedges*, arXiv:2511.21852 (v2 May 2026).
- A. Blommaert, J. Kudler-Flam, E. Y. Urbach, *Absolute entropy and the observer's no-boundary state*, arXiv:2505.14771, JHEP 11 (2025) 113.
- H. Liu, *Lectures on entanglement, von Neumann algebras, and emergence of spacetime*, arXiv:2510.07017 (Oct 2025, 119 pp).
- S. B. Giddings, arXiv:2510.24833 (v3, 9 Jan 2026) and arXiv:2505.22708 — baseline anchors, previously wiki-verified; v3 date re-confirmed this session via search.
- T. Faulkner, A. J. Speranza, arXiv:2405.00847, JHEP 11 (2024) 099 — baseline anchor. [not re-fetched this session — previously wiki-verified]
- Engelhardt–Liu algebraic ER=EPR proposal — cited within 2510.01556; exact arXiv ID not independently verified this session. [unverified]

> **Binding note.** Where a correction in the referee verdict below conflicts with the body above, the **referee correction governs**; the body is the pre-referee submission, retained for the audit trail per house convention.

## Referee verdict

**Track R2-algebraic, iteration 6. All ten findings kept; zero major or fatal. Every citation web-verified this session (arXiv abs pages fetched; PRD/JHEP records independently confirmed). The standing PARTIAL verdict and the encodes-not-generates headline are untouched; OP-44 remains "no theorem on either side of $N_\ast$" with a restructured interior.**

> **R2-F1 (KLS II, 2601.07910) — KEEP, severity MINOR.** Paper verified (Klinger–Kudler-Flam–Satishchandran, 12 Jan 2026, 104 pp); the supersession of iter4's "incremental, action=none" gloss is confirmed against the iter4 literature-refresh note (the abstract was never fetched there). Two fixes: the entropy is $S_{\rm gen}$ + edge-mode contribution **+ a constant term** (the dropped constant feeds the wiki's standing Obs-4 additive-constant caveat — do not drop it); the dS-observer example is "multipole moments and kinetic energy" per the abstract, not "rotational kinetic energy." Perturbative-only strengthening of iter5 subquestion #4 is correctly scoped.

> **R2-F2 (Chandrasekaran–Flanagan, 2601.07915) — KEEP, severity MINOR.** Verified (12 Jan 2026, 111 pp); the chain edge modes → crossed product → Type II$_\infty$ per cut → GSL for non-stationary linearized perturbations → QFC proven perturbatively is verbatim-supported. Correction to the proposed action: decisive-progress item 5 has **two legs** (interacting QFT; genuinely non-Killing horizons) and CF discharge **neither fully** — they cover linearized perturbations *of Killing horizons*. Write "one leg partially addressed at linearized order"; QFC status is always "theorem within the linearized/perturbative regime," never bare "theorem."

> **R2-F3 (Chen–Penington 2406.02116; KLS cosmology 2406.01669) — KEEP, severity MINOR.** Both verified. Fixes: 2406.02116's abstract claims a "connection" between Type II entropy and generalized entropies — verify the bare equality against the full text before wiki entry; 2406.01669 is "FLRW spacetimes that are asymptotically de Sitter" (not "with inflationary origin"), with entropy $=S_{\rm gen}$ for *semiclassical* states. The widening of the survival regime beyond Killing/stationary settings (same perturbative order, metric still input) is a fair, properly-tagged delta.

> **R2-F4 (Ali Ahmad–Jefferson 2501.01487) — KEEP, severity NONE.** Verified. Exemplary scoping: order-by-order, no bounded remainder, explicitly *not* the all-orders theorem; partial movement on iter5 subquestion #2 only. Keep the information-transfer mechanism in quotation marks (authors' proposal).

> **R2-F5 (Herderschee–Kudler-Flam 2510.01556) — KEEP, severity MINOR.** Verbatim abstract verified. Headline overclaim corrected: this does **not** "realize the iter5 live downside risk" — subquestion #1 concerns $O(\kappa)$ *gravitational-dressing* strain on the split/conditional-expectation structure, which remains open; this is a **parallel stringy (Hagedorn) realization at sub-string-length separations in the $g_s\to0$ free-string model**. Wiki-internal catch: the iter4 GPT-composition note already cites Hagedorn/$T\bar T$ split failure (arXiv:2005.08972) in a referee addendum — the minimal-collar-width-$\geq\ell_s$ corollary sharpens that addendum and must cross-cite it. Horowitz–Polchinski correspondence-point speculation stays note-level [SPECULATIVE], out of any registry statement. Strengthens (does not contradict) the OP-48c collar leg.

> **R2-F6 (Leutheusser–Liu PRD 111, 066021; Engelhardt–Liu 2509.05413; Crann–Kang 2412.00298) — KEEP, severity NONE.** All three verified; PRD publication (March 28, 2025) confirmed via APS though the arXiv page lacks the journal ref — cite the DOI in BIBLIOGRAPHY. The Engelhardt–Liu focusing criterion (vN-algebra existence read off from bulk null focusing, GNS-sector-dependent) is correctly read as encode-direction evidence; endorsed for citation in CONCLUSION §2.

> **R2-F7 (Kudler-Flam–Witten 2510.06376 + 2605.15180) — KEEP, severity MINOR.** Both verified, including the May 2026 Mellin-averaging companion. The "survives-after-averaging" fourth option is admitted into the OP-44 verdict list **with two riders**: (i) KW analyze *global* large-$N$ algebras and state-sequence convergence, not subregion crossed products — the transfer to OP-44 is the track's [INFERENCE]; (ii) averaging cures the non-convergence only **conditionally** (analytic continuation in $N$; superpolynomially small fluctuations). Does not locate or move $N_\ast$.

> **R2-F8 (Krishnan–Mohan 2310.05912, JHEP 05 (2024) 278) — KEEP, severity NONE.** Verified including the JHEP record. Algebra-level choice-independence (Connes cocycle) at perturbative order; a genuine sharpening of the wiki's state-independence record; correctly silent on the nonperturbative regime.

> **R2-F9 (Blommaert–Kudler-Flam–Urbach 2505.14771, JHEP 11 (2025) 113) — KEEP, severity MINOR.** Verified including the JHEP record. Retag precisely: the universal max-entropy-state proposal now has a **worked closed-universe JT realization** (no-boundary state = identity = trace) — but it *retains* the universal-state postulate, so it does **not** discharge decisive-progress item #4's request for a route avoiding one, and the cross-spacetime constant beyond JT (different $\Lambda$, higher-D, non-topological) stays [OPEN].

> **R2-F10 (lead corrections; Giddings status; mission judgment) — KEEP, severity MINOR.** Verified: no KLS-trio review exists (the orchestrator lead was garbled); Hong Liu's lectures (2510.07017, 119 pp, Oct 2025) are the synthesis; Giddings' latest are 2507.13351 (Giddings–Perkins, Jul 2025 — note: a unitary-evolution-pictures paper, not an algebraic-disruption follow-up) and 2510.24833 v3 (Jan 9, 2026); no follow-up or rebuttal surfaced. **Tag correction:** absence claims are [INFERENCE, high — negative-after-search, as of 2026-06], not ESTABLISHED-negative. The judgment stands: no all-orders survival proof, no no-go, $N_\ast$ unmoved; the "all published post-breakdown candidates remain algebraic, weakening Giddings' beyond-algebras horn" gloss is kept with a selection-effect guard (publication bias toward algebraic structures makes this weak evidence).

**No-go red-team (track-wide):** all results are perturbative / fixed-background / strict-large-$N$, so Weinberg–Witten, Coleman–Mandula/HLS, Haag, Reeh–Schlieder, spin-statistics, and the singularity theorems are not engaged; the perturbative QFC claim makes no nonperturbative assertion. No finding contradicts the wiki's closures: the dS cardinality no-go, HYP-CKV-VACUITY (every new construction installs its symmetry/foliation input — boost supertranslations, corner edge modes, comoving frames), and the OP-48c conditional no-go (F5 strengthens its collar leg) are all untouched. No candidate reopenings.
