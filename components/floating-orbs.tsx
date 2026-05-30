"use client";

import { useEffect, useRef } from "react";

const ORBS = [
  { color: "rgba(255,122,61,0.18)",  size: 420, x: 8,  y: 12, dur: 18 },
  { color: "rgba(181,71,214,0.14)",  size: 380, x: 72, y: 6,  dur: 22 },
  { color: "rgba(91,124,255,0.14)",  size: 360, x: 55, y: 45, dur: 26 },
  { color: "rgba(233,75,138,0.12)",  size: 400, x: 20, y: 60, dur: 20 },
  { color: "rgba(255,122,61,0.12)",  size: 340, x: 80, y: 70, dur: 24 },
  { color: "rgba(181,71,214,0.10)",  size: 380, x: 40, y: 85, dur: 28 },
];

export default function FloatingOrbs() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 overflow-hidden"
      style={{ zIndex: 0 }}
    >
      {ORBS.map((orb, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            width: orb.size,
            height: orb.size,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            filter: "blur(60px)",
            animation: `orb-float-${i % 3} ${orb.dur}s ease-in-out infinite`,
            animationDelay: `${i * -3}s`,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </div>
  );
}
