---
title: "OP-44 R2 closed on the failure side: the constrained-graviton tensor structure does not cancel the cubic boost-charge horizon divergence"
type: note
tags: [note, iter9, crossed-product, graviton, op-44]
updated: 2026-06-10
---

# OP-44 R2 closed on the failure side: the constrained-graviton tensor structure does not cancel the cubic boost-charge horizon divergence

**Status:** ATTEMPT executed — `didItMove = R2-escape-closed-failure-side`. The sole surviving escape for the order-$\kappa^3$ cubic-charge horizon non-splittability obstruction — that the constrained (transverse-traceless, gauge-fixed) graviton tensor structure plus boost-weighted contraction might suppress the leading $\delta^{-2(d-1)}$ coefficient below the quadratic charge's $\delta^{-(d-1)}$ — is **closed on the FAILURE side**. Three independent reasons, each sufficient: (1) the boost weight $X^u$ is a scalar carrying no transverse indices, so no boost-weighted angular cancellation is kinematically available; (2) the spin-2 TT projector is dimensionless and leaves the connected cubic correlator's short-distance power exactly at $2\Delta_3\Rightarrow\delta^{-2(d-1)}$, softening the coefficient only by the strictly positive factor $\frac{d-2}{d-1}$; (3) the d=2 case the mission requested is degenerate (zero graviton d.o.f. in $D=3$), not a cancellation. R2's obstruction horn is now theorem-shaped on the failure side; the $\delta\gtrsim\ell_P$ collar floor stands in every dimension $d\ge3$. Headline ([CONCLUSION](../CONCLUSION.md)) unaffected and reinforced. Medium-high confidence on the escape-exhaustion; the residual hedge is the free-field UV scaling shared with the certified iter-7 estimate, not the tensor structure.
**Last updated:** 2026-06-10
**Iteration:** 9 (track A4-op44-R2-graviton-escape)

> Scope honesty, up front. (1) The graviton-null-energy-as-shear-squared input (Wall arXiv:0910.5751 eq.31, corroborated arXiv:2405.00847), the linear-charge/two-point area-law anchor (Verlinde–Zurek arXiv:2208.01059 eqs.20/42), the spin-2-projector-is-a-bounded-operator fact, and the $D(D-3)/2$ graviton counting were all verified against primary/standard sources this session. (2) The polarization-sum coefficient $\frac{d-2}{d-1}$ is re-derived twice (dimensional and explicit-angular); it is a scaling-level statement with the free-field/independent-cell assumptions of the iter-7 estimate inherited, not a rigorous bound. (3) The iter-7 §4 exponents ($\Delta_3=(3d+1)/2$, $A/\delta^{d-1}$, $A/\delta^{2(d-1)}$, $\delta\gtrsim\ell_P$) are taken as the referee-certified baseline, not recomputed. (4) The result is purely perturbative ($O(\kappa^3)$) and does not touch the nonperturbative $N_\ast$ statement.

---

## 1. The question R2 left open

From [the iter-8 note](2026-06-10-iter8-op44-R1-R2.md) §3 and [the iter-7 note](2026-06-10-iter7-op44-orderG2-descent.md) §4: the one-sided cubic boost charge $C^{(3)}_R\sim\int_{\Sigma_R}X^u\,{:}\mathcal O_3{:}$, $\mathcal O_3\sim h\,\partial\varphi\partial\varphi$, $\Delta_3=(3d+1)/2$, has variance $\langle(\Delta C^{(3)}_{R,\delta})^2\rangle\sim A/\delta^{2(d-1)}$ — larger by $\delta^{-(d-1)}$ than the quadratic charge $A/\delta^{d-1}$ (the modular-fluctuation area law), forcing the Planckian collar $\delta\gtrsim\ell_P$. That estimate treated $\mathcal O_3$ as a **scalar** composite of dimension $\Delta_3$. The iter-8 referee (F4) flagged the **sole surviving escape**: the actual cubic charge is built from the graviton stress tensor with **constrained** polarizations; could the on-shell tensor structure + boost weight cancel the leading power that a scalar count misses? `[ESTABLISHED setup — certified baseline.]`

## 2. Verified physical inputs

- **(P-i) Graviton null energy density = shear-squared, quadratic in the TT graviton.** $T^{\rm grav}_{vv}=\frac{1}{8\pi G}\sigma_{ij}\sigma^{ij}$, $\sigma_{ij}=\tfrac12\partial_v h^{TT}_{ij}$ — Isaacson. Wall arXiv:0910.5751 eq.(31) verbatim: $-d\langle\theta^1\rangle/d\lambda=\langle\sigma_{ab}\sigma^{ab}\rangle^1+8\pi\langle T_{ab}\rangle^1k^ak^b$; "$\sigma_{ab}\sigma^{ab}$ contributes to Raychaudhuri in a similar way to the stress-energy of matter." Corroborated arXiv:2405.00847. `[ESTABLISHED.]`
- **(P-ii) Quadratic charge linear in $T$, reproduces area law — the anchor.** Verlinde–Zurek arXiv:2208.01059: $K=\int d^{d-2}y[\int_{-\infty}^0\!du\,X^uT_{uu}+\int_0^\infty\!dv\,X^vT_{vv}]$ (eq.20), $\langle\Delta K^2\rangle=\langle K\rangle=A/4G$ (eq.42), Gaussian/Wick. `[ESTABLISHED.]`
- **(P-iii) Spin-2 TT projector is dimensionless and bounded.** $\Pi_{ij,kl}=\tfrac12(P_{ik}P_{jl}+P_{il}P_{jk})-\tfrac1{d-1}P_{ij}P_{kl}$; the spin-2 sector is a finite differential operator on the scalar propagator (graviton two-point literature). Does not shift the coincidence dimension. `[ESTABLISHED structure.]`
- **(P-iv) Graviton has $D(D-3)/2$ d.o.f., ZERO in $D=3$.** Standard. `[ESTABLISHED.]`

## 3. Step 1 — two objects the "cubic charge" can mean

At $O(\kappa^3)$ the constraint contains: **(A)** graviton self-stress $\frac1{8\pi G}\int X^u\sigma_{ij}\sigma^{ij}$ — quadratic in $h$, the pure-graviton analog of the quadratic matter charge, variance $\sim A/\delta^{d-1}$, absorbed by KLS-II exactly as matter is; **NOT** the obstruction. **(B)** the genuine cubic cross-term $\int X^u\,h_{ij}T^{ij}$ — one graviton dressing the stress, cubic in fields; this is the iter-8 object. The escape must work on (B). `[INFERENCE, high.]`

## 4. Step 2 — the boost weight carries no transverse indices

$K=\int X^u T_{uu}$ (P-ii): $X^u(y)$ is a **scalar** weight, contracting no $i,j$. In (B), $h_{ij}$'s transverse indices are contracted internally with $\partial^i\varphi\partial^j\varphi$ (or $\sigma^{ij}$), decoupled from $X^u$. The hoped-for "boost-weighted transverse contraction" does not exist — the angular sum is an internal contraction, colorblind to the boost weight. The escape's premise is kinematically empty. `[INFERENCE, high.]`

## 5. Step 3 — the polarization sum does not lower the power (twice-derived)

$$\langle(\Delta C^{(3)}_{R,\delta})^2\rangle_c\sim\int\!\!\int X^u(y)X^u(y')\big\langle[h_{ij}\partial^i\varphi\partial^j\varphi](x)\,[h_{kl}\partial^k\varphi\partial^l\varphi](x')\big\rangle_c,$$
Wick-contracting one graviton ($\Pi_{ij,kl}G_h$) and two matter propagators.

**Re-derivation 1 (dimensional).** $\Pi_{ij,kl}$ carries no length scale; the coincidence power is fixed at $2\Delta_3\Rightarrow\delta^{-2(d-1)}$, identical to the scalar estimate.

**Re-derivation 2 (explicit angular).** With $\partial^iG_\varphi\sim\hat n^i/|x|^{\dots}$, the tensor contraction reduces to $\Pi_{ij,kl}\hat n^i\hat n^j\hat n^k\hat n^l=\frac{d-2}{d-1}$ — a **strictly positive** $O(1)$ number for $d\ge3$. The TT subtraction removes only the $\frac1{d-1}$ trace fraction. The leading divergence is **softened by $\frac{d-2}{d-1}>0$, never cancelled.** `[INFERENCE, high — both derivations agree; positivity is the red-team-surviving statement.]`

A projector can null a coefficient only on a measure-zero index configuration; the generic angular average here is strictly positive. The $\delta^{-2(d-1)}$ leading power survives.

## 6. Step 4 — d=2 explicitly: degenerate, not a cancellation

In $D=3$ ($d=2$) the graviton has $D(D-3)/2=0$ TT polarizations (P-iv). So in dS$_2$/Rindler$_2$ the graviton-dressed $C^{(3)}$ vanishes identically — a **degeneracy** (no 3D graviton), not a tensor cancellation of a nonzero divergence. It carries no information about $d\ge3$. The honest minimal nontrivial case is $d=3$ ($D=4$, 2 TT pols, $SO(2)$ helicity), coefficient $\frac{d-2}{d-1}=\tfrac12>0$: divergence robust. The mission's requested d=2 case is, by the graviton-counting, vacuous for the escape. `[ESTABLISHED counting; INFERENCE on vacuity, high.]`

## 7. Step 5 — consistency anchor

The same machinery on the quadratic charge ($\Delta_2=d+1$, $K$ linear in $T$) gives $A/\delta^{d-1}$ = the area law $\langle\Delta K^2\rangle=A/4G$ (P-ii) — method calibrated. Applied to the cubic charge it gives $A/\delta^{2(d-1)}$ with positive coefficient. `[ESTABLISHED anchor.]`

## 8. Verdict and registry deltas

`didItMove = R2-escape-closed-failure-side` (medium-high). Proposed updates:
- **[OP-44 / obligation P1c = R2]** Upgrade from "[INFERENCE, medium] with the constrained-graviton escape open" to **theorem-shaped failure-side**: the constrained TT tensor structure does NOT cancel the $\delta^{-2(d-1)}$ cubic divergence (boost weight index-free; spin-2 projector dimensionless with positive angular coefficient $\frac{d-2}{d-1}$; d=2 degenerate). The escape is closed; the $\delta\gtrsim\ell_P$ collar floor stands for $d\ge3$. Remaining hedge: free-field/independent-cell UV scaling (inherited, not tensor-structure).
- **[OP-48(c) cross-link]** $\ell_P$ collar floor reconfirmed; $\ell_P\parallel\ell_s$ dual-floor cross-link stands. `[SPECULATIVE rider unchanged.]`
- **[OP-46 / HYP-CKV-VACUITY-R5 cross-link]** Indirect reinforcement: localization/splitting fails at the first place the perturbative graviton could have supplied it — consistent with "localization lives only in the net index set, which is the geometry." Does NOT move the principal hedge's grade; cross-link only.
- **[Headline]** Unchanged and reinforced: a failure-side foothold hardened at $O(\kappa^3)$; no localization derived, no experimental channel. Encodes-not-generates / NOT-YET-PHYSICS untouched. Carrier-convergence count UNCHANGED at FIVE (this is an OP-44 obstruction result, not a carrier route).

## Open subquestions (new / carried)

1. `[OPEN — the one remaining hedge]` Beyond free-field scaling: does an interacting/strong-coupling near-horizon UV completion change the $\delta^{-2(d-1)}$ power? The independent-cell assumption (shared with iter-7) is the last soft spot; the tensor structure is now controlled.
2. `[OPEN — carried]` Does a *cubic* KLS-II-style edge sector exist (boost-supertranslation charge cubic in gravitons)? KLS-II is verbatim second-order; this note shows the cubic charge it would need to absorb is genuinely larger and tensor-irreducible.
3. `[OPEN — carried from iter 7/8]` Does Kirklin's all-orders GSL (arXiv:2412.01903) secretly contain such cubic edge modes?

## See also

- [2026-06-10-iter8-op44-R1-R2.md](2026-06-10-iter8-op44-R1-R2.md) — predecessor; named the constrained-graviton tensor structure as R2's sole surviving escape (this note closes it).
- [2026-06-10-iter7-op44-orderG2-descent.md](2026-06-10-iter7-op44-orderG2-descent.md) — the $\Delta_3=(3d+1)/2$ shell estimate and the $\ell_P$ collar floor.
- [../OPEN_PROBLEMS.md](../OPEN_PROBLEMS.md) — OP-44 entry to update per §8.
- [../CONCLUSION.md](../CONCLUSION.md) — §5 residual lever #1.
- [../HYPOTHESES.md](../HYPOTHESES.md) — HYP-ENCODING-SCREEN (reinforced); HYP-CKV-VACUITY-R5 / OP-46 (indirect cross-link).
- [../ASSUMPTIONS_LEDGER.md](../ASSUMPTIONS_LEDGER.md) — A-23, A-CP-KILLING; the free-field UV scaling is the remaining flagged assumption.
- [../EPISTEMICS.md](../EPISTEMICS.md) — tag discipline.

## References

*Verification status per item, this session.*

- A. C. Wall, *Proving the Achronal Averaged Null Energy Condition from the Generalized Second Law*, arXiv:0910.5751; PRD **81** (2010) 024038. [**ar5iv read this session** — eq.(31) $-d\langle\theta^1\rangle/d\lambda=\langle\sigma_{ab}\sigma^{ab}\rangle^1+8\pi\langle T_{ab}\rangle^1k^ak^b$; shear-squared graviton null energy density quadratic in TT perturbation, "contributes to Raychaudhuri like the stress-energy of matter".]
- E. Verlinde, K. M. Zurek / J. de Boer et al., *Modular Fluctuations from Shockwave Geometries*, arXiv:2208.01059; PRD **106** (2022) 106019. [**ar5iv read this session** — $K=\int X^uT_{uu}+\int X^vT_{vv}$ eq.(20); $\langle\Delta K^2\rangle=A/4G$ eq.(42); $K$ linear in $T$; Gaussian/Wick truncation.]
- (Gravitational algebras and the generalized second law), arXiv:2405.00847. [search/abstract this session — graviton null energy density = shear-squared when quantizing around the Killing horizon; corroborates P-i; full PDF not parseable this session, used as corroboration only.]
- M. S. Klinger, J. Kudler-Flam, G. Satishchandran, *Generalized Entropy is von Neumann Entropy II*, arXiv:2601.07910. [carried from certified iter-8 read — KLS-II edge sector quadratic-order only; structurally cannot absorb the cubic charge.]
- J. De Vuyst, S. Eccles, P. A. Höhn, J. Kirklin, *Linearization (in)stabilities and crossed products*, arXiv:2411.19931; JHEP **2025**, 211. [carried — the constraint expansion and Taub charge baseline.]
- Graviton spin-2 projector / two-point-function structure and $D(D-3)/2$ d.o.f. counting [standard QFT, search-confirmed this session].

> **Binding note.** Where the referee verdict below conflicts with the body, the **referee correction governs**; the body is the pre-referee submission, retained for the audit trail. In particular the carrier-convergence count stays at FIVE (this is an OP-44 obstruction result, not a carrier route).

> **Binding note.** Where the referee verdict below conflicts with the body, the **referee correction governs** (notably: A4 was overturned RESOLVED-NEGATIVE→SHARPENED-OPEN — the TT projector annihilates the leading divergence, de-hardening the R2 foothold; A2 "unconditional HIGH" was struck — the hedge stays MEDIUM-HIGH→HIGH conditional; the carrier-convergence count stays FIVE). The body is the pre-referee submission, retained for audit.

## Referee verdict — A4-op44-R2-graviton-escape (iter 9, 2026-06-10)

**Stance REFUTE, SUSTAINED. RESOLVED-NEGATIVE overturned to SHARPENED-OPEN.** Headline unchanged (PARTIAL / encodes-not-generates / not-yet-physics). Carrier count stays FIVE. No headline flip — that posture was correct.

### Fatal error (Step 3 / F2)
The "decisive negative result," billed "the red-team-surviving statement," is
$$\Pi_{ij,kl}\hat n^i\hat n^j\hat n^k\hat n^l=\big(1-\tfrac1{d-1}\big)(\hat n\!\cdot\!\hat n)^2-\dots=\tfrac{d-2}{d-1}>0.$$
Wrong. $P_{ij}=\delta_{ij}-\hat n_i\hat n_j$ annihilates its own axis: $P_{ij}\hat n^j=\hat n_i-\hat n_i(\hat n\!\cdot\!\hat n)=0$. So $\Pi_{ij,kl}\hat n^i\hat n^j\hat n^k\hat n^l=0$ **in every dimension** (verified symbolic + numeric, transverse dims 2/3/4 → all 0). The nonzero value comes only from silently dropping the $-\hat n_i\hat n_j$ term (setting $P_{ij}\hat n^i\hat n^j=1$). The corrected leading **all-radial** term is **annihilated** by the TT projector — the *opposite* of "softened by an $O(1)$ factor, never killed." Re-derivation 1 (dimensional) does not rescue it: a dimensionless projector can null a coefficient via an angular identity, which is exactly what happens. The "two independent re-derivations agree" claim is false.

### What is actually true (and open)
Past the all-radial term, the full Hessian $\langle\partial^i\varphi\partial^k\varphi\rangle\sim H_{ik}=s(s+2)\hat n_i\hat n_k-s\delta_{ik}$ (both pieces same radial power) gives $\Pi_{ij,kl}H_{ik}H_{jl}$: **nonzero for transverse dim $\ge3$, but zero for transverse dim $2$** — the central $D{=}4/d{=}3$ codim-2 cut, where $\tfrac1{m-1}=1$ degenerates the projector. So the leading coefficient is **dimension-dependent and uncomputed**. The "$d=3\to\tfrac12>0$" claim is doubly wrong (bad formula value *and* the real contraction in transverse-2 is zero). The escape is **not closed on the failure side**; corrected at leading order the TT projection is **not inert** and cancels the naive leading term — if anything this *strengthens* the prospect of softening below $\delta^{-2(d-1)}$. R2 stays OPEN; the $\ell_P$ collar floor reverts to `[INFERENCE, medium]`.

### Survives
- **F1 (Step 2)** correct: $K=\int d^{d-2}y[\int X^uT_{uu}+\int X^vT_{vv}]$ (2208.01059 eq.20, verified live; $X^u(y)$ scalar weight; $\langle\Delta K^2\rangle=A/4G$ eq.42). Minor: $X^u$ depends on $y$; "no transverse indices" only in the tensor-index sense. Scope-limited — does not alone close the escape.
- **F3 (Step 4)** correct: $D(D-3)/2=0$ at $D=3$ (verified live); $d=2$ a degeneracy, not a cancellation. Strike its $d=3\!\to\!\tfrac12$ clause.

### Citation audit (live)
2208.01059 (K linear in T, $X^u(y)$ scalar, $A/4G$, Gaussian/Wick) ✓; graviton $D(D-3)/2$, zero at $D=3$ ✓; Wall 0910.5751 confirmed — **the shear/Raychaudhuri relation is eq. (33), not (31)** (minor; supports only object (A), excluded from the obstruction); KLS-II 2601.07910 carried from certified iter-8. No fabrications.

### No-go / closure red-team — clean
No standard no-go implicated. dS-cardinality, HYP-CKV-VACUITY-R5 + smuggle list, iter-7 trichotomy + iter-8 net no-go, OP-48c, OP-49 — all untouched. Carrier-convergence count correctly kept at FIVE; headline correctly not flipped; HYP-ENCODING-SCREEN untouched. With the outcome corrected, OP-44 must read: R2's constrained-graviton escape **remains open**; the leading-order TT computation shows the projector is not inert (cancels the naive leading term); failure-side closure **withdrawn**; $\ell_P$ floor `[INFERENCE, medium]`.

### Disposition
F1 keep (minor); F2 reject (fatal); F3 keep (none); F4 reject (fatal). **Outcome SHARPENED-OPEN.** Sharpest next step: compute the full-Hessian $\Pi_{ij,kl}H_{ik}H_{jl}$ residual power vs the quadratic $\delta^{-(d-1)}$, separately for transverse dim $2$ (vanishes) and $\ge3$, with the boost-adapted TT propagator.
