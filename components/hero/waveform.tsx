"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const BAR_COUNT = 40;

function getHeights(active: boolean): number[] {
  if (!active) return Array(BAR_COUNT).fill(8);
  return Array.from({ length: BAR_COUNT }, (_, i) => {
    const base = 8;
    const speech =
      Math.sin(i * 0.6) * 18 +
      Math.sin(i * 1.3) * 12 +
      Math.sin(i * 0.3) * 8;
    return Math.max(base, base + speech + Math.random() * 10);
  });
}

export default function Waveform({ active }: { active: boolean }) {
  const [heights, setHeights] = useState<number[]>(getHeights(false));

  useEffect(() => {
    if (!active) {
      setHeights(getHeights(false));
      return;
    }
    const interval = setInterval(() => {
      setHeights(getHeights(true));
    }, 120);
    return () => clearInterval(interval);
  }, [active]);

  return (
    <div className="flex items-center gap-[2px] h-12" aria-hidden="true">
      {heights.map((h, i) => (
        <motion.div
          key={i}
          animate={{ height: h }}
          transition={{ duration: 0.12, ease: "easeOut" }}
          className="rounded-full flex-shrink-0"
          style={{
            width: "3px",
            background: active
              ? `hsl(${280 + i * 3}, 75%, ${45 + (h / 48) * 20}%)`
              : "rgba(12,12,14,0.18)",
          }}
        />
      ))}
    </div>
  );
}
