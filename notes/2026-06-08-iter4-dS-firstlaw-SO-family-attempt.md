# Iteration 4: the SO(d+1,1)-family escape from the dS first-law obstruction (OP-41 / HYP-dS-NOMIN)

Status: ATTEMPT executed — the one un-foreclosed escape from iteration 3 is carried out and BREAKS at a precisely located, now-quantified step. Net: HYP-dS-NOMIN is PROMOTED from conjecture toward a no-go (for the strict, unitary, single-common-state route).
Last updated: 2026-06-08
Iteration: 4

This note executes the single escape route iteration 3 left open (OP-dS-FIRSTLAW-R2 / synthesis "next target #1"): build a FAMILY of static-patch modular Hamiltonians over the de Sitter isometry / observer orbit, and test whether the family supplies enough independent first-law constraints to reconstruct the tensor $\delta G_{\mu\nu}$. It uses three web-verified inputs (Chen–Xu 2511.00622; Fröb 2308.14797; the two 2025 dS first-law papers 2511.07915 and 2511.17098).

---

## Web verification (this iteration)

- **Chen–Xu, "An algebra for covariant observers in de Sitter space," arXiv:2511.00622** [VERIFIED — abstract + HTML full text]. Bin Chen, Jie Xu; submitted 1 Nov 2025, revised 10 Feb 2026. Builds the $L^2(SO(1,d))$ QRF from a *superposition of geodesics* with fluctuating static patches; the observable algebra is an **"averaged modular crossed product algebra over static patches and configurations of other geodesics."** Proposes a **quantum generalization of the first law** (their eq. 4.26): a relation between boost-generator expectations and **second-order** horizon-area perturbations $\langle A^{(2)}\rangle/4G_N$, with algebraic = generalized entropy (eq. 4.27). **No Einstein equation / $\delta G_{\mu\nu}$ is derived.** Modular flow geometric **only for Bunch–Davies**; for general states it is a *relative* modular operator without geometric interpretation. The averaging produces a **single gauge-invariant algebra**, "an average of algebras over all possible static patches" — explicitly **not** more information and **no claim of geometric reconstruction**.
- **Fröb, "Modular Hamiltonian for de Sitter diamonds," arXiv:2308.14797, JHEP 12 (2023) 074** [VERIFIED — abstract + secondary]. *Single author Markus B. Fröb* — **the iteration-3 synthesis note's attribution to "Forste et al." is a citation error; corrected here to Fröb.** The dS-diamond modular Hamiltonian *is* geometric: an integral of the stress tensor with explicit link to the generator of conformal transformations along the **conformal Killing vector that leaves the diamond invariant** — i.e. it is the CHM mechanism (conformal map of the diamond to a Rindler wedge), valid for **CFT** in the **conformal vacuum**. In the large-diamond limit the modular automorphisms become **static-patch time translations**. Cross-checked against arXiv:2502.02633 ("Geometric modular flows in 2d CFT," JHEP 08 (2025) 166 [VERIFIED]): geometric modular flow must implement a **conformal symmetry of the background** and be future-directed — i.e. it exists only where geometry is pre-installed via a conformal/Killing symmetry.
- **"Entropic Interpretation of Einstein Equation in dS/CFT," arXiv:2511.07915** [VERIFIED]. Derives linearized dS$_3$ Einstein from a first law of **holographic pseudo-entropy**, but the dual CFT$_2$ is **non-unitary with imaginary central charge $c = i\,3R_{\rm dS}/2G_N$**; the density matrix is **non-Hermitian**, entropy **complex** (pseudo-entropy); uses **dS/CFT at $\mathcal I^+$** (spacelike future boundary), **not** the static patch; requires **complexified geodesics/spacetime**. So this is NOT a counterexample to the strict, unitary, static-patch obstruction — it lives in the non-unitary dS/CFT corner.
- **"Entanglement first law for timelike entanglement entropy and linearized Einstein's equation," arXiv:2511.17098** [VERIFIED]. Result is in **asymptotically AdS**, not dS (timelike intervals on the AdS boundary CFT). Off-target for $\Lambda>0$.

Net verification verdict: the two newest "dS first-law $\Rightarrow$ Einstein" claims are either non-unitary/$\mathcal I^+$ (2511.07915) or AdS (2511.17098); **neither realizes the strict unitary static-patch route**. Chen–Xu, the most direct execution of the escape, **stops at entropy-matching and explicitly does not reconstruct geometry**.

---

## Setup (real math)

### The family of modular Hamiltonians over the observer orbit

$\mathrm{dS}_{d+1}$ has isometry group $G = SO(d+1,1)$, $\dim G = \tfrac{(d+1)(d+2)}{2}$. A static patch is selected by a timelike geodesic observer worldline plus its bifurcate cosmological horizon. The **stabilizer of a static patch** is (verified, 2511.00622 and standard)
$$
H_{\rm patch} = SO(1,1)\rtimes\mathbb Z_2 \times O(d),
\qquad \dim H_{\rm patch} = 1 + \tfrac{d(d-1)}{2},
$$
the $SO(1,1)$ being the static-patch boost $\xi$ itself and $O(d)$ the rotations of the bifurcation $S^{d-1}$. The **orbit of static patches** (= space of timelike geodesics) is the coset
$$
\mathcal O \;=\; SO(d+1,1)\big/\big[SO(1,1)\times SO(d)\big],
\qquad
\dim \mathcal O \;=\; \frac{(d+1)(d+2)}{2} - 1 - \frac{d(d-1)}{2} \;=\; 2d.
$$
For physical 4d ($d=3$, $\dim G = 10$, $\dim H_{\rm patch}=4$): $\boxed{\dim\mathcal O = 6}$.

For each $g\in\mathcal O$, conjugating the Bunch–Davies static-patch boost gives a modular Hamiltonian
$$
K_g \;=\; 2\pi\, U(g)\, H_\xi\, U(g)^\dagger \;=\; 2\pi \int_{\Sigma_g} T_{ab}\,\xi_g^{\,b}\, d\Sigma_g^{\,a},
\qquad \xi_g = g_*\xi .
$$
The family $\{K_g\}_{g\in\mathcal O}$ is the candidate "missing continuum." Imposing the first law for every member:
$$
\delta S_{\rm gen}[g] \;=\; \delta\langle K_g\rangle \qquad \forall g\in\mathcal O. \tag{$\star$}
$$

### The unknown to be reconstructed

Linearized Einstein about empty dS is the tensor field
$$
E_{\mu\nu}(x) := \delta G_{\mu\nu}(x) + \Lambda\,\delta g_{\mu\nu}(x) - 8\pi G\,\delta T_{\mu\nu}(x) \stackrel{?}{=} 0,
$$
with $E_{\mu\nu}(x)$ a symmetric 2-tensor: in 4d, **10 component functions over the 4-dimensional bulk** $\Rightarrow$ an *infinite-dimensional* unknown (a section of $\mathrm{Sym}^2 T^*M$ over $M$, modulo the linearized Bianchi/gauge identities $\nabla^\mu E_{\mu\nu}=0$, which remove 4, leaving 6 independent functions over $M^4$ — still infinite-dimensional).

---

## The attempt, and where it breaks

### (a) CONSTRAINT COUNT — the decisive failure

Each $g\in\mathcal O$ contributes via ($\star$) **one scalar equation** (both sides are numbers). So the family supplies a **scalar function on the $2d$-dimensional manifold $\mathcal O$** — i.e. constraint data of cardinality "one function of $2d$ real parameters," $2d=6$ in 4d.

Contrast FGHMVR (AdS): the ball regions are labeled by center $\in\partial$AdS ($d$ params) and radius (1 param), a $(d{+}1)$-parameter family, **but** the boundary CFT stress tensor $\delta\langle T_{\mu\nu}^{\rm bdy}\rangle$ is an independent datum at each of the continuum of boundary points, and — decisively — **for every bulk point $x$ and every spatial 2-plane through it there is a ball whose RT surface passes through $x$ tangent to that plane.** The first law for all balls is therefore an *integral (Radon-type) transform* of $\delta G_{\mu\nu}(x)$ over the full bulk, and it is **invertible** to the pointwise bulk field because the RT surfaces sweep out the entire bulk in all orientations. The reconstruction map is
$$
\{\delta S_A = \delta\langle K_A\rangle\}_{\text{all balls}} \;\xrightarrow{\ \text{invert Radon}\ }\; \delta G_{\mu\nu}(x)\ \forall x .
$$

In dS, the family is **finite-dimensional** ($\dim\mathcal O = 2d$), and worse, *degenerate in a second way*: all members $K_g$ are isometry-conjugates of a **single** $H_\xi$, so they carry no information not already in the one orbit-representative plus the group action. The reconstruction one is attempting is
$$
\underbrace{\text{(scalar function on } \mathcal O^{2d})}_{\text{finite-dim data}} \;\xrightarrow{?}\; \underbrace{\delta G_{\mu\nu}(x),\ x\in M^{d+1}}_{\infty\text{-dim unknown, } 6 \text{ functions on }M^4}.
$$
**A finite-dimensional family of scalar constraints cannot determine an infinite-dimensional unknown.** This is not a soft "may be too small" worry (iteration-3's hedge): it is a hard cardinality mismatch. The $2d$ orbit directions only move the *single* boost-contracted, slice-integrated Hamiltonian constraint $\int_{\Sigma_g}\xi_g\cdot\delta C = 0$ around the orbit; they reconstruct the *isometry-covariant* part of the constraint, i.e. the **10 charges** $\langle K_g\rangle$ are the dS analog of ADM/Killing charges (a finite set: $\dim G = 10$ independent boost/rotation charges), NOT the local field. [INFERENCE, high — rests on the established Radon-inversion mechanism of FGHMVR and the verified finite orbit dimension.]

**Sharper statement of what the family DOES give.** The independent scalar constraints number at most $\dim G = 10$ (the number of independent isometry charges; the orbit is $2d=6$-dimensional but the conjugation also acts by the $SO(1,1)\times SO(d)$ stabilizer that rescales/rotates $\xi$, and the genuinely distinct conserved charges are the $\dim\mathfrak{so}(d+1,1)=10$ generators). Ten scalar global charge-balance relations cannot fix six functions on $M^4$. The family supplies the **integrated Killing-charge first laws**, i.e. the de Sitter analog of "$\delta M = T\,\delta S$ for each isometry," not the local equation. [INFERENCE, high.]

### (b) GEOMETRIC-FLOW FAILURE in a common state — independent, also fatal

For ($\star$) to be a *clean* first law for every $g$, each $K_g$ must be the geometric boost energy $2\pi\int T_{ab}\xi_g^b$ **in the same perturbed state $\Psi$**. But (verified):
- Chen–Xu: modular flow is geometric **only for Bunch–Davies**; for a perturbed/general state the modular operator is the *relative* modular operator with **no geometric interpretation**.
- Fröb + 2502.02633: a geometric (local) modular Hamiltonian exists **only when the state is the conformal/Bunch–Davies vacuum and the flow implements a conformal symmetry of the background.**

So the family is geometric **simultaneously for all $g$ only in the single state $\Psi = $ Bunch–Davies** — at which $\delta\Psi = 0$ and ($\star$) is the trivial $0=0$. The moment one turns on the perturbation $\delta\Psi \neq 0$ needed to probe $\delta G_{\mu\nu}$, the off-Bunch–Davies $K_g$ ($g\neq e$) cease to be geometric, so $\delta\langle K_g\rangle$ is **not** $\int \delta\langle T_{ab}\rangle\xi_g^b$ and the RHS of ($\star$) is not a local stress-energy integral. **The common-state requirement and the geometric-flow requirement are mutually exclusive away from Bunch–Davies.** [ESTABLISHED component facts; INFERENCE on the incompatibility, high.] This is failure (iv) of iteration 3, now shown to *kill the family specifically*, not just the single patch.

### (c) SIGN / SECOND-ORDER OBSTRUCTION — the maximization bites here, contra iteration 3's softening

Iteration 3 (referee-corrected) demoted the sign-reversal to "not by itself the obstruction" because "a stationary point is a stationary point." That is correct for the *first-order* first law $\delta S_{\rm gen}=\delta\langle K\rangle$, which gives only $0=0$ at the BD maximum. The decisive new fact from Chen–Xu is that the **non-trivial covariant first law is SECOND order**: their eq. (4.26) equates boost-generator expectations to $\langle A^{(2)}\rangle/4G_N$, a **second-order** area perturbation. At a maximum of $S_{\rm gen}$, the second variation is **sign-definite negative**, $\delta^2 S_{\rm gen} < 0$. This means:
1. The first-order content is vacuous ($\delta S_{\rm gen}=0$ identically at BD), so the linearized-Einstein-from-first-law logic has *nothing to invert at first order* — exactly why Chen–Xu only reach $A^{(2)}$.
2. The second-order relation is an **inequality-flavored, sign-fixed** statement (concavity), the dS GSL/quantum-focusing content, not an equality that inverts to a two-sided field equation. The sign reversal therefore **does** obstruct the inversion *at the order where the family has non-trivial content*. [INFERENCE, high — follows from Chen–Xu's eq. 4.26 being second-order + $\delta^2 S<0$ at the max.]

This is the precise sense in which the iteration-3 softening was too generous: the maximization is harmless at first order **only because first order is empty**; the real content sits at second order, where concavity does obstruct.

---

## Verdict: HYP-dS-NOMIN promoted toward a no-go

The escape FAILS on **three independent counts**, each individually sufficient:

1. **Cardinality (decisive).** The observer orbit $\mathcal O = SO(d+1,1)/[SO(1,1)\times SO(d)]$ is **finite-dimensional** ($\dim = 2d = 6$ in 4d), supplying at most $\dim SO(d+1,1)=10$ independent scalar (Killing-charge) constraints. The unknown $\delta G_{\mu\nu}(x)$ is **infinite-dimensional** (6 functions on $M^4$ after Bianchi). No integral-transform inversion (the FGHMVR Radon mechanism) exists: a finite family of global charge-balances cannot reconstruct a local field. Iteration 3's "finiteness worry" is now a **proven cardinality obstruction**, not a worry.
2. **No common geometric state.** Geometric modular flow for all $g$ holds *only* at Bunch–Davies (Chen–Xu; Fröb; 2502.02633), where the probing perturbation $\delta\Psi$ vanishes. Common-state $\cap$ geometric-flow $=\{$BD$\}$, on which the first law is trivial.
3. **Sign/order.** The covariant first law is non-trivial only at **second order** (Chen–Xu eq. 4.26, $A^{(2)}$), where $\delta^2 S_{\rm gen}<0$ makes it a concave/GSL inequality, not an invertible equality.

Crucially, **Chen–Xu — the actual published execution of this exact escape — confirms the verdict**: having built the $SO(1,d)$-averaged family, they reach precisely entropy-matching (algebraic = generalized entropy) and a second-order quantum first law, and **derive no $\delta G_{\mu\nu}$ and claim no geometric reconstruction.** The escape was not merely un-attempted; it has been attempted in the literature and lands exactly where this analysis predicts.

Therefore HYP-dS-NOMIN is **PROMOTED from [INFERENCE-conjecture] toward a no-go**, narrowly scoped:

> **HYP-dS-NOMIN-R3 [INFERENCE, high; near-no-go for the scoped route].** There is no derivation of the local tensor linearized Einstein equation $\delta G_{\mu\nu}=8\pi G\,\delta T_{\mu\nu}$ from a de Sitter static-patch generalized-entropy first law $\delta S_{\rm gen}=\delta\langle K\rangle$ via the FGHMVR mechanism, even after enlarging to the full $SO(d+1,1)$ family of observer/static-patch modular Hamiltonians, for three independent and individually sufficient reasons: (i) the static-patch orbit is finite-dimensional ($\dim = 2d$), supplying $\le\dim SO(d+1,1)$ scalar Killing-charge constraints, which cannot invert (Radon-style) to the infinite-dimensional local field; (ii) the family is geometric in a *common* state only at Bunch–Davies, where the probing perturbation is null; (iii) the family's non-trivial first-law content is second-order, where $\delta^2 S_{\rm gen}<0$ renders it a concave GSL inequality, not an invertible equality. Local dS Einstein dynamics from entanglement returns **only** via the Jacobson 2015 continuum of *small geodesic balls* (which is genuinely infinite-dimensional: one ball at every bulk point in every frame) — i.e. by re-importing an infinite local family, exactly the structure the single-static-patch and its finite isometry orbit lack.

This is **not** an unconditional no-go theorem: it leaves open (a) the non-unitary dS/CFT pseudo-entropy route (2511.07915), and (b) the Jacobson small-ball continuum, which already works but is non-algebraic/non-holographic. Within the **strict, unitary, single-static-patch, isometry-orbit, common-state** route it is as close to a no-go as a non-theorem gets: the failure mechanism is a cardinality mismatch, which is robust.

---

## Why the finite orbit cannot mimic the AdS continuum (the clean one-liner)

AdS FGHMVR works because **every bulk point lies on an RT surface of some boundary ball** — the ball family is infinite-dimensional (a function's worth of data) and *probes the bulk locally*. The dS isometry orbit is **finite-dimensional** and its members are all isometry-images of one global Killing flow — it probes the bulk only *globally/covariantly* (Killing charges). Enlarging "one Killing vector" to "the 10-parameter isometry group" upgrades "one constraint" to "ten constraints," not to "a constraint at every point." Ten is still finite; $\delta G_{\mu\nu}(x)$ is not.

---

## Open subquestions (updated)

1. [OPEN] Does the non-unitary dS/CFT pseudo-entropy first law (2511.07915, complex $c$, $\mathcal I^+$ boundary) constitute a genuine "dS Einstein from entanglement," or does its non-unitarity/complex-entropy disqualify it as physics? (It is the one surviving route to a *local* dS equation from a first law, but at the cost of unitarity.)
2. [OPEN] Can Jacobson's infinite small-ball family be realized *inside* a single CLPW Type II$_1$ algebra (importing the continuum without a boundary), or does the Type II$_1$ trace obstruct having an independent algebra at every bulk point? This is the last way to get an infinite local family in the algebraic setting.
3. [OPEN/likely-closed] Is there any sense in which Chen–Xu's *second-order* covariant first law (4.26) carries linearized-Einstein information that a clever decomposition could extract, despite being a single second-order scalar relation per orbit point? (The cardinality argument says no, but the second-order structure was not in iteration 3's analysis.)
4. [OPEN] Global dS (two static patches + $\mathcal I^\pm$) or time-dependent quintessence ($w\neq-1$): does either restore an infinite local family? (Iteration-3 subquestion 5, still open.)

---

## See also
- [2026-06-08-iter3-de-sitter-first-law-attempt.md](2026-06-08-iter3-de-sitter-first-law-attempt.md) — the iteration-3 attempt this executes the escape of.
- [2026-06-08-iter3-synthesis.md](2026-06-08-iter3-synthesis.md) — names this as "next target #1"; also the source of the "Forste et al." mis-citation corrected here to Fröb.
- [2026-06-08-algebraic-background-independence.md](2026-06-08-algebraic-background-independence.md) — failure (b)/(iv) is its "geometry only for symmetric vacua" verdict in dS dress.

### Key results cited
- Chen–Xu, "An algebra for covariant observers in de Sitter space," arXiv:2511.00622 (1 Nov 2025, rev. 10 Feb 2026). $L^2(SO(1,d))$ QRF; averaged modular crossed product over static patches; second-order quantum first law (eq. 4.26); geometric flow only for BD; no $\delta G_{\mu\nu}$, no geometric reconstruction. [VERIFIED]
- Fröb, "Modular Hamiltonian for de Sitter diamonds," arXiv:2308.14797, JHEP 12 (2023) 074 (single author M. B. Fröb — corrects iter3 "Forste et al."). Geometric dS-diamond modular Hamiltonian = conformal-Killing-vector flow (CHM mechanism, CFT/conformal-vacuum); large-diamond limit = static-patch boost. [VERIFIED]
- "Geometric modular flows in 2d CFT and beyond," arXiv:2502.02633, JHEP 08 (2025) 166. Geometric modular flow must implement a conformal symmetry of the background. [VERIFIED]
- "Entropic Interpretation of Einstein Equation in dS/CFT," arXiv:2511.07915 (2025). Linearized dS$_3$ Einstein from pseudo-entropy first law; non-unitary CFT$_2$, $c=i\,3R/2G$, $\mathcal I^+$ boundary, complexified geodesics. [VERIFIED — non-unitary corner, not the strict route]
- "Entanglement first law for timelike entanglement entropy and linearized Einstein's equation," arXiv:2511.17098 (2025). Asymptotically AdS, not dS. [VERIFIED — off-target]
- FGHMVR, arXiv:1312.7856, JHEP 03 (2014) 051 — Radon-invertible ball family $\Rightarrow$ local linearized Einstein (AdS). [ESTABLISHED]
- CLPW, arXiv:2206.10780, JHEP 02 (2023) 082 — dS static-patch Type II$_1$, BD = max-entropy. [ESTABLISHED]
- Jacobson, arXiv:1505.04753, PRL 116 201101 (2015) — local Einstein (all $\Lambda$) from small-ball entanglement equilibrium (infinite local family). [ESTABLISHED]
