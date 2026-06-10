---
title: "The two dS routes surviving the cardinality no-go: pseudo-entropy and Jacobson-in-CLPW"
type: note
tags: [note, iter5, de-sitter, pseudo-entropy]
updated: 2026-06-08
---

# The two dS routes surviving the cardinality no-go: pseudo-entropy and Jacobson-in-CLPW

Status: ATTEMPT executed and refereed — the two routes left un-foreclosed by the iteration-4 de Sitter cardinality no-go are pushed to their breaking points. Neither moves Program A from ENCODES to GENERATES at $\Lambda>0$; the headline verdict is **reinforced, not flipped**. The iteration adds value by *sharpening* the obstruction: the two routes fail for **distinct, now-identified reasons** (non-unitarity vs. single-trace / area-coefficient re-input), unified by a deeper diagnostic — *the area-entropy coefficient is an input, not an output*. `didItMove = sharpened-obstruction`.
Last updated: 2026-06-08
Iteration: 5

This note is the iteration-5 closing push on **Program A — geometry-from-algebra / Einstein-from-entanglement at $\Lambda>0$ (de Sitter)**. Iteration 4 ([2026-06-08-iter4-ds-first-law-escape.md](2026-06-08-iter4-ds-first-law-escape.md), companion [2026-06-08-iter4-dS-firstlaw-SO-family-attempt.md](2026-06-08-iter4-dS-firstlaw-SO-family-attempt.md)) promoted the strict, unitary, single-common-state, isometry-orbit static-patch route toward a near-no-go, leaving exactly two un-foreclosed escapes. This note carries both out. Both reach the same destination from opposite sides, and the convergence is itself the result.

All external inputs were web-verified this iteration: the dS/CFT pseudo-entropy first-law paper (Fujiki–Kohara–Shinmyo–Suzuki–Takayanagi, arXiv:2511.07915), Jacobson's entanglement-equilibrium result (arXiv:1505.04753 / PRL **116**, 201101), the CLPW de Sitter algebra (Chandrasekaran–Longo–Penington–Witten, arXiv:2206.10780), and the AdS benchmark (Faulkner–Guica–Hartman–Myers–Van Raamsdonk, arXiv:1312.7856). Three referee verdicts (attack on the furthest claim; review of `HYP-dS-CARDINALITY-R1`; review of `OP-dS-PSEUDO-REALITY`) are incorporated inline — all `keep=true` at **minor** severity — and their refinements are folded into the statements below rather than appended.

Epistemic markers follow [../EPISTEMICS.md](../EPISTEMICS.md). This reinforces **H2**'s negative meta-conclusion and sharpens the $\Lambda>0$ boundary of **H4**; see [../HYPOTHESES.md](../HYPOTHESES.md), [../FINDINGS.md](../FINDINGS.md), [../OPEN_PROBLEMS.md](../OPEN_PROBLEMS.md).

---

## Goal

Decide whether *either* surviving route overturns the standing "**encodes, not generates**" verdict at $\Lambda>0$.

The two routes are:

- **Route (a):** the non-unitary dS$_3$/CFT$_2$ **pseudo-entropy** first law (arXiv:2511.07915).
- **Route (b):** importing **Jacobson's** infinite small-geodesic-ball family (arXiv:1505.04753) *inside a single* CLPW Type II$_1$ static-patch algebra (arXiv:2206.10780), with no boundary and no RT surface.

**One verdict criterion** (the encode-vs-generate distinction of [2026-06-08-iter3-encode-vs-generate-criterion.md](2026-06-08-iter3-encode-vs-generate-criterion.md), OP-46): a construction **GENERATES** geometry only if it *derives* the local tensor equation
$$
E_{\mu\nu}(x) \;:=\; \delta G_{\mu\nu} + \Lambda\,\delta g_{\mu\nu} - 8\pi G\,\delta T_{\mu\nu} \;=\; 0
$$
from data that does **not** already presuppose (i) the area–entropy law $S = A/4G$ with its fixed coefficient, and (ii) a fixed Lorentzian metric background. `didItMove` is set to *flips-headline-verdict* only if emergent Lorentzian geometry is genuinely derived from non-symmetric data. Anything reached by re-importing the metric (via an analytic continuation contour or a fixed UV area term) counts as ENCODES. [INFERENCE — the criterion is the proposed OP-46 scheme, not an established convention; per-route verdicts inherit at most its confidence.]

---

## Setup (real math)

### Route (a): dS/CFT and pseudo-entropy

The Strominger/Maldacena dictionary maps bulk dS$_3$ to a **Euclidean CFT$_2$** on $\mathcal I^+ \cong S^2$ by the analytic continuation
$$
\ell_{\rm AdS} \;\to\; i\,\ell_{\rm dS}, \qquad
c_{\rm AdS} = \frac{3\ell}{2G} \;\to\; c_{\rm dS} = i\,\frac{3R_{\rm dS}}{2G_N},
$$
so the dual central charge is **imaginary** — the dual is non-unitary [ESTABLISHED, dS/CFT literature; web-confirmed].

Pseudo-entropy generalizes entanglement entropy to a **transition matrix** built from two distinct states,
$$
\mathcal T^{1|2} \;=\; \frac{|\psi_1\rangle\langle\psi_2|}{\langle\psi_2|\psi_1\rangle},
\qquad
S(\mathcal T_A) \;=\; -\,\mathrm{Tr}\!\big[\mathcal T_A \ln \mathcal T_A\big],
$$
where $\mathcal T_A = \mathrm{Tr}_{\bar A}\,\mathcal T^{1|2}$. Because $\mathcal T_A$ is generically **non-Hermitian**, $S(\mathcal T_A) \in \mathbb C$ [ESTABLISHED, definition of pseudo-entropy].

The arXiv:2511.07915 claim, web-confirmed: the **first law of holographic pseudo-entropy**
$$
\delta S(\mathcal T_A) \;=\; \delta\langle K_A\rangle
$$
"is equivalent to the perturbative Einstein equation in three-dimensional de Sitter space, assuming the dS/CFT correspondence," with $\delta S$ obeying a **Klein–Gordon equation on an auxiliary dS$_2$** (kinematic space), computed by **complexified geodesics** anchored at $\mathcal I^+$ [ESTABLISHED *as a statement about the paper's content*; web-confirmed].

### Route (b): the CLPW Type II$_1$ algebra and Jacobson's balls

CLPW give, for the dS static patch dressed to an observer, a **crossed-product** algebra
$$
\mathcal A_{\rm obs} \;=\; \mathcal A_{\rm III_1} \rtimes_\sigma \mathbb R,
$$
which is a **Type II$_1$ factor** carrying a *unique* finite tracial weight $\mathrm{Tr}$ with $\mathrm{Tr}(\mathbb 1) = 1$. Normalized so that
$$
S(\rho) = -\,\mathrm{Tr}(\rho \ln\rho) = S_{\rm gen} + \text{const},
$$
the von Neumann entropy reproduces the generalized entropy $A/4G + S_{\rm out}$ **only up to a state-independent additive constant** fixed by renormalization, and is **maximized at empty dS** (the tracial state). The construction yields entropy and a generalized second law but **no equation of motion** — no RT surface, no boundary CFT [ESTABLISHED, arXiv:2206.10780; web-confirmed].

Jacobson 2015 gives, at **every point $p$ and every frame**, a small geodesic ball $\Sigma$ of fixed volume for which the entanglement-equilibrium first law
$$
\delta S_{\rm EE} \;=\; \eta\,\delta A\big|_V + \delta\langle K_{\rm matter}\rangle,
\qquad \eta = \frac{1}{4G},
$$
is **stationary $\Leftrightarrow$** the semiclassical Einstein equation $G_{\mu\nu} + \Lambda g_{\mu\nu} = 8\pi G\,T_{\mu\nu}$, with $\Lambda$ an *undetermined position/scale-dependent integration constant* [ESTABLISHED, arXiv:1505.04753; valid for conformal matter, nonconformal requiring an extra conjecture; web-confirmed]. The surface entropy density $\eta = 1/4G$ — the Bekenstein–Hawking coefficient — is **identified/supplied** at every point, not produced.

### The benchmark (AdS)

FGHMVR: $\delta S_A = \delta\langle K_A\rangle$ imposed for *every* boundary ball (CHM + RT + Iyer–Wald) Radon-inverts — over the family parametrized by boundary center **and continuous radius** — to the pointwise linearized $\delta G_{\mu\nu}$. The area-entropy coefficient enters as the **RT prefactor input** [ESTABLISHED, arXiv:1312.7856]. The decisive structural ingredient is the **two-parameter region family** (center + radius continuum); the coefficient is assumed throughout.

---

## The attempt

### Route (a): can complex-$c$ pseudo-entropy "count"?

The structural content of arXiv:2511.07915 is **real and non-trivial**: it is a genuine *first-law $\Rightarrow$ linearized-Einstein* implication, formally parallel to FGHMVR, and — crucially — it possesses the **radius modulus** the iteration-4 static-patch orbit lacked. There is a CFT interval/region of *every size* on $\mathcal I^+$, so facet (a$'$) of the iter4 no-go (no radius continuum) is **genuinely evaded** here. The break is elsewhere.

Decompose the transition matrix into Hermitian parts, $\mathcal T_A = \rho_A + i\,\sigma_A$. Then
$$
S(\mathcal T_A) \;=\; \mathrm{Re}\,S + i\,\mathrm{Im}\,S,
$$
and the first law $\delta S(\mathcal T_A) = \delta\langle K_A\rangle$ is **two real equations**. For this to reduce to the single *real* physical equation $\delta G_{\mu\nu}(x) \in \mathbb R$, one must either

1. impose a reality/post-selection condition $\mathrm{Im}\,S = 0$ collapsing $\mathcal T_A \to \rho_A$ (Hermitian), **or**
2. accept a complex metric perturbation $\delta g_{\mu\nu} \in \mathbb C$ and project onto a real section.

The paper's **complexified geodesics realize option 2**: the reconstructed object is a complexified saddle, and reality of the final $\delta G$ is *imposed by the dS reality conditions on the contour*, not derived. The dS$_3$ Einstein equation is reached by the explicit continuation $t \to \rho - i\pi/2$ of the AdS$_3$ holographic-EE computation, with the geodesic real only on the Lorentzian section [ESTABLISHED *re paper structure*; web-confirmed].

The diagnosis: the derivation reconstructs a **complex-analytic continuation of Einstein whose real section is dS Einstein**. The Lorentzian dS metric is the Wick-rotated image of AdS data — geometry **ENCODED in the analytic continuation** of an AdS computation (Maldacena's $\ell_{\rm AdS}\to i\ell_{\rm dS}$), not **GENERATED** from a standalone unitary $\Lambda>0$ structure. Pseudo-entropy becomes physically meaningful precisely when post-selection makes $\langle\psi_2|\psi_1\rangle$ real and $\mathcal T_A$ Hermitian — i.e. *exactly when the non-unitary input is removed* — at which point one is back to a Euclidean/AdS-continued computation, not a dS-intrinsic one. [INFERENCE — the downgrade to ENCODES is an interpretive stance; the paper itself frames the result *as* a derivation of linearized dS$_3$ Einstein. Whether non-unitarity is "disqualifying" or "intrinsic to $\Lambda>0$" is a definitional choice, flagged by the referee and not a theorem.]

### Route (b): can "a ball at every $p$" live inside one II$_1$ algebra?

To place Jacobson's family inside the single II$_1$ algebra, one needs, for each point $p$, a subalgebra $\mathcal A_p \subset \mathcal A_{\rm obs}$ carrying its **own** modular/tracial first law. The structural obstruction:

- In a Type II$_1$ factor the trace is **unique** and finite, $\mathrm{Tr}(\mathbb 1) = 1$, and every subalgebra inherits the **same** ambient trace via the conditional expectation $E:\mathcal A_{\rm obs}\to\mathcal A_p$ with $\mathrm{Tr}\circ E = \mathrm{Tr}$ (Jones-index structure). So the $\{\mathcal A_p\}$ are **not independent**: they share one normalization tied to a single horizon-area datum.
- Jacobson's balls each carry an **independent** short-distance area term $\eta\,\delta A_p$ whose coefficient $\eta = 1/4G$ is a **fixed UV input** supplied identically at every $p$ from outside the algebra.

This is the decisive observation: the **infinite locality** of Jacobson's family is *purchased by re-inputting* $S = A/4G$ at every point. The CLPW algebra fixes a **single global normalization** — tied to the observer's cosmological-horizon area, encoded once in the trace — so internalizing the infinite local family **requires re-supplying** $\eta = 1/4G$ at every bulk point, which the algebra does not contain and cannot generate. The import therefore either (i) **fails** (only one area normalization available) or (ii) **succeeds only by re-being Jacobson** — feeding $\eta = 1/4G$ in at every point, i.e. presupposing the area-entropy law pointwise, non-algebraically. [INFERENCE.]

> **Referee correction folded in.** The phrasing "the trace encodes *exactly one* area datum (the *global* horizon)" was flagged as overstated on two counts. (1) The dS static-patch horizon is **observer-relative**, not global; the framework is extensible to other observers / general subregions, each with its *own* area constant imported non-algebraically — so the rigidity is "a single global *normalization*," not a counting/uniqueness theorem. (2) Strictly, the algebra derives **zero** area data: the coefficient enters only as a state-independent additive offset from trace renormalization, i.e. it is *pure input*. Neither correction rescues GENERATES — each extended instance still imports its own $\eta = 1/4G$ — so the obstruction stands in its softened form.

---

## Where it breaks / what moved (`didItMove = sharpened-obstruction`)

**Route (a) breaks at the reality/physicality step.** The complex first law $\delta S(\mathcal T_A) = \delta\langle K_A\rangle$ is two real equations; reducing it to the single real dS Einstein equation requires imposing dS reality conditions on a **complexified-geodesic contour**. The geometry is the *real section of an analytic continuation* of the AdS/CHM computation ($\ell_{\rm AdS}\to i\ell_{\rm dS}$, $c\to ic$): **ENCODED via continuation, not generated** from a unitary $\Lambda>0$ structure. Pseudo-entropy becomes physical only when post-selection makes $\mathcal T_A$ Hermitian — removing the dS-intrinsic non-unitary content.

**Route (b) breaks at the independence step.** The Type II$_1$ trace is unique with $\mathrm{Tr}(\mathbb 1)=1$, fixing a single global area normalization; the algebra contains no pointwise area family. Reproducing Jacobson's infinite *local* family requires re-supplying $\eta = 1/4G$ at every bulk point from outside the algebra — it **merely re-is Jacobson** (non-algebraic, presupposing the area coefficient), confirming the cardinality no-go rather than overturning it.

**What moved — the sharper diagnostic.** The iteration-4 obstruction had **two facets**: (a$'$) *no radius modulus*, and the implicit (a$''$) *the area-entropy coefficient must be re-input*. The two surviving routes split cleanly across these:

| | Facet (a$'$) radius modulus | Facet (a$''$) area-coefficient input | Binding obstruction |
|---|---|---|---|
| **Route (a)** pseudo-entropy | **EVADED** — CFT regions of every size on $\mathcal I^+$ | (not the issue) | **non-unitarity / analytic continuation** |
| **Route (b)** Jacobson-in-CLPW | (not the issue) | **CONFRONTED** — single global trace, one normalization | **single-trace / area-coefficient re-input** |

So the two routes fail for **different reasons**, and *neither* generates geometry. This refines the cardinality hypothesis: the deep obstruction is not cardinality per se but "**the area-entropy coefficient is an input, not an output**" — true in AdS-FGHMVR (RT prefactor), Jacobson (UV area term), and CLPW (trace normalization) alike, and **untouched by either route**. [INFERENCE.]

A second unifying point, surfaced by the referees and load-bearing for the headline: **both routes re-import Lorentzian structure**. Route (a) imports the Lorentzian dS$_3$ metric via the continuation contour and the complexified geodesic; route (b) imports the horizon/foliation via the observer worldline and the fixed area constant. Neither derives emergent Lorentzian geometry from non-symmetric data — which is precisely the GENERATES bar. [INFERENCE.]

---

## Furthest defensible claim

> **[INFERENCE]** Neither surviving route moves Program A from ENCODES to GENERATES at $\Lambda>0$; the headline verdict is **reinforced, not flipped**.
>
> **(a)** The arXiv:2511.07915 pseudo-entropy first law *genuinely supplies the radius continuum* the iter4 static-patch orbit lacked and **is** a real *first-law $\Rightarrow$ linearized-dS$_3$-Einstein* implication. But it inherits a disqualifying assumption *different from cardinality* — **non-unitarity** ($c = i\,3R/2G$, non-Hermitian $\mathcal T_A$, complex pseudo-entropy reduced to real geometry only by imposing reality on complexified geodesics). Its real geometry is the real section of an **analytic continuation of the AdS/CHM computation**, not a unitary $\Lambda>0$ derivation. *(The "disqualifying" label is a definitional stance, not a theorem; a proponent may regard imaginary $c$ as intrinsic to $\Lambda>0$.)*
>
> **(b)** Jacobson's infinite small-ball family **cannot be internalized** in a single CLPW Type II$_1$ algebra: the unique finite trace ($\mathrm{Tr}(\mathbb 1)=1$) fixes a **single global normalization** (tied to the observer-horizon area; strictly, the coefficient is a pure renormalization offset — *zero* derived area data), so importing the local family requires **re-supplying** $\eta = 1/4G$ at every point — it merely re-is Jacobson, presupposing the area-entropy law non-algebraically.
>
> Both routes inherit a disqualifying assumption; "encodes, does not generate" is reinforced.

Referee status: the furthest claim was attacked and judged **sound** (`keep=true`, severity **minor**). All load-bearing citations and technical facts verified against the live literature; no fabricated citations, numbers, or theorems. Corrections folded above: soften "exactly one / global horizon"; flag the ENCODES downgrade as interpretive; acknowledge the cardinality cross-reference is an internal-wiki label, while the *substantive physics* (non-unitarity for (a); single fixed area constant for (b)) stands independently.

---

## If it fails / weaker statement

Two conditional reversals, each reducing to one meta-question.

- **If (a)'s non-unitarity is judged NOT disqualifying** — e.g. one accepts post-selected / PT-symmetric quantum mechanics with a consistent real spectrum as "physical," or a future *genuine* real reduction of pseudo-entropy is found — then route (a) would be the **first first-law derivation of a local dS Einstein equation with a true radius continuum**, promoting toward GENERATES. The decisive open test: can $\mathrm{Im}\,S(\mathcal T_A)$ be made identically zero by a physical post-selection **without trivializing** the dynamics? **Sharpened expectation (this iteration): no.** The first-law coefficient is set by the *imaginary* central charge $c = i\,3R/2G$; $\mathrm{Im}\,\delta S$ is precisely the quantity that continues to the **Lorentzian-signature dS** (rather than AdS) Einstein equation. Re-Hermitianizing $\mathcal T_A$ to force $S$ real means imposing **pseudo-Hermiticity / a PT-unbroken spectrum** (reality-via-pseudo-Hermiticity, JHEP **05** (2023) 021), which deforms the dual *back toward a unitary AdS-type CFT* — the very trivialization to be avoided. And even a successful real reduction would still land in ENCODES, because the geometry rides on the *continued AdS metric/kinematic-space* structure. So the two desiderata are in tension bordering on contradiction. [INFERENCE, well-supported.]

- **If (b)'s single-trace argument is wrong** — e.g. a Type II$_1$ factor admits genuinely independent local subalgebras each carrying its own area coefficient via a position-dependent conditional expectation — the import could yield algebraic local dS dynamics. The decisive test: can $\eta = 1/4G$ be **derived from**, rather than fed into, the trace normalization?

Both reduce to: **is the area-entropy coefficient ever an output rather than an input?** (Induced-gravity / Sakharov-type derivations, where $G$ emerges from an integrated-out matter sector, are the obvious untested counter-route and are *not* addressed here — so the "every known route" generalization is itself [INFERENCE], not [ESTABLISHED].)

---

## Proposed registry items (with referee verdicts)

### `HYP-dS-CARDINALITY-R1` — hypothesis refinement [INFERENCE]

**Statement (refined).** The deep obstruction to "dS Einstein-from-entanglement" is *not solely* the cardinality / radius-modulus mismatch but, more fundamentally, that the area-entropy coefficient $\eta = 1/4G$ is **SUPPLIED, not derived**, in every entanglement-equilibrium / holographic-first-law route examined: FGHMVR (RT prefactor assumed; arXiv:1312.7856) [ESTABLISHED for that route]; Jacobson ($G$ identified via the area/UV entanglement-density term; arXiv:1505.04753) [ESTABLISHED for that route]; CLPW (Type II$_1$ algebraic entropy matched to $S_{\rm gen} = A/4G + S_{\rm out}$ up to a state-independent additive constant from trace renormalization; arXiv:2206.10780) [ESTABLISHED for that route]. The two iter4-surviving routes corroborate from opposite sides: **(a)** arXiv:2511.07915 evades the radius-modulus facet (pseudo-entropy first law for CFT regions of all sizes on $\mathcal I^+$) but fails on **non-unitarity** (imaginary $c$, complex pseudo-entropy, geometry as the real section of an AdS analytic continuation that re-imports Lorentzian time); **(b)** Jacobson-in-CLPW fails because the finite Type II$_1$ trace fixes a single global normalization (tied to the observer-horizon area), so internalizing Jacobson's infinite *local* family requires re-supplying $\eta = 1/4G$ pointwise — re-being Jacobson non-algebraically. Verdict "encodes, does not generate" reinforced.

**Rationale.** Unifies the iter4 cardinality no-go, the pseudo-entropy route, and the Jacobson-in-CLPW route under a single sharper diagnostic (area-coefficient-as-input), and correctly attributes **distinct** disqualifying assumptions to the two routes (non-unitarity vs. single-trace).

> **Referee verdict** (`keep=true`, **minor**): sound. Corrections folded in: (i) "encodes *exactly one* area datum (the *global* horizon)" softened to "fixes a single global normalization tied to the observer-horizon area"; (ii) "every known route" is [INFERENCE] over an open class (Sakharov-type induced gravity not addressed), supported only for the holographic-first-law / entanglement-equilibrium family cited; (iii) "Jacobson 2015" is arXiv:1505.04753 (2015), PRL of record **116**, 201101 (2016). The central thesis — $\eta = 1/4G$ supplied not produced — verifies for all three cited routes.

### `OP-dS-PSEUDO-REALITY` — open problem [OPEN; resolution-direction INFERENCE-strong toward ENCODES-only]

**Statement (refined).** In dS$_3$/CFT$_2$ (arXiv:2511.07915), the holographic first law of pseudo-entropy reproduces the perturbative dS$_3$ Einstein equation, but **only via analytic continuation** of the AdS$_3$ first law ($t \to \rho - i\pi/2$) along complexified geodesics, with the genuinely complex pseudo-entropy $S(\mathcal T_A)$ carrying an imaginary part fixed by $c = i\,3R/2G_N$. Open question, sharpened: can $S(\mathcal T_A)$ be made real by a physical post-selection or a pseudo-Hermitian (PT-unbroken) reduction of the transition matrix **without** (i) trivializing the first-law $\Rightarrow$ Einstein content and (ii) merely deforming the dual back to a unitary AdS-type CFT? **Sharpened expectation: NO on (i)+(ii) jointly** — the imaginary-$c$-weighted modular data is precisely what continues to the Lorentzian-signature dS (not AdS) Einstein equation; reality-via-pseudo-Hermiticity (JHEP **05** (2023) 021) makes the reduction an AdS-ward deformation. Independently: even a successful real reduction would not promote Program A to GENERATES, because the Lorentzian dS geometry here is the Wick-rotated image of AdS data plus an emergent dS$_2$ **kinematic-space** (Klein–Gordon) structure that already presupposes a metric/foliation. Verdict: ENCODES-only; headline not flipped.

**Rationale.** Converts the iter4 open-subquestion ("does pseudo-entropy non-unitarity disqualify it?") into a sharp, decidable test (can $\mathrm{Im}\,S$ be physically nulled non-trivially), isolating the single step on which route (a)'s headline status turns.

> **Referee verdict** (`keep=true`, **minor**): citation real and correctly characterized; no fabrication. Terminology corrected: pseudo-entropy is **complex**, not purely imaginary (only the universal/divergence-subtracted part of the spherical-region result is purely imaginary) — **[CORRECTED, iteration 6 (R6A4-F2, against PRL 130, 031601): this parenthetical is inverted. The FINITE universal part is REAL and equals $S_{\rm dS}/2$, region-independently; the DIVERGENT, region- and shape-dependent part is IMAGINARY. See notes/2026-06-10-iter6-op49-pseudo-entropy-reality.md.]**. The conditional "would promote toward GENERATES" was flagged as overclaiming its own antecedent: a construction reached by complexifying AdS data is not metric-free emergence even if $\mathrm{Im}\,S$ could be zeroed. The "true radius continuum" / "emergent time" framings presuppose the dS$_2$ kinematic-space metric — emergent *kinematic* space, not signature-from-nothing. Resolution direction now [INFERENCE]-strong toward ENCODES-only.

---

## Verdict

**PARTIAL (stable across iterations 2–5).** The headline is **NOT flipped**: neither surviving route moves Program A from ENCODES to GENERATES at $\Lambda>0$. The iteration adds genuine analytical value by **sharpening, not restating**, the obstruction — the two routes fail for **distinct, now-identified reasons**:

- **Route (a)** (arXiv:2511.07915; web-verified: $c = i\,3R/2G$, non-Hermitian $\mathcal T_A$, complex pseudo-entropy, $\mathcal I^+$ boundary, complexified geodesics, dS$_2$ Klein–Gordon equation) **genuinely evades** the iter4 cardinality/radius-modulus facet — it *is* a real first-law $\Rightarrow$ linearized-dS$_3$-Einstein implication with a region-size continuum — but inherits a *different* disqualifying assumption: **non-unitarity**. Its real geometry is the real section of an analytic continuation of the AdS/CHM computation; pseudo-entropy becomes physical only when post-selection removes the non-unitary content.
- **Route (b)** fails the import: the CLPW Type II$_1$ algebra has a **unique finite trace** fixing a single global area normalization (the observer horizon), so internalizing Jacobson's infinite local small-ball family requires **re-supplying** $\eta = 1/4G$ at every bulk point — it merely re-is Jacobson, presupposing the area-entropy law non-algebraically.

**The unifying refinement:** in AdS-FGHMVR, Jacobson, and CLPW alike the **area-entropy coefficient is an INPUT, not an output** — the true root obstruction, untouched by either route. This confirms **saturation**: Program A is converged at PARTIAL for $\Lambda>0$; both un-foreclosed escapes inherit disqualifying assumptions (non-unitarity; area-coefficient re-input). Confidence: **high** (negative verdict; the converse "GENERATES" would require new physics). Reinforces **H2**; sharpens the $\Lambda>0$ boundary of **H4**.

---

## Open subquestions

1. Can $\mathrm{Im}\,S(\mathcal T_A)$ in arXiv:2511.07915 be set to zero by a physical post-selection (or a genuine real reduced density matrix) **without** trivializing the first-law $\Rightarrow$ Einstein content? This single step decides route (a)'s headline status (`OP-dS-PSEUDO-REALITY`). Sharpened expectation: no, because the imaginary-$c$ data is what continues to *dS* (not AdS) Einstein.
2. Is the area-entropy coefficient $\eta = 1/4G$ **ever an output** rather than an input in any spacetime-from-entanglement derivation — including untested induced-gravity / Sakharov-type routes — or is its always-input status a genuine no-go for GENERATES (the unifying root obstruction)?
3. Does a Type II$_1$ factor admit genuinely independent local subalgebras each carrying its **own** area datum via a position-dependent conditional expectation, or does the unique-trace structure provably forbid the Jacobson import (settling route (b) rigorously)?
4. Does the arXiv:2511.07915 derivation, being an analytic continuation of an AdS/EAdS computation, count as "dS-intrinsic" at all, or is **every** $\Lambda>0$ first-law result to date a continuation of $\Lambda<0$ (making "encodes" structural for the whole continuation-based program)?
5. Would **global dS** (two static patches $+\ \mathcal I^\pm$) or time-dependent quintessence ($w \neq -1$, DESI-favored) restore an infinite local region family with an *intrinsic* area continuum, dissolving the single-trace facet of route (b)?

---

## See also

- [2026-06-08-iter4-ds-first-law-escape.md](2026-06-08-iter4-ds-first-law-escape.md) — the iter4 SO$(d+1,1)$ static-patch escape and the cardinality $\to$ "no radius modulus" reframing that left these two routes open.
- [2026-06-08-iter4-dS-firstlaw-SO-family-attempt.md](2026-06-08-iter4-dS-firstlaw-SO-family-attempt.md) — companion attempt note with the line-by-line web verifications.
- [2026-06-08-iter3-encode-vs-generate-criterion.md](2026-06-08-iter3-encode-vs-generate-criterion.md) — OP-46, the encode-vs-generate criterion used as the single verdict criterion here.
- [2026-06-08-iter3-de-sitter-first-law-attempt.md](2026-06-08-iter3-de-sitter-first-law-attempt.md) — the iteration-3 single-static-patch horizon-area-stationarity result this builds on.
- [2026-06-08-de-sitter-and-emergent-spacetime.md](2026-06-08-de-sitter-and-emergent-spacetime.md) — background on dS, the static patch, and emergent-spacetime program.
- [2026-06-08-entropic-and-emergent-gravity.md](2026-06-08-entropic-and-emergent-gravity.md) — Jacobson, entropic gravity, and the area-entropy coefficient as input.
- [2026-06-08-iter4-modular-circularity.md](2026-06-08-iter4-modular-circularity.md) — the modular-Hamiltonian circularity that the area-coefficient-as-input diagnostic generalizes.
- Root pages: [../HYPOTHESES.md](../HYPOTHESES.md) (H2, H4), [../OPEN_PROBLEMS.md](../OPEN_PROBLEMS.md), [../FINDINGS.md](../FINDINGS.md), [../EPISTEMICS.md](../EPISTEMICS.md), [../GAPS_AND_CONTRADICTIONS.md](../GAPS_AND_CONTRADICTIONS.md).
- Domain pages: [../domains/general-relativity.md](../domains/general-relativity.md), [../domains/quantum-field-theory.md](../domains/quantum-field-theory.md), [../domains/cosmology.md](../domains/cosmology.md), [../domains/information-theory.md](../domains/information-theory.md), [../domains/mathematics.md](../domains/mathematics.md).
