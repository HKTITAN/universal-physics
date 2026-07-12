---
title: "Iteration 27 — the seam groundwork: CH-26(iii)'s on-band collapse and A0-LAP established; the branch-(b) rates and T1-a promoted to inference-high; the branch-(b) on-shell input self-refuted and demoted; SEAM-ESS revealed heavier than framed; the off-band bound (B) is the whole ballgame; hedge holds at R7"
type: note
tags: [note, iter27, synthesis, numerics]
updated: 2026-07-12
---

# Iteration 27 — the seam groundwork; the crux compresses to the off-band bound (B)

**Status:** Four prover lenses (SEAM-ESS + B1 Hopf + KWSS; branch-(b) rate promotion; T1 threshold lemma; CH-26(iii) A0-LAP + transversality) each with an adversarial referee, watch sweep #8, binding assembly with cold re-derivation. Resumed on Opus 4.8 after a Fable-5 rate limit killed four agents mid-run (cached agents replayed free). 9 agents; 8 completed, one lens (SEAM-ESS) died on both runs.
**Outcome:** **PARTIAL_PROGRESS. Verdict UNCHANGED — 26th consecutive confirmation; hedge HELD at R7.** Two sub-pieces minted `[ESTABLISHED]`, two `[OPEN]→[INFERENCE, high]` promotions, **one cold self-refutation** (a downstream input carried as clean was proved false and demoted), and one whole rung died — recorded honestly, not as a null result. **No rung cleared to closure; no exclusion theorem assembled.**
**Last updated:** 2026-07-12
**Iteration:** 27

---

## 1. CH-26(iii): the on-band collapse and the shell LAP `[ESTABLISHED — assembler cold-re-derived; fitted exponent 0.4999 vs 0.5]`

The strongest surviving result. The on-shell-projected Birman–Schwinger closure needs, as the shell band width b → 0, the on-band coupling to vanish for any putative L² eigenfunction. Two of its three parts are now established:

- **Part 1 — A0-LAP (the shell-channel limiting absorption principle) `[ESTABLISHED]`:** for the n = 0 shell channel L₀ = −∂_ξ² sitting on-shell at E = τ₀² > 0, the Mourre relation i[L₀, A_dil] = 2L₀ with strict positivity 2(τ₀²−δ) > 0, and q^{1/2} ≤ Ce^{−|ξ|} dominating any polynomial weight, give bounded + Hölder weighted resolvent bounds q^{1/2}R₀(E±i0)q^{1/2}, uniform on compact κ-windows.
- **Part 2 — the on-band collapse ‖K^b_band q^{1/2}g‖ = O(√b) `[ESTABLISHED, cold-verified]`:** by Sokhotski–Plemelj the singular part of the BS symbol has coefficient a(±τ₀) = the on-shell amplitude ŵ(±τ₀), which **vanishes identically under branch (b)**; the vanishing is a *simple* zero a(p) = (p∓τ₀)ã(p) that cancels one pole factor, leaving a bounded integrand over a band of width b — L²-norm O(√b). The assembler's cold numerics: fitted exponent 0.4999 across b ∈ [3×10⁻³, 0.4]; the δ-coefficient is 0.0 for the simple-zero (branch-b) case versus 3.79 (O(1)) generically — **the vanishing on-shell amplitude IS the collapse**. Robustification over the prover's route: the amplitude's analyticity needs only g ∈ L² + q exp-decay (strip |Im p| < 2); the Froese–Herbst "super-exponential" citation is both unneeded and invalid for the non-self-adjoint H(iτ₀) — removing a load-free citation strengthens the piece.

**The crux compresses to (B).** The theorem stays conditional on: **(B) the uniform-in-b off-band bound** sr(K^b_off) ≤ σ < 1 for the non-self-adjoint off-band operator — **"the whole ballgame"** `[OPEN]`; (C) a transversality constant `[likely cheap]`; and an admitted uniform Grushin/Schur inversion. The mandatory Gaussian-BIC test passes correctly: Parts 1–2 fire identically for the rank-one BIC counterexample yet do NOT exclude it, precisely because (B) fails there (sr(K^b_off) → 1). **The route to (B) is the ξ-locality of q — the exact hypothesis the nonlocal rank-one BIC violates.** So (B) is LEM-A1⁗ in its sharpest reformulation.

## 2. Branch-(b) rates: core promoted, the on-shell input self-refuted `[INFERENCE, high]`

The branch-(b) terminal-rate promotion to the infinite channel system:
- **(i) rate lower bounds** ρ_n ≥ |n| (|n| ≥ N), ≥ 2+2N−|n| (0 < |n| < N), ρ₀ = 2+2N, and **(ii) the finite-codimension dichotomy** (leading profile = the 2-dim level-N free data a_{±N}e^{−Nξ}; every correction smaller by a definite exponential margin — the prover's honest correction of the directive's imprecise "superexponential" stands): both promoted **`[OPEN] → [INFERENCE, high]`** (S5-dichotomy applicability + numerically-verified n-uniform slack + the algebraically-verified inf-convolution fixed point, machine-checked at N = 1,2,3,5 in explicit coordinates). Rate *equality* is correctly NOT claimed and stays `[OPEN]` (generic, not load-bearing).
- **(iii) ŵ(±τ₀) = 0 — SELF-REFUTED and demoted.** The prover's own probe killed its Step-3 half-line proof: u₀ → 0 (even at rate 2+2N) does **not** force ∫e^{±iτ₀ζ}f₀ = 0 (measured 0.10 / 2.0, nonzero). Demoted `[ESTABLISHED] → [INFERENCE, high | whole-line/corner IBP]`. The true route is whole-line (Fourier transform of the n = 0 channel equation at p = ±τ₀ gives 0·û₀ = f̂₀(±τ₀) ⟹ ŵ = 0), but it needs the corner regularity of u₀ — so ŵ = 0 is *likely-true yet entangled with the still-open seam corner*, not free. A downstream input previously treated as solid is now conditional. **This is CH-26(iii)'s exact input**, so the two rungs are coupled through the same open corner as LEM-TRACE.
- **Double-payoff corollary (partial):** the ≥-bounds give the cut-trace |h∂_x h|_{x=0}| ≤ Ce^{−2Nξ}, N ≥ 1 — so any sub-e^{2ξ} weight puts the seam trace in weighted L¹. Identification with B3's *exact* weight stays `[INFERENCE, high]` (B3's precise weight was never read off the seam constants).

## 3. T1: the edge non-membership promoted; the threshold-growth part open `[mixed]`

- **T1-a (Λ* = 1 not in σ_p) `[OPEN] → [INFERENCE, high]`:** the reduction to LEM-K0 / FG-1989 antilocality at the conformal c → 1 point passes the mandatory Gaussian-BIC test (antilocality is operator-specific — no BIC transfer). Residue: uniform c → 1 antilocality at mR > 0, unwritten.
- **T1-b (at-most-linear-growth threshold ground state) `[OPEN]`:** held open, and the earlier optimism that it is "the edge limit of LEM-SEAM-SC" is **unsupported** — reclassified as *possibly independent*. Two defective supports repaired: the r⁻⁴ corner potential was mistagged smooth-bounded (needs a corner-adapted Allegretto–Piepenbrink argument); the corner-indicial confluence was the wrong region (use the asymptotic n = 0 threshold mode {1, ξ} for the linear-growth borderline).

## 4. SEAM-ESS: the dead lens, and why it matters `[UNVERIFIED — no progress]`

The SEAM-ESS + B1-Hopf + KWSS lens **died on both runs** (prover and referee). A dead lens is not silently a null result: **B0's Perron corollary therefore did NOT reach `[ESTABLISHED]`** and stays `[INFERENCE, high | SEAM-ESS unwritten]`. Worse, SEAM-ESS is revealed *heavier than framed*: the free seam symbols place the essential-spectrum edges at 0.0509 and 19.64 — **nowhere near 1** — so the entire "edge = Λ* = 1" identification is carried by the involution + the mass corrections. **T1 is not provable without SEAM-ESS; they are one problem** (contradicting the earlier framing that T1-b's residue was free). Designated: prove SEAM-ESS and T1 together, via relative compactness of the q-corrections to the Dirichlet–Neumann blocks.

## 5. Watch #8: 0 strong; no external lever for the crux

The two most crux-relevant themes returned nothing new: "sign-changing embedded eigenfunction exclusion via positivity-improving" — no hit (**LEM-SEAM-SC has no external lever**); Aydi–Kchaou–Trunk arXiv:2607.05852 is a representation/definiteness tool only (no essential-spectrum or exclusion content). Weak/adjacent: arXiv:2512.04659 (massive modular Hamiltonian on the half-line, numerical — confirms non-locality, silent on spectrum); Murata-lineage criticality remarks (arXiv:2604.07845 / Math. Ann. 2026, not the cylinder/threshold case). Process discipline held: abstracts verified by direct PDF extraction, not quick-fetch summaries.

## 6. Ledger

1. **CH-26(iii): Part 1 A0-LAP + Part 2 on-band collapse O(√b) minted `[ESTABLISHED]`**; theorem conditional on **(B) the off-band bound `[OPEN]` — the whole ballgame ≡ LEM-A1⁗'s sharpest form** — plus (C) transversality and a uniform Grushin/Schur closure.
2. **Branch-(b) rates: (i) + (ii) `[OPEN] → [INFERENCE, high]`**; (iii) ŵ = 0 **self-refuted at half-line, demoted `[INFERENCE, high | whole-line/corner IBP]`**, now entangled with the open seam corner; rate equality `[OPEN]`.
3. **T1-a `[OPEN] → [INFERENCE, high]`** (antilocality, passes BIC); T1-b `[OPEN]`, possibly independent; two scaffolding repairs.
4. **SEAM-ESS unverified (dead lens)** — B0's Perron corollary stays `[INFERENCE, high]`; SEAM-ESS revealed to carry the edge = 1 identification, and to be one problem with T1.
5. Label hygiene caught (κ = cosh² not coth²; the class of the house's flagged sign/label-error history). New numerics: `scripts/p2-iter27-branchb-rate-checks.py` (all checks PASS).
6. **Hedge: HYP-CKV-VACUITY HELD at R7** — internal hardening only; every rung's crux (LEM-SEAM-SC, off-band (B), T1-b, SEAM-ESS) stays `[OPEN]`, and the rungs are increasingly coupled through {SEAM-ESS, the seam corner}. **Verdict unchanged — 26th consecutive confirmation**; carrier count FIVE; no numeric ID consumed.
7. Ladder: rung 1 (free-field gate) hardened internally, still OPEN; rungs 2–5 HELD.

## 7. Designated next moves (iteration 28, assembler's order)

1. **Re-run the dead rung: prove SEAM-ESS and T1 together** (relative compactness of the q-corrections to the DN blocks) — it carries the edge = 1 identification and simultaneously unblocks B0's Perron corollary and pins T1's threshold point.
2. **Attack CH-26(iii)'s residual (B):** the uniform-in-b off-band bound sr(K^b_off) ≤ σ < 1 for the non-self-adjoint operator — deploy the ξ-locality of q (the exact hypothesis the rank-one BIC violates); write the uniform Grushin/Schur inversion.
3. **Repair branch-(b)(iii)** via the whole-line Fourier argument, coordinated with LEM-TRACE's corner constants.
4. **T1-b:** settle independence from LEM-SEAM-SC; corner-adapt Allegretto–Piepenbrink for the r⁻⁴ potential; use the {1, ξ} threshold mode.
5. **Interval-certify** the seeded n-uniform slack contraction (currently numerical) to firm the ≥-bounds toward `[ESTABLISHED]`.
6. Direct-PDF: AKT 2607.05852 Thm 5.4 (B2), the Il'yasov–Valeev cone certificate, and the periodic-waveguide threshold-LAP literature for CH-26(i)'s missing citation.

## See also
- [2026-07-12-iter26-s5-and-seam.md](2026-07-12-iter26-s5-and-seam.md) — S5, LEM-TRACE, the seam chain B0–B3, and CH-26 this iteration built on
- [../scripts/p2-iter27-branchb-rate-checks.py](../scripts/p2-iter27-branchb-rate-checks.py) — the branch-(b) rate/fixed-point/slack certificates
- [../PROVENANCE.md](../PROVENANCE.md) — CH-26(iii) Parts 1–2 and the branch-(b) dichotomy enter 🟢
