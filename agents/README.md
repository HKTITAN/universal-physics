# The Universal-Physics Agent Team

An [Eve](https://eve.dev) agent team that continues this repository's
adversarially-refereed research program — the same seven roles that produced
iterations 16–23, published as durable, runnable agents with persistent memory.

## The team

| Agent | Role | Writes to |
|---|---|---|
| **Integrator** (lead, `agent/`) | Orchestrates the working loop; delegates; enforces the referee → assembler chain | — |
| [`team/prover`](team/prover/) | Attacks the current named lemma (today: LEM-A1‴-T, then LEM-A1⁗) with cold-checkable derivations | `up-agent-prover` |
| [`team/referee`](team/referee/) | Adversarial re-derivation, default REFUTE; live citation verification; strikes overclaims | `up-agent-referee` |
| [`team/assembler`](team/assembler/) | Rules whether a complete proof assembles; owns every counter; names the sharpest missing lemma | `up-agent-assembler` |
| [`team/numerics`](team/numerics/) | Falsifiable computations (`scripts/eo-modular-numerics.py`); failed probe designs are first-class results | `up-agent-numerics` |
| [`team/watcher`](team/watcher/) | Scheduled watch-mode sweeps over the external clocks (arXiv watch items; DESI/Euclid/Roman) | `up-agent-watcher` |
| [`team/librarian`](team/librarian/) | The integrator of record: registries, manifests, commits, pushes; sole writer of `up-shared` | `up-shared` |
| [`team/scribe`](team/scribe/) | The authored book (`book/chapters/`) and the public site; presentation counters | `up-agent-scribe` |

Each `team/<role>/` directory contains a complete standalone `instructions.md` —
per Eve's convention, that alone makes it a runnable agent. The lead agent in
`agent/` carries the shared skills every role loads:

- [`agent/skills/house-rules.md`](agent/skills/house-rules.md) — the binding
  epistemic discipline (tags, anti-crank protocol, counters, retraction rule).
- [`agent/skills/current-state.md`](agent/skills/current-state.md) — the
  compressed campaign state (the distance ladder, the proved methods-no-gos,
  the designated next moves). The librarian keeps it current.

## Memory (supermemory local)

Every agent gets persistent memory via a repo-local
[supermemory](https://github.com/supermemoryai/supermemory) server:

- **Shared project memory** — `containerTag: "up-shared"`: the integrated
  campaign state. Written only by the librarian; searched by everyone before
  starting work.
- **Private memory per agent** — `containerTag: "up-agent-<role>"`: working
  notes, wrong turns, next steps.

The tool surface is [`agent/tools/memory.ts`](agent/tools/memory.ts)
(`addMemory`, `searchMemory`, `memoryProfile`), auto-discovered by Eve.
All data lives in the repo-local `.supermemory/` directory (gitignored;
encrypted at rest by the server).

### One-time setup

1. **Server** (installed under WSL on this machine; installer:
   `curl -fsSL https://supermemory.ai/install | bash`):

   ```bash
   wsl -e bash -lc "cd /mnt/c/PROJECTS/FAFO/universal-physics && ~/.supermemory/bin/supermemory-server"
   ```

   On first run the server's own wizard asks for one LLM provider key
   (OpenAI/Anthropic/Gemini/Groq) for embeddings/summaries and stores it in its
   **encrypted** `.supermemory/env.enc` — the key never enters this repository
   or any agent transcript. Subsequent runs need no interaction.

2. **Verify + seed** (from `agents/`):

   ```bash
   npm install
   npm run memory:health   # expects HTTP response from localhost:6767
   npm run memory:seed     # seeds up-shared from the wiki's authoritative state
   ```

## Running the team

```bash
cd agents
npm install
npx eve dev        # REPL with the Integrator (lead agent)
```

To run a single role standalone, point Eve at its directory (each
`team/<role>/instructions.md` is a valid minimal agent), or scaffold it with
`npx eve@latest init` and drop the role's instructions in.

## The honest frame

This team does not "solve physics" by existing. It makes the program **durable
and continuous**: the roles, the discipline, and the memory survive any single
session. The mathematics stands where the record says it stands
([`FINDINGS.md`](../FINDINGS.md)): verdict unchanged through 22 consecutive
refereed confirmations; the free-field gate compressed to two named lemmas; the
designated next moves recorded in
[`agent/skills/current-state.md`](agent/skills/current-state.md). The team's job
is to keep moving that frontier with the same standards — and to say so plainly
when it does not move.
