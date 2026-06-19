---
title: "OP-48 point (c): a state-/collar-free composition surrogate on Type III₁?"
type: note
tags: [note, iter5, type-iii-algebras, composition]
updated: 2026-06-08
---

# OP-48 point (c): a state-/collar-free composition surrogate on Type III₁?

**Status:** SETTLED as a conditional no-go for OP-48(c) (medium-high confidence); headline verdict *encodes-not-generates* STANDS and is tightened, not flipped.
**Last updated:** 2026-06-08
**Iteration:** 5

---

## Goal

Resolve **OP-48 point (c)**: exhibit, or prove impossible, a **state-independent, collar-free composition surrogate** that singles out quantum theory from split-style composition axioms on a Type III$_1$ factor — converting the partial $A+B$ merge into a full merge, or establishing a clean no-go.

Iteration 4 left (c) **OPEN**: the split property gives only a state-/collar-**dependent** factorization (canonical only relative to the vacuum modular conjugation $J$, failing at zero collar). The closing question this note attacks: is there a **canonical, choice-free** composition surrogate — Haagerup standard form / natural cone, Connes spatial theory, Connes fusion, the funnel property, or an operational commuting-pair axiomatization — and **does it single out QM**, or does *any* QM-selecting surrogate necessarily reintroduce a state/collar dependence?

See [OPEN_PROBLEMS.md](../OPEN_PROBLEMS.md) (OP-48) and the iteration-4 split-composition framing (predecessor; superseded).

---

## Setup (real math)

Two background facts fix the arena.

**(i) The local algebra is hyperfinite Type III$_1$.** In relativistic QFT a single local algebra $\mathcal{M}=\mathcal{A}(O)$ is the hyperfinite Type III$_1$ factor (Connes–Haag–Araki) [ESTABLISHED]. Consequently there is no trace, no minimal projection, no density matrix, and **no factorization** $\mathcal{H}\neq\mathcal{H}_{\mathcal{M}}\otimes\mathcal{H}_{\mathcal{M}'}$. So the GPT local-tomography axiom
$$\dim V_{AB}=\dim V_A\cdot\dim V_B$$
is **not statable verbatim** on $\mathcal{M}$ [ESTABLISHED].

**(ii) Iter-4 settled the split route.** The split property restores an exact $\mathcal{H}\cong\mathcal{H}_1\otimes\mathcal{H}_2$ for a nested inclusion $O_1\Subset O_2$, but only with a **nonzero collar** and only **canonically relative to** a cyclic–separating $\Omega$ via the intermediate Type I factor associated with $N\vee JNJ$. Hence it is both **state-dependent** (the canonical intermediate factor is fixed by $\Omega$'s modular $J$; Doplicher–Longo 1984 give *infinitely many* intermediate factors otherwise) and **collar-dependent** (Fewster: the split inclusion fails for touching/adjacent regions) [ESTABLISHED].

Point (c) asks for a surrogate avoiding **both** dependencies. The structural candidates, with their honest state/collar status:

**1. Haagerup standard form $(\mathcal{M},\mathcal{H},J,\mathfrak{P})$.** Every von Neumann algebra has a canonical self-dual natural cone $\mathfrak{P}$ and conjugation $J$ with $J\mathcal{M}J=\mathcal{M}'$; the quadruple is unique up to unitary equivalence (Haagerup 1975; Araki, and Connes for the $\sigma$-finite case) [ESTABLISHED, web-confirmed]. This is genuinely canonical and **state-independent**: the *datum is the cone $\mathfrak{P}$, not a preferred vector*. But it furnishes only the **commutant pairing** $(\mathcal{M},\mathcal{M}')$ — not a tensor factorization.

**2. Connes fusion / Sauvageot relative tensor product.** The Connes spatial derivative $d\psi/d\varphi$ and Sauvageot's relative tensor product $\mathcal{H}\otimes_N\mathcal{K}$ of bimodules (correspondences) over a common $N$ give a composition operation that "adjusts the naive algebraic tensor product," defined intrinsically from the bimodule structure, requiring **no Hilbert-space tensor factorization and no collar** (Connes; Sauvageot 1983; Thom) [ESTABLISHED, web-confirmed]. It is **independent of the chosen faithful normal weight up to unique isomorphism**, and is defined for any type including III$_1$.

**3. The van Luijk operational program.** The van Luijk–Stottmeister–Werner–Wilming work (arXiv:2401.07299; PRL **133**, 261602 (2024) = arXiv:2401.07292; review arXiv:2510.07563, Dec 2025) derives the von Neumann–algebraic description of a subsystem from operational axioms (Limits, Ancillas, Dilations, Reversibility, Postselection). Its core theorem: the *implementable operations are exactly the $\mathcal{M}$-inner ones* for a unique von Neumann algebra $\mathcal{M}$, and a **bipartite system is a commuting pair $(\mathcal{M}_A,\mathcal{M}_B)$ on a shared $\mathcal{H}$** — state-independent, collar-free, no tensor product assumed [ESTABLISHED, web-confirmed].

> **Referee correction carried (op48c:claim).** The axiom-enumeration label "A1–A5" and the descriptor "Theorem A" are the wiki's *paraphrase* of arXiv:2510.07563, not verbatim named results in the source, and are used here only as shorthand. Likewise, **Haag duality is a property a net may satisfy or violate** (it can fail under spontaneous symmetry breaking, for disconnected regions, etc.); what is genuinely type-agnostic is the *commuting-pair / standard-form / Connes-fusion structure*, not "Haag duality for all types." [FLAGGED]

---

## The attempt

Each candidate was carried to its honest limit, then assembled into the strongest QM-selection argument.

**Step 1 — A state-independent, collar-free composition surrogate DOES exist.** Combine:

- **(a)** the Haagerup standard form, which canonically (state-independently) furnishes the commuting pair $(\mathcal{M},\mathcal{M}')$ via $J\mathcal{M}J=\mathcal{M}'$ and the self-dual cone $\mathfrak{P}$;
- **(b)** the van Luijk operational axiomatization, which *derives* precisely this commuting-pair structure from operations; and
- **(c)** Connes fusion $\otimes_N$ as the intrinsic, weight-independent composition law over a shared algebra.

Each ingredient is web-confirmed [ESTABLISHED]. Therefore the iter-4 framing — "any canonical composition re-imports a reference state (BREAK 1) and a collar (BREAK 2)" — is **FALSE for this surrogate**: the commuting-pair / standard-form / Connes-fusion package is genuinely **collar-free** (no $O_1\Subset O_2$; defined for touching/coincident algebras) and **reference-state-free** (canonical from the cone, not a vector). This is a real advance on (c): the surrogate exists and is exhibited.

**Step 2 — Does it single out QM?** Here the attempt breaks. The surrogate is provably **type-agnostic**: the commuting-pair structure and standard form hold for *every* von Neumann algebra type (I, II, III) verbatim. They characterize "von-Neumann / quantum-logical composition in general," not Type-I textbook QM. In particular they contain **no local-tomography clause** that would force the complex field and the tensor product; the commuting-pair / Haag-duality datum is strictly weaker than $\dim V_{AB}=\dim V_A\dim V_B$.

**Step 3 — The operational invariant.** The same framework supplies a *state-independent* operational invariant that separates types: the worst-case embezzlement error $\kappa_{\max}(\mathcal{M}_A,\mathcal{M}_B)$ (van Luijk et al., arXiv:2401.07299, Thm E; companion arXiv:2401.07292). Its values [ESTABLISHED, web-confirmed]:
$$
\kappa_{\max}=2 \quad\text{(semifinite: Type I \emph{and all} Type II — no embezzling states)},
$$
$$
\kappa_{\max}=\frac{2\,(1-\sqrt{\lambda})}{1+\sqrt{\lambda}} \quad\text{(Type III}_\lambda),
\qquad
\kappa_{\max}=0 \quad\text{(Type III}_1\text{ — every normal state embezzling: universal embezzler).}
$$
Note the convention: $\kappa$ is a *failure* measure — $\kappa=0$ means embezzlement **succeeds universally**, $\kappa=2$ means it **maximally fails**.

So the collar-free commuting-pair composition, applied to the physically relevant Type III$_1$ local algebra, has a **non-classical operational signature** — universal entanglement embezzlement — that finite-dimensional QM (Type I, $\kappa_{\max}=2$) provably does **not** share.

> **Referee correction carried (op48c:claim, op48c:NI1) — load-bearing.** $\kappa_{\max}=2$ holds for **Type I AND all of Type II** (semifinite), not Type I alone. So $\kappa_{\max}=2$ does **not** identify Type I, and the value of the embezzlement invariant alone does **not** force a tensor factorization: the wiki's own CLPW construction yields a **Type II$_1$** factor, which has $\kappa_{\max}=2$ yet has *no* local-tomography subsystem factorization (it has a trace, not subsystem tensor factors). The Type-I interposition in Step 4 below therefore comes from the **split property** (an independent structural input), not from "$\kappa_{\max}=2$" per se. [FLAGGED — corrects the iter-5 first-pass framing.]

**Step 4 — The assembled selection argument (and where it must be hedged).** The remaining inference is: to *force* QM-like composition (a genuine tensor factorization with bounded embezzlement) you must leave Type III$_1$ — i.e. interpose a **Type I** factor, which on a net is the split construction with its collar and reference-state canonicity tax. As corrected, this requires the **split property's atoms + factorization**, not merely $\kappa_{\max}=2$; the dichotomy is real but the bridge "QM-type composition $\Leftrightarrow$ $\kappa_{\max}=2$" is *not* a cited theorem and is carried as [INFERENCE].

---

## Where it breaks / what moved (didItMove = advanced)

The break is at **Step 2**, and iter-5 makes it a *structured obstruction* rather than the bare iter-4 OPEN. The exhibited state-independent, collar-free surrogate (Haagerup cone + commuting-pair operational axiomatization + Connes fusion) singles out "von Neumann / quantum-logical composition," but **not** quantum theory in the GPT sense, for two web-verified reasons:

1. **Type-agnosticism.** The commuting-pair structure and standard form hold for all types, so they cannot select the complex field, the tensor product, or Type I. There is no collar-free analogue of local tomography in the package.

2. **Wrong-direction operational signature.** On the physical Type III$_1$ factor the collar-free composition is a **universal embezzler** ($\kappa_{\max}=0$): every normal state lets one extract arbitrary entanglement by local operations with arbitrarily small disturbance. Finite-dim QM composition (Type I) is the antipodal $\kappa_{\max}=2$. So the collar-free surrogate, on III$_1$, is operationally **distinguishable from — indeed opposite to** — finite-dim QM.

**What moved:** OPEN $\rightarrow$ a structured conditional no-go with a web-verified operational invariant ($\kappa_{\max}$) doing the separating work. `didItMove = advanced`. This did **not** flip the headline verdict: no emergent Lorentzian geometry from non-symmetric data was derived, and the QM-selecting axiom is shown to *coincide with* the geometry-/state-importing split input, reinforcing rather than overturning *encodes-not-generates* (see [README.md](../README.md) and [CONCLUSION.md](../CONCLUSION.md)).

---

## Furthest defensible claim

> **[INFERENCE, high — obstruction-sharpening, NOT a clean proved theorem]** On a single hyperfinite Type III$_1$ factor there is a strong tension — plausibly a conditional no-go modulo one named bridge — between the two desiderata of OP-48(c):
>
> - A genuinely **state-independent, collar-free** composition surrogate **exists**: the commuting pair $(\mathcal{M},\mathcal{M}')$ from the Haagerup standard form, with operations characterized as $\mathcal{M}$-inner via the van Luijk operational axiomatization, and Connes fusion as a weight-independent associative composition law. But it is **type-agnostic** and, on III$_1$, carries the universal-embezzlement signature $\kappa_{\max}=0$ — the operational antipode of finite-dim QM (Type I, $\kappa_{\max}=2$) — so it does **not** single out quantum theory.
> - Conversely, recovering finite-dim-QM-like composition (atoms, exact tensor factorization, local tomography, no embezzling states) on a III$_1$ region requires **interposing a Type I factor via the split property**, which re-imports a nonzero collar (Fewster: fails for adjacent regions) and a reference-state canonicity tax (canonical intermediate factor fixed only by $\Omega$'s modular $J$; Doplicher–Longo 1984; Hollands–Longo 2020).
>
> Hence "collar-free + state-independent" and "singles out QM" are in irreducible tension on one III$_1$ factor.

**Two referee-mandated hedges baked into the statement above:**

- $\kappa_{\max}=2$ does **not** force Type I — Type II and III$_0$ share it. The Type-I interposition is supplied by the *split property* (atoms + factorization), not by the embezzlement value. [FLAGGED]
- "$\kappa_{\max}$ signature $\Leftrightarrow$ local tomography / tensor factorization / QM-ness" is an **unproven bridge** — the embezzlement literature (arXiv:2401.07299/2401.07292) never connects $\kappa_{\max}$ to local tomography, the tensor product, the split property, or GPT composition. It is carried as [INFERENCE], not theorem-grade. [FLAGGED]

---

## If it fails / weaker statement

**If the no-go (horn C) is wrong**, the failure point is the implicit assumption that QM-selecting composition *requires* bounded embezzlement / a Type I factorization. The loophole: a complex-field/tensor-selecting axiom might be expressible **directly at the III$_1$ commuting-pair level** (e.g. a modular-compatible reversibility clause or a Connes-fusion-based duotensor condition) *without* demanding $\kappa_{\max}=2$ — so QM could in principle be singled out among type-agnostic von Neumann composition theories by a clause *orthogonal* to the embezzlement invariant. Note also that $\kappa_{\max}=0$ on III$_1$ means III$_1$ *already* supports a rich bipartite operational task (embezzlement) without any Type I split — evidence that III$_1$ has its own bipartite structure, which itself cuts against "QM-like composition only via splitting."

To probe the loophole one would check whether the **Pati no-signalling inner-product rigidity** (arXiv:2601.13012) can be re-expressed intrinsically on a III$_1$ commuting pair *without* presupposing the tensor structure it currently assumes. Iter-4 and iter-5 both find it **presupposes** $\mathcal{H}_A\otimes\mathcal{H}_B$ and local unitaries (verified verbatim), so as published it fixes the inner product on a *given* Hilbert space, not the composition rule, and cannot be stated on a single III$_1$ factor — it does **not** close the loophole. Similarly Torres Alegre (arXiv:2602.09056) fixes only the Born *form* via GNS, not composition.

**Weakest defensible fallback (if even existence, horn A, is contested):** the Haagerup standard form alone is uncontestably state-independent and collar-free, so at minimum the bare commutant pairing $(\mathcal{M},\mathcal{M}')$ is a canonical, reference-free "composition arena." The no-go would then bite only on the "singles out QM" clause — which is the published, web-verified part.

---

## Proposed registry items (with referee verdicts)

### `OP-GPT-TYPE3` — gap-refinement [bundle: MIXED]

> OP-48 point (c) resolves as a **conditional no-go** (upgrading the iter-4 OPEN), entirely within operator-algebra / QI structure and with **no geometric (Lorentzian) content**.
> **(A) [ESTABLISHED]** A state-independent, collar-free composition surrogate exists on a III$_1$ factor: the commuting pair $(\mathcal{M},\mathcal{M}')$ from the standard form, with operations characterized as $\mathcal{M}$-inner via the van Luijk operational axiomatization (arXiv:2510.07563), and Connes fusion / the Sauvageot–Connes relative tensor product as a weight-independent composition law.
> **(B) [ESTABLISHED]** It does NOT single out QM: type-agnostic; no local-tomography clause (the commuting-pair datum is strictly weaker than $\dim V_{AB}=\dim V_A\dim V_B$, and on factors corresponds only to subfactor irreducibility); on III$_1$ carries $\kappa_{\max}=0$ (arXiv:2401.07299), opposite to finite-dim/Type I QM ($\kappa_{\max}=2$).
> **(C) [INFERENCE, high]** Recovering QM-type composition (tensor factorization / local tomography) requires interposing a Type I factor via the split construction (Doplicher–Longo 1984), re-importing product structure and a canonical reference state; hence "collar-free + state-independent" and "singles out QM" cannot both hold on one III$_1$ factor.

**Referee verdict (op48c:NI0 — `keep`, severity minor, isSound = true).** Accepted with cosmetic flags: the "A1–A5"/"Haagerup standard form"/"canonicity tax" labels are the wiki's faithful paraphrase, not verbatim source enumerations; the Thom attribution for Connes fusion is loose (rigorously Sauvageot 1983 / Connes). Substance verified: arXiv:2510.07563 and arXiv:2401.07299 are real; the $\kappa_{\max}$ values are correct; the split property (Doplicher–Longo 1984) is correctly characterized; "Haag duality strictly weaker than local tomography" is correct, with recent work (arXiv:2509.12911, PRL) confirming Haag duality $\Rightarrow$ local tomography only for factors. **No fabricated citations, theorems, or numbers.** Makes no Lorentzian claim and does not purport to flip the headline. Bundle tag MIXED stands.

### `HYP-EMBEZZLE-SELECT` — new-hypothesis [tag downgraded to SPECULATIVE]

> The state-independent algebraic witness $\kappa_{\max}(\mathcal{M})$ vanishes ($=0$) exactly on Type III factors (universal embezzlement) and is maximal ($=2$) on **all semifinite** factors. Restricted to distinguishing **Type I from Type III$_1$** (NOT Type II, which also gives $2$), it offers a state-independent re-encoding of the iter-4 obstruction: recovering textbook-QM (Type I) composition / local tomography on a III$_1$ net forces leaving the III$_1$ class, implemented on a net by the split (intermediate Type I factor) and therefore collar- and reference-state-dependent. This **sharpens, and does not flip**, *encodes-not-generates*, by supplying a state-independent invariant where iter-4 used a state-dependent split argument.

**Referee verdict (op48c:NI1 — `keep`, severity MAJOR, isSound = false on the original strong form).** The original phrasing — "$\kappa_{\max}$ *precisely* distinguishes Type I from III$_1$," "operationally *equivalent* to demanding a Type I intermediate factor," "two faces of the same requirement," tagged [INFERENCE, high] — was rejected for: **(1)** false type-discrimination ($\kappa_{\max}=2$ for Type I *and* II; only III is $0$); the Type II$_1$ counterexample breaks "$\kappa_{\max}=2\Rightarrow$ factorization"; **(2)** an unsupported equivalence chain (the source never connects embezzlement to local tomography, tensor factorization, the split property, or GPT composition); **(3)** a single-factor vs inclusion category error ($\kappa_{\max}$ is a single-factor invariant; the split concerns a *nested pair*); **(4)** internal tension — $\kappa_{\max}=0$ shows III$_1$ has its *own* bipartite operational structure without any split; **(5)** a semantic gloss ($\kappa=2$ is *maximal embezzlement failure*, not "QM-good high value"). **Recommended tag: SPECULATIVE.** The refined, defensible residue is the [INFERENCE, low–medium] statement above: $\kappa_{\max}$ is a state-independent witness separating semifinite from Type III, and *restricted to I-vs-III$_1$* it re-derives the iter-4 obstruction with a state-independent invariant in place of a state-dependent split — a **modest** strengthening, not a new equivalence. Recorded accordingly.

---

## Verdict

**SETTLED as a clean conditional no-go for OP-48(c) (medium-high confidence); the headline did NOT flip — *encodes-not-generates* STANDS and is tightened.**

- **(i) Existence.** A state-independent, collar-free composition surrogate genuinely **exists** — the commuting pair $(\mathcal{M},\mathcal{M}')$ from the Haagerup standard form, operationally axiomatized by van Luijk et al., with Connes fusion as its weight-independent composition law [ESTABLISHED, web-confirmed]. This **refutes** the iter-3/4 presumption that any canonical composition must cost a collar and a reference state.
- **(ii) No selection.** But it does **not** single out QM: type-agnostic, no local-tomography clause, and on the physical Type III$_1$ factor a **universal embezzler** ($\kappa_{\max}=0$), the operational opposite of finite-dim QM (Type I, $\kappa_{\max}=2$) [ESTABLISHED, web-confirmed].
- **(iii) The tax returns.** Any QM-selecting composition (atoms / tensor factorization / local tomography) on a III$_1$ region forces a Type I intermediate factor via the split property, re-importing collar- and state-dependence [INFERENCE, high]. So "collar-free + state-independent" and "singles out QM" are incompatible on one III$_1$ factor.

The 2026 rigidity results do **not** rescue selection: Pati (arXiv:2601.13012) fixes the inner product but **presupposes** the bipartite tensor product (verified verbatim) and is not statable on a single III$_1$ factor; Torres Alegre (arXiv:2602.09056) fixes only the Born form, not composition.

`didItMove = advanced` (OPEN $\to$ structured conditional no-go with a web-verified operational invariant doing the work). **Not** `flips-headline-verdict`: no emergent Lorentzian geometry from non-symmetric data was derived, and the QM-selecting axiom is shown to *coincide with* the geometry/state-importing input. Confidence **medium-high**: horns (A),(B) are [ESTABLISHED] and triple-web-verified; horn (C)'s "must interpose Type I" step is [INFERENCE] — strongly supported by the type classification but **not** a cited theorem in the exact phrasing, and the embezzlement$\leftrightarrow$composition bridge is explicitly conjectural.

---

## Open subquestions

1. **[OPEN — decides HYP-EMBEZZLE-SELECT]** Is horn (C) a theorem: must *every* composition surrogate with QM-type behavior (local tomography / genuine tensor factorization) on a III$_1$ net factor through a Type I intermediate factor (the split)? Or is there a complex-field/tensor-selecting axiom expressible directly at the III$_1$ commuting-pair level, orthogonal to the embezzlement invariant?
2. **[OPEN]** Can the Pati no-signalling inner-product rigidity (arXiv:2601.13012) be reformulated intrinsically on a III$_1$ commuting pair $(\mathcal{M},\mathcal{M}')$ *without* presupposing $\mathcal{H}_A\otimes\mathcal{H}_B$ — e.g. via the natural cone / a Connes-fusion duotensor — turning an inner-product-fixing result into a composition-fixing one? As published it cannot.
3. **[OPEN]** Does the van Luijk axiom set admit a strengthening (a tomographic / reversibility / complex-structure clause) that singles out Type I among all von Neumann types *without* a collar — or is type-agnosticism provably irreducible for any operational axiomatization on a shared Hilbert space?
4. **[OPEN]** Connes fusion is weight-independent *up to unique isomorphism*: is the natural transformation implementing that isomorphism itself free of any modular/geometric input, or does canonicity of the fusion associator covertly re-introduce a preferred weight (a higher-categorical analogue of the iter-4 canonicity tax)?
5. **[OPEN — verification]** Peer-review status of the 2026 preprints (Pati arXiv:2601.13012; Torres Alegre arXiv:2602.09056) remains unconfirmed; the van Luijk PRL (**133**, 261602, 2024) and the embezzlement-classification results are published/peer-reviewed and are the load-bearing citations for the no-go.

---

## See also

- [OPEN_PROBLEMS.md](../OPEN_PROBLEMS.md) — OP-48; registry items `OP-GPT-TYPE3`, `HYP-EMBEZZLE-SELECT`.
- [CONCLUSION.md](../CONCLUSION.md) — *encodes-not-generates* (tightened, not flipped).
- Operator algebras — Type III$_1$ factors, standard form, Connes fusion, split property.
- Quantum foundations — GPT local tomography, no-signalling rigidity (Pati, Torres Alegre).
- Iteration-4 predecessor (`HYP-SPLIT-GEOM`, the "canonicity tax"; superseded framing).

### Key results cited

- van Luijk, Stottmeister, Werner, Wilming, *Embezzlement of entanglement, quantum fields, and the classification of von Neumann algebras*, **arXiv:2401.07299** (2024) — $\kappa_{\max}$ operational invariant; $=2$ for semifinite (Type I and II), $\frac{2(1-\sqrt\lambda)}{1+\sqrt\lambda}$ for III$_\lambda$, $=0$ for III$_1$. [ESTABLISHED, web-confirmed]
- van Luijk, Stottmeister, Werner, Wilming, *Relativistic Quantum Fields Are Universal Entanglement Embezzlers*, **arXiv:2401.07292; Phys. Rev. Lett. 133, 261602** (2024) — QFT local (III$_1$) algebras are universal embezzlers, $\kappa_{\max}=0$. [ESTABLISHED, web-confirmed]
- van Luijk, *Entanglement in von Neumann Algebraic Quantum Information Theory*, **arXiv:2510.07563** (2025) — operational derivation: implementable operations $=\mathcal{M}$-inner ones; bipartite system $=$ commuting pair; type classification in 1–1 correspondence with operational embezzlement properties. [ESTABLISHED, web-confirmed]
- Connes (J. Funct. Anal. **35** (1980) 153); Sauvageot (1983); Thom (arXiv:math/0601045, TAC **25** (2011) 38) — Connes fusion / relative tensor product: intrinsic, collar-free, weight-independent up to unique isomorphism. [ESTABLISHED, web-confirmed]
- Haagerup, *The standard form of von Neumann algebras*, Math. Scand. **37** (1975) 271; Araki; Connes ($\sigma$-finite case) — canonical $(\mathcal{M},\mathcal{H},J,\mathfrak{P})$, $J\mathcal{M}J=\mathcal{M}'$, unique up to unitary equivalence; state-independent. [ESTABLISHED, web-confirmed]
- Doplicher–Longo (1984); Hollands–Longo (2020) — split property and intermediate Type I factor; infinitely many absent a reference $\Omega$. [ESTABLISHED]
- Pati, *No-Signalling Fixes the Hilbert-Space Inner Product*, **arXiv:2601.13012** (2026) — fixes inner product but **presupposes** $\mathcal{H}_A\otimes\mathcal{H}_B$ and local unitaries (verified verbatim); fixes the inner product, not the composition rule. Does not close (c). [ESTABLISHED claim; peer review unconfirmed]
- Torres Alegre, *Causal Rigidity of Born-Type Probability Rules in Infinite-Dimensional Operational Theories*, **arXiv:2602.09056** (2026) — NSS + normal steering + $\sigma$-affinity force the Born form via GNS; single-system rule only, not composition. [ESTABLISHED claim; peer review unconfirmed]
- arXiv:2509.12911 (PRL), *Uniqueness of purifications is equivalent to Haag duality* — Haag duality $\Rightarrow$ local tomography only for factors; local tomography $\leftrightarrow$ subfactor irreducibility. [ESTABLISHED, web-confirmed]
