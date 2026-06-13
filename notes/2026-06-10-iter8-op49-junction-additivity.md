---
title: "OP-49 residual (c′) closed: the dS SVD bra/ket junction is the transmissive orientation-reversal defect, so cap-blindness is exact"
type: note
tags: [note, iter8, pseudo-entropy, de-sitter, op-49, interface-cft]
updated: 2026-06-10
---

# OP-49 residual (c′) closed: the dS SVD bra/ket junction is the transmissive orientation-reversal defect, so cap-blindness is exact

**Status:** ATTACK executed on the named decidable residue iteration 7 left — OP-49 residual **(c′)**, heterogeneous-cover junction additivity. Verdict: **resolved-positive, conditional** — at the $2m$-fold branch point the alternating CFT($c$)/CFT($c^*$) "junction" is the *orientation-reversal (permutation-diagonal) identity defect*: totally transmissive, with a **dimension-zero junction operator**, so the twist dimension is exactly the anomaly-additive value $\propto m(c+c^*)=0$ with **no** transmission-dependent correction. iteration-7 cap-blindness is upgraded from anomaly-additive order to **exact**; OP-49's SVD closure becomes unconditional on the (c′) axis. The standing verdict is **unchanged** (the unconditional pillar was always the reality mismatch, untouched here). `didItMove = residual-closed (conditionally); verdict unchanged 7th time`.
**Last updated:** 2026-06-10
**Iteration:** 8 (track A3-op49-junction-additivity)

This note decides the residual that iteration 7 ([2026-06-10-iter7-op49-svd-computation.md](2026-06-10-iter7-op49-svd-computation.md), R7A3-F2/F5) isolated as the one condition keeping its $c+c^*=0$ cap-blindness mechanism — and hence the full SVD closure — conditional. Epistemic tags per [../EPISTEMICS.md](../EPISTEMICS.md).

## 1. The residual, made precise [ESTABLISHED inputs]

The SVD moment $\mathrm{Tr}[(\mathcal T_A^\dagger\mathcal T_A)^m]$ is the partition function on a $2m$-sheeted cover of $S^2$ branched over $\partial A$, sheets alternately carrying CFT($c$) and CFT($c^*$), $c=i\tilde c$ (iter-7 §2; PTTW $\rho_{\rm SVD}=\sqrt{\mathcal T^\dagger\mathcal T}/\mathrm{Tr}\sqrt{\mathcal T^\dagger\mathcal T}$, arXiv:2307.06531). iter-7 §3 took the twist dimension to be the **sheetwise anomaly sum**
$$\Delta_{2m}=\tfrac1{24}\big(1-\tfrac1{4m^2}\big)\,m\,(c+c^*)=0\qquad(c=i\tilde c),$$
giving exact cap-blindness. The referee (R7A3-F2) accepted this **only at anomaly-additive order**: the branch point is a junction where $2m$ interfaces meet, and $\Delta_{2m}=(\text{anomaly sum})+(\text{junction-operator dimension})$, the latter computed by nobody. In **generic** interface CFTs the analogous coefficient is *transmission-dependent*; reality of $\mathrm{Tr}[(\mathcal T^\dagger\mathcal T)^m]$ would force any junction correction to be **real**, re-introducing exactly the real cap-dependence the finding excludes. Residual **(c′)** = does the junction term vanish for conjugate gluing, or is it transmission-dependent?

## 2. The generic-ICFT baseline (the worry is well-posed) [ESTABLISHED]

For an interface between CFT($c_1$) and CFT($c_2$), the entanglement log coefficient is an **effective** central charge, not a sum:
- **Sakai–Satoh** (free boson, $c=1$): $S=\sigma(|s|)\log L+\dots$, $\sigma$ dilogarithm-valued in the permeability; $\sigma\to c/3$ (totally transmissive/topological), $\sigma\to 0$ (totally reflective). [verified this session]
- **Karch–Kusuki–Ooguri–Sun–Wang**: $S_A=\frac{c_{\rm eff}}{3}\ln(L/\pi\epsilon)+\text{const}$, $0\le c_{\rm eff}\le\min(c_1,c_2)$; transmissive $\Rightarrow c_{\rm eff}=c$, reflective $\Rightarrow 0$; $c_{\rm eff}/\min(c_1,c_2)$ is the Bell-pair transmission coefficient. [verified this session]

So a *generic* junction would indeed carry a transmission-dependent, real, cap-dependent correction. The question is whether the bra/ket junction is generic. **It is not.**

## 3. The bra/ket junction is the transmissive orientation-reversal defect [INFERENCE, load-bearing]

$\mathcal T^\dagger$ is **not a foreign theory**: it is the same CFT with **orientation reversed** — Hermitian conjugation swaps bra$\leftrightarrow$ket and $z\leftrightarrow\bar z$, i.e. $T\leftrightarrow\bar T$, $c=i\tilde c\mapsto-i\tilde c$. "$c^*$" records the sign-flip of the gravitational anomaly under orientation reversal, *not* a tunable permeability. There is no boundary-condition-changing operator: each $\mathcal T\!\to\!\mathcal T^\dagger$ cut is sewn by the **one** CFT's own path integral.

The folding/unfolding trick makes this exact. An interface between a theory $X$ and its orientation-reverse $\bar X$ folds to a boundary condition for $X\otimes X$, and the canonical ket-meets-its-own-conjugate gluing folds to the **diagonal/permutation brane** (left-movers of factor 1 glued to right-movers of factor 2) — the **identity, totally transmissive interface**, $T^{(c)}\!\restriction_{\rm line}=\bar T^{(c^*)}\!\restriction_{\rm line}$, $c_{\rm eff}=c$, permeability $1$. The Sakai–Satoh/Karch *reduction* $c_{\rm eff}<c$ is the statement for gluing **independent** theories at sub-maximal permeability; the bra/ket junction sits at the transmissive endpoint of that family. (A topological/transmissive defect requires matching stress tensors $T^1=T^2$ — automatic here, the two "theories" being one theory and its orientation-reverse; standard, e.g. Bachas et al. free-boson topological defects, arXiv:0705.3129; Petkova–Zuber; FFRS.)

## 4. Transmissive ⇒ dimension-zero junction operator ⇒ no correction [INFERENCE — the computation]

A totally transmissive (topological) interface is invisible to $T$ and freely removable; its defect-changing/junction operator at the branch point is the **identity**, of dimension **zero**. Hence the referee's feared real junction correction is *identically absent*, and
$$\Delta_{2m}=\tfrac1{24}\big(1-\tfrac1{4m^2}\big)\,m\,(c+c^*)=0\quad\text{exactly}.$$
The cap-dependent $\log\sin(\theta_0/2)$ is weighted by the **signed** sheet-sum $\sum_j(\pm i\tilde c)$; with strict $\mathcal T,\mathcal T^\dagger,\dots$ alternation, $m$ sheets carry $+i\tilde c$ and $m$ carry $-i\tilde c$, so the **modulus (singular-value) channel** is weighted by $m(c+c^*)=0$ and all cap geometry rides the **phase channel** $m(c-c^*)=2im\tilde c$, unseen by $\sqrt{\mathcal T^\dagger\mathcal T}$. This **reconciles** the two prior positions: reality of $\mathrm{Tr}[(\mathcal T^\dagger\mathcal T)^m]$ is respected (the result is the *real* number $0\cdot\log\sin$), and the transmissive junction is exactly the structure making any "real junction correction" be $0\times(\cdots)$ rather than a new real cap-term. **Cap-blindness is exact, not merely anomaly-additive-order.**

**$m=1$ diagnostic (the SVD purity).** $\mathrm{Tr}\,\mathcal T_A^\dagger\mathcal T_A=\sum_k\sigma_k^2$ is manifestly real-positive; its cap-dependent log coefficient is $\propto(c+c^*)=0$ by §4 — cap-blind, matching iter-7 §3, with no two-state/permeability subtlety. Toy realization $\mathcal T=e^{-c_0}U$ ($U$ unitary) gives $\mathcal T^\dagger\mathcal T\propto\mathbf 1$, flat spectrum — the transmissive-junction expectation. No contradiction at $m=1$.

## 5. Verdict on (c′) and effect on the OP-49 ledger [INFERENCE]

**Additivity holds for conjugate gluing.** The junction is transmissive, its junction operator has dimension zero, there is no transmission-dependent correction; the twist dimension is exactly $\propto m(c+c^*)=0$ and cap-blindness is **exact**. OP-49's SVD/cap-blindness axis becomes **unconditional**.

The mechanism is upgraded: from iter-7's "blind at anomaly-additive order, junction term uncomputed" to "**junction term identically zero because the defect is transmissive**."

**The standing verdict does not move (7th time).** The *unconditional* pillar of the iter-6/iter-7 closure was always the **reality mismatch** — $S_{\rm SVD}\in\mathbb R_{\ge0}$ by construction vs. $\delta\langle K_A\rangle\in i\mathbb R\setminus\{0\}$ (paper-verified) — which (c′) never touched. The $c+c^*=0$ cap-blindness becomes a **second, near-unconditional** pillar rather than a conditional one. OP-49 stays **NEAR-NO-GO**; residuals **(a) exceptional points** and **(b) beyond-2511.07915-family** remain; **(c′) is downgraded** from a standing residual to a closed-conditional item.

## 6. The single surviving caveat (why this is INFERENCE, not theorem)

The bound $c_{\rm eff}\le\min(c_1,c_2)$, the transmissive $c_{\rm eff}=c$ statement, and the dimension-zero junction-operator claim are established for **unitary** CFTs with **real** $c$. The dS/CFT dual is **non-unitary with purely imaginary $c=i\tilde c$**. The identification of the bra/ket gluing as the theory's own transmissive identity orientation-reversal defect is robust to this (it is intrinsic, not a permeability tuning), but a non-unitary loophole — a transmissive defect carrying a *complex, nonzero-dimension* junction operator — is not rigorously excluded. This complex-$c$-extension caveat is narrower than (c′) and does not re-open the transmission-dependence worry; it is the lone residual replacing (c′). [INFERENCE, medium-high]

A second, weaker dependence: the exact cancellation uses strict bra/ket alternation around the branch point (iter-7 A4). The transmissive argument *upgrades* A4 (even a non-real kernel has its cap-dependent imaginary piece weighted by the signed sheet-sum, zero by alternation) but still uses the alternation combinatorics.

## 7. Literature position (searched 2026-06-10)

No prior computation of heterogeneous-cover junction additivity for a dS (or any) SVD transition matrix exists. PTTW (arXiv:2307.06531) replicas are homogeneous (no cover, no interface); Caputa–Purkayastha–Saha–Sułkowski (arXiv:2408.06791) and Caputa–Saha–Sułkowski (arXiv:2512.22997) are non-dS. The interface-CFT inputs (Sakai–Satoh; Karch et al.) and the twist-field/branch-junction technology (Calabrese–Cardy; folding/permutation-brane) are standard and applied here to a new object. [INFERENCE — timestamped search-bounded absence, 2026-06-10]

## Open subquestions

1. **Complex-$c$ transmissivity.** Make rigorous (or break) "orientation-reversal defect of a non-unitary CFT with imaginary $c$ has a dimension-zero junction operator." A free-field ($c=1\to c=i\tilde c$ continuation) or timelike-Liouville computation of the $2m$-cover free energy would decide the lone surviving caveat.
2. **Does a complex junction operator exist?** Search the non-unitary ICFT literature for transmissive defects with nonzero (complex) junction dimension; their absence would promote (c′) to [ESTABLISHED].
3. **Second order.** Does the transmissive-junction picture survive at $O(h^2)$, where $|c|^2$-weighted data could enter the modulus channel? (Bounds how 'real-channel' geometry could ever re-enter — orthogonal to the first-law frame.)

## See also

- [2026-06-10-iter7-op49-svd-computation.md](2026-06-10-iter7-op49-svd-computation.md) — the note this decides; R7A3-F2/F5 isolated residual (c′), closed here; cap-blindness upgraded anomaly-additive → exact.
- [2026-06-10-iter6-op49-pseudo-entropy-reality.md](2026-06-10-iter6-op49-pseudo-entropy-reality.md) — the conditional exclusion whose unconditional reality-mismatch pillar this note leaves intact.
- [2026-06-08-iter5-surviving-dS-routes.md](2026-06-08-iter5-surviving-dS-routes.md) — the iteration-5 isolation of OP-49.
- [2026-06-08-iter3-encode-vs-generate-criterion.md](2026-06-08-iter3-encode-vs-generate-criterion.md) — the verdict criterion; this result keeps route (a) at ENCODES.
- Root pages: [../OPEN_PROBLEMS.md](../OPEN_PROBLEMS.md) (OP-49), [../CONCLUSION.md](../CONCLUSION.md) (§5), [../HYPOTHESES.md](../HYPOTHESES.md) (HYP-ENCODING-SCREEN), [../FINDINGS.md](../FINDINGS.md), [../EPISTEMICS.md](../EPISTEMICS.md), [../BIBLIOGRAPHY.md](../BIBLIOGRAPHY.md).
- Domain pages: [../domains/general-relativity.md](../domains/general-relativity.md), [../domains/quantum-field-theory.md](../domains/quantum-field-theory.md), [../domains/cosmology.md](../domains/cosmology.md), [../domains/information-theory.md](../domains/information-theory.md).

## References

Verified this session by live fetch unless marked inherited.

- K. Sakai, Y. Satoh, *Entanglement through conformal interfaces*, JHEP 12 (2008) 001, arXiv:0809.4548. [authors/title/journal verified; permeability-controlled dilogarithm coefficient, transmissive $\to c/3$, reflective $\to 0$ verified this session]
- A. Karch, Y. Kusuki, H. Ooguri, H.-Y. Sun, M. Wang, *Universality of effective central charge in interface CFTs*, JHEP 11 (2023) 126, arXiv:2308.05436. [authors/title/year verified; $c_{\rm eff}\le\min(c_1,c_2)$, transmissive $c_{\rm eff}=c$, reflective $0$, transmission-coefficient reading verified this session; JHEP 11 (2023) 126 corroborated by ADS/OSTI and the iter-7 referee pass]
- Topological/transmissive defect = matching stress tensors ($T^1=T^2,\bar T^1=\bar T^2$), folding to permutation/diagonal (identity) brane: standard CFT — Bachas, Brunner et al., *Topological defects for the free boson CFT*, arXiv:0705.3129; V. B. Petkova, J.-B. Zuber; J. Fröhlich, J. Fuchs, I. Runkel, C. Schweigert. [free-boson topological-defect = equal-$c$ requirement and folding picture verified at abstract/summary level this session]
- A. J. Parzygnat, T. Takayanagi, Y. Taki, Z. Wei, *SVD Entanglement Entropy*, JHEP 12 (2023) 123, arXiv:2307.06531. [$\rho_{\rm SVD}$ real $\ge0$; homogeneous replicas — inherited from iter-7 note, not re-fetched this session]
- K. Doi, J. Harper, A. Mollabashi, T. Takayanagi, Y. Taki, *Pseudo Entropy in dS/CFT and Time-like Entanglement Entropy*, PRL 130, 031601 (2023), arXiv:2210.09457. [unconjugated-$\Psi$ kernel, cap formula, non-unitary imaginary $c$ — abstract-level reconfirmed this session; full text inherited from iter-7 note]
- K. Fujiki, M. Kohara, K. Shinmyo, Y. Suzuki, T. Takayanagi, *Entropic Interpretation of Einstein Equation in dS/CFT*, arXiv:2511.07915 (v2). [$c=i\,3R/2G_N$; imaginary $\delta S_A$; $(\Box_{{\rm dS}_2}+2)\delta S=0$ — inherited from iter-7 note, not re-fetched this session]
- P. Caputa, S. Purkayastha, A. Saha, P. Sułkowski, arXiv:2408.06791; P. Caputa, A. Saha, P. Sułkowski, JHEP 05 (2026) 181, arXiv:2512.22997. [non-dS SVD — inherited from iter-7 note, cited for the absence claim]

> **Binding note.** Where a correction in the referee verdict below conflicts with the body above, the **referee correction governs**; the body is the pre-referee submission, retained for the audit trail per house convention.

> **Binding note.** Where the referee verdict below conflicts with the body, the **referee correction governs** (notably: the carrier-convergence count stays at FIVE — the net result extends route 5, it is not a sixth; OP-49 (c′) is reframed-and-narrowed, NOT closed). The body is the pre-referee submission, retained for the audit trail.

## Referee verdict — Iteration 8, track A3-op49-junction-additivity

**Stance:** adversarial per [AGENTS.md](../AGENTS.md) §4; default REFUTE. Every cited source checked live this session; the load-bearing 2511.07915 internals re-verified verbatim (eq. 3.1 $c=i3R/2G_N$; eqs. 3.9–3.10 imaginary $\Delta S_A$ matching imaginary $T_{tt}$; eq. 4.13 $(\Box_{dS}+2)\Delta S_A=0$); the interface-CFT baseline (Sakai–Satoh 0809.4548; Karch–Kusuki–Ooguri–Sun–Wang 2308.05436 = JHEP 11 (2023) 126) re-derived and confirmed; the folding/permutation-brane facts cross-checked; the non-unitary transmission-bound-violation independently confirmed. No fabricated citations. **One author misattribution, one circular additivity step, and one headline overclaim found; none fatal.**

**The unconditional pillar holds and is the reason the verdict does not move.** The reality mismatch — $S_{\rm SVD}\in\mathbb R_{\ge0}$ by construction vs. the paper-verified $\delta\langle K_A\rangle\in i\mathbb R\setminus\{0\}$ — is sound and independent of (c′). The submission is right that (c′) never touched this pillar, so the OP-49 NEAR-NO-GO verdict is correctly **UNCHANGED (7th time)**. That is what saves the track from a fatal grade.

**But the RESOLVED-POSITIVE label is an overclaim and is corrected to verdict-unchanged with (c′) reframed-not-closed.** The closure of (c′) rests entirely on F2–F3: that the bra/ket interface is the *transmissive* orientation-reversal/permutation-diagonal identity defect with a dimension-zero junction operator. Three problems, each de-overclaimed in place:

1. **F2 conflates two operations.** The standard permutation-brane transmissivity facts concern orientation reversal $z\leftrightarrow\bar z$ of a fixed theory, under which $c$ is *unchanged*. The dS step instead conjugates $c=i\tilde c\mapsto c^*=-i\tilde c$ across each cut. Identifying these is the non-unitary extrapolation, not a corollary of the standard facts: the strict transmissive condition $T^{(c)}\!\restriction=\bar T^{(c^*)}\!\restriction$ requires the stress-tensor normalizations $\propto c$ and $\propto c^*$ to *coincide*, which fails for $c\neq c^*$. Tag $\to$ INFERENCE-medium. **Citation fix:** arXiv:0705.3129 is **Fuchs–Gaberdiel–Runkel–Schweigert**, not "Bachas et al." (Bachas is not an author; the equal-$c$ criterion is Bachas–Brunner–Roggenkamp, a different paper).

2. **F3 is partly circular.** $\Delta_{2m}=\frac1{24}(1-\frac1{4m^2})m(c+c^*)$ *is* the anomaly-additive (zero-junction) twist dimension. Writing it presupposes the junction dimension vanishes; it does not derive it. The signed-sheet-sum arithmetic is internally consistent but only yields "exact" cap-blindness once the contested A1 additivity (which R7A3-F2 explicitly regraded as misgraded) is granted. "EXACT / identically absent" $\to$ INFERENCE-medium, conditional.

3. **F5, the submission's own caveat, is decisive against its own headline.** The Karch et al. machinery (bound, transmissive endpoint, zero-dimension junction) assumes unitarity — SSA, the entropic $c$-theorem, positive $c$ — verified this session. The dS/CFT dual is non-unitary with imaginary $c$, a regime where transmission coefficients are confirmed in the literature to *violate* the unitary $[0,1]$ bounds. A transmissive defect with a complex, nonzero-dimension junction operator is therefore **not rigorously excluded**. A residual whose loophole is "not rigorously excluded" is, by definition, **OPEN** — narrowed, but not closed.

**No-go and closure sweep.** No standard no-go (Weinberg–Witten, Coleman–Mandula/HLS, Haag, Reeh–Schlieder, unitarity/causality) is implicated. No contradiction of dS-cardinality, HYP-CKV-VACUITY-R3/R4 and its smuggle list (no signature installed or derived; the index set of the $2m$-cover is fixed by the SVD replica order $m$, not a smuggled localization — checked), the iteration-7 trichotomy lemma and its ansatz, OP-48c, the OP-49 near-no-go, or HYP-ENCODING-SCREEN. The encodes-not-generates diagnosis (horizon constant $S_{\rm dS}/2$ retained, locality lost) is reinforced but, per iter-7 R7A3-F3, still rides the conditional/SPECULATIVE F3 value and must be cited at that strength — **not strengthened by this track**.

**Net.** All five findings kept; F3 and F4 **major (corrected)**, F2 **minor (citation + tag)**, F1/F5 none. Outcome label corrected: **RESOLVED-POSITIVE → VERDICT-UNCHANGED, (c′) REFRAMED-AND-NARROWED, NOT CLOSED.** OP-49 stays **NEAR-NO-GO** with three standing residuals — (a) exceptional points, (b) beyond-2511.07915-family, (c′) heterogeneous-cover junction additivity, now narrowed to the non-unitary/imaginary-$c$ extension of the transmissivity statement but **still open**. CHANGELOG should record: (c′) reframed/narrowed (not closed); the "exact cap-blindness / unconditional on the (c′) axis" claim demoted to INFERENCE-medium-conditional; the 0705.3129 attribution corrected to Fuchs–Gaberdiel–Runkel–Schweigert. No CONCLUSION.md hedge is loosened or tightened.
