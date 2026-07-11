---
title: "Iteration 24 — LEM-A1‴-T FALLS: the transfer lemma proved for every fixed c > 1 by an elementary three-step transfer; the conditioning surprise dissolved (including the integrator's own misreading); LEM-A1⁗ is the sole remaining blocker; hedge holds at R7"
type: note
tags: [note, iter24, synthesis, numerics, watch-mode]
updated: 2026-07-11
---

# Iteration 24 — the transfer lemma falls

**Status:** Two proof lenses on LEM-A1‴-T (T1 the direct transfer bound; T2 the closed-form Gram analysis refereeing the iteration-23 conditioning surprise), a binding assembling referee (independent cold re-derivation + machine verification), and light watch-sweep #4 (window since 07-11 + two-week rescan: **0 strong, 0 in-window items at all**).
**Outcome:** **PROOF_ASSEMBLES — LEM-A1‴-T is `[ESTABLISHED]`** (conditional only on its own explicit spectral data, which (a′) supports at `[INFERENCE, high]`). **Verdict UNCHANGED — 23rd consecutive confirmation; hedge HELD at R7** by the house rule (R8 requires the FULL free-field closure; **LEM-A1⁗ — the transversality crux — is now the single remaining blocker**).
**Last updated:** 2026-07-11
**Iteration:** 24

---

## 1. The theorem `[ESTABLISHED — referee re-derived cold; machine-verified to 1.4×10⁻¹⁵]`

> **LEM-A1‴-T (proved).** For every fixed c > 1, the transverse-pencil eigenvector family {(a_n, b_n)}, n ∈ ℤ — a_n = cos(s_nη) + i·tanh(πτ₀)·sin(s_nη), b_n = cos(s_nη), s_n = n + iτ₀ — is a **Riesz basis of L²((0,π); ℂ²)**, with explicit frame bounds 2π·min_η λ_min(K) and 2π·max_η λ_max(K), K = D M\*M D.

**The proof, in three elementary steps** (no Birkhoff–Langer, no Mennicken–Möller, no Lunyov–Malamud — not even Levin–Golovin):
1. **Weighted Fourier.** Since Im s_n = τ₀ is *constant*, E_n = e^{is_nx} = e^{−τ₀x}e^{inx} on (0, 2π) is a bounded-invertible weight times the Fourier orthonormal basis — a Riesz basis with exact bounds [2πe^{−4πτ₀}, 2π].
2. **Unitary folding.** (Uf)(η) = (f(η), f(2π−η)) is unitary from L²(0,2π) to L²((0,π);ℂ²), and (UE_n)(η) = (e^{is_nη}, q·e^{−is_nη}) with q = e^{2πis_n} = e^{−2πτ₀} **independent of n** — the miracle: integer real parts + constant imaginary part. This n-independence is exactly what the 4×4 repeated-root reduction obscured.
3. **Constant intertwiner.** The constant matrix M = [v₊ | v₋/q] (v± the fixed coefficient vectors; det M = (t/2)e^{2πτ₀} ≠ 0) satisfies **F_n = M(UE_n) exactly** for all n (verified to 1.4×10⁻¹⁵ at c = 1.02, 1.5, 4, 25). A bounded-invertible operator carries a Riesz basis to a Riesz basis, completeness included. ∎

**Falsification passed:** the explicit frame bounds bracket the measured Gram spectra at all twelve (c, N) probe points, with measured values converging toward the bounds as N grows.

**Honest conditionality (flagged by the referee, inside the lemma):** the proof consumes the explicit spectral data — the exact lattice s_n = n + iτ₀ and n-independent t — as established by (a′); if the true pencil spectrum were only asymptotically lattice-like, a standard-but-unwritten Bari quadratic-closeness supplement would be required (risk graded nil per (a′)'s simple separated zeros). And **no c-uniform bound exists at either end of (1, ∞)** — the first thing iteration 25 must determine is whether LEM-A1⁗ needs c-uniformity.

## 2. The conditioning surprise dissolved — including the integrator's own misreading

T2 derived the Gram matrix in closed form — **G = Toeplitz(n−m) + (πC/2)·J exactly** (J the index flip; verified entrywise to ~10⁻¹⁵) — and the assembler confirmed both degeneracy laws:
- **c → 1⁺:** λ_min ~ (c−1)/2 (pair collision a_n → b_n as t → 0; ratio measured/predicted → 1: 0.993 at c = 1.005). **The iteration-23 reading that "c → 1.02 looks cleanest" was a misread**: its N-stability is the rank-local pair mechanism saturating by N ≈ 3, not health. Recorded per house discipline — the referee corrected the integrator's own numerics interpretation.
- **c → ∞:** λ_min ~ ln(4c)/(2c²) (the e^{4πτ₀} envelope lopsidedness; log-slow in N via the Toeplitz jump symbol, Böttcher–Silbermann).
- Bounds are **uniform precisely on compact [c₁, c₂] ⊂ (1, ∞)**; sweet spot near c ≈ 1.75.

## 3. Ledger effect

1. **LEM-A1‴-T: `[ESTABLISHED]`** — the first of the two named lemmas falls; the Riesz basis unlocks the Feshbach/Keldysh channel machinery, the local Pontryagin structure, and the H1 mode decomposition **with explicit tools** (the intertwiner T = M∘U; the exact frame bounds; the closed-form Gram).
2. **LEM-A1⁗ is the sole remaining blocker** of (E_O)-free-field and the R7 → R8 hedge move. Iteration-25 designated first move: push the transversality pairing through the folding coordinates (where the mode decomposition is diagonal), and **determine first whether quadprime needs per-fixed-c bounds (available) or c-uniformity (not available)**. Secondary: the one-page Bari supplement discharging the exact-lattice conditionality.
3. **Watch-sweep #4: 0 strong, 0 in-window items** (math.OA and math.SP July listings fully scanned live).
4. **Hedge: HYP-CKV-VACUITY HELD at R7** (the rule requires both lemmas). Verdict unchanged — **23rd consecutive confirmation**; count FIVE; no numeric ID consumed.

## See also
- [2026-07-11-iter23-crux-attack.md](2026-07-11-iter23-crux-attack.md) — where LEM-A1‴-T was minted
- [../PROVENANCE.md](../PROVENANCE.md) — the color ledger (this theorem enters 🟢)
- [../scripts/eo-modular-numerics.py](../scripts/eo-modular-numerics.py) — the Gram probe this proof brackets
