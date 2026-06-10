# Particle Physics and the Standard Model

Status: Stable core; living BSM frontier
Last updated: 2026-06-08

The Standard Model (SM) is the relativistic quantum field theory of the electromagnetic, weak, and strong interactions: a renormalizable, anomaly-free **chiral gauge theory** with gauge group $G_{SM} = SU(3)_c \times SU(2)_L \times U(1)_Y$, spontaneously broken to $SU(3)_c \times U(1)_{em}$ by the Higgs mechanism. It is the most precisely tested theory in the physical sciences and simultaneously, by broad consensus, an *effective* description awaiting a deeper completion.

## Scope

This page covers the gauge structure and fermion representations; the three-generation pattern; electroweak symmetry breaking (EWSB) and the Higgs boson; QCD with asymptotic freedom and confinement; flavor physics (CKM, PMNS) and CP violation; neutrino masses, oscillations, and the Dirac-vs-Majorana question; the free-parameter count; the hierarchy/naturalness and strong-CP problems; baryogenesis; beyond-SM (BSM) frameworks (SUSY, GUTs, extra dimensions, SMEFT); and the current anomaly landscape.

It **excludes** the detailed dynamics of quantum gravity (a neighboring domain — see [domains/general-relativity.md](general-relativity.md)), nuclear structure, and condensed-matter applications of QFT, except where the latter illuminate SM concepts. For the underlying field-theoretic machinery (path integrals, renormalization, the renormalization group), see [domains/quantum-field-theory.md](quantum-field-theory.md); for foundational quantum structure, [domains/quantum-mechanics.md](quantum-mechanics.md).

## Core formalism

### 1. Gauge structure and field content

The SM is a Yang–Mills theory with local symmetry $G_{SM}$ and three gauge couplings $g_s, g, g'$. With non-abelian field strengths
$$G^a_{\mu\nu} = \partial_\mu G^a_\nu - \partial_\nu G^a_\mu + g_s f^{abc} G^b_\mu G^c_\nu \quad (a=1,\dots,8),$$
$$W^i_{\mu\nu} = \partial_\mu W^i_\nu - \partial_\nu W^i_\mu + g\,\epsilon^{ijk} W^j_\mu W^k_\nu \quad (i=1,2,3), \qquad B_{\mu\nu} = \partial_\mu B_\nu - \partial_\nu B_\mu,$$
the gauge Lagrangian is $\mathcal{L}_{\text{gauge}} = -\tfrac14 G^a_{\mu\nu}G^{a\,\mu\nu} - \tfrac14 W^i_{\mu\nu}W^{i\,\mu\nu} - \tfrac14 B_{\mu\nu}B^{\mu\nu}$ [ESTABLISHED].

The fermions come in three generations of identical quantum numbers. Per generation, the irreducible chiral content with charges $(SU(3)_c, SU(2)_L)_Y$ is [ESTABLISHED]:

- $Q_L = (u_L, d_L)^T \sim (3,2)_{1/6}$
- $u_R \sim (3,1)_{2/3}$, $\quad d_R \sim (3,1)_{-1/3}$
- $L_L = (\nu_L, e_L)^T \sim (1,2)_{-1/2}$
- $e_R \sim (1,1)_{-1}$
- (no right-handed neutrino $\nu_R$ in the *minimal* SM).

Electric charge is $Q = T_3 + Y$ in this hypercharge convention; many texts instead write $Q = T_3 + Y/2$ with rescaled hypercharges (a [conventional-choice] bookkeeping difference, not physics). The decisive structural fact is **chirality**: left-handed fields are $SU(2)_L$ doublets while right-handed fields are singlets, so the weak interaction maximally violates parity (the V$-$A structure) [ESTABLISHED]. Gauge interactions enter only through the covariant derivative
$$D_\mu = \partial_\mu - i g_s\, G^a_\mu T^a - i g\, W^i_\mu T^i - i g' Y B_\mu,$$
with $T^a=\lambda^a/2$ (Gell-Mann) and $T^i=\sigma^i/2$ (Pauli) on the appropriate representations; the fermion kinetic term is $\mathcal{L}_{\text{ferm}} = \sum_\psi \bar\psi\, i\gamma^\mu D_\mu\, \psi$. Once the group and representations are fixed, the interactions are essentially determined by gauge invariance — a key economy of the construction [ESTABLISHED].

**Anomaly cancellation.** Classical gauge symmetry must survive quantization: the triangle (Adler–Bell–Jackiw) anomalies must vanish. The conditions $[SU(3)]^2U(1)$, $[SU(2)]^2U(1)$, $[U(1)]^3$, and the mixed gravitational–$U(1)$ anomaly $\sum Y = 0$ are each satisfied *exactly, per generation*, by the hypercharges above [ESTABLISHED]. This ties quark and lepton charges together and effectively requires complete generations — a remarkably rigid consistency constraint.

### 2. Electroweak symmetry breaking (Higgs mechanism)

A complex scalar doublet $\phi \sim (1,2)_{1/2}$ has
$$\mathcal{L}_\phi = (D_\mu\phi)^\dagger(D^\mu\phi) - V(\phi), \qquad V(\phi) = -\mu^2\,\phi^\dagger\phi + \lambda\,(\phi^\dagger\phi)^2,$$
with $\mu^2>0,\ \lambda>0$. The wrong-sign mass term drives a vacuum expectation value $\langle\phi\rangle = \tfrac{1}{\sqrt2}(0,\,v)^T$, with $v = \mu/\sqrt\lambda \approx 246\ \text{GeV}$, breaking $SU(2)_L\times U(1)_Y \to U(1)_{em}$ [ESTABLISHED]. In unitary gauge $\phi = \tfrac{1}{\sqrt2}(0,\,v+h)^T$.

Three would-be Goldstone bosons are eaten by the gauge fields. The mass eigenstates are
$$W^\pm_\mu = \tfrac{1}{\sqrt2}(W^1_\mu \mp i W^2_\mu),\qquad \begin{pmatrix}Z_\mu\\A_\mu\end{pmatrix} = \begin{pmatrix}\cos\theta_W & -\sin\theta_W\\ \sin\theta_W & \cos\theta_W\end{pmatrix}\begin{pmatrix}W^3_\mu\\B_\mu\end{pmatrix},$$
with $\tan\theta_W = g'/g$, giving
$$m_W = \tfrac12 g v, \qquad m_Z = \tfrac12 v\sqrt{g^2+g'^2} = \frac{m_W}{\cos\theta_W}, \qquad m_\gamma = 0.$$
At tree level $\rho \equiv m_W^2/(m_Z^2\cos^2\theta_W) = 1$, a consequence of the **custodial $SU(2)$** symmetry of the doublet potential; the measured $\rho$ agrees with unity at the per-mille level after radiative corrections — a genuine precision triumph [ESTABLISHED]. The physical scalar has $m_h = \sqrt{2\lambda}\,v = \sqrt2\,\mu \approx 125\ \text{GeV}$, discovered by ATLAS and CMS in 2012 [ESTABLISHED].

**Yukawa couplings** generate fermion masses (with $\tilde\phi = i\sigma_2\phi^*$):
$$-\mathcal{L}_Y = Y^d_{ij}\,\bar Q_{Li}\,\phi\, d_{Rj} + Y^u_{ij}\,\bar Q_{Li}\,\tilde\phi\, u_{Rj} + Y^e_{ij}\,\bar L_{Li}\,\phi\, e_{Rj} + \text{h.c.}$$
After EWSB, $m^f = Y^f v/\sqrt2$. Bi-unitary diagonalization of $Y^{u,d,e}$ rotates from flavor to mass eigenstates; the residual misalignment in the quark sector is the CKM matrix.

### 3. Flavor and CP violation

In the mass basis the charged current reads
$$\mathcal{L}_{cc} = \tfrac{g}{\sqrt2}\, W^+_\mu\, \bar u_{Li}\gamma^\mu (V_{CKM})_{ij} d_{Lj} + \text{h.c.},$$
with $V_{CKM} = U_L^{u\dagger} U_L^{d}$ a $3\times3$ unitary matrix carrying 3 mixing angles + 1 CP-violating phase (Kobayashi–Maskawa). CP violation in the SM requires $\geq 3$ generations and is captured by the rephasing-invariant Jarlskog quantity $J = \mathrm{Im}(V_{us}V_{cb}V_{ub}^*V_{cs}^*) \approx 3\times10^{-5}$ [ESTABLISHED]; the Wolfenstein parametrization expands in $\lambda \approx 0.225$. The leptonic analog (with massive neutrinos) is the PMNS matrix $U_{PMNS}$: 3 angles + 1 Dirac phase, plus 2 Majorana phases if neutrinos are Majorana.

Neutral currents couple to $J^\mu_Z \propto (T_3 - Q\sin^2\theta_W)$ and are flavor-diagonal at tree level; flavor-changing neutral currents (FCNC) are suppressed by the **GIM mechanism**, a structural prediction confirmed across kaon, charm, and $B$ physics [ESTABLISHED].

### 4. QCD: asymptotic freedom and confinement

QCD is the $SU(3)_c$ Yang–Mills theory with quarks in the fundamental $\mathbf 3$. Its defining property is the running coupling. At one loop,
$$\mu\frac{d\alpha_s}{d\mu} = \beta(\alpha_s) = -\frac{\beta_0}{2\pi}\alpha_s^2 + \cdots, \qquad \beta_0 = 11 - \tfrac{2}{3} n_f.$$
For $n_f < 33/2$, $\beta_0 > 0$: the coupling **decreases** at high energy (asymptotic freedom; Gross–Wilczek–Politzer 1973 [ESTABLISHED]), making perturbative QCD predictive at colliders, and **grows** at low energy, generating a dynamical scale $\Lambda_{QCD}\sim 200\ \text{MeV}$ by dimensional transmutation:
$$\alpha_s(\mu) = \frac{2\pi}{\beta_0\ln(\mu/\Lambda_{QCD})}.$$
The non-abelian gluon self-coupling (the "11") overwhelms quark screening (the "$n_f$") — the physical origin of the sign.

**Confinement** — that asymptotic states are color singlets and isolated colored quanta do not propagate — is an empirically certain fact, strongly supported by lattice QCD (area-law Wilson loops, a linear static potential $V(r)\sim\sigma r$) [ESTABLISHED]. A rigorous continuum analytic proof (the Yang–Mills mass-gap Clay Millennium Problem) remains [OPEN]. Spontaneous breaking of the light-quark chiral symmetry $SU(2)_L\times SU(2)_R \to SU(2)_V$ produces the pions as pseudo-Goldstone bosons and supplies most of the proton mass through QCD binding energy rather than Higgs Yukawa mass [ESTABLISHED].

### 5. The theta term and strong CP

QCD admits a gauge-invariant, renormalizable term
$$\mathcal{L}_\theta = \theta\,\frac{g_s^2}{32\pi^2}\, G^a_{\mu\nu}\tilde G^{a\,\mu\nu},$$
a total derivative made physical by instantons. The observable parameter is $\bar\theta = \theta + \arg\det(Y^u Y^d)$, which would induce a neutron electric dipole moment; the experimental EDM bound forces $\bar\theta \lesssim 10^{-10}$ [ESTABLISHED bound]. Nothing in the SM explains this smallness — the **strong-CP problem** (see §"Where it breaks down").

### 6. Quantization, renormalizability, and anomalies

The theory is quantized via the gauge-fixed path integral with Faddeev–Popov ghosts (or, covariantly, the BRST formalism). 't Hooft and Veltman proved that spontaneously broken non-abelian gauge theories are renormalizable, making the electroweak sector a predictive quantum theory [ESTABLISHED]. Observables are organized as a coupling expansion with renormalization-group running of all parameters. The accidental global symmetries $U(1)_B$ and $U(1)_L$ are individually anomalous under $SU(2)_L$ (only $B-L$ is anomaly-free); $B+L$ is violated nonperturbatively by **sphalerons**, a fact central to baryogenesis [ESTABLISHED].

### Compact summary

$$\mathcal{L}_{SM} = -\tfrac14 \!\sum F_{\mu\nu}F^{\mu\nu} + \bar\psi\, i\gamma^\mu D_\mu \psi + |D_\mu\phi|^2 - V(\phi) - \big(Y_{ij}\,\bar\psi_{Li}\phi\,\psi_{Rj} + \text{h.c.}\big) \;(+\ \mathcal{L}_\theta).$$
Every confirmed non-gravitational phenomenon below the TeV scale follows from this Lagrangian. The leading window beyond it is the unique **dimension-5 Weinberg operator**
$$\mathcal{L}_5 = \frac{c_{ij}}{\Lambda}\,(\bar L_{Li}^c \tilde\phi^*)(\tilde\phi^\dagger L_{Lj}) + \text{h.c.},$$
which after EWSB gives Majorana neutrino masses $m_\nu \sim v^2/\Lambda$, naturally small for large $\Lambda$ (seesaw) [INFERENCE].

## Foundational assumptions

| Assumption | Status | Justification |
|---|---|---|
| Nature is a local, Lorentz-invariant, unitary relativistic QFT | likely-fundamental | [ESTABLISHED] to extraordinary precision (electron $g{-}2$ to ~12 sig. figs.); locality + Lorentz + unitarity are tied together by spin-statistics and CPT. [SPECULATIVE] whether truly fundamental — QFT may be emergent (string theory, holography), and quantum gravity likely modifies locality near $M_{Pl}$. |
| Gauge group is exactly $SU(3)_c\times SU(2)_L\times U(1)_Y$ | likely-fundamental | [ESTABLISHED] as the low-energy description. The product form and hypercharge normalization look unifiable: $SU(5)$, $SO(10)$, Pati–Salam embed it, and coupling running hints at near-unification (imperfect in SM, better in MSSM) near $10^{16}$ GeV. Possibly a low-energy shadow of a simple group. [INFERENCE] |
| The hypercharge/representation assignments (e.g. $Q_L\sim(3,2)_{1/6}$) | fundamental | [ESTABLISHED] fixed by anomaly cancellation plus measured charges. But *why* charge is quantized (proton/electron charge equality to ~$10^{-21}$) is not explained internally; GUT embedding explains it. The values are fixed; the reason points beyond the SM. |
| Exactly three generations with identical gauge numbers | unclear | [ESTABLISHED] empirically: the invisible $Z$ width gives 3 light active neutrinos with standard couplings, and a 4th chiral generation is excluded by Higgs data. *Why* three is [OPEN] — possibly flavor symmetry, extra-dimensional geometry, or contingency. |
| EWSB is driven by a single elementary scalar doublet | conventional-choice | [ESTABLISHED] that a ~125 GeV scalar with SM-like couplings exists and that EWSB occurs. Minimality is a choice: 2HDM, composite/pseudo-Goldstone Higgs, technicolor are alternatives. Elementarity is exactly what creates the hierarchy problem. [CONTESTED] whether elementary. |
| Neutrinos are massless (no $\nu_R$, exact lepton number) | historical-artifact | [ESTABLISHED] FALSE: oscillations prove nonzero mass. A minimality assumption of the original SM, now known wrong; minimally fixed by the Weinberg operator or added $\nu_R$. The clearest case of a falsified original assumption. |
| Neutrino masses are Dirac (vs Majorana) | unclear | [OPEN/CONTESTED] genuinely unknown. Majorana (seesaw) elegantly explains lightness and is theoretically favored by many, but neutrinoless double-beta decay is unobserved. Dirac requires a tiny Yukawa or new structure to forbid the Majorana term. |
| The bare QCD $\theta$ is (or relaxes to) ~0 | unclear | [OPEN] strong-CP problem: nothing forces $\bar\theta\sim0$; it is a free parameter $<10^{-10}$. Possible resolutions: anthropic/contingent, a massless up quark (disfavored by lattice), or a Peccei–Quinn axion [SPECULATIVE but well-motivated]. |
| ~19 free parameters fixed only by experiment | likely-fundamental | [ESTABLISHED] counting fact for the minimal SM (3 gauge, 2 Higgs, 9 charged-fermion masses, 4 CKM, $\bar\theta$); rises to ~26–28 with neutrino masses. The vast hierarchies (e.g. top/electron Yukawa $\sim10^5$) suggest an underlying flavor theory — the most "descriptive, not explanatory" aspect of the SM. |
| Spacetime is fixed 4D Minkowski; gravity neglected | conventional-choice | [ESTABLISHED] valid within the SM's domain (gravitational coupling $\sim(E/M_{Pl})^2$ is negligible at colliders). A deliberate restriction, not an error — but precisely the boundary where the SM must be completed, since gravity is non-renormalizable. |
| $B$ and $L$ are (accidental, approximate) global symmetries | historical-artifact | [ESTABLISHED] accidental symmetries of the renormalizable Lagrangian, not imposed. Anomalous (only $B-L$ survives), violated by sphalerons, and $B$ violation is *required* for baryogenesis. Conservation is an artifact of restricting to low-dimension operators. |

See [ASSUMPTIONS_LEDGER.md](../ASSUMPTIONS_LEDGER.md) for the cross-domain ledger and [EPISTEMICS.md](../EPISTEMICS.md) for marker definitions.

## Domain of validity

The SM is an effective field theory validated from sub-eV scales (atomic physics, neutrino oscillations) up to the ~TeV scale directly probed at the LHC, and indirectly — via precision electroweak fits and rare processes — well above it. Within this range it is the most precisely tested theory in science: QED predicts the electron anomalous magnetic moment to ~10–12 significant figures, and $Z$-pole observables, $m_W$, and Higgs couplings fit at the per-mille-to-percent level [ESTABLISHED].

Its ultraviolet cutoff is at most the Planck scale $M_{Pl}\sim 1.2\times10^{19}\ \text{GeV}$, where quantum gravity becomes strong and the QFT framework itself is expected to fail [INFERENCE]. Other plausible intermediate cutoffs include a GUT scale $\sim10^{16}$ GeV (unification, proton decay), a seesaw scale $\sim10^{9}$–$10^{15}$ GeV (neutrino mass), or — on naturalness grounds for the Higgs sector — new physics near the TeV scale [SPECULATIVE]. The SM also applies only to perturbatively accessible regimes for electroweak/QED processes; QCD is nonperturbative below ~1 GeV, where lattice methods or effective theories (chiral perturbation theory, HQET, SCET) are required [ESTABLISHED]. It says nothing about dark matter, dark energy, gravity, or cosmological initial conditions. See [CONSTANTS_AND_SCALES.md](../CONSTANTS_AND_SCALES.md).

## Where it breaks down

- **Neutrino masses and oscillations** — [ESTABLISHED]. The minimal SM predicts massless neutrinos; solar, atmospheric, reactor, and accelerator experiments decisively observe oscillations, with probability
$$P(\nu_\alpha\to\nu_\beta) = \Big|\sum_i U_{\alpha i} U_{\beta i}^* e^{-i m_i^2 L/2E}\Big|^2,$$
nonzero only for massive, mixed neutrinos. This is the *only laboratory-confirmed* breakdown — an **incompleteness** (missing fields/operators), not an internal inconsistency, repaired by the Weinberg operator or $\nu_R$.
- **Gravity and the UV cutoff** — [ESTABLISHED]. The SM excludes gravity; perturbatively quantized GR is non-renormalizable. A **domain-of-validity mismatch**, not an internal contradiction, but it guarantees the SM is not fundamental. See [domains/general-relativity.md](general-relativity.md).
- **Hierarchy / naturalness** — [OPEN, not an inconsistency]. The Higgs mass-squared is quadratically sensitive to the cutoff, $\delta m_h^2 \sim \Lambda^2/16\pi^2$; with $\Lambda\sim M_{Pl}$, obtaining $m_h=125$ GeV requires tuning to ~1 part in $10^{34}$. The theory is fully consistent (the sensitivity is absorbed into a counterterm); the "problem" is a naturalness *prior* that an elementary scalar's mass should not lie far below the cutoff without a protecting symmetry. [CONTESTED] whether this is a genuine problem.
- **Strong CP** — [OPEN, not an inconsistency]. $\bar\theta<10^{-10}$ is allowed but unexplained; the SM is consistent for any $\bar\theta$.
- **Baryon asymmetry** — [ESTABLISHED problem]. The observed $\eta\sim6\times10^{-10}$ cannot be generated by the SM: although the Sakharov conditions are in principle met (sphaleron $B$ violation, C/CP violation, departure from equilibrium), the SM CP violation is far too small and, for $m_h=125$ GeV, the electroweak transition is a smooth crossover rather than first-order. An **incompleteness** requiring new CP violation and/or dynamics. See [domains/cosmology.md](cosmology.md).
- **Dark matter and dark energy** — [ESTABLISHED]. The SM offers no viable dark-matter candidate (neutrinos are too light/hot) and no account of the cosmological constant. Pure **incompleteness**, established by astrophysical/cosmological observation.
- **Landau pole and vacuum (meta)stability** — [INFERENCE]. The hypercharge $U(1)_Y$ has a Landau pole far above $M_{Pl}$ (academic in practice, but signaling the abelian sector is not UV-complete). Separately, RG running of $\lambda$ with the measured top and Higgs masses drives it slightly negative near $\sim10^{10}$–$10^{11}$ GeV, implying a **metastable** (extremely long-lived) electroweak vacuum; the precise numbers are [CONTESTED], sensitive to the top mass.
- **Flavor hierarchies** — [OPEN, not an inconsistency]. The SM accommodates but does not explain the Yukawa/mixing hierarchies, the generation count, or why CKM is nearly diagonal while PMNS has large angles. Descriptive, not explanatory.

For the inconsistency-vs-incompleteness taxonomy used above, see [GAPS_AND_CONTRADICTIONS.md](../GAPS_AND_CONTRADICTIONS.md).

## Open problems (internal)

- **The flavor puzzle** [OPEN]: no accepted theory explains the Yukawa hierarchies, $N_{\text{gen}}=3$, or the CKM/PMNS patterns. Many [SPECULATIVE] frameworks (Froggatt–Nielsen, discrete flavor symmetries, extra-dimensional localization) exist; none is confirmed.
- **Hierarchy/naturalness** [OPEN/CONTESTED]: SUSY, composite Higgs, and extra dimensions were proposed as natural solutions; the LHC excludes the simplest TeV-scale versions, sharpening the debate over whether naturalness is the right guide versus anthropic/landscape reasoning.
- **Dirac vs Majorana neutrinos; absolute mass scale and ordering** [OPEN]: decided experimentally by neutrinoless double-beta decay (Majorana / lepton-number violation) and by cosmology/$\beta$-decay endpoints (absolute mass). The mass ordering and the leptonic phase $\delta_{CP}$ are being measured but not definitively resolved as of the knowledge cutoff.
- **Strong CP and the axion** [OPEN]: the Peccei–Quinn/axion mechanism is the most elegant [SPECULATIVE] proposal — and the axion is a dark-matter candidate — but searches (ADMX and others) have not detected it.
- **Baryogenesis** [OPEN]: requires beyond-SM CP violation and/or out-of-equilibrium dynamics; leptogenesis tied to heavy Majorana neutrinos is a leading [INFERENCE/SPECULATIVE] candidate but hard to test directly.
- **Confinement / Yang–Mills mass gap** [OPEN]: empirically certain and lattice-supported, but lacking a rigorous continuum proof (a Clay Millennium Problem). An internal hard problem, not an inconsistency.
- **Persistent anomalies** [CONTESTED/OPEN, and shrinking]: the muon $g{-}2$ discrepancy is now **largely resolved into SM-consistency** — the 2025 Muon $g-2$ Theory Initiative white paper (arXiv:2505.21476) adopts a lattice-QCD HVP average, giving $a_\mu^{\rm SM}=116\,592\,033(62)\times10^{-11}$ and $\Delta a_\mu=38(63)\times10^{-11}$ (**no tension**), though a residual *internal* lattice-vs-$R$-ratio (CMD-3) HVP discrepancy persists as a theory/systematics question, not a BSM signal [ESTABLISHED, 2025]. The $B$-meson lepton-universality ratios $R_K, R_{K^*}$ have largely moved toward SM consistency with updated LHCb data, while some $b\to s\mu\mu$ angular/branching observables remain in mild tension. None has reached unambiguous discovery-level BSM significance.
- **Gauge unification and proton decay** [OPEN/INFERENCE]: couplings nearly unify near $\sim10^{16}$ GeV (better with SUSY), motivating GUTs, which generically predict proton decay; the absence of observed decay (lifetime $>\sim10^{34}$ yr) excludes minimal $SU(5)$ and constrains models.

A consolidated, ranked list lives in [OPEN_PROBLEMS.md](../OPEN_PROBLEMS.md); candidate resolutions in [HYPOTHESES.md](../HYPOTHESES.md).

## Connections to other frameworks

- **General relativity / quantum gravity** — clash and incompleteness. The SM uses a fixed background; GR makes spacetime dynamical, and naive quantization of GR is non-renormalizable, so neither is fundamental in present form. They coexist as an EFT below $M_{Pl}$; reconciliation requires quantum gravity (string theory, loop quantum gravity, asymptotic safety — all [SPECULATIVE]). See [domains/general-relativity.md](general-relativity.md) and [UNIFICATION_LANDSCAPE.md](../UNIFICATION_LANDSCAPE.md).
- **Cosmology / early universe** — deep dependence and tension. The SM supplies the thermal bath, the electroweak and QCD transitions, and sphaleron processes relevant to baryogenesis and big-bang nucleosynthesis; cosmology in turn demands inflation, dark matter, dark energy, and a working baryogenesis mechanism the SM lacks. Neutrino properties feed $N_{\text{eff}}$ and structure formation. See [domains/cosmology.md](cosmology.md).
- **Grand unified theories** — proposed UV completion. $SU(5)$, $SO(10)$, Pati–Salam embed $G_{SM}$ in a simple group, explaining charge quantization and (in $SO(10)$) a full generation plus $\nu_R$ in one irrep, motivating unification and the seesaw. [INFERENCE/SPECULATIVE]; generically predicts (largely unobserved) proton decay.
- **Supersymmetry** — proposed naturalness fix. SUSY cancels the quadratic Higgs divergence, improves unification (MSSM), and supplies a dark-matter candidate (lightest neutralino). [SPECULATIVE]; no superpartners at the LHC weaken the original motivation.
- **Lattice gauge theory** — essential tool. Nonperturbative QCD (hadron spectrum, decay constants, the QCD contribution to $g{-}2$, confinement) is computed via Monte Carlo, currently central to the $g{-}2$ hadronic controversy. See [domains/quantum-field-theory.md](quantum-field-theory.md).
- **Neutrino / astroparticle physics** — the first crack and a bridge. Oscillations are the established BSM signal; the seesaw links neutrino mass to a high scale and to leptogenesis. See [domains/cosmology.md](cosmology.md).
- **Statistical and condensed-matter field theory** — shared formalism. The Higgs mechanism is the relativistic analog of Anderson–Higgs in superconductivity (Ginzburg–Landau); spontaneous symmetry breaking, the Wilsonian RG, effective field theory, and topological solitons are common language, with insight flowing both ways. See [domains/statistical-mechanics.md](statistical-mechanics.md) and [domains/thermodynamics.md](thermodynamics.md).
- **Effective field theory (SMEFT)** — the modern organizing framework. Treating the SM as the renormalizable part of an EFT, BSM effects are parametrized by higher-dimension gauge-invariant operators (dim-5 for neutrino mass, dim-6 for collider/precision deviations) suppressed by powers of a new-physics scale $\Lambda$. This is the dominant model-independent strategy for confronting the SM with data. See [THEORY_MAP.md](../THEORY_MAP.md) and [UNIFYING_PRINCIPLES.md](../UNIFYING_PRINCIPLES.md).

Connections to underlying mathematics (Lie groups, fiber bundles, index theorems behind anomalies) are catalogued in [domains/mathematics.md](mathematics.md); information-theoretic angles in [domains/information-theory.md](information-theory.md).

## Key references

- M. E. Peskin and D. V. Schroeder, *An Introduction to Quantum Field Theory* (Addison-Wesley, 1995) — canonical graduate text for the QFT machinery (path integrals, renormalization, gauge theories, anomalies, asymptotic freedom).
- S. Weinberg, *The Quantum Theory of Fields*, Vols. I–II (Cambridge Univ. Press, 1995–1996) — foundational treatment emphasizing why QFT takes its form; deep on EWSB.
- C. Quigg, *Gauge Theories of the Strong, Weak, and Electromagnetic Interactions*, 2nd ed. (Princeton Univ. Press, 2013) — physically motivated exposition of the SM gauge and electroweak structure.
- M. D. Schwartz, *Quantum Field Theory and the Standard Model* (Cambridge Univ. Press, 2014) — formalism tied directly to SM phenomenology and EFT.
- Particle Data Group (R. L. Workman *et al.*), *Review of Particle Physics*, *Prog. Theor. Exp. Phys.* (updated regularly) — the standard reference for measured parameters, masses, mixing matrices, and reviews. Use for any numerical value.
- S. L. Glashow, *Nucl. Phys.* **22**, 579 (1961); S. Weinberg, *Phys. Rev. Lett.* **19**, 1264 (1967); A. Salam (1968) — the electroweak unification.
- D. J. Gross and F. Wilczek, *Phys. Rev. Lett.* **30**, 1343 (1973); H. D. Politzer, *Phys. Rev. Lett.* **30**, 1346 (1973) — asymptotic freedom.
- M. Kobayashi and T. Maskawa, *Prog. Theor. Phys.* **49**, 652 (1973) — CP violation from three generations (CKM).
- G. 't Hooft and M. Veltman, *Nucl. Phys.* **B44**, 189 (1972) — renormalizability of spontaneously broken non-abelian gauge theories.
- P. W. Higgs, *Phys. Rev. Lett.* **13**, 508 (1964); F. Englert and R. Brout, *Phys. Rev. Lett.* **13**, 321 (1964); G. Guralnik, C. Hagen, T. Kibble (1964) — the mass-generation mechanism.
- R. D. Peccei and H. R. Quinn, *Phys. Rev. Lett.* **38**, 1440 (1977); S. Weinberg (1978); F. Wilczek (1978) — the strong-CP/axion proposal.
- A. D. Sakharov, *JETP Lett.* **5**, 24 (1967) — the baryogenesis conditions.

## See also

- [domains/quantum-field-theory.md](quantum-field-theory.md) — the underlying field-theoretic framework
- [domains/general-relativity.md](general-relativity.md) — the gravity boundary
- [domains/cosmology.md](cosmology.md) — baryogenesis, dark sector, early-universe interface
- [domains/statistical-mechanics.md](statistical-mechanics.md) — shared SSB/RG formalism
- [domains/mathematics.md](mathematics.md) — Lie groups, bundles, anomaly index theorems
- [THEORY_MAP.md](../THEORY_MAP.md) · [UNIFICATION_LANDSCAPE.md](../UNIFICATION_LANDSCAPE.md) · [OPEN_PROBLEMS.md](../OPEN_PROBLEMS.md) · [GAPS_AND_CONTRADICTIONS.md](../GAPS_AND_CONTRADICTIONS.md) · [ASSUMPTIONS_LEDGER.md](../ASSUMPTIONS_LEDGER.md) · [CONSTANTS_AND_SCALES.md](../CONSTANTS_AND_SCALES.md) · [GLOSSARY.md](../GLOSSARY.md)

## References

See [BIBLIOGRAPHY.md](../BIBLIOGRAPHY.md) for the consolidated, cross-domain reference list.
