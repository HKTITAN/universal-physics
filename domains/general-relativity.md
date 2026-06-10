---
title: General Relativity
type: domain
tags: [domain, general-relativity]
updated: 2026-06-08
---

# General Relativity

Status: Stable core; active frontiers at the quantum/cosmological boundary.
Last updated: 2026-06-08

General Relativity (GR) is the accepted classical relativistic theory of gravitation. It recasts gravity not as a force on a fixed stage but as the geometry of a four-dimensional spacetime: a smooth Lorentzian manifold whose curvature is sourced by stress-energy through the Einstein field equations. This page is the authoritative deep-dive for the GR domain in this wiki: its geometric formalism, variational origin, the equivalence and background-independence principles, exact solutions and causal structure, the singularity theorems and gravitational waves, the 3+1 initial-value formulation, the structural absence of local gravitational energy, and the precise senses in which the theory breaks down.

For epistemic-marker definitions see [EPISTEMICS.md](../EPISTEMICS.md); for the global theory layout see [THEORY_MAP.md](../THEORY_MAP.md).

## Scope

[ESTABLISHED] GR describes gravitation geometrically: spacetime is a pseudo-Riemannian manifold $(M, g)$, and matter-energy determines its curvature. The theory is empirically valid from laboratory and Solar-System scales through binary pulsars, black holes, gravitational-wave sources, and cosmology.

This page covers: the geometric formalism (metric, Levi-Civita connection, curvature); the field equations and their Einstein–Hilbert variational origin; the equivalence principle and diffeomorphism invariance / background independence; geodesics and causal structure; the canonical exact solutions (Schwarzschild, Kerr, FLRW) and their horizons; the Penrose–Hawking singularity theorems; gravitational waves; the ADM 3+1 initial-value formulation and its constraints; the problem of gravitational energy; and the structural reasons GR resists quantization.

Explicitly **excluded** (treated only as connections): detailed quantum-gravity programs — see [domains/quantum-field-theory.md](quantum-field-theory.md) and [UNIFICATION_LANDSCAPE.md](../UNIFICATION_LANDSCAPE.md) — detailed astrophysics, and numerical-relativity engineering.

## Core formalism

### 1. The arena: a Lorentzian manifold

[ESTABLISHED] Spacetime is modeled as a connected, 4-dimensional, smooth ($C^\infty$), Hausdorff, paracompact, time-orientable manifold $M$ equipped with a pseudo-Riemannian (Lorentzian) metric $g$ of signature $(-,+,+,+)$ (equivalently $(+,-,-,-)$; a pure convention). The metric is a smooth, symmetric, nondegenerate $(0,2)$-tensor field. In a chart $\{x^\mu\}$, $\mu=0,1,2,3$,

$$ ds^2 = g_{\mu\nu}\, dx^\mu dx^\nu, \qquad g_{\mu\nu}=g_{\nu\mu}, \qquad \det(g_{\mu\nu})\neq 0, $$

with one negative and three positive eigenvalues at every point. Nondegeneracy yields an inverse $g^{\mu\nu}$ with $g^{\mu\alpha}g_{\alpha\nu}=\delta^\mu_\nu$. The metric raises and lowers indices and fixes lengths, angles, the causal cone, and the invariant volume element $\sqrt{-g}\,d^4x$.

Tangent vectors at $p\in M$ split into **timelike** ($g(v,v)<0$), **null** ($g(v,v)=0$), and **spacelike** ($g(v,v)>0$):

$$ g(v,v) < 0\ (\text{timelike}),\quad =0\ (\text{null}),\quad >0\ (\text{spacelike}). $$

The null cone at each point is the local light cone; time-orientability lets us globally label the two halves future and past. This Lorentzian causal structure is what the singularity theorems and Penrose diagrams exploit.

### 2. Connection and covariant derivative

[ESTABLISHED] GR uses the unique **Levi-Civita connection** $\nabla$: torsion-free and metric-compatible. Its coefficients are the Christoffel symbols,

$$ \Gamma^{\lambda}_{\mu\nu} = \tfrac{1}{2}\, g^{\lambda\sigma}\!\left(\partial_\mu g_{\sigma\nu} + \partial_\nu g_{\sigma\mu} - \partial_\sigma g_{\mu\nu}\right). $$

Metric compatibility $\nabla_\lambda g_{\mu\nu}=0$ together with zero torsion ($\Gamma^\lambda_{\mu\nu}=\Gamma^\lambda_{\nu\mu}$) determines $\nabla$ uniquely — the fundamental theorem of (pseudo-)Riemannian geometry. On a vector,

$$ \nabla_\mu V^\nu = \partial_\mu V^\nu + \Gamma^{\nu}_{\mu\lambda} V^\lambda. $$

Crucially $\Gamma$ is **not** a tensor: it can be set to zero at any single point by choosing Riemann normal coordinates. This is the geometric expression of the equivalence principle — the local field is removable.

### 3. Curvature

[ESTABLISHED] The Riemann curvature tensor measures the path-dependence of parallel transport, i.e. the failure of covariant derivatives to commute:

$$ R^{\rho}{}_{\sigma\mu\nu} = \partial_\mu \Gamma^{\rho}_{\nu\sigma} - \partial_\nu \Gamma^{\rho}_{\mu\sigma} + \Gamma^{\rho}_{\mu\lambda}\Gamma^{\lambda}_{\nu\sigma} - \Gamma^{\rho}_{\nu\lambda}\Gamma^{\lambda}_{\mu\sigma}, \qquad [\nabla_\mu,\nabla_\nu]V^\rho = R^{\rho}{}_{\sigma\mu\nu}V^\sigma. $$

Symmetries: $R_{\rho\sigma\mu\nu}=-R_{\sigma\rho\mu\nu}=-R_{\rho\sigma\nu\mu}=R_{\mu\nu\rho\sigma}$; the first (algebraic) Bianchi identity $R_{\rho[\sigma\mu\nu]}=0$; and the second (differential) Bianchi identity

$$ \nabla_{[\lambda} R_{\rho\sigma]\mu\nu}=0 \;\Rightarrow\; \nabla^\mu G_{\mu\nu}=0. $$

Contractions give the Ricci tensor $R_{\mu\nu}=R^{\lambda}{}_{\mu\lambda\nu}$, the Ricci scalar $R=g^{\mu\nu}R_{\mu\nu}$, and the **Einstein tensor**

$$ G_{\mu\nu} = R_{\mu\nu} - \tfrac{1}{2} R\, g_{\mu\nu}, \qquad \nabla^\mu G_{\mu\nu}\equiv 0. $$

The trace-free part of Riemann is the **Weyl tensor** $C_{\rho\sigma\mu\nu}$ (conformally invariant), encoding the tidal and radiative degrees of freedom that survive in vacuum where $R_{\mu\nu}=0$. In 4D, the 20 independent components of Riemann decompose as Ricci (10, fixed locally by the field equations from matter) plus Weyl (10, the free/radiative gravitational field).

### 4. The Einstein field equations

[ESTABLISHED]

$$ G_{\mu\nu} + \Lambda g_{\mu\nu} = \frac{8\pi G}{c^4}\, T_{\mu\nu}, $$

where $T_{\mu\nu}$ is the symmetric stress-energy tensor of matter, $\Lambda$ the cosmological constant, $G$ Newton's constant, $c$ the speed of light. These are ten coupled, quasilinear, second-order PDEs for $g_{\mu\nu}$. The contracted Bianchi identity $\nabla^\mu G_{\mu\nu}\equiv 0$ makes only six independent; the remaining four are constraints, matching the four-fold coordinate gauge freedom. Local energy-momentum conservation $\nabla^\mu T_{\mu\nu}=0$ is then a **consequence**, not an extra postulate. In geometric units $G=c=1$: $G_{\mu\nu}+\Lambda g_{\mu\nu}=8\pi T_{\mu\nu}$.

### 5. Variational origin: the Einstein–Hilbert action

[ESTABLISHED] The field equations follow from extremizing

$$ S = \frac{c^4}{16\pi G}\int_M (R - 2\Lambda)\sqrt{-g}\, d^4x + S_{\text{matter}}, \qquad \frac{\delta S}{\delta g^{\mu\nu}}=0, $$

with the matter stress tensor defined by $T_{\mu\nu} = -\,(2/\sqrt{-g})\,\delta S_{\text{matter}}/\delta g^{\mu\nu}$. Because $R$ contains second derivatives of $g$, a well-posed variational principle on a region with boundary requires the **Gibbons–Hawking–York** boundary term $\propto \int_{\partial M} K\sqrt{h}\,d^3x$ ($K$ the extrinsic curvature, $h$ the induced metric); this term is central to black-hole thermodynamics and Euclidean quantum gravity. The Palatini (first-order) formulation treats $g$ and $\Gamma$ as independent and recovers the Levi-Civita connection as an equation of motion. See [UNIFYING_PRINCIPLES.md](../UNIFYING_PRINCIPLES.md) on the action principle as a cross-domain organizing idea.

### 6. Matter coupling and the equivalence principle

[ESTABLISHED] Matter couples by **minimal coupling** (the comma-to-semicolon rule): take the special-relativistic Lagrangian and replace $\eta_{\mu\nu}\to g_{\mu\nu}$, $\partial\to\nabla$. Test bodies follow **geodesics** of $g$,

$$ \frac{d^2 x^\mu}{d\tau^2} + \Gamma^{\mu}_{\alpha\beta}\frac{dx^\alpha}{d\tau}\frac{dx^\beta}{d\tau} = 0, $$

extremizing proper time for massive particles (timelike geodesics) and affine length for light (null geodesics). The operational, frame-invariant signature of gravity is **geodesic deviation**:

$$ \frac{D^2 \xi^\mu}{d\tau^2} = -R^{\mu}{}_{\alpha\nu\beta}\, u^\alpha \xi^\nu u^\beta, $$

the relative acceleration of neighboring free-fall worldlines, governed by Riemann. Nonzero Riemann is a genuine tidal field that cannot be transformed away — the invariant content of "gravity."

### 7. Diffeomorphism invariance / background independence

[ESTABLISHED] The action and field equations are invariant under arbitrary smooth diffeomorphisms $\varphi: M\to M$ acting by pullback (active diffeos), not merely passive coordinate relabelings. The metric is the only dynamical background; there is no fixed prior geometry. The **hole argument** (Einstein 1913–15; modern readings by Stachel and by Earman–Norton) shows that to preserve determinism one must regard diffeomorphic solutions $g$ and $\varphi^* g$ as the *same* physical state: bare manifold points have no physical individuation independent of the fields. This **background independence** is the deep structural feature distinguishing GR from field theories on a fixed background (Maxwell, Yang–Mills on Minkowski). See [ASSUMPTIONS_LEDGER.md](../ASSUMPTIONS_LEDGER.md).

### 8. The 3+1 / ADM Hamiltonian formulation

[ESTABLISHED] Foliate a globally hyperbolic spacetime by spacelike slices $\Sigma_t$ and write

$$ ds^2 = -N^2 dt^2 + h_{ij}\,(dx^i + N^i dt)(dx^j + N^j dt), $$

with lapse $N$, shift $N^i$, induced 3-metric $h_{ij}$, and extrinsic curvature $K_{ij}$. The Einstein–Hilbert action becomes a constrained Hamiltonian system with canonical pair $(h_{ij}, \pi^{ij})$, $\pi^{ij}=\sqrt{h}\,(K^{ij}-K h^{ij})$, whose total Hamiltonian is a sum of constraints:

$$ \mathcal{H} = \frac{1}{\sqrt{h}}\!\left(\pi^{ij}\pi_{ij} - \tfrac12\pi^2\right) - \sqrt{h}\,{}^{(3)}R \approx 0, \qquad \mathcal{H}_i = -2\nabla_j \pi^{j}{}_{i} \approx 0, $$

with $N, N^i$ as Lagrange multipliers. The four constraints encode diffeomorphism invariance; "evolution" is partly gauge. [ESTABLISHED] The initial-value problem is well posed: Choquet-Bruhat (1952) and Choquet-Bruhat–Geroch (1969) proved local existence/uniqueness and the existence of a unique **maximal globally hyperbolic development** of constraint-satisfying Cauchy data $(h_{ij}, K_{ij})$. GR is deterministic in the PDE sense, given a Cauchy surface. Upon canonical quantization $\mathcal{H}\approx 0$ becomes the timeless Wheeler–DeWitt equation $\hat{\mathcal{H}}\Psi=0$ — see "Where it breaks down."

### 9. Canonical exact solutions

[ESTABLISHED]

- **Minkowski**: $g=\eta$, flat — the special-relativistic vacuum.
- **Schwarzschild** (1916; unique static spherically symmetric vacuum by Birkhoff's theorem):
$$ ds^2 = -\Big(1-\tfrac{2GM}{r}\Big)dt^2 + \Big(1-\tfrac{2GM}{r}\Big)^{-1}dr^2 + r^2 d\Omega^2. $$
The event horizon at $r=2GM$ is a *coordinate* singularity (removable via Kruskal–Szekeres); the genuine curvature singularity is at $r=0$, where the Kretschmann scalar $R_{\mu\nu\rho\sigma}R^{\mu\nu\rho\sigma}=48G^2M^2/r^6\to\infty$. Basis of the classic Solar-System tests.
- **Kerr** (1963): stationary, axisymmetric, rotating vacuum black hole (mass $M$, angular momentum $J=Ma$), with an ergosphere and inner/outer horizons; **Kerr–Newman** adds charge. [ESTABLISHED, under stated regularity/analyticity hypotheses] The **no-hair / uniqueness theorems** (Israel, Carter, Hawking, Robinson) state that stationary electrovacuum black holes are Kerr–Newman, parameterized by $(M, J, Q)$.
- **FLRW cosmology**: $ds^2 = -dt^2 + a(t)^2\big[\,dr^2/(1-kr^2) + r^2 d\Omega^2\,\big]$, homogeneous and isotropic; with a perfect-fluid source it gives the Friedmann equation
$$ \left(\frac{\dot a}{a}\right)^2 = \frac{8\pi G}{3}\rho - \frac{k}{a^2} + \frac{\Lambda}{3}. $$
See [domains/cosmology.md](cosmology.md) and [CONSTANTS_AND_SCALES.md](../CONSTANTS_AND_SCALES.md).

### 10. Causal structure and singularity theorems

[ESTABLISHED] Causal structure is fixed by the conformal class of $g$ (the light cones). Conformal compactifications (Penrose diagrams) display global causal structure, horizons, and the various infinities. The **Penrose (1965)** and **Hawking–Penrose (1970)** singularity theorems prove, under (i) an energy condition (e.g. the null/strong condition $R_{\mu\nu}k^\mu k^\nu\ge 0$), (ii) a causality/global condition, and (iii) a trapping condition (a closed trapped surface, or a cosmological Cauchy surface), that the spacetime is **geodesically incomplete**. Singularities are thus *generic*, not artifacts of symmetry. Crucially the theorems prove incompleteness, **not** curvature divergence and not "what happens" at the singularity. **Cosmic censorship** (weak: singularities hidden behind horizons; strong: the maximal Cauchy development is inextendible) is Penrose's [OPEN]/[CONTESTED] conjecture, with fine-tuned counterexamples known but believed generically true.

### 11. Gravitational waves

[ESTABLISHED] Linearize $g_{\mu\nu}=\eta_{\mu\nu}+h_{\mu\nu}$; in Lorenz gauge the field equations give a wave equation for the trace-reversed perturbation,

$$ \Box\, \bar{h}_{\mu\nu} = -\frac{16\pi G}{c^4}\, T_{\mu\nu}, \qquad \bar h_{\mu\nu}=h_{\mu\nu}-\tfrac12\eta_{\mu\nu}h, $$

propagating at $c$ with two transverse-traceless polarizations ($+,\times$), quadrupolar at leading order. The energy carried is described by the gauge-dependent Isaacson effective stress tensor after averaging over wavelengths. [ESTABLISHED] Indirect confirmation: the Hulse–Taylor binary pulsar PSR B1913+16 orbital decay matches the GR quadrupole prediction. Direct detection: LIGO/Virgo observed GW150914 (a binary black-hole merger) and GW170817 (a binary neutron star with an electromagnetic counterpart, constraining the GW speed to equal $c$ to roughly one part in $10^{15}$).

### 12. Energy in GR

[ESTABLISHED, structural] Because covariant conservation $\nabla^\mu T_{\mu\nu}=0$ yields an integral conservation law only in the presence of a Killing vector, and because the equivalence principle lets the local field be transformed away at a point, there is **no covariant local energy density for the gravitational field**. One uses coordinate-dependent **pseudotensors** (Einstein, Landau–Lifshitz, Møller), or quasi-local definitions (Hawking, Brown–York, Bartnik), or the well-defined *global* energies for asymptotically flat spacetimes: the **ADM mass** (at spatial infinity) and the **Bondi mass** (at null infinity, decreasing by radiated GW energy). [ESTABLISHED] The **positive energy theorem** (Schoen–Yau 1979; Witten 1981) proves the ADM mass is $\ge 0$, with equality iff Minkowski. The absence of a local gravitational energy density is an intrinsic feature, not a defect; see [GAPS_AND_CONTRADICTIONS.md](../GAPS_AND_CONTRADICTIONS.md).

### 13. Constants and conventions

[ESTABLISHED] $G\approx 6.674\times10^{-11}\ \mathrm{m^3\,kg^{-1}\,s^{-2}}$, $c\approx 2.998\times10^8\ \mathrm{m/s}$. Conventions vary — signature $(-+++)$ vs $(+---)$, the Riemann sign, and the $8\pi G$ vs $8\pi G/c^4$ prefactor — so always fix conventions before comparing formulae (the "MTW vs Weinberg" sign tables). See [CONSTANTS_AND_SCALES.md](../CONSTANTS_AND_SCALES.md).

## Foundational assumptions

| Assumption | Status | Justification |
|---|---|---|
| Spacetime is a smooth 4D Lorentzian manifold $(M,g)$, signature $(-,+,+,+)$ | likely-fundamental | [INFERENCE] The continuum/manifold structure and Lorentzian signature underwrite every confirmed prediction and the causal cone matching observation; signature is strongly constrained empirically. But smoothness is an idealization expected to fail near the Planck scale [SPECULATIVE]/[OPEN], and the dimension "4," though empirically excellent, is not provable a priori (Kaluza–Klein/string scenarios add dimensions). The $(-+++)$ vs $(+---)$ choice is purely conventional. |
| Connection is the unique Levi-Civita one: torsion-free and metric-compatible | conventional-choice | [ESTABLISHED as a choice] Setting torsion $=0$ and $\nabla g=0$ uniquely fixes $\Gamma$ from $g$, but this is a choice among empirically equivalent reformulations. Einstein–Cartan allows spin-sourced torsion; teleparallel gravity uses a flat connection with torsion (the "geometric trinity"). These agree with GR for spinless matter and current data. Metric compatibility is more deeply tied to the equivalence principle (consistent rulers and clocks). |
| Field equations second-order; action linear in $R$ (plus $\Lambda$) | conventional-choice | [ESTABLISHED structurally] Lovelock's theorem: in 4D the only divergence-free symmetric 2-tensor built from $g$ and its first two derivatives, with second-order field equations, is $aG_{\mu\nu}+b g_{\mu\nu}$ — so the field equations $+\Lambda$ are essentially unique *given* those premises. But the premises are choices: higher-curvature terms ($R^2$, $R_{\mu\nu}R^{\mu\nu}$, Gauss–Bonnet) are generic EFT corrections expected near the Planck scale. "Linear in $R$" is the leading term of an effective expansion. |
| Matter couples minimally and universally to one metric $g$ (equivalence principle) | likely-fundamental | [ESTABLISHED to extraordinary precision] The weak EP (universality of free fall) is tested to $\sim 10^{-15}$ (MICROSCOPE, torsion balances); the Einstein EP (local Lorentz + local position invariance) underpins geometrization. Caveat: a single universal metric for *all* matter is an assumption (multi-metric/modified theories posit otherwise, tightly constrained), and whether the EP survives for superposed/entangled masses is [OPEN]. |
| Diffeomorphism invariance / background independence | fundamental | [ESTABLISHED] The deepest structural principle. The hole argument shows determinism *forces* identifying $\varphi^* g$ with $g$. It dictates the constraint structure, the absence of a preferred time, and most obstructions to quantization — arguably the one feature any successful quantum gravity must reproduce. |
| Time-orientability; physically relevant spacetimes are globally hyperbolic | conventional-choice | [INFERENCE] Time-orientability is mild and near-universal. Global hyperbolicity is *imposed* to guarantee a well-posed initial-value problem (Choquet-Bruhat–Geroch). The bare field equations permit non-globally-hyperbolic solutions (closed timelike curves in Gödel, the Kerr interior, wormholes). Whether nature enforces it is the content of strong cosmic censorship and chronology protection — both [OPEN]/[CONTESTED]. |
| Matter satisfies (pointwise) energy conditions | historical-artifact | [CONTESTED] Energy conditions are hypotheses of the singularity, area, and positivity/censorship theorems, but they are not laws of GR — they are constraints on matter. Quantum fields violate the pointwise conditions (Casimir, squeezed states, Hawking radiation); the strong condition is violated by inflation and by dark energy / positive $\Lambda$. Modern work uses averaged or quantum versions (ANEC, QNEC). The pointwise form is a now-known-too-strong idealization. |
| $\Lambda$ is a single constant of nature (not dynamical) | unclear | [OPEN]/[CONTESTED] $\Lambda$ is the unique extra term Lovelock allows, and $\Lambda$CDM fits data well, but its observed value ($\sim 10^{-52}\ \mathrm{m^{-2}}$) is $\sim 120$ orders of magnitude below naive QFT vacuum-energy estimates — the cosmological-constant problem. Whether $\Lambda$ is truly constant, vacuum-energy artifact, anthropically selected, or dynamical (quintessence) is unresolved; recent surveys hint, inconclusively, at evolving dark energy. |
| Gravity is purely classical (the metric is a c-number field) | likely-fundamental | [INFERENCE]/[OPEN] GR as formulated is a classical field theory, hugely successful in its domain. But coupling a classical metric to quantum matter via $G_{\mu\nu}=8\pi G\langle T_{\mu\nu}\rangle$ (semiclassical gravity) is at best approximate and internally problematic (measurement, mass superpositions). The near-universal expectation is that the metric must ultimately be quantum, so classicality is a feature of the *effective* theory. |

See [ASSUMPTIONS_LEDGER.md](../ASSUMPTIONS_LEDGER.md) for the cross-domain register.

## Domain of validity

[ESTABLISHED] GR is confirmed across an enormous range:

- **Solar System**: perihelion precession of Mercury, light deflection ($\approx 1.75''$ at the limb), Shapiro time delay, and gravitational redshift, all confirmed at the $10^{-3}$–$10^{-5}$ level via the parametrized post-Newtonian (PPN) formalism; e.g. $\gamma-1\approx(2.1\pm2.3)\times10^{-5}$ from Cassini.
- **Strong-field/dynamical**: the Hulse–Taylor and double pulsars (orbital decay matching GR to $<0.1\%$), pericenter precession of stars near Sgr A$^\ast$, Event Horizon Telescope black-hole shadows, and the tens of LIGO/Virgo/KAGRA mergers consistent with GR waveforms and the Kerr hypothesis.
- **Cosmology**: $\Lambda$CDM with GR fits the CMB (Planck), BBN light-element abundances, large-scale structure, BAO, and Type Ia supernovae (accelerating expansion).
- **Equivalence principle**: WEP to $\sim 10^{-15}$ (MICROSCOPE).

Quantitative window: from sub-millimeter laboratory inverse-square-law tests up to $\sim 10^{26}\ \mathrm{m}$, with curvature radii from cosmological down to near (but outside) astrophysical horizons.

[ESTABLISHED] Breakdown is *expected* — by dimensional analysis, not direct observation — at the **Planck scale**: $\ell_P=\sqrt{\hbar G/c^3}\approx1.6\times10^{-35}\ \mathrm{m}$, $t_P\approx5.4\times10^{-44}\ \mathrm{s}$, $E_P\approx1.2\times10^{19}\ \mathrm{GeV}$, where curvature reaches $\ell_P^{-2}$ and geometry fluctuations become $O(1)$. [INFERENCE] GR is a low-energy effective field theory valid for curvatures $\ll \ell_P^{-2}$; its perturbative quantization is non-renormalizable, signaling new physics at or below $E_P$. No experiment yet probes this regime. See [CONSTANTS_AND_SCALES.md](../CONSTANTS_AND_SCALES.md).

## Where it breaks down

- **Curvature singularities** ($r\to0$ in black-hole interiors; the Big Bang $t\to0$). [ESTABLISHED] The singularity theorems prove generic geodesic incompleteness, and in the symmetric cases invariants diverge. GR predicts its *own* breakdown: the equations cease to define evolution. This is a domain-of-validity limit, not a logical inconsistency. What "replaces" the singularity (bounce, resolution, information fate) is [OPEN].
- **Perturbative quantization of the metric.** [ESTABLISHED] Quantizing $h$ in $g=\eta+h$ gives a non-renormalizable theory: one-loop pure gravity is finite on-shell ('t Hooft–Veltman) but two-loop pure gravity diverges (Goroff–Sagnotti 1985), and gravity+matter diverges at one loop. Infinitely many counterterms with undetermined coefficients are needed, so the naive graviton QFT loses predictivity above $E_P$ — a true incompleteness of GR-as-a-fundamental-QFT, though consistent as an EFT below $E_P$.
- **Semiclassical gravity and black-hole evaporation.** [INFERENCE]/[OPEN] Hawking's calculation predicts thermal radiation at $T_H=\hbar c^3/(8\pi G M k_B)$. Iterated to complete evaporation it appears to map a pure state to a mixed state — the **information paradox**, a clash between GR's local causal structure and quantum unitarity. Recent island/replica-wormhole computations [SPECULATIVE-but-influential] reproduce a unitary Page curve, but a complete, agreed mechanism in realistic (non-AdS) gravity is [OPEN]/[CONTESTED]. See [domains/information-theory.md](information-theory.md).
- **The cosmological constant / vacuum energy.** [OPEN] QFT vacuum energy gravitates via $\Lambda_{\text{eff}}$; naive estimates exceed observation by $\sim 120$ orders of magnitude. GR offers no mechanism for why $\Lambda$ is so tiny yet nonzero — a quantitative crisis at the GR/QFT interface, not an inconsistency within classical GR (where $\Lambda$ is a free parameter).
- **Local gravitational energy density.** [ESTABLISHED structural] By the equivalence principle the field is locally removable, so no covariant local stress-energy tensor for gravity exists — only pseudotensors and global/quasi-local notions.
- **The problem of time.** [OPEN]/structural In the ADM Hamiltonian, $\mathcal{H}$ is a sum of constraints vanishing on shell, generating what is partly gauge; observables must be diffeomorphism-invariant (hence nonlocal and hard to construct), and on quantization $\hat{\mathcal{H}}\Psi=0$ (Wheeler–DeWitt) is timeless. A feature of background independence classically, a conceptual obstruction for quantum gravity [CONTESTED].
- **Closed timelike curves / chronology violation.** [CONTESTED] Exact solutions (Gödel, the interior Kerr, van Stockum, Tipler/Gott constructions, traversable wormholes with exotic matter) contain CTCs, undermining global determinism. Whether physics forbids them is Hawking's chronology-protection conjecture — heuristically supported but [OPEN].

These are catalogued cross-domain in [GAPS_AND_CONTRADICTIONS.md](../GAPS_AND_CONTRADICTIONS.md) and [OPEN_PROBLEMS.md](../OPEN_PROBLEMS.md).

## Open problems (internal)

- **Quantum gravity** [OPEN]: a consistent theory reducing to GR below $E_P$ and to QFT in flat space. Perturbative quantization fails; candidate frameworks (string theory, loop quantum gravity, asymptotic safety, causal sets, causal dynamical triangulations) exist but none is experimentally confirmed, and the very form of the answer (is spacetime fundamental? is the metric emergent?) is unsettled. See [HYPOTHESES.md](../HYPOTHESES.md), [UNIFICATION_LANDSCAPE.md](../UNIFICATION_LANDSCAPE.md).
- **Black-hole information paradox** [OPEN]/[CONTESTED]: whether evaporation is unitary, where/how information escapes, and whether the horizon is smooth (no firewall). The islands/quantum-extremal-surface program is influential but its scope and interpretation remain contested.
- **Nature and fate of singularities** [OPEN]: the theorems guarantee incompleteness but say nothing about resolution (bounce vs replacement vs other), currently untestable.
- **Cosmic censorship (weak and strong)** [OPEN]/[CONTESTED]: no general proof; fine-tuned counterexamples (critical collapse, certain charged/rotating interiors, $\Lambda<0$ and near-extremal results) exist, but censorship is widely believed generically true.
- **Cosmological constant / dark energy** [OPEN]: why $\Lambda\sim10^{-120}$ in Planck units, and whether dark energy is constant or dynamical; recent hints of evolving dark energy are [CONTESTED] and not decisive.
- **Energy and quasi-local quantities** [OPEN]/active: ADM and Bondi masses are well defined, but a fully satisfactory quasi-local energy and angular momentum (e.g. resolving supertranslation ambiguities in Bondi angular momentum, recently linked to the BMS group and memory/soft theorems) remains active.
- **Global existence and nonlinear stability** [OPEN]/active: stability of Minkowski is proven (Christodoulou–Klainerman 1993) and there is strong recent progress on (sub-extremal) Kerr stability, but full nonlinear Kerr stability and the structure of generic collapse are still being established.
- **The problem of time and Dirac observables** [OPEN]/[CONTESTED]: defining local, physical, diffeomorphism-invariant observables and the meaning of "evolution" absent a preferred time; relational/partial-observable proposals are promising but not decisive.

## Connections to other frameworks

- **Special relativity** [ESTABLISHED]: GR contains SR as the tangent-space / local-inertial-frame limit — at any point one can set $g_{\mu\nu}=\eta_{\mu\nu}$, $\partial g=0$ (Einstein EP). GR generalizes the *global* Lorentz symmetry of SR to *local* diffeomorphism invariance.
- **Newtonian gravity** [ESTABLISHED]: recovered in the weak-field, slow-motion, quasi-static limit, $g_{00}\approx-(1+2\Phi/c^2)$, with the geodesic equation reducing to $\ddot{\mathbf{x}}=-\nabla\Phi$ and the 00-equation to $\nabla^2\Phi=4\pi G\rho$. This fixes the $8\pi G/c^4$ coupling. See [domains/classical-mechanics.md](classical-mechanics.md).
- **QFT / the Standard Model** [INFERENCE]/clash: QFT lives on a fixed background; GR makes the background dynamical. They coexist as QFT-in-curved-spacetime and semiclassical gravity (Hawking radiation, the Unruh effect, cosmological particle production) but clash fundamentally — GR is non-renormalizable as a QFT, and reconciling background independence with superposed geometries is unsolved. See [domains/quantum-field-theory.md](quantum-field-theory.md), [domains/particle-physics.md](particle-physics.md).
- **Thermodynamics / statistical mechanics** [ESTABLISHED-theory, INFERENCE-physics]: black-hole mechanics mirrors thermodynamics — the four laws, $S_{\mathrm{BH}}=k_B c^3 A/(4G\hbar)$ (entropy $\propto$ horizon area), and $T_H\propto$ surface gravity. This bridge, with the holographic principle and AdS/CFT, suggests gravity/spacetime may be emergent/thermodynamic, though microscopic state-counting and general validity remain partly [SPECULATIVE]. See [domains/thermodynamics.md](thermodynamics.md), [domains/statistical-mechanics.md](statistical-mechanics.md), [domains/information-theory.md](information-theory.md).
- **Cosmology and astrophysics** [ESTABLISHED]: GR is the dynamical backbone of cosmology (FLRW, Friedmann, $\Lambda$CDM, structure growth, inflation as GR + scalar field) and of compact-object astrophysics (neutron stars via the TOV equation, black holes, lensing, GW astronomy). See [domains/cosmology.md](cosmology.md).
- **Differential geometry / global analysis** [ESTABLISHED]: GR is essentially Lorentzian geometry and both uses and drives mathematics — hyperbolic PDE theory and the Cauchy problem, global causal geometry (Penrose, Hawking), and geometric analysis (positive mass via minimal surfaces/spinors). See [domains/mathematics.md](mathematics.md).
- **Gauge theory** [INFERENCE]/analogy: GR can be cast in connection variables (tetrad/spin-connection, Palatini, Ashtekar), resembling a gauge theory of the local Lorentz (or de Sitter/Poincaré) group, with diffeomorphisms as the gauge symmetry — underlying loop quantum gravity, though gravity's gauge group differs qualitatively from internal Yang–Mills groups. See [UNIFYING_PRINCIPLES.md](../UNIFYING_PRINCIPLES.md).
- **Modified / alternative gravity** [CONTESTED]: $f(R)$, scalar-tensor (Brans–Dicke, Horndeski), Einstein–Cartan, teleparallel/$f(T)$, massive gravity, and MOND-inspired theories relax one GR assumption. The "geometric trinity" shows curvature-, torsion-, and nonmetricity-based formulations can be empirically equivalent to GR, highlighting which assumptions are conventions. All current data remain consistent with standard GR.

## Key references

The following are real, standard sources; see [BIBLIOGRAPHY.md](../BIBLIOGRAPHY.md) for the consolidated list and full details.

- C. W. Misner, K. S. Thorne, J. A. Wheeler, *Gravitation* (Freeman 1973; Princeton 2017) — the canonical comprehensive reference ("MTW"); geometry, EP, ADM, gravitational waves, sign conventions.
- R. M. Wald, *General Relativity* (Univ. Chicago Press 1984) — standard rigorous graduate text; causal structure, singularity theorems, energy, asymptotic flatness, QFT in curved spacetime.
- S. W. Hawking and G. F. R. Ellis, *The Large Scale Structure of Space-Time* (Cambridge 1973) — definitive on global causal structure, energy conditions, and the Hawking–Penrose theorems.
- S. M. Carroll, *Spacetime and Geometry* (Addison-Wesley 2004) — modern graduate text; variational derivation, diffeomorphisms, observational connections.
- R. Penrose, "Gravitational Collapse and Space-Time Singularities," *Phys. Rev. Lett.* **14**, 57 (1965) — original trapped-surface singularity theorem (2020 Nobel Prize).
- R. Arnowitt, S. Deser, C. W. Misner, "The Dynamics of General Relativity" (1962; arXiv:gr-qc/0405109 reprint) — the ADM 3+1 formulation and ADM energy.
- Y. Choquet-Bruhat and R. Geroch, "Global aspects of the Cauchy problem in general relativity," *Commun. Math. Phys.* **14**, 329 (1969) — maximal globally hyperbolic development; rigorous determinism.
- B. P. Abbott et al. (LIGO/Virgo), "Observation of Gravitational Waves from a Binary Black Hole Merger," *Phys. Rev. Lett.* **116**, 061102 (2016) — GW150914, first direct detection.
- R. Schoen and S.-T. Yau, *Commun. Math. Phys.* **65**, 45 (1979); E. Witten, *Commun. Math. Phys.* **80**, 381 (1981) — positive energy theorem.
- D. Christodoulou and S. Klainerman, *The Global Nonlinear Stability of the Minkowski Space* (Princeton 1993) — nonlinear stability of Minkowski.
- S. W. Hawking, "Particle Creation by Black Holes," *Commun. Math. Phys.* **43**, 199 (1975) — Hawking radiation; origin of the information paradox.
- C. M. Will, "The Confrontation between General Relativity and Experiment," *Living Reviews in Relativity* **17**, 4 (2014) — authoritative PPN/experimental-test review.

## See also

- [README.md](../README.md) — wiki entry point
- [THEORY_MAP.md](../THEORY_MAP.md) — global theory layout
- [EPISTEMICS.md](../EPISTEMICS.md) — epistemic-marker definitions
- [ASSUMPTIONS_LEDGER.md](../ASSUMPTIONS_LEDGER.md) — cross-domain assumption register
- [OPEN_PROBLEMS.md](../OPEN_PROBLEMS.md) and [GAPS_AND_CONTRADICTIONS.md](../GAPS_AND_CONTRADICTIONS.md)
- [UNIFICATION_LANDSCAPE.md](../UNIFICATION_LANDSCAPE.md) and [UNIFYING_PRINCIPLES.md](../UNIFYING_PRINCIPLES.md)
- [CONSTANTS_AND_SCALES.md](../CONSTANTS_AND_SCALES.md), [HYPOTHESES.md](../HYPOTHESES.md), [FINDINGS.md](../FINDINGS.md), [GLOSSARY.md](../GLOSSARY.md), [ROADMAP.md](../ROADMAP.md)
- Domain pages: [quantum-field-theory.md](quantum-field-theory.md), [cosmology.md](cosmology.md), [classical-mechanics.md](classical-mechanics.md), [thermodynamics.md](thermodynamics.md), [statistical-mechanics.md](statistical-mechanics.md), [information-theory.md](information-theory.md), [particle-physics.md](particle-physics.md), [mathematics.md](mathematics.md), [quantum-mechanics.md](quantum-mechanics.md)

## References

See [BIBLIOGRAPHY.md](../BIBLIOGRAPHY.md) for the consolidated, formatted reference list.
