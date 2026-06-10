# Execute the dS first-law escape: an SO(d+1,1) family of modular Hamiltonians (OP-41)

Status: ATTEMPT executed and refereed — the one un-foreclosed escape from iteration 3 is carried out, breaks at a now-quantified step, and is then **re-scoped under four referee verdicts**. Net: HYP-dS-NOMIN is PROMOTED from conjecture toward a near-no-go for the strict, unitary, single-common-state, isometry-orbit route. `didItMove = promoted-toward-no-go`.
Last updated: 2026-06-08
Iteration: 4

This note executes the single escape route iteration 3 left open (OP-dS-FIRSTLAW-R2 / synthesis "next target #1"): build a *family* of static-patch modular Hamiltonians over the de Sitter isometry/observer orbit and test whether the family supplies enough independent first-law constraints to reconstruct the tensor $\delta G_{\mu\nu}$. Track: **Program A — geometry-from-algebra at $\Lambda>0$**. It is the refereed companion to the parallel attempt note [2026-06-08-iter4-dS-firstlaw-SO-family-attempt.md](2026-06-08-iter4-dS-firstlaw-SO-family-attempt.md); the value added here is the explicit incorporation of the four referee verdicts, which **reframe the decisive pillar** (cardinality $\to$ "no radius modulus"), **correct a misattributed citation** (2502.02633 $\to$ Fröb 2308.14797), and **demote** two overclaims (the $\delta\Psi=0$ step and the "three independent reasons" framing) to one interlocking obstruction.

All external inputs were web-verified this iteration (Chen–Xu 2511.00622; Fröb 2308.14797; 2502.02633; the two 2025 dS first-law papers 2511.07915 and 2511.17098); see the companion note's "Web verification" section for the line-by-line confirmations.

---

## Goal

The AdS result (Faulkner–Guica–Hartman–Myers–Van Raamsdonk, FGHMVR) is one of the cleanest "spacetime-from-entanglement" statements known: the boundary entanglement first law $\delta S_A = \delta\langle K_A\rangle$, imposed for *every* boundary ball region $A$, is equivalent to the *linearized* bulk Einstein equation about the AdS vacuum [ESTABLISHED, arXiv:1312.7856].

Iteration 3 reached the dS analog only as far as **horizon-area stationarity** for a *single* static patch and named exactly one un-foreclosed escape: enlarge the single static-patch boost to the full $SO(d+1,1)$ family of observer/static-patch modular Hamiltonians and test whether the enlarged family invertibly reconstructs $\delta G_{\mu\nu}(x)$ via the FGHMVR mechanism. The goal of this note is to **execute that escape with explicit constraint counting** and to record, under referee scrutiny, the furthest statement that survives.

This reinforces **H2**'s negative meta-conclusion (algebra presupposes rather than generates geometry) while sharpening the $\Lambda>0$ boundary of **H4**. See [../HYPOTHESES.md](../HYPOTHESES.md), [../FINDINGS.md](../FINDINGS.md).

---

## Setup (real math)

### The family of modular Hamiltonians over the observer orbit

$\mathrm{dS}_{d+1}$ has isometry group $G = SO(d+1,1)$ (equivalently $SO(1,d{+}1)$; Chen–Xu write $SO(1,d)$ for $\mathrm{dS}_{d+1}$ under the convention $d=$ spatial dimension — the labelings agree on $\dim$ and on $\dim=10$ at the physical case, but the convention difference is flagged here per referee). [ESTABLISHED]
$$
\dim G = \tfrac{(d+1)(d+2)}{2}.
$$
A static patch is selected by a timelike geodesic observer worldline plus its bifurcate cosmological horizon. The **stabilizer of a static patch** is (web-verified, 2511.00622 and standard)
$$
H_{\rm patch} = SO(1,1)\rtimes\mathbb Z_2 \times O(d),
\qquad \dim H_{\rm patch} = 1 + \tfrac{d(d-1)}{2},
$$
the $SO(1,1)$ being the static-patch boost $\xi$ itself and $O(d)$ the rotations of the bifurcation $S^{d-1}$. The **orbit of static patches** (= the space of timelike geodesics) is the coset
$$
\mathcal O \;=\; SO(d+1,1)\big/\big[SO(1,1)\times SO(d)\big],
\qquad
\dim \mathcal O \;=\; \frac{(d+1)(d+2)}{2} - 1 - \frac{d(d-1)}{2} \;=\; 2d.
$$
For physical 4d ($d=3$, $\dim G = 10$, $\dim H_{\rm patch}=4$):
$$
\boxed{\dim\mathcal O = 6.}
$$
(Arithmetic referee-verified by hand: $10 - 1 - 3 = 6$.) [ESTABLISHED]

For each $g\in\mathcal O$, conjugating the Bunch–Davies (BD) static-patch boost gives a modular Hamiltonian
$$
K_g \;=\; 2\pi\, U(g)\, H_\xi\, U(g)^\dagger \;=\; 2\pi \int_{\Sigma_g} T_{ab}\,\xi_g^{\,b}\, d\Sigma_g^{\,a},
\qquad \xi_g = g_*\xi .
$$
The family $\{K_g\}_{g\in\mathcal O}$ is the candidate "missing continuum." Imposing the first law for every member:
$$
\delta S_{\rm gen}[g] \;=\; \delta\langle K_g\rangle \qquad \forall g\in\mathcal O. \tag{$\star$}
$$
Note already a structural fact that will become load-bearing: **every $K_g$ is an isometry-conjugate of the single $H_\xi$.** The orbit transports one operator around $G$; it does not add genuinely new local data.

### The unknown to be reconstructed

Linearized Einstein about empty dS is the tensor field
$$
E_{\mu\nu}(x) := \delta G_{\mu\nu}(x) + \Lambda\,\delta g_{\mu\nu}(x) - 8\pi G\,\delta T_{\mu\nu}(x) \stackrel{?}{=} 0,
$$
a symmetric 2-tensor: in 4d, $10$ component functions over the 4-dimensional bulk, reduced by the linearized Bianchi/gauge identity $\nabla^\mu E_{\mu\nu}=0$ (which removes 4) to **6 independent functions on $M^4$** — an *infinite-dimensional* unknown (a section of $\mathrm{Sym}^2 T^*M$ modulo gauge). [ESTABLISHED]

The reconstruction one is attempting is therefore
$$
\underbrace{\{\delta S_{\rm gen}[g]=\delta\langle K_g\rangle\}_{g\in\mathcal O}}_{\text{a scalar function on }\mathcal O^{2d}}
\;\xrightarrow{?}\;
\underbrace{\delta G_{\mu\nu}(x),\ x\in M^{d+1}}_{6\text{ functions on }M^4}.
$$

---

## The attempt

Conjugate the BD static-patch boost over the orbit to form $\{K_g\}$ and impose $(\star)$. Each $g$ gives **one scalar equation** (both sides are numbers), so the family yields a scalar function on the $2d$-dimensional manifold $\mathcal O$ — finite-dimensional data of cardinality "one function of $2d$ real parameters." Because every $K_g$ is an isometry-conjugate of one $H_\xi$, the genuinely independent content collapses further to the finite set of isometry (Killing-charge) balances; the orbit directions transport only the *single* boost-contracted, slice-integrated Hamiltonian constraint $\int_{\Sigma_g}\xi_g\cdot\delta C = 0$ around the orbit.

I attempted the dS analog of the FGHMVR inversion. In AdS the all-balls first law is an integral (Radon-type) transform of $\delta G_{\mu\nu}(x)$ that is **invertible** to the pointwise bulk field — *because* for every bulk point $x$ and every spatial 2-plane through it there is a ball whose RT surface passes through $x$ tangent to that plane, so the RT surfaces sweep the whole bulk in all orientations:
$$
\{\delta S_A = \delta\langle K_A\rangle\}_{\text{all balls}} \;\xrightarrow{\ \text{invert Radon}\ }\; \delta G_{\mu\nu}(x)\ \forall x .
$$
[ESTABLISHED mechanism, FGHMVR; the "Radon-invertible" reading is corroborated by the reconstruction literature (e.g. Cao–Qi, arXiv:2007.00004) — tagged INFERENCE as a gloss on FGHMVR rather than its verbatim statement, per referee NI1.]

The dS analog $\{\delta S_{\rm gen}[g]=\delta\langle K_g\rangle\}_{g\in\mathcal O}\xrightarrow{?}\delta G_{\mu\nu}(x)$ does **not** invert. I also checked (using web-verified Chen–Xu 2511.00622 and Fröb 2308.14797) the *geometric-state* requirement and the *order* of the non-trivial first law. The published execution of exactly this enlarged-family escape — Chen–Xu's $L^2(SO(1,d))$ QRF "averaged modular crossed product over static patches" — reaches precisely entropy-matching (algebraic = generalized entropy, their eq. 4.27) and a second-order quantum first law (their eq. 4.26), and derives **no** $\delta G_{\mu\nu}$, claiming **no** geometric reconstruction.

---

## Where it breaks / what moved

`didItMove = promoted-toward-no-go.`

Iteration 3's *attempt* note presented three independent, individually sufficient failures. **The referee corrected this** (verdict `ds-first-law-escape:claim`, severity minor, keep): they are not three independent reasons but **one interlocking obstruction with overlapping facets**. The reframing is adopted below. The pillars are relabeled to reflect what is actually load-bearing.

### Facet (a′) — finite-dimensional orbit *with no radius modulus* (the genuine distinction from AdS)

The decisive count in the attempt note was "$\le\dim SO(d+1,1)=10$ scalar Killing-charge constraints." The referee flagged this as **mis-located**: FGHMVR *also* uses a finite-dimensional symmetry group ($SO(d,2)$) and nevertheless succeeds. So "$10$ scalar charges" is the wrong diagnostic — the symmetry-group dimension is not the constraint count.

The operative fact is sharper. FGHMVR imposes the first law on an **infinite-dimensional family of ball regions** labeled by boundary center *and* a continuous **radius**; it is the *radius modulus*, swept over the continuum, that lets the inverse-Radon transform reconstruct a local field. The dS static-patch family is the **finite-dimensional ($\dim\mathcal O = 2d = 6$) isometry orbit of one Killing flow, and it has no radius/size modulus**: the static-patch size is *fixed* by the dS radius $R_{\rm dS}$. There is no continuous family of nested anchored regions through each bulk point in each orientation. Hence:

> The corrected decisive statement is **not** "$\le 10$ charges" but: the dS geometric-modular regions form a finite-dimensional orbit *lacking the radius continuum* whose infinite sweep is what makes FGHMVR's reconstruction possible. A finite-dimensional region family (no matter how the $10$ vs $6$ counting is phrased) cannot Radon-invert to $6$ functions on $M^4$. [INFERENCE, high — rests on the established FGHMVR mechanism and the verified finite orbit dimension; corrected per referee from the symmetry-group-dimension diagnostic.]

The residual "$\le\dim SO(d+1,1)=10$ independent Killing-charge balances" *bound* is still correct as a **bound** (the orbit members are isometry-conjugate, so the independent data is capped by $\dim\mathfrak{so}(d+1,1)$), but it is an **inference from the conjugation structure, not a one-step count and not a published theorem** — and it is not the load-bearing fact. [INFERENCE, flagged per referees NI0/NI1.] The honest headline: enlarging "one Killing vector" to "the $10$-parameter isometry group" upgrades "one constraint" to "ten constraints," **not** to "a constraint at every bulk point."

### Facet (b) — geometric modular flow pins the *state* to Bunch–Davies (corrected: this restricts the state, not the perturbation)

For $(\star)$ to be a clean first law for every $g$, each $K_g$ must be the geometric boost energy $2\pi\int T_{ab}\xi_g^b$ in the *same* state. But (web-verified):

- **Chen–Xu 2511.00622:** modular flow is geometric **only for Bunch–Davies**; for a general/perturbed state the modular operator is the *relative* modular operator with **no geometric interpretation**.
- **Fröb 2308.14797:** the geometric dS-diamond modular Hamiltonian is the stress tensor integrated against the **conformal Killing vector leaving the diamond invariant** (CHM mechanism, conformal/BD vacuum); the large-diamond limit is the static-patch boost. **This is the paper that carries the dS "geometric only at the conformal vacuum" content.**

> **Referee correction (verdict `ds-first-law-escape:claim`), adopted:** the attempt note cited **arXiv:2502.02633** ("Geometric modular flows in 2d CFT and beyond," Caminiti–Capeccia–Ciambelli–Myers) for this *de Sitter* statement. That is a **2d-CFT Rindler-wedge paper** and the attribution is mis-pointed. The de Sitter content belongs to **Fröb 2308.14797**. 2502.02633 supplies only the *general* principle "geometric modular flow must implement a conformal symmetry of the background and be future-directed" — true and relevant, but not the dS-specific anchor. The dS-specific anchor is hereby re-cited to **Fröb**.

The **further** referee correction (also adopted): the attempt note's step "at BD $\Rightarrow \delta\Psi=0 \Rightarrow (\star)$ is trivially $0=0$" is an **overclaim**. Requiring the *unperturbed* state to be BD (so $K_g$ is geometric) does **not** force the *probing* perturbation $\delta\Psi$ to vanish — FGHMVR itself works at the analog vacuum (pure AdS) with nonzero first-order $\delta\Psi$. The defensible residue is weaker and is what survives:

> The **set of distinct geometric modular Hamiltonians obtained by varying the common state is a single point** (BD). This restricts the *state*, not the *perturbation*. Nonzero first-order first-law content around BD still exists — and it is killed not by "$\delta\Psi=0$" but by facet (c). [ESTABLISHED component facts; INFERENCE on the single-point structure, high; the earlier $\delta\Psi=0$ claim withdrawn per referee.]

### Facet (c) — the non-trivial content is second order, where $\delta^2 S_{\rm gen}<0$ (the strongest pillar)

The referee identified facet (c) as **the strongest pillar**, directly supported by Chen–Xu's abstract ("consistency of the perturbative expansion necessitates imposing all second-order gravitational constraints associated with the $SO(1,d)$ isometry group").

The empty static patch **extremizes** the relevant boost charge / generalized entropy. Hence the *first-order* static-patch first law $\delta S_{\rm gen}=\delta\langle K\rangle$ is **trivial** ($0=0$ at the extremum) — there is nothing to invert at first order. The non-trivial covariant first-law content first appears at **second order**: Chen–Xu equate boost-generator expectations to $\langle A^{(2)}\rangle/4G_N$ (their eq. 4.26, with eq. 4.27 the algebraic = generalized entropy identification).

> **Referee flag (adopted):** "Chen–Xu eq. 4.26" equating boost generators to $\langle A^{(2)}\rangle/4G_N$ is supported in *substance* by the abstract's second-order-constraint requirement, but the **exact equation number and verbatim content are [INFERENCE], not verified verbatim**. The second-order character of the content is the verified fact; the equation number is reported as cited, not independently confirmed.

At the $S_{\rm gen}$-**maximum**, the second variation is sign-definite, $\delta^2 S_{\rm gen} < 0$. So the second-order relation is a **concave, sign-fixed (GSL-type) inequality**, not a two-sided equality that inverts to a field equation. The sign reversal — harmless at first order *only because first order is empty* — therefore **does** obstruct at the order where the family has non-trivial content. [INFERENCE, high — follows from the second-order content plus $\delta^2 S<0$ at the maximum.]

### The interlocking structure (referee's reframing, adopted)

Facets (b) and (c) share a **single physical root**: Bunch–Davies is the maximum-entropy, maximally symmetric vacuum. Geometric flow requires that symmetric vacuum (b); first-order stationarity at the maximum makes first-order content vacuous, pushing the content to second order (c). And facet (a′)'s reconstruction obstruction "only bites *given* something to reconstruct" — if (c) holds, the first-order inversion (a′) targets is moot. This is therefore **one interlocking obstruction with three facets**, the cleanest standalone-sufficient one being (a′) (the finite-dimensional, radius-modulus-free region family), not "three independent reasons."

**What moved.** Iteration 3's *soft* "finiteness worry" (the orbit "may be too small") is upgraded to a *quantified, corrected* obstruction: a finite-dimensional region family without a radius continuum cannot Radon-invert to a local field, the geometric-modular state is pinned to a single point, and the only non-trivial content is a concave second-order inequality. Decisively, the **published execution** of exactly this escape (Chen–Xu) lands where the analysis predicts: entropy-matching and a second-order quantum first law, no $\delta G_{\mu\nu}$, no geometric reconstruction. Program A did **not** advance toward geometry-generation at $\Lambda>0$; the central diagnosis — *"encodes, does not generate, geometry"* — is reinforced.

---

## Furthest defensible claim

[INFERENCE, high; near-no-go for the scoped route. Referee verdict on this claim: **keep, severity minor** — headline defensible; three supporting defects corrected above and folded into the statement below.]

> Within the **strict route** (unitary single static patch in $\mathrm{dS}_{d+1}$, common state, geometric modular Hamiltonians on the $SO(d+1,1)$ isometry orbit of static patches), there is **no FGHMVR-style reconstruction of the local tensor linearized Einstein equation** $\delta G_{\mu\nu}=8\pi G\,\delta T_{\mu\nu}$ (equivalently $E_{\mu\nu}=0$), for **one interlocking obstruction with two load-bearing facets**:
>
> **(a′)** The geometric-modular regions form only the finite-dimensional ($\dim = 2d$) $SO(d+1,1)/[SO(1,1)\times SO(d)]$ orbit of mutually isometric static patches, **crucially without a radius/size modulus** — the very continuum whose infinite sweep lets FGHMVR inverse-Radon-transform first-law constraints over all ball sizes into a local field. Geometric modular flow is moreover pinned to the Bunch–Davies/conformal vacuum (Fröb 2308.14797), so the family of *distinct* geometric modular Hamiltonians obtained by varying the common state is a single point (this restricts the *state*, not the *perturbation*).
>
> **(c)** The first-order static-patch generalized-entropy first law is **trivial** (the empty static patch extremizes the relevant boost charge / generalized entropy), so non-trivial content first appears at **second order** (Chen–Xu 2511.00622, whose abstract requires imposing all second-order $SO(1,d)$ gravitational constraints), where at the $S_{\rm gen}$-maximum $\delta^2 S_{\rm gen}<0$ yields a concave GSL-type inequality rather than an invertible equality.
>
> The finding is **route-specific** and does **not** preclude the non-unitary dS/CFT pseudo-entropy route (2511.07915) or Jacobson's small-geodesic-ball continuum (1505.04753). Decisively, the only published execution of the enlarged-family route — Chen–Xu — gauges the full isometry group yet yields a single averaged algebra reaching only entropy-matching with no geometric reconstruction, precisely as this analysis predicts.

NOTE (per referee): **arXiv:2502.02633 should be removed/replaced by 2308.14797** as the dS-specific anchor; it survives only as the source of the general "geometric flow $\Leftrightarrow$ background conformal symmetry" principle.

---

## If it fails / weaker statement

If facet (a′)'s reconstruction obstruction is wrong, the only route to rescue the escape is to show that the **second-order** Chen–Xu first law secretly carries pointwise linearized-Einstein information that a clever decomposition extracts despite being one scalar relation per orbit point. **The constraint count argues against this** (a finite-dimensional family with no radius continuum, even refined to second order, does not supply a function's worth of local data) — but the second-order structure was *not* in iteration 3's analysis, so this remains formally [OPEN/likely-closed].

The two genuinely surviving escapes (carved out, not refuted, here):

1. **Non-unitary dS/CFT pseudo-entropy first law** (arXiv:2511.07915): linearized $\mathrm{dS}_3$ Einstein from a holographic *pseudo*-entropy first law, but with imaginary central charge $c = i\,3R_{\rm dS}/2G_N$, a non-Hermitian density matrix, complex (pseudo-)entropy, the $\mathcal I^+$ spacelike boundary, and complexified geodesics. It **does** give a *local* dS equation from a first law — at the cost of **unitarity**. Web-verified to be the non-unitary corner, **not** a counterexample to the strict unitary static-patch scope.
2. **Jacobson's infinite small-ball continuum realized inside a single CLPW Type II$_1$ algebra** (importing the continuum without a boundary): Jacobson 2015 already yields local dS Einstein from a genuinely infinite local family (one ball at every bulk point in every frame), non-holographically. Open whether the Type II$_1$ trace ($\mathrm{Tr}(\mathbb 1)=1$) obstructs an *independent* algebra at every bulk point. This is the last way to get an infinite *local* family in the algebraic setting.

Also untested: global dS (two static patches $+\,\mathcal I^\pm$) or time-dependent quintessence ($w\neq -1$), either of which might restore an infinite local region family and dissolve facet (a′).

Weaker conclusion that is unconditionally true: enlarging the single static-patch boost to the full $SO(d+1,1)$ family upgrades the dS first law from one Killing-charge balance to the **$\le 10$ integrated Killing-charge first laws** (the dS analog of "$\delta M = T\,\delta S$ per isometry"), **not** to a local equation at every bulk point.

---

## Proposed registry items (with referee verdicts)

Each item is recorded with its incorporated referee verdict.

### HYP-dS-NOMIN-R3 (hypothesis-refinement) — referee `ds-first-law-escape:NI0`: **keep, severity minor; tag INFERENCE**

**Refined statement (referee-incorporated).** No derivation of the local tensor linearized Einstein equation ($\delta G_{\mu\nu}+\Lambda\,\delta g_{\mu\nu}=8\pi G\,\delta T_{\mu\nu}$) from a de Sitter static-patch generalized-entropy first law ($\delta S_{\rm gen}=\delta\langle K\rangle$) via the FGHMVR mechanism currently exists, and a structural obstruction blocks it, even after enlarging to the full $SO(d+1,1)$ observer/static-patch modular-Hamiltonian family. The obstruction has **two load-bearing facets sharing a common Bunch–Davies-is-max-entropy root** (the iteration-4 *attempt* note's "three independent reasons" is corrected to "one interlocking obstruction"): **(a′)** the geometric-modular region family is finite-dimensional ($\dim\mathcal O = 2d$) and **lacks the radius modulus** whose infinite continuum drives FGHMVR's inverse-Radon reconstruction (the "$\le\dim SO(d+1,1)=10$ scalar charges" bound is correct but is an INFERENCE from the conjugation structure, not the load-bearing diagnostic); geometric flow is pinned to BD, where the *state* — not the perturbation — is a single point; **(c)** the non-trivial content is second-order with $\delta^2 S_{\rm gen}<0$, a concave GSL inequality. Decisively corroborated by Chen–Xu 2511.00622, the published execution of this escape, which reaches algebraic = generalized entropy and a second-order quantum first law and derives no $\delta G_{\mu\nu}$. **Scoped** to the strict unitary single-static-patch isometry-orbit common-state route; non-unitary dS/CFT pseudo-entropy (2511.07915) and Jacobson small-ball (1505.04753) routes remain **open**. *Not* an unconditional no-go theorem.

*Referee residue:* the "$\le\dim G$" bound is an inference (flagged); "three independent" demoted to "two facets, one root"; "the probing perturbation is null" reworded ("null" $\to$ "the state is a single point," to avoid the lightlike reading).

### HYP-dS-CARDINALITY (new-hypothesis) — referee `ds-first-law-escape:NI1`: **keep, severity minor; tag INFERENCE (scoped)**

**Refined statement (referee-incorporated).** For the strict unitary single-static-patch route, the structural reason an FGHMVR-type Einstein-from-entanglement derivation works in AdS but not in the dS static patch is a **cardinality/dimension mismatch in the family of anchored regions**. AdS supplies an infinite-dimensional family — effectively an RT/extremal surface through every bulk point in every orientation (a function's worth of ball regions labeled by boundary center *and radius*) — whose entanglement first laws form an integral (tensor-Radon-type) transform of $\delta G_{\mu\nu}(x)$ invertible to the pointwise bulk field [FGHMVR 1312.7856; reconstruction reading corroborated by Cao–Qi 2007.00004]. The dS static patch supplies only the finite-dimensional ($\dim\mathcal O = 2d = 6$ in 4d) $SO(d+1,1)/[SO(1,1)\times SO(d)]$ orbit of one global Killing flow, whose members are mutually isometry-conjugate, so its first laws reduce to at most $\dim SO(d+1,1)$ ($\le 10$ in 4d) independent global Killing-charge balances — finite data that cannot determine $6$ functions on $M^4$. Recovering **local** dS Einstein dynamics from entanglement therefore requires re-importing an independently infinite local family — the **only currently-known** example being Jacobson's small-geodesic-ball continuum (1505.04753) — which the isometry orbit alone does not provide. Corroborated by Chen–Xu 2511.00622 (gauges the full isometry group, yields a single averaged algebra, only entropy-matching). **Scoped:** does not foreclose the non-unitary dS/CFT route or global/time-dependent dS.

*Referee residue:* "**THE** structural reason" $\to$ scoped to the strict route; "**requires** small balls" $\to$ "the only currently-known route is an infinite local family such as Jacobson's"; "Radon-invertible" tagged as follow-up gloss, not verbatim FGHMVR; the orbit-arithmetic ($\dim\mathcal O=2d$) referee-verified.

### GAP-FROEB-CITATION (gap-refinement) — referee `ds-first-law-escape:NI2`: **keep, severity none; tag ESTABLISHED**

**Refined statement (referee-incorporated).** arXiv:2308.14797, "Modular Hamiltonian for de Sitter diamonds" (JHEP 12 (2023) 074, DOI 10.1007/JHEP12(2023)074), is **single-authored by Markus B. Fröb** — confirmed via arXiv, Springer, NASA ADS (bibcode 2023JHEP...12..074F), and INSPIRE-HEP (literature/2691859). Any attribution of this paper to "Forste et al." (as in the iteration-3 *synthesis* note) is a **citation error**; the correct author is Fröb, consistent with the iteration-3 *attempt* note and registries. [ESTABLISHED on the bibliographic core; the specific internal-document locus of the "Forste et al." error is INFERENCE/unverified-internally per referee.] **Spawned as a cleanup task.**

*Additional citation fix surfaced this iteration (not in the original registry items but mandated by referee `ds-first-law-escape:claim`):* **arXiv:2502.02633** ("Geometric modular flows in 2d CFT and beyond," Caminiti et al.) is a **2d-CFT Rindler paper**; it must **not** be cited for the de Sitter "geometric-only-at-BD" statement, which belongs to Fröb 2308.14797. [ESTABLISHED — bibliographic.]

---

## Verdict

[Confidence: **high.**] `didItMove = promoted-toward-no-go.`

The one un-foreclosed escape from iteration 3 — the $SO(d+1,1)$ family of static-patch modular Hamiltonians — was **executed with explicit constraint counting and refereed**. It **fails**, and under referee correction the failure is best stated as **one interlocking obstruction with two load-bearing facets** (not "three independent reasons"):

1. **(a′) Finite region family, no radius modulus (cleanest standalone facet).** The geometric-modular regions are the finite-dimensional ($\dim\mathcal O=2d=6$) isometry orbit of one Killing flow, *lacking* the radius continuum whose infinite sweep is what makes FGHMVR's inverse-Radon reconstruction possible; geometric flow pins the *state* to a single point (BD). The referee-corrected diagnostic is the *absence of a radius modulus*, not the symmetry-group-dimension count — FGHMVR itself has a finite symmetry group yet succeeds.
2. **(c) Second-order, concave content (strongest facet).** The first-order static-patch first law is trivial (empty patch extremizes the charge/entropy); non-trivial content is second-order (Chen–Xu), where $\delta^2 S_{\rm gen}<0$ makes it a concave GSL inequality, not an invertible equality.

The two facets share the single Bunch–Davies-is-max-entropy root. The published execution of exactly this route (Chen–Xu 2511.00622) corroborates: it reaches entropy-matching and a second-order quantum first law and derives **no** $\delta G_{\mu\nu}$, claiming **no** geometric reconstruction.

This is **not** an unconditional theorem — the non-unitary dS/CFT pseudo-entropy route (2511.07915) and the non-algebraic Jacobson small-ball continuum (1505.04753) survive — but within the strict unitary single-static-patch isometry-orbit common-state route the obstruction is **as close to a no-go as a non-theorem gets**. **HYP-dS-NOMIN is promoted from [INFERENCE-conjecture] toward a near-no-go.** Web verification also corrected two internal citation errors: "Forste et al." $\to$ **Fröb** for 2308.14797, and the mis-pointed **2502.02633** $\to$ **Fröb 2308.14797** for the dS geometric-flow statement.

---

## Open subquestions

1. [OPEN] Does the non-unitary dS/CFT pseudo-entropy first law (2511.07915; complex $c$, $\mathcal I^+$ boundary, complexified geodesics) constitute a genuine "dS Einstein from entanglement," or does its non-unitarity/complex-entropy disqualify it as physics? It is the one surviving route to a *local* dS equation from a first law.
2. [OPEN] Can Jacobson's infinite small-ball family be realized *inside* a single CLPW Type II$_1$ algebra (importing the continuum without a boundary), or does the Type II$_1$ trace obstruct an independent algebra at every bulk point? This is the last way to get an infinite *local* family in the algebraic setting.
3. [OPEN/likely-closed] Is there any sense in which Chen–Xu's second-order covariant first law (eq. 4.26) carries linearized-Einstein information that a clever decomposition could extract, despite being one second-order scalar relation per orbit point? (The cardinality count says no.)
4. [OPEN] Does global dS (two static patches $+\,\mathcal I^\pm$) or time-dependent quintessence ($w\neq -1$) restore an infinite local region family, dissolving facet (a′)?

---

## See also

- [2026-06-08-iter4-dS-firstlaw-SO-family-attempt.md](2026-06-08-iter4-dS-firstlaw-SO-family-attempt.md) — the parallel iteration-4 attempt note (line-by-line web verification); this note is its refereed re-scoping.
- [2026-06-08-iter3-de-sitter-first-law-attempt.md](2026-06-08-iter3-de-sitter-first-law-attempt.md) — the iteration-3 attempt whose one escape (route (a), $SO(d+1,1)$ orbit) is executed here.
- [2026-06-08-iter3-synthesis.md](2026-06-08-iter3-synthesis.md) — names this as "next target #1"; also the source of the "Forste et al." mis-citation corrected here to Fröb.
- [2026-06-08-iter3-encode-vs-generate-criterion.md](2026-06-08-iter3-encode-vs-generate-criterion.md) — the "encodes, does not generate, geometry" criterion this result reinforces.
- [2026-06-08-algebraic-background-independence.md](2026-06-08-algebraic-background-independence.md) — facet (b)'s "geometry only for symmetric vacua" verdict in dS dress.
- [../HYPOTHESES.md](../HYPOTHESES.md) — H2 (algebra presupposes geometry), H4 (entanglement-first-law dynamics); HYP-dS-NOMIN.
- [../OPEN_PROBLEMS.md](../OPEN_PROBLEMS.md) — OP-41 / OP-dS-FIRSTLAW; OP-dS-FIRSTLAW-R2.
- [../FINDINGS.md](../FINDINGS.md) — master findings ledger.
- [../GAPS_AND_CONTRADICTIONS.md](../GAPS_AND_CONTRADICTIONS.md) — GAP-FROEB-CITATION and the 2502.02633 mis-pointing.
- [../EPISTEMICS.md](../EPISTEMICS.md) — tag conventions ([ESTABLISHED]/[INFERENCE]/[CONTESTED]).
- [../domains/cosmology.md](../domains/cosmology.md) — de Sitter, static patch, $\Lambda>0$ thermodynamics.
- [../domains/general-relativity.md](../domains/general-relativity.md) — linearized Einstein, Iyer–Wald, horizons.
- [../domains/quantum-field-theory.md](../domains/quantum-field-theory.md) — modular Hamiltonians, crossed products, Bisognano–Wichmann / CHM.

### Key results cited

- **Chen–Xu**, "An algebra for covariant observers in de Sitter space," arXiv:2511.00622 (Bin Chen, Jie Xu; 1 Nov 2025, rev. 10 Feb 2026). $L^2(SO(1,d))$ QRF; averaged modular crossed product over static patches; second-order quantum first law (eq. 4.26, $\langle A^{(2)}\rangle/4G_N$; equation number cited not verbatim-verified); algebraic = generalized entropy (eq. 4.27); geometric flow only for BD; **no $\delta G_{\mu\nu}$, no geometric reconstruction**. [VERIFIED — web-confirmed; established]
- **Fröb**, "Modular Hamiltonian for de Sitter diamonds," arXiv:2308.14797, JHEP 12 (2023) 074 (single author Markus B. Fröb; DOI 10.1007/JHEP12(2023)074). Geometric dS-diamond modular Hamiltonian = stress tensor against the conformal Killing vector (CHM, conformal/BD vacuum); large-diamond limit = static-patch boost. **Carries the dS "geometric only at BD" content** (corrects the 2502.02633 mis-citation). [VERIFIED — web-confirmed; established]
- "Geometric modular flows in 2d CFT and beyond," arXiv:2502.02633, JHEP 08 (2025) 166 (Caminiti–Capeccia–Ciambelli–Myers). **2d-CFT Rindler-wedge** paper: geometric modular flow must implement a conformal symmetry of the background and be future-directed. **Not** the dS-specific anchor. [VERIFIED — web-confirmed; established]
- "Entropic Interpretation of Einstein Equation in dS/CFT," arXiv:2511.07915 (2025). Linearized $\mathrm{dS}_3$ Einstein from a pseudo-entropy first law; non-unitary CFT$_2$, $c=i\,3R/2G$, non-Hermitian $\rho$, $\mathcal I^+$ boundary, complexified geodesics. [VERIFIED — non-unitary corner, not the strict route; contested]
- "Entanglement first law for timelike entanglement entropy and linearized Einstein's equation," arXiv:2511.17098 (2025). Asymptotically AdS, not dS. [VERIFIED — off-target for $\Lambda>0$; established]
- **FGHMVR**, arXiv:1312.7856, JHEP 03 (2014) 051 — linearized Einstein from $\delta S_A=\delta\langle K_A\rangle$ for all boundary balls (CHM + RT + Iyer–Wald); the all-balls family is Radon-invertible to pointwise $\delta G_{\mu\nu}$ because RT surfaces sweep the bulk in all orientations (AdS only). [ESTABLISHED]
- Cao–Qi, arXiv:2007.00004, JHEP 12 (2020) 033 — tensor-Radon reconstruction reading of the all-balls first law. [VERIFIED — corroborates the "Radon-invertible" gloss; established]
- **CLPW**, arXiv:2206.10780, JHEP 02 (2023) 082 — dS static-patch crossed product is Type II$_1$, $\mathrm{Tr}(\mathbb 1)=1$, empty dS = max-entropy state, BD modular flow = static-patch boost, no boundary/RT surface. [ESTABLISHED]
- **Jacobson**, "Entanglement Equilibrium and the Einstein Equation," arXiv:1505.04753, PRL 116, 201101 (2015/2016) — local Einstein (all $\Lambda$ incl. dS) from fixed-volume entanglement equilibrium in small geodesic balls; a genuinely infinite-dimensional local family (one ball at every bulk point/frame). [ESTABLISHED]
