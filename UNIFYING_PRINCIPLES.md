# Unifying Principles: Candidate Deep Foundations of Physics

Status: Living survey — actively curated; rankings provisional and contested.
Last updated: 2026-06-08

This page catalogues the principal candidates for *truly foundational* organizing principles of physics, distinguished sharply from principles that are best read as *emergent* or *effective*. For each, we give a precise statement, the evidence in its favor, its scope and limits, the arguments for and against genuine foundational status, and where it surfaces across the domain pages. The page concludes with a ranked, epistemically tagged view.

A recurring methodological theme — see [EPISTEMICS.md](EPISTEMICS.md) — is to separate three things that are easily conflated:

1. A **logical inconsistency** (two claims that cannot both be true).
2. A **domain-of-validity mismatch** (each claim true in its regime, with no overlap).
3. An **unsolved-but-consistent problem** (a genuine open question within a coherent framework).

Most of the "tensions" between the principles below are of types 2 and 3, not type 1. The deepest live tension — whether **geometry** or **information/entanglement** is the deeper layer — is type 3 (an open question), not a contradiction. See [GAPS_AND_CONTRADICTIONS.md](GAPS_AND_CONTRADICTIONS.md) and [UNIFICATION_LANDSCAPE.md](UNIFICATION_LANDSCAPE.md).

---

## 1. Symmetry, representation theory, and the gauge principle

**Statement.** Physical laws are constrained by invariance under transformation groups. Three logically distinct sub-claims must be held apart:

- **(a) Noether's theorem.** [ESTABLISHED] In any variational theory, every continuous global symmetry of the action yields a conserved current $\partial_\mu j^\mu = 0$ and charge. This is a *mathematical theorem*, not a contingent empirical fact. Energy–momentum conservation follows from spacetime-translation invariance, angular momentum from rotational invariance, and so on. In Hamiltonian form, a quantity $J$ is conserved iff it Poisson-commutes with the Hamiltonian, $\{J,H\}=0$ (see [domains/classical-mechanics.md](domains/classical-mechanics.md)).
- **(b) Wigner's classification.** [ESTABLISHED as a classification result] A relativistic "particle" *is* a unitary irreducible representation of the Poincaré group, labelled by the two Casimir invariants
$$P^2 = m^2, \qquad W^2 = -m^2\, s(s+1),$$
where $W^\mu$ is the Pauli–Lubanski vector. Spacetime symmetry thereby dictates the kinematic catalogue of matter: mass and spin *are* the Poincaré Casimirs. See [domains/quantum-field-theory.md](domains/quantum-field-theory.md) and [domains/particle-physics.md](domains/particle-physics.md).
- **(c) The gauge principle.** [CONTESTED interpretation] The heuristic that *demanding local invariance generates the interactions* (Yang–Mills) is enormously productive but interpretively delicate: gauge symmetry is a **redundancy of description**, not a physical symmetry. Elitzur's theorem forbids the spontaneous breaking of a local gauge symmetry; physical observables are gauge-invariant (e.g. Wilson loops $W[C]=\operatorname{tr}\,\mathcal P\exp\oint_C A$); and the same physics can be expressed without manifest gauge redundancy.

**Evidence for.**

- Noether's theorem is proven and pervades every variational theory, from point particles to the QFT stress tensor.
- Wigner's irrep classification underpins the entire particle content of QFT and the spin–statistics structure. [ESTABLISHED]
- Lorentz invariance is tested to extreme precision; the Standard Model is built as an **anomaly-free chiral gauge theory** $SU(3)_c\times SU(2)_L\times U(1)_Y$, where anomaly cancellation — a quantum-consistency requirement — fixes hypercharge assignments. [ESTABLISHED]
- Bundle/connection geometry, with curvature $F = dA + A\wedge A$, is confirmed to be physical via the Aharonov–Bohm effect and Dirac charge quantization $eg = 2\pi n\hbar$. [ESTABLISHED]

**Scope and limits.** Global Poincaré invariance is *exact only in flat spacetime*; in our expanding universe it is a local approximation, and the cosmic matter distribution + cosmic time furnish a preferred frame at large scales (see [domains/cosmology.md](domains/cosmology.md)). Diffeomorphism invariance in general relativity is *qualitatively different* from internal Yang–Mills gauge symmetry: it is the gauge group of GR, tied to background independence and the hole argument (see §9 and [domains/general-relativity.md](domains/general-relativity.md)). The gauge framing is a redundancy, so "derive the interactions by gauging" is heuristic; large-gauge and asymptotic-symmetry charges complicate the pure-redundancy reading. Possible tiny Lorentz violation is [OPEN] but tightly constrained.

**Foundational vs emergent.**

- *For:* the **representation-theoretic content** (what can exist, given a symmetry) and **Noether's theorem** (symmetry $\Rightarrow$ conservation) are about as close to foundational as physics offers, recurring identically across classical mechanics, QFT, and the SM.
- *Against:* (i) gauge "symmetry" being a redundancy means at least that part is descriptive scaffolding, not ontology; (ii) the *specific* gauge group and the three generations are empirical inputs the SM cannot explain, suggesting a low-energy shadow of deeper (e.g. GUT) structure — see [OPEN_PROBLEMS.md](OPEN_PROBLEMS.md); (iii) symmetries can themselves be emergent — condensed-matter systems exhibit emergent gauge fields and emergent Lorentz invariance in the infrared, which would make even Lorentz invariance an IR accident rather than a UV principle. [SPECULATIVE]

---

## 2. The action principle and the path integral

**Statement.** [INFERENCE, strong consensus] Dynamics across classical mechanics, field theory, and gravity follows from stationarity of an action functional, $\delta S = 0$. The modern reading *inverts* the classical hierarchy: least action is not a teleological postulate but the stationary-phase ($\hbar \to 0$) limit of the Feynman path integral, which weights every history by $e^{iS/\hbar}$:
$$K(b,a) = \int \mathcal D[q]\; e^{iS[q]/\hbar}.$$

**Evidence for.**

- The Euler–Lagrange and Hamilton equations, Maxwell, Yang–Mills, and the Einstein field equations all derive from action stationarity. The latter follow from the Einstein–Hilbert action
$$S_{\rm EH} = \frac{c^4}{16\pi G}\int (R - 2\Lambda)\,\sqrt{-g}\,\,d^4x.$$
- Stationary phase recovers the classical trajectory as $\hbar\to 0$, *explaining why* nature appears to extremize. See [domains/quantum-mechanics.md](domains/quantum-mechanics.md) and [domains/quantum-field-theory.md](domains/quantum-field-theory.md).
- **Lovelock's theorem**: in four dimensions, the most general metric action giving second-order field equations yields essentially uniquely the Einstein tensor plus a cosmological constant — a rigidity result showing how much variational + symmetry structure fixes. [ESTABLISHED]
- Noether's theorem operates *within* the variational framework, binding symmetry to conservation.

**Scope and limits.** The principle is *stationary*, not *least* (saddle points past conjugate points/caustics). Dissipative and nonholonomic systems are **not** derivable from a standard action: rolling constraints obey the Lagrange–d'Alembert principle, not the Euler–Lagrange equations of any action, and dissipation is naturally framed in contact geometry. Singular (gauge) Lagrangians require Dirac constraint analysis. Most severely, the Lorentzian "measure" $\mathcal D\phi\, e^{iS}$ is **not** a rigorous measure in $d=4$: there is no $\sigma$-additive translation-invariant measure on an infinite-dimensional space, and $e^{iS}$ is not absolutely integrable. It is a phenomenally successful heuristic, rigorous only via Euclidean, reflection-positive (Osterwalder–Schrader) constructions in low dimensions (see [domains/mathematics.md](domains/mathematics.md)).

**Foundational vs emergent.**

- *For:* extraordinary universality — the one formal skeleton common to every dynamical theory in this wiki — and the path-integral derivation gives the classical action principle a genuine mechanistic ground rather than leaving it teleological.
- *Against:* (i) the fundamental object is arguably the path integral / quantum amplitude, with the action principle *derivative*; (ii) that very object lacks rigorous existence in 4D, so we do not actually possess the thing we invoke; (iii) it is a *framework/language* for encoding dynamics, not a substantive law about the world's content. Best read as a near-universal **structural** principle whose own foundation (the quantum measure) is mathematically incomplete. [INFERENCE]

---

## 3. Renormalization group, universality, and effective field theory

**Statement.** [ESTABLISHED] Physics organizes into a tower of effective descriptions, each valid below some energy scale, connected by renormalization-group (RG) flow of couplings. Two profound consequences:

- **Universality.** Near continuous phase transitions, microscopically distinct systems share identical critical exponents because irrelevant operators die under RG flow; the diverging correlation length $\xi \sim |t|^{-\nu}$ washes out microscopic detail. See [domains/statistical-mechanics.md](domains/statistical-mechanics.md).
- **Reinterpretation of renormalizability.** Once treated as a sacred constraint, renormalizability is, after Wilson, an *emergent* low-energy property: non-renormalizable (irrelevant) operators are suppressed by powers of $E/\Lambda$. Non-renormalizable EFTs (Fermi theory, chiral perturbation theory, GR-as-EFT, SMEFT) are perfectly predictive at low energy.

**Evidence for.**

- Critical exponents and universality classes are confirmed quantitatively across condensed-matter and statistical systems; scaling relations such as hyperscaling $2-\alpha = d\nu$ hold.
- Euclidean QFT = classical statistical field theory under Wick rotation; Wilsonian RG originated in critical phenomena and became the organizing language of QFT (running couplings, beta functions). [ESTABLISHED]
- Asymptotic freedom of QCD ($\beta < 0$ for $n_f < 33/2$) and the Landau pole / triviality of $\phi^4$ and QED are RG facts that recast these as cutoff EFTs. See [domains/particle-physics.md](domains/particle-physics.md).
- The SM is now understood as the renormalizable part of an EFT (SMEFT): the dimension-5 Weinberg operator for neutrino mass, dimension-6 operators for BSM physics — the dominant model-independent analysis framework.

**Scope and limits.** RG control is sharpest near fixed points (CFTs anchor the space of theories) and for weak-to-moderate coupling; strongly coupled nonperturbative flows (QCD confinement below $\Lambda_{\rm QCD}\sim 200$ MeV) require lattice methods. Universality is a near-critical, large-$\xi$ statement. The existence of a genuine nonperturbative continuum limit (vs triviality) is [OPEN] for the physically central 4D theories. RG presupposes notions of scale and locality that may not survive quantum gravity.

**Foundational vs emergent.** This is arguably the strongest candidate for a *truly foundational meta-principle*, precisely because it **reframes the question**.

- *For:* established, recurs identically across stat-mech, QFT, and the SM, and explains *why* effective theories work.
- *Against:* it is a principle *about theories* rather than a law of nature's content, and it points toward emergence as primary, in tension with any single foundational substrate. Its deepest implication may be **anti-foundationalist**: that "emergent" and "fundamental" are scale-relative. [ESTABLISHED] (with a [CONTESTED] philosophical reading). See [UNIFYING_PRINCIPLES.md](UNIFYING_PRINCIPLES.md) cross-links in [THEORY_MAP.md](THEORY_MAP.md).

---

## 4. The holographic principle and entropy/area bounds

**Statement.** [INFERENCE, widely accepted] The maximum entropy in a region of gravitating spacetime scales with the boundary **area**, not the volume: $S \le A/4$ in Planck units. Anchors:

$$S_{\rm BH} = \frac{k_B c^3 A}{4 G \hbar}\quad\text{(Bekenstein–Hawking)},\qquad S \le \frac{2\pi k_B R E}{\hbar c}\quad\text{(Bekenstein bound)},$$

with Bousso's covariant light-sheet bound as the strong-gravity generalization. The **strong form** (gauge/gravity duality) asserts that a $(d{+}1)$-dimensional gravitational theory is *exactly equivalent* to a $d$-dimensional non-gravitational QFT on its boundary (AdS/CFT).

**Evidence for.**

- $S_{\rm BH}$ is area-extensive on *multiple independent* derivations: Hawking radiation, the Euclidean gravitational action, string-theoretic D-brane microstate counting for extremal/BPS black holes (Strominger–Vafa — [ESTABLISHED within that framework]), and loop-quantum-gravity area spectra.
- **Ryu–Takayanagi**: boundary entanglement entropy equals a bulk minimal-surface area,
$$S(A) = \frac{\operatorname{Area}(\gamma_A)}{4 G_N},$$
geometrizing entanglement — rigorous within AdS/CFT. See [domains/information-theory.md](domains/information-theory.md).
- AdS/CFT passes an enormous body of consistent checks (symmetries, spectra, correlators, integrability, BH thermodynamics).
- Area-law scaling of ground-state entanglement entropy in QFT reinforces the area-counting of degrees of freedom.

**Scope and limits.** The strong (RT / AdS-CFT) form is rigorously formulated and tested essentially **only** in asymptotically anti-de Sitter spacetimes at large $N$ / strong coupling (Einstein-gravity regime). There is **no** established de Sitter holographic dual or RT analog — yet our universe is de Sitter-like (accelerating; see [CONSTANTS_AND_SCALES.md](CONSTANTS_AND_SCALES.md)). The Bekenstein bound is sharp only for weak gravity ($R$ larger than the Schwarzschild radius); in strong gravity Bousso's covariant bound is the correct statement but lacks a fully general first-principles proof. AdS/CFT has no general nonperturbative proof — it is a conjecture with overwhelming evidence. See [domains/mathematics.md](domains/mathematics.md).

**Foundational vs emergent.**

- *For:* the area-law for entropy is robust and multiply-derived; any quantum gravity must reproduce it, and it strongly suggests gravitational degrees of freedom are *area-extensive* (radically fewer than local QFT's volume-extensive count), pointing to a holographic reorganization of the fundamental Hilbert space.
- *Against:* the only setting where holography is a *derived equivalence* rather than a heuristic bound is AdS/CFT — a special, negatively-curved corner with the wrong cosmological-constant sign for our universe. Whether holography is universal or an AdS artifact is arguably **the** central open question of the program. Net: the area **bound** is likely-fundamental [INFERENCE]; the strong holographic **duality** as a *universal* fact is [SPECULATIVE] outside AdS.

---

## 5. Information-theoretic reconstructions of quantum mechanics

**Statement.** [OPEN, active and fruitful] The Hilbert-space formalism of QM can be *derived* from a small set of operationally/information-theoretically motivated axioms rather than postulated. Representative programs: Hardy (2001), from continuity/reversibility plus simplicity; Chiribella–D'Ariano–Perinotti (2011), from purification and local tomography; Clifton–Bub–Halvorson, from no-signaling, no-broadcasting, no-bit-commitment; Masanes–Müller, from operational postulates. The thrust: QM's structure (complex amplitudes, tensor-product composition, the Born-rule form) may be the *unique* theory satisfying reasonable constraints on information processing.

**Evidence for.**

- Multiple distinct axiom sets recover the Hilbert-space formalism, showing the structure is highly constrained by operational requirements.
- **Gleason's theorem** ($\dim \ge 3$): $\rho \mapsto \operatorname{Tr}(\rho E)$ is the *unique* noncontextual probability measure on projections — the Born rule's *form* is forced given the Hilbert-space scaffolding. [ESTABLISHED]
- Tensor-product composition is singled out among operationally reasonable composition rules by local tomography in generalized-probabilistic-theory (GPT) reconstructions.
- Recent (2021–2022) multipartite Bell-type tests argue that *complex* (vs real) Hilbert space is experimentally distinguishable under standard locality assumptions, suggesting complexity is not mere convention. [CONTESTED] (conditional on the tests' framework assumptions).

**Scope and limits.** No *single* agreed axiom set exists; the multiplicity of successful, inequivalent reconstructions itself undercuts any claim to be *the* foundation. The axioms' physical *necessity* (vs naturalness) is debated. Reconstructions are cleanest in finite dimensions; the infinite-dimensional / field-theoretic / relativistic case is harder. The programs reconstruct the *formalism* but do not, by themselves, resolve the measurement problem or fix an interpretation. See [domains/quantum-mechanics.md](domains/quantum-mechanics.md) and [HYPOTHESES.md](HYPOTHESES.md).

**Foundational vs emergent.**

- *For:* if QM is the unique information theory consistent with a few operational principles, then "physics is information" acquires real content and QM stops being an arbitrary postulate set — a genuinely foundational reframing.
- *Against:* the multiplicity of successful axiom sets means we do not know *which* principles are fundamental vs conventional; it presupposes the probabilistic/operational (agent, preparation, measurement) framing, itself contested as primitive. Best classified as a promising but unresolved route to foundations. [OPEN]

---

## 6. Thermodynamic / entropic origin of gravity (Jacobson)

**Statement.** [SPECULATIVE, principled] The Einstein field equations may be not a fundamental dynamical law but an **equation of state**. Jacobson (1995) derived them from the Clausius relation $\delta Q = T\, dS$ applied to local Rindler (acceleration) horizons, with entropy $\propto$ horizon area and $T$ the Unruh temperature, *demanded to hold for all local observers*. On this view spacetime geometry and its dynamics are emergent, macroscopic, thermodynamic phenomena of unknown microscopic degrees of freedom — analogous to hydrodynamics emerging from molecular statistics.

**Evidence for.**

- Jacobson's derivation is internally consistent: imposing $\delta Q = T\,dS$ on all local causal horizons, with $S\propto A$ and $T$ the Unruh temperature, yields the full nonlinear Einstein equations. See [domains/general-relativity.md](domains/general-relativity.md) and [domains/thermodynamics.md](domains/thermodynamics.md).
- Black-hole mechanics maps exactly onto the four laws of thermodynamics ($S_{\rm BH}\propto A$, $T_H\propto\kappa$, the surface gravity) — a deep [ESTABLISHED] structural correspondence.
- The holographic first law $\delta S_A = \delta\langle K_A\rangle$ (with $K_A$ the modular Hamiltonian) yields the *linearized* Einstein equations from entanglement in AdS/CFT — a parallel "gravity from entropy/entanglement" derivation.
- The non-renormalizability of quantized GR is naturally explained if the metric is an emergent collective variable (like a phonon field), not a fundamental field to be quantized.

**Scope and limits.** The derivation *assumes* the area-entropy law and Unruh temperature as inputs — it explains the *form* of the field equations given thermodynamic premises, not why those premises hold microscopically. The entropy functional can be generalized (higher-curvature corrections $\leftrightarrow$ different entropy functionals). The entanglement-route derivations recover only the *linearized* equations under specific assumptions; a full nonlinear, background-independent derivation is **not** achieved. The microscopic degrees of freedom remain unidentified.

**Foundational vs emergent.** This is the *inverse* of "geometry as primary" (§9): it makes geometry emergent and thermodynamics/entropy fundamental.

- *For:* elegantly explains why GR resists quantization (one should not quantize an equation of state any more than the Navier–Stokes equations), and unifies the otherwise suspicious coincidence of black-hole thermodynamics.
- *Against:* it derives the equations *given* thermodynamic inputs that themselves require explanation; it is [SPECULATIVE] (no experimental discrimination from ordinary GR); and "entropy" presupposes a coarse-graining whose substrate is unknown. It *relocates* the mystery rather than closing it. [SPECULATIVE] *(Iteration-2 disaggregation: Jacobson 1995 is a genuine theorem **given** the area law + Unruh $T$ — the AdS first-law route yields only the linearized equations; Padmanabhan is an [INFERENCE]-level structural rewriting; Sakharov a mechanism that **outputs** the area law; Verlinde-2011 a heuristic; Verlinde-2016 dark matter testable but disfavored at cluster/CMB scales. See [notes/2026-06-08-entropic-and-emergent-gravity.md](notes/2026-06-08-entropic-and-emergent-gravity.md) and [HYPOTHESES.md](HYPOTHESES.md) HYP-ENTROPIC-GRAVITY-SPLIT.)*

---

## 7. Entanglement as the structural glue of spacetime

**Statement.** [SPECULATIVE → INFERENCE, setting-dependent] The connectivity and geometry of spacetime emerge from the entanglement structure of an underlying quantum theory. Within AdS/CFT: Ryu–Takayanagi ties boundary entanglement entropy to bulk minimal-surface area; **Van Raamsdonk's** argument shows that *disentangling* boundary degrees of freedom pinches off and disconnects bulk regions, suggesting entanglement literally sews spacetime together; **ER = EPR** (Maldacena–Susskind) conjectures that entanglement between systems *is* a geometric (Einstein–Rosen-bridge) connection. Slogan: "spacetime is built from entanglement."

**Evidence for.**

- RT / HRT and **entanglement-wedge reconstruction** are rigorous within AdS/CFT, with quantum error correction modeling how bulk operators are encoded in boundary entanglement. See [domains/information-theory.md](domains/information-theory.md).
- Van Raamsdonk's thought experiment: smoothly reducing entanglement between two CFTs corresponds to the two bulk regions separating.
- ER = EPR is supported by the thermofield-double / eternal-black-hole correspondence and traversable-wormhole constructions.
- The entanglement first law $\delta S_A = \delta\langle K_A\rangle$ reproduces the linearized Einstein equations, deriving (linearized) geometric dynamics from entanglement.

**Scope and limits.** Demonstrated rigorously only in asymptotically-AdS, large-$N$, strong-coupling holographic settings. ER = EPR is a bold conjecture with **no** first-principles derivation and unknown status for generic (non-holographic) entanglement. There is no demonstration that *generic* entanglement produces a smooth geometric connection, nor that our universe's spacetime is so constituted. Continuum QFT entanglement entropy is UV-divergent, and local algebras are **Type III** von Neumann factors with *no* tensor factorization — so the naive "qubits sewing space" picture lacks a rigorous subsystem structure (see [domains/mathematics.md](domains/mathematics.md)). De Sitter / cosmological applicability is unestablished.

**Foundational vs emergent.**

- *For:* the most concrete realization of "spacetime is emergent," converting a slogan into computable statements (RT) and a derivation of linearized gravity. If it generalizes, entanglement is deeper than geometry.
- *Against:* heavily AdS-dependent (wrong $\Lambda$ sign for us), conjectural beyond linear order, and resting on a subsystem/tensor-factor picture that algebraic QFT (Type III) says does not strictly exist. Net: [SPECULATIVE] overall, with the RT-within-AdS sub-claim rising to [INFERENCE]. Like §6, it points to information/entanglement — not geometry — as the deeper layer, without claiming universality. See [GAPS_AND_CONTRADICTIONS.md](GAPS_AND_CONTRADICTIONS.md).

---

## 8. Locality and causality (microcausality, no-signaling)

**Statement.** [ESTABLISHED as defining axioms] Physical influence is local and causally ordered. Precise encodings:

- **(a) Microcausality.** Spacelike-separated local field observables commute, $[\phi(x),\phi(y)] = 0$ for $(x-y)^2 < 0$ — the QFT axiom enforcing relativistic causality and driving the spin–statistics and CPT theorems.
- **(b) No-signaling.** Entanglement and "collapse" never transmit usable information faster than light; local marginals are independent of distant settings (Bell violation notwithstanding). The Tsirelson bound caps quantum correlations at $2\sqrt 2$.
- **(c) Cluster decomposition.** Distant experiments have independent statistics, essentially forcing (with QM + Poincaré) a *local field* description (Weinberg's "folk theorem").

**Evidence for.**

- Microcausality is the load-bearing axiom of QFT, generating spin–statistics, CPT, and the Reeh–Schlieder structure. See [domains/quantum-field-theory.md](domains/quantum-field-theory.md).
- The no-signaling theorem guarantees no usable superluminal information despite Bell-inequality violation (confirmed by loophole-free Bell tests) and despite apparent instantaneous collapse. See [domains/quantum-mechanics.md](domains/quantum-mechanics.md).
- Cluster decomposition + Poincaré invariance + QM essentially force the field description.
- Causal structure is built into GR's Lorentzian metric (light cones sort timelike/null/spacelike), and global hyperbolicity secures determinism. See [domains/general-relativity.md](domains/general-relativity.md).

**Scope and limits.** The **Reeh–Schlieder theorem** shows the QFT vacuum is entangled across arbitrarily separated regions (cyclic and separating for every local algebra), violating *naive* locality intuitions while preserving no-signaling — so "locality" is subtle. GR permits closed timelike curves (Gödel, the Kerr interior, wormholes) unless censored by chronology protection [OPEN/CONTESTED]. Quantum gravity is widely expected to modify locality at the Planck scale (holography is intrinsically non-local). In algebraic QFT there is no tensor factorization into strictly local subsystems (Type III).

**Foundational vs emergent.**

- *For:* microcausality and no-signaling are the *least negotiable* principles within any relativistic quantum theory; relaxing them generically destroys Lorentz invariance or causality. They have unmatched theorem-generating power (spin–statistics, CPT).
- *Against:* (i) holography and the Reeh–Schlieder / Type-III structure show locality is not fundamental in the naive sense and is expected to be emergent in quantum gravity; (ii) entanglement-as-geometry treats non-local entanglement as *more* fundamental than local spacetime. Net: foundational *for* relativistic QFT on a fixed background, but a prime suspect for **emergence** at the quantum-gravity level. **Causal order** may be more robust than **spatial separability**. [ESTABLISHED] (in-domain).

---

## 9. Geometry as primary (background independence)

**Statement.** [CONTESTED] Gravity and physics are fundamentally geometric: matter is the curvature of a dynamical spacetime (GR), and the deepest structural principle is **diffeomorphism invariance / background independence** — there is no prior fixed geometry, and physical states are diffeomorphism-equivalence classes of fields. Geometry is the dynamical actor, not a stage, and any fundamental theory must be background-independent.

**Evidence for.**

- GR's geometric account is confirmed across an enormous range: perihelion precession, light deflection, Shapiro delay, binary-pulsar decay, gravitational-wave detection, EHT shadows, and cosmology. See [domains/general-relativity.md](domains/general-relativity.md).
- The **hole argument** shows that determinism *forces* treating diffeomorphic metrics as physically identical: spacetime points have no identity apart from the fields. Background independence is not optional in GR.
- Geodesic motion geometrizes gravity (free fall = inertial motion in curved spacetime); the equivalence principle (WEP tested to $\sim 10^{-15}$, MICROSCOPE) makes gravity universal and hence geometrizable. [ESTABLISHED]
- Lovelock rigidity: the geometric Einstein–Hilbert action is essentially the unique 4D second-order metric theory.

**Scope and limits.** GR is a *classical* effective theory; its perturbative quantization is non-renormalizable, signaling breakdown at the Planck scale where the smooth-manifold continuum is expected to fail. The "geometric trinity" (curvature-, torsion-, and nonmetricity-based formulations are empirically equivalent) shows the specific geometric framing is partly conventional. GR has **no** local gravitational energy density (only pseudotensors / quasi-local notions), and the *problem of time* afflicts its canonical quantization. Competing programs (§§6–7, holography) treat geometry as **emergent**, directly contesting its primacy.

**Foundational vs emergent.** This principle is in direct tension with §§3, 4, 6, 7.

- *For primacy:* background independence is GR's deepest, best-confirmed structural lesson, widely held as a non-negotiable requirement for quantum gravity; geometry's explanatory reach (unifying gravity, inertia, causal structure) is vast.
- *Against primacy:* the strongest current research currents (Jacobson, Van Raamsdonk, holography, area-law entropy) point the *other* way — geometry emerging from entropy/entanglement/information, with the metric a collective/thermodynamic variable; non-renormalizability is naturally read as evidence geometry is emergent. Net: a serious but actively **contested** candidate. **Background independence** (no prior structure) may survive even if geometry itself is emergent. [CONTESTED]

---

## 10. Decoherence and the observer (the quantum–classical transition)

**Statement.** [ESTABLISHED dynamics; CONTESTED significance] **Decoherence** is the established dynamical process by which a system entangling with its environment loses local phase coherence, suppressing interference and selecting a robust *pointer basis* (einselection), explaining the *effective* emergence of classicality. The *stronger* claim — that decoherence (plus the observer, or branching, or information acquisition) *resolves* the measurement problem and explains the appearance of single outcomes — is **contested** and interpretation-dependent.

**Evidence for.**

- Decoherence dynamics are rigorous and confirmed: the GKSL/Lindblad master equation governs open-system evolution, and interference vanishes controllably as environmental coupling increases (matter-wave interferometry with large molecules). See [domains/quantum-mechanics.md](domains/quantum-mechanics.md) and [domains/statistical-mechanics.md](domains/statistical-mechanics.md).
- Decoherence supplies the effective pointer basis and the practical quantum–classical boundary, underlying quantum Darwinism / Zurek's einselection.
- The classical limit $\hbar\to 0$ is singular and non-uniform (WKB oscillation, logarithmic Ehrenfest time for chaotic systems), so decoherence — not the bare limit — robustly yields classical behavior. See [domains/classical-mechanics.md](domains/classical-mechanics.md).

**Scope and limits.** Decoherence by itself does **not** solve the measurement problem: it explains why interference is unobservable and which basis is robust, but does not select a single *actual* outcome from the improper mixture — unitary evolution never reduces a superposition to one branch. Its significance is interpretation-dependent (Everett: branching, no collapse; objective collapse: real reduction; QBism: agent's information update). The "observer" as a *fundamental* ingredient features in some interpretations and is rejected by others.

**Foundational vs emergent.**

- *Against foundational status (as usually hoped):* decoherence is a *derived* consequence of unitary QM plus many environmental degrees of freedom — emergent, not a new law — and it explicitly does not close the measurement problem. The "observer" is almost certainly **not** fundamental; treating it so is the *shifty split* of the standard axioms.
- *For a weaker role:* the **emergence of classicality** via environmental entanglement is a robust, established mechanism, and its information-theoretic reading (information leaking irreversibly to the environment, redundantly encoded) connects to the entropic/information themes above. Net: an important **emergent bridge**, not a foundational principle. [ESTABLISHED] (as dynamics).

---

## 11. The low-entropy past (the Past Hypothesis) and the arrow of time

**Statement.** [INFERENCE that it is required; OPEN why] Because the microscopic dynamics are essentially time-symmetric (Hamiltonian, unitary, CPT), the observed thermodynamic arrow — the monotone increase of entropy, the second law — *cannot* follow from the dynamical laws alone. It requires a time-asymmetric **boundary condition**: an extraordinarily low-entropy initial macrostate of the universe (the **Past Hypothesis**). This single posit grounds the arrow across thermodynamics, statistical mechanics, and cosmology.

**Evidence for.**

- **Loschmidt's** reversibility paradox and **Zermelo's** recurrence objection show the $H$-theorem's monotonicity cannot come from reversible dynamics alone — a time-asymmetric input (molecular chaos / low-entropy past) is logically necessary. See [domains/statistical-mechanics.md](domains/statistical-mechanics.md) and [domains/thermodynamics.md](domains/thermodynamics.md).
- The early universe was thermally near-uniform (high thermal entropy) but gravitationally extremely smooth (very *low* gravitational entropy, since clumping increases entropy when gravity dominates) — Penrose quantifies this via near-zero initial Weyl curvature. See [domains/cosmology.md](domains/cosmology.md).
- **Fluctuation theorems** (Jarzynski, Crooks) show the second law is statistical, with transient violations exponentially suppressed but nonzero — consistent with a typicality + special-initial-condition account.
- The same low-entropy boundary condition is required across thermodynamics, statistical mechanics, and cosmology, unifying the arrow.

**Scope and limits.** That an asymmetric arrow *requires* an asymmetric boundary condition is [INFERENCE] bordering on established. *Why* the early universe had such low (especially gravitational) entropy is genuinely [OPEN] and exports to cosmology and quantum gravity. Inflation does **not** resolve it — inflation arguably requires its own special low-entropy initial patch to begin (Penrose's critique), relocating rather than removing the puzzle. The very notion of *gravitational* entropy is not rigorously defined (self-gravitating systems are non-extensive, have negative specific heat, and lack a global maximum-entropy equilibrium), so the bookkeeping is conceptually incomplete.

**Foundational vs emergent.**

- *For:* a genuine candidate for a fundamental, law-like posit that is logically *independent* of the dynamical laws — not derivable within any current framework, functioning as an irreducible boundary condition, and the deepest known source of time's directionality.
- *Against:* it is a boundary *condition*, not a law, and many hope it will eventually be *explained* dynamically (quantum cosmology / the initial quantum state of the universe), making it derived. Moreover, unlike symmetry or RG, it is a statement about a *particular contingent initial condition of our universe*, which sits uneasily with a *universal* foundational principle. Net: explanatory necessity robust; ultimate status (brute fact vs derivable) [OPEN]. See [OPEN_PROBLEMS.md](OPEN_PROBLEMS.md).

---

## 12. Unitarity / information conservation

**Statement.** [ESTABLISHED within quantum theory] Closed-system quantum evolution is unitary: pure states evolve to pure states, total probability is conserved, and information is never truly destroyed. This is enforced in QFT order-by-order via BRST/Ward identities and the optical theorem, and is a non-negotiable requirement of a consistent probabilistic quantum theory. Its sharpest stress test — black-hole evaporation appearing to map pure to mixed states (the **information paradox**) — is now widely believed to resolve *in favor* of unitarity.

**Evidence for.**

- Unitarity is structurally required for conservation of total probability and is built into the $S$-matrix ($S^\dagger S = \mathbb 1$); apparent unitarity loss (open systems, non-Hermitian effective descriptions) reflects truncation, not failure of the closed theory. See [domains/quantum-field-theory.md](domains/quantum-field-theory.md).
- AdS/CFT is manifestly unitary on the boundary, providing a concrete framework in which black-hole evaporation *must* be unitary.
- Recent quantum-extremal-surface / island / replica-wormhole computations reproduce the unitary **Page curve** for black-hole evaporation entropy, strongly suggesting EFT was being used outside its domain when it predicted information loss. See [domains/general-relativity.md](domains/general-relativity.md) and [domains/information-theory.md](domains/information-theory.md).

**Scope and limits.** The *complete*, first-principles mechanism by which information escapes a realistic (asymptotically-flat, dynamically-formed) evaporating black hole — and reaches an external observer — remains [OPEN]; islands are computed in controlled AdS/toy models, not yet shown to fully resolve the paradox in nature. Unitarity is in apparent tension with the projective collapse postulate (the measurement problem), resolved differently by each interpretation. Objective-collapse models (GRW/CSL) deliberately *violate* strict unitarity with new stochastic dynamics and are empirically testable — so universal unitarity is not absolutely beyond question.

**Foundational vs emergent.**

- *For:* among the most robust pillars of quantum theory, with theorem-level enforcement and a strong (if incomplete) resolution of its hardest challenge; any fundamental theory is widely expected to be unitary. Connects to information-conservation as a candidate deep principle.
- *Against:* it is a feature *of* quantum theory rather than an independent meta-principle, and whether quantum theory itself is final is open (objective-collapse models; the measurement problem). Best seen as foundational *conditional on* quantum mechanics — itself the subject of the reconstruction program (§5). [ESTABLISHED] (conditionally).

---

## Synthesis: a ranked view of fundamental vs emergent

The principles split into two families with a shared, striking feature: **several of the strongest "emergence" arguments converge on information/entanglement/entropy as the deeper layer, beneath geometry and locality.** This convergence is the wiki's central live hypothesis — see [HYPOTHESES.md](HYPOTHESES.md) and [UNIFICATION_LANDSCAPE.md](UNIFICATION_LANDSCAPE.md) — but it is not established and is largely confined to the AdS corner.

The ranking below is *provisional* and intended as a working map, not a verdict. "Likely fundamental" means *plausibly part of the deepest layer of any future theory*; "likely emergent" means *plausibly a derived, scale- or regime-dependent feature*. Tags reflect confidence in the *fundamental/emergent classification*, not in the principle's empirical validity.

**Most likely genuinely fundamental (in roughly descending confidence):**

1. **Noether + representation theory** (§1a,b) — [INFERENCE, high]. Theorem-level and regime-universal; the part of "symmetry" not tainted by gauge redundancy.
2. **Unitarity / information conservation** (§12) — [INFERENCE, high], *conditional on QM being final*.
3. **Microcausality / causal order** (§8) — [INFERENCE]. Least negotiable for relativistic QFT, but a suspect for emergence in quantum gravity; *causal order* likely outlives *spatial locality*.
4. **The Past Hypothesis** (§11) — [OPEN, but fundamental-if-irreducible]. Uniquely a *boundary condition* rather than a law; foundational status hinges on whether it is ever derived.

**Foundational as meta-principles (about theories, not contents):**

5. **Renormalization group / EFT** (§3) — [ESTABLISHED]. Arguably the deepest *meta*-principle; its lesson may be anti-foundationalist (scale-relativity of "fundamental").
6. **The action principle / path integral** (§2) — [INFERENCE]. Near-universal structural skeleton, but plausibly derivative of the (mathematically incomplete) quantum measure.

**Likely fundamental as a constraint, but with a speculative strong form:**

7. **Holographic area bound** (§4) — bound [INFERENCE]; universal *duality* [SPECULATIVE outside AdS].

**Most likely emergent / derived:**

8. **Geometry as primary** (§9) — [CONTESTED]; multiple currents suggest geometry is emergent, though *background independence* may survive.
9. **Entanglement as spacetime glue** (§7) — [SPECULATIVE]; concrete only within AdS; if correct, would *demote* geometry and *promote* information.
10. **Entropic gravity** (§6) — [SPECULATIVE]; relocates rather than closes the mystery.
11. **Decoherence / the observer** (§10) — dynamics [ESTABLISHED] but *emergent*; the "observer" almost certainly not fundamental.

**Genuinely open at the foundational level:**

12. **Information-theoretic reconstructions of QM** (§5) — [OPEN]; if successful, would make "physics is information" substantive and reposition §§5, 12, and 7 as facets of one principle.

A consistency note (cf. [GAPS_AND_CONTRADICTIONS.md](GAPS_AND_CONTRADICTIONS.md)): the apparent conflict between §9 (geometry primary) and §§6–7 (geometry emergent) is **not** a logical contradiction. It is an *unsolved-but-consistent* question about which description is more fundamental, currently undecidable because the only regime with a derived answer (AdS/CFT) has the wrong cosmological-constant sign for our universe. Treat claims of "spacetime from entanglement" as profound conjectures, not results, outside that corner.

See [ASSUMPTIONS_LEDGER.md](ASSUMPTIONS_LEDGER.md) for the load-bearing assumptions each principle rests on, [FINDINGS.md](FINDINGS.md) for cross-cutting conclusions, and [ROADMAP.md](ROADMAP.md) / [CHANGELOG.md](CHANGELOG.md) for revision history.

---

## See also

- [THEORY_MAP.md](THEORY_MAP.md) — how these principles connect the domain theories.
- [UNIFICATION_LANDSCAPE.md](UNIFICATION_LANDSCAPE.md) — the broader unification program and its open conjectures.
- [OPEN_PROBLEMS.md](OPEN_PROBLEMS.md) — the unresolved questions flagged above.
- [GAPS_AND_CONTRADICTIONS.md](GAPS_AND_CONTRADICTIONS.md) — distinguishing true inconsistencies from domain mismatches.
- [HYPOTHESES.md](HYPOTHESES.md) — the "physics is information" hypothesis and rivals.
- [EPISTEMICS.md](EPISTEMICS.md) — the tagging discipline used throughout.
- [ASSUMPTIONS_LEDGER.md](ASSUMPTIONS_LEDGER.md), [CONSTANTS_AND_SCALES.md](CONSTANTS_AND_SCALES.md), [GLOSSARY.md](GLOSSARY.md).
- Domain pages: [quantum-mechanics](domains/quantum-mechanics.md), [quantum-field-theory](domains/quantum-field-theory.md), [general-relativity](domains/general-relativity.md), [classical-mechanics](domains/classical-mechanics.md), [thermodynamics](domains/thermodynamics.md), [statistical-mechanics](domains/statistical-mechanics.md), [cosmology](domains/cosmology.md), [particle-physics](domains/particle-physics.md), [information-theory](domains/information-theory.md), [mathematics](domains/mathematics.md).

## References

See [BIBLIOGRAPHY.md](BIBLIOGRAPHY.md) for full citations. Standard sources underpinning this page include: Noether (1918); Wigner (1939); Weinberg, *The Quantum Theory of Fields* (microcausality, cluster decomposition, the folk theorem); Peskin & Schroeder and Srednicki (QFT); Wald, *General Relativity* and *Quantum Field Theory in Curved Spacetime* (BH thermodynamics, Reeh–Schlieder); Misner–Thorne–Wheeler (GR); Wilson (RG / critical phenomena); Bekenstein (1973), Hawking (1975), Bousso (covariant entropy bound); Maldacena (1998) and Witten (AdS/CFT); Ryu–Takayanagi (2006); Van Raamsdonk (2010); Maldacena–Susskind (ER=EPR, 2013); Jacobson (1995); Strominger–Vafa (1996); Hardy (2001) and Chiribella–D'Ariano–Perinotti (2011) (QM reconstructions); Gleason (1957); Penrose, *The Road to Reality* (Weyl curvature hypothesis, Past Hypothesis); Zurek (decoherence, einselection). Only sources the author is confident exist are cited; any claim whose attribution is uncertain is flagged inline.
