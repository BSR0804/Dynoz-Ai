"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  z: number;
  ox: number;
  oy: number;
  oz: number;
  size: number;
  opacity: number;
  speed: number;
  hue: number;
}

const TEXT = "DYNOZ AI";

export default function ParticleBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let w = 0;
    let h = 0;
    let t = 0;

    const PARTICLE_COUNT = 1800;
    const particles: Particle[] = [];

    function resize() {
      w = canvas!.width = canvas!.offsetWidth;
      h = canvas!.height = canvas!.offsetHeight;
    }

    // Sample points from text rendered on an offscreen canvas
    function getTextPoints(): { x: number; y: number }[] {
      const off = document.createElement("canvas");
      const fontSize = Math.min(w * 0.18, 140);
      off.width = w;
      off.height = h;
      const octx = off.getContext("2d")!;
      octx.fillStyle = "#fff";
      octx.font = `900 ${fontSize}px Inter, sans-serif`;
      octx.textAlign = "center";
      octx.textBaseline = "middle";
      octx.fillText(TEXT, w / 2, h / 2);

      const data = octx.getImageData(0, 0, w, h).data;
      const pts: { x: number; y: number }[] = [];
      const step = 4;
      for (let y = 0; y < h; y += step) {
        for (let x = 0; x < w; x += step) {
          const idx = (y * w + x) * 4;
          if (data[idx + 3] > 128) {
            pts.push({ x, y });
          }
        }
      }
      return pts;
    }

    function buildParticles() {
      particles.length = 0;
      const pts = getTextPoints();
      if (pts.length === 0) return;

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const p = pts[Math.floor(Math.random() * pts.length)];
        // Scatter from text origin using 3D coords
        const angle = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const r = Math.random() * 0.5; // tight scatter around text

        const ox = p.x + Math.sin(phi) * Math.cos(angle) * r * 10;
        const oy = p.y + Math.sin(phi) * Math.sin(angle) * r * 10;
        const oz = (Math.random() - 0.5) * 300;

        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          z: (Math.random() - 0.5) * 600,
          ox,
          oy,
          oz,
          size: 0.8 + Math.random() * 1.8,
          opacity: 0.4 + Math.random() * 0.6,
          speed: 0.003 + Math.random() * 0.006,
          hue: 160 + Math.random() * 40, // teal-mint range
        });
      }
    }

    // Floating ambient particles (background cloud)
    const ambientCount = 400;
    interface Ambient { x: number; y: number; z: number; size: number; speed: number; hue: number }
    const ambient: Ambient[] = Array.from({ length: ambientCount }, () => ({
      x: Math.random() * 1000,
      y: Math.random() * 800,
      z: Math.random() * 600 - 300,
      size: 0.4 + Math.random() * 1.2,
      speed: 0.001 + Math.random() * 0.003,
      hue: 150 + Math.random() * 60,
    }));

    function project(x: number, y: number, z: number, cx: number, cy: number) {
      const fov = 500;
      const scale = fov / (fov + z);
      return {
        sx: cx + (x - cx) * scale,
        sy: cy + (y - cy) * scale,
        scale,
      };
    }

    function draw() {
      ctx!.clearRect(0, 0, w, h);

      const cx = w / 2;
      const cy = h / 2;
      t += 0.008;

      // Slow global rotation around Y axis
      const rotY = t * 0.15;
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);

      // Draw ambient floating dots first (behind)
      for (const a of ambient) {
        a.y -= a.speed * 0.5;
        a.z = ((a.z + 1 + 300) % 600) - 300;
        if (a.y < -10) a.y = h + 10;

        const { sx, sy, scale } = project(a.x, a.y, a.z, cx, cy);
        const alpha = scale * 0.25;
        ctx!.beginPath();
        ctx!.arc(sx, sy, a.size * scale, 0, Math.PI * 2);
        ctx!.fillStyle = `hsla(${a.hue}, 80%, 65%, ${alpha})`;
        ctx!.fill();
      }

      // Draw text particles with 3D rotation
      for (const p of particles) {
        // Lerp toward target position
        p.x += (p.ox - p.x) * p.speed * 2.5;
        p.y += (p.oy - p.y) * p.speed * 2.5;
        p.z += (p.oz - p.z) * p.speed * 2.5;

        // Apply Y-axis rotation around center
        const dx = p.x - cx;
        const dz = p.z;
        const rx = dx * cosY - dz * sinY;
        const rz = dx * sinY + dz * cosY;

        const { sx, sy, scale } = project(cx + rx, p.y, rz, cx, cy);

        // Gentle oscillation
        const wave = Math.sin(t * 2 + p.ox * 0.01 + p.oy * 0.01) * 0.5 + 0.5;
        const alpha = p.opacity * scale * (0.6 + wave * 0.4);
        const size = p.size * scale * (0.85 + wave * 0.3);

        // Glow effect
        const grd = ctx!.createRadialGradient(sx, sy, 0, sx, sy, size * 2.5);
        grd.addColorStop(0, `hsla(${p.hue}, 90%, 72%, ${alpha})`);
        grd.addColorStop(1, `hsla(${p.hue}, 90%, 72%, 0)`);

        ctx!.beginPath();
        ctx!.arc(sx, sy, size * 2.5, 0, Math.PI * 2);
        ctx!.fillStyle = grd;
        ctx!.fill();

        // Core bright dot
        ctx!.beginPath();
        ctx!.arc(sx, sy, size * 0.7, 0, Math.PI * 2);
        ctx!.fillStyle = `hsla(${p.hue}, 95%, 88%, ${Math.min(alpha * 1.4, 1)})`;
        ctx!.fill();
      }

      animId = requestAnimationFrame(draw);
    }

    const ro = new ResizeObserver(() => {
      resize();
      buildParticles();
    });
    ro.observe(canvas);

    resize();
    buildParticles();
    draw();

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.85 }}
    />
  );
}
