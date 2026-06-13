---
title: "OP-46 / carrier obligation (i), iteration 9: the naturality promotion — constructibility becomes a theorem, localization is the irreducible residual (and is the geometry)"
type: note
tags: [note, iter9, modular-theory, naturality, carrier-problem, op-46]
updated: 2026-06-10
---

# OP-46 / carrier obligation (i), iteration 9: the naturality promotion — constructibility becomes a theorem, localization is the irreducible residual (and is the geometry)

**Status:** ATTEMPT executed — obligation (i) of the iter-8 net carrier no-go (replace the net-constructibility ANSATZ by a NATURALITY THEOREM) attacked head-on. The ansatz **splits**: its *constructibility* half (Gram operator is a function of the modular generators) is **discharged to a naturality theorem** via geometric-modular-action functoriality; its *localization* half is shown **irreducible** — "(loc)" is natural only relative to the net's index set, which **is** the geometry ($n_1$). Net: the principal hedge is hardened in *precision* (its condition sharpens from an unproven algebra-membership ansatz to a proven-irreducible base-category hypothesis) but **stays conditional HIGH, not unconditional HIGH**. The carrier no-go is *sharpened, not closed*. Verdict unchanged (8th consecutive); carrier-convergence count stays at FIVE.
**Last updated:** 2026-06-10
**Iteration:** 9

Grading instrument: [2026-06-08-iter3-encode-vs-generate-criterion.md](2026-06-08-iter3-encode-vs-generate-criterion.md) ($g_1$–$g_7$, $\kappa_\Phi$, $\Delta_{\rm geo}$); net items $n_1$–$n_3$ from [2026-06-10-iter8-net-carrier-no-go.md](2026-06-10-iter8-net-carrier-no-go.md). Boundary inherited from iter-7 (the trichotomy + single-algebra ansatz) and iter-8 (the covariance–locality engine + net-constructibility ansatz + the two named obligations). Prior closures not relitigated.

> Scope honesty: §§1–4 are this session's own mathematics, derived stepwise with every assumption flagged, and verified numerically twice (fresh RNG 20260610) in the chiral rapidity model and the half-line dilation model. The constructibility-half theorem (Lemma N1) rests on the GMA reconstruction result, web-verified live; the residual (§3) is a *structural identification*, not an ansatz. Citations web-verified this session unless marked [unverified].

---

## 1. The naturality formulation

In the Brunetti–Fredenhagen–Verch locally-covariant idiom (fields/observables = natural transformations between functors) `[ESTABLISHED — arXiv:math-ph/0112041]`, define:

- **Source $\mathsf{Net}$:** nets $\mathcal N=\{\mathcal M(O)\}_{O\in\mathcal I}$ with vacuum $\Omega$ and full modular package $\mathfrak m(\mathcal N)=(\{\Delta_O^{it}\},\{J_O\},\{\Delta_{O'|O}\},\{P_{O',O}\})$; automorphisms $\mathrm{Aut}(\mathcal N,\Omega)$ (which *contains the modular action*).
- **Target $\mathsf{Krein}$:** measurable fields $\{V_x\}$ with Hermitian forms $\eta_x$.
- **Carrier functor** $\Phi:\mathsf{Net}\to\mathsf{Krein}$.
- **(n,n) as a natural transformation** $\sigma:\Phi\Rightarrow\underline{(n,n)}$ (the signature flag, natural in $\mathrm{Aut}(\mathcal N,\Omega)$).
- **(loc) as a natural transformation** $\ell:\Phi\Rightarrow\mathrm{Loc}_{\mathcal I}$ to a *base-projection functor* recording each fiber's support region in $\mathcal I$.

A **natural carrier that generates signature** = a $\Phi$ with $\sigma$ indefinite and $\ell$ localized, natural, smuggle-free ($g_1$–$g_7$, $n_1$–$n_3$ false). `[INFERENCE — definitions]`

## 2. The constructibility half: discharged to a theorem

**Lemma N1 (constructibility from naturality).** `[INFERENCE, high]` An $\mathrm{Aut}(\mathcal N,\Omega)$-natural modular-covariant carrier has Gram field $\eta\in W^*(\mathfrak m(\mathcal N))$ — *forced*, not assumed. *Proof.* Naturality includes equivariance under the modular subgroup, so $[\eta,\Delta_O^{it}]=0$ (the iter-3 C2 forcing), i.e. $\eta\in\{\Delta_O\}''$. Globally, by Buchholz–Dreyer–Florig–Summers ([arXiv:math-ph/9805026](https://arxiv.org/abs/math-ph/9805026), verified) and Summers–White ([arXiv:hep-th/0304179](https://arxiv.org/abs/hep-th/0304179), verified), the modular conjugations $\{J_O\}$ under CGMA *determine* the spacetime, isometry group, and covariant representation — the geometry is a **functor of the modular data**, so every natural form is a natural function of it. ∎ This **discharges the iter-8 net-constructibility ansatz on its constructibility half.**

**Lemma N2 (the engine, promoted to a naturality obstruction).** `[INFERENCE, high — numerically demonstrated twice]` A localized indefinite natural form has a *natural sign locus* $\Lambda\subset\mathcal I$, carried by every automorphism, hence by the modular flow. The flow acts as a free translation $\theta\mapsto\theta-2\pi t$ ($p\mapsto e^{-2\pi t}p$, Borchers); a free translation has **no fixed locus in the open index set**, so the only flow-invariant sign-pattern is a global constant — definite. Hence *localized + natural + indefinite is impossible at finite locus.*

**Fixed-point subtlety, closed (§ engine leak):** the half-line dilation fixes $p=0,\infty$ — the **wedge edge**, the boundary-at-infinity *outside* the open $\mathcal I$; a form concentrated there is supported on a geometric boundary = $n_1$. So no escape. Numerics (fresh RNG): local sign form $\|m_{\rm boost}-m\|_\infty=2$ for all $t\neq0$; constant boost-invariant to $0$; the only invariant indefinite object is the Fourier multiplier $\mathrm{sgn}(\text{modular frequency})$ — natural **but nonlocal** ($1/\mathrm{sep}$ Hilbert tail). The iter-8 dichotomy (**positive-and-local** / **signature-free** [by separate enumeration, not the naturality — binding iter-7 inheritance] / **indefinite-but-nonlocal**) survives the promotion. **No natural carrier is both indefinite and localized.**

## 3. The irreducible residual: localization is the geometry

The promotion exposes that **(loc) was never a natural condition standing free of the geometry.** The natural transformation $\ell:\Phi\Rightarrow\mathrm{Loc}_{\mathcal I}$ targets a base functor that is part of the *source datum*: "vanishing cross-coupling between disjoint regions" presupposes a region order on $\mathcal I$ — which is $n_1$, and by BGL (positivity ⟺ isotony), Neeb–Ólafsson (Euler element), and Lashkari–Leung–Moosa–Ouseph (AdS₂-from-locality) **is the geometry**.

So the ansatz is **replaced not by an unconditional theorem but by a sharper, provably-irreducible residual** — the *localization-template hypothesis* $n_1$:

> **Residual `[OPEN — the exact naturality hypothesis that cannot be removed]`.** The net carrier no-go is unconditional *given* that (loc) is defined relative to $\mathcal I$'s order; and that hypothesis cannot be made a theorem, because removing it removes the meaning of "localized." The geometry is the localization template.

Carrier-side confirmation: Neeb–Ólafsson ([arXiv:1704.01336](https://arxiv.org/abs/1704.01336), verified) — modular $J$'s ↔ antiunitary reps studied as **"fiber bundles over ordered symmetric spaces"**: geometry in the *base*, no signature in the fibers. Komalan double-categorical AQFT ([arXiv:2601.07807](https://arxiv.org/abs/2601.07807), Jan 2026, verified) — the **spacetime double category (regions + inclusions) is the base** the algebra-valued functor lives over; localization in the base, no indefinite fiber form.

## 4. The larger-structure loophole (tested, closed in the wrong direction)

A carrier natural under a *larger* structure than the modular generators — the obligation's named escape:

- **Subfactor standard invariant / planar algebra.** `[INFERENCE — closed]` The standard invariant ([arXiv:math/0304340](https://arxiv.org/abs/math/0304340)) is a **rigid C\*-tensor category** — hom-space inner products *positive by axiom*; it categorifies a positive Hilbert structure and adds only positive-definite operators (fusion, conditional expectations, [arXiv:2111.04488](https://arxiv.org/abs/2111.04488) [unverified — title-level]), never a signature. Enlarging the naturality symmetry makes the constraint *stronger*, shrinking the pool.
- **Operadic / double-categorical AQFT.** `[INFERENCE — closed]` Benini–Schenkel–Woike ([arXiv:1709.08657](https://arxiv.org/abs/1709.08657), verified) parametrize by an *orthogonality (causal) relation* = $n_1$ input; the double category puts localization in the base. Neither installs an indefinite fiber form.
- **Modular-Berry / kinematic space** — obligation (ii), not this track; imports $n_1$ by construction (lives on a space of regions). `[OPEN — unchanged]`

**No larger structure supplies a natural localized indefinite form.** `[OPEN — three-session scoped negative search]`

## 5. Consequences proposed for the wiki

1. **HYP-CKV-VACUITY-R5 → R6 (precision hardening, grade unchanged).** The condition on the HIGH hedge sharpens: from "net-constructibility ansatz" (an unproven $W^*(\mathfrak m)$-membership claim) to the **localization-template hypothesis $n_1$** (a proven-irreducible base-category datum). The constructibility half is now a theorem (Lemma N1); the localization half is the residual, and it is the geometry. The hedge stays **conditional HIGH**, not unconditional HIGH. Obligation (i) is **partially met** — the ansatz is replaced, but by a residual, not a discharge.
2. **HYP-FACTORIZATION-IS-GEOMETRY — restated.** The carrier problem's localization step is now identified at its sharpest: *the localization template is the geometry; no functorial enrichment of the algebraic data supplies it.* This is the **naturality-promotion of route (5)**, **not a sixth route** — the count **stays at FIVE** (binding inheritance).
3. **HYP-ENCODING-SCREEN — inherits the sharpened condition,** grade unchanged.

## 6. Open subquestions

1. Obligation (ii) remains: a modular-Berry-holonomy-natural localized indefinite form not presupposing kinematic space (the residual escape; it imports $n_1$, so the task is to show it cannot be made carrier-free). `[OPEN]`
2. Is there a precise theorem that the localization-template hypothesis is *strictly* necessary — i.e. a net with no causal index order provably carries *no* localized form of any signature (the converse to the parametrization-is-geometry corollary, a true non-existence rather than a residual)? `[OPEN]`
3. Does any non-self-adjoint / PT-symmetric relative modular structure evade Lemma N2 by being neither flow-covariant nor a base-localized form? `[OPEN — inherited from iter-8]`

## Proposed registry items

### LEM-NAT-CARRIER — (new lemma)
**Statement.** Every $\mathrm{Aut}(\mathcal N,\Omega)$-natural modular-covariant carrier has Gram operator forced into $W^*(\mathfrak m(\mathcal N))$ (Lemma N1, via GMA functoriality) and a natural sign locus that the modular flow boosts away (Lemma N2); hence it is positive-and-local, signature-free, or indefinite-and-nonlocal — never both indefinite and localized. The localization predicate is irreducible: it presupposes the index-set order $n_1$, which is the geometry. Tag `[INFERENCE]` (high on N1–N2; the residual is `[OPEN]`).

### HYP-CKV-VACUITY-R6 — (hypothesis-refinement)
**Statement.** The OP-46 principal hedge's condition sharpens from the net-constructibility ansatz to the localization-template hypothesis $n_1$; the constructibility half is discharged to a naturality theorem, the localization half is the irreducible residual and is the geometry. Hedge stays conditional HIGH (not unconditional); convergence count stays FIVE; headline unchanged. Tag `[INFERENCE]`.

## See also

- [../CONCLUSION.md](../CONCLUSION.md) §§4, 5, 8 — the hedge this note sharpens and the reopening condition (the carrier problem)
- [../HYPOTHESES.md](../HYPOTHESES.md) — HYP-CKV-VACUITY-R5, HYP-FACTORIZATION-IS-GEOMETRY, HYP-MODULAR-TRICHOTOMY, HYP-ENCODING-SCREEN
- [2026-06-10-iter8-net-carrier-no-go.md](2026-06-10-iter8-net-carrier-no-go.md) — the net no-go and its two named obligations (this is obligation (i))
- [2026-06-10-iter7-indefinite-pairing-attempt.md](2026-06-10-iter7-indefinite-pairing-attempt.md) — the single-algebra trichotomy + ansatz
- [2026-06-08-iter3-encode-vs-generate-criterion.md](2026-06-08-iter3-encode-vs-generate-criterion.md) — grading instrument ($g_1$–$g_7$, $n_1$–$n_3$)
- [../domains/mathematics.md](../domains/mathematics.md) — Tomita–Takesaki, Borchers–Wiesbrock, GMA, standard subspaces
- [../EPISTEMICS.md](../EPISTEMICS.md) — tag discipline

> **Binding note.** Where a correction in the referee verdict below conflicts with the body above, the **referee correction governs**; the body is the pre-referee submission, retained for the audit trail per house convention. In particular: the carrier-convergence count stays at FIVE (this is route (5)'s naturality promotion, not a sixth route); the signature-free prong rests on separate enumeration, not on the naturality; and obligation (i) is graded **partially met** (residual, not discharge) — not a full discharge to unconditional HIGH.

> **Binding note.** Where the referee verdict below conflicts with the body, the **referee correction governs** (notably: A4 was overturned RESOLVED-NEGATIVE→SHARPENED-OPEN — the TT projector annihilates the leading divergence, de-hardening the R2 foothold; A2 "unconditional HIGH" was struck — the hedge stays MEDIUM-HIGH→HIGH conditional; the carrier-convergence count stays FIVE). The body is the pre-referee submission, retained for audit.

SHARPENED-OPEN, UPHELD WITH ONE MAJOR CORRECTION; headline unchanged (8th consecutive). The engine (Lemma N2) is sound and reproduced: by the Borchers relation the modular flow rescales momenta exponentially, so a localized indefinite form sign locus is boosted away (boost-violation max-norm 2 for all nonzero t); only positive constants are boost-invariant; sgn of modular frequency is natural but non-local; the fixed points are the wedge edge n1. Lemma N1 is a MAJOR error: commuting with the modular flow places the Gram in the commutant of Delta, not in the abelian algebra generated by Delta; for Type III-1 these differ because the modular spectrum is degenerate (numerics: 12 spectral degeneracies in a 4x4 toy), so the constructibility ansatz is only weakened, not discharged to a theorem. The GMA citations (Buchholz-Dreyer-Florig-Summers; Summers-White) reconstruct spacetime from the modular conjugations J, not a Gram from Delta. The residual is therefore two-fold: the localization-template hypothesis n1 (F3, correct and well-cited) plus the surviving commutant-to-function-of-Delta gap; the principal hedge HYP-CKV-VACUITY-R5 stays MEDIUM-HIGH-to-HIGH conditional on both, not on the localization template alone. Citations all real (BFV, Buchholz et al., Summers-White, Neeb-Olafsson 1704.01336, Komalan 2601.07807, Benini-Schenkel-Woike, Morinelli-Neeb-Olafsson 2603.26390, 2111.04488); two fixes: math 0304340 is by Bisch not Jones, and the Neeb-Olafsson fibers-carry-no-signature reading is finder inference, not a paper statement. No-go red-team clean: no conflict with dS-cardinality, the iter-7 trichotomy or iter-8 net no-go, OP-48ab, or OP-49; carrier count stays FIVE; no RESOLVED-POSITIVE. Net: a verdict-neutral sharpening whose centerpiece theorem does not hold; the hedge is unchanged in grade but its condition must be widened, not narrowed.
