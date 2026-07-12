import FigurePlate, { S } from "./FigurePlate";

/** ARTICLE FIG 3 — the five rungs between the present state and a universal theory. */
export default function FigDistanceLadder() {
  const rungs: Array<[string, string, string, "open" | "hard" | "wall"]> = [
    ["1", "The free-field gate", "Compressed to one operator bound (B). The closest rung — a real theorem may be in reach here.", "open"],
    ["2", "Interacting fields", "No known technology; proved undecidable at the invariant level. A separate, harder problem.", "hard"],
    ["3", "The causal order (n₁)", "Every known algebraic starting point already presupposes it. No derivation route is known.", "hard"],
    ["4", "The carrier", "Turning 'encodes' into 'generates'. Five routes converge on one wall; 26 confirmations say it holds.", "wall"],
    ["5", "A distinguishing experiment", "None exists even in principle: the route reproduces ordinary geometry. So — not yet physics.", "wall"],
  ];
  const color = (k: string) => (k === "open" ? S.ochre : k === "hard" ? S.inkMid : S.faint);
  return (
    <FigurePlate
      id="A.3"
      caption="The distance ladder: what stands between the present state of the art and a universal theory of physics. These rungs are not steps we know how to climb — they are the honest inventory of what remains unknown. Rung 1, the free-field gate, is the one this program has driven to a single open inequality. Rungs 2–5 are, if anything, harder, and rung 5 is decisive: a candidate framework that reproduces every existing prediction and forbids no new one is a research strategy, not yet a physical theory. Naming the rungs precisely is itself a result."
    >
      <svg viewBox="0 0 760 360" xmlns="http://www.w3.org/2000/svg" role="img" style={{ fontFamily: S.mono }}>
        <title>
          Five stacked rungs of a ladder, numbered one to five from the bottom, each a labelled bar with
          a short description. Rung one, the free-field gate, is highlighted as the closest. Rungs four
          and five are marked as walls: the carrier problem and the absence of any distinguishing experiment.
        </title>

        <text x="24" y="30" fontSize="11" fill={S.faint} letterSpacing="1">HERE</text>
        <text x="736" y="30" textAnchor="end" fontSize="11" fill={S.faint} letterSpacing="1">A UNIVERSAL THEORY</text>
        <line x1="24" y1="40" x2="736" y2="40" stroke={S.hair} strokeWidth="1" strokeDasharray="2 4" />

        {rungs.map(([n, title, desc, kind], i) => {
          const y = 58 + i * 58;
          const c = color(kind);
          return (
            <g key={n}>
              <rect x="24" y={y} width="712" height="48" rx="2" fill={S.paper} stroke={S.hair} strokeWidth="1" />
              <rect x="24" y={y} width="6" height="48" fill={c} />
              <text x="46" y={y + 30} fontSize="20" fill={c}>{n}</text>
              <text x="78" y={y + 21} fontSize="13" fill={S.ink}>{title}</text>
              <text x="78" y={y + 39} fontSize="10.5" fill={S.faint}>{desc}</text>
              {kind === "open" && (
                <text x="726" y={y + 16} textAnchor="end" fontSize="9" fill={S.ochre} letterSpacing="1">
                  CLOSEST
                </text>
              )}
              {kind === "wall" && (
                <text x="726" y={y + 16} textAnchor="end" fontSize="9" fill={S.faint} letterSpacing="1">
                  WALL
                </text>
              )}
            </g>
          );
        })}
      </svg>
    </FigurePlate>
  );
}
