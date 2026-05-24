"use client";

import { useEffect, useRef, useState } from "react";

const LOOP_MS = 10000;
const FADE_MS = 700;
const PLAYER_HEIGHT = 90;

export function HeroAnimation() {
  const [active, setActive] = useState(0);
  // Each iframe has its own key so we can force a fresh reload without disturbing the other one
  const [keys, setKeys] = useState<[number, number]>([0, 0]);
  const startedRef = useRef(false);

  useEffect(() => {
    // Kick the cycle: at LOOP_MS swap which iframe is visible. The hidden one gets a new key shortly after so it's freshly preloaded for the next swap.
    const swap = () => {
      setActive((a) => (a === 0 ? 1 : 0));
    };
    const id = setInterval(swap, LOOP_MS);

    return () => clearInterval(id);
  }, []);

  // After every swap, reload the now-hidden iframe (the one that just finished) so it's ready for the next cycle.
  useEffect(() => {
    if (!startedRef.current) {
      startedRef.current = true;
      return;
    }
    const hidden: 0 | 1 = active === 0 ? 1 : 0;
    const t = setTimeout(() => {
      setKeys((prev) => {
        const next = [...prev] as [number, number];
        next[hidden] = next[hidden] + 1;
        return next;
      });
    }, FADE_MS + 50);
    return () => clearTimeout(t);
  }, [active]);

  return (
    <div
      className="pointer-events-none absolute inset-0 -z-0 overflow-hidden"
      aria-hidden
    >
      <div className="absolute left-1/2 top-0 h-full w-screen -translate-x-1/2">
        {[0, 1].map((i) => (
          <iframe
            key={`${i}-${keys[i]}`}
            src="/hero-animation.html"
            title=""
            tabIndex={-1}
            scrolling="no"
            className="absolute left-1/2 top-0 block border-0 -translate-x-1/2"
            style={{
              width: "128vw",
              height: `calc(100% + ${PLAYER_HEIGHT}px)`,
              background: "#f6f3ec",
              opacity: active === i ? 1 : 0,
              transition: `opacity ${FADE_MS}ms ease`,
            }}
          />
        ))}
      </div>

      {/* Paper-colored halo behind the foreground text so the animation can't compete with it */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 28% 50%, rgba(246,243,236,0.88) 0%, rgba(246,243,236,0.55) 45%, rgba(246,243,236,0) 80%)",
        }}
      />
    </div>
  );
}
