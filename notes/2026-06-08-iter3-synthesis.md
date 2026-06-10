# Iteration-3 Synthesis: Sharper Obstructions, Same Partial Coherence

Status: Active synthesis — coherence verdict UNCHANGED at PARTIAL
Last updated: 2026-06-08
Iteration: 3

This note records the iteration-3 investigation and folds in the synthesis-verdict review (one substantive technical correction was forced; the conclusion is unchanged). The honest one-line headline: **the program got more rigorously understood and more honestly hedged, the obstructions got sharper, and the central bet got no closer to being either confirmed or empirically decidable.** [INFERENCE, high confidence]

---

## Updated coherence verdict (still-partial)

The coherence verdict is **PARTIAL**, unchanged from iteration 2, and the iteration-3 work confirms this is the *correct* verdict rather than a placeholder. [INFERENCE, high]

Iteration 3 ran four moves: (1) a de Sitter entanglement first-law attempt (OP-41); (2) a formal encode-vs-generate criterion (OP-46); (3) a Program-A $+$ Program-B merge attempt; (4) a red-team pass over the synthesis page. Three of the four sharpened obstructions rather than removing them; the fourth forced the synthesis page to retract over-claims back to what its own source notes already supported.

What survived every attack — the project's best work — and was *strengthened*, not weakened:

- The **deflationary core** [ESTABLISHED-as-argued]: the catalogued GR/QM "contradictions" are domain-mismatches or unsolved-but-consistent problems, not logical inconsistencies (referee verdicts in [../GAPS_AND_CONTRADICTIONS.md](../GAPS_AND_CONTRADICTIONS.md) are sound).
- The **central diagnosis** [INFERENCE, high]: the algebraic/holographic program **ENCODES geometry, it does not GENERATE it** — strengthened by the verified Giddings results (arXiv:2505.22708, 2510.24833 [VERIFIED]: dressed operators generically fail to commute spacelike at leading order in $G_N$).
- The **Born form/meaning split**, **linearity-as-a-derivative-of-no-signaling**, the refusal of an "it's all information" fusion, the dS negative meta-result, and **BMV-as-class-falsifier-not-quantization-proof**.

The wager — *algebra/entanglement before geometry is true of our $\Lambda>0$ universe* — remains [SPECULATIVE] and, by the wiki's own anti-crank standard, still **not yet physics**: it has no distinguishing near-term test (see [Empirical falsifiability portfolio](#empirical-falsifiability-portfolio)).

---

## Did Program A move?

**SHARPENED, NOT ADVANCED — and that distinction is the honest headline.** [INFERENCE, high]

Program A (geometry-from-algebra) did not graduate from "encoding" to "generating" geometry at $\Lambda>0$. The dS-first-law attempt (OP-41, see [the attempt note](2026-06-08-iter3-de-sitter-first-law-attempt.md)) produced a precisely-located *obstruction*, not a derivation.

### (1) Jacobson 2015 re-read: a real but different result

Jacobson 2015 (arXiv:1505.04753, PRL 116 201101) [VERIFIED] is correctly re-read as already a local, dS-valid derivation of the **full Einstein field equation** from entanglement equilibrium.

> **Synthesis-verdict correction (the one substantive technical fix).** Iteration-3's draft claimed Jacobson is "the NONLINEAR semiclassical Einstein equation ... in one respect (nonlinearity) STRONGER than the AdS FGHMVR linearized result." This conflates two senses of "nonlinear" and is [CONTESTED-as-stated]. The corrected characterization:

Jacobson derives, from a **first-order** entanglement-equilibrium (stationarity at fixed volume) condition imposed *pointwise* in small geodesic balls, the full Einstein equation
$$ G_{\mu\nu} + \Lambda\, g_{\mu\nu} = 8\pi G\, \langle T_{\mu\nu}\rangle $$
as a **local tensor equation, including $\Lambda$**, for conformal matter (nonconformal matter requires the unproven $\delta X$ / entanglement-entropy-variation conjecture). The derivation is first-order in the state variation — *exactly like FGHMVR*. The genuine contrast is **not** nonlinear-vs-linearized but: Jacobson reconstructs a *complete local tensor equation pointwise* because Einstein gravity is algebraic in curvature (no derivatives of curvature), so a small-ball first-order condition at every point reconstructs the full tensor equation. Bueno–Min–Speranza–Visser (arXiv:1612.04374) show the *same recipe* yields only the **linearized** equations for higher-curvature gravity — isolating that the "full equation" is a property of Einstein gravity's local curvature-algebraic structure, not of the derivation's perturbative order. FGHMVR instead reconstructs the bulk equation *explicitly linearized about pure AdS*. [ESTABLISHED, corrected]

Crucially, Jacobson **presupposes geometry**: the area–entropy density $\eta = 1/(4G\hbar)$ is [ASSUMED, not derived]; the *maximal* (not merely stationary) vacuum-entanglement hypothesis at **fixed volume** is required (fixed-radius spoils the coefficient by $(d+1)/3$); and the matter is conformal. It is **non-holographic / local-thermodynamic**, answering a *different* question than the holographic/algebraic OP-41. This is a **reconciliation, not closure** — iteration 2 already conceded Jacobson "presupposes geometry." [ESTABLISHED]

### (2) The CLPW Type II$_1$ route breaks — and we now know exactly where

The CLPW static-patch route (arXiv:2206.10780 [VERIFIED]: Type II$_1$, empty dS $=$ maximum-entropy state) was pushed toward linearized Einstein and **broke at a newly-identified structural step**, not merely "stalled." The break is at the conversion-to-tensor step (Step 5 of the attempt), and it breaks for a *structurally different reason* than in AdS:

- **(i) One Killing vector, not a family of anchoring regions [decisive].** AdS FGHMVR obtains a local equation $\delta G_{\mu\nu}(x) = 8\pi G\,\delta T_{\mu\nu}(x)$ because the timelike boundary supplies a *continuum* of ball regions (all positions, sizes, boosts) $\Rightarrow$ a continuum of independent first-law constraints inverting to a pointwise field equation. The dS static patch supplies **exactly one** distinguished region and **one** Killing vector $\xi$ (the static-patch boost). So $\delta S_{\rm gen} = \delta\langle K\rangle$ yields only the **single scalar constraint**
$$ \int_\Sigma \xi\cdot\delta C = 0 $$
— the $\xi$-contracted, slice-integrated linearized Hamiltonian constraint $=$ horizon-area stationarity $=$ the dS GSL — **not** the tensor $\delta G_{\mu\nu}$. There is no boundary to slide the region along.
- **(ii) No timelike conformal boundary** $\Rightarrow$ no boundary stress tensor, and the "surface" is the cosmological *horizon* (a bifurcate Killing horizon), fixed by background isometry, not an extremized RT min-cut. There is no min-cut/extremization to linearize. [ESTABLISHED]
- **(iii) The variational principle is sign-REVERSED.** Banihashemi–Jacobson–Svesko–Visser (arXiv:2208.11706, JHEP 01(2023)054 [VERIFIED]) establish $dE_\xi = -T_{\rm dS}\,dS_{\rm hor}$: adding Killing energy *decreases* horizon area/entropy. With empty dS *maximizing* $S_{\rm gen}$, the dS variational principle is a concave **maximization** ($\delta^2 S_{\rm gen} < 0$), structurally opposite to AdS RT **minimization** (Hollands–Wald positive-canonical-energy). The AdS machinery cannot be transcribed. [INFERENCE, high — rests on established facts]
- **(iv) The modular Hamiltonian is geometric only for Bunch–Davies.** $K_{\rm BD} = 2\pi H_\xi$ holds for Bunch–Davies; for a perturbed state, modular flow is non-geometric (no Bisognano–Wichmann), so $\delta\langle K\rangle$ is not a clean boost energy. Geometry is presupposed, not generated (the iteration-2 algebraic-background-independence verdict, now in explicit dS dress; see [../notes/2026-06-08-algebraic-background-independence.md](2026-06-08-algebraic-background-independence.md)). [INFERENCE, high]

### Net on Program A

Genuine technical progress of the **negative** kind. Iteration 2 said "no CLPW-rooted dS first-law $\Rightarrow$ Einstein chain exists." Iteration 3 says **why** (one region / one Killing vector vs AdS's continuum; sign-reversed maximization) **and** identifies one concrete, citable escape: a **family of static-patch modular Hamiltonians over the $SO(d+1,1)$ observer orbit** (Chen–Xu covariant observers, arXiv:2511.00622 [VERIFIED], which builds exactly this $L^2(SO(1,d))$ QRF family) or **sub-patch CHM causal diamonds** (concretely, the dS-diamond modular Hamiltonian of Fröb, arXiv:2308.14797, JHEP 12(2023)074), to manufacture the missing continuum of constraints.

> **Tagging correction (forced by the verdict review).** The draft tagged the obstruction "near-no-go (HYP-dS-NOMIN)." This **overstates**. No theorem forbids manufacturing the missing continuum; and Fröb cautions that the dS-diamond modular Hamiltonian is geometric *only* in the full-static-patch limit and is non-local for finite diamonds. The route is non-trivial but **UN-foreclosed**. Correct tag: **a sharpened-but-OPEN structural obstruction with one identified, unexecuted escape route** — [OPEN], not [near-no-go]. Whether the $SO(d+1,1)$ family yields a pointwise $\delta G_{\mu\nu} = 8\pi G\,\delta T_{\mu\nu}$ is **untested**; calling it "the missing continuum of constraints" should be hedged to "a candidate mechanism whose ability to produce a pointwise field equation is untested." [OPEN]

**Verdict: Program A advanced in *understanding* but did not advance toward *geometry-generation*.**

This is reinforced by the encode-vs-generate criterion (OP-46, see [the criterion note](2026-06-08-iter3-encode-vs-generate-criterion.md)): the encode/generate frontier coincides *exactly* with the presence of a hand-chosen tensor-factorization $\mathcal H = \bigotimes_i \mathcal H_i$ or graph $G=(V,E)$ — which is the Type III$_1$ no-factorization fact in disguise. No surveyed construction generates Lorentzian spacetime from factorization-free, region-free, symmetric-state-free data. Cao–Carroll(–Michalakis) "space from Hilbert space" comes closest, but outputs only a *Riemannian spatial* metric and only after positing a factorization (a surrogate for input-geometry $g_5$). [INFERENCE, high on the classification; medium on the criterion being uniquely right]

---

## The A+B merge attempt

**SUBSTANTIVE PARTIAL MERGE at one sublayer; thin methodological bridge at the deeper sublayer; NOT empty re-description, NOT a full merge.** A real but bounded upgrade to iteration-2's "thin bridge." [INFERENCE, medium] (See [the merge note](2026-06-08-iter3-merge-attempt-operational-substrate.md).)

The shared object is a von Neumann algebra with faithful normal state $(\mathcal M, \omega)$ under the no-signaling / normal-steering (GHJW) constraint.

### What merged — the Born-form $+$ thermal/entropic sublayer

On $(\mathcal M, \omega)$ one can **non-circularly co-derive**:

- **(a) Pillar B's Born-rule FORM** $+$ exact linearity, lifted to infinite-dim normal state spaces by the 2026 causal-rigidity theorem (arXiv:2602.09056 [VERIFIED], published 7 Feb 2026: recovers Born on vN-algebra normal state spaces via GNS, under no-signaling $+$ normal steering $+$ $\sigma$-affinity); and
- **(b) Pillar A's KMS/thermal-time** (Tomita–Takesaki) $+$ emergent modular/causal flow $+$ (via an *internal* crossed-product clock) a Type II trace, finite generalized entropy, GSL.

Neither pillar presupposes the other on this sublayer, and the "observer" is demoted to an internal gauge-invariant **quantum reference frame** (CLPW $+$ covariant-observer 2511.00622 [VERIFIED]), genuinely dissolving the agent/no-agent category clash **here**.

### What did NOT merge — the Hilbert-space-FRAMEWORK sublayer

The GPT axioms that single out Hilbert space / the complex field / tensor-product composition have **no Type III formulation** and provably **fail in infinite dimensions**. Three located breaks (candidate-no-go **OP-GPT-TYPE3**):

- **BREAK 1 — composition not even statable.** Local tomography presupposes $\mathcal H_{AB} = \mathcal H_A \otimes \mathcal H_B$; Type III$_1$ has no tensor factorization and no density matrices (Connes–Haag–Araki) [ESTABLISHED]. The 2026 theorem is honest: it lifts only the Born-rule *form*, not composition.
- **BREAK 2 — load-bearing axioms false in $\infty$-dim.** Hardy continuous-reversibility and CDP purification fail (the shift operator is an isometry, not unitary; orthogonal projections are not sequentially compact) [ESTABLISHED].
- **BREAK 3 — the crossed-product trace re-imports geometry.** The III $\to$ II crossed-product trace exists only with a clock Hamiltonian bounded below in a fixed-background semiclassical perturbative window — re-importing the preferred-state/fixed-geometry that Pillar A should *generate* (Bisognano–Wichmann/CHM circularity), and may fail nonperturbatively (Giddings 2505.22708/2510.24833 [VERIFIED]). [INFERENCE, high]

### Net on the merge

**YES** for a single non-circular substrate on the Born-form $+$ thermal/entropic sublayer; **NO** (with the precisely-located candidate-no-go OP-GPT-TYPE3) for the Hilbert-space-framework sublayer. The shared no-signaling principle does real non-tautological work on both sides (so *not* empty re-description), but composition/factorization cannot be posed on Type III (so *not* a full merge). The merge **"succeeded narrowly, failed deeply"** — and crucially it did **not** merge in the cosmological closed-universe / no-external-observer regime that was the prompt's crux, because that is exactly where the BREAK 3 perturbative window closes. [INFERENCE, medium]

---

## Red-team impact (what we weakened)

The red-team found **0 fatal errors, 4 serious cracks, 2 cosmetic**; all load-bearing 2025–2026 citations re-verified exactly. The cracks are the synthesis page **over-compressing better-hedged source notes**. Four forced weakenings: [INFERENCE/CONTESTED, high that the weakenings are warranted]

1. **"Fixed cores" re-tagged from flat to HETEROGENEOUS.** The five "fixed cores" are not the same kind of object, and three are not actually fixed:
   - **(i) Type III$_1$ "for any $\Lambda$"** is [ESTABLISHED] for QFT on a *fixed background* but [CONTESTED/OPEN] as a fixed core of the *gravitational* theory — Giddings shows gravitational dressing alters the algebra at leading order in $G_N$. The synthesis page listing it as ESTABLISHED-fixed **directly contradicts** the wiki's own algebraic-background-independence note (which tags it OPEN/CONTESTED, and Giddings backs the note). **This is a genuine internal inconsistency** that must be resolved by propagating the note's qualification up.
   - **(ii) Area law** is NOT a universal input — derived in AdS (RT), output in Sakharov; load-bearing only for the Jacobson–Padmanabhan–Verlinde lineage specifically.
   - **(iii) No-signaling** is genuinely shared but NOT quantum-forcing (PR-boxes are no-signaling yet non-quantum) — demote from "core that forces structure" to "one of several GPT axioms."
   - **(iv) Born form** is forced only conditional on non-contextuality $+$ effect-additivity.
   - **(v) Unitarity** is conditional on standard QM being final and is deliberately violated by live GRW/CSL.
   - Honest header: *"a small set of robust-but-non-homogeneous anchors, each conditional on a stated background or premise."*
2. **"Demotion-and-derivation" demoted from "falsifiable program" to "research HEURISTIC."** As a meta-strategy it forbids nothing and is unfalsifiable *by* scoping; its only falsifiable content lives in the object-level deliverables (OP-dS-FIRSTLAW, OP-CP1, BMV $m^2$-vs-$m^3$, collapse bounds) and in the bracketed [SPECULATIVE] wager it quarantines. "Falsifiable" was a category error applied to a procedure.
3. **"Independent convergence of six lenses" weakened to "convergence of methods sharing load-bearing inputs"** (a streetlight artifact). H0/H4 share Killing-symmetric vacua $+$ AdS/large-$N$; H1/H3/H6 share the continuum Malament/HKM theorem $+$ the unproven Hauptvermutung; H7 is AdS/large-$N$. Agreement of methods sharing their assumptions is weaker evidence for the wager than genuine independent convergence.
4. **CLPW Type II$_1$ kept as a $\Lambda>0$ entropy foothold but stripped of "$\Lambda$-DIAGNOSTIC" billing.** Trace normalizability (II$_1$ vs II$_\infty$) is set by the horizon/observer-Hamiltonian spectrum, not by $\Lambda$: Schwarzschild–de Sitter ($\Lambda>0$) is II$_\infty \times$ II$_\infty$ (KLS, PRD 111 025013 [VERIFIED]). So II$_1$ is a feature of the static patch's *bounded area*, not of $\Lambda>0$ as such — a persistent emphasis error.

**What survived every attack** (the wiki's best work): the deflationary core; the "encodes-not-generates geometry" verdict (STRENGTHENED by Giddings); the Born form/meaning split; linearity-as-derivative-of-no-signaling; the PARTIAL-coherence verdict; the refusal of the "it's all information" fusion; the dS negative meta-result; BMV-as-class-falsifier-not-quantization-proof.

---

## Empirical falsifiability portfolio

Every live channel tests the program's logical **GATE** (is gravity non-classical?), its correct **TARGET** (is the universe really dS?), or the status of its **FIXED CORES** (is linearity/Lorentz exact?). **None tests the geometry-from-algebra wager itself.** [INFERENCE, high]

| Experiment | Decides which claim | Current status | Timeline (yrs) |
|---|---|---|---|
| **BMV / QGEM** gravitationally-induced entanglement: two $\sim 10^{-14}\,\mathrm{kg}$ masses in superposition; measure $m^2$ vs $m^3$ witness scaling | Program A's logical **GATE** (REG-SYNTH-4 / OP-40). Positive result excludes mean-field semiclassical gravity $+$ Kafri–Taylor–Milburn classical-channel models; $m^2$ $=$ quantum mediator, $m^3$ $=$ Aziz–Howl virtual-matter loophole. Does NOT prove graviton quantization (HYP-GIE-DISCRIM). Refutes the wager's gate if gravity is shown fundamentally classical | [OPEN, not yet performed] Mass/coherence $\sim 6$–$10$ orders beyond current matter-wave records; General Witness Theorem locality premise actively [CONTESTED] (Di Biagio; Aziz–Howl $m^3$ rebuttals, 2025) | 10–20+ (2030s–2040s; not imminent) |
| **Objective-collapse** (CSL / Diósi–Penrose) bounds: matter-wave interferometry, optomechanics, ultracold cantilevers, MAQRO-class space interferometry, spontaneous-X-ray/heating searches | Directly tests A-3-REF / linearity-as-derivative-of-no-signaling. Stochastic collapse EVADES the deterministic Gisin–Polchinski no-go and is the empirically live way exact linearity could be FALSE. Detection refutes "exact unitarity as a fixed core" (weakening (1)(v)); null results push $\lambda$ down. Also bounds DP gravitational self-collapse competing with BMV | [OPEN, actively bounding] X-ray/LISA-Pathfinder limits already exclude the parameter-free Diósi–Penrose model $+$ large swaths of GRW/CSL space [INFERENCE]; no positive detection | 0–10 (decisive CSL coverage by $\sim$2035) |
| **Dynamical dark energy** $w(z)$: DESI DR2/DR3+, Euclid, Roman, LSST/Vera Rubin; CPL $w_0,w_a$ vs $-1$ | The correct **TARGET** for Program A (ASSUME-ETERNAL-dS / wrong-idealization risk). $w(z)\neq-1$ $\Rightarrow$ aim at metastable dS / rolling quintessence, not eternal dS, weakening motivation for a strict $\Lambda>0$ first law (OP-dS-FIRSTLAW). Does NOT test the wager directly — tests which background it must reproduce | [CONTESTED, $\sim$3–4$\sigma$ hint] DESI DR2 (arXiv:2503.14738 [VERIFIED]) 2.8–4.2$\sigma$ for dynamical DE (3.1$\sigma$ DESI+CMB); 2025–26 joint analyses (e.g. arXiv:2511.22512) report persistence. Not yet 5$\sigma$; SNe-systematics-dependent | 2–7 (DR3+ / first Euclid+Roman through $\sim$2030) |
| **LIV / EP** tests: GRB photon time-of-flight (Fermi-LAT, CTA), birefringence, clock-comparison; torsion-balance (Eöt-Wash), LLR, MICROSCOPE $\eta < \sim10^{-15}$ | Robustness of the surviving **FIXED CORES**: causal order / microcausality and the metric GR presupposes. Confirmed LIV refutes "exact local Lorentz $+$ single causal order is held-fixed" (and threatens emergent-causal-order tracks H1/H3/H6 if discreteness breaks Lorentz). EP violation $\Rightarrow$ new gravity-sector physics constraining entropic/emergent models (Verlinde-2016 already disfavored) | [ESTABLISHED null to high precision] No confirmed LIV; some Planck-scale dispersion excluded by GRBs [INFERENCE]. MICROSCOPE confirms EP to $\sim10^{-15}$. Most likely a null-result anchor, not a discovery channel | 0–10 (CTA / next-gen EP through $\sim$2035) |
| **Matter-wave interferometry** at increasing mass: Talbot–Lau, large-molecule/nanoparticle interferometers, levitated optomechanics | Foundational **enabler** shared by Program B's two live channels: builds toward BMV mass scale AND bounds objective collapse (mass-dependent interference loss $=$ collapse signal). Empirical content behind demoting "unitarity" from core to conditional | [OPEN, advancing] Superposition verified up to $\sim10^4$–$10^5$ amu $+$ nanoparticle regimes; orders below BMV/collapse-decisive masses [ESTABLISHED for current records] | 5–15 (the bridge technology gating both BMV and decisive collapse tests) |

---

## Net progress

Iteration 3 produced **real but almost entirely NEGATIVE / STRUCTURAL progress, and the coherence verdict is UNCHANGED at PARTIAL — correctly so.** [INFERENCE, high]

Three of the four moves sharpened obstructions; the fourth forced retractions back to the source notes:

1. **The dS-first-law attempt did NOT advance Program A toward geometry-generation.** It converted iteration-2's bare "no dS first-law chain exists" into a located structural obstruction — one region / one Killing vector vs AdS's continuum, plus a sign-reversed concave maximization — leaving exactly **one un-foreclosed escape** (an $SO(d+1,1)$ family of modular Hamiltonians, concretely instantiated by Chen–Xu covariant observers and dS-diamond CHM constructions). Tagged [OPEN], not "near-no-go."
2. **The encode-vs-generate criterion is a genuine deliverable.** It makes the central distinction decision-usable (two graded axes $\Delta_{\rm geo}$, $\kappa_\Phi$ $+$ a 5-item smuggling checklist $g_1$–$g_5$), classifies six constructions, and isolates that the encode/generate frontier coincides *exactly* with a hand-chosen factorization/graph — the Type III$_1$ no-factorization fact in disguise. Net finding: **NO surveyed construction generates Lorentzian spacetime from factorization-free, region-free, symmetric-state-free data.**
3. **The A+B merge succeeded only on the Born-form $+$ thermal sublayer and failed** (candidate-no-go OP-GPT-TYPE3) on the Hilbert-space-framework sublayer — notably failing in the cosmological no-observer regime that was the crux.
4. **The red-team found no fatal errors but forced four weakenings**, including resolving a genuine internal contradiction (Type III$_1$ as "fixed core" once gravity is on).

The **deflationary core** and the **central diagnosis** ("encodes, does not generate") survived every attack and were STRENGTHENED by the verified Giddings results. The **wager** remains [SPECULATIVE] and, crucially, **without any distinguishing near-term test**: every live channel tests the gate, the target, or the cores — none tests geometry-from-algebra. By the wiki's anti-crank standard, the wager is therefore **still not yet physics**.

**Honest one-line summary:** more rigorously understood, more honestly hedged, obstructions sharper, central bet no closer to confirmation or empirical decidability.

---

## Next highest-leverage targets

1. **[Re-aimed OP-dS-FIRSTLAW-R2 — single highest-leverage theory target.]** Attempt the one un-foreclosed escape: build a FAMILY of static-patch modular Hamiltonians over the $SO(d+1,1)$ observer orbit (Chen–Xu, arXiv:2511.00622, $L^2(SO(1,d))$ QRF) or sub-patch CHM diamonds (Fröb, arXiv:2308.14797), and test whether the family supplies enough **independent** first-law constraints — each with geometric modular flow in a **common** state — to invert to a local $\delta G_{\mu\nu}$. If it cannot (constraints not independent, or modular flow geometric only in Bunch–Davies), HYP-dS-NOMIN is promoted from conjecture to a true no-go and the holographic dS route is closed. [OPEN]
2. **[Settle OP-GPT-TYPE3 — converts the partial merge into a full merge or a true no-go.]** Decide whether the GPT framework-fixing axioms (local tomography/tensor-composition, purification, continuous reversibility) admit ANY formulation on a Type III$_1$ factor or its normal state space. Concretely: can the 2026 causal-rigidity theorem's $\sigma$-affinity $+$ normal-steering be strengthened to fix **composition**, not just the probability rule? If composition provably needs factorization (which III$_1$ lacks), this is a no-go for the Hilbert-space-framework half. [OPEN]
3. **[Break the Bisognano–Wichmann/CHM circularity — deepest reorganization-vs-generation test.]** Recover a Killing/boost structure and a horizon as the **OUTPUT** of an $(\text{algebra, state})$ pair whose modular flow is NOT a known symmetric (BW/Hadamard) vacuum. This is the criterion's clause (iii), satisfied by no surveyed construction; succeeding here is the only thing that would turn "encode" into "generate." [OPEN]
4. **[Resolve the nonperturbative fate of the crossed product — OP-CP1.]** Determine whether the III $\to$ II crossed-product Type II structure survives beyond all-orders-in-$1/N$, or is replaced by Giddings' non-algebraic structure (arXiv:2510.24833). Bears on BREAK 3 of the merge and on whether "Type III$_1$ for any $\Lambda$" can be a fixed core at all once gravity is on. Either answer is decisive. [OPEN/CONTESTED]
5. **[Propagate the red-team weakenings into the synthesis page — documentation, not research.]** Re-tag the "fixed cores" list as heterogeneous with per-item status; demote "falsifiable program" to "research heuristic"; add the shared-input/streetlight caveat to the convergence claim; strip "$\Lambda$-diagnostic" billing from CLPW II$_1$. Required for the wiki to stop contradicting its own better-hedged notes.
6. **[Mature the shared enabling technology — highest-leverage EMPIRICAL target.]** Push matter-wave / levitated-optomechanics mass scale upward: it simultaneously gates the BMV gate-test of Program A AND tightens objective-collapse bounds on the linearity assumption — the two live channels of Program B — and is the prerequisite both ultimately depend on. **No theory target is empirically decidable without it.**

---

## See also

- [2026-06-08-iter3-de-sitter-first-law-attempt.md](2026-06-08-iter3-de-sitter-first-law-attempt.md) — the OP-41 dS entanglement first-law attempt (where and why Step 5 breaks)
- [2026-06-08-iter3-encode-vs-generate-criterion.md](2026-06-08-iter3-encode-vs-generate-criterion.md) — the formal OP-46 encode-vs-generate criterion and verdict table
- [2026-06-08-iter3-merge-attempt-operational-substrate.md](2026-06-08-iter3-merge-attempt-operational-substrate.md) — the Program-A $+$ Program-B merge on a shared operational substrate
- [2026-06-08-unified-program-synthesis.md](2026-06-08-unified-program-synthesis.md) — the iteration-2 synthesis note this one updates
- [2026-06-08-algebraic-background-independence.md](2026-06-08-algebraic-background-independence.md) — the encode-not-generate / Type III$_1$ background note
- [../FINDINGS.md](../FINDINGS.md) — consolidated findings register
- [../ROADMAP.md](../ROADMAP.md) — iteration roadmap and open-problem queue
- [../GAPS_AND_CONTRADICTIONS.md](../GAPS_AND_CONTRADICTIONS.md) — the deflationary-core referee verdicts
- [../OPEN_PROBLEMS.md](../OPEN_PROBLEMS.md) — OP-41, OP-46, OP-CP1, OP-GPT-TYPE3
- [../HYPOTHESES.md](../HYPOTHESES.md) — H0–H7 and HYP-dS-NOMIN / HYP-GIE-DISCRIM
