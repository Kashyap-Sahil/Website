export function Backdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <svg
        className="absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2"
        viewBox="0 0 1600 1000"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        style={{ animation: "drift 90s ease-in-out infinite alternate" }}
      >
        <defs>
          <linearGradient id="band" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#16161a" stopOpacity="0" />
            <stop offset="20%" stopColor="#16161a" stopOpacity="0.07" />
            <stop offset="80%" stopColor="#16161a" stopOpacity="0.07" />
            <stop offset="100%" stopColor="#16161a" stopOpacity="0" />
          </linearGradient>

          {/* Reusable Gaussian bell curve path */}
          <symbol id="bell" viewBox="0 0 200 80">
            <path
              d="M0,78 C30,78 60,78 80,60 C95,46 100,8 100,8 C100,8 105,46 120,60 C140,78 170,78 200,78"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </symbol>
        </defs>

        {/* 95% confidence band around the filtered trajectory */}
        <path
          d="M0,520 C 200,470 400,540 600,500 C 800,460 1000,560 1200,510 C 1400,470 1600,540 1600,520 L 1600,580 C 1400,610 1200,560 1000,610 C 800,650 600,560 400,610 C 200,650 0,580 0,580 Z"
          fill="url(#band)"
        />

        {/* Smoothed (filtered) state trajectory */}
        <path
          d="M0,540 C 200,490 400,560 600,520 C 800,480 1000,580 1200,530 C 1400,490 1600,560 1600,540"
          fill="none"
          stroke="#16161a"
          strokeOpacity="0.18"
          strokeWidth="1.25"
        />

        {/* Noisy measurements — tiny circles scattered around trajectory */}
        <g fill="#16161a" fillOpacity="0.22">
          <circle cx="60" cy="520" r="1.6" />
          <circle cx="140" cy="498" r="1.6" />
          <circle cx="220" cy="540" r="1.6" />
          <circle cx="300" cy="512" r="1.6" />
          <circle cx="380" cy="560" r="1.6" />
          <circle cx="460" cy="548" r="1.6" />
          <circle cx="540" cy="528" r="1.6" />
          <circle cx="620" cy="500" r="1.6" />
          <circle cx="700" cy="486" r="1.6" />
          <circle cx="780" cy="510" r="1.6" />
          <circle cx="860" cy="548" r="1.6" />
          <circle cx="940" cy="572" r="1.6" />
          <circle cx="1020" cy="566" r="1.6" />
          <circle cx="1100" cy="540" r="1.6" />
          <circle cx="1180" cy="514" r="1.6" />
          <circle cx="1260" cy="500" r="1.6" />
          <circle cx="1340" cy="520" r="1.6" />
          <circle cx="1420" cy="548" r="1.6" />
          <circle cx="1500" cy="540" r="1.6" />
        </g>

        {/* Covariance ellipses (uncertainty ovals) */}
        <g
          fill="none"
          stroke="#16161a"
          strokeOpacity="0.10"
          strokeWidth="0.9"
        >
          <ellipse cx="280" cy="220" rx="60" ry="22" transform="rotate(-12 280 220)" />
          <ellipse cx="280" cy="220" rx="38" ry="14" transform="rotate(-12 280 220)" />
          <ellipse cx="1280" cy="780" rx="70" ry="26" transform="rotate(8 1280 780)" />
          <ellipse cx="1280" cy="780" rx="45" ry="17" transform="rotate(8 1280 780)" />
        </g>

        {/* Prior + posterior bell curves, top right */}
        <g color="#16161a" opacity="0.16">
          <use href="#bell" x="1180" y="80" width="240" height="96" />
          <use href="#bell" x="1240" y="100" width="240" height="96" />
        </g>

        {/* Innovation residual ticks */}
        <g stroke="#16161a" strokeOpacity="0.18" strokeWidth="0.8">
          <line x1="380" y1="555" x2="380" y2="565" />
          <line x1="780" y1="505" x2="780" y2="515" />
          <line x1="1180" y1="510" x2="1180" y2="520" />
        </g>
      </svg>

      <style>{`
        @keyframes drift {
          0%   { transform: translate(-50%, -50%) translateX(-1.5%); }
          100% { transform: translate(-50%, -50%) translateX(1.5%); }
        }
        @media (prefers-reduced-motion: reduce) {
          svg { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
