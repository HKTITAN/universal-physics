# Open Problems — The Registry of What Physics Does Not Know

**Status:** Living registry (stable IDs; merges cross-cutting and per-domain open problems).
**Last updated:** 2026-06-10

This page is the canonical, stably-numbered list of genuinely unresolved problems that a program toward a universal theory must confront. Each entry carries a **precise statement**, a **why-it-is-hard** analysis, the **current leading approaches**, an **epistemic tag** (per [EPISTEMICS.md](EPISTEMICS.md)), and cross-links.

A central discipline (from [EPISTEMICS.md](EPISTEMICS.md) §5, applied in [GAPS_AND_CONTRADICTIONS.md](GAPS_AND_CONTRADICTIONS.md)) is to classify *what kind* of problem each entry is:

- **Logical inconsistency** — two accepted statements cannot both hold. Rare.
- **Domain-of-validity mismatch** — frameworks clash only where neither is trusted (a *frontier*, not a paradox).
- **Fine-tuning / naturalness puzzle** — the theory is consistent for any value, but a value looks "unreasonably" special.
- **Unsolved-but-consistent problem** — no inconsistency, just no derivation/solution yet.

> **Convention.** IDs (`OP-N`) are permanent. When a problem is resolved, it is *not* deleted — its status is updated and the resolution logged in [CHANGELOG.md](CHANGELOG.md). New problems append at the next free ID. Tags reflect the state of knowledge at the *Last updated* date; nothing here asserts a speculative resolution as fact.

**Index by theme.** A. [Quantum gravity & unification](#a-quantum-gravity--unification) (OP-1, OP-15, OP-23, OP-24, OP-25) · B. [Foundations of QM](#b-foundations-of-quantum-mechanics) (OP-2, OP-26, OP-27, OP-28, OP-29) · C. [Cosmology & the dark sector](#c-cosmology--the-dark-sector) (OP-3, OP-5, OP-6, OP-17, OP-18, OP-19, OP-30, OP-31) · D. [Particle physics & naturalness](#d-particle-physics--naturalness) (OP-4, OP-7, OP-8, OP-9, OP-14, OP-20, OP-21, OP-22, OP-32) · E. [Arrow of time & statistical foundations](#e-arrow-of-time--statistical-foundations) (OP-10, OP-16, OP-33, OP-34, OP-35) · F. [Mathematical foundations of QFT & dynamics](#f-mathematical-foundations-of-qft--dynamics) (OP-11, OP-12, OP-36, OP-37) · G. [Other](#g-other) (OP-13, OP-38, OP-39).

---

## A. Quantum gravity & unification

### OP-1 — Quantum gravity: a consistent theory reducing to GR and to QFT
**Area:** Quantum gravity / unification (GR + QFT). **Tag:** `[OPEN]`. **Kind:** structural domain-mismatch (frontier), not a logical inconsistency.

**Statement.** There is no experimentally confirmed, mathematically consistent theory that reduces to general relativity in the low-curvature limit and to quantum field theory on flat spacetime while treating the spacetime metric itself as a dynamical quantum variable. Perturbatively quantized GR (write $g_{\mu\nu}=\eta_{\mu\nu}+h_{\mu\nu}$ and quantize $h_{\mu\nu}$) is non-renormalizable: pure gravity first diverges at two loops (Goroff–Sagnotti 1985) and gravity-plus-matter already at one loop, requiring infinitely many counterterms with undetermined coefficients, so predictivity is lost at the Planck scale $E_P\sim 1.22\times10^{19}\ \mathrm{GeV}$ ($\ell_P\sim 1.6\times10^{-35}\ \mathrm{m}$; see [CONSTANTS_AND_SCALES.md](CONSTANTS_AND_SCALES.md)).

**Why it is hard.** QFT presupposes a fixed smooth classical background and an external time parameter; GR makes geometry dynamical and background-independent (diffeomorphism invariance), and the canonical theory has *no* preferred time — the Wheeler–DeWitt constraint $\hat H\,|\Psi\rangle = 0$ is timeless (the "problem of time", cf. OP-25). Reconciling background independence with superposition of geometries, plus the non-renormalizability of the graviton, makes the conflict structural rather than merely technical. `[ESTABLISHED]` that perturbative GR is non-renormalizable; `[OPEN]` what replaces it. No accessible experiment probes the Planck regime directly, so candidates are underconstrained by data.

**Leading approaches.** String theory / M-theory (with AdS/CFT holography as its best-understood corner); loop quantum gravity and spin foams; asymptotic safety (a nontrivial UV fixed point for gravity via functional RG, OP-22); causal dynamical triangulations and causal sets; treating GR as a low-energy effective field theory valid below $E_P$ `[INFERENCE, robust]`; emergent-spacetime / "spacetime from entanglement" programs (OP-23, OP-24).

**Cross-links.** [domains/general-relativity.md](domains/general-relativity.md), [domains/quantum-field-theory.md](domains/quantum-field-theory.md), [UNIFICATION_LANDSCAPE.md](UNIFICATION_LANDSCAPE.md), [THEORY_MAP.md](THEORY_MAP.md), [GAPS_AND_CONTRADICTIONS.md](GAPS_AND_CONTRADICTIONS.md).

### OP-15 — Black-hole information paradox: unitarity vs. the equivalence principle
**Area:** Quantum gravity / GR–QFT–thermodynamics interface. **Tag:** `[OPEN]` (mechanism `[CONTESTED]`). **Kind:** triple-point domain clash.

**Statement.** Hawking's semiclassical calculation predicts thermal (mixed) radiation at $T_H = \hbar c^3/(8\pi G k_B M)$; iterated to complete evaporation it appears to map an initial pure state to a mixed state, violating unitarity and severing any link between the Bekenstein–Hawking entropy $S_{BH} = k_B c^3 A/(4 G\hbar)$ and a microscopic state count. Whether, where, and how information escapes — and whether the horizon stays smooth (no "firewall") — is unresolved.

**Why it is hard.** It is a clash between GR (smooth horizon, local causality), QM (unitarity), and thermodynamics (entropy as state-counting), in a regime mixing strong gravity with quantum fields where the correct degrees of freedom are unknown. Recent island / quantum-extremal-surface and replica-wormhole computations reproduce a unitary Page curve within controlled (largely AdS, semiclassical-plus-replica) settings `[INFERENCE]`, strongly favoring information preservation, but the bulk mechanism in a realistic asymptotically-flat, dynamically-formed black hole — and how information reaches an external observer — is not settled `[OPEN]`. Do not overstate: islands are computed in toy models, not yet shown to resolve the paradox in nature.

**Leading approaches.** Quantum extremal surfaces / islands and replica wormholes (Page curve); AdS/CFT (manifestly unitary boundary description); black-hole complementarity and the firewall (AMPS) debate `[CONTESTED]`; string microstate counting (Strominger–Vafa for extremal/BPS black holes) and fuzzballs; holographic / quantum-error-correction models of bulk reconstruction.

**Cross-links.** [domains/general-relativity.md](domains/general-relativity.md), [domains/thermodynamics.md](domains/thermodynamics.md), [domains/information-theory.md](domains/information-theory.md), OP-33 (BH microstate counting), OP-23.

### OP-23 — Does holography / "spacetime from entanglement" extend beyond AdS?
**Area:** Quantum gravity / holography / information. **Tag:** `[SPECULATIVE]` (AdS results `[ESTABLISHED]` within their setting). **Kind:** unsolved-but-consistent; possible over-generalization.

**Statement.** Within AdS/CFT, geometry appears encoded in boundary entanglement: the Ryu–Takayanagi formula $S(A)=\mathrm{Area}(\gamma_A)/(4 G_N)$ ties entanglement entropy to minimal bulk surfaces, entanglement-wedge reconstruction realizes a quantum-error-correcting code, and the entanglement "first law" yields the *linearized* Einstein equations. Whether these results — and the broader "it-from-qubit" / ER=EPR program — are a universal principle or an artifact of the special negatively-curved large-$N$ AdS corner is unknown; there is no established de Sitter (positive-$\Lambda$, like our universe) or flat-space analog.

**Why it is hard.** All rigorous results live in asymptotically-AdS, large-central-charge, strong-coupling (Einstein-gravity) regimes; dS/CFT is far less constrained and speculative. Local QFT algebras are type $\mathrm{III}_1$ von Neumann factors with no tensor factorization and no finite entanglement entropy, so "entanglement = fabric of spacetime" lacks a clean foundational footing in full quantum gravity (OP-36). Only the *linearized* Einstein equations have been recovered; a background-independent nonlinear derivation does not exist, and our accelerating universe has no working holographic dual.

**Leading approaches.** AdS/CFT with RT/HRT, quantum extremal surfaces, entanglement-wedge reconstruction; tensor-network models (MERA, HaPPY codes); crossed-product / algebra-of-observables constructions giving well-defined gravitational entropies (OP-37); dS/CFT and flat-space holography `[SPECULATIVE]`; Jacobson-style thermodynamic derivations of Einstein's equations.

**Cross-links.** [domains/information-theory.md](domains/information-theory.md), [UNIFYING_PRINCIPLES.md](UNIFYING_PRINCIPLES.md), [HYPOTHESES.md](HYPOTHESES.md), OP-15, OP-24, OP-36, OP-37.

### OP-24 — Derive the full nonlinear Einstein equations from entanglement/information
**Area:** Quantum gravity / holography / information. **Tag:** `[OPEN]`/`[SPECULATIVE]`. **Kind:** unsolved-but-consistent.

**Statement.** Linearized Einstein equations have been obtained from entanglement first laws, and Jacobson (1995) derives Einstein's equations as a local equation of state from the Clausius relation $\delta Q = T\,\delta S$ on local Rindler horizons. A complete, non-perturbative, background-independent derivation of the *full* nonlinear (and quantum-corrected) gravitational dynamics from information-theoretic principles is not in hand.

**Why it is hard.** The linear results rely on perturbing around a known background; promoting them to a generic, nonlinear, observer-independent statement requires a notion of entanglement entropy in dynamical gravity that does not yet exist rigorously (OP-36, OP-37). It is unknown whether "gravity from entanglement" is fundamental or an emergent re-description valid only in special regimes (OP-23).

**Leading approaches.** Entanglement-first-law expansions to higher order; Jacobson's thermodynamic / entanglement-equilibrium derivations; tensor-network and holographic-complexity programs; crossed-product algebra methods.

**Cross-links.** [UNIFYING_PRINCIPLES.md](UNIFYING_PRINCIPLES.md), [domains/information-theory.md](domains/information-theory.md), OP-23, OP-1.

### OP-25 — The problem of time and diffeomorphism-invariant observables
**Area:** General relativity / quantum gravity. **Tag:** `[OPEN]`/`[CONTESTED]`. **Kind:** conceptual tension bordering on structural.

**Statement.** In a fully background-independent theory there is no external time; canonical quantization yields the timeless constraint $\hat H\,|\Psi\rangle=0$. How to define local, physical (Dirac) observables that commute with the constraints, and what "time evolution" means absent a preferred time, remains conceptually unresolved.

**Why it is hard.** Diffeomorphism invariance means coordinate time is pure gauge; genuine observables must be relational (correlations between physical quantities), but constructing a complete set of local relational observables for full GR is technically open, and the issue compounds in the quantum theory.

**Leading approaches.** Relational / partial-observable frameworks (Rovelli, Dittrich); evolving constants of motion; reduced phase-space and deparametrization methods. Promising but not decisive.

**Cross-links.** [domains/general-relativity.md](domains/general-relativity.md), [domains/quantum-mechanics.md](domains/quantum-mechanics.md), OP-1, OP-10, OP-31.

---

## B. Foundations of quantum mechanics

### OP-2 — The measurement problem and the quantum–classical cut
**Area:** Foundations of quantum mechanics. **Tag:** `[OPEN]`/`[CONTESTED]`. **Kind:** genuine incompleteness (axioms not a closed universal dynamics), *not* a calculational gap.

**Statement.** Linear unitary Schrödinger evolution never turns a superposition into a single outcome, yet the Born/projection rule does exactly that, stochastically. Treating apparatus + system + observer quantum-mechanically, unitary dynamics predicts an entangled superposition of macroscopically distinct pointer states (Schrödinger's cat; Wigner's friend), while experiment always records one definite outcome. The theory supplies no rule for what physical process, system size, or interaction constitutes a "measurement" (Bell's "shifty split").

**Why it is hard.** Unitary evolution and the projection postulate are mutually inconsistent as *universal* dynamical laws, so the standard axioms are not a closed, consistent universal dynamics. Decoherence sharply suppresses interference and selects a pointer basis (einselection) but does not by itself pick a single outcome or supply a fundamental boundary. Every interpretation that keeps unitary QM unmodified is empirically equivalent to standard QM, so the choice is currently philosophical/aesthetic; only objective-collapse models make distinct, testable predictions (OP-26).

**Leading approaches.** Everett / many-worlds (keep only unitary evolution; pay with branching and the probability problem, OP-28); de Broglie–Bohm pilot wave (definite positions, explicit nonlocality); objective collapse (GRW, CSL, Diósi–Penrose, OP-26); QBism / Copenhagen-instrumentalist / relational QM; consistent/decoherent histories; decoherence + einselection as shared dynamical input.

**Cross-links.** [domains/quantum-mechanics.md](domains/quantum-mechanics.md), [GAPS_AND_CONTRADICTIONS.md](GAPS_AND_CONTRADICTIONS.md), [ASSUMPTIONS_LEDGER.md](ASSUMPTIONS_LEDGER.md), OP-26, OP-27, OP-28.

### OP-26 — Is collapse a real dynamical process? (Objective-collapse models)
**Area:** Foundations of QM. **Tag:** `[OPEN]`, empirically testable — a genuine virtue. **Kind:** unsolved-but-consistent (a distinct *physical* theory).

**Statement.** Objective-collapse models (GRW, Continuous Spontaneous Localization, Diósi–Penrose gravitational collapse) add stochastic nonlinear terms that spontaneously localize macroscopic superpositions, predicting tiny deviations from unitary QM: anomalous energy heating, spontaneous radiation, and suppression of large-mass matter-wave interference. Whether such collapse occurs is unknown.

**Why it is hard.** The predicted effects scale with mass/size and are extraordinarily small; isolating them requires exquisite control of decoherence backgrounds. Matter-wave interferometry, ultracold optomechanics, and underground spontaneous-radiation searches progressively constrain (and in regions exclude) the CSL and Diósi–Penrose parameter spaces, but the models are not falsified as a class, and the bare Diósi–Penrose proposal is being squeezed rather than settled.

**Leading approaches.** Large-mass matter-wave interferometry; cryogenic optomechanical force/heating searches; X-ray spontaneous-emission searches; refinement of CSL collapse-rate / correlation-length parameters.

**Cross-links.** [domains/quantum-mechanics.md](domains/quantum-mechanics.md), OP-2, OP-1 (gravitationally-induced collapse links to quantum gravity).

### OP-27 — Can the Born rule be derived rather than postulated?
**Area:** Foundations of QM / mathematical foundations. **Tag:** `[OPEN]`/`[CONTESTED]`. **Kind:** unsolved-but-consistent / interpretation-dependent.

**Statement.** Whether the probability rule $P = |\langle\phi|\psi\rangle|^2$ can be *derived* from the other axioms (especially unitary dynamics) or must stand as an independent postulate is unresolved.

**Why it is hard.** Gleason's theorem fixes the rule's *form* given noncontextuality and $\dim\mathcal H\ge 3$, but assumes the measure structure rather than deriving probability from dynamics. Deutsch–Wallace decision-theoretic derivations and Zurek's envariance attempt full derivations within Everett; whether any is non-circular (does it covertly assume a probability measure or a preferred decomposition?) is actively disputed. No clean, universally accepted derivation exists.

**Leading approaches.** Gleason's theorem; Deutsch–Wallace decision theory; Zurek envariance; reconstructions from operational axioms (OP-29).

**Cross-links.** [domains/quantum-mechanics.md](domains/quantum-mechanics.md), [domains/mathematics.md](domains/mathematics.md), OP-2, OP-28, OP-29.

### OP-28 — Probability in deterministic no-collapse (Everett) interpretations
**Area:** Foundations of QM. **Tag:** `[OPEN]`/`[CONTESTED]`. **Kind:** conceptual / interpretational.

**Statement.** If all branches are equally real, the meaning of "the probability of an outcome" is unclear (the *incoherence problem*: why assign probabilities to events that all occur?) as is the empirical confirmation of Born weights (the *quantitative problem*). These remain contested even among Everett's proponents.

**Why it is hard.** Deterministic universal unitarity provides branch *amplitudes* but no obvious notion of self-locating uncertainty or a non-question-begging rule connecting amplitudes to credences and to observed relative frequencies.

**Leading approaches.** Decision-theoretic (Deutsch–Wallace) and envariance arguments (OP-27); self-locating-uncertainty accounts; explicit denial that probability is fundamental.

**Cross-links.** [domains/quantum-mechanics.md](domains/quantum-mechanics.md), OP-2, OP-27.

### OP-29 — Reconstructing QM from physical/operational axioms (and why complex Hilbert space?)
**Area:** Foundations of QM / mathematical foundations. **Tag:** `[OPEN]`, active and fruitful. **Kind:** unsolved-but-consistent (a "why this formalism" question).

**Statement.** Can the Hilbert-space formalism — including the use of the complex field $\mathbb C$ (over $\mathbb R$ or quaternions $\mathbb H$) and the tensor-product rule for composite systems — be *derived* from operational/information-theoretic postulates, and if so which axioms are physically necessary versus conventional?

**Why it is hard.** Multiple inequivalent axiom sets succeed in reconstructing QM (Hardy 2001; Chiribella–D'Ariano–Perinotti 2011; Masanes–Müller; Clifton–Bub–Halvorson "no broadcasting / no signaling / no bit commitment"), which is suggestive but leaves open which (if any) is fundamental. Recent (2021–2022) multipartite experiments argue real-Hilbert-space QM is distinguishable from complex QM under standard locality/tomographic-independence assumptions, indicating complexity is not mere convention — but the conclusion is conditional on those framework assumptions and is debated.

**Leading approaches.** Generalized-probabilistic-theories program (purification, local tomography, continuous reversibility); information-theoretic reconstructions; experimental tests of real vs complex QM.

**Cross-links.** [domains/quantum-mechanics.md](domains/quantum-mechanics.md), [domains/information-theory.md](domains/information-theory.md), [domains/mathematics.md](domains/mathematics.md), [UNIFYING_PRINCIPLES.md](UNIFYING_PRINCIPLES.md), OP-27.

---

## C. Cosmology & the dark sector

### OP-3 — The cosmological constant problem
**Area:** QFT/gravity interface; cosmology. **Tag:** `[OPEN]` (arguably the deepest quantitative puzzle). **Kind:** fine-tuning / domain-clash, *not* internal inconsistency.

**Statement.** The observed dark-energy / vacuum-energy density ($\rho_\Lambda \sim 10^{-47}\ \mathrm{GeV}^4$, $\Lambda \sim 10^{-52}\ \mathrm{m}^{-2}$) is smaller than naive QFT zero-point-energy estimates by roughly $120$ orders of magnitude with a Planck cutoff (still $\sim 50$–$60$ orders with an electroweak/SUSY cutoff). No mechanism is known for why the *gravitating* vacuum energy is so tiny yet nonzero. The *coincidence problem* adds that $\rho_\Lambda$ happens to be comparable to the matter density today.

**Why it is hard.** It sits exactly at the unresolved QFT/gravity boundary: it concerns how vacuum energy gravitates, and the naive estimate may be the wrong object once gravity is properly quantum (OP-1). In classical GR, $\Lambda$ is a free parameter, so this is fine-tuning, not inconsistency. No known symmetry forces cancellation to $\sim 120$ digits while leaving the tiny observed remainder, and supersymmetry — which could cancel it — is broken at accessible scales. The "$10^{120}$" figure is regularization-dependent; see [CONSTANTS_AND_SCALES.md](CONSTANTS_AND_SCALES.md).

**Leading approaches.** Anthropic/landscape selection (Weinberg's 1987 bound, which anticipated a small nonzero $\Lambda$; relies on a multiverse + a measure, OP-19); supersymmetric cancellations (constrained by no TeV superpartners); sequestering and degravitation; modified gravity / dynamical dark energy (OP-6); reformulating which vacuum-energy object sources curvature.

**Cross-links.** [domains/cosmology.md](domains/cosmology.md), [domains/quantum-field-theory.md](domains/quantum-field-theory.md), [domains/general-relativity.md](domains/general-relativity.md), [CONSTANTS_AND_SCALES.md](CONSTANTS_AND_SCALES.md), OP-1, OP-6, OP-19.

### OP-5 — The microphysical identity of dark matter
**Area:** Cosmology / astroparticle / particle physics. **Tag:** `[OPEN]` (existence of missing mass `[ESTABLISHED]`; particle identity `[OPEN]`). **Kind:** established incompleteness; unknown microphysics.

**Statement.** Independent concordant evidence — galaxy rotation curves; cluster dynamics and lensing (the mass–gas offset in the Bullet Cluster); the CMB acoustic-peak structure; BBN+CMB showing $\Omega_b \ll \Omega_m$; the amplitude and timing of structure formation — requires a dominant, cold, non-baryonic, gravitating component absent from the Standard Model. Its particle/physical identity is unknown after decades of null direct, indirect, and collider searches.

**Why it is hard.** The gravitational evidence establishes that *something* beyond baryons + GR is needed but constrains the microphysics weakly: viable candidates span $\sim 90$ orders of magnitude in mass (ultralight axions to primordial black holes). WIMP direct-detection has reached the neutrino-floor regime with no signal; axion searches are ongoing. A minority view that part of the effect signals a breakdown of GR (MOND-like dynamics) is disfavored by the multi-probe concordance — especially the Bullet-Cluster offset and the CMB peaks — but not fully excluded for all phenomena `[CONTESTED]`.

**Leading approaches.** WIMPs (thermal relics); QCD axions / axion-like particles (also addressing strong-CP, OP-8); sterile neutrinos; primordial black holes; hidden/dark sectors with self-interactions; warm dark matter; modified gravity (MOND/TeVeS) as a contested alternative.

**Cross-links.** [domains/cosmology.md](domains/cosmology.md), [domains/particle-physics.md](domains/particle-physics.md), OP-8, OP-31.

### OP-6 — The nature of dark energy / cosmic acceleration
**Area:** Cosmology. **Tag:** `[OPEN]`/`[CONTESTED]` (acceleration itself `[ESTABLISHED]`). **Kind:** unsolved-but-consistent, entangled with OP-3.

**Statement.** Late-time accelerated expansion is established (Type Ia supernovae; CMB+BAO; integrated Sachs–Wolfe), implying a component with equation of state $w < -1/3$ comprising $\sim 70\%$ of the energy budget. Whether this is exactly a cosmological constant ($w=-1$, e.g. vacuum energy), a slowly evolving dynamical field (quintessence, $w(z)\ne -1$), or an artifact of misapplying GR on the largest scales is unresolved.

**Why it is hard.** $\Lambda$ is the simplest description and fits almost all data; distinguishing $w=-1$ from a slowly varying $w(z)$ demands percent-level control of geometry and growth across cosmic time, where systematics (SN Ia calibration, photometric redshifts, baryonic feedback) limit. Recent BAO analyses have been read by some as hinting at evolving dark energy, but this is data-combination- and prior-dependent and not established `[CONTESTED]`. The problem is entangled with the cosmological-constant problem (OP-3) and possible GR modification.

**Leading approaches.** $\Lambda$ / vacuum energy ($\Lambda$CDM baseline); quintessence and dynamical scalar fields; modified gravity ($f(R)$, Horndeski); inhomogeneity backreaction (contested, generally believed small, OP-30); next-generation surveys (DESI, Euclid, LSST-class) to pin down $w(z)$.

**Cross-links.** [domains/cosmology.md](domains/cosmology.md), OP-3, OP-18, OP-30.

### OP-17 — Did inflation occur, and what is the inflaton? (Primordial gravitational waves)
**Area:** Cosmology / early universe. **Tag:** `[OPEN]`. **Kind:** unsolved-but-consistent; under-determined by data.

**Statement.** Cosmic inflation — a hypothesized early phase of slow-roll accelerated expansion — solves the horizon, flatness, and monopole problems and predicts the observed adiabatic, nearly-Gaussian, nearly-scale-invariant fluctuation spectrum (spectral index $n_s \approx 0.965$). But its occurrence is not confirmed: the inflaton is not identified with any known field, the cleanest signature (primordial tensor $B$-mode polarization, tensor-to-scalar ratio $r\ne 0$) has not been detected, and current bounds ($r \lesssim 0.03$–$0.06$) already exclude the simplest large-field models.

**Why it is hard.** The energy scales are far above any laboratory probe, so inference is indirect and degenerate: alternatives (some bouncing/ekpyrotic models) can mimic the observed scalar spectrum, so data underdetermine the mechanism. Generic inflation tends to become eternal, producing a multiverse and a measure problem that undermines predictivity (OP-19). Inflation also appears to require its own special low-entropy initial patch, so it may not fully solve the puzzle it was invoked to address (OP-10, OP-16).

**Leading approaches.** CMB $B$-mode searches for primordial gravitational waves ($r$); single-field slow-roll model building constrained by $n_s$, running, non-Gaussianity; alternatives (ekpyrotic/bouncing, string gas); connecting the inflaton to BSM physics (Higgs inflation, GUT-scale fields).

**Cross-links.** [domains/cosmology.md](domains/cosmology.md), OP-10, OP-16, OP-19.

### OP-18 — The Hubble tension (and the $S_8$ tension)
**Area:** Observational cosmology. **Tag:** `[CONTESTED]`/`[OPEN]`. **Kind:** possible systematics vs. possible new physics — undecided.

**Statement.** The present expansion rate inferred from the early universe (CMB + BAO within $\Lambda$CDM, $H_0 \approx 67$–$68\ \mathrm{km\,s^{-1}\,Mpc^{-1}}$) disagrees at roughly the $4$–$6\sigma$ level with the late-universe distance-ladder value (Cepheid-calibrated Type Ia supernovae, $H_0 \approx 73\ \mathrm{km\,s^{-1}\,Mpc^{-1}}$). A milder ($\sim 2$–$3\sigma$) tension exists in the structure-growth amplitude $S_8 = \sigma_8\sqrt{\Omega_m/0.3}$ between early-universe extrapolations and some weak-lensing/cluster measurements. If not systematics, these are the leading empirical cracks in the $\Lambda$CDM concordance model.

**Why it is hard.** The discrepancy persists across multiple independent methods on each side, making a single overlooked systematic less likely but not excluded. Early-time solutions that reduce the sound horizon $r_d$ (early dark energy, extra relativistic species $N_{\rm eff}$, modified recombination) tend to worsen other fits (e.g. $S_8$) or require tuning, while late-time-only solutions are tightly constrained by BAO. As of the knowledge horizon it is genuinely unresolved.

**Leading approaches.** Distance-ladder cross-checks (Cepheids, TRGB, surface-brightness fluctuations) and independent $H_0$ probes (lensing time delays, gravitational-wave standard sirens); early dark energy and extra dark radiation; modified recombination; interacting/evolving dark sectors; systematics audits of both pipelines.

**Cross-links.** [domains/cosmology.md](domains/cosmology.md), [GAPS_AND_CONTRADICTIONS.md](GAPS_AND_CONTRADICTIONS.md), OP-6.

### OP-19 — Eternal inflation, the multiverse, and the measure problem
**Area:** Cosmology / foundations. **Tag:** `[SPECULATIVE]`. **Kind:** borders the limits of empirical science.

**Statement.** If inflation is generically eternal — quantum fluctuations keep some regions inflating, nucleating infinitely many pocket universes — then computing the probability of any observation requires regulating ratios of infinite quantities. Different regularization schemes ("measures": proper-time, scale-factor, causal-patch, etc.) yield different and sometimes pathological predictions (Boltzmann brains, the youngness paradox), so there is no agreed way to extract well-defined probabilities.

**Why it is hard.** The infinities are physical to the scenario, not a calculational artifact, and no principle selects a unique pathology-free measure. If observers are spread across an unobservable multiverse, standard inference — and even the testability of the proposal — is challenged. It is entangled with anthropic explanations of fine-tuning (e.g. $\Lambda$, OP-3) and with the string landscape, neither independently confirmed.

**Leading approaches.** Proposed measures (causal-patch / census-taker, scale-factor cutoff, stationary measure) tested against Boltzmann-brain domination; string-landscape vacuum ensembles; anthropic reasoning constrained by predictivity; debate over whether the multiverse is falsifiable.

**Cross-links.** [domains/cosmology.md](domains/cosmology.md), [EPISTEMICS.md](EPISTEMICS.md), OP-3, OP-17, OP-35 (Boltzmann brains relate to the arrow of time).

### OP-30 — Averaging / backreaction: emergence of the smooth FLRW background
**Area:** Cosmology / GR. **Tag:** `[CONTESTED]`. **Kind:** unsolved-but-consistent (magnitude debated).

**Statement.** How does the smooth FLRW background emerge from, and how is it affected by, the inhomogeneous real universe? Because GR is nonlinear, the average of the inhomogeneous metric need not satisfy the Einstein equations of the averaged matter (the "fitting problem"; Buchert's averaged equations).

**Why it is hard.** A rigorous, gauge-invariant averaging scheme for tensorial quantities on a Lorentzian manifold is itself nontrivial, and estimating the effective backreaction term requires controlling structure across scales. Most experts judge backreaction far too small to mimic dark energy `[INFERENCE]`, but a rigorous derivation of the averaged dynamics is incomplete and the magnitude is debated.

**Leading approaches.** Buchert averaging formalism; relativistic $N$-body / numerical-relativity cosmology; perturbative estimates of the backreaction parameter.

**Cross-links.** [domains/cosmology.md](domains/cosmology.md), [domains/general-relativity.md](domains/general-relativity.md), OP-6.

### OP-31 — Singularities, cosmic censorship, and the fate of the Big Bang / black-hole interiors
**Area:** General relativity. **Tag:** `[OPEN]`/`[CONTESTED]`. **Kind:** unsolved-but-consistent (some fine-tuned counterexamples known).

**Statement.** The Penrose–Hawking singularity theorems guarantee geodesic incompleteness under reasonable energy/causality conditions but say nothing about *resolution*. Whether quantum gravity replaces the Big Bang and black-hole singularities with a bounce or something else is unknown. Separately, the weak and strong cosmic-censorship conjectures (no generic naked singularities; deterministic evolution) lack a general proof, and fine-tuned counterexamples (critical collapse; certain charged/rotating interiors; recent $\Lambda<0$ and near-extremal results) exist, though censorship is widely believed to hold "generically".

**Why it is hard.** Singularity resolution is a quantum-gravity question with no testable handle (OP-1). Cosmic censorship is a hard global problem in nonlinear PDE / Lorentzian geometry; a precise, generically-true formulation is still being sought, and counterexamples show the naive statements are false.

**Leading approaches.** Quantum-gravity models of bounces (LQC, string-theoretic); rigorous study of strong censorship in Kerr–Newman–(A)dS interiors; critical-collapse analysis; the nonlinear-stability program (OP-13 family).

**Cross-links.** [domains/general-relativity.md](domains/general-relativity.md), [domains/cosmology.md](domains/cosmology.md), OP-1, OP-10.

---

## D. Particle physics & naturalness

### OP-4 — The hierarchy / naturalness problem
**Area:** Particle physics / Standard Model. **Tag:** `[CONTESTED]`. **Kind:** aesthetic/naturalness expectation, *not* a logical inconsistency or domain breakdown.

**Statement.** The Higgs mass-squared receives radiative corrections quadratically sensitive to the cutoff, $\delta m_h^2 \sim \Lambda^2/(16\pi^2)$. With $\Lambda$ near $M_{\rm Pl}$, obtaining $m_h = 125\ \mathrm{GeV}$ requires a cancellation between bare term and corrections fine-tuned to roughly one part in $10^{34}$. Equivalently: why is the electroweak scale ($\sim 246\ \mathrm{GeV}$) so far below any high fundamental cutoff, when no symmetry protects an elementary scalar's mass?

**Why it is hard.** The Standard Model is consistent and predictive for any value (the cutoff sensitivity is absorbed into a counterterm), so the "problem" is a naturalness expectation — which is itself why it is contested. The simplest natural solutions (low-scale SUSY, technicolor, lightest composite-Higgs scenarios) predicted new particles near the TeV scale that the LHC has not found, intensifying debate over whether naturalness is the right guiding prior at all.

**Leading approaches.** Supersymmetry (cancels the quadratic divergence; simplest natural versions disfavored by LHC); composite / pseudo-Goldstone Higgs and technicolor; extra dimensions (large or warped) lowering the fundamental scale; anthropic/landscape and relaxion (cosmological relaxation); rejecting naturalness as a valid prior.

**Cross-links.** [domains/particle-physics.md](domains/particle-physics.md), [ASSUMPTIONS_LEDGER.md](ASSUMPTIONS_LEDGER.md), [GAPS_AND_CONTRADICTIONS.md](GAPS_AND_CONTRADICTIONS.md), OP-3, OP-14.

### OP-7 — Baryon asymmetry of the universe (baryogenesis)
**Area:** Particle physics / early-universe cosmology. **Tag:** `[OPEN]` (the asymmetry and SM's inability to produce it are `[ESTABLISHED]`). **Kind:** established incompleteness; mechanism unknown.

**Statement.** The observed baryon-to-photon ratio ($\eta \sim 6\times10^{-10}$) cannot be generated by the Standard Model. Although the SM in principle satisfies Sakharov's three conditions — baryon-number violation (nonperturbative electroweak sphalerons), C and CP violation, and departure from equilibrium — the CKM CP violation (Jarlskog invariant $J \sim 3\times10^{-5}$) is far too small, and for $m_h = 125\ \mathrm{GeV}$ the electroweak transition is a smooth crossover, not first-order, so no net asymmetry survives.

**Why it is hard.** It requires beyond-SM physics: a new CP-violation source and/or new out-of-equilibrium dynamics, operating in the early universe (pre-BBN, $t < 1\ \mathrm{s}$) with no direct empirical probes. Leading mechanisms tie the asymmetry to very high mass scales (heavy Majorana neutrinos) hard to test directly.

**Leading approaches.** Leptogenesis via heavy Majorana neutrino decays (linked to the seesaw, OP-9); electroweak baryogenesis with an extended Higgs sector (first-order transition + new CP violation); Affleck–Dine baryogenesis; GUT baryogenesis; searches for new CP violation (electric dipole moments; leptonic phase $\delta_{CP}$).

**Cross-links.** [domains/particle-physics.md](domains/particle-physics.md), [domains/cosmology.md](domains/cosmology.md), OP-9, OP-20.

### OP-8 — The strong-CP problem
**Area:** Particle physics / QCD. **Tag:** `[OPEN]`. **Kind:** fine-tuning puzzle pointing to missing physics, not an inconsistency.

**Statement.** The QCD Lagrangian admits a CP-violating term $\bar\theta\,\dfrac{g_s^2}{32\pi^2}G^{a}_{\mu\nu}\tilde G^{a\,\mu\nu}$. Naturalness expects $\bar\theta \sim \mathcal O(1)$, but the bound on the neutron electric dipole moment forces $\bar\theta \lesssim 10^{-10}$. Nothing within the SM explains why this physical, CP-violating angle is so extraordinarily small.

**Why it is hard.** $\bar\theta$ is the sum of the bare QCD angle and the phase of the quark mass matrix, mixing strong and electroweak sectors; no SM symmetry sets it to zero (a massless up quark would, but is disfavored by lattice QCD). The theory is consistent for any $\bar\theta$. The most elegant fix predicts a new light particle (the axion) not yet detected.

**Leading approaches.** Peccei–Quinn symmetry with a dynamical axion (also a dark-matter candidate, OP-5; searched by ADMX and others); massless-up-quark solution (disfavored by lattice); Nelson–Barr / spontaneous-CP-violation models; anthropic or contingent-smallness arguments.

**Cross-links.** [domains/particle-physics.md](domains/particle-physics.md), OP-5, OP-12.

### OP-9 — Neutrino mass mechanism: Dirac vs Majorana
**Area:** Particle physics / neutrino physics. **Tag:** `[OPEN]` (nonzero mass `[ESTABLISHED]`). **Kind:** unsolved-but-consistent; the unique confirmed BSM signal.

**Statement.** Neutrino oscillations prove nonzero mass and mixing (PMNS matrix) — the only laboratory-confirmed breakdown of the minimal SM. It is unknown whether masses are Dirac (requiring right-handed neutrinos and conserved lepton number, with tiny Yukawas) or Majorana (the neutrino is its own antiparticle, lepton number violated, lightness explained by the seesaw). The absolute scale, the ordering (normal vs inverted), and the leptonic CP phase are not fully determined.

**Why it is hard.** The decisive Majorana signature — neutrinoless double-beta decay — has not been observed, and its rate, if Majorana, may lie below current sensitivity. Majorana masses are favored theoretically (seesaw naturalness; link to leptogenesis, OP-7) but not established. The absolute scale requires combining beta-decay endpoint, cosmology, and oscillation data, each with its own systematics.

**Leading approaches.** Neutrinoless double-beta-decay experiments (the key Majorana test); seesaw mechanisms (types I/II/III); the Weinberg dimension-5 operator as leading effective description; beta-decay endpoint (KATRIN-class) and cosmological $\sum m_\nu$ bounds; long-baseline oscillation experiments for ordering and $\delta_{CP}$.

**Cross-links.** [domains/particle-physics.md](domains/particle-physics.md), OP-7, OP-14.

### OP-14 — Origin of the Standard Model parameters (the flavor puzzle)
**Area:** Particle physics / Standard Model. **Tag:** `[OPEN]`. **Kind:** unsolved-but-consistent; the SM's most "descriptive, not explanatory" feature.

**Statement.** The SM has $\sim 19$ free parameters ($\sim 26$–$28$ with neutrino masses/mixings) fixed only by experiment: three gauge couplings, the Higgs mass and vacuum expectation value, nine charged-fermion masses, the CKM (and PMNS) mixing angles and CP phases, and the QCD $\theta$ angle. The framework offers no explanation for the enormous hierarchies (top/electron Yukawa $\sim 10^5$), why there are exactly three generations, the specific gauge group $SU(3)\times SU(2)\times U(1)$, or charge quantization.

**Why it is hard.** The SM accommodates these values but is purely descriptive about them. The patterns (mass hierarchies; near-diagonal CKM vs large PMNS angles) strongly suggest an underlying flavor theory, but no proposed mechanism is confirmed and the relevant scales may be far above reach. Some structure is fixed by quantum consistency (anomaly cancellation fixes hypercharges), and gauge unification hints at a GUT embedding (OP-20), but the deep origin is unknown and may be partly contingent/anthropic.

**Leading approaches.** Grand unified theories (SU(5), SO(10), Pati–Salam) explaining charge quantization and near-unification; flavor symmetries and the Froggatt–Nielsen mechanism; extra-dimensional wavefunction localization (split fermions); anthropic/landscape selection; SMEFT parametrization to probe deviations.

**Cross-links.** [domains/particle-physics.md](domains/particle-physics.md), [CONSTANTS_AND_SCALES.md](CONSTANTS_AND_SCALES.md), [ASSUMPTIONS_LEDGER.md](ASSUMPTIONS_LEDGER.md), OP-9, OP-20.

### OP-20 — Gauge-coupling unification, proton decay, and grand unification
**Area:** Particle physics / BSM. **Tag:** `[OPEN]`/`[INFERENCE]`. **Kind:** unsolved-but-consistent; an inference, not established fact.

**Statement.** The three SM gauge couplings, run to high energies, nearly meet near $\sim 10^{16}\ \mathrm{GeV}$ (more precisely in supersymmetric extensions), suggesting an underlying grand unified gauge group (SU(5), SO(10), Pati–Salam) explaining charge quantization and the fermion-representation pattern. Such theories generically predict proton decay, unobserved to date (partial-lifetime bounds exceed $\sim 10^{34}\ \mathrm{yr}$), excluding minimal $SU(5)$ and constraining the rest.

**Why it is hard.** The unification scale is $\sim 13$ orders of magnitude above collider energies, so the primary handle is the rare-decay rate of the proton, requiring enormous detectors and exposure. Precise unification depends on the unknown particle content between the electroweak and GUT scales (e.g. whether SUSY exists), so the plain-SM near-miss is suggestive but inconclusive. Whether nature is grand-unified remains an inference.

**Leading approaches.** Large-volume proton-decay searches (water-Cherenkov, liquid-argon); supersymmetric GUTs improving unification; SO(10) accommodating right-handed neutrinos and the seesaw (OP-9); precision running and threshold-correction analyses.

**Cross-links.** [domains/particle-physics.md](domains/particle-physics.md), [UNIFICATION_LANDSCAPE.md](UNIFICATION_LANDSCAPE.md), OP-9, OP-14.

### OP-21 — Persistent BSM experimental anomalies (muon $g-2$, flavor)
**Area:** Particle physics (experiment–theory). **Tag:** `[CONTESTED]`/`[OPEN]`. **Kind:** watched anomalies, not established breakdowns.

**Statement.** Several measured quantities sit in tension with SM predictions without reaching unambiguous discovery significance. **Update (2025):** the muon anomalous magnetic moment $a_\mu=(g-2)/2$ — long the flagship anomaly — is now **largely SM-consistent**: the Theory Initiative white paper WP2025 (arXiv:2505.21476) adopts a lattice-QCD hadronic-vacuum-polarization average, giving $a_\mu^{\rm SM}=116\,592\,033(62)\times10^{-11}$ and $\Delta a_\mu=38(63)\times10^{-11}$ (no tension); the residual issue is an *internal* lattice-vs-$e^+e^-$($R$-ratio, CMD-3) HVP discrepancy, a theory/systematics question rather than a BSM signal [ESTABLISHED, 2025]. Certain $B$-meson decay observables (some $b\to s\mu\mu$ angular and branching measurements) remain in mild tension, while the lepton-universality ratios $R_K$, $R_{K^*}$ largely moved back toward SM consistency with updated data.

**Why it is hard.** For $g-2$, the dominant theory uncertainty is the hadronic vacuum polarization, where the long-standing data-driven ($e^+e^-$) evaluation and recent lattice-QCD results (e.g. BMW) *disagree* — so the very size of any SM deviation is contested and may be a theory/systematics issue rather than new physics. For flavor observables, hadronic form-factor uncertainties and the statistical evolution of measurements complicate interpretation. None has crossed the threshold of a clean, corroborated BSM discovery.

**Leading approaches.** Improved $g-2$ measurement (Fermilab) and reconciliation of lattice vs data-driven HVP; updated LHCb and Belle II flavor measurements and global fits; BSM model-building (leptoquarks, $Z'$) tailored to surviving anomalies; SMEFT global analyses.

**Cross-links.** [domains/particle-physics.md](domains/particle-physics.md), [GAPS_AND_CONTRADICTIONS.md](GAPS_AND_CONTRADICTIONS.md), [FINDINGS.md](FINDINGS.md).

### OP-22 — (Meta)stability of the electroweak vacuum
**Area:** Particle physics / Standard Model. **Tag:** `[CONTESTED]`. **Kind:** unresolved structural question, *not* an inconsistency.

**Statement.** RG running of the Higgs quartic coupling $\lambda$, using the measured top-quark and Higgs masses, drives $\lambda$ slightly negative at high energies (around $\sim 10^{10}$–$10^{11}\ \mathrm{GeV}$), implying the electroweak vacuum is metastable (extremely long-lived) rather than absolutely stable. Whether it is stable, metastable, or unstable depends sensitively on inputs and possible new physics.

**Why it is hard.** The verdict is exquisitely sensitive to the precise top-quark mass and strong coupling $\alpha_s$, whose central values place the SM near the stability/metastability boundary, so the numbers are contested. The high-scale extrapolation assumes no new physics over many decades in energy; any BSM field coupling to the Higgs can change the result. A metastable vacuum with lifetime vastly exceeding the age of the universe is empirically fine — so this is a structural question, not a paradox.

**Leading approaches.** Precision top / Higgs mass and $\alpha_s$ feeding higher-order RG; two- and three-loop effective-potential and tunneling-rate computations; BSM scalars that stabilize the potential; cosmological consistency during inflation/reheating.

**Cross-links.** [domains/particle-physics.md](domains/particle-physics.md), [CONSTANTS_AND_SCALES.md](CONSTANTS_AND_SCALES.md), OP-4, OP-17.

### OP-32 — Confinement in QCD (analytic proof) & the mass gap
**Area:** Particle physics / QCD. **Tag:** `[OPEN]` (empirically certain; analytic proof missing). **Kind:** internal hard problem, not an inconsistency. *Closely tied to OP-11/OP-36.*

**Statement.** QCD is believed to confine color: quarks and gluons do not appear as free asymptotic states, only color-singlet hadrons do, and the static quark–antiquark potential rises linearly at large separation, $V(r)\sim \sigma r$. This is overwhelmingly supported by experiment and lattice QCD, but there is no analytic, first-principles continuum proof of confinement (tied to the Yang–Mills mass-gap problem, OP-11).

**Why it is hard.** Confinement is intrinsically nonperturbative and strong-coupling: perturbation theory in $\alpha_s$ is at best asymptotic and breaks down below $\sim 1\ \mathrm{GeV}$, where the quark–gluon variables are the wrong description. The mechanism (dual superconductivity / monopole condensation, center vortices) is not rigorously established, the continuum limit has not been proven to exist with a gap, and there is no analytic order parameter universally valid for full QCD with dynamical quarks.

**Leading approaches.** Lattice QCD (linear potential, string tension, hadron spectrum); dual-superconductor / monopole-condensation and center-vortex pictures; Schwinger–Dyson / functional-RG studies of gluon and ghost propagators; connection to the Clay Yang–Mills program (OP-11).

**Cross-links.** [domains/particle-physics.md](domains/particle-physics.md), [domains/quantum-field-theory.md](domains/quantum-field-theory.md), OP-11, OP-36.

---

## E. Arrow of time & statistical foundations

### OP-10 — The arrow of time and the low-entropy past (the Past Hypothesis)
**Area:** Statistical mechanics / thermodynamics / cosmology. **Tag:** `[OPEN]`. **Kind:** unsolved-but-consistent; requires a time-asymmetric boundary condition.

**Statement.** Microscopic dynamics are (CPT) time-symmetric, so the thermodynamic arrow — entropy increase, the second law — cannot follow from the dynamical laws alone; it requires a special, extraordinarily low-entropy past boundary condition (the *Past Hypothesis*). Crucially, the early universe's near-perfect thermal uniformity is *high* thermal entropy but *very low gravitational* entropy (smoothness is special when gravity dominates). Why the initial state was so special is unexplained.

**Why it is hard.** Reversible mechanics plus monotone entropy increase is impossible without a time-asymmetric input (the H-theorem smuggles in the Stosszahlansatz; Loschmidt's reversibility and Zermelo's recurrence objections). The needed low-entropy past is a *posited* boundary condition, not a derivation, and its origin pushes into cosmology and quantum gravity (e.g. quantifying gravitational entropy via the Weyl curvature). Inflation arguably relocates rather than removes the puzzle (OP-17).

**Leading approaches.** Boltzmann coarse-graining + typicality + the Past Hypothesis as an explicit posit; Penrose's Weyl-curvature hypothesis (near-zero initial Weyl tensor) `[SPECULATIVE]`; inflationary smoothing `[CONTESTED]` as a complete resolution; proposals tying the arrow to cosmological initial conditions / quantum gravity.

**Cross-links.** [domains/statistical-mechanics.md](domains/statistical-mechanics.md), [domains/thermodynamics.md](domains/thermodynamics.md), [domains/cosmology.md](domains/cosmology.md), OP-16, OP-17, OP-33.

### OP-16 — Foundations of statistical mechanics: why ensemble averages predict individual systems, and the origin of thermalization
**Area:** Statistical mechanics / foundations. **Tag:** `[OPEN]`/`[CONTESTED]`. **Kind:** unsolved-but-consistent (the practice is undisputed; the principled justification is not).

**Statement.** There is no single, universally accepted first-principles derivation of why equilibrium ensemble averages correctly predict the behavior of an individual macroscopic system, nor a general proof that realistic isolated systems thermalize. The microcanonical equal-a-priori-probability postulate and the canonical $e^{-\beta H}$ form work spectacularly but rest on assumptions (ergodicity, typicality, or — quantum-mechanically — the Eigenstate Thermalization Hypothesis, ETH) that are not theorems for generic interacting Hamiltonians.

**Why it is hard.** Strict ergodicity is neither necessary nor generic (KAM tori survive in typical Hamiltonian systems, OP-39), so justification shifts to high-dimensional typicality / measure concentration, which lacks a fully general proof. Quantum-mechanically, ETH (Deutsch, Srednicki) is strongly supported numerically and by random-matrix arguments but is unproven for any realistic interacting model and provably fails for integrable systems (which relax to a Generalized Gibbs Ensemble) and many-body-localized systems (which never thermalize, OP-34). Deriving hydrodynamics/transport rigorously from reversible microdynamics (Hilbert's sixth problem) is also open (OP-35).

**Leading approaches.** Ergodic theory, mixing, dynamical-systems methods; typicality / canonical-typicality and concentration-of-measure; ETH for closed quantum systems; GGE for integrable systems; study of MBL and prethermalization; large-deviation theory and rigorous hydrodynamic-limit programs.

**Cross-links.** [domains/statistical-mechanics.md](domains/statistical-mechanics.md), [domains/thermodynamics.md](domains/thermodynamics.md), OP-10, OP-34, OP-35, OP-39.

### OP-33 — Statistical-mechanical microstates of the Bekenstein–Hawking entropy
**Area:** Thermodynamics / quantum gravity. **Tag:** `[OPEN]` (counted `[ESTABLISHED]` for special cases). **Kind:** unsolved-but-consistent.

**Statement.** What microstates does the Bekenstein–Hawking entropy $S_{BH}=k_B c^3 A/(4 G\hbar)$ count for a realistic (e.g. Schwarzschild) black hole? String theory reproduces $S = A/4$ by counting D-brane microstates for certain supersymmetric/extremal black holes (Strominger–Vafa 1996) `[ESTABLISHED within that framework]`, and AdS/CFT gives a holographic account `[INFERENCE]`, but a universally accepted microscopic derivation for generic astrophysical black holes is lacking.

**Why it is hard.** The controlled microstate counts exploit supersymmetry/extremality and BPS protection that real astrophysical black holes lack; extending to non-extremal, dynamically-formed, asymptotically-flat black holes leaves the strong-gravity regime where the correct degrees of freedom are unknown (OP-1, OP-15).

**Leading approaches.** D-brane microstate counting (extremal/BPS); fuzzballs; AdS/CFT and holographic entropy; loop-quantum-gravity horizon-state counting; the crossed-product / generalized-entropy program (OP-37).

**Cross-links.** [domains/thermodynamics.md](domains/thermodynamics.md), [domains/information-theory.md](domains/information-theory.md), OP-15, OP-23, OP-37.

### OP-34 — Rigorous ETH and the boundary between thermalizing and non-thermalizing systems
**Area:** Statistical mechanics. **Tag:** `[OPEN]` (MBL stability `[CONTESTED]`). **Kind:** unsolved-but-consistent.

**Statement.** Prove ETH for a physically realistic non-integrable Hamiltonian, and sharply characterize which systems thermalize. ETH is strongly supported numerically and by random-matrix arguments but unproven for any realistic interacting model. The boundary between thermalizing, integrable (Generalized Gibbs Ensemble), prethermal, quantum-many-body-scarred, and many-body-localized (MBL) behavior — and even whether MBL is a true stable phase in the thermodynamic limit in $d\ge 2$ — is under active investigation.

**Why it is hard.** ETH is a statement about *all* eigenstates of a generic many-body Hamiltonian, which is analytically intractable; numerics reach only small sizes. MBL stability hinges on rare-region (avalanche) effects that are exponentially hard to probe numerically, leaving the asymptotic phase structure genuinely contested.

**Leading approaches.** Numerical diagonalization and tensor-network studies; random-matrix and ETH ansatz analyses; avalanche-instability theory for MBL; rigorous results in special models.

**Cross-links.** [domains/statistical-mechanics.md](domains/statistical-mechanics.md), [domains/quantum-mechanics.md](domains/quantum-mechanics.md), OP-16.

### OP-35 — Nonequilibrium foundations: thermalization derivations, transport, and a far-from-equilibrium variational principle
**Area:** Statistical mechanics / thermodynamics. **Tag:** `[OPEN]`. **Kind:** unsolved-but-consistent; major mathematical-physics gap.

**Statement.** Two linked open problems: (i) there is no general, predictive variational/ensemble principle for nonequilibrium *steady states* (an analogue of MaxEnt far from equilibrium); proposed minimum/maximum entropy-production principles are of limited or contested validity. (ii) Deriving hydrodynamic (Navier–Stokes / Boltzmann) and transport equations *rigorously* from microscopic reversible dynamics for interacting systems remains open: Lanford's theorem derives the Boltzmann equation only for short times in the dilute limit, and a full rigorous hydrodynamic limit with finite transport coefficients is unproven (related to Hilbert's sixth problem).

**Why it is hard.** Far-from-equilibrium systems lack a universal organizing principle comparable to equilibrium MaxEnt; the rigorous derivation of irreversible macroscopic equations from reversible microdynamics confronts the same time-asymmetry issue as OP-10, plus formidable control of long-time, many-body correlations.

**Leading approaches.** Large-deviation theory; Gallavotti–Cohen fluctuation theorem; macroscopic fluctuation theory; stochastic thermodynamics (rigorous for Markov dynamics); Lanford-type and hydrodynamic-limit programs.

**Cross-links.** [domains/statistical-mechanics.md](domains/statistical-mechanics.md), [domains/thermodynamics.md](domains/thermodynamics.md), OP-10, OP-16, OP-12.

---

## F. Mathematical foundations of QFT & dynamics

### OP-11 — Rigorous non-perturbative foundation of interacting QFT; Yang–Mills mass gap (Clay Millennium Problem)
**Area:** Mathematical physics / QFT foundations. **Tag:** `[OPEN]`. **Kind:** unsolved-but-consistent; flagship rigour gap.

**Statement.** No physically realistic interacting QFT in $4$ spacetime dimensions (Yang–Mills, full QCD, the electroweak theory) has been constructed to full mathematical rigour satisfying the Wightman / Osterwalder–Schrader axioms. The flagship instance is the Clay problem: prove that $4$D quantum Yang–Mills theory exists as a well-defined QFT and has a mass gap $\Delta > 0$ (spectrum in $\{0\}\cup[\Delta,\infty)$).

**Why it is hard.** The Lorentzian path-integral "measure" $\mathcal D\phi\, e^{iS}$ is not a genuine measure (no $\sigma$-additive translation-invariant measure exists in infinite dimensions; $e^{iS}$ is not absolutely convergent); rigorous control requires Euclidean reflection-positivity and analytic continuation. Constructive QFT succeeds only in $d=2,3$ (super-renormalizable models). Perturbation series are at best asymptotic; $\phi^4_4$ is provably trivial and QED has a Landau pole, showing some renormalizable theories survive only as cutoff effective theories. Confinement and the mass gap are seen on the lattice and physically certain (OP-32), but a continuum existence-and-gap proof is missing. Local algebras are type $\mathrm{III}_1$ factors, so naive subsystem/tensor-factor intuition fails (OP-36).

**Leading approaches.** Constructive QFT (rigorous $d=2,3$); algebraic / axiomatic QFT (Wightman, Haag–Kastler nets, Osterwalder–Schrader reconstruction); lattice gauge theory (strong numerical evidence for gap and confinement); conformal bootstrap for fixed-point theories; asymptotic-safety / functional-RG methods.

**Cross-links.** [domains/quantum-field-theory.md](domains/quantum-field-theory.md), [domains/mathematics.md](domains/mathematics.md), OP-32, OP-36, OP-37.

### OP-12 — Turbulence and global regularity of Navier–Stokes / Euler
**Area:** Classical mechanics / fluid dynamics / mathematical physics. **Tag:** `[OPEN]`. **Kind:** unsolved-but-consistent; Clay Millennium Problem.

**Statement.** There is no complete predictive theory of fully developed turbulence — the statistical and dynamical behavior of high-Reynolds-number flow, including the energy cascade, intermittency, and anomalous scaling of structure functions (corrections to Kolmogorov 1941 scaling). Relatedly, it is unproven whether smooth solutions of the 3D incompressible Navier–Stokes equations exist globally and stay regular for all time, or can develop finite-time singularities (a Clay problem); 3D Euler blow-up is similarly open.

**Why it is hard.** Turbulence is strongly nonlinear, multi-scale, far-from-equilibrium, with no small parameter and no separation into tractable modes; the nonlinear advection term couples all scales (the *closure problem*: every moment equation depends on higher moments). Finite-dimensional theorems (KAM, Liouville–Arnold) do not transfer to the infinite-dimensional PDE setting, and the regularity question is a genuine open problem in nonlinear PDE analysis. No first-principles derivation of the observed intermittency exponents exists.

**Leading approaches.** Kolmogorov 1941 phenomenology and refined-similarity / multifractal models; direct numerical simulation and large-eddy simulation; renormalization-group / field-theoretic methods; rigorous PDE analysis (partial regularity à la Caffarelli–Kohn–Nirenberg; conditional Beale–Kato–Majda criteria); Onsager's conjecture and convex-integration results for Euler.

**Cross-links.** [domains/classical-mechanics.md](domains/classical-mechanics.md), [domains/mathematics.md](domains/mathematics.md), OP-35.

### OP-36 — Local algebras, type III factors, and entanglement entropy in QFT/gravity
**Area:** Mathematical physics / QFT foundations / information. **Tag:** `[OPEN]`. **Kind:** unsolved-but-consistent (conceptual + technical).

**Statement.** What is the right notion of local subsystems and entanglement entropy in QFT, and in gravity? The entanglement entropy of a region is UV-divergent, and the local von Neumann algebras of relativistic QFT are type $\mathrm{III}_1$ — there are no density matrices and no clean tensor factorization across a boundary, so the naive "entanglement entropy of a region" is ill-defined. With gravity the question is sharper still (it underlies "spacetime from entanglement", OP-23/OP-24).

**Why it is hard.** Type III algebras lack a trace and minimal projections; defining finite physical quantities (mutual information, relative entropy, modular Hamiltonians via Tomita–Takesaki theory) is mathematically clean but a complete physical picture — especially the area law and holographic finiteness with dynamical gravity — is still developing.

**Leading approaches.** Tomita–Takesaki modular theory; relative-entropy and mutual-information regularizations; the Bekenstein/area-law and holographic-entanglement programs; crossed-product constructions (OP-37).

**Cross-links.** [domains/quantum-field-theory.md](domains/quantum-field-theory.md), [domains/information-theory.md](domains/information-theory.md), [domains/mathematics.md](domains/mathematics.md), OP-11, OP-23, OP-37.

### OP-37 — A well-defined entanglement entropy for (quantum) gravity
**Area:** Quantum gravity / information / mathematical physics. **Tag:** `[OPEN]`. **Kind:** unsolved-but-consistent.

**Statement.** Given the type III algebras of QFT (OP-36) and the absence of a fundamental tensor factorization, what is the correct definition of entanglement entropy *in gravity*? Recent crossed-product and "algebra of observables in gravity" constructions (large-$N$, with gravitational dressing yielding type II algebras and well-defined traces) are promising but new and incomplete; the conceptual status of "the entanglement entropy of a region" in full quantum gravity is unsettled.

**Why it is hard.** Promoting the boundary/observer to a dynamical (gravitating) part of the system changes the algebra type (III $\to$ II) and renders certain entropies finite, but a background-independent, non-perturbative formulation valid beyond the semiclassical large-$N$ regime does not exist.

**Leading approaches.** Crossed-product / modular-flow constructions; generalized entropy $S_{\rm gen}$ and quantum extremal surfaces; relating area-extensive (holographic, finite) to volume-extensive (local-QFT) degree-of-freedom counts (species bound, holographic finiteness).

**Cross-links.** [domains/information-theory.md](domains/information-theory.md), [domains/quantum-field-theory.md](domains/quantum-field-theory.md), OP-15, OP-23, OP-33, OP-36.

---

## G. Other

### OP-13 — Classical-mechanics internal open problems (N-body singularities, Arnold diffusion, Norton's dome, inertia/Mach)
**Area:** Classical mechanics. **Tag:** mixed (see below). **Kind:** mostly unsolved-but-consistent; some `[CONTESTED]`.

**Statement & status (a bundle of genuinely internal classical problems).**
- **Painlevé's conjecture / N-body singularities** `[OPEN]`: non-collision singularities exist (Xia 1992 for $N\ge 5$; Gerver), but the complete classification, the $N=4$ case, and whether singular initial data has measure zero are unresolved.
- **Arnold diffusion** `[OPEN]`/partially resolved: for $n\ge 3$ degrees of freedom KAM tori do not separate phase space, so trajectories can drift across resonance webs. Existence is established in examples and some generic settings (Mather; Cheng–Yan), but a complete theory of its prevalence and speed is missing.
- **Nonlinear stability of physical GR solutions** `[OPEN]`/partial: stability of Minkowski space is `[ESTABLISHED]` (Christodoulou–Klainerman 1993), with strong recent progress on (sub-extremal) Kerr black-hole stability; full nonlinear Kerr stability and generic dynamical collapse are still being established. *(Listed here for the dynamical-systems content; physically it belongs with OP-31.)*
- **Norton's dome / indeterminism in classical mechanics** `[CONTESTED]`: whether non-Lipschitz forces and idealized boundary conditions model physical reality, or are unphysical idealizations, is a live philosophy-of-physics debate.
- **Origin of inertia / Mach's principle** `[OPEN]`/`[CONTESTED]`: why inertial frames coincide with the rest frame of distant matter, and whether inertia is relational, is a foundational question mechanics raises but cannot answer internally (GR's frame-dragging is only partially Machian).

**Why they are hard.** The N-body and Arnold-diffusion problems are infinite-codimension / high-dimensional dynamical-systems questions with no general technique; the PDE-stability problems are nonlinear and global; the indeterminism and Mach questions are partly conceptual and turn on what counts as an admissible physical model.

**Cross-links.** [domains/classical-mechanics.md](domains/classical-mechanics.md), [domains/general-relativity.md](domains/general-relativity.md), [domains/mathematics.md](domains/mathematics.md), OP-12, OP-31, OP-10.

### OP-38 — High-temperature (unconventional) superconductivity
**Area:** Condensed matter / many-body physics. **Tag:** `[OPEN]`. **Kind:** unsolved-but-consistent; an emergent-physics hard problem.

**Statement.** There is no accepted, predictive microscopic theory of the mechanism behind high-$T_c$ superconductivity in the cuprates (and related unconventional superconductors), where pairing occurs far above what conventional phonon-mediated BCS theory plausibly explains, with $d$-wave order parameters and an anomalous "strange-metal" / pseudogap normal state.

**Why it is hard.** These are strongly correlated electron systems with Coulomb interaction comparable to the kinetic energy — no small parameter for a controlled perturbative (BCS-style) treatment. The relevant low-energy models (e.g. the 2D Hubbard model) are not exactly solvable and are hard numerically (the fermion sign problem obstructs quantum Monte Carlo). The intertwining of superconductivity with antiferromagnetism, charge order, and the pseudogap, plus the non-Fermi-liquid strange-metal phase, means the *normal* state itself is not understood.

**Leading approaches.** Hubbard / $t$–$J$ studies via DMFT, DMRG, tensor networks; spin-fluctuation / resonating-valence-bond pairing theories; quantum-critical-point and strange-metal scenarios (including holographic / AdS-CMT models); cluster and embedding methods to partially bypass the sign problem; materials discovery (high-pressure hydrides as a separate, more BCS-like high-$T_c$ route).

**Cross-links.** [domains/statistical-mechanics.md](domains/statistical-mechanics.md), [domains/quantum-mechanics.md](domains/quantum-mechanics.md), OP-16.

### OP-39 — Foundational meta-problems: classical limit / quantum chaos, the glass transition, entropy definitions, hypercomputation, and "unreasonable effectiveness"
**Area:** Cross-domain foundations. **Tag:** mixed (see below). **Kind:** mostly unsolved-but-consistent; some `[CONTESTED]`; one explicitly meta/philosophical.

**Statement & status (a bundle of distinct foundational meta-problems, kept together to avoid ID inflation).**
- **Rigorous classical limit & quantum chaos** `[OPEN]`/`[CONTESTED]`: how definite classical trajectories and the macroscopic absence of superpositions emerge (decoherence + the measurement problem, OP-2) straddles classical and quantum; the $\hbar\to 0$ limit is singular and nonuniform (Ehrenfest-time breakdown), and quantum chaos lacks a complete theory.
- **First-principles theory of the glass transition** `[OPEN]`/`[CONTESTED]`: whether there is an underlying ideal thermodynamic transition (Kauzmann temperature; random first-order transition theory from the mean-field replica/cavity solution) or the glass transition is purely kinetic is disputed; mean-field (infinite-$d$) results are rigorous but their $d=3$ relevance is contested.
- **Boltzmann (surface) vs Gibbs (volume) entropy and negative temperatures** `[CONTESTED]`: which entropy is the consistent thermodynamic entropy for small/bounded-spectrum systems (the Dunkel–Hilbert debate, post-2013) is unresolved and matters operationally at the nanoscale.
- **Physical Church–Turing thesis / hypercomputation** `[OPEN]`/`[CONTESTED]`: whether Malament–Hogarth spacetimes, real-number/analog computation, or exotic GR setups permit hypercomputation, or a physical Church–Turing thesis holds as a law of nature, has no consensus and no decisive theorem either way; all proposed loopholes face severe physical-plausibility objections.
- **Foundations of quantum thermodynamics** `[OPEN]`: which operational definition of "work" is physically privileged at the quantum scale, and how coherence/entanglement function as thermodynamic resources, is unresolved (resource-theoretic and two-point-measurement frameworks are internally consistent but not uniquely privileged).
- **The "unreasonable effectiveness of mathematics" (Wigner)** `[OPEN]`/philosophical: a genuine unresolved meta-question, not a conjecture with a truth value; partial deflationary accounts (selection of effective math; symmetry / representation-theoretic constraints; anthropic/cognitive explanations) exist but none is decisive. **Flag as a question, never as settled doctrine.**

**Why they are hard.** Each sits at a boundary where a domain's tools run out: the classical limit needs the unresolved measurement problem; the glass and entropy debates concern finite-size / non-thermodynamic-limit regimes where standard ensembles are ambiguous; hypercomputation and Wigner's puzzle are partly meta-physical and resist formalization as testable claims.

**Cross-links.** [domains/classical-mechanics.md](domains/classical-mechanics.md), [domains/statistical-mechanics.md](domains/statistical-mechanics.md), [domains/thermodynamics.md](domains/thermodynamics.md), [domains/information-theory.md](domains/information-theory.md), [domains/mathematics.md](domains/mathematics.md), OP-2, OP-16.

---

## Iteration 2 additions (2026-06-08)

*New open problems surfaced by the iteration-2 research tracks (see [notes/](notes/)); each passed the adversarial referee. Tags are shown inline (not yet folded into the status table below).*

- **OP-40 — Does gravitationally-induced entanglement (BMV/QGEM) decisively establish that gravity is non-classical?** `[OPEN]` The LOCC no-go is a theorem, but the inference "entanglement via gravity ⇒ non-classical mediator" needs an additional *local-mediation* premise (no direct $A$–$B$ Hamiltonian term; a mediator carrying its own classical observables) that is logically **stronger** than relativistic no-signaling. Unresolved: (i) whether the static Newtonian potential is a mediated local exchange or a direct nonlocal-but-causal (Coulomb-gauge-like) interaction; (ii) whether fundamentally semiclassical/CQ theories (Hall–Reginatto; Oppenheim stochastic-CQ) are genuine loopholes or violate independent locality axioms. *Why hard:* the candidate theories disagree on the definition of "classical," and the experiment ($m\sim10^{-14}$ kg, ~μm superpositions, ~1 s coherence) is far beyond current capability. *Approaches:* QGEM/BMV experiments + complementary gravitational-decoherence bounds; the $m^2$-vs-$m^3$ scaling discriminator (HYP-GIE-DISCRIM). Bears on [GC-15](GAPS_AND_CONTRADICTIONS.md). [→ [notes](notes/2026-06-08-tabletop-quantum-gravity.md)]
- **OP-41 — A de Sitter entanglement first law.** `[OPEN]` Derive, in a controlled $\Lambda>0$ setting, that $\delta S=\delta\langle K\rangle$ (modular Hamiltonian $K$) implies the *linearized* Einstein equations — the genuine dS analog of the AdS FGHMVR result. None exists; CLPW supplies the Type II₁ entropy structure but no equation of motion. **The single highest-leverage missing step for the emergence program.** [→ [notes](notes/2026-06-08-de-sitter-and-emergent-spacetime.md)]
- **OP-42 — Is there a genuine unitary holographic dual of de Sitter?** `[CONTESTED]` Whether double-scaled SYK / static-patch / $T\bar T+\Lambda$ proposals realize unitary dS or only an effective subsector is unsettled; Rahman–Susskind vs Narovlansky–Verlinde entropy↔area scalings disagree by factors diverging as $N\to\infty$. Distinct from OP-41 (dynamics): this concerns the *existence/correctness of a dual*. [→ [notes](notes/2026-06-08-de-sitter-and-emergent-spacetime.md)]
- **OP-43 — The quantitative Born-rule problem.** `[OPEN]` In a strictly unitary (no-collapse) theory, derive that branch weights $|c|^2$ function as chances over single outcomes using premises provably *not* equivalent to Born. Every extant program (frequency operators, envariance, Deutsch–Wallace, Carroll–Sebens) re-imports a Born-equivalent symmetry/rationality/typicality input at the unequal-amplitude step. The *form* is forced (Gleason+Busch); the *meaning* is not. Sharpens the "probability in Everett" facet of [GC-6](GAPS_AND_CONTRADICTIONS.md). [→ [notes](notes/2026-06-08-born-rule-and-quantum-linearity.md)]
- **OP-44 — Nonperturbative fate of the crossed-product Type II structure.** `[OPEN]` Does the III→II crossed-product / generalized-entropy structure (established in the $G_N\to0$ / large-$N$ expansion) admit a nonperturbative completion in which a von Neumann-algebraic description of subregions survives, or does gravitational dressing ("algebraic spacetime disruption," Giddings 2505.22708) force a non-algebraic replacement (e.g. a network of Hilbert-space inclusions)? No no-go currently constrains either answer. [→ [notes](notes/2026-06-08-algebraic-background-independence.md)]
- **OP-45 — Microscopic origin of horizon area-entropy for a generic horizon.** `[OPEN]` Identify degrees of freedom whose count is $A/4\ell_P^2$ for a *generic* (non-extremal, non-supersymmetric, asymptotically-flat) horizon — and that predict an independently measurable deviation from GR, rather than re-deriving the area law the entropic-gravity programs assume. (Strominger–Vafa and Ryu–Takayanagi cover only special cases; Sakharov instead *outputs* the area law.) [→ [notes](notes/2026-06-08-entropic-and-emergent-gravity.md)]
- **OP-46 — Encode vs generate: emergent geometry from non-symmetric modular flow.** `[OPEN]` Is there an (algebra, state) pair with *non-geometric* modular flow from which a semiclassical metric/horizon can nonetheless be reconstructed — breaking the Bisognano–Wichmann / CHM circularity in which geometry is recognized only because a symmetric vacuum on a fixed spacetime is assumed? Is there even an agreed operational criterion distinguishing "encode" from "generate"? Until resolved, the algebraic program is *reorganization*, not *derivation*. [→ [notes](notes/2026-06-08-algebraic-background-independence.md)]
- **OP-47 — Derive the entropic-gravity decoherence rate from a specified screen model.** `[CONTESTED]` A phenomenological open-system model already bounds entropic-gravity centre-of-mass decoherence with ultracold-neutron data ($\sigma\gtrsim250$; Schimmoller et al. 2021) and admits a decoherence-free limit. The open residue: can such a master equation be *derived from Verlinde's holographic-screen / equipartition postulates* (not assumed), is the decoherence-free regime natural rather than fine-tuned, and does it genuinely answer Kobakhidze's reversibility objection? [→ [notes](notes/2026-06-08-entropic-and-emergent-gravity.md)]

---

## Iteration 3 additions and progress (2026-06-08)

*From the iteration-3 attempts (see [notes/](notes/) iter3-\*). One new problem; progress notes on existing ones.*

- **OP-48 — Can the GPT framework-fixing axioms be formulated on a Type III₁ algebra?** `[OPEN]` (candidate-no-go "OP-GPT-TYPE3"). The generalized-probabilistic-theory axioms that single out the Hilbert-space framework — tensor-product composition / local tomography, purification, continuous reversibility — presuppose a tensor factorization $\mathcal H_{AB}=\mathcal H_A\otimes\mathcal H_B$ and finite-dimensional structure. Local relativistic QFT algebras are Type III₁ (no factorization, no density matrices), and the load-bearing axioms provably fail in infinite dimensions. Can *any* formulation fix **composition** (not merely the Born-rule *form*, which the 2026 causal-rigidity theorem already lifts) on a Type III₁ factor — or is this a genuine no-go? Decisive for whether Program A (geometry-from-algebra) and Program B (quantum-framework-final) can fully merge. [→ [notes](notes/2026-06-08-iter3-merge-attempt-operational-substrate.md)]

**Progress on existing problems:**
- **OP-41 (dS entanglement first law)** — obstruction now *located*: one Killing vector / one region (no continuum to invert to $\delta G_{\mu\nu}$) + a sign-reversed *maximization* principle ($dE=-T\,dS$, empty dS maximizes $S_{\rm gen}$). One un-foreclosed escape: an $SO(d+1,1)$ family of static-patch modular Hamiltonians (Chen–Xu 2511.00622) or sub-patch CHM diamonds (Fröb 2308.14797). A conjecture **HYP-dS-NOMIN** (no holographic dS first law in the strict AdS sense) is recorded [OPEN], *not* a no-go. [→ [notes](notes/2026-06-08-iter3-de-sitter-first-law-attempt.md)]
- **OP-46 (encode vs generate)** — now equipped with a decision-usable criterion (axes $\Delta_{\rm geo}$, $\kappa_\Phi$ + a 5-item smuggling checklist) and a verdict table over six constructions; finding: none generates Lorentzian spacetime from factorization-/region-/symmetric-state-free data. [→ [notes](notes/2026-06-08-iter3-encode-vs-generate-criterion.md)]
- **OP-44 (nonperturbative fate of crossed-product Type II)** — sharpened by the verified Giddings results (2505.22708, 2510.24833): dressed operators generically fail to commute spacelike at leading order in $G_N$; the III→II story may be a perturbative truncation. [→ [notes](notes/2026-06-08-iter3-merge-attempt-operational-substrate.md)]

---

## Iteration 4 progress (2026-06-08)

*From the iteration-4 attacks + convergence audit (see [notes/](notes/) iter4-\*).*

- **OP-41 (dS entanglement first law) — promoted toward near-no-go.** The $SO(d+1,1)$-family escape was executed and fails on a dimension count (finite orbit → ≤10 global charges, no Radon inversion to local $\delta G_{\mu\nu}$) + geometric-only-at-Bunch–Davies + concave-GSL second-order character (HYP-dS-NOMIN-R3). Surviving routes: non-unitary dS/CFT pseudo-entropy; Jacobson small-ball continuum inside a CLPW II₁ algebra. [→ [notes](notes/2026-06-08-iter4-ds-first-law-escape.md)]
- **OP-48 (GPT-on-Type-III) — settled as a disjunction.** No-go for exact composition on a single III₁ factor; split-property qualified *yes* (intermediate Type I) that relocates the BW/CHM circularity (HYP-SPLIT-GEOM); full merge needs a state-/collar-free composition surrogate. [OPEN, narrowed] [→ [notes](notes/2026-06-08-iter4-gpt-type3-resolution.md)]
- **OP-46 (encode vs generate) — near-vacuous under the standard readout.** HYP-CKV-VACUITY (Borchers/Wiesbrock + Caminiti et al. 2502.02633); the live target is a non-CKV, Lorentzian readout (Connes reconstruction gives only Riemannian — GAP-NCG-LORENTZIAN-SIGNATURE). [→ [notes](notes/2026-06-08-iter4-modular-circularity.md)]
- **OP-21 (muon $g-2$) — largely resolved.** WP2025 (arXiv:2505.21476) lattice-HVP prediction gives $\Delta a_\mu=38(63)\times10^{-11}$ (SM-consistent); see the OP-21 entry above and [domains/particle-physics.md](domains/particle-physics.md).
- **Convergence:** trend diminishing; analytical saturation ≈1–3 iterations away (remaining: OP-48 point (c), OP-44/OP-CP1, OP-46 non-CKV readout); object-level non-forecastable. Recommendation HYBRID. See [FINDINGS.md](FINDINGS.md) § Iteration 4 update and [the audit note](notes/2026-06-08-iter4-convergence-audit.md).

---

## Iteration 5 progress (2026-06-08) — closing push, saturation

*From the closing analytical push (see [notes/](notes/) iter5-\*). Consolidated in [CONCLUSION.md](CONCLUSION.md); object-level channels tracked in [EXPERIMENT_WATCHLIST.md](EXPERIMENT_WATCHLIST.md).*

- **OP-48(c) — SETTLED (conditional no-go).** "Collar-free + state-independent" composition and "singles out QM" are mutually exclusive on a single Type III₁ factor (the Haagerup/Connes-fusion surrogate is a universal embezzler $\kappa_{\max}=0$; QM-selection forces a Type I split factor re-importing the collar). [→ [notes](notes/2026-06-08-iter5-op48c-collarfree-composition.md)]
- **OP-46 — FORECLOSED on all known readouts.** The non-CKV Lorentzian readout produced the first emergent Lorentzian metric (Huang–Ma dS₂) but with signature *inherited from symmetry*; the obstruction is now readout-independent (HYP-CKV-VACUITY). Formally open only for a hypothetical no-symmetry readout. [→ [notes](notes/2026-06-08-iter5-op46-lorentzian-nonckv-readout.md)]
- **OP-44/OP-CP1 — regime boundary located; sole residual open lever.** Crossed-product Type II survives as a leading-order / QRF-relational truncation below $N_\ast\sim R/2GE_f$; degenerates above it (Giddings algebraic spacetime disruption). No theorem on either side. [→ [notes](notes/2026-06-08-iter5-op44-nonperturbative-crossed-product.md)]
- **OP-49 (≡ OP-dS-PSEUDO-REALITY) — new.** `[OPEN]` Can the imaginary pseudo-entropy of the dS/CFT first law (arXiv:2511.07915) be physically nulled (genuine post-selection / real reduced density matrix) while retaining nontrivial $\delta G$? A sharp decidable test isolating whether the dS/CFT pseudo-entropy route could move Program A toward *generates*. [→ [notes](notes/2026-06-08-iter5-surviving-dS-routes.md)]
- **Saturation:** the named decidable list (OP-48c, OP-46, OP-44) is settled/bounded and the verdict-flipping lever did not flip; the analytical program is **saturated** (4th consecutive iteration at the same verdict). See [CONCLUSION.md](CONCLUSION.md) and [the iteration-5 synthesis](notes/2026-06-08-iter5-synthesis.md).

---

## Iteration 6 additions and progress (2026-06-10)

*From the new-input iteration (6 research + 4 attack tracks, all refereed; see [notes/](notes/) iter6-\*). One new problem (OP-50, [CONTESTED]); OP-49 closes to near-no-go; OP-44 and OP-48(c) restructured; two experiment-side updates (OP-21, OP-18). Each action below names the residual lever it moves or is filed as watchlist/landscape maintenance.*

### OP-50 — The closed-universe Hilbert space: is it one-dimensional, and is QM only observer-relative there?
**Area:** Quantum gravity / quantum cosmology / holography. **Tag:** `[CONTESTED]`. **Kind:** structural frontier with an active two-camp dispute; no theorem on either side.

**Statement.** Nonperturbative topology-sum (spacetime-wormhole) arguments claim that the Hilbert space of a spatially closed universe (no asymptotic boundary, no external observer) is **one-dimensional (and real) per α-sector**: including wormholes in the inner product degenerates the Gram matrix of perturbatively-distinct closed-universe states to rank 1 — proven in JT gravity + matter and a topological model (Usatyuk–Wang–Zhao, SciPost Phys. 17, 051 (2024)), claimed general via QES/path-integral arguments, with lineage to McNamara–Vafa (arXiv:2004.06738). On this view standard quantum mechanics is recovered **only relative to an internal observer** with $S_{Ob}$ degrees of freedom, described by an effective Hilbert space of dimension $\sim e^{S_{Ob}}$ with errors exponentially small in $S_{Ob}$ (Harlow–Usatyuk–Zhao, arXiv:2501.02359 [JHEP ref unverified]; Nomura–Ugajin via partial observability, arXiv:2505.20390, 2602.13387). Is the one-dimensionality claim true — and if so, is observer-relative recovery of QM forced?

**Why it is hard.** The premise is itself contested by three distinct counter-positions, none refuted: (i) Antonini–Rath–Sasieta–Swingle–Vilar López (arXiv:2507.10649) — one-dimensionality is an *external-access artifact* of the CFT description, with closed-universe EFT recoverable via a final-state-projection reading; (ii) Hong Liu (arXiv:2509.14327) — subregion-subalgebra duality plus an averaged large-$N$ dictionary implies a semiclassical description of a macroscopic closed universe exists at small finite $G_N$, an *observer-free* framing that contests whether algebra selection counts as observer-anchored input; (iii) Engelhardt–Gesteau (arXiv:2504.14586) — the actual CFT dual is the spacetime *without* a semiclassical baby universe. Higginbotham's "observer complementarity" (arXiv:2512.17993 [JHEP ref unverified — arXiv page says only "Submitted to JHEP"]) argues the descriptions are observer-relationally reconcilable. The dispute turns on what the gravitational path integral's wormhole sector means — exactly the regime with no independent definition of the theory.

**Why it matters here.** [INFERENCE, medium-high] The "observer rescue" is structurally the same move as the wiki's OP-48(c) conditional no-go: the fundamental description (Type III₁ factor there; one-dimensional Hilbert space here) fails to support QM's composition/probability structure, and standard QM is recovered only relative to an observer-anchored factorization — with the observer-selecting move coinciding with the geometry-importing input. This is a structural ANALOGY, not a derivation in either direction: cross-framework convergence reinforces, but cannot harden, horn (C), because the premise is [CONTESTED]. On the observer-rescue and external-access branches the OP-48(c) conditional structure is enforced; on Liu's branch it holds only if subalgebra selection is granted observer status — *consistent with* every branch, *enforced by* only some. **Residual lever moved:** this problem is the path-integral face of the OP-48(c) horn-C residue.

**Leading approaches.** Topology-sum/Gram-matrix computations in low-dimensional models; QRF/crossed-product methods (DEHK PW=CLPW, arXiv:2405.00114; follow-up 2412.15502, verified); Harlow's α-parameter-free third-quantized holography (arXiv:2602.03835, argued not shown); subregion-subalgebra duality (Liu); boundary-operator reconstructions (Engelhardt–Gesteau).

**Cross-links.** OP-48 (the algebraic face), OP-44 (observer-relational crossed products), OP-25 (problem of time), HYP-dS-CARDINALITY-R1 ([HYPOTHESES.md](HYPOTHESES.md)), [CONCLUSION.md](CONCLUSION.md) §5. [→ [notes](notes/2026-06-10-iter6-closed-universe-and-dS-holography.md)]

---

### Progress notes (iteration 6)

- **OP-44 / OP-CP1 — interior restructured; bulk $N_\ast$ boundary still theorem-free on both sides.** *(Moves the OP-44 residual lever.)* (i) Jensen–Raju–Speranza (arXiv:2412.21185; JHEP 06 (2025) 242) prove the AdS boundary time-band algebra **strictly has no commutant** nonperturbatively (a theorem-grade *boundary-anchored* instance of the failure pattern — it brackets, not settles, the bulk $N_\ast$ question), plus **crossed-product rigidity**: the modular crossed product is the *only* crossed product of a Type III₁ algebra yielding a trace — any tracial truncation surviving at higher orders that is a crossed product must be the modular one. `[ESTABLISHED]` (ii) De Vuyst–Eccles–Höhn–Kirklin (arXiv:2411.19931; JHEP 2025, 211) locate the **order-$G_N^2$ proof obligation**: the quadratic (boost) linearization-instability constraints — "essentially unambiguous" to impose for spatially closed spacetimes, contingent for bounded ones; transferring the closed-slice cleanliness to the dS static-patch II₁ requires an additional step [INFERENCE, medium]. `[ESTABLISHED]` (iii) Survival side theorem-grade at linearized order for the **complete** constraint family with edge modes (KLS II, arXiv:2601.07910 — supersedes iter-4's "incremental, action=none" gloss; entropy is $S_{\rm gen}$ + edge-mode + constant term), including a **GSL for non-stationary linearized perturbations and a proof of the quantum focusing conjecture in the perturbative regime** (Chandrasekaran–Flanagan, arXiv:2601.07915 — a theorem *within the linearized/perturbative regime around a Killing-horizon background*; interacting QFT and genuinely dynamical non-Killing horizons remain fully open). `[ESTABLISHED]` (iv) **Fourth verdict option**: Kudler-Flam–Witten (arXiv:2510.06376) — baby-universe state sequences fail to converge at large $N$ unless one **averages over $N$** (conditional on analytic continuation in $N$ + superpolynomially small fluctuations, arXiv:2605.15180); the trichotomy (survives / fails / regime-dependent) becomes four options with **survives-after-averaging**; the transfer to subregion crossed products is `[INFERENCE]`. (v) The iter-5 "split-property downside" is realized in print — by the stringy Hagedorn mechanism at sub-string-length separations (Herderschee–Kudler-Flam, arXiv:2510.01556), not by $O(\kappa)$ dressing (still open); every published post-breakdown candidate remains *algebraic*, weakening (publication-bias-prone evidence) Giddings' "beyond algebras" horn. No Giddings follow-up or rebuttal post-2510.24833 [INFERENCE, high — negative-after-search, as of 2026-06]. **Net: OP-44 stays `[OPEN]`, "no theorem on either side of $N_\ast$" intact; statement updated with the four-option verdict space.** [→ [notes](notes/2026-06-10-iter6-op44-op48c-levers.md), [notes](notes/2026-06-10-iter6-algebraic-frontier.md)]
- **OP-48(c) horn (C) — PARTIALLY DISCHARGED; the hedge shrinks.** *(Moves the OP-48c horn-C residual lever.)* Under the GPT-faithful **full-pair** reading ("recovers QM" = existence of a normal product state across the commuting pair, the precondition of local tomography's dimension count): **exact** — a normal product state across $(\mathcal M_A,\mathcal M_B)$ forces a Type I interpolating factor (GNS factorization + normality; split-inclusion equivalences anchored to Doplicher–Longo, Invent. Math. 75 (1984), D'Antoni–Longo 1983, Summers, Rev. Math. Phys. 2 (1990) [unverified this session]; Jäkel hep-th/9811227 (solo author) only as thermal-context corroboration — the original "et al." anchoring is corrected); for the Haag-dual pair $(\mathcal M,\mathcal M')$ a normal product state exists **iff $\mathcal M$ is Type I**, so on III₁ any composition rule with normal product states must retreat to a proper sub-pair — *which is the collar*. `[INFERENCE, high — theorem-shaped under the full-pair reading]` **Approximate** — every normal state of a III₁ pair is at norm distance $\ge 1-1/\sqrt2$ from every product/separable state (Summers–Werner maximal Bell violation + Tsirelson; own derivation, refereed). **The irreducible residue (corrected by referee):** operationally there is a proven *spectrum* of composition regimes in one-to-one correspondence with the von Neumann types (van Luijk, arXiv:2510.07563) — not a binary; the two physically motivated endpoints — product-preparations/Type I (textbook QM) and universal-embezzlement/III₁ (local QFT; now with an explicit consistent *multipartite* III₁ composition theory, van Luijk–Stottmeister–Wilming, Quantum 9, 1818 (2025), arXiv:2409.07646) — are each internally consistent and Bell-gap-separated; the algebra proves the classification but cannot choose the endpoint. The choice is a physical/axiomatic input — encodes-not-generates at the composition layer. Plus the GPT formalization choice (full-pair vs subsystem reading). **Net: hedge 2 shrinks but does not vanish; [CONCLUSION.md](CONCLUSION.md) §5 item 4 re-worded.** [→ [notes](notes/2026-06-10-iter6-op44-op48c-levers.md)]
- **OP-49 (≡ OP-dS-PSEUDO-REALITY) — CLOSED-NEGATIVE at NEAR-NO-GO grade (conditional exclusion; iter-5 "sharpened expectation: no" upgraded to an exclusion argument).** *(Closes the OP-49 residual lever, negative direction; mirrors OP-41 house language.)* In dS₃/CFT₂ the pseudo-entropy of a boundary cap is $S_A=-i(\tilde c/3)\log[(2/\epsilon)\sin(\theta_0/2)]+\pi\tilde c/6$, $\tilde c=3R/2G\in\mathbb R$: the **real** part is the finite universal *region-independent* constant $S_{\rm dS}/2$; the **entire** region- and state-dependence (divergence + finite shape-dependent log) is **imaginary** (Doi–Harper–Mollabashi–Takayanagi–Taki, PRL 130, 031601 (2023)) — *corrects the inverted iter-5 parenthetical*. In the arXiv:2511.07915 first law the linearized-Einstein content is carried exclusively by Im δS (coefficient = the imaginary central charge). **Horn (i), fixed dictionary:** enforcing reality forces $\Delta S_A\equiv0$, hence (assuming CHM-kernel invertibility over caps on $S^2$ [INFERENCE, FGHMVR-pattern, not re-derived]) $\delta\langle T_{tt}\rangle\equiv0$ — the probe vanishes; conversely $\delta G\neq0$ *forces* non-reality via the Guo–He–Zhang necessity direction (pseudo-Hermiticity is necessary and sufficient for real trace moments, diagonalizable case; arXiv:2209.07308, JHEP 05 (2023) 021). **Horn (ii), deformed states/dictionary:** every reality-restoring deformation *examined* (Θ-invariant states; modular-conjugate post-selection; $c\to$ real) deletes the relative Lorentzian phase and deforms AdS-ward — an encodes-type Euclidean reconstruction [INFERENCE over an open class; supported by the unitary-AdS mirror arXiv:2511.17098 — where Im S is an inert constant cancelling in variations and only Re δS carries the Einstein equation, the exact image under $c\to ic$ — and by the rigidity of Im S against renormalization, shape deformation, and contour choice]. **Three named residuals keep it short of a theorem:** (a) exceptional-point (non-diagonalizable) transition matrices; (b) the SVD-entanglement-entropy protocol (Parzygnat–Takayanagi–Taki–Wei, JHEP 12 (2023) 123) — no first law exists as of 2026-06; a holomorphy-breaking argument predicts none survives [conjecture, decidable by the stated hemisphere computation]; (c) horn-(ii) protocol-class openness. **Retag `[OPEN]` → near-no-go / resolved-negative (conditional); paired CHANGELOG line in [CHANGELOG.md](CHANGELOG.md).** [→ [notes](notes/2026-06-10-iter6-op49-pseudo-entropy-reality.md)]
- **OP-21 — flavor anomaly sharpened (watchlist maintenance).** LHCb's comprehensive amplitude-level analysis of $B^0\to K^{*0}\mu^+\mu^-$ on the full Run 1+2 dataset (arXiv:2512.18053; PRL 2026) reports ~4σ tension with the SM [reported], with supporting CMS results (2025). Interpretation `[CONTESTED]` (new physics vs charm-loop/form-factor hadronics). The entry's "remain in mild tension" wording is stale as of 2026; paired CHANGELOG line. Muon $g-2$ remains closed (final FNAL + WP2025 re-verified, iteration 6).
- **OP-18 — split verdict (watchlist maintenance).** $H_0$: persists at roughly ~5σ and sharpened under JWST cross-checks (ladder near 73; CCHP TRGB/JAGB ≈ 70.4; SBF ≈ 73.8 — method-internally contested) [reported]. $S_8$: substantially eased **on the KiDS cosmic-shear axis** — KiDS-Legacy $S_8=0.815^{+0.016}_{-0.021}$, 0.73σ from Planck (arXiv:2503.19441); joint KiDS-Legacy+DES Y3+Pantheon++DESI Y1 Planck-consistent (arXiv:2503.19442) — but survey-dependent: DES Y6 remains in significant tension per a 2026 review (arXiv:2602.12238) `[CONTESTED]`. The two tensions decouple; paired CHANGELOG line.

---

## Status summary (epistemic tags at the *Last updated* date)

| Tag | IDs |
|---|---|
| `[OPEN]` | OP-1, OP-5, OP-6\*, OP-7, OP-8, OP-9, OP-10, OP-11, OP-12, OP-14, OP-15, OP-16, OP-17, OP-20\*, OP-24, OP-25\*, OP-26, OP-27\*, OP-28\*, OP-29, OP-31\*, OP-32, OP-33, OP-34, OP-35, OP-36, OP-37, OP-38 |
| `[CONTESTED]` | OP-4, OP-18\*, OP-21\*, OP-22, OP-30 |
| `[SPECULATIVE]` | OP-19, OP-23 |
| Bundles (mixed) | OP-13, OP-39 |

\* carries a secondary tag noted in its entry (e.g. `[OPEN]/[CONTESTED]`). The single quantities/processes that are themselves `[ESTABLISHED]` — cosmic acceleration (OP-6), the missing-mass evidence (OP-5), nonzero neutrino mass (OP-9), the baryon asymmetry (OP-7), non-renormalizability of perturbative GR (OP-1) — are flagged inside each entry; what is `[OPEN]` is the *mechanism/identity*, not the phenomenon.

---

## See also
- [README.md](README.md) — project overview and entry point
- [AGENTS.md](AGENTS.md) — workflow rules for editing this registry
- [EPISTEMICS.md](EPISTEMICS.md) — the five tags and the four-way problem taxonomy used above
- [GAPS_AND_CONTRADICTIONS.md](GAPS_AND_CONTRADICTIONS.md) — distinguishing inconsistencies from frontiers; many OPs are cross-referenced there
- [HYPOTHESES.md](HYPOTHESES.md) — candidate resolutions under development
- [THEORY_MAP.md](THEORY_MAP.md) and [UNIFICATION_LANDSCAPE.md](UNIFICATION_LANDSCAPE.md) — where these problems sit in the theory graph
- [UNIFYING_PRINCIPLES.md](UNIFYING_PRINCIPLES.md) — principles invoked across multiple OPs (holography, naturalness, typicality)
- [ASSUMPTIONS_LEDGER.md](ASSUMPTIONS_LEDGER.md) — assumptions whose relaxation could dissolve some OPs
- [CONSTANTS_AND_SCALES.md](CONSTANTS_AND_SCALES.md) — the scales ($E_P$, $\Lambda$, $\eta$, …) quoted above, with caveats
- [FINDINGS.md](FINDINGS.md) and [ROADMAP.md](ROADMAP.md) — progress against, and planned attacks on, these problems
- [CHANGELOG.md](CHANGELOG.md) — log of status changes (promotions/demotions/resolutions)
- Domain pages: [quantum-mechanics](domains/quantum-mechanics.md) · [quantum-field-theory](domains/quantum-field-theory.md) · [general-relativity](domains/general-relativity.md) · [classical-mechanics](domains/classical-mechanics.md) · [thermodynamics](domains/thermodynamics.md) · [statistical-mechanics](domains/statistical-mechanics.md) · [cosmology](domains/cosmology.md) · [particle-physics](domains/particle-physics.md) · [information-theory](domains/information-theory.md) · [mathematics](domains/mathematics.md)

## References
Specific landmark results referenced inline (Goroff–Sagnotti two-loop divergence; Weinberg's anthropic bound; Strominger–Vafa microstate counting; Christodoulou–Klainerman stability of Minkowski; Xia's non-collision singularities; the Clay Millennium Problems for Yang–Mills and Navier–Stokes; Gleason's theorem; Hardy and Chiribella–D'Ariano–Perinotti reconstructions; Jacobson's thermodynamic derivation; Ryu–Takayanagi) are collected with full bibliographic detail in [BIBLIOGRAPHY.md](BIBLIOGRAPHY.md). Per [EPISTEMICS.md](EPISTEMICS.md) §4, no citation, number, or theorem on this page is invented; quantitative figures carry their context, and any bibliographic detail not independently verified should be marked `[unverified]` in BIBLIOGRAPHY.md.
