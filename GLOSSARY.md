# Glossary

Status: living reference — comprehensive but not exhaustive; definitions are standard but each links to its home domain for the full treatment.
Last updated: 2026-06-08

This page collects precise, cross-linked definitions for the mathematical objects, physical concepts, and named results used throughout this wiki. Entries are alphabetical. Each definition is meant to be *correct as stated* within its domain of validity; where a term carries genuine subtlety or dispute, an epistemic marker ([ESTABLISHED], [INFERENCE], [SPECULATIVE], [OPEN], [CONTESTED]) flags it (see [EPISTEMICS.md](EPISTEMICS.md) for the calibration scheme). For the map of how domains relate, see [THEORY_MAP.md](THEORY_MAP.md); for the canonical-source pointers, see [BIBLIOGRAPHY.md](BIBLIOGRAPHY.md).

---

## A

**Action** — The functional $S[\gamma]=\int L\,dt$ (or $\int \mathcal L\,d^4x$ in field theory) assigning a number to each history $\gamma$. Physical trajectories make $S$ *stationary*, not necessarily least [ESTABLISHED]. See [domains/classical-mechanics.md](domains/classical-mechanics.md).

**Action–angle variables** — Canonical coordinates $(I,\phi)$ for an integrable system in which $\dot I=0$ and $\dot\phi=\omega(I)$; motion is linear winding on invariant tori. The cleanest picture of integrable order, against which chaos is the failure [ESTABLISHED].

**Adiabatic (cosmological) perturbations** — Primordial fluctuations in which all species share a common local time-shift, so number-density ratios are spatially constant. Observed to high accuracy and predicted by single-field inflation [ESTABLISHED as description]. See [domains/cosmology.md](domains/cosmology.md).

**ADM formalism** — Arnowitt–Deser–Misner $3+1$ decomposition of the metric into spatial metric $h_{ij}$, lapse $N$, and shift $N^i$, recasting general relativity as constrained Hamiltonian evolution of geometry [ESTABLISHED]. Foundation of numerical relativity and canonical quantization attempts. See [domains/general-relativity.md](domains/general-relativity.md).

**AdS/CFT correspondence** — Conjectured exact duality between a quantum-gravity theory in asymptotically anti-de Sitter spacetime and a conformal field theory on its boundary [INFERENCE: overwhelming evidence, no general nonperturbative proof]. See [domains/information-theory.md](domains/information-theory.md), [UNIFICATION_LANDSCAPE.md](UNIFICATION_LANDSCAPE.md).

**Algebraic QFT (Haag–Kastler)** — Formulation of QFT as a *net* of local operator algebras $\mathcal O\mapsto\mathfrak A(\mathcal O)$ satisfying isotony, microcausality, and covariance, avoiding any privileged Hilbert-space representation [ESTABLISHED structural framework]. See [domains/quantum-field-theory.md](domains/quantum-field-theory.md).

**Anomaly (quantum/chiral)** — A classical symmetry broken by quantization; e.g. the Adler–Bell–Jackiw anomaly $\partial_\mu j^{5\mu}=\frac{e^2}{16\pi^2}\epsilon^{\mu\nu\rho\sigma}F_{\mu\nu}F_{\rho\sigma}$. Physical for global currents ($\pi^0\to2\gamma$); must cancel for gauged currents [ESTABLISHED]. See [domains/particle-physics.md](domains/particle-physics.md).

**Asymptotic freedom** — The decrease of a gauge coupling at high energy due to a negative beta function; in QCD $\beta_0=11-\tfrac23 n_f>0$ makes quarks weakly coupled at short distance [ESTABLISHED]. See [domains/quantum-field-theory.md](domains/quantum-field-theory.md).

**Asymptotic safety** — Conjecture that gravity (or another theory) is UV-completed by a nontrivial fixed point of the renormalization-group flow [SPECULATIVE/OPEN]. See [OPEN_PROBLEMS.md](OPEN_PROBLEMS.md).

**Atiyah–Singer index theorem** — Equates the analytic index of an elliptic operator (e.g. net chiral zero modes of the Dirac operator) with a topological integral, $\operatorname{ind}(\slashed D)=\int_M \hat A(M)\,\mathrm{ch}(F)$ [ESTABLISHED]. Underlies anomalies and instanton fermion counting. See [domains/mathematics.md](domains/mathematics.md).

## B

**Baryon acoustic oscillations (BAO)** — Frozen-in sound-horizon scale in the matter distribution, a standard ruler probing cosmic geometry and expansion history [ESTABLISHED]. See [domains/cosmology.md](domains/cosmology.md).

**Bekenstein bound** — Upper bound on the entropy in a weakly gravitating region of radius $R$ and energy $E$: $S\le 2\pi k_B R E/\hbar c$ [INFERENCE; sharp only in weak gravity]. See [domains/information-theory.md](domains/information-theory.md).

**Bekenstein–Hawking entropy** — Black-hole entropy proportional to horizon *area*: $S_{\rm BH}=k_B c^3 A/(4G\hbar)=k_B A/4\ell_P^2$ [ESTABLISHED theory; microstate counting [OPEN] for generic black holes]. See [domains/thermodynamics.md](domains/thermodynamics.md).

**Bell's theorem** — No local-hidden-variable theory satisfying measurement independence can reproduce all quantum correlations; the CHSH inequality $|S|\le2$ for LHV is violated up to the Tsirelson bound $2\sqrt2$ by quantum systems, confirmed loophole-free [ESTABLISHED]. The escape via denying measurement independence (superdeterminism) is [OPEN/CONTESTED]. See [domains/quantum-mechanics.md](domains/quantum-mechanics.md).

**Beta function** — $\beta(g)=\mu\,dg/d\mu$, governing the renormalization-group running of a coupling; its sign and zeros determine asymptotic freedom, Landau poles, and fixed points [ESTABLISHED]. See [renormalization group](#r).

**Bianchi identity (contracted)** — The geometric identity $\nabla^\mu G_{\mu\nu}\equiv0$, which forces local energy–momentum conservation $\nabla^\mu T_{\mu\nu}=0$ and reduces the Einstein equations to 6 independent dynamical equations [ESTABLISHED]. See [domains/general-relativity.md](domains/general-relativity.md).

**Black-hole information paradox** — Apparent conflict between Hawking's thermal (pure→mixed) evaporation and quantum unitarity. Recent island/replica-wormhole computations reproduce a unitary Page curve [INFERENCE within their assumptions]; a complete mechanism for realistic black holes is [OPEN/CONTESTED]. See [GAPS_AND_CONTRADICTIONS.md](GAPS_AND_CONTRADICTIONS.md).

**Bohmian mechanics (de Broglie–Bohm)** — Interpretation restoring definite particle positions guided by the wavefunction; empirically equivalent to standard QM, paying with explicit nonlocality and contextuality [ESTABLISHED equivalence; CONTESTED as preferred]. See [domains/quantum-mechanics.md](domains/quantum-mechanics.md).

**Boltzmann entropy** — $S_B=k_B\ln W$, the logarithm of the number of microstates compatible with a macrostate; the surface-entropy definition. Contrast the Gibbs (volume) entropy; their inequivalence for small/bounded systems is [CONTESTED]. See [domains/statistical-mechanics.md](domains/statistical-mechanics.md).

**Boltzmann equation** — Kinetic evolution equation for the one-particle distribution $f$ with a collision integral; valid in the dilute-gas (Grad) limit. Its $H$-theorem yields irreversibility only after the molecular-chaos assumption [ESTABLISHED]. See [domains/statistical-mechanics.md](domains/statistical-mechanics.md).

**Born rule** — Outcome probability $\Pr(A\in\Delta)=\operatorname{Tr}(\rho\,E_A(\Delta))$. Gleason's theorem makes it the unique noncontextual probability measure on projections for $\dim\ge3$ [ESTABLISHED as form]; whether it is *derivable* from unitary dynamics is [CONTESTED]. See [domains/quantum-mechanics.md](domains/quantum-mechanics.md), [EPISTEMICS.md](EPISTEMICS.md).

**Bousso (covariant entropy) bound** — Holographic bound $S_{\rm light\text{-}sheet}\le A/4G\hbar$ on the entropy crossing a light-sheet of a surface of area $A$; the covariant, generally applicable form of holography [INFERENCE]. See [domains/information-theory.md](domains/information-theory.md).

**BRST symmetry** — A global fermionic symmetry of the gauge-fixed action encoding gauge redundancy, used to prove unitarity and renormalizability of gauge theories [ESTABLISHED]. See [domains/quantum-field-theory.md](domains/quantum-field-theory.md).

## C

**C\*-algebra** — A complex Banach $*$-algebra satisfying the C\*-identity $\|a^*a\|=\|a\|^2$. The Gelfand–Naimark theorem represents any C\*-algebra as bounded operators on a Hilbert space [ESTABLISHED]. The natural setting for algebraic QM/QFT and superselection. See [domains/mathematics.md](domains/mathematics.md).

**Canonical commutation relation (CCR)** — $[\hat x,\hat p]=i\hbar\mathbb 1$. Has no bounded or finite-dimensional realization; its exponentiated (Weyl) form is essentially unique for finitely many degrees of freedom by Stone–von Neumann but admits inequivalent representations for infinitely many [ESTABLISHED]. See [Stone–von Neumann theorem](#s).

**Canonical ensemble** — Probability distribution $\rho=Z^{-1}e^{-\beta H}$ for a system in thermal contact with a reservoir at temperature $T=1/k_B\beta$; $F=-k_BT\ln Z$ [ESTABLISHED for short-range interactions]. See [domains/statistical-mechanics.md](domains/statistical-mechanics.md).

**Carnot bound** — Maximum efficiency of a heat engine between reservoirs, $\eta=1-T_c/T_h$, a direct consequence of the second law [ESTABLISHED]. See [domains/thermodynamics.md](domains/thermodynamics.md).

**Chern number / characteristic class** — Topological invariant of a bundle; e.g. the second Chern number $\frac{1}{8\pi^2}\int\operatorname{tr}(F\wedge F)\in\mathbb Z$ classifies instanton sectors, and the first Chern number gives the quantized Hall conductance (TKNN) [ESTABLISHED]. See [domains/mathematics.md](domains/mathematics.md).

**CHSH inequality** — See [Bell's theorem](#b). The four-correlator form $S=|E(a,b)-E(a,b')+E(a',b)+E(a',b')|\le2$ for LHV, with quantum maximum $2\sqrt2$.

**CKM matrix** — Unitary mixing matrix relating quark mass and weak-interaction eigenstates; its single irreducible phase is the sole source of Standard-Model quark CP violation (Jarlskog $J\approx3\times10^{-5}$) [ESTABLISHED]. See [domains/particle-physics.md](domains/particle-physics.md).

**Coarse-graining** — Partition of microstate space into macroscopically distinguishable cells; thermodynamic entropy and irreversibility are defined relative to such a partition. The *need* for it is structurally fundamental; the specific choice has a conventional element [CONTESTED interpretation]. See [domains/statistical-mechanics.md](domains/statistical-mechanics.md).

**Coleman–Mandula theorem** — Under reasonable assumptions (nontrivial S-matrix, mass gap, finitely many particle types), the only Lie-algebra symmetries of the S-matrix that combine spacetime and internal symmetries are direct products of the Poincaré group with internal symmetries — forbidding nontrivial mixing [ESTABLISHED]. Supersymmetry evades it by using a graded (super-)algebra. See [UNIFYING_PRINCIPLES.md](UNIFYING_PRINCIPLES.md).

**Conformal field theory (CFT)** — A QFT invariant under the conformal group; sits at renormalization-group fixed points and anchors the UV/IR endpoints of RG flows. Most rigorously controlled interacting QFTs (especially in 2D) [ESTABLISHED]. See [domains/quantum-field-theory.md](domains/quantum-field-theory.md).

**Connection** — On a fiber bundle, a rule for parallel transport / covariant differentiation; for a principal $G$-bundle it is a $\mathfrak g$-valued one-form whose curvature is the gauge field strength $F=dA+A\wedge A$ [ESTABLISHED]. The geometric content of the gauge principle. See [domains/mathematics.md](domains/mathematics.md).

**Constraint (Hamiltonian)** — A phase-space relation that must vanish (weakly) on physical states, e.g. the GR momentum and Hamiltonian constraints. First-class constraints generate gauge transformations; their quantization yields the Wheeler–DeWitt equation $H\Psi=0$ [ESTABLISHED]. See [problem of time](#p).

**Contextuality (Kochen–Specker)** — No noncontextual assignment of definite values to all observables (for $\dim\ge3$) reproduces quantum predictions; measured values can depend on which compatible observables are measured alongside [ESTABLISHED]. See [domains/quantum-mechanics.md](domains/quantum-mechanics.md).

**Cosmological constant ($\Lambda$)** — The unique term Lovelock's theorem permits beyond the Einstein tensor; drives late-time accelerated expansion. Its observed value lies $\sim10^{120}$ below naive QFT vacuum-energy estimates — the cosmological-constant problem [OPEN]. See [GAPS_AND_CONTRADICTIONS.md](GAPS_AND_CONTRADICTIONS.md), [domains/cosmology.md](domains/cosmology.md).

**Cosmological principle** — Spatial homogeneity and isotropy on large scales ($\gtrsim100$ Mpc); the symmetry assumption underlying FLRW [ESTABLISHED statistically; INFERENCE as exact]. See [ASSUMPTIONS_LEDGER.md](ASSUMPTIONS_LEDGER.md).

**CPT theorem** — Any local, Lorentz-invariant QFT with a Hermitian Hamiltonian is invariant under the combined operation of charge conjugation, parity, and time reversal [ESTABLISHED]. See [domains/quantum-field-theory.md](domains/quantum-field-theory.md).

**Critical exponents / universality** — Power-law behavior of thermodynamic quantities near a continuous phase transition (e.g. $\xi\sim|t|^{-\nu}$), with exponents depending only on dimension and symmetry (universality classes), explained by RG fixed points [ESTABLISHED]. See [domains/statistical-mechanics.md](domains/statistical-mechanics.md).

**Crooks fluctuation theorem** — Detailed symmetry $P_F(+W)/P_R(-W)=e^{\beta(W-\Delta F)}$ between forward and reverse driving protocols; quantifies the exponential rarity of transient second-law violations [ESTABLISHED]. See [domains/thermodynamics.md](domains/thermodynamics.md).

## D

**Dark energy** — The component (constant or dynamical) driving cosmic acceleration; modeled as $\Lambda$ with equation of state $w=-1$. Acceleration is [ESTABLISHED]; whether dark energy is exactly $\Lambda$ is [OPEN/CONTESTED]. See [domains/cosmology.md](domains/cosmology.md).

**Dark matter** — A non-baryonic, cold, gravitating component required by rotation curves, lensing, the CMB peaks, and structure formation. Its existence (beyond baryons + GR) is near-[ESTABLISHED]; its particle identity is [OPEN]. See [domains/cosmology.md](domains/cosmology.md), [domains/particle-physics.md](domains/particle-physics.md).

**Decoherence** — Suppression of interference in a subsystem through entanglement with an uncontrolled environment, selecting a quasi-classical pointer basis and yielding effective classicality. The dynamics is [ESTABLISHED]; its foundational significance for the measurement problem is [CONTESTED]. See [domains/quantum-mechanics.md](domains/quantum-mechanics.md).

**Density matrix** — Positive, unit-trace operator $\rho$ encoding pure ($\rho^2=\rho$) or mixed states; the reduced state $\rho_A=\operatorname{Tr}_B\rho_{AB}$ captures all locally accessible statistics [ESTABLISHED]. See [domains/quantum-mechanics.md](domains/quantum-mechanics.md).

**Diffeomorphism invariance** — Invariance under smooth coordinate changes; in GR physical states are equivalence classes under diffeomorphisms (background independence), making spacetime points have no physical identity apart from fields (hole argument) [ESTABLISHED]. See [domains/general-relativity.md](domains/general-relativity.md), [UNIFYING_PRINCIPLES.md](UNIFYING_PRINCIPLES.md).

**Dirac–Bergmann constraint analysis** — Hamiltonian treatment of singular (gauge) Lagrangians via first- and second-class constraints and Dirac brackets; the classical skeleton of gauge theory [ESTABLISHED]. See [domains/classical-mechanics.md](domains/classical-mechanics.md).

**Domain of validity** — The regime (energies, scales, couplings, idealizations) in which a theory is empirically reliable. Distinguishing a true inconsistency from a domain-of-validity mismatch is central to this wiki's epistemics. See [EPISTEMICS.md](EPISTEMICS.md), [GAPS_AND_CONTRADICTIONS.md](GAPS_AND_CONTRADICTIONS.md).

## E

**Effective field theory (EFT)** — A theory valid below a cutoff $\Lambda$, organizing all symmetry-allowed operators by mass dimension into relevant/marginal/irrelevant, with $\mathcal L_{\rm eff}=\sum_i c_i\Lambda^{4-d_i}\mathcal O_i$. Renormalizability becomes an emergent low-energy property [ESTABLISHED]. See [domains/quantum-field-theory.md](domains/quantum-field-theory.md), [UNIFYING_PRINCIPLES.md](UNIFYING_PRINCIPLES.md).

**Ehrenfest's theorem** — $\frac{d}{dt}\langle\hat x\rangle=\langle\hat p\rangle/m$, $\frac{d}{dt}\langle\hat p\rangle=-\langle\nabla V\rangle$; recovers Newtonian motion for narrow packets but fails for chaotic systems beyond the (logarithmic) Ehrenfest time [ESTABLISHED]. See [domains/quantum-mechanics.md](domains/quantum-mechanics.md).

**Einstein field equations (EFE)** — $G_{\mu\nu}+\Lambda g_{\mu\nu}=\frac{8\pi G}{c^4}T_{\mu\nu}$; ten coupled quasilinear second-order PDEs relating curvature to stress-energy [ESTABLISHED]. See [domains/general-relativity.md](domains/general-relativity.md).

**Eigenstate thermalization hypothesis (ETH)** — Ansatz that few-body observables in individual energy eigenstates of a generic non-integrable many-body Hamiltonian already take thermal values, explaining thermalization of isolated quantum systems [INFERENCE: strong numerical support, unproven; fails for integrable and many-body-localized systems]. See [domains/statistical-mechanics.md](domains/statistical-mechanics.md).

**Energy conditions** — Pointwise positivity constraints on $T_{\mu\nu}$ (weak/null/strong/dominant) used in singularity and censorship theorems; violated by quantum fields and by a positive $\Lambda$, so the pointwise forms are now seen as too strong [CONTESTED], replaced by averaged/quantum versions (ANEC, QNEC). See [domains/general-relativity.md](domains/general-relativity.md).

**Entanglement** — Nonseparability of a composite quantum state; the source of Bell violations and a quantifiable resource (teleportation, dense coding). Pure-state bipartite entanglement is measured by the entanglement entropy $S(\rho_A)$ [ESTABLISHED]. See [domains/quantum-mechanics.md](domains/quantum-mechanics.md), [domains/information-theory.md](domains/information-theory.md).

**Entanglement entropy** — Von Neumann entropy $S(\rho_A)=-\operatorname{Tr}\rho_A\ln\rho_A$ of a subsystem. In continuum QFT it is UV-divergent (area law); only universal/finite pieces are cutoff-independent, and local QFT algebras are Type III (no density matrices) [ESTABLISHED]. See [domains/information-theory.md](domains/information-theory.md).

**Envariance** — Environment-assisted invariance; Zurek's symmetry argument attempting to derive the Born rule within a no-collapse (Everettian) framework [CONTESTED]. See [domains/quantum-mechanics.md](domains/quantum-mechanics.md).

**Equivalence principle** — Universality of free fall (weak EP, tested to $\sim10^{-15}$) and local Lorentz/position invariance (Einstein EP); the basis for geometrizing gravity [ESTABLISHED]. See [domains/general-relativity.md](domains/general-relativity.md).

**ER=EPR** — Conjecture (Maldacena–Susskind) identifying entanglement (EPR) with geometric wormhole connections (Einstein–Rosen) [SPECULATIVE]. See [UNIFICATION_LANDSCAPE.md](UNIFICATION_LANDSCAPE.md).

**Ergodicity** — Equality of long-time and phase-space averages on the energy surface. Generic Hamiltonian systems are *not* ergodic (KAM); statistical mechanics is now justified more by typicality/measure concentration than by strict ergodicity [ESTABLISHED that ergodicity is neither necessary nor sufficient as usually invoked]. See [domains/statistical-mechanics.md](domains/statistical-mechanics.md).

**Euler–Lagrange equations** — $\frac{d}{dt}\frac{\partial L}{\partial\dot q^i}-\frac{\partial L}{\partial q^i}=0$; coordinate-invariant equations of motion from stationary action [ESTABLISHED]. See [domains/classical-mechanics.md](domains/classical-mechanics.md).

**Everett (many-worlds) interpretation** — Retains only unitary evolution; measurement is branching into decoherent worlds. Pays with branching multiplicity and an unsettled account of probability [ESTABLISHED equivalence to QM predictions; CONTESTED foundations]. See [domains/quantum-mechanics.md](domains/quantum-mechanics.md).

## F

**Faddeev–Popov / Gribov ambiguity** — Gauge-fixing procedure introducing ghost fields; globally obstructed in non-abelian theories (Gribov copies; Singer's theorem shows no global gauge section exists), so it is only locally valid nonperturbatively [ESTABLISHED]. See [domains/mathematics.md](domains/mathematics.md).

**Fermi–Dirac / Bose–Einstein statistics** — Occupation numbers $\langle n_k\rangle=[e^{\beta(\epsilon_k-\mu)}\pm1]^{-1}$ ($+$ fermions, $-$ bosons), following from identical-particle (anti)symmetrization [ESTABLISHED]. See [domains/statistical-mechanics.md](domains/statistical-mechanics.md), [spin–statistics theorem](#s).

**Feynman path integral** — Propagator as a sum over histories $\int\mathcal D[q]\,e^{iS/\hbar}$; the classical equations arise by stationary phase as $\hbar\to0$. Rigorous via Euclidean (Wiener) measure in QM and some low-dimensional QFTs; the literal Lorentzian measure does not exist [ESTABLISHED]. See [domains/mathematics.md](domains/mathematics.md).

**Fiber bundle** — A space locally a product $U\times F$ of base and fiber but possibly globally twisted; principal $G$-bundles host gauge connections, and the bundle topology is physical (Dirac quantization, Aharonov–Bohm) [ESTABLISHED]. See [domains/mathematics.md](domains/mathematics.md).

**First law of entanglement** — Perturbative equality $\delta S_A=\delta\langle K_A\rangle$ (modular Hamiltonian $K_A$); in holographic setups it yields the *linearized* Einstein equations — a concrete "gravity from entanglement" result [INFERENCE within AdS/CFT; SPECULATIVE as a route to full GR]. See [domains/information-theory.md](domains/information-theory.md).

**Fluctuation–dissipation theorem** — Relates a system's linear response to its equilibrium fluctuation spectrum; Einstein, Nyquist, and Green–Kubo relations are special cases [ESTABLISHED]. See [domains/statistical-mechanics.md](domains/statistical-mechanics.md).

**Fluctuation theorems** — Exact relations (Jarzynski equality, Crooks theorem, Gallavotti–Cohen) constraining nonequilibrium work and entropy-production distributions, sharpening the second law into an equality over trajectory ensembles [ESTABLISHED]. See [domains/thermodynamics.md](domains/thermodynamics.md).

**FLRW metric** — Friedmann–Lemaître–Robertson–Walker line element, the unique homogeneous-isotropic spacetime, with scale factor $a(t)$ and curvature $k$ [ESTABLISHED]. See [domains/cosmology.md](domains/cosmology.md).

**Free energy** — Thermodynamic potentials obtained as Legendre transforms of internal energy: Helmholtz $F=U-TS$, Gibbs $G=U-TS+pV$, grand $\Omega=U-TS-\mu N$, each minimized at equilibrium under its control variables [ESTABLISHED]. See [domains/thermodynamics.md](domains/thermodynamics.md).

**Friedmann equations** — Dynamical equations for $a(t)$ from the EFE under FLRW symmetry: $H^2=\frac{8\pi G}{3}\rho-\frac{k}{a^2}+\frac{\Lambda}{3}$ and the acceleration equation $\ddot a/a=-\frac{4\pi G}{3}(\rho+3p)+\Lambda/3$ [ESTABLISHED]. See [domains/cosmology.md](domains/cosmology.md).

## G

**Gauge invariance / gauge principle** — Invariance under local transformations of internal (or spacetime) symmetry; interactions follow from the covariant derivative $D_\mu=\partial_\mu-igA^a_\mu T^a$. Gauge symmetry is a *redundancy* of description, not a physical symmetry (Elitzur's theorem forbids its spontaneous breaking) [ESTABLISHED]; framing it as a fundamental "principle" is [CONTESTED]. See [domains/quantum-field-theory.md](domains/quantum-field-theory.md), [UNIFYING_PRINCIPLES.md](UNIFYING_PRINCIPLES.md).

**Generalized probabilistic theories (GPT)** — Operational framework reconstructing quantum theory from information-theoretic axioms (local tomography, purification, continuous reversibility); illuminating but with multiple inequivalent axiom sets [OPEN]. See [domains/quantum-mechanics.md](domains/quantum-mechanics.md).

**Generalized second law (GSL)** — Conjecture that ordinary entropy plus black-hole horizon entropy never decreases [INFERENCE, strong support]. See [domains/thermodynamics.md](domains/thermodynamics.md).

**Geodesic** — Extremal-proper-time worldline of a free-falling body: $\ddot x^\mu+\Gamma^\mu_{\alpha\beta}\dot x^\alpha\dot x^\beta=0$; "gravity = inertial motion in curved spacetime" [ESTABLISHED]. See [domains/general-relativity.md](domains/general-relativity.md).

**Geodesic deviation** — Relative acceleration of nearby geodesics governed by curvature: $D^2\xi^\mu/d\tau^2=-R^\mu{}_{\alpha\nu\beta}u^\alpha\xi^\nu u^\beta$; the operationally measurable tidal signature of gravity [ESTABLISHED]. See [domains/general-relativity.md](domains/general-relativity.md).

**Gibbs entropy** — $S_G=-k_B\int\rho\ln\rho\,d\Gamma$ (classical) or $-k_B\operatorname{Tr}(\rho\ln\rho)$ (von Neumann, quantum); the volume-entropy definition. Constant under exact dynamics; coarse-graining is required for increase [ESTABLISHED]. See [domains/statistical-mechanics.md](domains/statistical-mechanics.md).

**Gleason's theorem** — For $\dim\ge3$, the only probability measures on the projection lattice of a Hilbert space are of the form $\operatorname{Tr}(\rho\,\cdot)$, fixing the Born rule's form given noncontextuality [ESTABLISHED]. See [Born rule](#b).

**Goldstone bosons** — Massless (or pseudo-) excitations accompanying spontaneous breaking of a continuous global symmetry (Goldstone's theorem); when the symmetry is gauged they are "eaten" via the Higgs mechanism [ESTABLISHED]. See [domains/quantum-field-theory.md](domains/quantum-field-theory.md).

**Grand unified theory (GUT)** — Embedding of $SU(3)\times SU(2)\times U(1)$ into a simple group (SU(5), SO(10), Pati–Salam), explaining charge quantization and predicting proton decay [INFERENCE/SPECULATIVE; minimal SU(5) excluded by proton-decay bounds]. See [UNIFICATION_LANDSCAPE.md](UNIFICATION_LANDSCAPE.md).

**Groenewold–van Hove theorem** — No quantization map exists from the full classical Poisson algebra to operators respecting $\{\cdot,\cdot\}\mapsto[\cdot,\cdot]/i\hbar$ on all observables; operator ordering is a genuine ambiguity [ESTABLISHED]. See [domains/mathematics.md](domains/mathematics.md).

## H

**Haag's theorem** — In QFT the interaction picture does not exist: the free and interacting field representations are unitarily inequivalent, so the naive perturbative starting point is mathematically inconsistent (yet renormalized perturbation theory works) [ESTABLISHED]. See [domains/quantum-field-theory.md](domains/quantum-field-theory.md).

**Hamilton–Jacobi equation** — $H(q,\partial S/\partial q,t)+\partial S/\partial t=0$; a single first-order PDE whose complete integral solves the dynamics, and the classical limit of the Schrödinger equation via $S=-i\hbar\ln\psi$ [ESTABLISHED]. See [domains/classical-mechanics.md](domains/classical-mechanics.md).

**Hamiltonian mechanics** — Phase-space dynamics $\dot q^i=\partial H/\partial p_i$, $\dot p_i=-\partial H/\partial q^i$ on a symplectic manifold [ESTABLISHED]. See [domains/classical-mechanics.md](domains/classical-mechanics.md).

**Hawking radiation** — Thermal emission from a black-hole horizon at temperature $T_H=\hbar c^3/(8\pi G k_B M)$, derived from QFT on a curved background [INFERENCE: not directly observed, but theoretically robust]. See [domains/general-relativity.md](domains/general-relativity.md).

**Higgs (Brout–Englert–Higgs) mechanism** — Spontaneous breaking of a gauge symmetry by a scalar vacuum expectation value, giving mass to gauge bosons ($M_W=\tfrac12 gv$, $v\approx246$ GeV) without breaking gauge invariance explicitly [ESTABLISHED]. See [domains/particle-physics.md](domains/particle-physics.md).

**Hilbert space** — Complete complex inner-product space; states of a quantum system are rays (unit vectors up to phase), and observables are self-adjoint operators on it [ESTABLISHED]. See [domains/quantum-mechanics.md](domains/quantum-mechanics.md), [domains/mathematics.md](domains/mathematics.md).

**Holographic principle** — Conjecture that the degrees of freedom in a region are bounded by its boundary area in Planck units, so a gravitational theory is encoded on a lower-dimensional boundary [INFERENCE; realized concretely in AdS/CFT]. See [domains/information-theory.md](domains/information-theory.md), [UNIFYING_PRINCIPLES.md](UNIFYING_PRINCIPLES.md).

**Hubble tension** — $\sim4$–$6\sigma$ discrepancy between the early-universe ($H_0\approx67$–68) and local distance-ladder ($H_0\approx73$ km/s/Mpc) determinations of the expansion rate [CONTESTED: systematics vs new physics]. See [domains/cosmology.md](domains/cosmology.md), [GAPS_AND_CONTRADICTIONS.md](GAPS_AND_CONTRADICTIONS.md).

## I

**Identical particles** — Indistinguishable quanta whose multiparticle states must be symmetric (bosons) or antisymmetric (fermions); in 2D the exchange structure is richer (anyons, braid group) [ESTABLISHED]. See [domains/quantum-mechanics.md](domains/quantum-mechanics.md).

**Inflation** — A hypothesized epoch of slow-roll accelerated expansion solving the horizon, flatness, and monopole problems and seeding near-scale-invariant fluctuations [INFERENCE bordering SPECULATIVE; no primordial B-mode detection, inflaton unidentified]. See [domains/cosmology.md](domains/cosmology.md).

**Instanton** — A finite-action solution of the Euclidean field equations representing tunneling between topologically distinct gauge vacua, labeled by an integer winding (second Chern) number [ESTABLISHED]. See [domains/mathematics.md](domains/mathematics.md).

**Integrability (Liouville–Arnold)** — A Hamiltonian system with as many independent Poisson-commuting conserved quantities as degrees of freedom; motion confines to invariant tori [ESTABLISHED]. See [domains/classical-mechanics.md](domains/classical-mechanics.md).

## J

**Jacobson's derivation** — Demonstration that the Einstein equations follow as an equation of state from horizon thermodynamics ($\delta Q=T\delta S$ on local Rindler horizons) [SPECULATIVE/INFERENCE: suggestive of emergent gravity]. See [UNIFYING_PRINCIPLES.md](UNIFYING_PRINCIPLES.md).

**Jarzynski equality** — Exact nonequilibrium identity $\langle e^{-\beta W}\rangle=e^{-\beta\Delta F}$, valid arbitrarily far from equilibrium, implying $\langle W\rangle\ge\Delta F$ [ESTABLISHED]. See [domains/thermodynamics.md](domains/thermodynamics.md).

## K

**KAM theorem** — Kolmogorov–Arnold–Moser: most invariant tori of an integrable system survive small perturbations, provided their frequencies satisfy a Diophantine (non-resonance) condition; resonances seed chaos [ESTABLISHED]. See [domains/classical-mechanics.md](domains/classical-mechanics.md).

**KMS condition** — Kubo–Martin–Schwinger characterization of thermal equilibrium states via analyticity of correlation functions in imaginary time; via Tomita–Takesaki it identifies "temperature" and modular "time" with a common algebraic origin [ESTABLISHED]. See [domains/mathematics.md](domains/mathematics.md).

**Kochen–Specker theorem** — See [contextuality](#c).

**Kolmogorov complexity** — Length $K(x)$ of the shortest program generating a string $x$; machine-independent up to an additive constant but provably uncomputable [ESTABLISHED]. See [domains/information-theory.md](domains/information-theory.md).

**Kraus (operator-sum) representation** — General quantum channel $\rho\mapsto\sum_k K_k\rho K_k^\dagger$ with $\sum_k K_k^\dagger K_k=\mathbb1$; via Stinespring/Naimark every channel and POVM is a unitary/projective measurement on a dilated space [ESTABLISHED]. See [domains/quantum-mechanics.md](domains/quantum-mechanics.md).

## L

**Lagrangian** — Function $L=T-V$ (or density $\mathcal L$) whose action governs the dynamics; the specific $T-V$ form is a low-energy shadow of deeper (relativistic/path-integral) structure [ESTABLISHED, INFERENCE as to origin]. See [domains/classical-mechanics.md](domains/classical-mechanics.md).

**Landauer's principle** — Erasing one bit of information dissipates at least $k_BT\ln2$ of heat, linking logical irreversibility to thermodynamic cost; experimentally confirmed near the bound [ESTABLISHED; its independent status vs the second law is CONTESTED]. See [domains/information-theory.md](domains/information-theory.md).

**Landau pole** — Energy at which a coupling (e.g. in QED or $\phi^4$) formally diverges, signaling that the theory is at most an EFT with a finite UV cutoff (triviality) [INFERENCE, strong]. See [domains/quantum-field-theory.md](domains/quantum-field-theory.md).

**$\Lambda$CDM** — The concordance cosmological model: GR with a cosmological constant and cold dark matter, specified by six base parameters, fitting the CMB, BBN, BAO, and supernovae [ESTABLISHED as a fit; constituents [OPEN]]. See [domains/cosmology.md](domains/cosmology.md).

**Legendre transform** — Map exchanging a variable for its conjugate (e.g. $L\to H$, $U\to F$); underlies the Hamiltonian formalism and thermodynamic potentials [ESTABLISHED]. See [domains/classical-mechanics.md](domains/classical-mechanics.md), [domains/thermodynamics.md](domains/thermodynamics.md).

**Levi-Civita connection** — The unique torsion-free, metric-compatible connection on a (pseudo-)Riemannian manifold, with Christoffel symbols $\Gamma^\lambda_{\mu\nu}=\tfrac12 g^{\lambda\sigma}(\partial_\mu g_{\sigma\nu}+\partial_\nu g_{\sigma\mu}-\partial_\sigma g_{\mu\nu})$ [ESTABLISHED; the torsion-free choice is conventional, cf. Einstein–Cartan]. See [domains/general-relativity.md](domains/general-relativity.md).

**Lindblad (GKSL) equation** — Most general generator of completely-positive, trace-preserving Markovian dynamics: $\dot\rho=-\tfrac{i}{\hbar}[H,\rho]+\sum_k(L_k\rho L_k^\dagger-\tfrac12\{L_k^\dagger L_k,\rho\})$; governs open-system evolution and decoherence [ESTABLISHED]. See [domains/quantum-mechanics.md](domains/quantum-mechanics.md).

**Liouville's theorem** — Hamiltonian phase-space flow preserves volume ($d\rho/dt=0$), so fine-grained entropy is conserved — the technical reason coarse-graining is needed for irreversibility [ESTABLISHED]. See [domains/statistical-mechanics.md](domains/statistical-mechanics.md).

**Lovelock's theorem** — In 4D, the only divergence-free symmetric 2-tensor built from the metric and its first two derivatives (with second-order field equations) is $aG_{\mu\nu}+bg_{\mu\nu}$, making the Einstein equations plus $\Lambda$ essentially unique [ESTABLISHED]. See [domains/general-relativity.md](domains/general-relativity.md).

**LSZ reduction** — Lehmann–Symanzik–Zimmermann formula relating S-matrix elements to amputated correlation functions, justified for isolated mass shells with a mass gap; fails for confined or massless asymptotic states [ESTABLISHED]. See [domains/quantum-field-theory.md](domains/quantum-field-theory.md).

**Lyapunov exponent** — Rate $\lambda$ of exponential divergence of nearby trajectories, $|\delta x(t)|\sim|\delta x(0)|e^{\lambda t}$; $\lambda>0$ is the signature of deterministic chaos [ESTABLISHED]. See [domains/classical-mechanics.md](domains/classical-mechanics.md).

## M

**Majorana mass / neutrino** — A fermion identical to its own antiparticle; Majorana neutrino masses (via the seesaw or Weinberg operator) would violate lepton number, testable by neutrinoless double-beta decay. Dirac vs Majorana nature of neutrinos is [OPEN]. See [domains/particle-physics.md](domains/particle-physics.md).

**Mandelstam–Tamm bound** — Time–energy inequality bounding the rate of state evolution by the energy spread, reinterpreting $\Delta E\,\Delta t\gtrsim\hbar$ (which is *not* a Robertson relation, since there is no time operator) [ESTABLISHED]. See [domains/quantum-mechanics.md](domains/quantum-mechanics.md).

**Margolus–Levitin theorem** — Quantum speed limit: a state of mean energy $E$ above the ground state needs at least $t_\perp\ge\pi\hbar/2E$ to reach an orthogonal state [ESTABLISHED]. See [domains/information-theory.md](domains/information-theory.md).

**Maxwell relations** — Equalities among partial derivatives of thermodynamic potentials (e.g. $(\partial S/\partial V)_T=(\partial p/\partial T)_V$) following from exactness of the differentials [ESTABLISHED]. See [domains/thermodynamics.md](domains/thermodynamics.md).

**Maxwell's demon** — Thought experiment apparently violating the second law by sorting molecules; resolved by the entropy cost of information acquisition and especially erasure (Szilard, Landauer, Bennett) [ESTABLISHED]. See [domains/thermodynamics.md](domains/thermodynamics.md).

**Measurement problem** — The structural incompatibility between linear unitary evolution (which never selects a single outcome) and the stochastic projection postulate, with no rule specifying what triggers collapse ("the shifty split") [OPEN/CONTESTED]. The deepest internal problem of QM. See [domains/quantum-mechanics.md](domains/quantum-mechanics.md), [GAPS_AND_CONTRADICTIONS.md](GAPS_AND_CONTRADICTIONS.md).

**Microcausality** — Vanishing of commutators of local observables at spacelike separation, $[\phi(x),\phi(y)]=0$ for $(x-y)^2<0$; the QFT encoding of relativistic causality and no-signaling [ESTABLISHED]. See [domains/quantum-field-theory.md](domains/quantum-field-theory.md).

**Microcanonical ensemble** — Uniform (Liouville) measure on the energy shell; $S_B=k_B\ln\Omega(E)$. The equal-a-priori-probability postulate bridges micro to macro [INFERENCE/OPEN as to first-principles derivation]. See [domains/statistical-mechanics.md](domains/statistical-mechanics.md).

**Modular Hamiltonian** — Generator $K_A=-\ln\rho_A$ of the Tomita–Takesaki modular flow of a region's state; central to relative entropy, energy conditions, and the entanglement first law [ESTABLISHED]. See [domains/information-theory.md](domains/information-theory.md).

**Molecular chaos (Stosszahlansatz)** — Assumption that pre-collision velocities are uncorrelated; the precise time-asymmetric input that lets the Boltzmann $H$-theorem produce irreversibility [ESTABLISHED as the locus of time-asymmetry]. See [domains/statistical-mechanics.md](domains/statistical-mechanics.md).

**Moyal star product** — Noncommutative product $f\star g=fg+\tfrac{i\hbar}{2}\{f,g\}+O(\hbar^2)$ deforming the Poisson algebra; the phase-space (deformation-quantization) route from classical to quantum mechanics [ESTABLISHED]. See [domains/classical-mechanics.md](domains/classical-mechanics.md).

**Mutual information** — $I(X;Y)=H(X)+H(Y)-H(X,Y)=D(p(x,y)\Vert p(x)p(y))\ge0$; the shared information between two systems, finite even when individual entropies diverge [ESTABLISHED]. See [domains/information-theory.md](domains/information-theory.md).

## N

**Negative temperature** — For systems with a bounded energy spectrum, population inversion gives $dS/dU<0$, hence $T<0$, which is "hotter" than any positive $T$; experimentally realized [ESTABLISHED; admissibility tied to the CONTESTED Boltzmann-vs-Gibbs entropy debate]. See [domains/thermodynamics.md](domains/thermodynamics.md).

**No-cloning theorem** — Linearity of quantum mechanics forbids a universal device that copies an unknown state; underlies quantum cryptography and sharpens the information paradox [ESTABLISHED]. See [domains/information-theory.md](domains/information-theory.md).

**No-signaling theorem** — Local marginal statistics are independent of a distant party's measurement choice, so entanglement cannot transmit usable information faster than light [ESTABLISHED]. See [domains/quantum-mechanics.md](domains/quantum-mechanics.md).

**Noether's theorem** — Every continuous symmetry of an action yields a conserved current/charge; in Hamiltonian form, $\dot J=0\iff\{J,H\}=0$ [ESTABLISHED]. See [domains/classical-mechanics.md](domains/classical-mechanics.md), [UNIFYING_PRINCIPLES.md](UNIFYING_PRINCIPLES.md).

## O

**Objective-collapse models (GRW/CSL, Diósi–Penrose)** — Modifications of QM adding stochastic nonlinear terms that spontaneously localize macroscopic superpositions, predicting tiny, *testable* deviations from unitary QM [OPEN, empirically constrained]. See [domains/quantum-mechanics.md](domains/quantum-mechanics.md), [HYPOTHESES.md](HYPOTHESES.md).

**Osterwalder–Schrader reconstruction** — Theorem relating Euclidean (reflection-positive) correlation functions to a Lorentzian Wightman QFT; underlies rigorous and lattice work but requires reflection positivity (which can fail at finite density — the sign problem) [ESTABLISHED where conditions hold]. See [domains/quantum-field-theory.md](domains/quantum-field-theory.md).

## P

**Page curve** — The entanglement entropy of Hawking radiation as a function of time, rising then falling for a unitarily evaporating black hole; recently reproduced via quantum-extremal-surface/island computations [INFERENCE within assumptions]. See [domains/information-theory.md](domains/information-theory.md).

**Partition function** — Generating functional $Z=\operatorname{Tr}e^{-\beta\hat H}$ (statistical mechanics) or $\int\mathcal D\phi\,e^{-S_E}$ (Euclidean QFT); all equilibrium thermodynamics follows by differentiating $\ln Z$, and the Euclidean path integral *is* a partition function (Wick-rotation isomorphism) [ESTABLISHED]. See [domains/statistical-mechanics.md](domains/statistical-mechanics.md), [domains/quantum-field-theory.md](domains/quantum-field-theory.md).

**Past hypothesis** — The posit of an extraordinarily low-entropy initial cosmological state, required to ground the thermodynamic arrow of time given time-symmetric microdynamics [INFERENCE that it is necessary; OPEN why it holds]. See [domains/statistical-mechanics.md](domains/statistical-mechanics.md), [domains/cosmology.md](domains/cosmology.md).

**Pauli's theorem (no time operator)** — No self-adjoint operator is canonically conjugate to a Hamiltonian bounded below; time is treated as a c-number parameter, not an observable [ESTABLISHED]. See [domains/quantum-mechanics.md](domains/quantum-mechanics.md).

**PBR theorem** — Pusey–Barrett–Rudolph: under the assumption that independently prepared systems have independent physical states, the quantum state cannot be a mere probability distribution over deeper "ontic" states (a $\psi$-epistemic model) — the wavefunction is "real" [INFERENCE, conditional on the preparation-independence assumption]. See [domains/quantum-mechanics.md](domains/quantum-mechanics.md).

**Penrose–Hawking singularity theorems** — Under energy conditions and a trapped surface (or expansion), spacetime is geodesically incomplete, proving singularities are generic in gravitational collapse and cosmology [ESTABLISHED]. See [domains/general-relativity.md](domains/general-relativity.md).

**Phase transition** — Non-analyticity of a thermodynamic potential, occurring only in the thermodynamic limit (Lee–Yang); classified by order and universality class [ESTABLISHED]. See [domains/statistical-mechanics.md](domains/statistical-mechanics.md).

**PMNS matrix** — Pontecorvo–Maki–Nakagawa–Sakata lepton mixing matrix governing neutrino oscillations; its large mixing angles and undetermined CP phase contrast with the nearly diagonal CKM matrix [ESTABLISHED that mixing is large; CP phase OPEN]. See [domains/particle-physics.md](domains/particle-physics.md).

**Poincaré group** — The isometry group of Minkowski spacetime (Lorentz transformations + translations); its unitary irreducible representations classify particles by mass and spin (Wigner) via the Casimirs $P^2=m^2$, $W^2=-m^2 s(s+1)$ [ESTABLISHED]. See [domains/quantum-field-theory.md](domains/quantum-field-theory.md).

**Poisson bracket** — Lie-algebraic structure $\{f,g\}=\sum_i(\partial_{q^i}f\,\partial_{p_i}g-\partial_{p_i}f\,\partial_{q^i}g)$ on phase space; evolution is $df/dt=\{f,H\}+\partial_t f$. Survives (deformed) into the quantum commutator [ESTABLISHED]. See [domains/classical-mechanics.md](domains/classical-mechanics.md).

**POVM** — Positive operator-valued measure $\{E_i\ge0,\sum_i E_i=\mathbb1\}$; the most general quantum measurement, generalizing projective (von Neumann) measurements [ESTABLISHED]. See [domains/quantum-mechanics.md](domains/quantum-mechanics.md).

**Problem of time** — In canonical gravity the Hamiltonian is a sum of constraints, so $H\Psi=0$ (Wheeler–DeWitt) describes a "timeless" quantum universe; reconciling this with observed time evolution is unresolved [OPEN/CONTESTED]. See [domains/general-relativity.md](domains/general-relativity.md), [GAPS_AND_CONTRADICTIONS.md](GAPS_AND_CONTRADICTIONS.md).

## Q

**QBism** — Quantum Bayesianism: reads the wavefunction and Born rule as an agent's subjective degrees of belief, dissolving the measurement problem at the cost of a non-objective $\psi$ [CONTESTED interpretation]. See [domains/quantum-mechanics.md](domains/quantum-mechanics.md).

**Quantum error correction (QEC)** — Encoding logical information redundantly across physical degrees of freedom to protect against noise; in AdS/CFT it models how bulk operators are reconstructed from boundary subregions (entanglement-wedge reconstruction) [ESTABLISHED as code theory; INFERENCE as a model of holography]. See [domains/information-theory.md](domains/information-theory.md).

## R

**Reduced density matrix** — See [density matrix](#d).

**Reeh–Schlieder theorem** — The vacuum is cyclic and separating for every local algebra: acting with operators in an arbitrarily small region densely spans the whole Hilbert space, exhibiting ubiquitous vacuum entanglement (no contradiction with no-signaling) [ESTABLISHED]. See [domains/quantum-field-theory.md](domains/quantum-field-theory.md).

**Relational quantum mechanics** — Rovelli's interpretation in which physical facts are relative to the systems interacting, with no observer-independent absolute state [CONTESTED]. See [domains/quantum-mechanics.md](domains/quantum-mechanics.md).

**Renormalization** — Procedure absorbing cutoff dependence into a finite set of measured parameters; modern Wilsonian view treats it as RG flow of an effective theory rather than infinity-subtraction [ESTABLISHED]. See [renormalization group](#r), [domains/quantum-field-theory.md](domains/quantum-field-theory.md).

**Renormalization group (RG)** — The flow of couplings with energy scale, $\beta(g)=\mu\,dg/d\mu$; fixed points define scale-invariant (conformal) theories, and irrelevant operators are suppressed at low energy, explaining universality and emergent renormalizability [ESTABLISHED]. See [domains/statistical-mechanics.md](domains/statistical-mechanics.md), [UNIFYING_PRINCIPLES.md](UNIFYING_PRINCIPLES.md).

**Ricci / Riemann curvature** — $R^\rho{}_{\sigma\mu\nu}$ is the tensorial measure of gravity ($[\nabla_\mu,\nabla_\nu]V^\rho=R^\rho{}_{\sigma\mu\nu}V^\sigma$); its contraction (Ricci) sources the Einstein tensor [ESTABLISHED]. See [domains/general-relativity.md](domains/general-relativity.md).

**Rigged Hilbert space** — Gelfand triple $\Phi\subset\mathcal H\subset\Phi'$ making rigorous the Dirac formalism of continuous-spectrum "eigenstates" (e.g. position, momentum) that lie outside $\mathcal H$ [ESTABLISHED]. See [domains/mathematics.md](domains/mathematics.md).

**Robertson uncertainty relation** — $\Delta A\,\Delta B\ge\tfrac12|\langle[A,B]\rangle|$, a statement about ensemble spreads in a fixed state (not measurement disturbance), specializing to $\Delta x\,\Delta p\ge\hbar/2$ [ESTABLISHED]. See [domains/quantum-mechanics.md](domains/quantum-mechanics.md).

**Ryu–Takayanagi formula** — In holography, the entanglement entropy of a boundary region equals the area of the minimal homologous bulk surface, $S(A)=\mathrm{Area}(\gamma_A)/4G_N$; covariant (HRT) and quantum-corrected (QES) versions extend it [INFERENCE within AdS/CFT]. See [domains/information-theory.md](domains/information-theory.md).

## S

**Sakharov conditions** — The three requirements for dynamically generating a baryon asymmetry: baryon-number violation, C and CP violation, and departure from thermal equilibrium [ESTABLISHED as necessary conditions]. See [domains/particle-physics.md](domains/particle-physics.md).

**Schmidt decomposition** — Canonical form $|\psi\rangle_{AB}=\sum_i\sqrt{p_i}\,|i\rangle_A|i\rangle_B$ of a bipartite pure state, with the $p_i$ the eigenvalues of either reduced density matrix [ESTABLISHED]. See [domains/quantum-mechanics.md](domains/quantum-mechanics.md).

**Schrödinger equation** — $i\hbar\,\partial_t|\psi\rangle=H|\psi\rangle$; deterministic, linear, unitary evolution of a closed quantum system, with $U(t)=e^{-iHt/\hbar}$ [ESTABLISHED]. See [domains/quantum-mechanics.md](domains/quantum-mechanics.md).

**Second law of thermodynamics** — Entropy of an isolated system does not decrease, $\Delta S\ge0$ (Clausius $dS\ge\delta Q/T$); phenomenologically absolute, but statistically a probabilistic statement refined by fluctuation theorems [ESTABLISHED at macroscale; refined by statistical mechanics]. See [domains/thermodynamics.md](domains/thermodynamics.md).

**Self-adjoint operator** — A symmetric operator equal to its adjoint *including domains*; required (not mere symmetry) for a real spectrum, a spectral measure, and unitary dynamics (Stone). Inequivalent self-adjoint extensions encode different physics (boundary conditions) [ESTABLISHED]. See [domains/mathematics.md](domains/mathematics.md).

**Shannon entropy** — $H(X)=-\sum_x p(x)\log_2 p(x)$, the unique measure of average uncertainty (up to base), equal to the optimal lossless compression rate [ESTABLISHED]. See [domains/information-theory.md](domains/information-theory.md).

**Spectral theorem** — Every self-adjoint operator decomposes as $A=\int_{\sigma(A)}\lambda\,dE_A(\lambda)$ against a projection-valued measure on its spectrum; underwrites both the value set and the Born rule [ESTABLISHED]. See [domains/mathematics.md](domains/mathematics.md).

**Spin–statistics theorem** — In relativistic QFT, integer-spin fields are bosonic (commuting) and half-integer-spin fields are fermionic (anticommuting), forced by microcausality, positive energy, and Lorentz invariance; an *added postulate* in non-relativistic QM [ESTABLISHED]. See [domains/quantum-field-theory.md](domains/quantum-field-theory.md).

**Spontaneous symmetry breaking (SSB)** — A symmetric dynamics with a non-symmetric ground state; the symmetry is realized nonlinearly (Goldstone modes) rather than on the vacuum. Requires infinitely many degrees of freedom (inequivalent vacua) [ESTABLISHED]. See [domains/quantum-field-theory.md](domains/quantum-field-theory.md), [UNIFYING_PRINCIPLES.md](UNIFYING_PRINCIPLES.md).

**Standard Model** — The renormalizable, anomaly-free chiral gauge theory with group $SU(3)_c\times SU(2)_L\times U(1)_Y$ spontaneously broken to $SU(3)_c\times U(1)_{\rm em}$; the most precisely tested theory in science [ESTABLISHED, with confirmed incompleteness via neutrino mass]. See [domains/particle-physics.md](domains/particle-physics.md).

**Stinespring dilation** — Theorem that every completely-positive map is a compression of a $*$-homomorphism (unitary) on a larger space; the structural basis for Kraus/POVM purification [ESTABLISHED]. See [domains/quantum-mechanics.md](domains/quantum-mechanics.md).

**Stone's theorem** — A strongly continuous one-parameter unitary group has a unique self-adjoint generator, tying unitary dynamics to self-adjointness of the Hamiltonian [ESTABLISHED]. See [domains/mathematics.md](domains/mathematics.md).

**Stone–von Neumann theorem** — For finitely many canonical pairs, all irreducible representations of the (Weyl form of the) CCR are unitarily equivalent; uniqueness *fails* for infinitely many degrees of freedom, the technical root of inequivalent vacua, Haag's theorem, and SSB [ESTABLISHED]. See [domains/mathematics.md](domains/mathematics.md).

**Strong CP problem** — The unexplained smallness ($\bar\theta\lesssim10^{-10}$) of the CP-violating QCD theta angle, naturally $O(1)$; the Peccei–Quinn axion is the leading proposed resolution [OPEN; axion SPECULATIVE]. See [domains/particle-physics.md](domains/particle-physics.md).

**Strong subadditivity** — The deep entropy inequality $S(\rho_{ABC})+S(\rho_B)\le S(\rho_{AB})+S(\rho_{BC})$, equivalent to nonnegativity of conditional mutual information; source of most holographic entropy constraints [ESTABLISHED]. See [domains/information-theory.md](domains/information-theory.md).

**Superselection sector** — A subspace between which coherent superpositions are unobservable (e.g. different charge or, for infinite systems, distinct phases), arising from inequivalent representations [ESTABLISHED]. See [domains/quantum-field-theory.md](domains/quantum-field-theory.md).

**Supersymmetry (SUSY)** — Proposed graded symmetry relating bosons and fermions (evading Coleman–Mandula via the Haag–Łopuszański–Sohnius extension), addressing the hierarchy problem and improving gauge unification [SPECULATIVE; no superpartners observed]. See [UNIFICATION_LANDSCAPE.md](UNIFICATION_LANDSCAPE.md).

**Symplectic form** — Closed, nondegenerate two-form $\omega=dq^i\wedge dp_i$ on phase space defining Hamiltonian vector fields via $\iota_{X_H}\omega=dH$; the rigid geometric core of classical mechanics (Darboux's theorem) [ESTABLISHED]. See [domains/classical-mechanics.md](domains/classical-mechanics.md).

## T

**Tensor product** — The composition rule $\mathcal H_{AB}=\mathcal H_A\otimes\mathcal H_B$ for quantum subsystems, encoding local tomography and entanglement; singled out among operationally reasonable rules in GPT reconstructions [ESTABLISHED operationally; INFERENCE as necessity]. See [domains/quantum-mechanics.md](domains/quantum-mechanics.md).

**Thermodynamic limit** — The idealization $N,V\to\infty$ at fixed density, in which extensivity holds, ensembles are equivalent, and genuine phase transitions exist [ESTABLISHED idealization; fails for long-range/gravitating systems]. See [domains/statistical-mechanics.md](domains/statistical-mechanics.md).

**Third law of thermodynamics** — Entropy approaches a constant (conventionally zero) as $T\to0$ for a non-degenerate ground state, and absolute zero is unattainable; a quantum consequence of discrete spectra [ESTABLISHED]. See [domains/thermodynamics.md](domains/thermodynamics.md).

**Tomita–Takesaki modular theory** — For a cyclic separating state, the operator $S=J\Delta^{1/2}$ generates a canonical modular automorphism flow $\sigma_t(a)=\Delta^{it}a\Delta^{-it}$ and identifies the commutant ($JMJ=M'$); thermal (KMS) states are modular states [ESTABLISHED]. See [domains/mathematics.md](domains/mathematics.md).

**Topological quantum field theory (TQFT)** — A QFT whose observables depend only on topology; formalized as a symmetric monoidal functor $Z:\mathrm{Bord}_n\to\mathcal C^\otimes$ (Atiyah–Segal), with the cobordism hypothesis classifying fully extended TQFTs [ESTABLISHED for topological theories]. See [domains/mathematics.md](domains/mathematics.md).

**Triviality** — The conjecture/theorem that the continuum limit of a theory (e.g. $\phi^4$ in 4D, proven by Aizenman–Duminil-Copin) is the free theory, so it survives only as a cutoff EFT [ESTABLISHED for $\phi^4_4$; INFERENCE for QED]. See [domains/quantum-field-theory.md](domains/quantum-field-theory.md).

**Tsirelson bound** — The quantum maximum $2\sqrt2$ of the CHSH expression, exceeding the classical $2$ but below the no-signaling (PR-box) maximum $4$ [ESTABLISHED]. See [domains/quantum-mechanics.md](domains/quantum-mechanics.md).

## U

**Unitarity** — Conservation of total probability under time evolution / the S-matrix; non-negotiable within quantum mechanics, enforced order-by-order via Ward/BRST identities and the optical theorem [ESTABLISHED]. See [domains/quantum-field-theory.md](domains/quantum-field-theory.md).

**Universality** — See [critical exponents / universality](#c).

**Unruh effect** — A uniformly accelerated observer perceives the Minkowski vacuum as a thermal bath at temperature $T=\hbar a/2\pi k_B c$; demonstrates the observer-dependence of "particle" in QFT [INFERENCE: theoretically robust, not directly observed]. See [domains/quantum-field-theory.md](domains/quantum-field-theory.md).

## V

**Vacuum (QFT)** — The lowest-energy state; for interacting theories it is not the free Fock vacuum (Haag's theorem), is entangled across regions (Reeh–Schlieder), and carries energy whose gravitational weight is the cosmological-constant problem [ESTABLISHED]. See [domains/quantum-field-theory.md](domains/quantum-field-theory.md).

**Von Neumann entropy** — $S(\rho)=-\operatorname{Tr}(\rho\ln\rho)$; the quantum analogue of Shannon entropy, zero for pure states and maximal for the maximally mixed state, and the entanglement entropy of a bipartite pure state [ESTABLISHED]. See [domains/information-theory.md](domains/information-theory.md).

**Von Neumann algebra** — A $*$-subalgebra of bounded operators closed in the weak operator topology; classified into types I, II, III. Local QFT algebras are Type III$_1$ (no trace, no local density matrix) [ESTABLISHED]. See [domains/mathematics.md](domains/mathematics.md).

## W

**Ward identities** — Relations among correlation functions enforcing a (gauge) symmetry at the quantum level; ensure renormalizability and unitarity [ESTABLISHED]. See [domains/quantum-field-theory.md](domains/quantum-field-theory.md).

**Weinberg operator** — The unique dimension-5 Standard-Model EFT operator, $\frac{c_{ij}}{\Lambda}(\bar L_{Li}^c\tilde\phi^*)(\tilde\phi^\dagger L_{Lj})$, giving Majorana neutrino masses $m_\nu\sim v^2/\Lambda$ — the leading window to physics beyond the SM [ESTABLISHED as the leading operator]. See [domains/particle-physics.md](domains/particle-physics.md).

**Weinberg–Witten theorem** — Forbids, under broad assumptions, massless particles of spin $>1$ carrying a Lorentz-covariant conserved current, and spin $>2$ carrying a covariant stress-energy tensor — constraining how gravitons or composite gauge bosons can be *emergent* (the graviton must evade it, e.g. via the absence of a covariant boundary stress tensor) [ESTABLISHED]. See [UNIFICATION_LANDSCAPE.md](UNIFICATION_LANDSCAPE.md).

**Wheeler–DeWitt equation** — The quantum Hamiltonian constraint $H\Psi=0$ of canonical gravity, formally timeless; see [problem of time](#p) [ESTABLISHED as the constraint; interpretation OPEN]. See [domains/general-relativity.md](domains/general-relativity.md).

**Wick rotation** — Analytic continuation $t\to-i\tau$ relating Lorentzian QFT to Euclidean statistical field theory; rigorous under reflection positivity (Osterwalder–Schrader) but problematic in generic curved/Lorentzian backgrounds [ESTABLISHED where conditions hold]. See [domains/mathematics.md](domains/mathematics.md).

**Wightman axioms** — Axiomatic characterization of a relativistic QFT in terms of operator-valued distributions, Poincaré covariance, the spectrum condition, microcausality, and a cyclic vacuum [ESTABLISHED framework; 4D interacting realizations OPEN]. See [domains/quantum-field-theory.md](domains/quantum-field-theory.md).

**Wigner's theorem** — Every symmetry preserving transition probabilities is implemented by a unitary or antiunitary operator (antiunitary for time reversal) [ESTABLISHED]. See [domains/mathematics.md](domains/mathematics.md).

**Wilson loop** — Gauge-invariant trace of the holonomy of a connection around a closed loop; an order parameter for confinement and the natural gauge-invariant observable [ESTABLISHED]. See [domains/quantum-field-theory.md](domains/quantum-field-theory.md).

**WKB approximation** — Semiclassical expansion in $\hbar$ with phase $e^{iS/\hbar}$; recovers classical mechanics by stationary phase and captures tunneling ($\sim e^{-S/\hbar}$), but the $\hbar\to0$ limit is singular and non-uniform [ESTABLISHED]. See [domains/classical-mechanics.md](domains/classical-mechanics.md).

## Y

**Yang–Mills theory** — Non-abelian gauge theory with field strength $F^a_{\mu\nu}=\partial_\mu A^a_\nu-\partial_\nu A^a_\mu+gf^{abc}A^b_\mu A^c_\nu$ and self-interacting gauge bosons; the basis of QCD and the electroweak sector. Rigorous 4D existence with a mass gap is a Clay Millennium Problem [OPEN]. See [domains/quantum-field-theory.md](domains/quantum-field-theory.md), [OPEN_PROBLEMS.md](OPEN_PROBLEMS.md).

## See also

- [THEORY_MAP.md](THEORY_MAP.md) — how the domains and their concepts interconnect
- [EPISTEMICS.md](EPISTEMICS.md) — the meaning and calibration of the epistemic markers used here
- [UNIFYING_PRINCIPLES.md](UNIFYING_PRINCIPLES.md) — cross-cutting principles (symmetry, RG, locality, holography)
- [GAPS_AND_CONTRADICTIONS.md](GAPS_AND_CONTRADICTIONS.md) — where theories clash or break down
- [OPEN_PROBLEMS.md](OPEN_PROBLEMS.md) — the named open questions referenced above
- [CONSTANTS_AND_SCALES.md](CONSTANTS_AND_SCALES.md) — fundamental constants and characteristic scales
- Domain pages: [quantum-mechanics](domains/quantum-mechanics.md) · [quantum-field-theory](domains/quantum-field-theory.md) · [general-relativity](domains/general-relativity.md) · [classical-mechanics](domains/classical-mechanics.md) · [thermodynamics](domains/thermodynamics.md) · [statistical-mechanics](domains/statistical-mechanics.md) · [cosmology](domains/cosmology.md) · [particle-physics](domains/particle-physics.md) · [information-theory](domains/information-theory.md) · [mathematics](domains/mathematics.md)

## References

For canonical textbooks and landmark papers underlying these definitions, see [BIBLIOGRAPHY.md](BIBLIOGRAPHY.md).
