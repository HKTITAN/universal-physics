import FigurePlate, { S } from "./FigurePlate";

/** FIG 2.1 — encode vs generate: the signature-installation obstruction. */
export default function FigEncodeGenerate() {
  const families: Array<[string, string, string]> = [
    ["READOUT I", "STRESS-TENSOR FLUX", "Sorce — requires CKV / Killing symmetry"],
    ["READOUT II", "MODULAR-BERRY / ZERO-MODE", "Huang–Ma dS₂: signature inherited from symmetric CFT vacuum"],
    ["READOUT III", "LORENTZIAN NCG", "η-form / foliation / twist installed by hand"],
    ["READOUT IV", "CAUSAL FERMION SYSTEMS", "(≤n,≤n)-eigenvalue axiom = Krein η relocated into the definition"],
  ];
  return (
    <FigurePlate
      id="2.1"
      caption="Encode vs generate. All four known readout families that extract geometry from (algebra, state) modular data close at the same signature-installation step: each installs the Lorentzian signature (a symmetry, η-form, foliation, twist, or indefinite-pairing axiom) by hand. HYP-CKV-VACUITY-R3: a no-go over currently-known readouts. The compressed open target — derive the indefinite pairing from modular data — is the single development that would flip the verdict from “encodes” to “generates.” [INFERENCE, high]"
    >
      <svg
        viewBox="0 0 760 430"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        style={{ fontFamily: S.mono }}
      >
        <title>
          Flow diagram. Modular data — an algebra and a state — feeds four readout
          families: stress-tensor flux (Sorce, CKV), modular-Berry zero-mode,
          Lorentzian noncommutative geometry, and causal fermion systems. All four
          arrows stop at a vertical barrier labelled the signature-installation step:
          each family installs the Lorentzian signature by hand. Beyond the barrier
          lies the unreached output, a generated Lorentzian metric. The open target is
          to derive the indefinite pairing from modular data.
        </title>

        {/* input */}
        <rect x="20" y="160" width="150" height="78" fill={S.wash} stroke={S.blue} strokeWidth="1.2" />
        <text x="95" y="190" fontSize="10.5" fill={S.ink} textAnchor="middle">MODULAR DATA</text>
        <text x="95" y="208" fontSize="9" fill={S.faint} textAnchor="middle">(algebra 𝔄, state ω)</text>
        <text x="95" y="224" fontSize="8" fill={S.faint} textAnchor="middle">Tomita–Takesaki Δ, J</text>

        {/* four readout family boxes */}
        {families.map(([id, name, sub], i) => {
          const y = 30 + i * 96;
          return (
            <g key={id}>
              <line x1="170" y1="199" x2="230" y2={y + 33} stroke={S.blue} strokeWidth="0.9" />
              <rect x="230" y={y} width="270" height="66" fill={S.paper} stroke={S.ink} strokeWidth="1" />
              <text x="244" y={y + 19} fontSize="8" fill={S.blue} letterSpacing="1">{id}</text>
              <text x="244" y={y + 36} fontSize="9.5" fill={S.ink}>{name}</text>
              <text x="244" y={y + 52} fontSize="7.6" fill={S.faint}>{sub}</text>
              <line x1="500" y1={y + 33} x2="560" y2={y + 33} stroke={S.blue} strokeWidth="0.9" />
              {/* terminated arrowhead at the barrier */}
              <line x1="552" y1={y + 27} x2="560" y2={y + 33} stroke={S.blue} strokeWidth="0.9" />
              <line x1="552" y1={y + 39} x2="560" y2={y + 33} stroke={S.blue} strokeWidth="0.9" />
            </g>
          );
        })}

        {/* the barrier */}
        <line x1="565" y1="20" x2="565" y2="410" stroke={S.ochre} strokeWidth="2.4" />
        <line x1="572" y1="20" x2="572" y2="410" stroke={S.ochre} strokeWidth="0.8" strokeDasharray="3 3" />
        <text x="558" y="218" fontSize="9.5" fill={S.ochre} textAnchor="middle" transform="rotate(-90 558 218)">
          SIGNATURE-INSTALLATION STEP — η INSTALLED BY HAND
        </text>

        {/* unreached output */}
        <rect x="595" y="150" width="148" height="96" fill="none" stroke={S.faint} strokeWidth="1" strokeDasharray="4 4" />
        <text x="669" y="182" fontSize="9.5" fill={S.faint} textAnchor="middle">GENERATED</text>
        <text x="669" y="198" fontSize="9.5" fill={S.faint} textAnchor="middle">LORENTZIAN METRIC</text>
        <text x="669" y="218" fontSize="8" fill={S.faint} textAnchor="middle">(no construction</text>
        <text x="669" y="230" fontSize="8" fill={S.faint} textAnchor="middle">reaches this box)</text>

        {/* open target note */}
        <text x="595" y="290" fontSize="8.5" fill={S.blueDeep}>OPEN TARGET (OP-46):</text>
        <text x="595" y="304" fontSize="8" fill={S.faint}>derive the indefinite</text>
        <text x="595" y="316" fontSize="8" fill={S.faint}>pairing from modular</text>
        <text x="595" y="328" fontSize="8" fill={S.faint}>data — none exists</text>
      </svg>
    </FigurePlate>
  );
}
