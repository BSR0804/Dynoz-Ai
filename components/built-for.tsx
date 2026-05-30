"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Building2, Plane, Monitor } from "lucide-react";

type ChatMsg = { speaker: string; text: string };

function TypingBubble() {
  return (
    <div className="flex justify-end">
      <div
        className="px-3 py-2.5 rounded-xl flex items-center gap-1"
        style={{ background: "rgba(255,255,255,0.08)" }}
      >
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "rgba(255,255,255,0.5)" }}
            animate={{ opacity: [0.3, 1, 0.3], y: [0, -2, 0] }}
            transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
          />
        ))}
      </div>
    </div>
  );
}

/* LiveChat — plays the conversation message-by-message with a typing
   indicator before each Dynoz reply, then loops. Restarts whenever the
   `conversation` changes (i.e. when the active tab switches). */
function LiveChat({ conversation }: { conversation: ChatMsg[] }) {
  const [count, setCount] = useState(0);
  const [typing, setTyping] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setCount(0);
    setTyping(false);

    let i = 0;
    const schedule = (fn: () => void, ms: number) => {
      timers.current.push(setTimeout(fn, ms));
    };

    const step = () => {
      if (i >= conversation.length) {
        // hold, then loop
        schedule(() => {
          setCount(0);
          i = 0;
          schedule(step, 600);
        }, 2800);
        return;
      }
      const isDynoz = conversation[i].speaker === "Dynoz";
      if (isDynoz) {
        setTyping(true);
        schedule(() => {
          setTyping(false);
          setCount((c) => c + 1);
          i++;
          schedule(step, 850);
        }, 1000);
      } else {
        setCount((c) => c + 1);
        i++;
        schedule(step, 1000);
      }
    };

    schedule(step, 500);

    return () => {
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };
  }, [conversation]);

  return (
    <div className="flex flex-col gap-2 p-3.5 pb-5 min-h-[180px]">
      <AnimatePresence>
        {conversation.slice(0, count).map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className={`flex ${msg.speaker === "Guest" ? "justify-start" : "justify-end"}`}
          >
            <div
              className="max-w-[88%] px-3 py-2 rounded-xl text-[10px] leading-relaxed"
              style={
                msg.speaker === "Dynoz"
                  ? {
                      background:
                        "linear-gradient(135deg, rgba(255,122,61,0.85), rgba(233,75,138,0.85), rgba(181,71,214,0.85))",
                      color: "#fff",
                    }
                  : {
                      background: "rgba(255,255,255,0.08)",
                      color: "rgba(255,255,255,0.6)",
                    }
              }
            >
              {msg.text}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
      {typing && <TypingBubble />}
    </div>
  );
}

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
    <section id="built-for" className="py-24 md:py-32" style={{ background: "var(--paper)", borderTop: "1px solid var(--hairline)" }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-12 max-w-xl">
          <p className="text-xs font-mono tracking-[0.16em] mb-3" style={{ color: "var(--text-muted)" }}>
            BUILT FOR
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-[-0.02em]" style={{ color: "var(--ink)" }}>
            Designed for hospitality{" "}
            <span className="gradient-text">&amp; travel.</span>
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
                className="relative flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                style={{
                  color: isActive ? "#0C0C0E" : "var(--text-muted)",
                  background: isActive ? "var(--surface-card)" : "rgba(12,12,14,0.04)",
                  border: `1px solid ${isActive ? "transparent" : "var(--border)"}`,
                  boxShadow: isActive ? "0 4px 14px rgba(12,12,14,0.08)" : "none",
                }}
              >
                {isActive && (
                  <motion.span
                    layoutId="builtForTab"
                    className="absolute inset-0 rounded-lg gradient-border"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <SIcon size={13} className="relative z-10" />
                <span className="relative z-10">{seg.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 14, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.985 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center rounded-xl p-8 md:p-12 card-3d"
          >
            {/* Left */}
            <div className="flex flex-col gap-5">
              <h3 className="text-xl md:text-2xl font-semibold leading-snug tracking-[-0.015em]" style={{ color: "var(--ink)" }}>
                {current.headline}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text)" }}>
                {current.body}
              </p>
              <ul className="flex flex-col gap-2.5 mt-1">
                {current.outcomes.map((o, oi) => (
                  <motion.li
                    key={o}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + oi * 0.07, duration: 0.4 }}
                    className="flex items-start gap-2.5 text-sm"
                    style={{ color: "var(--text-strong)" }}
                  >
                    <span
                      className="flex-shrink-0 mt-0.5 w-3.5 h-3.5 rounded-full flex items-center justify-center gradient-bg"
                    >
                      <svg width="8" height="8" viewBox="0 0 14 14" fill="none">
                        <path d="M3.5 7l2.3 2.3L10.5 4.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {o}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Right — phone mockup (kept dark by design — looks like a real phone screen) */}
            <div className="flex justify-center md:justify-end">
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="w-60 rounded-[1.75rem] overflow-hidden flex flex-col"
                style={{
                  background: "#0C0C0E",
                  border: "2px solid rgba(12,12,14,0.7)",
                  boxShadow: "0 30px 60px rgba(12,12,14,0.18), 0 12px 24px rgba(12,12,14,0.1), 0 2px 4px rgba(12,12,14,0.08)",
                }}
              >
                {/* Notch */}
                <div className="flex justify-center pt-3 pb-1">
                  <div className="w-16 h-1 rounded-full" style={{ background: "rgba(255,255,255,0.18)" }} />
                </div>

                {/* Chat header */}
                <div className="px-4 py-2.5 flex items-center gap-2" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <div className="w-6 h-6 rounded-full flex items-center justify-center gradient-bg">
                    <Icon size={11} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white text-[11px] font-semibold">Dynoz AI</p>
                    <p className="text-[9px]" style={{ color: "rgba(255,255,255,0.4)" }}>Always available</p>
                  </div>
                  <div className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-dot" />
                </div>

                {/* Messages — live looping chat, restarts on tab switch */}
                <LiveChat key={current.id} conversation={current.conversation} />
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
