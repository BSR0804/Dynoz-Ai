"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const WORDMARK = ["D","y","n","o","z"," ","A","I"];

const SPARKS = Array.from({ length: 18 }, (_, i) => {
  const angle = (i / 18) * 360;
  const dist  = 70 + (i % 4) * 35;
  const rad   = (angle * Math.PI) / 180;
  return {
    x: Math.cos(rad) * dist,
    y: Math.sin(rad) * dist,
    size: 4 + (i % 3) * 3,
    color: ["#FF7A3D","#E94B8A","#B547D6","#5B7CFF"][i % 4],
    delay: (i % 4) * 0.02,
  };
});

export default function Intro() {
  const [phase, setPhase] = useState<"splash"|"brand"|"exit"|"done">("done");
  const [mounted, setMounted] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    // Only show on first visit per session
    if (sessionStorage.getItem("dynoz-intro-seen")) {
      setMounted(true);
      return;
    }
    sessionStorage.setItem("dynoz-intro-seen", "1");
    setPhase("splash");
    setMounted(true);
    const safety = setTimeout(() => setPhase("done"), 10000);
    return () => clearTimeout(safety);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (phase !== "splash") return;
    // Total visible time: 0.5s, then 0.3s slide-up exit animation
    const t1 = setTimeout(() => setPhase("brand"), 100);
    const t2 = setTimeout(() => setPhase("exit"),  600);
    const t3 = setTimeout(() => setPhase("done"),  900);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [phase]);

  if (!mounted || phase === "done") return null;

  const isExiting  = phase === "exit";
  const showSplash = phase === "splash" || phase === "brand" || phase === "exit";
  const showBrand  = phase === "brand"  || phase === "exit";

  return (
    <AnimatePresence>
      <motion.div
        key="intro"
        animate={isExiting ? { y: "-102%" } : { y: 0 }}
        transition={isExiting ? { duration: 0.2, ease: [0.76, 0, 0.24, 1] } : { duration: 0 }}
        onAnimationComplete={() => { if (isExiting) setPhase("done"); }}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 999999,
          background: "#FFFFFF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: isExiting ? "none" : "all",
          overflow: "hidden",
        }}
      >
        {/* Splash burst */}
        {!reduce && showSplash && (
          <div aria-hidden style={{
            position: "absolute", inset: 0,
            display: "flex", alignItems: "center", justifyContent: "center",
            pointerEvents: "none",
          }}>
            <motion.div
              initial={{ scale: 0, opacity: 0.9 }}
              animate={{ scale: 3.5, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.1, 0.6, 0.3, 1] }}
              style={{ position: "absolute", width: 90, height: 90, borderRadius: "50%", border: "2.5px solid #E94B8A" }}
            />
            <motion.div
              initial={{ scale: 0, opacity: 0.7 }}
              animate={{ scale: 2.6, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.09, ease: [0.1, 0.6, 0.3, 1] }}
              style={{ position: "absolute", width: 90, height: 90, borderRadius: "50%", border: "2px solid #B547D6" }}
            />
            {SPARKS.map((s, i) => (
              <motion.div
                key={i}
                initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
                animate={{ x: s.x, y: s.y, scale: 0, opacity: 0 }}
                transition={{ duration: 0.6, delay: s.delay, ease: [0.2, 0.8, 0.4, 1] }}
                style={{
                  position: "absolute",
                  width: s.size, height: s.size,
                  borderRadius: i % 3 === 0 ? "2px" : "50%",
                  background: s.color,
                  rotate: i % 3 === 0 ? "45deg" : "0deg",
                }}
              />
            ))}
          </div>
        )}

        {/* Brand lockup */}
        <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <motion.img
              src="/dynoz-d.png"
              alt=""
              aria-hidden
              initial={{ scale: 0, opacity: 0 }}
              animate={showSplash ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={showSplash ? { type: "spring", stiffness: 480, damping: 18, mass: 0.8 } : { duration: 0.1 }}
              style={{ width: 56, height: 56 }}
            />
            <div style={{ display: "flex", alignItems: "baseline" }}>
              {WORDMARK.map((ch, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.5, y: 8 }}
                  animate={showSplash ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.5, y: 8 }}
                  transition={showSplash
                    ? { type: "spring", stiffness: 420, damping: 16, delay: 0.03 + i * 0.04 }
                    : { duration: 0.1 }
                  }
                  style={{
                    display: "inline-block",
                    fontSize: ch === " " ? 0 : "3rem",
                    width: ch === " " ? "0.45rem" : "auto",
                    fontWeight: 800,
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                    fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
                    color: "#0C0C0E",
                    WebkitTextFillColor: "#0C0C0E",
                  }}
                >
                  {ch === " " ? " " : ch}
                </motion.span>
              ))}
            </div>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={showBrand ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.35, delay: 0.1 }}
            style={{
              margin: 0, fontSize: "0.68rem",
              fontFamily: "var(--font-geist-mono), monospace",
              letterSpacing: "0.18em",
              color: "rgba(12,12,14,0.75)",
              textTransform: "uppercase",
            }}
          >
            Where Service Meets Intelligence
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
