---
title: "Formalize: an encode-vs-generate criterion for emergent geometry (OP-46)"
type: note
tags: [note, iter3, emergent-geometry, encode-vs-generate]
updated: 2026-06-08
---

# Formalize: an encode-vs-generate criterion for emergent geometry (OP-46)

Status: Attemptive — criterion delivered and decision-usable; classification of six constructions reached (medium confidence on the criterion being uniquely correct, high on the per-construction verdicts)
Last updated: 2026-06-08
Iteration: 3

This note attacks **OP-46**: is there a precise, decision-usable criterion that distinguishes a construction which *encodes / reconstructs* a pre-given geometry from one that genuinely *generates* geometry out of non-geometric (algebra / state / dynamics) data? Iteration 2 ([2026-06-08-algebraic-background-independence.md](2026-06-08-algebraic-background-independence.md)) left this as an open subquestion — "is there even an agreed operational criterion distinguishing encode from generate?" Here we propose one, push it as far as it goes against six named constructions, locate exactly where it breaks, and state the furthest defensible claim together with its weaker fallbacks.

> Scope honesty: the criterion below is itself a **proposed** scoring scheme, not an established convention. Its outputs (the per-construction verdicts) inherit at most the confidence of the criterion. The genuinely theorem-grade input it leans on is the Type III$_1$ no-factorization fact (see [../domains/mathematics.md](../domains/mathematics.md), [../domains/quantum-field-theory.md](../domains/quantum-field-theory.md)).

---

## Goal

Produce a criterion $\Phi \mapsto \{\text{ENCODE}, \text{PARTIAL}, \text{GENERATE}\}$ that:

1. formalizes "geometric background input" as an explicit, checkable list of predicates on the **definition** of a construction $\Phi$ (not on its output);
2. gives necessary conditions and a partial sufficient condition for GENERATE, with a clause that falsifies circularity;
3. decides whether the encode/generate distinction is **sharp** or **graded**, and if graded supplies the grading axes;
4. classifies six named constructions — CLPW crossed product; Connes–Rovelli thermal time; Leutheusser–Liu emergent modular time / half-sided modular inclusion (HSMI); Cao–Carroll(–Michalakis) space-from-Hilbert-space; causal-set Poisson sprinkling; tensor-network / random-tensor Ryu–Takayanagi — each with the specific background it smuggles;
5. names the single closest-to-generation construction.

---

## Setup (real math)

Fix abstract data
$$
\mathcal{D} = (\mathcal{A}, \omega, \alpha),
$$
where $\mathcal{A}$ is a von Neumann (or C\*-) algebra, $\omega$ a faithful normal state, and $\alpha$ a dynamics / automorphism semigroup (e.g. a Hamiltonian flow or the modular flow $\sigma^\omega_t$). A construction is a map
$$
\Phi:\ \mathcal{D}\ \longmapsto\ (\mathcal{M}, g)\quad\text{(or } (\mathcal{M},[g]),\ \text{or a causal order } (\mathcal{C},\prec)\text{)}
$$
producing geometric output.

### Geometric background-input checklist

Define five predicates on the **definition** of $\Phi$. Each is *true* if the named structure is consumed in defining $\Phi$:

- $g_1$ — a pre-chosen Killing / conformal / boost generator $\xi$, i.e. the modular Hamiltonian is *set equal to* a geometric boost charge
  $$
  K = 2\pi \int_\Sigma \xi^\mu\, T_{\mu\nu}\, d\Sigma^\nu .
  $$
  This is the Bisognano–Wichmann / Casini–Huerta–Myers identification. `[ESTABLISHED]` (that geometric modular flow holds *for the symmetric vacuum*; BW 1975; Hislop–Longo 1982; CHM 2011).
- $g_2$ — a pre-chosen region shape / causal diamond / entangling surface.
- $g_3$ — a symmetric vacuum (Bisognano–Wichmann, Hadamard, or KMS-w.r.t.-geometric-time) defined on a *given* spacetime, which makes the modular flow geometric.
- $g_4$ — a pre-chosen causal order $\prec$. By Malament (1977) and Hawking–King–McCarthy (1976) a causal order on a distinguishing spacetime already fixes the conformal class $[g]$; so $g_4$ supplies all metric data except the conformal factor $\Omega$. `[ESTABLISHED]`
- $g_5$ — a fixed manifold / dimension / point-set / metric; **or its load-bearing surrogate**, a fixed tensor factorization $\mathcal{H} = \bigotimes_i \mathcal{H}_i$ or a graph $G=(V,E)$.

> Extension flagged by referee (kept, see registry): a complete list should also track $g_6$ — a positivity-of-energy / spectrum condition — and $g_7$ — a Reeh–Schlieder cyclic-separating vacuum (needed for Tomita–Takesaki to run). These are exactly the hypotheses through which geometry re-enters in the Borchers–Wiesbrock route; omitting them lets the no-smuggling clause be satisfied while geometry is still imported. `[INFERENCE]`

### Definitions

**GENERATE.** $\Phi$ generates geometry iff

- (C1 — no smuggling) none of $g_1,\dots,g_5$ is used in defining $\Phi$; geometric structure may appear only in $\mathrm{codomain}(\Phi)$ and only be checked *a posteriori*;
- (C2 — relabelling invariance) $\Phi$ is equivariant under $\mathrm{Aut}(\mathcal{A},\omega)$: for $\theta\in\mathrm{Aut}$,
  $$
  \Phi(\theta\cdot\mathcal{D}) = \theta_*\,\Phi(\mathcal{D}),
  $$
  so no preferred basis, frame, or local-subsystem decomposition is hand-chosen;
- (C3 — well-definedness) $\Phi$ is single-valued on isomorphism classes of $\mathcal{D}$.

**ENCODE.** $\Phi$ encodes geometry iff (C3) holds but (C1) fails: at least one $g_i$ is consumed in the definition, so the output geometry is a function of data that is already geometric.

### Graded measure (the distinction is *not* sharp)

Quantify with two scalars:

$$
\Delta_{\mathrm{geo}} \;=\; \#\{\text{free functions in the output } g\}\ -\ \#\{\text{free functions of geometric input consumed}\}.
$$
For a Lorentzian metric in $d$ dimensions, after gauge,
$$
\binom{d+1}{2} - d = \frac{d(d-1)}{2}
$$
free functions; a fixed background contributes $0$ output beyond its input.

$$
\kappa_\Phi \;=\; \mathrm{codim}\ \text{in } \mathrm{Aut}(\mathcal{A})\ \text{of the stabilizer of the structure (factorization / region / order) used to define } \Phi,
$$
i.e. how much relabelling symmetry is broken by hand. GENERATE demands $\Delta_{\mathrm{geo}}>0$ with all $g_i$ false and $\kappa_\Phi=0$; pure ENCODE has $\Delta_{\mathrm{geo}}\le 0$.

> Referee correction folded in (kept; see registry NI0): as literally written, $\Delta_{\mathrm{geo}}$ is **ill-typed** for a Type III$_1$ pair $(\mathcal{A},\omega)$, which has no metric "input free functions" to subtract (no trace, no density matrix, no local metric content). Read $\Delta_{\mathrm{geo}}$ instead as a coarse three-valued flag — *does a metric come out (yes / partial / no)* — or, in a fully repaired version, as an algebraic / relative-entropy information count. Likewise $\kappa_\Phi$ should be read as a presence/absence flag for hand-posited local structure, with the ambient group action specified per construction. The honest content is a **two-dimensional ordinal rubric**, not a metric. `[INFERENCE]`

---

## The attempt (carry it as far as it goes)

### Necessary conditions for GENERATE

Each is a one-line filter; failing any forces ENCODE or PARTIAL.

- **(N1) Background-freeness.** $\Phi$ definable on abstract $(\mathcal{A},\omega,\alpha)$ with no spacetime presupposed: $g_1=\dots=g_5=\mathrm{false}$.
- **(N2) Output exceeds input.** $\Delta_{\mathrm{geo}}>0$. A map whose output is a deterministic readout of a fixed background ($\Delta_{\mathrm{geo}}=0$) is reconstruction by definition.
- **(N3) No hand-chosen local structure.** $\kappa_\Phi=0$: the factorization / graph / region is itself determined by $(\mathcal{A},\omega)$, not posited.
- **(N4) Lorentzian-signature + causal output.** GENERATE *of spacetime* requires signature $(-,+,\dots,+)$ and an emergent causal order, not merely a Riemannian distance.

### Partial sufficient condition (conjectural)

If (i) $\Phi$ is $\mathrm{Aut}(\mathcal{A},\omega)$-equivariant, (ii) the local-subsystem / causal data are uniquely fixed by an intrinsic invariant of $(\mathcal{A},\omega)$ (e.g. a canonical maximal-abelian-subalgebra net, or the Connes–Takesaki flow of weights), and (iii) the recovered $(\mathcal{M},g)$ varies nontrivially as $\omega$ ranges over **non-symmetric** states (states with non-geometric modular flow), then $\Phi$ generates.

Clause (iii) is the decisive **circularity falsifier**: it demands geometry from a state that is *not* a BW / Hadamard / KMS symmetric vacuum. `[INFERENCE]` No surveyed construction satisfies (ii)+(iii).

> Caveat (referee): clause (iii) may be **vacuously unmet** — for a generic non-symmetric state the geometric modular flow used to read off a metric is simply absent, so the falsifier may test a regime no current $\Phi$ can reach. This is itself the open content of the program, not a defect of the constructions. `[OPEN]`

### Hidden tension in C2

By Tomita–Takesaki, the modular group $\sigma^\omega_t$ is central in the stabilizer of $\omega$. Demanding $\mathrm{Aut}(\mathcal{A},\omega)$-equivariance therefore **forces** the output $(\mathcal{M},g)$ to carry a one-parameter isometry implementing the modular flow — i.e. a $g_1$-type generator now appears as *output*. For a generic state this flow is non-geometric, conflicting with clause (iii). `[INFERENCE]` The repair is to police the geometry-**readout** step (algebra $\to (\mathcal{M},g)$) separately from the definition of $\Phi$, not only C1.

### Application to the six constructions

**(a) CLPW crossed product** $\mathcal{A}\rtimes_{\sigma^\omega}\mathbb{R}$.
As pure mathematics the crossed product needs no geometry (Connes–Takesaki: Type III$_1 \to$ II for any factor + state). But the *physical* map to $S_{\mathrm{gen}}$ consumes $g_1$ (observer Hamiltonian identified with the boost / ADM energy), $g_2$ (static patch / wedge), $g_3$ (BW / KMS vacuum at $\beta_{\mathrm{dS}}$), and $g_5$ (fixed dS / AdS metric). The area is read off the input metric, $\langle A\rangle/4G$, so $\Delta_{\mathrm{geo}}=0$.
**Verdict: ENCODE.** Smuggles $g_1,g_2,g_3,g_5$. (Consistent with iteration-2: "rigorous reorganization, not derivation"; Witten arXiv:2112.12828; CLPW arXiv:2206.10780.)

**(b) Connes–Rovelli thermal time.**
$\Phi:(\mathcal{A},\omega)\mapsto \sigma^\omega_t$ (modular flow as time). Genuinely background-free — $g_1$–$g_5$ all false; equivariant ($\theta\,\sigma^\omega\,\theta^{-1}=\sigma^{\theta_*\omega}$, so C2 holds); single-valued. But the output is a one-parameter flow: for a *metric*, $\Delta_{\mathrm{geo}}=0$ (no $\mathcal{M}$, no $g$, no dimension, no causal order). The thermal-time hypothesis is moreover a **posit** (take modular flow to *be* physical time), not a derivation.
**Verdict: GENERATES a (state-dependent) time direction only; does NOT generate geometry.** Smuggles nothing, but fails N4. `[SPECULATIVE]` as physics (Connes–Rovelli 1994).

**(c) Leutheusser–Liu emergent modular time / HSMI.**
In the large-$N$ thermofield double an emergent Type III$_1$ algebra arises from Type I, and a half-sided modular inclusion $\mathcal{N}\subset\mathcal{M}$ yields, via Borchers–Wiesbrock, a positive-generator translation $\Rightarrow$ emergent infalling interior time + a sharp horizon. This **generates** temporal / causal structure (interior time, horizon location) from modular data — the strongest surveyed case for a causal-structure output.
Smuggled input: the HSMI existence + positivity premise $P\ge 0$ is a *relocated* $g_1$ — it is energy positivity, and by the Borchers–Wiesbrock biconditional half-sidedness $\Leftrightarrow$ {translations with positive generator obeying $\Delta^{it}U(a)\Delta^{-it}=U(e^{-2\pi t}a)$}. A single HSMI yields only the $ax+b$ (one boost + one positive translation) group, *not* a full Killing algebra. The ambient AdS bulk ($g_5$) and the TFD symmetric state ($g_3$) are background; in LL the positivity is inherited from the boundedness-below of the **boundary** CFT Hamiltonian.
**Verdict: PARTIAL** (generates interior time + horizon; smuggles $g_3,g_5$ and a relocated-$g_1$ via positivity). `[INFERENCE]` (Leutheusser–Liu arXiv:2112.12156; *Phys. Rev. D* 108, 086020; Borchers 1992; Wiesbrock CMP 157 (1993) 83, corrected Araki–Zsidó 2004.)

**(d) Cao–Carroll(–Michalakis), space from Hilbert space.**
From a redundancy-constrained state on a finite-dimensional $\mathcal{H}=\bigotimes_i\mathcal{H}_i$, build a weighted graph with edge weights $=$ mutual information $I(i{:}j)$, set $d_{ij}\sim -\log I(i{:}j)$, run classical multidimensional scaling (MDS) to extract a dimension + best-fit Riemannian metric; Hamiltonian-locality + an area-law constraint give a *spatial* analog of Einstein's equation in the weak-field limit.
This is the **only** surveyed map that outputs a metric **and** a dimension from abstract state data, with no pre-chosen region ($g_2$ false), no Killing field ($g_1$ false), no symmetric vacuum required ($g_3$ false), no causal-order input ($g_4$ false), and dimension an *output* of MDS rather than a fixed manifold ($g_5$ nominally false). $\Delta_{\mathrm{geo}}>0$.
What it still smuggles:
- (s1) the tensor factorization $\mathcal{H}=\bigotimes_i\mathcal{H}_i$ — a hand-chosen local-subsystem structure, so $\kappa_\Phi>0$, violating N3; a surrogate $g_5$ fixing the vertex set $V$ on which dimension / metric live;
- (s2) Riemannian (not Lorentzian) signature + MDS-embeddability of the mutual-information distance into $\mathbb{R}^n$ (fails N4; time and causal order are added separately in arXiv:1712.02803 via state evolution);
- (s3) a chosen redundancy / area-law constraint to make geometry appear.
**Verdict: CLOSEST TO GENERATE** — generates dimension + a *spatial* Riemannian metric, but PARTIAL on the strict criterion. `[INFERENCE]` (Cao–Carroll–Michalakis, *Phys. Rev. D* 95, 024031 (2017), arXiv:1606.08444; Cao–Carroll, *Phys. Rev. D* 97, 086003 (2018), arXiv:1712.02803.)

> Sharpening (referee NI3): the factorization fixes only the **skeleton** (topology + adjacency + support of a metric); the *areas / edge-weights / conformal factor* come from the entanglement **state** on that factorization. So the smuggled input is "geometry's carrier," not the full $g$. The decisive limitation is the **signature + dynamics gap** (Riemannian spatial slice, no time), not a co-equal smuggle. `[INFERENCE]`

**(e) Causal-set Poisson sprinkling, continuum limit.**
The generative *direction* (causet $\to$ manifold) is the physical claim, but the only **rigorous** map is the reverse: sprinkle a *given* $(\mathcal{M},g)$ to get a causet, consuming $g_4,g_5$ — pure ENCODE. Sprinkling preserves Lorentz invariance statistically (Bombelli–Lee–Meyer–Sorkin, *PRL* 59, 521, 1987). The forward continuum limit requires the **Hauptvermutung** (unproven), and non-manifoldlike Kleitman–Rothschild orders dominate the uniform measure; the quantum dynamics $Z=\sum_{\mathcal{C}}e^{iS_{\mathrm{BD}}/\hbar}$ is not tractably defined (only Classical Sequential Growth is rigorous).
**Verdict: ENCODE** as currently rigorous; generative continuum limit **OPEN**. Smuggles $g_4,g_5$. (Surya, *Living Rev. Relativ.* 22, 5, 2019, arXiv:1903.11544.)

> Scope caveat: the dynamical (Rideout–Sorkin growth) route is a *generation candidate not surveyed here* and remains live. `[OPEN]`

**(f) Tensor-network / random-tensor RT.**
$\Phi$: a tensor network on a *graph* $G$ (often a fixed hyperbolic tiling) with large bond dimension reproduces $S(A)=\mathrm{Area}(\gamma_A)/4G$ via min-cuts $=$ RT surfaces (Hayden–Nezami–Qi–Thomas–Walter–Yang, *JHEP* 11 (2016) 009, arXiv:1601.01694). The graph — hence dimension, connectivity, discrete metric — is input; the network reproduces an entropy already determined by the graph geometry. $\Delta_{\mathrm{geo}}=0$.
**Verdict: ENCODE.** Smuggles $g_4,g_5$. A consistency model, not a generator.

### Verdict table

| Construction | Verdict | Smuggled background | $\Delta_{\mathrm{geo}}$ (metric) | $\kappa_\Phi$ |
|---|---|---|---|---|
| (a) CLPW crossed product | ENCODE | $g_1,g_2,g_3,g_5$ | $0$ | $>0$ |
| (b) Connes–Rovelli thermal time | GENERATES time only | none | $0$ (no metric) | $0$ |
| (c) Leutheusser–Liu HSMI | PARTIAL (interior time + horizon) | $g_3,g_5$ + relocated-$g_1$ ($P\ge0$) | n/a (causal output) | $0$–$\epsilon$ |
| (d) Cao–Carroll(–Michalakis) | CLOSEST TO GENERATE | tensor factorization (surrogate $g_5$), Riemannian sig., area-law | $>0$ (spatial) | $>0$ |
| (e) Causal-set sprinkling | ENCODE (rigorous dir.); generation OPEN | $g_4,g_5$ | $0$ | $>0$ |
| (f) Random-tensor / TN RT | ENCODE | $g_4,g_5$ | $0$ | $>0$ |

**Single closest to genuine generation: Cao–Carroll(–Michalakis)** — the only map with all five $g_i$ nominally false and $\Delta_{\mathrm{geo}}>0$, yet still PARTIAL because it smuggles a hand-chosen factorization, Riemannian signature, and embeddability, and lives in a finite-dimensional factorized Hilbert space that is provably *not* relativistic QFT.

---

## Where it breaks (the precise obstruction)

The criterion bites at exactly one recurring step. **Every construction that genuinely outputs a metric (Cao–Carroll; random-tensor RT) does so only after a local-subsystem structure** — a tensor factorization $\mathcal{H}=\bigotimes_i\mathcal{H}_i$ or a graph $G=(V,E)$ — **has been posited by hand.** The factorization / graph is a surrogate for $g_5$: it fixes the vertex set and adjacency on which any emergent dimension and metric are supported, so $\kappa_\Phi>0$ and N3 fails.

The constructions that are genuinely background-free in the factorization-free sense (Connes–Rovelli thermal time; the abstract Connes–Takesaki crossed product) output **no metric at all** ($\Delta_{\mathrm{geo}}=0$ for a metric — only a one-parameter flow). And the strongest causal-structure generator (Leutheusser–Liu) succeeds only by relocating $g_1$ into the HSMI positivity hypothesis $P\ge0$, which is energy positivity — a disguised boost / Killing input — atop a symmetric TFD state on a fixed AdS bulk.

So the encode/generate frontier coincides exactly with the **Type III$_1$ no-factorization fact** (see [../domains/mathematics.md](../domains/mathematics.md) §3; [2026-06-08-algebraic-background-independence.md](2026-06-08-algebraic-background-independence.md)): genuine relativistic QFT has *no* tensor factorization to seed a graph, while every metric-producing toy lives in a finite-dimensional factorized Hilbert space that is not QFT. The circularity-falsifying clause (iii) — geometry from a *non-symmetric* state — is satisfied by **none**. `[INFERENCE]`

A second leak, located by the referee: C1 polices only how $\Phi$ is *defined*, not the geometry-**readout** step (Type II algebra $\to (\mathcal{M},g)$), which is exactly where the BW / CHM "modular flow is geometric" assumption enters. The canonical crossed product satisfies C1 trivially yet generates nothing, so C1 is necessary but radically insufficient and is gameable without a readout clause. `[INFERENCE]`

---

## Furthest defensible claim

`[INFERENCE]` With the proposed checklist, the encode/generate distinction is **graded** (two informal axes $\Delta_{\mathrm{geo}}$ and $\kappa_\Phi$), and against it the six constructions fall into a **partial** ordering (the outputs — time-flow / causal-order / spatial-metric — are heterogeneous, so this is *not* a strict total order):
$$
\underbrace{\text{ENCODE}}_{\text{CLPW, TN-RT, causet-as-rigorous}}\ \prec\ \underbrace{\text{GENERATES-time-only}}_{\text{Connes–Rovelli}}\ \prec\ \underbrace{\text{PARTIAL-causal}}_{\text{Leutheusser–Liu}}\ \prec\ \underbrace{\text{CLOSEST-to-generate}}_{\text{Cao–Carroll}},
$$
with Cao–Carroll the **unique metric-producing map (among the six)** whose sole irreducible smuggled input is a hand-chosen tensor factorization (a surrogate $g_5$) plus Riemannian signature. **No surveyed construction generates Lorentzian spacetime from factorization-free, region-free, symmetric-state-free data.**

This is a **survey-scoped inference over a finite, self-selected list**, anchored to a real theorem-grade obstruction (Type III$_1$ $\Rightarrow$ no factorization in interacting QFT) — it is explicitly **not** a no-go theorem. Confidence: high on the per-construction classifications and the Type-III$_1$ linkage; medium on the four-tier ordering and on the criterion being uniquely correct.

---

## If it fails / weaker true statement

- **If the criterion is rejected as too strict** (a proponent argues a posited factorization is "non-geometric data" since it carries no metric): fall back to the purely graded statement — rank constructions by $\Delta_{\mathrm{geo}}$ (output-minus-input free functions / does a metric come out) and report Cao–Carroll as maximal **without adjudicating "generate."** `[INFERENCE]`
- **If clause (iii) is deemed too demanding** (no theory yet outputs geometry from a non-symmetric state, so it may be vacuously unmet): weaken to "GENERATE requires only $g_1,g_2,g_3$ false (drop the factorization objection)," under which Cao–Carroll passes and the headline becomes **"one construction generates spatial geometry; none generates Lorentzian / causal spacetime."** `[INFERENCE]`
- **Either way the load-bearing conclusion survives:** the encode/generate frontier coincides with the presence / absence of a hand-chosen local-subsystem structure, which is the Type III$_1$ no-factorization fact in disguise. `[INFERENCE]`

---

## Proposed registry items (with referee verdicts)

### OP-46-CRIT — Encode-vs-generate criterion (open-problem)
**Statement.** $\Phi:(\mathcal{A},\omega,\alpha)\to(\mathcal{M},g)$ generates geometry iff (C1) none of $g_1$ (Killing/conformal/boost generator), $g_2$ (region/causal diamond), $g_3$ (symmetric BW/Hadamard/KMS vacuum on a given spacetime), $g_4$ (causal order), $g_5$ (fixed manifold/dimension/metric, or surrogate factorization/graph) is used in **defining** $\Phi$; (C2) $\Phi$ is $\mathrm{Aut}(\mathcal{A},\omega)$-equivariant; (C3) single-valued on iso classes. ENCODE $=$ (C3) with (C1) failing. The distinction is graded by $\Delta_{\mathrm{geo}}$ and $\kappa_\Phi$, with a circularity-falsifier (geometry must vary over non-symmetric states).
**Referee verdict: KEEP — severity MAJOR — DOWNGRADE to `[SPECULATIVE]`.** Not sound as a *sufficient* condition: $\Delta_{\mathrm{geo}}$ is ill-typed for a III$_1$ pair; the geometry-readout map is unpoliced (canonical crossed product satisfies C1 yet generates nothing); C2 forces a $g_1$-type isometry onto the output; the $g_i$ list must add $g_6$ (energy positivity / spectrum condition) and $g_7$ (Reeh–Schlieder cyclicity). **Refined:** treat C1–C3 + N1–N4 as **necessary conditions / graded desiderata**, add a clause requiring the *readout* step to use none of $g_1$–$g_7$, and replace $\Delta_{\mathrm{geo}}$ by an algebraic/relative-entropy invariant. Useful regulative checklist, not a decision procedure.

### HYP-FACTORIZATION-IS-GEOMETRY — (new-hypothesis)
**Statement.** The hidden geometric input common to every surveyed metric-outputting construction is a pre-chosen local-subsystem structure (tensor factorization or graph); choosing it is geometrically equivalent to choosing $g_5$; genuine relativistic QFT (Type III$_1$, no factorization) has none; hence "generate geometry from abstract data" reduces to the unsolved "derive the factorization/graph from factorization-free algebraic data."
**Referee verdict: KEEP — severity MINOR — PROMOTE bare `[SPECULATIVE]` $\to$ `[INFERENCE]` for the descriptive core.** Corrections: factorization $=$ **skeleton** (topology + adjacency, plus conformal-causal class for $g_4$), **not** the full metric $g$ — the conformal factor / edge-weights come from the state (so "factorization $=$ choosing $g$" is downgraded to *skeleton-equivalence*, `[SPECULATIVE]`); "Type III$_1$ has no structure" $\to$ "no *tensor-factor* structure" (the inclusion net + modular data *are* structure), `[ESTABLISHED]` with precision; the reduction target is attempted (Carroll–Singh quantum mereology, *PRA* 103, 022213, 2021 [unverified exact pages]) and argued **non-unique** (Stoica, arXiv:2102.08620, 2022 [unverified]).

### GAP-LL-ENERGY-POSITIVITY — (gap-refinement)
**Statement.** Leutheusser–Liu's emergent interior time + sharp horizon is the strongest surveyed causal-structure generation from modular data, but its HSMI positivity hypothesis ($P\ge0$, via Borchers–Wiesbrock) is a relocated geometric input. Refined gap: is $P\ge0$ derivable from background-free algebraic data, or logically equivalent to assuming a boost/Killing structure $g_1$?
**Referee verdict: KEEP — severity MINOR — `[OPEN]` (inputs `[ESTABLISHED]`).** False-dichotomy fix: an HSMI is *already* background-free algebraic data; the non-derived ingredient is the **spectrum condition** $P\ge0$, an independent positivity/stability axiom — not a boost Killing vector. By the Wiesbrock biconditional, positivity and half-sidedness are **one** premise, not two; a single HSMI yields only the $ax+b$ pair, *not* a Killing algebra (so "equivalent to a boost/Killing structure" $\to$ "equivalent to a positive-energy $ax+b$ pair"). In LL the positivity is inherited from the **boundary** CFT Hamiltonian. Sharpened gap: is the $N=\infty$ emergence a genuine derivation, or the imprint of assumed boundary-Hamiltonian positivity + the chosen TFD/KMS state?

### H4-R4 — Encode-vs-generate verdicts (hypothesis-refinement of H4/H0)
**Statement.** CLPW and random-tensor RT are ENCODE ($\Delta_{\mathrm{geo}}=0$; smuggle $g_1,g_2,g_3,g_5$ resp. $g_4,g_5$); causal-set sprinkling ENCODE rigorously, generative limit OPEN; Connes–Rovelli generates time only (fails N4); Leutheusser–Liu PARTIAL on a pre-given AdS bulk; only Cao–Carroll outputs a Riemannian metric + dimension from abstract data, remaining PARTIAL. Net: no surveyed construction generates Lorentzian spacetime from factorization-free, region-free, symmetric-state-free data.
**Referee verdict: KEEP — severity MINOR — `[INFERENCE]` (classificatory).** Caveats folded in: the criterion apparatus (N-conditions, $g_i$ labels) is itself OPEN and introduced here as a *proposed* scheme; "only Cao–Carroll" $\to$ "among the surveyed constructions"; Connes–Rovelli **posits** (does not derive) a time; Cao–Carroll's decisive gap is signature + dynamics (Riemannian spatial slice, no time), not a co-equal smuggle; causet generation blocked by the unproven Hauptvermutung **and** undefined quantum dynamics **and** Kleitman–Rothschild dominance. The net negative is an **inductive survey**, not a theorem.

---

## Verdict

Criterion delivered and decision-usable as a **graded ordinal rubric**. The encode/generate distinction is **not sharp**: it is graded by $\Delta_{\mathrm{geo}}$ (does metric data come out, output-minus-input) and $\kappa_\Phi$ (relabelling symmetry broken by a hand-chosen local structure), with a five-item (extensible to seven) smuggling checklist $g_1$–$g_5$ and a circularity-falsifying clause (geometry from a non-symmetric state). The six constructions order as a partial ranking with CLPW / random-tensor RT / causet-as-rigorous at the ENCODE floor, Connes–Rovelli generating time-only, Leutheusser–Liu PARTIAL (interior time + horizon, relocated-$g_1$ positivity), and **Cao–Carroll(–Michalakis) the single closest to genuine generation** (dimension + spatial Riemannian metric from abstract state data).

The deep finding `[INFERENCE]`: the encode/generate frontier coincides exactly with the presence / absence of a posited local-subsystem (factorization / graph) structure — which is the Type III$_1$ no-factorization fact in disguise. Confidence **high** on the per-construction classification given the criterion; **medium** on the criterion being the uniquely right one (proponents may contest whether a bare factorization counts as geometric input — handled by the graded fallback). Upgrades the iteration-2 "reorganization, not derivation" headline ([2026-06-08-algebraic-background-independence.md](2026-06-08-algebraic-background-independence.md)) from assertion to checklist verdict.

---

## Open subquestions

1. Can the local-subsystem structure (tensor factorization / graph) that Cao–Carroll and tensor-network RT posit be **derived** from factorization-free algebraic data, rather than chosen? (HYP-FACTORIZATION-IS-GEOMETRY) `[OPEN]`
2. Is the Leutheusser–Liu HSMI positivity hypothesis $P\ge0$ derivable from background-free data, or logically equivalent to a positive-energy $ax+b$ (boost-translation) input? (GAP-LL-ENERGY-POSITIVITY) `[OPEN]`
3. Does any $(\mathcal{A},\omega)$ pair with **non-symmetric** (non-BW/Hadamard) modular flow yield an emergent semiclassical geometry — satisfying clause (iii) and breaking the circularity? (carried from iteration 2) `[OPEN]`
4. Can a construction output **Lorentzian** signature + a causal order (pass N4) from abstract data? Cao–Carroll adds time separately via state evolution. `[OPEN]`
5. Is treating a bare factorization as "geometric input" the right call, or should it be admitted as non-geometric (under which Cao–Carroll passes as full generation)? This single decision flips the headline. `[CONTESTED]`
6. Does the causal-set **sequential-growth** (Rideout–Sorkin) route — outside this survey — generate Lorentzian causal structure where sprinkling cannot? `[OPEN]`

---

## See also

- [../FINDINGS.md](../FINDINGS.md) — emergent-geometry status; "reorganization vs derivation" meta-verdict.
- [../HYPOTHESES.md](../HYPOTHESES.md) — H0, H4 (geometry/time from algebra/entanglement); H4-R4 refinement above.
- [../OPEN_PROBLEMS.md](../OPEN_PROBLEMS.md) — OP-46 (this track); OP-46-CRIT proposed.
- [../GAPS_AND_CONTRADICTIONS.md](../GAPS_AND_CONTRADICTIONS.md) — GAP-LL-ENERGY-POSITIVITY.
- [../domains/mathematics.md](../domains/mathematics.md) — Type III$_1$ classification, no-factorization, Tomita–Takesaki, Borchers–Wiesbrock.
- [../domains/quantum-field-theory.md](../domains/quantum-field-theory.md) — local algebras, Bisognano–Wichmann, Reeh–Schlieder.
- [../domains/general-relativity.md](../domains/general-relativity.md) — Malament/HKM causal-order $\to [g]$; causal structure.
- [../domains/information-theory.md](../domains/information-theory.md) — mutual-information distance, entanglement entropy, RT.
- [2026-06-08-algebraic-background-independence.md](2026-06-08-algebraic-background-independence.md) — iteration-2 source for OP-46; CLPW / crossed product; "relocating not removing" input.
- [2026-06-08-de-sitter-and-emergent-spacetime.md](2026-06-08-de-sitter-and-emergent-spacetime.md) — dS static-patch algebra, CLPW context.
- [2026-06-08-entropic-and-emergent-gravity.md](2026-06-08-entropic-and-emergent-gravity.md) — emergent-gravity landscape, area law.
- [2026-06-08-unified-program-synthesis.md](2026-06-08-unified-program-synthesis.md) — cross-program synthesis.
- [../EPISTEMICS.md](../EPISTEMICS.md) — tag definitions used throughout.
