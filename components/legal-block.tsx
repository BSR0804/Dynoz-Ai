"use client";

import { motion } from "framer-motion";
import TiltCard from "@/components/tilt-card";

const EASE = [0.16, 1, 0.3, 1] as const;

export function LegalBlock({ title, children, index = 0 }: { title: string; children: React.ReactNode; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: EASE }}
    >
      <TiltCard
        intensity={4}
        className="rounded-xl p-7 flex flex-col gap-3"
        style={{
          background: "var(--surface-card)",
          border: "2px solid #0C0C0E",
          boxShadow: "4px 4px 0px #0C0C0E, 8px 8px 0px rgba(12,12,14,0.2)",
        }}
      >
        <h2 className="text-base font-semibold" style={{ color: "var(--ink)" }}>{title}</h2>
        <div className="text-sm leading-relaxed" style={{ color: "var(--text)" }}>{children}</div>
      </TiltCard>
    </motion.div>
  );
}
