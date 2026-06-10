---
title: Mathematics for Physics
type: domain
tags: [domain, mathematics]
updated: 2026-06-08
---

# Mathematics for Physics

Status: Living page — rigorous core, actively curated at the analysis/QFT seam
Last updated: 2026-06-08

This page treats mathematics not as a neutral notation but as the *substrate* of physical theory, examined layer by layer for where it is a theorem versus where it is a heuristic. The organizing question throughout is epistemic: which mathematical structures underlying physics are rigorously established, which are productive abuses of notation, and which mark genuine open frontiers. See [EPISTEMICS.md](../EPISTEMICS.md) for the marker conventions and [THEORY_MAP.md](../THEORY_MAP.md) for how this domain sits beneath the others.

## Scope

Covered: linear algebra and infinite-dimensional Hilbert spaces; functional analysis (unbounded self-adjoint operators, the spectral theorem, rigged Hilbert spaces); operator algebras (C\*- and von Neumann algebras, Tomita–Takesaki modular theory); differential geometry (manifolds, fiber bundles, connections, curvature) as the geometry of gauge theory and gravity; Lie groups, Lie algebras, and representation theory; measure theory and probability; topology and its physical role (anomalies, instantons, topological phases); the ill-defined path-integral measure and the rigor gap of interacting QFT; constructive and algebraic QFT; category theory and higher structures (TQFT, factorization algebras); and the "unreasonable effectiveness" meta-question.

Excluded: detailed physical predictions, numerical methods, and the internal physics of particular models except as illustrations of mathematical structure. Those live in the [domains/](../THEORY_MAP.md) pages proper.

## Core formalism

### 1. Linear algebra and Hilbert space

The kinematic arena of quantum mechanics is a separable complex Hilbert space $\mathcal{H}$: a complex vector space with inner product $\langle\cdot,\cdot\rangle$ (antilinear in the first slot by physics convention), complete in the induced norm $\|\psi\|=\sqrt{\langle\psi,\psi\rangle}$. Separability (a countable orthonormal basis exists) is a standing background assumption. The canonical model is $L^2(\mathbb{R}^n, d^n x)$. [ESTABLISHED]

States are not vectors but rays — unit vectors up to phase, i.e. points of projective space $\mathbb{P}(\mathcal{H})$, equivalently rank-one projections. **Wigner's theorem** [ESTABLISHED] states that any bijection of $\mathbb{P}(\mathcal{H})$ preserving transition probabilities $|\langle\psi,\phi\rangle|^2$ is implemented on $\mathcal{H}$ by an operator that is *either* unitary *or* antiunitary. Combined with continuity (one-parameter groups) this forces unitarity, and via Stone's theorem a self-adjoint generator.

### 2. Unbounded operators and the spectral theorem

Observables are self-adjoint operators. The subtlety separating physics from naïve linear algebra is that the fundamental observables — position $\hat x$, momentum $\hat p = -i\hbar\, d/dx$, Hamiltonians — are **unbounded** and defined only on a dense domain $D(A)\subsetneq\mathcal{H}$. One must distinguish:

- **symmetric**: $\langle A\psi,\phi\rangle=\langle\psi,A\phi\rangle$ for $\psi,\phi\in D(A)$;
- **self-adjoint**: symmetric *and* $D(A)=D(A^\ast)$.

Only self-adjointness — not mere symmetry ("Hermiticity") — guarantees a real spectrum and unitary evolution $e^{-itA}$. The gap is measured by the **deficiency indices** $n_\pm = \dim\ker(A^\ast \mp i)$: a symmetric operator is essentially self-adjoint iff $n_+=n_-=0$, and admits self-adjoint extensions iff $n_+=n_-$. Different extensions are genuinely different physics (boundary conditions; the particle on a half-line; singular potentials). [ESTABLISHED]

**Spectral theorem (multiplication form).** For any self-adjoint $A$ there is a measure space $(M,\mu)$, a unitary $U:\mathcal{H}\to L^2(M,\mu)$, and a real measurable $f$ with $UAU^{-1}$ = multiplication by $f$. Equivalently there is a projection-valued measure $E(\cdot)$ on the Borel sets of $\mathbb{R}$ with

$$A=\int_{\sigma(A)}\lambda\,dE(\lambda),\qquad f(A)=\int f(\lambda)\,dE(\lambda).$$

This is what makes "probability that a measurement of $A$ lies in $\Delta$" equal $\|E(\Delta)\psi\|^2$ — the Born rule on the spectral side. [ESTABLISHED]

**Stone's theorem.** Strongly continuous one-parameter unitary groups $U(t)$ are in bijection with self-adjoint generators: $U(t)=e^{-itA}$, with $A\psi=i\lim_{t\to0}(U(t)\psi-\psi)/t$ on the domain where the limit exists. This underwrites time evolution (generator: the Hamiltonian) and translations (generator: momentum). [ESTABLISHED]

**Rigged Hilbert spaces.** The Dirac eigenkets $|x\rangle,|p\rangle$ are not elements of $\mathcal{H}$ (continuous spectrum has no eigenvectors). Their rigorous home is a **Gelfand triple** $\Phi\subset\mathcal{H}\subset\Phi'$, with $\Phi$ a nuclear space (e.g. Schwartz functions) and $\Phi'$ its dual (tempered distributions); "eigenkets" are distributional eigenvectors in $\Phi'$ via the nuclear spectral theorem. It is [ESTABLISHED] that this makes Dirac's bra-ket bookkeeping rigorous; the physicist's manipulations are heuristic shorthand for it. See [domains/quantum-mechanics.md](quantum-mechanics.md).

### 3. Operator algebras

The algebraic approach takes the observables themselves as primary, rather than fixing $\mathcal{H}$.

A **C\*-algebra** is a complex Banach algebra $\mathcal{A}$ with involution $\ast$ satisfying the C\*-identity $\|a^\ast a\|=\|a\|^2$. The **Gelfand–Naimark theorem** [ESTABLISHED] shows every abstract C\*-algebra is isometrically $\ast$-isomorphic to a norm-closed $\ast$-subalgebra of $B(\mathcal{H})$; the commutative case is $C_0(X)$ for locally compact Hausdorff $X$ — the seed of noncommutative geometry ("spaces" $\leftrightarrow$ commutative C\*-algebras, so general C\*-algebras are "noncommutative spaces"). **States** are positive normalized linear functionals $\omega$, and the **GNS construction** reconstructs from $(\mathcal{A},\omega)$ a representation $\pi_\omega$ on a Hilbert space with cyclic vector $\Omega$ such that $\omega(a)=\langle\Omega,\pi_\omega(a)\Omega\rangle$. [ESTABLISHED]

A **von Neumann algebra** is a $\ast$-subalgebra $M\subset B(\mathcal{H})$ equal to its own double commutant, $M=M''$ (equivalently weakly closed, by the bicommutant theorem). Murray–von Neumann classified factors (trivial center) into types $\mathrm{I}_n,\mathrm{I}_\infty$ (ordinary QM, $B(\mathcal{H})$), $\mathrm{II}_1,\mathrm{II}_\infty$ (continuous trace), and $\mathrm{III}$ (no trace). [ESTABLISHED] A structurally crucial fact for QFT: the **local algebras of relativistic quantum field theory are generically type III$_1$ factors**. This is *why* there is no global number operator on a single local algebra, no normalizable vacuum localized there, and why the **Reeh–Schlieder theorem** holds (the vacuum is cyclic and separating for any local algebra). [ESTABLISHED] See [domains/quantum-field-theory.md](quantum-field-theory.md).

**Tomita–Takesaki modular theory.** Given a von Neumann algebra $M$ with a cyclic and separating vector $\Omega$, the closure of $S_0: a\Omega\mapsto a^\ast\Omega$ has polar decomposition $S=J\Delta^{1/2}$, yielding the modular conjugation $J$ and the positive modular operator $\Delta$. The deep theorems: $JMJ=M'$ (the commutant), and the **modular automorphism group** $\sigma_t(a)=\Delta^{it}a\Delta^{-it}$ maps $M$ to itself. The state $\omega=\langle\Omega,\cdot\,\Omega\rangle$ satisfies the **KMS condition** at inverse temperature $\beta=1$ for $\sigma_t$ — a structural identity between equilibrium statistical mechanics (KMS states) and the intrinsic dynamics a state induces on its algebra. [ESTABLISHED] This underlies the **Bisognano–Wichmann theorem** (the Rindler/Unruh modular flow is the Lorentz boost) and modern work on entropy and energy conditions. See [domains/statistical-mechanics.md](statistical-mechanics.md).

### 4. Differential geometry and gauge theory

A smooth manifold $M$ models spacetime/configuration space. The objects: tangent/cotangent bundles, tensor fields, the exterior algebra $\Omega^k(M)$ with exterior derivative $d$ ($d^2=0$), Stokes' theorem $\int_M d\omega=\int_{\partial M}\omega$, and de Rham cohomology $H^k_{dR}(M)=\ker d/\operatorname{im} d$. For gravity one adds a (pseudo-)Riemannian metric $g$, the unique torsion-free metric (Levi-Civita) connection $\nabla$, curvature $R^\rho{}_{\sigma\mu\nu}$, and Einstein's equations $G_{\mu\nu}+\Lambda g_{\mu\nu}=8\pi G\,T_{\mu\nu}$. See [domains/general-relativity.md](general-relativity.md).

**Principal bundles and connections** are the geometry of gauge theory. A principal $G$-bundle $P\xrightarrow{\pi}M$ carries a free fiberwise $G$-action. A **connection** is a Lie-algebra-valued 1-form $A\in\Omega^1(P,\mathfrak g)$ (the gauge potential); its **curvature** is

$$F=dA+\tfrac12[A,A]=dA+A\wedge A,\qquad dF+[A,F]=0\ \ (\text{Bianchi}).$$

Matter fields are sections of associated vector bundles; the gauge-covariant derivative is $D=d+\rho(A)$ in representation $\rho$. Gauge transformations act as $A\mapsto gAg^{-1}-(dg)g^{-1}$, $F\mapsto gFg^{-1}$, and the Yang–Mills action is

$$S_{YM}=\frac{1}{2g^2}\int_M \operatorname{tr}(F\wedge\star F).$$

The dictionary "gauge field = connection on a principal bundle; field strength = curvature; Wilson line = parallel transport / holonomy" is exact. [ESTABLISHED] Characteristic classes (Chern, Pontryagin, Euler) built from $F$ are topological invariants; e.g. the instanton number / second Chern number $\frac{1}{8\pi^2}\int\operatorname{tr}(F\wedge F)\in\mathbb{Z}$.

**Index theory.** The Atiyah–Singer index theorem equates the analytic index of an elliptic operator (e.g. a Dirac operator $\slashed D$ coupled to a gauge field) with a topological integral of characteristic classes, controlling fermion zero modes, chiral anomalies, and instanton contributions:

$$\operatorname{ind}(\slashed D)=\dim\ker\slashed D-\dim\operatorname{coker}\slashed D=\int_M \hat A(M)\wedge\operatorname{ch}(F).$$ [ESTABLISHED]

### 5. Lie groups and representation theory

Continuous symmetries are Lie groups $G$; their infinitesimal version are Lie algebras $\mathfrak g$ with bracket $[\cdot,\cdot]$, related by $\exp:\mathfrak g\to G$. Physical states transform in **unitary representations**. Structural results: Peter–Weyl (compact groups), highest-weight classification of finite-dimensional irreps of semisimple Lie algebras (Cartan–Weyl, root/weight lattices), and induced representations for noncompact groups. [ESTABLISHED]

The relativistic kinematic backbone is **Wigner's classification**: relativistic particles are unitary irreducible representations of the Poincaré group $\mathrm{ISO}(1,3)^\uparrow_+ = \mathbb{R}^{1,3}\rtimes\mathrm{SL}(2,\mathbb{C})$, labeled by mass $m\ge 0$ (Casimir $P^2$) and spin/helicity (little group: $\mathrm{SU}(2)$ for $m>0$, $\mathrm{ISO}(2)$/helicity for $m=0$). The need for *projective* representations and the universal cover $\mathrm{SL}(2,\mathbb{C})\to\mathrm{SO}(1,3)$ is *why* half-integer spin (spinors) exist. [ESTABLISHED] See [domains/particle-physics.md](particle-physics.md).

### 6. Measure, probability, and the path integral

Classical probability is Kolmogorov's: a measure space $(\Omega,\mathcal F,P)$ with $P(\Omega)=1$, random variables as measurable functions, expectation as Lebesgue integral. Quantum theory generalizes this to a **noncommutative probability** over a von Neumann algebra with a state, and to POVM-valued observables. [ESTABLISHED] See [domains/information-theory.md](information-theory.md).

The **path integral** $\langle q_f|e^{-iHT/\hbar}|q_i\rangle = \int\mathcal{D}q\, e^{iS[q]/\hbar}$ is rigorous in two regimes and heuristic in general:

- QM (finitely many degrees of freedom), **Euclidean** ($t\to-i\tau$): the Feynman–Kac formula expresses $e^{-\tau H}$ via the genuine **Wiener measure** on continuous paths — fully rigorous. [ESTABLISHED]
- The **Lorentzian** functional measure $\mathcal{D}q\,e^{iS}$ is *not* a measure: there is no translation-invariant $\sigma$-additive measure on infinite-dimensional spaces, and $e^{iS}$ oscillates without absolute convergence. [ESTABLISHED that no such measure exists; the object is heuristic.]
- In QFT the would-be measure $\mathcal{D}\phi$ lives on distributions, requires renormalization, and exists rigorously only for super-renormalizable models in low dimensions (constructive QFT: $P(\phi)_2$, $\phi^4_3$; Glimm–Jaffe, Nelson, Osterwalder–Schrader). The **Osterwalder–Schrader axioms** give precise conditions (reflection positivity above all) under which a Euclidean measure reconstructs a relativistic QFT. [ESTABLISHED]

### 7. Topology in physics

Topology enters through *global* features invisible to local field equations: homotopy groups classify defects and solitons ($\pi_1$ vortices, $\pi_2$ monopoles, $\pi_3$ Skyrmions/instantons via $\pi_3(G)=\mathbb{Z}$ for simple $G$); cohomology and characteristic classes classify anomalies and flux quantization (Dirac quantization $\leftrightarrow c_1\in H^2(M,\mathbb{Z})$); $K$-theory and twisted/equivariant variants classify topological phases of matter and D-brane charges. The integer quantum Hall conductance is a first Chern number (TKNN invariant). Anomalies are computed by index theory and descend via the Stora–Zumino descent equations. [ESTABLISHED]

### 8. Category theory and higher structures

Functorial QFT (Atiyah–Segal axioms) recasts a TQFT as a symmetric monoidal functor $Z:\mathrm{Bord}_n\to\mathcal{C}^{\otimes}$: manifolds $\mapsto$ vector spaces, bordisms $\mapsto$ linear maps, gluing $\mapsto$ composition. The **cobordism hypothesis** (Baez–Dolan; proof program by Lurie) characterizes fully extended TQFTs by their value on a point — a fully dualizable object in a symmetric monoidal $(\infty,n)$-category. The framework is rigorous and Lurie's proof is widely accepted [INFERENCE], but the full written details remain less universally vetted than a textbook theorem. **Factorization algebras** (Costello–Gwilliam) rigorously encode the operator-product structure of *perturbative* QFT; this is [ESTABLISHED as mathematics], though its full equivalence to physicists' nonperturbative QFT is only partial.

## Foundational assumptions

| Assumption | Status | Justification |
|---|---|---|
| Pure states are rays in a complex, separable Hilbert space (field $=\mathbb{C}$, not $\mathbb{R}$ or $\mathbb{H}$). | likely-fundamental | [ESTABLISHED] complex Hilbert space reproduces all data. [CONTESTED] whether $\mathbb{C}$ is *forced*: Stueckelberg's real-QM-with-superselection reproduces standard QM, and device-independent "ruling out real QM" results (Renou et al. 2021) reject real QM only under network/independence assumptions. Separability is a near-universal convenience; nonseparable spaces appear in some continuum settings. Quaternionic QM (Finkelstein–Adler) is logically consistent but empirically unsupported. |
| Observables are self-adjoint (not merely symmetric/Hermitian). | fundamental | [ESTABLISHED] self-adjointness is exactly what the spectral and Stone theorems require for real spectra and unitary dynamics; deficiency-index theory shows symmetric-but-not-self-adjoint operators give different or no physics. Choosing a self-adjoint extension is a physical choice (boundary conditions). PT-symmetric/pseudo-Hermitian QM weakens this to similarity-to-self-adjoint — a reformulation, not a refutation. |
| Dynamical symmetries act by unitary (or antiunitary) reps; time evolution is unitary. | fundamental | [ESTABLISHED] via Wigner's theorem plus Stone's theorem; antiunitarity is forced for time reversal. Strict unitarity is in tension with measurement "collapse," a [CONTESTED] interpretational issue, not a mathematical defect. |
| Spacetime is a smooth ($C^\infty$) finite-dimensional manifold; fields are smooth sections of bundles over it. | conventional-choice | [INFERENCE] Smoothness is a powerful idealization, plausibly a low-energy effective description. Causal sets, spin foams, noncommutative geometry, and string-theoretic minimal length all posit that manifold structure dissolves near the Planck scale. Enormously effective, with no established reason it is fundamental. Even classically, weak/distributional solutions relax smoothness. |
| Gauge fields *are* connections on principal $G$-bundles; gauge transformations are bundle automorphisms (gauge = redundancy). | fundamental | [ESTABLISHED] as a mathematical identity (Wu–Yang/Trautman dictionary; Aharonov–Bohm and Dirac quantization confirm the bundle topology is physical). The "redundancy" reading is the standard [INFERENCE]; large-gauge/boundary "soft" charges refine but do not refute it. The structure group $\mathrm{SU}(3)\times\mathrm{SU}(2)\times\mathrm{U}(1)$ is fixed by experiment, hence physical, not conventional. |
| Probabilities follow the Born rule $|\langle\phi|\psi\rangle|^2$; classical Kolmogorov probability is recovered on commuting/decohered subalgebras. | likely-fundamental | [ESTABLISHED] empirically to extreme precision and structurally via **Gleason's theorem** (for $\dim\ge 3$, the only measures on the projection lattice are $\operatorname{Tr}(\rho\,\cdot)$). Whether it can be *derived* from unitary dynamics (Everettian decision-theoretic/envariance arguments) is [CONTESTED]. Fundamental as a postulate; its derivability is open. |
| Relativistic QFT can be axiomatized (Wightman / Haag–Kastler / Osterwalder–Schrader) and a 4D interacting example satisfying these axioms exists. | likely-fundamental | [ESTABLISHED] the axiom systems are consistent with nontrivial low-dimensional models. [OPEN] whether central 4D theories (Yang–Mills, the Standard Model) satisfy them — the Yang–Mills mass-gap problem. A minority view holds perturbatively-defined theories like QED/$\phi^4$ are "trivial" ($\phi^4_4$ triviality is a theorem of Aizenman–Duminil-Copin), existing only as cutoff effective theories — a domain-of-validity matter, not an inconsistency. |
| The Lorentzian path-integral "measure" $\mathcal{D}\phi\,e^{iS}$ is a legitimate integration measure. | historical-artifact | [ESTABLISHED] no $\sigma$-additive translation-invariant measure exists on infinite-dimensional space and $e^{iS}$ is non-absolutely-convergent. The rigorous content is via Euclidean reflection-positive measures (Wiener/OS) and analytic continuation, oscillatory-integral surrogates, or perturbation theory. Productive abuse of notation, astonishingly reliable as bookkeeping. |
| Renormalization is physically meaningful; the Wilsonian effective-field-theory / RG picture organizes cutoff dependence. | fundamental | [ESTABLISHED] empirically (QED, electroweak precision) and conceptually (Wilson's RG; perturbative renormalizability is BPHZ-rigorous order by order). The shift from "infinity subtraction" to "EFT with a physical cutoff" is a genuine conceptual correction; the older framing was partly a historical artifact. Nonperturbative existence of the continuum limit for non-asymptotically-free theories is [OPEN/CONTESTED]. |
| Local QFT algebras are type III$_1$ von Neumann factors (no normal trace, no local number operator, vacuum cyclic & separating). | likely-fundamental | [ESTABLISHED] in algebraic QFT for standard models (Reeh–Schlieder, Bisognano–Wichmann, type-III results). It explains entanglement-area divergences and the need for *relative* (not absolute) entropy. The algebra type can shift in special limits (e.g. type II in some gravitational/large-$N$ crossover analyses). |
| Symmetry groups are Lie groups with continuous unitary reps; superselection sectors organize inequivalent representations. | fundamental | [ESTABLISHED] Wigner's particle classification, the role of universal covers (spin), and Doplicher–Haag–Roberts superselection theory are rigorous and predictive. Generalized/categorical symmetries and quantum groups (in low dimensions) extend but do not overturn this. |

See [ASSUMPTIONS_LEDGER.md](../ASSUMPTIONS_LEDGER.md) for the cross-domain rollup.

## Domain of validity

Each layer is a theorem in a sharp regime and a heuristic beyond it.

1. **Hilbert-space QM** with the spectral/Stone machinery is fully rigorous for finitely many degrees of freedom with well-posed self-adjoint Hamiltonians; the subtleties (domains, self-adjoint extensions) are controllable. [ESTABLISHED]
2. **Stone–von Neumann uniqueness** holds *only* for finitely many canonical pairs. With infinitely many degrees of freedom (QFT, the thermodynamic limit) there are uncountably many unitarily *inequivalent* representations — not a pathology but the correct setting for distinct phases, superselection, and spontaneous symmetry breaking. This is precisely where the "one Hilbert space, one Fock vacuum" intuition breaks. [ESTABLISHED]
3. **Differential geometry / gauge theory as connections** is exact classically and as a quantum *kinematic* framework; its *quantization* (the Yang–Mills measure) is rigorous only perturbatively in 4D.
4. **Constructive QFT** rigorously builds interacting models in $d=2$ ($P(\phi)_2$, Yukawa$_2$, Thirring) and $d=3$ ($\phi^4_3$), exploiting super-renormalizability; $d=4$ interacting theories are *not* constructed. [ESTABLISHED]
5. **Algebraic QFT** (Haag–Kastler nets) is a rigorous *structural* theory wherever local nets exist, including QFT on a fixed curved background; it does not by itself construct interacting 4D dynamics.
6. **Euclidean methods / OS reconstruction** are valid when reflection positivity holds and the continuation back to Lorentzian signature is justified — generically true for static/stationary spacetimes, problematic for generic Lorentzian/cosmological geometries.
7. The whole edifice presupposes a **fixed (possibly curved) background spacetime**. It has no established validity once the metric itself is quantized: quantum gravity lies outside the domain of all these frameworks.

## Where it breaks down

- **Interacting QFT in 4D (Yang–Mills, the Standard Model).** No rigorous nonperturbative construction exists. Perturbation series are asymptotic (Dyson) and generically divergent; QED has a Landau pole and $\phi^4_4$ is *provably trivial* (Aizenman 1981; Aizenman–Duminil-Copin 2021), i.e. its continuum limit is free — strongly suggesting survival only as a cutoff EFT. A true incompleteness of the rigorous program (the Clay mass-gap problem), not a logical inconsistency. [OPEN]
- **The Lorentzian functional measure.** Literal nonexistence; meaning only via Euclidean continuation, oscillatory-integral surrogates, or perturbation theory. Domain-of-validity / abuse-of-notation issue. [ESTABLISHED]
- **Quantization ambiguities.** The classical $\to$ quantum map is not a homomorphism: the **Groenewold–van Hove no-go theorem** proves there is no quantization map respecting $\{\cdot,\cdot\}\mapsto\frac{1}{i\hbar}[\cdot,\cdot]$ on the *whole* Poisson algebra. Operator ordering, choice of polarization (geometric quantization), and self-adjoint extensions are genuine ambiguities fixed only by extra physical input. A fundamental obstruction, not a gap to be closed. [ESTABLISHED]
- **Wick rotation in generic curved/Lorentzian spacetimes.** The Euclidean$\leftrightarrow$Lorentzian dictionary requires a real Euclidean section and reflection positivity, generically absent in time-dependent or cosmological spacetimes (e.g. de Sitter). Without it, neither constructive techniques nor OS reconstruction apply. [OPEN] in those settings.
- **Gauge-fixing and the global configuration space.** The **Gribov ambiguity**: in non-abelian gauge theory no global continuous gauge-fixing section exists (**Singer's theorem** — the gauge orbit space is topologically obstructed), so Faddeev–Popov gauge-fixing is only locally valid and the BRST/path-integral construction is incomplete nonperturbatively. A genuine topological obstruction. [ESTABLISHED]
- **Measurement vs. unitary evolution.** Unitary Schrödinger evolution and projective Born-rule update are two different dynamical laws; reconciling them (the measurement problem) is unresolved. Interpretational, not a mathematical inconsistency — each interpretation is internally consistent but they disagree on ontology. [CONTESTED]
- **QFT + dynamical gravity.** Perturbatively quantized GR is non-renormalizable ('t Hooft–Veltman one-loop matter result; Goroff–Sagnotti two-loop pure-gravity divergence). The smooth-manifold + quantized-metric framework breaks at the Planck scale — the outer boundary of this entire domain. [OPEN]

See [GAPS_AND_CONTRADICTIONS.md](../GAPS_AND_CONTRADICTIONS.md) for how these are classified (inconsistency vs. domain mismatch vs. unsolved-but-consistent).

## Open problems (internal)

- **Existence of 4D quantum Yang–Mills with a mass gap** (Clay Millennium Problem). Construct a nontrivial 4D YM theory satisfying the Wightman/OS axioms with $\sigma(H)\subset\{0\}\cup[\Delta,\infty)$, $\Delta>0$. Expected true on lattice/numerical and confinement grounds; no rigorous proof. [OPEN]
- **Nonperturbative construction of the Standard Model** (or any realistic 4D non-asymptotically-free theory). $\phi^4_4$ triviality [ESTABLISHED] and the QED Landau pole [INFERENCE] suggest some sectors are only EFTs; lattice chiral fermions and the sign problem add obstructions. [OPEN/CONTESTED]
- **Rigorous nonperturbative definition of the (Lorentzian) 4D path integral / functional measure**, beyond known low-dimensional and Euclidean reflection-positive cases. [OPEN]
- **Derivation vs. postulation of the Born rule** and resolution of the measurement problem. Gleason and envariance constrain it; Everettian derivations are disputed. [OPEN/CONTESTED]
- **Why complex Hilbert space?** Necessity of $\mathbb{C}$ over $\mathbb{R}$ or $\mathbb{H}$, and of the Hilbert-space framework itself. Operational reconstructions (Hardy 2001; Chiribella–D'Ariano–Perinotti) derive QM from axioms, but the complex-field choice and its experimental tests rest on auxiliary independence assumptions. [OPEN]
- **Complete proof/dissemination of the cobordism hypothesis** and a nonperturbative higher-categorical formulation of realistic 4D QFT. [OPEN to partially settled]
- **Reconciling QFT with dynamical/quantum gravity** at and below the Planck scale; the smooth-manifold substrate may not survive. [OPEN]
- **The "unreasonable effectiveness of mathematics"** (Wigner). Not a conjecture with an ordinary truth value but a genuine, unresolved meta-question. Partial deflationary accounts (selection of effective math, symmetry/representation-theoretic constraint, cognitive/anthropic) exist; none is decisive. Flag as a *question*, never a settled doctrine. [OPEN/philosophical]

See [OPEN_PROBLEMS.md](../OPEN_PROBLEMS.md) and [HYPOTHESES.md](../HYPOTHESES.md).

## Connections to other frameworks

- **[Quantum mechanics](quantum-mechanics.md)** — Mathematics supplies the entire kinematic substrate (Hilbert space, self-adjoint observables, spectral theorem, Stone, Gleason, Wigner). The clash is at measurement: the linear/unitary structure is silent on collapse, so the foundational debate is *downstream* of, not contained in, the mathematics.
- **[Quantum field theory](quantum-field-theory.md)** — Where the mathematics is most powerful *and* most incomplete: operator algebras (type III), representation theory (Wigner classification), and geometry (gauge connections) are exact, but the dynamics/measure are rigorous only in low dimensions. The Yang–Mills mass gap sits exactly on this seam.
- **[General relativity](general-relativity.md)** and quantum gravity — Differential geometry is shared bedrock. The clash: GR makes the metric dynamical, but every rigorous QFT framework presupposes a fixed background; the smooth-manifold assumption is the suspected casualty.
- **[Statistical mechanics](statistical-mechanics.md)** / **[thermodynamics](thermodynamics.md)** — Deep unification via KMS states and Tomita–Takesaki: equilibrium states *are* modular states of the observable algebra, so "temperature" and "time" share an algebraic origin. Reflection positivity links Euclidean QFT to classical lattice systems; phase transitions correspond to inequivalent representations.
- **[Classical mechanics](classical-mechanics.md)** — The symplectic geometry of phase space, Poisson brackets, and the Groenewold–van Hove obstruction define the classical $\to$ quantum boundary discussed above.
- **[Information theory](information-theory.md)** and probability — Quantum theory is a noncommutative generalization of Kolmogorov probability (states on a von Neumann algebra, POVMs); information-theoretic reconstructions try to derive the Hilbert-space formalism, and modular relative entropy feeds back into QFT energy conditions and holography.
- **[Cosmology](cosmology.md)** — Inherits the Wick-rotation breakdown: defining path integrals and QFT in de Sitter/time-dependent geometries is open.
- **Pure mathematics** (see the in-text references and [domains/mathematics.md](mathematics.md) cross-links) — Bidirectional and historically transformative: physics (QFT/string theory) conjectured mirror symmetry, Seiberg–Witten invariants, the Jones polynomial via Chern–Simons, and monstrous moonshine, later proved by mathematicians; mathematics supplies index theory, operator algebras, and representation theory. The recurring clash is rigor: physical derivations are heuristic until mathematized, and some (path integrals) resist full rigor.

See [UNIFICATION_LANDSCAPE.md](../UNIFICATION_LANDSCAPE.md) and [UNIFYING_PRINCIPLES.md](../UNIFYING_PRINCIPLES.md) for the cross-cutting roles of symmetry, locality, and the algebra/state duality; [CONSTANTS_AND_SCALES.md](../CONSTANTS_AND_SCALES.md) for where these structures meet physical scales.

## Key references

Full entries in [BIBLIOGRAPHY.md](../BIBLIOGRAPHY.md). Standard, real sources only:

- M. Reed and B. Simon, *Methods of Modern Mathematical Physics*, Vols. I–IV (Academic Press, 1972–1979) — the canonical rigorous reference for functional analysis: self-adjointness and extensions, the spectral theorem, Stone's theorem, scattering.
- R. Haag, *Local Quantum Physics: Fields, Particles, Algebras*, 2nd ed. (Springer, 1996) — algebraic QFT, type-III local algebras, modular theory, DHR superselection, Reeh–Schlieder, Bisognano–Wichmann.
- J. Glimm and A. Jaffe, *Quantum Physics: A Functional Integral Point of View*, 2nd ed. (Springer, 1987) — constructive QFT, the rigorous Euclidean path integral, OS axioms, $P(\phi)_2$ and $\phi^4_3$.
- M. Takesaki, *Theory of Operator Algebras*, Vols. I–III (Springer, 1979/2003) — definitive treatise on C\*- and von Neumann algebras, the Murray–von Neumann/Connes type classification, and Tomita–Takesaki modular theory with the KMS condition.
- M. Nakahara, *Geometry, Topology and Physics*, 2nd ed. (IOP, 2003) — manifolds, fiber bundles, connections, curvature, characteristic classes, Atiyah–Singer, anomalies, instantons.
- A. O. Barut and R. Rączka, *Theory of Group Representations and Applications* (PWN, 1977) — Lie groups, Lie algebras, unitary representations, induced representations, Wigner's classification.
- A. Jaffe and E. Witten, "Quantum Yang–Mills Theory" (Clay Mathematics Institute Millennium Problem description, 2000) — the official statement of the existence and mass-gap problem.
- M. Aizenman and H. Duminil-Copin, "Marginal triviality of the scaling limits of critical 4D Ising and $\phi^4_4$ models," *Annals of Mathematics* **194** (2021), 163–235 (with M. Aizenman, *Phys. Rev. Lett.*, 1981) — rigorous triviality of $\phi^4$ in four dimensions.
- J. Lurie, "On the Classification of Topological Field Theories," *Current Developments in Mathematics 2008* (2009), 129–280 — the cobordism-hypothesis program.
- K. Costello and O. Gwilliam, *Factorization Algebras in Quantum Field Theory*, Vols. 1–2 (Cambridge Univ. Press, 2017/2021) — rigorous perturbative QFT via factorization algebras and the BV formalism.
- E. P. Wigner, "The Unreasonable Effectiveness of Mathematics in the Natural Sciences," *Comm. Pure Appl. Math.* **13** (1960), 1–14 — the original framing of the meta-question.
- Landmark structural theorems: V. Bargmann, "On unitary ray representations of continuous groups," *Ann. Math.* **59** (1954); A. M. Gleason, "Measures on the closed subspaces of a Hilbert space," *J. Math. Mech.* **6** (1957); and the Gelfand–Naimark / Segal foundational papers.

## See also

- [README.md](../README.md) · [AGENTS.md](../AGENTS.md) · [EPISTEMICS.md](../EPISTEMICS.md) · [THEORY_MAP.md](../THEORY_MAP.md)
- [OPEN_PROBLEMS.md](../OPEN_PROBLEMS.md) · [GAPS_AND_CONTRADICTIONS.md](../GAPS_AND_CONTRADICTIONS.md) · [HYPOTHESES.md](../HYPOTHESES.md) · [ASSUMPTIONS_LEDGER.md](../ASSUMPTIONS_LEDGER.md)
- [UNIFICATION_LANDSCAPE.md](../UNIFICATION_LANDSCAPE.md) · [UNIFYING_PRINCIPLES.md](../UNIFYING_PRINCIPLES.md) · [CONSTANTS_AND_SCALES.md](../CONSTANTS_AND_SCALES.md) · [FINDINGS.md](../FINDINGS.md)
- [GLOSSARY.md](../GLOSSARY.md) · [ROADMAP.md](../ROADMAP.md) · [CHANGELOG.md](../CHANGELOG.md)
- Domains: [quantum-mechanics.md](quantum-mechanics.md) · [quantum-field-theory.md](quantum-field-theory.md) · [general-relativity.md](general-relativity.md) · [classical-mechanics.md](classical-mechanics.md) · [thermodynamics.md](thermodynamics.md) · [statistical-mechanics.md](statistical-mechanics.md) · [cosmology.md](cosmology.md) · [particle-physics.md](particle-physics.md) · [information-theory.md](information-theory.md)

## References

See [BIBLIOGRAPHY.md](../BIBLIOGRAPHY.md) for full citation entries and additional standard sources.
