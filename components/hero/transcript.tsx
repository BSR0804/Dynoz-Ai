"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { transcriptSequences, type TranscriptLine } from "@/lib/transcript-data";

const CHAR_DELAY = 28;
const LINE_PAUSE = 900;
const SEQ_PAUSE = 1800;

type DisplayLine = TranscriptLine & { displayText: string; done: boolean };

export default function Transcript({
  onActiveChange,
}: {
  onActiveChange: (active: boolean) => void;
}) {
  const [seqIndex, setSeqIndex] = useState(0);
  const [lines, setLines] = useState<DisplayLine[]>([]);
  const [typing, setTyping] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;

    async function runSequence(sIdx: number) {
      const seq = transcriptSequences[sIdx];
      setLines([]);

      for (let li = 0; li < seq.length; li++) {
        if (cancelled) return;
        const line = seq[li];
        await delay(li === 0 ? 400 : LINE_PAUSE);
        if (cancelled) return;

        // Add empty line
        setLines((prev) => [
          ...prev,
          { ...line, displayText: "", done: false },
        ]);
        setTyping(true);
        onActiveChange(true);

        // Type it out
        for (let ci = 0; ci <= line.text.length; ci++) {
          if (cancelled) return;
          await delay(CHAR_DELAY);
          setLines((prev) =>
            prev.map((l, i) =>
              i === prev.length - 1
                ? { ...l, displayText: line.text.slice(0, ci) }
                : l
            )
          );
        }

        // Mark done
        setLines((prev) =>
          prev.map((l, i) =>
            i === prev.length - 1 ? { ...l, done: true } : l
          )
        );
        setTyping(false);
      }

      onActiveChange(false);
      await delay(SEQ_PAUSE);
      if (!cancelled) {
        setSeqIndex((s) => (s + 1) % transcriptSequences.length);
      }
    }

    runSequence(seqIndex);
    return () => { cancelled = true; };
  }, [seqIndex]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [lines]);

  const currentPhase = transcriptSequences[seqIndex][0].phase;

  return (
    <div className="flex flex-col gap-3 w-full">
      {/* Phase pill */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPhase}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-2"
        >
          <span
            className="text-xs font-mono px-2.5 py-1 rounded-full"
            style={{
              letterSpacing: "0.08em",
              color: "var(--text-muted)",
              border: "1px solid var(--border)",
              background: "rgba(12,12,14,0.03)",
            }}
          >
            {currentPhase.toUpperCase()}
          </span>
          <div className="h-px flex-1" style={{ background: "var(--hairline)" }} />
        </motion.div>
      </AnimatePresence>

      {/* Transcript lines */}
      <div
        ref={containerRef}
        className="flex flex-col gap-2 max-h-56 overflow-hidden"
      >
        <AnimatePresence initial={false}>
          {lines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-start gap-2.5"
            >
              {/* Lang tag */}
              <span
                className="mt-0.5 text-[10px] font-mono px-1.5 py-0.5 rounded border flex-shrink-0"
                style={{
                  borderColor:
                    line.speaker === "Dynoz"
                      ? "rgba(181,71,214,0.35)"
                      : "var(--border)",
                  color:
                    line.speaker === "Dynoz" ? "#B547D6" : "var(--text-muted)",
                  background:
                    line.speaker === "Dynoz"
                      ? "rgba(181,71,214,0.08)"
                      : "transparent",
                }}
              >
                {line.langLabel}
              </span>

              {/* Speaker + text */}
              <div className="flex flex-col gap-0.5">
                <span
                  className="text-[10px] font-mono tracking-wider"
                  style={{
                    color:
                      line.speaker === "Dynoz"
                        ? "#B547D6"
                        : "var(--text-faint)",
                  }}
                >
                  {line.speaker === "Dynoz" ? "DYNOZ" : "GUEST"}
                </span>
                <span
                  className="text-sm leading-relaxed"
                  style={{
                    color:
                      line.speaker === "Dynoz"
                        ? "var(--text-strong)"
                        : "var(--text)",
                  }}
                >
                  {line.displayText}
                  {!line.done && (
                    <span className="inline-block w-0.5 h-3.5 ml-0.5 align-middle animate-pulse" style={{ background: "var(--text)" }} />
                  )}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

function delay(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}
