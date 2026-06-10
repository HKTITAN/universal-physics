import FigurePlate, { S } from "./FigurePlate";

/** FIG 3.1 — the reduction structure of the theory tower. */
export default function FigTheoryMap() {
  // node positions
  const N: Record<string, { x: number; y: number; w: number; label: string; sub?: string; open?: boolean }> = {
    QG: { x: 290, y: 18, w: 180, label: "QUANTUM GRAVITY", sub: "ħ, 1/c, G all O(1) — [OPEN]", open: true },
    GR: { x: 120, y: 110, w: 150, label: "GENERAL RELATIVITY" },
    QFT: { x: 490, y: 110, w: 150, label: "QUANTUM FIELD THEORY" },
    COSMO: { x: 10, y: 205, w: 120, label: "COSMOLOGY (ΛCDM)" },
    NG: { x: 145, y: 205, w: 120, label: "NEWTONIAN GRAVITY" },
    SR: { x: 280, y: 205, w: 110, label: "SPECIAL RELATIVITY" },
    SM: { x: 405, y: 205, w: 110, label: "STANDARD MODEL" },
    QM: { x: 530, y: 205, w: 120, label: "QUANTUM MECHANICS" },
    CM: { x: 350, y: 300, w: 140, label: "CLASSICAL MECHANICS" },
    STAT: { x: 520, y: 300, w: 140, label: "STATISTICAL MECHANICS" },
    THERMO: { x: 540, y: 380, w: 130, label: "THERMODYNAMICS" },
  };
  const box = (k: string) => N[k];
  const cx = (k: string) => box(k).x + box(k).w / 2;
  const edges: Array<[string, string, string]> = [
    ["QG", "GR", "low energy, classical g"],
    ["QG", "QFT", "fixed background"],
    ["GR", "COSMO", "FLRW + fluid"],
    ["GR", "NG", "weak field, v≪c"],
    ["GR", "SR", "flat metric"],
    ["QFT", "SM", "gauge group + reps"],
    ["QFT", "QM", "c→∞, fixed N"],
    ["SR", "CM", "c→∞"],
    ["QM", "CM", "ħ→0, S≫ħ"],
    ["QM", "STAT", "density matrices, ETH"],
    ["CM", "STAT", "+ Liouville measure"],
    ["STAT", "THERMO", "N→∞, coarse-grain"],
  ];
  return (
    <FigurePlate
      id="3.1"
      caption="The tower of effective theories. Each arrow reads “A reduces to B in the indicated limit” — controlled approximation in a specified regime, not logical derivation; several limits (ħ→0, c→∞) are mathematically singular. The dashed apex is the missing corner: no current framework occupies the regime where ħ, 1/c and G are simultaneously O(1). The Wick-rotation link between Euclidean QFT and statistical mechanics is a formal isomorphism, not a reduction."
    >
      <svg
        viewBox="0 0 760 440"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        style={{ fontFamily: S.mono }}
      >
        <title>
          Reduction diagram of physical frameworks. Quantum gravity, marked open and
          drawn dashed, sits at the apex and reduces to general relativity in the
          low-energy classical limit and to quantum field theory on a fixed
          background. General relativity reduces to cosmology, Newtonian gravity, and
          special relativity. Quantum field theory reduces to the Standard Model and
          to quantum mechanics, and is linked to statistical mechanics by Wick
          rotation. Quantum and special-relativistic mechanics reduce to classical
          mechanics; classical mechanics plus the Liouville measure grounds
          statistical mechanics, which yields thermodynamics in the large-N limit.
        </title>

        <defs>
          <marker id="arr" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0,0 L8,4 L0,8" fill="none" stroke={S.blue} strokeWidth="1.2" />
          </marker>
        </defs>

        {/* edges */}
        {edges.map(([a, b, lab]) => {
          const A = box(a);
          const B = box(b);
          const x1 = cx(a);
          const y1 = A.y + 34;
          const x2 = cx(b);
          const y2 = B.y - 2;
          const mx = (x1 + x2) / 2;
          const my = (y1 + y2) / 2;
          return (
            <g key={a + b}>
              <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={S.blue} strokeWidth="0.9" markerEnd="url(#arr)" />
              <text x={mx + 4} y={my} fontSize="6.6" fill={S.faint}>{lab}</text>
            </g>
          );
        })}
        {/* Wick rotation, non-directional */}
        <line x1={640} y1={144} x2={620} y2={298} stroke={S.faint} strokeWidth="0.9" strokeDasharray="4 3" />
        <text x="648" y="225" fontSize="6.6" fill={S.faint}>Wick rotation ≅</text>

        {/* nodes */}
        {Object.entries(N).map(([k, n]) => (
          <g key={k}>
            <rect
              x={n.x}
              y={n.y}
              width={n.w}
              height="34"
              fill={n.open ? "none" : S.paper}
              stroke={n.open ? S.faint : S.ink}
              strokeWidth="1"
              strokeDasharray={n.open ? "4 3" : undefined}
            />
            <text x={n.x + n.w / 2} y={n.y + (n.sub ? 15 : 21)} fontSize="8" fill={n.open ? S.faint : S.ink} textAnchor="middle">
              {n.label}
            </text>
            {n.sub ? (
              <text x={n.x + n.w / 2} y={n.y + 28} fontSize="6.8" fill={S.faint} textAnchor="middle">
                {n.sub}
              </text>
            ) : null}
          </g>
        ))}
      </svg>
    </FigurePlate>
  );
}
