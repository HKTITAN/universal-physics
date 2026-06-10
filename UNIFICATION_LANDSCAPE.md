# Unification Landscape: A Critical Survey of Unification and Quantum-Gravity Programs

Status: Living survey — comparative, deliberately blunt about empirical status. Two entries added + six status refreshes in iteration 6 (2026-06-10).
Last updated: 2026-06-08

This page surveys the major programs that aim to unify the known interactions and/or to quantize gravity. The organizing thesis is uncomfortable but important: **the programs that are most empirically testable are the least ambitious, and the programs that are most ambitious are the least testable** [INFERENCE]. We assess each program on six axes — core idea, what it claims to unify, mathematical status, empirical status, successes, problems, testability, verdict — and tag each nontrivial claim with an epistemic marker per [EPISTEMICS.md](EPISTEMICS.md).

A recurring structural fact frames everything below: the natural scale of quantum gravity is the Planck scale,
$$
M_{\text{Pl}} = \sqrt{\frac{\hbar c}{G}} \approx 1.22 \times 10^{19}\ \text{GeV}, \qquad \ell_{\text{Pl}} = \sqrt{\frac{\hbar G}{c^3}} \approx 1.6 \times 10^{-35}\ \text{m},
$$
roughly $10^{15}$ times beyond the LHC's energy reach [ESTABLISHED]. Direct experimental access to this scale is not available with foreseeable technology [ESTABLISHED], which is why "no distinguishing empirical confirmation" recurs as a verdict and is **not** a moral failing of any single program. See [CONSTANTS_AND_SCALES.md](CONSTANTS_AND_SCALES.md) for scale definitions and [domains/general-relativity.md](domains/general-relativity.md), [domains/quantum-field-theory.md](domains/quantum-field-theory.md) for the frameworks being reconciled.

For the deeper conceptual currents shared across programs (background independence, holography, emergence, "spacetime from entanglement"), see [UNIFYING_PRINCIPLES.md](UNIFYING_PRINCIPLES.md). For specific falsifiable conjectures extracted from these programs, see [HYPOTHESES.md](HYPOTHESES.md). For the catalog of what remains unsolved, see [OPEN_PROBLEMS.md](OPEN_PROBLEMS.md).

---

## 0. Two kinds of "unification" — a necessary distinction

Two logically distinct ambitions are routinely conflated and must be kept apart [INFERENCE]:

1. **Unification of forces / matter** within quantum field theory — embedding the Standard Model gauge group into a larger structure (GUTs), or unifying bosons and fermions (supersymmetry). This is conventional QFT and is, in principle, testable at sub-Planckian scales.
2. **Quantization of gravity** — reconciling general relativity with quantum mechanics. The obstruction here is that the Einstein–Hilbert action quantized as a point-particle QFT is perturbatively non-renormalizable [ESTABLISHED]: Newton's constant $G$ has mass dimension $-2$ (in $\hbar = c = 1$ units, $[G] = M^{-2}$), so loop divergences require infinitely many counterterms. Goroff and Sagnotti (1985) showed pure gravity diverges at two loops [ESTABLISHED]. Different programs respond to this obstruction differently.

A "theory of everything" attempts both at once. Most programs below attempt only one. We flag which.

---

## 1. String / M-theory and Supergravity

**Core idea.** Replace point particles with one-dimensional extended objects (strings) whose vibrational modes constitute the particle spectrum. The closed-string spectrum *necessarily* contains a massless spin-2 state identified with the graviton, so gravity is mandatory rather than added [ESTABLISHED, within the framework]. Consistent superstring theories require $D = 10$ spacetime dimensions; their strong-coupling and low-energy limits are conjecturally unified by an 11-dimensional **M-theory** whose low-energy limit is 11D supergravity [INFERENCE]. Supergravity is the locally supersymmetric extension of GR and arises as the strings' low-energy effective field theory.

**What it claims to unify.** All four interactions plus all matter in one quantum-consistent framework; bosons and fermions via supersymmetry; and the five 10D superstring theories plus 11D SUGRA via a web of dualities (T-, S-, U-duality).

**Mathematical status.**
- Perturbative string theory is well-developed and internally consistent order by order [ESTABLISHED]. The critical dimension is fixed by Weyl-anomaly cancellation on the worldsheet: for the bosonic string the conformal anomaly vanishes when the central charge $c = 26$; for the superstring the corresponding condition gives $D = 10$ [ESTABLISHED]. Modular invariance of the one-loop amplitude and the GSO projection (ensuring spacetime supersymmetry and a tachyon-free spectrum) are rigorous structural results [ESTABLISHED].
- The low-energy effective action reproduces (super)gravity plus an infinite tower of higher-curvature $\alpha'$ corrections [INFERENCE].
- **There is no non-perturbative, background-independent definition of M-theory** [OPEN]. It is characterized by its limits and dualities, most of which are conjectural; S-duality has strong evidence but is largely unproven, and AdS/CFT (§6) is the one non-perturbative handle, valid only in special backgrounds. The perturbative genus expansion is asymptotic, not convergent [ESTABLISHED].

**Empirical status (blunt).** There is **no distinguishing experimental confirmation** of string/M-theory [ESTABLISHED — as a statement about the empirical record]. No string-specific signature — extra dimensions, superpartners, Regge excitations, modifications to Newtonian/GR gravity — has been observed. Supersymmetry, the most testable necessary ingredient, has **not** been detected: the LHC excludes the simplest naturalness-motivated low-scale SUSY up to the multi-TeV range [ESTABLISHED]. The generic string scale sits near $M_{\text{Pl}}$, so the framework makes essentially no falsifiable prediction at accessible energies. It is consistent with all data largely because it predicts almost nothing testable [INFERENCE].

**Main successes.**
- A perturbatively finite, consistent quantum theory of gravity: graviton scattering amplitudes are UV-finite order by order, evading point-particle non-renormalizability [INFERENCE].
- **Strominger–Vafa (1996):** microscopic D-brane state counting reproduces the Bekenstein–Hawking entropy
$$
S_{\text{BH}} = \frac{k_B c^3 A}{4 G \hbar} = \frac{A}{4\ell_{\text{Pl}}^2}
$$
*exactly* for certain supersymmetric/extremal black holes — a genuine quantitative achievement [ESTABLISHED, within the framework].
- Gave rise to **AdS/CFT** (Maldacena 1997), the most concrete realization of holography (§6) [ESTABLISHED].
- Naturally incorporates gauge fields, chiral fermions, and Yang–Mills structure; deep two-way exchange with mathematics (mirror symmetry, knot invariants, monstrous/umbral moonshine) [INFERENCE].

**Main problems / criticisms.**
- No non-perturbative or background-independent formulation [OPEN].
- **The landscape problem.** Flux compactifications produce an enormous number of metastable vacua (the figure "$\sim 10^{500}$" is a heuristic estimate, not a rigorous count), with no known selection principle, undermining predictivity [CONTESTED]. The **swampland** program attempts to constrain which low-energy EFTs admit UV completion, but its conjectures are themselves [SPECULATIVE].
- Constructing a fully realistic, stable de Sitter (positive-$\Lambda$) vacuum reproducing the Standard Model and observed dark energy remains controversial — the KKLT construction versus the de Sitter swampland conjecture debate [CONTESTED].
- Requires SUSY (unobserved) and extra dimensions (unobserved) [ESTABLISHED].
- Most defining dualities are conjectural [OPEN].

**Testability.** Generically untestable at accessible energies [CONTESTED]. Model-dependent (not generic) signatures — superpartners, large/warped extra dimensions, cosmic superstrings, specific inflationary non-Gaussianity — have not appeared and are not guaranteed. The "not even wrong" critique holds that the landscape renders it unfalsifiable in practice; defenders cite consistency constraints and AdS/CFT results.

**Verdict.** The most mathematically developed and influential quantum-gravity program, with real internal successes (perturbatively finite gravity, black-hole microstate counting, AdS/CFT). But after decades it has produced no distinguishing empirical confirmation, requires unobserved ingredients, and the landscape erodes predictivity. **Best regarded as a rich, possibly-correct mathematical framework whose connection to our universe is unestablished — not confirmed physics.** Epistemic tag: **[SPECULATIVE]** (as a description of nature; many internal *results* are [ESTABLISHED] within the framework).

---

## 2. Loop Quantum Gravity (LQG) and Spin Foams

**Core idea.** A background-independent, non-perturbative canonical (and covariant) quantization of GR itself, without extra dimensions or added matter. In Ashtekar connection variables, the kinematical Hilbert space is spanned by **spin-network** states — graphs with edges labeled by $SU(2)$ irreps and vertices by intertwiners. Geometric operators acquire discrete spectra; e.g. the area operator eigenvalues take the form
$$
A = 8\pi \gamma \ell_{\text{Pl}}^2 \sum_i \sqrt{j_i(j_i + 1)},
$$
with $j_i$ the spins piercing the surface and $\gamma$ the Barbero–Immirzi parameter, so space is fundamentally quantized at the Planck scale [ESTABLISHED, within the chosen quantization]. **Spin foams** (e.g. the EPRL model) provide the covariant histories/path-integral formulation, summing over 2-complexes interpolating between spin networks.

**What it claims to unify.** It does **not** aim to unify the forces. It unifies quantum mechanics with general relativity by quantizing geometry directly. Its central ambition is background independence and a quantum theory of spacetime.

**Mathematical status.**
- The kinematical level is rigorous: the spin-network basis, the Ashtekar–Lewandowski measure (and the LOST/Fleischhack uniqueness theorem for the diffeomorphism-invariant representation), and the discreteness of area/volume spectra are well-defined results [ESTABLISHED, within the quantization].
- **The dynamics is the central unsolved problem** [OPEN]. The Hamiltonian (scalar/Wheeler–DeWitt) constraint suffers quantization ambiguities; demonstrating correct closure of the constraint algebra (anomaly freedom) and recovery of the right semiclassical limit is not established.
- Spin-foam models are better-defined covariantly, but recovering smooth GR in the continuum/large-spin limit and controlling the sum over 2-complexes remain unresolved [OPEN].

**Empirical status (blunt).** No experimental confirmation [ESTABLISHED — empirical record]. Predicted discreteness is at $\sim \ell_{\text{Pl}}$, beyond direct probes. Searches for Lorentz-invariance violation (LIV) via gamma-ray-burst photon dispersion (e.g. Fermi-LAT) have found **no effect** and tightly constrain LIV, disfavoring naive discreteness-induced Lorentz breaking [ESTABLISHED]. Loop quantum cosmology (LQC) predicts a "big bounce" replacing the initial singularity, but this is unconfirmed [OPEN].

**Main successes.**
- A concrete, background-independent kinematical quantization of geometry with discrete area/volume spectra — conceptually distinct from string theory's background-dependent starting point [ESTABLISHED, within the framework].
- Reproduces $S_{\text{BH}} \propto A$ via counting horizon spin-network punctures, after fixing $\gamma$ to one specific value [INFERENCE]. (That $\gamma$ must be fixed by this matching is also a weakness — see below.)
- LQC resolves the classical cosmological singularity into a bounce in symmetry-reduced models [INFERENCE/SPECULATIVE].

**Main problems / criticisms.**
- Ambiguous, non-unique dynamics; recovery of the classical Einstein equations / smooth spacetime in the semiclassical limit is unproven [OPEN].
- The Barbero–Immirzi parameter $\gamma$ is a free input fixed (somewhat circularly) by black-hole entropy matching [CONTESTED].
- No clear derivation of low-energy QFT or the Standard Model; matter coupling is underdeveloped [OPEN].
- Whether manifest discreteness is compatible with the absence of observed Lorentz violation is debated; defenders argue the discreteness is Lorentz-invariant in a subtle spectral (not lattice-like) sense [CONTESTED].

**Testability.** Some LQC and LIV phenomenology is in principle testable (CMB signatures of a bounce, photon dispersion), but no positive signal exists and LIV bounds are already very tight [CONTESTED]. Core Planck-scale predictions are practically inaccessible.

**Verdict.** A serious, mathematically careful program whose kinematic results (geometric discreteness, background independence) are real and distinctive, but which is stuck on dynamics and the semiclassical limit, lacks contact with the matter sector, and has no empirical confirmation. **Genuinely open rather than refuted.** Epistemic tag: **[OPEN]**.

*Iteration-6 status refresh (2026-06-10):* numerically Lorentzian era — complex-critical-point machinery for 4d Lorentzian EPRL/Conrady–Hnybida amplitudes (Han–Liu–Qu, arXiv:2404.10563; PRD 111, 024021 (2025)); and a quantum Oppenheimer–Snyder phenomenology industry (Lewandowski–Ma–Yang–Zhang, PRL 130, 101501 (2023): quantum-corrected exterior, bounce, minimal mass — model-dependent, no positive signal; this section’s first concrete effective-metric astrophysics contact point). [→ [notes](notes/2026-06-10-iter6-background-independent-programs.md)]

---

## 3. Asymptotic Safety (UV completion via a nontrivial fixed point)

**Core idea.** Gravity may be **non-perturbatively renormalizable**: although perturbatively non-renormalizable, its renormalization-group flow could approach a nontrivial ultraviolet fixed point with a *finite-dimensional* critical surface (UV-attractive directions). If so, the theory is predictive to arbitrarily high energy with only finitely many free parameters, and no new degrees of freedom (strings, loops) are needed — ordinary QFT, properly continued, suffices. This generalizes Weinberg's 1979 notion of asymptotic safety.

**What it claims to unify.** Quantum mechanics with gravity, inside ordinary QFT. Some variants attempt to constrain the matter sector (asymptotically safe gravity–matter systems, predictions for SM couplings).

**Mathematical status.**
- Substantial functional-renormalization-group (FRG) evidence — via the Wetterich equation for the effective average action $\Gamma_k$,
$$
\partial_t \Gamma_k = \tfrac{1}{2}\,\mathrm{STr}\!\left[\left(\Gamma_k^{(2)} + R_k\right)^{-1} \partial_t R_k\right], \qquad t = \ln k,
$$
indicates a suitable fixed point (the "Reuter fixed point"), robustly across many truncations [INFERENCE/CONTESTED].
- **All evidence relies on truncating the infinite-dimensional theory space** [OPEN/CONTESTED]. There is no proof the fixed point survives untruncated; the standard FRG works in Euclidean signature, with subtleties continuing to Lorentzian gravity. Scheme/truncation dependence is the central caveat.

**Empirical status (blunt).** No distinguishing experimental confirmation [ESTABLISHED — empirical record]. The fixed point governs Planck-scale physics. Some claimed retrodictions — e.g. the Shaposhnikov–Wetterich argument (2009) for a Higgs mass near the later-measured value, or constraints on SM couplings — are intriguing but model- and truncation-dependent and not unambiguous tests [CONTESTED].

**Main successes.**
- A candidate UV completion of gravity entirely within standard QFT — the most economical hypothesis (no new dimensions or objects) [INFERENCE].
- Robust (across truncations) FRG evidence for the fixed point's existence [INFERENCE].
- Some phenomenological predictions for SM parameters and improved high-energy behavior [CONTESTED].

**Main problems / criticisms.**
- No proof the fixed point exists beyond truncations; truncation/scheme dependence unresolved [OPEN].
- Lorentzian formulation and unitarity are not fully controlled; higher-derivative truncations risk ghosts / negative-norm states [OPEN].
- Relationship to other approaches and to a positive $\Lambda$ is unsettled [CONTESTED].

**Testability.** Largely Planck-scale; some indirect leverage via SM-coupling constraints, but no clean experimental test exists [CONTESTED].

**Verdict.** The most conservative quantum-gravity proposal — it asks only that QFT keep working. The FRG evidence is real and suggestive but rests entirely on truncations, so the foundational claim is unproven; no empirical confirmation. **A live, respectable, but unestablished possibility.** Epistemic tag: **[OPEN]**.

*Iteration-6 status refresh (2026-06-10):* Lorentzian consolidation — dS-background Einstein–Hilbert flows (D’Angelo–Ferrero–Fröb, CQG 42 (2025)) and foliated Wick-rotated fluctuation studies; the “first Lorentzian evidence” attribution needs a caveat (multiple routes share inputs); the Higgs-mass retrodiction is framed by proponents as a top-mass-sensitive ratio post/prediction, not a clean test [CONTESTED]. Signature is still installed by hand (Wick rotation, foliation, or a chosen dS background) — corroborating HYP-CKV-VACUITY’s moral. [→ [notes](notes/2026-06-10-iter6-background-independent-programs.md)]

---

## 4. Causal Dynamical Triangulations (CDT)

**Core idea.** Define the gravitational path integral non-perturbatively as a sum over discrete geometries built from simplices, with a crucial **causality** constraint: each configuration admits a global time foliation (only causally well-behaved Lorentzian geometries, Wick-rotated for computation). The continuum limit is studied by Monte Carlo, asking whether a sensible macroscopic spacetime emerges. Schematically the partition function regularizes
$$
Z = \int \mathcal{D}g\, e^{\,iS_{\text{EH}}[g]} \;\longrightarrow\; \sum_{T}\frac{1}{C_T}\, e^{\,iS_{\text{Regge}}[T]},
$$
summing over triangulations $T$ via the Regge action.

**What it claims to unify.** Quantum mechanics and GR, via a regularized, computable gravitational path integral. Not a unification of forces.

**Mathematical status.** Well-defined as a lattice regularization [INFERENCE]. The causality (foliation) condition distinguishes it from earlier *Euclidean* dynamical triangulations, which produced degenerate "crumpled" or "branched-polymer" phases [ESTABLISHED, computationally]. Existence and universality of a genuine continuum limit (a second-order transition removing the lattice spacing) is not rigorously established; results are numerical [OPEN].

**Empirical status (blunt).** No experimental confirmation; CDT is a theoretical/computational program at the Planck scale [ESTABLISHED — empirical record].

**Main successes.**
- Generates a phase with a macroscopic, extended, approximately 4-dimensional de Sitter-like universe emerging dynamically — nontrivial, since Euclidean DT failed at exactly this [ESTABLISHED, computationally].
- **Dimensional reduction:** the spectral dimension flows from $\approx 4$ at large scales to $\approx 2$ at short (Planckian) scales — a striking, reproducible feature also seen in asymptotic safety and Hořava–Lifshitz gravity [ESTABLISHED, computationally]. The cross-program recurrence of UV dimensional reduction is itself a notable hint (see [UNIFYING_PRINCIPLES.md](UNIFYING_PRINCIPLES.md)).

**Main problems / criticisms.**
- No proof of a true continuum limit; the relevant transition's order/universality is still under investigation [OPEN].
- Whether the imposed global time foliation is physical or an artifact that breaks the spirit of full diffeomorphism invariance / Lorentz symmetry is debated [CONTESTED].
- Matter coupling and recovery of particle physics are underdeveloped; results largely qualitative [OPEN].
- Heavy reliance on numerics, limited analytic control [OPEN].

**Testability.** In principle short-scale dimensional reduction could have indirect consequences, but there is no current experimental test [CONTESTED].

**Verdict.** A concrete, computationally honest attempt to define and evaluate the gravitational path integral, notable for dynamically producing a 4D universe and dimensional reduction. Remains a numerical program without a proven continuum limit, without matter, without empirical contact. **Genuinely open.** Epistemic tag: **[OPEN]**.

*Iteration-6 status refresh (2026-06-10):* first quantitative CDT–FRG contact — Ambjørn et al. (arXiv:2408.07808; PRD 110, 126006 (2024)) identify CDT’s de Sitter-phase infinite-volume limit with the FRG Gaussian/IR fixed point; data *permit* but do not establish a UV lattice fixed point; the 2026 Ambjørn–Loll review’s own status: “UV fixed point indicated, not established”. [→ [notes](notes/2026-06-10-iter6-background-independent-programs.md)]

---

## 5. Causal Set Theory (causets)

**Core idea.** Spacetime is fundamentally a discrete **partially-ordered set**: discrete elements with a causal (order) relation, plus a counting rule — *"order plus number equals geometry"*: Lorentzian geometry is recovered from the causal order (which fixes conformal/light-cone structure) and the element count (which fixes volume). Continuum spacetime is emergent and coarse-grained. Discreteness is implemented to preserve Lorentz invariance *statistically*, via random Poisson **sprinkling** (no preferred frame, unlike a lattice).

**What it claims to unify.** Quantum mechanics and gravity via a discrete substrate; uniquely, it combines discreteness with Lorentz invariance. Not a unification of forces.

**Mathematical status.** The kinematic framework (causal sets, sprinkling, the Hauptvermutung that two non-isometric continuum spacetimes cannot both approximate the same causet) is clearly defined; Lorentz invariance of sprinkling is a real strength [ESTABLISHED, conceptually]. The quantum dynamics — a sum over causets / classical sequential growth models — is far from complete; deriving a unique, physically correct dynamics and the continuum limit is unresolved [OPEN].

*Iteration-6 status refresh (2026-06-10):* the bare “unproven Hauptvermutung” is now too coarse — Müller (arXiv:2503.01719, preprint, v2 Dec 2025) splits it into precise variants with claimed truth values (one formulation false, one true; the countable-set version holds); whether the proven variant is the physically faithful (finite-Poisson-sprinkling) one is itself undecided [OPEN]. [→ [notes](notes/2026-06-10-iter6-background-independent-programs.md)]

**Empirical status (notable).** Causal set theory's most-cited claim to fame is a heuristic, order-of-magnitude **prediction** (Sorkin, ca. 1990, *before* the 1998 discovery of cosmic acceleration) that Poisson fluctuations in the number of spacetime elements yield a small, fluctuating cosmological constant of roughly the observed magnitude:
$$
\Lambda \sim \frac{1}{\sqrt{V}} \quad \text{(in Planck units)},
$$
where $V$ is the spacetime volume to the present. This is genuinely striking and predates the data, but it is a heuristic argument, not a derivation from a complete theory, and yields no sharp falsifiable number [CONTESTED/INFERENCE]. Beyond this, no experimental confirmation.

**Main successes.**
- Reconciles fundamental discreteness with Lorentz invariance via Poisson sprinkling — solving a problem that defeats naive lattice discretization [ESTABLISHED, conceptually].
- The Sorkin heuristic for a small fluctuating $\Lambda$ of the right order, made before acceleration was observed, is arguably the most interesting near-prediction of any discrete approach [CONTESTED/INFERENCE].
- Defines non-local but Lorentz-invariant d'Alembertian / curvature operators on causets [INFERENCE].

**Main problems / criticisms.**
- No complete quantum dynamics; the sum-over-causets and its continuum limit are unsolved [OPEN].
- The **entropy problem**: generic causets are non-manifoldlike (Kleitman–Rothschild "three-layer" posets dominate the counting), so recovering manifold-like spacetime is a known difficulty [OPEN].
- Matter coupling and the Standard Model are largely undeveloped [OPEN].
- The status of the $\Lambda$ result as a genuine test versus a suggestive heuristic [CONTESTED].

**Testability.** The fluctuating-$\Lambda$ scenario has potential cosmological signatures (dynamically varying dark energy), of current interest given hints of evolving dark energy in DESI-era data; nothing is confirmed and most predictions are inaccessible [CONTESTED].

*Iteration-6 status refresh (2026-06-10):* current concrete everpresent-Λ implementations are CMB-disfavored (Das–Nasiri–Yazdi, arXiv:2307.13743, preprint — program-internal stress test), and as of 2026-06-10 **no published confrontation with the DESI $w(z)$ posterior exists** — an identified gap [OPEN]. [→ [notes](notes/2026-06-10-iter6-background-independent-programs.md)]

**Verdict.** A philosophically clean, minimal proposal whose strengths (Lorentz-invariant discreteness; an early order-of-magnitude $\Lambda$ heuristic) are real, but lacking complete dynamics, a continuum-limit proof, and matter. **Open and underdeveloped relative to string/LQG, but conceptually distinctive.** Epistemic tag: **[OPEN]**.

---

## 6. AdS/CFT Correspondence and Holography

**Core idea.** A quantum gravity theory in a $(d+1)$-dimensional asymptotically anti-de Sitter (negatively curved) bulk is *exactly equivalent* (dual) to a non-gravitational conformal field theory on its $d$-dimensional boundary. The bulk geometry, including its radial dimension, is encoded in boundary data; bulk gravity emerges from boundary entanglement structure. The **Ryu–Takayanagi (RT)** formula identifies boundary entanglement entropy with the area of a bulk minimal surface,
$$
S_A = \frac{\text{Area}(\gamma_A)}{4 G_N},
$$
geometrizing entanglement. The canonical example is type IIB string theory on $\mathrm{AdS}_5 \times S^5$ dual to $\mathcal{N}=4$ super-Yang–Mills.

**What it claims to unify.** Quantum gravity with ordinary gauge/QFT — two descriptions of one system. Concretely realizes the holographic principle ('t Hooft, Susskind): gravitational degrees of freedom scale with boundary area, and spacetime geometry is linked to quantum information.

**Mathematical status.**
- An enormous, consistent body of checks (matching symmetries, operator/state spectra, correlators, integrability, thermodynamics) supports the conjecture; it is proven in some lower-dimensional and highly supersymmetric cases [INFERENCE — very strong].
- RT (and its covariant HRT and quantum-extremal-surface refinements) is a derived, internally rigorous result here [ESTABLISHED, within the framework].
- No general non-perturbative proof exists; it remains a conjecture (with overwhelming evidence) in the general case [OPEN].

**Empirical status (blunt).** No direct experimental confirmation as a theory of *our* universe, which is approximately de Sitter (positive $\Lambda$), **not** anti-de Sitter [ESTABLISHED — empirical record]. There is no established dS/CFT analog. AdS/CFT-inspired methods (holographic QCD; the shear-viscosity-to-entropy bound $\eta/s \approx \hbar/4\pi k_B$) give qualitatively useful, sometimes quantitatively suggestive results for strongly-coupled systems (quark–gluon plasma, some condensed-matter systems), but these are applications/analogies, not confirmations of holography as fundamental physics [INFERENCE].

**Main successes.**
- The most concrete, computationally productive realization of holography and "spacetime from entanglement"; manifestly unitary, giving a controlled setting where black-hole information is preserved [INFERENCE].
- Reproduces a unitary **Page curve** via quantum-extremal-surface / island computations, strongly supporting information conservation in evaporation within these models [INFERENCE].
- RT and entanglement-wedge reconstruction give a precise geometry–entanglement dictionary; linearized Einstein equations have been *derived* from the entanglement "first law" $\delta S = \delta \langle K \rangle$ (Faulkner et al.) [ESTABLISHED, within the framework].
- A practical tool generating real, if model-dependent, results for strongly-coupled QFT and transport [INFERENCE].

**Main problems / criticisms.**
- Validity is established essentially only for asymptotically-AdS, large-$N$, strong-coupling (Einstein-gravity) regimes; extension to de Sitter, flat space, finite $N$, and cosmology is unestablished — the central limitation [OPEN].
- No general non-perturbative proof [OPEN].
- Bulk locality, the black-hole interior, and observer-level information recovery remain incompletely understood [OPEN].
- Whether holographic lessons transfer to realistic, positively-curved cosmology [CONTESTED].

**Testability.** Not directly testable as fundamental physics of our universe (wrong sign of $\Lambda$); indirect analog tests via strongly-coupled lab/collider systems are suggestive but not decisive [CONTESTED].

**Verdict.** A profound, well-supported theoretical equivalence — the crown jewel of holography and the most rigorous arena for "spacetime from entanglement" and unitary black-hole evaporation. But it is a conjecture (overwhelmingly evidenced) restricted to anti-de Sitter space, and our universe is not anti-de Sitter. **[INFERENCE] for the duality within AdS; [SPECULATIVE] as a statement about our cosmos.** Epistemic tag: **[INFERENCE]** (within its domain of validity).

---

## 7. Entropic / Thermodynamic / Emergent Gravity

(Sakharov, Jacobson, Padmanabhan, Verlinde.)

**Core idea.** Gravity may not be fundamental but **emergent** — a thermodynamic/statistical effect of underlying microscopic degrees of freedom, analogous to how hydrodynamics or elasticity emerges from molecules.
- **Sakharov (1967):** "induced gravity" — the Einstein–Hilbert action arises from quantum vacuum fluctuations of matter fields.
- **Jacobson (1995):** the Einstein equations are *derived* as a local equation of state, applying the Clausius relation $\delta Q = T\,\delta S$ to all local Rindler horizons with entropy $\propto$ horizon area and the Unruh temperature $T = \hbar a / 2\pi c k_B$.
- **Padmanabhan:** gravitational field equations carry a thermodynamic structure (equipartition, surface "degrees of freedom").
- **Verlinde (2011):** gravity as an "entropic force" from information on holographic screens; later extended to galactic dynamics aiming to mimic dark matter.

**What it claims to unify.** Reframes gravity as emergent thermodynamics, unifying gravitational dynamics with thermodynamics/information theory and suggesting spacetime is a coarse-grained statistical entity. Verlinde's later work additionally aims to explain galactic "dark matter" phenomenology without a particle. See [domains/thermodynamics.md](domains/thermodynamics.md), [domains/statistical-mechanics.md](domains/statistical-mechanics.md), [domains/information-theory.md](domains/information-theory.md).

**Mathematical status.**
- **Jacobson's 1995 derivation is a genuine, theorem-level result** [ESTABLISHED]: given Bekenstein–Hawking entropy proportionality and the Clausius relation on local causal horizons, the Einstein equations follow as an equation of state.
- Sakharov's induced-gravity mechanism is well-defined [ESTABLISHED].
- Verlinde's entropic-force derivation is heuristic and was criticized as ill-defined/circular; his emergent-dark-matter proposal is qualitative, not derived from a complete microscopic theory [CONTESTED/SPECULATIVE]. Padmanabhan's reformulations are suggestive structural rewritings, not a microscopic theory [INFERENCE].

**Empirical status (blunt).** The core claim (gravity is emergent/thermodynamic) has **no distinguishing experimental confirmation**: by construction the derivation versions reproduce GR and make no new predictions [ESTABLISHED]. Verlinde's emergent-gravity formula gave some early successful galaxy rotation-curve and lensing fits (comparable to MOND), but fares poorly against the full data — clusters, the CMB acoustic peaks, the Bullet Cluster mass–gas offset, and structure formation — which strongly favor particle dark matter [CONTESTED / refuted at cosmological scale]. See [domains/cosmology.md](domains/cosmology.md).

**Main successes.**
- Jacobson's derivation of Einstein's equations as a horizon equation of state — a deep, rigorous structural result connecting gravity, thermodynamics, and horizon entropy [ESTABLISHED].
- Sakharov induced gravity: a concrete mechanism for an emergent Einstein–Hilbert action [ESTABLISHED].
- Sharpens the well-supported view that the horizon-entropy area law and the holographic principle point to emergent geometry, connecting to AdS/CFT-era "spacetime from entanglement" [INFERENCE].
- Verlinde's framework offered some economical, MOND-like galaxy-scale fits [CONTESTED].

**Main problems / criticisms.**
- None of these specifies the microscopic degrees of freedom whose thermodynamics *is* gravity; "emergent from what?" is unanswered [OPEN].
- Jacobson's result, though elegant, is a consistency/structural statement that by itself yields neither a quantum theory nor new predictions; whether "gravity is thermodynamics" is more than a suggestive analogy is debated [CONTESTED].
- Verlinde's emergent-dark-matter proposal fails against clusters, the CMB, and the Bullet Cluster [CONTESTED / refuted at cosmological scale].
- Recovering full nonlinear GR, quantum corrections, and the matter sector from a complete emergent picture is not achieved [OPEN].

**Testability.** The pure-derivation versions make no new testable predictions by design [CONTESTED]. Verlinde's dark-matter variant *is* testable — and is largely disfavored at **cluster and cosmological scales** (Bullet Cluster, CMB acoustic peaks, structure formation) [CONTESTED → disfavored]. *Correction (iteration 2):* galaxy–galaxy weak-lensing radial-acceleration tests (Brouwer et al. 2017, 2021) are fit *comparably well* by Verlinde EG and MOND and do **not** themselves falsify it — the decisive evidence against is at cluster/CMB scales, while a ≥6σ early/late-type RAR dependence challenges *all* baryon-only modifications; see [notes/2026-06-08-entropic-and-emergent-gravity.md](notes/2026-06-08-entropic-and-emergent-gravity.md).

**Verdict.** Two distinct things bundled together. (1) The thermodynamic-derivation insight (Sakharov, Jacobson, Padmanabhan) is genuinely deep and partly rigorous (Jacobson's is a real result), strongly suggesting gravity has thermodynamic/holographic character — but it identifies no microscopic substrate and makes no new predictions. (2) Verlinde's entropic-force and emergent-dark-matter extensions are heuristic and, at cosmological scales, empirically disfavored. **Treat the structural insight as established-but-non-predictive, and the emergent-dark-matter claim as contested-to-refuted.** Epistemic tag: **[CONTESTED]**.

---

## 8. ER=EPR and It-from-Qubit / Tensor-Network Spacetime

**Core idea.** Spacetime geometry and connectivity emerge from quantum entanglement.
- **ER=EPR (Maldacena–Susskind 2013):** the Einstein–Rosen bridge ("ER", a non-traversable wormhole) connecting two black holes is identical to the entanglement ("EPR") between them — every entangled pair is connected by a (possibly Planckian) geometric bridge.
- **It-from-qubit:** the fundamental ontology is quantum information; spacetime is built from the entanglement structure of an underlying quantum system.
- **Tensor networks** (MERA, HaPPY codes, random tensor networks) provide discrete toy models in which bulk geometry and a quantum error-correcting code emerge from a network of entangled degrees of freedom, concretely realizing RT.

**What it claims to unify.** Geometry/gravity with quantum information: entanglement *is* connectivity; emergent spacetime is the organization of an entangled state. Connects black-hole physics, quantum error correction, and holography. See [UNIFYING_PRINCIPLES.md](UNIFYING_PRINCIPLES.md) ("spacetime from entanglement") and [domains/information-theory.md](domains/information-theory.md).

**Mathematical status.**
- Tensor-network models rigorously reproduce key holographic features (RT entropy, bulk reconstruction as quantum error correction) in toy settings [INFERENCE, within AdS/CFT]. The "first-law → linearized Einstein equations from entanglement" result is concrete.
- **ER=EPR itself is a bold conjecture** supported by suggestive constructions (traversable wormholes via double-trace deformations; the thermofield-double / eternal-black-hole correspondence) but has no first-principles derivation and no proof it holds for generic entanglement [SPECULATIVE]. The general claim "spacetime = entanglement" is not a theorem.

**Empirical status (blunt).** No experimental confirmation [ESTABLISHED — empirical record]. There is no laboratory or astrophysical test of ER=EPR or of entanglement literally building spacetime. (Claims of "wormhole" simulation on quantum processors are simulations of toy holographic models, **not** observations of physical wormholes, and were widely criticized as overstated [CONTESTED].) These ideas live almost entirely within AdS/CFT-style theory.

**Main successes.**
- Tensor networks give a concrete, calculable mechanism for emergent bulk geometry and bulk reconstruction as quantum error correction — a genuine conceptual advance [INFERENCE].
- ER=EPR offers an elegant, unifying handle on several black-hole puzzles (reconciling entanglement structure with smooth horizons; aspects of the firewall paradox) [INFERENCE].
- Sharpens the RT "geometry = entanglement" dictionary and the derivation of linearized gravity from entanglement first laws [ESTABLISHED, structurally].

**Main problems / criticisms.**
- ER=EPR has no first-principles derivation; whether *generic* entanglement yields a smooth geometric connection is unknown [SPECULATIVE].
- Demonstrated only within AdS / large-$N$ holography; relevance to our de Sitter universe is unestablished [OPEN].
- The type-III von Neumann algebra structure of QFT means there is **no fundamental tensor factorization** of local regions, so "qubits of the field" and clean entanglement entropy are subtle/ill-defined without a cutoff — a real foundational gap for the literal it-from-qubit picture [OPEN].
- Full nonlinear, background-independent reconstruction of Einstein gravity from entanglement is not achieved (only linearized) [OPEN].

**Testability.** Essentially untestable with current means; proposals concern Planck/quantum-gravity-scale structure and special holographic settings [CONTESTED].

**Verdict.** An exciting, influential direction with real results inside AdS/CFT (tensor-network holography, bulk reconstruction as error correction, gravity-from-entanglement first laws). But ER=EPR and "spacetime is built from entanglement" as universal claims are bold conjectures, demonstrated only in special holographic models, with no empirical confirmation and unresolved foundational issues (type-III algebras, de Sitter). **Principled and promising, but speculative as fundamental physics.** Epistemic tag: **[SPECULATIVE]**.

---

## 9. Twistor Theory and the Scattering-Amplitudes Program (Amplituhedron)

**Core idea.**
- **Twistor theory** (Penrose, late 1960s): reformulate physics with **twistor space** — a complex projective space encoding null structure/light rays — as more fundamental than spacetime points; spacetime events become derived objects, with the hope that quantum and gravitational structure are more natural in twistor variables.
- **Modern amplitudes program:** scattering amplitudes in gauge theory (especially planar $\mathcal{N}=4$ super-Yang–Mills) have striking hidden simplicity invisible in Feynman diagrams. Twistor-inspired methods (BCFW recursion, twistor-string theory, Grassmannian formulations) and the **amplituhedron** (Arkani-Hamed–Trnka) recast amplitudes as the "volume" of a positive-geometry object, with locality and unitarity *emergent* rather than assumed.

**What it claims to unify.** Twistor theory aims to unify quantum mechanics and spacetime/gravity by changing the geometric arena. The amplitudes/amplituhedron program unifies scattering data with positive geometry and combinatorics, seeking to derive spacetime locality and quantum unitarity as emergent consequences.

**Mathematical status.**
- Twistor methods are rigorous, productive mathematical physics (the Penrose transform, twistor descriptions of massless fields and self-dual sectors, links to integrable systems and algebraic geometry) [ESTABLISHED].
- The amplitudes program has produced concrete, proven machinery: BCFW recursion, the Grassmannian formulation of $\mathcal{N}=4$ SYM amplitudes, and the amplituhedron reproducing planar $\mathcal{N}=4$ SYM integrands [ESTABLISHED, within its domain].
- Generalizing twistors to full nonlinear gravity (the "googly" / nonlinear-graviton problem) is a longstanding obstruction; the amplituhedron is established chiefly for planar $\mathcal{N}=4$ SYM — a maximally supersymmetric, conformal toy theory, not realistic theories with gravity [OPEN].

**Empirical status (blunt).** No new physical predictions / no distinguishing confirmation as fundamental physics [ESTABLISHED — empirical record]. Crucially, the machinery is enormously useful *practically*: modern on-shell/unitarity methods dramatically streamline real QCD and gravitational (post-Minkowskian) amplitude computations used for the LHC and for gravitational-wave waveform modeling. So it has indirect empirical relevance as a **calculational technology** — but the deeper claim that twistor/positive geometry is the fundamental substrate of spacetime is untested [INFERENCE].

**Main successes.**
- BCFW recursion, on-shell/unitarity methods, and the amplituhedron reveal genuine, proven hidden structure in gauge amplitudes (planar $\mathcal{N}=4$ SYM especially) [ESTABLISHED].
- These methods are practically transformative for amplitude computation in QCD (LHC) and gravitational two-body dynamics (gravitational-wave templates) — a real empirical payoff at the level of technique [ESTABLISHED].
- Suggestive evidence that locality and unitarity may be emergent from a deeper geometric/combinatorial object — a genuinely novel reframing [INFERENCE].
- Deep, ongoing two-way exchange with pure mathematics (algebraic geometry, combinatorics, positive geometry) [ESTABLISHED].

**Main problems / criticisms.**
- No extension of twistor theory to full nonlinear GR (the nonlinear-graviton problem) [OPEN].
- The amplituhedron is established for planar $\mathcal{N}=4$ SYM, not the real Standard Model or gravity; whether positive geometry reaches realistic theories is unresolved [OPEN].
- "Spacetime/locality is emergent from positive geometry" is a research aspiration, not an established result [SPECULATIVE].
- As a *fundamental* theory it supplies no dynamics for our universe and no contact with quantum gravity beyond toy models [INFERENCE].

**Testability.** No direct test of twistors-as-fundamental [CONTESTED, as fundamental physics]. Indirectly, the computational methods are validated daily against collider and gravitational-wave data — but that validates the *techniques*, not the foundational claim.

**Verdict.** Mathematically rich and genuinely successful — but in two senses that must not be conflated. As **computational technology** (BCFW, unitarity methods, amplituhedron for $\mathcal{N}=4$ SYM) it is [ESTABLISHED] and even empirically useful for LHC/LIGO calculations. As a candidate **foundational theory** (twistors/positive geometry as the substrate from which spacetime, locality, and quantum mechanics emerge) it is [SPECULATIVE], restricted to toy models, and untested. **The tag reflects the deeper foundational ambition.** Epistemic tag: **[SPECULATIVE]**.

---

## 10. Group Field Theory (GFT)

**Core idea.** A quantum field theory whose fields live on group manifolds (not spacetime), constructed so that its Feynman diagrams generate spin-foam amplitudes and its quanta are the "atoms of space" of LQG-style discrete geometry. GFT is a second-quantized reformulation of LQG/spin foams in which spacetime and geometry are meant to emerge from collective dynamics (e.g. a condensate phase) of geometric quanta.

**What it claims to unify.** A common field-theoretic framework unifying LQG, spin foams, and (via the perturbative expansion) discrete random-geometry / tensor-model approaches; aims to derive emergent continuum spacetime and cosmology from many-body dynamics of geometric quanta. Not a unification of forces.

**Mathematical status.** Well-defined as a class of QFTs on group manifolds; the GFT–spin-foam amplitude correspondence is concrete [INFERENCE]. Renormalization of GFT models (fixed-point/asymptotic-safety structure of certain GFTs) is an active, partially-developed area. Establishing the right model, proving the existence of a geometric (condensate) phase and a controlled continuum limit, and recovering smooth GR are unresolved [OPEN].

**Empirical status (blunt).** No experimental confirmation [ESTABLISHED — empirical record]. Connects to phenomenology mainly through **GFT cosmology**, where a condensate of GFT quanta is argued to yield effective Friedmann dynamics with a bounce — a theoretical derivation, not an observation.

**Main successes.**
- A principled second-quantized framework tying together spin foams, LQG, and tensor/random-geometry models, supplying a notion of summing over spin-foam complexes [INFERENCE].
- GFT condensate cosmology derives effective cosmological (bounce) dynamics from the microscopic theory — a concrete attempt at the micro-to-macro link that LQG lacks [INFERENCE].
- RG analyses give some control over continuum behavior [INFERENCE].

**Main problems / criticisms.**
- Which GFT model is correct, and whether any admits a geometric phase with the right continuum limit, is unresolved [OPEN].


*Iteration-6 status refresh (2026-06-10):* mean-field/Landau–Ginzburg evidence for a condensate transition now exists in realistic Lorentzian models (Marchetti–Oriti–Pithis–Thürigen, PRL 130, 141501 (2023); Lorentzian Barrett–Crane follow-up PRD 111, 026014 (2025) [author list unverified]); whether that phase is geometric/continuum-GR remains [OPEN]. [→ [notes](notes/2026-06-10-iter6-background-independent-programs.md)]
- Recovery of full classical GR and standard QFT/matter is not established [OPEN].
- Inherits the unsolved dynamics / semiclassical-limit problems of spin foams and LQG [INFERENCE].
- Largely formal; limited contact with observation beyond model-dependent cosmology [OPEN].

**Testability.** GFT cosmology could in principle leave imprints (bounce signatures in the CMB), but nothing is confirmed and predictions are model-dependent and currently inaccessible [CONTESTED].

**Verdict.** A technically sophisticated unifying framework for the discrete/loop family, valuable for a field-theoretic handle on spin-foam sums and a route to emergent cosmology. But highly formal, model-dependent, sharing the unsolved dynamics/continuum-limit problems of its parents, with no empirical confirmation. **Open and developmental.** Epistemic tag: **[OPEN]**.

---

## 11. Noncommutative Geometry (Connes program)

**Core idea.** Generalize geometry by replacing the commutative algebra of functions on a space with a **noncommutative algebra**, encoded in a *spectral triple* $(\mathcal{A}, \mathcal{H}, D)$ — an algebra, a Hilbert space, and a Dirac operator. Geometry is read off spectrally, allowing "spaces" with no ordinary points (Connes' reconstruction theorem recovers a Riemannian manifold from commutative spectral data). In physics: spacetime is taken as the product of ordinary 4D spacetime with a tiny *finite* noncommutative internal space; the Standard Model — its gauge group, fermion content, and Higgs sector — is then *derived* as the geometry of that internal space, with the Higgs appearing as part of the connection. Separately, noncommutativity of the coordinates themselves, $[x^\mu, x^\nu] = i\theta^{\mu\nu} \neq 0$, is a candidate Planck-scale structure providing a minimal length.

**What it claims to unify.** Gravity and the Standard Model geometrically: gauge fields and the Higgs arise on the same footing as gravity, as aspects of one noncommutative geometry. The **spectral action** yields the Einstein–Hilbert action plus the full SM action from a single geometric principle. See [domains/particle-physics.md](domains/particle-physics.md), [domains/mathematics.md](domains/mathematics.md).

**Mathematical status.** Noncommutative geometry is rigorous, deep mathematics (Connes; index theory, operator algebras, spectral reconstruction) [ESTABLISHED]. The spectral-triple formulation of the SM is mathematically precise. The "almost-commutative" construction reproduces the SM gauge group and representation content remarkably economically and relates couplings at a unification scale [INFERENCE/CONTESTED]. Specific predictions from the spectral action depend on assumptions about boundary conditions and the precise internal algebra [CONTESTED].

**Empirical status (blunt).** No confirmed distinguishing prediction, and a notable setback: an early, much-cited version predicted a Higgs mass around $\sim 170$ GeV, **excluded** by the 2012 discovery of the $\approx 125$ GeV Higgs [ESTABLISHED]. The framework was subsequently modified (adding a scalar "$\sigma$" field) to accommodate 125 GeV — a post-hoc adjustment, not a successful prediction [ESTABLISHED]. Coordinate noncommutativity could induce Lorentz violation / modified dispersion, tightly constrained by high-energy astrophysics with no positive signal [ESTABLISHED].

**Main successes.**
- A genuinely deep mathematical framework (operator-algebraic geometry, spectral reconstruction) of independent value [ESTABLISHED].
- Derives the SM's intricate gauge group, fermion representations, and Higgs sector from a compact geometric input — an elegant organizing principle that "explains" some SM structure as geometry [INFERENCE].
- Unifies gravitational and SM actions in one spectral action; offers a natural geometric origin for the Higgs as a connection [INFERENCE].

**Main problems / criticisms.**
- The original $\sim 170$ GeV Higgs-mass prediction was experimentally falsified; the model was adjusted afterward [ESTABLISHED].
- The construction is largely classical/effective-action; a full quantum theory (quantizing the spectral triple, controlling spectral-action quantum corrections) is not established [OPEN].
- The choice of internal algebra and the inputs yielding the SM are not uniquely forced; some appear engineered to match known physics [CONTESTED].
- Coordinate-noncommutativity models face strong LIV constraints and unresolved unitarity/causality issues (UV/IR mixing) [OPEN].

**Testability.** The SM-from-geometry version makes relations among couplings/masses that *are* in principle testable — and one such prediction was falsified, forcing modification. Coordinate noncommutativity is constrained by LIV searches. **Some genuine, if limited, falsifiability** [CONTESTED].

**Verdict.** Mathematically profound and conceptually attractive — it comes closer than most programs to "deriving" the SM's structure from one geometric principle, and it is honestly falsifiable (its original Higgs-mass prediction was killed by data, then patched). But it remains an effective/classical construction without a complete quantum theory, with non-unique inputs and no surviving confirmed prediction. **A serious, partly-falsified, still-open program.** Epistemic tag: **[OPEN]**.

---

## 12. Grand Unified Theories (GUTs)

**Core idea.** Embed the SM gauge group $SU(3)_c \times SU(2)_L \times U(1)_Y$ into a single larger *simple* gauge group — $SU(5)$, $SO(10)$, or Pati–Salam $SU(4) \times SU(2)_L \times SU(2)_R$ — spontaneously broken at $\sim 10^{16}$ GeV down to the SM. A single unified coupling splits into the three observed couplings; quarks and leptons share multiplets, explaining charge quantization. $SO(10)$ places a full SM generation plus a right-handed neutrino in one **16**-dimensional irreducible representation.

**What it claims to unify.** The strong, weak, and electromagnetic gauge interactions into one group with one gauge coupling; quarks and leptons into shared multiplets. **Does not include gravity.** Explains electric charge quantization (commensurate quark/lepton charges) and, in $SO(10)$, motivates the seesaw mechanism for small neutrino masses. See [domains/particle-physics.md](domains/particle-physics.md).

**Mathematical status.** GUTs are well-defined, renormalizable QFTs built from standard, rigorous machinery — far more mature and conventional than any quantum-gravity program [ESTABLISHED]. Their group theory, symmetry breaking, and RG running are fully under control.

**Empirical status (and partly negative).** Three pieces of indirect support, one sharp negative:
1. The three SM gauge couplings, run up via the RG, *nearly* meet near $\sim 10^{16}$ GeV — imperfectly in the plain SM, more accurately with low-scale supersymmetry [INFERENCE].
2. Charge quantization is observed (proton and electron charges equal to $\sim 1$ part in $10^{21}$) [ESTABLISHED].
3. $SO(10)$ naturally accommodates confirmed nonzero neutrino masses via right-handed neutrinos and the seesaw [INFERENCE].
4. **But the signature prediction — proton decay — has not been observed.** Super-Kamiokande and predecessors set lifetime bounds exceeding $\sim 10^{34}$ years (channel-dependent), which **exclude minimal non-supersymmetric $SU(5)$** and tightly constrain other models [ESTABLISHED]. GUTs are thus partially falsified (the simplest version is dead) and otherwise unconfirmed.

**Main successes.**
- Approximate gauge-coupling unification near $10^{16}$ GeV (notably improved with SUSY) is real, suggestive support [INFERENCE].
- Explains charge quantization elegantly — a fact the SM merely accommodates [ESTABLISHED].
- $SO(10)$ organizes a full fermion generation (with right-handed neutrino) into one multiplet and naturally yields the seesaw, fitting observed neutrino masses [INFERENCE].
- Provides a framework for baryogenesis via leptogenesis (tied to heavy Majorana neutrinos) [INFERENCE].

**Main problems / criticisms.**
- No proton decay observed; minimal $SU(5)$ excluded, other models squeezed — the central prediction is so far negative [ESTABLISHED].
- The unification scale ($\sim 10^{16}$ GeV) is far beyond direct reach, so most predictions are inaccessible [OPEN].
- Introduces a large hierarchy (the doublet–triplet splitting problem) and depends on unobserved heavy fields; SUSY GUTs require unobserved superpartners [OPEN].
- Does not include gravity; not a theory of everything [OPEN].

**Testability.** GUTs make the sharp, falsifiable prediction of **proton decay** with specific branching ratios and mass/mixing relations; ongoing and next-generation detectors (Hyper-Kamiokande, DUNE) probe the relevant lifetimes [ESTABLISHED — genuinely testable, a virtue]. Far more testable than any quantum-gravity program — and the simplest model has already been falsified.

**Verdict.** The most empirically grounded and falsifiable program here — conventional, mature QFT with concrete, testable predictions (proton decay, coupling unification, neutrino-mass relations). Its motivations are real and attractive. But the flagship prediction has not been seen, killing minimal $SU(5)$ and constraining the rest, while the unification scale keeps most physics out of reach. **A live, partly-falsified, genuinely scientific program — distinct in kind from the speculative quantum-gravity proposals.** Epistemic tag: **[OPEN]**.

---

## 13. Discrete / Computational Approaches (Wolfram hypergraph model; digital physics)

**Core idea.** The universe is fundamentally a discrete computational/combinatorial structure. In Wolfram's model, reality is a hypergraph evolving by simple local rewriting rules; space, time, particles, and laws are meant to emerge as large-scale features, with relativity emerging from causal-graph structure and quantum mechanics from multiway (branching/merging) evolution. More broadly, "digital physics" (Zuse, Fredkin, 't Hooft's cellular-automaton interpretation of QM) posits that physics is at bottom computation, and that continuum spacetime/QFT are emergent approximations.

**What it claims to unify.** Everything — spacetime, gravity, quantum mechanics, particle physics — as emergent features of a single underlying computational rule; a common discrete-computational substrate beneath relativity and quantum theory.

**Mathematical status.** Rich in suggestive constructions and terminology (causal graphs, multiway systems, "branchial space", claimed analogies to GR and QM) but, as of the knowledge cutoff, the Wolfram Physics Project has **not** produced a rigorous derivation of the Einstein equations, the Standard Model, or quantitative quantum-mechanical predictions from a specific rule [CONTESTED/SPECULATIVE]. Arguments are largely qualitative/heuristic and have not been validated by the broader physics community. 't Hooft's cellular-automaton interpretation is more carefully argued but still [SPECULATIVE/CONTESTED] and runs into the standard obstacle that Bell-inequality violations require either superdeterminism or abandoning measurement independence.

**Empirical status (blunt).** No distinguishing experimental confirmation and no novel quantitative prediction that has been tested [ESTABLISHED — empirical record]. No specific rule has been shown to reproduce known physics, let alone predict something new. Fundamentally discrete, Lorentz-violating substrates are constrained (and disfavored) by the same high-energy LIV tests that constrain other discrete approaches, though proponents argue Lorentz invariance emerges.

**Main successes.**
- A vivid conceptual picture of emergent space/time from causal structure, reproducing some qualitative features (causal-graph analogs of light cones) — at the level of analogy [CONTESTED].
- Connects to legitimate ideas (causal sets, holographic/computational-limit literature, the physical Church–Turing question) and to the broadly respectable view that the continuum may be effective [INFERENCE].

**Main problems / criticisms.**
- No derivation of quantitative physics: no specific Einstein equations, no SM spectrum, no tested numbers — the gap between analogy and physics is enormous and unbridged [CONTESTED/SPECULATIVE].
- Generic discrete substrates violate Lorentz invariance; exact emergent Lorentz invariance (as causal sets achieve via sprinkling) is not established here [OPEN].
- Reproducing QM (Bell violations, contextuality) from underlying determinism requires superdeterminism or giving up measurement independence — widely regarded as conspiratorial/unmotivated [CONTESTED].
- Methodological criticism: heavy reliance on suggestive terminology and rule-search without falsifiable, quantitative output; not validated by mainstream peer review at the level of a physical theory [CONTESTED].
- **Rule selection** — *which* rule is the universe? — has no principle; the framework can a posteriori accommodate almost anything, undermining predictivity [OPEN].

**Testability.** Proponents suggest possible signatures (discreteness effects, dimension fluctuations, deviations in extreme-energy or black-hole regimes), but no concrete, falsifiable, quantitative prediction has been put forward and tested [CONTESTED]. In practice currently untestable.

**Verdict.** The most speculative and least empirically/mathematically grounded program in this survey. The *general* idea that physics might have a discrete or computational substrate is legitimate and overlaps with more disciplined approaches (causal sets, holographic computational bounds). But the *specific* computational/hypergraph proposals have not derived known physics quantitatively, have made no tested predictions, face the standard discreteness (Lorentz) and quantum (Bell) obstacles, and are not validated by the community. **Suggestive metaphysics, not yet physics.** Epistemic tag: **[SPECULATIVE]**.

---

## 13a. Postquantum Classical–Quantum (CQ) Hybrid Gravity (Oppenheim program) — *added iteration 6 (2026-06-10)*

**Core idea.** Gravity is **fundamentally classical**; the conflict with quantum matter is resolved not by quantizing the metric but by coupling a classical metric to quantum matter through linear, completely positive, trace-preserving (CPTP) classical–quantum dynamics (Oppenheim, *A postquantum theory of classical gravity?*, arXiv:1811.03116; PRX 13, 041040 (2023)). Consistency forces the evolution of **both** metric and matter to be fundamentally stochastic, with built-in decoherence and no measurement postulate; the dynamics reduces to GR in the classical limit.

**What it claims to unify.** GR and quantum matter — by *denying* that gravity must be quantized. The direct negation of the gate assumption (gravity is non-classical) shared by Programs A and B.

**Mathematical status.** The CQ master-equation framework is explicit and the central structural result is a theorem within it: the **decoherence–diffusion trade-off** (Oppenheim–Sparaciari–Šoda–Weller-Davies, arXiv:2203.01982; Nat. Commun. 14, 7910 (2023)) — maintaining quantum coherence forces a minimum stochastic diffusion of the classical sector, observable as gravitational force noise [ESTABLISHED — theorem within the CQ framework]. Published consistency critiques exist (diffeomorphism invariance of the CQ path integral; pathologies of ultralocal/continuous realizations) [CONTESTED].

**Empirical status (the rare program with a distinguishing near-term test).** The trade-off is squeezed from both sides by existing data: Janse–Uitenbroek–van Everdingen–Plugge–Hensen–Oosterkamp (arXiv:2403.08912; Phys. Rev. Research 6, 033076 (2024)) compile force-noise bounds from single atoms to kg masses, lowering the diffusion upper bound by **at least 15 orders of magnitude** against the initial benchmarks for explicit models. Status of the three explicit kernels [ESTABLISHED]: ultralocal-continuous — dead (ruled out in the original paper); ultralocal-discrete — the atom-interferometry figure of merit now sits *below* the model's trade-off lower bound (excluded modulo the authors' stated caveats); non-local continuous — survives by ~1 order of magnitude. The three kernels are representative, not an exhaustive parametrization of CQ dynamics [INFERENCE].

**Main successes.** A mathematically explicit, internally consistent "gravity stays classical" alternative; a falsifiable, theorem-backed prediction being tested *now* with existing data; defines the **asymmetric gate-closure route** — complete falsification of the CQ kernels would close Program A/B's gate (is gravity non-classical?) from the classical side, possibly before BMV ever runs (see [EXPERIMENT_WATCHLIST.md](EXPERIMENT_WATCHLIST.md)).

**Main problems / criticisms.** Fundamental stochasticity and energy/momentum non-conservation pressure [CONTESTED]; **Hotta–Murk–Terno "QG in disguise" counter-pressure [CONTESTED]**: any CP classical–quantum dynamics admits an embedding into unitary quantum theory on an enlarged Hilbert space (plus an exhibited closed CP system violating angular-momentum conservation) — if it stands, the hybrid description is an effective sector of a quantum theory and the quantum-vs-classical gate dichotomy loses foundational sharpness, even while the diffusion *phenomenology* stays falsifiable; no published concession found as of 2026-06. Nonlocal classical mediators (Hall–Reginatto-type) sit outside the trade-off's reach.

**Testability.** Yes — the program's defining virtue: decoherence–diffusion force noise, currently running on archival data; complementary to (and faster than) BMV.

**Verdict.** A genuine, falsifiable competitor at the gate. Its existence sharpens, by contrast, the wiki's NOT-YET-PHYSICS demotion of the central wager: a surveyed program *can* carry a distinguishing test, so the demotion cannot be excused as "no quantum-gravity-adjacent program is testable." Simplest realizations close to excluded; class not excluded; fundamentality contested. Epistemic tag: **[CONTESTED]** (framework established as mathematics; physics contested on both experimental and embedding fronts). [→ [notes](notes/2026-06-10-iter6-background-independent-programs.md), [notes](notes/2026-06-10-iter6-qg-phenomenology.md)]

## 13b. The Swampland Dark-Dimension Scenario (string-phenomenology corner) — *added iteration 6 (2026-06-10)*

**Core idea.** Combine the swampland distance/duality conjectures with the observed value of Λ to argue for **one mesoscopic extra dimension** at $\ell\sim\lambda\,\Lambda^{-1/4}$ — central value ~1 μm, with the 0.1–10 μm band reflecting the O(1) spread in λ — carrying a Kaluza–Klein graviton tower, neutrino-mass relations tied to $\Lambda^{1/4}$, and a species scale ~$10^9$–$10^{10}$ GeV (Montero–Vafa–Valenzuela, arXiv:2205.12293; JHEP 02 (2023) 022). KK-graviton dark matter is the separate follow-up (Gonzalo–Montero–Obied–Vafa, arXiv:2209.09249 [unverified]).

**What it claims to unify.** Not a new framework — a falsifiable *corner* of string theory connecting Λ, neutrino masses, dark matter, and short-distance gravity.

**Mathematical status.** Conjecture-stack: rests on swampland conjectures that are themselves [SPECULATIVE]; internally consistent dimensional analysis with O(1) ambiguities acknowledged by proponents.

**Empirical status / Testability.** The defining virtue: **micron-scale deviations from Newtonian gravity** — torsion-balance inverse-square-law tests need roughly an order-of-magnitude improvement to reach the predicted band; a null through the band would *strongly disfavor* (not logically exclude, given the O(1) ambiguities) the scenario [INFERENCE]. Extension to an evolving dark sector: Bedroya–Obied–Vafa–Wu (arXiv:2507.03090, v3 May 2026) tie dark-energy evolution to a varying dark-matter mass via a rolling scalar and claim DESI and SN data independently favor the predicted O(1) couplings, with apparent phantom ($w<-1$) behavior naturally mimicked [CONTESTED — proponent fit, prior-dependent]. This adds independent weight to the wiki's eternal-dS wrong-idealization hedge (A-20) without resolving it.

**Related string-side status note.** The dS-vacua debate moved from "no construction" to "candidates, control unestablished": McAllister–Moritz–Nally–Schachner, *Candidate de Sitter Vacua* (arXiv:2406.13751; PRD 111, 086015 (2025)) assemble for the first time all KKLT components in explicit Calabi–Yau orientifolds, exhibiting ~30 candidate metastable dS vacua (per the arXiv listing) at leading order in $\alpha'$ and $g_s$; stability beyond leading order is [OPEN].

**Main problems / criticisms.** Conjecture-dependence; O(1) ambiguities make the falsifier a band, not a line; the DESI fit is a proponent analysis [CONTESTED]; tension between the dark-dimension corner and the KKLT-candidate corner of the same theory is unaddressed.

**Verdict.** A falsifiable swampland corner with a dated experimental hook (micron-scale ISL) and a contested claim on live cosmology data. Like the CQ entry, its testability sharpens by contrast the not-yet-physics status of the central wager. Epistemic tag: **[SPECULATIVE]** (consequences falsifiable; foundations conjectural). [→ [notes](notes/2026-06-10-iter6-background-independent-programs.md)]

---

## 14. Comparative table

Maturity is a coarse judgment of mathematical/internal development, not of truth.

| Program | Maturity | Distinguishing empirical test? | Main strength | Main weakness |
|---|---|---|---|---|
| String / M-theory + SUGRA | Very high (perturbative); low (non-perturbative) | None at accessible energies; model-dependent SUSY/extra-dim signatures absent | Perturbatively finite gravity; black-hole microstate counting; AdS/CFT | Landscape destroys predictivity; SUSY & extra dimensions unobserved; no non-perturbative definition |
| Loop Quantum Gravity / Spin Foams | High (kinematics); low (dynamics) | LIV / LQC bounce signatures — no positive signal; LIV tightly bounded | Background-independent quantization; discrete area/volume spectra | Dynamics ambiguous; semiclassical limit unproven; no matter sector |
| Asymptotic Safety | Medium–high (FRG) | None clean; indirect SM-coupling hints (contested) | Most economical: QFT all the way up; robust FRG fixed-point evidence | Truncation-dependent; Lorentzian/unitarity issues; no proof beyond truncations |
| Causal Dynamical Triangulations | Medium (numerical) | None; possible UV dimensional-reduction echoes | Dynamically yields 4D de Sitter-like universe; dimensional reduction | No proven continuum limit; foliation may break Lorentz spirit; no matter |
| Causal Set Theory | Medium (kinematics); low (dynamics) | Fluctuating-$\Lambda$ heuristic (predates 1998!); varying dark energy | Lorentz-invariant discreteness via sprinkling; early $\Lambda$ heuristic | No complete dynamics; entropy/manifoldness problem; no matter |
| AdS/CFT & Holography | Very high (within AdS) | None for our universe (wrong sign of $\Lambda$); analog tests only | Exact gauge/gravity duality; unitary Page curve; RT entanglement geometry | Restricted to AdS, large-$N$; our universe is de Sitter; no general proof |
| Entropic / Emergent Gravity | High (Jacobson); low (Verlinde DM) | Derivation versions: none by design. Verlinde DM: testable & disfavored | Jacobson derives Einstein eqs as equation of state | No microscopic substrate; Verlinde DM fails clusters/CMB/Bullet |
| ER=EPR / It-from-Qubit / Tensor Networks | Medium (within AdS) | None; "wormhole" sims are toy-model, not physical | Tensor-network holography; bulk reconstruction = error correction | ER=EPR unproven for generic entanglement; type-III algebra obstruction; AdS-only |
| Twistors / Amplituhedron | High (as technique); low (as foundation) | None as foundation; techniques validated daily (LHC/LIGO) | Proven hidden amplitude structure; transformative computation | Planar $\mathcal{N}=4$ SYM toy model; no nonlinear gravity; emergence is aspiration |
| Group Field Theory | Medium (formal) | None; GFT-cosmology bounce signatures (inaccessible) | Field-theoretic handle on spin-foam sums; emergent cosmology route | Model-dependent; inherits LQG dynamics problem; highly formal |
| Noncommutative Geometry (Connes) | High (math); medium (physics) | Yes — and a Higgs-mass prediction was falsified, then patched | "Derives" SM gauge group/Higgs from one geometric principle | Classical/effective only; non-unique inputs; falsified original prediction |
| Grand Unified Theories | Very high (conventional QFT) | **Yes — proton decay; minimal $SU(5)$ already excluded** | Charge quantization; coupling unification; seesaw in $SO(10)$ | Proton decay unseen; no gravity; unification scale inaccessible |
| Discrete / Computational (Wolfram, digital physics) | Low | None concrete; in practice untestable | Vivid emergence picture; overlaps legitimate discrete ideas | No quantitative derivation of known physics; Lorentz & Bell obstacles; rule selection arbitrary |
| Postquantum CQ hybrid gravity (Oppenheim) | Medium (explicit framework + trade-off theorem) | **Yes — decoherence–diffusion trade-off; simplest explicit models squeezed ≥15 orders (PRResearch 2024); class not excluded** | Falsifiable "gravity stays classical" alternative; gate-closure from the classical side | Stochasticity/conservation pressure; "QG in disguise" embedding claim [CONTESTED] |
| Swampland dark dimension | Low–medium (conjecture stack) | **Yes — micron-scale inverse-square-law band; DESI evolving-dark-energy fit claimed [CONTESTED]** | Dated experimental hook tying Λ, neutrinos, dark matter | Rests on [SPECULATIVE] conjectures; O(1) band, not a line; proponent-fit cosmology |

---

## 15. Honest assessment of the field

A few conclusions that the survey supports, stated plainly:

1. **No program has distinguishing experimental confirmation as fundamental physics** [ESTABLISHED — empirical record]. The single program that makes a sharp, falsifiable, near-term prediction (GUTs / proton decay) has had its simplest version *falsified*, and the noncommutative-geometry program had a genuine prediction (Higgs mass) *falsified* and then patched. Honest falsifiability and being correct are different things; only the former has clearly occurred, and only negatively.

2. **The empirical–ambition trade-off is structural, not accidental** [INFERENCE]. The Planck scale is $\sim 10^{15}$ times beyond direct reach, so any program reaching it is forced into Planck-scale invisibility. GUTs are testable precisely because they stop short of gravity. This is a feature of where the relevant physics lives, not (mainly) a failure of imagination.

3. **Some internal results are genuinely established and will survive** regardless of which program (if any) is ultimately correct [INFERENCE]: black-hole entropy $S = A/4\ell_{\text{Pl}}^2$ and its microscopic countings (Strominger–Vafa; LQG punctures); AdS/CFT as a calculational duality; Jacobson's equation-of-state derivation; RT and the entanglement first-law derivation of linearized gravity; BCFW/unitarity amplitude methods; CDT/asymptotic-safety UV dimensional reduction. These are the durable deposits.

4. **Convergent hints recur across independent programs** [INFERENCE], suggesting they track something real even though no single program is confirmed: (i) the holographic area-law of entropy and "spacetime from entanglement"; (ii) UV dimensional reduction to $\approx 2$; (iii) some form of minimal length / discreteness near $\ell_{\text{Pl}}$; (iv) the deep role of horizon thermodynamics. See [UNIFYING_PRINCIPLES.md](UNIFYING_PRINCIPLES.md).

5. **The de Sitter problem is the field's quiet scandal** [INFERENCE/OPEN]. Our universe has a small *positive* cosmological constant, yet the most rigorous tool (AdS/CFT) requires *negative* curvature, string theory struggles to construct stable de Sitter vacua (KKLT vs. swampland), and most programs say little about realistic cosmology. The approach with the best (if heuristic) track record on $\Lambda$ — causal sets — is among the least developed dynamically.

6. **"Untestable" should be parsed carefully** [INFERENCE]. It can mean *currently inaccessible* (most quantum-gravity programs — a contingent limitation) or *unfalsifiable in principle* (the strongest critique, leveled at the string landscape and at rule-selection in computational models — a methodological objection). These are not the same, and conflating them is sloppy. A domain-of-validity limitation (AdS-only holography) is also distinct from a logical inconsistency: none of these programs is known to be *internally inconsistent*; they are unconfirmed and, in places, incomplete. See [GAPS_AND_CONTRADICTIONS.md](GAPS_AND_CONTRADICTIONS.md) and [EPISTEMICS.md](EPISTEMICS.md).

7. **Recommended posture.** Treat the most-developed mathematical frameworks (string theory, AdS/CFT) as *possibly-correct mathematics whose relation to nature is unestablished*; treat the conservative QFT programs (asymptotic safety, GUTs) as the most scientifically orthodox bets; treat the emergent/information-theoretic ideas as *deep structural clues* rather than finished theories; and treat the computational/hypergraph proposals as metaphysics awaiting a quantitative result. Update sharply on any of: a proton-decay detection, a SUSY discovery, a controlled de Sitter holography, or a Planck-scale LIV signal — none of which has occurred [ESTABLISHED — empirical record].

The field is not in crisis so much as in a long evidential drought imposed by the Planck scale. Intellectual honesty requires holding the best ideas as *promising and unconfirmed*, neither overselling decades of beautiful mathematics as established physics nor dismissing it for failing a test no foreseeable experiment can administer.

---

## See also

- [UNIFYING_PRINCIPLES.md](UNIFYING_PRINCIPLES.md) — cross-program structural clues (holography, emergence, dimensional reduction)
- [HYPOTHESES.md](HYPOTHESES.md) — specific falsifiable conjectures extracted from these programs
- [OPEN_PROBLEMS.md](OPEN_PROBLEMS.md) — the unsolved-but-consistent problems each program faces
- [GAPS_AND_CONTRADICTIONS.md](GAPS_AND_CONTRADICTIONS.md) — distinguishing inconsistencies from domain-of-validity mismatches
- [THEORY_MAP.md](THEORY_MAP.md) — how the programs relate to the established theories they extend
- [ASSUMPTIONS_LEDGER.md](ASSUMPTIONS_LEDGER.md) — assumptions (SUSY, discreteness, holography) on which programs rest
- [CONSTANTS_AND_SCALES.md](CONSTANTS_AND_SCALES.md) — Planck scale, $\Lambda$, and the energy gap
- [EPISTEMICS.md](EPISTEMICS.md) — definitions of the epistemic markers used here
- Domain pages: [domains/quantum-field-theory.md](domains/quantum-field-theory.md), [domains/general-relativity.md](domains/general-relativity.md), [domains/particle-physics.md](domains/particle-physics.md), [domains/cosmology.md](domains/cosmology.md), [domains/information-theory.md](domains/information-theory.md), [domains/thermodynamics.md](domains/thermodynamics.md), [domains/mathematics.md](domains/mathematics.md)

## References

See [BIBLIOGRAPHY.md](BIBLIOGRAPHY.md) for full citations. Landmark sources referenced above include (real, standard works): Polchinski, *String Theory* (vols. I–II); Maldacena (1997) on AdS/CFT; Strominger & Vafa (1996) on black-hole microstate counting; Rovelli, *Quantum Gravity*, and Rovelli & Vidotto, *Covariant Loop Quantum Gravity*; Weinberg (1979) and Reuter on asymptotic safety; Ambjørn, Jurkiewicz & Loll on CDT; Sorkin and Bombelli–Lee–Meyer–Sorkin on causal sets; Ryu & Takayanagi (2006); Jacobson (1995), *"Thermodynamics of Spacetime"*; Sakharov (1967) induced gravity; Verlinde (2011, 2016); Maldacena & Susskind (2013) on ER=EPR; Penrose & Rindler, *Spinors and Space-Time*, and Arkani-Hamed & Trnka on the amplituhedron; Connes, *Noncommutative Geometry*, and Chamseddine–Connes–Marcolli on the spectral Standard Model; Goroff & Sagnotti (1985) on two-loop gravity divergences. Flag: specific numerical bounds (e.g. proton-lifetime limits, LIV bounds) are order-of-magnitude as stated and should be checked against the current Particle Data Group review before citation.
