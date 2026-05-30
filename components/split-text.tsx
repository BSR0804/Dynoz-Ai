"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SplitTextProps {
  children: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  tag?: "h1" | "h2" | "h3" | "p" | "span";
}

export default function SplitText({
  children,
  className,
  style,
  delay = 0,
  tag = "span",
}: SplitTextProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const words = children.split(" ");
  const Tag = tag as any;

  return (
    <Tag ref={ref} className={className} style={{ ...style, overflow: "hidden", display: "block" }}>
      {words.map((word, i) => (
        <span key={i} style={{ display: "inline-block", overflow: "hidden", marginRight: "0.28em" }}>
          <motion.span
            style={{ display: "inline-block" }}
            initial={{ y: "110%", opacity: 0, rotateX: 40 }}
            animate={inView ? { y: "0%", opacity: 1, rotateX: 0 } : {}}
            transition={{
              duration: 0.65,
              delay: delay + i * 0.07,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
