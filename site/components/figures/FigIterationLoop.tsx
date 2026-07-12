import FigurePlate, { S } from "./FigurePlate";

/** ARTICLE FIG 4 — the anatomy of one refereed iteration. */
export default function FigIterationLoop() {
  const stages: Array<[number, string, string]> = [
    [40, "ATTACK", "Agents attack the open problem along independent lines — deriving, constructing, computing."],
    [225, "REFUTE", "Referees try to break each claim against the known no-gos, re-derive every number, and default to rejection."],
    [410, "ASSEMBLE", "An assembler re-derives the strongest survivor from scratch and sets its honest grade."],
    [595, "GRADE", "Only what survives is kept, with its label. A sharp negative is a result here."],
  ];
  return (
    <FigurePlate
      id="A.4"
      caption="The anatomy of one iteration. The program advances in adversarial cycles. Teams of AI research agents attack the open problem independently; separate referee agents are told to refute — to break each claim against the known impossibility theorems and re-derive every constant before it is allowed to stand; a binding assembler then re-derives the single strongest survivor from scratch, assigns its epistemic grade, and logs every change and every failure. What emerges is graded, machine-checked, and public. The next iteration begins from that record. This discipline — tireless, self-adversarial checking — is what makes the work a natural fit for agents, and what the anti-crank standard requires."
    >
      <svg viewBox="0 0 740 300" xmlns="http://www.w3.org/2000/svg" role="img" style={{ fontFamily: S.mono }}>
        <title>
          Four boxes left to right — attack, refute, assemble, grade — joined by arrows, with a curved
          arrow looping from grade back to attack labelled next iteration. A note reads: referees default
          to rejection; failures are recorded, not hidden.
        </title>

        {stages.map(([x, title, desc], i) => (
          <g key={title}>
            <rect x={x} y={40} width={125} height={150} rx={2} fill={S.paper} stroke={S.blue} strokeWidth="1" />
            <text x={x + 62} y={64} textAnchor="middle" fontSize="12.5" fill={S.blue} letterSpacing="1">
              {title}
            </text>
            <line x1={x + 16} y1={74} x2={x + 109} y2={74} stroke={S.hair} strokeWidth="1" />
            <foreignObject x={x + 9} y={82} width={107} height={102}>
              <div
                style={{
                  fontFamily: S.mono,
                  fontSize: "10px",
                  lineHeight: 1.36,
                  color: "var(--ink-700)",
                }}
              >
                {desc}
              </div>
            </foreignObject>
            {i < 3 && (
              <path
                d={`M${x + 125} 115 l14 0 m-5 -4 l5 4 l-5 4`}
                stroke={S.inkMid}
                strokeWidth="1.2"
                fill="none"
              />
            )}
          </g>
        ))}

        {/* loop-back arrow */}
        <path
          d="M657 190 q0 66 -290 66 q-290 0 -290 -66 l0 -7 m-4 6 l4 -7 l4 7"
          stroke={S.ochre}
          strokeWidth="1.2"
          fill="none"
          strokeDasharray="3 3"
        />
        <text x={367} y={274} textAnchor="middle" fontSize="10.5" fill={S.ochre} letterSpacing="1">
          THE NEXT ITERATION BEGINS FROM THE GRADED RECORD
        </text>

        <text x={40} y={22} fontSize="10.5" fill={S.faint}>
          referees default to rejection · every failure is recorded, not hidden
        </text>
      </svg>
    </FigurePlate>
  );
}
