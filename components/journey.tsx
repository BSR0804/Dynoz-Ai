"use client";

import { CalendarCheck, BellRing, MessageSquareHeart } from "lucide-react";

const phases = [
  {
    number: "01",
    label: "Before Arrival",
    icon: CalendarCheck,
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
    icon: BellRing,
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
    icon: MessageSquareHeart,
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
  return (
    <section id="journey" className="py-24 md:py-32" style={{ background: "#FAFAF8" }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16 max-w-xl">
          <p className="text-xs font-mono tracking-[0.16em] mb-3" style={{ color: "rgba(12,12,14,0.7)" }}>
            THE FULL GUEST JOURNEY
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-[-0.02em]" style={{ color: "#0C0C0E" }}>
            Across every touchpoint,{" "}
            <span style={{ color: "rgba(12,12,14,0.4)" }}>from inquiry to loyalty.</span>
          </h2>
        </div>

        {/* Phase cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {phases.map((phase) => {
            const Icon = phase.icon;
            return (
              <div
                key={phase.number}
                className="rounded-xl p-7 flex flex-col gap-6"
                style={{
                  background: "#FFFFFF",
                  border: "2px solid #0C0C0E",
                  boxShadow: "4px 4px 0px #0C0C0E",
                }}
              >
                {/* Top row */}
                <div className="flex items-start justify-between">
                  <span
                    className="text-[11px] font-mono tracking-widest"
                    style={{ color: "rgba(12,12,14,0.55)" }}
                  >
                    {phase.number}
                  </span>
                </div>

                {/* Label */}
                <span
                  className="text-[11px] font-mono tracking-wider px-2.5 py-1 rounded-md self-start"
                  style={{
                    color: "#1A56FF",
                    background: "rgba(26,86,255,0.07)",
                    border: "1px solid rgba(26,86,255,0.14)",
                  }}
                >
                  {phase.label}
                </span>

                {/* Content */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-base font-semibold leading-snug" style={{ color: "#0C0C0E" }}>
                    {phase.headline}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(12,12,14,0.55)" }}>
                    {phase.body}
                  </p>
                </div>

                {/* Features */}
                <ul
                  className="flex flex-col gap-2 pt-4 mt-auto"
                  style={{ borderTop: "1px solid rgba(12,12,14,0.06)" }}
                >
                  {phase.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm" style={{ color: "rgba(12,12,14,0.65)" }}>
                      <span
                        className="w-1 h-1 rounded-full flex-shrink-0 mt-2"
                        style={{ background: "#1A56FF" }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
