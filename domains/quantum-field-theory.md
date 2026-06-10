---
title: Quantum Field Theory
type: domain
tags: [domain, quantum-field-theory]
updated: 2026-06-08
---

# Quantum Field Theory

Status: Mature core, active foundational frontier
Last updated: 2026-06-08

Quantum Field Theory (QFT) is the quantum theory of relativistic fields and the framework underlying the [Standard Model](particle-physics.md), condensed-matter critical phenomena, and the modern language of effective theories across physics. It is simultaneously the most precisely tested theory of nature [ESTABLISHED] and one whose mathematical foundations remain incomplete for the cases we care about most [OPEN]. This tension — phenomenal empirical success atop a partly unproven scaffold — is the organizing theme of this page.

## Scope

This page treats QFT as a *foundational framework*, not a catalogue of computations. It covers:

1. The kinematic/dynamical core — fields as fundamental degrees of freedom, the action/path-integral, and canonical quantization.
2. The representation-theoretic definition of "particle" via Wigner's classification of Poincaré irreducible representations.
3. Renormalization, the renormalization group (RG), and the Wilsonian/effective-field-theory (EFT) reinterpretation.
4. The gauge principle, spontaneous symmetry breaking (SSB), the Brout–Englert–Higgs (BEH) mechanism, and anomalies.
5. Vacuum structure and zero-point energy.
6. The rigorous/axiomatic program (Wightman, Haag–Kastler, constructive QFT) and its structural theorems and obstructions.
7. The status of measurement in a relativistic field-theoretic setting.

Scope **excludes** quantum gravity and string theory except where they bound QFT's validity (see [general-relativity.md](general-relativity.md)); nonperturbative QCD, lattice gauge theory, and conformal field theory appear only insofar as they bear on foundations. For the broader inter-framework picture see [THEORY_MAP.md](../THEORY_MAP.md) and [UNIFICATION_LANDSCAPE.md](../UNIFICATION_LANDSCAPE.md).

## Core formalism

### Fields, action, and the two quantization routes

The fundamental objects are operator-valued (more precisely, operator-valued-distribution-valued) **fields** $\phi_a(x)$ over Minkowski spacetime $\mathbb{R}^{1,3}$ with metric $\eta_{\mu\nu}=\mathrm{diag}(+,-,-,-)$ (the signature is a conventional choice [ESTABLISHED]; physics is invariant under it, see [ASSUMPTIONS_LEDGER.md](../ASSUMPTIONS_LEDGER.md)). Dynamics derive from a local action

$$ S[\phi] = \int d^4x\, \mathcal{L}\big(\phi_a(x),\,\partial_\mu\phi_a(x)\big), $$

with Euler–Lagrange equations $\partial_\mu\!\left(\partial\mathcal{L}/\partial(\partial_\mu\phi_a)\right)-\partial\mathcal{L}/\partial\phi_a=0$. The canonical example is the real scalar

$$ \mathcal{L}=\tfrac12(\partial_\mu\phi)(\partial^\mu\phi)-\tfrac12 m^2\phi^2-\tfrac{\lambda}{4!}\phi^4. $$

**Locality** — that $\mathcal{L}$ is a function of fields and finitely many derivatives at a single point — is the central structural assumption of standard QFT.

**Route A — Canonical quantization.** With conjugate momentum $\pi=\partial\mathcal{L}/\partial\dot\phi$, impose equal-time commutators (bosons) or anticommutators (fermions):

$$ [\phi(\mathbf{x},t),\pi(\mathbf{y},t)] = i\,\delta^{(3)}(\mathbf{x}-\mathbf{y}). $$

Free fields expand in creation/annihilation operators,

$$ \phi(x)=\int\!\frac{d^3p}{(2\pi)^3}\frac{1}{\sqrt{2E_{\mathbf p}}}\Big(a_{\mathbf p}e^{-ip\cdot x}+a_{\mathbf p}^\dagger e^{+ip\cdot x}\Big),\quad [a_{\mathbf p},a_{\mathbf q}^\dagger]=(2\pi)^3\delta^{(3)}(\mathbf p-\mathbf q), $$

building a **Fock space** on a vacuum $|0\rangle$ with $a_{\mathbf p}|0\rangle=0$.

**Route B — Path integral.** Time-ordered correlation (Green's) functions are

$$ \langle 0|T\,\phi(x_1)\cdots\phi(x_n)|0\rangle = \frac{\int \mathcal{D}\phi\; \phi(x_1)\cdots\phi(x_n)\, e^{iS[\phi]/\hbar}}{\int \mathcal{D}\phi\; e^{iS[\phi]/\hbar}}. $$

The generating functional $Z[J]=\int\mathcal D\phi\,e^{i(S+\int J\phi)}$ yields connected correlators from $W[J]=-i\ln Z[J]$ and one-particle-irreducible (1PI) vertices from the effective action $\Gamma[\phi_{cl}]$ via Legendre transform. **Wick rotation** $t\to -i\tau$ converts $e^{iS}$ into a Boltzmann weight $e^{-S_E}$, mapping QFT onto Euclidean statistical mechanics and lending the path integral a (heuristically) convergent, measure-like form; the Osterwalder–Schrader (OS) axioms specify when a Euclidean theory reconstructs a Minkowski one. This is [ESTABLISHED] as a calculational framework, but the Lorentzian "measure" $\mathcal D\phi\,e^{iS}$ is *not* a rigorously defined measure in $d=4$ [ESTABLISHED limitation] — see [Where it breaks down](#where-it-breaks-down).

### Particles = unitary irreps of the Poincaré group (Wigner)

A relativistic one-particle state space carries a unitary irreducible representation of the universal cover of the Poincaré group, $\mathrm{ISL}(2,\mathbb{C})=\mathbb{R}^{1,3}\rtimes SL(2,\mathbb{C})$. Its Casimirs are

$$ P^2=P_\mu P^\mu\ (\text{mass}^2),\qquad W^2=W_\mu W^\mu,\quad W_\mu=-\tfrac12\epsilon_{\mu\nu\rho\sigma}P^\nu J^{\rho\sigma}\ (\text{Pauli–Lubanski}), $$

with $W^2=-m^2 s(s+1)$ for massive states. **Wigner's classification** [ESTABLISHED; Wigner 1939] organizes irreps by the orbit of $P_\mu$ and its little group:

- $m>0$: little group $SU(2)$ → labels $(m,s)$, $s\in\{0,\tfrac12,1,\dots\}$, with $2s+1$ spin states.
- $m=0$: little group $ISO(2)$; finite-helicity reps labelled by $h\in\tfrac12\mathbb{Z}$ (massless particles have two helicity states for $h\neq0$); plus exotic "continuous-spin" reps not realized in nature [ESTABLISHED that they are unobserved].
- $P=0$: the vacuum.
- $P^2<0$ (tachyonic) and $P^0<0$ orbits are excluded on physical grounds of stability and causality [ESTABLISHED].

Fields are the *local, Lorentz-covariant carriers* that interpolate particle states. The connection between a **field** transforming in a finite-dimensional (non-unitary) representation of $SL(2,\mathbb{C})$ and a **particle** in a unitary representation, mediated by the mode expansion, is the structural origin of the **spin–statistics** and **CPT** theorems. See [particle-physics.md](particle-physics.md) and [mathematics.md](mathematics.md).

### Renormalization and the renormalization group

Loop integrals produce ultraviolet (UV) divergences. One **regularizes** (dimensional regularization $d=4-\epsilon$, or a cutoff $\Lambda$), then **renormalizes** by absorbing divergences into a finite number of parameters (mass, couplings, field normalization). A theory is **perturbatively renormalizable** if finitely many counterterms suffice to all orders — equivalently, all couplings have mass dimension $\ge 0$ in $d=4$. Bare and renormalized quantities relate by $Z$-factors, $\phi_0=Z_\phi^{1/2}\phi$, $\lambda_0=Z_\lambda\,\mu^\epsilon\lambda$.

The **renormalization group** expresses independence of physics from the arbitrary scale $\mu$:

$$ \left[\mu\frac{\partial}{\partial\mu}+\beta(g)\frac{\partial}{\partial g}-\gamma_m\, m\frac{\partial}{\partial m}+n\,\gamma_\phi\right]\Gamma^{(n)}=0,\qquad \beta(g)=\mu\frac{dg}{d\mu}. $$

The sign and zeros of $\beta$ govern UV/IR fate. For QCD ($SU(3)$ with $n_f$ flavors),

$$ \beta(g)=-\frac{g^3}{16\pi^2}\Big(11-\tfrac{2}{3}n_f\Big)+\mathcal O(g^5)\ \Rightarrow\ \text{asymptotic freedom for } n_f<\tfrac{33}{2} $$

[ESTABLISHED; Gross–Wilczek and Politzer 1973]. For QED $\beta>0$, so the coupling grows in the UV toward a Landau pole. Fixed points $\beta(g_\*)=0$ define scale-invariant (typically conformal) theories — the endpoints of RG flows that anchor the space of QFTs.

### Wilsonian effective field theory

Wilson reframed renormalization physically [ESTABLISHED as conceptual framework]: define the theory with cutoff $\Lambda$, integrate out modes between $\Lambda$ and $b\Lambda$, and generate an effective action containing **all** operators allowed by symmetry,

$$ \mathcal L_{\text{eff}}=\sum_i \frac{c_i}{\Lambda^{\,d_i-4}}\,\mathcal O_i,\qquad d_i=\text{mass dimension of }\mathcal O_i. $$

Operators are **relevant** ($d_i<4$, grow in the IR), **marginal** ($d_i=4$), or **irrelevant** ($d_i>4$, suppressed by $(E/\Lambda)^{d_i-4}$). Renormalizability is thereby *derived*: low-energy physics is dominated by the finitely many relevant/marginal operators, while non-renormalizable operators are simply small. Every QFT becomes one rung in a tower of EFTs, and the Standard Model itself is an EFT valid up to some scale $\Lambda_{\rm new}$ [INFERENCE]. This is the deep formal bridge to [statistical-mechanics.md](statistical-mechanics.md): Euclidean QFT *is* classical statistical field theory, and universality classes/critical exponents are shared verbatim.

### Gauge principle, SSB, and the BEH mechanism

Promoting a global symmetry $\psi\to e^{i\alpha^a T^a}\psi$ to a local one forces a connection $A_\mu^a$ with covariant derivative $D_\mu=\partial_\mu-ig A_\mu^a T^a$ and field strength

$$ F_{\mu\nu}^a=\partial_\mu A_\nu^a-\partial_\nu A_\mu^a+g f^{abc}A_\mu^b A_\nu^c,\qquad \mathcal L_{YM}=-\tfrac14 F^a_{\mu\nu}F^{a\,\mu\nu}. $$

Geometrically, gauge fields are connections on a principal bundle and $F$ is curvature (see [mathematics.md](mathematics.md)). Quantization requires **gauge fixing** (Faddeev–Popov determinant → ghosts; BRST symmetry $s$ with $s^2=0$ controls unitarity).

**SSB** is a symmetric Lagrangian with a non-invariant vacuum. **Goldstone's theorem** [ESTABLISHED]: each spontaneously broken continuous *global* symmetry yields a massless scalar. The **BEH/Higgs mechanism** [ESTABLISHED; confirmed 2012]: when the broken symmetry is *gauged*, the would-be Goldstone bosons are "eaten," giving gauge bosons mass. For electroweak $SU(2)_L\times U(1)_Y\to U(1)_{\rm em}$ with a doublet $\Phi$, $\langle\Phi\rangle=(0,v/\sqrt2)$,

$$ M_W=\tfrac12 g v,\quad M_Z=\tfrac12\sqrt{g^2+g'^2}\,v,\quad v\approx246\ \text{GeV}, $$

plus a physical Higgs scalar with measured $m_H\approx125$ GeV. A subtlety often glossed in textbooks [ESTABLISHED but underappreciated]: in a gauge theory there is no gauge-invariant local order parameter — **Elitzur's theorem** forbids spontaneous breaking of a *local* gauge symmetry. The "Higgs phase" is gauge-fixing language; the gauge-invariant content lives in correlators, and the Fradkin–Shenker analysis shows the Higgs and confinement regimes are analytically connected. This bears directly on whether the gauge principle is "fundamental" — see the table below.

### Anomalies

An anomaly is a classical symmetry the quantized measure cannot preserve. The **chiral (Adler–Bell–Jackiw) anomaly** [ESTABLISHED]:

$$ \partial_\mu j^{5\mu}=\frac{e^2}{16\pi^2}\,\epsilon^{\mu\nu\rho\sigma}F_{\mu\nu}F_{\rho\sigma}. $$

Anomalies in *global* symmetries are physical and exact (e.g. the $\pi^0\to2\gamma$ rate). Anomalies in *gauged* symmetries are fatal and must cancel; in the Standard Model the hypercharge/$SU(2)$/$SU(3)$ anomalies cancel generation-by-generation, a strong structural constraint. 't Hooft anomaly matching constrains IR dynamics nonperturbatively — one of the few exact handles on strongly-coupled QFT.

### Vacuum and zero-point energy

The free Hamiltonian is $H=\int\frac{d^3p}{(2\pi)^3}E_{\mathbf p}\big(a^\dagger_{\mathbf p}a_{\mathbf p}+\tfrac12[a_{\mathbf p},a^\dagger_{\mathbf p}]\big)$, the last term a formally infinite zero-point energy. *Differences* are physical (the Casimir effect [ESTABLISHED]); the *absolute* value couples to gravity and underlies the cosmological-constant problem (see [Where it breaks down](#where-it-breaks-down) and [cosmology.md](cosmology.md)). The interacting vacuum is highly nontrivial, hosting condensates $\langle\bar q q\rangle$ and $\langle G^2\rangle$ in QCD.

### The rigorous/axiomatic skeleton

**Wightman axioms** (operator/correlation formulation): a Hilbert space $\mathcal H$ carrying a positive-energy unitary Poincaré representation, a unique vacuum, fields as operator-valued tempered distributions on a dense domain, **microcausality** $[\phi(x),\phi(y)]=0$ for spacelike $(x-y)$, and the spectrum condition $\mathrm{spec}(P)\subset\overline{V^+}$. The Wightman functions $\mathcal W_n=\langle0|\phi(x_1)\cdots\phi(x_n)|0\rangle$ obey covariance, spectral support, locality, positivity, and cluster decomposition — and (reconstruction theorem) determine the theory.

**Haag–Kastler / algebraic QFT (AQFT)**: the primitive is a net of local von Neumann algebras $\mathcal O\mapsto\mathfrak A(\mathcal O)$ over spacetime regions, satisfying isotony, locality (spacelike algebras commute), covariance, and the spectrum condition. Superselection structure (DHR), statistics, and charges emerge intrinsically; the local algebras are type III$_1$, so there is **no tensor factorization** of $\mathcal H$ into local subsystems and no local number operator.

Theorems provable within these axioms [ESTABLISHED within the framework]: **spin–statistics** and **CPT** (Wightman axioms + analyticity); **Reeh–Schlieder** ($\overline{\mathfrak A(\mathcal O)|0\rangle}=\mathcal H$ — the vacuum is cyclic and separating for any local algebra, implying ubiquitous vacuum entanglement); **Bisognano–Wichmann** (the modular flow of the Rindler wedge *is* the Lorentz boost, linking Tomita–Takesaki modular theory to the Unruh effect); and **Haag's theorem** (no unitary intertwines a free and an interacting representation in the same Hilbert space — the interaction picture, strictly, does not exist).

## Foundational assumptions

| Assumption | Status | Justification |
|---|---|---|
| Fields (not particles or paths) are the fundamental degrees of freedom | likely-fundamental | [INFERENCE] Locality + relativistic causality + cluster decomposition, with QM, essentially force a field description (Weinberg's "folk theorem"). Particles emerge as field excitations and are observer-ambiguous (Unruh; no global particle number in curved space). Whether fields are themselves emergent (strings, entanglement, pre-geometry) is [OPEN]. |
| Spacetime is a fixed, smooth, globally Lorentzian continuum (Minkowski) | likely-fundamental | [INFERENCE/OPEN] A fixed classical background is a spectacularly successful input but is expected to fail at the Planck scale where geometry is dynamical. The continuum is also idealized: whether a nonperturbative continuum limit exists is the constructive-QFT/triviality question. |
| Microcausality: spacelike-separated local observables commute | fundamental | [ESTABLISHED as defining axiom] The precise encoding of relativistic causality and no-signaling; drives spin–statistics, CPT, Reeh–Schlieder. The single most load-bearing, least negotiable assumption — relaxing it generically breaks Lorentz invariance or causality. |
| Poincaré invariance, unique stable vacuum, energy bounded below (spectrum condition) | fundamental | [ESTABLISHED/INFERENCE] Lorentz invariance is tested to extraordinary precision and grounds Wigner's classification; positive energy is required for stability. Globally exact only in flat space — an excellent *local* approximation cosmologically. Tiny Lorentz violation is [OPEN], constrained but not excluded. |
| Renormalizability as a selection criterion for fundamental Lagrangians | historical-artifact | [ESTABLISHED reinterpretation] Once a sacred requirement; Wilson's RG showed it is an *emergent* low-energy property (irrelevant operators are $E/\Lambda$-suppressed). Predictive non-renormalizable EFTs (chiral PT, Fermi theory, gravity-as-EFT) abound. A derived/organizational fact, not an axiom. |
| Existence of a well-defined functional measure $\mathcal D\phi$ and of the theory it defines | unclear | [CONTESTED/OPEN] The Lorentzian "measure" is not rigorous in $d=4$; even the Euclidean measure is constructed only for super-renormalizable/low-$d$ models ($\phi^4_2,\phi^4_3$, 2D Yang–Mills, Gross–Neveu). For 4D QCD/electroweak no rigorous construction exists (Clay Millennium Problem). A phenomenally successful heuristic with incomplete foundations where it matters most. |
| The gauge "symmetry" is a fundamental interaction-generating principle | conventional-choice | [CONTESTED interpretation] Hugely productive, but gauge symmetry is a *redundancy*, not a physical symmetry (Elitzur forbids breaking it; observables are gauge-invariant). The physical core (massless spin-1 consistency, charge conservation) is fundamental; "derive interactions by gauging" is a heuristic — the bundle/connection geometry and Wilson loops are the invariant content. |
| Asymptotic in/out free states and a well-defined S-matrix exist (LSZ, asymptotic completeness) | likely-fundamental | [INFERENCE] Justified by LSZ and Haag–Ruelle scattering given isolated mass shells and a mass gap. Fails for confined theories (no free quarks), massless particles (IR divergences; coherent states), and CFTs (no particles). Asymptotic completeness is assumed, not generally proven. Fundamental where applicable, but restricted in domain. |
| Wick rotation / OS reconstruction faithfully relates Euclidean and Lorentzian QFT | unclear | [ESTABLISHED where conditions hold] OS reconstruction is a theorem given reflection positivity; it underlies all rigorous and lattice work. But reflection positivity can fail (finite chemical potential — the sign problem) and real-time/non-equilibrium dynamics is not directly accessible. A powerful device of uncertain universal reach. |
| Unitarity (probability conservation) of evolution / the S-matrix | fundamental | [ESTABLISHED] Required for a consistent probabilistic quantum theory; enforced via BRST/Ward identities and the optical theorem. Apparent unitarity loss in effective/open descriptions reflects truncation, not failure of the closed theory. Non-negotiable within QM. |
| A single fixed Hilbert (Fock) space with finite field content suffices | unclear | [ESTABLISHED limitation — a convenience that is strictly false] Haag's theorem: the interacting theory does *not* live in the free Fock space; inequivalent representations are generic (Stone–von Neumann uniqueness fails for infinitely many d.o.f.). AQFT replaces the privileged representation with a net of algebras. |

See [ASSUMPTIONS_LEDGER.md](../ASSUMPTIONS_LEDGER.md) for the cross-domain ledger and [EPISTEMICS.md](../EPISTEMICS.md) for marker definitions.

## Domain of validity

QFT on a fixed (typically flat) spacetime is validated over an extraordinary range. [ESTABLISHED] QED predicts the electron anomalous magnetic moment to roughly twelve significant figures — among the most precise theory–experiment agreements in all of science. The electroweak Standard Model and perturbative QCD describe collider physics into the few-TeV regime probed at the LHC with no confirmed deviation. Lattice QCD computes the nonperturbative low-energy hadron spectrum from first principles. The same RG/EFT machinery quantitatively governs condensed-matter critical phenomena (see [statistical-mechanics.md](statistical-mechanics.md)) and is the working language across particle, nuclear, statistical, and condensed-matter physics. QFT is, in the current understanding, the *unique* known way to reconcile quantum mechanics (see [quantum-mechanics.md](quantum-mechanics.md)) with special relativity.

Boundaries of validity:

1. **Energy/UV.** Standard QFT presupposes a fixed classical spacetime and is expected to require replacement near $M_{\rm Pl}\sim1.2\times10^{19}$ GeV, where gravitational backreaction makes the metric quantum. The SM is widely regarded as an EFT with a cutoff below $M_{\rm Pl}$, possibly far below [INFERENCE].
2. **Gravity.** General relativity quantized as a QFT is a valid EFT at low energy but is perturbatively non-renormalizable, losing predictivity at $M_{\rm Pl}$ — the clearest internal signal of an upper validity bound. [ESTABLISHED that GR-as-EFT works at low energy; OPEN what completes it.] See [general-relativity.md](general-relativity.md).
3. **Curved/dynamical spacetime.** QFT in curved backgrounds is well-developed (Hawking radiation, Unruh effect), but "particle" becomes observer-dependent and there is no preferred vacuum; full back-reacting quantum gravity lies outside the framework.
4. **Coupling/UV self-consistency.** QED and $\phi^4$ have Landau poles and are believed *trivial* (only the free theory survives the continuum limit) [INFERENCE from lattice + perturbation theory], so they are EFTs with a finite UV cutoff, not complete theories.
5. **Confinement/IR.** For QCD the perturbative quark–gluon description fails near $\Lambda_{\rm QCD}\sim200$ MeV; the correct degrees of freedom are hadrons, requiring nonperturbative (lattice) methods.
6. **Rigor.** Outside a list of super-renormalizable and low-dimensional models, no physically realistic 4D interacting QFT has been constructed to full mathematical rigor.

## Where it breaks down

Distinguishing the *kinds* of breakdown is essential (see [GAPS_AND_CONTRADICTIONS.md](../GAPS_AND_CONTRADICTIONS.md)):

- **Quantum gravity / Planck scale** — [ESTABLISHED breakdown, domain mismatch]. Treating the metric as a quantum field gives a non-renormalizable EFT; graviton loops need infinitely many counterterms and predictivity fails at $M_{\rm Pl}$. This is a domain-of-validity mismatch (fixed background cannot host fluctuating geometry), *not* an internal inconsistency, and is the sharpest signpost of UV incompleteness.
- **Cosmological constant / vacuum energy** — [OPEN, severe]. Summed zero-point energies plus known condensates predict a vacuum energy vastly larger than the observed dark-energy scale (∼120 orders of magnitude with a Planck cutoff; tens of orders even at the electroweak scale). Because it concerns how vacuum energy *gravitates*, it sits at the QFT/gravity interface and may signal that the naive QFT vacuum-energy estimate is the wrong object. See [cosmology.md](cosmology.md) and [OPEN_PROBLEMS.md](../OPEN_PROBLEMS.md).
- **Haag's theorem** — [ESTABLISHED internal tension]. The interaction picture does not exist (free and interacting representations are unitarily inequivalent), so the textbook perturbative starting point is mathematically inconsistent — yet renormalized perturbation theory gives correct answers. The resolution (an asymptotic recipe; rigorous objects are algebras/superselection sectors; a proper adiabatic/IR treatment evades the theorem) shows this is a foundational subtlety, not a falsification.
- **Triviality / Landau poles** — [INFERENCE, strong]. $\phi^4_4$ and QED couplings grow to a Landau pole; lattice and rigorous bounds indicate the only continuum limit is free. These are EFTs with an intrinsic cutoff — a consistent statement about domain of validity, refuting the idea that every renormalizable theory is UV-complete.
- **Constructive gap (Yang–Mills existence + mass gap)** — [OPEN]. No rigorous construction of 4D interacting Yang–Mills (or full QCD/electroweak) exists; existence + mass gap is a Clay Millennium Problem. Lattice evidence for the gap is strong; a proof satisfying the Wightman/OS axioms is missing. Unsolved-but-believed-consistent.
- **Measurement in relativistic QFT** — [OPEN/CONTESTED]. The measurement problem persists, sharpened by relativity: naive projective state-update across spacelike slices is frame-dependent and can yield Sorkin's "impossible measurements" (superluminal signaling), while Reeh–Schlieder gives local operations global reach. No-signaling is preserved by microcausality, and consistent local-measurement frameworks exist (Fewster–Verch), but a fully agreed covariant account of state update is not settled. See [quantum-mechanics.md](quantum-mechanics.md).
- **Reeh–Schlieder nonlocality vs. operational locality** — [ESTABLISHED but counterintuitive]. The vacuum is entangled across arbitrarily separated regions and cyclic/separating for every local algebra. This does not contradict no-signaling, but it forces the type III von Neumann algebra picture in which there is no local tensor factorization and no local number operator.
- **IR structure of gauge theories** — [ESTABLISHED, controlled]. Massless particles (photons, gluons) generate soft/collinear divergences; individual S-matrix elements are ill-defined and Fock asymptotic states are not the right notion. The cure (KLN theorem, inclusive cross sections, coherent/dressed states, soft-theorem/asymptotic-symmetry program) restores finite predictions while exposing the boundary of the naive particle idealization.
- **Nonperturbative/confining regime** — [ESTABLISHED domain shift]. Perturbation theory is at best asymptotic and fails outside asymptotic freedom; below ∼1 GeV the quark–gluon variables are simply wrong, and one must use lattice or effective hadronic theories.

## Open problems (internal)

These are problems *internal* to QFT as a framework; cross-cutting items appear in [OPEN_PROBLEMS.md](../OPEN_PROBLEMS.md).

1. **Rigorous 4D construction: Yang–Mills existence and mass gap** [OPEN]. The flagship gap between empirical success and mathematical foundation (Clay Millennium Problem).
2. **UV completeness vs. EFT status** [INFERENCE/OPEN]. Triviality of $\phi^4$/QED suggests the SM Higgs and hypercharge sectors need a UV completion. Whether asymptotic safety (a nontrivial UV fixed point) could rescue any sector — including gravity — is unresolved.
3. **Cosmological constant problem** [OPEN; arguably the deepest in physics]. Why is the observed vacuum energy so far below QFT estimates? Proposed resolutions (SUSY, anthropic/landscape, sequestering, modified gravity) are all [SPECULATIVE].
4. **Covariant measurement theory** [OPEN/CONTESTED]. A complete, interpretation-neutral, manifestly covariant account of measurement/state-update.
5. **Nonperturbative dynamics** [OPEN]. An analytic confinement proof; real-time and finite-density QCD obstructed by the sign problem (limiting first-principles access to neutron-star interiors and the early-universe QCD transition).
6. **Inequivalent representations / type III algebras** [OPEN]. The right notion of local subsystems and finite, physical entanglement entropy in QFT (the naive region entropy is UV-divergent; modular Hamiltonians and relative entropy are clean but incomplete, especially with gravity/holography).
7. **Asymptotic safety in $d\ge4$** [SPECULATIVE/OPEN]. Functional-RG evidence for an asymptotically safe gravity fixed point exists but is truncation-dependent and unproven.
8. **Continuum/locality vs. expected Planck-scale structure** [OPEN]. Whether spacetime, fields, and locality are fundamental or emergent (entanglement/holography/strings) bears directly on which axioms above are truly fundamental.

## Connections to other frameworks

- **[Quantum mechanics](quantum-mechanics.md)** — QFT contains QM as a low-energy/single-particle limit and as the $d=0{+}1$ case; conversely the Stone–von Neumann uniqueness of QM *fails* in QFT, the technical root of Haag's theorem, inequivalent vacua, and SSB. The measurement problem is inherited and sharpened.
- **Special relativity** (see [classical-mechanics.md](classical-mechanics.md), [general-relativity.md](general-relativity.md)) — Poincaré invariance and microcausality are constitutive; relativity is what forces fields, antiparticles, particle creation, spin–statistics, and CPT.
- **[General relativity / quantum gravity](general-relativity.md)** — Clash at the deepest level: QFT presupposes fixed spacetime, GR makes it dynamical. GR is an excellent low-energy EFT, non-renormalizable at $M_{\rm Pl}$. The interface produces the hardest problems (cosmological constant, black-hole information, Hawking radiation) and motivates string theory, loop quantum gravity, and holography.
- **[Statistical mechanics](statistical-mechanics.md)** and **[thermodynamics](thermodynamics.md)** — Deep formal equivalence via Wick rotation: Euclidean QFT = classical statistical field theory; the RG, universality, critical exponents, and relevant/irrelevant operators are literally shared. The path integral is a partition function; the Unruh/Hawking effects connect modular flow to temperature.
- **Condensed matter / many-body physics** — Two-way street: Green's functions, diagrams, RG, and gauge theory describe quasiparticles, superconductivity (Anderson/Nambu route to the Higgs mechanism via SSB of EM gauge symmetry), the quantum Hall effect, and topological phases. Emergent gauge symmetry and emergent Lorentz invariance suggest fundamental QFT structures may themselves be emergent (see [UNIFYING_PRINCIPLES.md](../UNIFYING_PRINCIPLES.md)).
- **[Mathematics](mathematics.md)** — QFT both consumes and generates mathematics: Tomita–Takesaki modular theory and von Neumann algebra classification (AQFT); index theorems and characteristic classes (anomalies); fiber-bundle geometry (gauge fields); representation theory of the Poincaré and conformal groups; and conjectural structures (mirror symmetry, Chern–Simons knot invariants, Langlands) that emerged from QFT reasoning.
- **Conformal field theory and the bootstrap** — CFTs are QFTs at RG fixed points; they anchor the space of QFTs (UV/IR endpoints of flows), are the most rigorously controlled interacting QFTs (especially 2D), and via AdS/CFT relate to quantum gravity — a key node toward the gravity frontier.
- **[Particle physics](particle-physics.md)** and **[cosmology](cosmology.md)** — The Standard Model is QFT's empirical embodiment; its open phenomenology (neutrino masses, dark matter, baryon asymmetry, strong-CP, hierarchy) drives experiment, and early-universe cosmology (inflation, baryogenesis, the QCD/electroweak transitions) is QFT applied to the whole universe, looping back to vacuum-energy and measurement issues.
- **[Information theory](information-theory.md)** — Entanglement entropy, modular Hamiltonians, and relative entropy of local algebras connect QFT to quantum information and, via holography, to the area law and the emergence of geometry.

## See also

- [THEORY_MAP.md](../THEORY_MAP.md) — placement of QFT in the global framework map
- [UNIFICATION_LANDSCAPE.md](../UNIFICATION_LANDSCAPE.md) — routes toward UV completion
- [UNIFYING_PRINCIPLES.md](../UNIFYING_PRINCIPLES.md) — symmetry, locality, RG as cross-domain principles
- [ASSUMPTIONS_LEDGER.md](../ASSUMPTIONS_LEDGER.md) — cross-domain assumption tracking
- [OPEN_PROBLEMS.md](../OPEN_PROBLEMS.md) and [GAPS_AND_CONTRADICTIONS.md](../GAPS_AND_CONTRADICTIONS.md)
- [HYPOTHESES.md](../HYPOTHESES.md), [FINDINGS.md](../FINDINGS.md), [CONSTANTS_AND_SCALES.md](../CONSTANTS_AND_SCALES.md)
- [EPISTEMICS.md](../EPISTEMICS.md), [GLOSSARY.md](../GLOSSARY.md)
- Domains: [quantum-mechanics.md](quantum-mechanics.md), [general-relativity.md](general-relativity.md), [statistical-mechanics.md](statistical-mechanics.md), [particle-physics.md](particle-physics.md), [cosmology.md](cosmology.md), [mathematics.md](mathematics.md), [information-theory.md](information-theory.md)

## References

See [BIBLIOGRAPHY.md](../BIBLIOGRAPHY.md) for the consolidated list. Core sources for this page:

- S. Weinberg, *The Quantum Theory of Fields*, Vols. I–III (Cambridge, 1995–2000) — first-principles derivation from Poincaré invariance, unitarity, and cluster decomposition.
- M. E. Peskin and D. V. Schroeder, *An Introduction to Quantum Field Theory* (Addison-Wesley, 1995) — standard graduate calculational reference.
- A. Zee, *Quantum Field Theory in a Nutshell*, 2nd ed. (Princeton, 2010) — path-integral-first, EFT-oriented conceptual treatment.
- R. F. Streater and A. S. Wightman, *PCT, Spin and Statistics, and All That* (Benjamin 1964; Princeton 2000) — Wightman axioms, reconstruction, spin–statistics, CPT.
- R. Haag, *Local Quantum Physics*, 2nd ed. (Springer, 1996) — algebraic QFT, DHR superselection, modular theory, Reeh–Schlieder, Haag's theorem.
- E. P. Wigner, "On Unitary Representations of the Inhomogeneous Lorentz Group," *Ann. Math.* **40**, 149 (1939).
- K. G. Wilson and J. Kogut, "The renormalization group and the epsilon expansion," *Phys. Rep.* **12**, 75 (1974).
- D. J. Gross and F. Wilczek, *Phys. Rev. Lett.* **30**, 1343 (1973); H. D. Politzer, *Phys. Rev. Lett.* **30**, 1346 (1973) — asymptotic freedom.
- S. L. Adler, *Phys. Rev.* **177**, 2426 (1969); J. S. Bell and R. Jackiw, *Nuovo Cimento A* **60**, 47 (1969) — chiral anomaly.
- J. Glimm and A. Jaffe, *Quantum Physics: A Functional Integral Point of View*, 2nd ed. (Springer, 1987) — constructive QFT.
- P. W. Higgs, *Phys. Rev. Lett.* **13**, 508 (1964); F. Englert and R. Brout, *Phys. Rev. Lett.* **13**, 321 (1964); G. Guralnik, C. Hagen, T. Kibble, *Phys. Rev. Lett.* **13**, 585 (1964) — BEH mechanism.
- H. Reeh and S. Schlieder, *Nuovo Cimento* **22**, 1051 (1961); J. J. Bisognano and E. H. Wichmann, *J. Math. Phys.* **16**, 985 (1975).
- R. D. Sorkin, "Impossible measurements on quantum fields," in *Directions in General Relativity* Vol. 2 (1993); C. J. Fewster and R. Verch, "Quantum fields and local measurements," *Commun. Math. Phys.* **378**, 851 (2020).
- C. Itzykson and J.-B. Zuber, *Quantum Field Theory* (McGraw-Hill, 1980).
