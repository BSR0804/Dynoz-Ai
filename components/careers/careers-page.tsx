"use client";

import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import TiltCard from "@/components/tilt-card";
import { jobs } from "@/lib/jobs-data";

const values = [
  { title: "Ownership by Design", desc: "Work on core systems with real responsibility and visible impact." },
  { title: "Engineering First",   desc: "We prioritise reliability and long-term maintainability over shortcuts." },
  { title: "Flexible by Default", desc: "We trust people to manage their time and work where they're most effective." },
];

const EASE = [0.16, 1, 0.3, 1] as const;
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, delay, ease: EASE },
});

export default function CareersPage() {
  return (
    <>
      <Nav />

      {/* ── Hero ── */}
      <section className="relative min-h-[56vh] flex flex-col justify-center overflow-hidden pt-16" style={{ background: "var(--paper)" }}>
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute blob-a -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-[0.18]"
            style={{ background: "radial-gradient(circle, #E94B8A 0%, transparent 60%)", filter: "blur(80px)" }} />
          <div className="absolute blob-b top-0 right-[-120px] w-[560px] h-[560px] rounded-full opacity-[0.16]"
            style={{ background: "radial-gradient(circle, #5B7CFF 0%, transparent 60%)", filter: "blur(90px)" }} />
          <div className="absolute inset-0 grid-drift opacity-50" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-28">
          <motion.div className="flex flex-col gap-5 max-w-2xl"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
            <span className="inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.14em] uppercase px-3 py-1.5 rounded-md self-start"
              style={{ color: "var(--text-muted)", background: "rgba(12,12,14,0.04)", border: "1px solid var(--border)" }}>
              CAREERS AT DYNOZ
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight tracking-[-0.028em]" style={{ color: "var(--ink)" }}>
              Build the future of{" "}
              <span className="gradient-text">hospitality &amp; travel.</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: "var(--text)" }}>
              We're a growing team reinventing hospitality and travel through AI-powered agents that deliver instant, consistent, and delightful customer experiences.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a href="#openings"
                className="btn-grad flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold text-sm">
                View Open Roles <ArrowRight size={14} />
              </a>
              <a href="mailto:careers@dynoz.ai"
                className="text-sm font-medium transition-colors duration-200 hover:text-[#1A56FF]"
                style={{ color: "var(--text-muted)" }}>
                Join the Talent Network
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Life at Dynoz ── */}
      <section className="py-24" style={{ background: "var(--paper-2)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div className="mb-12" {...fadeUp()}>
            <p className="text-xs font-mono tracking-[0.16em] mb-3" style={{ color: "var(--text-muted)" }}>LIFE AT DYNOZ</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em]" style={{ color: "var(--ink)" }}>
              A culture built around{" "}
              <span className="gradient-text">ownership &amp; impact.</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div key={v.title} {...fadeUp(i * 0.1)}><TiltCard className="card-3d p-7 flex flex-col gap-3" intensity={5}>
                <h3 className="text-base font-semibold" style={{ color: "var(--ink)" }}>{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text)" }}>{v.desc}</p>
              </TiltCard></motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Open Roles ── */}
      <section id="openings" className="py-24" style={{ background: "var(--paper)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div className="mb-12" {...fadeUp()}>
            <p className="text-xs font-mono tracking-[0.16em] mb-3" style={{ color: "var(--text-muted)" }}>OPEN ROLES</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em]" style={{ color: "var(--ink)" }}>
              Current <span className="gradient-text">openings</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {jobs.map((job, i) => (
              <motion.div key={job.title} {...fadeUp(i * 0.08)}>
              <TiltCard intensity={5}>
              <a
                href={`/careers/${job.slug}`}
                className="card-3d group p-7 flex flex-col gap-5 block"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono tracking-widest" style={{ color: "var(--text-muted)" }}>
                    {job.dept.toUpperCase()}
                  </span>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-md gradient-border"
                    style={{ color: "var(--text-strong)" }}>
                    {job.exp}
                  </span>
                </div>

                <h3 className="text-base font-semibold leading-snug" style={{ color: "var(--ink)" }}>
                  {job.title}
                </h3>

                <div className="flex items-center justify-between mt-auto pt-4" style={{ borderTop: "1px solid var(--hairline)" }}>
                  <div className="flex flex-wrap gap-4">
                    <span className="flex items-center gap-1.5 text-xs" style={{ color: "var(--text-muted)" }}>
                      <MapPin size={11} />{job.location}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs" style={{ color: "var(--text-muted)" }}>
                      <Clock size={11} />{job.type}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-110"
                    style={{ background: "var(--accent-dim)" }}>
                    <ArrowRight size={14} style={{ color: "var(--accent)" }} />
                  </div>
                </div>
              </a></TiltCard></motion.div>
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
              <div className="absolute blob-b -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-[0.12]"
                style={{ background: "radial-gradient(circle, #E94B8A 0%, transparent 60%)", filter: "blur(70px)" }} />
              <div className="absolute blob-a top-0 right-0 w-[400px] h-[400px] rounded-full opacity-[0.10]"
                style={{ background: "radial-gradient(circle, #5B7CFF 0%, transparent 60%)", filter: "blur(70px)" }} />
            </div>
            <div className="relative z-10 flex flex-col gap-4 max-w-xl">
              <p className="text-xs font-mono tracking-[0.16em]" style={{ color: "var(--text-muted)" }}>DON'T SEE A FIT?</p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-[-0.02em]" style={{ color: "var(--ink)" }}>
                We're always looking for <span className="gradient-text">exceptional people.</span>
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "var(--text)" }}>
                Send us your resume and tell us what you'd build at Dynoz.
              </p>
            </div>
            <a href="mailto:careers@dynoz.ai?subject=Open Application — Dynoz AI"
              className="relative z-10 btn-grad flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold text-sm">
              Send an open application <ArrowRight size={14} />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
