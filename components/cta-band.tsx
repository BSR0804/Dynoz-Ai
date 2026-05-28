import { ArrowRight } from "lucide-react";

export default function CtaBand() {
  return (
    <section className="py-24 md:py-32" style={{ background: "#FAFAF8", borderTop: "1px solid rgba(12,12,14,0.06)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div
          className="relative rounded-2xl overflow-hidden px-10 md:px-20 py-16 md:py-24 flex flex-col items-start gap-8"
          style={{
            background: "#0C0C0E",
            border: "2px solid #0C0C0E",
            boxShadow: "4px 4px 0px #0C0C0E, 8px 8px 0px rgba(12,12,14,0.4), 14px 14px 0px rgba(12,12,14,0.15)",
          }}
        >
          {/* Single precise blue glow */}
          <div
            aria-hidden
            className="absolute top-0 left-0 w-[400px] h-[400px] pointer-events-none"
            style={{
              background: "radial-gradient(circle at top left, rgba(26,86,255,0.18), transparent 65%)",
            }}
          />

          <div className="relative z-10 max-w-2xl flex flex-col gap-6">
            <p className="text-xs font-mono tracking-[0.16em]" style={{ color: "rgba(255,255,255,0.28)" }}>
              GET STARTED
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-[-0.025em]">
              Ready to make every<br />guest call effortless?
            </h2>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
              Our mission is to transform how the industry serves guests through AI. Let's build seamless service, together.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap gap-3">
            <a
              href="/contact"
              className="flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold text-sm transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
              style={{ background: "#1A56FF" }}
            >
              Request a Demo <ArrowRight size={14} />
            </a>
            <a
              href="/contact"
              className="flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200 hover:bg-white/5"
              style={{
                color: "rgba(255,255,255,0.5)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              Talk to us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
