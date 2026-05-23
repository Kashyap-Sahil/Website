type Motif = {
  top: string;
  left?: string;
  right?: string;
  size?: number;
  variant: "bell" | "ellipse" | "scatter" | "tick" | "label" | "trajectory";
  label?: string;
  anim: "drift-a" | "drift-b" | "drift-c" | "pulse" | "spin";
  opacity?: number;
};

const motifs: Motif[] = [
  { top: "8%", left: "5%", variant: "bell", size: 72, anim: "drift-a", opacity: 0.55 },
  { top: "14%", right: "7%", variant: "ellipse", size: 80, anim: "drift-b", opacity: 0.5 },
  { top: "22%", left: "84%", variant: "label", label: "x̂ₖ|ₖ", anim: "pulse", opacity: 0.7 },
  { top: "30%", left: "3%", variant: "scatter", size: 78, anim: "drift-c", opacity: 0.6 },
  { top: "38%", right: "4%", variant: "trajectory", size: 96, anim: "drift-a", opacity: 0.5 },
  { top: "46%", left: "7%", variant: "tick", size: 40, anim: "pulse", opacity: 0.65 },
  { top: "53%", right: "10%", variant: "bell", size: 64, anim: "drift-b", opacity: 0.55 },
  { top: "61%", left: "80%", variant: "label", label: "𝒩(μ, σ²)", anim: "drift-c", opacity: 0.65 },
  { top: "68%", left: "4%", variant: "ellipse", size: 72, anim: "spin", opacity: 0.5 },
  { top: "76%", right: "6%", variant: "scatter", size: 66, anim: "drift-a", opacity: 0.6 },
  { top: "84%", left: "72%", variant: "tick", size: 36, anim: "pulse", opacity: 0.6 },
  { top: "90%", left: "8%", variant: "bell", size: 66, anim: "drift-b", opacity: 0.55 },
  { top: "95%", right: "18%", variant: "label", label: "P⁻", anim: "pulse", opacity: 0.7 },
];

function Glyph({ variant, size = 48, label }: Pick<Motif, "variant" | "size" | "label">) {
  const stroke = "#16161a";

  if (variant === "label") {
    return (
      <span
        style={{
          fontFamily: "ui-serif, Georgia, serif",
          fontStyle: "italic",
          fontSize: 18,
          color: stroke,
          whiteSpace: "nowrap",
          letterSpacing: "0.01em",
        }}
      >
        {label}
      </span>
    );
  }
  if (variant === "bell") {
    return (
      <svg width={size} height={size * 0.55} viewBox="0 0 100 55" fill="none">
        <path
          d="M2,50 C 20,50 30,50 40,32 C 47,18 50,4 50,4 C 50,4 53,18 60,32 C 70,50 80,50 98,50"
          stroke={stroke}
          strokeWidth="1.6"
        />
        <line x1="50" y1="4" x2="50" y2="50" stroke={stroke} strokeWidth="1" strokeDasharray="3 3" />
      </svg>
    );
  }
  if (variant === "ellipse") {
    return (
      <svg width={size} height={size * 0.6} viewBox="0 0 100 60" fill="none">
        <ellipse cx="50" cy="30" rx="46" ry="24" stroke={stroke} strokeWidth="1.4" />
        <ellipse cx="50" cy="30" rx="28" ry="14" stroke={stroke} strokeWidth="1.2" />
        <circle cx="50" cy="30" r="2.2" fill={stroke} />
      </svg>
    );
  }
  if (variant === "scatter") {
    return (
      <svg width={size} height={size * 0.5} viewBox="0 0 100 50" fill={stroke}>
        <circle cx="8" cy="30" r="2" />
        <circle cx="22" cy="18" r="2" />
        <circle cx="36" cy="26" r="2" />
        <circle cx="50" cy="14" r="2" />
        <circle cx="64" cy="22" r="2" />
        <circle cx="78" cy="12" r="2" />
        <circle cx="92" cy="20" r="2" />
        <path
          d="M8,30 C 22,22 36,24 50,16 C 64,12 78,14 92,18"
          fill="none"
          stroke={stroke}
          strokeWidth="1.2"
        />
      </svg>
    );
  }
  if (variant === "tick") {
    return (
      <svg width={size} height={size * 0.8} viewBox="0 0 30 24" fill="none">
        <line x1="2" y1="12" x2="28" y2="12" stroke={stroke} strokeWidth="1.2" />
        <line x1="6" y1="5" x2="6" y2="19" stroke={stroke} strokeWidth="1.6" />
        <line x1="15" y1="2" x2="15" y2="22" stroke={stroke} strokeWidth="1.6" />
        <line x1="24" y1="7" x2="24" y2="17" stroke={stroke} strokeWidth="1.6" />
      </svg>
    );
  }
  // trajectory
  return (
    <svg width={size} height={size * 0.5} viewBox="0 0 100 50" fill="none">
      <path
        d="M2,40 C 20,32 35,42 50,28 C 65,16 80,30 98,18"
        stroke={stroke}
        strokeWidth="1.4"
        strokeDasharray="3 3"
        opacity="0.7"
      />
      <path
        d="M2,40 C 20,32 35,42 50,28 C 65,16 80,30 98,18"
        stroke={stroke}
        strokeWidth="1.4"
      />
    </svg>
  );
}

export function Backdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {motifs.map((m, i) => (
        <div
          key={i}
          className={`absolute backdrop-motif backdrop-${m.anim}`}
          style={{
            top: m.top,
            left: m.left,
            right: m.right,
            opacity: m.opacity ?? 0.5,
            animationDelay: `${(i % 5) * -1.7}s`,
          }}
        >
          <Glyph variant={m.variant} size={m.size} label={m.label} />
        </div>
      ))}

      <style>{`
        .backdrop-motif { will-change: transform; }

        @keyframes backdrop-drift-a {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50%      { transform: translate(3px, -5px) rotate(0.8deg); }
        }
        @keyframes backdrop-drift-b {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50%      { transform: translate(-4px, 4px) rotate(-1deg); }
        }
        @keyframes backdrop-drift-c {
          0%, 100% { transform: translate(0, 0); }
          33%      { transform: translate(3px, 3px); }
          66%      { transform: translate(-3px, -2px); }
        }
        @keyframes backdrop-pulse {
          0%, 100% { transform: scale(1); }
          50%      { transform: scale(1.08); }
        }
        @keyframes backdrop-spin {
          0%   { transform: rotate(-3deg); }
          50%  { transform: rotate(3deg); }
          100% { transform: rotate(-3deg); }
        }

        .backdrop-drift-a { animation: backdrop-drift-a 9s ease-in-out infinite; }
        .backdrop-drift-b { animation: backdrop-drift-b 11s ease-in-out infinite; }
        .backdrop-drift-c { animation: backdrop-drift-c 13s ease-in-out infinite; }
        .backdrop-pulse   { animation: backdrop-pulse 7s ease-in-out infinite; }
        .backdrop-spin    { animation: backdrop-spin 14s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .backdrop-motif { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
