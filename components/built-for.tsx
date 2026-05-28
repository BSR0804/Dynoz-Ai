"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Building2, Plane, Monitor } from "lucide-react";

const segments = [
  {
    id: "hotels",
    label: "Hotels & Stays",
    icon: Building2,
    headline: "Front desk, automated.",
    body: "Dynoz handles guest calls, concierge requests, and in-stay interactions with real-time PMS integration — so your team focuses on the moments that matter.",
    outcomes: [
      "Immediate response to guest calls without delays",
      "Reduced front desk workload during peak hours",
      "Multilingual support for a global guest base",
      "Personalised service using guest history",
      "Consistent quality across every shift",
    ],
    conversation: [
      { speaker: "Guest", text: "Can I get a late check-out tomorrow?" },
      { speaker: "Dynoz", text: "Of course — I've extended your check-out to 2 PM. Anything else I can help with?" },
      { speaker: "Guest", text: "Perfect, thank you." },
      { speaker: "Dynoz", text: "My pleasure, enjoy the rest of your stay!" },
    ],
  },
  {
    id: "travel",
    label: "Travel Platforms",
    icon: Monitor,
    headline: "AI-native booking support.",
    body: "Embed Dynoz as a native AI agent in your platform, powering voice and chat across support, bookings, and service workflows — in every language your travellers speak.",
    outcomes: [
      "Automated booking modifications & cancellations",
      "24/7 support without scaling a support team",
      "Consistent brand voice across all interactions",
      "Seamless escalation to human agents",
      "Full interaction logs for quality assurance",
    ],
    conversation: [
      { speaker: "Guest", text: "Hi, I want to book a stay in Bali for 3 nights from Dec 20." },
      { speaker: "Dynoz", text: "Great choice! I found 4 available properties. The top pick is Karma Kandara — sea view villa, ₹18,400/night. Shall I reserve it?" },
      { speaker: "Guest", text: "Yes, and can I add breakfast?" },
      { speaker: "Dynoz", text: "Done — 3 nights with breakfast included. Confirmation sent to your email." },
    ],
  },
  {
    id: "airlines",
    label: "Airlines",
    icon: Plane,
    headline: "Always-on traveller support.",
    body: "Delivers 24/7 voice and chat support across traveller interactions — from status queries and rebooking to FAQs — in the traveller's language, at scale.",
    outcomes: [
      "Handle high-volume disruption scenarios",
      "Automated rebooking during delays & cancellations",
      "Multilingual traveller support at scale",
      "Reduced call centre queue times",
      "Real-time flight status & gate information",
    ],
    conversation: [
      { speaker: "Guest", text: "What's the status of my flight AL 204?" },
      { speaker: "Dynoz", text: "Flight AL 204 is delayed by 40 minutes. New departure at 16:20, gate B12." },
      { speaker: "Guest", text: "Can I switch to an earlier flight?" },
      { speaker: "Dynoz", text: "Yes — AL 198 at 14:05 has availability. Shall I move you to that flight?" },
    ],
  },
];

export default function BuiltFor() {
  const [active, setActive] = useState("hotels");
  const current = segments.find((s) => s.id === active)!;
  const Icon = current.icon;

  return (
    <section id="built-for" className="py-24 md:py-32" style={{ background: "#FAFAF8", borderTop: "1px solid rgba(12,12,14,0.06)" }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-12 max-w-xl">
          <p className="text-xs font-mono tracking-[0.16em] mb-3" style={{ color: "rgba(12,12,14,0.7)" }}>
            BUILT FOR
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-[-0.02em]" style={{ color: "#0C0C0E" }}>
            Designed for hospitality{" "}
            <span style={{ color: "rgba(12,12,14,0.38)" }}>&amp; travel.</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 flex-wrap">
          {segments.map((seg) => {
            const SIcon = seg.icon;
            const isActive = seg.id === active;
            return (
              <button
                key={seg.id}
                onClick={() => setActive(seg.id)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150"
                style={{
                  color: isActive ? "#1A56FF" : "rgba(12,12,14,0.55)",
                  background: isActive ? "rgba(26,86,255,0.07)" : "rgba(12,12,14,0.04)",
                  border: `1px solid ${isActive ? "rgba(26,86,255,0.2)" : "rgba(12,12,14,0.08)"}`,
                }}
              >
                <SIcon size={13} />
                {seg.label}
              </button>
            );
          })}
        </div>

        {/* Content panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center rounded-xl p-8 md:p-12"
            style={{
              background: "#FFFFFF",
              border: "2px solid #0C0C0E",
              boxShadow: "4px 4px 0px #0C0C0E, 8px 8px 0px rgba(12,12,14,0.35), 14px 14px 0px rgba(12,12,14,0.12)",
            }}
          >
            {/* Left */}
            <div className="flex flex-col gap-5">
              <h3 className="text-xl md:text-2xl font-semibold leading-snug tracking-[-0.015em]" style={{ color: "#0C0C0E" }}>
                {current.headline}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(12,12,14,0.75)" }}>
                {current.body}
              </p>
              <ul className="flex flex-col gap-2.5 mt-1">
                {current.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-2.5 text-sm" style={{ color: "rgba(12,12,14,0.82)" }}>
                    <svg className="flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle cx="7" cy="7" r="6" fill="#1A56FF" opacity="0.1" />
                      <path d="M4.5 7l1.8 1.8L9.5 5.2" stroke="#1A56FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {o}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — phone mockup */}
            <div className="flex justify-center md:justify-end">
              <div
                className="w-60 rounded-[1.75rem] overflow-hidden flex flex-col"
                style={{
                  background: "#0C0C0E",
                  border: "2px solid rgba(255,255,255,0.12)",
                  boxShadow: "4px 4px 0px rgba(255,255,255,0.22), 8px 8px 0px rgba(255,255,255,0.14), 14px 14px 0px rgba(255,255,255,0.07), 20px 20px 40px rgba(0,0,0,0.5)",
                }}
              >
                {/* Notch */}
                <div className="flex justify-center pt-3 pb-1">
                  <div className="w-16 h-1 rounded-full" style={{ background: "rgba(255,255,255,0.1)" }} />
                </div>

                {/* Chat header */}
                <div className="px-4 py-2.5 flex items-center gap-2" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: "rgba(26,86,255,0.15)" }}>
                    <Icon size={11} style={{ color: "#1A56FF" }} />
                  </div>
                  <div>
                    <p className="text-white text-[11px] font-semibold">Dynoz AI</p>
                    <p className="text-[9px]" style={{ color: "rgba(255,255,255,0.3)" }}>Always available</p>
                  </div>
                  <div className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-400" />
                </div>

                {/* Messages */}
                <div className="flex flex-col gap-2 p-3.5 pb-5">
                  {current.conversation.map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className={`flex ${msg.speaker === "Guest" ? "justify-start" : "justify-end"}`}
                    >
                      <div
                        className="max-w-[88%] px-3 py-2 rounded-xl text-[10px] leading-relaxed"
                        style={{
                          background: msg.speaker === "Dynoz" ? "rgba(26,86,255,0.18)" : "rgba(255,255,255,0.06)",
                          color: msg.speaker === "Dynoz" ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.45)",
                        }}
                      >
                        {msg.text}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
