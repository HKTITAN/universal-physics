import FigurePlate, { S } from "./FigurePlate";

/** FIG 3.1 — the reduction tower as a top-down DAG with the missing apex. */
export default function FigTheoryMap() {
  // node geometry — a strict top-down DAG. The OPEN apex sits alone at the top,
  // visually isolated, so the eye is drawn up to the missing corner before any
  // label is read. Everything below cascades from it.
  type Node = { x: number; y: number; w: number; h: number; label: string; sub?: string; open?: boolean };
  const N: Record<string, Node> = {
    QG:     { x: 270, y: 22,  w: 220, h: 50, label: "QUANTUM GRAVITY  [OPEN]", sub: "the missing corner — ħ, 1/c, G all O(1)", open: true },
    GR:     { x: 120, y: 132, w: 200, h: 38, label: "GENERAL RELATIVITY" },
    QFT:    { x: 440, y: 132, w: 200, h: 38, label: "QUANTUM FIELD THEORY" },
    COSMO:  { x: 16,  y: 234, w: 140, h: 38, label: "COSMOLOGY", sub: "FLRW / ΛCDM" },
    NG:     { x: 170, y: 234, w: 140, h: 38, label: "NEWTONIAN GRAVITY", sub: "weak field" },
    SR:     { x: 324, y: 234, w: 134, h: 38, label: "SPECIAL RELATIVITY", sub: "flat metric" },
    SM:     { x: 472, y: 234, w: 130, h: 38, label: "STANDARD MODEL", sub: "gauge + reps" },
    QM:     { x: 616, y: 234, w: 130, h: 38, label: "QUANTUM MECHANICS" },
    CM:     { x: 360, y: 336, w: 160, h: 38, label: "CLASSICAL MECHANICS" },
    STAT:   { x: 560, y: 336, w: 170, h: 38, label: "STATISTICAL MECHANICS" },
    THERMO: { x: 575, y: 432, w: 150, h: 38, label: "THERMODYNAMICS" },
  };
  const cx = (k: string) => N[k].x + N[k].w / 2;
  const top = (k: string) => N[k].y;
  const bot = (k: string) => N[k].y + N[k].h;

  // [from, to, label?] — only the load-bearing limits carry a label, the rest
  // stay clean so no edge text crowds below the 11px floor.
  const edges: Array<[string, string, string?]> = [
    ["QG", "GR", "low-energy classical"],
    ["QG", "QFT", "fixed background"],
    ["GR", "COSMO"],
    ["GR", "NG"],
    ["GR", "SR"],
    ["QFT", "SM"],
    ["QFT", "QM", "c→∞"],
    ["SR", "CM"],
    ["QM", "CM", "ħ→0"],
    ["QM", "STAT"],
    ["CM", "STAT"],
    ["STAT", "THERMO", "N→∞"],
  ];

  return (
    <FigurePlate
      id="3.1"
      caption="The tower of effective theories as a top-down reduction DAG. Each solid arrow reads “A reduces to B in the limit” — a controlled approximation in a specified regime, not a logical derivation; several limits (ħ→0, c→∞, N→∞) are mathematically singular. The dashed ochre apex is the point: no current framework occupies the missing corner where ħ, 1/c and G are simultaneously O(1) — quantum gravity remains [OPEN]. The faint Wick-rotation link between quantum statistics and Euclidean field theory is a formal isomorphism, not a reduction. [INFERENCE, high]"
    >
      <svg
        viewBox="0 0 760 500"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        style={{ fontFamily: S.mono }}
      >
        <title>
          Top-down reduction diagram of physical frameworks. Quantum gravity, marked
          open and drawn as a dashed ochre box, sits alone at the apex as the missing
          corner where ħ, 1/c and G are all order one. It reduces to general relativity
          in the low-energy classical limit and to quantum field theory on a fixed
          background. General relativity reduces to cosmology, Newtonian gravity and
          special relativity. Quantum field theory reduces to the Standard Model and to
          quantum mechanics. Special relativity and quantum mechanics reduce to
          classical mechanics; classical mechanics and quantum mechanics ground
          statistical mechanics, which yields thermodynamics in the large-N limit. A
          faint dashed link marks the Wick-rotation isomorphism between quantum
          statistics and Euclidean field theory.
        </title>

        <defs>
          <marker id="arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0,1 L9,5 L0,9" fill="none" stroke={S.blue} strokeWidth="1.4" />
          </marker>
        </defs>

        {/* faint guide marking the empty space above the apex — the gap the eye climbs to */}
        <text x={cx("QG")} y="14" fontSize="11" fill={S.faint} textAnchor="middle" letterSpacing="3">
          ↑ NO FRAMEWORK HERE
        </text>

        {/* edges */}
        {edges.map(([a, b, lab]) => {
          const x1 = cx(a);
          const y1 = bot(a);
          const x2 = cx(b);
          const y2 = top(b);
          const mx = (x1 + x2) / 2;
          const my = (y1 + y2) / 2;
          return (
            <g key={a + b}>
              <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={S.blue} strokeWidth="1.25" markerEnd="url(#arr)" />
              {lab ? (
                <text x={mx + 7} y={my + 3} fontSize="11" fill={S.faint} textAnchor="start">
                  {lab}
                </text>
              ) : null}
            </g>
          );
        })}

        {/* Wick-rotation correspondence — non-directional, faint, not a reduction */}
        <line x1={N.STAT.x + N.STAT.w + 6} y1={top("STAT") + 8} x2={748} y2={top("STAT") + 8} stroke={S.faint} strokeWidth="1" strokeDasharray="4 3" />
        <text x={748} y={top("STAT") - 4} fontSize="11" fill={S.faint} textAnchor="end">
          Wick rotation ≅ Euclidean QFT
        </text>

        {/* nodes */}
        {Object.entries(N).map(([k, n]) => (
          <g key={k}>
            <rect
              x={n.x}
              y={n.y}
              width={n.w}
              height={n.h}
              rx="1"
              fill={n.open ? S.ochreWash : S.paper}
              stroke={n.open ? S.ochre : S.ink}
              strokeWidth={n.open ? "2.5" : "1.25"}
              strokeDasharray={n.open ? "5 4" : undefined}
            />
            <text
              x={n.x + n.w / 2}
              y={n.y + (n.sub ? (n.open ? 24 : 17) : n.h / 2 + 4)}
              fontSize={n.open ? "14" : "12"}
              fill={n.open ? S.ochre : S.ink}
              textAnchor="middle"
            >
              {n.label}
            </text>
            {n.sub ? (
              <text
                x={n.x + n.w / 2}
                y={n.y + (n.open ? 40 : 31)}
                fontSize="11"
                fill={S.faint}
                textAnchor="middle"
              >
                {n.sub}
              </text>
            ) : null}
          </g>
        ))}
      </svg>
    </FigurePlate>
  );
}
