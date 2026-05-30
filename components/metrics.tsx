"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

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
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setCount(target);
      return;
    }
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      // ease-out cubic for a satisfying settle
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(target * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, reduce]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

export default function Metrics() {
  return (
    <section className="py-24" style={{ background: "var(--paper-2)", borderTop: "1px solid var(--hairline)" }}>
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <p className="text-xs font-mono tracking-[0.16em] mb-3" style={{ color: "var(--text-muted)" }}>
            BY THE NUMBERS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em]" style={{ color: "var(--ink)" }}>
            Built for <span className="gradient-text">scale.</span>
          </h2>
        </motion.div>

        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-xl overflow-hidden"
          style={{ background: "var(--border)" }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-3 p-8 group transition-colors duration-200 hover:bg-black/[0.02]"
              style={{ background: "var(--surface-card)" }}
            >
              <span className="text-4xl md:text-5xl font-bold font-mono tracking-tight leading-none gradient-text">
                <CountUp target={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </span>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium" style={{ color: "var(--ink)" }}>{stat.label}</p>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{stat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
