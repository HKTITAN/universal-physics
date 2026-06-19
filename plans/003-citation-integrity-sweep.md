# Plan 003: Resolve the `[unverified]` citation ledger and the one over-attribution

> **Executor instructions**: This plan requires live web verification of specific citations. Follow step by step; for each item either promote (verify a DOI/journal ref against the real source) or keep flagged `[unverified]` — never invent a DOI. Honor STOP conditions; update `plans/README.md` row 003 when done.
>
> **Drift check (run first)**: `git diff --stat 71d585f..HEAD -- BIBLIOGRAPHY.md` — if it changed, re-locate the ledger lines before editing.

## Status
- **Priority**: P2
- **Effort**: M
- **Risk**: LOW
- **Depends on**: none
- **Category**: correctness / docs
- **Planned at**: commit `71d585f`, 2026-06-19

## Why this matters
The wiki's credibility rests on its anti-crank citation discipline (`EPISTEMICS.md`: never fabricate; flag uncertain refs `[unverified]`). `BIBLIOGRAPHY.md` carries a small ledger of `[unverified]` journal-detail riders (the arXiv IDs are real; the *journal volume/page* is unverified) plus one flagged **over-attribution** — a "~10⁻¹³ d displacement" figure attributed to arXiv:2604.16276 with the note "[unverified — not in its abstract]". For a project posing an open problem to the external mathematics community, the citation list should be as clean as the anti-crank bar demands: every rider either resolved to a checked DOI or honestly left flagged, and any non-attributable number removed.

## Current state
In `BIBLIOGRAPHY.md`, the `[unverified]` journal-reference ledger is around lines 100–103. Specific items:
- Five R3 search-snippet JHEP refs (including arXiv:2406.04411 [JHEP ref unverified]).
- Nimmrichter et al. arXiv:2502.13821 "accepted PRL [journal ref unverified]"; diamagnetic microchip trap arXiv:2411.02325; Gonzalo–Montero–Obied–Vafa arXiv:2209.09249; PRD 111, 026014 (2025) Barrett–Crane author list; **the "~10⁻¹³ d displacement" figure attributed to arXiv:2604.16276 [unverified — not in its abstract]**.
Earlier lines (45, 119, 120) show the established pattern: when a ref is journal-published, the entry is upgraded and the `[unverified]` flag removed with a note (e.g. "Now journal-published; upgrades the iteration-6 `[unverified]` flag").

## Commands you will need
| Purpose | Command | Expected |
|---|---|---|
| Locate ledger | `grep -n "\[unverified\]\|2604.16276\|2406.04411\|2502.13821\|2411.02325\|2209.09249" BIBLIOGRAPHY.md` | the lines to edit |
| Link check (plan 001) | `node scripts/check-links.mjs` | `broken internal links: 0` |

## Scope
**In scope**: `BIBLIOGRAPHY.md` only (and `CHANGELOG.md` for a one-line log entry of any promotion/removal); `plans/README.md` status row.
**Out of scope**: any physics claim or epistemic tag on the underlying result; the arXiv IDs themselves (they are verified real — do not remove a real arXiv ID); any other page.

## Steps

### Step 1: Audit the over-attribution (highest value)
Web-verify arXiv:2604.16276: does its abstract/body contain the "~10⁻¹³ d displacement" figure attributed to it? If **not** (as the existing flag says), **remove the specific number** from wherever it is asserted as that paper's result (search the wiki: `grep -rn "10⁻¹³ d\|2604.16276" *.md notes/*.md`), keeping the paper cited for what it does say, and log the correction in `CHANGELOG.md`. If the figure *is* in the source, promote it (remove the `[unverified — not in its abstract]` flag).
**Verify**: `grep -rn "not in its abstract" *.md notes/*.md` → no matches (resolved either way).

### Step 2: Resolve the journal-detail riders, one at a time
For each of: arXiv:2406.04411, 2502.13821, 2411.02325, 2209.09249, and the PRD 111 026014 Barrett–Crane entry — attempt to verify the journal ref (volume/page/DOI) against the real publisher/arXiv listing. If verified, replace the `[unverified]` journal field with the checked citation and note the promotion. If not verifiable, leave the entry as **arXiv-ID-only** with the `[unverified]` flag retained (this is acceptable and correct per `EPISTEMICS.md` — do not guess a volume/page).
**Verify**: every entry touched is either promoted (no `[unverified]` on its journal field) or arXiv-ID-only-with-flag; no invented DOI.

### Step 3: Log
Add one `CHANGELOG.md` entry (newest-first, matching the existing dated format) summarizing which refs were promoted and which stay flagged, and the over-attribution fix from Step 1.

## Done criteria
- [ ] The "not in its abstract" over-attribution is resolved (number removed or the flag promoted), web-verified
- [ ] Each ledger rider is promoted-with-real-DOI or left arXiv-ID-only-with-`[unverified]`; zero invented citations
- [ ] `CHANGELOG.md` logs the changes
- [ ] `git status` shows only in-scope files changed
- [ ] `plans/README.md` row 003 set to DONE

## STOP conditions
Stop and report if: a source cannot be reached to verify (leave flagged, note it, continue); verifying would require asserting a journal detail you cannot confirm (leave flagged — never guess); or you find a citation that appears genuinely **fabricated** (a non-existent arXiv ID or paper) — report it immediately rather than silently deleting, as that is a more serious finding than a journal-detail flag.

## Maintenance notes
- This sweep is recurring: each iteration's referees flag new journal riders. Consider a future `scripts/check-citations.mjs` that lists every `[unverified]` rider so the ledger stays short.
- A reviewer should confirm no real arXiv ID was removed and no journal detail was guessed.
