---
title: "Can emergent-spacetime / holography graduate to our Λ>0 universe?"
type: note
tags: [note, iter2, de-sitter, emergent-spacetime]
updated: 2026-06-08
---

# Can emergent-spacetime / holography graduate to our Λ>0 universe?

Status: Active research note — negative meta-result reinforced, with one genuine Λ>0 foothold
Last updated: 2026-06-08
Iteration: 2

> Anchoring. This note builds on [H2](../HYPOTHESES.md#h2) (the negative/limiting result: entanglement-geometry is *not yet* a universal theory) and [H4](../HYPOTHESES.md#h4) (Type III$_1$ + crossed product), on [UNIFYING_PRINCIPLES](../UNIFYING_PRINCIPLES.md) §4/§7 (holographic bound; entanglement-as-glue), and on the [cosmology page](../domains/cosmology.md)'s "Λ sign is wrong for our universe" obstruction. Companion sibling note: [2026-06-08-born-rule-and-quantum-linearity.md](2026-06-08-born-rule-and-quantum-linearity.md).

---

## Question

The strongest "spacetime from entanglement / holography" results live in anti–de Sitter space ($\Lambda<0$); our universe accelerates ($\Lambda>0$). **What is the rigorous state of de Sitter holography and cosmological emergence, and can the emergence program (H2 graduation criteria) reach $\Lambda>0$?** Concretely: what would a genuine dS RT-analog, or a nonlinear-Einstein-from-entanglement derivation in dS, require — and how far are current results from it?

The single sharpest fact framing everything below: **every rigorous RT/HRT/QES/entanglement-wedge result, and the entanglement-first-law derivation of (linearized) Einstein gravity, is established only in asymptotically-AdS, large-$N$, strong-coupling Einstein gravity — i.e. at $\Lambda<0$.** [ESTABLISHED] Our universe has $\Lambda>0$ and (per DESI 2024/2025) may even host *dynamical*, phantom-crossing dark energy. [CONTESTED]

---

## State of the art (rigorous)

### 1. Why de Sitter is structurally hostile to the AdS holographic toolkit [ESTABLISHED, structural]

The AdS machinery exploits four features de Sitter lacks:

1. **A timelike conformal boundary** where a unitary CFT lives and the gravitational path integral has clean Dirichlet data. dS has **two spacelike boundaries** ($\mathcal{I}^-$, $\mathcal{I}^+$) at past/future infinity, not a timelike one.
2. **A globally-defined boundary time** generating a Hamiltonian. In the static patch the natural "time" is a *boost*-like Killing flow with a **bifurcate horizon**; there is no global timelike Killing vector for full dS.
3. **Asymptotic symmetry group $SO(d,2)$** with a unitary-CFT interpretation. For $\mathrm{dS}_{d+1}$ the isometry/asymptotic group is $SO(d+1,1)$ = the *Euclidean* conformal group on $S^d$, whose principal-series unitary reps force non-unitary features when reorganized as a Lorentzian-time CFT (§2).
4. **A non-compact boundary spatial volume**, so boundary entropy is unbounded. The dS static patch instead has a **finite** horizon area and the de Sitter entropy $S_{\mathrm{dS}} = A/4G$ is **finite and maximal** — a closed, finite-entropy system, not an open scattering arena.

Feature 4 is the deepest. Gibbons–Hawking (1977) [ESTABLISHED] give
$$S_{\mathrm{dS}} = \frac{A_{\text{horizon}}}{4G}, \qquad T_{\mathrm{dS}} = \frac{H}{2\pi},$$
with a thermal horizon. A finite maximal entropy strongly suggests a **finite-dimensional Hilbert space** (Banks; Fischler "N-bound") [SPECULATIVE but influential] — qualitatively unlike any CFT (infinite-dimensional) and unlike AdS. This is why dS holography fragments into inequivalent proposals rather than converging on one dual. [INFERENCE]

### 2. dS/CFT (Strominger 2001): a Euclidean, non-unitary CFT on the boundary sphere [proposal ESTABLISHED; its pathologies ESTABLISHED]

**Proposal** (Strominger, JHEP 10 (2001) 034, hep-th/0106113; Witten hep-th/0106109; Maldacena JHEP 05 (2003) 013, astro-ph/0210603): quantum gravity on $\mathrm{dS}_{d+1}$ is dual to a **single Euclidean CFT$_d$ on the spacelike boundary $S^d$** at $\mathcal{I}^+$, with $SO(d+1,1)$ acting as the Euclidean conformal group. The CFT computes the **late-time Hartle–Hawking / Bunch–Davies wavefunction** $\Psi[h]$; bulk fields $\leftrightarrow$ boundary operators of dimension $\Delta$.

**Structural pathology** [ESTABLISHED]. For a scalar of mass $m$ in $\mathrm{dS}_{d+1}$, the roots of $\Delta(\Delta-d) = -m^2\ell^2$ are
$$\Delta_\pm = \tfrac{d}{2} \pm \sqrt{\tfrac{d^2}{4} - m^2\ell^2}.$$
For $m^2\ell^2 > d^2/4$ (the **principal series**, i.e. any sufficiently heavy field) the dimensions are **complex**, $\Delta = d/2 \pm i\nu$ with $\nu = \sqrt{m^2\ell^2 - d^2/4}$. A CFT with complex conformal weights has oscillatory two-point functions and is **non-unitary**: there is no standard reflection-positive Hilbert-space inner product. Concrete realizations are correspondingly non-unitary — Liouville; the Anninos–Hartman–Strominger $\mathrm{dS}_4 \leftrightarrow Sp(N)$ higher-spin proposal (Class. Quantum Grav. 34 (2017) 015009, arXiv:1108.5735), the $N\to -N$ continuation of the unitary $O(N)$/Vasiliev $\mathrm{AdS}_4$ dual. [INFERENCE for the higher-spin case]

**Status verdict.** dS/CFT is a *bona fide* computational proposal **for the wavefunction**, with concrete avatars, but **is not a unitary boundary quantum mechanics**. The unitarity that matters physically (bulk gravitational evolution; the static-patch observer) is a *different* object that dS/CFT does not supply. This is a domain-of-validity / interpretational limitation, not a logical inconsistency. [ESTABLISHED]

### 3. The Maldacena wavefunction / EAdS-continuation route [INFERENCE within its regime]

Maldacena (2002) refined dS/CFT into a *calculational* tool: the late-time Bunch–Davies wavefunction of $\mathrm{dS}_{d+1}$ is obtained by **analytically continuing a Euclidean $\mathrm{AdS}_{d+1}$ path integral** (the renormalized on-shell EAdS action = a Euclidean CFT partition function), continuing $\ell_{\mathrm{AdS}} \to i\ell_{\mathrm{dS}}$ and making the central charge **complex**. This underlies the modern cosmological bootstrap / wavefunction-of-the-universe program (Arkani-Hamed–Maldacena, arXiv:1503.08043; cosmological polytopes — see [H5](../HYPOTHESES.md#h5)).

- **Works** [INFERENCE]: in-in inflationary correlators, wavefunction-coefficient structure, total-energy singularities, consistency relations.
- **Does not follow**: this is a **boundary-correlator generating functional**, not a reconstruction of *bulk* dS from entanglement and not a dual Hilbert space. The complex central charge is the §2 non-unitarity in disguise. No RT surface, no entanglement wedge, no $\Lambda>0$ "first law → Einstein."

### 4. The CLPW Type II$_1$ algebra: the single most rigorous Λ>0 entropy result [ESTABLISHED, and correctly scoped]

**Result** (Chandrasekaran–Longo–Penington–Witten, JHEP 02 (2023) 082, arXiv:2206.10780; building on Witten "Gravity and the crossed product," JHEP 10 (2022) 008, arXiv:2112.12828; Chandrasekaran–Penington–Witten arXiv:2209.10454). Take QFT in the **static patch** of dS plus a single **observer** with a clock/Hamiltonian. The bare static-patch algebra is **Type III$_1$** (no trace, no density matrix, no well-defined entropy — the [H4](../HYPOTHESES.md#h4) / Type-III obstruction; Buchholz–D'Antoni–Fredenhagen / Fredenhagen, Commun. Math. Phys. 1985). Adjoin the observer, impose the static-patch modular constraint (modular flow of the Bunch–Davies state = boost-like time translation), and — crucially — **demand the observer energy be bounded below**. This bounds the area from above and converts the algebra to **Type II$_1$**, a *finite* von Neumann algebra with a tracial state.

**Conceptual payoff** [ESTABLISHED]:
- Type II$_1$ admits a trace, hence a **renormalized entropy** $S(\rho) = -\mathrm{Tr}(\rho \ln\rho)$, finite up to a state-independent constant, equal to the **generalized entropy** $S_{\text{gen}} = \langle A\rangle/4G + S_{\text{out}} + \text{const}$.
- **There is a maximum-entropy state, and it is empty de Sitter** — directly realizing $S_{\mathrm{dS}}=A/4G$ as the *maximal* von Neumann entropy of a finite algebra.
- **The algebra type encodes the cosmological-constant case**: Type II$_1$ (finite trace, maximal entropy) for the dS static patch, versus Type II$_\infty$ (semifinite, no maximal entropy) for the AdS/eternal-black-hole crossed product.

**What CLPW is NOT** (the load-bearing scoping, ESTABLISHED):
- Not a holographic dual — no boundary theory, no bulk-from-boundary reconstruction; it reorganizes *bulk* QFT-in-curved-spacetime observables.
- Observer-relative and perturbative in $G$ — it presupposes a fixed semiclassical dS background; geometry is *encoded*, not *generated*.
- Yields entropy and a generalized second law, **not a dynamical equation**: there is no derivation of even linearized Einstein equations from a dS entanglement first law *in this framework*. The AdS chain $\delta S_A = \delta\langle K_A\rangle \Rightarrow \delta G = 8\pi G\, \delta T$ (FGHMVR) has no established CLPW-rooted dS analog — there is no minimal/extremal RT surface anchored to a boundary region, because there is no boundary region.

CLPW is genuinely a $\Lambda>0$ result and a real advance — the **right answer to the entropy-bookkeeping question, not to the emergence question.** It strengthens H4; it does not graduate H2.

### 5. Static-patch / stretched-horizon holography, $T\bar T + \Lambda$, and DSSYK [SPECULATIVE; actively CONTESTED]

A second family posits a **unitary quantum mechanics on the stretched horizon** of the static patch, inverting AdS holography (boundary at the horizon, not at infinity).

- **Stretched-horizon** (Susskind, arXiv:2109.14104; Shaghoulian–Susskind "central dogma" for dS): dS d.o.f. live on a screen a **Planckian** distance from the horizon, with finite Hilbert dimension $\sim \exp(S_{\mathrm{dS}})$.
- **$T\bar T + \Lambda_2$** (Gorbenko–Silverstein–Torroba, JHEP 03 (2019) 085, arXiv:1811.07965; and collaborators): a $T\bar T$-deformed CFT with a positive cosmological term, conjectured dual to dS gravity at finite radial cutoff ("AdS at finite cutoff pushed to positive $\Lambda$"). Makes the finite-entropy/finite-cutoff structure precise in $d=2/3$ toy models. [INFERENCE in 2D/3D; SPECULATIVE as a route to 4D dS]
- **Double-scaled SYK (DSSYK)** (Narovlansky–Verlinde, JHEP 05 (2025) 032, arXiv:2310.16994): two DSSYK at infinite temperature with $H_L = H_R$, chord two-point functions matching a massive scalar in 3D dS, with $R_{\mathrm{dS}}/G_N = 4\pi N/p^2$. Related: sine-dilaton gravity, dS-JT.

**Live controversy** [CONTESTED — flag explicitly]: there is open disagreement about whether DSSYK *is* dS holography.
- Rahman–Susskind vs Narovlansky–Verlinde disagree on the entropy↔area scaling by **factors that diverge as $N\to\infty$** ("Comments on a Paper by Narovlansky and Verlinde," arXiv:2312.04097). The referee notes this is framed by RS as an assumption/identification-level dispute (RS argue the standard entropy–area relation is restored under their identifications), not a proven physics contradiction.
- "Infinite Temperature is Not So Infinite: The Many Temperatures of de Sitter Space" (arXiv:2401.08555) argues multiple inequivalent "dS temperatures" have been conflated.
- Recurring critique: the matched objects are *correlators in a particular limit*; the dual may be an effective subsector / analytic continuation (sine-dilaton throat) rather than full unitary $\mathrm{dS}_4$.

**Verdict on this family.** The most likely current route to a *unitary* dS quantum mechanics — but **no controlled, agreed dual of 4D de Sitter exists**; all are in $d\le 3$ / toy / large-symmetry limits, and central claims are contested as of 2026. None provides an RT surface or a nonlinear-Einstein-from-entanglement derivation at $\Lambda>0$. (Note: DSSYK, static-patch, and $T\bar T+\Lambda$ are *distinct* programs and should be tracked as separate sub-threads.)

### 6. The swampland question: is metastable dS even in the landscape? [OPEN/CONTESTED]

If controlled metastable dS vacua do *not* exist in string theory, dS holography might be seeking a dual to an inconsistent background.

- **dS swampland conjecture** (Obied–Ooguri–Spodyneiko–Vafa, arXiv:1806.08362): $|\nabla V| \ge c\,V/M_{\mathrm{Pl}}$ ($c\sim\mathcal{O}(1)$) — forbidding stable dS minima.
- **Refined** (Ooguri–Palti–Shiu–Vafa, Phys. Lett. B 788 (2019) 180, arXiv:1810.05506): $|\nabla V| \ge c\,V/M_{\mathrm{Pl}}$ **or** $\min(\nabla\nabla V) \le -c'\,V/M_{\mathrm{Pl}}^2$ — allows *metastable/rolling* dS.
- **Status** [CONTESTED]: motivated (distance / TCC arguments) but **not theorems**; KKLT and LVS constructions are under ongoing scrutiny. Trans-Planckian Censorship (Bedroya–Vafa, arXiv:1909.11063) independently disfavors *long-lived* dS while permitting short-lived dS. [SPECULATIVE]
- **Implication**: if dS is at best a long-lived resonance (rolling quintessence), the target may be a **holography of a metastable/transient accelerating phase**, which DESI (§7) now mildly favors empirically. This *reframes the goal*. (Caveat from referee: it re-targets rather than dissolves the obstruction — the static-patch difficulties of §1/§4 already live in the observer-dependent patch and do not require eternal global dS; a time-dependent dual may be *harder*, not easier.)

### 7. DESI 2024/2025: dynamical dark energy and what it would imply [ESTABLISHED data; INFERENCE on implications]

**Data** [ESTABLISHED as a statistical statement; CONTESTED as new physics]. DESI BAO (DR1 2024, arXiv:2404.03002; DR2 2025, arXiv:2503.14738), combined with CMB and supernovae in the $w_0 w_a$CDM (CPL) parametrization $w(a) = w_0 + w_a(1-a)$, prefer **dynamical** dark energy over $\Lambda$:
- DR2 + CMB + SNe: **2.8σ (Pantheon+), 3.8σ (Union3), 4.2σ (DESY5)**.
- Best fit: $w_0 > -1$ and $w_a < 0$ — quintessence-like today, **crossing the phantom divide** ($w<-1$ in the past). The crossing is theoretically awkward: a single canonical scalar cannot cross $w=-1$ (the "quintom no-go"); it needs two fields, non-minimal coupling, or modified gravity.

**Implications for the emergence program** [INFERENCE]:
1. **Pro-emergence reframing**: $w\ne -1$ makes the target a *time-dependent, non-eternal* accelerating cosmology, aligning with §6 and undercutting "there is no unitary eternal-dS dual" — eternal dS may not be physical.
2. **Anti-cleanliness**: it removes even the clean *constant*-curvature background that CLPW and static-patch proposals assume. A genuine emergence account would then need to reproduce $w(z)$, not a fixed dS entropy — strictly harder.
3. **Caveat** [CONTESTED]: the signal is parametrization-dependent (CPL), sensitive to the SNe sample and the DESY5 low-$z$ calibration, and could be a systematic. It is **not** established new physics. But it is now strong enough that "our universe is exactly dS ($\Lambda=$ const)" should be tagged a *modeling choice*, not a fact.

### 8. The AdS baseline: how complete is Einstein-from-entanglement even at $\Lambda<0$? [referee correction folded in]

The iteration-1 claim that "nonlinear, background-independent Einstein-from-entanglement is *unachieved* even in AdS" is **too strong as stated** [CONTESTED — referee correction]. The honest status:
- **Linear order**: Lashkari–Van Raamsdonk; Faulkner–Guica–Hartman–Myers–Van Raamsdonk (FGHMVR), JHEP 03 (2014) 051, arXiv:1312.7856 — linearized Einstein from the entanglement first law $\delta S_A = \delta\langle K_A\rangle$, in AdS only. [ESTABLISHED]
- **Second order**: Faulkner–Haehl–Hijano–Parrikar–Rabideau–Van Raamsdonk, JHEP 08 (2017) 057, arXiv:1705.03026 — Einstein equations from the first law / RT to *second* order in sources; relative-entropy arguments push further. [ESTABLISHED as published]
- **Background-independent, fully nonlinear**: remains **[OPEN]** even in AdS.
- **Background-free precedent**: Jacobson, "Entanglement Equilibrium and the Einstein Equation," PRL → arXiv:1505.04753, derives the *semiclassical* Einstein equation (with undetermined $\Lambda$) from an entanglement-equilibrium / first-law condition on small causal diamonds, for *any* maximally symmetric background **including de Sitter**. [ESTABLISHED as published] (Precursor: Jacobson PRL 75 (1995) 1260.)

So the correct framing is **"achieved to second order; fully nonlinear AND background-independent remains open"** — not "unachieved." Reaching it in dS, where no unitary dual or RT surface is known, is a *further* open step, not "two unsolved steps."

### 9. Distinguishing the failure modes (per [EPISTEMICS](../EPISTEMICS.md))

- **Logical inconsistency?** No.
- **Domain-of-validity mismatch?** Yes, primarily. The AdS toolkit *assumes* a timelike boundary, global time, a unitary boundary CFT, and unbounded entropy — all absent in dS. dS/CFT non-unitarity is a mismatch, not a contradiction.
- **Unsolved-but-consistent?** Yes. A unitary dS quantum mechanics and a dS first-law→Einstein chain are consistent, unsolved targets.
- **Conceptual tension?** The finite maximal entropy (Type II$_1$) vs the infinite-dimensional CFT of AdS holography is a genuine *structural* tension, correctly diagnosed by the algebra type.

This is the cleanest statement of *why* the strongest emergence results are AdS-confined: a **structural mismatch between the negatively-curved corner** (timelike boundary, unitary CFT, Type II$_\infty$/III$_1$) **and the positively-curved one** (no timelike boundary, non-unitary/Euclidean boundary functional, finite Type II$_1$).

---

## Key arguments

- **[ESTABLISHED] CLPW is a genuine $\Lambda>0$ result, and the algebra type tracks the $\Lambda$ case.** For the AdS/black-hole crossed product the observer algebra is Type II$_\infty$ (semifinite, no max entropy); for the dS static patch, bounding the observer energy below bounds the area above and gives Type II$_1$ (finite trace, max-entropy state = empty dS). Gibbons–Hawking $S_{\mathrm{dS}}=A/4G$ is recovered as the von Neumann entropy of a finite algebra.
- **[ESTABLISHED] CLPW does not clear the H2 bar.** No boundary region ⇒ no RT/extremal surface; no boundary CFT ⇒ no dual; no CLPW-rooted dS analog of FGHMVR ⇒ no equation of motion. It presupposes a fixed semiclassical dS background and is perturbative in $G$ — geometry encoded, not generated.
- **[ESTABLISHED] dS/CFT is not a unitary boundary quantum mechanics.** Complex weights $\Delta = d/2\pm i\nu$ for $m^2\ell^2>d^2/4$; the realizations (Liouville, $Sp(N)$, EAdS-continuation with complex central charge) are non-unitary generating functionals for the wavefunction. It cannot, by itself, ground a bulk-unitarity-based emergence argument.
- **[INFERENCE] DESI's dynamical $w(z)$ plus the swampland conjectures reframe the target away from eternal dS.** If dS is metastable and dark energy is rolling ($w_0>-1$, $w_a<0$), eternal dS is the wrong idealization; the target becomes a transient cosmology — re-targeting the obstruction (and possibly raising the bar to a dynamical $w(z)$), not dissolving it.
- **[CONTESTED] Static-patch / DSSYK / $T\bar T+\Lambda$ is the leading route to unitary dS QM but is confined to $d\le 3$ and disputed.** RS vs NV disagree on entropy↔area by $N$-divergent factors; "dS temperatures" are conflated; the matched geometry may be an effective subsector.
- **[INFERENCE] The AdS-confinement of emergence is structural, not a temporary computational gap** — though "structural" is itself an inference about the field's trajectory, **not a proven no-go**. There is no theorem forbidding dS Einstein-from-entanglement; the obstruction is the present absence of a unitary dual and an RT surface.

---

## Sharpest obstructions

1. **No timelike conformal boundary in dS** ⇒ no boundary region to anchor an RT/extremal surface, and no boundary CFT Hilbert space. The whole AdS toolkit (RT surface, entanglement wedge, subregion duality, JLMS, first law) is defined relative to a boundary region; dS has only spacelike $\mathcal{I}^\pm$. Candidate substitutes (pseudo-entropy / time-entanglement; stretched-horizon screens; "Toward a Consistent Definition of Holographic EE in dS," arXiv:2508.14478) give complex/pseudo entropies or contested screens, not a positive RT entropy. *The very object to be computed is not agreed.* [ESTABLISHED]
2. **The dS boundary CFT is non-unitary** (complex weights for $m^2\ell^2>d^2/4$); reflection positivity fails. dS/CFT computes a wavefunction functional, not a unitary Hilbert space. [ESTABLISHED]
3. **No established CLPW-rooted dS analog of $\delta S=\delta\langle K\rangle \Rightarrow$ Einstein.** FGHMVR uses the CHM ball modular Hamiltonian and an RT surface — intrinsically AdS. CLPW supplies the modular/trace structure in dS but stops at entropy. (Caveat: Jacobson 2015 gives a *background-free* semiclassical Einstein eq incl. $\Lambda>0$ on small diamonds, and arXiv:2511.07915 (2025) claims a *non-unitary* dS$_3$/CFT$_2$ pseudo-entropy first-law ⇒ perturbative Einstein; so "no chain exists" must be narrowed to "no controlled, CLPW-rooted, unitary chain exists.") [OPEN]
4. **Finite maximal entropy / finite-dimensional Hilbert space (Type II$_1$) is qualitatively unlike any CFT.** A bounded $S_{\mathrm{dS}}=A/4G$ suggests finite dimension (Banks–Fischler N-bound), blocking a literal copy of AdS/CFT and forcing inequivalent finite-matrix proposals. [INFERENCE]
5. **It is not established that metastable dS exists in a controlled string limit.** Swampland dS / TCC disfavor long-lived dS; KKLT/LVS are contested. If eternal dS is not a consistent QG background, a dual to it may not exist. [CONTESTED]
6. **Fully nonlinear, background-independent Einstein-from-entanglement is unachieved even in AdS** (achieved to second order; full nonlinearity + background-independence open). Reaching it in dS adds a further open step. [OPEN]

---

## What would count as decisive progress

- **A dS entanglement first law**, in a controlled $\Lambda>0$ setting, deriving the **linearized Einstein equations** from $\delta S = \delta\langle K\rangle$ — the genuine dS analog of FGHMVR. The single most decisive missing piece; it would move the program from entropy bookkeeping to dynamics. (Properly scoped to the CLPW Type II$_1$ static-patch route, distinct from Jacobson 2015 and the non-unitary arXiv:2511.07915 result.)
- **A controlled, agreed unitary dual of 4D dS** (or even dS$_3$ beyond contested DSSYK), with a reproducible boundary/screen-entanglement ↔ bulk area/distance map, resolving the RS vs NV $N$-divergent discrepancy.
- **A positive, well-defined holographic-EE prescription in dS** (RT/QES analog) that is *not* pseudo-entropy or complex — e.g. a stretched-horizon min-cut with a derived area law (settling arXiv:2508.14478).
- **Extending CLPW from a presupposed semiclassical dS background to a state the algebra GENERATES** — recovering the dS *geometry*, not just its entropy, removing the background-dependence caveat.
- **A holographic/emergence account of a DYNAMICAL accelerating phase** ($w(z)\ne-1$, phantom crossing) consistent with DESI, including a microscopic origin of the small (possibly time-varying) dark-energy scale.
- **Decisive observational confirmation OR refutation** of dynamical dark energy by DESI DR3+/Euclid/Roman/LSST — telling the program whether its target is eternal dS, metastable dS, or rolling quintessence.
- **A theorem-level statement** (not a conjecture) on whether metastable dS is in or out of the landscape, settling whether a dS dual should exist at all.

---

## Proposed registry items

Each item below carries the referee's verdict (keep / severity / refined statement).

### OP-dS-FIRSTLAW (open-problem) — referee: **keep, severity MAJOR**
- **Original statement.** Derive a dS entanglement first law: show $\delta S = \delta\langle K\rangle$ implies the linearized Einstein equations at $\Lambda>0$ (dS analog of FGHMVR). "No such derivation currently exists."
- **Referee verdict.** The unqualified "no such derivation currently exists" is **false**: Jacobson 2015 (arXiv:1505.04753) already gives a $\delta S=\delta\langle K\rangle \Rightarrow$ semiclassical Einstein eq (undetermined $\Lambda$) valid for any maximally symmetric background *including dS*; a non-unitary dS$_3$/CFT$_2$ pseudo-entropy version (arXiv:2511.07915, 2025) claims first-law ⇔ perturbative Einstein. The genuinely-open target is narrower.
- **Refined statement [OPEN].** In the CLPW Type II$_1$ static-patch setting, determine whether imposing a dS entanglement first law / generalized-entropy stationarity ($\delta S = \delta\langle K\rangle$ for the observer's modular Hamiltonian on the crossed-product Type II$_1$ algebra) implies the **linearized** Einstein equation about the dS background, paralleling FGHMVR in AdS. Caveats to state up front: (i) distinct from Jacobson 2015 (background-free, incl. $\Lambda>0$) and the non-unitary arXiv:2511.07915 — the open gap is specifically the *algebraic, CLPW-rooted, unitary* route; (ii) success delivers only linearized, perturbative-in-$G$, observer-relative, **background-fixed** dynamics (geometry encoded, not generated); (iii) a unitary boundary-dual analog of FGHMVR may be unavailable because no normalizable unitary dS dual is established. Do not assert "no such derivation exists" without the CLPW-specific qualifier.

### H2-R1 (hypothesis-refinement) — referee: **keep, severity MINOR**
- **Refined statement [INFERENCE].** Refine [H2](../HYPOTHESES.md#h2): criterion (1) (a dS RT/QES analog with a controlled dual and derived entropy) is **PARTIALLY met in a weak sense** via CLPW (arXiv:2206.10780). The Type II$_1$ static-patch algebra yields a derived **finite** generalized entropy $S_{\text{gen}} = A/4G_N + S_{\text{out}}$ (up to a state-independent constant) with a maximum-entropy state = empty dS — satisfying the *derived-entropy* sub-requirement. But the *controlled-dual* and *RT/QES-extremization* sub-requirements remain **UNMET**: no boundary dual; entropy obtained intrinsically without an extremal-surface rule. Criteria (3) nonlinear-Einstein-from-entanglement and (4) operational generic ER=EPR remain **entirely unmet** in dS (CLPW is kinematic). The algebra type — II$_1$ for the dS static patch vs II$_\infty$ for the AdS eternal black hole (Witten crossed product, arXiv:2112.12828) — **correlates with the sign of $\Lambda$** via horizon/asymptotic structure and the modular/observer-Hamiltonian spectrum.
- **Referee note.** "The algebra type *encodes* the $\Lambda$ sign" is an overclaim; the proximate cause is trace (non)normalizability set by the Hamiltonian spectrum/horizon structure. State it as a **structural correlation [INFERENCE-heuristic]**, not an invariant "$\mathrm{sgn}(\Lambda)\to$ type" map; II$_1$ and II$_\infty$ can arise elsewhere. The "crisp new framing" is a faithful restatement of CLPW/Witten, not a new result.

### ASSUME-ETERNAL-dS (assumption) — referee: **keep, severity MINOR**
- **Refined statement [CONTESTED bundle].** Treat "our universe is asymptotically eternal de Sitter with constant $\Lambda$" as a **MODELING CHOICE, not an established fact** [methodological point ESTABLISHED; matches GR-8 and the [ASSUMPTIONS_LEDGER](../ASSUMPTIONS_LEDGER.md) dark-energy entry]. Empirically, DESI DR2 (arXiv:2503.14738) prefers dynamical $w_0 w_a$CDM at 2.8–4.2σ ($w_0>-1$, $w_a<0$, phantom crossing near $z\sim0.5$) [CONTESTED — sub-discovery, combination-dependent]. The swampland dS / TCC conjectures disfavor *long-lived* dS while permitting short-lived dS [SPECULATIVE]. Consequence: the correct emergence target may be a metastable or rolling (quintessence-like — note single canonical-field quintessence does *not* reproduce the DESI phantom crossing) accelerating phase.
- **Referee caveat.** This **re-targets, rather than dissolves**, the "no unitary/normalizable dS dual" obstruction — the program's hard results already live in the observer-dependent static patch (Type III$_1$ local algebras, horizon entropy, no global S-matrix), which does not presuppose eternal global dS; a time-dependent dual may be *harder*. File in the ledger cross-linked to GR-8.

### OP-dS-DUAL-CONTESTED (open-problem) — referee: **keep, severity MINOR**
- **Refined statement [CONTESTED].** Determine whether double-scaled SYK (Narovlansky–Verlinde, arXiv:2310.16994) and/or related static-patch proposals constitute a genuine unitary holographic dual of dS, an exact dual of only a subsector (e.g. a sine-dilaton / dS-JT throat), or merely an effective description. Live controversy: Rahman–Susskind (arXiv:2312.04097) report conclusions differing by factors diverging as $N\to\infty$, centered on the boundary-entropy ↔ bulk-area identification (RS argue their identification restores the standard entropy–area relation); RS (arXiv:2401.08555) argue multiple inequivalent "dS temperatures" have been conflated. The conceptually distinct $T\bar T+\Lambda$ program (Gorbenko–Silverstein–Torroba and lineage) is a separate candidate with its own issues (complex spectra, radial-cutoff interpretation) and should be tracked separately. No known no-go theorem forbids a unitary dS dual; CLPW (arXiv:2206.10780) gives a Type II$_1$ finite-entropy algebra consistent with — but not establishing — a unitary microscopic dual. Distinct from OP-dS-FIRSTLAW (dynamics): this entry concerns the **existence/correctness of a dual**.

---

## Verdict

[INFERENCE overall; component tags below.]

The line **does not currently reach $\Lambda>0$ in the strong sense H2 demands**, and the honest meta-conclusion is that this is most plausibly a **structural, not a temporary, barrier** — *but* "structural/permanent" is a confident **inference about the field's trajectory, not a proven no-go**; there is no theorem forbidding dS Einstein-from-entanglement. Concretely:

1. **dS/CFT** is a real proposal but yields a **non-unitary** Euclidean boundary functional for the wavefunction (complex weights for $m^2\ell^2>d^2/4$), not a unitary boundary Hilbert space. [ESTABLISHED]
2. The most rigorous $\Lambda>0$ result, **CLPW's Type II$_1$ static-patch algebra** with maximal-entropy state = empty dS, is a genuine advance but is observer-relative, background-fixed **entropy bookkeeping** — no RT surface, no dual, and no *CLPW-rooted* dynamical equation. The Type II$_1$ (dS) vs II$_\infty$ (AdS/BH) contrast cleanly **correlates** with the $\Lambda$ sign, making CLPW a real $\Lambda>0$ algebraic foothold for [H4](../HYPOTHESES.md#h4). [ESTABLISHED]
3. **Static-patch / DSSYK / $T\bar T+\Lambda$** are the most promising routes to a unitary dS quantum mechanics but are confined to $d\le 3$ / toy limits and actively **CONTESTED** ($N$-divergent RS vs NV discrepancy). [CONTESTED]
4. The deepest target — **fully nonlinear, background-independent Einstein-from-entanglement** — is achieved in AdS only **to second order** (FGHMVR linear; Faulkner et al. 2017 second order), and remains open even in AdS; transplanting it to dS (no unitary dual, no RT surface) is a further open step. [OPEN]

Therefore **H2's negative meta-conclusion stands and is reinforced**. The one substantive positive update: the algebra type tracks the $\Lambda$ sign, giving H4 a genuine $\Lambda>0$ foothold even though it does not graduate H2. Separately, **DESI's 2.8–4.2σ hint of dynamical dark energy** plus the swampland conjectures suggest the program may be aiming at the wrong idealization (eternal dS), re-targeting — though not dissolving — the "no eternal-dS dual" obstruction while raising the bar to reproducing $w(z)$.

**Recommendation for the wiki.** Retain H2 as a negative result; add CLPW as the strongest $\Lambda>0$ algebraic foothold (strengthening H4); adopt "a dS entanglement first law / dS RT surface" (OP-dS-FIRSTLAW, scoped) as the single decisive open problem; file ASSUME-ETERNAL-dS in the assumptions ledger; track OP-dS-DUAL-CONTESTED as the leading-but-disputed route to unitary dS QM.

Confidence: **high** (on the checkable factual claims and the scoped negative conclusion; the "structural not temporary" meta-claim is a high-confidence inference, not a theorem).

---

## Open subquestions

- [OPEN] Is there a *CLPW-rooted, unitary* dS entanglement first law $\delta S=\delta\langle K\rangle \Rightarrow$ linearized Einstein (the FGHMVR analog at $\Lambda>0$)? None exists; Jacobson 2015 (background-free, incl. $\Lambda>0$) and the non-unitary arXiv:2511.07915 are adjacent but distinct.
- [CONTESTED] Does double-scaled SYK / static-patch holography genuinely realize unitary dS, or only an effective subsector? (RS vs NV, $N$-divergent.)
- [OPEN] Can the CLPW Type II$_1$ construction be extended from a presupposed semiclassical dS background to one where algebra + state **generate** the dS geometry?
- [OPEN] Is there a positive (non-pseudo, non-complex) holographic-EE / RT-analog prescription in dS?
- [OPEN] If DESI's dynamical $w(z)$ (phantom crossing) is confirmed, what is the holographic/emergent description of a *rolling* accelerating phase, and does it require modified gravity (quintom no-go)?
- [CONTESTED] Is metastable dS in or out of the string landscape (swampland dS / TCC vs KKLT/LVS)? Determines whether a dS dual should exist at all.
- [OPEN] Does finite dS entropy imply a strictly finite-dimensional Hilbert space (Banks–Fischler N-bound), and is that compatible with any continuum bulk-QFT limit?

---

## See also

- [HYPOTHESES.md](../HYPOTHESES.md) — [H2](../HYPOTHESES.md#h2) (negative result on entanglement-geometry), [H4](../HYPOTHESES.md#h4) (Type III$_1$ + crossed product), [H5](../HYPOTHESES.md#h5) (positive geometry / cosmological polytopes).
- [UNIFYING_PRINCIPLES.md](../UNIFYING_PRINCIPLES.md) — §4 (holographic bound), §7 (entanglement-as-glue).
- [domains/cosmology.md](../domains/cosmology.md) — dark-energy ledger, "Λ sign is wrong" obstruction.
- [domains/general-relativity.md](../domains/general-relativity.md) — horizon thermodynamics, Jacobson's equation of state.
- [domains/quantum-field-theory.md](../domains/quantum-field-theory.md) — Type III$_1$ local algebras, modular theory.
- [domains/information-theory.md](../domains/information-theory.md) — von Neumann entropy, RT/QES background.
- [ASSUMPTIONS_LEDGER.md](../ASSUMPTIONS_LEDGER.md) — ASSUME-ETERNAL-dS, GR-8, dark-energy entry.
- [OPEN_PROBLEMS.md](../OPEN_PROBLEMS.md) — OP-dS-FIRSTLAW, OP-dS-DUAL-CONTESTED.
- [EPISTEMICS.md](../EPISTEMICS.md) — failure-mode taxonomy (inconsistency vs domain-mismatch vs unsolved).
- [FINDINGS.md](../FINDINGS.md), [GAPS_AND_CONTRADICTIONS.md](../GAPS_AND_CONTRADICTIONS.md).
- Sibling note: [2026-06-08-born-rule-and-quantum-linearity.md](2026-06-08-born-rule-and-quantum-linearity.md).
