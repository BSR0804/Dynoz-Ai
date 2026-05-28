"use client";

import { useEffect, useRef, useState } from "react";
import { Phone, Bot, Lightbulb, Network, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Guest calls",
    desc: "A guest calls any time of day, in any language. Dynoz answers instantly — no hold music, no wait time.",
    tags: ["Inbound voice", "Any language", "Zero wait"],
    accent: "#FF7A3D",
  },
  {
    number: "02",
    icon: Bot,
    title: "AI agent responds",
    desc: "The multilingual voice agent identifies the guest, their language, and their history within the first two seconds.",
    tags: ["Guest identified", "Language detected", "History loaded"],
    accent: "#E94B8A",
  },
  {
    number: "03",
    icon: Lightbulb,
    title: "Intent identified",
    desc: "The agent understands what the guest needs — booking, service request, complaint, or feedback — and acts.",
    tags: ["Booking", "Service request", "Complaint", "Feedback"],
    accent: "#B547D6",
  },
  {
    number: "04",
    icon: Network,
    title: "Systems connected",
    desc: "Dynoz hits your PMS, CRM, housekeeping, and F&B systems in real time to fulfil the request end-to-end.",
    tags: ["Opera PMS", "CRM", "Housekeeping", "F&B"],
    accent: "#7B5FFF",
  },
  {
    number: "05",
    icon: CheckCircle2,
    title: "Resolved & logged",
    desc: "The request is completed, the guest confirmed, and every interaction logged for your team's review.",
    tags: ["Guest confirmed", "Request closed", "Interaction logged"],
    accent: "#34D399",
  },
];

const systems = ["Opera PMS", "Mews", "Cloudbeds", "Salesforce CRM", "Apaleo", "HotSOS"];

export default function HowItWorks() {
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeStep, setActiveStep] = useState(-1);

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
      style={{ background: "#0C0C0E", borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16 max-w-xl">
          <p className="text-xs font-mono tracking-[0.16em] mb-3" style={{ color: "rgba(255,255,255,0.28)" }}>
            HOW IT WORKS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-[-0.02em] leading-tight">
            From first ring to{" "}
            <span style={{ color: "rgba(255,255,255,0.35)" }}>full resolution.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-16 items-start">

          {/* Steps */}
          <div className="flex flex-col">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isActive = i <= activeStep;
              const isCurrent = i === activeStep;
              const isLast = i === steps.length - 1;

              return (
                <div
                  key={step.number}
                  ref={(el) => { stepsRef.current[i] = el; }}
                  className="relative flex gap-6"
                >
                  {/* Left spine */}
                  <div className="relative flex flex-col items-center flex-shrink-0">
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center z-10 transition-all duration-500"
                      style={{
                        background: isActive ? `${step.accent}18` : "rgba(255,255,255,0.04)",
                        border: `1.5px solid ${isActive ? `${step.accent}80` : "rgba(255,255,255,0.07)"}`,
                        boxShadow: isCurrent ? `0 0 16px ${step.accent}55` : "none",
                      }}
                    >
                      <Icon
                        size={16}
                        style={{
                          color: isActive ? step.accent : "rgba(255,255,255,0.18)",
                          transition: "color 0.4s",
                        }}
                      />
                    </div>

                    {!isLast && (
                      <div
                        className="w-px flex-1 my-1.5 overflow-hidden"
                        style={{ background: "rgba(255,255,255,0.05)", minHeight: "80px" }}
                      >
                        <div
                          className="w-full transition-all duration-600"
                          style={{
                            background: step.accent,
                            height: isActive ? "100%" : "0%",
                          }}
                        />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div
                    className="flex flex-col gap-2.5 pb-14 last:pb-0 pt-1.5 transition-all duration-500"
                    style={{ opacity: isActive ? 1 : 0.28 }}
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className="text-[10px] font-mono tracking-widest transition-colors duration-400"
                        style={{ color: isActive ? step.accent : "rgba(255,255,255,0.18)" }}
                      >
                        {step.number}
                      </span>
                      <h3
                        className="font-semibold text-sm md:text-base transition-colors duration-400"
                        style={{ color: isActive ? "#ffffff" : "rgba(255,255,255,0.28)" }}
                      >
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed max-w-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right — integrations */}
          <div className="lg:sticky lg:top-28">
            <div
              className="rounded-xl p-6 flex flex-col gap-5"
              style={{
                background: "#141418",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <p className="text-[11px] font-mono tracking-[0.14em]" style={{ color: "rgba(255,255,255,0.28)" }}>
                INTEGRATES WITH
              </p>
              <div className="flex flex-col gap-2">
                {systems.map((sys) => (
                  <div
                    key={sys}
                    className="flex items-center justify-between px-3.5 py-2.5 rounded-lg transition-colors duration-150 cursor-default group"
                    style={{ border: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <span className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.5)" }}>
                      {sys}
                    </span>
                    <span
                      className="text-[10px] font-mono px-2 py-0.5 rounded"
                      style={{
                        color: "rgba(52,211,153,0.7)",
                        background: "rgba(52,211,153,0.08)",
                        border: "1px solid rgba(52,211,153,0.12)",
                      }}
                    >
                      live
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
                + custom integrations available
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
