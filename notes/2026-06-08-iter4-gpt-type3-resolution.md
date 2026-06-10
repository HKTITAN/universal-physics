---
title: "Resolve OP-48: can GPT framework-axioms live on a Type III₁ algebra? (split-property test)"
type: note
tags: [note, iter4, generalized-probabilistic-theories, type-iii-algebras]
updated: 2026-06-08
---

# Resolve OP-48: can GPT framework-axioms live on a Type III₁ algebra? (split-property test)

Status: SETTLED as a sharp disjunction (medium confidence) — OP-48 / OP-GPT-TYPE3 is a NO-GO for *exact* composition on a single Type III₁ factor and a *state-/collar-dependent* YES for nested regions under the split property; full operational reconstruction remains OPEN. didItMove = **sharpened-obstruction**.
Last updated: 2026-06-08
Iteration: 4

This note executes the single "next move" the iteration-3 merge note named (see [2026-06-08-iter3-merge-attempt-operational-substrate.md](2026-06-08-iter3-merge-attempt-operational-substrate.md), "Next move"): *test whether the GPT framework-fixing axioms — local tomography / tensor composition, purification, continuous reversibility — admit a formulation on a Type III₁ von Neumann algebra, or whether the split property rescues them.* Iteration 3 left this as `[OPEN — domain-of-validity mismatch + missing-theorem gap; explicitly NOT a no-go]`. Iteration 4 carries the split-property rescue as far as it goes, locates exactly where it breaks, and settles OP-48 as a **disjunction with a sharp dividing line**, not a single verdict. The referees attacked the furthest claim and the two registry items; their corrections (tag granularity; "canonical-given-Ω" phrasing; canonicity-tax vs. existence) are folded in below.

---

## Goal

Settle **OP-48 (OP-GPT-TYPE3)**: can the GPT/operational framework-fixing axioms — **local tomography** ($\dim V_{AB} = \dim V_A \cdot \dim V_B$), **purification**, **continuous reversibility** — be formulated on a Type III₁ von Neumann algebra $\mathcal{M} = \mathcal{A}(O)$ or its normal state space $\mathcal{S}_*(\mathcal{M})$? Three admissible verdicts:

1. a **genuine no-go** (composition needs factorization, impossible on a single III₁ factor);
2. a **split-approximate yes** (the split property restores factorization for nested regions, defeating the no-go);
3. a **disjunction** with a precisely located dividing line between the two.

Subgoals carried over from iteration 3: **(b)** check whether the 2026 σ-affinity + normal-steering rigidity theorem (Torres Alegre, arXiv:2602.09056) extends from the Born *form* to *composition*; **(c)** decide whether a state-independent, collar-free composition surrogate exists.

---

## Setup (real math)

### The obstruction object: a single Type III₁ factor

A single local algebra in relativistic QFT is the hyperfinite Type III₁ factor $\mathcal{M} = \mathcal{A}(O)$ (Connes–Haag–Araki) [ESTABLISHED]. It has

$$
\text{no trace},\quad \text{no minimal projections},\quad \text{no density matrix},\quad \text{no factorization } \mathcal{H} \ne \mathcal{H}_{\mathcal{M}} \otimes \mathcal{H}_{\mathcal{M}'}.
$$

The GPT axiom that does the **framework** work is **local tomography**,
$$
\dim V_{AB} = \dim V_A \cdot \dim V_B,
$$
which presupposes $\mathcal{H}_{AB} = \mathcal{H}_A \otimes \mathcal{H}_B$ with local density matrices [ESTABLISHED]. On a single III₁ factor this presupposition is *false*, so local tomography is not even statable verbatim. This is the iteration-3 BREAK 1 (see [2026-06-08-iter3-merge-attempt-operational-substrate.md](2026-06-08-iter3-merge-attempt-operational-substrate.md)).

### The candidate rescue: the split property

Composition in algebraic QFT is built not from a single factor but from **nested inclusions** $O_1 \Subset O_2$ (read "$O_1$ relatively compact in $O_2$", i.e. a *nonzero collar* / buffer separates them). A net satisfying a **nuclearity** condition (Buchholz–Wichmann; the $L^2$-nuclearity of Buchholz–D'Antoni–Longo) admits an **intermediate Type I factor** $N$ with
$$
\mathcal{A}(O_1) \subset N \subset \mathcal{A}(O_2),
$$
which is precisely the **split property** (Doplicher–Longo, *Inventiones math.* **75**, 493–536, 1984) [ESTABLISHED, web-confirmed]. Existence of an intermediate Type I factor yields:

- an **exact** unitary factorization $\mathcal{H} \cong \mathcal{H}_1 \otimes \mathcal{H}_2$ with $\mathcal{A}(O_1) \subset B(\mathcal{H}_1) \otimes \mathbf{1}$;
- **statistical (W\*-)independence**: any normal state on $\mathcal{A}(O_1)$ and any on $\mathcal{A}(O_2)'$ are jointly realizable, and product states $\psi_1 \otimes \psi_2$ exist;
- **local density matrices** on the intermediate Type I factor $N$.

So a local-tomography-*type* statement **is** formulable for split inclusions — far stronger than "III₁ has no factorization, full stop."

### The canonical intermediate factor

Given a vector $\Omega$ cyclic and separating for the *joint* algebra (so Tomita–Takesaki applies), the **standard split inclusion** singles out a **canonical** intermediate Type I factor via the modular conjugation $J$ of the relative commutant:
$$
N \;=\; \mathcal{A}(O_1) \vee J\,\mathcal{A}(O_1)\,J,
\qquad\text{equivalently}\qquad
F \;=\; N \vee J N J \text{ as the unique } J\text{-invariant factor},
$$
(Doplicher–Longo 1984; Tanimoto, *Conformal Covariance and the Split Property*, *CMP* 2018) [ESTABLISHED, web-confirmed]. Without choosing such a vector there are **infinitely many** intermediate Type I factors and the factorization is "highly non-unique." Canonicity is conferred by a choice of cyclic–separating reference vector — the **vacuum $\Omega$ being the distinguished physical choice, not the unique mathematical one** (any faithful normal GNS vector yields its own canonical factor, invariant only up to a unitary-equivalence class). *[Referee correction folded in: "made canonical only by the vacuum" overstated exclusivity — the precise statement is "canonical relative to a chosen cyclic–separating vector, the vacuum being the distinguished physical choice."]*

### The unknown for subgoal (b): does composition follow from Born-form rigidity?

The 2026 rigidity theorem (Torres Alegre, arXiv:2602.09056) proves, from no-signaling (NSS) + normal steering via purification (NS) + σ-affinity, that any probability rule $P(\phi\mid\psi) = \Phi(\tau(\psi,\phi))$ with $\Phi$ continuous nondecreasing, $\Phi(0)=0$, $\Phi(1)=1$, must satisfy
$$
\Phi(p) = p \qquad (\Phi = \mathrm{id}),
$$
the linear Born **form** as the unique no-signaling fixed point, "via von Neumann algebras through normal state spaces and the GNS representation." The question is whether this extends from the **single-system probability rule** to the **composition rule** (tensor product + complex field).

---

## The attempt

### (a) The split-property rescue, carried to its limit — VERIFIED far

I verified the following chain, each link [ESTABLISHED, web-confirmed]:

1. **Nuclearity $\Rightarrow$ split.** Buchholz–Wichmann nuclearity (finite phase-space volume $\leftrightarrow$ almost-finite-dimensional state space; energy-level density of states) implies the split property for the free field and restricts local degrees of freedom (Buchholz–Wichmann, *CMP*, 1986). $L^2$-nuclearity via modular embeddings $\Phi_p$ is *equivalent* to the (quasi-)split inclusion (Buchholz–D'Antoni–Longo, *Nuclear maps and modular structures I–II*, *CMP*, 1990), giving an explicit modular link between nuclearity and intermediate Type I factors.
2. **Split $\Rightarrow$ exact factorization.** The intermediate Type I factor delivers $\mathcal{H} \cong \mathcal{H}_1 \otimes \mathcal{H}_2$ with statistical independence and local density matrices — local tomography is reinstated *locally*, for the nested pair.
3. **Standard split $\Rightarrow$ canonical factor.** With a cyclic–separating $\Omega$, the factorization is canonical via $J$ (Doplicher–Longo 1984; Tanimoto 2018).
4. **Operational reading.** Local preparability of states is *equivalent* to the split property (Buchholz, *Local preparability of states and the split property*, *Lett. Math. Phys.*, 1987): local operations preparing a local state imply interpolating Type I factors. So the split structure is exactly the operational "I can prepare here without disturbing there" requirement — the natural GPT preparation axiom in AQFT dress.

Conclusion of (a): the would-be hard no-go is **defeated as a no-go**. A local-tomography-type statement, with genuine factorization and local density matrices, IS formulable for split inclusions.

### (b) Does Born-form rigidity reach composition? — NO (verified verbatim)

I fetched arXiv:2602.09056 (Torres Alegre, *Causal Rigidity of Born-Type Probability Rules in Infinite-Dimensional Operational Theories*, 7 Feb 2026) and its finite-dimensional predecessor arXiv:2512.12636 (Torres Alegre, *Causal Consistency Selects the Born Rule: A Derivation from Steering in Generalized Probabilistic Theories*, 14 Dec 2025). Both:

- treat **only the single-system probability rule** $P = \Phi(\tau) \Rightarrow \Phi = \mathrm{id}$;
- contain **no** derivation of composition, tensor product, or local tomography. Verified verbatim in the predecessor: it *"does not address composition, tensor products, or local tomography for multi-system scenarios."*

So the 2026 rigidity track fixes the probability **rule**, not the composition **rule**. *[Referee note: this is a negative-existence claim over 2018–2026 — thorough but inherently OPEN, correctly hedged with "yet."]*

---

## Where it breaks / what moved

The rescue breaks at **three precisely-located, web-verified steps**. The net effect is to **sharpen** the iteration-3 obstruction from "domain-of-validity mismatch + missing-theorem gap" to a *located no-go-vs-conditional-yes line with two named failure modes plus a verified missing theorem*. This is a `sharpened-obstruction`, not a positive reconstruction.

### BREAK 1 — Non-canonicity without a reference state (state-dependence)

If the split property holds there are **infinitely many** intermediate Type I factors; the factorization is "highly non-unique." It is made canonical **only** by choosing a cyclic–separating vector (physically, the vacuum $\Omega$) and its modular conjugation $J$ [ESTABLISHED, web-confirmed]. So any *canonical, choice-free* local density matrix and tomographic factorization are **state-dependent** — they presuppose a preferred reference state, the very geometry-importing input Program A was meant to **generate**. This is the BW/CHM circularity recurring **at the factorization stage** (iteration-3 BREAK 3 was at the entropy stage). 

*Referee-sharpened distinction (load-bearing):* the bare split property buys **existence** of *a* factorization with statistical independence for free — that part needs no $\Omega$. What $\Omega$'s modular data buys is **canonicity** — a *unique, well-defined* factorization / density matrix / entanglement entropy (the canonical entanglement entropy is the von Neumann entropy of $\Omega$ restricted to $F$; Hollands–Longo, *Von Neumann Entropy in QFT*, *CMP* 2020, arXiv:1911.09390). So the split property is downgraded from "supplies factorization for free" to "supplies *non-canonical* factorization for free; a *canonical* one re-imports a preferred reference state." This is a **canonicity tax**, and it requires only $\Omega$ cyclic–separating — it coincides with the *geometric* BW/CHM circularity only under the additional hypothesis that the modular flow be geometric (the step isolated as [A-CP-KILLING], see [../ASSUMPTIONS_LEDGER.md](../ASSUMPTIONS_LEDGER.md)). [INFERENCE, high]

A subtlety the referee insists on: **statistical independence is split-property independence** (a product state on the intermediate Type I factor / joint preparability), **not** factorization of the vacuum $\Omega$ itself — the vacuum does *not* tensor-factorize across the split.

### BREAK 2 — Collar-dependence / failure at touching (UV singularity)

The split factorization requires a **nonzero collar**: $O_1 \Subset O_2$ with a finite buffer / safety-corridor. It **fails when regions touch** (UV singularities; universal divergence of entanglement entropy for adjacent regions) (Fewster, *The split property for QFT in flat and curved spacetimes*, *Abh. Math. Semin. Univ. Hambg.*, 2016) [ESTABLISHED, web-confirmed]. There is **no sharp factorization across a shared boundary**, so the operationally natural "compose adjacent subsystems" has no exact tensor structure. *[Referee addendum, if anything an under-claim: the split property can fail even at finite nonzero separation for Hagedorn / $T\bar T$ spectra (arXiv:2005.08972, PRD 102 045009) — so the collar leg is robust, not fragile.]*

### BREAK 3 — No composition-fixing theorem (verified)

The 2026 rigidity result fixes the probability **rule**, not the composition rule (subgoal (b), above). No 2018–2026 work reconstructs the full GPT framework (tensor composition + complex field) on Type III normal states or split inclusions [OPEN; the existence-negative is thorough but inherently OPEN].

### What moved

Iteration 3 logged this as an OPEN "domain-of-validity mismatch + missing-theorem gap, explicitly not a no-go." Iteration 4 moves it to a **settled disjunction with a sharp line**: no-go for *exact* composition on one factor; state-/collar-dependent yes for nested regions; with two *named, web-verified* failure modes (state-dependence; collar-dependence) and a *verified* missing-theorem leg (no composition-fixing theorem). The obstruction is now **located and quantified**, not merely flagged.

---

## Furthest defensible claim

> **[INFERENCE, high]** On a single Type III₁ factor, exact GPT local tomography / tensor composition is **impossible** (no factorization, no density matrix; Connes–Haag–Araki) [ESTABLISHED]. But the split property reinstates an **exact** factorization $\mathcal{H} \cong \mathcal{H}_1 \otimes \mathcal{H}_2$ with local density matrices and split-property statistical independence for nested regions $O_1 \Subset O_2$ separated by a nonzero collar (Buchholz; Doplicher–Longo 1984) [ESTABLISHED]; a **canonical** such factorization is singled out by a cyclic–separating reference state $\Omega$ and its modular conjugation $J$ (the vacuum being the distinguished physical choice) [ESTABLISHED]. So **OP-48 is a no-go for *exact* composition on one factor and a state-/collar-dependent YES for nested regions — NOT a hard no-go** — while **no theorem (incl. arXiv:2602.09056 and its predecessor arXiv:2512.12636) yet fixes composition itself** [OPEN].

*Tagging, per referee:* the composite verdict is best tagged **[INFERENCE, high]** (its sub-facts are ESTABLISHED, but BREAK 1's circularity reading is INFERENCE and BREAK 3 is OPEN), **not** a flat [ESTABLISHED]. The source-JSON's `tag: established` on the furthest claim flattened a mixed-tag statement; this note adopts the referee's down-tag.

---

## If it fails / weaker statement

- **If the state- and collar-dependence are shown ELIMINABLE** — a state-independent, collar-free composition surrogate that single-handedly fixes tensor composition *and* the complex field on III₁ normal states — then OP-48 flips to a full **YES**, and the GPT framework becomes co-fundamental with modular geometry, upgrading [REG-SYNTH-6] (see [../HYPOTHESES.md](../HYPOTHESES.md)) from a Born-form sublayer to the full framework.
- **If the vacuum-dependence is shown IRREDUCIBLE** — every canonical split factorization must fix a geometric reference state — then the "split-approximate yes" collapses back to the iteration-3 *thin methodological bridge*: composition on III₁ is **parasitic on pre-chosen geometry**, and the A+B merge is re-description at the framework layer.
- **Weakest defensible fallback:** even if the canonical construction's geometry-import is judged fatal, the *existence* (non-canonical) factorization with statistical independence still defeats the bare no-go. The honest floor is "no exact composition on one factor; non-canonical factorization for free on nested regions; canonical factorization costs a preferred state." [OPEN where between these poles the verdict sits.]

---

## Proposed registry items (with referee verdicts)

### [OP-GPT-TYPE3] — gap-refinement — keep (severity: MINOR) — refined

**Proposed statement.** OP-48 resolves as a **disjunction**: (a) NO-GO for exact GPT local tomography / tensor composition on a **single** Type III₁ factor (no factorization / density matrix) [ESTABLISHED]; (b) state-/collar-dependent YES for **nested** regions $O_1 \Subset O_2$ under the split property — an exact $\mathcal{H} \cong \mathcal{H}_1 \otimes \mathcal{H}_2$ with local density matrices and statistical independence, made canonical only by the vacuum $\Omega$ (via modular $J$ of the relative commutant) and requiring a nonzero collar (fails for touching regions) [ESTABLISHED]; (c) OPEN whether a state-independent, collar-free composition surrogate can single out QM from split-composition axioms — no theorem, including arXiv:2602.09056 and its finite-dim predecessor arXiv:2512.12636, fixes composition itself. **[tag: established]**

**Referee verdict — keep: true; severity: MINOR.** Both citations verified real and on-point. Structural physics all confirmed (Connes–Haag–Araki for horn (a); Doplicher–Longo 1984, free-field split Buchholz 1974, $N \vee J N J$, genuine factorization + W\*-independence, nonzero-collar requirement and touching failure for horn (b)). The three horns address **different objects** (single factor; nested inclusion; state-independent collar-free surrogate), so the disjunction is internally consistent — a correct domain-of-validity decomposition, not a contradiction. **Two minor refinements:** (1) "made CANONICAL **only** by the vacuum" overstates exclusivity — canonicity is conferred by a choice of cyclic–separating vector, the vacuum being the distinguished physical choice (a different faithful normal GNS vector yields a different canonical factor; only the unitary-equivalence class is invariant). (2) **Tag granularity:** the bundle is mixed — (a) ESTABLISHED, (b) ESTABLISHED, (c) explicitly OPEN. Use per-horn tags rather than a single flat `established`; the *meta*-claim "OP-48 resolves AS this disjunction" is ESTABLISHED, but horn (c) itself is OPEN.

**Refined statement (adopted).** OP-48 resolves as a disjunction over **different algebraic objects** (no internal conflict): **(a) [ESTABLISHED]** NO-GO for exact local tomography / tensor composition on a single Type III₁ factor — no tensor factorization, no density matrix, no trace (Connes–Haag–Araki). **(b) [ESTABLISHED]** For nested regions $O_1 \Subset O_2$ under the split property (Buchholz 1974 for the free field; Doplicher–Longo 1984 in general), an exact $\mathcal{H} \cong \mathcal{H}_1 \otimes \mathcal{H}_2$ with local density matrices and statistical (W\*-)independence exists via an intermediate Type I factor; a canonical such factor is $N \vee J N J$, with $J$ the modular conjugation of the relative commutant (the collar) w.r.t. a chosen common cyclic–separating vector — the vacuum $\Omega$ the distinguished physical choice, **not** the unique one. It requires a nonzero collar and fails for touching / adjacent regions. **(c) [OPEN]** Whether a state-independent, collar-free composition surrogate can single out QM from split-composition axioms is unresolved: no theorem — arXiv:2602.09056 (infinite-dim) or arXiv:2512.12636 (finite-dim predecessor) — fixes composition; both lift only the Born-rule form. **Bundle tag: MIXED** — ESTABLISHED meta-resolution into a disjunction whose third horn is genuinely OPEN.

### [HYP-SPLIT-GEOM] — new-hypothesis — keep (severity: MINOR) — refined

**Proposed statement.** The split-property "rescue" of GPT composition on III₁ does not escape the BW/CHM circularity but **relocates** it: the canonical intermediate Type I factor (hence the tomographic factorization and local density matrix) is selected by the vacuum $\Omega$'s modular conjugation, so composition presupposes the very geometric reference state Program A aims to generate. **[tag: inference]**

**Referee verdict — keep: true; severity: MINOR.** Two scope corrections. (1) **Existence vs. canonicity:** the bare split property guarantees only *existence* of an intermediate Type I factor, of which there are infinitely many (Doplicher–Longo 1984; Hollands–Longo, *CMP* 2020 / arXiv:1911.09390); $J$-selection is load-bearing for **canonicity** (a unique density matrix / entanglement entropy), not for the *mere existence* of a factorization with statistical independence. Factorization + a (non-unique) local density matrix exist for ANY split inclusion without invoking $\Omega$'s modular data. (2) **"Geometric" overshoots:** a standard split inclusion needs $\Omega$ cyclic–separating (so $J$ exists) — strictly *weaker* than the BW/CHM demand that $\Omega$ be the symmetric vacuum whose modular flow is a geometric boost. The relocation lands on "a preferred cyclic–separating reference state with well-defined modular data"; it coincides with the *geometric* BW/CHM circularity only under the additional geometric-modular-flow hypothesis (the step isolated in [A-CP-KILLING], see [../ASSUMPTIONS_LEDGER.md](../ASSUMPTIONS_LEDGER.md)). So the correct verb is "**adds a canonicity-cost that compounds, and under the geometric-modular-flow hypothesis coincides with, the BW/CHM circularity**" — not "**is** the BW/CHM circularity." Net: the hypothesis *strengthens, not refutes*, the encodes-not-generates verdict.

**Refined statement (adopted).** **[INFERENCE]** The split-property softening of BREAK 1 supplies factorization and statistical independence via *some* intermediate Type I factor, but such factors are non-unique (infinitely many). The **canonical** intermediate Type I factor — hence a canonical, choice-independent tomographic factorization and a canonical local density matrix / entanglement entropy — is selected by the modular conjugation $J$ of the cyclic–separating reference state $\Omega$ (Doplicher–Longo 1984; Hollands–Longo 2020). Therefore instantiating a *canonical* local-tomography-type GPT axiom on a split inclusion presupposes a preferred reference state with well-defined modular data. This is a **distinct** circularity from the entropy-matching / geometric-modular-flow input already logged ([A-CP-KILLING]; iteration-3 BREAK 3): it requires only $\Omega$ cyclic–separating, not its modular flow being geometric, and coincides with BW/CHM only under the additional symmetric-vacuum hypothesis. Net: the split property removes the bare no-go but, for a *canonical* construction, re-imports a preferred state — **compounding rather than equalling** BW/CHM, and reinforcing the encodes-not-generates verdict.

---

## Verdict

**SETTLED as a sharp disjunction (medium confidence).** OP-48 / OP-GPT-TYPE3 is:

- a **NO-GO for *exact* composition / local tomography on a single Type III₁ factor** [ESTABLISHED — no factorization, no density matrix]; and
- a **qualified, state- and collar-dependent YES for nested local algebras under the split property** [ESTABLISHED — exact factorization $\mathcal{H} \cong \mathcal{H}_1 \otimes \mathcal{H}_2$, canonical given a cyclic–separating $\Omega$, with a nonzero collar].

The split property **defeats the would-be hard no-go** (a local-tomography-type statement IS formulable for split inclusions) but does **not** deliver a clean operational reconstruction, for two web-verified reasons: (1) the *canonical* factorization is **state-dependent** (selected by $\Omega$'s modular $J$; infinitely many non-canonical factors otherwise), re-importing the BW/CHM geometric input as a **canonicity tax**; (2) it requires a **nonzero collar** and fails for touching / adjacent regions, so "compose adjacent subsystems" has no exact tensor structure.

**Subgoal (b):** the 2026 σ-affinity + normal-steering result **cannot** currently be extended from Born *form* to composition — verified that it (arXiv:2602.09056) and its finite-dim predecessor (arXiv:2512.12636), both Torres Alegre, treat only the single-system probability rule and explicitly do not derive composition.

**Subgoal (c):** NO-GO for exact composition on one factor; split-approximate (state-/collar-dependent) yes for nested regions; **the full operational reconstruction singling out QM from split-composition axioms remains OPEN** — no such theorem exists.

This **sharpens** the iteration-3 obstruction (no longer merely a "missing-theorem gap" but a *located* no-go-vs-conditional-yes line with two named, verified failure modes plus a verified missing theorem) **without** advancing to a positive reconstruction. `didItMove = sharpened-obstruction`. Confidence: **medium** (the structural facts are ESTABLISHED; the "irreducibility of the vacuum-dependence" that would harden the no-go is INFERENCE/OPEN).

---

## Open subquestions

1. **[OPEN — decides HYP-SPLIT-GEOM]** Is the vacuum-state-dependence of the canonical split factorization **irreducible** — must every canonical intermediate Type I factor fix a geometric reference state — or does a state-independent composition surrogate exist on III₁ normal state spaces?
2. **[OPEN]** Can the 2026 causal-rigidity theorem (σ-affinity + normal steering) be strengthened to fix the **composition** rule (tensor product + complex field) on infinite-dim normal state spaces, not just the probability rule $\Phi = \mathrm{id}$, *without* assuming factorization?
3. **[OPEN]** Does a collar-free / coincidence-limit composition axiom exist that survives the touching-region UV singularity, or is the finite collar an **irreducible** obstruction to composing adjacent operational subsystems?
4. **[OPEN]** Is there any complete GPT-style reconstruction that uniquely singles out QM using split-based composition + a modular-compatible continuous-reversibility surrogate + σ-additive purification on the hyperfinite III₁ normal state space? (No such theorem currently exists.)
5. **[OPEN — unverified]** Is the peer-review status of arXiv:2602.09056 and arXiv:2512.12636 (both Torres Alegre) confirmed, and does "normal steering via purification" covertly require a Type I/II structure that would shrink even the Born-form sublayer?

---

## See also

- [2026-06-08-iter3-merge-attempt-operational-substrate.md](2026-06-08-iter3-merge-attempt-operational-substrate.md) — the iteration-3 merge attempt that named this test as its "Next move"; its BREAK 1 + [OP-GPT-TYPE3] refinement are what this note settles.
- [2026-06-08-iter3-synthesis.md](2026-06-08-iter3-synthesis.md) — lists OP-GPT-TYPE3 as a candidate-no-go; this note converts "candidate-no-go" into a *disjunction with a sharp line*.
- [2026-06-08-iter4-dS-firstlaw-SO-family-attempt.md](2026-06-08-iter4-dS-firstlaw-SO-family-attempt.md) — sibling iteration-4 attempt; the same "finite-/preferred-input vs. infinite local content" pattern recurs there as a cardinality mismatch.
- [2026-06-08-iter3-encode-vs-generate-criterion.md](2026-06-08-iter3-encode-vs-generate-criterion.md) — the encodes-not-generates criterion that HYP-SPLIT-GEOM reinforces (canonicity costs a preferred state).
- [2026-06-08-iter3-redteam-demotion-and-derivation.md](2026-06-08-iter3-redteam-demotion-and-derivation.md) — red-team discipline applied to the referee corrections folded in here.
- [2026-06-08-algebraic-background-independence.md](2026-06-08-algebraic-background-independence.md) — "geometry only for symmetric vacua"; BREAK 1's state-dependence is its factorization-stage instance.
- [2026-06-08-born-rule-and-quantum-linearity.md](2026-06-08-born-rule-and-quantum-linearity.md) — the Born-form rigidity (subgoal (b)) that does *not* extend to composition.
- [../OPEN_PROBLEMS.md](../OPEN_PROBLEMS.md) — OP-48 / OP-GPT-TYPE3 (this note), OP-CP1, OP-BORN-QUANT.
- [../HYPOTHESES.md](../HYPOTHESES.md) — REG-SYNTH-6 (the merge sublayer this would upgrade or collapse); HYP-SPLIT-GEOM (new).
- [../ASSUMPTIONS_LEDGER.md](../ASSUMPTIONS_LEDGER.md) — A-CP-KILLING (geometric-modular-flow input that BREAK 1 / HYP-SPLIT-GEOM compounds).
- [../GAPS_AND_CONTRADICTIONS.md](../GAPS_AND_CONTRADICTIONS.md) — reorganization vs. generation; BW/CHM circularity, now at the factorization stage.
- [../EPISTEMICS.md](../EPISTEMICS.md) — tag taxonomy; no-go vs. domain-of-validity-mismatch vs. missing-theorem-gap.
- [../FINDINGS.md](../FINDINGS.md) — consolidated findings (Born-form rigidity; Type III₁ non-factorization; split property).
- [../domains/quantum-field-theory.md](../domains/quantum-field-theory.md) — Type III₁ local algebras; split property; nuclearity; modular theory.
- [../domains/mathematics.md](../domains/mathematics.md) — von Neumann algebras, intermediate Type I factors, Tomita–Takesaki, Doplicher–Longo.
- [../domains/information-theory.md](../domains/information-theory.md) — no-signaling, GHJW / normal steering, GPT reconstructions, local tomography.
- [../domains/quantum-mechanics.md](../domains/quantum-mechanics.md) — Born rule, purification, continuous reversibility.

### Key results cited

- **Doplicher–Longo**, *Standard and split inclusions of von Neumann algebras*, *Inventiones math.* **75**, 493–536 (1984). Split $\Rightarrow$ intermediate Type I factor $N$, hence $\mathcal{H} \cong \mathcal{H}_1 \otimes \mathcal{H}_2$ + statistical independence; canonical $N \vee J N J$ via modular $J$; infinitely many factors otherwise. [ESTABLISHED — web-confirmed]
- **Buchholz–Wichmann**, *Causal independence / energy-level density of states*, *CMP* (1986). Nuclearity (finite phase-space volume $\leftrightarrow$ almost-finite-dim state space) $\Rightarrow$ split for the free field; restricts local dof. [ESTABLISHED — web-confirmed]
- **Buchholz–D'Antoni–Longo**, *Nuclear maps and modular structures I–II*, *CMP* (1990). $L^2$-nuclearity (modular embeddings $\Phi_p$) $\Leftrightarrow$ (quasi-)split inclusion. [ESTABLISHED — web-confirmed]
- **Tanimoto**, *Conformal Covariance and the Split Property*, *CMP* (2018) (with Doplicher–Longo 1984). Canonical intermediate Type I factor via modular conjugation of the relative commutant w.r.t. the vacuum. [ESTABLISHED — web-confirmed]
- **Fewster**, *The split property for QFT in flat and curved spacetimes*, *Abh. Math. Semin. Univ. Hambg.* (2016). Split factorization needs a nonzero collar ($O_1 \Subset O_2$); fails for touching regions (UV singularities). [ESTABLISHED — web-confirmed]
- **Buchholz**, *Local preparability of states and the split property*, *Lett. Math. Phys.* (1987). Local preparability $\Leftrightarrow$ split property. [ESTABLISHED — web-confirmed]
- **Hollands–Longo**, *Von Neumann Entropy in QFT*, *CMP* (2020), arXiv:1911.09390. Canonical entanglement entropy = vN entropy of $\Omega$ restricted to $F$; infinitely many intermediate factors. [ESTABLISHED — web-confirmed] *(referee-added for the existence-vs-canonicity distinction)*
- **Torres Alegre**, *Causal Rigidity of Born-Type Probability Rules in Infinite-Dimensional Operational Theories*, arXiv:2602.09056 (7 Feb 2026). NSS + normal steering + σ-affinity $\Rightarrow \Phi = \mathrm{id}$ on normal state spaces via GNS; **does not** derive composition / tensor / local tomography; does not treat Type III explicitly. [ESTABLISHED — web-confirmed; peer-review status unverified — preprint]
- **Torres Alegre**, *Causal Consistency Selects the Born Rule: A Derivation from Steering in GPTs*, arXiv:2512.12636 (14 Dec 2025). Finite-dim predecessor; verbatim "does not address composition, tensor products, or local tomography for multi-system scenarios." [ESTABLISHED — web-confirmed; preprint]
- **Connes–Haag–Araki** (structural). Local QFT algebra = hyperfinite Type III₁ factor: no trace, no minimal projections, no density matrix, no factorization. [ESTABLISHED]
