"use client";

import { useEffect, useRef } from "react";

export default function ScrollSkew() {
  const lastY = useRef(0);
  const velocity = useRef(0);
  const current = useRef(0);
  const raf = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      velocity.current = window.scrollY - lastY.current;
      lastY.current = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const tick = () => {
      // Lerp current skew toward velocity-based target
      const target = Math.max(-6, Math.min(6, velocity.current * -0.3));
      current.current += (target - current.current) * 0.1;
      velocity.current *= 0.85;

      const skew = current.current.toFixed(3);
      document.documentElement.style.setProperty("--scroll-skew", `${skew}deg`);

      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf.current);
      document.documentElement.style.removeProperty("--scroll-skew");
    };
  }, []);

  return null;
}
