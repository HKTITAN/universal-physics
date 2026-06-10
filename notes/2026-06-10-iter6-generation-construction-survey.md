# OP-46 attack, iteration 6: the generation hunt — causal fermion systems, signature-selection models, and the broadened smuggling list

**Status:** ATTEMPT executed — the designated verdict-flipper was hunted across five candidate pools, including the most serious candidate previously absent from this wiki (causal fermion systems). **The verdict does not flip.** Net new: (1) CFS is graded and closes at the same signature-installation step — relocated into its first axiom; (2) a genuinely new *selection-type* pattern is identified (Sung-Sik Lee's matrix model), forcing a precision repair of CONCLUSION §8 and an extension of the smuggling list; (3) process matrices and post-2024 Lorentzian NCG are foreclosed for OP-46 purposes; (4) no post-2024 weakening of Borchers–Wiesbrock exists.
**Last updated:** 2026-06-10
**Iteration:** 6

This note executes the iteration-6 attack on the single development CONCLUSION §8 names as verdict-flipping: *a construction that outputs a Lorentzian causal/metric structure from genuinely non-symmetric $(\\mathcal{A},\\omega)$ data, installing no fundamental symmetry, $\\eta$-form, foliation, or twist by hand.* The grading instrument is the iter-3 criterion ([2026-06-08-iter3-encode-vs-generate-criterion.md](2026-06-08-iter3-encode-vs-generate-criterion.md)): axes $\\Delta_{\\rm geo}$ (read as the referee-repaired three-valued flag) and $\\kappa_\\Phi$ (hand-posited local structure), smuggling checklist $g_1$–$g_5$ (+ $g_6$ positivity, $g_7$ cyclic-separating). The three closed readouts (stress-tensor-flux/Sorce-CKV; modular-Berry/zero-mode; Lorentzian-NCG $\\eta$/foliation/twist — see [2026-06-08-iter4-modular-circularity.md](2026-06-08-iter4-modular-circularity.md), [2026-06-08-iter5-op46-lorentzian-nonckv-readout.md](2026-06-08-iter5-op46-lorentzian-nonckv-readout.md)) are not relitigated.

> Scope honesty: everything below is a survey-and-grading exercise plus one elementary lemma derived and numerically checked in-session. No universal no-go is claimed. All citations were web-verified this session unless marked [unverified].

---

## 1. Candidate: causal fermion systems (Finster et al.) — the serious absentee

### 1.1 The framework, precisely

A **causal fermion system** is a triple $(\\mathcal{H},\\mathcal{F},\\rho)$: a separable complex Hilbert space $\\mathcal{H}$; the set
$$\\mathcal{F} \\;=\\; \\{\\,x \\text{ self-adjoint, finite rank on } \\mathcal{H}\\;:\\; x \\text{ has at most } n \\text{ positive and at most } n \\text{ negative eigenvalues}\\,\\}$$
for fixed *spin dimension* $n$; and a measure $\\rho$ on $\\mathcal{F}$. Spacetime is *defined* as $M := \\mathrm{supp}\\,\\rho$. The spin space at $x$ is $S_x := x(\\mathcal{H})$ with the **indefinite** spin scalar product $\\prec u|v\\succ_x = -\\langle u|x\\,v\\rangle_{\\mathcal{H}}$, of signature $(p,q)$, $p,q\\le n$. Causal relations are *defined* spectrally: for $x,y \\in M$ with nontrivial eigenvalues $\\lambda^{xy}_j$ of the operator product $xy$,
- **spacelike** if all $|\\lambda^{xy}_j|$ are equal;
- **timelike** if all $\\lambda^{xy}_j$ are real but not all of equal absolute value;
- **lightlike** otherwise (some $\\lambda^{xy}_j$ non-real).

Dynamics: minimize the causal action $\\mathcal{S}[\\rho]=\\iint_{\\mathcal{F}\\times\\mathcal{F}}\\mathcal{L}(x,y)\\,d\\rho(x)\\,d\\rho(y)$ under volume, trace and boundedness constraints. `[ESTABLISHED — program definitions; Finster 1709.04781; Finster–Kindermann–Treude 2411.06450]`

### 1.2 Where the Lorentzian datum enters (the load-bearing point)

**Lemma (this note; elementary, numerically checked).** If the elements of $\\mathcal{F}$ were positive semi-definite, then for any $x,y\\in\\mathcal{F}$,
$$\\mathrm{spec}(xy)\\setminus\\{0\\} \\;=\\; \\mathrm{spec}\\big(x^{1/2}\\,y\\,x^{1/2}\\big)\\setminus\\{0\\} \\;\\subset\\; \\mathbb{R}_{\\ge 0},$$
since $\\mathrm{spec}(AB)\\setminus\\{0\\}=\\mathrm{spec}(BA)\\setminus\\{0\\}$ and $x^{1/2}yx^{1/2}\\ge0$. Non-real eigenvalues — i.e. the **entire lightlike class, the null-cone structure that makes the output Lorentzian** — would be empty; the spectral \"causal structure\" would degenerate to a cone-free order. Hence the $(\\le n,\\le n)$ **indefiniteness axiom on $\\mathcal{F}$ is exactly the signature carrier.** (Numerics: 200/200 psd trials give real non-negative spectra; 183/200 random signature-$(2,2)$ trials give complex eigenvalues.) `[INFERENCE, high — lemma trivial and checked]`

In the concrete constructions the indefiniteness is inherited from the Dirac spin scalar product $\\overline{\\psi}\\phi = \\psi^\\dagger\\gamma^0\\phi$ of signature $(2,2)$ ($n=2$), whose fundamental symmetry is $\\gamma^0$ — **literally the Krein-space $\\eta$ of the Lorentzian spinor bundle**. So CFS does not escape the signature-installation step identified readout-independently in iteration 5; it *axiomatizes* it: the $\\eta$-form sits inside the definition of $\\mathcal{F}$ instead of inside a readout. A Riemannian spin manifold, whose natural spinor pairing is definite, would feed positive operators into the construction and produce no light cones — consistent with the lemma. `[INFERENCE, high]`

### 1.3 Encode direction vs generate direction

Every concrete causal fermion system exhibited is built the **encode** way: start from a given globally hyperbolic Lorentzian $(M,g)$, solve the Dirac equation on it, choose the **Dirac-sea** (negative-energy) subspace — a frequency split presupposing time orientation + energy positivity, a relocated $g_3{+}g_6$ input — regularize ($\\mathfrak{R}_\\varepsilon$), define local correlation operators $\\langle\\psi|F^\\varepsilon(p)\\,\\phi\\rangle = -\\prec(\\mathfrak{R}_\\varepsilon\\psi)(p)|(\\mathfrak{R}_\\varepsilon\\phi)(p)\\succ_p$, and push forward the volume measure. In the limit $\\varepsilon\\searrow0$ the induced structures *agree with the input spacetime* (connections reduce to metric connections and curvature on the input manifold, Thm. 3.4 of 1709.04781): $\\Delta_{\\rm geo}=0$ in the demonstrated direction. `[ESTABLISHED]`

The **generate** direction is programmatic: existence of causal-action minimizers is proven **only for finite-dimensional $\\mathcal{H}$**; the program's own introduction states *\"at present little is known on the set of all minimizing measures\"*; there is **no theorem** that a generic minimizer yields a Lorentzian manifold. The gravitational coupling in the continuum limit *\"depends on the regularization length\"* — the $\\eta=1/4G$-is-an-input pattern of [../HYPOTHESES.md](../HYPOTHESES.md) HYP-dS-CARDINALITY-R1 recurs. `[ESTABLISHED facts; INFERENCE on the pattern-match]`

Notably, no substantive published *external* critique of CFS exists — the assessment literature is the program's own reviews plus the 2025 Cambridge textbook; the program's 2026 self-comparison with NCG and trace dynamics (Finster–Farnsworth–Paganini–Singh, 2603.05018) states that what is recovered in the continuum limit is a fiber bundle, not bare spacetime. `[OPEN — absence noted after targeted search]`

### 1.4 Grading

$g_1$ F · $g_2$ F · $g_3$ **T in all worked examples** (Dirac sea) · $g_4$ F at axiom level, but the \"causal\" semantics of the spectral dichotomy is calibrated only against pre-given Minkowski causal order · $g_5$ F at axiom level ($M=\\mathrm{supp}\\,\\rho$ is output), **T in every worked example** · $g_6$ **T in constructions** (negative-energy frequency split) · **new item: the $(\\le n,\\le n)$/indefinite-pairing axiom = relocated $\\eta$** · $\\kappa_\\Phi = 0$ at framework level ($\\mathcal{F}$ is $U(\\mathcal{H})$-invariant — *better than Cao–Carroll on relabelling*; the smuggle is axiomatic, not symmetry-breaking) · $\\Delta_{\\rm geo}$: demonstrated $0$; claimed $>0$ without an existence/genericity theorem.

**Verdict: ENCODE as demonstrated; candidate-GENERATE as a program, unproven. Does not pass. CFS is a *fourth readout family* (operator-spectral-dichotomy readout) closing at the same signature-installation step.** `[INFERENCE, high]`

---

## 2. Candidate: Lorentzian / temporal spectral triples post-2024

Still **no Lorentzian analogue of Connes' reconstruction theorem**; its absence remains the stated reason the definition of a Lorentzian spectral triple is open. The active post-2024 line is Nieuviarts': *signature change by a morphism of spectral triples* (2402.05839, v6 March 2026 — a chosen morphism, rooted in the twist–Krein interplay, transforms a Riemannian twisted triple into a pseudo-Riemannian one; for even-dimensional manifolds the **parity operator induced by the twist** governs where the signature flips) and *emergence of Lorentz symmetry from an almost-commutative twisted spectral triple* (2502.18105). In both, the signature change is implemented by **hand-chosen data** (morphism/twist — a $g_4$-type time-orientation datum at the operator level), exactly as in the already-filed 2512.15450. **Verdict: ENCODE; GAP-NCG-LORENTZIAN-SIGNATURE stands, current as of 2026-06.** `[ESTABLISHED per construction; INFERENCE on the unifier]`

## 3. Candidate: process matrices / indefinite causal order / quantum causal models

The Oreshkov–Costa–Brukner framework assumes *\"only the validity of quantum mechanics locally\"*: each laboratory performs a standard quantum operation with a definite local input$\\to$output arrow — **a local causal/time orientation is an input at every node**; only the global order is relaxed (Nat. Commun. 3, 1092 (2012)). `[ESTABLISHED]` No version outputs a metric, dimension, or conformal factor ($\\Delta_{\\rm geo}=0$; output type is an order/process); the laboratory decomposition is a posited factorization (surrogate $g_5$). `[INFERENCE, high]` Decisively, **Vilasini–Renner** prove that realizations of indefinite-causal-order processes embedded in an acyclic spacetime *\"admit an explanation in terms of a definite and acyclic causal order process at a fine-grained level\"* (PRA 110, 022227 (2024); companion arXiv:2408.13387): the framework cannot even *sustain* non-classical causal order in spacetime, let alone generate causal order from non-causal primitives. Quantum causal models (Barrett–Lorenz–Oreshkov [unverified this session]) take a DAG of quantum nodes as primitive; Hardy's causaloid program [unverified this session] shares the operational-primitive structure. **Verdict: NEITHER.** `[ESTABLISHED no-gos; INFERENCE on the grading]`

## 4. Candidate: half-sided modular inclusions / modular positivity post-2024

Targeted search for any post-2024 weakening of the Borchers (1992)/Wiesbrock (1993) linkage — half-sidedness $\\Leftrightarrow$ positive-generator translation with $\\Delta^{it}U(a)\\Delta^{-it}=U(e^{-2\\pi t}a)$ — found **none**. The linkage is being consolidated, not weakened: Hollands–Longo's simplified QNEC proof (2503.04651, 2025) replaces Ceyhan–Faulkner's analytic continuation with a shape-derivative formula for relative entropy, entirely inside the modular framework. **Gate 1 of the iter-4 closure stands unmodified.** `[ESTABLISHED]`

## 5. New candidate (nearest miss): Sung-Sik Lee's matrix model — signature as a *selected* output

Lee (JHEP 06 (2020) 070; arXiv:1912.12291): microscopic d.o.f. = a real $M\\times L$ matrix (rows = flavours, columns = sites, $M\\gg L\\gg1$); *\"there is a priori no preferred frame\"* — local decompositions related by $SL(L,\\mathbb{R})$; momentum constraints from $SL(L,\\mathbb{R})$ generators, Hamiltonian constraints from $O(M)$-invariant bilinears, **verified by explicit computation** to close into a first-class algebra reducing to the **hypersurface deformation algebra** (HDA) classically; time is multi-fingered (Lagrange multipliers), not external. The signature parameter $\\mathcal{S}$ ($-1$ Lorentzian, $+1$ Euclidean) **sits in the constraint algebra and is selected dynamically by the entanglement pattern**: the saddle for a translation-invariant state with 3d local entanglement structure describes *\"(3+1)-dimensional de Sitter-like spacetimes with the Lorentzian signature bridged by Euclidean spaces\"*, with signature changes driven by Lifshitz-type entanglement rearrangements. `[ESTABLISHED that the paper exhibits this at saddle-point level; SPECULATIVE as physics]`

Grading: $g_1,g_2,g_4$ F · $g_3$ partial (only **symmetric** translation-invariant saddles demonstrated — clause (iii) untested) · $g_5$ surrogate T (fixed site cardinality + locality template; frame-equivariance genuinely better than Cao–Carroll) · **new smuggle category: the signature-valued deformation-algebra template** — the value space $\\{\\pm1\\}$ of $\\mathcal{S}$ is installed with the constraints, and demanding HDA-closure is quasi-equivalent to installing GR kinematics (Hojman–Kuchař–Teitelboim [unverified]) · $\\Delta_{\\rm geo}$ **positive for the signature datum** — the first surveyed construction where signature is neither axiomatized nor symmetry-inherited but *selected*.

**Verdict: PARTIAL (selection-type).** It fails the §8 spec — but it falsifies the literal sentence \"none exists **or has been sketched**.\" `[INFERENCE, high]`

A second, much weaker selection-type instance: Bermudez (2510.07891, Oct 2025, 3-page classical conceptual model) — metric signature as a dynamical field with a degenerate curvature potential; Lorentzian phase \"the only stable configuration supporting causal propagation\" (note the causal language in the selection criterion). All inputs geometric ($g_5$ T); **NEITHER** for OP-46. `[SPECULATIVE]`

---

## 6. Graded table

| Candidate | $\\Delta_{\\rm geo}$ (flag) | $\\kappa_\\Phi$ | $g_1$ | $g_2$ | $g_3$ | $g_4$ | $g_5$ | Verdict | Decisive citation |
|---|---|---|---|---|---|---|---|---|---|
| CFS, abstract framework | claimed $>0$, no theorem | $0$ ($U(\\mathcal{H})$-inv.) | F | F | — | F (defined, calibrated on encode) | F ($M{=}\\mathrm{supp}\\rho$) | candidate-GENERATE, unproven; **signature axiomatized** ($(n,n)$ = relocated $\\eta$) | 2411.06450 + §1.2 lemma |
| CFS, all worked examples | $0$ | $0$ | F | F | **T** (Dirac sea) | calib. | **T** ($(M,g)$ input) | **ENCODE** | 1709.04781 |
| Lorentzian NCG post-2024 (Nieuviarts) | $0$ (signature) | morphism chosen | F | F | F | **T** (twist/parity) | T | **ENCODE** | 2402.05839; 2502.18105 |
| Process matrices / QCM | $0$ (no metric) | lab split posited | F | F | — | **T (local arrows)** | surrogate T | **NEITHER** | 1105.4464; 2203.11245 |
| HSMI / modular post-2024 | — | — | relocated $g_1$ ($P\\ge0$) unchanged | | | | | closure stands | 2503.04651 (no weakening found) |
| Lee matrix model | **$>0$ for signature** | reduced (frame class) but carrier+template posited | F | F | partial (symm. ansatz) | F | surrogate T (sites) | **PARTIAL — selection-type** | 1912.12291 |
| Bermudez signature field | signature-only, inside installed geometry | n/a (not algebraic) | F | F | F | F | **T** (manifold+action) | **NEITHER** (selection-type) | 2510.07891 |

---

## 7. The broadened obstruction (proposed HYP-CKV-VACUITY-R3)

`[INFERENCE — survey-level]` Across the four readout families now on the table plus the new candidates, every Lorentzian-signature output traces to exactly one of **three forms**:

1. **Symmetry-distinguished state** — CKV / symmetric-vacuum inheritance (the iter-4/5 closures: Sorce gate; modular-Berry zero-mode gate).
2. **Indefinite-pairing axiom** — $\\eta$ / Krein / time-orientation / twist in NCG; **the $(\\le n,\\le n)$-eigenvalue axiom + indefinite spin scalar product in CFS** (new).
3. **Signature-valued template with dynamical selection** — the $\\mathcal{S}$-parametrized constraint algebra (Lee); the signature potential (Bermudez) (new pattern).

Forms (1)–(2) *install* the Lorentzian datum. Form (3) installs the **possibility space** $\\{\\text{Euclidean},\\text{Lorentzian}\\}$ and generates only the *choice* — what is dynamical is the selection, not the signature-bearing structure. Two consequences:

- **Smuggle-list extension.** The §8 / watch-list formula \"installing no fundamental symmetry, $\\eta$-form, foliation, or twist by hand\" should append: *\"...no indefinite-pairing/(n,n)-flag axiom, and no signature-valued parameter space / deformed-algebra template.\"*
- **Wording repair.** \"None exists or has been sketched\" → *\"No construction meeting the full spec exists; the nearest sketch (Lee, JHEP 06 (2020) 070) achieves state-dependent dynamical signature selection, but on a posited site-carrier, a hand-installed signature-parametrized constraint-algebra template, and only symmetric demonstrated saddles.\"*

**The compressed open target.** CFS shows the entire signature input can be compressed into a single linear-algebra axiom. The OP-46 residual therefore compresses to its minimal form: **can a canonical indefinite-pairing structure (a $(n,n)$ operator class, equivalently a Krein $\\eta$) be derived from $(\\mathcal{A},\\omega)$ modular data — e.g. from the modular conjugation $J$ — rather than posited?** No such derivation exists or is sketched. This refines iter-5 open subquestion #3. `[OPEN]`

## 8. Furthest defensible claim

`[INFERENCE — high on the per-candidate grading; medium that the trichotomy exhausts possible mechanisms]` After grading the strongest absent candidate (CFS) and the 2020–2026 emergent-signature literature: **no construction outputs Lorentzian causal/metric structure from genuinely non-symmetric $(\\mathcal{A},\\omega)$ data without installing the Lorentzian datum in one of the three forms above.** The encode-not-generate verdict and its readout-independence are *strengthened* (four readout families, one common closing step); the single hedge (a hypothetical readout installing none of the named structures) remains, now with a sharper named target (η-from-modular-data) and a sharper nearest-miss (selection-type models).

## 9. Open subquestions

1. Can the indefinite pairing be derived from modular data — is there a canonical map $(\\mathcal{A},\\omega)\\mapsto\\eta$ (e.g. via the modular conjugation $J$, which is antiunitary and involutive) that is *not* equivalent to positing a time orientation? `[OPEN — the compressed verdict-flipper]`\n2. In CFS: does any minimizer exist over infinite-dimensional $\\mathcal{H}$ without Dirac-sea input, and if so is its spectral causal structure Lorentzian-like (non-empty lightlike class) generically — or only on Dirac-sea-type configurations? `[OPEN]`\n3. In Lee's model: do *non-symmetric* (non-translation-invariant) states admit saddles, and does the selected signature then vary pointwise — i.e. can the model meet clause (iii) where the modular constructions cannot? `[OPEN]`\n4. Is the selection/installation distinction stable, or can a selection-type model's template itself be derived from non-geometric data (e.g. the HDA from an entanglement consistency condition), collapsing form (3) into a genuine generator? `[OPEN]`\n5. Does the Vilasini–Renner fine-graining argument extend to *any* operational framework, foreclosing causal-order generation operationally in the same way Sorce's CKV theorem forecloses it modularly? `[OPEN]`

## Proposed registry items

### HYP-CKV-VACUITY-R3 — (hypothesis-refinement)
**Statement.** The OP-46 obstruction extends from three to four readout families (adding the CFS operator-spectral-dichotomy readout, closing at the $(\\le n,\\le n)$/indefinite-pairing axiom — the relocated Krein $\\eta$), and the smuggle list extends by two named items: indefinite-pairing/(n,n)-flag axiom; signature-valued parameter space / deformed-algebra template. Lorentzian outputs in all known constructions are installation-type (symmetry-inherited or pairing-axiomatized) or selection-type (template-installed, choice-generated). Tag `[INFERENCE]` (survey-level).

### OP-46-CFS — (candidate-grading record)
**Statement.** CFS graded: ENCODE as demonstrated (Dirac-sea constructions on pre-given $(M,g)$; $\\Delta_{\\rm geo}=0$); candidate-GENERATE unproven (minimizer existence only finite-dim; no genericity theorem; own admission \"little is known on the set of all minimizing measures\"); $\\kappa_\\Phi=0$ at framework level — the smuggle is axiomatic, not symmetry-breaking. Tag `[INFERENCE]` on the verdict, `[ESTABLISHED]` on the framework facts.

### GAP-SELECTION-VS-INSTALLATION — (new gap)
**Statement.** Selection-type constructions (Lee 1912.12291; Bermudez 2510.07891) generate the signature *choice* but install the signature *possibility space* (deformed-HDA parameter $\\mathcal{S}$; signature potential). Whether the template itself can be derived from non-geometric data is the new sub-lever. Tag `[OPEN]`.

> **Binding note.** Where a correction in the referee verdict below conflicts with the body above, the **referee correction governs**; the body is the pre-referee submission, retained for the audit trail per house convention.

## Referee verdict

*Adversarial referee, track A2-generation-construction, iteration 6. All citations independently re-resolved this audit (abstract or full-text level); the session lemma was independently re-derived and re-run (numpy, fresh RNG: 0/200 psd trials complex, 160/200 indefinite-(2,2) trials complex). No fabricated or misattributed source found. No standard no-go (Weinberg–Witten, Coleman–Mandula/HLS, Haag, Bell/CHSH, PBR, Kochen–Specker, Reeh–Schlieder, singularity theorems, spin–statistics, unitarity/causality) bears adversely on any kept claim; Weinberg–Witten was explicitly checked against Lee's matrix model and is inapplicable (not a Lorentz-covariant QFT on a fixed background).*

> **R6-F1 (CFS installs the Lorentzian datum at the first axiom): KEEP — severity MINOR — tag `[INFERENCE, high]`.** Definitions verified verbatim against 1709.04781 full text and the CUP textbook listing 2411.06450 (F = (≤n,≤n)-eigenvalue operators; spacelike/timelike/lightlike spectral trichotomy; spin signature (p,q), p,q≤n). Lemma independently replicated by the referee. Corrections folded in: (1) "precisely the signature carrier" → "**necessary carrier**" — the lemma proves only that positivity empties the lightlike/null-cone class (timelike/spacelike relations survive); sufficiency of indefiniteness for Lorentzian output is not claimed. (2) The γ⁰-as-Krein-η identification stays `[INFERENCE]`. Accept as the **fourth readout family** (operator-spectral-dichotomy) in the OP-46 registry, closing at the same signature-installation step.

> **R6-F2 (CFS epistemic status — ENCODE as demonstrated, candidate-GENERATE as program): KEEP — severity MINOR — tag `[INFERENCE, high]`.** Program-website and Wikipedia quotes verified verbatim ("little is known on the set of all minimizing measures"; Dirac sea "turns out to be a good choice"; existence "provided that H is finite-dimensional"; κ "depends on the regularization length"); arXiv:2603.05018 real (fix author order: Farnsworth, Finster, Paganini, Singh). Corrections folded in: keep claim (d) scoped as negative-search `[OPEN]`; state existence as proven-finite-dimensional *for the causal action principle*; file κ-from-regularization as a **pattern-match** to HYP-dS-CARDINALITY-R1, not an identification. The g-grading (relocated $g_3+g_6$ in every worked example; $\kappa_\Phi=0$ at framework level) is consistent with the iter-3 instrument.

> **R6-F3 (Lorentzian NCG post-2024 — gap confirmed and current): KEEP — severity MINOR — tag `[ESTABLISHED]` (facts) / `[INFERENCE]` (unifier).** Both Nieuviarts papers verified (2402.05839 v6 2026-03-02 — "signature change … governed solely by the unitary operator that implements the twist"; 2502.18105 v3 2025-05-06). Correction folded in: "the only active post-2024 constructive line" → "the only post-2024 constructive line **surfaced by this session's search**" (Strohmaier / Franco–Eckstein / Besnard programs not audited item-by-item). Append both citations to GAP-NCG-LORENTZIAN-SIGNATURE-R2; no status change.

> **R6-F4 (process matrices: NEITHER — local arrows presupposed, ICO reduces under spacetime embedding): KEEP — severity MINOR — tag `[ESTABLISHED]` (OCB assumption, VR theorems) / `[INFERENCE]` (Δ_geo grading).** OCB abstract verbatim confirmed ("only the validity of quantum mechanics locally"); VR PRA 110, 022227 (2024) verbatim confirmed ("definite and acyclic causal order process, at a fine-grained level"); 2408.13387 abstract now directly fetched. Corrections folded in: (1) scope the no-gos to embeddings in a **definite acyclic background spacetime** with non-superluminal signaling — non-classical-metric scenarios outside scope; (2) quantum causal models take a *directed graph* (acyclic originally; cyclic extension 2021) as input, kept `[unverified]`. Closes the third OP-46 candidate pool.

> **R6-F5 (Lee 2020 — nearest miss, new selection-type pattern): KEEP (with mandatory fixes) — severity MINOR — tag `[INFERENCE]` on the grading; `[SPECULATIVE]` as physics.** Full text checked: matrix d.o.f., no-preferred-frame/$SL(L,\mathbb{R})$, $O(M)$ bilinears, first-class algebra → HDA, multi-fingered time, translation-invariant saddles with Lorentzian dS-like regions bridged by Euclidean ones — all confirmed. Corrections folded in: (1) **the claimed falsification of CONCLUSION §8 is rejected** — Lee's demonstrated saddles are *symmetric* (translation-invariant) states on a posited carrier + signature-parametrized template, so §8's antecedent ("from genuinely non-symmetric data, installing no … by hand") is unmet and "none exists or has been sketched" **stands under its own spec**; file instead a precision footnote: *"the nearest sketch (Lee, JHEP 06 (2020) 070) achieves dynamical signature selection, on a posited carrier + constraint-algebra template + symmetric ansatz."* (2) The $\mathcal{S}$ parameter lives in the **GR-side HDA target template**; the model's emergent signature is a derived saddle property — which sharpens the selection taxonomy. (3) HKT 1976 correctly carried as `[unverified this session]`. The selection-type category and the "signature-valued template" smuggle item are accepted as genuinely new to the wiki.

> **R6-F6 (Bermudez 2025 — second selection-type instance): KEEP — severity NONE — tag `[SPECULATIVE]`.** arXiv:2510.07891 verified (3 pages, single author, Oct 2025); abstract verbatim matches. Correctly graded NEITHER for OP-46 (wholly geometric inputs); the latent-circularity catch ("supports causal propagation" is causal language) is kept verbatim. One-paragraph corroborating entry only.

> **R6-F7 (modular theory post-2024 — positivity–translation linkage unweakened): KEEP — severity NONE — tag `[ESTABLISHED]` (paper) / `[OPEN-as-negative-search]` (the absence).** Hollands–Longo 2503.04651 verified (v2 2025-10-03; published Commun. Math. Phys. 2025 — may add journal ref); bypasses Ceyhan–Faulkner's continuation while staying inside the modular/relative-entropy framework. Gate 1 of the iter-4 closure stands unmodified; one-line update to GAP-LL-ENERGY-POSITIVITY-R2 approved.

> **R6-F8 (HYP-CKV-VACUITY-R3 — installation/selection trichotomy + compressed η-from-J target): KEEP — severity MINOR — tag `[INFERENCE]` (high as classification; MEDIUM-exhaustive hedge mandatory).** Component facts all individually audited; the compressed open target is verified as the minimal form of iter-5 open subquestion #3. Corrections folded in from F5: the §8 change enters as a precision footnote, not an error repair; Lee's symmetric saddles are noted under form (i) as well as (iii). Register HYP-CKV-VACUITY-R3 with the two new smuggle items — **(ii) indefinite-pairing/(n,n)-flag axiom** (the CFS form of η) and **(iii) signature-valued parameter space / deformed-algebra template** (the Lee/Bermudez form) — and the η-from-$J$ question as the canonical OP-46 residual.

**Net.** Headline verdict (PARTIAL / encodes-not-generates / not-yet-physics) **does not flip**. HYP-CKV-VACUITY's readout-independence now spans **four** readout families; its MEDIUM hedge stands, marginally strengthened (the designated most-serious absent candidate installs rather than generates). CONCLUSION §8 stands as written, gaining a nearest-miss precision footnote. Hedge 2 (OP-48c horn C) untouched.
