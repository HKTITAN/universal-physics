# Gaps and Contradictions

Status: Living catalogue — refereed, cumulative, open to revision.
Last updated: 2026-06-08

This page registers the principal *gaps, tensions, and apparent contradictions* among the accepted frameworks of physics. Its central methodological commitment — see [EPISTEMICS.md](EPISTEMICS.md) — is to **distinguish four very different things** that are routinely conflated in informal discourse:

| `kind` | Meaning | Status of the underlying theories |
|---|---|---|
| **logical-inconsistency** | A contradiction derivable *within a single, fixed, consistent axiom system* (rare; almost never what is actually meant). | At least one framework, as stated, is internally broken. |
| **domain-of-validity mismatch** | Two frameworks are each internally consistent but rest on incompatible idealizations; the clash appears only where their domains are forced to overlap. | Both frameworks fine in their regimes. |
| **unsolved-but-consistent problem** | A well-posed question with no accepted answer, but no contradiction. | Frameworks consistent; we lack a derivation/mechanism. |
| **conceptual tension** | A clash of interpretation or principle, with no operational/empirical contradiction. | Empirically fine; the dispute is about *meaning* or *mechanism*. |

Every entry carries a **REFEREE VERDICT** distilling an adversarial review of the original claim: a *refined statement*, the *corrections* applied, a *recommended epistemic tag*, and a *severity*. Where the referee judged the framing materially wrong (e.g., a `kind` mislabel), the **refined statement governs** and supersedes the headline. No entry below was rejected outright (`keep=false`); the single entry whose *internal logic* was found unsound (GC-17) is retained but corrected, and its erroneous sub-claim is quarantined in [Corrected / not actually contradictions](#corrected--not-actually-contradictions).

Cross-references: [OPEN_PROBLEMS.md](OPEN_PROBLEMS.md) (the forward-looking research agenda), [THEORY_MAP.md](THEORY_MAP.md), [UNIFICATION_LANDSCAPE.md](UNIFICATION_LANDSCAPE.md), [ASSUMPTIONS_LEDGER.md](ASSUMPTIONS_LEDGER.md), [CONSTANTS_AND_SCALES.md](CONSTANTS_AND_SCALES.md).

---

## Index

| ID | Title | `kind` | Tag | Severity |
|---|---|---|---|---|
| [GC-1](#gc-1) | Background dependence vs. background independence (QFT/GR) | domain-mismatch + OPEN foundational | [ESTABLISHED]/[OPEN] | major |
| [GC-2](#gc-2) | Perturbative non-renormalizability of quantized gravity | established theorem / open UV | [ESTABLISHED]/[OPEN] | minor |
| [GC-3](#gc-3) | Cosmological-constant problem | domain-mismatch / fine-tuning | [OPEN] | minor |
| [GC-4](#gc-4) | Black-hole information paradox | domain-of-validity tension | [ESTABLISHED]/[OPEN] | minor |
| [GC-5](#gc-5) | AMPS firewall puzzle | conceptual tension (rigorous no-go) | [INFERENCE]/[CONTESTED] | minor |
| [GC-6](#gc-6) | Measurement problem | structural incompleteness | [ESTABLISHED]/[OPEN] | minor |
| [GC-7](#gc-7) | Thermodynamic arrow vs. time-symmetric microlaws | established structure / open origin | [ESTABLISHED]/[OPEN] | minor |
| [GC-8](#gc-8) | Problem of time (Wheeler–DeWitt) | conceptual tension | [OPEN]/[CONTESTED] | minor |
| [GC-9](#gc-9) | Haag's theorem vs. the interaction picture | rigor gap / domain-mismatch | [ESTABLISHED] | minor |
| [GC-10](#gc-10) | Triviality / Landau poles vs. "renormalizable = fundamental" | established refutation / open SM-UV | [ESTABLISHED]/[INFERENCE] | minor |
| [GC-11](#gc-11) | GR singularities (geodesic incompleteness) | domain-mismatch | [ESTABLISHED] | minor |
| [GC-12](#gc-12) | Quantum nonlocality vs. relativistic locality | conceptual tension (no operational clash) | [ESTABLISHED]/[CONTESTED] | minor |
| [GC-13](#gc-13) | Holographic area-law vs. volume-extensive QFT Hilbert space | conceptual tension on [ESTABLISHED] parts | [OPEN] | minor |
| [GC-14](#gc-14) | Stone–von Neumann uniqueness vs. inequivalent representations | domain-mismatch | [ESTABLISHED] | minor |
| [GC-15](#gc-15) | Semiclassical gravity vs. quantum superposition of mass | domain-mismatch / breakdown | [INFERENCE]/[CONTESTED] | minor |
| [GC-16](#gc-16) | ER=EPR / "spacetime from entanglement" generality | conceptual tension / evidential gap | [SPECULATIVE] on [INFERENCE] base | minor |
| [GC-17](#gc-17) | Ensemble statistical mechanics vs. long-range gravitating systems | domain-mismatch | [ESTABLISHED] | minor (one excised sub-claim) |

---

<a id="gc-1"></a>
## GC-1 — Background dependence vs. background independence: QFT and GR

**Frameworks:** [QFT](domains/quantum-field-theory.md), [GR](domains/general-relativity.md), [QM](domains/quantum-mechanics.md), [Particle Physics / Standard Model](domains/particle-physics.md).
**Kind:** domain-of-validity boundary **+** OPEN foundational problem (explicitly **not** a logical inconsistency).

**Precise statement.** Standard *Minkowski* QFT presupposes a fixed, non-dynamical metric $\eta_{\mu\nu}$. That metric anchors (i) the global Poincaré group, whose unitary irreducible representations classify particles via the Casimirs $P^2 = m^2$ and $W^2 = -m^2 s(s+1)$ (mostly-minus signature, $c=1$; the sign is convention-dependent) [ESTABLISHED]; (ii) global microcausality $[\phi(x),\phi(y)]=0$ for spacelike separation [ESTABLISHED]; and (iii) a Poincaré-invariant vacuum satisfying the spectrum condition [ESTABLISHED]. GR's defining feature is the opposite: diffeomorphism invariance / **background independence**, where the metric is dynamical, there is no prior geometry, and physical states are diffeomorphism-equivalence classes (Leibniz equivalence). [ESTABLISHED]

**Technical root.** In the ADM formulation the GR Hamiltonian is a sum of constraints, $H \approx 0$, generating diffeomorphisms; there is no fixed causal structure to anchor microcausality, and "particle" loses observer-independent meaning even semiclassically (Unruh effect; no preferred vacuum in curved spacetime). The two frameworks treat the metric as *fixed input* vs. *dynamical output*. [ESTABLISHED]

**Why it matters.** This contrast is the deepest structural reason the naive union of the two frameworks fails; it underlies the problem of time ([GC-8](#gc-8)), the non-renormalizability of quantized gravity ([GC-2](#gc-2)), and the difficulty of even formulating "QFT on a superposition of spacetimes." See [UNIFICATION_LANDSCAPE.md](UNIFICATION_LANDSCAPE.md), [OPEN_PROBLEMS.md](OPEN_PROBLEMS.md).

**Current status.** Both frameworks are confirmed to extreme precision in their domains (electron $g\!-\!2$; binary-pulsar decay; gravitational-wave detections). They coexist successfully as (a) QFT on fixed curved backgrounds (Hawking, Unruh; algebraic/Haag–Kastler nets on curved spacetime) and (b) perturbative graviton EFT, $g = \eta + h$, valid below the Planck scale. The clash bites only when the metric must be *both quantum and dynamical and non-perturbative*.

> **REFEREE VERDICT — `isSound: false` (overstated as written); severity: major; keep.**
> **Corrections.** The original "mutually exclusive kinematic foundations / cannot combine in principle" is **false as an in-principle claim** and is downgraded. QFT does *not* in general require Poincaré invariance, a preferred vacuum, or a flat metric: QFT on fixed *curved* backgrounds is rigorous and already makes "particle" observer-dependent, replacing the global spectrum condition with the microlocal/Hadamard condition. Microcausality needs a *definite Lorentzian causal structure*, not a flat or non-dynamical one. The hole-argument paraphrase ("determinism FORCES identifying $\phi^*g$ with $g$") overstates a philosophically contested inference: Leibniz equivalence is the conventional *resolution* chosen to retain determinism, not a logical compulsion. Wigner's classification is a flat-space crutch, not a universal QFT requirement.
> **Refined statement.** Standard Minkowski QFT and GR rest on opposite treatments of geometry. This opposition is the deepest structural source of the difficulty in quantizing gravity, but it is a **non-perturbative/UV and conceptual incompatibility, not an in-principle kinematic mutual-exclusion**. Perturbative graviton EFT consistently places a dynamical, superposable metric perturbation inside QFT below $M_{\rm Pl}$, failing by *non-renormalizability* (Goroff–Sagnotti), not by inconsistency. The genuine, unsolved obstruction: a *superposed/fluctuating causal structure* deprives microcausality, the global $S$-matrix, and the global particle/vacuum concepts of their usual definitions, and no background-independent, UV-complete quantum theory of the metric with well-defined local diffeomorphism-invariant observables (the problem of time) has been constructed.
> **Recommended tag.** [ESTABLISHED] for the structural background-(in)dependence contrast and the non-renormalizability of perturbative gravity; [OPEN] for a background-independent UV-complete quantum theory of geometry and the resolution of superposed causal structure.

---

<a id="gc-2"></a>
## GC-2 — Perturbative non-renormalizability of quantized gravity

**Frameworks:** [GR](domains/general-relativity.md), [QFT](domains/quantum-field-theory.md), [Particle Physics / SM](domains/particle-physics.md).
**Kind:** ESTABLISHED theorem (perturbative non-renormalizability) **+** OPEN UV completion.

**Precise statement.** Treating the metric as a quantum field, $g = \eta + h$, and quantizing $h$ yields a perturbatively non-renormalizable theory: graviton-loop divergences require infinitely many independent counterterms, so the perturbative expansion loses predictivity in the deep UV. [ESTABLISHED]

**Technical root.** Newton's constant $G$ has mass dimension $-2$ in 4D natural units, so the loop expansion is organized in $E^2/M_{\rm Pl}^2$ (higher-derivative graviton operators are irrelevant about the Gaussian fixed point). Concretely: pure gravity is **one-loop finite on-shell** ('t Hooft–Veltman 1974, the counterterm vanishing on the vacuum equations / removable by field redefinition); gravity + matter diverges already at one loop; pure gravity **diverges at two loops** with a nonvanishing Weyl-cubed ($C^3$) counterterm (Goroff–Sagnotti 1985, confirmed by van de Ven). [ESTABLISHED] Contrast the renormalizable Standard Model (dimensionless or positive-dimension couplings).

**Why it matters.** By QFT's own internal criteria this sets an upper bound on the validity of the perturbative GR+QFT description at or below $E_{\rm Pl}\sim 1.2\times10^{19}$ GeV (see [CONSTANTS_AND_SCALES.md](CONSTANTS_AND_SCALES.md)), and reframes GR as a predictive low-energy EFT (Donoghue): the leading Einstein–Hilbert term plus $M_{\rm Pl}$-suppressed $R^2$, $R_{\mu\nu}R^{\mu\nu}$ corrections, with unambiguous leading quantum corrections (e.g., to the Newtonian potential).

**Current status.** The perturbative non-renormalizability and the EFT status are **proven mathematics**. The UV completion is [OPEN] (string theory, asymptotic safety, LQG; see [UNIFICATION_LANDSCAPE.md](UNIFICATION_LANDSCAPE.md)). This is **not** a logical inconsistency: an EFT with a cutoff is fully consistent below it.

> **REFEREE VERDICT — `isSound: true`; severity: minor; keep.**
> **Corrections.** The original `kind: unsolved-problem` is split: the perturbative non-renormalizability is [ESTABLISHED], the *resolution* is [OPEN]. The inference "GR cannot be a fundamental QFT" is weakened to "**cannot be a *perturbatively renormalizable* QFT in the Dyson sense**": a nontrivial UV fixed point (Weinberg asymptotic safety [SPECULATIVE/OPEN]) would render gravity non-perturbatively renormalizable and predictive at all scales; higher-derivative gravity (Stelle 1977) is perturbatively renormalizable but contains a unitarity-violating ghost. Predictivity is *not* lost everywhere — only the perturbative expansion / finite parameter set fails in the deep UV; low-energy quantum-gravity predictions are unambiguous.
> **Recommended tag.** [ESTABLISHED] (theorem + EFT status); [OPEN] (UV completion / "fundamental QFT" question).

---

<a id="gc-3"></a>
## GC-3 — The cosmological-constant problem: QFT vacuum energy vs. observed $\Lambda$

**Frameworks:** [QFT](domains/quantum-field-theory.md), [GR](domains/general-relativity.md), [Cosmology](domains/cosmology.md), [Particle Physics / SM](domains/particle-physics.md).
**Kind:** domain-of-validity mismatch / extreme fine-tuning (**not** a logical inconsistency, **not** a falsified prediction).

**Precise statement.** A Lorentz-invariant QFT vacuum carries energy density $\rho_{\rm vac}$ with $T_{\mu\nu} = -\rho_{\rm vac}\, g_{\mu\nu}$ (equation of state $w=-1$); by **Lovelock's theorem** (1971–72) the term $\Lambda g_{\mu\nu}$ is the unique additional divergence-free metric piece beyond $G_{\mu\nu}$ in 4D, so a constant vacuum energy is indistinguishable from $\Lambda$ and gravitates. Estimates of $\rho_{\rm vac}$ vastly exceed the observed dark-energy density $\rho_\Lambda^{\rm obs}\sim 10^{-47}\ \text{GeV}^4 \approx (2.3\ \text{meV})^4$. [ESTABLISHED tension]

**Technical root (robust vs. heuristic).**
- *Heuristic (regulator-dependent):* a zero-point sum cut at the Planck scale gives $\rho_{\rm vac}\sim M_{\rm cut}^4 \sim 10^{76}\ \text{GeV}^4$, exceeding observation by $\sim\!10^{123}$ ($\sim$120 orders); an electroweak cutoff still leaves $\sim$50–60 orders. The quartic estimate is regulator-dependent (dimensional regularization yields an $m^4\ln$ structure, not $M_{\rm cut}^4$).
- *Robust (regulator-independent):* **finite physical condensates** already overshoot — the QCD chiral/gluon condensate $\sim \Lambda_{\rm QCD}^4 \sim 10^{-3}\ \text{GeV}^4$ (~44 orders too large) and the electroweak Higgs potential $\sim (100\ \text{GeV})^4$ (~59 orders). [ESTABLISHED]
- Unbroken SUSY gives exactly zero vacuum energy, but SUSY breaking at $\gtrsim 1$ TeV reinstates $\rho \sim M_{\rm SUSY}^4 \sim 10^{12}\ \text{GeV}^4$ (~59 orders too large) — SUSY does not rescue it.

**Why it matters.** It may signal the naive QFT vacuum-energy calculation is the wrong object, that gravity "degravitates" vacuum energy, or that selection (anthropic/landscape) or sequestering is required. Weinberg's anthropic bound predicted a small nonzero $\Lambda$ before detection, but relies on the contested multiverse + measure. See [OPEN_PROBLEMS.md](OPEN_PROBLEMS.md), [ASSUMPTIONS_LEDGER.md](ASSUMPTIONS_LEDGER.md).

**Current status.** Cosmic acceleration is [ESTABLISHED] (SNe Ia, CMB+BAO). That dark energy is *exactly* a constant $\Lambda$ ($w=-1$) is the simplest fit but a [CONTESTED] assumption; some recent BAO analyses have been *read* as hinting at dynamical dark energy — not established. All proposed solutions are [SPECULATIVE].

> **REFEREE VERDICT — `isSound: true`; severity: minor; keep.**
> **Corrections.** No technical errors; the canonical numbers check out. Sharpen the driver: vacuum energy gravitates as $\Lambda$ because a Lorentz-invariant vacuum has $w=-1$ (the equivalence-principle phrasing is a heuristic). In strict logic there is **no failed prediction and no inconsistency**: in EFT the cosmological constant is a renormalized free parameter (a bare-$\Lambda$ counterterm absorbs the divergence, exactly as for the electron mass). What "fails" is naturalness — the renormalized value must cancel radiative/condensate contributions to ~100+ decimal places with no known dynamical mechanism. "Largest mismatch in physics" is a defensible standard characterization (Weinberg 1989), but a rhetorical superlative whose magnitude depends on the unjustified cutoff choice.
> **Recommended tag.** [OPEN] — severe fine-tuning / domain-mismatch at the QFT–GR interface; the original `domain-mismatch` kind is correct.

---

<a id="gc-4"></a>
## GC-4 — Black-hole information paradox: unitarity vs. semiclassical thermal evaporation

**Frameworks:** [QM](domains/quantum-mechanics.md), [QFT](domains/quantum-field-theory.md), [GR](domains/general-relativity.md), [Thermodynamics](domains/thermodynamics.md), [Statistical Mechanics](domains/statistical-mechanics.md), [Information Theory](domains/information-theory.md).
**Kind:** domain-of-validity / inter-framework tension (**not** a logical inconsistency).

**Precise statement.** Hawking's **leading-order** semiclassical calculation (Bogoliubov mode-mixing between in/out vacua across the horizon) yields an outgoing radiation state that is *mixed* — a thermal/graybody density matrix at Hawking temperature
$$T_H = \frac{\hbar c^3}{8\pi G M k_B}.$$
Naively iterating to complete evaporation maps a pure collapsing state to a mixed final state, in apparent conflict with the unitarity of global QM/QFT evolution. [ESTABLISHED tension]

**Technical root.** Unitarity requires the radiation's *fine-grained* von Neumann entropy to follow the **Page curve** (rise, then return to $\sim 0$), whereas the naive semiclassical entropy rises monotonically. The Bekenstein–Hawking entropy
$$S_{\rm BH} = \frac{k_B c^3 A}{4 G \hbar}$$
should count microstates that the semiclassical computation does not exhibit. [Microstate counting [ESTABLISHED] for specific supersymmetric/BPS black holes via Strominger–Vafa; general case [OPEN].]

**Why it matters.** It is the cleanest place where QM, GR, QFT, and thermodynamics collide simultaneously; resolving it constrains quantum gravity and forces the question of whether semiclassical QFT is being used outside its domain near/inside the horizon. See [GC-5](#gc-5), [GC-13](#gc-13), [OPEN_PROBLEMS.md](OPEN_PROBLEMS.md).

**Current status.** [OPEN]/[CONTESTED] as to mechanism. Unitarity is now widely favored: AdS/CFT is manifestly unitary, and post-2019 quantum-extremal-surface (QES) / island and replica-wormhole computations reproduce a unitary Page curve in controlled (largely AdS, lower-dimensional, large-$c$) settings [INFERENCE]. No agreed first-principles bulk mechanism exists for a realistic, asymptotically-flat, dynamically-formed 4D black hole.

> **REFEREE VERDICT — `isSound: true`; severity: minor; keep.**
> **Corrections.** The original `kind: logical-inconsistency` is **wrong** and corrected to a domain-of-validity / inter-framework tension: each framework is internally consistent; the conflict arises only when semiclassical gravity is pushed past its validity (precisely what the island/QES results indicate by recovering the Page curve). "Exactly thermal to all orders" is overstated — the spectrum is a *graybody* (Planckian × frequency/spin-dependent transmission factors), and the mixedness is a leading-order, finite-order statement, not exact/robust. Unitarity *violation* is not demonstrated; the leading calculation, naively iterated, is what is incompatible with unitarity. "Where information is" (interior, horizon, entanglement wedge, soft hair) is interpretation-dependent.
> **Recommended tag.** [ESTABLISHED] as a structural tension between semiclassical gravity and unitarity; [OPEN]/[CONTESTED] as to resolution. **Not** a logical inconsistency.

---

<a id="gc-5"></a>
## GC-5 — The AMPS firewall puzzle

**Frameworks:** [GR](domains/general-relativity.md), [QM](domains/quantum-mechanics.md), [Information Theory](domains/information-theory.md), [QFT](domains/quantum-field-theory.md).
**Kind:** conceptual tension built on a **rigorous no-go argument**.

**Precise statement.** AMPS (2012) showed that for an *old* (post-Page-time) evaporating black hole, four individually well-motivated assumptions cannot all hold: (1) unitarity of evaporation/$S$-matrix; (2) validity of low-energy EFT outside the stretched horizon; (3) "no drama" at the horizon for an infalling observer (the near-horizon state is the local Hadamard vacuum, from the equivalence principle **plus** the short-distance vacuum entanglement structure of QFT); and (4) the black hole is a conventional quantum system with $e^{A/4}$ states (so the Page argument applies). [INFERENCE — rigorous given premises]

**Technical root.** The obstruction is entanglement monogamy, made rigorous via **strong subadditivity** of von Neumann entropy applied to $\{$early radiation $E$, exterior late mode $b$, interior partner $a\}$:
$$S(b,a) + S(b,E) \ \ge\ S(a) + S(E).$$
A smooth horizon requires $b$ nearly maximally entangled with $a$ (small $S(b,a)$); unitarity past the Page time requires $b$ nearly maximally entangled with $E$ (small $S(b,E)$). SSA forbids both. Severing the $a$–$b$ entanglement to restore unitarity excites the would-be vacuum, depositing high-energy quanta at the horizon — a **firewall** — violating (3).

**Why it matters.** It shows the information paradox threatens the equivalence principle itself at the horizon of an old black hole, where curvature is low and GR "should" be reliable. Proposed escapes — black-hole complementarity, ER=EPR ([GC-16](#gc-16)), state-dependence — each pay a conceptual price.

**Current status.** [OPEN]/[CONTESTED]: no consensus on whether old black holes have firewalls. ER=EPR (Maldacena–Susskind) is a [SPECULATIVE] proposed resolution with no first-principles derivation for generic entanglement. The island/QES program is read by many to suggest no firewall, but the interpretation is disputed.

> **REFEREE VERDICT — `isSound: true`; severity: minor; keep.**
> **Corrections.** The rigorous engine is strong subadditivity; "monogamy of maximal entanglement" is the heuristic special case (the physical modes are only *nearly* maximally entangled, so the contradiction is quantitative). Postulate (3) is precisely "no drama," following from EP **plus** the local-vacuum (Hadamard) condition — calling it "the equivalence principle" alone is loose. The canonical framing includes the distinct fourth postulate (dimension $e^{A/4}$), which the original folds into "unitarity." AMPS proves only *joint incompatibility*; the firewall is **one** resolution, and which postulate fails is genuinely contested (complementarity, ER=EPR, state-dependence, islands/replica wormholes all argue the smooth horizon can survive).
> **Recommended tag.** [INFERENCE] for the AMPS no-go itself (a rigorous, widely accepted derivation of joint incompatibility given its premises); [CONTESTED]/[OPEN] for whether a firewall actually forms.

---

<a id="gc-6"></a>
## GC-6 — The measurement problem: unitary linear evolution vs. definite single outcomes

**Frameworks:** [QM](domains/quantum-mechanics.md), [QFT](domains/quantum-field-theory.md), [Classical Mechanics](domains/classical-mechanics.md).
**Kind:** structural **incompleteness** / domain-demarcation gap (**not** a bare logical inconsistency).

**Precise statement.** Unitary Schrödinger evolution (axiom A5; linear) maps a von Neumann premeasurement $\sum_i c_i\,|s_i\rangle|\text{ready}\rangle \to \sum_i c_i\,|s_i\rangle|\text{pointer}_i\rangle$ — an entangled macroscopic superposition, never a single branch. The Born/projection rule (A6) instead replaces the state by one eigenprojection with probability $\mathrm{Tr}(\rho E)$ — non-unitary, non-linear, stochastic. If A5 is taken as a *universal* dynamical law covering apparatus + observer, it conflicts with the observed single definite outcome (Schrödinger cat, Wigner's friend). [ESTABLISHED tension]

**Technical root.** Linearity of $U(t)=e^{-iHt/\hbar}$ forbids a single branch. Standard QM avoids formal contradiction only by leaving "measurement" a primitive, undefined notion, with no rule fixing when each law applies (Bell's "shifty split"). **Decoherence** (GKSL/Lindblad dynamics) explains rapid, robust suppression of interference in a pointer basis and the emergence of an effective classical regime, but yields an *improper mixture* — the global state stays pure-entangled — so it does not by itself select an outcome. **Gleason's theorem** (dim $\ge 3$) fixes the *form* $\mathrm{Tr}(\rho E)$ of the probability rule but not why one outcome occurs.

**Why it matters.** It is the central foundational problem of QM, bounds the QM→classical correspondence, and is where the only currently-distinguishable alternatives (objective-collapse models) make testable deviations. See [OPEN_PROBLEMS.md](OPEN_PROBLEMS.md), [HYPOTHESES.md](HYPOTHESES.md).

**Current status.** [OPEN]/[CONTESTED] as to resolution; [ESTABLISHED] as a structural tension. Interpretations pay different prices: Everett (keep unitarity; pay with branching + an unsolved account of Born weights), de Broglie–Bohm (definite positions; pay with explicit nonlocality/contextuality and, relativistically, a preferred foliation), GRW/CSL objective collapse (modify dynamics; pay with new stochasticity and Lorentz-covariance tension — but empirically testable and being constrained by matter-wave/optomechanics/spontaneous-radiation experiments). All except objective collapse are empirically equivalent to standard QM so far.

> **REFEREE VERDICT — `isSound: true`; severity: minor; keep.**
> **Corrections.** The original `kind: logical-inconsistency` is corrected to **structural incompleteness / domain-demarcation gap**: A5 and A6 have disjoint stipulated domains and are not formally contradictory; the contradiction appears *only* under the added premise that A5 is universal — precisely the contested premise. The "single experienced outcome" imports an extra determinacy premise that Everettian readings deny. The concrete technical claims (premeasurement entanglement; non-unitarity of projection; decoherence → improper mixture; Gleason fixing form not occurrence) are all correct. Optional sharpeners (Frauchiger–Renner 2018; extended-Wigner's-friend no-go theorems) tighten the tension but are themselves interpretation-dependent — do not cite as settled.
> **Recommended tag.** [ESTABLISHED] (the structural tension/incompleteness is real); [OPEN]/[CONTESTED] (its resolution). Not a settled logical inconsistency.

---

<a id="gc-7"></a>
## GC-7 — Thermodynamic arrow of time vs. time-symmetric microscopic laws

**Frameworks:** [Thermodynamics](domains/thermodynamics.md), [Statistical Mechanics](domains/statistical-mechanics.md), [Classical Mechanics](domains/classical-mechanics.md), [QM](domains/quantum-mechanics.md), [Cosmology](domains/cosmology.md).
**Kind:** ESTABLISHED structural result **+** OPEN cosmological origin (a consistent-but-incomplete problem, not a contradiction).

**Precise statement.** The microscopic laws (Hamiltonian/Schrödinger) are time-reversal invariant up to the tiny CP/T-violation of the weak interaction, which is *irrelevant* to the thermodynamic arrow: a perfectly T-invariant world would still exhibit it given a low-entropy past. Yet isolated macroscopic systems show entropy non-decrease. **Monotonic entropy increase cannot follow from time-symmetric dynamics alone** — Loschmidt's reversibility objection and Zermelo's Poincaré-recurrence objection both rule out any purely dynamical derivation. [ESTABLISHED]

**Technical root.** Liouville's theorem (classical) and unitarity (quantum) conserve the fine-grained Gibbs/von Neumann entropy $S = -k_B\,\mathrm{Tr}(\rho\ln\rho)$ *exactly* for a closed system. Irreversibility appears only for a *coarse-grained* entropy (or, for open subsystems, via environmental entanglement/decoherence — a second route the naive "coarse-graining only" story omits), and in Boltzmann's $H$-theorem only after inserting the molecular-chaos assumption (Stosszahlansatz), applied asymmetrically to pre- vs. post-collision correlations — the precise point where time-asymmetry enters (rigorous only in the Boltzmann–Grad limit for short times, per Lanford 1975). The resolution requires a time-asymmetric **input**: a special low-entropy boundary condition (the *Past Hypothesis*) plus a coarse-graining/typicality choice.

The **fluctuation theorems** refine the second law into exact statistical statements — Crooks: $P_F(+W)/P_R(-W) = e^{\beta(W-\Delta F)}$; Jarzynski: $\langle e^{-\beta W}\rangle = e^{-\beta\Delta F}$ — making transient entropy *decreases* exponentially rare but nonzero. They presuppose an equilibrium initial state (itself a time-asymmetric input) and so illustrate, rather than independently derive, the arrow.

**Why it matters.** The second law is not a fundamental microlaw but a consequence of dynamics + a cosmological boundary condition; this exports the deepest part of the puzzle — *why* the early universe had such low, especially gravitational, entropy — to cosmology and quantum gravity. See [GC-17](#gc-17) (gravitational non-extensivity), [Cosmology](domains/cosmology.md), [OPEN_PROBLEMS.md](OPEN_PROBLEMS.md).

**Current status.** That a time-asymmetric input is *necessary* is [ESTABLISHED]. *Why* the early universe had extraordinarily low gravitational entropy (near-zero Weyl curvature; Penrose's Weyl-curvature hypothesis is one [SPECULATIVE] proposal) is genuinely [OPEN]. A complete first-principles derivation of thermalization for realistic Hamiltonians is also [OPEN] (the eigenstate thermalization hypothesis is strong but unproven and fails for integrable / many-body-localized systems).

> **REFEREE VERDICT — `isSound: true`; severity: minor; keep.**
> **Corrections.** Sharpen the CP/T remark: weak-interaction T-violation is essentially *irrelevant*, not merely insufficient. Fine-grained entropy conservation is exact for the *total isolated* system; open-subsystem entanglement (decoherence) is a distinct second route to observed irreversibility. The Stosszahlansatz is inserted as molecular chaos and applied asymmetrically; Lanford's theorem justifies the Boltzmann equation only for short times in the Boltzmann–Grad limit. The original `unsolved-problem` label applies **only** to the cosmological residue (origin of the Past Hypothesis), not to the established structural result.
> **Recommended tag.** Mixed: [ESTABLISHED] (necessity of a time-asymmetric input; Loschmidt/Zermelo; fine-grained-entropy conservation; Stosszahlansatz as the locus of asymmetry; exactness of fluctuation theorems); [OPEN] (origin/justification of the low-entropy Past Hypothesis).

---

<a id="gc-8"></a>
## GC-8 — The problem of time in canonical quantum gravity vs. QM's external time

**Frameworks:** [GR](domains/general-relativity.md), [QM](domains/quantum-mechanics.md), [QFT](domains/quantum-field-theory.md).
**Kind:** conceptual / structural tension (**not** a logical inconsistency, **not** an in-principle impossibility).

**Precise statement.** QM presupposes an external classical time parameter $t$: $i\hbar\,\partial_t|\psi\rangle = H|\psi\rangle$, and by **Pauli's theorem** a lower-bounded $H$ admits no self-adjoint operator canonically conjugate to it ($[T,H]=i\hbar$), so $t$ is a fixed background c-number. GR, being background-independent, has no preferred external time; its canonical quantization *formally* yields the **Wheeler–DeWitt equation** $\hat H_\perp|\Psi\rangle = 0$ — a constraint with no $\partial_t$ term and hence no Schrödinger-type evolution (the "frozen formalism"). [ESTABLISHED facts]

**Technical root.** The total ADM Hamiltonian is purely a sum of constraints,
$$H = N\,\mathcal H_\perp + N^i\,\mathcal H_i, \qquad \mathcal H_\perp \approx 0,\quad \mathcal H_i \approx 0\ \text{(weakly)},$$
with lapse $N$ and shift $N^i$ as Lagrange multipliers. On the standard reading, coordinate-time reparametrization is part of the diffeomorphism gauge group, so "evolution" in coordinate time is pure gauge — **though whether $\mathcal H_\perp$ generates genuine gauge or genuine many-fingered-time dynamics is itself contested (the Kuchař critique)**. Dirac observables must commute with all constraints, making them diffeomorphism-invariant, generically nonlocal, and hard to construct.

**Why it matters.** It is a direct obstruction to writing a Schrödinger equation for the universe and to defining unitary evolution and probabilities in quantum gravity — one of the sharpest conceptual barriers any canonical program must overcome. Connected to [GC-1](#gc-1) (background independence). See [OPEN_PROBLEMS.md](OPEN_PROBLEMS.md).

**Current status.** [OPEN]/[CONTESTED]. Proposed (unconfirmed) resolutions: relational / Page–Wootters conditional-probability time (time as correlation with an internal clock subsystem), Rovelli's partial observables / evolving constants, and an emergent semiclassical WKB time from a Born–Oppenheimer expansion. Within *classical* GR the absence of preferred time is a feature; it becomes a problem only upon quantization. Cosmology's preferred cosmic time relies on FLRW symmetry and does not exist in an inhomogeneous universe.

> **REFEREE VERDICT — `isSound: true`; severity: minor; keep.**
> **Corrections.** "Canonical quantization *yields* WDW" → "**formally** yields": the WDW operator is heuristic (operator-ordering ambiguities, regularization/UV ill-definedness; no rigorous self-adjoint definition). Flag that the pure-gauge reading of $\mathcal H_\perp$ is contested (Kuchař) and that this contest is constitutive of the difficulty. Pauli's theorem is used correctly. The tension is a deep unsolved-but-consistent structural problem, **not** a demonstrated impossibility nor a logical contradiction. Canonical references: Dirac's constrained-Hamiltonian analysis, DeWitt (1967), and the Isham and Kuchař reviews of the problem of time.
> **Recommended tag.** [OPEN]/[CONTESTED] structural problem (conceptual tension). Underlying technical facts (ADM constraint structure, Pauli's theorem, the formal WDW equation) are [ESTABLISHED]; the gauge-vs-dynamics status of $\mathcal H_\perp$ and the resolution are [CONTESTED].

---

<a id="gc-9"></a>
## GC-9 — Haag's theorem vs. the working interaction picture of perturbative QFT

**Frameworks:** [QFT](domains/quantum-field-theory.md), [QM](domains/quantum-mechanics.md), [Mathematics for Physics](domains/mathematics.md).
**Kind:** **rigor gap / domain-of-validity mismatch** — a no-go for a formal construction (**not** a logical inconsistency of QFT or of renormalized perturbation theory).

**Precise statement.** The textbook interaction picture presupposes a unitary $U(t)$, on one Poincaré-covariant Hilbert space with a unique vacuum, intertwining free and interacting fields at fixed time. **Haag's theorem** (Hall–Wightman 1957, after Haag 1955; see Streater–Wightman, *PCT, Spin and Statistics, and All That*) proves no such $U$ exists for a genuinely interacting field: were it to exist, the interacting Wightman functions would equal the free ones (so the "interacting" theory would be free). [ESTABLISHED]

**Technical root.** **Stone–von Neumann uniqueness** holds only for finitely many canonical pairs (in the Weyl form, with regularity); QFT has infinitely many degrees of freedom, so it fails, yielding uncountably many unitarily inequivalent representations of the CCR. The free and interacting theories generically inhabit different ones — the interacting theory does not live in the free Fock space. (See [GC-14](#gc-14).) The textbook *derivation* of the Dyson series via a global interaction-picture unitary is therefore ill-defined as literally stated.

**Resolution / repair.** Rigorous content is recovered with **no** global $U$: (a) IR/UV regularization (finite volume breaks the load-bearing translation-invariance hypothesis); (b) LSZ / adiabatic switching defines asymptotic in/out fields in their own representations; (c) **Epstein–Glaser causal perturbation theory** builds the perturbative $S$-matrix directly from microcausality with no interaction picture and no Haag obstruction; (d) the invariant content lives in Haag–Kastler nets (generically type III$_1$ factors) and Doplicher–Haag–Roberts superselection theory. Dyson's observation that the QED series is asymptotic (not convergent) is a logically *separate* point.

**Why it matters.** Textbook QFT, despite its empirical triumphs (electron $g\!-\!2$), is not the rigorous theory it appears to be; this motivates algebraic QFT and the constructive program, and clarifies that spontaneous symmetry breaking and distinct phases live precisely in inequivalent representations.

**Current status.** [ESTABLISHED] as a theorem and as a foundational subtlety — **not** a falsification: it does not impugn the empirical correctness of renormalized perturbation theory, recovered as an asymptotic expansion controlled order-by-order (BPHZ). 4D constructive existence remains [OPEN].

> **REFEREE VERDICT — `isSound: true`; severity: minor; keep.**
> **Corrections.** The original `kind: logical-inconsistency` is **downgraded** to a rigor-gap / domain-mismatch: Haag's theorem is a no-go for one formal scaffolding, not a contradiction within a fixed consistent axiom system. "Mathematically inconsistent" → "the textbook *derivation* is not well-defined / rests on a nonexistent object"; the *output* is an asymptotic expansion of quantities definable by other means (Epstein–Glaser, Wightman/OS). Stone–von Neumann uniqueness is conditional (requires the bounded Weyl form **and** regularity); it can fail even in finite dof for non-regular representations or on non-simply-connected configuration spaces (Aharonov–Bohm $\theta$-vacua). The sharp dividing line is "Weyl form + regularity + finiteness," not merely "finite vs. infinite dof."
> **Recommended tag.** [ESTABLISHED] (as a rigor gap / structural no-go and its resolution). The "logical-inconsistency" label is itself an overclaim, replaced by "rigor-gap / domain-of-validity mismatch."

---

<a id="gc-10"></a>
## GC-10 — Triviality / Landau poles refute "renormalizable = fundamental"

**Frameworks:** [QFT](domains/quantum-field-theory.md), [Particle Physics / SM](domains/particle-physics.md), [Mathematics for Physics](domains/mathematics.md).
**Kind:** ESTABLISHED refutation **+** OPEN (Planck/gravity-dominated) SM UV completion.

**Precise statement.** Perturbative renormalizability does **not** guarantee a nontrivial UV-complete continuum theory. $\phi^4$ in 4D is **proven trivial** (Aizenman 1981 for $d>4$; Aizenman–Duminil-Copin, *Annals of Math.* 2021, for the marginal $d=4$ case, for reflection-positive lattice $\phi^4$ / Ising-class models): the continuum limit is the free (Gaussian) theory. QED is strongly **believed** trivial (perturbative Landau pole + lattice evidence), though its pole lies far above $M_{\rm Pl}$ and is academic. [ESTABLISHED for the refutation and $\phi^4$; INFERENCE for QED]

**Technical root.** The $\beta$-function $\beta(g)=\mu\,dg/d\mu$ is positive for QED and $\phi^4$, driving the coupling toward a Landau pole. Contrast **asymptotic freedom** in QCD:
$$\beta_{\rm QCD} = -\frac{g^3}{16\pi^2}\Big(11 - \tfrac{2}{3} n_f\Big) < 0 \quad (n_f < 33/2),$$
so the coupling vanishes logarithmically in the UV — QCD is UV-safe where QED/$\phi^4$ are not. **Caveat:** the Landau pole is a one-loop *perturbative diagnostic*, distinct from the rigorous triviality theorem (the ADC proof does **not** proceed via the pole).

**Why it matters.** It overturns renormalizability-as-fundamental-axiom (Wilson's RG already reinterpreted renormalizability as an emergent low-energy property) and *contributes* to the view that the SM is an EFT. It connects to the still-[OPEN] constructive question of whether *any* realistic interacting 4D QFT exists in the continuum. See [GC-9](#gc-9), [OPEN_PROBLEMS.md](OPEN_PROBLEMS.md).

**Current status.** $\phi^4_4$ triviality is [ESTABLISHED] (theorem). QED triviality is [INFERENCE]. Asymptotic safety as a possible nontrivial UV fixed point is [SPECULATIVE]/[OPEN]. This is a consistent statement about domain of validity, **not** a logical contradiction.

> **REFEREE VERDICT — `isSound: true`; severity: minor; keep.**
> **Corrections.** Re-categorize: the headline content is [ESTABLISHED], not `unsolved-problem`; only the SM-specific UV completion is open, and that is *gravity-dominated* at $M_{\rm Pl}$, not driven by triviality. Two overclaims fixed: (1) the SM-as-EFT conclusion rests primarily on **empirical** incompleteness (gravity, neutrino masses, dark matter, baryon asymmetry), with triviality a contributing motivation; (2) the SM Higgs sector's dominant UV concern is **quartic metastability** — for the measured top mass the Higgs quartic $\lambda$ runs slightly *negative* near $\sim 10^{10}$–$10^{11}$ GeV (electroweak-vacuum metastability) — **not** a quartic Landau pole; the $U(1)_Y$ Landau pole is academic, far above $M_{\rm Pl}$. State the ADC hypotheses (lattice, reflection positivity, Ising universality class) rather than presenting triviality as unconditional.
> **Recommended tag.** [ESTABLISHED] (the refutation "renormalizable $\ne$ UV-complete" and $\phi^4_4$ triviality); [INFERENCE] (QED triviality; SM-as-EFT inheritance); the SM's own UV completion is [OPEN] but Planck/gravity-dominated. **Not** `unsolved-problem`.

---

<a id="gc-11"></a>
## GC-11 — Singularities: GR predicts its own breakdown (geodesic incompleteness)

**Frameworks:** [GR](domains/general-relativity.md), [Cosmology](domains/cosmology.md), [QFT](domains/quantum-field-theory.md), [QM](domains/quantum-mechanics.md).
**Kind:** domain-of-validity limit / breakdown (**not** an internal logical inconsistency).

**Precise statement.** The Penrose–Hawking singularity theorems prove, via the Raychaudhuri focusing equation plus an energy condition and an initial focusing condition, that classical solutions are **geodesically incomplete**:
- *Penrose (1965):* null energy condition (NEC) + a **trapped surface** + global hyperbolicity (non-compact Cauchy surface) $\Rightarrow$ null geodesic incompleteness;
- *Hawking / Hawking–Penrose (1970):* strong energy condition (SEC) (or the generic condition) + cosmological expansion or a trapped set $\Rightarrow$ timelike/null incompleteness. [ESTABLISHED]

Incompleteness means the equations cease to define evolution. Curvature invariants (e.g., the Kretschmann scalar $R_{\mu\nu\rho\sigma}R^{\mu\nu\rho\sigma}$) diverge in the **symmetric** exact cases (Schwarzschild $r\to 0$; FLRW $a\to 0$), though geodesic incompleteness does not by itself entail curvature blow-up in general (cf. conical/quasiregular singularities).

**Technical root & the energy-condition caveat.** The energy conditions are hypotheses on matter that quantum fields *violate pointwise* (Casimir effect, squeezed states, near-horizon Hawking fluxes for the NEC; positive $\Lambda$ and slow-roll inflation, with $\rho + 3p = -2\rho < 0$, decisively for the SEC). Crucially:
- **SEC violation** by $\Lambda>0$ and inflation is a genuine, decisive loophole that *evades* the SEC-based cosmological theorems — this is why inflationary cosmology does not need an initial singularity from those theorems. The eternal-inflation case is instead closed by the **Borde–Guth–Vilenkin theorem** (a kinematic average-Hubble-rate condition, not an energy condition): even eternal inflation is past-incomplete.
- **Pointwise NEC violation** does **not** generally defeat the collapse theorem: quantum fields obey *averaged / quantum energy inequalities* (Ford–Roman QEIs; ANEC), and the singularity theorems have been re-derived from these weaker averaged conditions (Tipler–Borde–Roman; Fewster–Galloway; Fewster–Kontou) and largely survive.

**Why it matters.** Singularities mark precisely where GR must hand off to quantum gravity (Big Bang, black-hole interiors) at curvatures $\sim \ell_P^{-2}$; whether they are resolved (bounces, replacement) is [OPEN] and currently untestable. See [GC-1](#gc-1), [GC-7](#gc-7), [CONSTANTS_AND_SCALES.md](CONSTANTS_AND_SCALES.md).

**Current status.** [ESTABLISHED] that GR is geodesically incomplete (the theorems are rigorous). The pointwise energy conditions are known too strong but are robustified by averaged/quantum conditions. What replaces the singularity is [OPEN]. This is a domain-mismatch/breakdown, not a contradiction within classical GR.

> **REFEREE VERDICT — `isSound: true`; severity: minor; keep.**
> **Corrections.** Penrose's theorem is conditional on the existence of a trapped surface plus global hyperbolicity; that trapped surfaces *form* in realistic collapse is a separate result (Christodoulou). Hawking radiation's NEC violation is a late-time near-horizon evaporation effect, not relevant to the *collapse-stage* premises — do not list it alongside Casimir/squeezed states as a threat to the theorem's hypotheses. Distinguish: SEC violation is a decisive loophole for the cosmological theorems; pointwise NEC violation is largely *repaired* by ANEC/QEIs for the collapse theorem. Overstated "premises in tension with quantum matter" → "pointwise violated, but the theorems are substantially robust under the physically appropriate averaged/quantum energy conditions."
> **Recommended tag.** [ESTABLISHED] (theorem content + domain-of-validity reading); the energy-condition sub-claim is [ESTABLISHED] as to pointwise violation but [INFERENCE]/partially-resolved given the averaged-energy / QEI robustification program.

---

<a id="gc-12"></a>
## GC-12 — Quantum nonlocality (Bell violation) vs. relativistic locality

**Frameworks:** [QM](domains/quantum-mechanics.md), Special Relativity (see [GR](domains/general-relativity.md), [Classical Mechanics](domains/classical-mechanics.md)), [QFT](domains/quantum-field-theory.md).
**Kind:** conceptual tension with **no operational/empirical contradiction**.

**Precise statement.** Loophole-free Bell/CHSH experiments (Hensen, Giustina, Shalm et al., 2015) decisively violate the local-hidden-variable bound
$$\text{CHSH:}\quad S = |E(a,b) - E(a,b') + E(a',b) + E(a',b')| \le 2,$$
with QM correlations bounded above by Tsirelson's bound $S \le 2\sqrt2$ (Cirel'son 1980); real experiments record values strictly between $2$ and $2\sqrt2 \approx 2.828$ (the ideal QM ceiling is not attained). [ESTABLISHED] Entanglement correlations and (on collapse-type readings) the projection postulate *appear* to act instantaneously across spacelike separation.

**Technical root.** Bell's theorem (local causality, Bell 1976) shows the empirical correlations cannot arise from any theory simultaneously satisfying **local causality**, **measurement-independence** (free choice / no superdeterminism), and **no retrocausality**, holding the QM predictions fixed; experiment forces abandoning at least one, and which is interpretation-dependent. *("Realism" is not a separate premise — it is part of local causality; **noncontextuality** is the distinct Kochen–Specker assumption and should not be conflated with the Bell premises.)* The clash is **not** operational: QM respects **parameter independence** — the no-signaling theorem, $\rho_A = \mathrm{Tr}_B(\rho_{AB})$ is independent of $B$'s setting choice — so no usable information propagates superluminally. In the Jarrett/Shimony decomposition of local causality, QM violates only **outcome independence**, which carries no signal. At the QFT level, microcausality $[\phi(x),\phi(y)]=0$ for spacelike separation enforces no-signaling. [ESTABLISHED]

**Why it matters.** It pins down exactly which classical intuitions must be abandoned and shows the clash with relativity is *conceptual* (about hidden mechanism), not operational. Making collapse manifestly Lorentz-covariant is genuinely hard and is where objective-collapse models (GRW/CSL) face their stiffest challenge; relativistic QFT measurement also confronts frame-dependent state-update, Sorkin's "impossible measurements," and Reeh–Schlieder vacuum nonlocality. See [GC-6](#gc-6), [GC-15](#gc-15).

**Current status.** [ESTABLISHED] that Bell violation is real and that no-signaling holds — so **no contradiction with special relativity's operational content**. The tension is interpretational. Measurement-independence/free choice is load-bearing; denying it (superdeterminism/retrocausality) is a logically [OPEN] but widely-regarded-as-conspiratorial escape, actively [CONTESTED] by a minority. A fully covariant, agreed account of relativistic state-update is [OPEN].

> **REFEREE VERDICT — `isSound: true`; severity: minor; keep.**
> **Corrections.** State the Bell premises precisely: $\{$local causality, measurement-independence, no-retrocausality$\}$ with predictions held fixed. "Realism" is subsumed in local causality (CHSH = "local realism"); noncontextuality is the distinct Kochen–Specker premise and must not be listed inside the Bell trichotomy. Tsirelson's $2\sqrt2$ is the ideal QM ceiling, not an experimental value. The Jarrett/Shimony split (parameter independence respected = no-signaling; outcome independence violated = no signal) sharpens the SR reconciliation. Collapse is interpretation-dependent (absent in Everett and de Broglie–Bohm; stochastic/Lorentz-challenged in GRW/CSL).
> **Recommended tag.** [ESTABLISHED] (a conceptual tension with no operational contradiction); [CONTESTED]/interpretation-dependent (which premise of local causality fails; the physical status of collapse).

---

<a id="gc-13"></a>
## GC-13 — Holographic area-law degrees of freedom vs. volume-extensive QFT Hilbert space

**Frameworks:** [Information Theory](domains/information-theory.md), [QFT](domains/quantum-field-theory.md), [GR](domains/general-relativity.md), [Statistical Mechanics](domains/statistical-mechanics.md), [Thermodynamics](domains/thermodynamics.md).
**Kind:** conceptual tension built on [ESTABLISHED] components; resolution [OPEN]. **Domain-of-validity mismatch**, not a logical inconsistency.

**Precise statement.** Black-hole and covariant entropy bounds — $S_{\rm BH} = k_B A/(4\ell_P^2)$; the Bousso bound $S \le A/4$ in Planck units — cap the entropy of a *gravitating* region by its boundary **area**, implying a finite, area-extensive count of physical gravitational degrees of freedom. Local QFT, by contrast, assigns independent oscillators to every point, giving a volume-extensive Hilbert-space dimension. The conceptual tension is over "how many degrees of freedom live in a region." [ESTABLISHED components]

**Technical root.** Ground-state entanglement entropy of a region obeys an **area law** but with a UV-*divergent*, cutoff-dependent coefficient,
$$S \sim \frac{\text{Area}}{\epsilon^{D-2}} \quad (D = \text{spacetime dimension; e.g. } S\sim \text{Area}/\epsilon^2 \text{ in 4D}),$$
reflecting infinitely many short-distance modes; only mutual information, entropy *differences*, and universal subleading coefficients (central charge in 2D; log / $a$-anomaly terms) are physical. Rigorously, local algebras in QFT are **type III$_1$ von Neumann factors** (Reeh–Schlieder; cyclic-separating vacuum): they admit **no trace and no tensor factorization** of the Hilbert space into local subsystems, so there is no well-defined local density matrix or number operator. The resolution of the apparent over-counting is gravitational: a region whose field-theoretic entropy would exceed $A/4$ has enough energy to have *already collapsed* to a black hole (the Susskind spherical-entropy-bound argument) — the QFT count is being applied *outside its gravitational domain of validity*.

**Why it matters.** It suggests continuum QFT badly over-counts degrees of freedom and is effective, not fundamental (connecting to [GC-3](#gc-3) and the species/Bekenstein bounds), and underlies the holographic principle and "spacetime from entanglement" programs ([GC-16](#gc-16)).

**Current status.** Area-law BH entropy is [ESTABLISHED]-theory, near-universally accepted across independent derivations (Hawking radiation, Euclidean action, string microstate counting for extremal/BPS black holes — Strominger–Vafa; loop area spectra), but lacks a *general background-independent* proof [INFERENCE]. The type-III structure is [ESTABLISHED] (algebraic QFT). Recent crossed-product / large-$N$ constructions (Witten; Chandrasekaran–Longo–Penington–Witten) yield type II algebras with a well-defined trace and finite *renormalized* (generalized) entropy — a [INFERENCE] **partial bridge** that does not yet derive the $A/4$ microstate count. How to define entanglement entropy in full quantum gravity, and whether spacetime is fundamentally discrete, is [OPEN].

> **REFEREE VERDICT — `isSound: true`; severity: minor; keep.**
> **Corrections.** Fix the dimensional slip: the leading divergence is $S \sim \text{Area}/\epsilon^{D-2}$ in $D$ spacetime dimensions (not $\epsilon^{d-1}$). The *Hilbert space* is volume-extensive, but the *ground-state* entanglement entropy obeys an area law (a volume law holds only for generic excited/random states) — the original verbally conflated these. The relationship is a domain-of-validity mismatch (QFT without gravity vs. with gravity), not a contradiction: once gravitational backreaction is included, the over-counting is removed. The crossed-product type-II bridge addresses factorization/trace and matches generalized entropy but does not derive the finite count — "partial bridge" is fair; more would overclaim.
> **Recommended tag.** [OPEN] conceptual tension built on [ESTABLISHED] components (S$_{\rm BH}$; the area-law UV divergence and which pieces are universal; type III$_1$ algebras + Reeh–Schlieder; the Susskind resolution; the Bousso bound); the crossed-product bridge is [INFERENCE]; the full reconciliation is [OPEN].

---

<a id="gc-14"></a>
## GC-14 — Stone–von Neumann uniqueness vs. inequivalent representations (infinite dof)

**Frameworks:** [QM](domains/quantum-mechanics.md), [QFT](domains/quantum-field-theory.md), [Statistical Mechanics](domains/statistical-mechanics.md), [Mathematics for Physics](domains/mathematics.md).
**Kind:** domain-of-validity boundary (**not** an inconsistency).

**Precise statement.** [ESTABLISHED] The **Stone–von Neumann theorem** (von Neumann 1931): for a *finite* number of canonical pairs, every irreducible representation of the **Weyl (exponentiated) form** of the CCR that is **weakly/strongly continuous (regular)** is unitarily equivalent to the Schrödinger representation. *Both* the Weyl-form and the continuity hypotheses are essential. [ESTABLISHED] For *infinitely* many degrees of freedom (QFT, the thermodynamic limit) the theorem **fails**: there are uncountably many unitarily inequivalent irreducible representations of the CCR.

**Technical root.** The deep reason is **not** "compactness" but the nonexistence of an infinite-dimensional translation-invariant (Lebesgue) measure: in finite dimensions the canonical Gaussian construction is essentially unique up to unitary equivalence, while in infinite dimensions Gaussian measures with different covariances are *mutually singular* (disjoint), yielding inequivalent representations.

**Why it matters.** This is the precise mathematical seam between the "one Hilbert space" intuition of textbook QM and the algebraic reality of QFT and many-body physics. It underlies — as **related but logically distinct** phenomena, each needing extra hypotheses — inequivalent vacua and spontaneous symmetry breaking; superselection sectors (charge, particle number, distinct thermodynamic phases); Haag's theorem ([GC-9](#gc-9), which additionally requires Poincaré covariance and vacuum uniqueness); and the necessity of the algebraic C\*/von Neumann formulation. In statistical mechanics, distinct phases live in inequivalent GNS representations and genuine non-analyticities (phase transitions) appear only in the thermodynamic limit (illustrated for ferromagnetic lattice models by the Lee–Yang circle theorem on partition-function zeros).

**Current status.** [ESTABLISHED] on both sides: Stone–von Neumann is a theorem (finite dof); inequivalent representations are a rigorous, physically essential feature of infinite-dof systems. A clean domain mismatch, fully understood mathematically (algebraic QFT / quantum statistical mechanics), not an open problem.

> **REFEREE VERDICT — `isSound: true`; severity: minor; keep.**
> **Corrections.** State both load-bearing hypotheses (Weyl form **and** regularity/continuity) — without continuity, inequivalent representations exist even in finite dof. The mechanism is the missing infinite-dimensional Lebesgue measure / mutual singularity of Gaussian measures, **not** "compactness" (a garbled attribution). SSB, superselection, and Haag's theorem are logically distinct, not uniform direct corollaries (superselection can arise without infinite dof; Haag needs Poincaré covariance + vacuum uniqueness). SvN gives uniqueness of the *irreducible* rep up to unitary equivalence; "Fock vacuum" is anachronistic for the bare SvN (Schrödinger-representation) setting. Lee–Yang specifically concerns partition-function zeros of ferromagnetic Ising/lattice-gas models. SvN is a *theorem* about the chosen representation, not a foundational axiom QM "rests on." References: von Neumann 1931; Reed–Simon; Haag, *Local Quantum Physics*; Bratteli–Robinson.
> **Recommended tag.** [ESTABLISHED].

---

<a id="gc-15"></a>
## GC-15 — Semiclassical gravity $G_{\mu\nu} = 8\pi G\,\langle T_{\mu\nu}\rangle$ vs. quantum superposition of mass

**Frameworks:** [GR](domains/general-relativity.md), [QM](domains/quantum-mechanics.md), [QFT](domains/quantum-field-theory.md).
**Kind:** domain-of-validity breakdown of an approximation that becomes inconsistent if promoted to fundamental.

**Precise statement.** Semiclassical gravity (Møller 1962, Rosenfeld 1963), $G_{\mu\nu} = 8\pi G\,\langle\psi|T_{\mu\nu}|\psi\rangle$, couples a classical metric to quantum matter via the *expectation value* of the stress-energy — a source quadratic (hence nonlinear) in the state. For a macroscopic superposition $(|\text{mass at }A\rangle + |\text{mass at }B\rangle)/\sqrt2$, the equation produces a *single* mean-field geometry sourced by both locations at once — **not** a superposition of two geometries. [INFERENCE that this fails for superpositions]

**Technical root.** The mean-field source is nonlinear in $|\psi\rangle$ (the map $|\psi\rangle\mapsto|\psi\rangle\langle\psi|$ is nonlinear). The mean-field prediction is empirically disfavored (Page–Geilker 1981), and — combined with stochastic state reduction — the nonlinearity is pathological: the general theorem that **deterministic nonlinear modifications of quantum dynamics permit superluminal signaling** (Gisin 1990; Polchinski 1991) applies, and the non-relativistic Schrödinger–Newton limit conflicts with Born-rule statistics under collapse (Bahrami–Großardt–Donadi–Bassi 2014).

**Why it matters.** It is a concrete internal reason semiclassical gravity is at best an approximation, motivating either quantizing the metric or modifying QM via gravitational collapse. It drives gravitationally-induced-collapse proposals (Diósi–Penrose) and tabletop gravity-mediated-entanglement experiments aiming to test whether gravity must be quantized. See [GC-1](#gc-1), [GC-12](#gc-12), [OPEN_PROBLEMS.md](OPEN_PROBLEMS.md).

**Current status.** [INFERENCE]/[OPEN]. The near-universal expectation is that the metric must be quantized (or QM modified by gravitational collapse), but this is not experimentally settled. Diósi–Penrose collapse is being *constrained* (not excluded) by underground spontaneous-radiation and interferometry experiments. Proposed gravity-mediated-entanglement tests would, if entanglement were observed, argue gravity is non-classical — but they have not been performed at the required sensitivity. Semiclassical gravity remains an excellent approximation in its domain (Hawking, Unruh; the leading term of a $1/N$ expansion).

> **REFEREE VERDICT — `isSound: true`; severity: minor; keep.**
> **Corrections.** The signaling/Born-rule pathology does **not** follow from the nonlinearity of $\langle T\rangle$ alone: unitary-only semiclassical gravity is nonlinear but does not by itself signal; the inconsistency arises specifically when the mean-field source is *combined* with stochastic state reduction (then Gisin/Polchinski applies). The "single mean-field geometry" is not self-evidently inconsistent in isolation — it is empirically disfavored (Page–Geilker) and pathological only with collapse. "A classical metric cannot consistently couple to quantum sources" is **too strong as a universal claim**: it is the *mean-field (expectation-value)* coupling that fails; fundamentally *stochastic* classical–quantum models (Diósi–Penrose; Oppenheim-type CQ dynamics with intrinsic decoherence/diffusion) evade the deterministic-nonlinearity no-go and remain [CONTESTED]-but-open. Do not lean on Eppley–Hannay (1977), whose gedanken argument is criticized as relying on unphysical idealizations.
> **Recommended tag.** [INFERENCE] for the breakdown (mean-field failure for superpositions + nonlinearity-implies-signaling are well-established); the universal no-go ("no classical metric can couple to quantum matter") is downgraded to [CONTESTED]/[SPECULATIVE].

---

<a id="gc-16"></a>
## GC-16 — ER=EPR / "spacetime from entanglement" vs. its unestablished generality beyond AdS

**Frameworks:** [Information Theory](domains/information-theory.md), [GR](domains/general-relativity.md), [QFT](domains/quantum-field-theory.md), [Cosmology](domains/cosmology.md).
**Kind:** conceptual tension / **evidential gap** (domain-of-validity / generality-of-evidence limitation, **not** an internal logical inconsistency).

**Precise statement.** The Ryu–Takayanagi formula $S(A) = \text{Area}(\gamma_A)/4G_N$, entanglement-wedge reconstruction, the "first law of entanglement $\Rightarrow$ linearized Einstein equations" result, and the ER=EPR conjecture jointly motivate the program that spacetime geometry emerges from the entanglement structure of an underlying quantum theory. The tension: all of this is rigorously formulated and *derived* essentially **only** within AdS/CFT (asymptotically anti-de Sitter, large central charge, strong 't Hooft coupling — the bulk Einstein-gravity regime). [INFERENCE within AdS]

**Technical root.** RT/HRT and entanglement-wedge reconstruction are derived (Lewkowycz–Maldacena 2013 gravitational replica trick; FLM/JLMS modular-Hamiltonian relation; QES via Engelhardt–Wall; islands via Penington / Almheiri–Engelhardt–Marolf–Maxfield / Penington–Shenker–Stanford–Yang 2019–20) — but every derivation presupposes the holographic dictionary plus the Einstein-gravity (large-$c$, large-$\lambda$) regime, with a homology constraint and extremal-surface prescriptions. Crucially: (i) the gravity-from-entanglement derivations recover only the **linearized** Einstein equations (Lashkari–Van Raamsdonk; Faulkner–Guica–Hartman–Myers–Van Raamsdonk 2014; second order only under restrictive assumptions); the full nonlinear, background-independent reconstruction is **not** achieved; (ii) ER=EPR has no first-principles derivation for generic, non-holographic entanglement; (iii) de Sitter holography (dS/CFT, relevant to our positive-$\Lambda$ universe) is far less constrained and speculative, and flat-space / finite-$N$ holography lack established RT analogs; (iv) an algebraic-QFT obstruction (local algebras are type III$_1$ factors lacking factorization and a finite entanglement entropy — see [GC-13](#gc-13)) sits beneath the heuristic "entanglement-as-fabric" discourse.

**Why it matters.** It is the most ambitious proposed reconciliation of GR and quantum information — potentially reframing the GR/QFT clash ([GC-1](#gc-1)) by making geometry emergent — but its applicability to real cosmology (where the deepest puzzles, including $\Lambda$ and the arrow of time, live) is exactly where it is least grounded. See [UNIFICATION_LANDSCAPE.md](UNIFICATION_LANDSCAPE.md), [OPEN_PROBLEMS.md](OPEN_PROBLEMS.md).

**Current status.** RT within AdS/CFT is [INFERENCE] (well-supported, extensively checked, proven in some lower-dim/BPS cases; AdS/CFT itself lacks a general nonperturbative proof). "Spacetime from entanglement" as a *universal* principle, ER=EPR for generic entanglement, and de Sitter holography are [SPECULATIVE]/[OPEN]. Whether this is profound universal insight or an AdS-specific artifact is arguably the central open question of the program.

> **REFEREE VERDICT — `isSound: true`; severity: minor; keep.**
> **Corrections.** No genuine technical errors; the claim is deliberately anti-overclaiming. Minor: within AdS/CFT these results are *derived*, not merely "tested" (the stated domain restriction is unaffected). The status hierarchy is endorsed: RT/entanglement-wedge in AdS [INFERENCE]; linearized-Einstein-from-first-law [INFERENCE, linearized only]; full nonlinear background-independent gravity-from-entanglement [SPECULATIVE/OPEN]; ER=EPR for generic entanglement [SPECULATIVE]; dS/CFT and flat/finite-$N$ analogs [SPECULATIVE/OPEN]. The label is more precisely a *generality-of-evidence* limitation than a logical tension — there is no contradiction, only an unwarranted extrapolation outside AdS.
> **Recommended tag.** [SPECULATIVE] for the program's generality (AdS-restricted RT and entanglement-wedge results at [INFERENCE]); the meta-claim that this generality is currently *unestablished* beyond AdS is [ESTABLISHED] (contested only by optimists).

---

<a id="gc-17"></a>
## GC-17 — Standard ensemble statistical mechanics vs. long-range gravitating systems

**Frameworks:** [Statistical Mechanics](domains/statistical-mechanics.md), [Thermodynamics](domains/thermodynamics.md), [GR](domains/general-relativity.md), [Cosmology](domains/cosmology.md).
**Kind:** domain-of-validity mismatch (**not** a logical inconsistency).

> **Note.** This entry's original framing was the **only** one the referee found internally *unsound* (`isSound: false`). It is retained and corrected; one erroneous sub-claim (black-hole area-entropy as a *consequence* of Newtonian non-additivity) is **excised to** [Corrected / not actually contradictions](#corrected--not-actually-contradictions).

**Precise statement.** Equilibrium statistical mechanics and thermodynamics presuppose interactions decaying faster than $r^{-d}$ in $d$ dimensions (short-range), so that energy and entropy are extensive/additive, the standard fixed-density thermodynamic limit exists, and the microcanonical and canonical ensembles are equivalent. Self-gravitating systems (star clusters, galaxies, the cosmological matter distribution) violate this: the potential $\sim -G m^2/r$ is long-range and unscreened, making energy non-additive. The standard ensemble machinery breaks down — as a **domain mismatch**, not a logical inconsistency. [ESTABLISHED]

**Technical root & genuine consequences (classical self-gravitating systems).**
- (a) **Ensemble inequivalence:** the microcanonical and canonical ensembles are *inequivalent*.
- (b) **Negative microcanonical specific heat** — impossible in the canonical ensemble, where $C_V = \mathrm{Var}(E)/(k_B T^2) \ge 0$ identically; the negative microcanonical $C_V$ is precisely the *diagnostic signature* of (a), not a logically independent fact.
- (c) The **gravothermal catastrophe / Antonov instability** (Antonov 1962; Lynden-Bell–Wood 1968), with long-lived metastable *local* equilibria below threshold (the Antonov radius) but **no global entropy maximum** for the idealized confined point-mass model.
- (d) Failure of the **Euler and Gibbs–Duhem relations**, which rest on first-order homogeneity (extensivity).

The "entropy unbounded above" feature is a property of the *unregularized* point-mass model and stems from the short-distance ($r\to 0$, UV) singularity of $-Gm^2/r$ — distinct from the long-range (IR) non-additivity that is the headline subject. Short-distance cutoffs (quantum degeneracy pressure, hard cores; Padmanabhan) restore boundedness and metastable equilibria. A nontrivial mean-field thermodynamic limit *does* exist under **Kac rescaling** (coupling $\sim 1/N$), though non-additivity and ensemble inequivalence persist.

**Why it matters.** The foundations of thermodynamics/statistical mechanics do not straightforwardly apply to the dominant long-range force at large scales, complicating any global entropy budget for the universe (relevant to the arrow-of-time / Past-Hypothesis problem, [GC-7](#gc-7)).

**Current status.** [ESTABLISHED] as a domain breakdown: non-additivity, negative specific heat, and ensemble inequivalence of gravitating systems are well understood and not in dispute (Antonov 1962; Lynden-Bell–Wood 1968; Thirring 1970; Padmanabhan 1990; Ruelle/Fisher stability theory). Treating the universe as a global thermodynamic system with well-defined temperature/entropy for the gravitational sector is [INFERENCE]/[CONTESTED] and not rigorously founded.

> **REFEREE VERDICT — `isSound: false` (one sub-claim miscategorized); severity: minor; keep (with excision).**
> **Corrections.** The headline domain-mismatch claim is **sound** and well-established. Excised category error: black-hole area-entropy $S_{\rm BH}\sim A$ was listed as a *consequence* of Newtonian self-gravity non-additivity *on par* with (a)–(d). It is not — Bekenstein–Hawking area scaling is a relativistic/semiclassical horizon/holographic result (Bekenstein 1973; Hawking 1975), a *different* domain that does not follow from the Euler-relation failure; ordinary self-gravitating gas entropy does not scale as area (see quarantine below). "Entropy unbounded / no equilibrium" is a property of the idealized unregularized point-mass model (a UV effect), not of the long-range non-additivity. The standard fixed-density thermodynamic limit fails, but a Kac-rescaled mean-field limit exists. Negative $C_V$ is the *signature* of ensemble inequivalence, not an independent consequence.
> **Recommended tag.** [ESTABLISHED] (the core domain-mismatch claim and consequences (a)–(d) for classical self-gravitating systems).

---

## Corrected / not actually contradictions

This section quarantines specific sub-claims the referee judged miscategorized. The *parent entries are retained*; only the flagged sub-claim is moved here with an explanation.

### CN-1 — Black-hole area-entropy is **not** a consequence of Newtonian self-gravity non-additivity (from [GC-17](#gc-17))

**Excised claim.** "Self-gravitating systems exhibit … area- rather than volume-scaling entropy for black holes ($S_{\rm BH}\sim A$)" — listed in the original [GC-17](#gc-17) as a *consequence* of the non-additivity of classical Newtonian self-gravitating systems, alongside negative specific heat and ensemble inequivalence.

**Why it is not a valid consequence.** Bekenstein–Hawking entropy,
$$S_{\rm BH} = \frac{k_B c^3 A}{4 G \hbar},$$
is a result of **relativistic / semiclassical gravity** — event horizons, the holographic bound, Hawking 1975 / Bekenstein 1973 — a *different domain* from the classical statistical mechanics of self-gravitating point masses. It does **not** follow from the failure of the Euler relation that drives the gravothermal catastrophe (Antonov 1962; Lynden-Bell–Wood 1968). Moreover, ordinary self-gravitating gas / star-cluster entropy does **not** scale as area — it has its own non-extensive (and, for unsoftened point masses, unbounded) behavior. The two phenomena share only the *heuristic* slogan "gravity defeats naive volume-extensivity."

**Disposition.** Black-hole area scaling is genuine, established physics and a real instance of gravity defeating volume-extensivity — but as a *separate, relativistic* phenomenon. It belongs with [GC-13](#gc-13) (holographic area-law vs. volume-extensive QFT) and [GC-4](#gc-4), not as a corollary of the Newtonian argument in [GC-17](#gc-17). No contradiction is lost by removing it from GC-17; one was merely *misattributed*.

---

## See also

- [OPEN_PROBLEMS.md](OPEN_PROBLEMS.md) — the forward-looking research agenda these gaps feed into.
- [EPISTEMICS.md](EPISTEMICS.md) — the marker definitions and the logical-inconsistency vs. domain-mismatch vs. unsolved vs. conceptual-tension taxonomy.
- [THEORY_MAP.md](THEORY_MAP.md) and [UNIFICATION_LANDSCAPE.md](UNIFICATION_LANDSCAPE.md) — where these frameworks sit and how unification proposals address the gaps.
- [UNIFYING_PRINCIPLES.md](UNIFYING_PRINCIPLES.md), [HYPOTHESES.md](HYPOTHESES.md), [FINDINGS.md](FINDINGS.md).
- [ASSUMPTIONS_LEDGER.md](ASSUMPTIONS_LEDGER.md) — the background-(in)dependence, energy-condition, measurement-independence, extensivity, and Past-Hypothesis assumptions invoked above.
- [CONSTANTS_AND_SCALES.md](CONSTANTS_AND_SCALES.md) — $M_{\rm Pl}$, $\ell_P$, $\Lambda_{\rm QCD}$, $\rho_\Lambda^{\rm obs}$, $T_H$, $S_{\rm BH}$.
- Domain pages: [quantum-mechanics](domains/quantum-mechanics.md), [quantum-field-theory](domains/quantum-field-theory.md), [general-relativity](domains/general-relativity.md), [classical-mechanics](domains/classical-mechanics.md), [thermodynamics](domains/thermodynamics.md), [statistical-mechanics](domains/statistical-mechanics.md), [cosmology](domains/cosmology.md), [particle-physics](domains/particle-physics.md), [information-theory](domains/information-theory.md), [mathematics](domains/mathematics.md).
- [GLOSSARY.md](GLOSSARY.md), [ROADMAP.md](ROADMAP.md), [CHANGELOG.md](CHANGELOG.md), [AGENTS.md](AGENTS.md), [README.md](README.md).

## References

See [BIBLIOGRAPHY.md](BIBLIOGRAPHY.md) for full citations. Landmark sources invoked above (real, standard) include: 't Hooft–Veltman (1974) and Goroff–Sagnotti (1985) on graviton-loop divergences; Stelle (1977) on higher-derivative gravity; Donoghue on GR as an EFT; Weinberg (1989) review of the cosmological-constant problem; Lovelock (1971–72); Hawking (1975) and Bekenstein (1973) on black-hole radiation/entropy; Page on the Page curve; Strominger–Vafa (1996) microstate counting; Almheiri–Marolf–Polchinski–Sully (AMPS, 2012); Bell (1964, 1976), CHSH (1969), Cirel'son/Tsirelson (1980), Hensen/Giustina/Shalm et al. (2015); von Neumann (1932) measurement; Gleason (1957); GRW/CSL objective-collapse literature; Boltzmann's $H$-theorem, Loschmidt, Zermelo, Lanford (1975), Crooks and Jarzynski fluctuation theorems; Dirac constrained-Hamiltonian theory, DeWitt (1967), Isham and Kuchař problem-of-time reviews; Page–Wootters, Rovelli; Haag (1955), Hall–Wightman (1957), Streater–Wightman, Epstein–Glaser, Doplicher–Haag–Roberts; Aizenman (1981) and Aizenman–Duminil-Copin (2021) on $\phi^4$ triviality; Penrose (1965), Hawking–Penrose (1970), Borde–Guth–Vilenkin, Ford–Roman quantum energy inequalities, Fewster–Galloway, Fewster–Kontou, Christodoulou; Møller (1962), Rosenfeld (1963), Page–Geilker (1981), Gisin (1990), Polchinski (1991), Bahrami et al. (2014), Diósi–Penrose; Ryu–Takayanagi, Lewkowycz–Maldacena (2013), Faulkner et al. (2014), Maldacena–Susskind (ER=EPR), Penington / Almheiri–Engelhardt–Marolf–Maxfield / Penington–Shenker–Stanford–Yang (2019–20), Witten and Chandrasekaran–Longo–Penington–Witten on crossed-product algebras; Antonov (1962), Lynden-Bell–Wood (1968), Thirring (1970), Padmanabhan (1990), Ruelle/Fisher stability theory; Haag, *Local Quantum Physics*; Bratteli–Robinson; Streater–Wightman, *PCT, Spin and Statistics, and All That*.
