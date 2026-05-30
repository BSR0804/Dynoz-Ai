"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Phone, Bot, Lightbulb, Network, CheckCircle2 } from "lucide-react";
import SplitText from "@/components/split-text";
import TiltCard from "@/components/tilt-card";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Guest calls",
    desc: "A guest calls any time of day, in any language. Dynoz answers instantly — no hold music, no wait time.",
    accent: "#FF7A3D",
  },
  {
    number: "02",
    icon: Bot,
    title: "AI agent responds",
    desc: "The multilingual voice agent identifies the guest, their language, and their history within the first two seconds.",
    accent: "#E94B8A",
  },
  {
    number: "03",
    icon: Lightbulb,
    title: "Intent identified",
    desc: "The agent understands what the guest needs — booking, service request, complaint, or feedback — and acts.",
    accent: "#B547D6",
  },
  {
    number: "04",
    icon: Network,
    title: "Systems connected",
    desc: "Dynoz hits your PMS, CRM, housekeeping, and F&B systems in real time to fulfil the request end-to-end.",
    accent: "#7B5FFF",
  },
  {
    number: "05",
    icon: CheckCircle2,
    title: "Resolved & logged",
    desc: "The request is completed, the guest confirmed, and every interaction logged for your team's review.",
    accent: "#34D399",
  },
];

const systems = ["Opera PMS", "Mews", "Cloudbeds", "Salesforce CRM", "Apaleo", "HotSOS"];

export default function HowItWorks() {
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeStep, setActiveStep] = useState(-1);
  const reduce = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      const windowMid = window.scrollY + window.innerHeight * 0.55;
      let active = -1;
      stepsRef.current.filter(Boolean).forEach((el, i) => {
        const rect = el!.getBoundingClientRect();
        const elCenter = window.scrollY + rect.top + rect.height / 2;
        if (windowMid >= elCenter) active = i;
      });
      setActiveStep(active);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="how-it-works"
      className="py-24 md:py-32"
      style={{ background: "var(--paper-2)", borderTop: "1px solid var(--hairline)" }}
    >
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
            HOW IT WORKS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] leading-tight" style={{ color: "var(--ink)" }}>
            <SplitText delay={0.1}>From first ring to</SplitText>
            <span className="gradient-text block">full resolution.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-16 items-start">

          {/* Steps */}
          <div className="flex flex-col">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isActive = i <= activeStep;
              const isCurrent = i === activeStep;
              const isLast = i === steps.length - 1;

              return (
                <motion.div
                  key={step.number}
                  ref={(el) => { stepsRef.current[i] = el; }}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.55,
                    delay: reduce ? 0 : i * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative flex gap-6"
                >
                  {/* Left spine */}
                  <div className="relative flex flex-col items-center flex-shrink-0">
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center z-10 transition-all duration-500"
                      style={{
                        background: isActive ? `${step.accent}1A` : "rgba(12,12,14,0.04)",
                        border: `1.5px solid ${isActive ? `${step.accent}80` : "var(--border)"}`,
                        boxShadow: isCurrent ? `0 0 18px ${step.accent}55` : "none",
                      }}
                    >
                      <Icon
                        size={16}
                        style={{
                          color: isActive ? step.accent : "var(--text-faint)",
                          transition: "color 0.4s",
                        }}
                      />
                    </div>

                    {!isLast && (
                      <div
                        className="w-px flex-1 my-1.5 overflow-hidden"
                        style={{ background: "var(--hairline)", minHeight: "80px" }}
                      >
                        <div
                          className="w-full transition-all duration-700 ease-out"
                          style={{
                            background: `linear-gradient(to bottom, ${step.accent}, ${steps[i + 1]?.accent || step.accent})`,
                            height: isActive ? "100%" : "0%",
                          }}
                        />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div
                    className="flex flex-col gap-2.5 pb-14 last:pb-0 pt-1.5 transition-all duration-500"
                    style={{ opacity: isActive ? 1 : 0.45 }}
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className="text-[10px] font-mono tracking-widest transition-colors duration-400"
                        style={{ color: isActive ? step.accent : "var(--text-faint)" }}
                      >
                        {step.number}
                      </span>
                      <h3
                        className="font-semibold text-sm md:text-base transition-colors duration-400"
                        style={{ color: isActive ? "var(--ink)" : "var(--text-faint)" }}
                      >
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed max-w-sm" style={{ color: "var(--text)" }}>
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right — integrations */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:sticky lg:top-28"
          >
            <div
              className="rounded-xl p-6 flex flex-col gap-5"
              style={{
                background: "rgba(12,12,14,0.07)",
                border: "1px solid rgba(12,12,14,0.18)",
                boxShadow: "var(--card-shadow-soft)",
              }}
            >
              <p className="text-[11px] font-mono tracking-[0.14em]" style={{ color: "var(--text-strong)" }}>
                INTEGRATES WITH
              </p>
              <div className="flex flex-col gap-2">
                {systems.map((sys, i) => (
                  <motion.div
                    key={sys}
                    initial={{ opacity: 0, x: 8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: reduce ? 0 : i * 0.06, duration: 0.4 }}
                    className="flex items-center justify-between px-3.5 py-2.5 rounded-lg transition-all duration-200 cursor-default group hover:bg-black/[0.06]"
                    style={{ border: "1px solid rgba(12,12,14,0.12)", background: "rgba(12,12,14,0.04)" }}
                  >
                    <span className="text-sm font-medium" style={{ color: "var(--ink)" }}>
                      {sys}
                    </span>
                    <span
                      className="text-[10px] font-mono px-2 py-0.5 rounded flex items-center gap-1.5"
                      style={{
                        color: "rgb(5,150,105)",
                        background: "rgba(52,211,153,0.12)",
                        border: "1px solid rgba(52,211,153,0.3)",
                      }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 pulse-dot" />
                      live
                    </span>
                  </motion.div>
                ))}
              </div>
              <p className="text-xs font-medium" style={{ color: "var(--text)" }}>
                + custom integrations available
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
