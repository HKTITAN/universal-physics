# Plan 002: Build a contribution front-door aimed at the carrier problem

> **Executor instructions**: Follow step by step, run every verification command, honor STOP conditions, update `plans/README.md` row 002 when done.
>
> **Drift check (run first)**: `git diff --stat 71d585f..HEAD -- CONTRIBUTING.md README.md OPEN_PROBLEMS.md` — if any changed since `71d585f`, re-confirm the "Current state" excerpts below.

## Status
- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: 001 (CI should be green before advertising the path)
- **Category**: docs / direction
- **Planned at**: commit `71d585f`, 2026-06-19

## Why this matters
After fifteen iterations the analytical program is terminally saturated: the verdict moves only on external input. The single open mathematical gate — the **carrier problem / net-naturality theorem** — is now posed as a self-contained dossier (`notes/2026-06-19-iter15-carrier-problem-dossier.md`) for an external operator-algebraist / AQFT-theorist / noncommutative-geometer. But there is **no front door**: no GitHub issue templates, and `CONTRIBUTING.md` still describes the open lever in pre-dossier language and never links the dossier. "Working on the blocker" now literally means getting the posed problem in front of people who could solve it. This plan adds the contribution pathway so an outside expert can find, understand, and attempt the problem — and so any submission arrives in the wiki's anti-crank format.

## Current state
- `CONTRIBUTING.md` exists and is solid (the anti-crank bar). Its "## Where help is most valuable right now" section (around line 22+) lists "The verdict-flipper: derive the indefinite pairing…" and "OP-44…" but does **not** link `notes/2026-06-19-iter15-carrier-problem-dossier.md`.
- `README.md` already links the dossier in its "How to contribute" section (added at commit `71d585f`) — confirm it still does; do not duplicate.
- `OPEN_PROBLEMS.md` has the OP-46 carrier-problem entry but does not yet point to the dossier as the canonical posed statement.
- There is no `.github/ISSUE_TEMPLATE/` directory.

## Commands you will need
| Purpose | Command | Expected |
|---|---|---|
| Link check (from plan 001) | `node scripts/check-links.mjs` | `broken internal links: 0` |
| Confirm templates parse | `node -e "const fs=require('fs');for(const f of fs.readdirSync('.github/ISSUE_TEMPLATE')) if(f.endsWith('.md')||f.endsWith('.yml')) console.log('ok',f)"` | lists the files |

## Scope
**In scope** (only these):
- `.github/ISSUE_TEMPLATE/carrier-problem-proof.md` (create)
- `.github/ISSUE_TEMPLATE/attack-track.md` (create)
- `.github/ISSUE_TEMPLATE/config.yml` (create)
- `CONTRIBUTING.md` (edit the "Where help is most valuable" section only)
- `OPEN_PROBLEMS.md` (add one dossier pointer to the OP-46 entry)
- `plans/README.md` (status row only)

**Out of scope**: the dossier body; the anti-crank-bar section of CONTRIBUTING; any registry IDs; the site/book.

## Git workflow
- Branch: `advisor/002-contribution-pathway`. Commit per logical unit; repo uses a `Co-Authored-By:` trailer. Do not push/PR unless told.

## Steps

### Step 1: Issue template — the carrier-problem call-for-proofs
Create `.github/ISSUE_TEMPLATE/carrier-problem-proof.md` with YAML front-matter (`name: "Carrier problem — proof attempt / counterexample"`, `about: "Attack the one open gate: the net-naturality theorem"`, `title: "[carrier] "`, `labels: ["carrier-problem", "open-problem"]`). Body: a short pointer to the dossier (`notes/2026-06-19-iter15-carrier-problem-dossier.md`), then a checklist mirroring the anti-crank bar — (1) which direction (prove the no-go / exhibit a generative carrier), (2) which of the five routes / which lemma (N1/N2, the commutant-to-generated gap) the argument touches, (3) every claim epistemically tagged, (4) no fabricated citation (web-verified), (5) red-teamed against the named no-go theorems and the wiki's own closures.

### Step 2: Issue template — general attack track + config
Create `.github/ISSUE_TEMPLATE/attack-track.md` (general open-problem attack: `labels: ["attack-track"]`, the same anti-crank checklist, a field for which `OP-n`/`GC-n`/`Hn` it targets). Create `.github/ISSUE_TEMPLATE/config.yml` with `blank_issues_enabled: false` and one `contact_links` entry pointing to `CONTRIBUTING.md` ("Read the contribution bar first").

### Step 3: Wire `CONTRIBUTING.md` to the dossier
In the "## Where help is most valuable right now" section, replace the "The verdict-flipper:" bullet's prose with a version that names the dossier as the canonical posed statement: e.g. "**The carrier problem (the verdict-flipper).** The one open mathematical gate is posed, formally and self-contained, in [the carrier-problem dossier](notes/2026-06-19-iter15-carrier-problem-dossier.md): derive an algebra-compatible, *localized* indefinite (n,n) pairing from modular data — or prove it cannot exist (the net-naturality theorem). Open a **Carrier problem — proof attempt** issue." Keep the OP-44 bullet.
**Verify**: `grep -c "iter15-carrier-problem-dossier" CONTRIBUTING.md` → ≥ 1.

### Step 4: Point OP-46 at the dossier
In `OPEN_PROBLEMS.md`, find the OP-46 entry (`grep -n "OP-46" OPEN_PROBLEMS.md` — use the main definition line, not an iteration-progress bullet) and append a sentence: "The problem is posed for external solvers in [the carrier-problem dossier](notes/2026-06-19-iter15-carrier-problem-dossier.md)." Add it once, to the canonical OP-46 entry.
**Verify**: `grep -c "iter15-carrier-problem-dossier" OPEN_PROBLEMS.md` → ≥ 1.

### Step 5: Confirm link integrity
**Verify**: `node scripts/check-links.mjs` → `broken internal links: 0` (the new dossier links resolve; the dossier path is `notes/2026-06-19-iter15-carrier-problem-dossier.md` relative to repo root, so from `CONTRIBUTING.md`/`OPEN_PROBLEMS.md` the link is `notes/2026-06-19-iter15-carrier-problem-dossier.md`).

## Done criteria
ALL must hold:
- [ ] `.github/ISSUE_TEMPLATE/` has `carrier-problem-proof.md`, `attack-track.md`, `config.yml`
- [ ] `CONTRIBUTING.md` and `OPEN_PROBLEMS.md` each link the dossier (`grep -c` ≥ 1 each)
- [ ] `node scripts/check-links.mjs` exits 0
- [ ] `git status` shows only in-scope files changed
- [ ] `plans/README.md` row 002 set to DONE

## STOP conditions
Stop and report if: `README.md` does NOT already link the dossier (then the wiring is incomplete elsewhere — report before adding a duplicate); the dossier note path differs from `notes/2026-06-19-iter15-carrier-problem-dossier.md`; or adding the OP-46 pointer would require touching an iteration-progress bullet rather than the canonical entry.

## Maintenance notes
- If the dossier is ever published to arXiv or a journal, add that link to the issue template and CONTRIBUTING.
- A reviewer should check the issue templates render on GitHub (front-matter valid) and that the call-for-proofs checklist matches the current anti-crank bar in `AGENTS.md` §4.
