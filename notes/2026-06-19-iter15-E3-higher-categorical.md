---
title: "Iteration 15 (track E3): the net-naturality theorem under higher-categorical / homotopical AQFT"
type: note
tags: [note, iter15, carrier-problem, untried-mathematics]
updated: 2026-06-19
---

## Track E3 (iteration 15) — the higher-categorical / homotopical / tensor-category lens on the net-naturality theorem

**Outcome: REPRODUCES-SCREEN.** A genuinely new framework (higher-categorical/homotopical AQFT + extended-TQFT/cobordism higher categories + non-unitary tensor categories), never applied to the carrier problem in the wiki beyond the iter-9 rigid-C*-tensor touch, was brought to bear. It does not expose a new decidable handle; it reproduces the encode-not-generate screen from the categorical direction, with the geometric input named precisely. Verdict, hedge, and count (FIVE) unmoved. This is the 14th consecutive confirmation if logged.

### The question
Does a higher-categorical / tensor-categorical reformulation of the carrier problem (HYP-FACTORIZATION-IS-GEOMETRY / the net-naturality theorem) expose a NEW decidable handle, or does it presuppose the geometric site / the symmetric monoidal structure that encodes spacetime?

### What was checked (all web-verified June 2026, no fabricated citations)

1. **Operadic / homotopical AQFT (Benini–Schenkel–Woike).** The entire framework is parametrized by an **orthogonal category** (C, ⊥): a category C with a symmetric, composition-stable relation ⊥ on co-terminal morphism pairs. For locally-covariant AQFT, C = **Loc** (globally hyperbolic Lorentzian manifolds) and **⊥ is DEFINED as causal disjointness**. An AQFT is a functor satisfying ⊥-commutativity (Einstein causality). The causal structure is INPUT in the source category. [ESTABLISHED — arXiv:1709.08657; arXiv:2201.09166]. This is exactly the iter-9 §4 reading made sharper: ⊥ = smuggle-item **n_1**.

2. **Bunk–Schenkel AQFT-as-FFT (Lorentzian bordisms).** Every AQFT has an underlying functorial field theory (Thm 4.10), faithful-not-full for m ≥ 2, on the **Lorentzian bordism (pseudo-)category LBord^m** built from globally hyperbolic manifolds with marked Cauchy surfaces. The geometry is the **assumed base**, not a derived output; the FFT encodes time-evolution and forgets spatially-local structure. [ESTABLISHED — arXiv:2308.01026, Lett. Math. Phys. 2025].

3. **Cobordism hypothesis (Lurie).** The fully-extended framed bordism (∞,d)-category is the **FREE symmetric monoidal (∞,d)-category with duals on one object**; a TQFT is a functor OUT of it. The manifold/spacetime geometry is the **generating input** of the domain. [ESTABLISHED — Lurie 2009; arXiv:2111.01095]. (Full proof still absent from the literature — noted, not load-bearing.)

4. **Rigid / unitary tensor category positivity (the binding iter-9 result, re-verified).** A unitary MTC has positive-DEFINITE Hermitian hom-pairings by axiom (⟺ positive real quantum dimensions). An indefinite (n,n) carrier form **cannot live** in a unitary tensor category. [ESTABLISHED — Müger; nLab MTC].

5. **The non-unitary / non-semisimple escape — checked, and it re-imports the iter-12 installed-Krein problem.** Logarithmic-CFT categories and non-semisimple Hermitian (super)group TQFTs DO admit non-positive Hermitian hom-pairings. But the Hermitian form is **INDUCED by a reflection structure** = "equivariance data for certain involutions," extra data beyond the Atiyah–Segal/categorical axioms, reformulated as a chosen symmetric-monoidal **dagger-functor**. The literature explicitly flags choosing Hermitian structures as non-canonical ("evil"). So the indefinite signature is **installed (a chosen reflection/dagger), not generated**. [ESTABLISHED — Stehouwer 2024; arXiv:2301.06664; arXiv:1604.06527; arXiv:2208.14566]. This is precisely the iter-12 Channel-B / installed-Krein closure in categorical vocabulary: the reflection structure is the categorical η.

### The structural dichotomy (the screen, categorically)
- **Keep positivity** (rigid/unitary) → signature forbidden by axiom (iter-9 result).
- **Drop positivity** (non-unitary/Hermitian) → signature exists, but only as **installed reflection/dagger data** → iter-12 installed-Krein problem.
- **The site** (operadic ⊥ / bordism category / free-SM cobordism source) **carries the causal order n_1 as input** in every case.

There is no third option in which a **natural functor out of the modular data** supplies a **localized indefinite** fiber form: localization lives in the base (orthogonality relation / bordism site), signature lives in installed reflection data, and the two never coincide canonically. This is consistent with — and does not touch — Lemma N2 (the modular flow boosts any natural sign-locus away) or the iter-9 commutant-to-generated gap. The categorical lens **relocates** the geometry (into the site and the reflection structure) but does **not remove** it.

### Honesty / anti-crank
- No HANDLE-FOUND. No referee-survivable new decidable sub-structure. The frameworks are hard; every load-bearing fact was web-verified against a real source, and no citation, theorem, or definition was fabricated. The cobordism hypothesis's incomplete-proof status is noted and is not load-bearing here.
- The one place a naïve reading could over-claim — "non-unitary categories give an indefinite form, so geometry is generated" — is exactly where the reflection-structure-is-installed-data fact closes the escape. Flagged and closed.
- **Count stays FIVE.** This is route-5 (the carrier/net-naturality problem) seen through categorical vocabulary, not a sixth route. Verdict, HYP-CKV-VACUITY-R6 (grade and condition), and HYP-ENCODING-SCREEN are all unmoved. No new numeric registry ID consumed.

### Files
- C:/PROJECTS/FAFO/universal-physics/notes/2026-06-10-iter9-carrier-naturality.md (§4: Benini–Schenkel–Woike = n_1; rigid C*-tensor positivity)
- C:/PROJECTS/FAFO/universal-physics/notes/2026-06-19-iter12-indefinite-metric-carrier-closed.md (Channel B: installed-Krein — the reflection structure is its categorical form)
- C:/PROJECTS/FAFO/universal-physics/CONCLUSION.md §8 (reopening condition); HYPOTHESES.md (HYP-FACTORIZATION-IS-GEOMETRY, HYP-ENCODING-SCREEN, HYP-CKV-VACUITY-R6)

---

## Track E3 Referee (iteration 15) — higher-categorical / homotopical / tensor-category lens on the carrier problem

**Default stance: REFUTE (brutal). Stance NOT sustained as a refutation. Outcome: UPHELD-WITH-CORRECTION. REPRODUCES-SCREEN is the correct self-classification. Verdict / hedge / count UNMOVED.**

### What I checked, and how hard
The #1 risk flagged by the mission is a plausible-but-fabricated or misstated framework claim. I web-verified all six load-bearing framework facts against real sources this session:

1. **BSW operadic AQFT (arXiv:1709.08657).** Verified — colored operad parametrized by an *orthogonal category* (C,⊥); ⊥ = causal disjointness on Loc; covers fixed-Lorentzian / locally-covariant / chiral / Euclidean. The finder's definition (symmetric, composition-stable relation on common-target morphism pairs) is the canonical one. **No fatal definitional misstatement — the mission's fatal-defect trigger does not fire.**
2. **Bunk–MacManus–Schenkel (arXiv:2308.01026, Lett. Math. Phys. 2025), Thm 4.10.** Verified — faithful functor AQFT → FFT; Lorentzian bordism base presupposed; faithful-not-full, equivalence only on spatially-global AQFTs. Two MINOR attribution slips (dropped MacManus; PMC id used as arXiv id) — see BC-1.
3. **Cobordism hypothesis (Lurie; Grady–Pavlov 2111.01095).** Verified verbatim — free symmetric monoidal (∞,d)-category with duals on one object; proof incomplete in the literature (finder correctly flags, correctly non-load-bearing).
4. **Unitary MTC positivity (Müger; nLab).** Verified — positive-definite Hermitian hom-pairings ⟺ positive quantum dimensions; indefinite (n,n) form forbidden in the unitary world. Faithful to the binding iter-9 §4 result.
5. **Non-unitary / Hermitian escape (Müller–Stehouwer 2301.06664; Freed–Hopkins 1604.06527; non-semisimple Hermitian TQFT 2108.09242/2208.14566).** Verified — Hermitian TQFTs from non-semisimple categories genuinely admit non-positive hom-pairings, but the Hermitian form is induced by a *reflection structure* = added, non-canonical ('evil') dagger data. The finder's claim that the signature is INSTALLED, not generated, is correct. One MINOR attribution slip (dropped Müller) — see BC-2.
6. **Reflection positivity = Wick-rotated unitarity (Freed–Hopkins).** Verified.

**No fabricated citation, theorem, author, or definition.** Every arXiv id resolves to a real paper faithfully characterized. The defects are three minor attribution/id slips, none verdict-bearing.

### The central argument survives adversarial reading
The finder's structural dichotomy is sound and maps exactly onto the standing closures:
- **Keep positivity (unitary MTC)** → signature forbidden by axiom (= iter-9 carrier-naturality §4).
- **Drop positivity (non-unitary/Hermitian)** → signature exists, but only as installed reflection/dagger η (= iter-12 Channel-B installed-Krein closure, in categorical vocabulary).
- **The site (orthogonality relation / bordism category / free-SM cobordism source)** carries the causal order n₁ as input in every case.

This is the encode-not-generate screen reproduced from a genuinely new direction (higher-categorical/homotopical AQFT + extended-TQFT + non-unitary tensor categories — never applied in the wiki beyond the iter-9 rigid-C*-tensor touch). The named geometric input — the orthogonality/causal relation in the base orthogonal category and the bordism site, plus the installed reflection structure for the signature — is exactly what the frameworks require. **The named smuggle is the real smuggle.**

### The two traps, both cleared
1. **The over-claim trap** ("non-unitary categories give an indefinite form ⇒ geometry is generated") is closed precisely by the reflection-structure-is-installed-data fact, which the finder verifies and applies. Not a manufactured crack.
2. **The binding iter-9 correction.** The struck Lemma N1 left a real commutant-to-generated gap. The finder does NOT claim the categorical lens closes it — key_finding 7 states the lens 'does not touch' it, and supplies no natural functor from the modular data to a localized indefinite fiber form (consistent with Lemma N2's boost-away-the-sign-locus engine). This is the correct, honest posture; BC-5 makes it binding that it remain.

### Anti-inflation enforcement
- **No HANDLE-FOUND claimed** ⇒ no demand for a referee-survivable decidable sub-structure is triggered. Correct self-classification (NONE).
- **Count stays FIVE** (route-5 seen categorically, not a sixth route). BC-4 binds this.
- No new numeric registry ID consumed; verdict, HYP-CKV-VACUITY-R6 (grade + condition), and HYP-ENCODING-SCREEN all UNMOVED. This is the 14th consecutive confirmation if logged.

### Net
A genuinely new, hard, modern-mathematical lens was brought to the carrier problem and reproduced the encode-not-generate screen with the geometric input named precisely and web-verified. The finder did not fabricate, did not over-claim, did not inflate the count, and did not falsely close the iter-9 gap. Three minor attribution corrections (BC-1, BC-2) and two scope/anti-inflation bindings (BC-3, BC-4, BC-5) are recorded; none is verdict-bearing. **UPHELD-WITH-CORRECTION; REPRODUCES-SCREEN sustained; terminal saturation re-confirmed.**

Files: C:/PROJECTS/FAFO/universal-physics/notes/2026-06-10-iter9-carrier-naturality.md (§4 — BSW = n₁; rigid-tensor positivity; the binding struck-Lemma-N1 commutant gap); C:/PROJECTS/FAFO/universal-physics/notes/2026-06-19-iter12-indefinite-metric-carrier-closed.md (Channel B — installed-Krein, the categorical η's source); C:/PROJECTS/FAFO/universal-physics/CONCLUSION.md (§8 reopening condition); C:/PROJECTS/FAFO/universal-physics/HYPOTHESES.md (HYP-FACTORIZATION-IS-GEOMETRY, HYP-ENCODING-SCREEN, HYP-CKV-VACUITY-R6).
