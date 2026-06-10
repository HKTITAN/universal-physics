---
title: "OP-46 attack, iteration 7: η-from-modular-data — the modular sign η₀ exists, is geometry-void, and a trichotomy lemma closes the J-route"
type: note
tags: [note, iter7, modular-theory, krein, op-46]
updated: 2026-06-10
---

# OP-46 attack, iteration 7: η-from-modular-data — the modular sign η₀ exists, is geometry-void, and a trichotomy lemma closes the J-route

**Status:** ATTEMPT executed — the compressed verdict-flipper (derive a Krein fundamental symmetry from pure $(\mathcal M,\Omega)$ modular data) was attacked constructively, not by survey. **Surprise outcome: the literal target is ACHIEVED — and the verdict still does not flip.** A canonical indefinite pairing $\eta_0=\mathrm{sgn}(\ln\Delta)$ is derived, graded clean on all smuggle axes, and then proven geometry-void by three independent vacuity results; a new **modular-form trichotomy lemma** (positive / signature-free / universal-indefinite) closes the $J$-route under one flagged ansatz. Proposed hedge move: OP-46 residual MEDIUM → MEDIUM-HIGH; compressed-target wording repair in [../CONCLUSION.md](../CONCLUSION.md) §8.
**Last updated:** 2026-06-10
**Iteration:** 7

Grading instrument: [2026-06-08-iter3-encode-vs-generate-criterion.md](2026-06-08-iter3-encode-vs-generate-criterion.md) ($\Delta_{\rm geo}$ three-valued flag, $\kappa_\Phi$, smuggle items $g_1$–$g_7$ + the two iteration-6 extensions). Prior closures ([2026-06-10-iter6-generation-construction-survey.md](2026-06-10-iter6-generation-construction-survey.md)) not relitigated.

> Scope honesty: §§1–5 are this session's own mathematics, derived step by step and numerically verified twice in a finite-dimensional standard form (the first numerical pass caught an error in my own Tomita operator — $S(v)=\rho^{-1/2}v^\dagger\rho^{1/2}$, not $v^\dagger$ — retained as audit trail). The trichotomy lemma rests on one flagged ansatz (§4). Citations web-verified this session unless marked [unverified].

---

## 1. Setup

$(\mathcal M,\Omega)$ standard, $S=J\Delta^{1/2}$, $J\Delta J=\Delta^{-1}$, hence $J\Delta^{it}=\Delta^{it}J$ and $Jf(\Delta)J=\bar f(\Delta^{-1})$. Natural cone $P^\natural=\overline{\{a\,JaJ\,\Omega\}}$, self-dual, $\Omega\in P^\natural$ (Haagerup standard form, Math. Scand. 37 (1975) 271). `[ESTABLISHED]`

## 2. Inventory: what pairings does $J$ actually give? (Lemmas 1–3)

**Lemma 1 ($J$ alone is structure-free).** (a) Antiunitary involutions admit $J$-real ONBs; all are unitarily conjugate — $(H,J)$ has no invariants. (b) $B(\xi,\eta)=\langle J\xi,\eta\rangle$ is complex **bilinear symmetric** ($B(\eta,\xi)=\langle J\eta,JJ\xi\rangle=\langle J\xi,\eta\rangle$); complex symmetric forms have **no signature** (complex orthogonal equivalence). (c) The real form $\mathrm{Re}\langle\xi,J\xi\rangle$ splits $H_{\mathbb R}=H^J_+\oplus iH^J_+$; multiplication by $i$ is real-orthogonal and swaps the parts — the $(\infty,\infty)$ split **is the complex structure in disguise**. `[ESTABLISHED — elementary; numerically confirmed]`

**Lemma 2 (standard-subspace forms).** On $K=\overline{\mathcal M_{sa}\Omega}$: $\mathrm{Re}\langle\cdot,\cdot\rangle|_K$ positive definite; $\mathrm{Im}\langle\cdot,\cdot\rangle|_K$ symplectic — signatureless. The two-projection geometry of $(K,iK)$ returns exactly $(J,\Delta)$ (Rieffel–van Daele, Pacific J. Math. 69 (1977) 187). The graph form of $\Delta^{1/2}$ has Gram operator $1-\Delta$ — a function of $\Delta$, see §3. `[ESTABLISHED]`

**Lemma 3 (the $g_3$ trap is structural — $J$ carries reflection positivity).** For all $a\in\mathcal M$:
$$\langle a^*\Omega,\,Ja\Omega\rangle=\langle\Omega,\,a\,j(a)\,\Omega\rangle\ge0,\qquad j(a)=JaJ,$$
by self-duality of $P^\natural$. The $J$-pairing on its OS-aligned domain is **positive semidefinite in full abstraction** — no symmetric vacuum needed. $J$ is the algebraic carrier of *reflection positivity*, the Euclidean datum (consistent with BW's $J=$ CPT·rotation and the Neeb–Ólafsson standard-subspace ↔ reflection-positivity dictionary, arXiv:1611.00080). Numerics: 500/500 trials real and $\ge0$. `[ESTABLISHED]`

## 3. The construction: the modular sign $\eta_0$

**Constructibility ansatz `[INFERENCE — the flagged assumption]`:** a canonical Gram operator must lie in $W^*(\Delta^{it};Jf(\Delta)J)=\{\Delta\}''$; its self-adjoint unitaries are measurable signs $\varepsilon(\Delta)$.

**Definition.** $\eta_0:=\mathrm{sgn}(\ln\Delta)$, $+1$ on $\ker(\ln\Delta)\ni\Omega$. Then: $\eta_0=\eta_0^*$, $\eta_0^2=1$, $[\eta_0,\Delta^{it}]=0$, and $J\eta_0J=-\eta_0$ on $(\ker\ln\Delta)^\perp$ — the **unique $J$-odd sign of $\Delta$**. The form $\langle\cdot,\eta_0\cdot\rangle$ is indefinite iff $\omega$ non-tracial; for type III states $\mathrm{spec}\,\Delta=[0,\infty)$, signature $(\infty,\infty)$. `[ESTABLISHED — all identities proven and numerically confirmed twice]`

**Grading:** $g_1$–$g_6$ F · $g_7$ T (cyclic-separating consumed) · $(n,n)$-axiom F (**derived, not posited**) · template F · $\kappa_\Phi=0$ · $\Delta_{\rm geo}=0$ (proven below). **The literal compressed target of iteration 6 has a positive answer.**

## 4. Why nothing flips: three vacuity results

**(a) Universality — $\Delta_{\rm geo}=0$ is a theorem here, not a grade.** `[INFERENCE, high]` In the Borchers-triple/HSMI class — exactly where modular data has causal content — Borchers' theorem yields a positive-energy $\mathrm{Aff}(\mathbb R)$ representation; the positive-energy irrep is unique (Mackey; cf. arXiv:1703.06831 and Longo's conformal-nets notes), so $\ln\Delta$ has homogeneous Lebesgue spectrum and, by a two-sheet trivialization argument (any two antiunitary involutions anticommuting with $x$ on $L^2(\mathbb R)\otimes K$ differ by a unitary in $\{x\}'$, splittable on one sheet), **$(H,\Delta,J,\eta_0)$ is one fixed object up to a multiplicity cardinal**. Every wedge of every QFT gives the same quadruple: zero geometric free functions. *The more causal structure the modular data carries, the more rigid the universality.*

**(b) Algebra incompatibility.** `[INFERENCE; numerically demonstrated]` Krein-QFT/CFS work requires $\mathrm{Ad}\,\eta\in\mathrm{Aut}(\mathcal M)$. $\mathrm{Ad}\,\eta_0$ fails already for the $M_3$ standard form (control: $\mathrm{Ad}\,\Delta^{it}$ passes); a sign of $\Delta$ that did normalize $\mathcal M$ would itself be an extra installed symmetry.

**(c) Non-localizability.** `[INFERENCE, high]` Lorentzian signature is a **fiberwise** $(n,n)$ structure over points (CFS spin spaces, Gupta–Bleuler fibers). $\eta_0$ is one global involution; making fibers needs a point-carrier (net / factorization / graph) — surrogate $g_5$. The signature-installation step recurs at localization: the same closing step as the four readout families — a **fifth independent convergence** on it.

**(d) HSMI adds nothing indefinite.** `[INFERENCE, high]` Its new linear operators are translations with $P\ge0$; modular covariance rescales $P$ (no invariant scale), so the only covariant sign of $P$ is $+1$. The enrichment lands wholly on the positivity side.

## 5. The no-go: modular-form trichotomy lemma

**Lemma.** Under the §3 ansatz, every nonzero canonical pairing from $(\mathcal M,\Omega)$ is exactly one of: **(i) positive** (Hilbert form; $\mathrm{Re}\langle\cdot,\cdot\rangle|_K$; cone/OS form — $g_6$-positivity as *output*); **(ii) signature-free** (symplectic; complex-symmetric; real $J$-split = complex structure); **(iii) sign-of-$\Delta$ Krein** — indefinite but universal (4a), algebra-incompatible (4b), non-localizable (4c). **Hence no $J$- or $\Delta$-induced pairing is a geometry-bearing, algebra-compatible, localized Lorentzian $(n,n)$ structure unless installed by hand or inherited from a symmetric state.** `[INFERENCE — high modulo the flagged ansatz]`

Slogan: **the modular sign is to signature what thermal time is to time** — canonical, smuggle-free, geometry-void (the exact $\eta$-analogue of Connes–Rovelli's verdict in the iter-3 table).

## 6. Literature direction-map (negative search)

All located prior art runs **Krein → modular**, never modular → Krein: Gottschalk derives BW *for fields already on Krein spaces* (JMP 43 (2002) 4753, math-ph/0408048, verified); Jakóbczyk's 1980s line formulates modular theory *in* Pontryagin space with the metric installed [title-verified; details unverified]; NCG obtains Krein *from the twist* (Devastato–Martinetti JHEP 03 (2018) 089, arXiv:1710.04965; Nieuviarts 2402.05839 — both verified). The reflection-positivity school (Neeb–Ólafsson 1611.00080) confirms $(\Delta,J)$'s native home is the **positive** (Euclidean) side. No derivation of a Krein $\eta$ from $(\mathcal M,\omega)$ exists in the searched record. `[OPEN — scoped negative search]`

## 7. Consequences proposed for the wiki

1. **OP-46 hedge: MEDIUM → MEDIUM-HIGH.** The hypothetical readout class is now closed not only over four families but over the entire modular-canonical form sector, modulo one flagged ansatz (constructibility/naturality) — the named residual.
2. **Compressed-target repair ([../CONCLUSION.md](../CONCLUSION.md) §8).** \"Derive the indefinite pairing from modular data\" was lossy — it is *achievable* and flips nothing. Repair to: *\"derive an algebra-compatible, localized (fiberwise) $(n,n)$ pairing from modular data\"* — which re-identifies the residual with the carrier problem ([../HYPOTHESES.md](../HYPOTHESES.md) HYP-FACTORIZATION-IS-GEOMETRY). The η-question and the factorization-question are **one question**.
3. **Smuggle-item $g_3$ upgrade:** the reflection-inheritance trap is structural (cone self-duality), not merely symmetric-state phenomenology.
4. **HYP-ENCODING-SCREEN** inherits the hardened grade.

## 8. Open subquestions

1. Can the constructibility ansatz be replaced by a naturality **theorem** (every $\mathrm{Aut}(\mathcal M,\omega)$-natural Gram operator lies in $\{\Delta\}''$)? This would push the hedge to HIGH. `[OPEN]`
2. Does any pair of states $(\omega,\varphi)$ — Connes-cocycle data — yield an algebra-compatible involution not reducible to installed structure? (Two states = relocated input, but the grading should be done.) `[OPEN]`
3. Is there a $(\mathcal M,\Omega)$ with $\mathrm{Ad}\,\eta_0\in\mathrm{Aut}(\mathcal M)$, and is that condition itself equivalent to an installed $\mathbb Z_2$ symmetry? `[OPEN]`
4. Does the universality argument (4a) extend beyond the Borchers/HSMI class to all III₁ standard pairs (spectral multiplicity uniformity)? `[OPEN]`

## Proposed registry items

### LEM-MODULAR-TRICHOTOMY — (new lemma)
**Statement.** Every canonical pairing from $(\mathcal M,\Omega)$ modular data is positive-type, signature-free, or a sign-of-$\Delta$ Krein form that is unitarily universal, generically algebra-incompatible, and non-localizable; no geometry-bearing $(n,n)$ pairing is derivable without installation or symmetric-state inheritance. Tag `[INFERENCE]` (high, modulo the constructibility ansatz).

### OP-46-ETA0 — (candidate-grading record)
**Statement.** $\eta_0=\mathrm{sgn}(\ln\Delta)$: canonical Krein fundamental symmetry from pure modular data; $g_1$–$g_6$ F, $g_7$ T, $\kappa_\Phi=0$, $\Delta_{\rm geo}=0$ proven via Borchers-class universality. Verdict: GENERATES-an-indefinite-pairing-only (thermal-time analogue). Tag `[ESTABLISHED]` construction / `[INFERENCE]` vacuity.

### HYP-CKV-VACUITY-R4 — (hypothesis-refinement)
**Statement.** OP-46 residual hardens MEDIUM → MEDIUM-HIGH; the compressed target is repaired to the localized algebra-compatible $(n,n)$ form and identified with the carrier problem; $g_3$ upgraded to structural (cone self-duality). Tag `[INFERENCE]`.

## See also

- [../CONCLUSION.md](../CONCLUSION.md) §§5, 8 — the hedge this note hardens and the wording it repairs
- [../OPEN_PROBLEMS.md](../OPEN_PROBLEMS.md) — OP-46 · [../HYPOTHESES.md](../HYPOTHESES.md) — HYP-CKV-VACUITY, HYP-FACTORIZATION-IS-GEOMETRY, HYP-ENCODING-SCREEN
- [2026-06-10-iter6-generation-construction-survey.md](2026-06-10-iter6-generation-construction-survey.md) — the four readout families and the compressed target this note executes
- [2026-06-08-iter3-encode-vs-generate-criterion.md](2026-06-08-iter3-encode-vs-generate-criterion.md) — grading instrument
- [../domains/mathematics.md](../domains/mathematics.md) — Tomita–Takesaki, Type III₁, Borchers–Wiesbrock
- [../EPISTEMICS.md](../EPISTEMICS.md) — tag discipline

> **Binding note.** Where a correction in the referee verdict below conflicts with the body above, the **referee correction governs**; the body is the pre-referee submission, retained for the audit trail per house convention.

## Referee verdict

*Adversarial referee, track A1-indefinite-pairing-from-modular-data, iteration 7 (2026-06-10). Default stance REFUTE; stance not sustained — the submission survives with corrections. All mathematics re-derived step by step; all numerics independently replicated in fresh code with a fresh RNG (S aΩ = a*Ω to 3·10⁻¹⁵; S = JΔ^{1/2}; Lemma 1b bilinearity/symmetry; Lemma 3 cone positivity, 500 trials, max |Im| ≈ 9·10⁻¹⁶, min Re ≈ 1.34; η₀² = 1, self-adjointness, J-oddness off-kernel, indefiniteness; Ad η₀ breaks right-multiplication commutation by O(10) while the Ad Δ^{it} control passes at 10⁻¹⁴). Citations audited live: Rieffel–van Daele PJM 69 (1977) 187–221 ✓; Haagerup Math. Scand. 37 (1975) 271–283 ✓; Morinelli arXiv:1703.06831 ✓; Neeb–Ólafsson arXiv:1611.00080 ✓; Gottschalk JMP 43 (2002) 4753, arXiv:math-ph/0408048 ✓; arXiv:1710.04965 = JHEP 03 (2018) 089 ✓ but four authors (Devastato–Farnsworth–Lizzi–Martinetti — fix the label); Nieuviarts 2402.05839 v6 ✓; Jakóbczyk upgraded to record-verified (OSTI 5135323, 1985). No fabricated source. No standard no-go bears adversely; the Reeh–Schlieder/cyclic-separating consumption is correctly flagged as g₇.*

> **A1-F1 (η₀ = sgn(ln Δ) answers the literal compressed target): KEEP — severity MINOR — two binding corrections.** The construction, its smuggle-free grading (g₁–g₆ F per the iter-3 checklist definitions, checked item-by-item; C2 equivariance holds), and indefinite-iff-non-tracial are all verified. **Correction 1 (uniqueness is false):** η₀ is *not* the unique J-odd self-adjoint unitary in {Δ}″ — any measurable sign function odd in ln λ qualifies; the referee's counterexample ε(Δ) = sgn(sin(ln Δ)) was numerically confirmed (J-odd, ε² = 1, ε ≠ η₀). Uniqueness requires an *additional* modular-rescaling-invariance axiom ε(λˢ) = ε(λ); as submitted, "canonical" means "a distinguished member of an infinite natural family." This *strengthens* the geometry-void verdict (every member is equally canonical and equally void). **Correction 2:** "spec Δ = [0,∞) for any type III state" holds only for III₁ (Connes S(M) = [0,∞) *characterizes* III₁); for III_λ the spectrum may be {0} ∪ λ^ℤ. The (∞,∞) Krein signature survives for all type III.

> **A1-F2 (universality / Δ_geo = 0 proven): KEEP — severity MINOR.** The Borchers→Mackey→homogeneous-Lebesgue chain and the two-sheet trivialization were re-derived in full and are valid (W = JJ₀ ∈ {x}′ with W(x)·conj(W(−x)) = 1; free choice on one sheet; {x = 0} null). Scope correction: the result substantially coincides with the **known** uniqueness of non-degenerate standard pairs (every standard pair is a multiple of the unique irreducible one — Longo–Witten line), extended by the trivial remark that any fixed ε(Δ) rides along. File as a repackaging with a new-to-the-wiki corollary, which makes it *more* reliable.

> **A1-F3 (trichotomy lemma): KEEP — severity MINOR.** Under the flagged ansatz the sesquilinear leg is complete (self-adjoint unitary Grams in {Δ}″ = sign functions of Δ). Two scope notes: (a) the signature-free prong is an *enumeration of known non-sesquilinear form types*, not a consequence of the ansatz — the residual is correctly flagged but should name this; (b) prong (iii) does not need J-oddness — J-even sign functions are also fundamental symmetries and are equally universal by the same trivialization, so the trichotomy strengthens once stated for all ε. Algebra-incompatibility replicated numerically; "generically" correctly tagged INFERENCE (finite-dim demonstration only).

> **A1-F4 (J carries reflection positivity — the g₃ trap is structural): KEEP — severity NONE.** Exact: aj(a)Ω ∈ P^♮, self-duality, done. The strongest single finding; the upgrade of the g₃ trap from symmetric-state inheritance to abstract cone positivity is correct and well-cited.

> **A1-F5 (direction-map: prior art runs Krein → modular only): KEEP — severity MINOR.** All four cited lines verified live and run in the claimed direction; the referee's own search for any published η-from-modular-data derivation also came up empty. Fix the author truncation (Devastato–**Farnsworth–Lizzi**–Martinetti); upgrade Jakóbczyk to record-verified.

> **A1-F6 (hedge hardening + target repair): KEEP — severity MINOR.** The repair of OP-46/CONCLUSION §8 is **mandatory**, not optional: HYP-CKV-VACUITY-R3's sentence "no such derivation exists or is sketched" is now literally false, and the faithful residual is the *algebra-compatible, localized (fiberwise) (n,n) pairing* — identified via prong (5c) with the carrier problem (HYP-FACTORIZATION-IS-GEOMETRY), the **fifth** independent route converging on the carrier/localization step. The MEDIUM → MEDIUM-HIGH hardening is accepted **conditional on the modular-constructibility ansatz** at both ends; HYP-ENCODING-SCREEN inherits with the same condition attached. Consistency with the house closures checked: no conflict with dS-cardinality (η₀ fixes no η = 1/4G), OP-48c (the algebra-incompatibility prong echoes, and does not contradict, the split/collar logic), OP-49, or the four-readout-family structure of HYP-CKV-VACUITY-R3 (the new trichotomy classifies *pairings*, the old one classifies *Lorentzian-datum entry points* — distinct, compatible instruments).

**Net.** The extraordinary-claim test was applied: the claimed positive answer to the literal compressed target is **genuine** (η₀ exists, is constructible from (M, Ω) alone, and passes every smuggle item including the two iteration-6 additions — the (n,n) axiom and the signature template are *derived*, not posited), and precisely because it is genuine and provably void, the track outcome **RESOLVED-NEGATIVE is upheld**: the verdict-flipper was executed, produced its object, and the object carries zero geometric information. Errors found are minor and corrective, and the principal one (non-uniqueness of η₀) points further in the negative direction. Headline (PARTIAL / encodes-not-generates / not-yet-physics) unchanged.
