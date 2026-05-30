"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import { CalendarCheck, Bell, MessageSquareHeart } from "lucide-react";

/* ────────────────────────────────────────────────────────────
   Journey Showcase — animated phone mockup with feature cards
   that emerge from BEHIND the phone as the section scrolls into
   view, and retreat back behind it on scroll-up. Scroll-linked
   (not a one-shot) so it replays every time, both directions.
   ──────────────────────────────────────────────────────────── */

type Msg = { from: "guest" | "dynoz"; text: string; lang?: string };

const SCRIPT: Msg[] = [
  { from: "guest", text: "Hi, do you have a room available?", lang: "EN" },
  { from: "dynoz", text: "Yes! A King for two nights — shall I book it?", lang: "EN" },
  { from: "guest", text: "Perfect, please book it.", lang: "EN" },
  { from: "dynoz", text: "Booked — Room 204. Confirmation sent.", lang: "EN" },
];

const PHASE_1 = {
  icon: CalendarCheck,
  number: "01",
  label: "Before Arrival",
  title: "Reservations & guest preparation",
  body: "Dynoz manages reservation inquiries, answers pre-stay questions, and prepares guests before they arrive — in their language, at any hour.",
  tags: [
    "Reservation handling & modifications",
    "Pre-stay preference collection",
    "Upsell room upgrades automatically",
    "Confirmation & itinerary delivery",
  ],
};

const PHASE_2 = {
  icon: Bell,
  number: "02",
  label: "During Stay",
  title: "Instant routing to every department",
  body: "AI agents answer guest requests in real time and route them instantly to the correct hotel department — housekeeping, F&B, concierge — with full context.",
  tags: [
    "24/7 multilingual guest support",
    "Real-time department routing",
    "PMS & system integration",
    "Personalised responses via guest history",
  ],
};

const PHASE_3 = {
  icon: MessageSquareHeart,
  number: "03",
  label: "After Checkout",
  title: "Feedback & service recovery",
  body: "After checkout, Dynoz handles feedback collection, resolves service issues, and builds loyalty — turning every stay into a relationship.",
  tags: [
    "Automated feedback collection",
    "Service recovery workflows",
    "Loyalty & return visit prompts",
  ],
};

function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-3 py-2.5">
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
  );
}

/* A feature card whose position/opacity/scale is driven by a shared
   scroll-progress MotionValue. It starts centered behind the phone
   (x:0, scale small, hidden) and slides out to its resting offset. */
function FeatureCard({
  icon: Icon,
  number,
  label,
  title,
  body,
  tags,
  progress,
  direction, // -1 = slide left, +1 = slide right
  spread,    // resting horizontal distance in px
  lift,      // resting vertical offset in px
  range,
}: {
  icon: typeof CalendarCheck;
  number: string;
  label: string;
  title: string;
  body: string;
  tags: string[];
  progress: MotionValue<number>;
  direction: number;
  spread: number;
  lift: number;
  range: [number, number]; // slice of overall progress this card animates within
}) {
  const [start, end] = range;
  // Within [start, end] the card goes from hidden-behind-phone → fully out.
  const x = useTransform(progress, [start, end], [0, direction * spread], { clamp: true });
  const y = useTransform(progress, [start, end], [40, lift], { clamp: true });
  const opacity = useTransform(progress, [start, start + (end - start) * 0.25, end], [0, 0.2, 1], { clamp: true });
  const scale = useTransform(progress, [start, end], [0.7, 1], { clamp: true });

  return (
    <motion.div style={{ x, y, opacity, scale }} className="w-[300px] max-w-full">
      <div
        className="rounded-2xl p-5 flex flex-col gap-3"
        style={{
          background: "#ffffff",
          border: "2px solid #0C0C0E",
          boxShadow: "4px 4px 0px #0C0C0E, 8px 8px 0px rgba(12,12,14,0.18)",
        }}
      >
        {/* Number + label */}
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold font-mono tracking-tight gradient-text leading-none">{number}</span>
          <span
            className="text-[10px] font-mono tracking-wider px-2 py-1 rounded-md gradient-border"
            style={{ color: "var(--text-strong)" }}
          >
            {label}
          </span>
        </div>

        {/* Title */}
        <div className="flex items-center gap-2.5 pt-0.5">
          <span
            className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ background: "var(--brand-grad-soft)", border: "1px solid var(--border)" }}
          >
            <Icon size={15} style={{ color: "#E94B8A" }} />
          </span>
          <h3 className="text-sm font-semibold leading-tight" style={{ color: "var(--ink)" }}>
            {title}
          </h3>
        </div>

        <p className="text-[12.5px] leading-relaxed" style={{ color: "var(--text)" }}>
          {body}
        </p>

        {/* Feature bullets */}
        <ul className="flex flex-col gap-1.5 pt-2 mt-1" style={{ borderTop: "1px solid var(--hairline)" }}>
          {tags.map((t) => (
            <li key={t} className="flex items-start gap-2 text-[12px]" style={{ color: "var(--text)" }}>
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 gradient-bg" />
              {t}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

function Pill({
  children,
  className,
  progress,
  direction,
  spread,
  lift,
  range,
}: {
  children: React.ReactNode;
  className?: string;
  progress: MotionValue<number>;
  direction: number;
  spread: number;
  lift: number;
  range: [number, number];
}) {
  const [start, end] = range;
  const x = useTransform(progress, [start, end], [0, direction * spread], { clamp: true });
  const y = useTransform(progress, [start, end], [0, lift], { clamp: true });
  const opacity = useTransform(progress, [start, start + (end - start) * 0.4, end], [0, 0, 1], { clamp: true });
  const scale = useTransform(progress, [start, end], [0.6, 1], { clamp: true });

  return (
    <motion.div style={{ x, y, opacity, scale }} className={`absolute z-10 ${className ?? ""}`}>
      <div
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-medium whitespace-nowrap"
        style={{
          background: "rgba(255,255,255,0.9)",
          border: "1px solid var(--border)",
          boxShadow: "0 8px 24px rgba(12,12,14,0.12)",
          backdropFilter: "blur(10px)",
          color: "var(--ink)",
        }}
      >
        {children}
      </div>
    </motion.div>
  );
}

function PhoneScreen() {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState<number>(0);
  const [typing, setTyping] = useState(false);
  const startedRef = useRef(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !startedRef.current) {
          startedRef.current = true;
          runSequence();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  function runSequence() {
    let i = 0;
    const tick = () => {
      if (i >= SCRIPT.length) {
        setTimeout(() => {
          setVisible(0);
          i = 0;
          setTimeout(tick, 700);
        }, 2600);
        return;
      }
      const isDynoz = SCRIPT[i].from === "dynoz";
      if (isDynoz) {
        setTyping(true);
        setTimeout(() => {
          setTyping(false);
          setVisible((v) => v + 1);
          i++;
          setTimeout(tick, 900);
        }, 1100);
      } else {
        setVisible((v) => v + 1);
        i++;
        setTimeout(tick, 1100);
      }
    };
    tick();
  }

  // Mouse-tilt: rotate the phone in 3D toward the cursor, like the cards.
  const tiltRef = useRef<HTMLDivElement>(null);
  function handleTilt(e: React.MouseEvent<HTMLDivElement>) {
    if (reduce) return;
    const el = tiltRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `rotateX(${-py * 12}deg) rotateY(${px * 12}deg) scale(1.03)`;
  }
  function resetTilt() {
    const el = tiltRef.current;
    if (!el) return;
    el.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  }

  return (
    <div ref={wrapRef} className="relative z-20" style={{ perspective: 1200 }}>
      {/* Glow behind phone */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[420px] rounded-full opacity-40"
        style={{ background: "var(--brand-grad)", filter: "blur(70px)" }}
      />

      <motion.div
        animate={reduce ? {} : { y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-20"
        style={{ transformStyle: "preserve-3d" }}
      >
      <div
        ref={tiltRef}
        onMouseMove={handleTilt}
        onMouseLeave={resetTilt}
        className="w-[266px] rounded-[2.4rem] p-2.5"
        style={{
          background: "linear-gradient(160deg, #1a1a1f, #0c0c0e)",
          boxShadow:
            "0 40px 80px rgba(12,12,14,0.28), 0 16px 32px rgba(12,12,14,0.16), inset 0 1px 1px rgba(255,255,255,0.08)",
          transition: "transform 0.18s ease-out",
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        <div
          className="relative rounded-[1.9rem] overflow-hidden flex flex-col h-[480px]"
          style={{ background: "linear-gradient(180deg, #14141a 0%, #0c0c0e 100%)" }}
        >
          {/* Status bar / notch */}
          <div className="relative flex items-center justify-between px-5 pt-3 pb-1">
            <span className="text-[10px] font-mono" style={{ color: "rgba(255,255,255,0.5)" }}>9:41</span>
            <div className="absolute left-1/2 -translate-x-1/2 top-2 w-20 h-5 rounded-full" style={{ background: "#000" }} />
            <div className="flex items-center gap-1">
              <span className="w-3 h-2 rounded-[2px]" style={{ background: "rgba(255,255,255,0.4)" }} />
              <span className="w-3.5 h-2 rounded-[2px]" style={{ background: "rgba(255,255,255,0.4)" }} />
            </div>
          </div>

          {/* Chat header */}
          <div className="px-4 py-3 flex items-center gap-2.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="w-8 h-8 rounded-full flex items-center justify-center gradient-bg">
              <span className="text-white text-xs font-bold">D</span>
            </div>
            <div className="flex flex-col">
              <p className="text-white text-xs font-semibold leading-tight">Dynoz · Front Desk</p>
              <p className="text-[9px] flex items-center gap-1" style={{ color: "rgba(255,255,255,0.4)" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block pulse-dot" />
                online · replies instantly
              </p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 flex flex-col gap-2 px-3.5 py-4 overflow-hidden">
            {SCRIPT.slice(0, visible).map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className={`flex ${m.from === "guest" ? "justify-start" : "justify-end"}`}
              >
                <div className="flex flex-col gap-1 max-w-[82%]">
                  {m.lang && (
                    <span
                      className={`text-[8px] font-mono ${m.from === "guest" ? "self-start" : "self-end"}`}
                      style={{ color: "rgba(255,255,255,0.3)" }}
                    >
                      {m.from === "guest" ? "GUEST" : "DYNOZ"} · {m.lang}
                    </span>
                  )}
                  <div
                    className="px-3 py-2 rounded-2xl text-[11px] leading-relaxed"
                    style={
                      m.from === "dynoz"
                        ? {
                            background:
                              "linear-gradient(135deg, rgba(255,122,61,0.9), rgba(233,75,138,0.9), rgba(181,71,214,0.9))",
                            color: "#fff",
                            borderBottomRightRadius: 6,
                          }
                        : {
                            background: "rgba(255,255,255,0.1)",
                            color: "rgba(255,255,255,0.85)",
                            borderBottomLeftRadius: 6,
                          }
                    }
                  >
                    {m.text}
                  </div>
                </div>
              </motion.div>
            ))}

            {typing && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-end"
              >
                <div
                  className="rounded-2xl"
                  style={{ background: "rgba(255,255,255,0.1)", borderBottomRightRadius: 6 }}
                >
                  <TypingDots />
                </div>
              </motion.div>
            )}
          </div>

          {/* Input bar */}
          <div className="px-3 pb-4 pt-2">
            <div
              className="flex items-center gap-2 px-3 py-2.5 rounded-full"
              style={{ background: "rgba(255,255,255,0.08)" }}
            >
              <span className="text-[11px] flex-1" style={{ color: "rgba(255,255,255,0.35)" }}>Message</span>
              <span className="w-6 h-6 rounded-full flex items-center justify-center gradient-bg">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
      </motion.div>
    </div>
  );
}

export default function JourneyShowcase() {
  const reduce = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  // The tall outer container is pinned; scroll runs from when its top hits
  // the viewport top until its bottom does. Progress 0 → 1 across that range,
  // and reverses cleanly when scrolling back up.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth so motion feels physical, not jittery.
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.4 });

  // Each element animates within its OWN slice of progress, so they emerge
  // strictly one after another (and retract one after another in reverse).
  // [start, end] windows — sequential, slightly overlapping for smoothness.
  const R = {
    card1: [0.05, 0.30] as [number, number],
    pill1: [0.18, 0.34] as [number, number],
    card2: [0.32, 0.57] as [number, number],
    pill2: [0.45, 0.61] as [number, number],
    card3: [0.59, 0.84] as [number, number],
    pill3: [0.72, 0.92] as [number, number],
  };

  return (
    <section id="journey" style={{ background: "var(--paper)" }}>
      {/* Tall scroll driver — its height defines how long the wheel "sticks" */}
      <div ref={containerRef} className="relative" style={{ height: reduce ? "auto" : "260vh" }}>
        {/* Pinned stage */}
        <div className="lg:sticky lg:top-0 lg:h-screen flex flex-col justify-center py-24 lg:py-0 overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 w-full">

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mb-12 max-w-xl"
            >
              <p className="text-xs font-mono tracking-[0.16em] mb-3" style={{ color: "var(--text-muted)" }}>
                THE FULL GUEST JOURNEY
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-[-0.02em]" style={{ color: "var(--ink)" }}>
                One operating layer
                <span className="gradient-text block">for every interaction.</span>
              </h2>
            </motion.div>

            {/* Stage — phone centered, cards emerge one by one from behind it */}
            <div className="relative flex items-center justify-center min-h-[520px]">
              {/* Phone — on top so cards slide out from under it */}
              <PhoneScreen />

              {!reduce && (
                <>
                  <div className="absolute left-1/2 top-[4%] -translate-x-1/2 z-10 hidden lg:block">
                    <FeatureCard {...PHASE_1} progress={progress} direction={-1} spread={370} lift={-30} range={R.card1} />
                  </div>
                  <div className="absolute left-1/2 top-[28%] -translate-x-1/2 z-10 hidden lg:block">
                    <FeatureCard {...PHASE_2} progress={progress} direction={1} spread={380} lift={0} range={R.card2} />
                  </div>
                  <div className="absolute left-1/2 top-[58%] -translate-x-1/2 z-10 hidden lg:block">
                    <FeatureCard {...PHASE_3} progress={progress} direction={-1} spread={390} lift={40} range={R.card3} />
                  </div>
                </>
              )}
            </div>

            {/* Mobile: stacked phase cards (no scroll choreography needed) */}
            <div className="mt-12 flex flex-col gap-5 lg:hidden">
              {[PHASE_1, PHASE_2, PHASE_3].map((f) => (
                <div
                  key={f.title}
                  className="rounded-2xl p-5 flex flex-col gap-3"
                  style={{
                    background: "#ffffff",
                    border: "2px solid #0C0C0E",
                    boxShadow: "4px 4px 0px #0C0C0E, 8px 8px 0px rgba(12,12,14,0.18)",
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold font-mono tracking-tight gradient-text leading-none">{f.number}</span>
                    <span className="text-[10px] font-mono tracking-wider px-2 py-1 rounded-md gradient-border" style={{ color: "var(--text-strong)" }}>{f.label}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "var(--brand-grad-soft)", border: "1px solid var(--border)" }}
                    >
                      <f.icon size={15} style={{ color: "#E94B8A" }} />
                    </span>
                    <h3 className="text-sm font-semibold leading-tight" style={{ color: "var(--ink)" }}>{f.title}</h3>
                  </div>
                  <p className="text-[12.5px] leading-relaxed" style={{ color: "var(--text)" }}>{f.body}</p>
                  <ul className="flex flex-col gap-1.5 pt-2 mt-1" style={{ borderTop: "1px solid var(--hairline)" }}>
                    {f.tags.map((t) => (
                      <li key={t} className="flex items-start gap-2 text-[12px]" style={{ color: "var(--text)" }}>
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 gradient-bg" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
