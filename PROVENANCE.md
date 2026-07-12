---
title: Provenance — What Existed vs. What This Program Produced
type: registry
tags: [registry, provenance, attribution]
updated: 2026-07-11
---

# Provenance — What Existed vs. What This Program Produced

**Status:** Color-coded attribution ledger, current through iteration 23. Every claim below carries its iteration of origin and lives, refereed, in the linked notes.
**Last updated:** 2026-07-11

The color code:

- 🔵 **BLUE — prior art.** Existed before this program; we used it and cite it.
- 🟢 **GREEN — discovered/invented here.** New results produced by this program, adversarially refereed, and (per our live literature sweeps) not previously in the literature.
- 🟡 **YELLOW — rediscovered here.** Proved independently by this program, then found in prior art during our own verification — attribution honesty is part of the method; the prior source owns the result, our proof stands as an independent second derivation.
- 🔴 **RED — impossibility results proved here.** Boundaries this program established on *how* the remaining problem can and cannot be solved — arguably its most distinctive product.

---

## 🔵 Prior art this program stands on

| Result | Source |
|---|---|
| 🔵 Tomita–Takesaki modular theory; type III₁ structure of local algebras | Tomita, Takesaki; Fredenhagen 1985 |
| 🔵 Bisognano–Wichmann: wedge modular flow = boost; wedge vacuum ergodicity | Bisognano–Wichmann 1975/76; Borchers 1992; Driessler 1975 |
| 🔵 Massless double-cone modular flow is geometric | Hislop–Longo, CMP 84 (1982) |
| 🔵 The E=0 exclusion for the massive interval (via antilocality) | **Figliolini–Guido 1989, p. 429** (see 🟡 below); Segal–Goodman 1965 |
| 🔵 Type III₁ of the second-quantization factors | Figliolini–Guido, J. Operator Theory 31 (1994) |
| 🔵 Ergodic states are generic on III₁ factors | Marrakchi–Vaes, Crelle 809 (2024) |
| 🔵 Relative bicentralizer flow ergodicity (with expectation) | Marrakchi, arXiv:2606.23636 (2026) |
| 🔵 The correlator (Peschel) method; exact massless interval modular data | Peschel; Casini–Huerta |
| 🔵 Massive interval modular operator numerics (mass/angular-momentum dependence) | Bostelmann–Cadamuro–Minz, AHP 2023; Cadamuro 2312.08525 |
| 🔵 Sine-type entire functions ⟹ exponential Riesz bases | Levin 1961; Golovin 1964; Avdonin–Ivanov 1995 |
| 🔵 Mourre theory; dilation analyticity; exponential bounds | Mourre; Aguilar–Combes 1971; Froese–Herbst 1982; Georgescu–Gérard 1999 |
| 🔵 Absence of positive eigenvalues for local short-range potentials | Kato 1959; Agmon; Simon |
| 🔵 Embedded eigenvalues occur in multi-interval finite Hilbert transforms | Bertola–Katsevich–Tovbis, arXiv:2008.10058 |
| 🔵 Definitizable operators in Krein spaces (finitely many non-real points) | Langer; Jonas; Azizov–Jonas–Trunk |
| 🔵 Entanglement-first results the wager rests on (RT; entanglement first law; Einstein equation of state; crossed-product entropy) | Ryu–Takayanagi; FGHMVR; Jacobson 1995/2015; CLPW et al. |
| 🔵 Fractional unique continuation (post-1989 toolset) | Fall–Felli 2014; Rüland 2015; Ghosh–Salo–Uhlmann 2020 |

## 🟢 Discovered / invented by this program

| Result | Where |
|---|---|
| 🟢 **(E_O)** isolated and named: vacuum ergodicity on massive double-cone algebras as *the* single gate of the net-naturality no-go — never previously posed for the bounded massive case (verified by dedicated literature sweep) | [iter 16](notes/2026-07-03-iter16-synthesis.md), [iter 17](notes/2026-07-07-iter17-EO-assault-synthesis.md) |
| 🟢 **LEM-NET-NATURALITY-G**: the multi-wedge classification — localized natural carriers are ±1; fully-natural non-localized carriers are gauge gradings with Δ_geo = 0; the commutant gap classified, not closed | [iter 16](notes/2026-07-03-iter16-G1-multiwedge-naturality.md) |
| 🟢 The **η₀ vacuity chain**: η₀ = sgn(ln Δ) achieves the literal "indefinite pairing from modular data" target yet is provably geometry-void, algebra-incompatible, non-localizable — and the five-route **carrier-problem convergence** built on it | iters 7–15; [the dossier](notes/2026-06-19-iter15-carrier-problem-dossier.md) |
| 🟢 The **free-field reduction** of (E_O) to a one-particle spectral question, with the bosonic dΓ(A) correction refuting the naive kernel criterion | [iter 17](notes/2026-07-07-iter17-EO-assault-synthesis.md) |
| 🟢 The first **numerical measurements** of the massive interval modular spectrum's near-zero structure: the ε_k → (2j+1)π²/ln L ladder; the pinning scan (no embedded eigenvalue); the edge-divergence probe; the resolvent-H1 probe; the Gram probe | iters 18–23; [scripts/eo-modular-numerics.py](scripts/eo-modular-numerics.py) |
| 🟢 The **bilateral-antilocality reformulation**: modular eigenvalue μ² > 1 ⟺ coupled antilocality data with coupling c = μ²/(μ²−1) > 1 (FG-1989 exactly the boundary case) | [iter 20](notes/2026-07-11-iter20-antilocality-extension.md) |
| 🟢 Two **rigidity theorems**: every candidate eigenfunction lies in H¹₀(I) (Dirichlet rigidity, m > 0 essential) and vanishes on no open subinterval (support rigidity) | [iter 20](notes/2026-07-11-iter20-antilocality-extension.md) |
| 🟢 The **Corner Indicial Theorem**: cos²(πs) = c; complete simple root lattice n ± iτ₀; determinant ≡ −s(c − cos²(πs)); no local kill possible | [iter 21](notes/2026-07-11-iter21-lem-a1-prime-attempt.md) |
| 🟢 The **strip geometrization** with the closed-form potential Q = m²R²(cosh ξ − cos η)⁻² and translation-invariant coupled edges | [iter 21](notes/2026-07-11-iter21-lem-a1-prime-attempt.md) |
| 🟢 The **c-collapse**: the entire free-field gate ⟺ σ_p(A) ∩ (1,∞) = ∅ for the single self-adjoint operator A = S_I^{1/2}R_I S_I^{1/2} — the operator the numerics measure | [iter 21](notes/2026-07-11-iter21-lem-a1-prime-attempt.md) |
| 🟢 The **conditional Mourre theorem** with the explicit renormalized conjugate D_g (i[A₀, D_g] = 1; A₀ = coth²(πD)); the Möbius spectral identity reading of the ladder | [iter 22](notes/2026-07-11-iter22-mourre-feshbach.md) |
| 🟢 The **(a′) Birkhoff computation**: characteristic quadratic z² − 2(2c−1)z + 1, discriminant 16c(c−1) > 0, roots e^{±2πτ₀} — machine-verified two independent ways | iters 22–23; [iter 23](notes/2026-07-11-iter23-crux-attack.md) |
| 🟢 The **named open lemmas** posed for the field: **LEM-A1‴-T** (the transfer/Gram bound) and **LEM-A1⁗** (Pontryagin-channel on-shell transversality) — the entire remaining free-field gate in two precisely-posed statements | [iter 23](notes/2026-07-11-iter23-crux-attack.md) |
| 🟢 **LEM-A1‴-T PROVED** — the transverse-pencil eigenvector family is a Riesz basis for every fixed c > 1, by the elementary weighted-Fourier → unitary-folding → constant-intertwiner transfer with explicit frame bounds (assembly: PROOF_ASSEMBLES; machine-verified 1.4×10⁻¹⁵); with it, the closed-form Gram G = Toeplitz + (πC/2)J and both degeneracy laws | [iter 24](notes/2026-07-11-iter24-transfer-lemma-falls.md) |
| 🟢 **P1-NF, the normal form** — the entire free-field gate is EXACTLY a scalar imaginary-Aharonov–Bohm-flux zero-mode exclusion, H(iτ₀)g = 0 on the cylinder (assembler re-derived cold; 36/36 machine checks); with it the closed-form on-shell functional and the mode recast as a coupled LOCAL system | [iter 25](notes/2026-07-12-iter25-normal-form.md) |
| 🟢 The **Bari supplement** ((Q) ⟹ Riesz basis; iteration-24's exact-lattice conditionality discharged) and the **complex-c extension** of the transfer lemma (five elementary steps; machine-verified at five complex points) | [iter 25](notes/2026-07-12-iter25-normal-form.md) |
| 🟢 The **order-blindness lemma** (indicial corner data is invariant under both order-reversing ℤ₂ operations — neither orientation bit of n₁ is a function of it) and its honest boundary: the first mass correction is R1-odd, so the n₁ wall is conformal-scope | [iter 25](notes/2026-07-12-iter25-normal-form.md) |
| 🟢 The **common-cause theorem** (mode coordinates): the constant imaginary part of the corner lattice simultaneously powers the transfer lemma's explicitness and the carrier screen's vacuity — one structural fact behind both | [iter 25](notes/2026-07-12-iter25-normal-form.md) |
| 🟢 **S5, the n-uniform weighted-Volterra bound** (geometric-slack form) — branch (a) of the terminal-profile dichotomy forces vanishing for the INFINITE channel system; with it the **{LEM-A1⁗-N} ⟺ LEM-A1⁗ equivalence** and the structural correction that the un-slacked norm fails Θ(n) | [iter 26](notes/2026-07-12-iter26-s5-and-seam.md) |
| 🟢 **LEM-TRACE** — the corner-weighted trace lemma grounding the seam identity with no extra corner term (the iteration-21 resonant-log caveat discharged); with it the graded seam chain and the Perron/positivity-improving structure of the free seam operator | [iter 26](notes/2026-07-12-iter26-s5-and-seam.md) |
| 🟢 The **Krein/parity dictionary** Φ*J_cΦ = −((c−1)/2)·P (orientation-reversing; bilinear-only complex continuation), the P1-NF domain-closure lemma, and the **explicit complex-c radius** r(c₀) | [iter 26](notes/2026-07-12-iter26-s5-and-seam.md) |
| 🟢 The **encoding-screen corollary** (no distinguishing experiment even in principle, as a corollary of encode-not-generate) and the reverse-Weinberg–Witten ⟺ carrier identification | iters 6, 9 |

## 🟡 Rediscovered here (independent proof; prior art found during our own verification)

| Result | The honest story |
|---|---|
| 🟡 **1 is not an eigenvalue of the massive interval modular operator** (the E=0 half of the free-field gate) | Proved here via factoriality (**LEM-K0**, iteration 19) — then our referee downloaded the Figliolini–Guido 1989 paper and found the result on p. 429, proved via antilocality. FG own it; LEM-K0 stands as an independent second proof by a different mechanism, and the iteration-17 `[unverified]` flag was retired against the primary source. |
| 🟡 **τ₀ = ε/2π** (the corner Mellin frequency equals the modular energy over 2π) | The relation is Bisognano–Wichmann/local-Rindler physics — long known. What is new (🟢) is its *derivation route*: it falls out of a pure boundary-value corner computation with no physics input, and was then verified on the lattice at the percent level. |

## 🔴 Impossibility results proved here (how this problem can NOT be solved)

| Boundary | Where |
|---|---|
| 🔴 **No decay/analyticity-class theorem can close the gate**: the five-line Gaussian rank-one counterexample — a self-adjoint nonlocal kernel inside *every* exponential class, dilation-entire, hosting an embedded eigenvalue; Kato–Agmon–Simon is irreducibly local; complex scaling only θ-persists | [iter 22](notes/2026-07-11-iter22-mourre-feshbach.md) |
| 🔴 **No family-level/soft theorem**: embedded eigenvalues genuinely occur in the ambient operator family (application of 🔵 BKT); only geometry-specific analysis can decide the single interval | [iter 20](notes/2026-07-11-iter20-antilocality-extension.md) |
| 🔴 **No pointwise-positive Krein symmetrizer**: the unique pointwise symmetrizer of the strip pair is indefinite, [[c,−c],[−c,1]] — the Froese–Herbst exclusion is not licensed on the coupled system | [iter 21](notes/2026-07-11-iter21-lem-a1-prime-attempt.md) |
| 🔴 **No global Krein definitizability** for any c > 1 (infinitely many non-real essential branches exceed Langer's bound) — the corner exponents that define the gate kill definitizability | [iter 23](notes/2026-07-11-iter23-crux-attack.md) |
| 🔴 **(E_O) is undecidable at the invariant level** (type, Connes spectrum, genericity — Powers/Araki–Woods counterexamples); the wedge scaling engine has no bounded-region analogue; scaling-limit transport fails | [iter 17](notes/2026-07-07-iter17-EO-assault-synthesis.md) |
| 🔴 The operator-algebra-side closures: the commutant gap carries no carrier (iter 10); the Krein/indefinite-metric route collapses (iter 12); every untried modern framework reproduces the encoding screen (iter 15); the causal order n₁ is presupposed by every known algebraic seed (iters 18/20) | iters 10–20 |
| 🔴 **The fifth methods-negative (numerical grade):** plain Konno–Kuroda norm contraction cannot close the gate (spectral radius 2.3–3.0 on every window, every refinement — the on-shell channel dominates); the naive Birman–Schwinger splitting fails (‖K‖ ≈ 9.7); the mR → ∞ norm-collapse corner is a lattice-mass artifact (σ(A) = [1,∞) a.c. for every mR). Computer-assisted exclusion survives only in on-shell-projected form — an assistant to the lemma, never a bypass | [iter 25](notes/2026-07-12-iter25-normal-form.md) |

---

**Reading the ledger honestly:** the 🟢 and 🔴 rows are real mathematics produced by this program — but none of them is a universal theory, and the program's verdict (unchanged through 22 consecutive refereed confirmations) is that the leading route *encodes* geometry without *generating* it. The 🟡 rows are the discipline working: independent proofs kept, credit corrected against primary sources. The full evidentiary trail for every row is in [FINDINGS.md](FINDINGS.md) and [CHANGELOG.md](CHANGELOG.md).

## See also
- [FINDINGS.md](FINDINGS.md) — the iteration-by-iteration record behind every row
- [notes/2026-06-19-iter15-carrier-problem-dossier.md](notes/2026-06-19-iter15-carrier-problem-dossier.md) — the posed problems (🟢, open, yours to solve)
- [EPISTEMICS.md](EPISTEMICS.md) — the tag discipline that makes this ledger trustworthy
