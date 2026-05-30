"use client";

import { useEffect, useRef } from "react";

const COLORS = ["#FF7A3D", "#E94B8A", "#B547D6", "#5B7CFF"];

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0, H = 0, raf = 0;

    const particles: {
      x: number; y: number; vx: number; vy: number;
      r: number; color: string; alpha: number; pulse: number;
    }[] = [];

    function resize() {
      W = canvas!.width  = canvas!.offsetWidth;
      H = canvas!.height = canvas!.offsetHeight;
    }

    function init() {
      particles.length = 0;
      const count = Math.floor((W * H) / 18000);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          r: 1 + Math.random() * 2,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          alpha: 0.2 + Math.random() * 0.5,
          pulse: Math.random() * Math.PI * 2,
        });
      }
    }

    function draw(ts: number) {
      ctx!.clearRect(0, 0, W, H);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += 0.012;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;

        const a = p.alpha * (0.6 + 0.4 * Math.sin(p.pulse));
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = p.color + Math.round(a * 255).toString(16).padStart(2, "0");
        ctx!.fill();
      }
      raf = requestAnimationFrame(draw);
    }

    const ro = new ResizeObserver(() => { resize(); init(); });
    ro.observe(canvas);
    resize();
    init();
    raf = requestAnimationFrame(draw);

    return () => { ro.disconnect(); cancelAnimationFrame(raf); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        opacity: 0.5,
      }}
    />
  );
}
