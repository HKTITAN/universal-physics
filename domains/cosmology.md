---
title: Cosmology
type: domain
tags: [domain, cosmology]
updated: 2026-06-08
---

# Cosmology

Status: Mature concordance model (ΛCDM) with several live empirical tensions and deep open foundational problems.
Last updated: 2026-06-08

Relativistic / physical cosmology studies the dynamics, thermal history, structure, and global geometry of the observable universe, treating it as a single physical system governed by general relativity (GR) coupled to a quantum-field-theoretic matter sector. It is the discipline in which gravity, particle physics, statistical mechanics, and the foundations of time meet a single dataset of unrepeatable scope.

## Scope

This page covers the homogeneous–isotropic background (the FLRW geometry plus Friedmann dynamics), the ΛCDM concordance model and its six base parameters, the three classical observational pillars — the cosmic microwave background (CMB), primordial nucleosynthesis (BBN), and large-scale structure / baryon acoustic oscillations (BAO) — cosmological perturbation theory and structure formation, cosmic inflation (the problems it solves and the ones it raises), the constituents of the cosmic energy budget (baryons, photons, neutrinos, cold dark matter, dark energy / $\Lambda$), the cosmological-constant problem, the thermodynamic arrow of time and the low-entropy "past hypothesis," eternal inflation and the measure problem, and the current empirical tensions ($H_0$, $S_8/\sigma_8$).

It excludes the detailed machinery of quantum gravity (see [domains/general-relativity.md](general-relativity.md) and the quantum-gravity discussion in [THEORY_MAP.md](../THEORY_MAP.md)), string-landscape constructions per se, and the astrophysics of individual objects except where they serve as cosmological probes.

## Core formalism

### 1. Geometric kinematics: the FLRW metric

[ESTABLISHED] The **cosmological principle** posits that on large scales space is spatially homogeneous and isotropic. The most general metric consistent with a foliation by maximally symmetric spatial slices is the Friedmann–Lemaître–Robertson–Walker (FLRW) line element. In reduced-circumference polar coordinates with signature $(-,+,+,+)$ and $c=1$:

$$ ds^2 = -dt^2 + a^2(t)\left[\frac{dr^2}{1-kr^2} + r^2\left(d\theta^2 + \sin^2\theta\, d\phi^2\right)\right]. $$

Equivalently, with comoving radial coordinate $\chi$,

$$ ds^2 = -dt^2 + a^2(t)\left[ d\chi^2 + S_k^2(\chi)\,d\Omega^2 \right], \qquad S_k(\chi)=\begin{cases}\sin\chi & k=+1\\ \chi & k=0\\ \sinh\chi & k=-1\end{cases} $$

Here $a(t)$ is the scale factor (conventionally $a_0\equiv a(t_0)=1$ today) and $k\in\{-1,0,+1\}$ (after rescaling) labels spatial curvature — hyperbolic, flat, spherical. The isometry group is six-dimensional (three translations + three rotations of each spatial slice). The coordinate $t$ is the cosmic (proper) time of **comoving observers**, who are everywhere at rest in these coordinates and whose worldlines are geodesics orthogonal to the constant-$t$ slices.

**Redshift.** A photon emitted at scale factor $a_e$ and observed at $a_0$ is redshifted by

$$ 1+z = \frac{a_0}{a_e} = \frac{\lambda_{\rm obs}}{\lambda_{\rm emit}}, $$

the operational link between observed spectra and cosmic epoch. The Hubble parameter $H\equiv \dot a/a$ measures the fractional expansion rate; its present value is $H_0 = 100\,h\ \mathrm{km\,s^{-1}\,Mpc^{-1}}$ with $h\approx 0.67$–$0.73$ (the spread is the substance of the $H_0$ tension below).

### 2. Dynamics: the Friedmann equations

[ESTABLISHED] Feeding the FLRW metric into the Einstein field equations $G_{\mu\nu} + \Lambda g_{\mu\nu} = 8\pi G\, T_{\mu\nu}$ with a perfect-fluid stress tensor $T^\mu{}_\nu = \mathrm{diag}(-\rho,p,p,p)$ yields two independent equations. The Friedmann (00) equation,

$$ H^2 = \left(\frac{\dot a}{a}\right)^2 = \frac{8\pi G}{3}\rho - \frac{k}{a^2} + \frac{\Lambda}{3}, $$

and the acceleration / Raychaudhuri (ii) equation,

$$ \frac{\ddot a}{a} = -\frac{4\pi G}{3}(\rho + 3p) + \frac{\Lambda}{3}. $$

Local energy conservation $\nabla_\mu T^{\mu\nu}=0$ — a consequence of the contracted Bianchi identity, hence not independent — gives the continuity equation

$$ \dot\rho + 3H(\rho + p) = 0. $$

With an equation of state $p = w\rho$ this integrates to $\rho \propto a^{-3(1+w)}$: matter ($w=0$) scales as $a^{-3}$, radiation ($w=1/3$) as $a^{-4}$, vacuum/$\Lambda$ ($w=-1$) stays constant. Absorbing $\Lambda$ into $\rho$ as a fluid with $\rho_\Lambda=\Lambda/(8\pi G)$, defining the critical density $\rho_c = 3H^2/(8\pi G)$ and density parameters $\Omega_i = \rho_i/\rho_c$, the Friedmann equation becomes the expansion-history master relation:

$$ \frac{H^2(a)}{H_0^2} = \Omega_r a^{-4} + \Omega_m a^{-3} + \Omega_k a^{-2} + \Omega_\Lambda, \qquad \sum_i \Omega_i + \Omega_k = 1, $$

with $\Omega_k \equiv -k/(a_0^2 H_0^2)$. This single equation encodes which component dominates at each epoch (radiation → matter → $\Lambda$). Accelerated expansion ($\ddot a>0$) requires $w<-1/3$ for the dominant component — a key structural fact: ordinary matter and radiation decelerate, so observed acceleration demands a negative-pressure component. See [CONSTANTS_AND_SCALES.md](../CONSTANTS_AND_SCALES.md) for the numerical density budget.

### 3. Distances and horizons

[ESTABLISHED] The comoving distance to redshift $z$ is $D_C(z)=\int_0^z dz'/H(z')$; the comoving transverse (angular-diameter) distance is $D_M = S_k(D_C)$. The angular-diameter distance is $D_A = D_M/(1+z)$ and the luminosity distance is $D_L = (1+z)^2 D_A$. The relation $D_L = (1+z)^2 D_A$ (Etherington reciprocity) holds in any metric theory with photon-number conservation and is itself an observational test. The **particle horizon** (causal-patch radius) is $d_H(t)=a(t)\int_0^t dt'/a(t')$; in pure radiation- or matter-dominated eras it is finite — the seed of the **horizon problem**. The comoving Hubble radius $1/(aH)$ shrinks during acceleration and grows during deceleration; this single quantity organizes both the horizon problem and inflation's resolution of it.

### 4. Thermal history and the hot Big Bang

[ESTABLISHED] In thermal equilibrium the radiation energy density is $\rho_r = (\pi^2/30)\,g_*(T)\,T^4$ with $g_*(T)$ the effective relativistic degrees of freedom. Reaction rates $\Gamma=n\langle\sigma v\rangle$ compete with $H$; a species **freezes out** (decouples) when $\Gamma \lesssim H$. Key epochs, in order of decreasing temperature: the electroweak transition ($\sim 100$ GeV), QCD confinement ($\sim 150$ MeV), neutrino decoupling ($\sim 1$ MeV), $e^+e^-$ annihilation, Big Bang Nucleosynthesis ($\sim 0.1$ MeV, $t\sim$ minutes), matter–radiation equality ($1+z_{\rm eq}\approx 3400$), recombination and photon decoupling ($z_*\approx 1090$, $t\approx 3.8\times10^5$ yr) producing the CMB last-scattering surface, and reionization ($z\sim 6$–$10$).

**BBN** [ESTABLISHED]: With a single free parameter (the baryon-to-photon ratio $\eta = n_b/n_\gamma$, equivalently $\Omega_b h^2$), the coupled Boltzmann nuclear-reaction network predicts the primordial abundances of D, $^3$He, $^4$He ($Y_p\approx 0.247$), and $^7$Li. Deuterium and helium agree with observation across orders of magnitude. The **lithium problem** [OPEN/CONTESTED] is a persistent factor-$\sim 3$ overprediction of $^7$Li relative to metal-poor halo-star measurements.

**CMB** [ESTABLISHED]: A near-perfect blackbody at $T_0=2.7255$ K with relative temperature anisotropies $\Delta T/T\sim 10^{-5}$. The statistics live in the angular power spectrum $C_\ell$, defined by $\langle a_{\ell m} a^*_{\ell' m'}\rangle = C_\ell\,\delta_{\ell\ell'}\delta_{mm'}$ where $\Delta T(\hat n)=\sum_{\ell m} a_{\ell m} Y_{\ell m}(\hat n)$. Acoustic peaks arise from baryon–photon plasma oscillations frozen at recombination; the first peak at $\ell\approx 220$ pins spatial flatness; peak ratios measure $\Omega_b h^2$ and $\Omega_c h^2$; polarization (E-modes from scalar perturbations, B-modes from tensors and lensing) provides consistency checks and the cleanest window onto primordial gravitational waves.

### 5. Cosmological perturbation theory and structure formation

[ESTABLISHED] Write $g_{\mu\nu}=\bar g_{\mu\nu}+\delta g_{\mu\nu}$ and decompose into scalar/vector/tensor (SVT) modes, which decouple at linear order. In conformal Newtonian (longitudinal) gauge for scalar modes,

$$ ds^2 = a^2(\tau)\left[-(1+2\Psi)\,d\tau^2 + (1-2\Phi)\,\delta_{ij}\,dx^i dx^j\right]. $$

The density contrast $\delta=\delta\rho/\bar\rho$ obeys, in the sub-horizon Newtonian limit for cold matter,

$$ \ddot\delta + 2H\dot\delta - 4\pi G \bar\rho_m\,\delta = 0, $$

a competition between Hubble friction and gravitational instability that yields a growing mode $\delta\propto D(a)$ (the linear growth function). The linear matter power spectrum $P(k)=\langle|\delta_k|^2\rangle$ has the primordial form $P\propto k^{n_s}$ shaped by the transfer function $T(k)$, which encodes the turnover at the equality scale and the BAO wiggles. Its amplitude is parameterized by $\sigma_8$ (rms linear fluctuation in $8\,h^{-1}$Mpc spheres) and increasingly by $S_8\equiv\sigma_8(\Omega_m/0.3)^{1/2}$, the combination weak-lensing surveys constrain best. BAO imprints a **standard ruler** — the sound horizon at the drag epoch, $r_d\approx 147$ Mpc — used as a geometric distance probe. Full predictions come from numerically integrating the Einstein–Boltzmann hierarchy (CAMB, CLASS) for the coupled photon/baryon/CDM/neutrino/metric system.

### 6. ΛCDM: the concordance model

[ESTABLISHED] The base model is specified by six parameters,

$$ \{\Omega_b h^2,\ \Omega_c h^2,\ \theta_*\ (\text{or }H_0),\ \tau,\ A_s,\ n_s\}, $$

assuming flatness, a cosmological constant ($w=-1$), three neutrino species, and adiabatic, nearly scale-invariant, Gaussian primordial fluctuations. Derived quantities include $\Omega_m\approx0.31$, $\Omega_\Lambda\approx0.69$, $\Omega_b\approx0.049$, an age $\approx 13.8$ Gyr, and $n_s\approx0.965$ (a slight red tilt, mildly favoring inflation). This handful of numbers simultaneously fits the CMB acoustic spectrum, the BBN light elements, BAO, the late-time supernova acceleration, and the growth of structure — the empirical core of modern cosmology and the strongest single entry in [FINDINGS.md](../FINDINGS.md).

### 7. Inflation

[ESTABLISHED that the model class exists and fits data; INFERENCE/SPECULATIVE that it actually occurred] Postulate an early epoch of quasi-exponential accelerated expansion driven by a scalar inflaton $\phi$ with action

$$ S=\int d^4x\,\sqrt{-g}\,\Big[\tfrac{1}{16\pi G}R - \tfrac12(\partial\phi)^2 - V(\phi)\Big]. $$

The homogeneous field obeys $\ddot\phi + 3H\dot\phi + V'(\phi)=0$ with $H^2=\frac{8\pi G}{3}(\tfrac12\dot\phi^2+V)$. In slow-roll ($\dot\phi^2\ll V$, $\ddot\phi$ negligible) define the potential slow-roll parameters

$$ \epsilon = \frac{1}{16\pi G}\left(\frac{V'}{V}\right)^2,\qquad \eta = \frac{1}{8\pi G}\frac{V''}{V}, $$

with inflation requiring $\epsilon\ll1$ and lasting $N=\int H\,dt \gtrsim 50$–$60$ e-folds. Quantum fluctuations of $\phi$ and the metric are stretched super-horizon and freeze, seeding a near-scale-invariant curvature power spectrum

$$ \mathcal P_\mathcal R(k)= \frac{1}{8\pi^2}\frac{H^2}{\epsilon\,M_{\rm Pl}^2}\bigg|_{k=aH}, \qquad n_s-1=2\eta-6\epsilon, \qquad r=16\epsilon, $$

where $r$ is the tensor-to-scalar ratio. Confirmed predictions: spatial flatness, near scale-invariance with a slight red tilt, adiabaticity, Gaussianity, and super-horizon correlations (the low-$\ell$ CMB TE anticorrelation). A primordial B-mode detection ($r\neq 0$) would be the cleanest remaining signature and is not yet in hand.

## Foundational assumptions

| Assumption | Status | Justification |
|---|---|---|
| Cosmological principle (large-scale homogeneity + isotropy) | likely-fundamental | [ESTABLISHED on $\gtrsim 100$ Mpc] Isotropy is directly observed (CMB isotropic to $\sim 10^{-5}$ after dipole subtraction); homogeneity is inferred via the Copernican principle plus isotropy and confirmed statistically by galaxy surveys. An idealization holding statistically above a scale, not an exact axiom; whether it is truly fundamental or an emergent product of inflation is [OPEN]; large-scale anomalies/bulk-flow claims remain [CONTESTED]. |
| GR is the correct gravity theory on cosmological scales | likely-fundamental | [ESTABLISHED in tested regimes; INFERENCE on horizon scales] GR is exquisitely tested in the solar system, binary pulsars, and GW mergers — but those probe scales $\sim 10^{30}\times$ smaller than the Hubble radius. Cosmological application is an extrapolation; modified-gravity alternatives ($f(R)$, Horndeski) are constrained but not all excluded. See [domains/general-relativity.md](general-relativity.md). |
| Perfect-fluid matter, $T^\mu{}_\nu=\mathrm{diag}(-\rho,p,p,p)$, simple EoS | conventional-choice | [INFERENCE] At the background level the fluid form is *forced* by FLRW symmetry (isotropy forbids heat flux and anisotropic stress). But pressureless "dust" dark matter and exactly $w=-1$ dark energy are replaceable modeling choices, not forced truths. |
| Spatial flatness ($\Omega_k=0$) | conventional-choice | [INFERENCE] A generic inflationary prediction, consistent with CMB+BAO ($|\Omega_k|\lesssim 0.005$), usually fixed by fiat in the 6-parameter base model. Not a logical necessity — curvature is a free parameter constrained to be small. Fixing it can mask tensions (e.g. Planck TT alone mildly prefers a closed geometry [CONTESTED], resolved by adding BAO). |
| Cold, collisionless, non-baryonic dark matter dominates the matter sector | likely-fundamental | [ESTABLISHED that something beyond baryons+GR is needed; OPEN what it is] Multi-pillar concordance: rotation curves, cluster lensing (Bullet Cluster mass–gas offset), the CMB third-peak height, the $\Omega_b\ll\Omega_m$ budget, and the very growth of structure. "Cold" is favored because hot/warm DM erases small-scale power. The particle identity is [OPEN]. |
| Dark energy is a cosmological constant ($w=-1$, constant) | conventional-choice | [ESTABLISHED that acceleration occurs; OPEN/CONTESTED that it is exactly $\Lambda$] Acceleration is established (SNe Ia, CMB+BAO, ISW). $\Lambda$ is the minimal description; $w=-1$ exactly is a choice. Some recent BAO analyses have been read as hinting at dynamical $w(z)$ [CONTESTED, not established]. |
| Primordial fluctuations adiabatic, Gaussian, nearly scale-invariant | likely-fundamental | [ESTABLISHED as data description; INFERENCE for inflationary origin] The statistics ($n_s\approx0.965$, super-horizon correlations) are measured and robust; that *inflation* produced them is compelling but not proven (some bounces/ekpyrotic models reproduce the spectrum). |
| Inflation occurred | likely-fundamental | [INFERENCE bordering SPECULATIVE] Solves horizon, flatness, monopole problems and predicts the fluctuation spectrum, but (i) no primordial GW detection, (ii) inflaton unidentified with any SM field, (iii) eternal-inflation measure problem, (iv) Penrose's low-entropy-initial-condition critique. Leading paradigm, not established fact. See [HYPOTHESES.md](../HYPOTHESES.md). |
| The universe began in an extraordinarily low-entropy macrostate (past hypothesis) | fundamental | [INFERENCE/OPEN] The thermodynamic arrow demands a special low-*gravitational*-entropy boundary condition (near-zero initial Weyl curvature, Penrose), since microphysics is CPT-symmetric. *Why* the initial state was special is genuinely [OPEN]; it functions as a law-like posit, not a derivation. |
| Equilibrium-thermodynamic / single-arrow reasoning applies to the cosmos as a whole | conventional-choice | [INFERENCE/CONTESTED] Self-gravitating systems have negative specific heat and no global max-entropy equilibrium, so a global cosmic temperature/entropy is a useful idealization that breaks down conceptually for gravity. See [domains/statistical-mechanics.md](statistical-mechanics.md). |
| Exactly three light neutrino species ($N_{\rm eff}\approx 3.044$), standard radiation | conventional-choice | [ESTABLISHED to good precision] Measured from BBN and the CMB damping tail; the slight excess over 3 is a real QFT prediction (non-instantaneous decoupling). Held fixed as a well-motivated choice, easily promoted to a free parameter (dark radiation as an $H_0$-tension lever). |
| Cosmic time $t$ is a globally well-defined, preferred time coordinate | historical-artifact | [INFERENCE] FLRW symmetry singles out a preferred slicing and a cosmic rest frame (the CMB frame). Not a contradiction with relativity — it is spontaneous breaking of Lorentz invariance by the matter distribution — but treating cosmic time as fundamental is partly an artifact of the high symmetry of the idealized model; no global time exists in a genuinely inhomogeneous universe. |

See [ASSUMPTIONS_LEDGER.md](../ASSUMPTIONS_LEDGER.md) for the cross-domain ledger and [EPISTEMICS.md](../EPISTEMICS.md) for the marker definitions.

## Domain of validity

[ESTABLISHED] The FLRW + Friedmann background is valid where the cosmological principle holds: averaged over scales $\gtrsim 100$ Mpc, from shortly after the inflationary/Planck era down to today. The hot-Big-Bang thermal history is quantitatively trustworthy from BBN ($T\sim 1$ MeV, $t\sim 1$ s) — the earliest epoch with direct empirical corroboration — through recombination ($z\approx 1090$, the CMB) to the present. Linear perturbation theory is valid while $|\delta|\ll 1$, i.e. on large scales and at early times; smaller scales and later times require higher-order perturbation theory, the halo model, or $N$-body/hydrodynamic simulations (the mildly-to-fully nonlinear regime, $k\gtrsim 0.1$–$1\ h\,{\rm Mpc}^{-1}$). Slow-roll inflationary predictions hold while $\epsilon, |\eta|\ll 1$.

Boundaries: (i) Below $\sim 100$ Mpc the universe is manifestly inhomogeneous; FLRW is a statistical average, and the "backreaction" of inhomogeneities on the averaged expansion is [CONTESTED] but generally believed small. (ii) Before BBN ($t<1$ s, $T>1$ MeV) the thermal history is theoretically modeled (electroweak, QCD epochs) but lacks direct cosmological data; reheating after inflation is well before any direct probe. (iii) At the classical Big Bang singularity ($a\to 0$) curvature diverges and GR predicts its own breakdown — outside the domain entirely. (iv) The framework presumes GR on scales/curvatures never independently tested. Dark matter and dark energy mark the edge of "known physics": ΛCDM works phenomenologically while $\sim 95\%$ of the energy budget is described by placeholders whose microphysics lies outside the tested Standard Model (see [domains/particle-physics.md](particle-physics.md)).

## Where it breaks down

- **The initial singularity ($a\to 0$).** [ESTABLISHED breakdown] The Hawking–Penrose singularity theorems show that, under reasonable energy conditions, FLRW expansion implies a past geodesically incomplete singularity where curvature invariants diverge and GR ceases to be predictive. This is a *domain-of-validity failure*, not an internal inconsistency: it signals the need for quantum gravity. The Borde–Guth–Vilenkin theorem shows that even eternally inflating spacetimes are past-incomplete, so inflation relocates but does not remove the boundary.
- **The cosmological-constant problem.** [OPEN, severe] Naive QFT vacuum-energy estimates, cut off at the Planck (or even electroweak) scale, exceed the observed $\rho_\Lambda$ by $\sim 10^{60}$–$10^{120}$:
$$ \rho_\Lambda^{\rm obs} \sim 10^{-47}\,\mathrm{GeV}^4 \ \ll\ \rho_\Lambda^{\rm QFT} \sim M_{\rm cut}^4. $$
A quantitative clash between GR and QFT — a fine-tuning / domain-mismatch, not a strict logical contradiction. No accepted mechanism cancels the bulk while leaving the tiny observed remainder. Catalogued in [GAPS_AND_CONTRADICTIONS.md](../GAPS_AND_CONTRADICTIONS.md).
- **Dark matter and dark energy as unidentified components ($\sim 95\%$ of the budget).** [OPEN] No laboratory detection of either: decades of null WIMP direct/indirect/collider searches, and an unexplained dark-energy scale. This is *incompleteness*, not inconsistency; conceivably part of the effect signals a GR breakdown rather than new substance (disfavored by the multi-pillar concordance).
- **The Hubble ($H_0$) tension.** [CONTESTED, possibly a breakdown] The early-universe value from CMB+ΛCDM ($H_0\approx 67$–$68$) disagrees at the $\sim 4$–$6\sigma$ level with the late-universe distance-ladder value (Cepheid-calibrated SNe Ia, $H_0\approx 73$). If not a systematic, it is the most likely current crack in ΛCDM, possibly requiring new early-universe physics (early dark energy, extra $N_{\rm eff}$) that reduces $r_d$. Unresolved as of this writing.
- **The $S_8/\sigma_8$ tension.** [CONTESTED, milder] Some weak-lensing and cluster-count surveys infer a lower $S_8\equiv\sigma_8\sqrt{\Omega_m/0.3}$ (a less-clustered late universe) than Planck-ΛCDM extrapolation predicts, at $\sim 2$–$3\sigma$. More sensitive to baryonic-feedback systematics than $H_0$, but a watched anomaly; could signal suppressed growth (warm/interacting DM, neutrino mass) or under-modeled astrophysics.
- **The measure problem in eternal inflation.** [OPEN, foundational] If inflation is generically eternal, computing observation probabilities requires regulating ratios of infinities; different measures (proper-time, scale-factor, causal-patch) give different and sometimes pathological predictions (Boltzmann brains, the youngness paradox). This undermines the predictivity that motivated inflation — a conceptual incompleteness in the multiverse extension, not a flaw in the minimal fit to data.
- **The low-entropy past / arrow-of-time problem.** [OPEN] Time-symmetric microphysics plus a thermodynamic arrow forces a special low-entropy boundary condition; the early universe's extreme gravitational smoothness is wildly improbable on any uniform measure (Penrose). ΛCDM/inflation does not explain *why*. An explanatory gap consistent with, but not derivable within, the framework. See [domains/thermodynamics.md](thermodynamics.md).
- **The lithium problem.** [OPEN/CONTESTED, narrow] BBN with the CMB baryon density overpredicts $^7$Li by $\sim 3\times$. A localized failure (stellar depletion, nuclear rates, or speculatively new physics) that does not threaten BBN broadly.
- **CMB large-scale "anomalies."** [CONTESTED/SPECULATIVE] Low quadrupole, hemispherical asymmetry, the "cold spot" — mild ($\sim 2$–$3\sigma$) and possibly a-posteriori flukes (look-elsewhere effect). Watched, not established. Relatedly, the trans-Planckian problem (inflation stretches sub-Planckian wavelengths to cosmic scales) makes predictions formally depend on unknown UHE physics, though robustly only at unobservably small corrections.

## Open problems (internal)

- **The cosmological-constant problem and the coincidence problem.** [OPEN] Why is $\rho_\Lambda$ nonzero but $\sim 120$ orders below QFT estimates, and why is it comparable to $\rho_m$ *today*? The deepest quantitative puzzle in fundamental physics. Weinberg's anthropic bound predicted a small nonzero $\Lambda$ before its detection, but relies on the contested multiverse+measure.
- **The microphysical identity of dark matter.** [OPEN] Gravitational evidence is overwhelming and concordant; null particle searches (direct detection approaching the neutrino floor, indirect, collider, ongoing axion) leave WIMP/axion/sterile-neutrino/primordial-black-hole/hidden-sector options open.
- **Is dark energy a true constant or dynamical?** [OPEN/CONTESTED] $w=-1$ fits most data; some recent BAO reads hint at evolving $w$, sensitive to data combinations and priors. Decisive only with next-generation surveys.
- **What set the low-entropy initial state and the arrow of time?** [OPEN] No dynamical derivation; the past hypothesis is a posited boundary condition; inflation does not resolve it. Connects to quantum gravity and the nature of the Big Bang.
- **Did inflation occur, and what is the inflaton? Will primordial B-modes ($r\neq 0$) be detected?** [OPEN] A B-mode detection at the predicted level would be near-decisive; current bounds ($r\lesssim 0.03$–$0.06$) already exclude the simplest large-field models. Alternatives (bounce, ekpyrosis, string gas) remain logically possible.
- **Is the multiverse / eternal inflation real, and can the measure problem be solved?** [OPEN/SPECULATIVE] Borders the limits of empirical science; without a principled measure there are no well-defined probabilities. Whether it is even a scientific question is itself contested.
- **The Hubble tension: new physics or systematics?** [CONTESTED/OPEN] The leading candidate symptom of ΛCDM breakdown. Early-time fixes can worsen $S_8$ or need fine-tuning; late-time-only fixes are constrained by BAO. See [OPEN_PROBLEMS.md](../OPEN_PROBLEMS.md).
- **Averaging / backreaction (the "fitting problem").** [CONTESTED] Most experts judge backreaction too small to mimic dark energy, but a rigorous derivation of the averaged dynamics (Buchert equations) is incomplete and its magnitude is debated.
- **Reconciling the cosmic preferred frame and global cosmic time with frame-independence, and the nature of time at/before the Big Bang.** [OPEN, partly philosophical] Not a contradiction (symmetry breaking by matter), but the status of cosmic time in a future singularity-free quantum-gravitational description ties into the "problem of time."

## Connections to other frameworks

- **[General relativity](general-relativity.md)** — Parent framework. Cosmology *is* GR applied to the whole universe; the Friedmann equations are Einstein's equations under maximal spatial symmetry. The classical singularity and the cosmological constant inherit their status from GR, and any cosmological test of gravity is a test of GR on the largest scales.
- **[Quantum field theory](quantum-field-theory.md) / [particle physics](particle-physics.md)** — Supplies the matter sector (thermal history, the BBN nuclear network, neutrino decoupling, baryogenesis) and clashes sharply via the cosmological-constant problem (QFT vacuum energy vs observed $\Lambda$). The inflaton and dark matter are sought as SM extensions; $N_{\rm eff}$, neutrino masses, and the baryon asymmetry are shared observables.
- **Quantum gravity** — Needed where cosmology breaks down: the initial singularity, the Planck-era pre-inflationary state, and possibly $\Lambda$ itself (the string "landscape" as the multiverse substrate for an anthropic $\Lambda$). The quantum-gravity "problem of time" bears on cosmic time. No empirically confirmed input yet. See [UNIFICATION_LANDSCAPE.md](../UNIFICATION_LANDSCAPE.md).
- **[Statistical mechanics](statistical-mechanics.md) & [thermodynamics](thermodynamics.md)** — Source of the arrow-of-time problem: the second law's cosmological grounding is the low-entropy past hypothesis. Self-gravitating thermodynamics (negative specific heat) and horizon entropy via Bekenstein–Hawking $S = A/4G$ link gravitational entropy to areas and to holography.
- **[Information theory](information-theory.md) / holography** — [SPECULATIVE] Covariant entropy bounds, de Sitter entropy, and the cosmological horizon as a holographic screen aim to constrain cosmology's degrees of freedom and possibly reframe $\Lambda$ and the measure problem. An active but unestablished interface; see [UNIFYING_PRINCIPLES.md](../UNIFYING_PRINCIPLES.md).
- **Astrophysics & observational astronomy** — Provides the data: SNe Ia (acceleration), the Cepheid distance ladder ($H_0$), galaxy redshift surveys and BAO (geometry + growth), weak lensing ($S_8$), 21-cm and Lyman-$\alpha$ forest (high-$z$ matter power), cluster counts. Cosmology in turn sets the boundary conditions for galaxy and star formation. Probe systematics are central to the current tensions.
- **Philosophy of science / foundations** — Cosmology stresses the limits of empirical method: the multiverse and measure problem raise testability questions; the Copernican principle and the past hypothesis are partly metaphysical posits; the anthropic principle is invoked (controversially) for $\Lambda$; the single-universe sample size challenges standard inference (cosmic variance). See [EPISTEMICS.md](../EPISTEMICS.md).

For the cross-domain unification picture, see [THEORY_MAP.md](../THEORY_MAP.md) and [UNIFICATION_LANDSCAPE.md](../UNIFICATION_LANDSCAPE.md).

## Key references

- S. Weinberg, *Cosmology* (Oxford University Press, 2008) — authoritative graduate text; rigorous FLRW dynamics, CMB and perturbation theory, and the anthropic bound on $\Lambda$.
- S. Dodelson & F. Schmidt, *Modern Cosmology*, 2nd ed. (Academic Press, 2020) — standard reference for the Einstein–Boltzmann hierarchy and the CMB/matter power spectra behind CAMB/CLASS.
- D. Baumann, *Cosmology* (Cambridge University Press, 2022) — modern pedagogical synthesis of background, inflation, and perturbations.
- V. Mukhanov, *Physical Foundations of Cosmology* (Cambridge University Press, 2005) — rigorous perturbation theory and the inflationary generation of fluctuations.
- E. W. Kolb & M. S. Turner, *The Early Universe* (Addison-Wesley, 1990) — classic on thermal history, freeze-out, BBN, and relics.
- G. F. R. Ellis, R. Maartens & M. A. H. MacCallum, *Relativistic Cosmology* (Cambridge University Press, 2012) — careful treatment of the cosmological principle and the averaging/backreaction "fitting problem."
- S. W. Hawking & G. F. R. Ellis, *The Large Scale Structure of Space-Time* (Cambridge University Press, 1973) — singularity theorems and the geometric foundation for FLRW breakdown.
- S. Weinberg, "The Cosmological Constant Problem," *Rev. Mod. Phys.* **61**, 1 (1989) — the canonical framing of the problem.
- A. H. Guth, "Inflationary universe: A possible solution to the horizon and flatness problems," *Phys. Rev. D* **23**, 347 (1981) — foundational inflation paper.
- A. Borde, A. Guth & A. Vilenkin, "Inflationary spacetimes are not past-complete," *Phys. Rev. Lett.* **90**, 151301 (2003) — the BGV theorem.
- R. Penrose, "Singularities and Time-Asymmetry," in *General Relativity: An Einstein Centenary Survey*, eds. Hawking & Israel (CUP, 1979); and *The Road to Reality* (Jonathan Cape, 2004) — the Weyl curvature hypothesis and the low-entropy past.
- Planck Collaboration, "Planck 2018 results. VI. Cosmological parameters," *Astron. Astrophys.* **641**, A6 (2020) — the definitive CMB determination of the six ΛCDM parameters; baseline for the $H_0$ and curvature discussions. (Numerical values above are stated approximately by design.)

## See also

- [domains/general-relativity.md](general-relativity.md) — the parent gravitational framework
- [domains/quantum-field-theory.md](quantum-field-theory.md) — the matter sector and the vacuum-energy clash
- [domains/particle-physics.md](particle-physics.md) — dark matter candidates, $N_{\rm eff}$, baryogenesis
- [domains/thermodynamics.md](thermodynamics.md) — the arrow of time and the past hypothesis
- [domains/statistical-mechanics.md](statistical-mechanics.md) — self-gravitating thermodynamics and entropy
- [domains/information-theory.md](information-theory.md) — holographic entropy bounds and horizons
- [OPEN_PROBLEMS.md](../OPEN_PROBLEMS.md) · [GAPS_AND_CONTRADICTIONS.md](../GAPS_AND_CONTRADICTIONS.md) · [HYPOTHESES.md](../HYPOTHESES.md)
- [ASSUMPTIONS_LEDGER.md](../ASSUMPTIONS_LEDGER.md) · [CONSTANTS_AND_SCALES.md](../CONSTANTS_AND_SCALES.md) · [THEORY_MAP.md](../THEORY_MAP.md)
- [UNIFICATION_LANDSCAPE.md](../UNIFICATION_LANDSCAPE.md) · [UNIFYING_PRINCIPLES.md](../UNIFYING_PRINCIPLES.md) · [FINDINGS.md](../FINDINGS.md)

## References

Full bibliographic entries are collected in [BIBLIOGRAPHY.md](../BIBLIOGRAPHY.md); the Key references section above lists the works directly load-bearing for this page.
