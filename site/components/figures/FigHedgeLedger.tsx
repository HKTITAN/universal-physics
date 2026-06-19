import FigurePlate, { S } from "./FigurePlate";

/** FIG 13.1 — the saturation flatline: 13 iterations, one verdict that never moves. */
export default function FigHedgeLedger() {
  // one one-word action per iteration; the flatline runs across all of them
  const iters: Array<[number, string]> = [
    [1, "MAP"],
    [2, "STRESS-TEST"],
    [3, "ATTEMPT"],
    [4, "ATTACK"],
    [5, "SATURATE"],
    [6, "NEW-INPUT"],
    [7, "LEVERS"],
    [8, "NET"],
    [9, "NATURALITY"],
    [10, "GAP"],
    [11, "BICENTRALIZER"],
    [12, "TERMINAL"],
    [13, "FRAME"],
  ];

  const x0 = 56;
  const x1 = 720;
  const yLine = 96; // the flat verdict line
  const span = x1 - x0;
  const xOf = (i: number) => x0 + (span * i) / (iters.length - 1);

  return (
    <FigurePlate
      id="13.1"
      caption="The saturation flatline. A single perfectly flat line runs across all thirteen iterations: the verdict (PARTIAL coherence · encodes-not-generates · not-yet-physics) has not moved for twelve consecutive confirmations — terminal analytical saturation, re-confirmed at iteration 13. Three hedges survive: the OP-46 residual HYP-CKV-VACUITY at grade R6 (MEDIUM-HIGH→HIGH, conditional on the net-naturality theorem plus a located commutant-to-generated gap), OP-48c horn C (theorem-conditional-on-framework), and HYP-ENCODING-SCREEN (the no-test corollary, inheriting the grade). The flatness is the result: marginal yield of further reasoning has gone to zero. [INFERENCE, high]"
    >
      <svg
        viewBox="0 0 760 416"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        style={{ fontFamily: S.mono }}
      >
        <title>
          A horizontal axis of thirteen iterations, one tick each, with a one-word action
          under every tick: map, stress-test, attempt, attack, saturate, new-input,
          levers, net, naturality, gap, bicentralizer, terminal. A single perfectly flat
          horizontal line runs straight across all twelve ticks without deviating — this
          flat line is the verdict, unchanged for twelve consecutive confirmations:
          partial coherence, encodes but does not generate, not yet physics. Below, three
          surviving hedges are listed in ochre, and a small note records that the marginal
          yield of further reasoning has fallen to zero.
        </title>

        {/* ---- the hero: the flat verdict line across all 12 ticks ---- */}
        <text x={x0} y="50" fontSize="11" fill={S.faint} letterSpacing="1">
          ITERATION
        </text>
        <text x={x1} y="50" fontSize="11" fill={S.faint} textAnchor="end" letterSpacing="1">
          2026-06-19
        </text>

        {/* the flatline itself — the single 3px emphasis stroke, dead level */}
        <line
          x1={x0 - 4}
          y1={yLine}
          x2={x1 + 14}
          y2={yLine}
          stroke={S.blueDeep}
          strokeWidth="3"
        />
        {/* terminal arrowhead — it continues, unchanged, into watch-mode */}
        <line x1={x1 + 6} y1={yLine - 5} x2={x1 + 16} y2={yLine} stroke={S.blueDeep} strokeWidth="3" />
        <line x1={x1 + 6} y1={yLine + 5} x2={x1 + 16} y2={yLine} stroke={S.blueDeep} strokeWidth="3" />

        {/* the flatline label sits ON the line — it IS the saturation */}
        <text x={x0 + 6} y={yLine - 12} fontSize="13" fill={S.blueDeep}>
          VERDICT UNCHANGED — 12 CONSECUTIVE CONFIRMATIONS
        </text>
        <text x={x0 + 6} y={yLine + 22} fontSize="11.5" fill={S.ink}>
          PARTIAL · ENCODES-NOT-GENERATES · NOT-YET-PHYSICS
        </text>

        {/* ticks + one-word action per iteration */}
        {iters.map(([n, name]) => {
          const x = xOf(n - 1);
          return (
            <g key={n}>
              <line x1={x} y1={yLine - 6} x2={x} y2={yLine + 6} stroke={S.blueDeep} strokeWidth="1.5" />
              <text x={x} y={yLine + 44} fontSize="11" fill={S.blue} textAnchor="middle">
                {n}
              </text>
              <text x={x} y={yLine + 58} fontSize="11" fill={S.faint} textAnchor="middle">
                {name}
              </text>
            </g>
          );
        })}

        {/* hairline divider before the hedges */}
        <line x1={x0} y1="206" x2={x1 + 14} y2="206" stroke={S.hair} strokeWidth="1" />

        {/* ---- the three surviving hedges (ochre = obstruction) ---- */}
        <text x={x0} y="230" fontSize="13" fill={S.ochre} letterSpacing="1">
          THREE SURVIVING HEDGES — all external-input-gated
        </text>
        {[
          [
            "1 · OP-46 RESIDUAL",
            "HYP-CKV-VACUITY — R6",
            "MEDIUM-HIGH→HIGH, conditional on the net-naturality theorem",
            "+ a located commutant-to-generated gap",
          ],
          [
            "2 · OP-48c HORN C",
            "theorem-conditional-on-framework",
            "residue = the normal-state postulate + composition-primitive choice",
            "(X1 singular product states / X2 III₁ embezzlement)",
          ],
          [
            "3 · HYP-ENCODING-SCREEN",
            "the no-test corollary",
            "inherits OP-46's grade AND condition unchanged — every signal",
            "factors through the EFT; no reverse-Weinberg–Witten witness",
          ],
        ].map(([id, head, l1, l2], i) => {
          const y = 250 + i * 46;
          return (
            <g key={id as string}>
              {/* ochre tab marks the obstruction; dashed = unresolved */}
              <rect x={x0} y={y} width="4" height="38" fill={S.ochre} />
              <text x={x0 + 14} y={y + 14} fontSize="12" fill={S.ink}>
                {id}
              </text>
              <text x={x1 + 14} y={y + 14} fontSize="11.5" fill={S.ochre} textAnchor="end">
                {head}
              </text>
              <text x={x0 + 14} y={y + 28} fontSize="11" fill={S.faint}>
                {l1}
              </text>
              <text x={x0 + 14} y={y + 40} fontSize="11" fill={S.faint}>
                {l2}
              </text>
            </g>
          );
        })}

        {/* ---- marginal-yield note: the derivative of the flatline is zero ---- */}
        <line x1={x0} y1="392" x2={x1 + 14} y2="392" stroke={S.hair} strokeWidth="1" />
        <text x={x0} y="410" fontSize="11" fill={S.faint}>
          marginal yield → 0
        </text>
        <text x={x0 + 132} y="410" fontSize="11" fill={S.faint}>
          grade-derivative 0 at iter 9 · condition-derivative 0 at iter 10 · count stays FIVE
        </text>
      </svg>
    </FigurePlate>
  );
}
