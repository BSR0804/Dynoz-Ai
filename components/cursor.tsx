"use client";

import { useEffect, useRef, useState } from "react";

/*
  Dynoz AI — Custom Cursor
  ========================
  Two-part cursor unique to Dynoz:
  • Precise dot: follows mouse 1:1, no lag.
  • Outer "gradient shimmer ring": a rotating conic-gradient ring that trails
    the dot with rAF lerp (spring-feel). On light bg it stays visible as a
    vivid brand-gradient stroke with a soft glow behind it.
  • On hover (links, buttons, [data-magnetic]): ring scales up + softens,
    hovered element nudges toward the cursor (magnetic pull).
  • Reduced motion: custom cursors hidden, native cursor restored.
  • Touch/coarse pointer: component renders nothing (CSS hides it).
*/

const LERP_BASE = 0.11;     // trailing spring strength (0–1, lower = more lag)
const LERP_HOVER = 0.095;   // slightly lazier on hover for extra drama
const MAGNETIC_STRENGTH = 0.28; // how far element nudges toward cursor (0–1)
const RING_SIZE_DEFAULT = 36;
const RING_SIZE_HOVER = 56;

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

export default function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const mouse  = useRef({ x: -200, y: -200 });
  const ring   = useRef({ x: -200, y: -200 });
  const hover  = useRef(false);
  const raf    = useRef(0);
  const rot    = useRef(0);

  // Track which element is magnetic + its nudge
  const magnetic     = useRef<HTMLElement | null>(null);
  const magOffset    = useRef({ x: 0, y: 0 });
  const magTarget    = useRef({ x: 0, y: 0 });
  const magCurrent   = useRef({ x: 0, y: 0 });

  const [visible, setVisible] = useState(false);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    // Don't run on touch / coarse pointer devices
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const noHover = window.matchMedia("(hover: none)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (coarse || noHover || reduced) return;

    // Hide native cursor globally
    document.documentElement.style.cursor = "none";
    const cleanup: Array<() => void> = [];
    cleanup.push(() => { document.documentElement.style.cursor = ""; });

    // ── Mouse move ──────────────────────────────────────────────────
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    cleanup.push(() => window.removeEventListener("mousemove", onMove));

    // ── Hover detection: any link, button, input, select, [data-magnetic] ──
    const SELECTORS = "a, button, input, select, textarea, [data-magnetic], [role='button']";

    const onEnter = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest(SELECTORS) as HTMLElement | null;
      if (!el) return;
      hover.current = true;
      setIsHover(true);
      magnetic.current = el;
      magOffset.current = { x: 0, y: 0 };
    };
    const onLeave = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest(SELECTORS) as HTMLElement | null;
      if (!el) return;
      hover.current = false;
      setIsHover(false);
      // Spring back
      if (magnetic.current) {
        magTarget.current = { x: 0, y: 0 };
        magnetic.current = null;
      }
    };

    document.addEventListener("mouseover", onEnter, { passive: true });
    document.addEventListener("mouseout",  onLeave, { passive: true });
    cleanup.push(() => {
      document.removeEventListener("mouseover", onEnter);
      document.removeEventListener("mouseout",  onLeave);
    });

    // ── rAF loop ──────────────────────────────────────────────────
    const tick = () => {
      const lerpT = hover.current ? LERP_HOVER : LERP_BASE;

      // Dot: 1:1
      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate3d(${mouse.current.x - 3}px, ${mouse.current.y - 3}px, 0)`;
      }

      // Ring: lerp trail
      ring.current.x = lerp(ring.current.x, mouse.current.x, lerpT);
      ring.current.y = lerp(ring.current.y, mouse.current.y, lerpT);

      // Rotate the conic gradient ring
      rot.current = (rot.current + (hover.current ? 1.4 : 0.9)) % 360;
      const size = hover.current ? RING_SIZE_HOVER : RING_SIZE_DEFAULT;
      const half = size / 2;

      if (ringRef.current) {
        ringRef.current.style.width  = `${size}px`;
        ringRef.current.style.height = `${size}px`;
        ringRef.current.style.transform =
          `translate3d(${ring.current.x - half}px, ${ring.current.y - half}px, 0) rotate(${rot.current}deg)`;
        ringRef.current.style.opacity = hover.current ? "0.95" : "0.82";
      }


      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    cleanup.push(() => cancelAnimationFrame(raf.current));

    // Restore any element that was mid-nudge when cursor leaves window
    const onLeaveWindow = () => {
      if (magnetic.current) {
        magnetic.current.style.transform = "";
        magnetic.current.style.transition = "";
        magnetic.current = null;
      }
      setVisible(false);
    };
    document.addEventListener("mouseleave", onLeaveWindow);
    cleanup.push(() => document.removeEventListener("mouseleave", onLeaveWindow));

    return () => cleanup.forEach(fn => fn());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!visible) return null;

  return (
    <>
      {/* Precise dot */}
      <div
        ref={dotRef}
        aria-hidden
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 99999,
          pointerEvents: "none",
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #FF7A3D, #E94B8A, #B547D6, #5B7CFF)",
          boxShadow: "0 0 8px rgba(233,75,138,0.6)",
          willChange: "transform",
        }}
      />

      {/* Gradient shimmer ring — conic-gradient rotates via rAF */}
      <div
        ref={ringRef}
        aria-hidden
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 99998,
          pointerEvents: "none",
          borderRadius: "50%",
          willChange: "transform, width, height",
          // Outer glow blob — soft, light-bg-safe
          background: isHover
            ? "radial-gradient(circle, rgba(233,75,138,0.10) 0%, rgba(181,71,214,0.07) 50%, transparent 70%)"
            : "radial-gradient(circle, rgba(255,122,61,0.07) 0%, rgba(181,71,214,0.05) 50%, transparent 70%)",
          // Gradient border via outline-like inset
          boxShadow: isHover
            ? `0 0 0 1.5px transparent,
               0 0 22px 2px rgba(181,71,214,0.25),
               inset 0 0 0 1.5px rgba(255,122,61,0.3)`
            : `0 0 0 1.5px transparent,
               0 0 12px 1px rgba(181,71,214,0.18),
               inset 0 0 0 1.5px rgba(255,122,61,0.22)`,
          // The actual visible ring is a pseudo-like border achieved via
          // a nested absolutely positioned div — see child below.
          overflow: "hidden",
        }}
      >
        {/* Conic-gradient ring fill that rotates (parent rotates via rAF) */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            background: "conic-gradient(from 0deg, #FF7A3D, #E94B8A, #B547D6, #5B7CFF, #FF7A3D)",
            WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 2px), black calc(100% - 2px))",
            mask: "radial-gradient(farthest-side, transparent calc(100% - 2px), black calc(100% - 2px))",
            opacity: isHover ? 0.95 : 0.72,
          }}
        />
      </div>
    </>
  );
}
