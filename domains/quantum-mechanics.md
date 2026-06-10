# Quantum Mechanics (Non-Relativistic, Hilbert-Space Formulation)

Status: Foundational domain page — stable core, contested interpretation
Last updated: 2026-06-08

## Scope

This page treats **non-relativistic quantum mechanics (NRQM)** of finitely many degrees of freedom in the standard Dirac–von Neumann Hilbert-space formulation. It covers: the state/observable/dynamics axioms; pure and mixed states; observables as self-adjoint operators and their spectral theory; the tension between unitary Schrödinger evolution and the Born/projection rule (the measurement problem); entanglement, tensor products, and density matrices; Bell/CHSH nonlocality and Kochen–Specker contextuality; decoherence and the classical limit; uncertainty relations; identical particles and quantum statistics; and the major interpretations together with their respective costs.

It deliberately excludes the full machinery of relativistic quantum field theory and quantum gravity, except where those frameworks **bound** the domain of validity of NRQM. Mathematics is given at the level of rigor of von Neumann, Reed–Simon, and modern quantum-information texts, with explicit flags where the physicist's working formalism (Dirac kets, $\delta$-normalization) diverges from the rigorous functional-analytic version. For the broader placement of this domain among physical frameworks see [THEORY_MAP.md](../THEORY_MAP.md); for the epistemic-marker conventions used throughout, see [EPISTEMICS.md](../EPISTEMICS.md).

## Core formalism

### The Dirac–von Neumann axioms

The standard mathematical skeleton (von Neumann 1932; Dirac 1930) is a small set of postulates. The **framework** is [ESTABLISHED] as the consensus working theory; the **interpretation** of several postulates is [CONTESTED], which is a logically separate matter (see [Where it breaks down](#where-it-breaks-down)).

**(A1) States.** To an isolated system is associated a complex separable Hilbert space $\mathcal{H}$, complete in the norm $\|\psi\| = \sqrt{\langle\psi|\psi\rangle}$ (physics convention: $\langle\cdot|\cdot\rangle$ linear in the ket). A *pure state* is a ray — a unit vector $|\psi\rangle$ modulo a global phase $e^{i\theta}$ — equivalently the rank-one projector $\rho = |\psi\rangle\langle\psi|$. The most general state is a *density operator* $\rho$: self-adjoint, positive ($\rho \ge 0$), trace-class with $\operatorname{Tr}\rho = 1$.

**(A2) Observables.** Measurable quantities correspond to densely-defined self-adjoint operators $A = A^\dagger$. Crucially, *self-adjoint* (equal domains, $A = A^\dagger$) is strictly stronger than *symmetric/Hermitian* ($\langle A\phi|\psi\rangle = \langle\phi|A\psi\rangle$ on a domain). Only self-adjoint operators are guaranteed a real spectrum, a projection-valued spectral measure, and (via Stone's theorem) a unitary group $e^{-iAt}$. [ESTABLISHED]

**(A3) Spectral decomposition.** By the spectral theorem, every self-adjoint $A$ admits a unique projection-valued measure (PVM) $E_A(\cdot)$ on the Borel sets of $\mathbb{R}$ with

$$ A = \int_{\sigma(A)} \lambda \, dE_A(\lambda). $$

The spectrum $\sigma(A)$ (the set of possible measured values) splits into discrete (point) and continuous parts. Position $\hat{x}$ and momentum $\hat{p} = -i\hbar\, d/dx$ have purely continuous spectrum and **no normalizable eigenvectors**: the "eigenstates" $|x\rangle, |p\rangle$ are distributions living in a rigged Hilbert space (Gel'fand triple) $\Phi \subset \mathcal{H} \subset \Phi'$, not elements of $\mathcal{H}$. [ESTABLISHED] This is the rigorous content behind $\delta$-normalization $\langle x|x'\rangle = \delta(x-x')$.

**(A4) Born rule.** For state $\rho$ and observable $A$ with PVM $E_A$, the probability that a measurement yields a value in Borel set $\Delta$ is

$$ \Pr(A \in \Delta) = \operatorname{Tr}\!\big(\rho\, E_A(\Delta)\big), \qquad \langle A\rangle_\rho = \operatorname{Tr}(\rho A). $$

For a pure state and a discrete nondegenerate eigenvalue $a_n$ with eigenvector $|a_n\rangle$, this reduces to $\Pr(a_n) = |\langle a_n|\psi\rangle|^2$. **Gleason's theorem** (1957) shows that, for $\dim\mathcal{H} \ge 3$, the trace form is the *unique* noncontextual probability measure on projections — so given the Hilbert-space scaffolding the rule's *form* is forced, not free. [ESTABLISHED]

**(A5) Unitary dynamics.** A closed system evolves by the Schrödinger equation

$$ i\hbar\, \partial_t |\psi(t)\rangle = H|\psi(t)\rangle, \qquad |\psi(t)\rangle = U(t)|\psi(0)\rangle, \quad U(t) = e^{-iHt/\hbar}, $$

with $H$ the self-adjoint Hamiltonian; for $\rho$ this is the von Neumann equation $i\hbar\, \partial_t \rho = [H, \rho]$. **Stone's theorem** guarantees $U(t)$ is a strongly-continuous one-parameter unitary group **iff** $H$ is self-adjoint. [ESTABLISHED]

**(A6) Projection postulate (von Neumann–Lüders).** Upon a measurement yielding an outcome in $\Delta$, the state updates ("collapses") to

$$ \rho \mapsto \frac{E_A(\Delta)\, \rho\, E_A(\Delta)}{\operatorname{Tr}\!\big(\rho\, E_A(\Delta)\big)}. $$

A6 is in logical tension with A5: the former is stochastic and non-unitary, the latter deterministic and unitary. Whether A6 is a genuine physical postulate or merely effective bookkeeping is the heart of the measurement problem. [CONTESTED]

**(A7) Composite systems.** The Hilbert space of a composite system is the tensor product $\mathcal{H}_{AB} = \mathcal{H}_A \otimes \mathcal{H}_B$. Subsystem states are reduced density operators $\rho_A = \operatorname{Tr}_B \rho_{AB}$.

**Operational generalization.** A2/A4/A6 are special cases of a wider framework. The most general measurement is a **POVM** $\{E_i \ge 0,\ \sum_i E_i = \mathbb{1}\}$ with $\Pr(i) = \operatorname{Tr}(\rho E_i)$; the most general dynamics is a **CPTP map** (quantum channel) with Kraus form

$$ \rho \mapsto \sum_k K_k \rho K_k^\dagger, \qquad \sum_k K_k^\dagger K_k = \mathbb{1}. $$

By **Stinespring/Naimark dilation**, every POVM/channel is a projective measurement / unitary on a larger space — so A2/A5/A6 already generate the whole structure. [ESTABLISHED] See [domains/information-theory.md](information-theory.md) for the resource-theoretic reframing.

### Canonical commutation and uncertainty

The canonical commutation relation (CCR) $[\hat{x}, \hat{p}] = i\hbar$ has **no** finite-dimensional or bounded-operator realization (taking the trace would yield $0 = i\hbar \dim\mathcal{H}$). The **Stone–von Neumann theorem** [ESTABLISHED] states that, up to unitary equivalence, there is a *unique* irreducible representation of the Weyl (exponentiated, bounded) form of the CCR for finitely many degrees of freedom — which is precisely why Schrödinger's wave mechanics and Heisenberg's matrix mechanics are the same theory. The theorem **fails** for infinitely many degrees of freedom (QFT), where unitarily inequivalent representations proliferate (see [Connections](#connections-to-other-frameworks)).

The **Robertson–Schrödinger uncertainty relation** follows from Cauchy–Schwarz:

$$ \Delta A\, \Delta B \ge \tfrac{1}{2}\big|\langle [A,B]\rangle\big|, \qquad \text{hence} \quad \Delta x\, \Delta p \ge \tfrac{\hbar}{2}. $$

This is a theorem about the statistical spread of an ensemble prepared in a single state — **not**, in its standard form, a statement about measurement disturbance. The Heisenberg-microscope "disturbance" intuition requires separate, subtler relations (Ozawa; Busch–Lahti–Werner) that have been experimentally probed. The Robertson relation is [ESTABLISHED]; the measurement-disturbance refinements are an active and partly [CONTESTED] area.

### Entanglement and mixed states

A pure $|\psi\rangle_{AB}$ is *separable* iff $|\psi\rangle_{AB} = |\phi\rangle_A \otimes |\chi\rangle_B$; otherwise *entangled*. The **Schmidt decomposition**

$$ |\psi\rangle_{AB} = \sum_i \sqrt{p_i}\, |i\rangle_A |i\rangle_B $$

makes the reduced states $\rho_A = \rho_B = \sum_i p_i |i\rangle\langle i|$ manifest, and the **entanglement entropy** $S(\rho_A) = -\operatorname{Tr}\rho_A \log\rho_A$ quantifies pure-state entanglement. A mixed $\rho_{AB}$ is separable iff $\rho_{AB} = \sum_k q_k\, \rho_A^k \otimes \rho_B^k$. Entanglement is the resource behind teleportation, dense coding, and the Bell violations below.

A subtle "gauge": many distinct ensembles $\{p_i, |\psi_i\rangle\}$ realize the same $\rho$, the freedom being exactly a unitary mixing of the "square roots" (the **Hughston–Jozsa–Wootters / GHJW theorem**). Consequently $\rho$, not the underlying ensemble, is physically operative for local statistics. [ESTABLISHED]

### Bell / CHSH and Kochen–Specker

**Bell/CHSH** [ESTABLISHED — both as theorem and as experiment]. Any *local hidden-variable* (local-causal) theory with a shared variable $\lambda$ and outcomes $A(a,\lambda), B(b,\lambda) \in \{\pm 1\}$ obeys

$$ S = \big|E(a,b) - E(a,b') + E(a',b) + E(a',b')\big| \le 2. $$

QM predicts, for the singlet with correlation $E(a,b) = -\cos\theta_{ab}$, a maximum $S = 2\sqrt{2}$ — **Tsirelson's bound**. Loophole-free experiments (2015 onward) close the locality and detection loopholes simultaneously and confirm the violation. The lesson: no theory reproducing QM statistics can be simultaneously *local* and have *predetermined outcomes*, subject to the measurement-independence ("free choice") assumption. That **local realism is excluded** is [ESTABLISHED]; *which* premise to drop is interpretation-dependent and [CONTESTED].

**Kochen–Specker** [ESTABLISHED theorem]. For $\dim\mathcal{H} \ge 3$, there is no *noncontextual* assignment of definite values $v(A) \in \sigma(A)$ to all observables that respects functional relations ($v(f(A)) = f(v(A))$) and is consistent across all commuting sets. Concretely, one cannot color the projectors so that exactly one of each orthogonal triad is "1". Hence any hidden-variable completion must be *contextual*: the revealed value depends on which compatible set is co-measured. de Broglie–Bohm mechanics is an explicit contextual model demonstrating consistency.

### Decoherence and the classical limit

**Decoherence** [ESTABLISHED as dynamics; [CONTESTED] as a *solution* to measurement]. Coupling a system to an environment $\mathcal{E}$ and tracing it out drives $\rho_S$ toward approximate diagonality in a *pointer basis* selected by the interaction Hamiltonian (einselection; Zurek). Markovian open-system evolution is the **GKSL/Lindblad** master equation,

$$ \dot\rho = -\tfrac{i}{\hbar}[H, \rho] + \sum_k \Big( L_k \rho L_k^\dagger - \tfrac{1}{2}\{L_k^\dagger L_k, \rho\}\Big), $$

the most general generator of a CPTP semigroup. Decoherence explains why interference is unobservable for macroscopic superpositions, and *why* a quasi-classical preferred basis emerges, on extraordinarily short timescales. It does **not**, by itself, select a single outcome: the reduced $\rho_S$ is an *improper* mixture, while the global state remains a superposition. Conflating the two ("decoherence solves measurement") is a category error. The distinction is [ESTABLISHED]; its interpretive significance is [CONTESTED].

**Classical limit.** Ehrenfest's theorem,

$$ \tfrac{d}{dt}\langle\hat{x}\rangle = \tfrac{1}{m}\langle\hat{p}\rangle, \qquad \tfrac{d}{dt}\langle\hat{p}\rangle = -\langle\nabla V\rangle, $$

reproduces Newton's laws **only when** $\langle\nabla V(\hat{x})\rangle \approx \nabla V(\langle\hat{x}\rangle)$, i.e. for narrow wavepackets in slowly varying potentials. The $\hbar \to 0$ limit is *singular*: WKB / stationary-phase analysis shows the phase $S/\hbar$ oscillates without bound and classical trajectories emerge as stationary-phase points, but the limit is non-uniform — caustics, tunneling $\sim e^{-S/\hbar}$, and chaotic systems (where the Ehrenfest time grows only logarithmically in $1/\hbar$) obstruct it. The Wigner–Weyl–Moyal phase-space formulation makes this precise: the Moyal star-product bracket reduces to the Poisson bracket as $\hbar \to 0$. That the limit is subtle/singular is [ESTABLISHED]; a fully general derivation of classicality is [OPEN]. See [domains/classical-mechanics.md](classical-mechanics.md).

### Identical particles and statistics

For indistinguishable particles the physical Hilbert space is a symmetry sector under particle exchange. In 3D the exchange is governed by the symmetric group: states are totally symmetric (**bosons**, integer spin) or antisymmetric (**fermions**, half-integer spin), the latter producing the Pauli exclusion principle and the Slater-determinant structure of atoms. The connection between spin and statistics is a **theorem of relativistic QFT** (the spin–statistics theorem; requires microcausality, positive energy, Lorentz invariance) — *not* derivable within NRQM, where it enters as an extra postulate. In 2D the exchange is governed by the braid group, permitting **anyons** with fractional statistics (relevant to the fractional quantum Hall effect). The spin–statistics connection is [ESTABLISHED] in QFT and an *imported input* to NRQM; 2D anyons are [ESTABLISHED] theoretically and via FQHE phenomenology. See [domains/particle-physics.md](particle-physics.md) and [domains/statistical-mechanics.md](statistical-mechanics.md).

## Foundational assumptions

Status values follow the [ASSUMPTIONS_LEDGER.md](../ASSUMPTIONS_LEDGER.md) convention: *fundamental / likely-fundamental / historical-artifact / conventional-choice / unclear*.

| Assumption | Status | Justification |
|---|---|---|
| States live in a complex Hilbert space; amplitudes superpose linearly (superposition principle). | fundamental | [ESTABLISHED] Linearity underlies all interference and is confirmed to extraordinary precision; searches for nonlinear corrections (Weinberg tests; Bialynicki-Birula–Mycielski) bound them severely. That the field is **complex** (not real or quaternionic) is subtler: real-QM was long thought an empirically equivalent convention, but recent multipartite Bell-type tests (≈2021–2022) argue standard complex QM cannot be reproduced by a real-Hilbert-space theory under standard tensor-product locality assumptions [INFERENCE/CONTESTED], so complexity is plausibly fundamental modulo those framework assumptions. |
| Observables are self-adjoint operators; measured values lie in the spectrum. | likely-fundamental | [ESTABLISHED as framework; partly conventional in scope] Self-adjointness (not mere symmetry) is forced if one wants real spectra, a spectral measure, and a unitary group (Stone). But identifying *all* self-adjoint operators with measurable quantities is an idealization: superselection rules forbid measuring some (e.g. coherent superpositions of distinct charge), and the POVM framework shows projective observables are a special case. The *form* is fundamental; the *exhaustiveness* is convenient idealization. |
| The Born rule $\Pr = \operatorname{Tr}(\rho E)$ gives outcome probabilities. | likely-fundamental | [ESTABLISHED empirically; derivation CONTESTED] Gleason fixes it as the unique noncontextual probability measure on projections for $\dim \ge 3$, so given the scaffolding it is essentially forced. Whether it can be *derived* from the unitary part alone (Deutsch–Wallace decision theory; Zurek envariance) rather than postulated is genuinely [CONTESTED]. As a postulate, fundamental; as a theorem, open. |
| The projection/collapse postulate (A6) is a real, distinct dynamical process. | unclear | [CONTESTED] The crux of the measurement problem. Collapse cannot be derived from unitary evolution, yet A5 and A6 are jointly applied with a vague "measurement" trigger (Bell's "shifty split"). Whether collapse is (i) real new dynamics (GRW/CSL), (ii) an artifact of not tracking environment/observer (Everett, decoherence), or (iii) an information-update rule (QBism) is exactly what interpretations dispute. The bare postulate is very likely *not* fundamental as stated, but its replacement is unknown. |
| Composite systems combine by tensor product (A7). | likely-fundamental | [ESTABLISHED operationally; INFERENCE as necessity] The tensor product encodes local tomography and the existence of entanglement, and is singled out among reasonable composition rules in GPT reconstructions. It could conceivably be otherwise (direct sum; theories without local tomography), so it is a strong physical principle rather than pure logical necessity. |
| Time is an external classical parameter, not an operator (no time observable). | historical-artifact | [INFERENCE] Pauli's theorem shows no self-adjoint time operator is conjugate to a Hamiltonian bounded below, so $t$ is a c-number while $x$ is an operator — an asymmetry inherited from non-relativistic, fixed-background thinking. Plausibly an artifact that becomes untenable in quantum gravity (problem of time) and is awkward even in relativistic QM. Relational/timeless formulations (Page–Wootters) recast time as correlation with a clock subsystem. |
| Global phase and overall normalization are unphysical (states are rays). | conventional-choice | [ESTABLISHED] Pure representational convention with no observable content for closed systems — only *relative* phases matter. The projective structure (rays / rank-one projectors) is the invariant content; the unit-vector description is a chart on it. (Unobservability of *relative* phases between superselection sectors is a deeper, dynamical fact, distinct from this convention.) |
| Hilbert space is separable (countable basis). | conventional-choice | [ESTABLISHED for NRQM] Adequate for all standard single-system QM; non-separable spaces appear only in special constructions (some QFT representations, certain idealized limits). Not physically load-bearing for this domain. |
| Spin–statistics: integer↔symmetric/boson, half-integer↔antisymmetric/fermion. | fundamental | [ESTABLISHED] In NRQM an *added postulate*; a *theorem* in relativistic QFT (microcausality, positive energy, Lorentz invariance). Its truth is fundamental physics, but its status *within NRQM* is an imported input — a signal that NRQM is not closed. In 2D the exchange structure is richer (braid group → anyons), so the boson/fermion dichotomy is dimension-dependent, not absolute. |
| Measurement-independence / "free choice" of settings (used in Bell theorems). | likely-fundamental | [CONTESTED/OPEN] Bell's no-go assumes the hidden variable $\lambda$ is statistically independent of the chosen settings. Denying it (superdeterminism or retrocausality) is a logically open escape preserving locality, but is widely regarded as conspiratorial and is not independently motivated. Best flagged as a load-bearing assumption rather than settled. |

## Domain of validity

[ESTABLISHED] NRQM is the empirically correct description for systems where:

1. Particle speeds and binding energies are small compared to rest-mass energy ($v \ll c$, $E \ll mc^2$), so particle number is conserved and pair creation is negligible;
2. Gravity is dynamically irrelevant (no need for a quantum spacetime);
3. The number of degrees of freedom is finite, so the Stone–von Neumann theorem applies and the CCR representation is essentially unique.

In this regime QM is among the most precisely tested theories in physics: atomic spectra, the quantum Hall effect, superconductivity and superfluidity, chemistry, semiconductors, NMR, and quantum-information experiments all confirm it. There is **no confirmed experimental deviation** from quantum predictions anywhere. The theory has been tested for superpositions of objects up to large molecules (matter-wave interferometry), continually pushing the boundary at which classicality must emerge. Relevant scales are catalogued in [CONSTANTS_AND_SCALES.md](../CONSTANTS_AND_SCALES.md).

## Where it breaks down

A disciplined accounting distinguishes (a) genuine internal *inconsistencies*, (b) *domain-of-validity* mismatches where a wider theory takes over, and (c) *unsolved-but-consistent* problems. See [GAPS_AND_CONTRADICTIONS.md](../GAPS_AND_CONTRADICTIONS.md).

- **The measurement problem (A5 vs A6).** [ESTABLISHED as a structural tension; resolution OPEN/CONTESTED] Unitary evolution (A5) is linear and never turns a superposition into a single outcome; the projection postulate (A6) does exactly that, stochastically. Applied to an apparatus + system + observer all treated quantum-mechanically, A5 predicts an entangled superposition of pointer states (Schrödinger's cat; Wigner's friend), while we only ever observe one outcome. The theory does not specify what physical process, system size, or interaction constitutes a "measurement" triggering A6. This is a genuine *incompleteness* — a type-(a) inconsistency between two purported universal dynamical laws, with no rule demarcating their jurisdictions.

- **Self-adjointness vs symmetry; domains and boundary conditions.** [ESTABLISHED — a routinely glossed rigor gap, type (c)] The physicist's "Hermitian operator" is often only symmetric. The distinction is physical: momentum on a half-line or interval has many inequivalent self-adjoint extensions (parameterized by deficiency indices / boundary conditions), each a different physics; some Hamiltonians are not even essentially self-adjoint, so dynamics is ambiguous until a boundary condition is fixed. Naive manipulation of $\hat{x}, \hat{p}$ "eigenstates" requires the rigged-Hilbert-space machinery to be rigorous. A breakdown of the *informal* formalism, repaired by functional analysis — not of the theory.

- **Born rule as postulate vs theorem.** [CONTESTED, type (c)] In no-collapse readings, probability is puzzling because the dynamics is deterministic and "all outcomes happen". Decision-theoretic (Deutsch–Wallace) and envariance (Zurek) derivations attempt to recover Born weights from symmetry/rationality, but critics charge circularity or that they fail to explain why branch weights should *matter* (the incoherence/quantitative problem). Gleason constrains the *form* but presupposes the scaffolding. The rule's *origin* is unsettled though its *form* is forced.

- **Tension with relativistic locality.** [ESTABLISHED, but no operational inconsistency — a type-(b)/conceptual matter] Collapse (A6) and entanglement appear to act "instantaneously" across spacelike separation, and Bell violations show outcomes cannot be locally predetermined. Yet the **no-signaling theorem** guarantees no usable information travels faster than light: local marginals are independent of the distant setting. So there is a *conceptual* clash with relativistic intuition but *not* a contradiction with special relativity's operational content. Making collapse Lorentz-covariant is where objective-collapse models face their hardest challenge. See [domains/general-relativity.md](general-relativity.md).

- **The classical limit is singular.** [ESTABLISHED, type (c)] $\hbar \to 0$ is non-smooth: $e^{iS/\hbar}$ oscillates without bound, tunneling $\sim e^{-S/\hbar}$ vanishes non-analytically, and for chaotic systems the Ehrenfest time grows only logarithmically in $1/\hbar$. A robust general derivation of classicality remains incomplete — unsolved-but-consistent, not inconsistent.

- **Time and the energy–time uncertainty relation.** [ESTABLISHED] By Pauli's theorem there is no self-adjoint time operator conjugate to a lower-bounded $H$, so $\Delta E\, \Delta t \gtrsim \hbar$ is **not** an instance of the Robertson relation; $\Delta t$ must be reinterpreted (lifetime; characteristic evolution time, via the Mandelstam–Tamm bound). This exposes the asymmetric, external-parameter treatment of time as a structural limitation, acute in quantum gravity.

- **Infinite degrees of freedom and superselection.** [ESTABLISHED, type (b)] The single-Hilbert-space, Stone–von Neumann picture fails for infinitely many degrees of freedom: unitarily inequivalent representations, superselection sectors (charge; particle number in the relativistic vacuum; distinct thermodynamic phases), and the need for the algebraic ($C^\ast$ / von Neumann-algebra) formulation. Textbook QM silently assumes the finite-dof setting; repaired by algebraic QFT and quantum statistical mechanics.

## Open problems (internal)

Tracked also in [OPEN_PROBLEMS.md](../OPEN_PROBLEMS.md) and, where conjectural, [HYPOTHESES.md](../HYPOTHESES.md).

1. **The measurement problem.** [OPEN/CONTESTED] What physically (if anything) selects a single outcome, and where is the quantum–classical cut? The deepest internal problem: the axioms as stated are not a closed, consistent universal dynamics. No experiment yet distinguishes the no-collapse interpretations from one another; only collapse models make distinct predictions.

2. **Is collapse a real dynamical process?** [OPEN, empirically testable — a genuine virtue] Objective-collapse models (GRW; CSL; Diósi–Penrose gravitational collapse) add stochastic nonlinear terms that spontaneously localize macroscopic superpositions, predicting tiny deviations from unitary QM (anomalous heating; suppression of large-mass interference). Matter-wave interferometry, ultracold optomechanics, and underground spontaneous-radiation searches are progressively constraining or excluding parameter regions. The Diósi–Penrose proposal ties collapse to gravity and is being squeezed but not settled.

3. **Can the Born rule be derived rather than postulated?** [OPEN/CONTESTED] Gleason fixes its form given noncontextuality; Deutsch–Wallace and Zurek attempt full derivations within Everett. Whether any is non-circular is actively disputed; no universally accepted derivation exists.

4. **Probability in deterministic no-collapse interpretations (Everett).** [OPEN/CONTESTED] If all branches are equally real, the meaning of "the probability of an outcome" and the empirical confirmation of Born weights (the incoherence and quantitative problems) remain contested even among Everettians.

5. **Reconstructing QM from physical/operational axioms.** [OPEN, active and fruitful] The generalized-probabilistic-theories program (Hardy 2001; Chiribella–D'Ariano–Perinotti 2011; Masanes–Müller) derives the Hilbert-space formalism from information-theoretic postulates (purification; local tomography; continuous reversibility). Illuminating but not yet a single agreed-upon derivation; the axioms' physical necessity is debated. See [UNIFYING_PRINCIPLES.md](../UNIFYING_PRINCIPLES.md).

6. **Origin and necessity of complex amplitudes and the tensor-product rule.** [OPEN/INFERENCE] Recent (≈2021–2022) multipartite tests argue real-Hilbert-space QM is experimentally distinguishable from complex QM under standard locality assumptions, suggesting complexity is not mere convention — but the conclusion is conditional on those framework assumptions and is debated.

## Connections to other frameworks

- **[Relativistic Quantum Field Theory](quantum-field-theory.md).** NRQM is the $c \to \infty$, fixed-particle-number effective limit of QFT. QFT supplies what NRQM must postulate — the spin–statistics connection, antiparticles, and the resolution of one-particle relativistic pathologies (Klein paradox, negative-energy states). It also breaks NRQM's uniqueness pillar: Stone–von Neumann fails for infinite dof, giving inequivalent representations, Haag's theorem, and the need for the algebraic formulation. *Clash:* NRQM's single unique CCR representation and global state do not survive.

- **[Classical mechanics](classical-mechanics.md).** Recovered in the singular $\hbar \to 0$ limit via Ehrenfest, WKB/stationary phase, and the Wigner–Moyal phase-space formalism (Moyal bracket → Poisson bracket). The map is non-uniform (caustics, tunneling, chaos). Decoherence supplies the *effective* emergence of a classical pointer basis. *Clash:* definite trajectories and noncontextual values are excluded (Bell; Kochen–Specker).

- **[Quantum information / computation](information-theory.md).** QM is the operational substrate. The POVM/CPTP/Stinespring generalization, entanglement as a resource (teleportation; dense coding), the Tsirelson bound, and no-cloning are QM theorems reframed as information primitives. Device-independent cryptography rests directly on Bell violation. The GPT reconstruction program runs the arrow backward, deriving QM from information axioms.

- **[Quantum gravity](cosmology.md) and [general relativity](general-relativity.md).** The sharpest clash. QM needs a fixed classical spacetime and external time; GR makes spacetime dynamical. The problem of time (the Wheeler–DeWitt constraint $H|\Psi\rangle = 0$ has no external $t$), black-hole information, and gravitationally induced collapse (Diósi–Penrose) all live at this interface. It is unresolved whether QM, GR, or both must be modified. See [UNIFICATION_LANDSCAPE.md](../UNIFICATION_LANDSCAPE.md).

- **[Statistical mechanics](statistical-mechanics.md) / [thermodynamics](thermodynamics.md).** Density matrices and the von Neumann entropy $S = -\operatorname{Tr}\rho\ln\rho$ connect to thermal ensembles; the GKSL/Lindblad equation governs open-system thermalization and decoherence. The eigenstate thermalization hypothesis (ETH) addresses how isolated quantum systems appear to thermalize under unitary evolution. Quantum statistics (Bose–Einstein, Fermi–Dirac) follow from identical-particle symmetrization.

- **Foundations / interpretations (the explicit ledger of costs).** Each is empirically equivalent to standard QM *except* objective collapse, so the choice is currently philosophical/aesthetic rather than experimental — itself a striking feature of the domain. **Copenhagen/standard:** accepts a primitive classical–quantum cut, declines to describe its mechanism (instrumentalist; criticized as incomplete). **Many-worlds (Everett):** keeps only unitary A5, pays with branching multiplicity and an unsolved account of probability. **de Broglie–Bohm:** restores definite particle positions guided by $\psi$, pays with explicit nonlocality, contextuality, and relativistic/field awkwardness. **GRW/CSL objective collapse:** modifies the dynamics, pays with new fundamental stochasticity and Lorentz-covariance tension — but is empirically testable. **QBism:** reads $\psi$ and the Born rule as an agent's subjective degrees of belief, dissolving the measurement problem at the cost of a non-objective $\psi$. **Relational QM (Rovelli):** facts are relative to systems; no absolute state. **Consistent/decoherent histories:** assigns probabilities to coarse-grained history sets, criticized for a proliferation of incompatible frameworks. Key findings cross-referenced in [FINDINGS.md](../FINDINGS.md).

## Key references

See [BIBLIOGRAPHY.md](../BIBLIOGRAPHY.md) for the consolidated, deduplicated citation list. Anchors for this page:

- P. A. M. Dirac, *The Principles of Quantum Mechanics* (Oxford UP, 1930; 4th ed. 1958) — bra-ket formalism and transformation theory.
- J. von Neumann, *Mathematical Foundations of Quantum Mechanics* (Springer 1932; Princeton UP transl. 1955) — the rigorous Hilbert-space axiomatization and first serious measurement analysis.
- M. Reed and B. Simon, *Methods of Modern Mathematical Physics*, Vols. I–II (Academic Press, 1972–1975) — unbounded operators, self-adjointness, Stone's theorem, the spectral theorem.
- J. S. Bell, *Speakable and Unspeakable in Quantum Mechanics* (Cambridge UP, 1987; 2nd ed. 2004) — Bell inequality and the "shifty split" critique.
- J. F. Clauser, M. A. Horne, A. Shimony, R. A. Holt, *Phys. Rev. Lett.* **23**, 880 (1969) — the CHSH inequality.
- S. Kochen and E. P. Specker, *J. Math. Mech.* **17**, 59 (1967) — quantum contextuality for $\dim \ge 3$.
- A. M. Gleason, *J. Math. Mech.* **6**, 885 (1957) — uniqueness of the Born-rule form.
- W. H. Zurek, "Decoherence, einselection, and the quantum origins of the classical," *Rev. Mod. Phys.* **75**, 715 (2003).
- G. C. Ghirardi, A. Rimini, T. Weber, *Phys. Rev. D* **34**, 470 (1986) — the GRW objective-collapse model.
- H. Everett III, *Rev. Mod. Phys.* **29**, 454 (1957) — relative-state / many-worlds.
- D. Bohm, *Phys. Rev.* **85**, 166 & 180 (1952) — pilot-wave hidden-variable theory.
- V. Gorini, A. Kossakowski, E. C. G. Sudarshan (1976); G. Lindblad (1976) — the GKSL generator.
- A. Peres, *Quantum Theory: Concepts and Methods* (Kluwer, 1995) — operationally rigorous treatment of measurement, Kochen–Specker, and Bell.
- M. A. Nielsen and I. L. Chuang, *Quantum Computation and Quantum Information* (Cambridge UP, 2000; 10th-anniv. ed. 2010) — density matrices, POVMs, Kraus/CPTP maps, Tsirelson, no-cloning.
- M. M. Wilde, *Quantum Information Theory* (Cambridge UP, 2nd ed. 2017) — channels, entropies, operational structure.

## See also

- [THEORY_MAP.md](../THEORY_MAP.md) — placement among physical frameworks
- [EPISTEMICS.md](../EPISTEMICS.md) — epistemic-marker conventions
- [ASSUMPTIONS_LEDGER.md](../ASSUMPTIONS_LEDGER.md) — cross-domain assumption status values
- [GAPS_AND_CONTRADICTIONS.md](../GAPS_AND_CONTRADICTIONS.md) — inconsistency vs domain-mismatch vs unsolved
- [OPEN_PROBLEMS.md](../OPEN_PROBLEMS.md) and [HYPOTHESES.md](../HYPOTHESES.md)
- [UNIFICATION_LANDSCAPE.md](../UNIFICATION_LANDSCAPE.md), [UNIFYING_PRINCIPLES.md](../UNIFYING_PRINCIPLES.md)
- [CONSTANTS_AND_SCALES.md](../CONSTANTS_AND_SCALES.md), [GLOSSARY.md](../GLOSSARY.md), [FINDINGS.md](../FINDINGS.md)
- Domain neighbors: [quantum-field-theory.md](quantum-field-theory.md), [general-relativity.md](general-relativity.md), [classical-mechanics.md](classical-mechanics.md), [statistical-mechanics.md](statistical-mechanics.md), [thermodynamics.md](thermodynamics.md), [particle-physics.md](particle-physics.md), [information-theory.md](information-theory.md), [cosmology.md](cosmology.md), [mathematics.md](mathematics.md)

## References

Full citations consolidated in [BIBLIOGRAPHY.md](../BIBLIOGRAPHY.md). See also [README.md](../README.md), [AGENTS.md](../AGENTS.md), [ROADMAP.md](../ROADMAP.md), and [CHANGELOG.md](../CHANGELOG.md) for wiki-level navigation and provenance.
