---
title: "OP-49 SVD residual closed: the SVD first law fails on the dS$_3$ hemisphere because $c + c^* = 0$"
type: note
tags: [note, iter7, pseudo-entropy, de-sitter, op-49]
updated: 2026-06-10
---

# OP-49 SVD residual closed: the SVD first law fails on the dS$_3$ hemisphere because $c + c^* = 0$

**Status:** ATTACK executed on the stated decidable computation from iteration 6 (OP-49 residual, SVD protocol). Verdict: **resolved-negative, conditional** — the SVD-entropy first law on the dS$_3$ hemisphere is vacuous: the SVD spectrum is cap-size blind at universal order ($c+c^*=0$ cancellation), $\delta S_{\rm SVD}$ is $\theta_0$-independent (generically zero) for the entire arXiv:2511.07915 perturbation family, and no local Einstein constraint survives. OP-49 residual list shrinks from three to two. `didItMove = residual-closed (conditionally)`.
**Last updated:** 2026-06-10
**Iteration:** 7 (track A3-op49-svd-hemisphere)

This note performs the computation that [2026-06-10-iter6-op49-pseudo-entropy-reality.md](2026-06-10-iter6-op49-pseudo-entropy-reality.md) §6.2 isolated as the single decidable follow-up: compute $\delta S_{\rm SVD}$ for the dS$_3$ hemisphere transition matrix under the 2511.07915 perturbation family and check whether any local constraint on $\delta g$ survives. Iter-6 predicted **no**, via a holomorphy-breaking argument that its referee de-overclaimed to 'derivation route unavailable'. The computation confirms **no** — and locates a sharper mechanism. Epistemic tags per [../EPISTEMICS.md](../EPISTEMICS.md).

## 1. Setup [ESTABLISHED inputs, all re-verified this session]

Cap $A$ of angle $\theta_0$ on $S^2$ at $\mathcal I^+$ of dS$_3$; $\mathcal T_A = \mathrm{Tr}_{\bar A}[|\psi\rangle\langle\varphi|/\langle\varphi|\psi\rangle]$ with the hemisphere Hartle–Hawking pair of Doi et al. (arXiv:2210.09457), whose kernel is built from **unconjugated** wavefunctionals $\Psi = Z_{\rm CFT}$, so $\mathrm{Tr}\,\mathcal T_A^n$ lives entirely in the CFT with $c = i\tilde c$, $\tilde c = 3R/2G_N$ (arXiv:2511.07915 eq. 3.1). Background $S_A = -i(\tilde c/3)\log[\frac{2}{\epsilon}\sin\frac{\theta_0}{2}] + \pi\tilde c/6$. SVD entropy (Parzygnat–Takayanagi–Taki–Wei, arXiv:2307.06531): $\rho_{\rm SVD} = \sqrt{\mathcal T_A^\dagger\mathcal T_A}/\mathrm{Tr}\sqrt{\mathcal T_A^\dagger\mathcal T_A}$; intrinsically real and non-negative.

## 2. The SVD replica object [INFERENCE — own derivation]

Hermitian conjugation conjugates the kernel, hence the CFT data: $c \mapsto c^* = -i\tilde c$ (Maldacena dictionary; assumption A2). Therefore $\mathrm{Tr}[(\mathcal T_A^\dagger\mathcal T_A)^m]$ is the partition function on the $2m$-sheeted cover of $S^2$ branched over $\partial A$ with sheets **alternately carrying ${\rm CFT}(c)$ and ${\rm CFT}(c^*)$** — manifestly real-positive, as required.

## 3. Background: the SVD spectrum is cap-size blind [INFERENCE, tight]

Per-sheet uniformization (assumption A1, the Calabrese–Cardy argument applied sheetwise — valid because each sheet's anomaly is linear in its own $c_j$) gives the twist dimension
$$\Delta_{2m} = \tfrac{1}{24}\big(1-\tfrac{1}{4m^2}\big)\,m\,(c+c^*) = 0 \qquad (c = i\tilde c).$$
The universal $\log\sin(\theta_0/2)$ dependence cancels for **every** $m$: the singular-value spectrum of $\mathcal T_A$ carries no cap dependence. Invariantly: *singular values are the modulus channel, weighted by $c+c^* = 2\,\mathrm{Re}\,c = 0$; all cap-resolved geometry rides the phase channel, weighted by $c-c^* = 2i\tilde c$.* The surviving Lorentzian phase constants give (conventions of A3) $\log\mathrm{Tr}[(\hat{\mathcal T}^\dagger\hat{\mathcal T})^m] = \frac{\pi\tilde c}{6}(\frac{1}{4m}-m)$, whence $\mathrm{Tr}\sqrt{\mathcal T^\dagger\mathcal T} = 1$ (self-normalizing) and
$$S_{\rm SVD}({\rm cap}) = \frac{\pi\tilde c}{6} = \mathrm{Re}\,S_A^{\rm pseudo} = \tfrac12 S_{\rm dS},$$
region-independent — a falsifiable byproduct prediction [INFERENCE, convention-flagged]. Toy corroboration: $\mathcal T = e^{-c_0}U$ ($U$ unitary) gives $\mathcal T^\dagger\mathcal T \propto \mathbf 1$, maximally mixed $\rho_{\rm SVD}$.

## 4. First order: the Re-projection annihilates the carrier [INFERENCE — the computation]

Exact identity: $\delta\,\mathrm{Tr}(\mathcal T^\dagger\mathcal T)^m = 2m\,\mathrm{Re}\,\mathrm{Tr}[(\mathcal T^\dagger\mathcal T)^{m-1}\mathcal T^\dagger\delta\mathcal T]$ — the $\mathbb R$-linear, non-holomorphic structure iter-6 conjectured, now explicit. For the 2511.07915 family (real $h_{\theta\theta} \propto (1-\tanh t)e^{im\varphi}$), the $c$-sheets receive $\tfrac12\int h\,T$ and the $c^*$-sheets the conjugate:
$$\delta\log\mathrm{Tr}[(\mathcal T^\dagger\mathcal T)^m] = 2m\,\mathrm{Re}[c\,X_m] = -2m\,\tilde c\,\mathrm{Im}\,X_m .$$
The uniform-cover kernel is real (verified: the pseudo first law has $\Delta S_A \in i\mathbb R$ for real $h$); the alternating-cover kernel differs only by cover order and the conjugation already displayed (assumption A4), and its only imaginary parts — light-cone $i\pi$ phases — attach to $\theta_0$-independent terms by §3. Hence $\delta S_{\rm SVD}$ is $\theta_0$-independent, and zero under the §3 conventions. In the flat-spectrum limit the same follows from stationarity of entropy at the maximally mixed state.

## 5. The first law dies at every link [INFERENCE]

1. **Literal first law false:** $\delta S_{\rm SVD}$ (real, $\simeq 0$) $\neq \delta\langle K_A\rangle$ (purely imaginary, nonzero unless $\delta\langle T_{tt}\rangle \equiv 0$ — the probe vanishes).
2. **Wave equation:** $(\Box_{{\rm dS}_2}+2)\,{\rm const} = 2\,{\rm const}$ — a nonzero constant response is kinematically inadmissible; zero carries nothing.
3. **CHM inversion** of a $\theta_0$-independent function returns no pointwise constraint: no $\delta G_{\mu\nu}$ equation survives.
4. **Tautology remainder:** $\delta S_{\rm SVD} = \mathrm{Tr}[K_{\rm SVD}\delta\rho_{\rm SVD}]$ holds for any Hermitian family; $K_{\rm SVD}$ is not a local boost integral — no geometric content.

**Mechanism, upgraded:** not merely 'the holomorphic derivation route is unavailable' (iter-6 referee wording) but '*the SVD observable has zero coupling to the universal geometric channel*': SVD projects onto moduli, weighted by $c+c^* = 0$. The only intrinsically real two-state entropy retains exactly the horizon constant $S_{\rm dS}/2$ and nothing local — the ENCODES pattern again.

## 6. Assumptions and surviving residuals

A1 heterogeneous-sheet twist additivity [INFERENCE, tight]; A2 $\Psi^* \leftrightarrow {\rm CFT}(c^*)$ [INFERENCE]; A3 phase-bookkeeping conventions (value $\pi\tilde c/6$ convention-dependent; $\theta_0$-independence not); A4 alternating-cover kernel reality (even if violated, imaginary parts are $\theta_0$-independent by §3 — conclusion intact); A5 diagonalizable background, $c$ purely imaginary at the order computed. OP-49 residuals **(a) exceptional points** and **(b) beyond-family generalization** remain [OPEN] and are inherited, not closed. The SVD residual (c) is **closed-negative, conditional on A1–A5**.

## 7. Literature position (searched 2026-06-10)

No prior SVD computation in dS/CFT and no SVD first law exists: PTTW arXiv:2307.06531 (definition, $S^{(n,m)}$, local-operator-excited integrable CFTs; no dS); Caputa–Purkayastha–Saha–Sułkowski arXiv:2408.06791 (Chern–Simons link states; no dS); Caputa–Saha–Sułkowski arXiv:2512.22997 = JHEP 05 (2026) 181 (unit-invariant SVD; no dS, no first law). The iter-6 absence claim is re-confirmed and re-timestamped. The replica for *metric-perturbed* dS hemisphere SVD entropy performed here is new.

## Open subquestions

1. Check the byproduct prediction $S_{\rm SVD}({\rm cap}) = S_{\rm dS}/2$ by an independent method (e.g. free-field dS$_3$ lattice continuation, or the holographic SVD prescription of arXiv:2307.06531).
2. Does the $c+c^*$ blindness persist at $O(h^2)$ — i.e. is the second-order SVD response also geometry-starved, or does $|c|^2$-weighted data enter? (Second order is outside the first-law frame but bounds how 'real-channel' geometry could ever re-enter.)
3. Exceptional-point residual (a): on the EP locus the SVD spectrum is still well-defined (singular values exist for non-diagonalizable $\mathcal T$) — does the $c+c^* = 0$ cancellation extend there trivially? Plausibly yes [SPECULATIVE], which would close (a) for the SVD observable specifically.

## See also

- [2026-06-10-iter6-op49-pseudo-entropy-reality.md](2026-06-10-iter6-op49-pseudo-entropy-reality.md) — the conjecture this note decides; its §6.2 residual is closed here.
- [2026-06-08-iter5-surviving-dS-routes.md](2026-06-08-iter5-surviving-dS-routes.md) — the iteration-5 isolation of OP-49.
- [2026-06-08-iter3-encode-vs-generate-criterion.md](2026-06-08-iter3-encode-vs-generate-criterion.md) — the verdict criterion; this result keeps route (a) at ENCODES.
- Root pages: [../OPEN_PROBLEMS.md](../OPEN_PROBLEMS.md) (OP-49), [../CONCLUSION.md](../CONCLUSION.md) (§5), [../HYPOTHESES.md](../HYPOTHESES.md) (HYP-ENCODING-SCREEN), [../FINDINGS.md](../FINDINGS.md), [../EPISTEMICS.md](../EPISTEMICS.md), [../BIBLIOGRAPHY.md](../BIBLIOGRAPHY.md).
- Domain pages: [../domains/general-relativity.md](../domains/general-relativity.md), [../domains/quantum-field-theory.md](../domains/quantum-field-theory.md), [../domains/cosmology.md](../domains/cosmology.md), [../domains/information-theory.md](../domains/information-theory.md).

## References

Verified this session by live fetch unless noted.

- K. Fujiki, M. Kohara, K. Shinmyo, Y. Suzuki, T. Takayanagi, *Entropic Interpretation of Einstein Equation in dS/CFT*, arXiv:2511.07915 (v2). [v2 HTML re-fetched: $c = i3R/2G_N$; $(1-\tanh t)e^{im\varphi}$ family; $(\Box+2)\Delta S = 0$; imaginary $\Delta S_A$/$T_{tt}$ statements confirmed]
- A. J. Parzygnat, T. Takayanagi, Y. Taki, Z. Wei, *SVD Entanglement Entropy*, JHEP 12 (2023) 123, arXiv:2307.06531. [abstract + ar5iv: $\rho_{\rm SVD}$ definition, $S^{(n,m)}$, integrable-CFT examples confirmed]
- K. Doi, J. Harper, A. Mollabashi, T. Takayanagi, Y. Taki, *Pseudo Entropy in dS/CFT and Time-like Entanglement Entropy*, PRL 130, 031601 (2023), arXiv:2210.09457. [ar5iv: unconjugated-$\Psi$ kernel, cap formula, non-Hermiticity confirmed; no spectral analysis present]
- P. Caputa, S. Purkayastha, A. Saha, P. Sułkowski, *Musings on SVD and pseudo entanglement entropies*, arXiv:2408.06791. [abstract fetched: Chern–Simons link states; no dS]
- P. Caputa, A. Saha, P. Sułkowski, *Generalised Entanglement Entropies from Unit-Invariant Singular Value Decomposition*, JHEP 05 (2026) 181, arXiv:2512.22997. [abstract fetched: no dS, no first law]
- J. Harper, T. Kawamoto, R. Maeda, N. Nakamura, T. Takayanagi, *Non-hermitian Density Matrices from Time-like Entanglement and Wormholes*, arXiv:2512.13800. [abstract fetched: 'imagitivity' present; no SVD/singular-value spectrum in abstract — cited as context only]
- W.-z. Guo, S. He, Y.-X. Zhang, *Constructible reality condition of pseudo entropy via pseudo-Hermiticity*, JHEP 05 (2023) 021, arXiv:2209.07308. [context only; verified in the iter-6 referee pass, **not re-fetched this session**]

> **Binding note.** Where a correction in the referee verdict below conflicts with the body above, the **referee correction governs**; the body is the pre-referee submission, retained for the audit trail per house convention.

## Referee verdict

**Track:** A3-op49-svd-hemisphere (Iteration 7). **Stance:** adversarial per [AGENTS.md](../AGENTS.md) §4. All six cited sources re-fetched live this session (arXiv:2210.09457, 2307.06531 = JHEP 12 (2023) 123, 2511.07915 v2, 2408.06791, 2512.22997 = JHEP 05 (2026) 181, 2209.07308 = JHEP 05 (2023) 021); the three load-bearing 2511.07915 internals re-verified verbatim in the HTML (eq. 3.1 $c = i\,3R/2G_N$; the imaginary-$T_{tt}$ consistency sentence; eq. 4.13 $(\Box_{dS_2}+2)\Delta S_A=0$); the F6 absence claim independently re-searched. No fabricated citations. Every derivation step re-derived; one misgraded assumption found (load-bearing), one false 'consistency check', one residual-count error.

> **R7A3-F1** (alternating $c/c^*$ cover) — `keep=true`, severity **minor**. Kernel conjugation and 2m-sheet gluing combinatorics re-derived and correct; consistent with the verified Doi et al. background. A2 properly flagged. Unflagged subtlety folded in: adjacent sheets carry *distinct* theories glued by formal field identification — the cover is interface-decorated, which is what makes F2 nontrivial.

> **R7A3-F2** ($c+c^*=0$ cancellation) — `keep=true`, severity **major (corrected)**. The normalization of $\Delta_{2m}$ checks out against the homogeneous limit, and the *sheetwise-additive (anomaly) part* of the twist dimension does vanish — that much is tight. **But A1 is misgraded as 'standard, tight'.** The branch point is a junction where $2m$ interfaces between CFT($c$) and CFT($c^*$) meet; on the uniformized plane $\langle T_j\rangle$ need not vanish, and the twist dimension is (anomaly sum) + (junction-operator dimension), the latter computed by nobody. Concrete contrary precedent: entanglement through conformal interfaces carries a *transmission-dependent* effective central charge, not a naive charge sum (Sakai–Satoh, JHEP 12 (2008) 001, arXiv:0809.4548; 'Universality of effective central charge in interface CFTs', JHEP 11 (2023) 126 — both verified this session). Reality of $\mathrm{Tr}[(\mathcal T^\dagger\mathcal T)^m]$ forces any junction correction to be **real**, i.e. it would reintroduce exactly the real cap-dependence the finding excludes. PTTW's replica computations are homogeneous and give no cover. **Corrected statement: cap-size blindness holds at anomaly-additive order; exactness is a new named residual (c′).**

> **R7A3-F3** ($S_{\rm SVD}=S_{dS}/2$) — `keep=true`, severity **major (corrected)**. Internal algebra verified ($-(\pi\tilde c/12)(n-1/n)$ structure; $q$-derivative arithmetic correct). **Defect:** the $q=1$ 'self-normalization' is not a favorable check — in any trace-class realization $\mathrm{Tr}\sqrt{\mathcal T^\dagger\mathcal T} \ge |\mathrm{Tr}\,\mathcal T_A| = 1$ with equality iff $\mathcal T_A$ is a phase times a positive operator, which would force a real pseudo-spectrum contradicting the verified complex $S_A$. The identity holds only for the universal part with $q$-dependent non-universal pieces discarded. Value $\pi\tilde c/6$ → [SPECULATIVE]; region-independence → conditional on (c′). Retained as a doubly-flagged falsifiable byproduct.

> **R7A3-F4** (first-order response) — `keep=true`, severity **major (corrected)**. The operator identity $\delta\,\mathrm{Tr}(\mathcal T^\dagger\mathcal T)^m = 2m\,\mathrm{Re}\,\mathrm{Tr}[(\mathcal T^\dagger\mathcal T)^{m-1}\mathcal T^\dagger\delta\mathcal T]$ and $\delta\sigma_k = \mathrm{Re}\langle u_k|\delta\mathcal T|v_k\rangle$ re-derived exactly — the iter-6 non-holomorphy claim is now an unconditional identity. The *vanishing* conclusion, however, inherits A1/A4 in a load-bearing way (and the unflagged normalization variation $\delta\log\mathrm{Tr}\sqrt{\mathcal T^\dagger\mathcal T}$); conditional, not established.

> **R7A3-F5** (VERDICT) — `keep=true`, severity **major (corrected)**. Link (i) is **unconditional and is the true pillar of the closure**: $S_{\rm SVD} \in \mathbb R_{\ge0}$ by construction vs. $\delta\langle K_A\rangle \in i\mathbb R\setminus\{0\}$ paper-verified — agreement only when the probe vanishes. Links (ii)–(iii) are conditional on F2. **Residual-count correction:** residual (c-SVD) closes negative *conditionally* and is replaced by the narrower residual **(c′) heterogeneous-cover junction additivity** — OP-49 keeps **three** named residuals: (a) exceptional points, (b) beyond-2511.07915-family, (c′) junction additivity. The mechanism upgrade over iter-6 ('observable blind') holds at anomaly-additive order only; the unconditional upgrade is the reality-mismatch argument made exact.

> **R7A3-F6** (literature absence) — `keep=true`, severity **minor**. All three sources verified including the JHEP 05 (2026) 181 journal ref; independent referee search surfaced nothing further. Retag [ESTABLISHED] → [INFERENCE — timestamped search-bounded absence, 2026-06-10] per house precedent (R6A4-F8).

**No-go and closure sweep.** No standard no-go (Weinberg–Witten, Coleman–Mandula/HLS, Haag, Reeh–Schlieder, unitarity/causality) implicated. No contradiction of dS-cardinality, HYP-CKV-VACUITY-R3 (none of its seven smuggle items — including the indefinite-pairing axiom and the signature-valued template — is touched; this track installs no signature and derives none), OP-48c, or the OP-49 near-no-go. The HYP-ENCODING-SCREEN tie-in (horizon constant retained, locality lost) is *consistent* but now rides the conditional F3 and must be cited at [SPECULATIVE]/conditional strength, not as a confirmed instance.

**Net:** all six findings kept after correction; none fatal. Outcome **RESOLVED-NEGATIVE (conditional) upheld in direction**: the last substantive OP-49 residual closes negative as iter-6 predicted, with the unconditional core being the real-vs-imaginary probe mismatch and the elegant $c+c^*=0$ blindness mechanism demoted to anomaly-additive order pending residual (c′). OP-49 status remains **NEAR-NO-GO**, residual list (a)/(b)/(c′). CHANGELOG should record: SVD residual closed-negative-conditional; A1 regraded; F3 value retagged SPECULATIVE; F6 retagged timestamped-absence.
