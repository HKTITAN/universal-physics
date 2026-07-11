---
title: "Iteration 20 — the antilocality-extension attack: the eigenvalue question becomes EXACTLY a bilateral-antilocality statement; two new rigidity theorems; the missing lemma weakens to a corner problem (LEM-A1′); no closure, hedge holds at R7"
type: note
tags: [note, iter20, synthesis, numerics]
updated: 2026-07-11
---

# Iteration 20 — the antilocality extension attacked head-on

**Status:** Direct attack on the named residual of iteration 19 — extend the Figliolini–Guido antilocality kill from μ = ±1 to all real μ (equivalently: the massive interval/double-cone modular operator has no eigenvalue λ ≠ 1). Three refereed lenses (A1 fractional unique-continuation; A2 explicit virial/positive-commutator; A3 truncated Wiener–Hopf spectral theory) + one binding assembling referee (all load-bearing steps independently re-derived; all post-1990 citations live-verified, GSU Thm 1.2 verbatim) + a new eigenfunction-level numerical probe.
**Outcome:** **Verdict UNCHANGED — 19th consecutive confirmation; hedge HELD at R7** (the referee's assembly verdict is explicit: no complete proof assembles). No eigenvalue was discovered either — no carrier entry-ticket. The genuine yield: the problem is **compressed to its sharpest form ever** — an exact bilateral-antilocality reformulation, two new unconditional rigidity theorems, a proved no-soft-theorem obstruction, and a strictly weaker missing lemma (**LEM-A1′**) checkable cold by a fractional-UCP specialist.
**Last updated:** 2026-07-11
**Iteration:** 20

---

## 1. The exact reformulation `[ESTABLISHED — referee re-derived]`

Setting: d = 1+1 free massive scalar, interval I = (−R, R), ω = (m² − d²/dx²)^{1/2}, E = ℝ∖Ī. The modular eigenvalue problem in FG's μ-variable (μ = (λ+1)/(λ−1), |μ| > 1):

> **μ² > 1 is an eigenvalue ⟺ there exist F, G (defect-matched data) with ωF = 0 on I, ωG = 0 on E, G = cF on I and G = F on E, where c = μ²/(μ²−1) > 1.**

FG 1989's antilocality kill is exactly the degenerate boundary case (μ² = 1: F vanishes on I with ωF|_I = 0 ⟹ Segal–Goodman ⟹ F = 0). The open problem **is** "bilateral antilocality with coupling c > 1" — a statement purely about the fractional operator ω, with no operator-algebra content remaining.

## 2. Two new unconditional rigidity theorems `[ESTABLISHED — referee independently re-derived]`

1. **Forced Dirichlet rigidity (A2-R1).** Every eigenfunction ψ lies in **H¹₀(I)**: ψ = ν⁻²X_Iφ with φ ∈ L²(I) and ω⁻¹: L² → H¹ (m > 0 essential) gives ψ ∈ H¹(I) ⊂ C^{0,1/2}; membership in the form domain H^{1/2}₀₀(I) (Lions–Magenes Hardy condition ∫|ψ|²/dist < ∞) then forces ψ(±R) = 0. Complements the iteration-19 boost-analyticity rigidity.
2. **Support rigidity (A1(b) + R1 synergy, assembled by the referee).** No eigenfunction vanishes on any open subinterval of I (and no defect datum vanishes on any open subset of E). The Dirichlet rigidity lifts the defect data h, F, G into L²(ℝ), so this needs only **H¹-level massive antilocality** — not the full Ghosh–Salo–Uhlmann H^{−r} transfer. `[ESTABLISHED modulo that routine extension]`

## 3. The exact commutator structure, and why the massless case is easy `[ESTABLISHED]`

With the interval dilation generator A = (xp+px)/2: i[X, A] = −X + (m²/2)ω⁻³, i[P, A] = P − (m²/2)ω⁻¹, i[χ_I, A] = RΔ ≥ 0 — and in the eigen-pairing the order-0 parts **cancel identically**: the virial bulk is **O(m²)**. At m = 0 dilation homogeneity kills the bulk exactly — a structural explanation of why Hislop–Longo's massless case is purely a.c. The bulk is provably **not sign-definite** for m > 0 (the closing estimate is named but unproven), and the boundary terms sit behind the verified **Georgescu–Gérard C¹(A) regularity wall** (virial theorems genuinely fail without it — their CFKS-style counterexample; the referee also flagged A2's boundary-term bookkeeping as formal: a double-counted middle cutoff and an ill-defined δ·χ product, folded into the regularity gap, NOT propagated). So no positive-commutator kill.

## 4. The no-soft-theorem obstruction `[ESTABLISHED — live-verified]`

**Bertola–Katsevich–Tovbis (arXiv:2008.10058):** the multi-interval finite Hilbert transform has a.c. spectrum with **possibly embedded isolated eigenvalues** (and no singular continuous spectrum). Embedded point spectrum genuinely occurs in the finite-interval-convolution operator family, geometry-dependently — so **no family-level/soft theorem can decide our case**; only geometry-specific analysis can. Additionally: the massive kernel pair admits **no Morrison/prolate-type commuting differential operator** (Grabovsky–Hovsepyan classification: every commuting-DO kernel is meromorphic with at worst a simple pole; K₀(m|z|) has a log branch point) `[INFERENCE, high within the theorem's hypothesis class]` — structurally explaining why exactly the massless cases are the solved ones. The only known tool that decided the multi-interval analogue is Riemann–Hilbert steepest descent (Casini–Huerta's Painlevé-V isomonodromy is the massive entry point) — a program, not a theorem.

## 5. The new best-lead: LEM-A1′ (strictly weaker than iteration 19's target)

> **LEM-A1′ (the single sharpest missing piece).** For every c > 1: if ωF = 0 on I, ω(χ_E F + cχ_I F) = 0 on E, and χ_I F ∈ H¹₀(I), then F ≡ 0.

The H¹₀ input is **free** by the new Dirichlet-rigidity theorem. Route: a Caffarelli–Silvestre-type extension for (m²−Δ)^{1/2} (the elliptic operator ∂_y² + ∂_x² − m²) turns the pair into a coupled mixed Dirichlet–Neumann (**Zaremba**) problem in the half-plane; Fall–Felli Almgren monotonicity + Rüland-type Carleman/doubling at the corner points ±R must show every c > 1 forces indicial exponents −1/2 + iτ(c) with τ real nonzero — non-L², a fortiori non-H¹ — at both endpoints simultaneously. **Checkable cold by a fractional-UCP specialist; no operator-algebra input.** LEM-A1′ for all c > 1 ⟹ no eigenvalue λ ≠ 1 ⟹ (E_O) holds for the free massive scalar ⟹ **R7 → R8**. The corner-Mellin signature it must rule out is exactly the |x∓R|^{−1/2+iτ} behavior whose lattice shadow is the iteration-18 ladder ε_k ~ (2k+1)π²/lnL.

## 6. Front B — the eigenfunction-level numerics (new probe)

A naive bulk-fraction probe was found **non-discriminating by design** on a fixed compact interval (documented in the script — mid-ladder modes legitimately spread). The correct discriminator is **refinement scaling at fixed modular energy ε\***: an a.c. generalized eigenfunction has log-divergent edge mass; an embedded eigenfunction converges. Result (ε\* ∈ {1.5, 3.0, 6.0}, m ∈ {1, 2}, L = 96→768): central fraction ≤ 0.03 and shrinking, fixed-physical-edge-window mass 0.96–0.997 and **growing** — the edge-divergent a.c. signature at every tracked energy; **no bulk-normalizable candidate anywhere**. `[INFERENCE, high — validated lattice computation]` This is the third independent numerical signature (after the ladder density-of-states and the pinning scan) agreeing on purely continuous spectrum. Reproducible: [scripts/eo-modular-numerics.py](../scripts/eo-modular-numerics.py), iteration-20 section.

## 7. Ledger effect

1. The λ≠1 question is now **exactly** a fractional-operator statement (bilateral antilocality, coupling c > 1) — zero remaining operator-algebra content; FG-1989 is its boundary case.
2. Two new unconditional constraints on any putative eigenfunction (H¹₀; nowhere-locally-zero) + the O(m²) bulk structure + the no-soft-theorem obstruction.
3. **Watch item (δ) sharpens to LEM-A1′** (replacing the broader "antilocality extension"); secondary lead: BKT-style Riemann–Hilbert steepest descent on the Casini–Huerta Painlevé-V resolvent.
4. **Hedge: HYP-CKV-VACUITY stays R7** — the R8 trigger requires referee-confirmed full closure; the referee's verdict is explicit that none assembles. Verdict unchanged, **19th consecutive confirmation**; count FIVE; no numeric ID consumed.

## See also
- [2026-07-10-iter19-prove-the-numerics.md](2026-07-10-iter19-prove-the-numerics.md) — where the FG-antilocality lead was minted
- [../HYPOTHESES.md](../HYPOTHESES.md) — iteration-20 refinements; LEM-A1′ registered
- [../scripts/eo-modular-numerics.py](../scripts/eo-modular-numerics.py) — the reproducible numerics incl. the edge-divergence probe
