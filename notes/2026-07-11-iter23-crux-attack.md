---
title: "Iteration 23 — (a′) established, the definitizability no-go, one honest retraction, and the residual compressed to LEM-A1‴-T → LEM-A1⁗; hedge holds at R7"
type: note
tags: [note, iter23, synthesis, numerics]
updated: 2026-07-11
---

# Iteration 23 — refereeing (a′) and attacking the crux

**Status:** The (a′) computation (integrator's own, prep commit af47a43) submitted to a binding adversarial referee; crux (b′) attacked through the two structural lenses the iteration-22 analysis sharpened (G1 energy-dependent Schur monotonicity; G2 Krein-space definitizability); binding assembling referee. All machine checks independent (1e−15 identity over 2000 random (c,s); independent 4×4 BC-determinant check at the roots to 1e−13).
**Outcome:** **Verdict UNCHANGED — 22nd consecutive confirmation; hedge HELD at R7.** No proof assembles. The iteration's yield: (a′) **[ESTABLISHED]**; a **fourth methods-no-go** (global non-definitizability); the open channel's Krein type **[ESTABLISHED]**; **one honest retraction** (G1's z-slot monotonicity, internally contradicted and struck by the assembler); and the residual compressed to two explicitly named checkable lemmas.
**Last updated:** 2026-07-11
**Iteration:** 23

---

## 1. (a′) — ESTABLISHED, with the framework honestly re-opened

**The computation stands `[ESTABLISHED]`:** cos²(πs) = (z+2+z⁻¹)/4 in z = e^{2πis}, so c − cos²(πs) = −(z² − 2(2c−1)z + 1)/(4z); discriminant 16c(c−1) > 0 for all c > 1; roots z± = (√c ± √(c−1))² = e^{±2πτ₀} (cosh(πτ₀) = √c); the transverse spectrum is **two shifted simple uniformly-separated lattices** (ℤ + iτ₀) ∪ (ℤ − iτ₀). Referee corrections: regularity **degenerates as c → 1⁺** (the FG-1989 boundary; any Riesz bound is non-uniform there); and — decisive — **"distinct roots ⟹ Riesz basis" has NO applicable off-the-shelf theorem for this pencil**: the 4×4 first-order reduction has *repeated characteristic roots* (both components carry the same symbol, coupled only through the boundary conditions), outside the scalar chain (Mikhailov 1962; Kesel'man 1964; Dunford–Schwartz XIX.4; Shkalikov 1983/86 — live-verified) and the systems chain (Lunyov–Malamud, live-verified); Keldysh linearization cannot help (the problem is already linear in λ = s²).

**The chain that does apply (one lemma open):** (i) `[ESTABLISHED]` Δ(s) ∼ c − cos²(πs) is a **sine-type entire function** of exponential type 2π with simple separated zeros; (ii) Levin (1961)/Golovin (1964): such zeros generate an exponential Riesz basis of L²(0, 2π) (canonical: Avdonin–Ivanov); (iii) **LEM-A1‴-T `[OPEN]`** — the explicit map carrying e^{is_n·} to the normalized pencil eigenvectors (U_n, V_n) (explicit trig combinations) is bounded with bounded inverse: **a concrete Gram-matrix bound on explicitly known functions, cold-checkable and numerically probeable first**; bounds necessarily non-uniform as c → 1⁺.

## 2. The fourth methods-no-go: global definitizability fails `[INFERENCE, high]`

The transverse eigenvalues are ν_n = n² − τ₀² ± 2inτ₀: exactly **one real branch** (n = 0) and **infinitely many non-real conjugate pairs** — so σ_ess of the strip pair contains infinitely many non-real rays, exceeding Langer's finiteness bound for definitizable operators (Langer LNM 948; live-verified restatement). **The strip pair is NOT globally definitizable in the Krein metric for any c > 1** — the same corner exponents n ± iτ₀ that define the gate kill definitizability. (Ray-completeness rests on the mode decomposition; unconditional once LEM-A1‴-T lands.)

**What survives locally `[INFERENCE, medium — conditional]`:** over the strip Ω = {|Im z| < 2τ₀} (the non-real branches sit at distance ≥ 2τ₀), local definitizability holds conditional on LEM-A1‴-T + relative compactness of Q in the Krein resolvent sense; then 0 is a spectral point of **type π₋** (finite-index Pontryagin spectral subspace — Behrndt–Jonas; Azizov–Jonas–Trunk, live-verified) — a genuine *nonlocal* almost-definite structure that sidesteps the iteration-21 pointwise no-go. And `[ESTABLISHED — machine-verified]`: the n = 0 open channel w has **constant negative Krein density ⟨J_c w, w⟩ = −(c−1) = −1/(κ−1)**.

## 3. The honest retraction (the discipline working)

G1's step (1) — the z-slot Herglotz/Loewner monotonicity of the Schur complement, initially submitted `[ESTABLISHED]` — was **refuted in assembly by internal contradiction** with G2's machine-verified non-real closed channels (the Loewner order has no meaning in the everywhere-indefinite strip metric) and is **downgraded to `[OPEN]`**. What survives of G1: the exact Feshbach–Schur reduction as a *scheme*; the BC-slot Hellmann–Feynman boundary identity with strict sign via the iteration-20 nowhere-locally-zero rigidity `[INFERENCE, medium]` (its compression through the Krein metric open); and the (★) reduction target. Recorded per house rule: submitted grades are provisional until assembly; a struck claim is documented, not erased.

## 4. The residual after iteration 23

> **LEM-A1‴-T `[OPEN]` (upstream bottleneck):** the transfer/Gram bound converting the Levin–Golovin exponential Riesz basis into a Riesz basis of pencil eigenvectors. Feeds every live route (the Feshbach machinery, the local definitizability, and H1's mode decomposition).
> **LEM-A1⁗ `[OPEN]` (the crux, renamed):** Pontryagin-channel on-shell transversality — the on-shell nondegeneracy argument executed in the type-π₋ local spectral structure.
> Plus the standing (H1) `[INFERENCE, medium — resolvent-probe supported, three falsifiers named]` and (H2) `[OPEN]`.

**Designated next move:** the numerical Gram-matrix probe of LEM-A1‴-T (condition numbers of the explicit eigenvector Gram matrices vs truncation and c) — cheap, decisive-in-expectation, and it feeds directly into the analytic bound.

## 5. Ledger

Hedge **HELD at R7** (no combination assembles; one grade moved *backward* by retraction — honest bookkeeping). Verdict unchanged — **22nd consecutive confirmation**; count FIVE; no numeric ID consumed. Methods-no-go tally now **four** (BKT family-level; Gaussian-BIC decay-class; and now global definitizability; plus the localized/naturality closures of iterations 16–20 on the operator-algebra side).

## See also
- [2026-07-11-iter22-mourre-feshbach.md](2026-07-11-iter22-mourre-feshbach.md) — LEM-A1‴ and the prerequisites this iteration attacked
- [../HYPOTHESES.md](../HYPOTHESES.md) — iteration-23 refinements; LEM-A1‴-T and LEM-A1⁗ registered
- [../scripts/eo-modular-numerics.py](../scripts/eo-modular-numerics.py) — the (a′) computation and resolvent-probe documentation (iteration-23 prep section)
