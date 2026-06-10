# OP-49 resolved-negative (conditional): reality of the dS/CFT pseudo-entropy excludes nontrivial first-law content

**Status:** ATTACK executed on the decidable sub-problem OP-49 (≡ OP-dS-PSEUDO-REALITY). Verdict: **resolved-negative, conditional** — 'genuine post-selection reality' and 'nontrivial $\delta G$' are mutually exclusive in the dS/CFT pseudo-entropy first law, with the obstruction located. Two scoped residuals (exceptional points; SVD-entropy first law) keep this short of a theorem. `didItMove = lever-closed (conditionally)`.
**Last updated:** 2026-06-10
**Iteration:** 6

This note executes the single decidable test isolated by iteration 5 ([2026-06-08-iter5-surviving-dS-routes.md](2026-06-08-iter5-surviving-dS-routes.md)): can the imaginary part of the dS/CFT pseudo-entropy be *physically nulled* (genuine post-selection / real reduced transition matrix) while the first law of arXiv:2511.07915 still yields a nontrivial linearized Einstein constraint? All external inputs were web-verified this session. Epistemic tags per [../EPISTEMICS.md](../EPISTEMICS.md).

---

## 1. The question, made precise

The dS$_3$/CFT$_2$ first law (Fujiki–Kohara–Shinmyo–Suzuki–Takayanagi, arXiv:2511.07915, *Entropic Interpretation of Einstein Equation in dS/CFT*) states that $\delta S(\mathcal T_A) = \delta\langle K_A\rangle$ for caps $A$ of every size on $\mathcal I^+$ is equivalent to the perturbative Einstein equation in dS$_3$, with $\delta S$ obeying $(\Box_{\mathrm{dS}_2}+2)\,\delta S_A = 0$ on kinematic space, computed via complexified geodesics, and dual central charge $c = i\,3R_{\rm dS}/2G_N$ [ESTABLISHED — verified against the v2 full text]. The pseudo-entropy
$$
\mathcal T^{1|2} = \frac{|\psi_1\rangle\langle\psi_2|}{\langle\psi_2|\psi_1\rangle},\qquad
\mathcal T_A = \mathrm{Tr}_{\bar A}\,\mathcal T^{1|2},\qquad
S_n(\mathcal T_A) = \frac{\log \mathrm{Tr}[\mathcal T_A^n]}{1-n},
$$
is complex in general. OP-49 asks: is there a regime/protocol making $S(\mathcal T_A)$ **real** (genuine post-selection; real spectrum) while $\delta S = \delta\langle K\rangle$ still pins down a nontrivial $\delta G_{\mu\nu} \neq 0$?

## 2. The reality theory of pseudo-entropy is a solved problem (new input)

**Theorem (Guo–He–Zhang, arXiv:2209.07308 = JHEP 05 (2023) 021).** For a *diagonalizable* reduced transition matrix $X_A$: $\mathrm{Tr}[(X_A)^n] \in \mathbb R$ for all $n$ **iff** $X_A$ is $\eta_A$-pseudo-Hermitian, $X_A^\dagger = \eta_A X_A \eta_A^{-1}$ with $\eta_A$ Hermitian invertible. If moreover $\mathcal T^{1|2}$ is $\eta_A\otimes\eta_{\bar A}$-pseudo-Hermitian with both factors definite, the spectrum of $\mathcal T_A$ is non-negative. In QFT, post-selecting with the **modular conjugate** of the pre-selected state yields a $\Delta^{1/2}$-pseudo-Hermitian transition matrix ($\Delta^{1/2} = e^{-2\pi K_A}\otimes e^{2\pi K_{\bar A}}$) — a Tomita–Takesaki-characterized reality class. [ESTABLISHED — abstract and full text verified.]

This identifies the previously unattributed citation 'JHEP **05** (2023) 021' in the iter-5 note, and converts OP-49's 'physical nulling' from an open-ended hope into a sharply characterized constraint set: reality for every region $A$ requires region-wise pseudo-Hermiticity. [INFERENCE, direct.]

**Two elementary lemmas (own derivation).** Let $\Theta = \Theta_A\otimes\Theta_{\bar A}$ be antiunitary.

- **Lemma A (invariance ⟹ reality).** If $\Theta|\psi_i\rangle = e^{i\alpha_i}|\psi_i\rangle$ for $i = 1,2$, then $\Theta\,\mathcal T^{1|2}\,\Theta^{-1} = \mathcal T^{1|2}$ exactly: antiunitarity gives $\langle\psi_2|\psi_1\rangle^* = e^{i(\alpha_1-\alpha_2)}\langle\psi_2|\psi_1\rangle$, which cancels the numerator phases. Hence $\mathrm{Tr}[\mathcal T_A^n] = \mathrm{Tr}[\Theta_A \mathcal T_A^n \Theta_A^{-1}] = \mathrm{Tr}[\mathcal T_A^n]^*$ for all $n$: **all pseudo-Rényi entropies are real**.
- **Lemma B (swap ⟹ no constraint).** If instead $\Theta|\psi_1\rangle \propto |\psi_2\rangle$ (CRT-type exchange), then $\Theta\,\mathcal T^{1|2}\,\Theta^{-1} = \mathcal T^{2|1} = (\mathcal T^{1|2})^\dagger$, and the induced identity $\mathrm{Tr}[(\mathcal T_A)^n]^* = \mathrm{Tr}[((\mathcal T_A)^\dagger)^n]$ holds **automatically** — no reality constraint whatsoever.

The dS/CFT pair — the north/south Euclidean-hemisphere (Hartle–Hawking-type) preparations, which Doi et al. note give *different* states and a non-Hermitian $\rho_A$ [ESTABLISHED, arXiv:2210.09457] — is exchanged, not fixed, by time reflection: it sits in the **Lemma-B class**, consistent with $\mathrm{Im}\,S \neq 0$. Reaching the Lemma-A class requires each state separately time-reflection symmetric, i.e. deleting the relative Lorentzian phase between the caps. [INFERENCE, tight.]

## 3. The verified structure of the dS first law: a single imaginary carrier channel

Three structural facts, each verified this session:

1. **Background split (Doi–Harper–Mollabashi–Takayanagi–Taki, PRL 130, 031601 (2023)).** In dS$_3$/CFT$_2$, for a cap of angle $\theta_0$ on $\mathcal I^+$:
$$
S_A = -\,i\,\frac{\tilde c}{3}\,\log\!\Big[\frac{2}{\epsilon}\sin\frac{\theta_0}{2}\Big] \;+\; \frac{\pi\tilde c}{6},
\qquad \tilde c \equiv \frac{3R_{\rm dS}}{2G_N}\in\mathbb R .
$$
$\mathrm{Re}\,S_A = \pi R/4G = S_{\rm dS}/2$: finite, universal, **region-independent** (spacelike geodesic segments). $\mathrm{Im}\,S_A$: divergent and carrying **all** $\theta_0$-dependence (timelike segment). The same split (real part $=S_{\rm dS}/2$; purely imaginary divergences) persists in dS$_{d+1}$. [ESTABLISHED.] *Correction to the iter-5 note*: its referee parenthetical ('only the universal/divergence-subtracted part is purely imaginary') inverts this. *Convention note*: 2210.09457 keeps $\tilde c$ real with explicit $i$'s; 2511.07915 absorbs it as $c = i\tilde c$ (its eq. 3.1).
2. **Perturbative carrier (arXiv:2511.07915).** For **real Lorentzian** dS$_3$ perturbations ($ds^2 = -dt^2+\cosh^2 t\,g_{ij}dx^idx^j$, real $h_{\theta\theta}$, modes $\propto(1-\tanh t)e^{im\varphi}$), the dual stress tensor is imaginary and $\Delta S_A$ is imaginary — the paper: 'though $\Delta S_A$ becomes imaginary, this is consistent if $T_{tt}$ also becomes imaginary.' The first law with both sides imaginary is what is equivalent to the linearized dS$_3$ Einstein equation. [ESTABLISHED re paper content.] So the iter-5 'two real equations' framing degenerates: for the physical (real-$\delta g$) family, the real part of the complex first law is identically $0=0$; **the entire Einstein content is the imaginary part**, with coefficient set by $c = i\tilde c$. [INFERENCE from verified structure, tight.]
3. **The unitary mirror (Li–Xiao–He–Sun, arXiv:2511.17098 — new input, found via the citation trail).** In AdS, the timelike-EE first law is proved equivalent to the linearized Einstein equations, with $S_{\mathcal T} = \frac{c}{3}\log[\cdots] + i\frac{\pi c}{6}$, $c$ real, and 'the imaginary components cancel when computing the variation between states' — only $\mathrm{Re}\,\delta S$ enters. [ESTABLISHED re paper content.] Under $c \to i\tilde c$ the roles of $\mathrm{Re}$ and $\mathrm{Im}$ swap exactly into the dS pattern: **which channel carries Einstein is dictated by the reality of the central charge**. [INFERENCE, strong.]

## 4. The exclusion argument

**Claim.** In the arXiv:2511.07915 construction, region-wise reality of the pseudo-entropy and a nontrivial first-law Einstein constraint are mutually exclusive. [INFERENCE — own derivation over verified inputs; conditional, see §6.]

**Horn (i): reality at fixed dictionary.** Suppose a protocol enforces $S(\mathcal T_A)\in\mathbb R$ for every cap $A$ while retaining the dS/CFT dictionary ($c = i\tilde c$). By §3.2, $\Delta S_A \in i\mathbb R$ for the real-Lorentzian-$\delta g$ family; reality then forces $\Delta S_A = 0$ for **all** $A$, hence $\delta\langle K_A\rangle = 0$ for all $A$. The CHM kernel family over all cap sizes and centers is invertible on the boundary stress data, so $\delta\langle T_{tt}\rangle \equiv 0$: **the probe vanishes**. The first law holds vacuously ($0=0$) and constrains no $\delta G$. Contrapositive: $\delta G \neq 0 \Rightarrow \mathrm{Im}\,\delta S_A \not\equiv 0 \Rightarrow$ (Guo–He–Zhang necessity) $\mathcal T_A$ is **not** pseudo-Hermitian for some $A$ — non-reality is *forced by* nontriviality.

**Horn (ii): reality by deforming states or dictionary.** The known reality mechanisms — separately $\Theta$-invariant pre/post states (Lemma A), modular-conjugate post-selection (the Tomita–Takesaki class of §2), or $c\to$ real — all delete the relative Lorentzian phase between the two hemisphere preparations or deform the dual back toward a unitary AdS-type CFT. The bulk saddle becomes real-Euclidean; the surviving first law is the ordinary (FGHMVR-type) first law on the Euclidean section — an AdS-style ENCODES result. The Lorentzian dS Einstein equation is never reached. A 'real $\delta S$ with complex $\delta g$' reading is horn (ii) in disguise: geometry complexified, the already-refereed ENCODES route.

**Physical reading.** Guo–Xu (arXiv:2410.22684) show the imaginary part of timelike EE is fixed by **commutators** of twist operators with their temporal derivatives (universal in the simplest cases; higher-commutator-corrected in general) [ESTABLISHED re paper]. The imaginary channel *is* the causal/Lorentzian content — the 'emergent time' of Doi et al. Nulling it deletes exactly the data the first law was supposed to convert into dS dynamics. The reality-symmetric point is where the probe vanishes — the same collapse pattern as every previously closed dS route. [INFERENCE.]

## 5. No known lever nulls the imaginary part (2024–2026 sweep)

- **Renormalization**: the regulator-independent renormalized pseudoentropy in dS/CFT remains complex — universal part $\propto$ complex $a^\star$ (Anastasiou–Araya–Das–Moreno, arXiv:2602.17989). [ESTABLISHED re paper.]
- **Shape deformation**: the universal part for deformed spheres is $C_T$-controlled and sign-retaining (sphere a local extremum) (arXiv:2512.02164). [ESTABLISHED re paper.]
- **Contour choice**: distinct complexified time contours/extremal surfaces in no-boundary dS give indistinguishable areas; the complexification ambiguity cannot be exploited to remove $\mathrm{Im}\,S$ (Narayan, arXiv:2604.00108). The complex-surface selection-principle question (Heller–Ori–Serantes, PRL 134, 131601 (2025)) is a choice among complex saddles, not toward real ones. [ESTABLISHED re papers.]
- **Quantification**: non-Hermiticity is now itself measured ('imagitivity', Harper–Kawamoto–Maeda–Nakamura–Takayanagi, arXiv:2512.13800). [ESTABLISHED re paper.]

## 6. What keeps this short of a theorem — two scoped residuals

1. **Exceptional points.** The Guo–He–Zhang characterization assumes diagonalizable $\mathcal T_A$. At non-diagonalizable (exceptional) points the spectrum-based logic breaks; pseudo-entropy phase transitions are an active subject (Kanda–Takayanagi–Wei, arXiv:2602.22994, BCFT-driven). Whether an EP-locus protocol can hold $S$ real with $\delta G \neq 0$ is [OPEN] — though the first-law linearization itself is expected to fail there [SPECULATIVE].
2. **The SVD protocol.** SVD entanglement entropy (Parzygnat–Takayanagi–Taki–Wei, arXiv:2307.06531) is the only known intrinsically real, non-negative two-state entropy. No first law for it exists in the literature (none found this session). Structural argument against it [INFERENCE]: $S_{\rm SVD}$ depends on $\mathcal T_A$ through $\sqrt{\mathcal T_A^\dagger\mathcal T_A}$, which is non-holomorphic in $\mathcal T_A$; the kinematic-space machinery of 2511.07915 (complexified geodesics, $(\Box_{\mathrm{dS}_2}+2)\delta S = 0$) requires holomorphic continuation, so $\delta S_{\rm SVD}$ cannot satisfy the wave equation whose modes deliver the local constraint. **The single decidable follow-up:** compute $\delta S_{\rm SVD}$ for the dS$_3$ hemisphere transition matrix under the 2511.07915 perturbation family and check whether any local constraint on $\delta g$ survives. Prediction: no.

## 7. Verdict

**OP-49: resolved-negative, conditional** (conditions: diagonalizable $\mathcal T_A$; the linear-order dS$_3$ carrier structure of 2511.07915, established for its perturbation family). The located obstruction: *the linearized dS Einstein constraint is carried exclusively by the imaginary channel of the pseudo-entropy, whose coefficient is the imaginary central charge; reality protocols either zero the channel (no constraint — the probe vanishes) or deform the data AdS-ward (no dS).* This upgrades the iter-5 'sharpened expectation: no' to a conditional exclusion argument; route (a)'s 'non-unitarity is disqualifying' moves from definitional stance toward structural fact *within this route*. The CONCLUSION headline is **reinforced**; the two standing hedges (OP-46 hypothetical readout; OP-48c horn C) are untouched. Independently of reality, the ENCODES diagnosis stands: even the complex first law rides on the continued AdS/CHM structure.

Proposed registry updates: OP-49 status [OPEN] → [RESOLVED-NEGATIVE, conditional] with the two residuals recorded; correct the iter-5 Re/Im parenthetical (§3.1); add a line to OP-41 progress (AdS timelike first law now exists, arXiv:2511.17098); log in [../CHANGELOG.md](../CHANGELOG.md).

## Open subquestions

1. The SVD first-law computation of §6.2 (decidable; predicted negative).
2. Can the exclusion be promoted to a theorem covering non-diagonalizable $\mathcal T_A$ (exceptional points), e.g. via continuity of $\mathrm{Tr}[\mathcal T_A^n]$ across the EP locus?
3. Is the 'deviation of the dS pair from the modular-conjugate reality class = elapsed Lorentzian time' identification (§2) quantifiable, e.g. as a bound $\mathrm{Im}\,S \gtrsim f(\text{imagitivity})$ relating to arXiv:2512.13800?

## See also

- [2026-06-08-iter5-surviving-dS-routes.md](2026-06-08-iter5-surviving-dS-routes.md) — the iteration-5 attempt that isolated OP-49; its Route (a) analysis is sharpened (and one parenthetical corrected) here.
- [2026-06-08-iter4-ds-first-law-escape.md](2026-06-08-iter4-ds-first-law-escape.md), [2026-06-08-iter3-de-sitter-first-law-attempt.md](2026-06-08-iter3-de-sitter-first-law-attempt.md) — the dS first-law lineage.
- [2026-06-08-iter3-encode-vs-generate-criterion.md](2026-06-08-iter3-encode-vs-generate-criterion.md) — the verdict criterion; this note's result keeps route (a) at ENCODES.
- Root pages: [../OPEN_PROBLEMS.md](../OPEN_PROBLEMS.md) (OP-49, OP-41), [../CONCLUSION.md](../CONCLUSION.md) (§5), [../HYPOTHESES.md](../HYPOTHESES.md) (H2, H4), [../FINDINGS.md](../FINDINGS.md), [../EPISTEMICS.md](../EPISTEMICS.md), [../BIBLIOGRAPHY.md](../BIBLIOGRAPHY.md).
- Domain pages: [../domains/general-relativity.md](../domains/general-relativity.md), [../domains/quantum-field-theory.md](../domains/quantum-field-theory.md), [../domains/cosmology.md](../domains/cosmology.md), [../domains/information-theory.md](../domains/information-theory.md).

## References

All verified this session by fetching the arXiv abstract page (and where noted, the full text via arXiv HTML / ar5iv) or the INSPIRE API.

- K. Fujiki, M. Kohara, K. Shinmyo, Y. Suzuki, T. Takayanagi, *Entropic Interpretation of Einstein Equation in dS/CFT*, arXiv:2511.07915 (v1 2025-11-11; v2 2025-11-27), YITP-25-173. [abstract + v2 full text]
- W.-z. Guo, S. He, Y.-X. Zhang, *Constructible reality condition of pseudo entropy via pseudo-Hermiticity*, JHEP 05 (2023) 021, arXiv:2209.07308. [abstract + full text]
- K. Doi, J. Harper, A. Mollabashi, T. Takayanagi, Y. Taki, *Pseudo Entropy in dS/CFT and Time-like Entanglement Entropy*, Phys. Rev. Lett. 130, 031601 (2023), arXiv:2210.09457. [abstract + full text]
- K. Doi, J. Harper, A. Mollabashi, T. Takayanagi, Y. Taki, *Timelike entanglement entropy*, JHEP 05 (2023) 052, arXiv:2302.11695. [abstract]
- G.-Y. Li, M.-H. Xiao, S. He, J.-R. Sun, *Entanglement first law for timelike entanglement entropy and linearized Einstein's equation*, arXiv:2511.17098 (2025). [abstract + v2 full text]
- W.-z. Guo, J. Xu, *Imaginary part of timelike entanglement entropy*, arXiv:2410.22684 (2024). [abstract]
- M. P. Heller, F. Ori, A. Serantes, *Geometric Interpretation of Timelike Entanglement Entropy*, Phys. Rev. Lett. 134, 131601 (2025), arXiv:2408.15752. [abstract]
- G. Anastasiou, I. J. Araya, A. Das, J. Moreno, *Renormalized pseudoentropy in dS/CFT*, arXiv:2602.17989 (2026). [abstract]
- G. Anastasiou, I. J. Araya, A. Das, J. Moreno, *Universality of pseudoentropy for deformed spheres in dS/CFT*, arXiv:2512.02164 (2025). [abstract]
- K. Narayan, *de Sitter extremal surfaces, time contours, complexifications and pseudo-entropies*, arXiv:2604.00108 (2026). [abstract]
- J. Harper, T. Kawamoto, R. Maeda, N. Nakamura, T. Takayanagi, *Non-hermitian Density Matrices from Time-like Entanglement and Wormholes*, arXiv:2512.13800 (2025). [abstract]
- H. Kanda, T. Takayanagi, Z. Wei, *CFT derivation of entanglement phase transition in pseudo entropy*, arXiv:2602.22994 (2026). [abstract]
- A. J. Parzygnat, T. Takayanagi, Y. Taki, Z. Wei, *SVD Entanglement Entropy*, JHEP (2023) 123, arXiv:2307.06531. [abstract]
- Y. Nakata, T. Takayanagi, Y. Taki, K. Tamaoka, Z. Wei, *New holographic generalization of entanglement entropy* (arXiv listing title: *Holographic Pseudo Entropy*), Phys. Rev. D 103, 026005 (2021), arXiv:2005.13801. [abstract + INSPIRE recid 1798319]
- A. Mollabashi, N. Shiba, T. Takayanagi, K. Tamaoka, Z. Wei, *Pseudo Entropy in Free Quantum Field Theories*, Phys. Rev. Lett. 126, 081601 (2021), arXiv:2011.09648. [abstract]
- A. Mollabashi, N. Shiba, T. Takayanagi, K. Tamaoka, Z. Wei, *Aspects of Pseudo Entropy in Field Theories*, Phys. Rev. Research 3, 033254 (2021), arXiv:2106.03118. [abstract]
- S. Grieninger, K. Ikeda, D. E. Kharzeev, *Temporal Entanglement Entropy as a probe of Renormalization Group Flow*, JHEP 05 (2024) 030, arXiv:2312.08534. [abstract; cited as context only]
- INSPIRE-HEP record 3081756 (citation trail for arXiv:2511.07915; 7 citing records as of 2026-06-10). [API queried directly]

> **Binding note.** Where a correction in the referee verdict below conflicts with the body above, the **referee correction governs**; the body is the pre-referee submission, retained for the audit trail per house convention.

## Referee verdict

**Track:** A4-op49-pseudo-entropy (Iteration 6). **Stance:** adversarial per [../AGENTS.md](../AGENTS.md) §4. All thirteen cited sources re-fetched this session, including every post-2025 arXiv ID; both load-bearing full-text extractions spot-checked against the v2 HTMLs; Lemmas A/B re-derived independently; the F8 absence claim re-searched. No fabricated citations. One quote-attribution defect (F6), one verdict-strength overclaim (F5). No standard no-go (Weinberg–Witten, Coleman–Mandula/HLS, Haag, Reeh–Schlieder, unitarity/causality) is implicated; no quiet contradiction of the wiki's closures — the track reinforces the cardinality/area-coefficient diagnostic and leaves the OP-46 and OP-48(c) hedges untouched, as it claims.

> **R6A4-F1** (pseudo-Hermiticity reality theorem) — `keep=true`, severity **minor**. arXiv:2209.07308 = JHEP 05 (2023) 021 verified (title/authors/DOI/abstract; Tomita–Takesaki connection explicit in the abstract). Correction folded in: the N&S characterization governs the *trace moments* $\mathrm{Tr}[\mathcal{T}_A^n] \in \mathbb{R}$; the pseudo-Rényi *entropies* are real only with positivity of the moments (log branch) — guaranteed on the definite-$\eta$ subclass. The OP-49 consequence stands as [INFERENCE].

> **R6A4-F2** (dS Re/Im split; correction to this note) — `keep=true`, severity **minor**. The formula $S_A = -i\,(\tilde c/3)\log[\tfrac{2}{\epsilon}\sin\tfrac{\theta_0}{2}] + \pi\tilde c/6$ verified verbatim against the ar5iv text of PRL 130, 031601; $\mathrm{Re}\,S_A = S_{dS}/2$, $\theta_0$-independent, spacelike-segment origin all confirmed. **The correction to the iter-5 parenthetical is accepted and must be applied to this page**: as previously written it inverted the verified structure. Precision fix: the divergence-subtracted remainder is *complex* — the finite shape-dependent log is also imaginary; only the constant $S_{dS}/2$ is real.

> **R6A4-F3** (single imaginary carrier channel in arXiv:2511.07915) — `keep=true`, severity **minor**. All four internals re-verified verbatim in the v2 HTML (eq. 3.1 $c = i\,3R/2G_N$; real $h_{\theta\theta} \propto (1-\tanh t)e^{im\phi}$; the imaginary-$T_{tt}$ consistency sentence; $(\Box_{dS_2}+2)\Delta S_A = 0$). Tag split required: paper content [ESTABLISHED]; the 'two-real-equations framing degenerates' reading [INFERENCE, tight], scoped to the paper's perturbation family.

> **R6A4-F4** (antiunitary swap lemmas) — `keep=true`, severity **minor**. Both lemmas re-derived by the referee and correct. Corrections: Lemma A proves reality of the moments (log-branch caveat as in F1); and Lemma A is *sufficient, not necessary* for reality — exhaustiveness is governed by the F1 pseudo-Hermitian class. The Lemma-B class assignment of the dS hemisphere pair is [INFERENCE], independently corroborated by the verified $\mathrm{Im}\,S_A \neq 0$.

> **R6A4-F5** (the exclusion; proposed status change) — `keep=true`, severity **major (corrected)**. Horn (i) is tight modulo an under-flagged link: CHM-kernel invertibility over caps on $S^2$ is [INFERENCE] (FGHMVR-pattern), not re-derived. Horn (ii)'s universal conclusion is established only for the three *named* deformations, with the F6 mirror and F7 rigidity as evidence — the GHZ reality class ('some Hermitian invertible $\eta$') is open, and no theorem excludes an unforeseen pseudo-Hermitizing deformation retaining Lorentzian content. **Status correction: OP-49 → NEAR-NO-GO (conditional exclusion; expectation resolved-negative), mirroring OP-41 language — not RESOLVED-NEGATIVE — with THREE named residuals:** (a) exceptional points (diagonalizability), (b) generalization beyond the 2511.07915 perturbation family, (c) horn-(ii) protocol-class openness. Note the exclusion is belt-and-suspenders relative to the standing ENCODES verdict: even its hypothetical evasion leaves the area-entropy coefficient an input.

> **R6A4-F6** (unitary-AdS mirror, arXiv:2511.17098) — `keep=true`, severity **minor**. Paper real; first law ⇔ linearized Einstein, $T_{ent} \propto (\Delta t)^{-1}$ (eq. 2.14), and $S = \frac{c}{3}\log[\cdots] + i\frac{\pi c}{6}$ (eqs. 2.29–2.30) all verified. **Defect:** the sentence quoted as verbatim ('the imaginary components cancel…') was not located in the v2 HTML; the substance is true at equation level (the constant $i\pi c/6$ drops in eq. 2.31, which is real). Quotation marks removed; restated as an equation-level paraphrase. The $c\,\mathrm{real} \leftrightarrow c\,\mathrm{imaginary}$ mirror stands as [INFERENCE, strong] — corroboration, not proof, of horn (ii).

> **R6A4-F7** (rigidity of Im S: renormalization / shape / contour / commutator) — `keep=true`, severity **minor**. All six sources real and accurate to their assigned claims (2602.17989, 2512.02164, 2604.00108, 2408.15752 = PRL 134, 131601, 2410.22684, 2512.13800 'imagitivity' — each abstract re-fetched). Tag fix: Narayan establishes contour-*equivalence*; 'the ambiguity cannot be exploited to null Im' is [INFERENCE]. 'Every known lever' → 'every lever examined in the 2024–2026 literature'.

> **R6A4-F8** (residuals: exceptional points; SVD entropy) — `keep=true`, severity **minor**. Both citations real; the finder honestly disclosed that 2602.22994's abstract concerns BCFT transitions, not exceptional points per se. The 'no SVD first law in the literature' absence claim survived an independent referee search (timestamp it: as of 2026-06). De-overclaim applied: non-holomorphy of $\sqrt{\mathcal{T}_A^\dagger\mathcal{T}_A}$ shows the 2511.07915 derivation route is *unavailable* for $\delta S_{SVD}$, not that the wave equation is unsatisfiable — the stated dS$_3$ computation remains the single decidable follow-up. The residual list here inherits residual (c) from F5.

**Net:** all eight findings kept after correction; none fatal. OP-49 status: **[OPEN] → [NEAR-NO-GO — conditional exclusion, expectation resolved-negative]** with three named residuals; CONCLUSION.md §5 item 3 updated to 'conditionally closed-negative'; the F2 correction applied to this note's iter-5 parenthetical; CHANGELOG entries for the status move and the correction.
