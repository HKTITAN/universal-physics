---
title: "Iteration 21 — the LEM-A1′ proof attempt: the Corner Indicial Theorem lands (τ₀ = ε/2π), the strip geometrization with closed-form potential, and the c-collapse — the whole gate becomes one spectral question about one operator (LEM-A1″); hedge holds at R7"
type: note
tags: [note, iter21, synthesis, numerics]
updated: 2026-07-11
---

# Iteration 21 — attempting LEM-A1′

**Status:** Direct proof attempt on LEM-A1′ (the iteration-20 corner lemma). The integrator's own hand-derived corner indicial computation was submitted to a binding adversarial referee (default REFUTE); two proof lenses executed the global architectures (S1 conformal-strip + complex deformation; S2 global Mellin/Jost matching); a binding assembling referee re-derived every load-bearing step and adjudicated whether a complete proof assembles. Lattice verification of the indicial law ran at two precisions (zero-count staircase; analytic-signal phase fit, 1–3% agreement on well-resolved modes).
**Outcome:** **Verdict UNCHANGED — 20th consecutive confirmation; hedge HELD at R7** (no complete proof assembles; the exclusion step is open in both routes; no eigenvalue found either). The yield is the sharpest reduction of the program to date: **three new ESTABLISHED results** and the collapse of the entire free-field gate to a single spectral question — **LEM-A1″** — about a single explicitly-constructed self-adjoint operator that is *formally identical to the operator the in-repo numerics diagonalizes*.
**Last updated:** 2026-07-11
**Iteration:** 21

---

## 1. The Corner Indicial Theorem `[ESTABLISHED — refereed CONFIRMED_WITH_CORRECTIONS]`

For the coupled extension pair of LEM-A1′ at a corner (±R, 0) (polar (r, θ), θ ∈ (0, π); conditions ∂_θu(π) = 0, ∂_θv(0) = 0, v(0) = u(0), v(π) = c·u(π)):

- **The indicial (Kondratiev-pencil) equation is cos²(πs) = c**, with the 4×4 boundary-condition determinant identically **−s(c − cos²(πs))** (referee re-derived symbolically and numerically to 10⁻¹⁴).
- **The complete root set is s = n ± iτ₀, n ∈ ℤ, τ₀ = arccosh(√c)/π — every root simple** (derivative −π sin(2πs) ≠ 0 at every root): the trigonometric ansatz is complete, no log modes at leading order.
- **τ₀ = ε/2π exactly** under the modular dictionary c = cosh²(ε/2) (both identities verified to 12 digits) — the local Bisognano–Wichmann/Rindler relation, recovered from a pure boundary-value corner computation.
- **H¹ classification:** the n = 0 family r^{±iτ₀} is bounded-oscillatory with |∇| ~ r⁻¹, **not** locally H¹ (these are the continuum modes); the n ≥ 1 families **are** H¹-admissible with H¹₀-compatible traces — so **no local kill exists; the exclusion must be global.**
- Dropping m² at the corner is legitimate (weight-(+2) lower-order term; Kondrat'ev 1967; Kozlov–Maz'ya–Rossmann AMS Surv. 52, verified live). **Registered caveat:** since s+2 is again a root, the mass series is **resonant** — log r factors generically enter at order r^{s+2}; any global argument using corner expansions must carry them.
- **Lattice verification (two estimators):** zero-count staircase across the ladder matches τ₀ = ε/2π with two-corner parity doubling (L = 768, m = 1); analytic-signal phase fit gives τ_fit/τ_pred = 1.00–1.03 on modes with ≥ 2 oscillations in the fit window (low-mode scatter is estimator-limited). `[corroborating, not load-bearing]`

## 2. The strip geometrization `[ESTABLISHED — S1, assembler-verified]`

The Möbius/log map w = log((z−R)/(z+R)) (z = −R coth(w/2)) sends the problem to the strip {0 < η < π}: **(−Δ + Q)(U, V) = 0 with the new closed form Q(ξ, η) = m²R²(cosh ξ − cos η)⁻²**, and translation-invariant coupled edge conditions (η = 0: ∂V = 0, U = V; η = π: ∂U = 0, V = cU). Corrections to the iteration-20 architecture, both established:
- **No confining end:** Q decays 4m²R²e^{−2|ξ|} at BOTH strip ends (the corners); the only singularity is the |w|⁻⁴ barrier at w = 0 (spatial infinity).
- **Complex translation fails structurally** (the free part is translation-invariant; wrong deformation group); the correct tool is **exterior dilation** in ξ (Simon 1979; Hunziker; Gérard–Sigal), and Q is exterior-dilation-analytic in the full sector — with the transverse eigenproblem reproducing the indicial equation exactly (one oscillatory channel ±iτ₀ per parity, all others evanescent), and an embedded eigenvalue staying exposed under rotation (no threshold collision — the threshold step of the architecture dissolves).
- **A new no-go (assembler):** the unique pointwise symmetrizer of the strip pencil is the **indefinite Krein metric [[c, −c], [−c, 1]]** (signature (1,1)); no positive local inner product exists, so the Froese–Herbst exclusion is not licensed on the coupled system — explaining structurally *why* naive complex-scaling resists: the c-coupled pair is the characteristic-value form of a self-adjoint operator, not itself self-adjoint.

## 3. The c-collapse `[ESTABLISHED — S2, independently re-derived by the assembler, verified numerically to 10⁻⁸]`

Setting f = χ_I F, the LEM-A1′ data are equivalent (both directions, ~6 lines, m > 0) to
> **R_I S_I f = κ f, f ∈ H¹₀(I), κ = c/(c−1) ∈ (1, ∞)**, with R_I = χ_I ω⁻¹ χ_I (positive K₀-kernel) and S_I = χ_I ω χ_I.

The ∀c > 1 quantifier **collapses**: LEM-A1′ ⟺ **the single fixed self-adjoint operator A = S_I^{1/2} R_I S_I^{1/2} on L²(I) has no point spectrum in (1, ∞)** (similarity via Segal–Goodman injectivity of S_I). Cross-check: κ = coth²(ε/2) = 4ν² — **A is exactly the symmetrized Peschel object that [scripts/eo-modular-numerics.py](../scripts/eo-modular-numerics.py) diagonalizes**; the lemma target and the in-repo numerics are now formally the same object (three independent numerical signatures already say: no point spectrum). Corollary: iteration-20's "phase monotonicity in c" mechanism was ill-posed — c is the eigenvalue, not a coupling. Also established en route: no sign-definite eigenfunction exists (every H¹₀ candidate oscillates infinitely near ±R), so Perron–Frobenius mechanisms fail structurally; and the BKT embedded-eigenvalue mechanism requires common endpoints of multi-intervals — structurally absent for the single interval `[live-verified]`.

## 4. The new named target — LEM-A1″

> **LEM-A1″ `[OPEN]`:** σ_p(A) ∩ (1, ∞) = ∅ for A = S_I^{1/2} R_I S_I^{1/2} on L²(I).

**Route (primary):** a Mourre/virial positive-commutator estimate for A with conjugate operator **D = the Hislop–Longo Möbius-flow generator of the interval** (= strip translation ∂_ξ after the log map — the *exact symmetry of the massless part*, which is why the massless spectrum is purely a.c.). The mass term is the only symmetry-breaking piece and is exterior-dilation-analytic with e^{−2|ξ|} decay at both strip ends — precisely the profile Mourre theory wants. **After the c-collapse this is a computation about ONE self-adjoint operator — the classical virial theorem applies, no Krein obstruction.** Concrete next step: compute [A, iD] and check strict positivity on compact subsets of (1, ∞) modulo compacts. **Route (fallback):** Feshbach-project onto the n = 0 open channel; prove the nonlocal effective potential inherits exponential decay + analyticity; extend subordinacy/Levinson theory (S2 sub-lemmas (a) closed-channel Riesz bounds for the non-self-adjoint transverse pencil, (b) nonlocal Levinson — both open).

## 5. Ledger effect

1. Three new `[ESTABLISHED]` results: the Corner Indicial Theorem (with the τ₀ = ε/2π BW identity and the resonant-log caveat); the strip geometrization (closed-form Q; exterior-dilation analyticity; the Krein-symmetrizer no-go); the c-collapse (LEM-A1′ ⟺ LEM-A1″).
2. **Watch item (δ) sharpens to LEM-A1″** — one self-adjoint spectral question about one explicit operator, with a named conjugate-operator route.
3. **Hedge: HYP-CKV-VACUITY HELD at R7** (assembly verdict explicit: no complete proof assembles; the exclusion step is open in both routes; codim-2 genericity cannot exclude isolated parameter points). Verdict unchanged, **20th consecutive confirmation**; count FIVE; no numeric ID consumed.

## See also
- [2026-07-11-iter20-antilocality-extension.md](2026-07-11-iter20-antilocality-extension.md) — where LEM-A1′ was minted
- [../HYPOTHESES.md](../HYPOTHESES.md) — iteration-21 refinements; LEM-A1″ registered
- [../scripts/eo-modular-numerics.py](../scripts/eo-modular-numerics.py) — the operator A, diagonalized (the numerics ARE the lemma object)
