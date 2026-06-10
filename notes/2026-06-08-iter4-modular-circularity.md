# Break the Bisognano–Wichmann/CHM circularity: geometry from non-symmetric modular flow? (OP-46)

Status: ATTEMPT executed — the deepest reorganization-vs-generation test (OP-46 clause (iii)) is carried out and the obstruction is SHARPENED, per-route, from "no surveyed construction satisfies it" (iteration 3) to a conditional near-no-go: under the standard stress-tensor-flux readout, clause (iii) is unsatisfiable-by-construction. Net: PROMOTED toward a no-go for clause (iii), short of a full theorem; the single live escape (a non-CKV readout on a non-symmetric state) is precisely located.
Last updated: 2026-06-08
Iteration: 4

This note executes the iteration-3 open subquestion #3 of [2026-06-08-iter3-encode-vs-generate-criterion.md](2026-06-08-iter3-encode-vs-generate-criterion.md) ("does any $(\mathcal{A},\omega)$ pair with **non-symmetric** modular flow yield emergent geometry, satisfying clause (iii)?"). It targets **OP-46 clause (iii)** — the *reorganization-vs-generation* falsifier — and asks the sharpest possible question: can a **non-geometric** (non-BW / non-Hadamard / non-CHM) Tomita–Takesaki modular flow *output* a semiclassical Killing/boost generator and a horizon, as the only thing that would upgrade the modular / crossed-product program from "encode" to "generate"? It sharpens the **Borchers–Wiesbrock** route (half-sided modular inclusion $\Rightarrow$ positive-energy translation) and asks whether that route genuinely *generates* causal / translation structure from neutral algebraic data, or still presupposes a positivity / vacuum input.

> Scope honesty (folded from referee): the near-no-go below is **conditional on the standard geometric readout** $K = 2\pi\int_\Sigma \xi^\mu T_{\mu\nu}\,d\Sigma^\nu$. It is **not** a no-go over all conceivable readouts. The Cao–Carroll mutual-information/MDS readout and a relative-entropy / Connes-spectral-distance readout are untouched by the Sorce CKV theorem and remain the live escape. Two of the underlying facts are theorem-grade and web-verified (Borchers 1992 / Wiesbrock 1993; Sorce 2024); the chaining inference between them is supplied here and is tagged `[INFERENCE]`.

---

## Goal

Decide whether ANY pair $(\mathcal{A}, \omega)$ — a von Neumann algebra with cyclic-separating $\Omega$ — whose modular flow $\sigma_t$ is **not** a known geometric (Bisognano–Wichmann / Hislop–Longo / CHM / Hadamard) flow can nonetheless have a semiclassical boost/Killing structure and a horizon **recovered as output**. This is the precise content of OP-46 clause (iii) (the circularity-falsifier of [2026-06-08-iter3-encode-vs-generate-criterion.md](2026-06-08-iter3-encode-vs-generate-criterion.md), line 102): geometry must vary nontrivially over **non-symmetric** states, or the whole modular program is reconstruction, not generation.

Concretely:
1. Build the cleanest "generation candidate" — discard the entropy/observer machinery and demand only causal/translation **output** — and find the exact step at which geometry re-enters. `[goal]`
2. Determine whether Borchers–Wiesbrock *generates* or merely *relocates* the positivity/geometric input. `[goal]`
3. Decide the status of clause (iii) under the standard readout, and name the escape hatch if there is one. `[goal]`

---

## Setup (real math)

Standard data $\mathcal{D} = (\mathcal{A}, \Omega)$: a von Neumann algebra $\mathcal{A}$ with cyclic-separating vector $\Omega$. The Tomita operator $S = J\Delta^{1/2}$ (closure of $a\Omega \mapsto a^\dagger\Omega$) supplies the modular conjugation $J$ and the modular operator $\Delta$. The **modular Hamiltonian** is $K = -\log\Delta$, the **modular flow** is
$$
\sigma_t(a) = \Delta^{it}\, a\, \Delta^{-it},
$$
a one-parameter automorphism group satisfying the KMS condition at inverse temperature $\beta = 1$ w.r.t. $\omega = \langle\Omega,\,\cdot\,\Omega\rangle$. `[ESTABLISHED]` (Tomita–Takesaki; see [../domains/mathematics.md](../domains/mathematics.md).)

**"Geometric" modular flow** means $\sigma_t$ acts by a point diffeomorphism $\phi_t$ of an underlying region — equivalently
$$
K \;=\; 2\pi \int_\Sigma \xi^\mu\, T_{\mu\nu}\, d\Sigma^\nu
$$
for some vector field $\xi$. This is the **standard geometric readout**: the map "modular Hamiltonian $\to$ geometry" through identification with the stress-tensor flux of $\xi$.

Two load-bearing theorems frame clause (iii).

### Theorem 1 (GEOMETRIC $\Rightarrow$ CKV)

If $\sigma_t$ is geometric on a causally complete region $\mathcal{V}$, the generating field $\xi$ is necessarily a **future-directed conformal Killing vector** of the background:
$$
\nabla_\mu \xi_\nu + \nabla_\nu \xi_\mu \;=\; \frac{2}{d}\,(\nabla\!\cdot\!\xi)\, g_{\mu\nu},
\qquad \xi^2 < 0 .
$$
When $\xi$ is not a true isometry, the trace condition forces $T^\mu{}_\mu = 0$, i.e. a genuine CFT. `[ESTABLISHED]` (Sorce 2024, arXiv:2403.18937 — *sole author*; explicit 2d constructions Caminiti–Capeccia–Ciambelli–Myers, arXiv:2502.02633, JHEP 08 (2025) 166, eq. (8); the older anisotropic-Unruh input is Arias–Casini–Huerta–Pontello, arXiv:1707.05375.)

> Citation correction (referee, severity minor): the iteration-3 verdict table and earlier drafts attributed this to an "Arias–Sorce CKV theorem." **No Arias–Sorce coauthored paper exists.** The geometric-modular-flow $\Rightarrow$ CKV result is **Sorce alone** (arXiv:2403.18937); "Arias" appears in the *different* Blanco–Casini–Huerta-adjacent local-modular / local-temperature line (Arias et al., arXiv:1707.05375) and was conflated. Attribute to **Sorce 2024**, with Caminiti et al. 2502.02633 for the explicit 2d realization. `[corrected]`

### Theorem 2 (POSITIVITY $\Leftrightarrow$ MODULAR-GEOMETRY — the Borchers–Wiesbrock characterization)

For $\mathcal{A}$ a wedge algebra with $\Omega$ invariant under a one-parameter unitary group $U(a)$, the spectrum condition $P \ge 0$ implies the commutation relations
$$
\Delta^{it}\, U(a)\, \Delta^{-it} = U(e^{-2\pi t}\, a),
\qquad
J\, U(a)\, J = U(-a).
$$
This forward direction is **Borchers 1992** (CMP 143, 315). The **converse** — and the statement that a $\pm$half-sided modular inclusion is *equivalent* to such a positive-generator translation — is **Wiesbrock 1993** (CMP 157, 83; gap filled Araki–Zsidó 2004, arXiv:math/0412061). Together they form the biconditional $P\ge0 \Leftrightarrow$ modular commutation relation. `[ESTABLISHED]`

> Attribution precision (referee): naming the equivalence "the Borchers biconditional" is defensible shorthand but conflates Borchers' *forward* theorem with the *Wiesbrock converse* that actually supplies "one premise, not two." This note writes **Borchers–Wiesbrock characterization** throughout. The three modular groups of a modular inclusion/intersection generate $PSL(2,\mathbb{R})$ (Lashkari–Leung–Moosa–Ouseph 2024, arXiv:2412.19882, JHEP 10 (2025) 153). `[corrected]`

---

## The attempt

I attempt to **build** the generation candidate and find the exact step at which it imports geometry.

### Step A — set up the cleanest candidate

Discard the entropy/observer machinery; demand only causal/translation **output**. The strongest engine is a **half-sided modular inclusion (HSMI)**:
$$
\mathcal{N} \subset \mathcal{M}, \quad \text{shared cyclic-separating } \Omega, \quad
\Delta_{\mathcal{M}}^{it}\, \mathcal{N}\, \Delta_{\mathcal{M}}^{-it} \subset \mathcal{N} \ \text{ for } t \le 0 .
$$
Borchers–Wiesbrock then **outputs** a one-parameter unitary $U(a)$, $a \ge 0$, with generator
$$
P \;=\; \frac{1}{2\pi}\big(\log\Delta_{\mathcal{N}} - \log\Delta_{\mathcal{M}}\big) \;\ge\; 0,
\qquad
\Delta_{\mathcal{M}}^{it}\, U(a)\, \Delta_{\mathcal{M}}^{-it} = U(e^{-2\pi t}\, a).
$$
The pair $\{\log\Delta_{\mathcal{M}},\, P\}$ closes into the $ax{+}b$ (boost $+$ translation) Lie algebra; a *second* inclusion gives $PSL(2,\mathbb{R})$ (Lashkari et al. 2412.19882). So from algebraic inclusion data one **outputs** a positive-energy translation and a chunk of conformal symmetry — genuinely as output. **This is the maximal honest "generation."** `[ESTABLISHED inputs; INFERENCE that this is the maximal candidate, high]`

> Scope (referee): a **single** HSMI yields only the $ax{+}b$ pair (one boost $+$ one positive translation), **not** a full Killing/Möbius algebra; the Möbius/$PSL(2,\mathbb{R})$ and Poincaré groups require $\ge 2$ HSMIs (Wiesbrock; Guido–Longo–Wiesbrock; Lashkari et al.). The "+ horizon" language below is the special Rindler/CHM case, not delivered by one HSMI. `[corrected]`

### Step B — locate the smuggle precisely

The HSMI hypothesis is exactly $\Delta_{\mathcal{M}}^{it}\mathcal{N}\Delta_{\mathcal{M}}^{-it} \subset \mathcal{N}$ for **one sign of $t$ only**. By the Borchers–Wiesbrock characterization this half-sidedness is **logically equivalent** to the spectrum condition $P \ge 0$. Hence the input is *not* "neutral inclusion data": choosing a half-sided (rather than two-sided) inclusion **is** choosing energy positivity. The generated $U(a)$ inherits its positivity from the premise; nothing is created. **Positivity and half-sidedness are one premise, not two.** `[ESTABLISHED — Wiesbrock biconditional]`

### Step C — promote to a near-theorem for clause (iii)

Chain the two theorems. Suppose a state $\omega$ has modular flow that is **not** geometric (the clause-(iii) hypothesis). To "recover a semiclassical boost/Killing structure $+$ horizon as output" under the standard readout, one must produce a vector field $\xi$ with $K = 2\pi\int \xi^\mu T_{\mu\nu}$ generating the recovered flow. But **Theorem 1** says any such geometric $\xi$ is a CKV — a (conformal) symmetry of *some* metric, hence existing only on a (conformally) symmetric background. Therefore the readout step that turns modular data into a Killing/boost generator can succeed **only where a CKV exists**, i.e. on a (conformally) symmetric background.

Consequence: **NON-geometric modular flow $\Rightarrow$ no CKV available $\Rightarrow$ the boost/horizon readout has no target to land on.** The would-be "generation from a non-symmetric state" is, on this readout, **unsatisfiable-by-construction**: the very object it must output (a CKV / horizon) presupposes the symmetric structure whose absence defined the non-geometric case. `[INFERENCE, medium–high — chains two established theorems; the chaining step is supplied here]`

> Word choice (referee): "VACUOUS" was the iteration-internal label; the precise statement is **"self-undercutting / unsatisfiable-by-construction *for the geometric readout*"** — the clause has content, it is just unmeetable by that one readout. Adopted below.

### Step D — test the recovery candidates against this

- **(i) Kabat–Lifschytz, arXiv:1812.02915** ("Emergence of spacetime from the algebra of total modular Hamiltonians"). A bulk point $=$ a weakly-maximal Lie subalgebra of total modular Hamiltonians; the metric is recovered **up to a conformal factor**, the conformal factor fixed only from the (presupposed) extremal-surface equation. Input $=$ the CFT **vacuum** $+$ the conformal algebra. This is recovery of a *presupposed* AdS dual, satisfying $g_3$ (symmetric vacuum). **Recovery, not generation.** `[ESTABLISHED]`
- **(ii) Lashkari et al., arXiv:2412.19882.** Modular inclusion $\Rightarrow PSL(2,\mathbb{R})$, but on conformal GFF in the **vacuum** — positivity implicit; the "emergence" of AdS$_2$ is a geometric *reinterpretation* of a non-local Hilbert transform, not generation from non-geometric data. `[ESTABLISHED]`
- **(iii) Leutheusser–Liu, arXiv:2110.05497 / 2112.12156** (*Phys. Rev. D* 108, 086020 (2023)). Emergent interior infalling time $+$ a sharp horizon at strict $N=\infty$ from an emergent Type III$_1$ algebra and the half-sided modular translation; positivity inherited from the boundedness-below of the **boundary** CFT Hamiltonian on a fixed AdS/TFD background. `[ESTABLISHED]`

All three confirm Step C: the symmetric/positive input re-enters at the readout. `[INFERENCE]`

---

## Where it breaks / what moved

**didItMove = sharpened-obstruction.**

The construction breaks at **Step C's readout map**, and the break is now SHARP (per-route) rather than merely suspected. Two independent gates close on the same point.

**Gate 1 (HSMI route).** The Borchers–Wiesbrock characterization collapses "purely algebraic inclusion data" into "energy positivity": a half-sided (vs. two-sided) modular inclusion is *equivalent* to $P\ge0$ (Borchers 1992; Wiesbrock 1993). So Borchers–Wiesbrock **RELOCATES rather than REMOVES** the positivity input — it does not generate a causal structure from neutral data; it converts an assumed spectrum condition into an $ax{+}b$ / $PSL(2,\mathbb{R})$ group. The generated translation is positive *because the premise was*. A single HSMI yields only the $ax{+}b$ pair, not a Killing/horizon algebra. `[ESTABLISHED]`

**Gate 2 (geometric readout).** The Sorce CKV theorem closes the other gate: the readout "modular data $\to$ boost/Killing generator $+$ horizon" can only produce a **conformal Killing vector**, which exists only on a (conformally) symmetric background. A genuinely non-geometric modular flow (the clause-(iii) hypothesis) furnishes **no CKV**, so there is nothing for the horizon/boost readout to recover. `[INFERENCE on the consequence; ESTABLISHED lemma]`

**Net.** *Relative to the stress-tensor-flux readout*, the encode$\to$generate frontier coincides with the presence of a positivity/CKV input, and that input is provably equivalent (**per route**) to the geometric structure one hoped to derive. Clause (iii) is therefore **unsatisfiable-by-construction for this readout** — not merely unmet.

> What did NOT move (referee scope check): this is **not** a no-go over all readouts. The CKV theorem only constrains the readout "modular $=$ $T$-flux of a vector field." It leaves untouched non-geometric readouts — the Cao–Carroll mutual-information/MDS spatial metric, or a relative-entropy / algebraic-invariant readout — which iteration 3 already classified as *closest-to-generate* **without** a CKV (see [2026-06-08-iter3-encode-vs-generate-criterion.md](2026-06-08-iter3-encode-vs-generate-criterion.md), construction (d)). The "equivalent" claim is precise **per route**, not globally for the program. `[corrected scope]`

---

## Furthest defensible claim

`[INFERENCE]` Under the **stress-tensor-flux geometric readout** ($K = 2\pi\int_\Sigma \xi^\mu T_{\mu\nu}\,d\Sigma^\nu$), any recovery of a semiclassical boost/Killing structure and horizon from modular data **requires a conformal Killing vector** (Sorce 2024; Caminiti et al. 2502.02633); and via the half-sided-modular-inclusion route the requisite positive translation is, by the Borchers–Wiesbrock characterization, **logically equivalent** to the energy-positivity that the half-sidedness assumption already encodes (Borchers 1992; Wiesbrock 1993). Therefore Borchers–Wiesbrock **relocates rather than removes** the geometric input, and **OP-46 clause (iii)** — geometry as output from a genuinely non-geometric (non-CKV) modular flow — is **unsatisfiable-by-construction for this readout**: the demanded output (a CKV/horizon) presupposes the symmetric structure whose absence defines the hypothesis. **No $(\mathcal{A},\omega)$ pair is known, and under this readout none can in principle, turn "encode" into "generate."**

Scope, stated explicitly: the universal "in principle" is supported **only for the named (T-flux) readout**. As a claim over *all* readouts it is unsupported by the cited theorems and conflicts with the iteration-3 Cao–Carroll closest-to-generate verdict — so it is deliberately *not* asserted globally. Confidence: **high** that no current construction generates Lorentzian spacetime from non-geometric modular flow; **medium** that the unsatisfiability is a true no-go rather than a limitation of the standard readout (it is conditional on that readout, and the two underlying theorems, though web-verified, are chained by an inference supplied here).

---

## If it fails / weaker statement

- **If a proponent rejects the standard readout** — e.g. defines "geometry recovered" via an **information metric / modular Berry curvature** (Czech–Lamprou–McCandlish–Sully, arXiv:1712.07123; Czech et al. arXiv:2305.16384) or a **Connes spectral distance**, not via a stress-tensor CKV — then the Sorce gate (Gate 2) is **bypassed** and clause (iii) is no longer unsatisfiable. The burden then becomes sharply isolated: exhibit a **non-symmetric** $\omega$ whose modular-Berry / spectral data yields a **Lorentzian** metric. `[OPEN — this is the genuinely live research target]`
- **Fallback weaker claim that still holds:** even then, every existing such construction (Kabat–Lifschytz; modular-Berry; Connes reconstruction) presupposes either the vacuum/conformal algebra **or** recovers only a **Riemannian** spin$^c$ manifold. Connes' reconstruction theorem (arXiv:0810.2088, J. Noncommut. Geom. 7 (2013) 1–82) yields a closed Riemannian — *not* Lorentzian — manifold, so the Lorentzian-signature $+$ causal-order output (N4 of iteration 3) remains unachieved. The near-theorem then degrades gracefully to the iteration-2/3 survey verdict: **positivity/symmetry input is empirically universal across all recovery routes**, pending a non-CKV readout. `[INFERENCE]`
- **Hardness, not forbiddenness (referee):** Connes 0810.2088 closes the *Riemannian* case; a Lorentzian output is **OPEN, not forbidden**. Lorentzian / pseudo-Riemannian spectral-triple programs (Krein-space Dirac operators; Paschke–Verch; van den Dungen; Besnard–Bizi causality) make the second-stage burden *unsolved-but-consistent*, not a no-go. `[OPEN]`

---

## Proposed registry items (with referee verdicts)

### GAP-LL-ENERGY-POSITIVITY-R2 — (gap-refinement)

**Statement.** Refinement of GAP-LL-ENERGY-POSITIVITY (iter-3). The Leutheusser–Liu / Borchers–Wiesbrock positivity premise is not an input independent of the half-sidedness of the modular inclusion: by **Wiesbrock's characterization** (CMP 157 (1993) 83; converse to Borchers 1992, CMP 143, 315), a half-sided modular inclusion is **equivalent** to a one-parameter translation with positive generator obeying $\Delta^{it}U(a)\Delta^{-it}=U(e^{-2\pi t}a)$. Hence positivity and half-sidedness are **one premise** `[ESTABLISHED]`, and a single HSMI yields only the $ax{+}b$ pair, not a full Killing/Möbius algebra (which needs $\ge2$ HSMIs) `[ESTABLISHED]`. Consequently the HSMI route does not supply causal structure from premise-free neutral algebraic data; it **converts** an assumed spectrum condition into the $ax{+}b$ / $PSL(2,\mathbb{R})$ group (Lashkari et al. 2412.19882).

**Referee verdict: KEEP — severity MINOR — tag `[INFERENCE]` for the interpretive core (with a `[CONTESTED]` sub-element); the bare algebraic facts — Wiesbrock biconditional, single-HSMI $\to$ $ax{+}b$ — are `[ESTABLISHED]`. NOT `[ESTABLISHED]` as a whole.** Corrections folded in: (1) attribute the *equivalence* to the **Wiesbrock converse**, not "Borchers' biconditional" — Borchers 1992 proves only the forward direction. (2) The phrase "does not GENERATE / converts not generates" **over-reads**: it flattens the iter-3 PARTIAL verdict (LL genuinely outputs interior time $+$ horizon location) into pure ENCODE; the iter-3 PARTIAL verdict is **not overturned**. (3) Whether $P\ge0$ is a "relocated *geometric* (boost/Killing) input" versus an independent positivity/stability axiom is **`[CONTESTED]`** (the iter-3 referee took the latter view). All three citations verified real.

### HYP-CKV-VACUITY — (new-hypothesis)

**Statement.** Clause-(iii) self-undercutting (near-theorem). Under the standard geometric readout $K=2\pi\int_\Sigma\xi^\mu T_{\mu\nu}\,d\Sigma^\nu$, recovering a semiclassical boost/Killing structure $+$ horizon from modular data requires a future-directed conformal Killing vector (Sorce 2024, arXiv:2403.18937; Caminiti et al. 2502.02633; older input Arias et al. 1707.05375). A genuinely non-geometric modular flow furnishes no CKV. Therefore OP-46 clause (iii) — geometry as OUTPUT from a non-symmetric (non-CKV) state — is **unsatisfiable-by-construction for this readout**: the demanded output presupposes the symmetric structure whose absence defines the hypothesis. To escape, one must adopt a non-CKV readout (modular-Berry information metric, Czech et al.; or a Connes spectral distance), at which point the open burden is exhibiting a non-symmetric state whose such data yields a **Lorentzian** metric (Connes reconstruction, 0810.2088, yields only Riemannian).

**Referee verdict: KEEP — severity MINOR — tag `[INFERENCE]` (resting on an `[ESTABLISHED]` lemma).** Corrections folded in: (1) **citation** — "Arias 2016 / Sorce 2020" garbled; the CKV theorem is **Sorce alone** (arXiv:2403.18937); Arias et al. is arXiv:1707.05375 (2017, not 2016); Caminiti et al. = 2502.02633 (4 Feb 2025), real and already in the iter-4 dS note. (2) **"VACUOUS" $\to$ "self-undercutting / unsatisfiable-by-construction for the geometric readout"** — the clause has content, it is just unmeetable by that one readout. (3) **"near-theorem" overstates status** — the core (geometric readout $\Rightarrow$ CKV $\Rightarrow$ symmetric $\Rightarrow$ clause (iii) unmeetable) is a clean `[INFERENCE]` on an `[ESTABLISHED]` lemma, but the escape-route half (non-CKV readouts could yield geometry) is asserted, not shown; the item is inference $+$ open burden. (4) Margin note: Caminiti et al. show *some* non-vacuum states still have geometric (CKV) modular flow w.r.t. suitable subregions, so "non-symmetric $\Leftrightarrow$ non-geometric" is not exact.

### GAP-NCG-LORENTZIAN-SIGNATURE — (gap-refinement)

**Statement.** Connes' reconstruction theorem (A. Connes, "On the spectral characterization of manifolds," arXiv:0810.2088; J. Noncommut. Geom. 7 (2013) 1–82) reconstructs, from a commutative spectral triple satisfying the five axioms, a closed oriented smooth **Riemannian** manifold — positive-definite/Euclidean signature (spin$^c$ in general; spin once the real-structure axioms / charge conjugation $J$ with the KO-dimension sign table are imposed). It does **not** produce Lorentzian signature or a causal order. Hence the spectral-triple / NCG route, like Cao–Carroll's MDS embedding, fails OP-46 necessary-condition **N4** (Lorentzian signature $+$ causal order) at the **signature step**. Obtaining Lorentzian/pseudo-Riemannian geometry from spectral data (Krein-space Dirac operators, Lorentzian spectral triples) is a separate, unfinished program with no established analogue of the reconstruction theorem.

**Referee verdict: KEEP — severity MINOR — tag `[ESTABLISHED]` for the Euclidean-output and citation claims; `[OPEN]` for the Lorentzian program.** Only fix: replace "**spin** manifold" with "**spin$^c$** (spin, if the real structure $J$ is included) manifold" — the bare commutative theorem delivers spin$^c$; a genuine spin structure additionally needs the real/KO-dimension axioms. The signature conclusion is unaffected: Riemannian either way, so N4 fails at the signature step regardless. Citation `(arXiv:0810.2088, 2013)` correctly cites the journal year.

---

## Verdict

**PROMOTED toward a no-go for clause (iii), short of a full theorem.** The deepest reorganization-vs-generation test sharpens decisively *per route*: there is **NO** known $(\mathcal{A},\omega)$ pair with non-geometric modular flow that outputs a semiclassical Killing/boost $+$ horizon, and — stronger than iteration 3 — **under the standard geometric (stress-tensor-flux) readout this is unsatisfiable-by-construction**, because (a) the **Sorce / Caminiti** theorem forces any recovered boost generator to be a conformal Killing vector (hence to presuppose a symmetric background), and (b) the **Borchers–Wiesbrock** characterization makes the Borchers–Wiesbrock "generation" of a positive translation logically equivalent to the energy-positivity that the half-sided inclusion already assumes.

Borchers–Wiesbrock and the 2024 Lashkari et al. $PSL(2,\mathbb{R})$ result are genuine **generation of a symmetry GROUP from positivity** — but positivity is the relocated geometric premise, so they do **not** turn "encode" into "generate" for *spacetime*. Kabat–Lifschytz recovers the bulk metric only up to a conformal factor from the symmetric CFT vacuum (recovery, $g_3$ true). Connes' reconstruction yields only a Riemannian spin$^c$ manifold (fails N4).

**Program A status** (the modular / crossed-product program, [2026-06-08-algebraic-background-independence.md](2026-06-08-algebraic-background-independence.md)): it remains a **rigorous reorganization that ENCODES geometry**. The single escape hatch is a **non-CKV readout** (modular Berry / spectral distance) applied to a genuinely non-symmetric state — currently unrealized, and even if realized must still cross the Lorentzian-signature barrier (Connes gives only Riemannian).

Confidence: **HIGH** that no current construction generates Lorentzian spacetime from non-geometric modular flow; **MEDIUM** that the unsatisfiability is a true no-go rather than a limitation of the standard readout (it is conditional on that readout, and the two underlying theorems, though web-verified, are chained by an inference supplied here).

This upgrades iteration-3 open subquestion #3 from `[OPEN]` to a **conditional near-theorem** (unsatisfiable under the standard readout) with a precisely-named escape hatch (non-CKV readout) that defines the genuinely live research target. It is the modular-flow counterpart of the iteration-4 dS finding ([2026-06-08-iter4-dS-firstlaw-SO-family-attempt.md](2026-06-08-iter4-dS-firstlaw-SO-family-attempt.md)): geometric modular content exists "only where geometry is pre-installed via a conformal/Killing symmetry."

---

## Open subquestions

1. Is there a **non-CKV readout** (modular Berry curvature / quantum information metric, Czech et al. 2305.16384; or a **Lorentzian** Connes spectral distance) under which a genuinely non-symmetric state's modular data yields a Lorentzian metric — escaping the Sorce-gate? This is the precisely-located live target for clause (iii). `[OPEN]`
2. Can the Borchers–Wiesbrock characterization be turned into a sharp **theorem**: "any algebraic derivation of a positive-energy translation from modular-inclusion data is equivalent to assuming the spectrum condition," closing the relocation loophole formally rather than by inference? `[OPEN]`
3. Does a Lorentzian / pseudo-Riemannian spectral triple (Krein-space Dirac operator) admit a reconstruction theorem analogous to Connes' Riemannian one, and if so does it require a presupposed causal/time-orientation input (an analog of $g_4$)? `[OPEN]`
4. For the emergent Type III$_1$ at large $N$ (Leutheusser–Liu): is the $N=\infty$ positivity an independent stability axiom or fully inherited from boundary-Hamiltonian boundedness — i.e. is the horizon an emergent OUTPUT or an imprint of the assumed bounded-below boundary spectrum? `[OPEN]`
5. Does Connes–Rovelli thermal time (Class. Quantum Grav. 11, 2899 (1994), arXiv:gr-qc/9406019) plus the state-independent Connes-cocycle (Radon–Nikodym) flow ever upgrade from a posited time **direction** to a metric/causal order without adding a factorization or symmetry input — i.e. can it pass N4 unaided? `[OPEN]`

---

## See also

- [2026-06-08-iter3-encode-vs-generate-criterion.md](2026-06-08-iter3-encode-vs-generate-criterion.md) — iteration-3 parent; OP-46 criterion, clause (iii), the six-construction classification, GAP-LL-ENERGY-POSITIVITY this refines.
- [2026-06-08-iter4-dS-firstlaw-SO-family-attempt.md](2026-06-08-iter4-dS-firstlaw-SO-family-attempt.md) — sibling iteration-4 attempt; "geometric flow only where a conformal/Killing symmetry is pre-installed" (2502.02633) in dS dress.
- [2026-06-08-algebraic-background-independence.md](2026-06-08-algebraic-background-independence.md) — Program A; "rigorous reorganization, not derivation"; CLPW crossed product; relocating-not-removing input.
- [2026-06-08-iter3-synthesis.md](2026-06-08-iter3-synthesis.md) — cross-program synthesis; encode-vs-generate meta-verdict.
- [../OPEN_PROBLEMS.md](../OPEN_PROBLEMS.md) — OP-46 (this track); clause (iii) status update.
- [../GAPS_AND_CONTRADICTIONS.md](../GAPS_AND_CONTRADICTIONS.md) — GAP-LL-ENERGY-POSITIVITY (iter-3) and -R2 (here); GAP-NCG-LORENTZIAN-SIGNATURE.
- [../HYPOTHESES.md](../HYPOTHESES.md) — H4 (geometry/time from algebra); HYP-CKV-VACUITY proposed here.
- [../domains/mathematics.md](../domains/mathematics.md) — Tomita–Takesaki, Type III$_1$, Borchers–Wiesbrock, Connes reconstruction, spectral triples.
- [../domains/quantum-field-theory.md](../domains/quantum-field-theory.md) — local algebras, Bisognano–Wichmann, Reeh–Schlieder, CHM modular Hamiltonian.
- [../domains/general-relativity.md](../domains/general-relativity.md) — conformal Killing vectors, causal order $\to[g]$ (Malament/HKM), horizons.
- [../EPISTEMICS.md](../EPISTEMICS.md) — epistemic tag definitions used throughout.

### Key results cited

- **Sorce**, "Analyticity and the Unruh effect: a study of local modular flow," arXiv:2403.18937 (2024) — *sole author*; geometric modular flow $\Rightarrow$ future-directed conformal Killing vector; non-isometry $\Rightarrow T^\mu{}_\mu=0$ (CFT). `[VERIFIED — corrects the garbled "Arias–Sorce" attribution]`
- **Caminiti, Capeccia, Ciambelli, Myers**, "Geometric modular flows in 2d CFT and beyond," arXiv:2502.02633, JHEP 08 (2025) 166, eq. (8) — explicit 2d realization; geometric modular flow implements a conformal symmetry of the background. `[VERIFIED]`
- **Arias, Casini, Huerta, Pontello**, "Anisotropic Unruh temperatures," arXiv:1707.05375 (2017; Inspire key Arias:2016nip) — local-modular input; *not* the CKV theorem itself. `[VERIFIED — year is 2017, not 2016]`
- **Borchers**, CMP 143, 315 (1992); review "On revolutionizing quantum field theory with Tomita's modular theory," J. Math. Phys. 41, 3604 (2000) — spectrum condition $\Rightarrow$ modular commutation relations (forward direction). `[VERIFIED]`
- **Wiesbrock**, "Half-sided modular inclusions of von-Neumann-algebras," CMP 157, 83 (1993); gap filled Araki–Zsidó (2004), arXiv:math/0412061 — HSMI $\Leftrightarrow$ positive-generator translation (the converse closing the biconditional). `[VERIFIED]`
- **Lashkari, Leung, Moosa, Ouseph**, "Modular Intersections, Time Interval Algebras and Emergent AdS$_2$," arXiv:2412.19882, JHEP 10 (2025) 153 — (twisted) modular inclusion/intersection $\Rightarrow$ universal cover of $PSL(2,\mathbb{R})$; (0+1)d conformal GFF in the vacuum (positivity implicit). `[VERIFIED]`
- **Kabat, Lifschytz**, "Emergence of spacetime from the algebra of total modular Hamiltonians," arXiv:1812.02915 (2019) — bulk point $=$ weakly-maximal Lie subalgebra; metric up to a conformal factor; input $=$ CFT vacuum $+$ conformal algebra. `[VERIFIED — recovery, presupposes symmetric vacuum]`
- **Leutheusser, Liu**, "Causal connectability...," arXiv:2110.05497; "Emergent times in holographic duality," arXiv:2112.12156, *Phys. Rev. D* 108, 086020 (2023) — emergent interior time $+$ sharp horizon at $N=\infty$; positivity from boundedness-below of the boundary CFT Hamiltonian. `[VERIFIED]`
- **Connes**, "On the spectral characterization of manifolds," arXiv:0810.2088 (2008), J. Noncommut. Geom. 7 (2013) 1–82 — commutative spectral triple $\Rightarrow$ closed **Riemannian** spin$^c$ manifold (signature Euclidean, not Lorentzian). `[VERIFIED — relevant to N4 failure of the NCG route]`
- **Connes, Rovelli**, "Von Neumann algebra automorphisms and time–thermodynamics relation," Class. Quantum Grav. 11, 2899 (1994), arXiv:gr-qc/9406019 — thermal-time hypothesis; a posited time direction only, no metric/dimension/causal order (fails N4). `[VERIFIED]`
- **Czech, Lamprou, McCandlish, Sully**, arXiv:1712.07123; **Czech et al.**, arXiv:2305.16384 — modular Berry connection / curvature; candidate non-CKV readout. `[VERIFIED — escape-hatch input]`
