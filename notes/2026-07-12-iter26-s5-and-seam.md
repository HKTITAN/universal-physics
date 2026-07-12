---
title: "Iteration 26 — S5 discharged (the n-uniform weighted-Volterra bound, repaired slacked form); {LEM-A1⁗-N} ⟺ LEM-A1⁗ promoted to ESTABLISHED; LEM-TRACE established (the resonant-log caveat discharged); the seam chain graded but not closed; hedge holds at R7"
type: note
tags: [note, iter26, synthesis, numerics]
updated: 2026-07-12
---

# Iteration 26 — S5 falls; the seam chain is graded

**Status:** Three prover lenses (S5 supplement; corner-trace + LEM-SEAM; bookkeeping pair + complex-c radius) each with an adversarial referee, the on-shell-projected Birman–Schwinger + Bari head-ledger numerics, watch sweep #7, binding assembly with cold re-derivation. 9 agents, all completed.
**Outcome:** **PARTIAL_PROGRESS. Verdict UNCHANGED — 25th consecutive confirmation; hedge HELD at R7.** Equivalences and groundwork moved decisively; **no exclusion theorem exists yet** — the residual is now exactly {LEM-SEAM-SC, branch-(b) rate promotion, CH-26(iii), T1, SEAM-ESS + the B1 write-up}.
**Last updated:** 2026-07-12
**Iteration:** 26

---

## 1. S5 DISCHARGED `[ESTABLISHED, repaired slacked form — prover + referee + assembler, three independent machine verifications]`

> **S5 (repaired).** For the coupled local channel system −u_n″ + s_n²u_n + Σ_m Q̂_{n−m}(ξ)u_m = 0 on [X₀,∞) with u ∈ L²([X₀,∞); ℓ²), branch (a) of the terminal-profile dichotomy (all inductively-defined Jost amplitudes vanish) forces u ≡ 0 — hence ψ ≡ 0 via Morrey–Nirenberg analytic UCP through P1-NF. The working space is the **geometric-slack** weighted space ‖v‖ = sup_n sup_ξ e^{−ρ*|n|}e^{(|n|+δ)ξ}|v_n(ξ)|, on which the Volterra-from-infinity map contracts **n-uniformly** (κ → 0 as X₂ → ∞; measured κ ≤ 2.3×10⁻⁴ at X₂ = 4).

**The structural correction — recorded loudly:** the iteration-25 referee-verified skeleton (the *un-slacked* norm sup_n e^{(|n|+δ)ξ}|u_n|) **fails n-uniform contraction structurally** — the middle-band Toeplitz shell Σ_{0≤m≤n}(|n−m|+1) ~ n²/2 against |s_n| ~ n gives row growth Θ(n) with exact kernels (measured slope 1.48×10⁻⁴·n; κ₃₀₀ = 1.11 > 1 at any fixed X₂). The geometric slack e^{ρ|n|} converts the shell into a convergent geometric series at zero downstream cost. *Lesson entered into the discipline: a referee-verified skeleton is not load-bearing until the norm is.*

Proof architecture (all steps referee-attacked, assembler re-derived the load-bearing contraction cold): exact potential bounds with the closed-form constant C_Q(X₀) = 4(1+e^{−2X₀})/(1−e^{−2X₀})³ (the assembler's cold derivation showed the measured 7.02 IS the exact sup — the prover's 12.4 was 1.76× conservative); entry via P1-NF interior elliptic estimates + the Riesz-basis coefficient bound; two-sided Green representations and inductively-defined amplitudes; the ladder λ_j = 7/4 + 3j/2 with resonance margin exactly 1/4 and the j-independent increment bookkeeping e^{3X₁/2}; the Fubini exchange written.

**Consequences:** the branch-(a) arm of the terminal-profile dichotomy is promoted from per-finite-truncation to the **infinite system**; **{LEM-A1⁗-N} ⟺ LEM-A1⁗ is now `[ESTABLISHED]`** (the assembler discharged both restatement items: the equivalence consumes S5 only through its conclusion, and the Jost bridge is a definitional identity). Scope flag: consumers needing infinite-system branch-(b) *rates* still wait on the `[OPEN]` rate promotion.

## 2. LEM-TRACE `[ESTABLISHED — massive scope mR > 0]` and the seam chain

- **LEM-TRACE:** for g ≠ 0 an L² zero mode of H(iτ₀), h = e^{τ₀x}g(ξ,−x) solves the cut-cylinder problem with monodromy **μ = e^{2πτ₀}** (pinned this pass — the e^{4πτ₀} reading was a drift+twist double-count; every downstream constant was already coherent, the error lived in the label); corner form-domain membership (KWSS-1975), the cut-trace in L¹, superexponential corner vanishing (Agmon-1982 + Kato-1972), end terms vanish. **The seam identity holds AS WRITTEN, no extra corner term — the iteration-21 resonant-log caveat is DISCHARGED for the seam identity.** m > 0 load-bearing; constants degrade as mR → 0.
- **The seam chain, graded:** B0 pencil algebra `[ESTABLISHED]` (A₀φ = cosh(2πτ₀)Bφ; E = (μ²−1)²/(2μ)·⟨φ,Bφ⟩; Perron constraint grounded `[INFERENCE, high | SEAM-ESS unwritten]`); B1 free part `[ESTABLISHED]` (b_free = sech²(ξ/4)/(16π), positivity-improving via Schoenberg-1951); B1 q-part + B2 (at most one one-signed candidate, per parity) `[INFERENCE, high]`; B3 conditional exclusion `[INFERENCE, medium]`. **Minted `[OPEN]`: LEM-SEAM-SC** — no *sign-changing* embedded eigenfunction (the one-signed case is handled by the Perron chain). LEM-SEAM is **NOT closed**.

## 3. The bookkeeping trio `[ESTABLISHED, with repairs]`

- **The Krein/parity dictionary:** Φ*J_cΦ = γ_c P exactly, γ_c = −(c−1)/2 — the strip Krein structure is the cylinder parity up to a negative scalar; the dictionary is **orientation-reversing** (P-positive ⟺ J_c-negative); the on-shell channel is J_c-negative. Referee scope note: only the **bilinear** form Φ^T J_cΦ = γ_c P continues to the complex-c disks (the sesquilinear version fails there, measured ~5×10⁻²).
- **The P1-NF domain-closure lemma:** written — graph norms equivalent with explicit constants from the frame bounds; the maximal-realization identification `[INFERENCE, high]` with the corrected KWSS threshold mechanism (q ~ 4m²R²·dist⁻⁴ dominates (3/4)·dist⁻²).
- **The complex-c radius, explicit:** r(c₀) = min{(c₀−1)/2, δ*/K}; r = 0.0085 / 0.0433 / 0.0729 / 0.415 at c₀ = 1.1 / 1.75 / 4 / 25 (conservative by design). The complex-c extension is now quantitative.

## 4. Numerics — the strongest numerical grade yet, plus two honest hits

- **The corrected spectral shell closure:** deleting only the shell band (1–3 resolution units around the Corner-Indicial frequency), the deleted-BS spectral radius is ≤ 0.006 at two units **globally over 369 (κ, m, L) points**; off-shell control bands are supercritical everywhere (1.46–274); at actual lattice eigenvalues the BS fixed point collapses 1.000 → 0.003–0.015. The eigenvalue-forming coupling lives entirely within ~2 resolution units of τ₀(κ) — LEM-A1⁗'s mechanism at `[INFERENCE, medium]`, the strongest numerical support so far.
- **T7 (sharp failure, valid deliverable):** the iteration-25 directive's geometric rank-4 compression FAILS spectacularly (sr up to 1260) — compression interlaces; **only spectral shell deletion is a valid closure**.
- **T8 (honest downgrade of our own exhibit):** iteration-25's flagship "deleted-BS sr ≈ 0" rows were part-vacuous; corrected values are small but nonzero — support survives at reduced strength.
- **Bari head-ledger:** (Q2) head-distinctness `[ESTABLISHED — machine-checked, NOT interval-certified]` on the scanned windows, margins 0.28/0.84/1.30; subtlety caught: on [4,25] the binding pair *switches*, and the naive separation formula would have overstated the margin by 28%.
- **CH-26 minted:** the continuum hypothesis chain for a rigorous projected-BS exclusion; its hard part (iii) — the b → 0 channel closure via A₀-LAP + transversality — is exactly what the lattice cannot probe (the band is pinned at π/ln(2L)).

## 5. Watch #7: 0 strong; one adjacency ANSWERED

Behrndt–Philipp–Trunk arXiv:2603.28403 read via direct PDF: zero-negative-squares-outside-compact only — **no π₋ or eigenvalue-absence content**; π₋ leverage remains Azizov–Jonas–Trunk 2005. Process trap recorded: a quick-fetch small-model summary hallucinated π₋ coverage — direct PDF extraction is now mandatory practice. Consonant prior art: Jansen–Maad Sasane–Treschow arXiv:2501.12817 (cylinder exponential dichotomies — persistence, not absence); Il'yasov–Valeev arXiv:2606.31129 (cone-minimax a posteriori certificates — candidate certifier for deleted-BS bounds).

## 6. Ledger

1. **S5 `[ESTABLISHED, repaired]`**; **{LEM-A1⁗-N} ⟺ LEM-A1⁗ `[ESTABLISHED]`**; skeleton correction minted `[ESTABLISHED]`; branch-(b) rate promotion minted `[OPEN]`.
2. **LEM-TRACE `[ESTABLISHED, mR > 0]`**; μ pinned; resonant-log caveat discharged; seam chain graded B0–B3; **LEM-SEAM-SC `[OPEN]`** minted; LEM-SEAM not closed.
3. Bookkeeping trio `[ESTABLISHED]`: the orientation-reversing Krein/parity dictionary (bilinear continuation scope); the domain-closure lemma; the explicit radius r(c₀).
4. Numerics: mechanism support upgraded (369-point global closure); T7 sharp failure; T8 honest downgrade; Bari head closed on scanned windows; CH-26 minted; two new lattice traps documented in-script.
5. Watch #7: 0 strong; BPT adjacency answered negative; the WebFetch-summary hallucination trap recorded.
6. **Hedge: HYP-CKV-VACUITY HELD at R7** — equivalences and groundwork moved; **no exclusion theorem**. **Verdict unchanged — 25th consecutive confirmation**; carrier count FIVE; no numeric ID consumed.
7. Ladder: rung 1 MOVED (still open); rungs 2–5 HELD.

## 7. Designated next moves (iteration 27, assembler's order)

1. **SEAM-ESS + the B1 Hopf/maximum-principle write-up** — unblocks B0's Perron corollary to `[ESTABLISHED]` and hardens B2/B3.
2. **Branch-(b) rate promotion** via the now-proven slacked-Volterra machinery (double payoff: completes the dichotomy promotion AND discharges B3's weighted-L¹ seam-trace hypothesis).
3. **Pin T1** (cylinder Allegretto-1974/Piepenbrink-1974 at threshold); read Aydi–Kchaou–Trunk 2607.05852 and Il'yasov–Valeev 2606.31129 first.
4. **CH-26(iii) analytic attack:** A₀-LAP in the shell channel + quantitative transversality, converting ŵ(±τ₀) = 0 into vanishing on-band coupling as b → 0.
5. Housekeeping: the KWSS cylinder localization; restate the equivalence against the slacked space in the registries; the TP route only after B1/SEAM-ESS, with the τ₀-frequency confound pre-named.

## See also
- [2026-07-12-iter25-normal-form.md](2026-07-12-iter25-normal-form.md) — P1-NF, the seam identity's origin, the skeleton this iteration corrected
- [../scripts/eo-modular-numerics.py](../scripts/eo-modular-numerics.py) — the iteration-26 probe section (projected-BS closure, T7/T8, head-ledger, new traps)
- [../PROVENANCE.md](../PROVENANCE.md) — S5, the equivalence, LEM-TRACE, the dictionary/radius enter 🟢
