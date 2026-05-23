"use client";

import { useEffect, useState } from "react";

const LOOP_MS = 13000;
const PLAYER_HEIGHT = 80;

export function HeroAnimation() {
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCycle((c) => c + 1), LOOP_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="pointer-events-none absolute inset-y-0 left-1/2 -z-0 w-screen -translate-x-1/2 overflow-hidden"
      aria-hidden
    >
      <iframe
        key={cycle}
        src="/hero-animation.html"
        title=""
        tabIndex={-1}
        scrolling="no"
        className="block w-full border-0"
        style={{
          height: `calc(100% + ${PLAYER_HEIGHT}px)`,
          background: "#f6f3ec",
        }}
      />
    </div>
  );
}
