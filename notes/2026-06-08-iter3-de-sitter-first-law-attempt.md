# Attempt: a de Sitter entanglement first law (OP-41)

Status: ATTEMPT — partial result; primary open problem (holographic/algebraic dS first law) NOT closed, obstruction located
Last updated: 2026-06-08
Iteration: 3

This is an *attemptive* research note. It carries a single concrete derivation — the de Sitter analog of the AdS entanglement-first-law-implies-linearized-Einstein result (FGHMVR) — as far as it will go, names the exact step that breaks, and records the weaker statement that survives. Track: **OP-41 / OP-dS-FIRSTLAW** (holographic / algebraic de Sitter entanglement first law).

---

## Goal

The AdS result (Faulkner–Guica–Hartman–Myers–Van Raamsdonk, FGHMVR) is one of the cleanest "spacetime from entanglement" statements known: the boundary entanglement first law $\delta S_A = \delta\langle K_A\rangle$, imposed for *every* boundary ball region $A$, is equivalent to the *linearized* bulk Einstein equation about the AdS vacuum [ESTABLISHED, arXiv:1312.7856].

The goal of this iteration is the genuine $\Lambda>0$ analog. Specifically:

1. Determine in what precise sense Jacobson's 2015 "Entanglement Equilibrium" derivation *already* is a local, dS-compatible "first law," and why it nevertheless does **not** close OP-41. [ESTABLISHED that Jacobson 2015 is dS-valid; the "does not close OP-41" judgment is INFERENCE.]
2. Attempt a Chandrasekaran–Longo–Penington–Witten (CLPW) Type II$_1$ static-patch *algebraic* version: push $\delta S_{\rm gen} = \delta\langle K\rangle$ toward linearized Einstein at $\Lambda>0$, and name the **exact** step that breaks. [This is the genuinely missing piece.]

Two derivations are routinely conflated in the literature; the entire value of this note is in separating them precisely. We label them (A) FGHMVR, (B) Jacobson 2015, (C) CLPW, then attempt (C)$\to$Einstein.

Cross-context: this reinforces **H2**'s negative meta-conclusion (algebraic constructions presuppose rather than generate geometry) while sharpening the $\Lambda>0$ boundary of **H4**. See [../HYPOTHESES.md](../HYPOTHESES.md).

---

## Setup (real math)

### (A) FGHMVR — AdS, holographic [ESTABLISHED]

Boundary region $A$ = ball on the AdS boundary; bulk Ryu–Takayanagi (RT) surface $\gamma_A$ anchored on $\partial A$. The CFT vacuum modular Hamiltonian for a ball is geometric (Casini–Huerta–Myers, CHM):
$$
K_A = 2\pi\int_A \frac{R^2-r^2}{2R}\,T_{tt}\,d^{d-1}x ,
$$
with $R$ the ball radius [ESTABLISHED, arXiv:1102.0440]. RT gives $S_A = \mathrm{Area}(\gamma_A)/4G_N$. The first law
$$
\delta S_A = \delta\langle K_A\rangle ,
$$
imposed for *every* ball, is equivalent (via the Iyer–Wald identity / Hollands–Wald canonical energy) to the linearized bulk Einstein equation
$$
\delta G_{\mu\nu} + \Lambda_{\rm AdS}\,\delta g_{\mu\nu} = 8\pi G\,\delta T_{\mu\nu} .
$$
The variational character is **minimization**: $\gamma_A$ is the minimal/extremal surface. The boundary anchor and the boundary CFT stress tensor are load-bearing. [ESTABLISHED, arXiv:1312.7856.]

### (B) Jacobson 2015 — "Entanglement Equilibrium," local, any $\Lambda$ [ESTABLISHED]

Take a small geodesic ball $\Sigma$ of radius $\ell \ll$ all curvature radii, in a maximally symmetric vacuum (Minkowski, dS, or AdS — works for **any** $\Lambda$). The Maximal Vacuum Entanglement Hypothesis (MVEH) posits that at fixed volume $V$ the vacuum entanglement entropy is maximal, hence its *first* variation vanishes:
$$
\delta S\big|_V = 0 .
$$

> [CONTESTED — referee A-dS-FIXEDVOL-ETA, major] The **operative** condition in Jacobson's field-equation derivation is *first-order stationarity* $\delta S_{\rm tot}|_V = 0$ (his Eqs. 23–24), **not** maximality. Maximality is the *name* of the hypothesis but is not what yields the equation; Jacobson concedes full maximality "does not appear to follow in all generality." The note's earlier "maximal not merely stationary" framing is INVERTED and is corrected here.

Decompose $\delta S = \eta\,\delta A + \delta S_{\rm matter}$, with the area-entropy density $\eta = 1/4G\hbar$ assumed finite/universal (a cutoff-dependent *input* that **defines** $G$ via $G = 1/4\hbar\eta$, with the "$1/4$" *matched* to Bekenstein–Hawking, not derived) [ESTABLISHED; the UV-cutoff dependence of $\eta$ is the standing open issue]. The verified geometric identity, at fixed volume:
$$
\delta A\big|_V = -\frac{\Omega_{d-2}\,\ell^{d}}{d^2-1}\,\delta G_{00},
$$
where the **fixed-volume** (not fixed-radius) prescription is essential — fixed radius spoils the $1/4G$ coefficient by exactly a factor $(d+1)/3$ [ESTABLISHED]. For conformal matter the small-ball modular Hamiltonian is the conformal-Killing energy of the causal diamond, $K = \int_\Sigma T_{ab}\,\zeta^b\,d\Sigma^a$, with
$$
\delta\langle K\rangle = \frac{\Omega_{d-2}\,\ell^{d}}{d^2-1}\,\delta\langle T_{00}\rangle ,
$$
and the Clausius/first-law relation $\delta S_{\rm matter} = \delta\langle K\rangle$ (entanglement first law for the diamond). Setting $\delta S|_V = 0$:
$$
\eta\,\delta A|_V + \delta\langle K\rangle = 0
\;\Rightarrow\;
-\frac{\eta\,\Omega_{d-2}\ell^d}{d^2-1}\,\delta G_{00}
+ \frac{\Omega_{d-2}\ell^d}{d^2-1}\,2\pi\,\delta\langle T_{00}\rangle = 0,
$$
which, holding in every frame/ball, gives the tensor equation
$$
\delta G_{ab} + \Lambda g_{ab} = \frac{2\pi}{\hbar\eta}\,\delta\langle T_{ab}\rangle,
\qquad G = \frac{1}{4\hbar\eta},
$$
with $\Lambda$ an **undetermined integration constant**. For non-conformal matter an extra scalar $\delta X$ enters $\delta\langle K\rangle$, and the result then holds only modulo Jacobson's unproven $\delta X$ conjecture. [CONTESTED — Casini–Galante–Myers, arXiv:1601.00528, found this in tension with holographic computations for low-dimension relevant operators; workarounds proposed.]

### (C) CLPW — $\Lambda>0$, algebraic [ESTABLISHED]

Static patch of dS$_{d+1}$; the bare QFT algebra is Type III$_1$. Adjoin an observer with clock Hamiltonian $q \ge 0$, impose the constraint $\hat H = H_{\rm mod} + q = 0$, and project onto $q\ge 0$. The crossed product $\mathcal A \rtimes_\sigma \mathbb R$ is Type II$_1$ with finite trace
$$
\mathrm{Tr}(\mathbb 1) = \int_{-\infty}^0 \beta_{\rm dS}\,e^{\beta_{\rm dS} x}\,dx = 1 .
$$
The Bunch–Davies modular Hamiltonian *is* the static-patch boost (the dS Killing vector $\xi$ with bifurcate horizon), geometric only because empty dS is assumed (Bisognano–Wichmann / Figari–Höegh-Krohn–Nappi for the dS wedge). The generalized entropy
$$
S_{\rm gen} = \frac{\langle A\rangle}{4G} + S_{\rm out} + \text{const}
$$
is the genuine von Neumann entropy $-\mathrm{Tr}(\hat\rho\ln\hat\rho)$ to leading order in $G$, and the maximum-entropy state is empty dS ($\hat\rho = \mathbb 1$). [ESTABLISHED, arXiv:2206.10780.]

---

## The attempt

I attempt the CLPW-rooted holographic/algebraic dS first law — the genuinely missing piece (2).

**Step 1 — Algebra and trace.** Take the static-patch crossed-product Type II$_1$ algebra $\hat{\mathcal A} = \mathcal A \rtimes_{\sigma^{\rm BD}} \mathbb R$ with trace $\mathrm{Tr}$, and a density matrix $\hat\rho_\Psi$ for a semiclassical state $\Psi$ (a perturbation of Bunch–Davies). [ESTABLISHED, CLPW]

**Step 2 — Generalized entropy as von Neumann entropy.**
$$
S(\hat\rho_\Psi) = -\mathrm{Tr}(\hat\rho_\Psi \ln \hat\rho_\Psi)
= \frac{\langle A\rangle}{4G} + S_{\rm out} + \text{const} = S_{\rm gen},
$$
to leading order in $G$. [ESTABLISHED, CLPW]

**Step 3 — Identify $K$.** For the static patch, the modular Hamiltonian of the Bunch–Davies state is the boost generator
$$
K_{\rm BD} = 2\pi H_\xi = 2\pi\int_\Sigma T_{ab}\,\xi^b\,d\Sigma^a .
$$
[ESTABLISHED for empty dS; the dS-diamond modular data is computed in Fröb, arXiv:2308.14797, with the large-diamond limit reducing to the static-patch boost.]

**Step 4 — Attempt the first law.** Vary $\Psi$ away from Bunch–Davies at first order. Stationarity of $S_{\rm gen}$ (the crossed-product first law) reads
$$
\delta S_{\rm gen} = \delta\langle K\rangle
\;\Longleftrightarrow\;
\frac{\delta\langle A\rangle}{4G} + \delta S_{\rm out} = \delta\langle K_{\rm BD}\rangle .
$$
Using the conformal-vacuum entanglement first law reduced to the horizon — the dS-wedge analog of CHM, $\delta S_{\rm out} = \delta\langle K_{\rm BD}\rangle$ — this collapses to the purely geometric statement
$$
\delta\langle A_{\rm horizon}\rangle = 0 \quad\text{at first order},
$$
i.e. the cosmological-horizon area is stationary under first-order perturbations preserving the constraint. This is the dS horizon-area-stationarity / generalized-second-law-adjacent statement, **not yet** a bulk field equation. [INFERENCE — the identification of $\delta S_{\rm gen}=\delta\langle K\rangle$ with a derived constraint is *expected* from the one-Killing-field structure; it is not a published theorem of CLPW. This *is* OP-41.]

**Step 5 — Attempt to convert area-stationarity to linearized Einstein.** In AdS, the FGHMVR step converts $\delta S_A = \delta\langle K_A\rangle$ for *all* balls into a *local* bulk equation via the Iyer–Wald identity: the boundary modular Hamiltonian equals a bulk Killing (canonical) energy through the timelike boundary, and "for all anchoring regions $A$" supplies the infinitely many local constraints needed to reconstruct $\delta G_{\mu\nu}(x)$ pointwise. I attempt the analog. Integrate the linearized Iyer–Wald identity
$$
\delta(\text{horizon area}) = \int_\Sigma \omega\big(g,\delta g,\mathcal L_\xi g\big) + \int_\Sigma \xi\cdot\delta C
$$
over the static-patch slice $\Sigma$ bounded by the bifurcation surface, where $\delta C$ are the linearized constraints (the linearized Einstein components contracted with $\xi$). On shell ($\delta C = 0$) and with $\mathcal L_\xi g = 0$, this is the Wald first law $\delta H_\xi = \tfrac{\kappa}{2\pi}\delta S$. Reading it *backwards* — imposing $\delta S_{\rm gen} = \delta\langle K\rangle$ — gives
$$
\int_\Sigma \xi\cdot\delta C = 0 ,
$$
the $\xi$-**contracted**, $\Sigma$-**integrated** linearized Einstein constraint. **This is where the derivation stalls.**

---

## Where it breaks (the precise obstruction)

The exact breaking step is **Step 5**, and it breaks for a *structurally different* reason than in AdS. There are four interlocking failures; the first is decisive. (Per the referee, failures (i) and (ii) are two faces of one underlying fact — no asymptotic timelike boundary along which to slide regions.)

**(i) One Killing vector, not a family of anchoring regions.** [ESTABLISHED for the FGHMVR mechanism; INFERENCE for the dS no-counterpart.] In AdS, FGHMVR gets a *local* equation $\delta G_{\mu\nu}(x) = 8\pi G\,\delta T_{\mu\nu}(x)$ because the boundary supplies a *continuous* family of ball regions $A$ — all positions, sizes, boosts — hence a continuum of independent first-law constraints that invert to a pointwise field equation. The dS static patch supplies exactly **one** distinguished region (the patch) and **one** Killing vector $\xi$ (the static-patch boost). So $\delta S_{\rm gen} = \delta\langle K\rangle$ yields only the **single scalar constraint** $\int_\Sigma \xi\cdot\delta C = 0$ — the $\xi$-integrated Hamiltonian constraint — not the full tensor $\delta G_{\mu\nu}$. There is no boundary to slide the region along. This is the precise place the AdS construction has no dS counterpart.

**(ii) No timelike conformal boundary $\Rightarrow$ no boundary stress tensor to anchor an RT/extremal surface.** [ESTABLISHED.] The Iyer–Wald conversion in AdS routes the modular energy through $T_{\mu\nu}^{\rm bdy}$ on the timelike boundary; dS has only spacelike $\mathcal I^\pm$. The "surface" in CLPW is the cosmological **horizon** (a bifurcate Killing horizon), which is *not* extremized against any anchored boundary region — it is fixed by the background isometry. There is no min-cut/extremization to linearize.

**(iii) The variational character is different — a maximization, not a minimization.** [ESTABLISHED facts; the "fatal reversal" framing is CONTESTED — see referee, severity minor on the furthest claim.] Banihashemi–Jacobson–Svesko–Visser (arXiv:2208.11706) establish the minus-sign first law $dE_\xi = -T_{\rm dS}\,dS_{\rm hor}$: adding Killing energy to the static patch *decreases* horizon area/entropy. Combined with CLPW's result that empty dS *maximizes* $S_{\rm gen}$, the dS variational principle is a *maximization* over states at fixed algebra — distinct in kind from AdS RT *minimization* of area over surfaces at fixed anchoring.

> [CONTESTED — referee, important] Do **not** read (iii) as a structural no-go. (a) The cited Banihashemi–Jacobson–Svesko–Visser paper *resolves* the minus sign as a misidentification of internal energy (the Brown–York energy vanishes as the system boundary shrinks), rather than enshrining it as a fatal reversal. (b) This same fixed-volume / negative-temperature *maximization* is exactly the structure from which Jacobson 2015 *does* recover the semiclassical Einstein equation including $\Lambda>0$. A stationary point is a stationary point whether it is a max or a min: stationarity yields the *equality* (first-law / equation-of-motion) content; the sign only flips inequality directions in the GSL. So (iii) is a genuine structural *difference* — RT minimizes *area over surfaces*, CLPW maximizes *entropy over states* — but it is **not** by itself the obstruction. The obstruction is (i): too few constraints.

**(iv) The modular Hamiltonian is geometric only because empty dS is assumed.** [ESTABLISHED.] $K_{\rm BD} = 2\pi H_\xi$ holds for Bunch–Davies; for a *perturbed* state the modular flow is non-geometric (no Bisognano–Wichmann), so $\delta\langle K\rangle$ is not a clean boost energy and the right-hand side is not $\delta\langle T_{00}\rangle$ in any local frame. Geometry is *presupposed*, not generated — consistent with the iteration-2 algebraic-background-independence verdict. See [2026-06-07-iter2-algebraic-background-independence.md](2026-06-07-iter2-algebraic-background-independence.md).

---

## Furthest defensible claim

[INFERENCE, scoped to OP-41; high confidence — rests on established structural facts. Referee verdict: **keep, severity minor.**]

> In the CLPW Type II$_1$ static-patch setting, a de Sitter generalized-entropy first law / stationarity condition $\delta S_{\rm gen} = \delta\langle K\rangle$ (equivalently stationarity of $\langle A_{\rm horizon}\rangle$ at empty dS) is structurally incapable of being inverted into the **full tensor** linearized Einstein equation by the FGHMVR mechanism, because that mechanism requires a *continuum* of anchored boundary ball regions (all positions, sizes, boosts) whose independent first-law constraints invert to a pointwise field equation, whereas the dS static patch supplies a **single** distinguished region with a **single** boost Killing vector and no timelike conformal boundary along which to slide regions. The most one can expect is a single scalar relation — morally the boost-contracted, slice-integrated linearized Hamiltonian constraint — and even *that* has not been *derived* from the Type II$_1$ algebra (it is OP-41).
>
> Separately, **Jacobson 2015** already gives the *local nonlinear* semiclassical Einstein equation at any $\Lambda$ including dS, but is non-holographic and presupposes $\eta = 1/4G\hbar$ plus the fixed-volume (stationarity, not maximality) entanglement-equilibrium hypothesis, so it does not close the holographic/algebraic OP-41 — it answers a *different* (local-thermodynamic) question.

**Referee-mandated softening of verbs.** "Cannot recover" is downgraded to [INFERENCE/OPEN]: there is no no-go theorem; this is a present absence of construction plus a strong structural argument. "Yields the single scalar constraint" is [SPECULATIVE/OPEN] — CLPW yields entropy *stationarity*, not a derived linearized constraint; the identification is this note's own inference. The honest verbs are "is expected to yield at most" and "has no established route to."

---

## If it fails / weaker true statement

If the "single Killing vector $\Rightarrow$ only one constraint" obstruction can be circumvented, the route is to **enlarge the family of anchoring regions without a boundary**. Concrete strategies:

- **(a) Use the full dS isometry group $SO(d+1,1)$**, not just the static-patch boost. There is a continuous family of static-patch boosts (one per observer worldline / choice of bifurcation surface), and the family of associated modular Hamiltonians could supply enough independent first-law constraints to invert to a local equation — *if* each defines a Type II$_1$ algebra with geometric modular flow in the *same* state. This is the QRF/covariant-observer direction (Chen–Xu, arXiv:2511.00622; De Vuyst–Eccles–Höhn–Kirklin). [INFERENCE/OPEN]
  > **Referee caveat (finiteness).** $SO(d+1,1)$ is finite-dimensional ($\dim = (d+1)(d+2)/2$); its orbit of a single bifurcation surface is a *finite-dimensional* manifold, **not** the infinite-dimensional space of all boundary balls. The available family may be too *small* to invert an integral transform to a pointwise PDE across all spacetime. Quantify before assuming inversion is possible.
- **(b) Use sub-patch causal diamonds** inside the static patch with CHM-type conformal-Killing modular Hamiltonians — essentially importing Jacobson's small-ball family *into* the algebraic setting, reconnecting (1) and (2). The dS-diamond modular data already exists (Fröb, arXiv:2308.14797). [INFERENCE/OPEN]
- **(c) Replace the missing extremal surface** with constrained extremization on a stretched horizon / screen (Susskind), giving a min-cut whose linearization could mimic RT — but this inherits the contested status of static-patch holography. [SPECULATIVE]

**The honest weaker conclusion.** A holographic dS first law in the *strict* AdS sense (boundary CFT + anchored RT minimization) is structurally unavailable, because the two enabling structures (timelike boundary, anchored minimization) are absent. The correct weaker replacement is:
$$
\delta S_{\rm gen} = \delta\langle K\rangle \;\text{for the static-patch observer}
\;\Longleftrightarrow\; \text{dS horizon-area stationarity (kinematic/thermodynamic)},
$$
*not* a generator of local Einstein dynamics. Local dS dynamics returns only by re-importing Jacobson's continuum of small diamonds — i.e. by abandoning the single-region holographic framing.

> [CONTESTED — referee, on the "GSL" wording] Horizon-area *stationarity* (a first-law equality) is **not** identical to the de Sitter generalized *second* law (a relative-entropy *monotonicity* / inequality; cf. Faulkner–Speranza, arXiv:2405.00847). This note uses "GSL-adjacent" only loosely; the equation-of-motion content is the *stationarity* constraint, with the GSL a separate consequence.

---

## Proposed registry items

Each item is recorded with its referee verdict (keep / severity / refined statement). All three are **kept**.

### OP-dS-FIRSTLAW-R2 (open-problem) — referee: **keep, severity minor**

**Proposed statement.** Refine OP-dS-FIRSTLAW (iteration 2). The CLPW Type II$_1$ static-patch first law $\delta S_{\rm gen} = \delta\langle K\rangle$ is expected to yield only the *single* static-patch-boost-contracted, slice-integrated linearized Hamiltonian constraint (= horizon-area stationarity), **not** the full tensor linearized Einstein equation, because dS supplies one distinguished region and one Killing vector rather than AdS's continuum of anchored boundary regions. Sharpened open problem: can a **family** of static-patch modular Hamiltonians (over the $SO(d+1,1)$ orbit of observers/bifurcation surfaces, or over sub-patch CHM causal diamonds) supply enough independent first-law constraints — each with geometric modular flow in a *common* state — to invert to a *local* $\delta G_{\mu\nu}$, producing a genuinely algebraic dS analog of FGHMVR?

**Referee refinement (incorporated).** Do **not** say CLPW "provably yields only" one constraint — that is an INFERENCE from the one-Killing-field structure, not a published no-go. The "family inverts to local Einstein in dS" idea is **already realized outside the algebraic framework** by Jacobson 2015 (semiclassical, all $\Lambda$), and the dS-diamond modular Hamiltonians are computed in Fröb (arXiv:2308.14797). So the *non-redundant* open target is narrower: **can the CLPW Type II$_1$ algebraic structure (crossed-product trace, von Neumann $S_{\rm gen}$) reproduce the Jacobson-type local equation *without* importing a UV-cutoff entanglement entropy that Type III$_1$ forbids?** Caveat the finiteness gap (finite-dim $SO(d+1,1)$ orbit). Downgrade the sign/maximization framing from "structurally opposite" (sounds like an obstruction) to "the extremum is a maximum, which flips GSL inequalities but not the equality content of the first law." Tag: **[OPEN]**.

### HYP-dS-NOMIN (new-hypothesis) — referee: **keep, severity MAJOR (re-tag and de-modalize)**

**Proposed statement.** A holographic dS first law in the strict AdS sense (boundary CFT modular Hamiltonian + anchored extremal/RT surface by minimization) *cannot exist*, because dS lacks a timelike conformal boundary and its generalized-entropy variational principle is a concave maximization with a sign-reversed first law; the correct weaker replacement is $\delta S_{\rm gen}=\delta\langle K\rangle \Leftrightarrow$ dS GSL / horizon-area stationarity, not a route to local field equations; local dynamics returns *only* by re-importing Jacobson's small diamonds.

**Referee refinement (incorporated; tag changed SPECULATIVE $\to$ INFERENCE).**
- Replace "**cannot exist**" with "is **structurally obstructed / currently unavailable** in the strict AdS sense." No theorem forbids a dS Einstein-from-entanglement construction; iteration-2 explicitly records "no theorem forbidding dS Einstein-from-entanglement."
- "**Not a route to local field equations**" is an overclaim. It is contradicted by (a) Jacobson 2015 (local Einstein, all $\Lambda$, established) and (b) a claimed non-unitary dS$_3$/CFT$_2$ pseudo-entropy first law $\Rightarrow$ perturbative Einstein (arXiv:2511.07915 **[unverified at iter-3 writing; web-verified in iterations 4–5 — see CHANGELOG 2026-06-10]**). Narrow to: *the AdS-strict, unitary, minimization-anchored, single-static-patch route is obstructed.*
- The "$\delta S_{\rm gen}=\delta\langle K\rangle \Leftrightarrow$ GSL" biconditional is unproven (conflates stationarity equality with monotonicity inequality); keep only the forward reading.
- Drop the "only Jacobson's continuum of diamonds" exclusivity (Jacobson 2015 single-diamond and Sakharov induced gravity are counterexamples to "only").
- Established sub-facts the hypothesis correctly uses: dS has no timelike conformal boundary; $SO(d+1,1)$ is the *Euclidean* conformal group (dS/CFT gives complex weights $\Delta = d/2 \pm i\nu$, principal series, non-unitary boundary functional); the static-patch first law carries a minus sign with negative specific heat; CLPW realizes empty dS as the max-entropy state of a finite Type II$_1$ algebra. Tag: **[INFERENCE]** (component facts ESTABLISHED).

### A-dS-FIXEDVOL-ETA (assumption) — referee: **keep, severity MAJOR (mixed tag; one clause inverted)**

**Proposed statement.** Both routes depend on cutoff/normalization inputs that are assumed, not derived: (a) $\eta = 1/4G\hbar$ a finite universal input; (b) the *maximal* (not merely stationary) vacuum-entanglement hypothesis at fixed volume is essential, fixed radius spoiling the coefficient by $(d+1)/3$; (c) conformal matter needed for $\delta\langle K\rangle \propto \delta\langle T_{00}\rangle$, non-conformal requiring the $\delta X$ conjecture.

**Referee refinement (incorporated; not a single [ESTABLISHED] tag — MIXED).**
- **(a) [ESTABLISHED]** $\eta = 1/(4\hbar G)$ is an input that *defines* $G$ (Jacobson 2015 Eq. 27); the "$1/4$" is *matched* to Bekenstein–Hawking, and the underlying entanglement-entropy area-density is UV-cutoff-dependent — *not* a manifestly finite universal constant. "Finite universal input" overstates.
- **(b) [ESTABLISHED]** for fixed-volume + the $(d+1)/3$ coefficient. **[CORRECTION]** The operative condition is first-order **stationarity** ($\delta S_{\rm tot}|_V=0$), **not maximality** — the original "maximal not merely stationary" is INVERTED. **[INFERENCE]** The maximality/concavity link to the dS minus-sign and the CLPW Type II$_1$ max-entropy vacuum is a *conceptual alignment* (all feature empty dS as max-entropy state), not an established unification; iteration-2's H2-R1 already flags "algebra type encodes $\Lambda$ sign" as an overclaim.
- **(c) [CONTESTED]** Conformal matter gives $\delta\langle K\rangle \propto \delta\langle T_{00}\rangle$ exactly; non-conformal matter rests on Jacobson's unproven $\delta X$ conjecture, found in tension with holographic results for low-dimension relevant operators (Casini–Galante–Myers, arXiv:1601.00528; workarounds proposed).
- **Scope caveat:** this assumption concerns the background-free small-diamond route (which already covers dS); it is **not** the CLPW-rooted unitary static-patch chain, which remains OPEN.

---

## Verdict

[Confidence: **high.**]

OP-41 (the holographic/algebraic dS first law) is **NOT closed**, and this note locates precisely why.

1. **Jacobson 2015 is a real, dS-valid, *local* derivation** of the nonlinear semiclassical Einstein equation from entanglement equilibrium — in one respect (nonlinearity) *stronger* than FGHMVR — but it is non-holographic, presupposes $\eta = 1/4G\hbar$ and the fixed-volume stationarity hypothesis, and so does not close the holographic/algebraic OP-41, a different question. [ESTABLISHED that it exists and is dS-valid; ESTABLISHED that it is non-holographic.]

2. **The CLPW-rooted attempt reaches, rigorously, the dS horizon-area-stationarity statement** $\delta S_{\rm gen}=\delta\langle K\rangle \Leftrightarrow \int_\Sigma \xi\cdot\delta C = 0$, but breaks at the conversion-to-tensor step: dS offers **one region and one Killing vector**, yielding a single scalar constraint, not the continuum of anchored-region constraints FGHMVR inverts. There is additionally no timelike boundary / boundary stress tensor / extremal surface, and the variational principle is a maximization, distinct in kind from AdS minimization. [INFERENCE, high confidence — rests on established structural facts; NOT a no-go theorem.]

3. **The weaker TRUE statement** replacing a strict-AdS-style dS holographic first law: $\delta S_{\rm gen}=\delta\langle K\rangle$ for the static-patch observer is a kinematic/thermodynamic (horizon-stationarity) statement, not a generator of local Einstein dynamics; local dynamics returns by re-importing Jacobson's small diamonds.

4. **The one concrete escape worth pursuing:** a *family* of modular Hamiltonians over the $SO(d+1,1)$ observer orbit (or sub-patch CHM diamonds) to manufacture the missing continuum of constraints — subject to the finiteness worry that the orbit is finite-dimensional and may be too small.

This reinforces **H2**'s negative meta-conclusion (algebra presupposes geometry — cf. failure (iv)) while giving **H4** a sharper $\Lambda>0$ boundary. See [../FINDINGS.md](../FINDINGS.md) and [../HYPOTHESES.md](../HYPOTHESES.md).

---

## Open subquestions

1. [OPEN] Can a continuous **family** of static-patch modular Hamiltonians — over the $SO(d+1,1)$ orbit of observer worldlines / bifurcation surfaces, each defining a Type II$_1$ algebra with geometric modular flow in a *common* perturbed state — supply enough independent first-law constraints to invert $\delta S_{\rm gen}=\delta\langle K\rangle$ to a *local* tensor $\delta G_{\mu\nu}$, overcoming the single-Killing-vector deficit? (And is the finite-dimensional orbit large enough?)
2. [OPEN] Does importing Jacobson's sub-patch CHM causal diamonds *into* the CLPW Type II$_1$ setting (route (b)) reproduce the local nonlinear result while keeping the crossed-product trace/entropy structure — i.e. can the local and algebraic routes be unified?
3. [OPEN] Given the dS minus-sign first law ($dE = -T\,dS$) and $\delta^2 S_{\rm gen} < 0$ at empty dS, is there a consistent "maximization holography" with a constrained-extremal (max-cut rather than min-cut) surface on a stretched horizon whose linearization mimics RT, or does the sign structure forbid any extremal-surface formulation?
4. [OPEN] For non-conformal matter in dS, can Jacobson's $\delta X$ scalar conjecture be *proven or refuted* using the CLPW Type II$_1$ relative-entropy/modular structure (given the Casini–Galante–Myers tension), removing the last conjecture from the local route?
5. [OPEN] Is the obstruction "one region, one Killing vector $\Rightarrow$ one constraint" a genuine no-go, or an artifact of the static-patch framing that dissolves in global dS (two static patches + $\mathcal I^\pm$) or a time-dependent (DESI $w(z)\ne -1$) setting?

---

## See also

- [../FINDINGS.md](../FINDINGS.md) — master findings ledger (H2 negative meta-conclusion; H4 $\Lambda>0$ boundary).
- [../HYPOTHESES.md](../HYPOTHESES.md) — H2 (algebra presupposes geometry), H4 (entanglement-first-law dynamics).
- [../OPEN_PROBLEMS.md](../OPEN_PROBLEMS.md) — OP-41 / OP-dS-FIRSTLAW; proposed OP-dS-FIRSTLAW-R2.
- [../domains/holography.md](../domains/holography.md) — FGHMVR, RT/HRT, boundary modular Hamiltonians.
- [../domains/de-sitter.md](../domains/de-sitter.md) — static patch, CLPW Type II$_1$, Bunch–Davies, minus-sign first law.
- [../domains/algebraic-qft.md](../domains/algebraic-qft.md) — crossed products, Tomita–Takesaki, Bisognano–Wichmann, CHM.
- [2026-06-07-iter2-algebraic-background-independence.md](2026-06-07-iter2-algebraic-background-independence.md) — iteration-2 verdict that algebra presupposes geometry (failure (iv) here).
- [2026-06-07-iter2-de-sitter-first-law.md](2026-06-07-iter2-de-sitter-first-law.md) — iteration-2 OP-dS-FIRSTLAW (Obstructions 1/3 = the boundary/region pair sharpened here).

### Key results cited

- Jacobson, "Entanglement Equilibrium and the Einstein Equation" — nonlinear semiclassical Einstein eq ($\Lambda$ undetermined) from fixed-volume entanglement equilibrium in small geodesic balls; any $\Lambda$ incl. dS. arXiv:1505.04753, PRL 116, 201101 (2015). [ESTABLISHED]
- Faulkner–Guica–Hartman–Myers–Van Raamsdonk (FGHMVR) — linearized Einstein from $\delta S_A=\delta\langle K_A\rangle$, AdS only, via CHM + RT + Iyer–Wald. arXiv:1312.7856, JHEP 03 (2014) 051. [ESTABLISHED]
- Chandrasekaran–Longo–Penington–Witten (CLPW) — dS static-patch Type II$_1$ crossed-product algebra; $\mathrm{Tr}(\mathbb 1)=1$; $S_{\rm gen}$ as von Neumann entropy; max-entropy state = empty dS; BD modular flow = static-patch boost; no boundary, no RT surface. arXiv:2206.10780, JHEP 02 (2023) 082. [ESTABLISHED]
- Banihashemi–Jacobson–Svesko–Visser, "The minus sign in the first law of de Sitter horizons" — $dE_\xi = -T_{\rm dS}\,dS_{\rm hor}$; resolved via a system boundary/ensemble. arXiv:2208.11706, JHEP 01 (2023) 054. [ESTABLISHED]
- Casini–Huerta–Myers (CHM) — CFT vacuum ball modular Hamiltonian is geometric. arXiv:1102.0440, JHEP 05 (2011) 036. [ESTABLISHED]
- Banihashemi–Jacobson, "Thermodynamic ensembles with cosmological horizons" — quasilocal first law with $S_{\rm gen}$ replacing Gibbons–Hawking; microcanonical $S_{\rm gen}$ stationary; cosmological subsystem thermodynamically unstable. arXiv:2204.05324, JHEP 07 (2022) 042. [ESTABLISHED]
- Fröb, "Modular Hamiltonian for de Sitter diamonds" — geometric/conformal-Killing modular data for CFT diamonds in dS; large-diamond limit = static-patch boost. arXiv:2308.14797, JHEP 12 (2023) 074. [ESTABLISHED]
- Jacobson–Visser, "Gravitational Thermodynamics of Causal Diamonds in (A)dS" — fixed-volume $S_{\rm gen}$ stationarity at the maximally symmetric vacuum $\Rightarrow$ semiclassical Einstein incl. $\Lambda>0$. arXiv:1812.01596, SciPost Phys. 7, 079 (2019). [ESTABLISHED]
- Casini–Galante–Myers — tension of Jacobson's $\delta X$ conjecture with holographic results for low-dimension relevant operators. arXiv:1601.00528. [ESTABLISHED, CONTESTED implication]
- Timelike entanglement first law $\Leftrightarrow$ linearized Einstein — but in asymptotically AdS via timelike (pseudo)entanglement; NOT dS. arXiv:2511.17098 (2025). [ESTABLISHED]
- Claimed non-unitary dS$_3$/CFT$_2$ pseudo-entropy first law $\Rightarrow$ perturbative Einstein. arXiv:2511.07915 (2025). **[unverified at iter-3 writing; web-verified in iterations 4–5]**
- Faulkner–Speranza — general Killing-horizon GSL from relative-entropy monotonicity. arXiv:2405.00847. [ESTABLISHED; distinguishes GSL inequality from first-law equality]
- QRF/covariant-observer direction: Chen–Xu, arXiv:2511.00622; De Vuyst–Eccles–Höhn–Kirklin. **[unverified at iter-3 writing; both web-verified in iteration 4 (2511.00622: Bin Chen & Jie Xu, confirmed) and iteration 6 (DEHK 2411.19931/2405.00114)]**
