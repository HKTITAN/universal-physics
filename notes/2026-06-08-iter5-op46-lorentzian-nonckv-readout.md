---
title: "OP-46: emergent LORENTZIAN geometry from a non-CKV modular flow? (the verdict-flipping move)"
type: note
tags: [note, iter5, modular-flow, lorentzian-geometry]
updated: 2026-06-08
---

# OP-46: emergent LORENTZIAN geometry from a non-CKV modular flow? (the verdict-flipping move)

Status: ATTEMPT executed — the single move that could flip OP-46 clause (iii) (derive an emergent *Lorentzian* metric + boost/horizon from a genuinely non-symmetric modular flow via the two named escape readouts: modular-Berry holonomy, and Lorentzian/causal NCG spectral distance) is carried out. Verdict DOES NOT FLIP, but the obstruction is promoted from a single-readout near-no-go (iter-4) toward a **readout-independent** one: the Lorentzian-signature + causal-order output is *re-imported, not generated* on every readout currently on the table. Net new: the modular-Berry route IS the first surveyed construction to cross the N4 signature barrier (genuinely Lorentzian kinematic space) — but only from the symmetric vacuum, so it CONFIRMS rather than refutes the iter-4 finding.
Last updated: 2026-06-08
Iteration: 5

This note executes the iteration-4 open subquestion #1 of [2026-06-08-iter4-modular-circularity.md](2026-06-08-iter4-modular-circularity.md) ("is there a **non-CKV readout** — modular Berry curvature / quantum information metric, or a **Lorentzian** Connes spectral distance — under which a genuinely non-symmetric state's modular data yields a Lorentzian metric, escaping the Sorce gate?"). Iter-4 closed the standard stress-tensor-flux readout *conditionally*; iter-5 attacks the two readouts that iter-4 explicitly left as the live escape, confronting **GAP-NCG-LORENTZIAN-SIGNATURE** head-on.

> Scope honesty (folded from the four referee verdicts on this track). The strengthened claim below is **not** a proved universal no-go. Exactly one readout (stress-tensor flux, via the Sorce CKV theorem) carries a *conditional* near-no-go; the modular-Berry and Lorentzian-NCG readouts deliver an **empirical-survey saturation** ("every surveyed construction re-imports signature / causal order"), and the Lorentzian-NCG case is explicitly **OPEN, not forbidden** (no Lorentzian reconstruction theorem exists). The aggregate is best stated as *saturation across all three readouts on the table*, tagged `[INFERENCE]`, not an in-principle no-go on each. Underlying facts are web-verified; the unification step is supplied here.

---

## Goal

Attempt the single move that would flip OP-46's headline verdict on clause (iii): derive an emergent **Lorentzian** (not merely Riemannian) metric *plus* a boost/Killing + horizon structure as the genuine **OUTPUT** of an $(\mathcal{A},\omega)$ pair whose modular flow is genuinely **non-symmetric** (non-Bunch–Davies, non-Hadamard, non-conformal-Killing), using either (b) modular-Berry holonomy / the information metric, or (a/c) a Lorentzian / causal Connes spectral distance. `[goal]`

Concretely:
1. Test whether the modular-Berry curvature $F$ defines a metric, and whether its **signature is Lorentzian** as output — or whether the Lorentzian content is inherited from a symmetry-distinguished state. `[goal]`
2. Test whether a Lorentzian/causal spectral triple delivers Lorentzian signature + causal order as **output**, or installs it by hand (fundamental symmetry $\eta$ / time-orientation form / foliation / twist). `[goal]`
3. Decide whether the iter-4 single-readout near-no-go upgrades to a **readout-independent** one, and name precisely what remains live. `[goal]`

---

## Setup (real math)

Standard algebraic data $\mathcal{D} = (\mathcal{A}, \Omega)$: a von Neumann algebra with cyclic-separating vector $\Omega$, Tomita operator $S = J\Delta^{1/2}$, modular Hamiltonian $K = -\log\Delta$, and modular flow
$$
\sigma_t(a) = \Delta^{it}\, a\, \Delta^{-it},
$$
a KMS automorphism group at $\beta = 1$ w.r.t. $\omega = \langle\Omega,\,\cdot\,\Omega\rangle$. `[ESTABLISHED]` (Tomita–Takesaki; [../domains/mathematics.md](../domains/mathematics.md).)

**Iter-4 closure (the gate this note tries to bypass).** Under the standard stress-tensor-flux readout
$$
K \;=\; 2\pi \int_\Sigma \xi^\mu\, T_{\mu\nu}\, d\Sigma^\nu,
$$
the **Sorce CKV gate** (arXiv:2403.18937) forces $\xi$ to be a future-directed conformal Killing vector,
$$
\nabla_\mu \xi_\nu + \nabla_\nu \xi_\mu \;=\; \frac{2}{d}\,(\nabla\!\cdot\!\xi)\, g_{\mu\nu},
\qquad \xi^2 < 0 ,
$$
so a non-symmetric (non-CKV) state has **no target** for the boost/horizon readout. `[ESTABLISHED lemma]` (See [2026-06-08-iter4-modular-circularity.md](2026-06-08-iter4-modular-circularity.md).)

### (b) The modular-Berry readout

Over a family of states/regions, the **zero modes** of $K$ (its centralizer block) define a connection by projecting the variation of $K$ onto the zero-mode block,
$$
\Gamma_{\rm Berry} \;=\; P_0\,(\delta K)\,P_0,
\qquad
F \;=\; \delta\Gamma_{\rm Berry} + \Gamma_{\rm Berry}\wedge\Gamma_{\rm Berry},
$$
where $P_0$ is the projector onto the zero-mode block. The test: does the curvature $F$ define a metric, and is its **signature Lorentzian**? `[setup]` The connection is canonical **only once $P_0$ is fixed** — and that is the load-bearing step.

### (a/c) The Lorentzian / causal spectral-triple readout

A candidate spectral triple $(\mathcal{A}, \mathcal{H}, D)$ with a **Krein-space** inner product fixed by a fundamental symmetry $\eta = \eta^*$, $\eta^2 = \mathbb{1}$, and a $\{\eta, D\}$-structure; the Connes spectral distance is
$$
d(\phi, \psi) \;=\; \sup\big\{\, |\phi(a) - \psi(a)| \;:\; \|[D, a]\| \le 1 \,\big\}.
$$
The test: is the Lorentzian signature and causal order an **OUTPUT**, or installed by $\eta$ / a time-orientation form / a foliation / a twist automorphism? `[setup]`

---

## The attempt

### Route (b) — modular-Berry holonomy

The connection $\Gamma_{\rm Berry}$ is canonically defined only once the zero-mode projector $P_0$ of $K$ is fixed. Web-verified:

- **Czech–Lamprou–McCandlish–Sully** (PRL 120, 091601 (2018), arXiv:1712.07123) single out a *unique* modular Berry connection in the **vacuum of a 2d CFT** using **global conformal symmetry** — a uniqueness-given-symmetry statement: conformal symmetry supplies the gauge-fixing of the zero-mode block. `[ESTABLISHED]`
- **Czech–de Boer–Ge–Lamprou** (arXiv:1903.04493, JHEP 11 (2019) 094) sew HRRT-surface frames with this connection at leading order in $1/N$. `[ESTABLISHED]`
- **Huang–Ma** ("Berry Curvature and Riemann Curvature in Kinematic Space with Spherical Entangling Surface," arXiv:2003.12252; Fortschr. Phys. 2021) obtain a genuinely **Lorentzian** kinematic-space metric whose Riemann tensor equals the modular Berry curvature — built from the **geometric CHM modular Hamiltonians of ball regions in the vacuum**. `[ESTABLISHED]`

So the Berry route **DOES cross the signature barrier (N4)**: kinematic space is Lorentzian — but only because $P_0$ and the canonical connection are singled out **by the conformal symmetry of the symmetric vacuum**. Feeding a non-symmetric $\omega$ breaks at the zero-mode step: without a symmetry group the zero-mode block of $K$ has no canonical complement, $\Gamma_{\rm Berry}$ is gauge-ambiguous, and no canonical curvature/metric exists. `[INFERENCE, high]`

> Citation precision (referee NI2). The Lorentzian/de Sitter signature of kinematic space is the **ESTABLISHED 2015 result of Czech–Lamprou–McCandlish–Sully, "Integral Geometry and Holography," arXiv:1505.05515** (the dS$_2$ kinematic space of the static AdS$_3$ slice, metric built from conditional mutual information of the CFT *vacuum*). Huang–Ma's contribution is *matching* the modular Berry curvature to the Riemann tensor for spherical entangling surfaces; they **inherit** the Lorentzian structure, they do not originate it. Attribute the dS signature to 1505.05515. `[corrected]`

> Structural precision (referees on the claim and NI0). Huang–Ma kinematic space is dS$_2$ only for $d \ge 2$ (spherical surfaces); for CFT$_1$ (a pair of timelike-separated points) it is **AdS$_2$**, with the relative sign flagged as an overall-sign ambiguity. So "the Lorentzian (dS) kinematic metric" is loose shorthand for "dS$_2$ ($d\ge2$) / AdS$_2$ (CFT$_1$, up to overall sign)." Moreover Huang–Ma **start from a Lorentzian manifold by fiat**, so the signature is *doubly* imported (Lorentzian input + CHM symmetry); this strengthens the inheritance argument. `[corrected]`

### Route (a/c) — Lorentzian / causal spectral triple

- **Connes' reconstruction** (arXiv:0810.2088; J. Noncommut. Geom. 7 (2013) 1–82) is provably **Euclidean**: a commutative spectral triple satisfying the five axioms reconstructs a closed oriented **Riemannian** (spin$^c$) manifold — "the metric to be Riemannian." `[ESTABLISHED]`
- Web-verified: there is **NO Lorentzian analogue** of the reconstruction theorem — and this absence is the stated reason the very *definition* of a Lorentzian spectral triple is still open. The NCG route lacks even a candidate map "spectral data $\to$ Lorentzian manifold." `[ESTABLISHED]`
- Every construction that *recovers* a Lorentzian metric **installs the signature by hand**. Krein spectral triples require a fundamental symmetry $\eta$ and a time-orientation form. **van den Dungen** (arXiv:1711.07299) builds the Lorentzian triple as the "reverse Wick rotation of a product spectral triple," taking a **foliation by spacelike hypersurfaces as INPUT** (cf. also arXiv:1505.01939). The newest entry (**Nieuviarts**, arXiv:2512.15450, Dec 2025) derives "time emergence" only from a **chosen twist automorphism** $\rho$ built from an a-priori spacelike reflection $r$ ($\rho(c(v)) = c(rv)$), local-only and explicitly "rather than a full Lorentzian space-time with global causal structure." `[ESTABLISHED]`

So the Lorentzian signature is **never an output** of the NCG readout: it enters as **externally chosen data not recovered from the spectral/operator data alone** — $\eta$ / Krein structure / time-orientation form / foliation / twist. `[INFERENCE on the unifier; ESTABLISHED per construction]`

> Precision (referee NI1). The iter-internal phrasing "each required to **commute with the algebra**" is not uniformly accurate: $\eta$ structures the Krein space (it need not literally commute with $\mathcal{A}$), the foliation is a geometric splitting, and the twist in 2512.15450 acts **trivially** on the coordinate algebra. The accurate unifier is "**external chosen data not recovered from the spectral/operator data alone**." `[corrected]`

---

## Where it breaks / what moved

**didItMove = sharpened-obstruction.**

Both escape readouts break at **structurally analogous re-import points** — the signature-installation step — though (per referees on the claim and NI0) these are an **analogy, not a single literal step**:

- **(b) breaks at connection-canonicity.** The zero-mode block of a genuinely non-symmetric $K$ has no canonical complement; without a symmetry-supplied $P_0$, $\Gamma_{\rm Berry}$ is gauge-ambiguous and the Lorentzian kinematic-space metric of Huang–Ma evaporates. Its Lorentzian signature was inherited from symmetric-vacuum CHM data (i.e. from $g_3$, the symmetric vacuum) and from a Lorentzian input manifold — not generated. `[INFERENCE]`
- **(a/c) breaks at the signature axiom.** Lorentzian signature is installed as external data ($\eta$ / Krein / time-orientation form / foliation / twist) — a $g_4$-type causal-order input re-imported at the operator level. This is the spectral-triple **mirror of the Sorce CKV gate**: the readout that delivers Lorentzian signature presupposes exactly the causal/time structure it was meant to generate. The absence of any Lorentzian reconstruction theorem means there is not even a candidate map that does not start from a foliation or $\eta$. `[INFERENCE on the mirror; ESTABLISHED on the no-reconstruction fact]`

**Net.** The obstruction is now established to be **readout-independent across the three surveyed readouts**: it closes on the same signature-installation pattern under (i) stress-tensor flux (Sorce CKV gate), (ii) modular-Berry holonomy (zero-mode/symmetry gate), and (iii) Lorentzian/causal NCG (fundamental-symmetry $\eta$ / no-Lorentzian-reconstruction gate). `[INFERENCE — survey saturation, not a universal theorem]`

> What genuinely MOVED over iter-4 (referee on the claim). Iter-4 listed the modular-Berry route as a *live* Sorce-gate bypass. This note **closes it**: the Lorentzian signature there is symmetry-inherited, so the bypass is illusory for non-symmetric states. That is the new contribution. The single live escape — a genuinely non-symmetric $\omega$ whose non-CKV (Berry or Lorentzian-spectral-distance) data yields a genuinely Lorentzian (not Riemannian, not symmetry-inherited) metric — remains **OPEN and unrealized**.

---

## Furthest defensible claim

`[INFERENCE — high on the survey classification; medium that it is a true no-go rather than readout-relative saturation]`

Across the three surveyed readouts that could turn modular/algebraic data into emergent Lorentzian-signature, causally-ordered geometry — **(a)** stress-tensor flux of a vector field (Sorce CKV gate, arXiv:2403.18937), **(b)** modular-Berry holonomy on kinematic space (Czech et al. 1712.07123; 1505.05515; Huang–Ma 2003.12252), and **(c)** Lorentzian/causal NCG (Krein / time-orientation form / twist; no Lorentzian analogue of Connes' reconstruction theorem, 0810.2088) — the **Lorentzian-signature + causal-order output is, in every surveyed construction, RE-IMPORTED from a symmetry or causal-order input, not GENERATED from non-symmetric data**.

Specifically: (a) any geometric modular flow is a CKV, which exists only on a (conformally) symmetric background; (b) the modular Berry connection is canonical only via a symmetry-supplied zero-mode projector $P_0$, and the Lorentzian kinematic metric (dS$_2$ for $d\ge2$; AdS$_2$ for CFT$_1$, up to overall sign) is inherited from a Lorentzian input manifold plus symmetric-vacuum CHM data, evaporating for non-symmetric $\omega$; (c) Lorentzian signature in NCG is never an output but external chosen data ($\eta$ / Krein / time-orientation / foliation / twist), with no candidate map "spectral data $\to$ Lorentzian manifold." The three break-points are **structurally analogous** (each re-imports the symmetry/causal structure it was meant to generate), though **not literally the same step**.

Consequence: **no known $(\mathcal{A},\omega)$ pair with genuinely non-symmetric modular flow outputs emergent Lorentzian geometry**; HYP-CKV-VACUITY thus extends to an **empirical saturation across all three readouts on the table** — a readout-conditional near-no-go (Sorce/$T$-flux) plus an absence-of-theorem (Lorentzian NCG) — **NOT an in-principle no-go on each**. This CONFIRMS and does **not** flip the headline ENCODE-not-GENERATE / PARTIAL verdict.

Scope, stated explicitly: "no-go on every readout" is downgraded (per all four referees) to "saturated obstruction across all three currently-known readouts; no counter-readout known." The genuine no-go is only "no Lorentzian reconstruction theorem exists" — an absence-of-theorem, not a forbiddenness. Confidence: **HIGH** that no current construction generates Lorentzian geometry from non-symmetric modular data; **MEDIUM** that this is a true no-go rather than a limitation of all currently-known readouts.

---

## If it fails / weaker statement

- **If a proponent rejects this as readout-dependent:** the live target is now sharply unique — exhibit a readout that installs **NO** fundamental symmetry / Krein structure / foliation / twist (since each is a re-imported causal input) **AND** a genuinely non-symmetric state whose data outputs Lorentzian signature. No such readout is known: the modular-Berry route needs a symmetry to fix zero modes, and NCG provably has no Lorentzian reconstruction theorem. `[OPEN — the genuinely live target]`
- **Weaker claim that still holds with high confidence:** every existing construction either outputs only a **Riemannian** metric (Connes 0810.2088; Cao–Carroll) or, where it outputs a **Lorentzian** one (Huang–Ma kinematic space; van den Dungen; Nieuviarts 2512.15450), **installs the signature/time-direction by a hand-chosen structure** not recovered from the operator data. `[INFERENCE]`
- **Hardness, not forbiddenness:** Lorentzian emergence from non-symmetric data is **unsolved-but-not-forbidden** — a hardness result, not a theorem. The decisive recent test is 2512.15450: it begins from a Riemannian triple and generates signature only locally via a freely-chosen twist, **confirming** the obstruction rather than refuting it. `[OPEN]`

---

## Proposed registry items (with referee verdicts)

### HYP-CKV-VACUITY-R2 — (hypothesis-refinement)

**Statement.** Refinement of HYP-CKV-VACUITY (iter-4). The clause-(iii) obstruction is **readout-independent across the three currently-known Lorentzian readouts**, each installing Lorentzian signature by re-importing a causal/time-orientation datum rather than generating it from non-symmetric data. (i) Stress-tensor flux: Sorce CKV gate (arXiv:2403.18937). (ii) Modular-Berry holonomy: the connection is canonical only via a zero-mode/centralizer projector tied to the state's symmetry; the Lorentzian kinematic-space metric (dS$_2$ for $d\ge2$; AdS$_2$ for CFT$_1$, up to overall sign) is inherited from a Lorentzian input manifold + symmetric-vacuum CHM data (Czech et al. 1712.07123; 1505.05515; Huang–Ma 2003.12252), so its Lorentzian signature is inherited, not generated; a non-symmetric state leaves the connection gauge-ambiguous. (iii) Lorentzian/causal NCG: Connes reconstruction is provably Riemannian (0810.2088), there is NO Lorentzian reconstruction theorem, and every Lorentzian construction installs signature via external chosen data — $\eta$ / Krein / time-orientation form / foliation (van den Dungen 1711.07299, 1505.01939) / twist (Nieuviarts 2512.15450). Therefore HYP-CKV-VACUITY is best stated as a **saturated obstruction**, not a proved universal no-go.

**Referee verdict: KEEP — severity MINOR — tag `[INFERENCE]` (high on the survey classification; medium it is a true no-go vs. readout-relative saturation).** Corrections folded in: (1) downgrade "no-go on every readout currently known" to "saturated obstruction across all three currently-known readouts; no counter-readout known." (2) "READOUT-INDEPENDENT: closes on the SAME structural step" is interpretive — the three readouts install signature via *different* mechanisms (CKV gate; zero-mode projector + Lorentzian CHM input; Krein $\eta$/twist/time-orientation); the unification is a common-pattern `[INFERENCE]`, not one shared lemma. (3) dS label fixed to "dS$_2$ ($d\ge2$) / AdS$_2$ (CFT$_1$, up to overall sign)"; Huang–Ma also assumes a Lorentzian manifold by fiat (signature doubly imported). (4) Promote 2512.15450 to an explicit confirming test: it installs signature via a chosen twist (parity operator, $\eta$ of signature $(s, 2-s)$), local-only with "no global causal structure" — exactly the $g_4$-type input named. All six arXiv citations web-verified, correctly attributed; does NOT flip the headline verdict.

### GAP-NCG-LORENTZIAN-SIGNATURE-R2 — (gap-refinement)

**Statement.** Refinement of GAP-NCG-LORENTZIAN-SIGNATURE (iter-4). The Lorentzian/causal NCG readout cannot generate metric signature from spectral data alone; it presupposes it. Two web-verified supports: **(1)** there is no Lorentzian analogue of Connes' reconstruction theorem, and its absence is the standard stated reason the very definition of a Lorentzian spectral triple remains open — so the NCG route lacks even a candidate map "spectral data $\to$ Lorentzian manifold." **(2)** In all surveyed constructions the signature enters through **external chosen data not recovered from the operator/spectral data** — a fundamental symmetry / Krein structure, a time-orientation form and spacelike foliation (van den Dungen 1711.07299, reverse Wick rotation of a product triple; 1505.01939), or a freely-chosen twist/morphism (Nieuviarts 2512.15450, which starts from a Riemannian triple and whose signature-generating morphism is parametrized by a free choice). Status: **OPEN (unsolved-but-consistent), not forbidden.**

**Referee verdict: KEEP — severity MINOR — tag `[ESTABLISHED]` for the Euclidean-output and no-Lorentzian-reconstruction facts; `[INFERENCE]` (survey-level) for the "every construction installs by external data" generalization.** Corrections folded in: (1) **drop the uniform "each required to commute with the algebra"** — $\eta$ structures the Krein space and need not commute with $\mathcal{A}$; the twist in 2512.15450 acts *trivially* on the coordinate algebra; the accurate unifier is "external chosen data not recovered from the spectral/operator data alone." (2) "every existing Lorentzian/causal spectral triple installs signature via [list]" is a survey-level `[INFERENCE]` over a literature with several distinct proposals (Strohmaier pseudo-Riemannian; Paschke–Rennie–van den Dungen; Franco–Eckstein causal; Bognár/Krein; temporal Lorentzian, arXiv:1210.6575) — defensible but not verified construction-by-construction, so weaker form: "all surveyed constructions install signature via externally chosen data." Both cited arXiv IDs verified; does NOT flip the headline verdict.

### HYP-BERRY-LORENTZIAN-ONLY-FROM-SYMMETRY — (new-hypothesis)

**Statement.** Among surveyed routes, the modular-Berry / kinematic-space construction is the one exhibiting a Lorentzian (de Sitter) emergent metric, thereby crossing the N4 signature barrier that the Riemannian Cao–Carroll and Connes routes fail — but this signature is an **ESTABLISHED feature of the kinematic-space program** (Czech–Lamprou–McCandlish–Sully, arXiv:1505.05515, 2015), where the dS$_2$ metric is built from conditional mutual information of the CFT vacuum; Huang–Ma (arXiv:2003.12252) *extends* the Berry-curvature/Riemann-curvature match to spherical entangling surfaces rather than originating the signature. In the 2d CFT vacuum, global conformal symmetry singles out a unique modular Berry connection (arXiv:1712.07123), so the canonical gauge-fixed connection is fixed by the vacuum's symmetry. Hence in the surveyed cases the Lorentzian signature is an imprint of the symmetric vacuum ($g_3$), not a generation from non-symmetric data; the route does **not** cross the N4 barrier from non-symmetric input and does **not** meet clause (iii). **Conjecture (weakened to a conditional):** in every surveyed construction the Lorentzian/dS output and the uniquely gauge-fixed connection coincide with a symmetry-distinguished state; whether a modular Berry curvature can be canonically fixed on genuinely non-symmetric data while still yielding Lorentzian signature is OPEN.

**Referee verdict: KEEP (with mandatory fixes) — severity MINOR — tag `[SPECULATIVE]` for the conjecture; `[INFERENCE]` for the well-supported survey core.** Corrections folded in (referee NI2, `isSound: false` on the original): (1) **CITATION MISATTRIBUTION fixed** — the Lorentzian/dS signature of kinematic space is **NOT** Huang–Ma's; it is the 2015 result of **Czech–Lamprou–McCandlish–Sully, arXiv:1505.05515** ("Integral Geometry and Holography"). Huang–Ma inherit it. (2) **Modal overclaim weakened** — 1712.07123 establishes only "global conformal symmetry singles out a *unique* modular Berry connection" (uniqueness-given-symmetry in the 2d vacuum), **not** that canonical zero-mode gauge-fixing in general *requires* a symmetry-distinguished state; the universal "necessarily" is unproven and may fail for general-state modular-transport constructions (entanglement holonomies arXiv:1807.04276; Virasoro entanglement Berry phases, JHEP 03 (2022) 179). So the conjecture is stated as a conditional, tag `[SPECULATIVE]`. (3) Note: this route does NOT re-import a metric/foliation (so it escapes the *literal* anti-circularity clause); it re-imports the symmetric **state** that fixes the connection — a subtler but equally fatal dependence for clause (iii). The non-flip conclusion is correct and is the valuable content.

---

## Verdict

**DOES NOT FLIP the headline verdict; sharpens the obstruction and promotes it toward a readout-independent no-go.** The verdict remains: the modular / crossed-product program (and its NCG cousin) **ENCODES** geometry, it does not **GENERATE** it.

New for iteration 5:

1. **The signature barrier (N4) is NOT absolute.** The modular-Berry / kinematic-space route DOES output a genuinely **Lorentzian** (de Sitter) metric — the first surveyed construction to do so (signature established by Czech–Lamprou–McCandlish–Sully 1505.05515; Berry-curvature match by Huang–Ma 2003.12252), where the Riemannian Cao–Carroll and Connes routes both fail. `[ESTABLISHED that the output is Lorentzian]`
2. **But it achieves this only on the symmetric CFT vacuum** with geometric CHM modular flow, where the canonical Berry connection is singled out by conformal symmetry (1712.07123) — and from a Lorentzian input manifold by fiat. So it **confirms, not refutes**, "geometry only where a conformal/Killing symmetry is pre-installed." `[INFERENCE, high]`
3. **The Lorentzian-NCG escape is closed harder than in iter-4:** Connes reconstruction is provably Riemannian (0810.2088), there is NO Lorentzian reconstruction theorem (the stated reason the Lorentzian-spectral-triple definition is open), and every Lorentzian construction installs the signature via external chosen data — $\eta$ / time-orientation form / foliation / twist (van den Dungen 1711.07299; Nieuviarts 2512.15450) — the NCG mirror of the Sorce CKV gate. `[ESTABLISHED facts; INFERENCE on the mirror]`

Net: HYP-CKV-VACUITY is now effectively a saturated obstruction across **both** the standard **and both** the NCG/Berry readouts; clause (iii) is unmet on every readout currently known. It remains formally **open (not a theorem)** for a hypothetical readout installing no fundamental symmetry / foliation / twist — none exists.

**Program A status** ([2026-06-08-algebraic-background-independence.md](2026-06-08-algebraic-background-independence.md)): unchanged — a rigorous reorganization that ENCODES geometry. The single live escape is a genuinely non-symmetric $\omega$ whose non-CKV (Berry or Lorentzian-spectral-distance) data yields a genuinely Lorentzian, non-symmetry-inherited metric — currently unrealized.

Confidence: **HIGH** that no current construction generates Lorentzian geometry from non-symmetric modular data; **MEDIUM** that this is a true no-go rather than a limitation of all currently-known readouts. This is the Lorentzian-signature counterpart of the iter-4 modular-circularity finding ([2026-06-08-iter4-modular-circularity.md](2026-06-08-iter4-modular-circularity.md)) and the iter-4 dS finding ([2026-06-08-iter4-dS-firstlaw-SO-family-attempt.md](2026-06-08-iter4-dS-firstlaw-SO-family-attempt.md)).

---

## Open subquestions

1. Is there a modular-Berry curvature definable **WITHOUT** a symmetry-supplied zero-mode projector (e.g. via modular chaos / scrambling-mode data, arXiv:1912.02810; or general-state modular transport, arXiv:1807.04276), and if so is its signature Lorentzian for a non-symmetric state? `[OPEN]`
2. Can one prove the conjecture that any canonically gauge-fixed modular Berry connection presupposes a symmetry-distinguished state (HYP-BERRY-LORENTZIAN-ONLY-FROM-SYMMETRY), turning the Berry-route closure into a theorem? `[OPEN]`
3. Does any Lorentzian/causal spectral-triple framework install its fundamental symmetry $\eta$ / time-orientation form as an **OUTPUT** of the algebra-state pair rather than by hand — i.e. can $\eta$ be derived from modular data (e.g. from the modular conjugation $J$ or a modular involution) rather than posited? `[OPEN]`
4. Could a Lorentzian reconstruction theorem ever exist that takes **NO** foliation as input, or is a globally-hyperbolic foliation provably necessary (an analogue of $g_4$) for any "spectral-data $\to$ Lorentzian-manifold" map? `[OPEN]`
5. Is the de Sitter (Lorentzian) signature of kinematic space (1505.05515; Huang–Ma) traceable purely to the conformal group $SO(d,2)$ of the vacuum, so that it vanishes identically once the state breaks conformal symmetry? `[OPEN]`

---

## See also

- [2026-06-08-iter4-modular-circularity.md](2026-06-08-iter4-modular-circularity.md) — iteration-4 parent; the Sorce CKV gate, the conditional single-readout near-no-go, and open subquestion #1 (the non-CKV readout) that this note executes.
- [2026-06-08-iter4-dS-firstlaw-SO-family-attempt.md](2026-06-08-iter4-dS-firstlaw-SO-family-attempt.md) — sibling iteration-4 attempt; "geometric flow only where a conformal/Killing symmetry is pre-installed," dS dress.
- [2026-06-08-iter3-encode-vs-generate-criterion.md](2026-06-08-iter3-encode-vs-generate-criterion.md) — OP-46 criterion, clause (iii), N4 signature barrier; the six-construction classification.
- [2026-06-08-algebraic-background-independence.md](2026-06-08-algebraic-background-independence.md) — Program A; "rigorous reorganization, not derivation."
- [2026-06-08-iter4-synthesis.md](2026-06-08-iter4-synthesis.md) — iteration-4 cross-program synthesis; encode-vs-generate meta-verdict.
- [../OPEN_PROBLEMS.md](../OPEN_PROBLEMS.md) — OP-46 (this track); clause (iii) status update.
- [../GAPS_AND_CONTRADICTIONS.md](../GAPS_AND_CONTRADICTIONS.md) — GAP-NCG-LORENTZIAN-SIGNATURE and -R2 (here).
- [../HYPOTHESES.md](../HYPOTHESES.md) — H4 (geometry/time from algebra); HYP-CKV-VACUITY-R2 and HYP-BERRY-LORENTZIAN-ONLY-FROM-SYMMETRY proposed here.
- [../domains/mathematics.md](../domains/mathematics.md) — Tomita–Takesaki, Connes reconstruction, spectral triples, Krein-space / Lorentzian NCG.
- [../domains/quantum-field-theory.md](../domains/quantum-field-theory.md) — CHM modular Hamiltonian, kinematic space, modular Berry connection.
- [../domains/general-relativity.md](../domains/general-relativity.md) — conformal Killing vectors, Lorentzian signature, causal order $\to [g]$, horizons.
- [../EPISTEMICS.md](../EPISTEMICS.md) — epistemic tag definitions used throughout.

### Key results cited

- **Connes**, "On the spectral characterization of manifolds," arXiv:0810.2088 (2008); J. Noncommut. Geom. 7 (2013) 1–82 — commutative spectral triple $\Rightarrow$ closed oriented **Riemannian** (spin$^c$) manifold; "the metric to be Riemannian." `[VERIFIED — web-confirmed]`
- *No Lorentzian analogue* of Connes' reconstruction theorem exists; this absence is the stated reason the definition of a Lorentzian spectral triple is still open (survey: Franco–Eckstein; van den Dungen; temporal Lorentzian spectral triples, arXiv:1210.6575). `[VERIFIED — web-confirmed]`
- **van den Dungen**, "Families of spectral triples and foliations of space(time)," arXiv:1711.07299 — Lorentzian triple as "reverse Wick rotation of a product spectral triple," spacelike-hypersurface foliation as INPUT; "Krein spectral triples and the fermionic action," arXiv:1505.01939. `[VERIFIED — web-confirmed]`
- **Nieuviarts**, "Emergence of Time from a Twisted Spectral Triple in Almost-Commutative Geometry," arXiv:2512.15450 (Dec 2025; using arXiv:2502.18105) — time direction encoded into a chosen twist automorphism $\rho(c(v)) = c(rv)$; local-only, no global causal structure; starts from a Riemannian triple. `[VERIFIED — web-confirmed; the decisive confirming test]`
- **Czech, Lamprou, McCandlish, Sully**, "Integral Geometry and Holography," arXiv:1505.05515 (2015) — dS$_2$ kinematic space of the static AdS$_3$ slice, metric from conditional mutual information of the CFT vacuum; **origin of the Lorentzian kinematic-space signature**. `[VERIFIED — corrects the Huang–Ma misattribution]`
- **Czech, Lamprou** (with McCandlish, Sully), "Modular Berry Connection for Entangled Subregions in AdS/CFT," PRL 120, 091601 (2018), arXiv:1712.07123 — global conformal symmetry singles out a *unique* modular Berry connection in the 2d CFT vacuum (zero-mode projector $P_0$). `[VERIFIED — web-confirmed]`
- **Czech, de Boer, Ge, Lamprou**, "A Modular Sewing Kit for Entanglement Wedges," arXiv:1903.04493, JHEP 11 (2019) 094 — modular Berry connection sews HRRT-surface frames at leading order in $1/N$. `[VERIFIED — web-confirmed]`
- **Huang, Ma**, "Berry Curvature and Riemann Curvature in Kinematic Space with Spherical Entangling Surface," arXiv:2003.12252; Fortschr. Phys. 2021 — modular Berry curvature $=$ Riemann curvature of a Lorentzian kinematic space (dS$_2$ for $d\ge2$; AdS$_2$ for CFT$_1$, up to overall sign), from geometric CHM modular Hamiltonians of ball regions in the vacuum, on a Lorentzian input manifold. `[VERIFIED — web-confirmed; signature inherited, not originated]`
- **Sorce**, "Analyticity and the Unruh effect," arXiv:2403.18937 (2024) — geometric modular flow $\Rightarrow$ future-directed conformal Killing vector (the Sorce CKV gate closing the stress-tensor-flux readout). `[VERIFIED — from prior note]`
- Modular-transport beyond the symmetric vacuum (open-subquestion inputs): entanglement holonomies, arXiv:1807.04276; Virasoro entanglement Berry phases, JHEP 03 (2022) 179; modular chaos / scrambling modes, arXiv:1912.02810. `[VERIFIED — escape-route inputs, not yet shown to yield Lorentzian signature from non-symmetric data]`
