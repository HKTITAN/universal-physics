# Amplitudes and Positive Geometry 2023–2026: Surfaceology, Cosmohedra, Hidden Zeros, and the Gravity Bound

**Status:** Iteration-6 research note (track R3) — web-verified literature delta against [H5](../HYPOTHESES.md#h5), [UNIFICATION_LANDSCAPE §9](../UNIFICATION_LANDSCAPE.md), and [FINDINGS §4](../FINDINGS.md). All arXiv IDs below were verified against abstract pages on 2026-06-10.
**Last updated:** 2026-06-10

> **One-line delta.** The positive-geometry program escaped the planar-$\\mathcal N=4$ box (all genus, non-SUSY gluons, pions, fermions, cosmological wavefunctions) — but **not** the no-gravity box, and **not** the flat-background-kinematics box. H5's tag stays SPECULATIVE; its scope clause and confidence move; the standing [CONCLUSION](../CONCLUSION.md) verdict is untouched.

## 1. Baseline being updated

As of iteration 5, [H5](../HYPOTHESES.md#h5) carried: tag SPECULATIVE with an \"ESTABLISHED-within-planar-$\\mathcal N=4$ integrand core\", confidence low, and four referee bounds: (i) single-ordering associahedron only; (ii) integrand-only (no loop integration); (iii) planar/maximally-SUSY only — \"no positive geometry for gravity, non-planar, or massive non-SUSY matter\"; (iv) spacetime partially smuggled in via momentum-twistor kinematics. The sweep below tests each bound against 2023–2026 literature.

## 2. Surfaceology: beyond planarity, beyond SUSY, partially beyond integrands

**The construction.** [ESTABLISHED, within the framework] For colored scalar $\\mathrm{Tr}(\\phi^3)$, amplitudes at $L$ loops and arbitrary genus (the full 't Hooft expansion) are computed by *curve integrals*: kinematic variables $X_C$ are attached to curves $C$ on a fatgraph/bordered surface, and schematically

$$\\mathcal A^{(L)}_n \\;=\\; \\int_{\\mathbb R^{E}} d^{E}t\\; \\mathcal K(t)\\, \\exp\\Big(-\\sum_{C}\\alpha_C(t)\\,X_C\\Big),$$

where the $\\alpha_C$ are piecewise-linear tropical (\"headlight\") functions counting curves and $\\mathcal K$ is a Mirzakhani-type kernel modding out the mapping-class-group redundancy (Arkani-Hamed–Frost–Plamondon–Salvatori–Thomas, arXiv:2309.15913, 2311.09284). Explicit results are given through two loops for all $n$, **including non-planar amplitudes**; the $n$- and $L$-dependence effectively decouples. [INFERENCE] The formalism produces *loop-integrated* expressions, not only integrands — the colored-Yukawa extension states an $L$-loop integrated amplitude as a sum over $2^L$ combinatorial determinants (De–Pokraka–Skowronek–Spradlin–Volovich, arXiv:2406.04411, JHEP 09 (2024) 160, which also extends the formalism to colored **fermions** at all-loop/all-genus/all-multiplicity integrand level). The analytic continuation from the tropical/Schwinger-like representation to physical kinematics remains the hard step and should not be oversold.

**Consequence for H5.** Referee bounds (i)–(iii) are *dissolved for colored theories*: not single-ordering (full $1/N$ expansion), not integrand-only (loop-integrated formulas exist in stated cases), not planar-only and not SUSY-only. Bound (iv) *mutates rather than dissolves*: surfaceology abandons momentum twistors (it runs on ordinary Mandelstams in any $D$), so the \"4D conformal spacetime presupposed\" objection no longer applies — but flat-space momenta/Mandelstams are still the **input data**, so spacetime is still presupposed at the kinematic level. By the wiki's encode/generate criterion ([notes](2026-06-08-iter3-encode-vs-generate-criterion.md)) the program **encodes**.

## 3. From colored scalars to gluons and pions

[INFERENCE, tree-level ESTABLISHED] *Scalar-scaffolded gluons* (Arkani-Hamed–Cao–Dong–Figueiredo–He, arXiv:2401.00041, JHEP 04 (2025) 078): Yang–Mills amplitudes in **any dimension, any loop order** are proposed from the same combinatorics via $2n$ colored scalars in $n$ flavor pairs; gluon amplitudes sit on scaffolding residues. Tree level is demonstrated (coinciding with bosonic-string extra-dimensional polarizations); loop level is conjectural with leading-singularity checks through two loops. [ESTABLISHED, as demonstrated] *NLSM $\\subset$ Tr$(\\phi^3)$* (arXiv:2401.05483): a one-parameter $\\pm\\delta$ shift of the planar $X_{i,j}$ turns Tr$(\\phi^3)$ into pion amplitudes **to all loop orders in the planar limit**, with the Adler zero *emergent*. These are the program's first non-supersymmetric, realistic-adjacent theories — gluons and pions, not superpartners.

## 4. Hidden zeros and splits: locality-as-derived gets its first theorems

[ESTABLISHED, tree level] Tr$(\\phi^3)$, NLSM and YM amplitudes vanish on loci where a rectangular family of curvy Mandelstams

$$c_{a,b}\\;\\equiv\\;X_{a,b}+X_{a+1,b+1}-X_{a,b+1}-X_{a+1,b}$$

is set to zero — zeros invisible diagram-by-diagram (arXiv:2312.16282). Near a zero the amplitude **2-splits** into products of lower amplitudes *away from poles* — a factorization not mandated by unitarity, extended to all topological orders and to string amplitudes with loop-integrated multi-soft limits (Arkani-Hamed–Figueiredo, arXiv:2405.09608). [ESTABLISHED] Rodina proved (arXiv:2406.04234; PRL 134, 031601 (2025)) that each hidden zero is *equivalent* to a \"subset\" enhanced BCFW UV scaling, and that the zeros **uniquely fix** Tr$(\\phi^3)$ tree amplitudes (given ordered local propagators, trivial numerators). [INFERENCE] Zhou (arXiv:2604.07195, 2026) argues locality+unitarity+zeros determine tree YM and NLSM via reconstructed soft theorems. [ESTABLISHED, cases computed] Zeros survive the double copy into gravity-coupled scalars, DBI and the special Galileon (Li–Roest–ter Veldhuis, arXiv:2403.12939, JHEP 04 (2025) 121).

**Reading with discipline.** These results genuinely strengthen H5's \"locality and unitarity as derived\" sub-thesis: there now exist theorem-grade statements in which the amplitude is *defined* by zeros/geometry and locality is recovered as output. But they are statements **about S-matrix functions on a fixed flat background** — derived-locality-within-QFT, not emergent spacetime. They also supply sharp internal falsifiers (integrand zeros checkable against independent computations), not experiments.

## 5. Cosmohedra and the cosmological wavefunction

[ESTABLISHED, construction] The **cosmohedron** (Arkani-Hamed–Figueiredo–Vazão, arXiv:2412.19881, JHEP 11 (2025) 029) is a polytope for the **full** Tr$(\\phi^3)$ cosmological wavefunction — faces encode the \"Russian-doll\" combinatorics of nested non-overlapping subpolygons — obtained by blowing up associahedron faces; explicit facet inequalities at tree level and one loop. This upgrades the 2017 per-graph cosmological polytope to a per-process object. [ESTABLISHED, 2026] The conjectured face$\\leftrightarrow$Matryoshka bijection was *proven*, and the construction generalized to \"chiseled polytopes\" (Ardila-Mantilla–Arkani-Hamed–Figueiredo–Vazão, arXiv:2603.03425). [SPECULATIVE/OPEN] All-loop, stringy, and \"cosmological correlahedron\" extensions remain conjectured. [ESTABLISHED tree / INFERENCE loop] Hidden zeros extend to the wavefunction: graph contributions factorize near zeros for all tree graphs, with loop-level evidence (De–Paranjape–Pokraka–Spradlin–Volovich, arXiv:2503.23579, JHEP 07 (2025) 174).

[SPECULATIVE as ontology] Adjacent: **kinematic flow** (Arkani-Hamed–Baumann–Hillman–Joyce–Lee–Pimentel, arXiv:2312.05300) — tree-level FRW correlators of conformally coupled scalars obey first-order ODEs *defined purely in boundary kinematic space*, from which bulk time evolution is reconstructible; the authors frame this as time \"emerging\". By the encode/generate criterion this **encodes**: the FRW background and conformal time enter via the kinematic data and mode functions. Scope caution for all of §5: conformally-coupled-scalar Tr$(\\phi^3)$ wavefunctions in FRW — **not** the graviton wavefunction, no claim about dS quantum gravity.

## 6. Gravity: the bound that did not move

[INFERENCE — absence claim from systematic search, June 2026] There is **no** positive geometry, curve-integral, or surfaceology construction for graviton amplitudes. Surfaceology's mechanism is intrinsically *colored* (curves on bordered surfaces ↔ 't Hooft expansion); published coverage is colored scalars, colored fermions, pions, gluons (nLab \"surfaceology\" scope page concurs). The \"gravituhedron\" remains the 2021 *Towards…* proposal (arXiv:2012.15780, JHEP 04 (2021) 253); the December 2024 follow-up (Koefler–Oktem–Paranjape–Trnka–Zacovic, arXiv:2412.08713) finds MHV gravity *numerators* have structured zeros and **conjectures** uniqueness with computational evidence — no geometry. The closest gravity-adjacent positives: double-copy survival of hidden zeros (§4), and Hodges' MHV graviton formula generated by a celestial $Lw_{1+\\infty}$ Ward identity (Guevara–Himwich–Miller, arXiv:2506.05460) — algebraic, not positive-geometric. [SPECULATIVE diagnosis] The colored-theory breakthroughs make the gravity gap look *structural*: gravity has no color and hence no open-surface organization; a closed-surface analog is the missing object. **H5's key referee bound stands, sharpened.**

## 7. Bootstrap and EFT positivity: rigid, with calculable give

[INFERENCE] The graviton S-matrix bootstrap in $D=9,10,11$ with maximal SUSY (Guerrieri–Murali–Penedones–Vieira, *Where is M-theory in the space of scattering amplitudes?*, arXiv:2212.00151) bounds the leading Wilson coefficient $\\alpha$ from below, with the minimal allowed value **close to but not equal to** the superstring/M-theory value — the sharpest quantitative instance of \"consistency conditions are rigid\" in quantum gravity, with honest caveats (inelasticity not fully captured; no upper bound in $D=11$). [ESTABLISHED, at computed order] But naive tree-level positivity is *loop-corrected*: graviton loops generically permit **negativity** of scalar-EFT Wilson coefficients by $G$-suppressed amounts; fixed-$t$ dispersion relations fail (forward graviton-exchange singularities) and must be replaced by crossing-symmetric ones (Chang–Parra-Martinez, arXiv:2501.17949, JHEP 08 (2025) 175). Net refinement for [FINDINGS §5(A)](../FINDINGS.md): gravitational rigidity is real and quantitative but must be stated **dispersively**, not as naive positivity.

## 8. Rigor upgrades of the original core

[ESTABLISHED] The Arkani-Hamed–Trnka conjecture that the tree amplituhedron $A_{n,k,4}$ is tiled by BCFW positroid-cell images is now a theorem (Even-Zohar–Lakrec–Tessler, arXiv:2112.02703; Inventiones mathematicae 239 (2025) 1009–1138). [INFERENCE] A second amplituhedron exists: the **ABJM amplituhedron** for 3d planar $\\mathcal N=6$ Chern–Simons-matter (He–Huang–Kuo, arXiv:2306.00951, JHEP 09 (2023) 165), constructing loop integrands at all multiplicity/loop order (explicit through two loops at eight points) with unitarity-cut structure emerging from the geometry; all-loop universality conjectural. The \"one-theory proof-of-concept\" framing in [H5](../HYPOTHESES.md#h5) and [UNIFICATION_LANDSCAPE §9](../UNIFICATION_LANDSCAPE.md) is factually out of date.

## 9. Judgment: what moves in H5, what does not

- **Tag:** unchanged, SPECULATIVE (foundational claim). The parenthetical must change: \"(ESTABLISHED planar-$\\mathcal N=4$ integrand core)\" → \"(ESTABLISHED core now: proven tree-amplituhedron tilings; all-genus colored-theory curve integrals; ABJM; theorem-grade hidden-zero uniqueness — gravity still OPEN)\".
- **Confidence:** low → **low-to-medium**, driven by (a) theorem-grade derived-locality results (§4), (b) escape from planarity/SUSY (§2–3), (c) proven combinatorial infrastructure (§5, §8).
- **Referee bounds:** (i)–(iii) rewritten as above; the **gravity bound is confirmed and sharpened** (§6); the kinematics-smuggling bound is restated (flat Mandelstams, not momentum twistors).
- **For the central wager and [CONCLUSION](../CONCLUSION.md):** no movement. Every new construction takes flat-space or FRW kinematic data as input (encodes, does not generate); \"emergence of time\" in kinematic flow is a boundary reformulation on a fixed background; nothing yields a distinguishing experimental test. The graviton bootstrap (§7) reinforces the rigidity theme with a new dispersive caveat.

**New open-problem candidate (OP-candidate-PG-GRAV):** does a *closed-surface* analog of surfaceology exist whose curve integrals compute graviton amplitudes (equivalently: a combinatorial home for the double copy at the level of surfaces)? Decidable in principle; currently no construction or no-go. [OPEN]

## References

Verified against arXiv abstract pages on 2026-06-10 (journal references as listed on arXiv/publisher pages):

- N. Arkani-Hamed, H. Frost, G. Salvatori, P.-G. Plamondon, H. Thomas, *All Loop Scattering As A Counting Problem*, arXiv:2309.15913.
- N. Arkani-Hamed, H. Frost, G. Salvatori, P.-G. Plamondon, H. Thomas, *All Loop Scattering For All Multiplicity*, arXiv:2311.09284; JHEP 09 (2025) 033.
- N. Arkani-Hamed, Q. Cao, J. Dong, C. Figueiredo, S. He, *Scalar-Scaffolded Gluons and the Combinatorial Origins of Yang-Mills Theory*, arXiv:2401.00041; JHEP 04 (2025) 078.
- N. Arkani-Hamed, Q. Cao, J. Dong, C. Figueiredo, S. He, *Hidden zeros for particle/string amplitudes and the unity of colored scalars, pions and gluons*, arXiv:2312.16282; JHEP (2024).
- N. Arkani-Hamed, Q. Cao, J. Dong, C. Figueiredo, S. He, *NLSM ⊂ Tr(φ³)*, arXiv:2401.05483.
- N. Arkani-Hamed, C. Figueiredo, *All-order splits and multi-soft limits for particle and string amplitudes*, arXiv:2405.09608.
- L. Rodina, *Hidden zeros are equivalent to enhanced ultraviolet scaling…*, arXiv:2406.04234; Phys. Rev. Lett. 134, 031601 (2025).
- K. Zhou, *Can Locality, Unitarity, and Hidden Zeros Completely Determine Tree-Level Amplitudes?*, arXiv:2604.07195.
- Y. Li, D. Roest, T. ter Veldhuis, *Hidden Zeros in Exceptional Field Theories from Double Copy*, arXiv:2403.12939; JHEP 04 (2025) 121.
- S. De, A. Pokraka, M. Skowronek, M. Spradlin, A. Volovich, *Surfaceology for Colored Yukawa Theory*, arXiv:2406.04411; JHEP 09 (2024) 160.
- N. Arkani-Hamed, C. Figueiredo, F. Vazão, *Cosmohedra*, arXiv:2412.19881; JHEP 11 (2025) 029.
- F. Ardila-Mantilla, N. Arkani-Hamed, C. Figueiredo, F. Vazão, *Combinatorics of the Cosmohedron*, arXiv:2603.03425.
- S. De, S. Paranjape, A. Pokraka, M. Spradlin, A. Volovich, *Hidden Zeros of the Cosmological Wavefunction*, arXiv:2503.23579; JHEP 07 (2025) 174.
- N. Arkani-Hamed, D. Baumann, A. Hillman, A. Joyce, H. Lee, G. L. Pimentel, *Kinematic Flow and the Emergence of Time*, arXiv:2312.05300.
- J. Trnka and collaborators, *Towards the Gravituhedron: New Expressions for NMHV Gravity Amplitudes*, arXiv:2012.15780; JHEP 04 (2021) 253. [author list beyond Trnka not independently re-verified this session]
- J. Koefler, U. Oktem, S. Paranjape, J. Trnka, B. Zacovic, *Uniqueness of MHV Gravity Amplitudes*, arXiv:2412.08713.
- A. Guevara, E. Himwich, N. Miller, *Generating Hodges' Graviton MHV Formula with an Lw(1+∞) Ward Identity*, arXiv:2506.05460.
- A. Guerrieri, H. Murali, J. Penedones, P. Vieira, *Where is M-theory in the space of scattering amplitudes?*, arXiv:2212.00151.
- C.-H. Chang, J. Parra-Martinez, *Graviton loops and negativity*, arXiv:2501.17949; JHEP 08 (2025) 175.
- C. Even-Zohar, T. Lakrec, R. J. Tessler, *The Amplituhedron BCFW Triangulation*, arXiv:2112.02703; Inventiones mathematicae 239, 1009–1138 (2025).
- S. He, Y.-t. Huang, C.-K. Kuo, *The ABJM Amplituhedron*, arXiv:2306.00951; JHEP 09 (2023) 165.
- nLab, *surfaceology* — scope/reference list (colored theories; gravity not addressed), https://ncatlab.org/nlab/show/surfaceology.

> **Binding note.** Where a correction in the referee verdict below conflicts with the body above, the **referee correction governs**; the body is the pre-referee submission, retained for the audit trail per house convention.

## Referee verdict

**Track R3-amplitudes, Iteration 6.** All 20 citations re-verified this session (arXiv abstracts fetched directly; nLab fetched). No fabricated or misattributed sources. All eight findings kept; one major repair (F3), two minor (F1, F6, F7), four clean. Nothing in this track contradicts a wiki closure: every new construction takes flat-space/FRW kinematic data as input, so the encode-not-generate diagnosis and the standing CONCLUSION are untouched. H5 remains **SPECULATIVE**, confidence low → **low-to-medium**, with the scope clause rewritten per F1/F2/F8 and the gravity bound restated per F6.

> **REFEREE VERDICT (R3-F1) — keep, severity: minor.** Surfaceology citations (2309.15913, 2311.09284, 2406.04411) all check out, including the all-genus 't Hooft-expansion and loop-integrated claims, verbatim from the abstracts. **Corrections:** (1) "dissolves three of H5's four bounds" overcounts — planarity and SUSY-only dissolve cleanly for colored theories; the **integrand-only bound only partially** (the loop-integrated formulas are formal; analytic continuation to physical kinematics is open, by the finding's own admission); (2) H5's bound also named **massive** non-SUSY matter, which survives — the new matter sector is entirely massless; (3) the JHEP issue/page refs for 2311.09284 and 2406.04411 came from search snippets, not the records — enter as `[unverified]`. Corrected claim supplied.

> **REFEREE VERDICT (R3-F2) — keep, severity: none.** Scaffolded gluons (2401.00041) and NLSM ⊂ Tr(φ³) (2401.05483) confirmed, with the tree-demonstrated / loop-conjectural split exactly as the abstracts state. Properly hedged as submitted. One nit: say explicitly that the all-loop NLSM statement is a planar **integrand-level** identity. The proposed re-scoping of H5's referee list is endorsed, retaining "massless" before the matter list.

> **REFEREE VERDICT (R3-F3) — keep, severity: MAJOR (repaired).** All five citations real and accurate, including Rodina's PRL 134, 031601 (2025) and the 2026 Zhou paper (2604.07195). **The overclaim is interpretive:** Rodina's theorem *assumes* an ordered local propagator structure and trivial numerators; Zhou takes locality *and* unitarity as axioms. Neither derives locality — so "first theorem-grade support for 'locality as derived'" is a conjecture wearing theorem clothes (EPISTEMICS cardinal rule). What *is* theorem-grade and new: zeros ⟺ enhanced UV scaling, and zeros uniquely fix Tr(φ³) **within a local ansatz**; plus a split factorization that unitarity does not imply. Entered in that corrected form; H5's sub-thesis gains adjacent support, not confirmation.

> **REFEREE VERDICT (R3-F4) — keep, severity: none.** Cosmohedra (2412.19881), the March 2026 combinatorial proof (2603.03425 — "we prove the correctness of this construction", Ardila-Mantilla et al., confirmed), and wavefunction hidden zeros (2503.23579, tree proven / loop evidence) all check out. Exemplary internal grading. Keep the conformally-coupled-scalar FRW scope caveat verbatim; mark the two JHEP issue refs `[unverified]`.

> **REFEREE VERDICT (R3-F5) — keep, severity: none.** Kinematic flow (2312.05300) confirmed, including the verbatim "emergence of time" framing. This is the one finding that could have quietly reopened the encode/generate closure; instead it correctly applies the iter-3 criterion and self-grades **ENCODES** (FRW background enters via kinematic data and mode functions). Cross-link as the sixth gradable construction, as proposed.

> **REFEREE VERDICT (R3-F6) — keep, severity: minor.** The absence claim (no positive geometry for gravity through June 2026) is properly tagged INFERENCE and corroborated by the cited record. **Corrections:** (1) the gravituhedron paper (2012.15780, JHEP 04 (2021) 253) is **single-author Trnka** — not "et al." and not "Trnka and collaborators"; (2) the "no color ⇒ no surface" structural diagnosis stays SPECULATIVE and must be stated as an absence, not an impossibility — nothing forbids a closed-surface analog. Registering the OP-candidate is endorsed. H5's key referee bound stands, sharpened.

> **REFEREE VERDICT (R3-F7) — keep, severity: minor.** Both citations confirmed (2212.00151; 2501.17949 incl. the crossing-symmetric-dispersion repair of fixed-t failures). **Correction:** the graviton bootstrap bounds α **from below only** — the paper explicitly finds no upper bound in D=11 — so do not write "brackets" the string/M-theory value; and scope the negativity result to the one-loop order and EFTs computed. With that, the refinement of FINDINGS §5(A) ("rigid, but stated dispersively, with calculable G-suppressed give") is endorsed.

> **REFEREE VERDICT (R3-F8) — keep, severity: none.** Inventiones reference exact (239, 1009–1138 (2025), DOI confirmed); ABJM amplituhedron explicit orders match the abstract precisely (1-loop to 10pt, 2-loop to 8pt; all-loop conjectural). One scoping guard for the H5 edit: write "**tree-level** BCFW tiling proven" so the loop geometry is not upgraded by association. The "one-theory proof-of-concept" framing in H5/§9 is indeed out of date; update approved.

**Net for the wiki.** H5: keep SPECULATIVE; confidence → low-to-medium; two-tier established core (proven tree-level amplituhedron tiling for planar N=4; surfaceology for massless colored theories at all genus, integrand-level with partial loop integration); referee bounds restated as: no gravity (sharpened per F6), loop-level YM conjectural, massive matter uncovered, kinematics still input. CONCLUSION and both hedges (OP-46 residual, OP-48c) untouched. No distinguishing experimental test anywhere in the track — the NOT-YET-PHYSICS verdict on the central wager is unaffected.
