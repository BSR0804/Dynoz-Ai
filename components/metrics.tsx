"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const stats = [
  { value: 24, suffix: "/7", label: "Always-on coverage", desc: "No shift changes, no downtime" },
  { value: 40, suffix: "+", label: "Languages supported", desc: "Your guests speak, Dynoz understands" },
  { value: 2, prefix: "<", suffix: "s", label: "Response latency", desc: "First response under two seconds" },
  { value: 60, suffix: "%", label: "Ops load reduced", desc: "Fewer repetitive calls to your team" },
];

function CountUp({ target, prefix = "", suffix = "" }: { target: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView) return;
    const duration = 1000;
    const steps = 36;
    const inc = target / steps;
    let cur = 0;
    const t = setInterval(() => {
      cur = Math.min(cur + inc, target);
      setCount(Math.floor(cur));
      if (cur >= target) clearInterval(t);
    }, duration / steps);
    return () => clearInterval(t);
  }, [inView, target]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

export default function Metrics() {
  return (
    <section className="py-24" style={{ background: "#0C0C0E", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-14">
          <p className="text-xs font-mono tracking-[0.16em] mb-3" style={{ color: "rgba(255,255,255,0.28)" }}>
            BY THE NUMBERS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-[-0.02em]">
            Built for scale.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col gap-3 p-8"
              style={{ background: "#0C0C0E" }}
            >
              <span className="text-4xl md:text-5xl font-bold font-mono text-white tracking-tight leading-none">
                <CountUp target={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </span>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium text-white">{stat.label}</p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.32)" }}>{stat.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
