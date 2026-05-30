"use client";

/* ────────────────────────────────────────────────────────────
   Language Ribbon — two-row infinite marquee.
   Top row scrolls right→left, bottom row left→right.
   The two rows use completely DIFFERENT language sets so no
   language is ever duplicated within or across the rows.
   Brand-themed: gradient-filled accent chips interleaved with
   outline chips. Hover any chip to magnify it.
   ──────────────────────────────────────────────────────────── */

// Top row languages (set A) — no overlap with set B
const ROW_TOP = [
  "한국어", "Русский", "Türkçe", "ภาษาไทย", "Bahasa",
  "Nederlands", "English", "Español", "中文", "العربية",
  "Français", "हिन्दी", "Deutsch", "日本語",
];

// Bottom row languages (set B) — all distinct from set A
const ROW_BOTTOM = [
  "Português", "Italiano", "Polski", "Svenska", "Čeština",
  "Ελληνικά", "Tiếng Việt", "Українська", "עברית", "Magyar",
  "Suomi", "Dansk", "Română", "Bahasa Melayu",
];

// Which indexes get the filled gradient treatment (visual rhythm)
const isAccent = (i: number) => i % 4 === 1 || i % 7 === 3;

function Chip({ label, accent }: { label: string; accent: boolean }) {
  return (
    <span
      className="lang-chip flex-shrink-0 select-none rounded-full px-5 py-2 text-sm font-semibold whitespace-nowrap cursor-default transition-transform duration-200 ease-out"
      style={
        accent
          ? {
              background: "var(--brand-grad)",
              color: "#fff",
              boxShadow: "0 6px 18px rgba(233,75,138,0.22)",
            }
          : {
              background: "rgba(255,255,255,0.85)",
              color: "var(--ink)",
              border: "1px solid var(--border)",
              boxShadow: "0 2px 8px rgba(12,12,14,0.05)",
              backdropFilter: "blur(8px)",
            }
      }
    >
      {label}
    </span>
  );
}

function Row({ items, direction }: { items: string[]; direction: "rtl" | "ltr" }) {
  // Duplicate the set so the -50% translate loops seamlessly
  const doubled = [...items, ...items];
  return (
    <div className="relative flex overflow-hidden">
      <div
        className={`flex gap-3 py-1.5 whitespace-nowrap ${
          direction === "rtl" ? "lang-track-rtl" : "lang-track-ltr"
        }`}
      >
        {doubled.map((label, i) => (
          <Chip key={`${label}-${i}`} label={label} accent={isAccent(i % items.length)} />
        ))}
      </div>
    </div>
  );
}

export default function LanguageRibbon() {
  return (
    <section
      aria-label="Languages supported"
      className="lang-ribbon relative w-full overflow-hidden py-4"
      style={{
        background: "rgba(255,255,255,0.5)",
        borderBottom: "1px solid var(--hairline)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        maskImage: "linear-gradient(to right, transparent 0, black 5%, black 95%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to right, transparent 0, black 5%, black 95%, transparent 100%)",
      }}
    >
      <div className="flex flex-col gap-3">
        <Row items={ROW_TOP} direction="rtl" />
        <Row items={ROW_BOTTOM} direction="ltr" />
      </div>
    </section>
  );
}
