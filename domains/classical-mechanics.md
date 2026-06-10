# Classical Mechanics

Status: Stable core formalism; foundational status and several internal problems remain active.
Last updated: 2026-06-08

Classical mechanics is the deterministic theory of the dynamics of systems with finitely many degrees of freedom — point particles, rigid bodies, and their continuum generalizations — in the regime of low velocity ($v \ll c$), large action ($S \gg \hbar$), and weak gravity. It is at once the historical taproot of physics and, in its mature geometric form, the structural skeleton that survives (deformed, not discarded) into quantum mechanics, statistical mechanics, and field theory. This page treats the three equivalent formulations, their geometry, the symmetry–conservation correspondence, integrability and chaos, and the precise boundaries where the framework yields.

## Scope

In scope: Newtonian, Lagrangian, and Hamiltonian dynamics; their geometric reformulation on configuration manifolds, tangent and cotangent bundles, and symplectic manifolds; Noether's theorem and the moment map; canonical/symplectic transformations and Hamilton–Jacobi theory; Liouville–Arnold integrability, KAM theory, and deterministic chaos; holonomic, nonholonomic, and gauge (singular-Lagrangian) constraints; and the structural relations to quantum mechanics via canonical quantization, deformation quantization, and the path integral.

Out of scope (treated as boundaries, not contents): special/general relativistic dynamics, the statistical mechanics of large ensembles, and quantum field theory — referenced here only insofar as they bound the domain of validity. See [THEORY_MAP.md](../THEORY_MAP.md) for the global placement of this domain.

## Core formalism

Classical mechanics admits three logically distinct but — for a large class of regular systems — equivalent formulations, increasing in geometric abstraction and structural power.

### I. Newtonian (vectorial) mechanics

State: position vectors $\mathbf r_i(t) \in \mathbb E^3$ for $i = 1,\dots,N$. Dynamics is a second-order ODE,
$$ m_i\, \ddot{\mathbf r}_i = \mathbf F_i(\mathbf r_1,\dots,\mathbf r_N, \dot{\mathbf r}_1,\dots,\dot{\mathbf r}_N, t). $$
The three laws are the empirical backbone [ESTABLISHED in their domain]: (1) inertia, asserting the *existence* of inertial frames; (2) $\mathbf F = d\mathbf p/dt$ with $\mathbf p = m\mathbf v$; (3) action–reaction $\mathbf F_{ij} = -\mathbf F_{ji}$, which for central forces yields conservation of total momentum and, with collinearity, of angular momentum. The physical content is not the equation alone but the claim that forces are *specified independently* of the kinematics (gravity, Lorentz, contact) and superpose linearly [INFERENCE — a modeling commitment, not a theorem; see the assumptions ledger]. Cartesian inertial coordinates are natural here; constraints and curvilinear coordinates motivate the analytical formulations.

### II. Lagrangian mechanics (configuration space, variational)

Let $Q$ be the configuration manifold of dimension $n$ (the number of degrees of freedom after holonomic constraints are solved). The dynamical arena is the tangent bundle $TQ$ with coordinates $(q^i, \dot q^i)$. A Lagrangian $L: TQ \times \mathbb R \to \mathbb R$, typically $L = T - V$, defines the action functional
$$ S[q] = \int_{t_1}^{t_2} L(q, \dot q, t)\, dt. $$
**Hamilton's principle** [INFERENCE — see below on its derived status]: the physical trajectory makes $S$ stationary among paths with fixed endpoints, $\delta q(t_1) = \delta q(t_2) = 0$. Stationarity yields the **Euler–Lagrange equations**
$$ \frac{d}{dt}\frac{\partial L}{\partial \dot q^i} - \frac{\partial L}{\partial q^i} = 0, $$
which are manifestly form-invariant under arbitrary point transformations of $Q$. For $L = \tfrac12 g_{ij}(q)\dot q^i \dot q^j - V(q)$ they reduce exactly to the geodesic equation of the metric $g_{ij}$ perturbed by $-\partial V$: the Christoffel terms reproduce "fictitious" inertial forces automatically [ESTABLISHED]. For *regular* $L$, the velocity Hessian $\det\!\big(\partial^2 L/\partial\dot q^i\partial\dot q^j\big) \neq 0$, and the dynamics is a well-defined second-order vector field (SODE) on $TQ$. Singular Lagrangians (gauge systems) require Dirac–Bergmann constraint analysis. The genuinely first principle for constrained and nonconservative systems is **D'Alembert's principle**, $\sum_i(\mathbf F_i - m_i\mathbf a_i)\cdot\delta\mathbf r_i = 0$, from which both Newton's and the Euler–Lagrange equations descend [ESTABLISHED]; velocity-dependent potentials (e.g. the magnetic term $q\,\mathbf A\cdot\mathbf v$) and Rayleigh dissipation fit within or just beyond this scheme.

### III. Hamiltonian mechanics (phase space, symplectic)

Pass from $TQ$ to the cotangent bundle $T^*Q$ via the Legendre transform: conjugate momenta $p_i = \partial L/\partial \dot q^i$ and
$$ H(q,p,t) = p_i \dot q^i - L, $$
well-defined when $L$ is regular. The dynamics is the first-order flow
$$ \dot q^i = \frac{\partial H}{\partial p_i}, \qquad \dot p_i = -\frac{\partial H}{\partial q^i}. $$
$T^*Q$ carries the canonical (tautological) $1$-form $\theta = p_i\, dq^i$ and the canonical symplectic $2$-form
$$ \omega = -d\theta = dq^i \wedge dp_i, $$
which is closed ($d\omega = 0$) and nondegenerate. The dynamics is intrinsically the flow of the Hamiltonian vector field $X_H$ defined by
$$ \iota_{X_H}\omega = dH, $$
giving coordinate-free Hamiltonian mechanics as a triple $(M, \omega, H)$ on a $2n$-dimensional symplectic manifold. The **Poisson bracket**
$$ \{f,g\} = \frac{\partial f}{\partial q^i}\frac{\partial g}{\partial p_i} - \frac{\partial f}{\partial p_i}\frac{\partial g}{\partial q^i} = \omega(X_f, X_g) $$
makes $C^\infty(M)$ a Lie algebra (antisymmetry, Jacobi identity) and a Poisson algebra (Leibniz). Observables evolve by $df/dt = \{f, H\} + \partial f/\partial t$, and the fundamental brackets $\{q^i,q^j\}=0$, $\{p_i,p_j\}=0$, $\{q^i,p_j\}=\delta^i_j$ encode the entire structure.

**Liouville's theorem** [ESTABLISHED]: the Hamiltonian flow preserves $\omega$ and hence the phase-space volume $\omega^n/n!$; each map $\phi_t$ is a symplectomorphism ($\phi_t^*\omega = \omega$). This is the geometric root of incompressibility of the probability fluid in statistical mechanics and forbids attractors in the strict Hamiltonian setting. **Canonical (symplectic) transformations** are maps preserving $\omega$; a type-2 generating function $F_2(q,P,t)$ gives $p_i = \partial F_2/\partial q^i$, $Q^i = \partial F_2/\partial P_i$, $K = H + \partial F_2/\partial t$ — the freedom to choose canonical coordinates is the engine of integration.

**Noether's theorem** [ESTABLISHED]: every continuous one-parameter symmetry leaving $L$ invariant up to a total derivative $dF/dt$ under $q \to q + \epsilon\,\xi(q)$ yields a conserved
$$ J = \frac{\partial L}{\partial \dot q^i}\,\xi^i - F, \qquad \frac{dJ}{dt} = 0. $$
In Hamiltonian form the statement is an iff: $J$ generates a symmetry of $H$ exactly when $\{J,H\}=0$, in which case $J$ is conserved (and conversely). Time-translation $\to$ energy; spatial translation $\to$ momentum; rotation $\to$ angular momentum; Galilean boost $\to$ uniform center-of-mass motion; the Laplace–Runge–Lenz vector of the $1/r$ potential reflects a hidden $SO(4)$ symmetry. The deep statement: symmetries and conservation laws are two faces of the **moment map** $J: M \to \mathfrak g^*$ for a Lie group $G$ acting by symplectomorphisms — see [UNIFYING_PRINCIPLES.md](../UNIFYING_PRINCIPLES.md).

### IV. Hamilton–Jacobi theory

Seek a canonical transformation to coordinates in which the new Hamiltonian vanishes, so all new coordinates and momenta are constant. Hamilton's principal function $S(q,\alpha,t)$ satisfies the **Hamilton–Jacobi PDE**
$$ H\!\left(q, \frac{\partial S}{\partial q}, t\right) + \frac{\partial S}{\partial t} = 0. $$
For time-independent $H$, write $S = W(q,\alpha) - Et$ with $H(q, \partial W/\partial q) = E$; a *complete integral* (with $n$ nontrivial constants $\alpha$) solves the dynamics by quadratures. Here $S = \int L\, dt$ evaluated on the actual trajectory as a function of endpoints, with $\partial S/\partial q^i = p_i$, $\partial S/\partial t = -H$. Hamilton–Jacobi is the classical shadow of the Schrödinger equation in the eikonal/WKB limit: writing $\psi = \exp(iS/\hbar)$ and taking $\hbar \to 0$ reduces Schrödinger to Hamilton–Jacobi at leading order, the next order giving the amplitude transport equation [ESTABLISHED as the standard WKB result]. See [domains/quantum-mechanics.md](quantum-mechanics.md).

### V. Integrability, action–angle variables, and chaos

**Liouville–Arnold theorem** [ESTABLISHED]: an $n$-degree-of-freedom system with $n$ functionally independent integrals $F_1=H, F_2, \dots, F_n$ in mutual involution ($\{F_i, F_j\}=0$) is *completely integrable*. On a compact connected level set the motion is confined to an $n$-torus $T^n$, and there exist action–angle variables $(I_i, \phi_i)$ with
$$ \dot\phi_i = \frac{\partial H}{\partial I_i} = \omega_i(I) = \text{const}, \qquad \dot I_i = 0, $$
so the motion is conditionally periodic (quasiperiodic) winding on the torus. Examples: harmonic oscillators, the Kepler problem, the free rigid body (Euler top), the Toda lattice.

**KAM theorem** (Kolmogorov–Arnold–Moser) [ESTABLISHED]: for a small perturbation $H = H_0(I) + \epsilon H_1(I,\phi)$ of a nondegenerate integrable $H_0$ ($\det(\partial^2 H_0/\partial I\,\partial I) \neq 0$), most invariant tori survive — precisely those whose frequency vectors are sufficiently irrational (Diophantine),
$$ |k\cdot\omega(I)| \geq \gamma\,|k|^{-\tau} \quad \forall\, k \in \mathbb Z^n\setminus\{0\}. $$
Resonant tori are destroyed, breaking into alternating elliptic/hyperbolic structures (Poincaré–Birkhoff) and seeding a fractal web of chaotic layers (with Arnold diffusion possible for $n \geq 3$).

**Deterministic chaos** [ESTABLISHED]: generic nonintegrable systems exhibit sensitive dependence on initial conditions,
$$ |\delta x(t)| \sim |\delta x(0)|\, e^{\lambda t}, \quad \lambda > 0, $$
with $\lambda$ the largest Lyapunov exponent. Determinism (unique solution from initial data) coexists with practical unpredictability because finite-precision data loses information at rate $\lambda$ (Kolmogorov–Sinai entropy). The three-body problem is the historical seed (Poincaré, 1890s). See [domains/mathematics.md](mathematics.md) for the dynamical-systems machinery.

### VI. Constraints

Holonomic constraints $f(q,t)=0$ cut $Q$ down to a submanifold and are eliminated by adapted coordinates. Nonholonomic constraints — non-integrable velocity constraints $a_i(q)\,\dot q^i = 0$, e.g. rolling without slipping — cannot be integrated to position constraints and are handled by the Lagrange–d'Alembert principle. Crucially, the resulting equations are **not** the Euler–Lagrange equations of any action in general [ESTABLISHED] — a genuine structural subtlety placing nonholonomic systems outside the pure variational/Hamiltonian framework. Singular Lagrangians and gauge constraints invoke the Dirac constraint algorithm (primary/secondary, first/second class, Dirac brackets), the classical precursor to gauge-theory quantization. See [domains/quantum-field-theory.md](quantum-field-theory.md).

### VII. The bridge to quantum mechanics

Canonical quantization (Dirac): $\{\cdot,\cdot\} \to (i\hbar)^{-1}[\cdot,\cdot]$, so $\{q,p\}=1$ becomes $[\hat q, \hat p] = i\hbar$. Deformation quantization (Moyal–Weyl; Bayen–Flato–Fronsdal–Lichnerowicz–Sternheimer; Kontsevich's formality theorem for general Poisson manifolds [ESTABLISHED]) deforms the commutative product into the noncommutative star product
$$ f \star g = fg + \frac{i\hbar}{2}\{f,g\} + O(\hbar^2), \qquad [\hat A, \hat B] = i\hbar\,\widehat{\{A,B\}} + O(\hbar^2). $$
The Feynman path integral $K = \int \mathcal D[q]\, e^{iS[q]/\hbar}$ localizes by stationary phase as $\hbar \to 0$ onto the classical least-action path. Thus least action is not a teleological mystery but the classical shadow of constructive/destructive interference of quantum amplitudes [INFERENCE — the standard, widely held interpretation].

## Foundational assumptions

| Assumption | Status | Justification |
|---|---|---|
| Absolute, universal time $t$ as the single evolution parameter (Galilean spacetime). | historical-artifact | [ESTABLISHED false fundamentally] Special relativity demolishes absolute simultaneity; Newtonian time is the $c \to \infty$ limit of Lorentzian structure. Excellent for $v \ll c$, but a low-velocity artifact, not fundamental. |
| Configuration space is a smooth finite-dimensional manifold; states evolve by smooth ODEs and dynamics is deterministic. | likely-fundamental | [INFERENCE/CONTESTED at the margins] Picard–Lindelöf guarantees uniqueness for Lipschitz fields, but Lipschitz failure permits non-uniqueness (Norton's dome, $\ddot x = \sqrt{x}$) and finite-time blowup (Xia 1992) breaks completeness for $N\ge 5$. A robust working principle with genuine internal cracks. |
| Forces are specified independently of the laws of motion and superpose; $L = T - V$ with $V = V(q)$ (possibly velocity-dependent). | conventional-choice | [INFERENCE] The kinetic/potential split and additivity is a modeling convention that works because gravity and electromagnetism derive from potentials/gauge fields. The form $L=T-V$ is itself a low-energy shadow (e.g. $-mc^2\sqrt{1-v^2/c^2} \to \text{const} + \tfrac12 mv^2$). |
| Principle of stationary action: trajectories extremize $\int L\,dt$. | likely-fundamental | [INFERENCE — strong consensus] Derived, not assumed: it is the stationary-phase ($\hbar\to 0$) limit of the path integral. Caveat: genuinely *stationary*, not *least* (saddles occur past conjugate points/caustics) — a common textbook imprecision. |
| Phase space carries a canonical symplectic structure $\omega$; observables form a Poisson algebra. | fundamental | [ESTABLISHED within the framework] The single most robust structural feature; it survives deformed into QM via $\{\cdot,\cdot\}\to[\cdot,\cdot]$ and is preserved by all canonical transformations and the flow (Liouville). Darboux's theorem makes it locally rigid and natural. |
| Space is Euclidean $\mathbb E^3$; global inertial frames exist (first law as existence axiom). | historical-artifact | [ESTABLISHED false fundamentally] GR replaces flat space and global inertial frames with dynamical curved spacetime; only *local* inertial frames exist. The existence axiom also smuggles in the unresolved origin of inertia (Mach's principle, [OPEN]). |
| Position and momentum have simultaneously sharp, arbitrarily precise real values independent of measurement. | historical-artifact | [ESTABLISHED false fundamentally] Forbidden by the uncertainty principle and noncommutativity; the phase-space point is the coarse-grained $S \gg \hbar$ idealization where $\hbar$-cells are negligible. |
| The inertial mass tensor $g_{ij}$ is positive-definite and $L$ is regular (nondegenerate velocity Hessian). | conventional-choice | [INFERENCE] Regularity makes the Legendre transform invertible and is assumed for convenience; it holds for ordinary mechanical systems but is deliberately violated by gauge fields, reparametrization-invariant and relativistic point-particle theories (the "singular" Lagrangians of Dirac theory). |
| Time-reversal invariance: if $q(t)$ solves, so does $q(-t)$ (with $p\to -p$); no microscopic arrow of time. | likely-fundamental | [ESTABLISHED for standard $L$; CONTESTED as universal] Holds for $L$ quadratic in velocities with velocity-independent $V$; broken by magnetic ($\mathbf B \to -\mathbf B$) and dissipative forces and, fundamentally, by CP-violation. Fundamental within idealized conservative mechanics; false as a universal law. |

See [ASSUMPTIONS_LEDGER.md](../ASSUMPTIONS_LEDGER.md) for the cross-domain ledger and status taxonomy.

## Domain of validity

Classical mechanics is accurate in the joint regime: (1) $v \ll c$ (else special relativity); (2) characteristic action $S \gg \hbar$, equivalently de Broglie wavelength $\lambda = h/p$ small against system length scales (else quantum mechanics); (3) weak, slowly varying gravity, $GM/(rc^2) \ll 1$, with negligible spacetime curvature over the system (else general relativity); (4) fixed, not-too-large particle number — Hamiltonian mechanics *underlies* statistical mechanics, but the single-trajectory picture becomes useless for $\sim 10^{23}$ particles. Within its domain the framework is verified to extraordinary precision: celestial mechanics predicts eclipses and spacecraft trajectories to remarkable accuracy, and the anomalous perihelion precession of Mercury ($43''$/century) was the first clean empirical boundary where Newtonian gravity fails and GR is required [ESTABLISHED].

The classical limit is subtle and is *not* simply "$\hbar \to 0$" ($\hbar$ is a fixed constant): it is the regime of large action in units of $\hbar$, where decoherence destroys interference and Ehrenfest's theorem ($d\langle x\rangle/dt = \langle p\rangle/m$, $d\langle p\rangle/dt = -\langle \partial_x V\rangle$) keeps wavepacket centroids on classical trajectories. The last condition fails for chaotic systems beyond the Ehrenfest time $t_E \sim \lambda^{-1}\ln(S/\hbar)$ — a known and unresolved tension [OPEN]. See [CONSTANTS_AND_SCALES.md](../CONSTANTS_AND_SCALES.md).

## Where it breaks down

- **High velocity, $v \to c$** [ESTABLISHED]: Galilean kinematics and absolute time fail; $\mathbf p = m\mathbf v$, the energy–momentum relation, and velocity addition are wrong. Newtonian mechanics is the $c\to\infty$ contraction of the Poincaré-invariant theory.
- **Small action, $S \sim \hbar$** [ESTABLISHED]: definite trajectories and simultaneously sharp $(q,p)$ cease to exist; uncertainty, interference, tunneling, discrete spectra, and entanglement appear. The phase-space point is replaced by a Hilbert-space state or a (possibly negative) Wigner quasi-probability.
- **Strong gravity / cosmological scales** [ESTABLISHED]: instantaneous $1/r^2$ action-at-a-distance violates causality and mispredicts light bending, perihelion precession, gravitational time dilation, and gravitational waves; replaced by general relativity. See [domains/general-relativity.md](general-relativity.md).
- **Non-Lipschitz force laws** [OPEN/CONTESTED]: Norton's dome and $\ddot x = x^{1/2}$ admit multiple solutions from identical initial data — determinism is a property of *sufficiently regular* force laws, not a theorem. Whether such models are physically admissible is debated.
- **Finite-time singularities** [ESTABLISHED]: in the Newtonian $N$-body problem, solutions can blow up in finite time. Xia (1992) proved non-collision singularities exist for $N \ge 5$ (particles driven to infinity in finite time), so the flow is incomplete and global determinism fails for idealized point masses (the Painlevé-conjecture context).
- **Deterministic chaos** [ESTABLISHED]: not a failure of the equations but of predictability — positive Lyapunov exponents preclude long-term forecasting from finite-precision data. The three-body problem has no general closed-form solution.
- **Nonholonomic and dissipative systems** [ESTABLISHED structural limitation]: rolling constraints obey Lagrange–d'Alembert, not the Euler–Lagrange equations of any action; dissipation breaks energy conservation, time-reversal, and Liouville volume, requiring contact geometry or non-Hamiltonian extensions.
- **Singular (gauge) Lagrangians** [ESTABLISHED]: a degenerate velocity Hessian makes the Legendre transform non-invertible; the naive Hamiltonian picture must be replaced by Dirac–Bergmann constraint analysis.
- **Continuum / infinite degrees of freedom** [INFERENCE/OPEN]: field theory extends mechanics to infinitely many DOF; finite-dimensional theorems (Liouville–Arnold, KAM) do not transfer cleanly, and global regularity of 3D incompressible Euler/Navier–Stokes is a Clay Millennium [OPEN] problem.

See [GAPS_AND_CONTRADICTIONS.md](../GAPS_AND_CONTRADICTIONS.md) for the distinction between true inconsistencies and domain-of-validity mismatches.

## Open problems (internal)

- **Painlevé's conjecture / $N$-body singularities** [OPEN]: existence of non-collision singularities is proven (Xia, $N\ge5$, 1992; Gerver), but a complete classification, the $N=4$ case, and whether singular initial data has measure zero remain unresolved. Genuinely internal to classical mechanics.
- **Arnold diffusion** [OPEN/partially resolved]: for $n\ge3$, KAM tori do not separate phase space, so trajectories can drift across resonance webs. Existence is established in examples and (via Mather, Cheng–Yan, and others) in some generic settings, but a complete theory of its prevalence and rate is missing.
- **Foundations of the classical limit and quantum chaos** [OPEN/CONTESTED]: how definite trajectories and the macroscopic absence of superpositions emerge — decoherence and the measurement problem — straddles classical and quantum; the $\hbar\to0$ limit is singular and nonuniform, and quantum chaos lacks a complete theory.
- **Regularity of classical field equations** [OPEN]: existence/uniqueness/regularity for 3D incompressible Euler and Navier–Stokes (a Clay Millennium problem) — inherited from classical dynamical principles.
- **Origin of inertia / Mach's principle** [OPEN/CONTESTED]: why do inertial frames coincide with the rest frame of distant matter? GR's frame dragging is only partially Machian. A question mechanics raises but cannot answer internally.
- **Reversibility vs the thermodynamic arrow** [OPEN/CONTESTED]: reconciling exact T-symmetry with observed irreversibility (Loschmidt). Coarse-graining, the $H$-theorem, and the past hypothesis are accepted ingredients, but a complete first-principles derivation remains debated.
- **Physical indeterminism in classical mechanics** [CONTESTED]: whether Norton's dome and supertasks reveal genuine indeterminism or merely unphysical idealizations.

These feed [OPEN_PROBLEMS.md](../OPEN_PROBLEMS.md) and candidate resolutions in [HYPOTHESES.md](../HYPOTHESES.md).

## Connections to other frameworks

- **[Quantum mechanics](quantum-mechanics.md)**: classical mechanics is the $\hbar\to0$/large-action limit; QM is recovered by canonical or deformation quantization. The symplectic/Poisson structure is the part that survives. *Clash:* noncommutativity, indeterminacy, and the measurement problem have no classical counterpart, and the limit is singular for chaotic systems.
- **Special relativity** (within [general-relativity.md](general-relativity.md) and [particle-physics.md](particle-physics.md)): Galilean mechanics is the $c\to\infty$ limit of Poincaré-invariant dynamics; the free-particle $L = -mc^2\sqrt{1-v^2/c^2}$ reduces to $\text{const} + \tfrac12 mv^2$. *Clash:* absolute time and instantaneous forces are incompatible with a finite invariant speed.
- **[General relativity](general-relativity.md)**: Newtonian gravity is the weak-field, slow-motion limit (geodesic motion in $g_{00} \approx -(1 + 2\Phi/c^2)$); the least-action principle generalizes to spacetime geodesics. *Clash:* global inertial frames and action-at-a-distance gravity are replaced by dynamical curvature; mechanics cannot explain the equivalence of inertial and gravitational mass that GR postulates.
- **[Statistical mechanics](statistical-mechanics.md) and [thermodynamics](thermodynamics.md)**: Hamiltonian flow plus Liouville's theorem is the microscopic foundation; the microcanonical measure is the Liouville measure on energy shells. *Tension:* deriving irreversibility from reversible, volume-preserving mechanics (Loschmidt, Poincaré recurrence) requires extra ingredients (mixing/ergodicity, special initial conditions).
- **[Mathematics](mathematics.md) — symplectic/differential geometry and dynamical systems**: Hamiltonian mechanics *is* dynamics on symplectic manifolds; Darboux's theorem, moment maps, Marsden–Weinstein reduction, KAM, Liouville–Arnold, Poincaré recurrence, and ergodic theory live here. Symplectic topology (the Arnold conjecture) grew partly from these mechanical questions.
- **Classical field theory and gauge theory** (see [quantum-field-theory.md](quantum-field-theory.md)): Lagrangian/Hamiltonian mechanics extends from finite to infinite DOF; Noether yields the stress–energy tensor and conserved currents; Dirac's constraint analysis is the classical foundation of gauge symmetry. Electromagnetism enters via minimal coupling.
- **[Quantum field theory](quantum-field-theory.md)**: the path integral $e^{iS/\hbar}$ generalizes Hamilton's principle from particle paths to field histories, with the classical equations as the saddle point — the action principle being the organizing structure shared across all of physics. See [UNIFICATION_LANDSCAPE.md](../UNIFICATION_LANDSCAPE.md).

Confirmed boundary results and limits are logged in [FINDINGS.md](../FINDINGS.md); terminology in [GLOSSARY.md](../GLOSSARY.md).

## Key references

- H. Goldstein, C. Poole, J. Safko, *Classical Mechanics*, 3rd ed., Addison-Wesley, 2002 — the standard graduate text (Lagrangian/Hamiltonian formalism, canonical transformations, Hamilton–Jacobi, rigid bodies, chaos).
- L. D. Landau and E. M. Lifshitz, *Mechanics* (Course of Theoretical Physics, Vol. 1), 3rd ed., Pergamon, 1976 — develops all of mechanics from least action with exceptional economy.
- V. I. Arnold, *Mathematical Methods of Classical Mechanics*, 2nd ed., Springer (GTM 60), 1989 — the definitive geometric/symplectic treatment; Liouville–Arnold integrability, action–angle variables, KAM.
- J. E. Marsden and T. S. Ratiu, *Introduction to Mechanics and Symmetry*, 2nd ed., Springer, 1999 — moment maps, symplectic (Marsden–Weinstein) reduction, the modern Noether theorem.
- H. Poincaré, *Les Méthodes Nouvelles de la Mécanique Céleste*, 3 vols., Gauthier-Villars, 1892–1899 — origin of qualitative dynamics and deterministic chaos.
- E. Noether, "Invariante Variationsprobleme," *Nachr. Ges. Wiss. Göttingen*, 1918 — the symmetry–conservation correspondence.
- P. A. M. Dirac, *Lectures on Quantum Mechanics*, Belfer Graduate School, 1964 (and "Generalized Hamiltonian Dynamics," 1950) — constraint analysis of singular Lagrangians; bracket–commutator correspondence.
- F. Bayen, M. Flato, C. Fronsdal, A. Lichnerowicz, D. Sternheimer, "Deformation Theory and Quantization I, II," *Ann. Phys.* **111** (1978) — founding papers of deformation quantization.
- R. P. Feynman and A. R. Hibbs, *Quantum Mechanics and Path Integrals*, McGraw-Hill, 1965 — the path integral and least action as its stationary-phase limit.
- J. Moser, *Stable and Random Motions in Dynamical Systems*, Princeton Univ. Press, 1973; with the original KAM papers (Kolmogorov 1954, Arnold 1963, Moser 1962).
- Z. Xia, "The existence of noncollision singularities in Newtonian systems," *Annals of Mathematics* **135** (1992) 411–468.
- V. I. Arnold, V. V. Kozlov, A. I. Neishtadt, *Mathematical Aspects of Classical and Celestial Mechanics*, 3rd ed., Springer, 2006 — modern survey of integrable systems, KAM, Arnold diffusion.
- J. D. Norton, "The Dome: An Unexpectedly Simple Failure of Determinism," *Philosophy of Science* **75** (2008).

## See also

- [domains/quantum-mechanics.md](quantum-mechanics.md) — the framework classical mechanics is the limit of
- [domains/general-relativity.md](general-relativity.md) — strong-gravity successor
- [domains/statistical-mechanics.md](statistical-mechanics.md) — built on Hamiltonian flow + Liouville
- [domains/thermodynamics.md](thermodynamics.md) — the arrow-of-time tension
- [domains/quantum-field-theory.md](quantum-field-theory.md) — infinite-DOF and gauge generalization
- [domains/mathematics.md](mathematics.md) — symplectic geometry, dynamical systems, KAM
- [THEORY_MAP.md](../THEORY_MAP.md) · [UNIFYING_PRINCIPLES.md](../UNIFYING_PRINCIPLES.md) · [UNIFICATION_LANDSCAPE.md](../UNIFICATION_LANDSCAPE.md)
- [ASSUMPTIONS_LEDGER.md](../ASSUMPTIONS_LEDGER.md) · [OPEN_PROBLEMS.md](../OPEN_PROBLEMS.md) · [GAPS_AND_CONTRADICTIONS.md](../GAPS_AND_CONTRADICTIONS.md) · [FINDINGS.md](../FINDINGS.md)
- [EPISTEMICS.md](../EPISTEMICS.md) — the epistemic-marker taxonomy used throughout

## References

Full bibliographic entries and shared citation keys are maintained in [BIBLIOGRAPHY.md](../BIBLIOGRAPHY.md).
