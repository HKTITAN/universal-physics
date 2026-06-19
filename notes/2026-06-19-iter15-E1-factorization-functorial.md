---
title: "Iteration 15 (track E1): the net-naturality theorem under factorization-algebra / functorial-QFT"
type: note
tags: [note, iter15, carrier-problem, untried-mathematics]
updated: 2026-06-19
---

## Track E1 — Factorization-algebra / functorial-QFT lens on the net-naturality theorem

**Outcome: REPRODUCES-SCREEN.** The Costello–Gwilliam / Atiyah–Segal–Lurie / Benini–Schenkel formalism is a genuinely different framework (category theory + operads + descent, never Tomita–Takesaki), and it reproduces the encode-not-generate screen from a new direction with a sharply nameable geometric input. Verdict, principal hedge (HYP-CKV-VACUITY-R6), and the carrier-convergence count (FIVE) all **unmoved** — this would be the 14th consecutive confirmation if logged. No registry ID consumed.

### The question, in this lens
The gate (iter-9): is an Aut(N,Ω)-natural, modular-covariant, **localized**, indefinite (n,n) form on a Haag-dual split BW net FORCED to be signature-inherited? The factorization-algebra reframing asks whether the local-to-global (factorization/descent) structure of an AQFT supplies a NEW decidable handle on the "localized + indefinite" conjunction, or whether it presupposes the Lorentzian/causal geometry.

### What the framework actually is (web-verified)
- **Costello–Gwilliam:** a (pre)factorization algebra is a functor `U ↦ Obs(U)` on the opens of a **fixed** space `X`, with structure maps for disjoint inclusions (vol. 1, Cambridge NMM 31; nLab). The manifold is the **site**, i.e. input.
- **Functorial / cobordism QFT (Lurie):** a symmetric-monoidal functor out of a bordism category; the cobordism hypothesis classifies fully-extended TQFTs by fully-dualizable objects. The **geometric** cobordism hypothesis (Grady–Pavlov, arXiv:2111.01095) installs the geometric structure as a fixed parameter via tangential structures over `BO_d` — **the bordism category IS the geometry**, and the structure group `O(d)` carries the signature.
- **Homotopical-AQFT bridge (the load-bearing object):** Benini–Perin–Schenkel (CMP 377(2):971–997 (2020), arXiv:1903.03396) prove **AQFT ≅ time-orderable prefactorization algebra** on globally hyperbolic Lorentzian manifolds; Benini–Carmona–Grant-Stuart–Schenkel (arXiv:2412.07318) upgrade this to a clean 1-categorical equivalence in which **both** sides are multifunctors out of the **orthogonal category** `Loc^rc̄ = (Loc^rc, ⊥)` with `⊥ =` causal disjointness. pAQFT observables realize this (Gwilliam–Rejzner, arXiv:2212.08175).

### The exact geometric input smuggled
Verbatim (arXiv:2412.07318): *"the relevant orthogonal category `Loc^rc̄ := (Loc^rc, ⊥)` … the orthogonality relation `⊥` which is defined by causal disjointness."* Two consequences, both fatal to "generates":

1. **Localization = factorization over `⊥`.** A (pre)factorization algebra's defining structure maps are indexed by causal-disjointness. "Localized" / "vanishing cross-coupling between disjoint regions" is *meaningful only relative to `⊥`*. But `⊥` is exactly the iter-8/iter-9 smuggle-item **n1** (the index-set causal order; BGL positivity⟺isotony). So this framework's notion of localization **is** the geometry — the same irreducible-localization residual the iter-9 naturality note already isolated, now re-derived from pure category theory. On the Lorentzian side BPS must additionally restrict to **time-orderable** tuples, i.e. it imports the time-orientation too.
2. **No signature in the fibers.** Both AQFT and prefactorization algebra are algebra-valued / cochain-complex-valued functors with **no Hilbert-space positivity, no inner product, no signature** in the target. So the formalism can neither *generate* nor *obstruct* an (n,n) form: the signature lives entirely in the geometric base. This is the categorical mirror of the iter-9 finding that the fibers carry no signature and the geometry sits in the base (Neeb–Ólafsson fiber-bundles-over-ordered-symmetric-spaces; Komalan double-categorical AQFT). The Riemannian↔Lorentzian split in the factorization-algebra literature (the Riemannian BV theorems vs the "Lorentzian structure is essential" pAQFT theorems) is an explicit instance: signature enters by **choice of base geometry / Wick rotation**, never as an output.

### The one candidate handle, and why it fails the referee bar
The BPS/BCGS **equivalence** is a genuinely new precise object: it makes the carrier/net-naturality question *translatable* into factorization-algebra language. One could hope the factorization (descent) axioms add constraints that decide the localized-indefinite conjunction. They do not: the equivalence is between two functor-categories **over the same fixed `⊥`**, so it transports the question verbatim and carries `n1` across unchanged. It is a translation tool, not a handle — exactly analogous to the iter-9 result that reverse-Weinberg–Witten is the carrier problem seen from the empirical side (same object, new vocabulary). **`new_handle = NONE`.** This is also the correct anti-crank call: claiming the equivalence "decides" the gate would be manufacturing a fake crack, since both of its sides presuppose the causal order that supplies localization.

### Why this is not a sixth route (count stays FIVE)
This is the **categorical presentation of route (5)** (the localization-template / index-set-order residual), not a new convergence. The factorization formalism re-expresses n1 as the orthogonality relation `⊥`; it adds a fourth independent witness that "localized" presupposes a fixed causal base (alongside BGL, Neeb–Ólafsson, Komalan), but it is the *same* obstruction. Binding inheritance: **count = FIVE.**

### Honest value of the negative
The no-go is now confirmed **robust across modern category-theoretic / homotopical mathematics**, not just operator-algebraic mathematics: an entirely different formalism, designed precisely to make local-to-global structure manifest, locates the signature and the localization in the same place — the geometric base — and provides no functorial enrichment that supplies an indefinite localized fiber form. This matches the standing honest-expected-outcome verbatim and tightens the §4 readout-independence claim by one more independent direction.

### Dossier contribution (crisp open-problem sentence)
The factorization-algebra/functorial reframing makes the residual decidable sub-problem precise: *exhibit (or rule out) a (pre)factorization or cobordism structure whose causal-disjointness/orthogonality relation `⊥` and whose target signature are OUTPUTS of the algebra-valued functor, rather than indexing data of a fixed geometric source category* — i.e. remove `⊥` from the source and ask whether the factorization axioms alone can regenerate it (the categorical form of "the localization template is the geometry").

### Citations (all web-verified this session)
- Costello–Gwilliam, *Factorization Algebras in QFT* vol. 1 (Cambridge NMM 31); nLab `factorization algebra`.
- Benini–Perin–Schenkel, CMP **377**(2):971–997 (2020), arXiv:1903.03396 — AQFT ≅ time-orderable prefactorization algebra, globally hyperbolic Lorentzian.
- Benini–Carmona–Grant-Stuart–Schenkel, arXiv:2412.07318 — orthogonal category `(Loc^rc, ⊥)`, `⊥ =` causal disjointness; algebra/chain-complex-valued, no positivity.
- Gwilliam–Rejzner et al., arXiv:2212.08175 — pAQFT observables form a factorization algebra.
- Benini–Musante–Schenkel, Lett. Math. Phys. **114**(1) (2024) — Lorentzian free BV: tPFA vs AQFT.
- Lurie, *On the Classification of TFTs* (2010); Grady–Pavlov, *The geometric cobordism hypothesis*, arXiv:2111.01095 — geometric structure as fixed source parameter, `O(d)` structure group.

### Honesty / limits
- The `note_md` §"candidate handle" judgment and the "count stays FIVE / same as route 5" identification are **[INFERENCE]** over the web-verified [ESTABLISHED] framework facts; they are not theorems and were not adversarially refereed in this track.
- I did not independently re-derive the BPS equivalence; I rely on the published statements and the verbatim orthogonality-relation quote.
- No fabricated citation: every arXiv ID and journal reference above was returned by live search/fetch this session.

---

## Referee verdict - Track E1 (factorization-algebra / functorial-QFT lens on the net-naturality theorem)

**Stance: REFUTE by default, brutal on framework fidelity. Stance NOT sustained as a refutation. Outcome: UPHELD-WITH-CORRECTION (REPRODUCES-SCREEN confirmed; one citation misattribution + two precision corrections; verdict/hedge/count UNMOVED).**

### 1. Framework mathematics - web-verified, real, correctly applied
Every load-bearing framework fact was checked live this session:
- **BPS equivalence (arXiv:1903.03396):** VERIFIED verbatim incl. journal coordinates CMP 377(2):971-997 (2020). AQFT = time-orderable prefactorization algebra on globally hyperbolic Lorentzian manifolds. The finder's reading (the Lorentzian/globally-hyperbolic structure and time-orderability are HYPOTHESES, i.e. inputs) is faithful.
- **BCGS (arXiv:2412.07318):** VERIFIED - real title, four named authors, equivalence over globally hyperbolic Lorentzian manifolds, target = symmetric monoidal infinity-category of cochain complexes (confirming the no-positivity/no-signature-in-fibers claim). The orthogonal-category (Loc, perp) with perp = causal disjointness is corroborated by the Benini-Schenkel-Woike orthogonal-category literature ("orthogonality relations formalize causal disjointness (spacelike separateness)", "codify commutation relations in AQFT").
- **Costello-Gwilliam:** correct standard definition (functor on opens of a fixed space; the space is the input/site).
- **Grady-Pavlov geometric cobordism hypothesis (arXiv:2111.01095):** VERIFIED real; geometric structures (Riemannian metrics, complex/symplectic) are source-category parameters - the finder's "bordism category IS the geometry, O(d) carries the signature" gloss is the correct standard reading.
- **Benini-Musante-Schenkel, LMP 114(1):36 (2024):** VERIFIED exactly.

No misstated definition of a factorization algebra or the cobordism hypothesis - the #1 fatal-defect risk the mission flagged did NOT materialize. The hallucination check passes.

### 2. The one citation defect (BC-1)
arXiv:2212.08175 is **Gwilliam-Rejzner**, not "Gwilliam-Rejzner et al." as the finder wrote. The content (pAQFT observables form a factorization algebra) is correct; only the author attribution is wrong (a conflation with the separate, real Gwilliam-Rejzner pAQFT line). Minor, non-load-bearing, corrected in the record. No fabricated citation anywhere; every arXiv ID and journal reference resolves to a real paper.

### 3. Central claim checked against the wiki closures - holds
The finder's thesis (REPRODUCES-SCREEN; new_handle=NONE; geometric input = the causal-disjointness/orthogonality relation perp = n1, plus time-orientation and the O(d) bordism structure group) is consistent with and reinforced by:
- **iter-3 encode/generate criterion:** the framework's target fibers carry no signature (cochain complexes, no positivity), so it can neither generate nor obstruct an (n,n) form - the signature lives in the geometric base. Matches the iter-7/iter-9 finding that the fibers carry no signature.
- **iter-9 net-naturality + Lemma N2:** "localized" is meaningful only relative to perp, and perp IS the index-set order n1 that Lemma N2 / the localization-is-the-geometry residual already isolated. The factorization framework re-expresses the SAME irreducible-localization residual from category theory.
- **iter-9 rigid-tensor-category positivity axiom:** the finder's claim that enlarging to operadic/categorical structure adds only positive/signature-free data is exactly the iter-9 Section 4 closure (rigid C*-tensor categories have positive hom-space inner products by axiom; Benini-Schenkel-Woike orthogonality = n1). 
- **iter-12 Krein closure:** the target categories carry no indefinite fiber form - consistent with subquestion-#3 closed-negative (no genuine indefinite localized modular involution from positive data).
- **HYP-ENCODING-SCREEN:** the no-go is confirmed robust across modern category-theoretic/homotopical mathematics, a genuine additional independent direction.

### 4. The candidate handle correctly FAILS the bar
The BPS/BCGS equivalence is a real new precise object but is correctly judged a TRANSLATION TOOL, not a decidable handle: both functor-categories are defined over the SAME fixed perp, so the equivalence transports the carrier question verbatim and carries n1 across unchanged - exactly analogous to the iter-9 reverse-Weinberg-Witten result (same object, new vocabulary). Claiming it "decides" the gate would be manufacturing a fake crack, since both sides presuppose the causal order supplying localization. The finder did NOT manufacture a crack; HANDLE-FOUND is correctly not claimed. This is the right anti-crank call.

### 5. Precision correction on novelty (BC-2)
The finder's "NEVER applied in this wiki" is only partly right. The Costello-Gwilliam side, the cobordism side, and the BPS/BCGS *equivalence theorem* ARE new. But the orthogonality-relation = n1 observation was ALREADY logged in the iter-9 carrier-naturality note Section 4 (citing Benini-Schenkel-Woike arXiv:1709.08657). The new framework re-derives an already-recorded point from a richer direction. The finder's note already frames this honestly as "a fourth independent witness ... the same obstruction" - kept and bound.

### 6. Anti-inflation / registry discipline - clean
- Count STAYS FIVE (categorical presentation of route 5, not a sixth route). Binding inheritance honored (BC-3).
- No new numeric registry ID consumed.
- Verdict UNMOVED (14th consecutive confirmation if logged).
- Principal hedge HYP-CKV-VACUITY-R6 unmoved in grade (MEDIUM-HIGH->HIGH conditional) and condition (net-naturality theorem + located commutant-to-generated gap).
- HYP-ENCODING-SCREEN no-test corollary unmoved.
- The one [INFERENCE] tag (the count/handle judgment) is honestly self-flagged as unverified inference, not presented as a theorem.

### Verdict-bearing summary
**REPRODUCES-SCREEN UPHELD-WITH-CORRECTION.** A genuinely different framework (operads + category theory + descent, never Tomita-Takesaki) reproduces the encode-not-generate screen from a new direction with a sharply-named geometric input (perp = n1 + time-orientation + O(d) bordism structure). Honest expected outcome matched verbatim; the no-go is now confirmed robust across modern homotopical mathematics, tightening the Section 4 readout-independence claim by one more independent direction. Corrections BC-1 (Gwilliam-Rejzner author fix) through BC-4 (geometric-input verification), none verdict-bearing. The standing verdict, principal hedge, encoding-screen corollary, and carrier-convergence count FIVE are all unmoved.
