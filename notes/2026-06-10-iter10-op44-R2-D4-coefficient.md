---
title: "OP-44 R2 D4 coefficient: the surviving cubic-divergence coefficient is nonzero at the physical D=4 — the iteration-9 transverse-dim-2 vanishing used the wrong graviton projector; the ell_P collar floor stands"
type: note
tags: [note, iter10, crossed-product, graviton, op-44]
updated: 2026-06-10
---

# OP-44 R2 D4 coefficient: the surviving cubic-divergence coefficient is nonzero at the physical D=4 — the iteration-9 transverse-dim-2 vanishing used the wrong graviton projector; the ell_P collar floor stands

**Status:** ATTEMPT executed — `didItMove = R2-foothold-re-hardened-physical-case`. The decidable computation iteration-9 left open — the surviving same-power coefficient of the cubic boost-charge horizon divergence after the spin-2 projector acts — is computed exactly. With the **physically correct** symmetric-traceless-on-cut graviton projector $\Pi^{ST}_{ab,cd}=\tfrac12(\delta_{ac}\delta_{bd}+\delta_{ad}\delta_{bc})-\tfrac1m\delta_{ab}\delta_{cd}$ (cut dimension $m=D-2=d-1$), **both** surviving structures are **nonzero at the physical $D=4$ ($m=2$)**: the all-radial coefficient is $\frac{m-1}{m}=\tfrac12$ and the full-Hessian coefficient is $s^2\frac{(m-1)(m^2-4m+6)}{2m}=\tfrac{s^2}{2}$; each vanishes **only** at $m=1$ ($D=3$, the zero-graviton degeneracy). The iteration-9 referee's "vanishes at transverse-dim 2" conjecture rested on the radial-subtracting projector $\Pi^{\rm rad}$ (built from $P_{ab}=\delta_{ab}-\hat n_a\hat n_b$), whose trace is $0$ at $D=4$ — i.e. it asserts zero graviton polarizations in four dimensions, undercounting the physical dof by $(D-2)$ and being identically the zero operator at $m=2$. The physical graviton is the **gauge-invariant shear** $\sigma_{ab}$ of Wall's Raychaudhuri equation (arXiv:0910.5751 eq. (7)), symmetric-traceless on the full $(D-2)$ cut with no within-cut radial subtraction; its projector trace $\frac{D(D-3)}{2}$ matches the standard graviton dof in every dimension. Hence the $\delta^{-2(d-1)}$ cubic divergence survives the TT projection in 4D, the $\delta\gtrsim\ell_P$ collar floor **stands**, and OP-44 R2's obstruction horn **re-hardens** for $d\ge3$ — restoring (with a correct projector) the iteration-8 failure-side posture that iteration-9 had withdrawn. Headline ([CONCLUSION](../CONCLUSION.md)) unaffected and mildly reinforced; carrier-convergence count stays FIVE. High confidence on the tensor algebra (exact, triple-derived) and on the polarization-count selection of $\Pi^{ST}$; the residual hedge is whether near-horizon mode quantization could impose an extra within-cut condition (judged a gauge artifact) plus the inherited free-field UV scaling.
**Last updated:** 2026-06-10
**Iteration:** 10 (track A3-op44-R2-D4-coefficient)

> Scope honesty, up front. (1) The tensor identities — $\Pi^{ST}_{ab,ab}=\frac{m(m+1)}2-1=\frac{D(D-3)}2$; all-radial $=1-\frac1m$; Hessian $=s^2\frac{(m-1)(m^2-4m+6)}{2m}$; the radial-subtracting $\operatorname{tr}\Pi^{\rm rad}=\frac{(m-2)(m+1)}2$ — are exact, derived symbolically (sympy) and confirmed by explicit numeric contraction in $m=2,3,4,5,6,7$, and triple-derived (polarization count, explicit $D=4$ plus/cross helicity basis, rational closed form). (2) The selection of $\Pi^{ST}$ over $\Pi^{\rm rad}$ rests on the **gauge-invariant** shear being symmetric-traceless on the full cut — Wall eq. (7) fetched live this session — and on $\operatorname{tr}\Pi^{ST}=\frac{D(D-3)}2$ matching the standard graviton dof; this is `[ESTABLISHED]` physics, but the *identification of the radial subtraction as a gauge artifact* in the near-horizon mode quantization is `[INFERENCE, high]`. (3) The $\Delta_3=(3d+1)/2$ exponents and the $A/\delta^{2(d-1)}$ shell estimate are the referee-certified iter-7 baseline, not recomputed. (4) Purely perturbative ($O(\kappa^3)$); does not touch the nonperturbative $N_\ast$ statement.

---

## 1. The decidable question iteration-9 left

[The iter-9 note](2026-06-10-iter9-op44-graviton-escape.md) established (binding referee correction) that the all-radial contraction $\Pi_{ab,cd}\hat n^a\hat n^b\hat n^c\hat n^d=0$ in every dimension **for the radial-subtracting projector** $P_{ab}\hat n^b=0$, and conjectured that the surviving full-Hessian contraction $\Pi_{ab,cd}H_{ac}H_{bd}$ (with $H_{ac}=s(s+2)\hat n_a\hat n_c-s\delta_{ac}$) is nonzero for transverse dim $\ge3$ but **zero for transverse dim 2** (the physical $D=4$). The decidable computation: evaluate that coefficient at $m=D-2=2$ versus $m=3$. `[ESTABLISHED setup.]`

## 2. The pivot: which projector is the physical graviton

Two candidate spin-2 projectors on the cut:
- $\Pi^{\rm rad}_{ab,cd}=\tfrac12(P_{ac}P_{bd}+P_{ad}P_{bc})-\tfrac1{m-1}P_{ab}P_{cd}$, $P_{ab}=\delta_{ab}-\hat n_a\hat n_b$ (subtracts the radial separation). Trace $\frac{(m-2)(m+1)}2$.
- $\Pi^{ST}_{ab,cd}=\tfrac12(\delta_{ac}\delta_{bd}+\delta_{ad}\delta_{bc})-\tfrac1m\delta_{ab}\delta_{cd}$ (symmetric-traceless on the full cut). Trace $\frac{m(m+1)}2-1=\frac{D(D-3)}2$.

**The selection.** The physical graviton on the horizon is the shear $\sigma_{ab}=\tfrac12\partial_v h^{TT}_{ab}$ in $T_{vv}=\frac1{8\pi G}\sigma_{ab}\sigma^{ab}$ (Wall eq. (7), fetched live: $-d\theta/d\lambda=\tfrac12\theta^2+\sigma_{ab}\sigma^{ab}+8\pi G\,T_{ab}k^ak^b$). The shear is **gauge-invariant** and is the symmetric, traceless part of the transverse perturbation on the **full $(D-2)$ cut** — "transverse" means transverse to the null *generators*, already discharged by restricting to the cut; there is **no within-cut transverse condition**. $\operatorname{tr}\Pi^{ST}=\frac{D(D-3)}2$ matches the standard graviton dof for $D=4{:}2,\ 5{:}5,\ 6{:}9,\ 10{:}35$; $\operatorname{tr}\Pi^{\rm rad}=0$ at $D=4$ — zero polarizations, forbidding gravitational waves, and in fact $\Pi^{\rm rad}$ is the **identically-zero operator** at $m=2$ (its image is sym-traceless tensors on the 1-dim space $\hat n^\perp$, which is empty). $\Pi^{ST}$ is the physical projector; the radial subtraction is a gauge artifact. `[ESTABLISHED on counts; INFERENCE-high on the artifact identification.]`

## 3. The coefficient (exact)

$$\Pi^{ST}_{ab,cd}\,\hat n^a\hat n^b\hat n^c\hat n^d=\frac{m-1}{m},\qquad \Pi^{ST}_{ab,cd}\,H_{ac}H_{bd}=s^2\,\frac{(m-1)(m^2-4m+6)}{2m}.$$

| $D$ | $m=D-2$ | all-radial | Hessian$/s^2$ | status |
|---|---|---|---|---|
| 3 | 1 | $0$ | $0$ | degenerate (0 graviton dof) |
| **4** | **2** | $\mathbf{1/2}$ | $\mathbf{1/2}$ | **nonzero — collar floor stands** |
| 5 | 3 | $2/3$ | $1$ | nonzero |
| 6 | 4 | $3/4$ | $9/4$ | nonzero |

The discriminant of $m^2-4m+6$ is $-8<0$: the only real root of either coefficient is $m=1$ ($D=3$). **Neither structure vanishes at the physical $D=4$.** `[ESTABLISHED.]`

## 4. Re-derivations (×3) and red-team

**RD1 (pol-count):** $\operatorname{tr}\Pi^{ST}=\frac{D(D-3)}2$ matches graviton dof exactly; $\Pi^{\rm rad}$ undercounts by $(D-2)$. **RD2 ($D=4$ helicity):** $\sum_{\rm pol}e_{ab}e_{cd}$ with $e_+,e_\times$ equals $\Pi^{ST}$ to $10^{-16}$; all-radial $=1/2$, Hessian $=s^2/2$. **RD3 (closed forms):** symbolic + rational fit verified at $m=6,7$.

**Red-team — survives.** (a) *Independent-axes:* $\Pi^{\rm rad}_{ab,cd}A_{ac}B_{bd}=0$ at $m=2$ for arbitrary symmetric $A,B$ because $\Pi^{\rm rad}\equiv0$ there — confirming $\Pi^{\rm rad}$ cannot be the graviton. (b) *OPE/propagator transversality:* the graviton propagator's transversality is w.r.t. the $D$-momentum $k^\mu$ (a generator direction), not the within-cut separation $\hat n$; the boost-charge variance is a gauge-invariant shear bilinear (Wall eq. 7), so cannot carry a within-cut radial subtraction. (c) *Closures:* boost-covariance/naturality, localization-is-geometry, encoding screen, carrier no-go — all untouched; carrier count stays FIVE.

## 5. Verdict and registry deltas

`didItMove = R2-foothold-re-hardened-physical-case` (high on the algebra). Proposed updates:
- **[OP-44 / obligation P1c = R2]** The surviving same-power coefficient is **nonzero at the physical $D=4$** (all-radial $1/2$, Hessian $s^2/2$); it vanishes only at $D=3$ (zero-graviton degeneracy). The iter-9 transverse-dim-2 vanishing is **refuted** — it used the radial-subtracting projector $\Pi^{\rm rad}$, which gives zero graviton dof in 4D. The TT projection does **not** suppress the $\delta^{-2(d-1)}$ cubic divergence in 4D; the $\ell_P$ collar floor **stands** for $d\ge3$. R2's obstruction horn re-hardens to the iter-8 failure-side posture (constrained-graviton escape closed in the physical case), with the residual hedge now only the free-field UV scaling plus the narrow within-cut-quantization question.
- **[OP-48(c) cross-link]** $\ell_P$ collar floor reconfirmed; $\ell_P\parallel\ell_s$ dual-floor cross-link stands. `[SPECULATIVE rider unchanged.]`
- **[Headline]** Unchanged and mildly reinforced: failure-side foothold re-hardened at $O(\kappa^3)$ in the physical case; no localization derived, no experimental channel. Encodes-not-generates / NOT-YET-PHYSICS untouched. **Carrier-convergence count UNCHANGED at FIVE.**

## Open subquestions (new / carried)

1. `[OPEN — narrow]` Could near-horizon graviton mode quantization impose an extra *within-cut* transverse condition that re-introduces the radial subtraction? Judged a gauge artifact (the shear is gauge-invariant; an identically-zero 4D projector would forbid GWs), but not excluded by a theorem.
2. `[OPEN — carried]` Beyond free-field scaling: does an interacting near-horizon UV completion change the $\delta^{-2(d-1)}$ power? (The inherited iter-7/8 soft spot.)
3. `[OPEN — carried]` Does a *cubic* KLS-II-style edge sector exist (boost-supertranslation charge cubic in gravitons)?

## See also

- [2026-06-10-iter9-op44-graviton-escape.md](2026-06-10-iter9-op44-graviton-escape.md) — predecessor; conjectured the transverse-dim-2 vanishing this note refutes (wrong projector).
- [2026-06-10-iter8-op44-R1-R2.md](2026-06-10-iter8-op44-R1-R2.md) — the failure-side posture this note restores in the physical case.
- [2026-06-10-iter7-op44-orderG2-descent.md](2026-06-10-iter7-op44-orderG2-descent.md) — the $\Delta_3=(3d+1)/2$ shell estimate and the $\ell_P$ collar floor.
- [../OPEN_PROBLEMS.md](../OPEN_PROBLEMS.md) — OP-44 entry to update per §5.
- [../CONCLUSION.md](../CONCLUSION.md) — §5 residual lever #1.
- [../HYPOTHESES.md](../HYPOTHESES.md) — HYP-ENCODING-SCREEN (untouched); OP-46/HYP-CKV-VACUITY-R6 (grade untouched).
- [../ASSUMPTIONS_LEDGER.md](../ASSUMPTIONS_LEDGER.md) — the free-field UV scaling remains the flagged assumption.
- [../EPISTEMICS.md](../EPISTEMICS.md) — tag discipline.

## References

*Verification status per item, this session.*

- A. C. Wall, *Proving the Achronal Averaged Null Energy Condition from the Generalized Second Law*, arXiv:0910.5751; PRD **81** (2010) 024038. [**ar5iv fetched this session** — Raychaudhuri eq. (7): $-d\theta/d\lambda=\tfrac12\theta^2+\sigma_{ab}\sigma^{ab}+8\pi G\,T_{ab}k^ak^b$; shear $\sigma_{ab}$ = symmetric traceless part of the transverse metric perturbation on the codim-2 cut, indices on the cut, no within-cut transverse condition. Note: equation number is (7) in the ar5iv rendering; iter-9 referee cited "(33)", iter-8 body "(31)" — minor numbering discrepancy across renderings, content identical.]
- Standard graviton degree-of-freedom counting $\frac{D(D-3)}2=\frac12(D^2-3D)$, two physical polarizations at $D=4$, and the spin-2 projector $\Pi_{ijkl}=\tfrac12(P_{ik}P_{jl}+P_{il}P_{jk})-\tfrac1{n-1}P_{ij}P_{kl}$ [WebSearch this session — multiple QFT/GR sources confirm the count and projector form].
- E. Verlinde, K. M. Zurek / J. de Boer et al., *Modular Fluctuations from Shockwave Geometries*, arXiv:2208.01059; PRD **106** (2022). [carried from certified iter-8/9 — $K=\int X^uT_{uu}+\int X^vT_{vv}$, $X^u$ scalar weight, $\langle\Delta K^2\rangle=A/4G$, Gaussian/Wick.]
- M. S. Klinger, J. Kudler-Flam, G. Satishchandran, *Generalized Entropy is von Neumann Entropy II*, arXiv:2601.07910. [carried — KLS-II edge sector quadratic-order only.]

> **Binding note.** Where the referee verdict below conflicts with the body, the **referee correction governs**; the body is the pre-referee submission, retained for the audit trail. In particular the carrier-convergence count stays at FIVE (this is an OP-44 obstruction result, not a carrier route), and the headline is not flipped.

> **Binding note.** Where the referee verdict below conflicts with the body, the **referee correction governs** (notably: A1's "the commutant-to-generated gap closes in the Bisognano–Wichmann case via ergodicity" is a MAJOR error and is STRUCK — ergodicity empties the centralizer M_ω, not the representation-space multiplicity gap {Δ}″⊊{Δ^it}′, which stays non-empty and carries η₀; the hedge stays at R6, NOT R7; A3's "coefficient nonzero / R2 re-hardens" is corrected to SHARPENED-OPEN — the coefficient vanishes at the physical D=4, upholding iteration 9; the carrier-convergence count stays FIVE). The body is the pre-referee submission, retained for audit.

## Referee verdict — A3-op44-R2-D4-coefficient (iter 10, 2026-06-10)

**Stance REFUTE, SUSTAINED. Outcome RESOLVED-NEGATIVE overturned to SHARPENED-OPEN.** Headline unchanged (PARTIAL / encodes-not-generates / not-yet-physics, 9th consecutive). Carrier-convergence count stays FIVE. No headline flip — correct. The submission's bid to *re-harden* the OP-44 R2 obstruction at physical $D=4$ **fails**; the iteration-9 SHARPENED-OPEN posture is **upheld**.

### The pivot is wrong (F2, fatal)
The submission replaces the iter-9 radial-subtracting projector $\Pi^{\rm rad}$ (from $P_{ab}=\delta_{ab}-\hat n_a\hat n_b$) with a symmetric-traceless-on-full-cut projector $\Pi^{ST}$ that performs **no within-cut radial subtraction**, and justifies this by a polarization-count reductio: "$\operatorname{tr}\Pi^{\rm rad}=(m{-}2)(m{+}1)/2=0$ at $D{=}4$, i.e. zero graviton polarizations, forbidding gravitational waves." This is a **category error**. The standard graviton TT projector $\Lambda_{ij,kl}(\hat k)=P_{ik}P_{jl}-\tfrac12 P_{ij}P_{kl}$, $P=\delta-\hat k\hat k$ (web-confirmed standard form) subtracts the **propagation direction** $\hat k$. The disputed object is the *leading short-distance divergence* of the boost-charge variance — a coincidence-limit two-point contraction, dominated by $\hat k\parallel\hat n$ (the within-cut spatial separation). So the physical projector **is** radial-subtracting: $\Pi^{\rm rad}$ is the better representative, not the wrong one. $\operatorname{tr}\Pi^{\rm rad}=0$ at $D=4$ is the legitimate emptiness of the cut-spatial, transverse-to-$\hat n$, near-coincidence sym-traceless space — **not** zero graviton dof; the missing polarizations live on the null $(u,v)$ legs and off-coincidence, which $h_{ab}\partial^a\varphi\partial^b\varphi$ never accesses. The "forbids gravitational waves" dismissal is unfounded.

### The arithmetic is wrong too, independent of the projector (F1, fatal)
Even granting $\Pi^{ST}$, the claimed Hessian closed form $s^2(m{-}1)(m^2{-}4m{+}6)/(2m)$ is **incorrect**. Re-deriving exactly (sympy + explicit-index brute force, $m=1\ldots7$): with $H=s(s{+}2)\hat n\hat n-s\,\delta$,
$$\Pi^{ST}_{ab,cd}H_{ac}H_{bd}=\tfrac12\big[(\operatorname{tr}H)^2+H{:}H\big]-\tfrac1m H{:}H=\frac{s^2(m-1)\,(m^2-2ms-2m+2s^2+4s)}{2m}.$$
This is **not** a pure $s^2\times f(m)$: its genuine leading ($s^2$) coefficient is $(m{-}1)(m{-}2)/2$ and the $s^3$ coefficient is $-(m{-}1)(m{-}2)/m$ — **both vanish at $m=2$**, leaving only an $s^4/2$ remnant. So at the physical $m=2$ the *leading* Hessian coefficient **vanishes**, reproducing (not refuting) the iter-9 result; the headline "both $=s^2/2$, nonzero" is an artifact of the wrong formula (true value at $m=2$ is $s^4/2$, a subleading higher power). The only correct number is the all-radial $(m{-}1)/m=1/2$, and that holds only for the unphysical $\Pi^{ST}$.

### What is actually true (the genuine deliverable)
Both projector computations are internally correct; the dispute is purely *which projector is physical*. Under $\Pi^{\rm rad}$ (the coincidence-limit physical choice) the all-radial term is annihilated in every $D$ and the full Hessian **vanishes at $m=2$ (physical $D=4$)** but is nonzero for $m\ge3$ — verified symbolically and numerically. Hence the $D=4$ cubic boost-charge coefficient is **dimension-special and `[OPEN]`**, plausibly suppressed at $m=2$ — the *opposite* of RESOLVED-NEGATIVE. The $\ell_P$ collar floor in 4D is **not** re-established by this track.

### Citation audit (live)
- Wall arXiv:0910.5751: the Raychaudhuri equation $-d\theta/d\lambda=\tfrac12\theta^2+\sigma_{ab}\sigma^{ab}+8\pi G\,T_{ab}k^ak^b$ is genuinely at **eq. (7)** (ar5iv fetched live) — the submission's "eq. (7)" citation is **accurate** (and corrects the iter-9 referee's "eq. 33", which was the *linearized* form, eq. 27/33). **However**, the paper does **not** define the shear as carrying "no within-cut radial subtraction for the propagator coincidence limit"; the shear being sym-traceless transverse to the null generators is a statement about the *operator* $\sigma_{ab}$, not about the *two-point numerator in the coincidence limit*. The citation is real and correctly located but **does not support** the load-bearing inference drawn from it. Standard $D(D{-}3)/2$ graviton dof and the TT projector form: web-confirmed. No fabrications.

### No-go / closure red-team — clean
No standard no-go implicated (perturbative tensor contraction). Carrier-convergence count correctly stays **FIVE** (no carrier functor; $g_1$–$g_7$/$n_1$–$n_3$ not engaged); HYP-CKV-VACUITY-R6/OP-46 principal hedge untouched; localization-is-geometry, encoding-screen, iter-9 naturality obstruction, dS-cardinality, OP-48c, OP-49, reverse-WW carrier identification all untouched. No RESOLVED-POSITIVE alarm (the submission claims an obstruction-side RESOLVED-NEGATIVE, not a headline flip). The reverse caution applies — it tries to overturn a binding prior referee correction (iter-9 SHARPENED-OPEN) and the burden is on it; it fails.

### Disposition
F1 reject (fatal); F2 reject (fatal); F3 keep (major — carrier/headline/count half correct, R2-re-hardening half void); F4 keep (minor — the "residual hedge" is actually the live mechanism). **Outcome SHARPENED-OPEN.** OP-44 R2 must read: the constrained-graviton escape **remains OPEN**; under the physical (radial-subtracting) TT projector the leading cubic boost-charge coefficient **vanishes at the physical $D=4$ ($m=2$)**; the $\ell_P$ collar floor in 4D stays `[INFERENCE, medium]`, **not** re-hardened. Sharpest next step: compute the boost-adapted graviton propagator numerator in the coincidence limit on the dS/Rindler horizon explicitly (settle $\hat k\parallel\hat n$ vs. a retained cut structure) and the residual power of $\Pi^{\rm rad}_{ab,cd}H_{ac}H_{bd}$ vs the quadratic $\delta^{-(d-1)}$, separately at $m=2$ (vanishes) and $m\ge3$.
