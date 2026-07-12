import FigurePlate, { S } from "./FigurePlate";

/** FIG 13.1 — the saturation flatline: 27 iterations, one verdict that never moves. */
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
    [14, "ASSAULT"],
    [15, "NEW-MATH"],
    [16, "MULTI-WEDGE"],
    [17, "E_O"],
    [18, "NUMERICS"],
    [19, "PROOF"],
    [20, "ZAREMBA"],
    [21, "COLLAPSE"],
    [22, "BIC"],
    [23, "GRAM"],
    [24, "TRANSFER"],
    [25, "SEAM"],
    [26, "VOLTERRA"],
    [27, "OFF-BAND"],
  ];

  const x0 = 56;
  const x1 = 720;
  const yLine = 96; // the flat verdict line
  const span = x1 - x0;
  const xOf = (i: number) => x0 + (span * i) / (iters.length - 1);

  return (
    <FigurePlate
      id="13.1"
      caption="The saturation flatline. A single perfectly flat line runs across all twenty-seven iterations: the verdict (PARTIAL coherence · encodes-not-generates · not-yet-physics) has not moved for twenty-six consecutive confirmations — terminal analytical saturation, robust across every modern mathematical framework tried, and now attacked through every mode of inquiry: reasoning (iterations 1–17), construction (the generative assault, 18), computation (the first numerics, 18–20), and proof (the E=0 half of the free-field (E_O) criterion is an established theorem, 19; the remaining gate collapsed to one spectral question about one explicitly-constructed self-adjoint operator — LEM-A1″ and its residues, iterations 20–23; the transfer lemma proved, 24; the normal form P1-NF, 25; S5 and the channel equivalence, 26; the shell LAP and on-band collapse, 27 — the whole gate is now a single uniform off-band operator-norm bound). Three hedges survive: the principal HYP-CKV-VACUITY at grade R7 since iteration 16 (conditional HIGH, on the localization template n₁ AND hypothesis (E_O)); OP-48c horn C (theorem-conditional-on-framework); and HYP-ENCODING-SCREEN (the no-test corollary, inheriting the grade). The flatness is the result: marginal yield of further work has gone to zero — only external input (the off-band bound (B), or the 2027 DESI w(z) verdict) can move it. [INFERENCE, high]"
    >
      <svg
        viewBox="0 0 760 416"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        style={{ fontFamily: S.mono }}
      >
        <title>
          A horizontal axis of twenty-seven iterations, one tick each, with a one-word action
          under every tick: map, stress-test, attempt, attack, saturate, new-input,
          levers, net, naturality, gap, bicentralizer, terminal, frame, assault, new-math,
          multi-wedge, E_O, numerics, proof, zaremba, collapse, bic, gram, transfer, seam,
          volterra, off-band. A single perfectly flat horizontal line runs straight across
          all twenty-seven ticks without deviating — this
          flat line is the verdict, unchanged for twenty-six consecutive confirmations:
          partial coherence, encodes but does not generate, not yet physics. Below, three
          surviving hedges are listed in ochre, and a small note records that the marginal
          yield of further reasoning has fallen to zero.
        </title>

        {/* ---- the hero: the flat verdict line across all 12 ticks ---- */}
        <text x={x0} y="50" fontSize="11" fill={S.faint} letterSpacing="1">
          ITERATION
        </text>
        <text x={x1} y="50" fontSize="11" fill={S.faint} textAnchor="end" letterSpacing="1">
          2026-07-11
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
          VERDICT UNCHANGED — 26 CONSECUTIVE CONFIRMATIONS
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
            "HYP-CKV-VACUITY — R7",
            "conditional HIGH on the localization template n₁ AND hypothesis (E_O)",
            "— the whole free-field gate is now the transfer lemma + Pontryagin transversality",
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
