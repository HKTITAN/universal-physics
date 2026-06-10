---
title: Bibliography — Canonical Sources for the Universal Physics Wiki
type: reference
tags: [reference, bibliography, sources]
updated: 2026-06-10
---

# Bibliography — Canonical Sources for the Universal Physics Wiki

**Status:** Living reference (append-only; deduped across domain dossiers).
**Last updated:** 2026-06-10

This page is the consolidated source list for the wiki. It contains **only real, standard references** that the author is confident exist: canonical textbooks (author + title) and genuinely landmark papers (author, year). Where a precise detail (volume, page, exact year) is uncertain, the entry carries an inline `[unverified]` flag and gives author + title + approximate year only — per the [EPISTEMICS.md](EPISTEMICS.md) rule that we never fabricate citations, numbers, or theorems.

**Scope of the epistemic tags here.** A reference's *existence* is treated as [ESTABLISHED] unless flagged `[unverified]`. The tag attached to an entry instead grades the *epistemic status of the physics the source reports*: a textbook of confirmed theory is [ESTABLISHED]; a foundational-interpretation paper is [CONTESTED] or [SPECULATIVE]; a research-frontier program is [SPECULATIVE] or [OPEN]. This lets the bibliography double as a quick map of *how firm the underlying claim is*, consistent with the conventions in [EPISTEMICS.md](EPISTEMICS.md).

> **How to cite from wiki pages.** Domain pages should link here rather than re-listing full citations. Cite as, e.g., "Weinberg, *QTF* I–III (see [BIBLIOGRAPHY.md](BIBLIOGRAPHY.md))." Numerical values should always be sourced to the Particle Data Group or Planck (below), never stated from memory — see [CONSTANTS_AND_SCALES.md](CONSTANTS_AND_SCALES.md).

A handful of sources are load-bearing in more than one domain (MTW, Wald, Reed–Simon, Nielsen–Chuang, Haag, Glimm–Jaffe, Peskin–Schroeder, Weinberg's *QTF*, Landau–Lifshitz, the Hawking 1975 and Bekenstein 1973 papers, Jarzynski/Crooks, Wilson–Kogut). Each is listed once under its **primary** domain and cross-referenced from the others to avoid duplication.

---

## 1. Quantum mechanics and foundations

Primary support for [domains/quantum-mechanics.md](domains/quantum-mechanics.md).

### Textbooks and monographs

- **P. A. M. Dirac**, *The Principles of Quantum Mechanics* (Oxford Univ. Press, 1930; 4th ed. 1958). [ESTABLISHED] — Origin of the bra–ket formalism, representation-independent state/operator picture, and transformation theory underlying the Hilbert-space axioms.
- **J. von Neumann**, *Mathematical Foundations of Quantum Mechanics* (Springer, 1932; Princeton Univ. Press transl. 1955). [ESTABLISHED] — The rigorous Hilbert-space axiomatization: self-adjoint operators, the spectral theorem, density matrices, the projection postulate, and the first serious analysis of measurement.
- **A. Peres**, *Quantum Theory: Concepts and Methods* (Kluwer, 1995). [ESTABLISHED] — Operationally rigorous text emphasizing measurement, Kochen–Specker, Bell, and careful statement of the formalism.
- **J. S. Bell**, *Speakable and Unspeakable in Quantum Mechanics* (Cambridge Univ. Press, 1987; 2nd ed. 2004). [ESTABLISHED] (results) / [CONTESTED] (interpretive morals) — Collected papers including the Bell inequality, the critique of the measurement "shifty split," and incisive analyses of nonlocality and hidden variables.
- **M. A. Nielsen and I. L. Chuang**, *Quantum Computation and Quantum Information* (Cambridge Univ. Press, 2000; 10th anniversary ed. 2010). [ESTABLISHED] — Standard reference for density matrices, POVMs, Kraus/CPTP maps, entanglement measures, Tsirelson's bound, and no-cloning. *(Also primary for §7; cross-listed there.)*

### Landmark papers

- **A. M. Gleason**, "Measures on the closed subspaces of a Hilbert space," *J. Math. Mech.* **6**, 885 (1957). [ESTABLISHED] — Derives the Born-rule form as the unique noncontextual probability measure on projections for $\dim \mathcal{H} \ge 3$.
- **S. Kochen and E. P. Specker**, "The problem of hidden variables in quantum mechanics," *J. Math. Mech.* **17**, 59 (1967). [ESTABLISHED] — The Kochen–Specker theorem establishing quantum contextuality for $\dim \mathcal{H} \ge 3$: no noncontextual value assignment $v: \mathcal{P}(\mathcal{H}) \to \{0,1\}$ exists.
- **J. F. Clauser, M. A. Horne, A. Shimony, R. A. Holt**, "Proposed experiment to test local hidden-variable theories," *Phys. Rev. Lett.* **23**, 880 (1969). [ESTABLISHED] — The CHSH inequality $|\langle S\rangle| \le 2$ classically (vs. Tsirelson's $2\sqrt{2}$ quantum bound); foundation of all subsequent Bell tests.
- **V. Gorini, A. Kossakowski, E. C. G. Sudarshan** (1976) and **G. Lindblad**, "On the generators of quantum dynamical semigroups," *Commun. Math. Phys.* **48**, 119 (1976). [ESTABLISHED] — Independent derivations of the GKSL/Lindblad generator, the most general Markovian (CPTP-semigroup) open-system master equation.
- **P. Busch**, "Quantum states and generalized observables: a simple proof of Gleason's theorem," *Phys. Rev. Lett.* **91**, 120403 (2003); and **C. M. Caves, C. A. Fuchs, K. Manne, J. M. Renes**, "Gleason-type derivations of the quantum probability rule for generalized measurements," *Found. Phys.* **34**, 193 (2004; arXiv:quant-ph/0306179). [ESTABLISHED] — The Gleason–Busch (effect/POVM) theorem, extending the Born-form uniqueness to $\dim\mathcal H = 2$ at the price of additivity over all compatible effects. *(Fourth author is Manne, not Schack.)*

### Recent preprints (2026, not yet peer-reviewed)

- **E. O. Torres Alegre**, "Causal Rigidity of Born-Type Probability Rules in Infinite-Dimensional Operational Theories," arXiv:2602.09056 (Pontifical Catholic Univ. of Chile, submitted 7 Feb 2026). [arXiv preprint — **verified real**, not peer-reviewed] — A **rigidity** theorem (Thm 1, "Causal Rigidity"): under (i) no-signaling, (ii) normal steering via $\sigma$-additive purification — an infinite-dimensional generalization of the Hughston–Jozsa–Wootters/GHJW theorem — and (iii) $\sigma$-affinity of probability assignments under countable preparation mixtures (plus implicit continuity/monotonicity of $\Phi$), the post-processing map in $P=\Phi(\tau)$ must be the identity, making the Born rule the **unique** no-signaling-compatible probability assignment on **infinite-dimensional normal operational state spaces** (lifting the finite-dimensional Gleason–Busch form-rigidity). **Caveat:** §6 *presupposes* a von Neumann-algebra representation and then recovers $\tau=|\langle\phi|\psi\rangle|^2$ — it does NOT derive the Hilbert space or the algebraic scaffold, so it sharpens the Born-*form* rigidity rather than grounding the formalism (relocates, not dissolves; cf. the GPT-reconstruction verdict KA-5 in [notes/2026-06-08-born-rule-and-quantum-linearity.md](notes/2026-06-08-born-rule-and-quantum-linearity.md)). Authors flag normal steering as "the strongest assumption." — *Note (iteration-4, web-confirmed):* the other 2026 preprint IDs cited in the Born-rule note are **all real** (promoted from `[unverified]`): arXiv:2603.06211 (J. Zhang, *Summing to Uncertainty* — additivity as the shared load-bearing premise across Born-rule derivations); arXiv:2601.18856 (V. Pronskikh, *Operationally induced preferred basis in unitary quantum mechanics*); arXiv:2601.13012 (A. K. Pati, *No-Signalling Fixes the Hilbert-Space Inner Product* — fixes the **inner product**, *not* linearity, which it assumes). No fabrication was found anywhere in the wiki's citations.

### Iteration-4 verified additions

- **M. B. Fröb**, "Modular Hamiltonian for de Sitter diamonds," *JHEP* **12** (2023) 074 (arXiv:2308.14797). [ESTABLISHED] — *Single-authored.* The dS-diamond modular Hamiltonian is the Casini–Huerta–Myers conformal-Killing-vector flow, geometric only in the conformal vacuum, reducing to the static-patch boost in the large-diamond limit. (Corrects an iteration-3 "Forste et al." misattribution.) Bears on the OP-41 dS first-law analysis (see §9, [HYPOTHESES.md](HYPOTHESES.md)).
- **Muon $g-2$ Theory Initiative (WP2025)**, "The anomalous magnetic moment of the muon in the Standard Model" (arXiv:2505.21476, 2025). [ESTABLISHED] — Lattice-QCD HVP-based SM prediction $a_\mu^{\rm SM}=116\,592\,033(62)\times10^{-11}$, $\Delta a_\mu=38(63)\times10^{-11}$ (SM-consistent); supersedes the WP2020 data-driven value for the $g-2$ anomaly status. See [OPEN_PROBLEMS.md](OPEN_PROBLEMS.md) OP-21 and [domains/particle-physics.md](domains/particle-physics.md).

### Iteration-6 verified additions (2026-06-10)

*All arXiv IDs below were re-resolved by the iteration-6 referees against arXiv/journal listings on 2026-06-10. Journal references flagged `[unverified]` rest on search-snippet or Springer-sighting provenance only and must not be promoted until a DOI is checked. Per EPISTEMICS.md §4, no citation here is invented; titles are quoted only where verified.*

**Closed-universe / dS holography (OP-50, HYP-dS-CARDINALITY-R1):**
- **M. Usatyuk, Z. Wang, Y. Zhao**, *SciPost Phys.* **17**, 051 (2024). [ESTABLISHED, within 2D models] — Including spacetime wormholes in the inner product degenerates the Gram matrix of perturbatively-distinct closed-universe states to rank 1 in JT gravity + matter and a topological model: a unique closed-universe state per theory. The proven core of the OP-50 debate.
- **D. Harlow, M. Usatyuk, Y. Zhao**, arXiv:2501.02359 [JHEP ref **unverified** — Springer sighting only]. [CONTESTED premise] — The "observer rescue": an internal observer with $S_{Ob}$ degrees of freedom is described by an effective QM on a Hilbert space of dim ~$e^{S_{Ob}}$ (gravitational-path-integral argument, not a theorem). Counter-positions: Antonini–Rath–Sasieta–Swingle–Vilar López (arXiv:2507.10649); H. Liu (arXiv:2509.14327); Engelhardt–Gesteau (arXiv:2504.14586).
- **J. Maldacena**, arXiv:2412.14014 (2024). [ESTABLISHED as the paper's claim] — An observer mostly cancels the dimension-dependent phase $i^{D+2}$ of the dS sphere partition function; the $A/4G$ coefficient still comes from the classical saddle (η input).

**Algebraic frontier (OP-44, OP-48c):**
- **K. Jensen, S. Raju, A. J. Speranza**, arXiv:2412.21185; *JHEP* **06** (2025) 242. [ESTABLISHED] — The AdS boundary time-band algebra strictly has no commutant nonperturbatively; coarse-grained observer version reduces to the modular crossed product at leading order; uniqueness: the modular crossed product is the only crossed product of a III₁ algebra with a trace.
- **J. De Vuyst, S. Eccles, P. A. Höhn, J. Kirklin**, "Linearization (in)stabilities and crossed products," arXiv:2411.19931; *JHEP* (2025) 211. [ESTABLISHED] — Locates the order-$G_N^2$ obligation at the quadratic (boost) linearization-instability constraints; "essentially unambiguous" for spatially closed spacetimes. Companion: PW=CLPW + QRF-relative entropies, arXiv:2405.00114, *JHEP* (2025) 146.
- **M. S. Klinger, J. Kudler-Flam, G. Satishchandran**, "Generalized Entropy is von Neumann Entropy II: The complete symmetry group and edge modes," arXiv:2601.07910 (2026, 104 pp). [ESTABLISHED] — Perturbative Type II structure survives the complete constraint family with boost-supertranslation edge modes; entropy = $S_{\rm gen}$ + edge-mode + constant term.
- **V. Chandrasekaran, É. É. Flanagan**, "Subregion algebras in classical and quantum gravity," arXiv:2601.07915 (2026, 111 pp). [ESTABLISHED] — GSL for non-stationary linearized perturbations of Killing horizons; quantum focusing conjecture proven within the linearized/perturbative regime.
- **J. Kudler-Flam, E. Witten**, "Emergent Mixed States for Baby Universes and Black Holes," arXiv:2510.06376. [ESTABLISHED] — Baby-universe state sequences fail to converge at large N; appropriate averaging over N yields mixed-state convergence with nontrivial commutants (the OP-44 "survives-after-averaging" option). Companion: Mellin averaging over N, arXiv:2605.15180.
- **A. Herderschee, J. Kudler-Flam**, "Stringy algebras, stretched horizons, and quantum-connected wormholes," arXiv:2510.01556. [ESTABLISHED] — Hagedorn spectrum breaks the split property for regions within a string length; algebraic definition of stretched horizons; Type III ER=EPR factors.
- **H. Liu**, "Lectures on entanglement, von Neumann algebras, and emergence of spacetime," arXiv:2510.07017 (2025, 119 pp). [ESTABLISHED, review] — The actual 2025 synthesis of the algebraic program (corrects the garbled "KLS-trio review" lead).
- **L. van Luijk, A. Stottmeister, H. Wilming**, "Multipartite Embezzlement of Entanglement," *Quantum* **9**, 1818 (2025); arXiv:2409.07646. [ESTABLISHED] — A multipartite system of commuting III₁ factors on which every state is embezzling: the consistent non-Type-I composition endpoint in the OP-48(c) horn-C residue. Synthesis: van Luijk, arXiv:2510.07563 (type classification ↔ operational entanglement properties).

**Pseudo-entropy / OP-49:**
- **W.-z. Guo, S. He, Y.-X. Zhang**, arXiv:2209.07308; *JHEP* **05** (2023) 021. [ESTABLISHED] — Reality of pseudo-(Rényi-)entropy trace moments is necessary-and-sufficiently characterized by η-pseudo-Hermiticity of the transition matrix (diagonalizable case), with a Tomita–Takesaki reality class. The reality theorem grounding the OP-49 near-no-go.
- **K. Doi, J. Harper, A. Mollabashi, T. Takayanagi, Y. Taki**, *Phys. Rev. Lett.* **130**, 031601 (2023). [ESTABLISHED] — dS₃/CFT₂ pseudo-entropy: Re S = $S_{\rm dS}/2$, finite, region-independent; all region-dependence and divergence imaginary. (Source of the iter-5 Re/Im inversion correction.)
- **Li–Xiao–He–Sun**, arXiv:2511.17098 (2025). [ESTABLISHED re paper content, equation-level verified; no verbatim cancellation quote — paraphrase only] — Timelike-EE first law in AdS/CFT ⟺ linearized Einstein equations; the imaginary part is a state- and interval-independent constant dropping out of variations — the unitary mirror of the dS case under $c\to ic$.
- **A. J. Parzygnat, T. Takayanagi, Y. Taki, Z. Wei**, arXiv:2307.06531; *JHEP* **12** (2023) 123. [ESTABLISHED] — SVD entanglement entropy: the only known intrinsically real, non-negative two-state entropy; the OP-49 residual protocol (no first law exists as of 2026-06).

**Phenomenology (watchlist):**
- **E. Verlinde, K. Zurek**, *JHEP* **04** (2020) 209; and *Phys. Rev. D* **106**, 106011 (2022). [INFERENCE within AdS/CFT] — Modular-fluctuation area law $\langle\Delta K^2\rangle=\langle K\rangle=A/4G$ and its shockwave reproduction: the anchor of the geontropic chain (η input at the modular→metric step).
- **S. M. Vermeulen et al. (GQuEST)**, *Phys. Rev. X* **15**, 011034 (2025). [ESTABLISHED design] — Photon-counting Michelson design; 5σ on the pixellon benchmark α=1 in O(10⁵) s; pixellon derivation from a UV-complete theory "still underway" (stated admission). Sibling bound: QUEST, *PRL* **135**, 101402 (2025), arXiv:2410.09175.
- **D. Carney, S. Karydas, A. Sivaramakrishnan**, *Phys. Rev. D* **113**, 106002 (2026). [ESTABLISHED] — Minimal graviton-EFT null prediction: arm-length variance ~$\ell_p^2$, no IR divergences; a VZ-magnitude detection would "signal a severe breakdown of effective quantum field theory in low energy quantum gravity" (verbatim verified). Confound: Freidel–Oberfrank, arXiv:2601.17849 (PSD depends on the graviton quantum state).
- **J. Oppenheim**, "A postquantum theory of classical gravity?," arXiv:1811.03116; *Phys. Rev. X* **13**, 041040 (2023). [ESTABLISHED framework / CONTESTED physics] — CPTP classical–quantum gravity; stochastic metric + matter, no measurement postulate.
- **J. Oppenheim, C. Sparaciari, B. Šoda, Z. Weller-Davies**, arXiv:2203.01982; *Nat. Commun.* **14**, 7910 (2023). [ESTABLISHED, theorem within CQ] — The decoherence–diffusion trade-off: coherence forces classical-sector diffusion observable as force noise.
- **T. Janse, D. G. Uitenbroek, J. van Everdingen, S. Plugge, B. Hensen, T. H. Oosterkamp**, arXiv:2403.08912; *Phys. Rev. Research* **6**, 033076 (2024). [ESTABLISHED] — Force-noise compilation lowering the spacetime-diffusion bound ≥15 orders; ultralocal-continuous dead, ultralocal-discrete below the upper bound (with stated caveats), non-local continuous within ~1 order.
- **A. Biggs, J. Maldacena**, arXiv:2405.02227. [ESTABLISHED as published counter-reading] — Ordinary finite-temperature matter reproduces the qualitative Danielson–Satishchandran–Wald horizon-decoherence effect: thermality, not horizon-ness, does the work (the DSW deflation). (Bibliographic fix from the A1 referee: arXiv:2505.17450 is a Lifshitz moving-mirror holographic analogue by Kawamoto–Lee–Yeh, NOT an independent reproduction of the DSW rate.)
- **V. Vilasini, R. Renner**, *Phys. Rev. A* **110**, 022227 (2024); companion arXiv:2408.13387. [ESTABLISHED] — Indefinite-causal-order processes embedded in acyclic spacetime admit a definite, acyclic fine-grained causal-order explanation: process matrices do not generate causal order.

**Generation-construction survey (OP-46 / HYP-CKV-VACUITY-R3):**
- **S.-S. Lee**, *JHEP* **06** (2020) 070; arXiv:1912.12291 (full text checked). [SPECULATIVE as physics; ESTABLISHED that the paper exhibits it] — Matrix model in which signature is a state-dependent dynamical output (dS-like Lorentzian regions bridged by Euclidean ones) on a posited carrier + signature-parametrized hypersurface-deformation template. The nearest sketch to CONCLUSION §8's spec; fails it (selection-type).
- **F. Finster et al. (causal fermion systems)** — program review arXiv:1709.04781 (full text checked); CUP textbook listing arXiv:2411.06450 (2024/25); status paper arXiv:2603.05018 (Farnsworth, Finster, Paganini, Singh — future-dated ID verified real). [ESTABLISHED definitions; INFERENCE on the η-identification] — The $(\le n,\le n)$-eigenvalue axiom + indefinite spin scalar product as the relocated Krein η (fourth readout family); minimizer existence only finite-dimensional; all worked examples Dirac-sea encodes.
- **L. Rodina**, *Phys. Rev. Lett.* **134**, 031601 (2025). [ESTABLISHED — with the binding hypotheses caveat] — Hidden zeros ⟺ "subset" enhanced BCFW UV scaling; zeros uniquely fix Tr(φ³) tree amplitudes **assuming an ordered local propagator structure and trivial numerators** (locality is a hypothesis, not derived — must not be entered as "locality as derived"). Companion conjecture line: Zhou, arXiv:2604.07195 (also assumes locality+unitarity).
- **O. Müller**, "On the Hauptvermutung of Causal Set Theory," arXiv:2503.01719 (v2 Dec 2025; preprint, not peer-reviewed, proofs not independently checked). [web-confirmed real] — Two precise inequivalent formulations: one false, one true; countable-set version holds.

**Experiment refresh:**
- **LIGO–Virgo–KAGRA**, GW250114 area-law companion: arXiv:2509.08054; *Phys. Rev. Lett.* **135**, 111403 (2025). [ESTABLISHED] — Hawking's area law $A_f>A_1+A_2$ confirmed at high credibility (the correct citation — NOT the ringdown-spectroscopy paper 2509.08099, which carries the $(2,2,0)$+overtone Kerr-consistency at tens-of-percent level; SNR 80 discovery / 76.9 catalog).
- **LHCb**, $B^0\to K^{*0}\mu^+\mu^-$ comprehensive amplitude analysis: arXiv:2512.18053; *PRL* 2026, DOI 10.1103/24g9-yn9d. [ESTABLISHED measurement / CONTESTED interpretation] — ~4σ SM tension [σ-figure from press coverage of the PRL] on full Run 1+2; the flagship surviving flavor anomaly (OP-21).
- **KiDS-Legacy**, arXiv:2503.19441 (cosmic shear: $S_8=0.815^{+0.016}_{-0.021}$, 0.73σ from Planck) and arXiv:2503.19442 (joint analysis, Planck-consistent). [ESTABLISHED] — The S8 easing on the KiDS axis; DES Y6 remains in tension per arXiv:2602.12238 [CONTESTED].
- **S. Pedalino, A. Ramírez-Galindo, S. Ferstl, K. Hornberger, M. Arndt, S. Gerlich (Vienna)**, arXiv:2507.21211; *Nature* **649**, 866 (2026). [ESTABLISHED] — Interference of sodium nanoclusters >7,000 atoms / >1.7×10⁵ Da; macroscopicity μ=15.5 — the most stringent generic-macrorealism exclusion to date.
- **LHAASO**, GRB 221009A LIV bounds: arXiv:2402.06009, *PRL* (v3 Feb 2026). [ESTABLISHED] — $E_{\rm QG,1}>10\,E_{\rm Pl}$, $E_{\rm QG,2}>6\times10^{-8}\,E_{\rm Pl}$.

**`[unverified]` journal-reference ledger (binding; do not promote without a DOI check):**
- From R1 (Springer-sighting-only "JHEP" refs, six): Harlow–Usatyuk–Zhao 2501.02359; Higginbotham 2512.17993 (arXiv page: "Submitted to JHEP"); MSS 2506.18054; Nomura–Vafa-camp NV 2310.16994; ARTW 2511.04511; CCGPR 2303.16316.
- From R3 (search-snippet JHEP issue/page refs, five): including the colored-Yukawa loop-integrated paper arXiv:2406.04411 [JHEP ref unverified]; enter all five flagged R3 journal refs as arXiv-ID-only with `[unverified]` journal fields. Attribution fix: the gravituhedron paper arXiv:2012.15780 is single-author **Trnka**.
- Other riders: Nimmrichter et al. arXiv:2502.13821 "accepted PRL [journal ref unverified]"; diamagnetic microchip trap arXiv:2411.02325 [unverified]; Gonzalo–Montero–Obied–Vafa arXiv:2209.09249 [unverified]; PRD 111, 026014 (2025) Barrett–Crane author list [unverified]; the "~10⁻¹³ d displacement" figure attributed to 2604.16276 [unverified — not in its abstract]. Bibliographic fixes carried from referees: Sharmila et al. is *Nat. Commun.* **17**, 701 (2026); Bub et al. arXiv:2408.11094 is published as *PRL* **134**, 121501 (2025).

### Iteration-7 verified additions (2026-06-10)

*All references below were re-verified live by the iteration-7 referees (arXiv/journal pages fetched; verbatim quotes checked against primary PDFs where load-bearing). No `[unverified]` riders were introduced by this iteration.*

**Modular theory ↔ Krein structures (A1, the verdict-flipper track):**
- **H. Gottschalk**, "Die Momente gefalteter Gauß-Maße und ihre Anwendung in der Quantenfeldtheorie" / related Krein-space QFT work, *J. Math. Phys.* **43**, 4753 (2002). [ESTABLISHED] — Prior art running **Krein → modular**: modular structure built atop a posited indefinite-metric space; the reverse direction (modular → Krein) is absent from the literature (the A1 direction-map finding).
- **L. Jakóbczyk**, on Tomita–Takesaki theory in indefinite-metric (Krein-space) QFT, 1985 (OSTI 5135323). [ESTABLISHED] — Same direction: Krein structure assumed, modular objects derived.
- **A. Devastato, S. Farnsworth, F. Lizzi, P. Martinetti**, "Lorentz signature and twisted spectral triples," *JHEP* **03** (2018) 089 (arXiv:1710.04965). [ESTABLISHED] — The twisted-spectral-triple route: the Krein/η datum installed via the twist (author list corrected by the iteration-7 referee from a truncated form).

**Crossed products / constraints (A2):**
- **J. Kirklin**, all-orders generalized second law, arXiv:2412.01903; *JHEP* **07** (2025) 192. [ESTABLISHED] — The nearest existing discharge machinery for higher-order constraint imposition; does not execute the dS closed-slice cubic step.
- **S. Ali Ahmad, R. Jefferson** (AAJ), perturbative crossed products beyond subleading order, arXiv:2501.01487. [ESTABLISHED] — First controlled step past leading order (carried from iteration 6; re-anchored here for the A2 descent argument).

**Closed-universe / OP-50 watch (A4):**
- **D. Harlow, M. Usatyuk, Y. Zhao**, *JHEP* **02** (2026) 108 (arXiv:2501.02359). [CONTESTED premise] — Now journal-published; upgrades the iteration-6 `[unverified]` JHEP flag for this entry.
- **K. Higginbotham**, observer complementarity, *JHEP* **03** (2026) 183 (arXiv:2512.17993). [CONTESTED] — Now journal-published; upgrades the iteration-6 `[unverified]` flag.
- **Y. Nomura, T. Ugajin**, partial-observability follow-up, arXiv:2602.13387. [ESTABLISHED as claims]
- **Miyata–Horikoshi–Tajima–Ugajin**, arXiv:2606.04575. [ESTABLISHED as the paper's construction] — The third OP-50 position: a pre-gauge-constraint hyperfinite II₁ dominant sector with a post-constraint polynomial-dimension physical Hilbert space (scope per the iteration-7 referee).

### Interpretation, measurement, and dynamical-collapse models (mostly [CONTESTED] / [SPECULATIVE])

- **H. Everett III**, "Relative state formulation of quantum mechanics," *Rev. Mod. Phys.* **29**, 454 (1957). [CONTESTED] — The no-collapse (relative-state / many-worlds) interpretation retaining only unitary evolution.
- **D. Bohm**, "A suggested interpretation of the quantum theory in terms of hidden variables, I & II," *Phys. Rev.* **85**, 166 & 180 (1952). [CONTESTED] — The de Broglie–Bohm pilot-wave theory: an explicit deterministic, contextual, nonlocal hidden-variable completion empirically equivalent to standard QM for the usual observables.
- **G. C. Ghirardi, A. Rimini, T. Weber**, "Unified dynamics for microscopic and macroscopic systems," *Phys. Rev. D* **34**, 470 (1986). [SPECULATIVE] (empirically testable, not yet decided) — The GRW objective-collapse model: an explicit modification of unitary dynamics with experimentally bounded parameters.
- **W. H. Zurek**, "Decoherence, einselection, and the quantum origins of the classical," *Rev. Mod. Phys.* **75**, 715 (2003). [ESTABLISHED] (decoherence mechanism) / [CONTESTED] (envariance derivation of the Born rule) — Authoritative review of decoherence, pointer-basis einselection, and the emergence of classicality.

*Functional-analysis underpinnings (Reed–Simon) are listed under §8; rigorous operator-algebra results (Gelfand–Naimark, Bargmann, Gleason) are cross-referenced from §8.*

---

## 2. Quantum field theory and particle physics

Primary support for [domains/quantum-field-theory.md](domains/quantum-field-theory.md) and [domains/particle-physics.md](domains/particle-physics.md).

### Textbooks

- **S. Weinberg**, *The Quantum Theory of Fields*, Vols. I–III (Cambridge Univ. Press, 1995–2000). [ESTABLISHED] — The deepest first-principles treatment: derives QFT from Poincaré invariance, unitarity, and cluster decomposition; authoritative on Wigner's classification, renormalization, gauge theories, electroweak symmetry breaking, and anomalies.
- **M. E. Peskin and D. V. Schroeder**, *An Introduction to Quantum Field Theory* (Addison-Wesley, 1995). [ESTABLISHED] — Standard graduate text for canonical + path-integral methods, renormalization, RG, gauge theories, and the chiral anomaly; the working calculational reference (and the QFT backbone for the Standard Model).
- **M. D. Schwartz**, *Quantum Field Theory and the Standard Model* (Cambridge Univ. Press, 2014). [ESTABLISHED] — Modern text tying QFT formalism to SM phenomenology, EFT, and precision calculations.
- **A. Zee**, *Quantum Field Theory in a Nutshell*, 2nd ed. (Princeton Univ. Press, 2010). [ESTABLISHED] — Path-integral-first and physically motivated; strong on the Wilsonian/EFT picture and conceptual structure.
- **C. Itzykson and J.-B. Zuber**, *Quantum Field Theory* (McGraw-Hill, 1980). [ESTABLISHED] — Comprehensive classic on perturbation theory, renormalization, functional methods, and QED precision diagrammatics.
- **C. Quigg**, *Gauge Theories of the Strong, Weak, and Electromagnetic Interactions*, 2nd ed. (Princeton Univ. Press, 2013). [ESTABLISHED] — Focused, physically motivated exposition of the SM gauge structure, electroweak theory, and the Higgs mechanism.
- **R. F. Streater and A. S. Wightman**, *PCT, Spin and Statistics, and All That* (Benjamin, 1964; Princeton reissue 2000). [ESTABLISHED] — Canonical reference for the Wightman axioms, the reconstruction theorem, spin–statistics, and CPT — the rigorous operator/correlation foundation.
- **R. Haag**, *Local Quantum Physics: Fields, Particles, Algebras*, 2nd ed. (Springer, 1996). [ESTABLISHED] — Definitive text on algebraic QFT (Haag–Kastler nets), DHR superselection, modular theory, Reeh–Schlieder, Bisognano–Wichmann, and Haag's theorem. *(Also primary for §8.)*
- **J. Glimm and A. Jaffe**, *Quantum Physics: A Functional Integral Point of View*, 2nd ed. (Springer, 1987). [ESTABLISHED] — Authoritative account of constructive QFT: rigorous construction of $\phi^4$ in 2 and 3 dimensions, the Osterwalder–Schrader axioms, and the methods/limits of the program. *(Also primary for §8.)*

### Data reference

- **Particle Data Group** (R. L. Workman *et al.*), *Review of Particle Physics*, *Prog. Theor. Exp. Phys.* (updated regularly; latest edition supersedes prior ones). [ESTABLISHED] — The standard source for measured SM parameters, masses, mixing matrices, and review articles. **Use for any numerical value** (see [CONSTANTS_AND_SCALES.md](CONSTANTS_AND_SCALES.md)). `[unverified]` exact lead-author/year for the current edition; cite the edition in hand.

### Landmark papers — structure of QFT

- **E. P. Wigner**, "On unitary representations of the inhomogeneous Lorentz group," *Annals of Mathematics* **40**, 149 (1939). [ESTABLISHED] — Classifies particles as unitary irreducible representations of the Poincaré group (labeled by mass $m$ and spin/helicity).
- **K. G. Wilson and J. Kogut**, "The renormalization group and the $\varepsilon$ expansion," *Physics Reports* **12**, 75 (1974). [ESTABLISHED] — The Wilsonian RG/EFT reframing of renormalization; foundational for relevant/marginal/irrelevant operators and universality. *(Also primary for §5; cross-listed there.)*
- **H. Reeh and S. Schlieder**, *Nuovo Cimento* **22**, 1051 (1961); **J. J. Bisognano and E. H. Wichmann**, *J. Math. Phys.* **16**, 985 (1975). [ESTABLISHED] — Vacuum cyclicity/entanglement (Reeh–Schlieder) and modular-flow-equals-boost (Bisognano–Wichmann); structural theorems linking locality, modular theory, and the Unruh effect.
- **R. D. Sorkin**, "Impossible measurements on quantum fields," in *Directions in General Relativity*, Vol. 2 (1993); **C. J. Fewster and R. Verch**, "Quantum fields and local measurements," *Commun. Math. Phys.* **378**, 851 (2020). [OPEN] (problem) / [INFERENCE] (proposed framework) — The relativistic measurement problem (impossible measurements / superluminal signaling) and a modern consistent local-measurement framework.

### Landmark papers — the Standard Model

- **S. L. Glashow**, *Nucl. Phys.* **22**, 579 (1961); **S. Weinberg**, *Phys. Rev. Lett.* **19**, 1264 (1967); **A. Salam** (1968). [ESTABLISHED] — Founding papers unifying the electroweak interactions.
- **G. 't Hooft and M. Veltman**, *Nucl. Phys. B* **44**, 189 (1972). [ESTABLISHED] — Renormalizability of spontaneously broken non-Abelian gauge theories, making the electroweak theory predictive (Nobel 1999).
- **P. W. Higgs**, *Phys. Rev. Lett.* **13**, 508 (1964); **F. Englert and R. Brout**, *Phys. Rev. Lett.* **13**, 321 (1964); **G. Guralnik, C. R. Hagen, T. W. B. Kibble**, *Phys. Rev. Lett.* **13**, 585 (1964). [ESTABLISHED] — The Brout–Englert–Higgs mechanism; the boson was discovered by ATLAS and CMS in 2012 (Nobel 2013).
- **D. J. Gross and F. Wilczek**, *Phys. Rev. Lett.* **30**, 1343 (1973); **H. D. Politzer**, *Phys. Rev. Lett.* **30**, 1346 (1973). [ESTABLISHED] — Asymptotic freedom in non-Abelian gauge theory, the foundation of perturbative QCD (Nobel 2004).
- **S. L. Adler**, *Phys. Rev.* **177**, 2426 (1969); **J. S. Bell and R. Jackiw**, *Nuovo Cimento A* **60**, 47 (1969). [ESTABLISHED] — The chiral (ABJ) anomaly: a classical symmetry broken by quantization, with physical consequences and gauge-anomaly-cancellation constraints.
- **M. Kobayashi and T. Maskawa**, *Prog. Theor. Phys.* **49**, 652 (1973). [ESTABLISHED] — Three quark generations permit CP violation via a single CKM phase (Nobel 2008).
- **R. D. Peccei and H. R. Quinn**, *Phys. Rev. Lett.* **38**, 1440 (1977); **S. Weinberg** (1978); **F. Wilczek** (1978). [ESTABLISHED] (mechanism) / [OPEN] (axion existence) — The Peccei–Quinn solution to the strong-CP problem and the prediction of the axion.
- **A. D. Sakharov**, *JETP Lett.* **5**, 24 (1967). [ESTABLISHED] (necessary conditions) / [OPEN] (realized mechanism) — The three conditions (B violation, C/CP violation, departure from equilibrium) for dynamically generating the baryon asymmetry. See [OPEN_PROBLEMS.md](OPEN_PROBLEMS.md).

---

## 3. General relativity and gravitation

Primary support for [domains/general-relativity.md](domains/general-relativity.md).

### Textbooks and treatises

- **C. W. Misner, K. S. Thorne, J. A. Wheeler**, *Gravitation* (Freeman, 1973; reissued Princeton Univ. Press, 2017). [ESTABLISHED] — The canonical comprehensive reference ("MTW"); definitive on geometry, the equivalence principle, ADM, and gravitational waves. Source for sign-convention tables (see [domains/general-relativity.md](domains/general-relativity.md)).
- **R. M. Wald**, *General Relativity* (Univ. of Chicago Press, 1984). [ESTABLISHED] — The standard rigorous graduate text; authoritative on causal structure, singularity theorems, energy, asymptotic flatness (ADM/Bondi), and QFT in curved spacetime.
- **S. M. Carroll**, *Spacetime and Geometry: An Introduction to General Relativity* (Addison-Wesley, 2004). [ESTABLISHED] — Modern, clear graduate text; good on the Einstein–Hilbert variational derivation, diffeomorphism invariance, and observational connections.
- **S. W. Hawking and G. F. R. Ellis**, *The Large Scale Structure of Space-Time* (Cambridge Univ. Press, 1973). [ESTABLISHED] — Definitive treatment of global causal structure, energy conditions, and the Hawking–Penrose singularity theorems. *(Also primary for §6; cross-listed there.)*

### Landmark papers and theorems

- **R. Penrose**, "Gravitational collapse and space-time singularities," *Phys. Rev. Lett.* **14**, 57 (1965). [ESTABLISHED] — The original trapped-surface singularity theorem; foundational for black-hole and cosmological singularity results (2020 Nobel).
- **R. Arnowitt, S. Deser, C. W. Misner**, "The dynamics of general relativity" (1962; reprinted as arXiv:gr-qc/0405109). [ESTABLISHED] — The original ADM $3+1$ Hamiltonian formulation, constraints, and definition of ADM energy.
- **Y. Choquet-Bruhat and R. Geroch**, "Global aspects of the Cauchy problem in general relativity," *Commun. Math. Phys.* **14**, 329 (1969). [ESTABLISHED] — Existence and uniqueness of the maximal globally hyperbolic development: the rigorous statement of GR's determinism.
- **R. Schoen and S.-T. Yau**, "On the proof of the positive mass conjecture in general relativity," *Commun. Math. Phys.* **65**, 45 (1979); **E. Witten**, *Commun. Math. Phys.* **80**, 381 (1981). [ESTABLISHED] — Proofs of the positive-energy theorem ($M_{\mathrm{ADM}} \ge 0$), foundational for the consistency of GR's notion of total energy.
- **D. Christodoulou and S. Klainerman**, *The Global Nonlinear Stability of the Minkowski Space* (Princeton Univ. Press, 1993). [ESTABLISHED] — Landmark proof that Minkowski space is nonlinearly stable; a benchmark global-existence result in GR PDE theory.
- **B. P. Abbott *et al.* (LIGO Scientific & Virgo Collaborations)**, "Observation of gravitational waves from a binary black hole merger," *Phys. Rev. Lett.* **116**, 061102 (2016). [ESTABLISHED] — First direct detection (GW150914); confirmation of GR's dynamical, strong-field, radiative regime.
- **S. W. Hawking**, "Particle creation by black holes," *Commun. Math. Phys.* **43**, 199 (1975). [ESTABLISHED] (radiation) / [OPEN] (information fate) — Derivation of Hawking radiation; origin of the information paradox at the GR/QFT/thermodynamics interface. *(Load-bearing across §5, §6, §7; primary listing here.)*
- **C. M. Will**, "The confrontation between general relativity and experiment," *Living Reviews in Relativity* **17**, 4 (2014). [ESTABLISHED] — Authoritative, regularly updated review of the PPN formalism and the tests defining GR's domain of validity. `[unverified]` exact article number of the most recent revision; cite the current *Living Reviews* version.

---

## 4. Classical mechanics

Primary support for [domains/classical-mechanics.md](domains/classical-mechanics.md).

### Textbooks

- **H. Goldstein, C. Poole, J. Safko**, *Classical Mechanics*, 3rd ed. (Addison-Wesley, 2002). [ESTABLISHED] — Standard graduate text; canonical treatment of Lagrangian/Hamiltonian formalism, canonical transformations, Hamilton–Jacobi theory, rigid bodies, and chaos.
- **L. D. Landau and E. M. Lifshitz**, *Mechanics* (Course of Theoretical Physics, Vol. 1), 3rd ed. (Pergamon, 1976). [ESTABLISHED] — Develops all of mechanics from the principle of least action with exceptional economy; authoritative on conservation laws, small oscillations, and the rigid body.
- **V. I. Arnold**, *Mathematical Methods of Classical Mechanics*, 2nd ed. (Springer, GTM 60, 1989). [ESTABLISHED] — The definitive geometric/symplectic treatment: differential forms, symplectic manifolds, Liouville–Arnold integrability, action–angle variables, KAM; the bridge to modern mathematics ([domains/mathematics.md](domains/mathematics.md)).
- **J. E. Marsden and T. S. Ratiu**, *Introduction to Mechanics and Symmetry*, 2nd ed. (Springer, 1999). [ESTABLISHED] — Authoritative on the geometry of symmetry: moment maps, Marsden–Weinstein symplectic reduction, Lie-group actions, and the modern form of Noether's theorem.
- **V. I. Arnold, V. V. Kozlov, A. I. Neishtadt**, *Mathematical Aspects of Classical and Celestial Mechanics*, 3rd ed. (Springer, 2006). [ESTABLISHED] — Comprehensive modern survey of integrable systems, perturbation theory, KAM, Arnold diffusion, and the rigorous state of celestial mechanics.
- **R. P. Feynman and A. R. Hibbs**, *Quantum Mechanics and Path Integrals* (McGraw-Hill, 1965). [ESTABLISHED] — The path-integral formulation $\propto e^{iS/\hbar}$ and the derivation of the classical least-action principle as its stationary-phase limit.

### Landmark papers and original sources

- **E. Noether**, "Invariante Variationsprobleme," *Nachr. Ges. Wiss. Göttingen* (1918). [ESTABLISHED] — The original paper establishing the symmetry–conservation correspondence (Noether's first and second theorems).
- **H. Poincaré**, *Les Méthodes Nouvelles de la Mécanique Céleste*, 3 vols. (Gauthier-Villars, 1892–1899). [ESTABLISHED] — Landmark origin of qualitative dynamics, the three-body problem, homoclinic tangles, and deterministic chaos / nonintegrability.
- **A. N. Kolmogorov** (1954), **V. I. Arnold** (1963), **J. Moser** (1962) — the original KAM papers; synthesized in **J. Moser**, *Stable and Random Motions in Dynamical Systems* (Princeton Univ. Press, 1973). [ESTABLISHED] — Persistence of invariant tori under perturbation; foundational for the integrable–chaotic transition.
- **P. A. M. Dirac**, *Lectures on Quantum Mechanics* (Belfer Graduate School, 1964); and "Generalized Hamiltonian dynamics" (1950). [ESTABLISHED] — Constraint analysis of singular Lagrangians (Dirac–Bergmann), Dirac brackets, and the bracket→commutator correspondence.
- **F. Bayen, M. Flato, C. Fronsdal, A. Lichnerowicz, D. Sternheimer**, "Deformation theory and quantization, I & II," *Ann. Phys. (NY)* **111** (1978). [ESTABLISHED] (math) — Founding papers of deformation quantization and the star product, formalizing quantization as a deformation of the classical Poisson algebra.
- **Z. Xia**, "The existence of noncollision singularities in Newtonian systems," *Annals of Mathematics* **135** (1992), 411–468. [ESTABLISHED] — Rigorous proof that finite-time noncollision singularities exist in the Newtonian $N$-body problem ($N \ge 5$), bounding global determinism. See [GAPS_AND_CONTRADICTIONS.md](GAPS_AND_CONTRADICTIONS.md).
- **J. D. Norton**, "The dome: an unexpectedly simple failure of determinism," *Philosophy of Science* **75** (2008). [CONTESTED] — Sharp articulation of the non-Lipschitz indeterminism debate internal to Newtonian mechanics.

---

## 5. Thermodynamics and statistical mechanics

Primary support for [domains/thermodynamics.md](domains/thermodynamics.md) and [domains/statistical-mechanics.md](domains/statistical-mechanics.md).

### Textbooks

- **H. B. Callen**, *Thermodynamics and an Introduction to Thermostatistics*, 2nd ed. (Wiley, 1985). [ESTABLISHED] — The canonical axiomatic (postulatory) treatment: fundamental relation, extremum principles, Legendre transforms, Maxwell relations, stability.
- **E. Fermi**, *Thermodynamics* (Dover, 1956); **M. W. Zemansky and R. H. Dittman**, *Heat and Thermodynamics* (McGraw-Hill; multiple eds.). [ESTABLISHED] — Classic clear expositions of the four laws, Carnot's theorem, and the operational definition of absolute temperature. `[unverified]` exact edition/year of the Zemansky–Dittman volume in use.
- **L. D. Landau and E. M. Lifshitz**, *Statistical Physics, Part 1* (Course of Theoretical Physics, Vol. 5), 3rd ed. (Pergamon). [ESTABLISHED] — Authoritative bridge from statistical mechanics to thermodynamics: equilibrium ensembles, fluctuations, phase transitions, and the third law from quantum statistics.
- **K. Huang**, *Statistical Mechanics*, 2nd ed. (Wiley, 1987). [ESTABLISHED] — Standard pedagogical text: Boltzmann equation and H-theorem, the ensembles, quantum gases, and the Ising model via the transfer matrix.
- **R. K. Pathria and P. D. Beale**, *Statistical Mechanics*, 3rd ed. (Elsevier/Academic Press). [ESTABLISHED] — Comprehensive coverage of quantum statistics, the grand canonical ensemble, BEC, fluctuation–dissipation, and an introduction to critical phenomena and the RG.
- **L. E. Reichl**, *A Modern Course in Statistical Physics* (Wiley; multiple eds.). [ESTABLISHED] — Strong on nonequilibrium statistical mechanics, kinetic theory, linear response, and the fluctuation–dissipation theorem.
- **N. Goldenfeld**, *Lectures on Phase Transitions and the Renormalization Group* (Addison-Wesley, 1992). [ESTABLISHED] — Conceptually careful treatment of scaling, universality, and Wilsonian RG, including the $\varepsilon$-expansion.
- **A. I. Khinchin**, *Mathematical Foundations of Statistical Mechanics* (Dover, 1949). [ESTABLISHED] — Rigorous demonstration that the equivalence of time and phase averages for macroscopic sum-functions rests on high dimensionality, not strict ergodicity — a cornerstone of the typicality viewpoint.

### Historical origins

- **S. Carnot**, *Réflexions sur la puissance motrice du feu* (1824); **R. Clausius** (1865, introduction of entropy); **L. Boltzmann**, *Lectures on Gas Theory* (1896–98). [ESTABLISHED] — Origins of the Carnot bound, the entropy concept, and the kinetic foundation of the second law.

### Landmark papers — equilibrium, critical phenomena, foundations

- **L. Onsager**, "Crystal statistics. I. A two-dimensional model with an order–disorder transition," *Phys. Rev.* **65**, 117 (1944). [ESTABLISHED] — Exact solution of the 2D Ising model; the landmark demonstration of a genuine phase transition with non-mean-field critical exponents.
- **K. G. Wilson and J. Kogut**, "The renormalization group and the $\varepsilon$ expansion," *Phys. Rep.* **12**, 75 (1974). [ESTABLISHED] — RG explanation of critical phenomena and universality (Wilson, Nobel 1982). *(Primary entry; also load-bearing in §2.)*
- **E. T. Jaynes**, "Information theory and statistical mechanics," *Phys. Rev.* **106**, 620 (1957). [CONTESTED] — The maximum-entropy / inferential reinterpretation of statistical mechanics; central to the disputed information-theoretic foundations. See [domains/information-theory.md](domains/information-theory.md).
- **J. L. Lebowitz**, "Boltzmann's entropy and time's arrow," *Physics Today* **46**(9), 32 (1993). [INFERENCE] — Influential modern statement of the typicality/Boltzmann-entropy resolution of the irreversibility paradoxes (Loschmidt, Zermelo) and the role of the low-entropy past.
- **O. E. Lanford III**, "Time evolution of large classical systems," in *Dynamical Systems, Theory and Applications*, Lecture Notes in Physics **38** (Springer, 1975). [ESTABLISHED] — Rigorous derivation of the Boltzmann equation from Hamiltonian dynamics (Boltzmann–Grad limit) for short times, clarifying the status of molecular chaos.

### Landmark papers — nonequilibrium and fluctuation theorems

- **L. Onsager**, *Phys. Rev.* **37**, 405 and **38**, 2265 (1931); **S. R. de Groot and P. Mazur**, *Non-Equilibrium Thermodynamics* (Dover, 1984). [ESTABLISHED] — Onsager reciprocal relations and linear irreversible thermodynamics; the near-equilibrium extension and connection to transport.
- **R. Kubo**, "Statistical-mechanical theory of irreversible processes I," *J. Phys. Soc. Jpn.* **12**, 570 (1957). [ESTABLISHED] — Linear-response theory and the fluctuation–dissipation theorem (Green–Kubo relations for transport coefficients).
- **C. Jarzynski**, "Nonequilibrium equality for free energy differences," *Phys. Rev. Lett.* **78**, 2690 (1997). [ESTABLISHED] — The Jarzynski equality $\langle e^{-\beta W}\rangle = e^{-\beta \Delta F}$, an exact nonequilibrium identity refining the second law.
- **G. E. Crooks**, "Entropy production fluctuation theorem and the nonequilibrium work relation for free energy differences," *Phys. Rev. E* **60**, 2721 (1999). [ESTABLISHED] — The Crooks fluctuation theorem relating forward/reverse work distributions; the detailed result from which Jarzynski follows.
- **U. Seifert**, "Stochastic thermodynamics, fluctuation theorems and molecular machines," *Rep. Prog. Phys.* **75**, 126001 (2012). [ESTABLISHED] — Comprehensive review of stochastic thermodynamics and trajectory-level entropy production.

### Landmark papers — quantum thermalization

- **J. M. Deutsch**, *Phys. Rev. A* **43**, 2046 (1991); **M. Srednicki**, "Chaos and quantum thermalization," *Phys. Rev. E* **50**, 888 (1994). [INFERENCE] (hypothesis, strongly supported) — The original formulations of the Eigenstate Thermalization Hypothesis (ETH) explaining thermalization in isolated quantum systems.
- **L. D'Alessio, Y. Kafri, A. Polkovnikov, M. Rigol**, "From quantum chaos and eigenstate thermalization to statistical mechanics and thermodynamics," *Adv. Phys.* **65**, 239 (2016). [INFERENCE] — Comprehensive modern review tying ETH, quantum chaos, random-matrix theory, integrability/GGE, and the foundations of quantum statistical mechanics.

### Black-hole thermodynamics (interface with §3, §6, §7)

- **J. D. Bekenstein**, "Black holes and entropy," *Phys. Rev. D* **7**, 2333 (1973). [ESTABLISHED] (within semiclassical gravity) — Black-hole entropy $S = A/4$ (in $G=\hbar=c=k_B=1$ units). *(Primary entry; companion to Hawking 1975, §3.)*
- **J. M. Bardeen, B. Carter, S. W. Hawking**, "The four laws of black hole mechanics," *Commun. Math. Phys.* **31**, 161 (1973). [ESTABLISHED] — The isomorphism between black-hole mechanics and the four laws of thermodynamics.
- **A. Strominger and C. Vafa**, "Microscopic origin of the Bekenstein–Hawking entropy," *Phys. Lett. B* **379**, 99 (1996). [ESTABLISHED] (for the specific BPS cases) / [OPEN] (general case) — String-theoretic microstate counting reproducing $S=A/4$ for certain extremal black holes. See [OPEN_PROBLEMS.md](OPEN_PROBLEMS.md).

---

## 6. Cosmology

Primary support for [domains/cosmology.md](domains/cosmology.md).

### Textbooks

- **S. Weinberg**, *Cosmology* (Oxford Univ. Press, 2008). [ESTABLISHED] — Authoritative graduate text; rigorous FLRW dynamics, the CMB and perturbation theory, and the anthropic bound on $\Lambda$.
- **S. Dodelson and F. Schmidt**, *Modern Cosmology*, 2nd ed. (Academic Press, 2020). [ESTABLISHED] — Standard reference for the Einstein–Boltzmann hierarchy, CMB and matter power spectra, and the formalism behind CAMB/CLASS.
- **V. Mukhanov**, *Physical Foundations of Cosmology* (Cambridge Univ. Press, 2005). [ESTABLISHED] (formalism) — Rigorous cosmological perturbation theory and the inflationary generation of primordial fluctuations.
- **D. Baumann**, *Cosmology* (Cambridge Univ. Press, 2022). [ESTABLISHED] — Modern pedagogical synthesis of background dynamics, inflation, and perturbations with current observational framing.
- **E. W. Kolb and M. S. Turner**, *The Early Universe* (Addison-Wesley, 1990). [ESTABLISHED] — Classic reference on thermal history, freeze-out, BBN, and relics; standard source for the hot-Big-Bang formalism.
- **G. F. R. Ellis, R. Maartens, M. A. H. MacCallum**, *Relativistic Cosmology* (Cambridge Univ. Press, 2012). [ESTABLISHED] — Careful treatment of the cosmological principle, averaging/backreaction (the fitting problem), and the foundations of the FLRW idealization.

### Data reference

- **Planck Collaboration**, "Planck 2018 results. VI. Cosmological parameters," *Astron. Astrophys.* **641**, A6 (2020). [ESTABLISHED] — The definitive CMB determination of the six $\Lambda$CDM parameters; baseline for the $H_0$-tension and curvature discussions. **Use for numerical values** (see [CONSTANTS_AND_SCALES.md](CONSTANTS_AND_SCALES.md)); the wiki states such values approximately by design.

### Landmark papers and theorems

- **A. H. Guth**, "Inflationary universe: a possible solution to the horizon and flatness problems," *Phys. Rev. D* **23**, 347 (1981). [INFERENCE] (paradigm, strongly favored) — Foundational inflation paper articulating the horizon, flatness, and monopole problems.
- **A. Borde, A. H. Guth, A. Vilenkin**, "Inflationary spacetimes are not past-complete," *Phys. Rev. Lett.* **90**, 151301 (2003). [ESTABLISHED] (theorem) / [SPECULATIVE] (multiverse reading) — The BGV theorem: even eternally inflating spacetimes have a past boundary.
- **S. Weinberg**, "The cosmological constant problem," *Rev. Mod. Phys.* **61**, 1 (1989). [OPEN] — The canonical statement of the cosmological-constant problem and survey of attempted solutions; still the reference framing. See [OPEN_PROBLEMS.md](OPEN_PROBLEMS.md).
- **R. Penrose**, "Singularities and time-asymmetry," in *General Relativity: An Einstein Centenary Survey*, eds. S. W. Hawking and W. Israel (Cambridge Univ. Press, 1979); and *The Road to Reality* (Jonathan Cape, 2004). [SPECULATIVE] — Origin of the Weyl curvature hypothesis and the gravitational-entropy framing of the low-entropy past and the arrow of time. See [HYPOTHESES.md](HYPOTHESES.md).
- **S. W. Hawking and G. F. R. Ellis**, *The Large Scale Structure of Space-Time* (Cambridge Univ. Press, 1973). [ESTABLISHED] — Singularity theorems and the rigorous geometric basis for the breakdown of FLRW at the initial singularity. *(Primary listing in §3.)*

---

## 7. Information theory and quantum information

Primary support for [domains/information-theory.md](domains/information-theory.md).

### Textbooks

- **T. M. Cover and J. A. Thomas**, *Elements of Information Theory*, 2nd ed. (Wiley, 2006). [ESTABLISHED] — The canonical classical reference: AEP, data-processing inequality, capacity, rate–distortion, and the Kolmogorov-complexity chapter.
- **M. Li and P. Vitányi**, *An Introduction to Kolmogorov Complexity and Its Applications* (Springer; multiple eds.). [ESTABLISHED] — Definitive treatment of algorithmic information theory: the invariance theorem, incomputability, relation to Shannon entropy, and Chaitin's results.
- **M. A. Nielsen and I. L. Chuang**, *Quantum Computation and Quantum Information* (Cambridge Univ. Press, 2000/2010). [ESTABLISHED] — The standard quantum-information text: von Neumann entropy, no-cloning, teleportation, entanglement measures, channel capacities, error correction. *(Primary listing in §1.)*
- **M. M. Wilde**, *Quantum Information Theory*, 2nd ed. (Cambridge Univ. Press, 2017). [ESTABLISHED] — Modern rigorous treatment of channels, entropies, and the information-theoretic structure underlying the operational generalization of the QM axioms.

### Foundational papers — classical and quantum information

- **C. E. Shannon**, "A mathematical theory of communication," *Bell System Technical Journal* **27**, 379 & 623 (1948). [ESTABLISHED] — Founding paper: entropy, mutual information, source and channel coding theorems, channel capacity.
- **E. H. Lieb and M. B. Ruskai**, "Proof of the strong subadditivity of quantum-mechanical entropy," *J. Math. Phys.* **14**, 1938 (1973). [ESTABLISHED] — Proof of strong subadditivity, the single most important entropy inequality, underlying both quantum information and holographic entropy constraints.
- **J. A. Wheeler**, "Information, physics, quantum: the search for links," in *Complexity, Entropy and the Physics of Information* (Addison-Wesley, 1990). [SPECULATIVE] — The "it from bit" manifesto framing physics as fundamentally informational; the conceptual lodestar of the domain. See [UNIFYING_PRINCIPLES.md](UNIFYING_PRINCIPLES.md).

### Thermodynamics of computation (interface with §5)

- **R. Landauer**, "Irreversibility and heat generation in the computing process," *IBM J. Res. Dev.* **5**, 183 (1961). [ESTABLISHED] — Landauer's principle: erasing one bit dissipates at least $k_B T \ln 2$ of heat.
- **C. H. Bennett**, "The thermodynamics of computation — a review," *Int. J. Theor. Phys.* **21**, 905 (1982). [ESTABLISHED] — Reversible computation and the resolution of the Maxwell-demon paradox via the cost of erasure.
- **N. Margolus and L. B. Levitin**, "The maximum speed of dynamical evolution," *Physica D* **120**, 188 (1998); **S. Lloyd**, "Ultimate physical limits to computation," *Nature* **406**, 1047 (2000). [ESTABLISHED] (bounds) — The quantum speed limit / maximum operation rate and Lloyd's synthesis of physical bounds into computational ceilings.

### Holography and "spacetime from entanglement"

- **J. D. Bekenstein**, "Universal upper bound on the entropy-to-energy ratio for bounded systems," *Phys. Rev. D* **23**, 287 (1981); **G. 't Hooft** (1993) and **L. Susskind**, "The world as a hologram," *J. Math. Phys.* **36**, 6377 (1995); **R. Bousso**, "A covariant entropy conjecture," *JHEP* 07 (1999) 004, and "The holographic principle," *Rev. Mod. Phys.* **74**, 825 (2002). [INFERENCE] (Bekenstein/Bousso bounds) / [SPECULATIVE] (holographic principle as fundamental) — The information-bound backbone of holography. `[unverified]` exact JHEP article number of Bousso 1999.
- **S. Ryu and T. Takayanagi**, "Holographic derivation of entanglement entropy from AdS/CFT," *Phys. Rev. Lett.* **96**, 181602 (2006); **V. E. Hubeny, M. Rangamani, T. Takayanagi**, *JHEP* 07 (2007) 062. [INFERENCE] (within AdS/CFT) — The RT formula and its covariant (HRT) generalization: entanglement entropy as a minimal/extremal bulk area.
- **A. Almheiri, X. Dong, D. Harlow**, "Bulk locality and quantum error correction in AdS/CFT," *JHEP* 04 (2015) 163; **F. Pastawski, B. Yoshida, D. Harlow, J. Preskill**, "Holographic quantum error-correcting codes," *JHEP* 06 (2015) 149. [SPECULATIVE] — AdS/CFT as a quantum error-correcting code and the HaPPY tensor-network model.
- **T. Jacobson**, "Thermodynamics of spacetime: the Einstein equation of state," *Phys. Rev. Lett.* **75**, 1260 (1995); **M. Van Raamsdonk**, "Building up spacetime with quantum entanglement," *Gen. Rel. Grav.* **42**, 2323 (2010); **J. Maldacena and L. Susskind**, "Cool horizons for entangled black holes," *Fortsch. Phys.* **61**, 781 (2013). [SPECULATIVE] — Jacobson's thermodynamic derivation of Einstein's equations, the "spacetime from entanglement" thesis, and the ER=EPR conjecture. See [UNIFICATION_LANDSCAPE.md](UNIFICATION_LANDSCAPE.md).
- **D. N. Page**, "Information in black hole radiation," *Phys. Rev. Lett.* **71**, 3743 (1993); **G. Penington** (2020) and **A. Almheiri, N. Engelhardt, D. Marolf, H. Maxfield** (2020) on islands / quantum extremal surfaces. [OPEN] (paradox) / [SPECULATIVE] (island resolution) — The Page curve and the recent QES/island program within gravitational path integrals. `[unverified]` exact journal/arXiv coordinates of the 2020 island papers; cite from the original arXiv postings.

*(Hawking 1975 — the origin of the information paradox — is listed in §3.)*

---

## 8. Mathematical physics

Primary support for [domains/mathematics.md](domains/mathematics.md).

### Functional analysis and operator algebras

- **M. Reed and B. Simon**, *Methods of Modern Mathematical Physics*, Vols. I–IV (Academic Press, 1972–1979). [ESTABLISHED] — The canonical rigorous reference for functional analysis in physics: Hilbert spaces, self-adjointness and self-adjoint extensions (deficiency indices), the spectral theorem, Stone's theorem, and scattering. Vol. I (Functional Analysis), II (Self-Adjointness), III (Scattering), IV (Analysis of Operators). *(Load-bearing for §1.)*
- **M. Takesaki**, *Theory of Operator Algebras*, Vols. I–III (Springer, 1979/2003). [ESTABLISHED] — The definitive treatise on $C^*$- and von Neumann algebras, the Murray–von Neumann/Connes type classification, and Tomita–Takesaki modular theory with the KMS condition.
- **R. Haag**, *Local Quantum Physics: Fields, Particles, Algebras*, 2nd ed. (Springer, 1996). [ESTABLISHED] — Algebraic QFT, the type-III nature of local algebras, modular theory in physics, DHR superselection. *(Primary listing in §2.)*

### Geometry, topology, and representation theory

- **M. Nakahara**, *Geometry, Topology and Physics*, 2nd ed. (IOP, 2003). [ESTABLISHED] — Widely used physicist's reference for manifolds, differential forms, fiber bundles, connections and curvature, characteristic classes, the Atiyah–Singer index theorem, and applications to gauge theory, anomalies, and instantons.
- **A. O. Barut and R. Rączka**, *Theory of Group Representations and Applications* (PWN, 1977); **M. E. Taylor**, *Noncommutative Harmonic Analysis* (AMS, 1986). [ESTABLISHED] — Standard references for Lie groups, Lie algebras, and unitary representation theory in physics, including induced representations and Wigner's classification of Poincaré irreps. `[unverified]` exact year of the Taylor volume.

### Rigorous QFT, constructive results, and modern frameworks

- **J. Glimm and A. Jaffe**, *Quantum Physics: A Functional Integral Point of View*, 2nd ed. (Springer, 1987). [ESTABLISHED] — Constructive QFT and the rigorous Euclidean path integral, including the Osterwalder–Schrader axioms and the construction of $P(\phi)_2$ and $\phi^4_3$. *(Primary listing in §2.)*
- **A. Jaffe and E. Witten**, "Quantum Yang–Mills theory" (Clay Mathematics Institute Millennium Problem description, 2000). [OPEN] — The official statement of the Yang–Mills existence and mass-gap problem. See [OPEN_PROBLEMS.md](OPEN_PROBLEMS.md) and [GAPS_AND_CONTRADICTIONS.md](GAPS_AND_CONTRADICTIONS.md).
- **M. Aizenman** (*Phys. Rev. Lett.* 1981; *Commun. Math. Phys.* 1982) and **M. Aizenman and H. Duminil-Copin**, "Marginal triviality of the scaling limits of critical 4D Ising and $\phi^4_4$ models," *Annals of Mathematics* **194** (2021), 163–235. [ESTABLISHED] — Rigorous proof of triviality of the continuum limit of $\phi^4$ in four dimensions: some 4D theories exist only as cutoff effective theories. Central to the domain-of-validity discussion in [domains/quantum-field-theory.md](domains/quantum-field-theory.md).
- **J. Lurie**, "On the classification of topological field theories," *Current Developments in Mathematics 2008* (2009), 129–280. [INFERENCE] (proof program/sketch) — The cobordism hypothesis; central result on fully extended TQFTs and higher-categorical structures.
- **K. Costello and O. Gwilliam**, *Factorization Algebras in Quantum Field Theory*, Vols. 1–2 (Cambridge Univ. Press, 2017/2021). [INFERENCE] (perturbative scope) — Rigorous formulation of perturbative QFT via factorization algebras and the Batalin–Vilkovisky formalism; a leading bridge between physicists' QFT and rigorous mathematics.

### Structural theorems and the meta-question

- **V. Bargmann**, "On unitary ray representations of continuous groups," *Ann. Math.* **59** (1954); **A. M. Gleason** (1957, see §1); **I. M. Gelfand and M. A. Naimark** (1943) and **I. E. Segal** foundational $C^*$-algebra papers. [ESTABLISHED] — Projective/ray representations (Bargmann–Wigner), the near-uniqueness of the Born rule (Gleason), and the representability of $C^*$-algebras (Gelfand–Naimark–Segal).
- **E. P. Wigner**, "The unreasonable effectiveness of mathematics in the natural sciences," *Comm. Pure Appl. Math.* **13** (1960), 1–14. [OPEN] (philosophical) — The original essay framing why mathematics is so effective in physics. See [UNIFYING_PRINCIPLES.md](UNIFYING_PRINCIPLES.md).

---

## 9. Quantum gravity and unification

There is currently **no experimentally confirmed theory of quantum gravity** [ESTABLISHED]; accordingly every entry below is [SPECULATIVE] or [OPEN] as physics, even where the *mathematics* is rigorous. Many key results in this area are also load-bearing in §3 (Hawking 1975, Bardeen–Carter–Hawking), §5 (Bekenstein, Strominger–Vafa), and §7 (holography, RT/HRT, ER=EPR, islands) and are not repeated here. This section collects the additional canonical *unification-program* references. See [UNIFICATION_LANDSCAPE.md](UNIFICATION_LANDSCAPE.md), [HYPOTHESES.md](HYPOTHESES.md), and [OPEN_PROBLEMS.md](OPEN_PROBLEMS.md).

- **J. M. Maldacena**, "The large-$N$ limit of superconformal field theories and supergravity," *Adv. Theor. Math. Phys.* **2**, 231 (1998). [SPECULATIVE] (conjecture, very strongly supported within its regime) — The AdS/CFT correspondence; the most concrete realization of holography and the engine behind much of §7. `[unverified]` exact page; widely cited as *Adv. Theor. Math. Phys.* 2 (1998) 231 / *Int. J. Theor. Phys.* 38 (1999) 1113.
- **J. Polchinski**, *String Theory*, Vols. I–II (Cambridge Univ. Press, 1998). [ESTABLISHED] (as exposition of the framework) — The standard graduate reference for perturbative string theory, D-branes, and dualities. The *physical correctness* of string theory as the theory of nature is [OPEN].
- **C. Rovelli**, *Quantum Gravity* (Cambridge Univ. Press, 2004); **T. Thiemann**, *Modern Canonical Quantum General Relativity* (Cambridge Univ. Press, 2007). [SPECULATIVE] — Canonical references for loop quantum gravity (spin networks, the area/volume operators, spin foams). `[unverified]` exact year of the Thiemann volume.

> **Caution (per [EPISTEMICS.md](EPISTEMICS.md)).** The maturity of the *mathematics* in these programs must never be conflated with empirical confirmation of the *physics*. None of the candidate quantum-gravity frameworks has a confirmed prediction distinguishing it from the others or from semiclassical gravity [ESTABLISHED]. Treat all unification claims sourced from this section as [SPECULATIVE] unless a domain page demonstrates otherwise.

---

## Maintenance conventions

- **Dedup rule.** A source load-bearing in multiple domains is listed once under its primary section and cross-referenced (not re-quoted) elsewhere. When adding a reference, search this page first.
- **No fabrication.** Add only sources you are confident exist. If unsure of a detail, supply author + title + approximate year and append `[unverified]`. Never invent a DOI, volume, page, or theorem name. This mirrors the cardinal rule of [EPISTEMICS.md](EPISTEMICS.md).
- **Numbers.** All numerical constants and measured parameters trace to the Particle Data Group (§2) or Planck (§6); see [CONSTANTS_AND_SCALES.md](CONSTANTS_AND_SCALES.md). Do not cite numbers from textbooks of memory.
- **Provenance.** New entries should record which domain dossier or page motivated them; log additions in [CHANGELOG.md](CHANGELOG.md).

---

## See also

- [README.md](README.md) — the wiki's purpose and entry points.
- [EPISTEMICS.md](EPISTEMICS.md) — the labeling discipline governing both the physics and this source list.
- [THEORY_MAP.md](THEORY_MAP.md) — frameworks, their mathematics, and domains of validity (the structure these sources document).
- [GLOSSARY.md](GLOSSARY.md) — definitions of terms used in citation notes.
- [ASSUMPTIONS_LEDGER.md](ASSUMPTIONS_LEDGER.md) and [CONSTANTS_AND_SCALES.md](CONSTANTS_AND_SCALES.md) — where sourced assumptions and numbers are tracked.
- [OPEN_PROBLEMS.md](OPEN_PROBLEMS.md), [GAPS_AND_CONTRADICTIONS.md](GAPS_AND_CONTRADICTIONS.md), [HYPOTHESES.md](HYPOTHESES.md) — the open questions these references frame.
- Domain pages: [quantum-mechanics](domains/quantum-mechanics.md) · [quantum-field-theory](domains/quantum-field-theory.md) · [general-relativity](domains/general-relativity.md) · [classical-mechanics](domains/classical-mechanics.md) · [thermodynamics](domains/thermodynamics.md) · [statistical-mechanics](domains/statistical-mechanics.md) · [cosmology](domains/cosmology.md) · [particle-physics](domains/particle-physics.md) · [information-theory](domains/information-theory.md) · [mathematics](domains/mathematics.md).

## References

This *is* the references page. Other wiki pages should cite back here rather than maintaining parallel source lists. Cross-domain meta-pages — [UNIFICATION_LANDSCAPE.md](UNIFICATION_LANDSCAPE.md), [UNIFYING_PRINCIPLES.md](UNIFYING_PRINCIPLES.md), [FINDINGS.md](FINDINGS.md), [ROADMAP.md](ROADMAP.md) — should link individual entries above by author + short title.
