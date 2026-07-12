---
title: "Iteration-25 prep — the complex-c extension of LEM-A1‴-T (draft; unrefereed)"
type: note
tags: [note, iter25, prep, draft]
updated: 2026-07-12
---

# Iteration-25 prep — LEM-A1‴-T-ℂ: the complex-c extension (DRAFT)

**Status:** `[DRAFT — UNREFEREED]`. Integrator's hand computation, written 2026-07-12
while the iteration-25 fleet waits on a rate-limit window. The iteration-25 scope
agent identified this as the single possible upstream gap for the Feshbach route:
if route (i) uses boundary values of V_eff(z) for z off the real axis near κ, the
Riesz-basis machinery is invoked at complex c(z). This note drafts that extension.
It must be refereed (default REFUTE) before anything consumes it.

## Statement

> **LEM-A1‴-T-ℂ (draft).** Fix c₀ > 1. There is an open neighborhood N ⊂ ℂ of c₀
> and a constant family of bounds such that for every c ∈ N the pencil family
> {a_n(c) = cos(s_n η) + i·tanh(πτ(c))·sin(s_n η), b_n(c) = cos(s_n η)},
> s_n = n + iτ(c), is a Riesz basis of L²((0,π); ℂ²), with frame bounds jointly
> continuous in c and bracketing the real-c bounds of LEM-A1‴-T as c → c₀.

## The five steps (each elementary)

1. **Holomorphy of the corner frequency.** τ(c) = arccosh(√c)/π is holomorphic on a
   neighborhood of (1, ∞) in ℂ (√· is holomorphic off (−∞,0]; arccosh is holomorphic
   off (−∞,1]; √c₀ > 1). Write τ(c) = ρ(c) + iσ(c); on a small enough N, ρ > 0 and
   |σ| < ½ (the ½ matters only for step 2's uniformity, any bound < ∞ works).

2. **Weighted Fourier survives complex weights.** E_n(c) = e^{i s_n x} = e^{−τ(c)x}e^{inx}
   on (0, 2π). Multiplication by e^{−τ(c)x} factors as [multiplication by the unimodular
   e^{−iσ(c)x}] ∘ [multiplication by the positive e^{−ρ(c)x}]. The first factor is
   unitary; the second is bounded invertible with bounds [e^{−2πρ}, 1]. So {E_n(c)}
   is a Riesz basis of L²(0, 2π) with frame bounds [2π e^{−4πρ(c)}, 2π] — the real-c
   proof verbatim, with |·| taken through. (No use is made of σ = 0.)

3. **The folding miracle is τ-agnostic.** (Uf)(η) = (f(η), f(2π−η)) is unitary exactly
   as before, and (U E_n)(η) = (e^{i s_n η}, q(c)·e^{−i s_n η}) with
   q(c) = e^{2πi s_n} = e^{2πin}·e^{−2πτ(c)} = e^{−2πτ(c)} — **independent of n for any
   complex τ**. The n-independence used only two facts: integer real parts of s_n, and
   an n-independent imaginary part. Neither requires τ real.

4. **The intertwiner persists by continuity.** The coefficient data v±(c), t(c) = tanh(πτ(c))
   are holomorphic in τ hence in c on N (tanh has poles only at πτ ∈ iπ(ℤ+½), i.e.
   τ ∈ i(ℤ+½) — away from τ(c₀) > 0 real). det M(c) = (t(c)/2)e^{2πτ(c)} is holomorphic
   and nonzero at c₀ (t(c₀) ∈ (0,1)); shrink N so |det M(c)| ≥ ½|det M(c₀)| on N̄ compact.
   M(c) is constant in η, so ‖M(c)‖, ‖M(c)⁻¹‖ are continuous on N̄, uniformly bounded.

5. **Assembly.** F_n(c) = M(c)(U E_n(c)) exactly, for all n, by the same algebra as the
   real case (the identity is rational-exponential in s_n; it holds as an identity of
   holomorphic functions of τ, having been verified on the real τ interval — uniqueness
   of analytic continuation). A bounded invertible operator carries a Riesz basis to a
   Riesz basis; the frame bounds multiply by [‖M⁻¹‖⁻², ‖M‖²]. ∎ (draft)

## What still needs care (referee targets)

- **(R1) The eigenvector interpretation at complex c.** Steps 1–5 make {a_n(c), b_n(c)}
  a Riesz basis of *defined formulas*. That they are the eigenvector family of the
  analytically-continued transverse pencil needs the Birkhoff data continued: the
  characteristic quadratic z² − 2(2c−1)z + 1 has discriminant 16c(c−1) ≠ 0 for all
  c ∈ N (shrinking N off {0,1}), so the root system continues holomorphically with no
  collision. Verify the continued lattice is exactly {n + iτ(c)} (it is, by the same
  cos²(πs) = c computation — but state it).
- **(R2) Step 5's analytic-continuation appeal.** ~~The identity F_n = M(UE_n) was
  machine-verified at real c only.~~ **Done (2026-07-12):** machine-verified at four
  complex points c ∈ {1.5+0.1i, 4−0.25i, 1.02+0.01i, 25+i}: max relative intertwiner
  error 4.4×10⁻¹⁶ over n = −6..6; det M matches (t/2)e^{2πτ} to 7×10⁻¹⁵; Re τ(c) > 0
  at all four points as step 1 requires. (Also true symbolically: writing cos and sin
  as exponentials, F_n = M(UE_n) is finite trig algebra valid for every complex s.)
- **(R3) What the Feshbach route actually needs.** If route (i) only ever evaluates on
  the real axis (limiting absorption from above), this whole note may be unnecessary —
  the scope agent's caveat was conditional. The consumer should say which.

## See also
- [2026-07-11-iter24-transfer-lemma-falls.md](2026-07-11-iter24-transfer-lemma-falls.md) — the real-c theorem this extends
- [../scripts/eo-modular-numerics.py](../scripts/eo-modular-numerics.py) — the Gram-probe code for (R2)
