"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Waveform from "./waveform";
import Transcript from "./transcript";
import ParticleField from "@/components/particle-field";
import TiltCard from "@/components/tilt-card";
import SplitText from "@/components/split-text";

export default function Hero() {
  const [waveActive, setWaveActive] = useState(false);
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 600], [0, 80]);
  const imageScale = useTransform(scrollY, [0, 600], [1, 1.08]);

  return (
    <section
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden"
      style={{ background: "var(--paper)" }}
    >
      {/* Floating particle field */}
      <ParticleField />

      {/* VR woman — strictly right half, behind demo card, parallax */}
      <div className="absolute inset-y-0 right-0 w-[48%] pointer-events-none hidden lg:block overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: imageY, scale: imageScale }}>
          <Image
            src="/bg1.jpg"
            alt=""
            fill
            priority
            sizes="50vw"
            quality={100}
            className="object-contain object-center"
            aria-hidden
          />
        </motion.div>
      </div>

      {/* Animated gradient mesh blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute blob-a -top-40 -left-40 w-[640px] h-[640px] rounded-full opacity-[0.22]"
          style={{ background: "radial-gradient(circle, #FF7A3D 0%, transparent 60%)", filter: "blur(80px)" }}
        />
        <div
          className="absolute blob-c bottom-[-220px] left-1/3 w-[600px] h-[600px] rounded-full opacity-[0.18]"
          style={{ background: "radial-gradient(circle, #5B7CFF 0%, transparent 60%)", filter: "blur(90px)" }}
        />
        <div className="absolute inset-0 grid-drift opacity-60" />
      </div>

      {/* Content grid */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 items-center min-h-[calc(100svh-9rem)]">

          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-8 relative z-20"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span
                className="inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.14em] uppercase px-3 py-1.5 rounded-md"
                style={{
                  color: "var(--text-muted)",
                  background: "rgba(255,255,255,0.85)",
                  border: "1px solid var(--border)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block pulse-dot" />
                AI Operations Platform
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-[2.8rem] md:text-[3.6rem] lg:text-[4.2rem] font-bold leading-[1.05] tracking-[-0.03em]"
              style={{ color: "var(--ink)" }}
            >
              <SplitText delay={0.1}>Every guest call.</SplitText>
              <span className="brand-sweep block">Handled instantly.</span>
            </h1>

            {/* Body */}
            <p className="text-base md:text-lg leading-relaxed max-w-[480px]" style={{ color: "var(--text)" }}>
              Dynoz deploys multilingual AI voice agents for hospitality and travel — answering calls, routing requests, and resolving guest needs around the clock.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a href="/contact" className="btn-grad px-5 py-2.5 rounded-lg text-white text-sm font-semibold">
                Request a demo
              </a>
              <a
                href="#how-it-works"
                className="px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-black/[0.04]"
                style={{ color: "var(--text)", border: "1px solid var(--border-strong)" }}
              >
                See how it works →
              </a>
            </div>

            {/* Stats */}
            <div
              className="flex items-center gap-8 pt-6 mt-2"
              style={{ borderTop: "1px solid var(--hairline)" }}
            >
              {[
                { val: "24/7", label: "Always on" },
                { val: "40+", label: "Languages" },
                { val: "<2s", label: "Response time" },
              ].map(({ val, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  className="flex flex-col gap-0.5"
                >
                  <span className="text-xl font-bold font-mono tracking-tight gradient-text">{val}</span>
                  <span className="text-xs font-mono tracking-wider" style={{ color: "var(--text-muted)" }}>{label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Live Demo card */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[420px] mx-auto lg:mx-0 z-20"
          >
          <TiltCard intensity={6}>
            <div
              aria-hidden
              className="absolute -inset-1 rounded-2xl opacity-60 gradient-bg-soft"
              style={{ filter: "blur(18px)" }}
            />
            <div
              className="relative rounded-2xl p-5 flex flex-col gap-4"
              style={{
                background: "var(--surface-card)",
                border: "1px solid var(--border)",
                boxShadow: "0 18px 48px rgba(12,12,14,0.08), 0 2px 6px rgba(12,12,14,0.04)",
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 pulse-dot" />
                  <span className="text-[11px] font-mono tracking-widest" style={{ color: "var(--text-muted)" }}>
                    LIVE DEMO
                  </span>
                </div>
                <span className="text-[11px] font-mono" style={{ color: "var(--text-faint)" }}>
                  dynoz.ai
                </span>
              </div>
              <Waveform active={waveActive} />
              <Transcript onActiveChange={setWaveActive} />
            </div>
          </TiltCard>
          </motion.div>

        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <motion.span
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2.4, repeat: Infinity }}
          className="text-[10px] font-mono tracking-[0.2em]"
          style={{ color: "var(--text-muted)" }}
        >
          SCROLL
        </motion.span>
        <div className="w-px h-7" style={{ background: "linear-gradient(to bottom, var(--text-muted), transparent)" }} />
      </div>
    </section>
  );
}
