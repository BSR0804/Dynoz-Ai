"use client";

import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const principles = [
  { title: "Trust",       desc: "Enterprise-grade reliability and transparency, built into every layer of our platform." },
  { title: "Innovation",  desc: "Continuous improvement focused on making customer engagement seamless and effortless." },
  { title: "Partnership", desc: "Long-term partnerships focused on operational impact and real outcomes for your guests." },
];

const segments = [
  { label: "Hotels & Stays",   desc: "Automates front desk calls, concierge requests, and in-stay interactions with real-time PMS integration to execute, not just respond." },
  { label: "Travel Platforms", desc: "Embed Dynoz as a native AI agent in your platform, powering voice and chat across support, bookings, and service workflows." },
  { label: "Airlines",         desc: "Delivers always-on voice and chat support across traveller interactions — from status queries and rebooking to FAQs, in the traveller's language." },
];

const journey = [
  { phase: "Before Arrival", headline: "Reservations & preparation",  body: "Dynoz manages reservation inquiries and guest preparation before they arrive — in their language, at any hour." },
  { phase: "During Stay",    headline: "Instant routing & response",  body: "AI agents answer guest requests in real time and route them instantly to the correct hotel department with full context." },
  { phase: "After Checkout", headline: "Feedback & recovery",         body: "Dynoz handles feedback collection, service recovery workflows, and loyalty building — turning every stay into a relationship." },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function AboutPage() {
  return (
    <>
      <Nav />

      {/* ── Hero ── */}
      <section className="relative min-h-[56vh] flex flex-col justify-center overflow-hidden pt-16" style={{ background: "var(--paper)" }}>
        {/* Blobs */}
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute blob-a -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-[0.18]"
            style={{ background: "radial-gradient(circle, #FF7A3D 0%, transparent 60%)", filter: "blur(80px)" }} />
          <div className="absolute blob-b top-0 right-[-120px] w-[560px] h-[560px] rounded-full opacity-[0.16]"
            style={{ background: "radial-gradient(circle, #B547D6 0%, transparent 60%)", filter: "blur(90px)" }} />
          <div className="absolute inset-0 grid-drift opacity-50" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-28">
          <motion.div className="flex flex-col gap-5 max-w-2xl"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
            <span className="inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.14em] uppercase px-3 py-1.5 rounded-md self-start"
              style={{ color: "var(--text-muted)", background: "rgba(12,12,14,0.04)", border: "1px solid var(--border)" }}>
              ABOUT DYNOZ
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight tracking-[-0.028em]" style={{ color: "var(--ink)" }}>
              Every customer.{" "}
              <span className="gradient-text">Seamlessly attended.</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: "var(--text)" }}>
              Dynoz helps hospitality and travel businesses handle customer interactions faster, reduce operational load, and deliver consistent service at scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Mission + Vision ── */}
      <section className="py-24" style={{ background: "var(--paper-2)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div className="mb-12" {...fadeUp()}>
            <p className="text-xs font-mono tracking-[0.16em] mb-3" style={{ color: "var(--text-muted)" }}>WHY WE EXIST</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em]" style={{ color: "var(--ink)" }}>
              Mission &amp; <span className="gradient-text">Vision</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { tag: "OUR MISSION", title: "Transform how the industry serves guests through AI.", body: "We are building the AI operations layer that handles guest operations across the full guest journey — from reservation to post-checkout — through multilingual AI voice agents, so hospitality teams can focus on what humans do best." },
              { tag: "OUR VISION",  title: "Seamless service as the standard across every property.", body: "A world where seamless service is the standard across every property, platform, and travel brand — where every guest feels attended to, no matter the language, the hour, or the channel." },
            ].map((item, i) => (
              <motion.div key={item.tag} className="card-3d p-8 flex flex-col gap-4" {...fadeUp(i * 0.1)}>
                <p className="text-[11px] font-mono tracking-[0.15em]" style={{ color: "var(--accent)" }}>{item.tag}</p>
                <h3 className="text-xl font-bold leading-snug" style={{ color: "var(--ink)" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text)" }}>{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What Dynoz is ── */}
      <section className="py-24" style={{ background: "var(--paper)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div className="mb-12" {...fadeUp()}>
            <p className="text-xs font-mono tracking-[0.16em] mb-3" style={{ color: "var(--text-muted)" }}>WHAT DYNOZ IS</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em]" style={{ color: "var(--ink)" }}>
              An AI operations layer for{" "}
              <span className="gradient-text">the full guest journey.</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {journey.map((item, i) => (
              <motion.div key={item.phase} className="card-3d p-6 flex flex-col gap-4" {...fadeUp(i * 0.1)}>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-md self-start gradient-border"
                  style={{ color: "var(--text-strong)" }}>
                  {item.phase}
                </span>
                <h3 className="font-semibold text-base" style={{ color: "var(--ink)" }}>{item.headline}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text)" }}>{item.body}</p>
              </motion.div>
            ))}
          </div>
          <motion.div className="card-3d p-5" {...fadeUp(0.3)}>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text)" }}>
              By integrating deeply with hotel systems, Dynoz enables faster request handling, 24/7 multilingual guest support, and more personalised experiences through access to guest history and preferences — while reducing repetitive operational load so hotel teams can focus on human interactions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Principles ── */}
      <section className="py-24" style={{ background: "var(--paper-2)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div className="mb-12" {...fadeUp()}>
            <p className="text-xs font-mono tracking-[0.16em] mb-3" style={{ color: "var(--text-muted)" }}>WHAT DRIVES US</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em]" style={{ color: "var(--ink)" }}>
              Principles that guide how{" "}
              <span className="gradient-text">we build and operate.</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {principles.map((p, i) => (
              <motion.div key={p.title} className="card-3d p-7 flex flex-col gap-3" {...fadeUp(i * 0.1)}>
                <h3 className="text-base font-semibold" style={{ color: "var(--ink)" }}>{p.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text)" }}>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who it's for ── */}
      <section className="py-24" style={{ background: "var(--paper)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div className="mb-12" {...fadeUp()}>
            <p className="text-xs font-mono tracking-[0.16em] mb-3" style={{ color: "var(--text-muted)" }}>WHO IT&apos;S BUILT FOR</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em]" style={{ color: "var(--ink)" }}>
              Designed for modern{" "}
              <span className="gradient-text">hospitality &amp; travel.</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {segments.map((seg, i) => (
              <motion.div key={seg.label} className="card-3d p-7 flex flex-col gap-3" {...fadeUp(i * 0.1)}>
                <h3 className="text-base font-semibold" style={{ color: "var(--ink)" }}>{seg.label}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text)" }}>{seg.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20" style={{ background: "var(--paper-2)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="relative rounded-2xl overflow-hidden px-10 md:px-20 py-16 flex flex-col items-start gap-6 card-3d"
            {...fadeUp()}
          >
            <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute blob-a -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-[0.13]"
                style={{ background: "radial-gradient(circle, #FF7A3D 0%, transparent 60%)", filter: "blur(70px)" }} />
              <div className="absolute blob-b top-0 right-0 w-[400px] h-[400px] rounded-full opacity-[0.10]"
                style={{ background: "radial-gradient(circle, #5B7CFF 0%, transparent 60%)", filter: "blur(70px)" }} />
            </div>
            <div className="relative z-10 flex flex-col gap-4 max-w-xl">
              <p className="text-xs font-mono tracking-[0.16em]" style={{ color: "var(--text-muted)" }}>GET IN TOUCH</p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-[-0.02em]" style={{ color: "var(--ink)" }}>
                Ready to transform how your <span className="gradient-text">business serves guests?</span>
              </h2>
            </div>
            <a href="/contact"
              className="relative z-10 btn-grad flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold text-sm">
              Get in Touch <ArrowRight size={14} />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
