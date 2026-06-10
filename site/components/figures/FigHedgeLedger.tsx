import FigurePlate, { S } from "./FigurePlate";

/** FIG 13.1 — the hedge ledger: iterations 1→6, closures and surviving hedges. */
export default function FigHedgeLedger() {
  const iters: Array<[string, string, string]> = [
    ["1", "MAP", "initial atlas + registries"],
    ["2", "STRESS-TEST", "two-program split; fusion refused"],
    ["3", "ATTEMPT", "encode/generate formalized; OP-48 posed"],
    ["4", "ATTACK", "dS SO(d+1,1) escape fails — cardinality no-go"],
    ["5", "SATURATE", "OP-46 lever executed, did not flip"],
    ["6", "NEW INPUT", "~90 refereed findings; verdict unchanged"],
  ];
  return (
    <FigurePlate
      id="13.1"
      caption="The hedge ledger across iterations 1→6. The verdict (PARTIAL coherence; encodes-not-generates; not-yet-physics) has been stable for five consecutive iterations. Closed levers: the dS cardinality no-go (iter 4–5), the OP-46 Lorentzian non-CKV readout executed-without-flipping (iter 5), and OP-49 closed-negative at near-no-go grade (iter 6). The headline now rests on exactly three explicit hedges; hedge accounting at iteration 6: 2 → 3, one shrunk."
    >
      <svg
        viewBox="0 0 760 430"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        style={{ fontFamily: S.mono }}
      >
        <title>
          Timeline of six iterations from initial mapping to the new-input iteration,
          with the verdict stable from iteration 2 onward. Below the timeline, three
          closed levers are listed: the de Sitter cardinality no-go, the OP-46
          Lorentzian readout that did not flip the verdict, and OP-49 closed negative.
          Three surviving hedges are shown: the OP-46 residual at MEDIUM confidence,
          the OP-48c horn-C residue, shrunk in iteration 6, and HYP-ENCODING-SCREEN,
          which inherits the MEDIUM grade.
        </title>

        {/* timeline */}
        <line x1="40" y1="70" x2="720" y2="70" stroke={S.ink} strokeWidth="1.2" />
        {iters.map(([n, name, sub], i) => {
          const x = 70 + i * 124;
          return (
            <g key={n}>
              <circle cx={x} cy="70" r="4.5" fill={i >= 1 ? S.blue : S.paper} stroke={S.blue} strokeWidth="1.2" />
              <text x={x} y="48" fontSize="10" fill={S.blue} textAnchor="middle">ITER {n}</text>
              <text x={x} y="94" fontSize="8.5" fill={S.ink} textAnchor="middle">{name}</text>
              <text x={x} y="107" fontSize="7" fill={S.faint} textAnchor="middle">{sub.slice(0, 26)}</text>
              <text x={x} y="117" fontSize="7" fill={S.faint} textAnchor="middle">{sub.slice(26)}</text>
            </g>
          );
        })}
        <rect x="180" y="130" width="500" height="20" fill={S.wash} stroke="none" />
        <text x="430" y="144" fontSize="8.5" fill={S.blueDeep} textAnchor="middle">
          VERDICT STABLE: PARTIAL · ENCODES-NOT-GENERATES · NOT-YET-PHYSICS (iter 2 → 6)
        </text>

        {/* closed levers column */}
        <text x="40" y="190" fontSize="10" fill={S.ink} letterSpacing="1">LEVERS CLOSED</text>
        <line x1="40" y1="198" x2="330" y2="198" stroke={S.ink} strokeWidth="1" />
        {[
          ["OP-41", "dS first law — cardinality no-go (≤10 charges vs ∞-dim δG)", "ITER 4–5"],
          ["OP-46 LEVER", "Lorentzian non-CKV readout: executed, did not flip", "ITER 5"],
          ["OP-49", "pseudo-entropy reality — closed-negative, near-no-go", "ITER 6"],
        ].map(([id, desc, when], i) => {
          const y = 222 + i * 56;
          return (
            <g key={id}>
              <rect x="40" y={y - 16} width="290" height="44" fill={S.paper} stroke={S.hair} strokeWidth="1" />
              <line x1="40" y1={y - 16} x2="48" y2={y - 8} stroke={S.faint} strokeWidth="1" />
              <text x="52" y={y} fontSize="8.5" fill={S.ink}>{id}</text>
              <text x="290" y={y} fontSize="7.5" fill={S.faint} textAnchor="end">{when}</text>
              <text x="52" y={y + 16} fontSize="7.3" fill={S.faint}>{desc}</text>
            </g>
          );
        })}

        {/* surviving hedges column */}
        <text x="400" y="190" fontSize="10" fill={S.ochre} letterSpacing="1">HEDGES SURVIVING (3)</text>
        <line x1="400" y1="198" x2="720" y2="198" stroke={S.ochre} strokeWidth="1" />
        {[
          ["HEDGE 1 · OP-46 RESIDUAL", "no-go only over currently-known readouts — MEDIUM", false],
          ["HEDGE 2 · OP-48c HORN C", "GPT formalization choice + III₁ embezzlement — SHRUNK iter 6", false],
          ["HEDGE 3 · HYP-ENCODING-SCREEN", "the no-test corollary — inherits OP-46's MEDIUM", true],
        ].map(([id, desc, isNew], i) => {
          const y = 222 + i * 56;
          return (
            <g key={id as string}>
              <rect x="400" y={y - 16} width="320" height="44" fill="none" stroke={S.ochre} strokeWidth="0.9" strokeDasharray="4 3" />
              <text x="412" y={y} fontSize="8.5" fill={S.ink}>{id}</text>
              {isNew ? (
                <text x="712" y={y} fontSize="7.5" fill={S.ochre} textAnchor="end">NEW iter 6</text>
              ) : null}
              <text x="412" y={y + 16} fontSize="7.3" fill={S.faint}>{desc}</text>
            </g>
          );
        })}
      </svg>
    </FigurePlate>
  );
}
