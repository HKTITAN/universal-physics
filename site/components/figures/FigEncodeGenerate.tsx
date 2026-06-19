import FigurePlate, { S } from "./FigurePlate";

/** FIG 2.1 — encode vs generate: five routes, one wall (the carrier problem). */
export default function FigEncodeGenerate() {
  // The FIVE carrier-convergence routes (count is FIVE — never six).
  const routes: Array<[string, string, string]> = [
    [
      "1",
      "STRESS-TENSOR FLUX",
      "requires a CKV / Killing symmetry",
    ],
    [
      "2",
      "MODULAR-BERRY / ZERO-MODE",
      "signature inherited from a symmetric CFT vacuum (Huang–Ma dS₂)",
    ],
    [
      "3",
      "LORENTZIAN NCG",
      "η-form / foliation / twist installed by hand",
    ],
    [
      "4",
      "CAUSAL FERMION SYSTEMS",
      "(≤n,≤n)-eigenvalue axiom = Krein η in the definition",
    ],
    [
      "5",
      "NET / NATURALITY ENGINE",
      "localization lives in the index set — i.e. the geometry",
    ],
  ];

  // Layout geometry.
  const trackX0 = 250; // left edge of route labels
  const trackX1 = 556; // arrowhead tip (just left of the wall)
  const wallX = 566; // the bold ochre barrier
  const rowY = (i: number) => 88 + i * 58; // baseline of each route track

  return (
    <FigurePlate
      id="2.1"
      caption="Encode vs generate — one wall, five routes. From the modular data alone (algebra 𝔄, state ω; Tomita–Takesaki Δ, J) FIVE independent routes attempt to extract Lorentzian geometry, and all five halt at the same obstruction: the carrier problem (= the reverse-Weinberg–Witten / net-naturality theorem) — derive a localized, algebra-compatible, indefinite (n,n) / Krein pairing from modular data. Each route only installs the signature it should derive, so the program encodes geometry but does not generate it; the indefinite-metric / Krein attempt collapses back onto route 5 (the count stays FIVE, not six). This is HYP-CKV-VACUITY-R6, a no-go over currently-known readouts, grade MEDIUM-HIGH→HIGH conditional. [INFERENCE, high]"
    >
      <svg
        viewBox="0 0 760 470"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        style={{ fontFamily: S.mono }}
      >
        <title>
          Five parallel routes flow rightward from a single block of modular data —
          an algebra and a state with Tomita–Takesaki modular operators — and every
          one of them stops dead at one heavy vertical barrier, the carrier problem:
          derive a localized, algebra-compatible, indefinite (n,n) pairing from
          modular data. Beyond the barrier sits a dashed, unreachable box, generated
          Lorentzian geometry, which no route reaches. The figure shows that the
          program encodes geometry but does not generate it.
        </title>

        {/* ── source: modular data ───────────────────────────── */}
        <rect
          x="24"
          y="178"
          width="176"
          height="116"
          fill={S.wash}
          stroke={S.blue}
          strokeWidth="1.5"
        />
        <text x="112" y="210" fontSize="13" fill={S.ink} textAnchor="middle">
          MODULAR DATA
        </text>
        <text x="112" y="234" fontSize="11.5" fill={S.ink} textAnchor="middle">
          algebra 𝔄, state ω
        </text>
        <line x1="48" y1="248" x2="176" y2="248" stroke={S.hair} strokeWidth="1" />
        <text x="112" y="268" fontSize="11" fill={S.faint} textAnchor="middle">
          Tomita–Takesaki
        </text>
        <text x="112" y="284" fontSize="11" fill={S.faint} textAnchor="middle">
          Δ, J
        </text>

        {/* ── the five routes, in parallel tracks ─────────────── */}
        {routes.map(([n, name, sub], i) => {
          const y = rowY(i);
          return (
            <g key={n}>
              {/* fan-out connector from the source block */}
              <line
                x1="200"
                y1="236"
                x2={trackX0 - 12}
                y2={y - 4}
                stroke={S.blue}
                strokeWidth="1"
              />
              {/* route number chip */}
              <circle
                cx={trackX0 + 2}
                cy={y - 8}
                r="11"
                fill={S.paper}
                stroke={S.blue}
                strokeWidth="1.25"
              />
              <text
                x={trackX0 + 2}
                y={y - 4}
                fontSize="12"
                fill={S.blue}
                textAnchor="middle"
              >
                {n}
              </text>
              {/* route name + obstruction */}
              <text x={trackX0 + 22} y={y - 11} fontSize="12.5" fill={S.ink}>
                {name}
              </text>
              <text x={trackX0 + 22} y={y + 5} fontSize="11" fill={S.faint}>
                {sub}
              </text>
              {/* the track arrow, stopping dead at the wall */}
              <line
                x1={trackX0 + 22}
                y1={y + 16}
                x2={trackX1}
                y2={y + 16}
                stroke={S.blue}
                strokeWidth="1.25"
              />
              <line
                x1={trackX1 - 9}
                y1={y + 11}
                x2={trackX1}
                y2={y + 16}
                stroke={S.blue}
                strokeWidth="1.25"
              />
              <line
                x1={trackX1 - 9}
                y1={y + 21}
                x2={trackX1}
                y2={y + 16}
                stroke={S.blue}
                strokeWidth="1.25"
              />
            </g>
          );
        })}

        {/* ── THE WALL: the carrier problem ───────────────────── */}
        <line
          x1={wallX}
          y1="58"
          x2={wallX}
          y2="402"
          stroke={S.ochre}
          strokeWidth="3"
        />
        <text
          x={wallX - 10}
          y="230"
          fontSize="13"
          fill={S.ochre}
          textAnchor="middle"
          transform={`rotate(-90 ${wallX - 10} 230)`}
        >
          THE CARRIER PROBLEM
        </text>

        {/* what the wall demands — stacked just past it, in ochre */}
        <text x={wallX + 14} y="74" fontSize="11" fill={S.ochre}>
          derive a LOCALIZED,
        </text>
        <text x={wallX + 14} y="90" fontSize="11" fill={S.ochre}>
          algebra-compatible,
        </text>
        <text x={wallX + 14} y="106" fontSize="11" fill={S.ochre}>
          indefinite (n,n) / Krein
        </text>
        <text x={wallX + 14} y="122" fontSize="11" fill={S.ochre}>
          pairing from modular data
        </text>
        <text x={wallX + 14} y="146" fontSize="11" fill={S.inkMid}>
          = reverse-Weinberg–Witten
        </text>
        <text x={wallX + 14} y="162" fontSize="11" fill={S.inkMid}>
          = net-naturality theorem
        </text>

        {/* ── the unreachable output, beyond the wall ─────────── */}
        <rect
          x={wallX + 14}
          y="226"
          width="166"
          height="120"
          fill="none"
          stroke={S.faint}
          strokeWidth="1.25"
          strokeDasharray="5 5"
        />
        <text
          x={wallX + 97}
          y="258"
          fontSize="12"
          fill={S.faint}
          textAnchor="middle"
        >
          GENERATED
        </text>
        <text
          x={wallX + 97}
          y="275"
          fontSize="12"
          fill={S.faint}
          textAnchor="middle"
        >
          LORENTZIAN
        </text>
        <text
          x={wallX + 97}
          y="292"
          fontSize="12"
          fill={S.faint}
          textAnchor="middle"
        >
          GEOMETRY
        </text>
        <text
          x={wallX + 97}
          y="320"
          fontSize="11"
          fill={S.faint}
          textAnchor="middle"
        >
          no route
        </text>
        <text
          x={wallX + 97}
          y="335"
          fontSize="11"
          fill={S.faint}
          textAnchor="middle"
        >
          reaches this
        </text>

        {/* ── footer ledger ───────────────────────────────────── */}
        <line x1="24" y1="430" x2="736" y2="430" stroke={S.hair} strokeWidth="1" />
        <text x="24" y="452" fontSize="11.5" fill={S.ink}>
          encodes ✓
        </text>
        <text x="118" y="452" fontSize="11.5" fill={S.ochre}>
          generates ✗
        </text>
        <text x="232" y="452" fontSize="11.5" fill={S.faint}>
          HYP-CKV-VACUITY-R6
        </text>
        <text x="420" y="452" fontSize="11.5" fill={S.faint}>
          verdict unchanged · 12 consecutive iterations
        </text>
      </svg>
    </FigurePlate>
  );
}
