---
title: Constants and Scales
type: reference
tags: [reference, constants, planck-scale, fine-tuning]
updated: 2026-06-08
---

# Constants and Scales

Status: Stable scaffold — quantitative claims pinned to CODATA/SI conventions; interpretive claims tagged.
Last updated: 2026-06-08

This page catalogs the dimensionful and dimensionless parameters of fundamental physics, the unit conventions that distinguish *physical* content from *bookkeeping*, the characteristic scales (especially the Planck scale), the free-parameter count of the Standard Model + ΛCDM concordance cosmology, and the deepest fine-tuning puzzles (hierarchy, cosmological constant). It is the quantitative companion to [THEORY_MAP.md](THEORY_MAP.md), [UNIFICATION_LANDSCAPE.md](UNIFICATION_LANDSCAPE.md), and the [ASSUMPTIONS_LEDGER.md](ASSUMPTIONS_LEDGER.md). For the meaning of epistemic tags see [EPISTEMICS.md](EPISTEMICS.md).

---

## 1. Dimensionful constants: physics versus convention

The "fundamental constants" most often quoted are:

| Symbol | Name | Role |
|---|---|---|
| $c$ | speed of light | limiting speed; spacetime metric signature scale |
| $\hbar$ | reduced Planck constant | quantum of action |
| $G$ | Newton's gravitational constant | strength of gravity |
| $k_B$ | Boltzmann constant | energy-per-temperature conversion |
| $e$ | elementary charge | quantum of electric charge |

A crucial and frequently muddled point: **only dimensionless ratios carry frame- and unit-independent physical content** [ESTABLISHED]. The numerical *value* of a dimensionful constant depends on the chosen unit system and can be altered (even set to 1) by a change of units without changing any predicted experimental outcome. The cleanest articulation is due to Duff, Okun, and Veneziano, who debated how many dimensionful constants are "truly fundamental" and concluded that the number of *operationally meaningful* constants is a matter of convention; the physically invariant content lives entirely in dimensionless combinations [CONTESTED in emphasis, but the operational core is ESTABLISHED]. See [GLOSSARY.md](GLOSSARY.md) for "dimensionless constant."

Concretely:

- $c$ and $\hbar$ and $k_B$ are best understood as **unit-conversion factors**: $c$ converts seconds to meters (relating the time and space components of one four-vector), $\hbar$ converts energy to frequency, and $k_B$ converts temperature to energy [INFERENCE — widely accepted; this is the logic behind natural units]. Setting $c=\hbar=k_B=1$ removes them entirely without loss of physics.
- $G$ sets the scale at which gravity becomes strong relative to quantum effects; its dimensionful value defines the Planck scale (§3). Whether $G$ is "more physical" than $c$ or $\hbar$ is itself partly conventional, but it cannot be removed *simultaneously* with $c$ and $\hbar$ — it instead fixes the unit of mass/length/time once those are chosen.
- $e$ appears physically only through the dimensionless fine-structure constant $\alpha$ (§6).

This is why one can build a system (Planck units, §3) in which $c=\hbar=G=k_B=1$: dimensionful constants are partly the residue of historically chosen units, and partly markers of where one regime of physics crosses into another.

> Caveat to flag [ESTABLISHED]: a *variation* of a single dimensionful constant (e.g. "did $c$ change?") is not, by itself, an operationally well-posed question without specifying which dimensionless ratio is held fixed. Only variation of dimensionless constants is observable (§7). This is the "constants of nature are truly constant" assumption examined in the [ASSUMPTIONS_LEDGER.md](ASSUMPTIONS_LEDGER.md).

---

## 2. The 2019 SI redefinition

Since 20 May 2019, the SI base units are **defined by fixing exact numerical values of seven defining constants** rather than by physical artifacts [ESTABLISHED]. The relevant fixed values are:

$$
\begin{aligned}
\Delta\nu_{\mathrm{Cs}} &= 9\,192\,631\,770\ \text{Hz} \quad (\text{Cs-133 hyperfine transition}),\\
c &= 299\,792\,458\ \text{m/s},\\
h &= 6.626\,070\,15\times10^{-34}\ \text{J·s},\\
e &= 1.602\,176\,634\times10^{-19}\ \text{C},\\
k_B &= 1.380\,649\times10^{-23}\ \text{J/K},\\
N_A &= 6.022\,140\,76\times10^{23}\ \text{mol}^{-1},\\
K_{\mathrm{cd}} &= 683\ \text{lm/W}.
\end{aligned}
$$

These are now **exact by definition** (zero uncertainty), which inverts the historical relationship: the kilogram is defined *via* the fixed $h$ (and the Kibble balance / Avogadro sphere realize it), not the other way around [ESTABLISHED].

Interpretive note [INFERENCE]: this codifies the §1 lesson institutionally. Fixing $c$, $h$, $e$, $k_B$ turns them into pure conventions of the unit system; what remains experimentally determined are the *dimensionless* constants and the values of constants — such as $G$ and the fine-structure constant $\alpha$ — that the SI does **not** fix. In particular $G$ remains the least precisely measured fundamental constant (relative uncertainty $\sim10^{-5}$, with persistent inter-experiment discrepancies) [ESTABLISHED], and $\alpha$ is measured, not fixed.

---

## 3. Natural units and the Planck scale

**Natural (particle-physics) units** set $c=\hbar=1$, so masses, momenta, energies, and inverse lengths/times are all measured in energy units (typically GeV). Useful conversions [ESTABLISHED]:

$$
\hbar c \approx 0.1973\ \text{GeV·fm}, \qquad (\hbar c)^2 \approx 0.3894\ \text{GeV}^2\,\text{mb}.
$$

**Planck units** further set $G=k_B=1$, defining scales from $c,\hbar,G$ alone:

$$
\ell_P=\sqrt{\frac{\hbar G}{c^3}}\approx 1.616\times10^{-35}\ \text{m},\qquad
t_P=\sqrt{\frac{\hbar G}{c^5}}\approx 5.39\times10^{-44}\ \text{s},
$$
$$
M_P=\sqrt{\frac{\hbar c}{G}}\approx 2.176\times10^{-8}\ \text{kg}\approx 1.22\times10^{19}\ \text{GeV}/c^2,
$$
$$
T_P=\frac{M_P c^2}{k_B}\approx 1.42\times10^{32}\ \text{K}.
$$

(Conventions vary: the *reduced* Planck mass $\overline{M}_P = M_P/\sqrt{8\pi}\approx 2.435\times10^{18}$ GeV is standard in cosmology and quantum gravity, because $8\pi G$ appears in the Einstein equations. Always check which is meant — see [CONSTANTS_AND_SCALES.md](CONSTANTS_AND_SCALES.md) §3 here as the canonical reference.)

**What the Planck scale means.** [INFERENCE — strong consensus] The Planck energy $M_P c^2\sim1.22\times10^{19}$ GeV is the scale at which the dimensionless gravitational coupling of a process, $\sim (E/M_P c^2)^2$, becomes $O(1)$: graviton exchange is no longer perturbatively small, and the effective-field-theory treatment of general relativity as a quantum field theory loses predictivity (an infinite tower of counterterms with uncontrolled coefficients). This is the clearest *internal* signal that quantum field theory on a fixed background must be replaced; see [domains/quantum-field-theory.md](domains/quantum-field-theory.md) and [domains/general-relativity.md](domains/general-relativity.md).

**Critical caveat — what the Planck scale does NOT establish** [ESTABLISHED that this is the correct caution]:

- It is **not** a proven minimum length. The frequent claim "$\ell_P$ is the shortest measurable distance" is a *heuristic/conjecture*, motivated by gedanken arguments (a probe localizing to $\ell_P$ has energy $\sim M_P$, forming a black hole) and realized in *some* quantum-gravity frameworks (generalized uncertainty principles, string theory's minimal length, loop quantum gravity's discrete area/volume spectra). But no framework with this feature is experimentally confirmed, and a fundamental minimum length is in tension with exact Lorentz invariance unless implemented carefully (e.g. via deformed/doubly-special relativity, which is [SPECULATIVE]). Tag: [SPECULATIVE / OPEN].
- The Planck scale marks where *naive perturbative* gravity-as-EFT fails, **not** necessarily where new physics first appears. New physics may intervene far below $M_P$ (a GUT scale $\sim10^{16}$ GeV, a seesaw scale $\sim10^{9\text{–}15}$ GeV, TeV-scale states), or — in scenarios like large extra dimensions or asymptotic safety — the *effective* scale of strong gravity could differ from $M_P$ [SPECULATIVE]. See [OPEN_PROBLEMS.md](OPEN_PROBLEMS.md).

---

## 4. Free parameters of the Standard Model

The Standard Model is a renormalizable QFT (see [domains/particle-physics.md](domains/particle-physics.md)) whose Lagrangian, once the gauge group $SU(3)_c\times SU(2)_L\times U(1)_Y$ and the fermion representations are fixed, contains a finite set of numbers determined only by experiment. The commonly cited count is **~19 free parameters for the minimal SM** (massless neutrinos), grouped as follows [ESTABLISHED as a counting fact, modulo convention]:

| Group | Count | Parameters |
|---|---|---|
| Gauge couplings | 3 | $g_s$, $g$, $g'$ (equivalently $\alpha_s,\ \alpha_{\mathrm{em}},\ \sin^2\theta_W$) |
| Charged-fermion masses / Yukawas | 9 | 6 quark + 3 charged-lepton masses |
| Quark mixing (CKM) | 4 | 3 angles + 1 CP-violating phase |
| Higgs sector | 2 | vev $v\approx246$ GeV (or $\mu^2$) and quartic $\lambda$ (equivalently $m_h, v$) |
| QCD vacuum angle | 1 | $\bar\theta_{\mathrm{QCD}}$ |
| **Total (minimal SM)** | **19** | |

> Convention warning [ESTABLISHED]: the exact integer depends on bookkeeping. Some authors quote 18 (omitting $\bar\theta$, since it is observationally consistent with zero — see strong-CP, §8 / [OPEN_PROBLEMS.md](OPEN_PROBLEMS.md)); some quote $G$ as a 20th if gravity is appended. Treat "19" as a convention, not a theorem.

**Neutrino sector.** Oscillations prove neutrinos are massive (the one laboratory-confirmed breakdown of the *minimal* SM — see [GAPS_AND_CONTRADICTIONS.md](GAPS_AND_CONTRADICTIONS.md)), adding parameters:

- **Dirac neutrinos:** $+3$ masses $+3$ PMNS angles $+1$ Dirac phase $=+7$ → **~26**.
- **Majorana neutrinos:** as above $+2$ additional Majorana phases $=+9$ → **~28**.

Whether neutrinos are Dirac or Majorana is [OPEN], decided in principle by neutrinoless double-beta decay (see [domains/particle-physics.md](domains/particle-physics.md)). So "the SM has ~26–28 parameters including neutrinos" is the honest statement [ESTABLISHED as counting; the *physics* of the neutrino sector is partly OPEN].

**Cosmology.** The base ΛCDM concordance model adds **6 parameters** (§5), giving the often-quoted grand total of **~26–31** for "SM + ΛCDM" depending on neutrino assumptions and on whether one counts $G$ and overlapping inputs. [ESTABLISHED as a rough convention; the precise number is not canonical.]

The brute existence of these ~19–31 *inputs* — and especially the wild hierarchies among them (the top/electron Yukawa ratio is $\sim10^5$; see §6) — is the strongest sense in which the SM is *descriptive, not explanatory*. See [OPEN_PROBLEMS.md](OPEN_PROBLEMS.md) (the flavor puzzle) and [HYPOTHESES.md](HYPOTHESES.md).

---

## 5. ΛCDM cosmological parameters

The base **six-parameter ΛCDM** model (see [domains/cosmology.md](domains/cosmology.md)) is conventionally specified as [ESTABLISHED as the standard parametrization]:

| Parameter | Meaning |
|---|---|
| $\Omega_b h^2$ | physical baryon density |
| $\Omega_c h^2$ | physical cold dark matter density |
| $100\,\theta_{MC}$ (or $H_0$) | acoustic angular scale / expansion rate |
| $\tau$ | reionization optical depth |
| $A_s$ (or $\ln(10^{10}A_s)$) | primordial scalar amplitude |
| $n_s$ | scalar spectral index |

Representative values (round numbers; consult primary sources for precision and error bars — see [BIBLIOGRAPHY.md](BIBLIOGRAPHY.md)): the scalar tilt is measured to be slightly red, $n_s\approx0.965$ [ESTABLISHED]; the universe is spatially flat to sub-percent level [ESTABLISHED]; and $H_0\approx67\text{–}73$ km/s/Mpc depending on probe — the unresolved **Hubble tension** at the $\sim4$–$6\sigma$ level [CONTESTED]. Spatial curvature $\Omega_k$, the dark-energy equation of state $w$, neutrino mass $\sum m_\nu$, and extra relativistic species $N_{\mathrm{eff}}$ are held fixed in the base model but are standard *extensions* (each a probe of physics beyond base ΛCDM). $N_{\mathrm{eff}}\approx3.044$ is the SM prediction for three neutrino species including non-instantaneous decoupling [ESTABLISHED]. See [GAPS_AND_CONTRADICTIONS.md](GAPS_AND_CONTRADICTIONS.md) for the $H_0$ and $S_8$ tensions.

---

## 6. Important dimensionless numbers

These are the genuinely physical, unit-independent constants [ESTABLISHED values; explanations as noted]:

- **Fine-structure constant:**
$$
\alpha=\frac{e^2}{4\pi\varepsilon_0\hbar c}\approx\frac{1}{137.036}\approx7.297\times10^{-3}.
$$
It is the coupling of QED at low (zero-momentum) energy. It **runs**: at the $Z$ pole $\alpha(M_Z)\approx 1/128$ [ESTABLISHED]. The integer "137" is famously suggestive but has no known fundamental significance — attempts to derive it (Eddington and others) are regarded as numerology [CONTESTED → effectively OPEN, with strong consensus that no accepted derivation exists]. The value of $\alpha$ is *not* explained by the SM; it is an input (§4).
- **Proton-to-electron mass ratio:**
$$
\mu \equiv \frac{m_p}{m_e}\approx 1836.15.
$$
Most of the proton mass is QCD binding/gluon-field energy, *not* the sum of quark rest masses [ESTABLISHED]; thus $\mu$ is largely a statement about $\Lambda_{\mathrm{QCD}}$ relative to the electron Yukawa, intertwining the strong sector with electroweak symmetry breaking.
- **Strong coupling:** $\alpha_s(M_Z)\approx0.118$ [ESTABLISHED], running to small values at high energy (asymptotic freedom) and to strong coupling near $\Lambda_{\mathrm{QCD}}\sim200$ MeV.
- **Weak mixing angle:** $\sin^2\theta_W\approx0.231$ (scheme- and scale-dependent) [ESTABLISHED].
- **Gravitational coupling of two protons:** $\alpha_G=Gm_p^2/(\hbar c)\approx5.9\times10^{-39}$ [ESTABLISHED] — quantifying how absurdly weak gravity is at particle masses, and the numerical core of the hierarchy problem (§7).

These dimensionless numbers are the *real* content; everything in §1–§3 is, by contrast, partly convention. See [UNIFYING_PRINCIPLES.md](UNIFYING_PRINCIPLES.md).

---

## 7. The hierarchy / naturalness problem

**Statement** [ESTABLISHED as a technical fact; CONTESTED as a "problem"]: in the SM, the Higgs mass-squared receives radiative corrections that, in a cutoff regularization, scale quadratically with the cutoff,
$$
m_h^2 = (m_h^2)_{\text{bare}} + \delta m_h^2, \qquad \delta m_h^2 \sim \frac{\Lambda^2}{16\pi^2}.
$$
If $\Lambda\sim M_P$, reproducing the observed $m_h\approx125$ GeV requires the bare term and the correction to cancel to $\sim1$ part in $10^{34}$. Equivalently, the electroweak scale $v\approx246$ GeV sits $\sim10^{16}$ below $M_P$ with no symmetry protecting a scalar mass (unlike fermion masses, protected by chiral symmetry, or gauge-boson masses, protected by gauge symmetry).

**Epistemic status** [CONTESTED]: this is **not** a logical inconsistency and **not** a domain-of-validity failure — the SM is perfectly predictive (the cutoff sensitivity is absorbed into a counterterm). It is a *naturalness* expectation: that dimensionless ratios should be $O(1)$ absent a protecting mechanism. The LHC's exclusion of the simplest TeV-scale solutions (low-energy SUSY, technicolor, simplest composite Higgs) has intensified debate over whether naturalness is the correct guide at all, versus environmental/anthropic selection [CONTESTED/OPEN]. See [HYPOTHESES.md](HYPOTHESES.md), [OPEN_PROBLEMS.md](OPEN_PROBLEMS.md), and the EFT-decoupling entry of the [ASSUMPTIONS_LEDGER.md](ASSUMPTIONS_LEDGER.md).

---

## 8. The cosmological-constant problem

The observed dark-energy density is $\rho_\Lambda^{\mathrm{obs}}\sim10^{-47}\ \mathrm{GeV}^4$ (equivalently a mass scale $\sim 2\times10^{-3}$ eV) [ESTABLISHED]. A naive QFT estimate of the vacuum (zero-point) energy density, cut off at a scale $M_{\mathrm{cut}}$, gives $\rho_\Lambda^{\mathrm{QFT}}\sim M_{\mathrm{cut}}^4$. The disagreement is the **cosmological-constant problem** — widely called the worst quantitative mismatch in physics [ESTABLISHED that it is a severe puzzle].

**The famous "$10^{120}$" — read carefully** [ESTABLISHED, and the nuance is the important part]:

- With $M_{\mathrm{cut}}\sim M_P$: $\rho_\Lambda^{\mathrm{QFT}}\sim M_P^4 \sim 10^{74}\ \mathrm{GeV}^4$, so the ratio $\rho^{\mathrm{QFT}}/\rho^{\mathrm{obs}}\sim10^{120}$. Hence the headline number.
- With $M_{\mathrm{cut}}$ at the electroweak/TeV scale: $\rho_\Lambda^{\mathrm{QFT}}\sim(10^3\ \mathrm{GeV})^4=10^{12}\ \mathrm{GeV}^4$, giving a ratio $\sim10^{59\text{–}60}$.
- Even the QCD chiral condensate alone contributes $\sim(\Lambda_{\mathrm{QCD}})^4\sim 10^{-3}\ \mathrm{GeV}^4$, already $\sim10^{44}$ times too large.

**The key conceptual point** [INFERENCE — broad consensus]: the "$10^{120}$" is the ratio of a **cutoff-dependent, regularization-dependent** estimate to the observed value. It is *not* a clean prediction. The naive sum-of-zero-point-energies is not Lorentz-invariant as written (a momentum cutoff breaks Lorentz invariance), and a proper treatment (dimensional regularization) makes the vacuum energy proportional to the masses of the fields, not to a quartic cutoff — changing the numerology though not the qualitative disaster. The robust statement is therefore: *no symmetry or mechanism is known that cancels the large vacuum-energy contributions while leaving the tiny observed remainder*, and the contributions that survive any reasonable accounting (e.g. the electroweak and QCD phase-transition condensates) already overshoot by dozens of orders of magnitude [ESTABLISHED]. The problem genuinely lives at the **QFT/gravity interface**: it is about how vacuum energy *gravitates*, and may signal that the naive QFT vacuum-energy object is simply the wrong thing to feed into Einstein's equations [INFERENCE/OPEN]. See [domains/cosmology.md](domains/cosmology.md), [domains/quantum-field-theory.md](domains/quantum-field-theory.md), and [GAPS_AND_CONTRADICTIONS.md](GAPS_AND_CONTRADICTIONS.md).

Proposed resolutions — supersymmetry (would cancel boson/fermion zero-point energies if unbroken; broken SUSY leaves a residue still far too large), the string landscape + anthropic selection (Weinberg's anthropic *upper bound* on $\Lambda$ famously preceded the discovery of acceleration), sequestering, degravitation, modified gravity — are all [SPECULATIVE]; none is established. See [UNIFICATION_LANDSCAPE.md](UNIFICATION_LANDSCAPE.md).

---

## 9. Do the constants vary?

Only variation of **dimensionless** constants is physically meaningful (§1). The most-constrained probes are $\alpha$ and $\mu=m_p/m_e$:

- The **Oklo natural fission reactor** ($\sim2$ Gyr ago) bounds $|\Delta\alpha/\alpha|\lesssim 10^{-7}$ over that interval [ESTABLISHED — order of magnitude; exact bound is analysis-dependent].
- **Atomic-clock comparisons** bound present-day drift $|\dot\alpha/\alpha|$ at roughly $\lesssim 10^{-17}\,\text{yr}^{-1}$ [ESTABLISHED — order of magnitude; consult primary metrology literature in [BIBLIOGRAPHY.md](BIBLIOGRAPHY.md) for current best values].
- **Quasar absorption spectra** probe $\alpha$ and $\mu$ at cosmological lookback. Claims of a nonzero spatial/temporal variation of $\alpha$ (the "Webb dipole") have appeared but are **not confirmed** and are widely regarded as not yet established, with systematics a serious concern [CONTESTED].
- **BBN and CMB** consistency constrain combinations of constants in the early universe [ESTABLISHED as constraints; INFERENCE in interpretation].

Bottom line: there is **no confirmed evidence** that any fundamental dimensionless constant varies [ESTABLISHED — i.e. the null result is robust], but small variation is **not excluded** and is a generic prediction of theories with light dynamical scalars (quintessence, dilatons, the string landscape) [INFERENCE/OPEN]. This is the empirical face of the "constants are constant" entry in the [ASSUMPTIONS_LEDGER.md](ASSUMPTIONS_LEDGER.md). See also [OPEN_PROBLEMS.md](OPEN_PROBLEMS.md).

---

## 10. Anthropic reasoning (clearly flagged)

Several constants appear "fine-tuned" for complexity/life: the smallness of $\Lambda$ (§8), the proximity of the up/down quark mass difference and electromagnetic effects that make the proton lighter than the neutron, the strength of the strong force relative to electromagnetism (Hoyle-state carbon production), etc.

**Status: [SPECULATIVE].** Anthropic reasoning — that observed values are conditioned on the existence of observers, drawn from an ensemble (multiverse / string landscape / eternal inflation) — is principled and has one notable *predictive* success (Weinberg's anthropic upper bound on $\Lambda$, derived before the 1998 acceleration discovery, was of the right order). But it is **not** established physics: it depends on (i) the actual existence of an ensemble with varying constants [SPECULATIVE], (ii) a well-defined probability measure over that ensemble — the unresolved **measure problem** of eternal inflation, which currently undermines predictivity (Boltzmann-brain and youngness pathologies) [OPEN] — and (iii) contested assumptions about what counts as "observers." Whether anthropic explanation is even within empirical science is itself [CONTESTED]. It must never be asserted as fact. See [domains/cosmology.md](domains/cosmology.md), [UNIFICATION_LANDSCAPE.md](UNIFICATION_LANDSCAPE.md), and [EPISTEMICS.md](EPISTEMICS.md).

---

## See also

- [domains/particle-physics.md](domains/particle-physics.md) — SM Lagrangian, parameter origin, flavor puzzle, strong-CP
- [domains/cosmology.md](domains/cosmology.md) — ΛCDM, dark energy, tensions, anthropics
- [domains/quantum-field-theory.md](domains/quantum-field-theory.md) — vacuum energy, EFT cutoffs, naturalness
- [domains/general-relativity.md](domains/general-relativity.md) — gravity as EFT, the Planck scale as its breakdown
- [domains/mathematics.md](domains/mathematics.md) — units, dimensional analysis, regularization
- [THEORY_MAP.md](THEORY_MAP.md) · [UNIFICATION_LANDSCAPE.md](UNIFICATION_LANDSCAPE.md) · [UNIFYING_PRINCIPLES.md](UNIFYING_PRINCIPLES.md)
- [OPEN_PROBLEMS.md](OPEN_PROBLEMS.md) · [GAPS_AND_CONTRADICTIONS.md](GAPS_AND_CONTRADICTIONS.md) · [HYPOTHESES.md](HYPOTHESES.md)
- [ASSUMPTIONS_LEDGER.md](ASSUMPTIONS_LEDGER.md) — "constants are constant," EFT decoupling, Lorentz invariance entries
- [EPISTEMICS.md](EPISTEMICS.md) — meaning of the inline tags · [GLOSSARY.md](GLOSSARY.md)
- [README.md](README.md) · [AGENTS.md](AGENTS.md) · [FINDINGS.md](FINDINGS.md) · [ROADMAP.md](ROADMAP.md) · [CHANGELOG.md](CHANGELOG.md)

## References

See [BIBLIOGRAPHY.md](BIBLIOGRAPHY.md) for canonical sources: CODATA recommended values and the BIPM SI Brochure (9th ed., 2019 redefinition); Particle Data Group *Review of Particle Physics* (parameter values, $\alpha$, $\alpha_s$, masses); Planck collaboration cosmological-parameter papers (ΛCDM); Weinberg's review of the cosmological constant problem; and the Duff–Okun–Veneziano "trialogue" on the number of fundamental constants. Specific numerical precision and current best bounds should always be taken from these primary sources rather than from this page.
