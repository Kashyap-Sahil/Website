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
  { top: "8%", left: "6%", variant: "bell", size: 56, anim: "drift-a", opacity: 0.18 },
  { top: "14%", right: "9%", variant: "ellipse", size: 64, anim: "drift-b", opacity: 0.16 },
  { top: "22%", left: "82%", variant: "label", label: "x̂ₖ|ₖ", anim: "pulse", opacity: 0.22 },
  { top: "30%", left: "4%", variant: "scatter", size: 60, anim: "drift-c", opacity: 0.22 },
  { top: "38%", right: "5%", variant: "trajectory", size: 80, anim: "drift-a", opacity: 0.14 },
  { top: "48%", left: "8%", variant: "tick", size: 30, anim: "pulse", opacity: 0.24 },
  { top: "54%", right: "12%", variant: "bell", size: 48, anim: "drift-b", opacity: 0.16 },
  { top: "62%", left: "78%", variant: "label", label: "𝒩(μ, σ²)", anim: "drift-c", opacity: 0.18 },
  { top: "70%", left: "5%", variant: "ellipse", size: 56, anim: "spin", opacity: 0.14 },
  { top: "78%", right: "8%", variant: "scatter", size: 50, anim: "drift-a", opacity: 0.2 },
  { top: "86%", left: "70%", variant: "tick", size: 26, anim: "pulse", opacity: 0.22 },
  { top: "92%", left: "10%", variant: "bell", size: 52, anim: "drift-b", opacity: 0.16 },
  { top: "96%", right: "20%", variant: "label", label: "P⁻", anim: "pulse", opacity: 0.2 },
];

function Glyph({ variant, size = 48, label }: Pick<Motif, "variant" | "size" | "label">) {
  if (variant === "label") {
    return (
      <span
        style={{
          fontFamily: "ui-serif, Georgia, serif",
          fontStyle: "italic",
          fontSize: 14,
          color: "#16161a",
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </span>
    );
  }
  if (variant === "bell") {
    return (
      <svg width={size} height={size * 0.5} viewBox="0 0 100 50" fill="none">
        <path
          d="M2,46 C 20,46 30,46 40,30 C 47,18 50,4 50,4 C 50,4 53,18 60,30 C 70,46 80,46 98,46"
          stroke="#16161a"
          strokeWidth="1"
        />
        <line x1="50" y1="4" x2="50" y2="46" stroke="#16161a" strokeWidth="0.6" strokeDasharray="2 2" />
      </svg>
    );
  }
  if (variant === "ellipse") {
    return (
      <svg width={size} height={size * 0.6} viewBox="0 0 100 60" fill="none">
        <ellipse cx="50" cy="30" rx="46" ry="24" stroke="#16161a" strokeWidth="1" />
        <ellipse cx="50" cy="30" rx="28" ry="14" stroke="#16161a" strokeWidth="0.8" />
        <circle cx="50" cy="30" r="1.4" fill="#16161a" />
      </svg>
    );
  }
  if (variant === "scatter") {
    return (
      <svg width={size} height={size * 0.5} viewBox="0 0 100 50" fill="#16161a">
        <circle cx="8" cy="30" r="1.4" />
        <circle cx="22" cy="18" r="1.4" />
        <circle cx="36" cy="26" r="1.4" />
        <circle cx="50" cy="14" r="1.4" />
        <circle cx="64" cy="22" r="1.4" />
        <circle cx="78" cy="12" r="1.4" />
        <circle cx="92" cy="20" r="1.4" />
        <path
          d="M8,30 C 22,22 36,24 50,16 C 64,12 78,14 92,18"
          fill="none"
          stroke="#16161a"
          strokeWidth="0.8"
          strokeOpacity="0.6"
        />
      </svg>
    );
  }
  if (variant === "tick") {
    return (
      <svg width={size} height={size * 0.8} viewBox="0 0 30 24" fill="none">
        <line x1="2" y1="12" x2="28" y2="12" stroke="#16161a" strokeWidth="0.8" />
        <line x1="6" y1="6" x2="6" y2="18" stroke="#16161a" strokeWidth="1" />
        <line x1="15" y1="3" x2="15" y2="21" stroke="#16161a" strokeWidth="1" />
        <line x1="24" y1="8" x2="24" y2="16" stroke="#16161a" strokeWidth="1" />
      </svg>
    );
  }
  // trajectory
  return (
    <svg width={size} height={size * 0.5} viewBox="0 0 100 50" fill="none">
      <path
        d="M2,40 C 20,32 35,42 50,28 C 65,16 80,30 98,18"
        stroke="#16161a"
        strokeWidth="1"
        strokeDasharray="2 3"
      />
      <path
        d="M2,40 C 20,32 35,42 50,28 C 65,16 80,30 98,18"
        stroke="#16161a"
        strokeWidth="1"
        strokeOpacity="0.5"
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
            opacity: m.opacity ?? 0.18,
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
          50%      { transform: translate(2px, -4px) rotate(0.6deg); }
        }
        @keyframes backdrop-drift-b {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50%      { transform: translate(-3px, 3px) rotate(-0.8deg); }
        }
        @keyframes backdrop-drift-c {
          0%, 100% { transform: translate(0, 0); }
          33%      { transform: translate(2px, 2px); }
          66%      { transform: translate(-2px, -1px); }
        }
        @keyframes backdrop-pulse {
          0%, 100% { transform: scale(1); opacity: var(--op, 0.2); }
          50%      { transform: scale(1.06); opacity: calc(var(--op, 0.2) * 1.4); }
        }
        @keyframes backdrop-spin {
          0%   { transform: rotate(-2deg); }
          50%  { transform: rotate(2deg); }
          100% { transform: rotate(-2deg); }
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
