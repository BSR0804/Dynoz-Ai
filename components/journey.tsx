"use client";

import { motion, useReducedMotion } from "framer-motion";
import SplitText from "@/components/split-text";
import TiltCard from "@/components/tilt-card";

const phases = [
  {
    number: "01",
    label: "Before Arrival",
    headline: "Reservations & guest preparation",
    body: "Dynoz manages reservation inquiries, answers pre-stay questions, and prepares guests before they arrive — in their language, at any hour.",
    features: [
      "Reservation handling & modifications",
      "Pre-stay preference collection",
      "Upsell room upgrades automatically",
      "Confirmation & itinerary delivery",
    ],
  },
  {
    number: "02",
    label: "During Stay",
    headline: "Instant routing to every department",
    body: "AI agents answer guest requests in real time and route them instantly to the correct hotel department — housekeeping, F&B, concierge — with full context.",
    features: [
      "24/7 multilingual guest support",
      "Real-time department routing",
      "PMS & system integration",
      "Personalised responses via guest history",
    ],
  },
  {
    number: "03",
    label: "After Checkout",
    headline: "Feedback & service recovery",
    body: "After checkout, Dynoz handles feedback collection, resolves service issues, and builds loyalty — turning every stay into a relationship.",
    features: [
      "Automated feedback collection",
      "Service recovery workflows",
      "Loyalty & return visit prompts",
      "Sentiment analysis & reporting",
    ],
  },
];

export default function Journey() {
  const reduce = useReducedMotion();

  return (
    <section id="journey" className="py-24 md:py-32" style={{ background: "var(--paper)" }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 max-w-xl"
        >
          <p className="text-xs font-mono tracking-[0.16em] mb-3" style={{ color: "var(--text-muted)" }}>
            THE FULL GUEST JOURNEY
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-[-0.02em]" style={{ color: "var(--ink)" }}>
            <SplitText delay={0.1}>Across every touchpoint,</SplitText>
            <span className="gradient-text block">from inquiry to loyalty.</span>
          </h2>
        </motion.div>

        {/* Phase cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {phases.map((phase, i) => {
            return (
              <motion.div
                key={phase.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  delay: reduce ? 0 : i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
              <TiltCard className="rounded-xl p-7 flex flex-col gap-6 card-3d" intensity={5}>
                {/* Top row */}
                <div className="flex items-start">
                  <span className="text-[28px] font-bold font-mono tracking-tight gradient-text leading-none">
                    {phase.number}
                  </span>
                </div>

                {/* Label */}
                <span
                  className="text-[11px] font-mono tracking-wider px-2.5 py-1 rounded-md self-start gradient-border"
                  style={{ color: "var(--text-strong)" }}
                >
                  {phase.label}
                </span>

                {/* Content */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-base font-semibold leading-snug" style={{ color: "var(--ink)" }}>
                    {phase.headline}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text)" }}>
                    {phase.body}
                  </p>
                </div>

                {/* Features */}
                <ul
                  className="flex flex-col gap-2 pt-4 mt-auto"
                  style={{ borderTop: "1px solid var(--hairline)" }}
                >
                  {phase.features.map((f, fi) => (
                    <motion.li
                      key={f}
                      initial={{ opacity: 0, x: -6 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: reduce ? 0 : i * 0.12 + 0.3 + fi * 0.05, duration: 0.4 }}
                      className="flex items-start gap-2.5 text-sm"
                      style={{ color: "var(--text)" }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2 gradient-bg"
                      />
                      {f}
                    </motion.li>
                  ))}
                </ul>
              </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
