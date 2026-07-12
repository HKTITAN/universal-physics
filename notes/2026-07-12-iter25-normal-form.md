---
title: "Iteration 25 — the normal form: the gate becomes a scalar imaginary-flux problem (P1-NF established); the Bari conditionality discharged; the a=2 ceiling retracted as an artifact; the crux relocated to LEM-SEAM; full-ladder probes confirm the walls in explicit coordinates; hedge holds at R7"
type: note
tags: [note, iter25, synthesis, numerics, full-ladder]
updated: 2026-07-12
---

# Iteration 25 — the normal form

**Status:** The widened five-lens fleet (Bari supplement; transversality in folding coordinates; Froese–Herbst mode recast; carrier re-probe in mode coordinates; n₁ corner audit) + scope verdict + adversarial referees on every lens + on-shell numerics + watch sweep + binding assembly with cold re-derivation. 14 agents, all completed; every prover claim survived only as repaired by its referee.
**Outcome:** **PARTIAL_PROGRESS — the strongest structural iteration since 21. Verdict UNCHANGED — 24th consecutive confirmation; hedge HELD at R7** (the Bari half of the R8 condition is now substantially met; the transversality half remains open, relocated to LEM-SEAM).
**Last updated:** 2026-07-12
**Iteration:** 25

---

## 1. The headline: P1-NF, the unfolded-cylinder normal form `[ESTABLISHED — assembler re-derived cold; 36/36 machine checks, 1.4e-14]`

> **P1-NF.** Fix κ > 1, c = κ/(κ−1) = cosh²(πτ₀). The coupled two-component strip system (−Δ+Q)(U,V) = 0 with the c-coupled edges is **exactly equivalent**, via the bounded-invertible map T∘W (W = multiplication by e^{−τ₀x}; T = M∘U the iteration-24 intertwiner), to the **scalar** problem H(iτ₀)g = 0 on L²(ℝ_ξ × 𝕋_x), where H(α) = −∂_ξ² + (D_x + α)² + q, q = m²R²(cosh ξ − cos x)^{−2}. The coupled boundary conditions are exactly twisted periodicity f(2π) = e^{−2πτ₀}f(0) — i.e. **plain periodicity plus imaginary Aharonov–Bohm flux iτ₀**.

Consequences, all refereed: (i) H(α) at **real** flux is self-adjoint with **no L² zero mode** — the gate is now the statement that *the analytic continuation of a positive real-flux family to imaginary flux iτ₀ has no L² zero mode*; (ii) the Krein structure in folded coordinates is pure angle parity, PH(iτ₀)P = H(iτ₀)*; (iii) LEM-A1‴-T is **subsumed** (T∘W carries the Fourier basis to the pencil family); (iv) the on-shell amplitude has the closed form ŵ(±τ₀) = (1/2π)⟨qg, e^{∓iτ₀ξ}⊗1⟩ — the pairing against q times the free n = 0 corner mode, with mode weights Q̂_k(ξ) = m²R² e^{−|k|ξ}(|k|sinh ξ + cosh ξ)/sinh³ξ.

**Referee-caught error, repaired in assembly:** the prover's Step-6 zero-mode map was wrong (h = e^{τ₀x}g is NOT a zero mode — machine-confirmed residual O(1)); the correct form is h = e^{τ₀x}g(ξ,−x), and the seam inequality's **orientation flips**. Uncaught, this would have poisoned the LEM-SEAM sign convention. The seam identity E[h] = (e^{4πτ₀}−1)∫ h∂_x h|_{x=0} stands **conditional on an unwritten corner-weighted trace/decay lemma** (the iteration-21 resonant-log caveat).

## 2. The crux relocated: LEM-SEAM and the channel family `[OPEN — minted]`

- **LEM-SEAM `[OPEN]`:** the 1D positive seam pencil A₀φ = cosh(2πτ₀)Bφ has no embedded L² eigenvalue (orientation convention per the Step-6 repair). New leverage the old formulation lacked: one dimension, positivity of (A₀, B), B positivity-improving, and the Perron constraint ⟨φ, Bφ⟩ > 0 on any candidate.
- **LEM-PI-INDEX `[OPEN]`:** zero local Pontryagin negative index for q > 0 (established at q = 0; needs the (H1)-analog + index stability). Watch adjacency: Behrndt–Philipp–Trunk arXiv:2603.28403 (local sign-type spectral points in Krein spaces).
- **{LEM-A1⁗-N} `[INFERENCE, high — conditional]`:** the FH mode recast gives LEM-A1⁗ ⟺ the family of finite-codimension channel statements, conditional on **one named unwritten lemma (S5): the n-uniform weighted-Volterra a priori bound** (weight sup_n e^{(|n|+δ)ξ}|u_n|; the referee verified the contraction exponents work via |n−m|+|m| ≥ |n|).

**Difficulty is conserved, exactly as the BIC no-go predicts** — nothing was closed for free; the crux was relocated onto terrain with more structure.

## 3. A standing obstacle falls: the a = 2 ceiling RETRACTED `[correction to iteration 22]`

The Froese–Herbst rate ceiling a = 2, treated as a hard obstruction for three iterations, is an **artifact of the separable envelope** e^{−2(|ξ|+|ξ′|)}. The true per-channel factorization |K_n| ≤ C e^{−(2+n)|ξ|}e^{−n|ξ−ξ′|}e^{−(2+n)|ξ′|} has sharp ceiling **2+2n (open sense)** — and the local part Q̂₀ has **no ceiling at all**. The interaction is *local in ξ* in mode space: the mode recast −u_n″ + s_n²u_n + Σ_m Q̂_{n−m}u_m = 0 is a coupled LOCAL system `[ESTABLISHED — falsifier F3 discharged by direct F-basis computation, max rel err 3.1e-9]`. Retracting an obstacle by redoing an estimate channel-wise — not by new machinery — was the cheapest advance of the iteration.

## 4. The Bari conditionality DISCHARGED `[ESTABLISHED, repaired form]`

The iteration-24 caveat ("one-page Bari supplement unwritten") is closed: **(Q) ⟹ Riesz basis** — quadratic closeness (explicit Lipschitz constant, uniform in Re s, machine-verified twice independently) plus ω-independence via bounded Riesz projections on the *linear* operator B (the transverse problem is linear in ν = s², with s-independent boundary conditions — the repaired route around the earlier non-linear-pencil worry). Since (a′) gives δ_n = 0 exactly, (Q) holds with infinite margin; exactness of (a′) is no longer a single point of failure. Referee repairs retained: the robustness corollary requires the eigenvector-drift estimate alongside root drift; head-eigenvalue distinctness stays a hypothesis inside (Q2). Bookkeeping: two valid Lipschitz constants are in circulation (cosh form in the prep appendix, e^{(τ₀+1/2)π} form in the lens); unify at the next book pass.

## 5. The integrator's prep drafts, graded in assembly

- **Complex-c extension LEM-A1‴-T-ℂ: [DRAFT] → `[ESTABLISHED]`.** All five steps held; the assembler discharged R1 (continued lattice exactly {n+iτ(c)}, roots simple) and replicated R2 at a fresh fifth complex point (c = 2+0.5i, intertwiner 3.1e-15). Residual: the neighborhood has no explicit radius yet; nothing downstream consumes it (the FH route is pure real-c).
- **Parity split (N2): `[ESTABLISHED]`** — verified independently and consumed by the folding lens.
- **Compact-core exclusion (N1): architecture stands as minted; feasibility REFUTED except in on-shell-projected form.** Probe C killed the plain Konno–Kuroda contraction (spectral radius 2.3–3.0 on every window of (1.1, 20], every L, ~1/η scaling = shell-coupling domination) — the **fifth methods-negative** (numerical grade), joining N1a (naive splitting, ‖K‖≈9.7) and N1b (the integrator's mR→∞ norm-collapse conjecture, self-refuted by the two-L row-shift signature — new standing trap rule for large-mass scans). The surviving computer-assisted form *presupposes* transversality: it is an assistant to LEM-A1⁗, not a bypass.

## 6. Numerics: the mechanism observed `[INFERENCE, medium — numerical]`

All three pre-named falsifiers untriggered. The two strongest facts: (1) **on-shell suppression costs the full spectral gap** — σ_⊥/gap ∈ [0.92, 1.02] at all 33 (m, pair, L) points, while unsuppressed near-eigenvectors sit 3–6 orders deeper: on this lattice there is no such thing as an on-shell-suppressed near-solution; (2) **deleting the on-shell channel collapses the Birman–Schwinger spectral radius to ≈ 0** beyond the ladder top — the entire eigenvalue-forming coupling lives in the on-shell channel. This is the LEM-A1⁗ mechanism itself, observed unprompted. Probe B: the on-shell slot is uniformly transverse on compact c-sets (sin θ₀ ≥ 0.57 on [1.02, 4]), degrading only at the documented κ→1⁺ edge. Three new traps documented in-script (running-top unresolvability; vector-level frame contamination made quantitative; the global-phase span fake near-falsifier). The numbers support LEM-A1⁗ and cannot decide it.

## 7. Full-ladder probes: the walls confirmed in explicit coordinates (both negative, as expected)

- **Carrier (P4):** the mode-coordinate screen REPRODUCES the η₀-class vacuity — with proof-grade corner-sector upgrades: F₋ₙ = conj(Fₙ) is the corner trace of the modular conjugation `[ESTABLISHED corner-scope; J_I identification on the full one-particle space INFERENCE, high]`; every toolkit object is a function of c alone ⟹ Δ_geo = 0 (an explicit-coordinates second proof of the vacuity theorem, mode-visible sector); and the **common-cause theorem**: the constant Im s_n is simultaneously the engine of LEM-A1‴-T's explicitness (n-independent q) and of the carrier screen (uniform envelope, non-real branches). The bulk ladder sector still rests on LEM-NET-NATURALITY-G.
- **n₁ (P5):** the **order-blindness lemma `[ESTABLISHED — indicial scope]`**: the intrinsic indicial corner data is invariant under both order-reversing ℤ₂ operations (side swap R1 — explicit BVP isomorphism verified on all four BCs, consistent with Δ_{I′} = Δ_I^{−1}; conjugation R2), so neither orientation bit of n₁ is a function of indicial corner data. **But the stronger "no post-processing can ever output n₁" claim was REFUTED at full-germ scope:** the first mass correction to the corner germ is R1-odd (4cos(η)e^{−|ξ|}, machine-verified) — **the mass corrections orient the edges**. The n₁ wall is a *conformal-scope* theorem: sharper than before, and honestly narrower. Audit: the order enters at exactly three loci (positive-frequency choice; which edge carries c; the gluing of corner germs).

## 8. Scope verdict `[ESTABLISHED — quantifier audit]`

Compact-window uniformity suffices for LEM-A1⁗/LEM-SEAM; the gate follows by countable exhaustion; the c-uniformity the toolkit lacks is not needed (and pursuing it is structurally twinned with no-go #4). Endpoints safe (κ = 1: FG-1989/LEM-K0; κ→∞: vacuous). Mourre-1981 / PSS-1981 / FH-1982 precedent: interval-uniformity is never used.

## 9. Ledger

1. **P1-NF `[ESTABLISHED]`** minted; **LEM-SEAM, LEM-PI-INDEX `[OPEN]`** minted; **{LEM-A1⁗-N} `[INFERENCE, high]`** conditional on the named S5 lemma.
2. **Bari supplement `[ESTABLISHED, repaired]`** — the iteration-24 conditionality DISCHARGED; **complex-c extension `[ESTABLISHED]`**.
3. **RETRACTION:** the iteration-22 a = 2 ceiling (envelope artifact; true per-channel ceiling 2+2n open-sense; local part none).
4. **Fifth methods-negative** (numerical): plain Konno–Kuroda contraction infeasible; + N1a, N1b (integrator self-refutations, house discipline).
5. Carrier and n₁ walls **confirmed-in-new-coordinates** (negative), with the n₁ wall's scope honestly cut to conformal.
6. Watch #6: 0 strong; weak adjacencies logged (Berger–Schilling Lévy-UCP arXiv:2604.02357; Behrndt–Philipp–Trunk arXiv:2603.28403; Majorana modular numerics arXiv:2605.20001; Minz–Tonni arXiv:2512.04659).
7. **Hedge: HYP-CKV-VACUITY HELD at R7** — the rule requires the full free-field closure; the Bari half is now substantially met, the transversality half (LEM-SEAM) is open. **Verdict unchanged — 24th consecutive confirmation**; carrier-route count FIVE; no numeric ID consumed.

## 10. Designated next moves (iteration 26, assembler's order)

1. **The S5 supplement** — the n-uniform weighted-Volterra a priori bound (Coddington–Levinson Ch. 3 pattern): the single lemma promoting the FH dichotomy and LEM-A1⁗ ⟺ {LEM-A1⁗-N} to `[ESTABLISHED]`.
2. **LEM-SEAM in the repaired orientation** — prerequisite: write the corner-weighted trace/decay lemma the seam identity is conditional on.
3. Bookkeeping pair: (T∘W)*J_c(T∘W) vs parity; the P1-NF domain-closure lemma.
4. Numerics: the on-shell-projected Birman–Schwinger probe (the only viable computer-assisted form).
5. Quantify the complex-c neighborhood radius.
6. Bari head-ledger: machine-certify head-eigenvalue distinctness per compact window.

## See also
- [2026-07-12-iter25-prep-complex-c-extension.md](2026-07-12-iter25-prep-complex-c-extension.md) — the prep note graded this iteration (complex-c → ESTABLISHED; N1/N1a/N1b; N2)
- [2026-07-11-iter24-transfer-lemma-falls.md](2026-07-11-iter24-transfer-lemma-falls.md) — the transfer lemma this iteration subsumes into P1-NF
- [../scripts/eo-modular-numerics.py](../scripts/eo-modular-numerics.py) — the iteration-25 probe section (on-shell, suppression price, Konno–Kuroda, traps T1–T3)
- [../PROVENANCE.md](../PROVENANCE.md) — the color ledger (P1-NF, the Bari supplement, the complex-c extension, the order-blindness lemma enter 🟢; the fifth methods-negative enters 🔴)
