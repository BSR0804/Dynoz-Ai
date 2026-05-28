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
        background: "#FAFAF8",
        borderTop: "1px solid rgba(12,12,14,0.07)",
        borderBottom: "1px solid rgba(12,12,14,0.07)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 mb-6">
        <p className="text-center text-[11px] font-mono tracking-[0.18em]" style={{ color: "rgba(12,12,14,0.52)" }}>
          TRUSTED BY HOSPITALITY TEAMS WORLDWIDE
        </p>
      </div>
      <div className="relative flex overflow-hidden">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {doubled.map((name, i) => (
            <span
              key={i}
              className="text-sm font-semibold tracking-wide flex-shrink-0 px-4"
              style={{ color: "rgba(12,12,14,0.7)" }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
