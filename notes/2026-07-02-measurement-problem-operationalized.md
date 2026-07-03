---
title: "Track R2 — The Measurement Problem, Operationalized (2026-07 bound state)"
type: note
tags: [note, research, quantum-mechanics, measurement-problem, collapse-models]
updated: 2026-07-02
---

# Track R2 — The measurement problem, operationalized (2026-07-02)

Status: Research note (ROADMAP Tier 1, item 3). Deepens [OP-2/OP-26/OP-27/OP-28](../OPEN_PROBLEMS.md), the A-3/QM-4 ledger entries ([ASSUMPTIONS_LEDGER.md](../ASSUMPTIONS_LEDGER.md)), [GC-6](../GAPS_AND_CONTRADICTIONS.md#gc-6), and the objective-collapse row of [EXPERIMENT_WATCHLIST.md](../EXPERIMENT_WATCHLIST.md). Every reference below verified live 2026-07-02. **No claim in this note bears on the carrier problem or the encoding screen; this is core/costs bookkeeping, not the wager.**

## 1. The 2025–2026 objective-collapse bound state

| Channel | Model | Bound (as verified) | Source | Tag |
|---|---|---|---|---|
| Underground spontaneous radiation (XENONnT SR1, 1–140 keV) | Markovian mass-proportional (white-noise) CSL | $\lambda/r_C^2 < 3.0\times10^{-3}\ \mathrm{s^{-1}m^{-2}}$ (90% CL); **canonical GRW point ($r_C=10^{-7}$ m, $\lambda=10^{-16}\ \mathrm{s^{-1}}$) deviates from the XENONnT best fit by 9.1σ — the first experimental exclusion of the originally proposed CSL values**; ×135 over Majorana Demonstrator; most stringent for $r_C\lesssim10^{-5}$ m | arXiv:2506.05507; PRL **136**, 120201 (2026) | [ESTABLISHED] |
| Underground spontaneous radiation (prior best) | same | Majorana Demonstrator | PRL **129**, 080401 (2022) | [ESTABLISHED] |
| Underground spontaneous radiation | Markovian (radiating) Diósi–Penrose | $R_0 > 4.9\times10^{-10}$ m (90% CL), ~5× over prior; parameter-free DP already dead since $R_0>0.54$ Å (95%) | arXiv:2506.05507; Donadi et al., *Nat. Phys.* **17**, 74 (2021), arXiv:2111.13490 | [ESTABLISHED] |
| Space GW-detector testbed (LISA Pathfinder, rotational noise) | CSL | ~2× improvement over translational bound for $r_C\sim10^{-5.5}$–$10^{-3.5}$ m | arXiv:2501.08971; PRA **111**, L020203 (2025) | [ESTABLISHED] |
| Space GW-detector testbed (LPF, updated acceleration data) | CSL / DP | $\lambda\lesssim8.3\times10^{-11}\ \mathrm{s^{-1}}$ at $r_C=10^{-7}$ m (mHz band); DP cutoff ≳285 fm | arXiv:2411.17588 **[preprint; unverified journal-ref]** (2017 baseline: $\lambda\lesssim2.96\times10^{-8}\ \mathrm{s^{-1}}$, $R_0\gtrsim40$ fm, PRD **95**, 084054 (2017)) | [INFERENCE, preprint rider] |
| Matter-wave interferometry | any collapse (model-robust) | $>1.7\times10^5$ Da record, macroscopicity $\mu=15.5$ (already registered in the watchlist) | arXiv:2507.21211; *Nature* **649**, 866 (2026) | [ESTABLISHED] |
| Theory input enabling the 2025–26 leap | CSL vs DP discrimination | low-energy X-ray emission is atomic-species- and model-dependent (electron–proton cancellation effects) — the radiation channel became model-discriminating | Piscicchia et al., PRL **132**, 250203 (2024) | [ESTABLISHED] |
| Proposal (not a bound) | CSL, interferometric-class | reversible-nanoparticle-pointer test targeting $\lambda\sim1.4\times10^{-10}$ → $8.7\times10^{-12}\ \mathrm{s^{-1}}$ | arXiv:2606.22707 (2026-06, preprint) | [SPECULATIVE] |

**Attribution correction.** The 2506.05507 bound is the **XENONnT Collaboration's** (177 authors). VIP is a distinct program: **VIP-3** is its *Pauli-exclusion-principle* arm (design: *Entropy* **26**, 752 (2024); installing at LNGS, data-taking planned from 2025 per the design paper; latest VIP-2 PEP bound: violation probability $<\sim2\times10^{-43}$, reported 2026-02); the *collapse* arm of that group is the HPGe/BEGe spontaneous-radiation program. [ESTABLISHED]

## 2. Surviving parameter windows [INFERENCE synthesis on ESTABLISHED bounds]

- **White-noise Markovian mass-proportional CSL:** both historically motivated points — GRW (1986-canonical) and Adler (2007) — are excluded; the family is cornered between X-ray bounds ($r_C\lesssim10^{-5}$ m) and GW-detector/LPF bounds (large $r_C$). What survives is parameter space with no independent motivation.
- **Radiating Markovian DP:** survives only for $R_0>4.9$ Å — an atomic-scale smearing with no natural microscopic motivation.
- **Escape routes (explicitly flagged by XENONnT):** colored-noise (non-Markovian) extensions — keV-radiation bounds evaporate by construction below the noise-frequency cutoff; dissipative extensions; non-mass-proportional couplings; non-radiating gravity-collapse variants. For all of these the binding constraints are mechanical (mHz–kHz) and interferometric, orders of magnitude weaker. Map anchor: Carlesso et al., *Nat. Phys.* **18**, 243 (2022), arXiv:2203.04231. **The class is not falsified; the parsimony cost of remaining in it has risen qualitatively** — the models now survive by retreating from their original parameter targets. [INFERENCE]
- The iteration-6 flag stands: "decisive coverage ~2035" remains an unanchored internal extrapolation; colored-noise cutoff space is unbounded below, so *complete* closure is not guaranteed by any funded roadmap. [OPEN]

## 3. Costs ledger, 2026 edition (updates the interpretation paragraph in [domains/quantum-mechanics.md](../domains/quantum-mechanics.md))

| Program | Buys | Costs (2026) | 2024–26 delta |
|---|---|---|---|
| Decoherence + branching (Everett) | universal unmodified unitarity; no new parameters; decoherence supplies branch structure | Born-weight account still open (OP-27/OP-28: incoherence + quantitative problems); branching ontology; preferred basis rests on decoherence approximations | no new no-go surfaced in this sweep [OPEN]; LF theorems (below) cost it nothing *extra* — it already rejects absoluteness of observed events |
| Objective collapse (GRW/CSL/DP) | single-world dynamics; **falsifiability (unique among the options)** | canonical parameter points now excluded (GRW 9.1σ; Adler long dead; parameter-free DP dead) → forced retreat to colored/dissipative variants: a new **moving-target/parsimony cost**; relativistic covariance unresolved; energy non-conservation tightly bounded | XENONnT PRL **136**, 120201 (2026); LPF reanalyses; model-discriminating radiation theory (PRL **132**, 250203 (2024)) |
| de Broglie–Bohm pilot wave | single world, determinism, clean measurement account, explicit ontology | explicit nonlocality / preferred foliation; quantum-equilibrium hypothesis; relativistic/QFT awkwardness | no new no-go verified in this sweep [OPEN]; LF adds no new cost (local agency already rejected) |
| Relational QM | no absolute states; relational facts | **live incompatibility charge** [CONTESTED]: GHZ–Wigner-friend argument (Lawrence–Markiewicz–Żukowski, *Quantum* **7**, 1015 (2023)) vs consistency defenses (Cavalcanti–Di Biagio–Rovelli, EJPS **13**, 55 (2023); Drezet, *Found. Phys.* **54**, 5 (2024)) and rejoinder (LMŻ, EJPS **15**, 16 (2025), arXiv:2310.18008); the Adlam–Rovelli **cross-perspective-links** postulate restores intersubjectivity at the cost of departing from strict relationalism | exchange completed in print through 2025; unresolved |
| QBism | dissolves the measurement problem (state = agent's credence) | non-objective $\psi$; shared-reality/intersubjectivity burden | intersubjective-agreement analysis within QBism (arXiv:2312.07728) [OPEN]; LF costs nothing (absoluteness rejected) |
| Copenhagen/standard (single objective outcome + no dynamics change) | working physics as-is | now the **directly targeted corner** of extended-Wigner-friend theorems: retaining both absoluteness of observed events and local agency is LF-inequality-constrained territory | see below |

**Extended-Wigner-friend repricing [ESTABLISHED theorems; CONTESTED significance].** The Local Friendliness (LF) line hardened 2023–2026: "thoughtful" LF from strictly-weaker-than-Bell assumptions (Wiseman–Cavalcanti–Rieffel, *Quantum* **7**, 1112 (2023); critique: Kent, arXiv:2302.12707); LF polytope proven **equal to the Bell polytope** in a wide class of multipartite/sequential EWF scenarios, with a systematic Kochen–Specker→LF translation (Walleghem–Yīng–Wagner–Schmid, *Quantum* **9**, 1819 (2025)); "Noncontextual Friendliness" — absoluteness of observed events + *noncontextual agency* jointly inconsistent with QT (Walleghem–Catani, arXiv:2502.02461, rev. 2026-05, preprint); first LF-violation circuits on quantum simulators/hardware with scaling branch factor — proof-of-principle, loophole-ridden, error-limited (Zeng–Labib–Russo, *Quantum* **9**, 1851 (2025)). Counterweight: the Schmid–Yīng–Leifer six-argument review (arXiv:2308.16220, preprint) argues EWF arguments hinge on assumptions about correlations inaccessible to any observer even in principle — independently vindicating GC-6's standing referee caution. **Net: EWFS theorems constrain assumption *combinations*, never single interpretations; they reprice the ledger, they do not decide it.**

## 4. Near-term decidable vs metaphysical [INFERENCE]

1. **Decided (2021–2026):** parameter-free DP — dead; canonical white-noise CSL points (GRW, Adler) — dead.
2. **Being decided (now–2030s):** the remaining Markovian CSL space (underground + LPF-class + levitated mechanics); colored/dissipative variants *partially* (mechanical bands; interferometric proposals approach the model-robust regime).
3. **Programmatic (2030s+):** LF violations with progressively more complex "friends" (quantum-computer ladder) — each rung eliminates assumption pairs at that complexity scale, never a specific interpretation.
4. **Metaphysical as of 2026 (no distinguishing experiment known even in principle):** Everett vs pilot-wave vs QBism vs RQM; Born-rule derivability (OP-27/OP-28); *which* LF assumption fails. The only lane where [CONTESTED]→decidable promotion is *actually happening* is objective collapse — and only its Markovian sub-family.

## References (all verified live 2026-07-02)

- XENONnT Collab., PRL **136**, 120201 (2026) — https://arxiv.org/abs/2506.05507
- Majorana Demonstrator, PRL **129**, 080401 (2022) — https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.129.080401
- Donadi et al., *Nat. Phys.* **17**, 74 (2021) — https://www.nature.com/articles/s41567-020-1008-4 ; arXiv:2111.13490
- Piscicchia et al., PRL **132**, 250203 (2024) — https://link.aps.org/doi/10.1103/PhysRevLett.132.250203
- Altamura–Vinante–Carlesso, PRA **111**, L020203 (2025) — https://arxiv.org/abs/2501.08971
- Dai–Miao–Ma, arXiv:2411.17588 [preprint] — https://arxiv.org/abs/2411.17588
- Helou–Slagmolen–McClelland–Chen (2017 LPF baseline), PRD **95**, 084054 (2017) — https://journals.aps.org/prd/abstract/10.1103/PhysRevD.95.084054
- Carlesso et al., *Nat. Phys.* **18**, 243 (2022) — https://arxiv.org/abs/2203.04231
- Reversible-pointer CSL proposal, arXiv:2606.22707 [preprint] — https://arxiv.org/abs/2606.22707
- VIP-3 design, *Entropy* **26**, 752 (2024) — https://doi.org/10.3390/e26090752
- Wiseman–Cavalcanti–Rieffel, *Quantum* **7**, 1112 (2023) — https://quantum-journal.org/papers/q-2023-09-14-1112/
- Kent, arXiv:2302.12707 [preprint] — https://arxiv.org/abs/2302.12707
- Walleghem–Yīng–Wagner–Schmid, *Quantum* **9**, 1819 (2025) — https://quantum-journal.org/papers/q-2025-07-31-1819/
- Walleghem–Catani, arXiv:2502.02461 [preprint] — https://arxiv.org/abs/2502.02461
- Zeng–Labib–Russo, *Quantum* **9**, 1851 (2025) — https://quantum-journal.org/papers/q-2025-09-05-1851/
- Schmid–Yīng–Leifer, arXiv:2308.16220 [preprint] — https://arxiv.org/abs/2308.16220
- Lawrence–Markiewicz–Żukowski, *Quantum* **7**, 1015 (2023) — https://quantum-journal.org/papers/q-2023-05-23-1015/
- Cavalcanti–Di Biagio–Rovelli, EJPS **13**, 55 (2023) — https://arxiv.org/abs/2305.07343
- Drezet, *Found. Phys.* **54**, 5 (2024) — https://arxiv.org/abs/2209.01237
- Lawrence–Markiewicz–Żukowski, EJPS **15**, 16 (2025) — https://arxiv.org/abs/2310.18008
- QBism intersubjective agreement, arXiv:2312.07728 [preprint] — https://arxiv.org/pdf/2312.07728
- SEP, Relational Quantum Mechanics — https://plato.stanford.edu/entries/qm-relational/

## See also
[OPEN_PROBLEMS.md](../OPEN_PROBLEMS.md) OP-2/OP-26/OP-27/OP-28 · [EXPERIMENT_WATCHLIST.md](../EXPERIMENT_WATCHLIST.md) · [ASSUMPTIONS_LEDGER.md](../ASSUMPTIONS_LEDGER.md) A-3/QM-4 · [GAPS_AND_CONTRADICTIONS.md](../GAPS_AND_CONTRADICTIONS.md) GC-6 · [domains/quantum-mechanics.md](../domains/quantum-mechanics.md)
