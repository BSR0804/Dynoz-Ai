"use client";

import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { MapPin, Clock, ArrowRight, Zap, Code2, Users } from "lucide-react";
import { jobs } from "@/lib/jobs-data";

const values = [
  {
    icon: Zap,
    title: "Ownership by Design",
    desc: "Work on core systems with real responsibility and visible impact.",
  },
  {
    icon: Code2,
    title: "Engineering First",
    desc: "We prioritise reliability and long-term maintainability over shortcuts.",
  },
  {
    icon: Users,
    title: "Flexible by Default",
    desc: "We trust people to manage their time and work where they're most effective.",
  },
];

export default function CareersPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section
        className="relative min-h-[52vh] flex flex-col justify-center overflow-hidden pt-16"
        style={{ background: "#0C0C0E" }}
      >
        <div aria-hidden className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] opacity-[0.1]"
          style={{ background: "radial-gradient(circle at top right, #1A56FF, transparent 65%)" }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
          <div className="flex flex-col gap-5 max-w-2xl">
            <p className="text-xs font-mono tracking-[0.16em]" style={{ color: "rgba(255,255,255,0.3)" }}>
              CAREERS AT DYNOZ
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-tight tracking-[-0.025em]">
              Build the future of{" "}
              <span style={{ color: "rgba(255,255,255,0.35)" }}>hospitality &amp; travel.</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.42)" }}>
              We're a growing team reinventing hospitality and travel through AI-powered agents that deliver instant, consistent, and delightful customer experiences.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="#openings"
                className="flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold text-sm transition-all duration-200 hover:opacity-90"
                style={{ background: "#1A56FF" }}
              >
                View Open Roles <ArrowRight size={14} />
              </a>
              <a
                href="mailto:careers@dynoz.ai"
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                Join the Talent Network
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Life at Dynoz */}
      <section className="py-24" style={{ background: "#FAFAF8", borderTop: "1px solid rgba(12,12,14,0.06)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-xs font-mono tracking-[0.16em] mb-3" style={{ color: "rgba(12,12,14,0.5)" }}>
              LIFE AT DYNOZ
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em]" style={{ color: "#0C0C0E" }}>
              A culture built around{" "}
              <span style={{ color: "rgba(12,12,14,0.4)" }}>ownership &amp; impact.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="rounded-xl p-7 flex flex-col gap-4"
                  style={{
                    background: "#fff",
                    border: "2px solid #0C0C0E",
                    boxShadow: "4px 4px 0px #0C0C0E, 8px 8px 0px rgba(12,12,14,0.2)",
                  }}
                >
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-base font-semibold" style={{ color: "#0C0C0E" }}>{v.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(12,12,14,0.6)" }}>{v.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section id="openings" className="py-24" style={{ background: "#0C0C0E", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-xs font-mono tracking-[0.16em] mb-3" style={{ color: "rgba(255,255,255,0.28)" }}>
              OPEN ROLES
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-[-0.02em]">
              Current openings
            </h2>
          </div>

          <div
            className="rounded-2xl p-6 md:p-8"
            style={{
              background: "#fff",
              border: "2px solid #0C0C0E",
              boxShadow: "4px 4px 0px #0C0C0E, 8px 8px 0px rgba(12,12,14,0.35), 14px 14px 0px rgba(12,12,14,0.12)",
            }}
          >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {jobs.map((job) => (
              <a
                key={job.title}
                href={`/careers/${job.slug}`}
                className="group rounded-xl p-7 flex flex-col gap-5 transition-all duration-200"
                style={{
                  background: "#ffffff",
                  border: "2px solid #0C0C0E",
                  boxShadow: "4px 4px 0px #0C0C0E, 8px 8px 0px rgba(12,12,14,0.35), 14px 14px 0px rgba(12,12,14,0.12)",
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono tracking-widest" style={{ color: "rgba(12,12,14,0.65)" }}>
                    {job.dept.toUpperCase()}
                  </span>
                  <span
                    className="text-[10px] font-mono px-2.5 py-1 rounded-md"
                    style={{
                      color: "#1A56FF",
                      background: "rgba(26,86,255,0.1)",
                      border: "1px solid rgba(26,86,255,0.2)",
                    }}
                  >
                    {job.exp}
                  </span>
                </div>

                <h3 className="text-base font-semibold leading-snug" style={{ color: "#0C0C0E" }}>
                  {job.title}
                </h3>

                <div className="flex items-center justify-between mt-auto pt-4" style={{ borderTop: "1px solid rgba(12,12,14,0.08)" }}>
                  <div className="flex flex-wrap gap-4">
                    <span className="flex items-center gap-1.5 text-xs" style={{ color: "rgba(12,12,14,0.65)" }}>
                      <MapPin size={11} />{job.location}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs" style={{ color: "rgba(12,12,14,0.65)" }}>
                      <Clock size={11} />{job.type}
                    </span>
                  </div>
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-110"
                    style={{ background: "rgba(26,86,255,0.12)" }}
                  >
                    <ArrowRight size={14} style={{ color: "#1A56FF" }} />
                  </div>
                </div>
              </a>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* No fit CTA */}
      <section className="py-20" style={{ background: "#FAFAF8", borderTop: "1px solid rgba(12,12,14,0.06)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div
            className="relative rounded-2xl overflow-hidden px-10 md:px-20 py-16 flex flex-col items-start gap-6"
            style={{
              background: "#0C0C0E",
              border: "2px solid #0C0C0E",
              boxShadow: "4px 4px 0px #0C0C0E, 8px 8px 0px rgba(12,12,14,0.35), 14px 14px 0px rgba(12,12,14,0.12)",
            }}
          >
            <div aria-hidden className="absolute top-0 left-0 w-[400px] h-[400px] pointer-events-none"
              style={{ background: "radial-gradient(circle at top left, rgba(26,86,255,0.18), transparent 65%)" }}
            />
            <div className="relative z-10 flex flex-col gap-4 max-w-xl">
              <p className="text-xs font-mono tracking-[0.16em]" style={{ color: "rgba(255,255,255,0.3)" }}>DON'T SEE A FIT?</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight tracking-[-0.02em]">
                We're always looking for exceptional people.
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
                Send us your resume and tell us what you'd build at Dynoz.
              </p>
            </div>
            <a
              href="mailto:careers@dynoz.ai?subject=Open Application — Dynoz AI"
              className="relative z-10 flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold text-sm transition-all duration-200 hover:opacity-90"
              style={{ background: "#1A56FF" }}
            >
              Send an open application <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
