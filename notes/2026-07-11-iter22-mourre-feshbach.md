---
title: "Iteration 22 — LEM-A1″ attacked from both flanks: the Gaussian BIC counterexample (no decay-class theorem can close the gate), the explicit conjugate D_g with a conditional Mourre theorem, and the residue sharpened to LEM-A1‴; hedge holds at R7"
type: note
tags: [note, iter22, synthesis, numerics, watch-mode]
updated: 2026-07-11
---

# Iteration 22 — executing the Mourre/Feshbach route on LEM-A1″

**Status:** Both named routes to LEM-A1″ (σ_p(A) ∩ (1,∞) = ∅ for A = S_I^{1/2}R_I S_I^{1/2}) executed at referee grade: F1 the Feshbach/Grushin open-channel reduction with Keldysh pencil projections; F2 the direct Mourre commutator with the conjugate built from the exact massless dispersion. Binding assembling referee re-derived the load-bearing steps cold (the counterexample line-by-line; the i[A₀,D_g] = 1 identity in the spectral representation; the Keldysh bounds). Watch-sweep #3 folded in (window 2026-07-07 → 07-11: **0 strong**; 11 in-window math.OA postings, none on watch topics; two near-misses logged, not load-bearing). Integrator's counter correction applied: the synthesis under-counted — this is the **21st** consecutive confirmation.
**Outcome:** **Verdict UNCHANGED — 21st consecutive confirmation; hedge HELD at R7** (a conditional theorem plus a methods-limiting counterexample is not a proof; and the counterexample exhibits no mechanism for A itself — all three numerical signatures still say empty point spectrum). The yield: one genuinely new methods-no-go, three surviving positive results, and the residue compressed to **LEM-A1‴** (one crux + three named prerequisites, one of which is a single finite computation).
**Last updated:** 2026-07-11
**Iteration:** 22

---

## 1. The negative discovery: no decay-class theorem can close the gate `[ESTABLISHED — re-derived cold]`

**The Gaussian rank-one BIC counterexample.** Take g Gaussian, φ := g″ + τ₀²g (so φ̂(±τ₀) = 0), λ := 1/⟨φ, g⟩ (nonzero at generic width). Then −d²/dξ² + λ|φ⟩⟨φ| is self-adjoint, its kernel is Gaussian in both variables (inside **every** class e^{−a(|ξ|+|ξ′|)}), it is dilation-**entire** — and g is an L² eigenfunction embedded at +τ₀². Five lines, verified line-by-line in assembly. Consequences:
- "Exponentially-decaying symmetric nonlocal kernel ⟹ no embedded eigenvalues" is **FALSE as a class statement**; nonlocal bound-states-in-continuum occur exactly when the on-shell amplitude vanishes (ŵ(±τ₀) = 0, w = ∫V_eff u).
- **Kato–Agmon–Simon is irreducibly a local-potential theorem**; Aguilar–Combes dilation analyticity only makes such eigenvalues θ-persistent — it does not kill them.
- Any proof of LEM-A1″ **must use the structural origin of V_eff** (the Schur-complement/energy structure of the actual Feshbach reduction), not its decay/analyticity class. This bounds **methods, not the answer**: it exhibits no embedded-eigenvalue mechanism for A itself.

## 2. Surviving positive results

1. **Uniform Keldysh/Riesz projection bounds `[ESTABLISHED]`:** the transverse quadratic pencil linearizes (Keldysh, doubled space, compact resolvent, spectrum {±(n ± iτ₀)}); analytic-Fredholm + norm continuity give uniform finite-rank Riesz-projection bounds on compact κ-subsets of (1,∞). The full Riesz-**basis** property reduces to Birkhoff **strong regularity** of the Krein-indefinite 2-component boundary-condition matrix — **(a′): a single finite determinant computation, unperformed** `[INFERENCE, high]`.
2. **V_eff decay `[ESTABLISHED mod (a′)]`:** exact (no Neumann series) Feshbach with Combes–Thomas on the closed channels (|Re s| ≥ 1) gives |V_eff(ξ,ξ′)| ≤ C_δ(1+|ln|ξ−ξ′||)·e^{−(2−δ)(|ξ|+|ξ′|)}.
3. **The conditional Mourre theorem `[ESTABLISHED as conditional]`:** define A₀ := coth²(πD) (D = the self-adjoint interval Möbius generator; **in 1+1D this is definitional** — the referee's correction: the massless operator does not exist independently, R_I being IR-log-divergent, so all content migrates to H1; the consistency checks — indicial exponents ±iτ₀, ladder density of states, σ_ess = [1,∞) — all pass). With the **explicit renormalized conjugate D_g = −(i/2)(g′⁻¹d/ds + h.c.), g(s) = coth²(πs): i[A₀, D_g] = 1 exactly** (verified in the spectral representation). Under **(H1)** K := A − A₀ compact (restated for bounded transforms; `[OPEN — INFERENCE medium]`, the non-chiral ln(m) bookkeeping unproven) and **(H2)** K ∈ C^{1,1}(D_g) on compact windows (`[OPEN]`; the referee caught that ABG needs C^{1,1}, not the C¹ stated in the attempt — hardest near κ → 1⁺ where 1/g′ ~ e^{2πs}/8π): point spectrum in any compact Δ ⊂ (1,∞) is **finite**, σ_sc = ∅, and the virial-smallness bound gives **absence at small mR per window** (‖E_Δ i[K,D_g]E_Δ‖ < 1 ⟹ none in Δ) — intrinsically perturbative; sub-lemma (b) resurfaces at large mR.

The prep-note Möbius spectral identity (spec(A) = coth²(π·spec(D)), committed de08afc) is hereby placed at its refereed grade: **correct at the spectral/consistency level; in 1+1D the operator identity is the definition of A₀, and its physical content is exactly hypothesis (H1)**.

## 3. The residue: LEM-A1‴ `[OPEN]`

> **Crux (b′) — on-shell nondegeneracy:** for κ in any compact Δ ⊂ (1,∞), prove that an L² candidate with vanishing on-shell amplitude (ŵ(±τ₀) = 0) is forced to vanish, using the **origin** of V_eff: (i) the Schur-complement/energy-monotonicity structure of the actual Feshbach reduction, or (ii) the Froese–Herbst exponential bootstrap for the genuinely self-adjoint scalar A with the explicit conjugate D_g, pushed past the nonlocal rate ceiling a = 2.
> **Prerequisites, cheap-first:** **(a′)** the Birkhoff strong-regularity determinant — one finite computation; **(H1)** K compact (bounded-transform restatement; ln(m) bookkeeping); **(H2)** K ∈ C^{1,1}(D_g) on compact windows.

LEM-A1‴ ⟹ LEM-A1″ ⟹ (E_O) free-field ⟹ **R7 → R8**. Falsifiable numerics handoff (ready): lattice κ_k vs coth²(πs_k); fixed-window spectral distance of lattice A vs A₀ shrinking under refinement ⟺ H1; window norm of discretized [K, D_g] scaling as m²R².

## 4. Watch-sweep #3 (2026-07-07 → 07-11): 0 strong

Eleven in-window math.OA submissions (arXiv API, date-filtered); none on bicentralizers, III₁ ergodic states, centralizers, or the relative T-invariant; none by the tracked authors. Near-misses (logged, not load-bearing): arXiv:2607.05195 (f-divergences on general von Neumann algebras — entropy tooling, no gate bearing); arXiv:2607.07810 (relative entropy for λφ⁴ in the Rindler wedge via modular theory — wedge-only). DESI/Euclid/Roman: no in-window dated movement. Clocks (α)–(ε) static; (δ) sharpened by this iteration to LEM-A1‴.

## 5. Ledger effect

1. New methods-no-go `[ESTABLISHED]`: decay/analyticity-class arguments can never close the gate (the Gaussian BIC counterexample) — joins iteration 20's "no soft theorem" (BKT) as the second proved boundary on proof strategies; together they force all remaining routes through the **structure** of the specific operator.
2. Three surviving positives: Keldysh bounds; V_eff decay (mod a′); the conditional Mourre theorem with explicit conjugate.
3. **Watch item (δ) → LEM-A1‴** (crux b′ + prerequisites a′/H1/H2; a′ is a single finite computation — the cheapest open item in the program).
4. **Hedge: HYP-CKV-VACUITY HELD at R7.** Verdict unchanged — **21st consecutive confirmation** (integrator's correction: the workflow synthesis under-counted as "20th"); count FIVE; no numeric ID consumed.

## See also
- [2026-07-11-iter21-lem-a1-prime-attempt.md](2026-07-11-iter21-lem-a1-prime-attempt.md) — the c-collapse that defined LEM-A1″
- [../HYPOTHESES.md](../HYPOTHESES.md) — iteration-22 refinements; LEM-A1‴ registered
- [../scripts/eo-modular-numerics.py](../scripts/eo-modular-numerics.py) — the Möbius spectral identity + frame caveat (iteration-22 prep section)
