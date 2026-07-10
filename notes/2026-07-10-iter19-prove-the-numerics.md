---
title: "Iteration 19 — proving what the numerics found: the E=0 half of free-field (E_O) becomes ESTABLISHED (FG 1989 verified + an independent factoriality re-proof); the λ≠1 exclusion is sharpened to a single named open question; the pinning scan finds no embedded eigenvalue"
type: note
tags: [note, iter19, synthesis, numerics]
updated: 2026-07-10
---

# Iteration 19 — prove the numerics

**Status:** Analytic follow-through of iteration 18 (the sanctioned sharpest decidable lever from iteration 17: prove the free-field spectral fact). Two fronts: (A) a proposed lemma (LEM-K0) adversarially refereed (default REFUTE, with a primary-source novelty check), plus three refereed proof attempts on the remaining λ≠1 statement; (B) a precision-hardened **embedded-eigenvalue (pinning) scan** extending the iteration-18 numerics.
**Outcome:** **Verdict UNCHANGED — 18th consecutive confirmation; hedge stays R7** (the house rule requires full free-field (E_O) closure for R8; only the E=0 half closed). But the ledger genuinely moves: the E=0 / fixed-Weyl half of free-field (E_O) is **retired from `[unverified]`/numerical to `[ESTABLISHED]`** with a primary-source anchor and an independent second proof; the massless double-cone case is theorem-grade; the λ≠1 residual is **provably narrower and provably harder** (invariant-level arguments cannot decide it), with a named best-lead; and the pinning scan finds **no embedded eigenvalue at any energy or mass**.
**Last updated:** 2026-07-10
**Iteration:** 19

---

## 1. LEM-K0 — refereed CONFIRMED_WITH_CORRECTIONS; the correction is attributional

> **LEM-K0 (standard-subspace factoriality lemma) `[ESTABLISHED — verified re-proof; NOT novel]`.** Let K ⊂ H be a standard real subspace with Tomita data S = Jδ^{1/2}, K = fix(S), K′ = fix(S*), S* = Jδ^{−1/2}. **(a)** K ∩ K′ = (ker(δ−1))_J and ker(δ−1) = (K∩K′) + i(K∩K′); hence K factorial (K ∩ K′ = {0}) **iff** 1 is not an eigenvalue of δ. **(b)** If K is factorial, K contains no δ-eigenvector for *any* eigenvalue (f ∈ K, δf = λf ⟹ Jf = λ^{−1/2}f ⟹ J² = 1 forces λ = 1 ⟹ f = 0 by (a)).
>
> **Application `[ESTABLISHED]`:** for the massive free scalar double cone, R(K_O) is a type III₁ factor (Araki; Figliolini–Guido, J. Operator Theory **31** (1994) 229–252), and Araki duality R(K)′ = R(K′) transfers factoriality to K_O. Hence **1 ∉ σ_p(δ_O): no modular-fixed one-particle vector, no fixed Weyl operator — the E=0 half of the free-field (E_O) criterion holds as a theorem.**

**Attribution (decisive; live-verified from the primary source).** The referee downloaded the full Figliolini–Guido 1989 paper (*The Tomita operator for the free scalar field*, Ann. Inst. H. Poincaré **51** (1989) 419–435; numdam PDF) and verified verbatim, p. 429: *"It is clear from (3.6) that 1 ∉ σ_p(δ), but it is possible to prove … that … 1 ∈ σ(δ)."* **FG 1989 already state and prove the E=0 exclusion**, via **antilocality** of ω = (−Δ+m²)^{1/2} (Segal–Goodman 1965) — a different mechanism from the factoriality route above. Part (a) is standard-subspace folklore (explicit in *Inclusions of Standard Subspaces*, Comm. Math. Phys. 2025, DOI 10.1007/s00220-025-05458-4). **LEM-K0 is therefore a verification plus an independent second proof, not new mathematics** — and the iteration-17 `[unverified]` tag on the FG claim is **retired to `[ESTABLISHED]`** with the primary-source anchor.

## 2. The λ≠1 attempts — all PARTIAL (referee grade B+, no fabrications)

| Lens | Yield | Status |
|---|---|---|
| **P1** — Mourre / positive commutator from the massless comparison dynamics | **Massless (3+1) double cone: ln δ_O(0) is purely absolutely continuous, spectrum ℝ, NO eigenvalues** — Hislop–Longo conformal conjugation to the wedge boost + Borchers commutation + Stone–von Neumann `[ESTABLISHED]` (the 1+1 scalar testbed needs the IR-safe derivative-field variant `[INFERENCE, high]`). Massive case: **conditional theorem** — under (H1) C^{1,1}-Mourre regularity and (H2) form-compactness of the mass commutator (both `[OPEN]`), point spectrum in any compact I ⊂ ℝ∖{0} is at most **finite**, purely a.c. otherwise. | PARTIAL |
| **P2** — locality / standard-subspace rigidity | **A genuine new rigidity constraint (proved this session):** any δ_O-eigenvector extends π-strip boost-analytically in **every** wedge containing O, with W-independent norm; also (K_O, K_W) is **not** a half-sided modular inclusion for m > 0 (so the Borchers–Wiesbrock instant kill is unavailable). Strong necessary conditions; no contradiction yet extracted. | PARTIAL |
| **P3** — literature + structure theory | **The λ≠1 statement is proved NOWHERE** (live-verified: Longo–Morsella's massive-ball result withdrawn; Cadamuro–Fröb–Minz 2312.04629 call it "an open problem"; all massive double-cone knowledge numerical). **Invariant-level arguments provably cannot decide it** (Powers/Araki–Woods ITPFI factors realize factorial standard subspaces with pure-point one-particle modular spectra; III₁ needs only cl-grp(spec δ) = ℝ₊). The only known kill mechanism in the field is Borchers commutation — exactly what bounded regions lack. Scaling-limit transport fails (spectral type not preserved under strong-resolvent limits). | PARTIAL |

**The named best-lead (from the FG novelty check):** FG's Theorem 3.6 converts λ ≠ 1 eigenvalues of δ_O into real eigenvalues μ = (λ+1)/(λ−1), |μ| > 1, of their operator B; FG's antilocality argument (Prop. 3.5) kills exactly μ = ±1. **Extending the antilocality argument from μ = ±1 to all real μ is the sharpest open proof target** — a concrete, single-mechanism question for the same toolset FG already used. `[OPEN — the iteration-19 deliverable target]`

## 3. Front B — the pinning scan: no embedded eigenvalue

The iteration-18 numerics are extended by a scale-aware embedded-eigenvalue test (reproducible: [scripts/eo-modular-numerics.py](../scripts/eo-modular-numerics.py), iteration-19 section; precision-hardened via the symmetrized solver eig(X_A P_A) = eigh(P^{1/2}X_A P^{1/2})). Statistic per sorted mode: g_k = [ε_k(768)·ln 768]/[ε_k(96)·ln 96] — continuum ≈ 1, pinned eigenvalue = 1.456.

- **Result: worst g anywhere = 1.049** (m = 0.5; m = 1 gives median 1.0001 — continuum scaling to three decimals; heavier masses drift *below* 1, the opposite of pinning). **No pinned mode at any energy, any mass up to mR = 32.**
- The one suspicious mid-spectrum drift resolved cleanly: ε₁₉·lnL → 21π² — a **late-onset high ladder level converging upward to its (2j+1)π²/lnL slot**, not an eigenvalue. (Modes with ε ≳ 22 sit at ν−½ ≲ 10⁻¹⁰ and need the symmetrized solver; flagged in the script.)
- Complementarity with P1: the conditional Mourre theorem allows "at most finitely many eigenvalues per compact interval"; the scan says the actual number is **zero** in the accessible window. `[INFERENCE, high — validated lattice computation; not a continuum proof]`

## 4. Ledger effect (the honest accounting)

1. **E=0 half of free-field (E_O): `[ESTABLISHED]`** (FG 1989 + LEM-K0 factoriality re-proof). The iter-17 `[unverified]` tag is retired.
2. **Massless (3+1) double cone: purely a.c., no eigenvalues — `[ESTABLISHED]`** (upgrades the iter-16 "conformal transport sketch" at the one-particle spectral level).
3. **λ≠1 exclusion: `[OPEN]`, sharpened** — provably undecidable by invariant-level arguments; must use locality/mass-shell data; best lead = the antilocality extension (μ = ±1 → all real μ); conditional Mourre bounds it to finite-per-interval; numerics see zero.
4. **Hedge: HYP-CKV-VACUITY stays R7** — no movement (R8 requires full free-field (E_O) closure, referee-confirmed). Verdict **unchanged, 18th consecutive confirmation**; carrier-route count stays FIVE; no numeric ID consumed.
5. **Process:** all seven live-checkable citations verified verbatim; the referee read the 1989 primary source in full; no fabrications (verifier grade B+).

## 5. What would move it from here

(i) The antilocality extension (all real μ) → full free-field (E_O) → **R7 → R8 on the free subclass** — now a single-mechanism, precisely-posed question; (ii) proving Mourre hypotheses (H1)–(H2) + a Fermi-golden-rule argument; (iii) the external clocks (2027 DESI w(z)). The dossier's external-solver invitation now points at the sharpest form the gate has ever had.

## See also
- [2026-07-07-iter18-generative-assault.md](2026-07-07-iter18-generative-assault.md) — the numerics this iteration set out to prove
- [2026-07-07-iter17-EO-assault-synthesis.md](2026-07-07-iter17-EO-assault-synthesis.md) — the reduction; its `[unverified]` FG item is retired by this note (dated addendum there)
- [../HYPOTHESES.md](../HYPOTHESES.md) — iteration-19 refinements
- [../scripts/eo-modular-numerics.py](../scripts/eo-modular-numerics.py) — reproducible numerics incl. the pinning scan
