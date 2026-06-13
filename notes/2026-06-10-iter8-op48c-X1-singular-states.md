---
title: "OP-48(c) EXIT X1: singular product states on the III₁ Haag-dual pair exist (theorem) and constitute a framework exit, not a closable residue"
type: note
tags: [note, iter8, gpt-reconstruction, type-iii, op-48, independence]
updated: 2026-06-10
---

# OP-48(c) EXIT X1: singular product states on the III₁ Haag-dual pair exist (theorem) and constitute a framework exit, not a closable residue

**Status:** ATTEMPT executed — `didItMove = residue-characterized` on OP-48(c) exit X1. Both mission questions answered: (1) EXISTENCE is upgraded from a referee-sketched route to a **theorem** with named, live-verified inputs (Roos 1970 + Florig–Summers 1997 + Takesaki 1958, assembled via Rédei–Summers and Halvorson read at primary level this session); (2) DISQUALIFICATION resolves **sharper than posed** — no single reconstruction axiom fails on a singular state, so X1 does **not** collapse horn C to "theorem-conditional-only-on-X2"; X1 is confirmed a genuine **framework exit** whose price is itemized as a theorem. Medium-high confidence. The headline verdict of [../CONCLUSION.md](../CONCLUSION.md) is unaffected and tightened.
**Last updated:** 2026-06-10
**Iteration:** 8 (track A4)

This note executes the first of the two named exits left by [2026-06-10-iter7-op48c-fullpair-forcing.md](2026-06-10-iter7-op48c-fullpair-forcing.md) §1.4, where horn C of [../OPEN_PROBLEMS.md](../OPEN_PROBLEMS.md) OP-48(c) was hardened to **theorem-conditional-on-framework** with residue relocated to {the normal-state postulate} ∪ {the composition-primitive choice → X1 singular states / X2 non-OPT embezzlement}. The iter-7 referee (R7-A4-F5, binding) voided the universal-property existence argument and prescribed the corrected route; this note makes that route rigorous and then asks the physics question the mission poses: if such states exist, can a composition rule on them count as "recovering QM"?

> **Scope honesty, up front.** (1) The load-bearing independence theorems were read **at the primary/authoritative-text level this session**: Rédei–Summers arXiv:0810.5294v2 page-by-page (Defs 1–4, Props 1–4, 10–13, the hyperfinite-III example p. 10); Halvorson math-ph/0602036 §§2.5, 3.1–3.3 page-by-page (Schlieder Def 3.4, C*-independence Def 3.6, the implication box p. 28, the type-III "no pure normal states" remark p. 25). (2) The three reconstruction axiom sets are **carried verbatim from iteration 7** (Hardy/CDP/MM, primary-PDF-read there); re-confirmed at statement level this session, not re-read page-by-page. (3) Buchholz 1974 normal-product-state results are cited as a contrast datum only and the tangent-region detail is `[unverified this session]` (Springer auth wall). (4) The Roos 1970 product-state theorem is verified **via** Rédei–Summers' explicit attribution, not from Roos's own PDF.

---

## Part 1 — EXISTENCE: the corrected route, made rigorous (X1-EXIST is a theorem)

### 1.1 The five links, each cited and live-verified

Let $\mathcal M$ be a type III$_1$ **factor** in standard form on a separable Hilbert space $\mathcal H$, $\mathcal M'$ its commutant — the Haag-dual pair. We want a product state $\omega(ab)=\varphi_A(a)\varphi_B(b)$, $a\in\mathcal M$, $b\in\mathcal M'$, on the composite $AB=B(\mathcal H)$.

**Step 1 — the factor pair has the Schlieder property.** `[ESTABLISHED]` For a von Neumann *factor* $\mathcal M$, the commuting pair $(\mathcal M,\mathcal M')$ satisfies the **Schlieder property** (Halvorson Def 3.4: nonzero $e\in\mathcal M$, $f\in\mathcal M'$ ⇒ $e\wedge f\ne0$; equivalently $a\in\mathcal M,b\in\mathcal M',\,ab=0\Rightarrow a=0$ or $b=0$). For commuting *factors* this is automatic — confirmed this session. (The AQFT route Halvorson Prop 3.16 — microcausality + property B + strong spacelike separation ⇒ Schlieder — is the *net*-level sufficient condition; for the abstract full Haag-dual pair the factor property alone suffices, no spacelike-separation input needed.) Type III$_1$ is a factor, so the pair has the Schlieder property unconditionally.

**Step 2 — Schlieder ⟺ C\*-independence (commuting case).** `[ESTABLISHED]` Halvorson's implication box (p. 28, verbatim): $\text{Split}\Rightarrow W^*\text{-indep}\Rightarrow C^*\text{-indep}\iff\text{Schlieder property}$, the last equivalence holding *for mutually commuting pairs*. Hence $(\mathcal M,\mathcal M')$ is **C\*-independent** (Halvorson Def 3.6 / Rédei–Summers Def 1: every state of $\mathcal M$ is compatible with every state of $\mathcal M'$).

**Step 3 — C\*-independence ⇒ a PRODUCT extension (Roos 1970).** `[ESTABLISHED — Roos 1970]` Rédei–Summers p. 4, verbatim: *"if $\mathcal A_1,\mathcal A_2$ are commuting C\*-algebras, then the extension state $\phi$ in Definition 1 may be chosen to be a product state [24]"* — [24] = H. Roos, Commun. Math. Phys. **16**, 238–246 (1970). This is C\*-independence *in the product sense*: the map $\eta(ab)=a\otimes b$ extends to a C\*-isomorphism $\mathcal M\vee_{C^*}\mathcal M'\cong\mathcal M\otimes_{\min}\mathcal M'$ (Rédei–Summers Def 2), and a product state $\omega(ab)=\varphi_A(a)\varphi_B(b)$ exists on the **norm closure** $C^*(\mathcal M\cup\mathcal M')$. The Florig–Summers characterization (Rédei–Summers Prop 4) gives this with a *faithful* product state.

> This subsumes the referee's "min-norm-domination" sub-step: C\*-independence in the product sense **is** the statement $\mathcal M\vee_{C^*}\mathcal M'\cong\mathcal M\otimes_{\min}\mathcal M'$, so $\varphi_A\otimes\varphi_B$ is bounded by exactly the minimal C\*-norm and the product functional is a bona fide state on $C^*(\mathcal M\cup\mathcal M')$ with no further estimate needed.

**Step 4 — push to $AB=B(\mathcal H)$ by positive Hahn–Banach.** `[ESTABLISHED]` $C^*(\mathcal M\cup\mathcal M')$ is a unital C\*-subalgebra of $B(\mathcal H)$. A state on a unital C\*-subalgebra extends to a state on the ambient C\*-algebra: Hahn–Banach gives a norm-preserving linear extension $\tilde\omega$ with $\|\tilde\omega\|=\|\omega\|=\omega(1)=1$; a unital functional on a C\*-algebra with $\|\tilde\omega\|=\tilde\omega(1)$ is automatically **positive**, hence a state. (Equivalently $B(\mathcal H)$ is injective.) So $\omega$ extends to a state on the composite $AB=B(\mathcal H)$.

**Step 5 — the product state is NON-NORMAL (the load-bearing point).** `[ESTABLISHED — Takesaki 1958 / Florig–Summers 1997]` On the III$_1$ pair, no product state can be normal. A normal product state across commuting factors $(\mathcal N_1,\mathcal N_2)$ exists **iff** $\eta(XY)=X\otimes Y$ extends to a $W^*$-isomorphism $\mathcal N_1\vee\mathcal N_2\cong\mathcal N_1\,\overline\otimes\,\mathcal N_2$ (Rédei–Summers Prop 2, Takesaki 1958). For $\mathcal M$ type III$_1$, $\mathcal M\vee\mathcal M'=B(\mathcal H)$ (Type I) while $\mathcal M\,\overline\otimes\,\mathcal M'$ is Type III (Halvorson 3.10(iii): $R\,\overline\otimes\,R'$ has the same type as $R$; for type II/III, $\overline{R\vee R'}$ is strictly larger than and not isomorphic to $R\,\overline\otimes\,R'$). The isomorphism fails ⇒ **no normal product state exists**. Rédei–Summers state the consequence as a worked example (p. 10, verbatim): *"choosing $\mathcal N_1$ to be the hyperfinite type III factor and $\mathcal N_2=\mathcal N_1'$, the pair $(\mathcal N_1,\mathcal N_2)$ is C\*-independent in the product sense, but it is not $W^*$-independent in the product sense."* The Step-3 product state therefore exists but is **non-normal — singular**. (Independent cross-check: the iter-6/iter-7 **T1** corollary says a normal product state would force $\mathcal M$ Type I.)

### 1.2 The theorem

**THEOREM X1-EXIST.** `[INFERENCE, high — assembly mine; every link cited and live-verified]` Let $\mathcal M$ be a type III$_1$ factor in standard form on a separable Hilbert space $\mathcal H$, $\mathcal M'$ its commutant. Then:
1. there exists a state $\omega$ on $B(\mathcal H)$ with $\omega(ab)=\varphi_A(a)\varphi_B(b)$ for all $a\in\mathcal M,b\in\mathcal M'$ (a product state across the Haag-dual pair); and
2. **every** such product state is non-normal (singular).

*Hypotheses, flagged.* (i) $\mathcal M$ a **factor** — essential (Step 1; drop it and Schlieder/C\*-independence can fail — Halvorson Ex. 3.7, Prop 3.8). (ii) **Separable predual** — load-bearing for the stated *form* of the Step-5 obstruction; the conclusion also follows from the type-independent T1 corollary, so the result is robust to this technical choice. (iii) The cited Roos/Takesaki/Florig–Summers theorems (verified this session via Rédei–Summers and Halvorson).

This **promotes** the iter-7 §1.4 claim "(X1) singular product states exist" from a referee-corrected *route* to a theorem with named inputs. The mission's verification targets are answered: yes, "product states across commuting C\*-algebras exist iff the pair is C\*-independent" — Roos 1970 (commuting case, the product can be chosen); yes, the Haag-dual factor pair **is** C\*-independent (Schlieder ⟺ C\*-independence, factor ⇒ Schlieder); for wedge algebras this is the standard Schlieder-property instance, and for an abstract III$_1$ factor and its commutant it holds by the factor property alone.

---

## Part 2 — DISQUALIFICATION: does a composition on singular states "recover QM"?

The physics question. I argue both horns against the **verbatim** axioms iteration 7 verified.

### 2.1 Horn "recovers-QM = NO" (the standard folklore — correct here)

Singular states have:
- **no density matrix** (not in the predual);
- **no countably-additive probability assignment** (normality = $\sigma$-additivity on orthogonal projections; a singular state is only *finitely* additive);
- **no pure-state ignorance reading** — Halvorson p. 25, verbatim this session: *"type III algebras have no pure normal states ... this absence of pure states is a further obstacle to an ignorance interpretation of quantum probabilities."*

By **Fell's theorem** (verified: normal states are weak-* dense in the state space) a singular state is a weak-* limit of physical density-matrix states but is **not** norm-approximable by them and is not one of them. A composition rule whose preparations are singular states thus has no $\sigma$-additive probability calculus and no tomography in the textbook sense.

### 2.2 Horn "recovers-QM = MAYBE" (the steelman) — and what it actually shows

The GPT frameworks nowhere demand "normal." So which *stated* axiom would a singular state violate? Reading the three (axioms carried verbatim from iter-7):

| Reconstruction | State object (verbatim/near-verbatim) | What a singular state does |
|---|---|---|
| **Hardy 2001** | state = the finite list of $K$ fiducial-measurement probabilities; $K=\min$ #measurements determining the state; $N,K$ **finite**; H4: $N=N_AN_B$, $K=K_AK_B$ | $K=\infty$; not determined by any finite list — **not a state of the theory** |
| **CDP 2011** | **finite-dimensional** state spaces (p. 6); states = points of a finite-dim convex body; Axiom 4 local distinguishability | no finite-dim convex / density-matrix rep — **not in $\mathrm{St}(AB)$** |
| **Masanes–Müller 2011** | finite $d_A$; Req. 2 local tomography via a **finite** fiducial frame | not characterized by any finite frame — **outside the state space** |

**THEOREM X1-DISQ.** `[INFERENCE, high — from the verbatim axiom statements]` In **none** of Hardy / CDP / Masanes–Müller does a singular state violate a *stated axiom*. In all three the **state object is, by construction, a finite-dimensional, countably-additive (normal / density-matrix) functional**, and a singular product state is **not an element of the framework's state space at all** — the disqualification is by *non-membership in the state space*, which sits **upstream of every axiom**. Therefore:
1. X1 does **not** strengthen horn C to "theorem-conditional-only-on-X2 with an axiom provably failing on singular states." There is no such single failing axiom.
2. X1 **is** a genuine **framework exit** — exactly the iter-7 referee's binding conclusion — now established as a theorem rather than asserted.

> Note the asymmetry with the iter-7 **LT-sep** result: the *separation* half of local tomography **holds** on the III$_1$ pair (singular product states do separate normal states — von Neumann density + factor), so the exit is **not** at distinguishability. It is at the *preparability / $\sigma$-additivity / finiteness* layer.

### 2.3 The price tag (itemized as a theorem)

**COROLLARY X1-COST.** `[INFERENCE, high]` To admit X1's singular product states as legitimate preparations, a reconstruction must simultaneously relinquish **all three** of:
- **(a) states = density matrices** — drop the predual identification; "state" becomes an arbitrary (possibly singular) state on a C\*-algebra;
- **(b) $\sigma$-additivity of probabilities** — Hardy's H1 / the Kolmogorov-style countable additivity over a measurement's outcomes weakens to mere finite additivity;
- **(c) finite tomographic dimension** — $K,d,D\to\infty$; the local-tomography *dimension count* $D_{AB}=D_AD_B$ that is the operational engine of all three reconstructions loses its finite content (its **separation** content survives — §2.2).

These are not three independent costs one can pay piecemeal: each of the three reconstructions builds its *entire* derivation on the finite-dimensional, density-matrix, $\sigma$-additive state. Paying (a)+(b)+(c) is leaving the GPT program, not weakening one of its axioms.

### 2.4 Horn C, updated form

Horn C stands at **theorem-conditional-on-framework** (iter-7). This track does **not** eliminate X1 — it cannot; X1's states provably exist (X1-EXIST) — but it **converts X1 from an open escape into a characterized, costed exit**:
- existence: **theorem** (Roos 1970 + Florig–Summers 1997 + Takesaki 1958);
- disqualification: **theorem** that no reconstruction axiom fails on singular states, because the normal/density-matrix state postulate is itself a load-bearing, **non-derivable** framework axiom (X1-DISQ);
- cost: **theorem** that the exit forces (a)+(b)+(c) jointly (X1-COST).

So the OP-48(c) residue's two exits are now confirmed as the two **independent axes** along which one must leave the framework: **X1 = the state-object axis** (normal vs singular states — characterized and costed here), **X2 = the composition-primitive axis** (product preparations vs III$_1$-embezzlement — untouched by this track, exits OPT on a different axis). Neither is a "reading"; both are exits; operator algebra and GPT-reconstruction theorems choose neither. This is the **encodes-not-generates** pattern recurring at the **state-postulate layer**, sharpened to a theorem: the normal-state postulate is an installation choice. `[INFERENCE, high]` — consistent with [../HYPOTHESES.md](../HYPOTHESES.md) HYP-ENCODING-SCREEN.

---

## Honest overall verdict

`didItMove = residue-characterized` (medium-high confidence). The mission's two questions are answered in order: (1) EXISTENCE is a theorem — the corrected Schlieder/Roos/Hahn–Banach route is rigorous, and the "min-norm-domination" sub-step is subsumed by C\*-independence-in-the-product-sense. (2) DISQUALIFICATION is **decided, sharper than posed**: no single axiom fails on singular states, so X1 does **not** close to "theorem-conditional-only-on-X2"; X1 is a genuine framework exit, and the physics it costs is now itemized (density-matrix states + $\sigma$-additivity + finite tomographic dimension, jointly). The headline verdict is untouched and tightened: horn C remains theorem-conditional-on-framework, with the normal-state postulate now **proven** to be a load-bearing, non-derivable axiom rather than a tacit convenience. No experimental channel emerged; the wager's NOT-YET-PHYSICS status is unaffected.

## Open subquestions (updated)

1. `[OPEN — carried, now the only mathematical hedge under horn C besides X2]` Primary-source spot-check of the Summers–Werner 1988 hypotheses (the uniform Bell gap of the *approximate* reading); independent of X1, which lives on the *exact* preparability layer.
2. `[OPEN — X2, the other exit, untouched]` Is the III$_1$/universal-embezzlement composition endpoint a genuine rival *axiomatization* (a preparability-free reconstruction that still singles out a unique theory), or only a gesture? (Carried from iter-7 §"Open subquestions" #2.)
3. `[OPEN — new]` Does any *weakening* of Hardy/CDP/MM that admits infinite-dimensional, non-$\sigma$-additive states still single out a unique theory — i.e. is there a "singular-state GPT reconstruction" at all, or does dropping (a)+(b)+(c) destroy uniqueness outright? A negative answer would upgrade X1-COST from "leaves the program" to "leaves the program *and* loses the reconstruction theorem," closing X1 as a *useless* exit.

## See also

- [2026-06-10-iter7-op48c-fullpair-forcing.md](2026-06-10-iter7-op48c-fullpair-forcing.md) — predecessor; its §1.4 exit X1 is made a theorem here.
- [2026-06-10-iter6-op44-op48c-levers.md](2026-06-10-iter6-op44-op48c-levers.md) — the T1 corollary (normal product state ⇒ Type I) used as the Step-5 cross-check.
- [2026-06-08-iter5-op48c-collarfree-composition.md](2026-06-08-iter5-op48c-collarfree-composition.md), [2026-06-08-iter4-gpt-type3-resolution.md](2026-06-08-iter4-gpt-type3-resolution.md) — the horn-C lineage.
- [../OPEN_PROBLEMS.md](../OPEN_PROBLEMS.md) — OP-48 entry; iteration-7 progress line on horn C.
- [../CONCLUSION.md](../CONCLUSION.md) — §5 item 4 (the X1/X2 residue wording this note upholds and hardens).
- [../HYPOTHESES.md](../HYPOTHESES.md) — HYP-ENCODING-SCREEN (reinforced at the state-postulate layer).
- [../EPISTEMICS.md](../EPISTEMICS.md) — tag discipline.
- [../BIBLIOGRAPHY.md](../BIBLIOGRAPHY.md) — new entries below.

## References

*Read at primary/authoritative level this session unless marked otherwise.*

- M. Rédei, S. J. Summers, *When are quantum systems operationally independent?*, arXiv:0810.5294 v2 (2009). [PDF read page-by-page: Defs 1–4 pp. 2–3; Prop 1–4 pp. 3–4 incl. the Roos product-state sentence p. 4; Props 10–12 + the hyperfinite-III example p. 10] — the assembly's primary carrier.
- H. Halvorson (with M. Müger), *Algebraic Quantum Field Theory*, arXiv:math-ph/0602036. [PDF read: §2.5 pp. 20–25 (local algebras properly infinite / type III$_1$; "no pure normal states" p. 25); §3.1 pp. 26–28 (Schlieder Def 3.4; C\*-independence Def 3.6; the Split⇒W\*⇒C\*⟺Schlieder box p. 28); §3.2–3.3 pp. 28–30 (Schlieder Props 3.13/3.16; Bell Props 3.19/3.21)].
- H. Roos, *Independence of local algebras in quantum field theory*, Commun. Math. Phys. **16**, 238–246 (1970). [theorem verified via Rédei–Summers attribution this session; Roos PDF not independently read].
- M. Florig, S. J. Summers, *On the statistical independence of algebras of observables*, J. Math. Phys. **38**, 1318–1328 (1997). [the faithful-product-state ⟺ C\*-independence-in-product-sense characterization (Rédei–Summers Prop 4); verified via Rédei–Summers + abstract this session].
- M. Takesaki, *On the direct product of $W^*$-factors*, Tôhoku Math. J. **10**, 116–119 (1958). [the normal-product-state ⟺ $W^*$-isomorphism theorem (Rédei–Summers Prop 2); verified via Rédei–Summers].
- L. Hardy, *Quantum Theory From Five Reasonable Axioms*, arXiv:quant-ph/0101012. [axioms carried verbatim from iter-7; H1/H4 + finite $K,N$ re-confirmed at statement level this session].
- G. Chiribella, G. M. D'Ariano, P. Perinotti, *Informational derivation of Quantum Theory*, arXiv:1011.6451; Phys. Rev. A **84**, 012311 (2011). [axioms + finite-dim state-space restriction carried verbatim from iter-7; re-confirmed at statement level].
- L. Masanes, M. P. Müller, *A derivation of quantum theory from physical requirements*, arXiv:1004.1483; New J. Phys. **13**, 063001 (2011). [carried verbatim from iter-7; re-confirmed].
- J. D. M. Fell, weak-* density of vector/normal states (Fell's theorem). [statement verified this session].
- D. Buchholz, *Product states for local algebras*, Commun. Math. Phys. **36**, 287–304 (1974). [contrast datum (normal product states for non-tangent separated regions); tangent-region normal-product-state failure `[unverified this session]` — Springer auth wall].
- Carried, not re-verified this session: S. Schlieder (1969), the strict-spacelike-separation Schlieder property (Halvorson Prop 3.13 attribution); S. J. Summers, *On the independence of local algebras in QFT*, Rev. Math. Phys. **2** (1990) 201–247 [the canonical review; cited via Rédei–Summers/Halvorson].

> **Binding note.** Where a correction in the referee verdict below conflicts with the body above, the **referee correction governs**; the body is the pre-referee submission, retained for the audit trail per house convention.

> **Binding note.** Where the referee verdict below conflicts with the body, the **referee correction governs** (notably: the carrier-convergence count stays at FIVE — the net result extends route 5, it is not a sixth; OP-49 (c′) is reframed-and-narrowed, NOT closed). The body is the pre-referee submission, retained for the audit trail.

## Referee verdict — Track A4-op48c-X1-singular-states, iteration 8

**Outcome: RESOLVED-POSITIVE upheld. All four findings kept; no fatals, no majors. Two minor citation-attribution corrections (binding) and two over-generalized glosses flagged.** Default stance was REFUTE; the core mathematics survived a step-by-step re-derivation and a verbatim primary-source citation audit.

### Citation audit (live, this session)
Every load-bearing primary source was re-fetched and the load-bearing quotes verified **verbatim**:
- **Rédei–Summers, arXiv:0810.5294v2** (PDF + ar5iv): the Roos sentence after Def 1 — *"if A1,A2 are commuting C*-algebras, then the extension state φ in Definition 1 may be chosen to be a product state [24], i.e. φ(XY)=φ(X)φ(Y)=φ1(X)φ2(Y)"*, [24]=Roos 1970 (CMP 16, 238–246) — **exact**. Proposition 2 (Takesaki [30]: W*-iso N1∨N2≅N1⊗̄N2 ⟺ ∃ normal product state) — **exact**. The hyperfinite-type-III example following Prop 12 (*"C*-independent in the product sense, but it is not W*-independent in the product sense"*) — **exact**. Def 2 confirmed to use the **minimal C*-norm**. Proposition 1 confirmed: plain C*-independence does *not* imply product-sense C*-independence (converse false). Bibliography refs [11] D'Antoni–Longo, [14] Florig–Summers (JMP 38, 1318–1328, 1997), [24] Roos, [27] Summers–Werner, [30] Takesaki (Tôhoku 10, 116–119, 1958) all confirmed.
- **Halvorson, arXiv:math-ph/0602036** (PDF, pdftotext): Def 3.4 Schlieder property; the implication box *"Split property ⇒ W*-independence ⇒ C*-independence ⟺ Schlieder property"* under mutual commutativity — **exact**; Remark 3.10(iii) (R∨R'=B(H), R same type, R⊗̄R' same type; type II/III ⇒ R∨R' not iso to R⊗̄R') — **exact**; the wedge statement *"since R(W) and R(W') are type III1 factors, there can be no *-isomorphism between R(W)⊗̄R(W') and R(W)∨R(W')=B(H)"* — **exact**; the p.24 quote *"type III algebras have no pure normal states ... this absence of pure states is a further obstacle to an ignorance interpretation of quantum probabilities"* — **exact** (track said p.25; cross-version drift). No fabrications.

### Re-derivation of X1-EXIST (the product)
The chain is **logically valid and the conclusion is sound**: (1) M factor ⟹ Schlieder for (M,M') [TRUE via central carriers]; (2) Schlieder ⟺ C*-independence [verbatim]; (3) plain C*-independence + commuting ⟹ a product state on C*(M∪M') [Roos, verbatim]; (4) Hahn–Banach to a state on B(H) [standard, correctly stated]; (5) every product state on B(H) is non-normal because M∨M'=B(H) is type I while M⊗̄M' is type III, so the Takesaki W*-iso fails [verbatim + type theory]. This faithfully executes the **binding iter-7 referee route R7-A4-F5** and promotes X1 from a sketched route to a theorem. The factor hypothesis is essential (used in Step 1) and the track correctly flags it.

### Corrections (binding)
1. **Attribution of the non-normality obstruction.** The headline/F1 jointly credit *"Takesaki/Florig–Summers 1997"*. The obstruction (Prop 2: no normal product state) is **Takesaki [30] alone**. Florig–Summers [14] is the *C*-side* faithful-product-state characterization (Prop 4) — real, correctly cited elsewhere, but not the obstruction. Drop the joint attribution. `[minor]`
2. **Step 1 citation.** "factor ⟹ Schlieder" is cited to Halvorson Def 3.4, which is only the *definition*. The proof is the central-carrier fact (nonzero projections in a factor have central carrier I). Cite that, not a definition. `[minor]`
3. **"Fell's theorem" (F3).** The weak-* density of normal states in the state space is the basic vector-state density fact, **not** Fell's theorem (which is the folium/quasi-equivalence density result). Fix or drop the label. `[minor]`

### Flags (not corrections, but the wiki text must not over-generalize)
- The gloss *"M∨_{C*}M' ≅ M⊗_min M' (C*-independence in the product sense), so the min-norm-domination sub-step is subsumed"* over-generalizes the Rédei–Summers hyperfinite-type-III **example** to all III1. Rédei–Summers Prop 1 explicitly denies the general implication (plain ⇏ product-sense). **This is harmless** because the existence of one product state needs only plain C*-independence + the Roos sentence — the product-sense iso is not load-bearing. State it that way.
- F2's *"singular product states still separate normal states"* is an **extension** of the iter-7 LT-sep lemma (proven for normal states), not a re-use of it; tag accordingly.

### No-go and closure audit (track level)
The track is confined to the **state-object axis** of OP-48c (normal vs singular states) and engages no other closure. **dS-cardinality no-go**: untouched. **HYP-CKV-VACUITY-R3 + extended smuggle list (indefinite-pairing/(n,n)-flag axiom; signature-valued template)**: not engaged — this track installs no readout, no η-form, no foliation; the state-existence theorem carries no signature content. The net's index set does **not** smuggle a localization (no net is used; the construction is a single Hahn–Banach extension on a fixed B(H)). **Iteration-7 trichotomy lemma / modular-constructibility ansatz**: not engaged (OP-46, different axis). **OP-49 near-no-go**: untouched (no pseudo-entropy/dS first law claim). **HYP-ENCODING-SCREEN**: reinforced at the state-postulate layer, consistent with iter-7; not relitigated. **No circularity**: horn C says no *normal* product state exists (PS fails); the track exhibits a *singular* product state — different state classes, fully consistent. Bell/CHSH, Reeh–Schlieder, Haag, PBR, Kochen–Specker, Coleman–Mandula, Weinberg–Witten, spin–statistics: not implicated.

### Net
The X1-EXIST theorem is **correct and citation-clean** after the three minor attribution fixes. RESOLVED-POSITIVE is warranted as the execution of a named decidable step (the iter-7-prescribed route), not a headline flip — the track honestly leaves horn C at theorem-conditional-on-framework and confirms X1 as a characterized, costed framework exit. Headline verdict **unchanged and tightened, 8th consecutive iteration**. Object level: still **NOT-YET-PHYSICS**; no distinguishing experimental channel emerged.
