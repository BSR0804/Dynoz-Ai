"use client";

const logos = [
  "Maison Atlas",
  "Solace Stays",
  "Verdant Group",
  "Northwind Travel",
  "Halcyon Hotels",
  "Mirador Resorts",
  "Azure Hospitality",
  "Crest & Co.",
];

export default function TrustStrip() {
  const doubled = [...logos, ...logos];

  return (
    <section
      className="py-10 overflow-hidden"
      style={{
        background: "var(--paper-2)",
        borderTop: "1px solid var(--hairline)",
        borderBottom: "1px solid var(--hairline)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 mb-6">
        <p className="text-center text-[11px] font-mono tracking-[0.18em]" style={{ color: "var(--text-muted)" }}>
          TRUSTED BY HOSPITALITY TEAMS WORLDWIDE
        </p>
      </div>
      {/* Marquee with edge fade so the loop seam is invisible */}
      <div
        className="relative flex overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent 0, black 6%, black 94%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0, black 6%, black 94%, transparent 100%)",
        }}
      >
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {doubled.map((name, i) => (
            <span
              key={i}
              className="text-sm font-semibold tracking-wide flex-shrink-0 px-4 transition-colors duration-300 hover:text-[#B547D6]"
              style={{ color: "var(--text-strong)" }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
