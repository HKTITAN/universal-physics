---
title: "OP-44 & OP-48(c) iteration-6 attack: theorem-shaped brackets on the crossed-product fate, and a hardened horn C"
type: note
tags: [note, iter6, crossed-product, type-iii-algebras]
updated: 2026-06-10
---

# OP-44 & OP-48(c) iteration-6 attack: theorem-shaped brackets on the crossed-product fate, and a hardened horn C

**Status:** ATTEMPT executed — both residual levers MOVED without flipping the headline. OP-44: `didItMove = sharpened-both-sides` (proven failure-side instance + proven survival-side rigidity in the AdS time-band model; the order-$G_N^2$ obstruction is now *named*: quadratic/boost linearization-instability constraints). OP-48(c) horn C: `didItMove = hardened` (exact full-pair reading is theorem-shaped; approximate reading uniformly gapped; residue relocated to a GPT formalization choice plus a constructed III$_1$-composition alternative). Medium-high confidence.
**Last updated:** 2026-06-10
**Iteration:** 6

This note executes the iteration-6 attack on the two open analytical levers carried out of saturation (see [../CONCLUSION.md](../CONCLUSION.md) §5): **OP-44/OP-CP1** (nonperturbative crossed-product fate; predecessor [2026-06-08-iter5-op44-nonperturbative-crossed-product.md](2026-06-08-iter5-op44-nonperturbative-crossed-product.md)) and **OP-48(c) horn C** (the \"any QM-selecting composition must interpose a Type I factor\" step; predecessors [2026-06-08-iter5-op48c-collarfree-composition.md](2026-06-08-iter5-op48c-collarfree-composition.md), [2026-06-08-iter4-gpt-type3-resolution.md](2026-06-08-iter4-gpt-type3-resolution.md)). Deliverables: a 2024–2026 literature delta (every citation verified this session unless marked), the author's own sharpened statements with proof obligations, and an honest movement verdict.

> Scope honesty, up front. (1) The Summers–Werner \"every normal state of a III$_1$ pair maximally violates Bell\" theorem is load-bearing for Part 2; its *existence and bibliographic identity* were verified (numdam), but the exact theorem text was confirmed only through secondary sources — the referee should spot-check hypotheses. (2) The Araki-perturbation blocker in Conjecture S obligation P2 is standard textbook material cited [unverified] this session. (3) All abstract-level verifications are flagged as such; no full PDF was read end-to-end.

---

## Part 1 — OP-44/OP-CP1: the nonperturbative crossed-product fate

### 1.1 Literature delta (2024–2026, verified)

The standing position ([2026-06-08-iter5-op44-nonperturbative-crossed-product.md](2026-06-08-iter5-op44-nonperturbative-crossed-product.md)): regime-dependent survival with author-estimated boundary $N_\\ast \\sim R/2GE_f$, **no theorem on either side**. The sweep found genuine movement on both sides — none of it from Giddings or Witten:

1. **Jensen–Raju–Speranza, *Holographic observers for time-band algebras*** (arXiv:2412.21185; JHEP **06** (2025) 242). Three results `[ESTABLISHED, abstract-verified]`:
   - **(a) A proven failure-side instance.** The algebra of a boundary time band in AdS quantum gravity *strictly has no commutant*: products of operators inside the band generate operators outside it. This is structural, not perturbative — the first theorem-grade statement in the survey of a natural subregion(-like) algebra failing to be a von Neumann algebra with commutant *nonperturbatively*.
   - **(b) The coarse-grained rescue.** In a state containing a macroscopic bulk observer, a *coarse-grained* algebra with nontrivial commutant exists; at leading order in gravitational perturbation theory (with a specific dressing) it reduces to the modular crossed product. This independently confirms the iter-5 \"survival = approximate / coarse-grained / observer-relational\" reading.
   - **(c) Rigidity.** A uniqueness theorem: *the modular crossed product is the only crossed product of a Type III$_1$ algebra resulting in an algebra with a trace.* Consequence `[INFERENCE, mine]`: the survival side has a **unique landing spot** — if any tracial (Type II) truncation survives at higher orders, it must be the modular crossed product. There is no alternative tracial completion to retreat to.
   - They explicitly flag \"technical challenges in extending this construction to higher orders in perturbation theory\" — direct confirmation that **no all-orders control exists** as of 2025.

2. **De Vuyst–Eccles–Höhn–Kirklin, *Linearization (in)stabilities and crossed products*** (arXiv:2411.19931; JHEP **2025**, 211) `[ESTABLISHED, abstract-verified]`. The constraints relevant to the QRF/crossed-product construction beyond leading order are **second-order (quadratic) boost constraints** — the classical linearization-instability phenomenon. For *spatially closed* spacetimes, imposing them on the linearized theory has \"essentially unambiguous justification\"; with boundaries or broken isometries the justification is contingent. Consequences `[INFERENCE]`: (i) the order-$G_N^2$ obstruction is now **named** — it is the quadratic constraint sector, not vague \"higher-order dressing\"; (ii) the closed-universe (dS-like) case has *cleaner* second-order credentials than the bounded (AdS/black-hole) case, mildly supporting the iter-5 open subquestion #4 conjecture that the dS II$_1$ structure is more robust.

3. **Failure-side ecosystem** (proposals, not theorems): **Engelhardt–Liu, *Algebraic ER=EPR and Complexity Transfer*** (arXiv:2311.04281) — nonperturbative algebraic formulation of ER=EPR ($G_N \\to 0$), with a proposed *transfer of an emergent Type III$_1$ subalgebra* of high-complexity operators from black hole to radiation at the Page time, i.e. algebra-type *dynamics* exactly where the subregion structure is expected to degenerate `[SPECULATIVE as physics; ESTABLISHED as published proposal]`. **Herderschee–Kudler-Flam, *Stringy algebras, stretched horizons, and quantum-connected wormholes*** (arXiv:2510.01556, v2 Dec 2025) — an algebraic definition of stretched horizons via **breakdown of the split property at string-length separations** (Hagedorn tower) `[ESTABLISHED as construction, abstract-verified]`.

4. **Survival-side breadth, all semiclassical** `[ESTABLISHED]`: Kudler-Flam–Leutheusser–Satishchandran, *Algebraic Observational Cosmology* (arXiv:2406.01669) — dressed observables for a comoving FLRW observer, von Neumann entropy = generalized entropy of the causal diamond; Sahu–van der Heijden–Van Raamsdonk–Zibakhsh (arXiv:2511.21852, v2 May 2026) — *postulated* (explicitly not constructed) algebras for Bousso–Penington generalized entanglement wedges; Soni (arXiv:2307.12481; JHEP **01** (2024) 123) — the II$_\\infty$/II$_1$ crossed products as *constrained limits of Type I structures* (area operator as center, holographic-code approximants); Rignon-Bret–Vilatte (arXiv:2601.03353) — a dual GSL at null infinity; Hong Liu's lectures (arXiv:2510.07017). Every one presupposes a semiclassical background — the encode-not-generate pattern intact.

5. **Named-author negatives** `[ESTABLISHED, search-bounded]`: Giddings' only 2026 activity is the v3 revision (Jan 9, 2026) of arXiv:2510.24833; no new Witten paper on this thread (latest: arXiv:2308.03663, JHEP **03** (2024) 077); Faulkner–Speranza's GSL is published (JHEP **11** (2024) 099). The orchestrator lead \"Buchholz–Fewster\" matches **no joint paper** — the correct sources are Fewster solo (arXiv:1501.02682; 1601.06936) and Buchholz solo classics. `[correction]`

### 1.2 The sharpening: two conjectures with proof obligations (the author's)

**Conjecture S (survival; \"order-$G_N^2$ inclusion stability\").** `[INFERENCE — own construction]` Around a background with a bifurcate Killing horizon, for each $n \\ge 2$ there exists a $\\ast$-algebra $\\hat{\\mathcal A}_n(O)$ of order-$n$ dressed observables such that:
(i) $[\\hat{\\mathcal A}_n(U), \\hat{\\mathcal A}_n(U')] = O(\\kappa^{n+1})$ for spacelike $U, U'$ ($\\kappa^2 = 32\\pi G$);
(ii) the weak closure in the GNS representation of the order-$n$ corrected KMS state is an inner/cocycle perturbation of the leading crossed product $\\mathcal A \\rtimes_\\sigma \\mathbb R$ — hence still Type II, with trace agreeing to $O(\\kappa^2)$;
(iii) inclusions $\\hat{\\mathcal A}_n(O_1) \\subset \\hat{\\mathcal A}_n(O_2)$ persist.

*Proof obligations and what blocks them:*
- **(P1) Second-order constraint solvability.** Construct the second-order dressing $V^\\mu_{(2)}$ solving the quadratic (graviton-stress-tensor) constraint with controlled remainder. **Named blocker:** this is exactly the linearization-instability sector (DEHK 2411.19931); in closed universes the constraint *must* be imposed and modifies which observables exist; with boundaries its imposition is a choice. Nobody has solved it with operator-algebraic control.
- **(P2) Cocycle stability of the type.** Show the order-$\\kappa^2$ correction acts by a Connes cocycle / inner perturbation. **Blocker:** Araki perturbation theory of KMS states requires the perturbation to be affiliated to the algebra and semibounded [unverified, textbook]; the second-order graviton self-energy is neither affiliated (it enlarges the algebra) nor semibounded. Takesaki-duality weight-independence covers *state* corrections within a fixed algebra, not *algebra* deformations. No mathematical no-go here — it is unbuilt, not forbidden.
- **(P3) Uniqueness of the landing spot.** *Already proven*: JRS rigidity (1.1.1c). Survival is rigid — there is no alternative tracial completion.

**Conjecture F (failure; \"dressing-capacity no-go\").** `[INFERENCE — own construction]` In any completion satisfying (i) a gravitational Gauss law and (ii) a hoop-type bound, there is no isotonous assignment $O \\mapsto \\mathcal A(O) \\subset B(\\mathcal H_{\\rm phys})$ with nontrivial commutant such that $\\mathcal A(O)$ contains the dressed $N$-particle operators $\\hat O_f^N$ for $N E_f > R/2G$; the commutant degenerates to $\\mathbb C 1$ at finite $N \\sim N_\\ast = R/2GE_f$.

*Proof obligations and what blocks them:*
- **(F1)** Define \"localizable in $O$\" without a background causal structure — the formalization gap; this is the same gap Giddings' \"network of Hilbert-space inclusions\" gestures at.
- **(F2)** Show black-hole-scale dressed states decohere all complement dressings — blocked by the absence of any nonperturbative Hilbert-space construction.
- **(F3)** Consistency with AdS/CFT, where $B(\\mathcal H)$ exists globally — **partially discharged**: the JRS no-commutant theorem (1.1.1a) is precisely the boundary-anchored instance of F.

### 1.3 Verdict, Part 1

`didItMove = sharpened-both-sides` (medium-high confidence). The iter-5 sentence \"no theorem on either side\" must be amended: **still no theorem about the bulk $N_\\ast$ boundary**, but the AdS time-band model now brackets the problem with a *proven* failure-side statement (no commutant) and a *proven* survival-side rigidity statement (unique tracial crossed product), and the order-$G_N^2$ obligation is *named* (quadratic/boost constraints). The dichotomy is no longer symmetric ignorance. Headline unaffected: every survival-side construction remains semiclassical; nothing generates geometry. `[INFERENCE, high]`

---

## Part 2 — OP-48(c) horn C: must QM-selecting composition interpose a Type I factor?

### 2.1 Literature delta (verified)

- **van Luijk–Stottmeister–Wilming, *Multipartite Embezzlement of Entanglement*** (Quantum **9**, 1818 (2025); arXiv:2409.07646) `[ESTABLISHED, abstract-verified]`: constructs a *multipartite system of commuting Type III$_1$ factors* on which **every state is embezzling**; identifies the consistency criterion separating embezzling families that converge to embezzling states (van Dam–Hayden vs Leung–Toner–Watrous). This is an explicit, internally consistent multipartite composition structure with no tensor factorization and no Type I interposition.
- **van Luijk, arXiv:2510.07563 (v2, Dec 20, 2025)** `[ESTABLISHED, abstract-verified]`: the type classification of von Neumann algebras is in one-to-one correspondence with a family of operational entanglement properties; Connes' III$_\\lambda$ classification re-expressed via embezzling errors.
- **Universal embezzlement is physically generic** `[ESTABLISHED]`: critical free-fermion chains and their Jordan–Wigner-dual spin chains are universal embezzlers (Nature Physics **21**, 1141–1146 (2025); arXiv:2406.11747); the property is generic for fermionic Gaussian states (arXiv:2509.15749).
- **Stringy floor for the collar** `[ESTABLISHED as construction]`: Herderschee–Kudler-Flam (arXiv:2510.01556) define stretched horizons by *split-property breakdown at string-length separations* — the OP-48 collar (BREAK 2) acquires a physical lower bound $\\sim \\ell_s$, upgrading the iter-4 Hagedorn remark (arXiv:2005.08972) from \"the collar leg is robust\" to \"the collar is a physical scale.\" `[INFERENCE for the export]`
- **No missing-lemma paper found** that states horn C verbatim; the pieces exist scattered in the classical split literature (below). The lead \"Buchholz–Fewster\" is a non-paper `[correction]`.

### 2.2 The exact reading: horn C is theorem-shaped (own assembly)

Formalize \"QM-selecting composition\" for a commuting pair $(\\mathcal M_A, \\mathcal M_B)$, $\\mathcal M_B \\subseteq \\mathcal M_A'$, the GPT-faithful way: **existence of a normal product state** $\\varphi(ab) = \\varphi(a)\\varphi(b)$ — uncorrelated preparations, the precondition for local tomography's $\\dim V_{AB} = \\dim V_A \\dim V_B$ count.

**T1 (product state $\\Rightarrow$ split $\\Rightarrow$ Type I interposition).** `[ESTABLISHED ingredients; assembly mine]` If a normal product state exists across $(\\mathcal M_A, \\mathcal M_B)$, there is a Type I factor $N$ with $\\mathcal M_A \\subseteq N \\subseteq \\mathcal M_B'$, hence a spatial tensor factorization. *Proof route:* the GNS space of a product state over a commuting pair factorizes,
$$\\overline{\\{\\,a b\\,\\Omega_\\varphi\\,\\}} \\;\\cong\\; \\mathcal H_A \\otimes \\mathcal H_B, \\qquad a b\\,\\Omega_\\varphi \\mapsto a\\Omega_A \\otimes b\\Omega_B,$$
well-defined and isometric by the product property and commutation; normality of $\\varphi$ makes $\\pi_\\varphi$ quasi-contained in the identity representation; pulling back $B(\\mathcal H_A) \\otimes 1$ gives the interpolating Type I factor on $\\mathcal H$ (standard-position/amplification caveats absorbable for separable $\\mathcal H$). The equivalence \"normal product-state extension $\\Leftrightarrow$ split $\\Leftrightarrow$ Type I interpolation\" for commuting pairs is standard in the split literature (verified statement in the thermal-split paper hep-th/9811227; reviews: Fewster arXiv:1601.06936; Doplicher–Longo 1984 [carried from iter-4 verification]).

**Corollary (horn C, exact form).** For the Haag-dual pair $(\\mathcal M, \\mathcal M')$: split forces $\\mathcal M \\subseteq N \\subseteq \\mathcal M'' = \\mathcal M$, i.e. $\\mathcal M = N$ is **Type I**. So *exact* QM-type composition on the full local pair holds **iff** $\\mathcal M$ is Type I; on III$_1$ it fails, and any composition rule with normal product states must retreat to a proper sub-pair $(\\mathcal M_A, \\mathcal M_B \\subsetneq \\mathcal M_A')$ — which *is* the collar, with the Type I factor interposed. **The iter-5 INFERENCE is a theorem modulo (i) T1's standard-position technicalities and (ii) the formalization choice itself (§2.5).** `[INFERENCE, high]`

### 2.3 The approximate reading: a uniform Bell gap (own derivation)

The remaining escape was \"recovers finite-dim QM tensor structure *in some limit*.\" For the full pair this is closed with a constant gap:

**T2 (input).** Summers–Werner: for a Type III$_1$ factor $\\mathcal M$ on separable $\\mathcal H$, *every* normal state $\\varphi$ is maximally Bell-correlated across $(\\mathcal M, \\mathcal M')$: $\\beta(\\varphi) = \\sqrt 2$ (Ann. Inst. H. Poincaré **49** (1988) 215–243). `[ESTABLISHED — bibliographic identity verified at numdam; theorem statement confirmed via secondary sources; referee to spot-check hypotheses]` Mechanism: Connes–Størmer homogeneity — for III$_1$ with separable predual, $\\forall$ faithful normal $\\varphi, \\psi$, $\\forall \\varepsilon > 0$, $\\exists u \\in U(\\mathcal M)$: $\\| u\\varphi u^\\ast - \\psi \\| < \\varepsilon$ (J. Funct. Anal. **28** (1978) 187–196). `[ESTABLISHED, verified]`

**Gap derivation (mine).** Let $C = a_1(b_1 + b_2) + a_2(b_1 - b_2)$, with self-adjoint contractions $a_i \\in \\mathcal M$, $b_j \\in \\mathcal M'$. Then $\\|C\\| \\le 2\\sqrt 2$ (Tsirelson) and every separable — in particular every product — state $\\sigma$ has $\\sigma(C) \\le 2$. Maximal violation gives $\\sup_C \\varphi(C) = 2\\sqrt 2$, hence for every normal $\\varphi$ and every separable $\\sigma$:
$$\\|\\varphi - \\sigma\\| \\;\\ge\\; \\sup_C \\frac{\\varphi(C) - \\sigma(C)}{\\|C\\|} \\;\\ge\\; \\frac{2\\sqrt 2 - 2}{2\\sqrt 2} \\;=\\; 1 - \\tfrac{1}{\\sqrt 2} \\;\\approx\\; 0.293.$$
**Consequence:** the full-pair composition axiom fails *uniformly*, not just exactly — no sequence of normal states approaches product form. \"QM in some limit\" is impossible at the full-pair level, with a state-independent constant gap. `[INFERENCE — derivation elementary given T2]`

### 2.4 The subsystem reading: true but vacuous

Finite-dim QM bipartite structure embeds *exactly* inside the III$_1$ pair with no split of the full pair: choose matrix subfactors $F_A = M_n \\subset \\mathcal M$, $F_B = M_m \\subset \\mathcal M'$; then $F_A \\vee F_B \\cong M_n \\otimes M_m$ is a finite Type I factor on $\\mathcal H$, giving $\\mathcal H \\cong \\mathbb C^{nm} \\otimes \\mathcal K$, and every state on $M_n \\otimes M_m$ extends to a normal state. `[ESTABLISHED — standard]` But this does **not** evade interposition — it *instantiates* it: the sub-pair $(F_A, F_B)$ is trivially split with $N = F_A$ itself the Type I factor. So under the subsystem reading horn C is *vacuously* true (anything QM-shaped is Type I by definition), and under the full-pair reading it is *strongly* true (§2.2–2.3). The bite of horn C is therefore entirely in the **full-pair** reading — which is exactly the reading the GPT axioms (composition of the two subregion algebras themselves) require. `[INFERENCE, high]`

### 2.5 The irreducible residue: a proven dichotomy, an unforced choice

What horn C cannot deliver — even hardened — is that Type I composition is *forced*. The verified multipartite construction (arXiv:2409.07646) exhibits a consistent alternative composition primitive: commuting III$_1$ factors with **universal embezzlement** as the composition signature (every state embezzling; no product states; no tensor factorization). Combined with §2.3, composition axioms face a **binary, gapped dichotomy**:

| | Type I (textbook QM) | Type III$_1$ |
|---|---|---|
| normal product states | exist | none — uniformly gapped ($\\ge 1 - 1/\\sqrt2$) |
| embezzlement | maximally fails ($\\kappa_{\\max} = 2$) | universal ($\\kappa_{\\max} = 0$) |
| tensor factorization | exact | impossible for the full pair |
| multipartite version | standard | constructed (Quantum **9**, 1818 (2025)) |

Operator algebra proves the dichotomy; it cannot choose the horn. The choice is a physical/axiomatic input — the encodes-not-generates pattern recurring at the composition layer. And the III$_1$ horn is not exotic: critical fermion chains realize it (Nature Physics 2025). `[INFERENCE, high]`

### 2.6 Verdict, Part 2

`didItMove = hardened` (medium-high confidence). Horn C upgrades from bare INFERENCE to: **theorem-shaped under the load-bearing full-pair reading** (exact: T1 + corollary; approximate: uniform Bell gap), **vacuous under the subsystem reading**, with the residue relocated from operator-algebra mathematics to (i) the GPT-side formalization choice and (ii) the now-constructed III$_1$-embezzlement alternative. The CONCLUSION hedge \"horn C is INFERENCE, not a cited theorem; hardenable\" is **partially discharged** — it hardened, in the direction that *strengthens* the standing verdict. The split/collar tax additionally gains a physical floor ($\\ell_s$, stringy split breakdown). No Lorentzian geometry was generated anywhere in this analysis; the headline stands. `[INFERENCE, high]`

---

## Honest overall verdict

Neither lever flips [../CONCLUSION.md](../CONCLUSION.md). Both moved:
- **OP-44**: from \"regime-dependent, no theorem on either side\" to \"regime-dependent, theorem-grade *brackets* (JRS no-commutant; JRS tracial-crossed-product rigidity), with the order-$G_N^2$ obligation named (quadratic/boost constraints) and the closed-universe (dS) case cleanest.\" The bulk $N_\\ast$ boundary itself remains conjectural — Conjectures S and F with obligations P1–P3 / F1–F3 are the new canonical statement.
- **OP-48(c) horn C**: from INFERENCE to a proven, gapped dichotomy whose residue is a formalization choice. The hedge in CONCLUSION §5(4) should be re-worded: \"hardened to theorem-shaped under the full-pair reading; residual freedom is the choice of composition primitive (product preparations vs embezzlement), which operator algebra cannot decide.\"

No new experimental channel emerged; the wager's NOT-YET-PHYSICS status is untouched.

## Open subquestions (updated)

1. `[OPEN — sharpest next step on OP-44]` Solve proof obligation **P1**: construct $V^\\mu_{(2)}$ for the quadratic constraint with operator-algebraic remainder control, in the spatially closed (dS static patch) case first, where DEHK show the constraint imposition is unambiguous. Success would make Conjecture S a theorem at $n = 2$ for $\\Lambda > 0$.
2. `[OPEN]` Does JRS rigidity extend beyond crossed products by $\\mathbb R$ — i.e. is *any* tracial von Neumann completion of a III$_1$ subregion algebra (crossed product or not) unique? If yes, the survival side becomes fully rigid.
3. `[OPEN]` Can the JRS no-commutant argument for time bands be transplanted to bulk causal diamonds (giving Conjecture F a bulk instance), or is it irreducibly boundary-anchored?
4. `[OPEN — decides the horn-C residue]` Is there an *operational* principle (thermodynamic? complexity-theoretic?) that selects product-preparation composition over embezzlement composition, or are the two horns of §2.5 genuinely co-equal axiomatizations?
5. `[OPEN — verification]` Primary-source check of the Summers–Werner 1988 theorem hypotheses (separable predual; standard form; factor vs algebra), and of the exact hypotheses in the commuting-pair product-state/split equivalence (faithfulness; standardness) used in T1.

## See also

- [2026-06-08-iter5-op44-nonperturbative-crossed-product.md](2026-06-08-iter5-op44-nonperturbative-crossed-product.md) — predecessor; this note revises its \"no theorem on either side.\"
- [2026-06-08-iter5-op48c-collarfree-composition.md](2026-06-08-iter5-op48c-collarfree-composition.md) — predecessor; horn C hardened here.
- [2026-06-08-iter4-gpt-type3-resolution.md](2026-06-08-iter4-gpt-type3-resolution.md) — the split disjunction this builds on.
- [2026-06-08-iter4-modular-circularity.md](2026-06-08-iter4-modular-circularity.md) — sibling modular-flow obstruction.
- [../OPEN_PROBLEMS.md](../OPEN_PROBLEMS.md) — OP-44, OP-48 entries to update.
- [../CONCLUSION.md](../CONCLUSION.md) — §5 items 1 and 4 to re-word.
- [../HYPOTHESES.md](../HYPOTHESES.md) — HYP-EMBEZZLE-SELECT superseded by the §2.5 dichotomy.
- [../ASSUMPTIONS_LEDGER.md](../ASSUMPTIONS_LEDGER.md) — A-23; the second-order constraint sector refines it.
- [../EPISTEMICS.md](../EPISTEMICS.md) — tag discipline.
- [../BIBLIOGRAPHY.md](../BIBLIOGRAPHY.md) — new entries below.
- [../domains/quantum-field-theory.md](../domains/quantum-field-theory.md), [../domains/mathematics.md](../domains/mathematics.md), [../domains/information-theory.md](../domains/information-theory.md).

## References

*Verified this session (arXiv abstract page fetched or authoritative bibliographic page confirmed) unless marked [unverified].*

- K. Jensen, S. Raju, A. J. Speranza, *Holographic observers for time-band algebras*, arXiv:2412.21185 (v2 Feb 24, 2025); JHEP **06** (2025) 242. [abs fetched; journal ref via Springer]
- J. De Vuyst, S. Eccles, P. A. Höhn, J. Kirklin, *Linearization (in)stabilities and crossed products*, arXiv:2411.19931 (v3 May 9, 2025); JHEP **2025**, 211. [abs fetched]
- N. Engelhardt, H. Liu, *Algebraic ER=EPR and Complexity Transfer*, arXiv:2311.04281 (v2 Dec 19, 2023). [abs fetched]
- A. Herderschee, J. Kudler-Flam, *Stringy algebras, stretched horizons, and quantum-connected wormholes*, arXiv:2510.01556 (v2 Dec 3, 2025). [abs fetched]
- J. Kudler-Flam, S. Leutheusser, G. Satishchandran, *Algebraic Observational Cosmology*, arXiv:2406.01669 (v2 Jun 28, 2024). [abs fetched]
- A. Sahu, J. van der Heijden, M. Van Raamsdonk, R. Zibakhsh, *Algebras for generalized entanglement wedges*, arXiv:2511.21852 (v2 May 26, 2026). [abs fetched]
- R. M. Soni, *A Type I Approximation of the Crossed Product*, arXiv:2307.12481 (v4 Jan 22, 2024); JHEP **01** (2024) 123. [abs fetched]
- A. Rignon-Bret, M. Vilatte, *Black hole thermodynamics at null infinity. Part 1: Dual Generalized Second Law*, arXiv:2601.03353 (Jan 6, 2026). [abs fetched]
- H. Liu, *Lectures on entanglement, von Neumann algebras, and emergence of spacetime*, arXiv:2510.07017 (Oct 8, 2025). [abs fetched]
- S. B. Giddings, *Gravitational dressing: from the crossed product to more general algebraic and mathematical structure*, arXiv:2510.24833 (v3 Jan 9, 2026). [search-result confirmation of abs page and revision date]
- E. Witten, *A background-independent algebra in quantum gravity*, arXiv:2308.03663; JHEP **03** (2024) 077. [Springer page via search]
- L. van Luijk, A. Stottmeister, R. F. Werner, H. Wilming, *Relativistic Quantum Fields Are Universal Entanglement Embezzlers*, arXiv:2401.07292 (v4 Jul 22, 2025); PRL **133**, 261602 (2024). [abs fetched]
- L. van Luijk, A. Stottmeister, R. F. Werner, H. Wilming, *Embezzlement of entanglement, quantum fields, and the classification of von Neumann algebras*, arXiv:2401.07299 (v4 Apr 10, 2025). [abs fetched]
- L. van Luijk, A. Stottmeister, H. Wilming, *Multipartite Embezzlement of Entanglement*, arXiv:2409.07646 (v3 Jul 28, 2025); Quantum **9**, 1818 (2025). [abs fetched; journal via quantum-journal.org]
- L. van Luijk, A. Stottmeister, H. Wilming, *Critical fermions are universal embezzlers*, arXiv:2406.11747; Nature Physics **21**, 1141–1146 (2025). [Nature page via search]
- *Gaussian fermionic embezzlement of entanglement*, arXiv:2509.15749 (2025). [abs listing via search; authors not individually confirmed]
- L. van Luijk, *Entanglement in von Neumann Algebraic Quantum Information Theory*, arXiv:2510.07563 (v2 Dec 20, 2025). [abs fetched]
- S. J. Summers, R. F. Werner, *Maximal violation of Bell's inequalities for algebras of observables in tangent spacetime regions*, Ann. Inst. H. Poincaré Phys. Théor. **49** (1988) 215–243. [numdam bibliographic page fetched; the III$_1$ every-normal-state theorem statement confirmed via secondary sources only — spot-check]
- A. Connes, E. Størmer, *Homogeneity of the state space of factors of type III$_1$*, J. Funct. Anal. **28** (1978) 187–196. [statement and bibliography confirmed via multiple search results]
- *Nuclearity and split for thermal quantum field theories*, arXiv:hep-th/9811227 — carrier of the commuting-pair split equivalences (Type I interpolation; normal product-state extension). [equivalence statements quoted via search extraction; author attribution not double-checked]
- C. J. Fewster, *The split property for quantum field theories in flat and curved spacetimes*, arXiv:1601.06936; and arXiv:1501.02682. [arXiv listings via search]
- T. Faulkner, A. J. Speranza, *Gravitational algebras and the generalized second law*, arXiv:2405.00847; JHEP **11** (2024) 099. [journal ref via Springer search result]
- Doplicher–Longo, *Standard and split inclusions of von Neumann algebras*, Invent. Math. **75** (1984). [unverified this session — carried from iteration-4 wiki verification]
- H. Araki, perturbation theory of KMS states (Bratteli–Robinson II). [unverified — textbook; used only as the named blocker in obligation P2]

> **Binding note.** Where a correction in the referee verdict below conflicts with the body above, the **referee correction governs**; the body is the pre-referee submission, retained for the audit trail per house convention.

## Referee verdict

**Track A3-op44-op48c, iteration 6. All nine findings kept; one MAJOR correction (R6-F7), the rest minor.** Citation audit: every load-bearing source independently re-fetched or re-searched this session; no fabrications, no misattributions. One under-supporting citation (hep-th/9811227) re-anchored. The R6-F6 gap derivation was checked line-by-line and holds.

> **R6-F1 — keep (severity: minor).** JRS (arXiv:2412.21185; JHEP 06 (2025) 242) re-verified at abstract level on all four claims, including the verbatim no-commutant statement and the tracial-crossed-product uniqueness theorem; journal ref confirmed via Springer. Three fixes: (1) 'strictly has no commutant' → 'fails to define a von Neumann subalgebra with nontrivial commutant' (every operator set has *a* commutant); (2) drop the unverifiable 'first theorem-grade instance'; (3) the rigidity consequence holds only *within the crossed-product class* — a tracial truncation that is not a crossed product escapes JRS uniqueness. **Load-bearing:** the time band is a *boundary* algebra; the bulk $N_\ast$ statement of OP-44 remains theorem-free on both sides. The result brackets, not settles, OP-44 — the OPEN_PROBLEMS wording must keep that distinction explicit.

> **R6-F2 — keep (severity: minor).** DEHK (arXiv:2411.19931; JHEP 2025, 211) re-verified verbatim: the constraints 'turn out to be of second-order', justification 'essentially unambiguous' for spatially closed spacetimes, contingent with boundaries/absent isometries. The order-$G_N^2$ obstruction is now *named* — accepted. One bridge to state: DEHK's clean case is spatially *closed* slices (global dS); the wiki's subquestion #4 concerns the static-patch II$_1$, so the dS-robustness inference carries an extra step and stays [INFERENCE, medium].

> **R6-F3 — keep (severity: minor).** Conjectures S and F are a legitimate sharpening, correctly tagged [INFERENCE]. Repairs: P3 splits into P3a (show the higher-order tracial object is a crossed product — open) and P3b (uniqueness — proven, JRS); F3's 'exactly the time-band instance of F' softened to 'analogous boundary-anchored phenomenon' (F is a bulk statement with Gauss-law/hoop input; JRS has neither); the conjectures *supplement* the iter-5 regime-dependent verdict and its caveats ($N_\ast$ is the author's dimensional estimate), they do not replace it. The Araki-hypothesis blocker in P2 stays [INFERENCE, cited unverified].

> **R6-F4 — keep (severity: minor).** Both papers re-verified at abstract level (Engelhardt–Liu 2311.04281 type-transfer at Page time; Herderschee–Kudler-Flam 2510.01556 split breakdown at string-length separations). SPECULATIVE tag correct. Note 2510.01556 is an unreviewed preprint, and the $\ell_s$ collar floor is an inference restricted to stringy completions.

> **R6-F5 — keep (severity: minor).** The exact horn-C hardening survives red-team: normal product state across $(\mathcal M,\mathcal M')$ iff $\mathcal M$ type I is standard, and the Haag-dual corollary discharges the standard-position caveat. Tag [INFERENCE, theorem-shaped under the full-pair reading] — correct, not ESTABLISHED. **Citation repair:** hep-th/9811227 is solo Jäkel and its abstract does not carry the commuting-pair equivalences — re-anchor to Doplicher–Longo 1984 (wiki-verified iter 4), D'Antoni–Longo 1983, Summers 1990 [unverified], demoting Jäkel to corroboration. Engages the OP-48c closure explicitly and strengthens it; legitimate hedge-shrink of CONCLUSION §5 item 4.

> **R6-F6 — keep (severity: minor).** Summers–Werner 1988 bibliography re-confirmed at numdam; the III$_1$ every-normal-state theorem re-confirmed at secondary-source level (Halvorson AQFT review, Prop. 3.19) — primary still unread, caveat retained. The derivation $\|\varphi-\sigma\|\ge 1-1/\sqrt2$ was checked line-by-line (Tsirelson $\|C\|\le2\sqrt2$; $\sigma(C)\le2$ on the closed convex hull of normal product states; SW supremum) and is **correct**. State the hypotheses (separable predual; pair $(\mathcal M,\mathcal M')$; definition of 'separable state') in the wiki text. Closes the 'in-some-limit' escape at the full-pair level.

> **R6-F7 — keep (severity: MAJOR, corrected).** All four citations verified (multipartite commuting-III$_1$ universal embezzlement verbatim in Quantum 9, 1818; the one-to-one type/operational correspondence verbatim in 2510.07563). **The overclaim:** 'exactly two gapped operational regimes / binary dichotomy' is false — the cited correspondence is with the *full* type spectrum; Type II has no normal product states yet is not embezzling, III$_\lambda$ sits at intermediate $\kappa$. Corrected to: a proven *spectrum* with two physically motivated endpoints (Type I product-preparations vs III$_1$ universal embezzlement), each internally consistent, separated by the R6-F6 gap; the choice of endpoint is an unforced physical/axiomatic input. With that correction, replacing HYP-EMBEZZLE-SELECT's residue is authorized — the new statement uses the product-state invariant, exactly the fix the iter-5 MAJOR verdict on $\kappa_{\max}$ demanded.

> **R6-F8 — keep (severity: minor).** The Buchholz–Fewster correction and the negative Giddings/Witten sweeps are accepted and properly search-bounded; 2510.24833 v3 (Jan 9, 2026) matches the wiki's own iter-5 record. Tag repair: negative literature searches are dated process notes, not [ESTABLISHED] physics claims per EPISTEMICS.md.

> **R6-F9 — keep (severity: minor).** Spot-checks: Sahu et al. (2511.21852) 'we postulate features of the map' confirmed verbatim — the postulate-not-construct framing is exact; Rignon-Bret–Vilatte (2601.03353) confirmed, with the detail that the dual-GSL monotone is a thermodynamic potential built from the Bondi mass, not generalized entropy. Remaining items (2406.01669, 2307.12481, 2510.07017) are known-real and low-risk. Confirmation-class; the 'rigorous where geometry is pre-installed' pattern is correctly applied.

**No-go and closure audit (track level).** Bell/CHSH/Tsirelson are used *in the wiki's favor* (R6-F6) and correctly; Reeh–Schlieder, Haag, PBR, Kochen–Specker, spin–statistics, Weinberg–Witten not implicated. No finding quietly contradicts a wiki closure: R6-F5/F6/F7 explicitly engage the OP-48c conditional no-go and the iter-5 HYP-EMBEZZLE-SELECT verdict and strengthen both; R6-F1/F3 nuance — with the bulk/boundary distinction kept loud — rather than overwrite the OP-44 'no theorem on either side of $N_\ast$' line; the OP-46/HYP-CKV-VACUITY hedge and the dS cardinality no-go are untouched.

**Net.** Headline verdict unchanged and tightened on both levers: CONCLUSION §5 item 1 gains the time-band bracketing (with the bulk statement still theorem-free) and the named order-$G_N^2$ obstruction; item 4's horn-C hedge shrinks to a formalization choice plus the III$_1$-endpoint alternative — 'proven spectrum, unforced choice', not 'binary dichotomy'. Still NOT-YET-PHYSICS: nothing in this track supplies a distinguishing experimental test.
