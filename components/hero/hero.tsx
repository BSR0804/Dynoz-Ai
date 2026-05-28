"use client";

import { useState } from "react";
import Waveform from "./waveform";
import Transcript from "./transcript";

export default function Hero() {
  const [waveActive, setWaveActive] = useState(false);

  return (
    <section
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden"
      style={{ background: "#0C0C0E" }}
    >
      {/* Subtle noise texture overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
          opacity: 0.4,
        }}
      />

      {/* Single precise accent glow — top right */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-0 w-[520px] h-[520px] opacity-[0.12]"
        style={{
          background: "radial-gradient(circle at top right, #1A56FF, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 items-center min-h-[calc(100svh-9rem)]">

          {/* Left */}
          <div className="flex flex-col gap-8">

            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span
                className="inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.14em] uppercase px-3 py-1.5 rounded-md"
                style={{
                  color: "rgba(255,255,255,0.4)",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                AI Operations Platform
              </span>
            </div>

            {/* Headline */}
            <div className="flex flex-col gap-1">
              <h1
                className="text-[2.8rem] md:text-[3.6rem] lg:text-[4.2rem] font-bold text-white leading-[1.05] tracking-[-0.03em]"
              >
                Every guest call.
                <br />
                <span style={{ color: "rgba(255,255,255,0.38)" }}>Handled instantly.</span>
              </h1>
            </div>

            {/* Body */}
            <p
              className="text-base md:text-lg leading-relaxed max-w-[480px]"
              style={{ color: "rgba(255,255,255,0.42)" }}
            >
              Dynoz deploys multilingual AI voice agents for hospitality and travel — answering calls, routing requests, and resolving guest needs around the clock.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="/contact"
                className="px-5 py-2.5 rounded-lg text-white text-sm font-semibold transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
                style={{ background: "#1A56FF" }}
              >
                Request a demo
              </a>
              <a
                href="#how-it-works"
                className="px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-white/5"
                style={{
                  color: "rgba(255,255,255,0.5)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                See how it works →
              </a>
            </div>

            {/* Stats */}
            <div
              className="flex items-center gap-8 pt-6 mt-2"
              style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
            >
              {[
                { val: "24/7", label: "Always on" },
                { val: "40+", label: "Languages" },
                { val: "<2s", label: "Response time" },
              ].map(({ val, label }) => (
                <div key={label} className="flex flex-col gap-0.5">
                  <span className="text-xl font-bold text-white font-mono tracking-tight">{val}</span>
                  <span className="text-xs font-mono tracking-wider" style={{ color: "rgba(255,255,255,0.28)" }}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — demo card */}
          <div className="relative w-full max-w-[420px] mx-auto lg:mx-0">
            {/* Subtle card glow */}
            <div
              aria-hidden
              className="absolute -inset-px rounded-2xl opacity-40"
              style={{ background: "linear-gradient(145deg, rgba(26,86,255,0.15), transparent 60%)" }}
            />
            <div
              className="relative rounded-2xl p-5 flex flex-col gap-4"
              style={{
                background: "#141418",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" style={{ boxShadow: "0 0 6px #34d399" }} />
                  <span className="text-[11px] font-mono tracking-widest" style={{ color: "rgba(255,255,255,0.3)" }}>
                    LIVE DEMO
                  </span>
                </div>
                <span className="text-[11px] font-mono" style={{ color: "rgba(255,255,255,0.18)" }}>
                  dynoz.ai
                </span>
              </div>

              <Waveform active={waveActive} />
              <Transcript onActiveChange={setWaveActive} />
            </div>
          </div>

        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] font-mono tracking-[0.2em]" style={{ color: "rgba(255,255,255,0.18)" }}>
          SCROLL
        </span>
        <div className="w-px h-7" style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.15), transparent)" }} />
      </div>
    </section>
  );
}
