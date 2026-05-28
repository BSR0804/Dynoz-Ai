"use client";

import { useEffect, useRef } from "react";

export default function ParticleScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0, H = 0;

    function resize() {
      W = canvas!.width = canvas!.offsetWidth;
      H = canvas!.height = canvas!.offsetHeight;
      drawStatic();
    }

    function sampleText(): { x: number; y: number }[] {
      const off = document.createElement("canvas");
      const scale = 2;
      off.width = W * scale;
      off.height = H * scale;
      const oc = off.getContext("2d")!;
      oc.scale(scale, scale);
      const fs = Math.min(W * 0.2, 160);
      oc.font = `900 ${fs}px Inter, Arial Black, sans-serif`;
      oc.textAlign = "center";
      oc.textBaseline = "middle";
      oc.fillStyle = "#fff";
      oc.fillText("DYNOZ AI", W / 2, H / 2);

      const { data } = oc.getImageData(0, 0, W * scale, H * scale);
      const pts: { x: number; y: number }[] = [];
      const step = 2;
      for (let y = 0; y < H * scale; y += step) {
        for (let x = 0; x < W * scale; x += step) {
          if (data[(y * W * scale + x) * 4 + 3] > 80) {
            pts.push({ x: x / scale, y: y / scale });
          }
        }
      }
      return pts;
    }

    function drawStatic() {
      ctx!.clearRect(0, 0, W, H);
      const pts = sampleText();
      if (!pts.length) return;

      const TOTAL = 5000;
      for (let i = 0; i < TOTAL; i++) {
        const p = pts[Math.floor(Math.random() * pts.length)];
        const x = p.x + (Math.random() - 0.5) * 2;
        const y = p.y + (Math.random() - 0.5) * 2;
        const size = 1.0 + Math.random() * 2.0;
        const alpha = 0.7 + Math.random() * 0.3;
        const hue = 155 + Math.random() * 50;

        // glow halo
        const g = ctx!.createRadialGradient(x, y, 0, x, y, size * 4);
        g.addColorStop(0,   `hsla(${hue},95%,75%,${alpha})`);
        g.addColorStop(0.3, `hsla(${hue},90%,68%,${alpha * 0.5})`);
        g.addColorStop(1,   `hsla(${hue},85%,60%,0)`);
        ctx!.beginPath();
        ctx!.arc(x, y, size * 4, 0, Math.PI * 2);
        ctx!.fillStyle = g;
        ctx!.fill();

        // bright core
        ctx!.beginPath();
        ctx!.arc(x, y, Math.max(size * 0.75, 0.7), 0, Math.PI * 2);
        ctx!.fillStyle = `hsla(${hue},100%,95%,${Math.min(alpha * 1.5, 1)})`;
        ctx!.fill();
      }
    }

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    return () => ro.disconnect();
  }, []);

  return (
    <div
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#020e09" }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ mixBlendMode: "screen" }}
      />

      {/* vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 40%, rgba(2,14,9,0.75) 100%)",
        }}
      />

      {/* tagline */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center">
        <p
          className="text-xs font-mono tracking-[0.3em] uppercase"
          style={{ color: "rgba(100,220,180,0.45)" }}
        >
          Where Service Meets Intelligence
        </p>
      </div>
    </div>
  );
}
