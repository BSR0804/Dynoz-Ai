"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CtaBand() {
  return (
    <section className="py-24 md:py-32" style={{ background: "var(--paper)", borderTop: "1px solid var(--hairline)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-2xl overflow-hidden px-10 md:px-20 py-16 md:py-24 flex flex-col items-start gap-8"
          style={{
            background: "var(--surface-card)",
            border: "2px solid var(--ink)",
            boxShadow: "var(--card-shadow)",
          }}
        >
          <div className="relative z-10 max-w-2xl flex flex-col gap-6">
            <p className="text-xs font-mono tracking-[0.16em]" style={{ color: "var(--text-muted)" }}>
              GET STARTED
            </p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-[-0.025em]" style={{ color: "var(--ink)" }}>
              Ready to make every<br />
              <span className="brand-sweep">guest call effortless?</span>
            </h2>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: "var(--text)" }}>
              Our mission is to transform how the industry serves guests through AI. Let&apos;s build seamless service, together.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap gap-3">
            <a
              href="/contact"
              className="btn-grad flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold text-sm"
            >
              Request a Demo <ArrowRight size={14} />
            </a>
            <a
              href="/contact"
              className="flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200 hover:bg-black/[0.04]"
              style={{
                color: "var(--text)",
                border: "1px solid var(--border-strong)",
              }}
            >
              Talk to us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
