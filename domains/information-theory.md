---
title: "Information Theory & Physics"
type: domain
tags: [domain, information-theory]
updated: 2026-06-08
---

# Information Theory & Physics

Status: Active — mature classical/quantum core; speculative gravitational frontier
Last updated: 2026-06-08

This page is the authoritative deep-dive on the mathematical structures linking **information** and **physics**, spanning four strata of decreasing certainty: classical (Shannon/Kolmogorov) information, quantum information, the thermodynamics of computation, and the information-theoretic structure of gravity and spacetime. The organizing discipline throughout is to mark exactly where each layer is a theorem, where it is well-motivated inference, and where it is principled speculation. See [EPISTEMICS.md](../EPISTEMICS.md) for the marker definitions and [THEORY_MAP.md](../THEORY_MAP.md) for this domain's place in the larger landscape.

## Scope

The domain comprises four nested layers:

1. **Classical information theory** — Shannon entropy, mutual information, channel capacity, the data-processing inequality, and Kolmogorov (algorithmic) complexity. This layer is [ESTABLISHED] mathematics with no physical domain restriction.
2. **Quantum information** — von Neumann entropy, qubits, no-cloning, teleportation, entanglement measures, and entanglement entropy in QFT. [ESTABLISHED] theory; the operational primitives are experimentally confirmed.
3. **Thermodynamics of computation** — Landauer's principle, reversible computation, the Maxwell-demon resolution, and physical limits on computation (Margolus–Levitin, Bremermann, Bekenstein). A mix of [ESTABLISHED] bounds and [CONTESTED] interpretive bookkeeping.
4. **Information and gravity** — the Bekenstein and Bousso bounds, holography, the Ryu–Takayanagi formula, AdS/CFT as quantum error correction, and the "it-from-bit" / "spacetime-from-entanglement" programs. This layer ranges from [INFERENCE] (RT *within* AdS/CFT) to [SPECULATIVE]/[OPEN] (entanglement as the fundamental substrate of spacetime).

## Core formalism

### 1. Classical (Shannon) information theory — [ESTABLISHED]

A discrete random variable $X \sim p(x)$ over alphabet $\mathcal{X}$ has **Shannon entropy**
$$H(X) = -\sum_{x \in \mathcal{X}} p(x) \log p(x),$$
in bits if $\log = \log_2$, nats if natural. $H$ is the *unique* function (up to scale) satisfying continuity, monotonicity in $n$ for the uniform distribution, and the grouping/recursion axiom (Shannon 1948; Khinchin's axiomatization) [ESTABLISHED]. Operationally, $H(X)$ is the asymptotic optimal lossless compression rate: by the **Source Coding Theorem**, $N$ i.i.d. copies compress to $\approx N H(X)$ bits with vanishing error and no lower rate is achievable. The engine is the **Asymptotic Equipartition Property** (AEP): $-\tfrac{1}{N}\log p(X_1,\dots,X_N) \to H(X)$ in probability, concentrating measure on $\approx 2^{NH}$ "typical" sequences each of probability $\approx 2^{-NH}$.

Joint, conditional, relative entropy and mutual information:
$$H(X,Y) = -\sum p(x,y)\log p(x,y), \qquad H(X \mid Y) = H(X,Y) - H(Y),$$
$$D(p \Vert q) = \sum_x p(x)\log\frac{p(x)}{q(x)} \;\ge\; 0 \quad (\text{Gibbs' inequality}),$$
$$I(X;Y) = H(X) - H(X \mid Y) = H(X) + H(Y) - H(X,Y) = D\big(p(x,y) \Vert p(x)p(y)\big) \ge 0.$$
Mutual information is symmetric, vanishes iff $X \perp Y$, and equals the relative entropy from the joint to the product distribution — hence its nonnegativity.

A discrete memoryless channel $p(y \mid x)$ has **capacity** $C = \max_{p(x)} I(X;Y)$. The **Noisy Channel Coding Theorem** makes $C$ a sharp threshold: reliable communication is possible for any rate $R < C$ and impossible for $R > C$ [ESTABLISHED]. For the additive white Gaussian noise channel of bandwidth $B$, signal power $P$, noise power $N$, the **Shannon–Hartley** capacity is $C = B \log_2(1 + P/N)$.

The **data-processing inequality** (DPI): if $X \to Y \to Z$ is a Markov chain, then $I(X;Z) \le I(X;Y)$ [ESTABLISHED]. Post-processing cannot increase information about the source. Its quantum generalization (monotonicity of relative entropy under CPTP maps) is the structural backbone of the entropy bounds in gravity discussed below.

### 2. Kolmogorov (algorithmic) complexity — [ESTABLISHED] math, [OPEN] computability caveats

For a universal prefix Turing machine $U$, the **Kolmogorov complexity** of a finite string $x$ is
$$K(x) = \min\{ |p| : U(p) = x \},$$
the length of the shortest program outputting $x$. The **invariance theorem** gives $|K_U(x) - K_V(x)| \le c_{U,V}$ for any two universal machines, so $K$ is well-defined up to an additive constant [ESTABLISHED]. $K$ is **uncomputable** — no algorithm computes it for all $x$ (equivalent to undecidability of halting; the root of Chaitin's incompleteness results) [ESTABLISHED]. For a computable source, $\mathbb{E}[K(X)] = H(X) + O(1)$ [ESTABLISHED]. The distinction is conceptual: $H$ measures average uncertainty of an *ensemble*; $K$ measures the intrinsic descriptive content of a *single object*. For a single string there is no canonical "amount of information" — see [Where it breaks down](#where-it-breaks-down).

### 3. Quantum information — [ESTABLISHED]

A quantum system is a Hilbert space $\mathcal{H}$; a state is a density operator $\rho \succeq 0$, $\mathrm{Tr}\,\rho = 1$. A **qubit** is $\mathcal{H} = \mathbb{C}^2$, with pure states $|\psi\rangle = \alpha|0\rangle + \beta|1\rangle$ parameterized on the Bloch sphere. The **von Neumann entropy** is
$$S(\rho) = -\mathrm{Tr}(\rho \log \rho) = -\sum_i \lambda_i \log \lambda_i,$$
$\lambda_i$ the eigenvalues of $\rho$. $S = 0$ iff $\rho$ is pure; $S = \log d$ for the maximally mixed state. Key inequalities [ESTABLISHED]:

- **Subadditivity:** $S(\rho_{AB}) \le S(\rho_A) + S(\rho_B)$.
- **Araki–Lieb:** $S(\rho_{AB}) \ge |S(\rho_A) - S(\rho_B)|$.
- **Strong subadditivity (SSA)** (Lieb–Ruskai 1973): $S(\rho_{ABC}) + S(\rho_B) \le S(\rho_{AB}) + S(\rho_{BC})$, equivalently the conditional mutual information $I(A;C \mid B) \ge 0$. SSA is the deep theorem of the subject; nearly every entropy inequality in quantum gravity descends from it.

Unlike the classical case, $S(\rho_A)$ can exceed $S(\rho_{AB})$ when $AB$ is pure and entangled — the diagnostic of entanglement. The **quantum mutual information** is $I(A;B) = S(\rho_A) + S(\rho_B) - S(\rho_{AB}) \ge 0$, and the **quantum relative entropy** $S(\rho \Vert \sigma) = \mathrm{Tr}\,\rho(\log\rho - \log\sigma)$ is **monotone under any CPTP map** $\mathcal{N}$: $S(\mathcal{N}\rho \Vert \mathcal{N}\sigma) \le S(\rho \Vert \sigma)$ — the quantum DPI, equivalent in strength to SSA.

The **no-cloning theorem** (Wootters–Zurek, Dieks 1982): no unitary $U$ satisfies $U(|\psi\rangle|0\rangle) = |\psi\rangle|\psi\rangle$ for all $|\psi\rangle$ [ESTABLISHED]. Linearity plus inner-product preservation would force $\langle\psi|\phi\rangle = \langle\psi|\phi\rangle^2$, impossible for non-orthogonal, non-identical states. No-cloning underwrites quantum cryptography and the sharpness of the black-hole information puzzle.

**Teleportation** (Bennett et al. 1993): one shared Bell pair plus two classical bits transmits one unknown qubit exactly [ESTABLISHED]. The qubit is destroyed at the sender (consistent with no-cloning) and no superluminal signalling occurs (classical bits are required). **Superdense coding** is its dual: one qubit plus one Bell pair sends two classical bits.

For a **pure bipartite state**, the canonical entanglement measure is the **entanglement entropy** $E(|\psi\rangle_{AB}) = S(\rho_A) = S(\rho_B)$ (equal by the Schmidt decomposition $|\psi\rangle = \sum_i \sqrt{\lambda_i}\,|i\rangle_A |i\rangle_B$). For **mixed states**, inequivalent measures appear — entanglement of formation, distillable entanglement $E_D$, entanglement cost $E_C$, and the relative entropy of entanglement $E_R(\rho) = \min_{\sigma \in \mathrm{SEP}} S(\rho \Vert \sigma)$ — all reducing to $S(\rho_A)$ on pure states and obeying $E_D \le E_C$ with strict gaps (bound entanglement) [ESTABLISHED]. Asymptotically reversible LOCC manipulation holds for pure states ($E_D = E_C = S(\rho_A)$) but generally fails for mixed states.

**Entanglement entropy in QFT.** For a spatial region $A$, $S(\rho_A)$ of the reduced state is UV-divergent and obeys an **area law**: the leading divergence in $d$ spatial dimensions is $S \sim c\,\mathrm{Area}(\partial A)/\epsilon^{d-1}$ with cutoff $\epsilon$ [ESTABLISHED]. In a $1+1$ CFT, for an interval of length $\ell$, $S = \tfrac{c}{3}\log(\ell/\epsilon)$ with $c$ the central charge (Holzhey–Larsen–Wilczek; Calabrese–Cardy) [ESTABLISHED]. The area-law scaling is the bridge to the holographic entropy bounds. See [domains/quantum-field-theory.md](quantum-field-theory.md).

### 4. Thermodynamics of computation — [ESTABLISHED] core, [CONTESTED] interpretation

**Landauer's principle** (1961): erasing one bit in contact with a bath at temperature $T$ dissipates at least
$$\Delta Q \ge k_B T \ln 2$$
of heat, tying *logical* irreversibility (a many-to-one map on logical states) to *thermodynamic* irreversibility. The bound is derivable from phase-space contraction and from the Jarzynski/Crooks fluctuation theorems, and has been experimentally confirmed near saturation (colloidal-particle and single-spin experiments, c. 2012 onward) [ESTABLISHED]. Its logical *status* as an independent principle is [CONTESTED] (see breakdowns).

**Reversible computation** (Bennett 1973): any computation embeds in a logically reversible one (e.g. via the universal Toffoli gate) that, run quasi-statically, costs arbitrarily little energy per step — only erasure costs [ESTABLISHED]. The **Maxwell-demon / Szilard-engine resolution** (Szilard 1929; Landauer; Bennett 1982): the demon's apparent extraction of $k_B T \ln 2$ per bit of which-side information is repaid when its memory is reset, restoring the second law. The modern **Sagawa–Ueda generalized second law** reads $\langle W_{\rm ext}\rangle \le k_B T\,\Delta I$ — information is a thermodynamic resource convertible to work, demonstrated experimentally [ESTABLISHED]. See [domains/thermodynamics.md](thermodynamics.md) and [domains/statistical-mechanics.md](statistical-mechanics.md).

Physical limits on computation:

- **Margolus–Levitin theorem** (1998) [ESTABLISHED]: a system with mean energy $E$ above its ground state needs time $t_\perp \ge \tfrac{\pi\hbar}{2E}$ to reach an orthogonal state — a maximum rate of distinct operations $\le 2E/(\pi\hbar)$. Combined with the Mandelstam–Tamm bound $t_\perp \ge \tfrac{\pi\hbar}{2\Delta E}$, the operative speed limit is the $\min$ of the two.
- **Bremermann's limit** (1962) [INFERENCE/heuristic]: $\sim c^2/h \approx 1.36 \times 10^{50}$ bit s$^{-1}$ kg$^{-1}$, a back-of-envelope ceiling from $E = mc^2$ plus an energy–time argument, not a theorem.
- **Bekenstein bound** (1981) [INFERENCE]: $S \le \dfrac{2\pi k_B R E}{\hbar c}$ for a system of radius $R$ and energy $E$.
- **Holographic ('t Hooft–Susskind) bound** [INFERENCE]: maximal entropy is the boundary area in Planck units, $S_{\max} = \tfrac{k_B A}{4\ell_P^2}$, matching the **Bekenstein–Hawking** entropy $S_{\rm BH} = \tfrac{k_B c^3 A}{4 G \hbar} = \tfrac{k_B A}{4\ell_P^2}$. Lloyd's "ultimate laptop" combines Margolus–Levitin with Bekenstein into operations- and memory-bounds.

### 5. Holography, RT, and emergent spacetime

**Bousso covariant entropy bound** (1999) [INFERENCE]: entropy flux through a light-sheet (a null hypersurface of non-positive expansion) from a surface of area $A$ obeys $S \le A/4G\hbar$ (Planck units) — the covariant refinement of the holographic bound, reducing to Bekenstein in the appropriate limit.

**Ryu–Takayanagi (RT) formula** (2006) [INFERENCE, within AdS/CFT]: in a holographic CFT with AdS dual, the entanglement entropy of a boundary region $A$ is
$$S(A) = \frac{\mathrm{Area}(\gamma_A)}{4 G_N},$$
$\gamma_A$ the minimal bulk surface homologous to $A$. The covariant generalization is **HRT** (extremal surface), and the all-orders form is the **quantum extremal surface (QES)** prescription (Engelhardt–Wall): extremize $\mathrm{Area}/4G_N + S_{\rm bulk}$. RT geometrizes entropy — boundary SSA becomes a statement about minimal surfaces, and bulk geometry is reconstructible from boundary entanglement (entanglement-wedge reconstruction).

**Quantum error correction (QEC) and bulk emergence** [INFERENCE]: Almheiri–Dong–Harlow (2015) reframed AdS/CFT as a quantum error-correcting code — bulk interior operators are redundantly (nonlocally) encoded in the boundary, like logical qubits protected against boundary erasure. The **HaPPY code** (Pastawski–Yoshida–Harlow–Preskill) and random tensor networks realize RT-type entropies exactly in toy models. Subregion duality is sharpened by the **JLMS relation** (bulk/boundary relative entropies coincide) and by modular-flow / Petz-map reconstruction (Faulkner–Lewkowycz). See [domains/general-relativity.md](general-relativity.md).

**Entanglement as the fabric of spacetime** [SPECULATIVE]: Van Raamsdonk argued that reducing the mutual entanglement of two CFTs (the thermofield double) disconnects the dual spacetime, suggesting spatial connectivity is built from entanglement; the **ER=EPR** conjecture (Maldacena–Susskind) identifies entanglement with an Einstein–Rosen bridge. The linearized Einstein equations have been *derived* from the first law of entanglement, $\delta S_A = \delta\langle K_A\rangle$ (modular Hamiltonian $K_A$), in holographic setups (Faulkner–Guica–Hartman–Myers–Van Raamsdonk 2014; Jacobson's 1995 "Einstein equation of state" is the precursor) [SPECULATIVE as a route to full GR — only the linearized equations, under specific assumptions]. These are striking but framework-dependent results, not a complete theory.

## Foundational assumptions

| Assumption | Status | Justification |
|---|---|---|
| Information has an observer-independent measure $H$, fixed by the continuity/monotonicity/recursion axioms | fundamental | Shannon's uniqueness theorem and Khinchin's axiomatization single out $H$; its operational meaning (compression/communication limits) is proven and validated daily [ESTABLISHED]. |
| The logarithm and base-2 "bit" are the natural units of information | conventional-choice | The log form is *forced* by additivity over independent sources (fundamental); base-2 vs nats vs base-$d$ is pure convention. Physics uses $k_B \ln 2$ to bridge to thermodynamics. |
| States are density operators on a Hilbert space; information measures are spectral functions ($S(\rho)$) | fundamental | Follows from the Hilbert-space + Born-rule postulates; von Neumann entropy is singled out by Schumacher compression / the quantum AEP. Fundamental *conditional* on QM — whose finality is [OPEN]. |
| Gravitational entropy bounds scale with AREA, not volume (holographic principle) | likely-fundamental | $S_{\rm BH}$ is area-extensive on multiple independent derivations (Hawking, Euclidean action, string microstate counting, loop area spectra); area-law entanglement and the Bousso bound reinforce it. Near-universal [INFERENCE], but no general background-independent proof. |
| Landauer: logically irreversible ops cost $\ge k_B T \ln 2$ per erased bit | fundamental | Derivable from statistical mechanics and fluctuation theorems; measured near the bound. The *inequality* is fundamental [ESTABLISHED]; its status as an *independent* principle is [CONTESTED]. |
| Spacetime geometry is emergent from entanglement (RT / "it-from-qubit") | unclear | Rigorous only *within* AdS/CFT (negatively curved, asymptotically-AdS, large-$N$). RT/JLMS/QEC/first-law results are real there [INFERENCE]; generalization to our de Sitter-like universe is unknown [SPECULATIVE]. |
| AdS/CFT holds exactly: a bulk quantum-gravity theory equals a boundary CFT | likely-fundamental | Overwhelming consistent checks (symmetries, spectra, correlators, integrability, BH thermodynamics); proven in some low-$d$/BPS cases. No general nonperturbative proof — exactness/genericity [OPEN]. |
| ER=EPR: entanglement is a geometric (wormhole) connection | unclear | Bold unifying conjecture supported by traversable-wormhole and thermofield-double constructions, but [SPECULATIVE] — no first-principles derivation, status for generic entanglement unknown. |
| A physical Church–Turing thesis holds (no device computes a Turing-uncomputable function) | unclear | Suggested by all known physics but not a theorem; Malament–Hogarth spacetimes, real-valued analog computation, and hypercomputation proposals leave it [OPEN/CONTESTED]. The *efficient* thesis is separately challenged by quantum computing (BQP vs BPP). |
| Information is conserved (unitarity): pure $\to$ pure | fundamental | A pillar of quantum theory; the apparent conflict with BH evaporation is widely believed resolved in favor of unitarity (Page curve reproduced via QES/islands [INFERENCE]; AdS/CFT manifestly unitary). The mechanism in our universe is still being worked out. |
| The continuum (smooth fields/manifolds) is the fundamental substrate vs. a discrete "it-from-bit" description | historical-artifact | Continuum QFT/GR are spectacularly successful, but UV divergences, finite BH entropy, and holographic finiteness all hint the continuum is *effective*. Wheeler's "it from bit" suggests otherwise; arguably "unclear" rather than settled. |

See [ASSUMPTIONS_LEDGER.md](../ASSUMPTIONS_LEDGER.md) for the cross-domain ledger and [UNIFYING_PRINCIPLES.md](../UNIFYING_PRINCIPLES.md).

## Domain of validity

**Layer 1 (Shannon/Kolmogorov)** is mathematically exact with no physical domain restriction — it applies to any probabilistic source or string. Two caveats: (a) the operational theorems are *asymptotic* (i.i.d., large $N$), so finite-blocklength corrections (Polyanskiy–Poor–Verdú) matter for real codes; (b) $K(x)$ is uncomputable and thus a theoretical, not algorithmic, quantity.

**Layer 2 (quantum information)** is valid wherever non-relativistic or relativistic quantum theory holds; the operational primitives (no-cloning, teleportation, superdense coding, distillation) are experimentally confirmed to high precision. In continuum QFT, $S(\rho_A)$ is UV-divergent and requires a regulator, so only universal/finite pieces (mutual information, differences, central-charge coefficients) are cutoff-independent and physically meaningful.

**Layer 3 (thermodynamics of computation):** Landauer's bound holds in the quasi-static, weak-coupling, thermal-bath regime; it is a *lower* bound saturated only in the reversible limit at fixed $T$. Margolus–Levitin and Mandelstam–Tamm are exact theorems of unitary QM. The Bekenstein bound holds for weakly gravitating systems ($R$ larger than the Schwarzschild radius) and is saturated by black holes; where "radius" and "energy" become ambiguous (strong gravity, cosmology) the Bousso covariant bound is the correct statement.

**Layer 4 (RT/holography/emergent spacetime)** is rigorously formulated and tested essentially only within AdS/CFT: asymptotically anti-de Sitter spacetimes, large central charge / large $N$, strong 't Hooft coupling (Einstein-gravity regime), with a static (or HRT for time-dependent), homology-respecting setting; quantum corrections need QES/islands. Validity for de Sitter space (our accelerating universe), cosmological horizons, and non-holographic theories is **unestablished** — this is the central domain-of-validity frontier. See [domains/cosmology.md](cosmology.md).

## Where it breaks down

- **Continuum QFT entanglement entropy.** $S(\rho_A)$ is UV-divergent and the leading area-law term is regulator-dependent; only differences, mutual information, and universal coefficients are physical. More deeply, the local algebra of a QFT region is a **Type III$_1$ von Neumann factor**, on which no trace — and hence no standard density matrix or finite entropy — exists. The naive "entanglement entropy of a region" is ill-defined without specifying the operator algebra and a split/cutoff. This is structural, not merely calculational. [ESTABLISHED] (the obstruction); [OPEN] (the resolution).
- **Black-hole information paradox.** Hawking's semiclassical calculation predicts thermal (mixed) radiation from a pure collapse, implying non-unitary evolution — a genuine tension between EFT on a curved background and unitarity. QES/island computations now reproduce the unitary **Page curve** [INFERENCE], strongly suggesting EFT was applied outside its domain (missing replica-wormhole contributions), but a complete first-principles mechanism for a realistic, asymptotically-flat black hole is [OPEN]. See [domains/general-relativity.md](general-relativity.md).
- **Bekenstein bound in strong gravity / cosmology.** The bound presupposes a well-defined region radius and energy in a weakly-curved background; near horizons and in cosmological spacetimes these become observer-dependent and the bound loses sharp meaning. Bousso's light-sheet construction repairs this covariantly, but even it requires the expansion/light-sheet conditions and a suitable entropy-flux definition, and lacks a fully general first-principles proof. [INFERENCE].
- **RT/holography outside AdS.** De Sitter space, flat-space holography, and finite-$N$/stringy regimes have no established RT analog; applying "spacetime = entanglement" to cosmology is extrapolation, not derived physics. This is a domain-of-validity boundary, **not** an internal inconsistency. [OPEN].
- **Landauer — interpretive status.** Not a failure of the inequality (which is measured) but a [CONTESTED] claim about its logical standing: Earman–Norton and Hemmo–Shenker argue it is either a consequence of, or insufficient to independently rescue, the second law, and that the Maxwell-demon resolution admits inequivalent framings. The physics is agreed; the bookkeeping of where the irreducible cost "lives" is disputed.
- **Kolmogorov uncomputability / Shannon mismatch.** $K(x)$ is uncomputable and defined only up to a constant, so it cannot be operationalized for finite strings; the identity $\mathbb{E}[K] = H + O(1)$ holds only for computable sources, in expectation. There is no canonical "amount of information" for a single object.
- **Type III algebras and "a qubit of the field."** Because local subsystems are not tensor factors, much "entanglement as fabric of spacetime" discourse implicitly assumes a Type-I tensor-product structure the QFT lacks. Crossed-product / large-$N$ constructions (yielding Type II algebras with well-defined traces) partially repair this, but the foundational gap is real and recent. [OPEN].
- **ER=EPR and "spacetime from entanglement" as general claims.** No demonstration exists that *generic* entanglement produces a smooth geometric connection, nor that our universe is so constituted. The first-law derivation recovers only the *linearized* Einstein equations; the full nonlinear, background-independent reconstruction is not achieved. [SPECULATIVE].

## Open problems (internal)

- **BH information recovery in a realistic black hole.** [OPEN → partially INFERENCE]. The Page curve is reproduced via QES/islands and replica wormholes, indicating unitarity, but *how* information reaches an external observer, the role of the interior, and the firewall/complementarity debate remain unresolved. Islands are computed in controlled models, not yet shown to resolve the paradox in nature.
- **Does holography/RT extend beyond AdS — to de Sitter and cosmology?** [OPEN]. No established dS holographic dual or RT analog; dS/CFT proposals are far less constrained than AdS/CFT. Arguably the central open question of the program.
- **The correct definition of entanglement entropy in quantum gravity** given Type III algebras and no fundamental tensor factorization. [OPEN]. Crossed-product / "algebra of observables in gravity" constructions are promising but incomplete.
- **A physical realization of hypercomputation vs. a Church–Turing law of nature.** [OPEN/CONTESTED]. All proposed loopholes face severe physical-plausibility objections (infinite energy/precision, instability); no consensus, no decisive theorem.
- **Reconcile area-extensive (finite, holographic) gravitational degrees of freedom with the volume-extensive, infinite-dimensional Hilbert space of local QFT.** [OPEN]. The cosmological-constant problem, the species bound, and holographic finiteness all point to over-counting in continuum QFT; the precise reorganization (and whether spacetime is discrete) is unknown.
- **Derive the FULL nonlinear Einstein equations from entanglement/information principles, background-independently.** [OPEN/SPECULATIVE]. Linearized equations follow from entanglement first laws and Jacobson's thermodynamic derivation gives Einstein's equations as an equation of state, but a complete nonperturbative generic derivation is not in hand.
- **Is quantum mechanics itself derivable from information-theoretic axioms?** [OPEN]. Reconstructions (Hardy 2001; Chiribella–D'Ariano–Perinotti; Clifton–Bub–Halvorson "no signalling / no broadcasting / no bit commitment") derive QM from operational postulates — suggestive — but multiple inequivalent axiom sets succeed, so which (if any) is fundamental is open.

See [OPEN_PROBLEMS.md](../OPEN_PROBLEMS.md), [GAPS_AND_CONTRADICTIONS.md](../GAPS_AND_CONTRADICTIONS.md), and [HYPOTHESES.md](../HYPOTHESES.md).

## Connections to other frameworks

- **[domains/statistical-mechanics.md](statistical-mechanics.md) & [domains/thermodynamics.md](thermodynamics.md):** a deep structural identity — Gibbs/Boltzmann and Shannon entropy share the $-\sum p\log p$ form; Jaynes recast statistical mechanics as MaxEnt inference. Landauer and the fluctuation theorems (Jarzynski, Crooks, Sagawa–Ueda) make information a thermodynamic resource at $k_B T \ln 2$ per bit. The second law and relative-entropy monotonicity are reflections of the same arrow [INFERENCE on the depth of the identity].
- **[domains/quantum-mechanics.md](quantum-mechanics.md):** no-cloning, no-signalling, and monogamy of entanglement constrain what is operationally possible; the field both *uses* QM and seeks to *reconstruct* it. Decoherence and the Born rule are reinterpreted informationally (quantum Darwinism, Zurek).
- **[domains/general-relativity.md](general-relativity.md):** the strongest and most contested link — Bekenstein–Hawking entropy ties horizon area to information; holography, RT, and "spacetime from entanglement" propose geometry *is* organized entanglement; Jacobson derived Einstein's equations thermodynamically. Here the domain is most ambitious and least empirically grounded.
- **[domains/quantum-field-theory.md](quantum-field-theory.md) & string theory / AdS/CFT:** the concrete arena where RT, JLMS, entanglement-wedge reconstruction, QEC/HaPPY tensor networks, and the island formula are computable. Strominger–Vafa string microstate counting gave the first statistical-mechanical derivation of $S_{\rm BH}$, anchoring "it-from-bit" in a UV-complete theory. See also [domains/particle-physics.md](particle-physics.md).
- **[domains/mathematics.md](mathematics.md) & computer science:** Kolmogorov complexity, the Church–Turing thesis, and the extended (efficient) thesis bridge to CS; quantum computing challenges the efficient thesis. The "complexity = volume / complexity = action" conjectures (Susskind) speculatively link computational complexity to black-hole interiors [SPECULATIVE].
- **Condensed matter / many-body physics:** entanglement-entropy area laws, topological entanglement entropy (Kitaev–Preskill, Levin–Wen), and tensor networks (MERA, PEPS) connect the same structures to phases of matter; MERA's geometry inspired discrete holography.
- **[domains/cosmology.md](cosmology.md):** a clashing frontier — holographic and Bekenstein/Bousso bounds constrain the observable universe's information content; the de Sitter horizon has an entropy by analogy with black holes, but dS holography is unestablished. Whether "entanglement = geometry" survives in an accelerating, non-AdS universe is a live tension, not a settled connection.

See [UNIFICATION_LANDSCAPE.md](../UNIFICATION_LANDSCAPE.md), [CONSTANTS_AND_SCALES.md](../CONSTANTS_AND_SCALES.md), and [GLOSSARY.md](../GLOSSARY.md).

## Key references

Standard, real sources; consult [BIBLIOGRAPHY.md](../BIBLIOGRAPHY.md) for the consolidated list.

- C. E. Shannon, "A Mathematical Theory of Communication," *Bell System Technical Journal* (1948). — Founding paper: entropy, mutual information, source/channel coding theorems, capacity.
- T. M. Cover & J. A. Thomas, *Elements of Information Theory*, 2nd ed. (Wiley, 2006). — Canonical classical text: AEP, DPI, capacity, rate-distortion, Kolmogorov complexity.
- M. Li & P. Vitányi, *An Introduction to Kolmogorov Complexity and Its Applications* (Springer). — Definitive algorithmic information theory: invariance, incomputability, Chaitin.
- M. A. Nielsen & I. L. Chuang, *Quantum Computation and Quantum Information* (Cambridge, 2000/2010). — Standard quantum-information text.
- R. Landauer, *IBM J. Res. Dev.* **5**, 183 (1961); C. H. Bennett, *Int. J. Theor. Phys.* **21**, 905 (1982). — Landauer's principle; reversible computation / Maxwell-demon resolution.
- N. Margolus & L. B. Levitin, *Physica D* **120**, 188 (1998); S. Lloyd, *Nature* **406**, 1047 (2000). — Quantum speed limit; ultimate physical limits to computation.
- J. D. Bekenstein, *Phys. Rev. D* **23**, 287 (1981); L. Susskind, *J. Math. Phys.* **36**, 6377 (1995); R. Bousso, *Rev. Mod. Phys.* **74**, 825 (2002). — Bekenstein bound, holographic principle, covariant bound.
- S. Ryu & T. Takayanagi, *Phys. Rev. Lett.* **96**, 181602 (2006); V. Hubeny, M. Rangamani, T. Takayanagi, *JHEP* **0707**, 062 (2007). — RT and HRT formulas.
- A. Almheiri, X. Dong, D. Harlow, *JHEP* **04** (2015) 163; F. Pastawski, B. Yoshida, D. Harlow, J. Preskill, *JHEP* **06** (2015) 149. — AdS/CFT as QEC; HaPPY code.
- M. Van Raamsdonk, *Gen. Rel. Grav.* **42**, 2323 (2010); T. Jacobson, *Phys. Rev. Lett.* **75**, 1260 (1995); J. Maldacena & L. Susskind, *Fortsch. Phys.* **61**, 781 (2013). — Spacetime from entanglement; Einstein equation of state; ER=EPR.
- S. W. Hawking, *Commun. Math. Phys.* **43**, 199 (1975); D. N. Page, *Phys. Rev. Lett.* **71**, 3743 (1993); G. Penington (2020); Almheiri–Engelhardt–Marolf–Maxfield (2020). — Information paradox, Page curve, islands/QES.
- E. H. Lieb & M. B. Ruskai, *J. Math. Phys.* **14**, 1938 (1973). — Proof of strong subadditivity.
- J. A. Wheeler, "Information, Physics, Quantum: The Search for Links" (1990). — The "it from bit" manifesto.

## See also

- [README.md](../README.md) · [AGENTS.md](../AGENTS.md) · [THEORY_MAP.md](../THEORY_MAP.md) · [EPISTEMICS.md](../EPISTEMICS.md)
- [domains/quantum-mechanics.md](quantum-mechanics.md) · [domains/quantum-field-theory.md](quantum-field-theory.md) · [domains/general-relativity.md](general-relativity.md)
- [domains/thermodynamics.md](thermodynamics.md) · [domains/statistical-mechanics.md](statistical-mechanics.md) · [domains/cosmology.md](cosmology.md)
- [domains/particle-physics.md](particle-physics.md) · [domains/mathematics.md](mathematics.md) · [domains/classical-mechanics.md](classical-mechanics.md)
- [UNIFICATION_LANDSCAPE.md](../UNIFICATION_LANDSCAPE.md) · [UNIFYING_PRINCIPLES.md](../UNIFYING_PRINCIPLES.md) · [OPEN_PROBLEMS.md](../OPEN_PROBLEMS.md) · [GAPS_AND_CONTRADICTIONS.md](../GAPS_AND_CONTRADICTIONS.md) · [HYPOTHESES.md](../HYPOTHESES.md)
- [ASSUMPTIONS_LEDGER.md](../ASSUMPTIONS_LEDGER.md) · [CONSTANTS_AND_SCALES.md](../CONSTANTS_AND_SCALES.md) · [FINDINGS.md](../FINDINGS.md) · [GLOSSARY.md](../GLOSSARY.md) · [ROADMAP.md](../ROADMAP.md) · [CHANGELOG.md](../CHANGELOG.md)

## References

See [BIBLIOGRAPHY.md](../BIBLIOGRAPHY.md) for the consolidated, canonical reference list across the wiki.
