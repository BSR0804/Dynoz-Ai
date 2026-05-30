"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { MapPin, Clock, ArrowLeft, CheckCircle2, X, Upload } from "lucide-react";
import type { Job } from "@/lib/jobs-data";

function ApplyModal({ job, onClose }: { job: Job; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const linkedin = data.get("linkedin") as string;
    const project1 = data.get("project1") as string;
    const project2 = data.get("project2") as string;
    const body = `Name: ${name}\nEmail: ${email}\nLinkedIn: ${linkedin}\nProject 1: ${project1}\nProject 2: ${project2}\nCV: ${fileName || "Not attached"}`;
    window.location.href = `mailto:careers@dynoz.ai?subject=${encodeURIComponent(`Application — ${job.title}`)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{ background: "rgba(10,10,15,0.75)", backdropFilter: "blur(8px)" }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-md bg-white rounded-2xl p-8 flex flex-col gap-6 relative max-h-[90vh] overflow-y-auto"
          style={{
            border: "2px solid #0C0C0E",
            boxShadow: "4px 4px 0px #0C0C0E, 8px 8px 0px rgba(12,12,14,0.2)",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold" style={{ color: "#0C0C0E" }}>{job.title}</h2>
              <p className="text-sm mt-0.5" style={{ color: "rgba(12,12,14,0.45)" }}>Application</p>
            </div>
            <button
              onClick={onClose}
              className="flex-shrink-0 mt-0.5 transition-colors"
              style={{ color: "rgba(12,12,14,0.35)" }}
            >
              <X size={18} />
            </button>
          </div>

          {submitted ? (
            <div className="flex flex-col items-center gap-4 py-6 text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "rgba(26,86,255,0.1)" }}>
                <CheckCircle2 size={22} style={{ color: "#1A56FF" }} />
              </div>
              <p className="font-semibold text-base" style={{ color: "#0C0C0E" }}>Application sent!</p>
              <p className="text-sm" style={{ color: "rgba(12,12,14,0.5)" }}>
                Your email client should have opened. We'll be in touch soon.
              </p>
              <button
                onClick={onClose}
                className="mt-2 px-5 py-2.5 rounded-lg text-white text-sm font-semibold transition-all duration-200 hover:opacity-90"
                style={{ background: "#1A56FF" }}
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium tracking-wide" style={{ color: "#0C0C0E" }}>Full name</label>
                <input
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-200"
                  style={{ border: "1px solid rgba(12,12,14,0.2)", background: "#fff", color: "#0C0C0E", outline: "none" }}
                  onFocus={(e) => { e.target.style.borderColor = "#1A56FF"; e.target.style.boxShadow = "0 0 0 3px rgba(26,86,255,0.1)"; }}
                  onBlur={(e) => { e.target.style.borderColor = "rgba(12,12,14,0.2)"; e.target.style.boxShadow = "none"; }}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium tracking-wide" style={{ color: "#0C0C0E" }}>Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-200"
                  style={{ border: "1px solid rgba(12,12,14,0.2)", background: "#fff", color: "#0C0C0E", outline: "none" }}
                  onFocus={(e) => { e.target.style.borderColor = "#1A56FF"; e.target.style.boxShadow = "0 0 0 3px rgba(26,86,255,0.1)"; }}
                  onBlur={(e) => { e.target.style.borderColor = "rgba(12,12,14,0.2)"; e.target.style.boxShadow = "none"; }}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium tracking-wide" style={{ color: "#0C0C0E" }}>LinkedIn</label>
                <input
                  name="linkedin"
                  required
                  placeholder="https://linkedin.com/in/..."
                  className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-200"
                  style={{ border: "1px solid rgba(12,12,14,0.2)", background: "#fff", color: "#0C0C0E", outline: "none" }}
                  onFocus={(e) => { e.target.style.borderColor = "#1A56FF"; e.target.style.boxShadow = "0 0 0 3px rgba(26,86,255,0.1)"; }}
                  onBlur={(e) => { e.target.style.borderColor = "rgba(12,12,14,0.2)"; e.target.style.boxShadow = "none"; }}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium tracking-wide" style={{ color: "#0C0C0E" }}>CV</label>
                <label
                  className="flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer transition-colors duration-200"
                  style={{ background: "#FAFAFA", borderColor: "rgba(12,12,14,0.2)" }}
                >
                  <Upload size={14} className="flex-shrink-0" style={{ color: "rgba(12,12,14,0.4)" }} />
                  <span className="text-sm truncate" style={{ color: "rgba(12,12,14,0.45)" }}>
                    {fileName || "Choose file"}
                  </span>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    required
                    onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
                  />
                </label>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium tracking-wide" style={{ color: "#0C0C0E" }}>Show your best work</label>
                <p className="text-xs -mt-0.5" style={{ color: "rgba(12,12,14,0.55)" }}>Links to selected projects that reflect your expertise for the role.</p>
                <input
                  name="project1"
                  placeholder="Live project / deployed demo"
                  className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-200"
                  style={{ border: "1px solid rgba(12,12,14,0.2)", background: "#fff", color: "#0C0C0E", outline: "none" }}
                  onFocus={(e) => { e.target.style.borderColor = "#1A56FF"; e.target.style.boxShadow = "0 0 0 3px rgba(26,86,255,0.1)"; }}
                  onBlur={(e) => { e.target.style.borderColor = "rgba(12,12,14,0.2)"; e.target.style.boxShadow = "none"; }}
                />
                <input
                  name="project2"
                  placeholder="Repo / doc / case study (optional)"
                  className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-200"
                  style={{ border: "1px solid rgba(12,12,14,0.2)", background: "#fff", color: "#0C0C0E", outline: "none" }}
                  onFocus={(e) => { e.target.style.borderColor = "#1A56FF"; e.target.style.boxShadow = "0 0 0 3px rgba(26,86,255,0.1)"; }}
                  onBlur={(e) => { e.target.style.borderColor = "rgba(12,12,14,0.2)"; e.target.style.boxShadow = "none"; }}
                />
              </div>

              <div className="flex items-center gap-3 pt-1">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-5 py-3 rounded-lg font-medium text-sm border transition-all duration-200"
                  style={{ color: "rgba(12,12,14,0.6)", border: "1px solid rgba(12,12,14,0.12)" }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-5 py-3 rounded-lg text-white font-semibold text-sm transition-all duration-200 hover:opacity-90"
                  style={{ background: "#1A56FF" }}
                >
                  Submit application
                </button>
              </div>

              <p className="text-[10px] text-center" style={{ color: "rgba(12,12,14,0.3)" }}>
                By submitting, you agree we may contact you about this role.
              </p>
            </form>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function JobPage({ job }: { job: Job }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Nav />
      {showModal && <ApplyModal job={job} onClose={() => setShowModal(false)} />}

      {/* Hero */}
      <section
        className="relative pt-16 overflow-hidden"
        style={{ background: "transparent" }}
      >
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-16">
          <div className="flex flex-col gap-6">
            <a
              href="/careers"
              className="flex items-center gap-2 text-sm w-fit transition-colors duration-200"
              style={{ color: "var(--text-muted)" }}
            >
              <ArrowLeft size={14} /> Back to Careers
            </a>

            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono tracking-widest px-2.5 py-1 rounded-md" style={{ color: "var(--text-muted)", border: "1px solid var(--border)" }}>
                {job.dept.toUpperCase()}
              </span>
              <span className="text-xs font-mono px-2.5 py-1 rounded-md" style={{ color: "#1A56FF", background: "rgba(26,86,255,0.08)", border: "1px solid rgba(26,86,255,0.2)" }}>
                {job.exp}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-[-0.025em]" style={{ color: "var(--ink)" }}>
              {job.title}
            </h1>

            <div className="flex flex-wrap items-center gap-5 text-sm" style={{ color: "var(--text-muted)" }}>
              <span className="flex items-center gap-1.5"><MapPin size={13} /> {job.location}</span>
              <span className="flex items-center gap-1.5"><Clock size={13} /> {job.type}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-16" style={{ background: "transparent", borderTop: "1px solid var(--hairline)" }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

            {/* Main content */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {[
                { title: "Why Dynoz?", content: <p className="text-sm leading-relaxed" style={{ color: "rgba(12,12,14,0.6)" }}>Dynoz is an AI operations layer platform for hospitality and travel. Our mission is to transform how the industry serves guests and travellers through AI. Our vision is a world where seamless service is the standard across every property, platform, and travel brand.</p> },
                { title: "About this role", content: <p className="text-sm leading-relaxed" style={{ color: "rgba(12,12,14,0.6)" }}>{job.summary}</p> },
                { title: "Responsibilities", content: <ul className="flex flex-col gap-3">{job.responsibilities.map((r) => <li key={r} className="flex items-start gap-3 text-sm" style={{ color: "rgba(12,12,14,0.65)" }}><CheckCircle2 size={15} className="flex-shrink-0 mt-0.5" style={{ color: "#1A56FF" }} />{r}</li>)}</ul> },
                { title: "Requirements", content: <ul className="flex flex-col gap-3">{job.requirements.map((r) => <li key={r} className="flex items-start gap-3 text-sm" style={{ color: "rgba(12,12,14,0.65)" }}><span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ background: "#1A56FF" }} />{r}</li>)}</ul> },
                { title: "Benefits", content: <ul className="flex flex-col gap-3">{job.benefits.map((b) => <li key={b} className="flex items-start gap-3 text-sm" style={{ color: "rgba(12,12,14,0.65)" }}><span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ background: "#1A56FF" }} />{b}</li>)}</ul> },
                ...(job.stack.length > 0 ? [{ title: "Stack", content: <div className="flex flex-wrap gap-2">{job.stack.map((s) => <span key={s} className="text-xs font-mono px-3 py-1.5 rounded-md" style={{ color: "#1A56FF", border: "1px solid rgba(26,86,255,0.2)", background: "rgba(26,86,255,0.06)" }}>{s}</span>)}</div> }] : []),
              ].map(({ title, content }) => (
                <div
                  key={title}
                  className="rounded-xl p-8 flex flex-col gap-4 bg-white"
                  style={{
                    border: "2px solid #0C0C0E",
                    boxShadow: "4px 4px 0px #0C0C0E, 8px 8px 0px rgba(12,12,14,0.2)",
                  }}
                >
                  <h2 className="text-lg font-bold" style={{ color: "#0C0C0E" }}>{title}</h2>
                  {content}
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <div className="lg:sticky lg:top-24 flex flex-col gap-4">
              <div
                className="rounded-xl p-7 flex flex-col gap-4 bg-white"
                style={{
                  border: "2px solid #0C0C0E",
                  boxShadow: "4px 4px 0px #0C0C0E, 8px 8px 0px rgba(12,12,14,0.2)",
                }}
              >
                <h3 className="text-base font-bold" style={{ color: "#0C0C0E" }}>Apply for this role</h3>
                <button
                  onClick={() => setShowModal(true)}
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-white font-semibold text-sm transition-all duration-200 hover:opacity-90"
                  style={{ background: "#1A56FF" }}
                >
                  Apply now
                </button>
                <button
                  onClick={() => { navigator.clipboard.writeText(window.location.href); }}
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-medium text-sm border transition-all duration-200"
                  style={{ color: "rgba(12,12,14,0.6)", border: "1px solid rgba(12,12,14,0.12)" }}
                >
                  Copy job link
                </button>
              </div>

              <div
                className="rounded-xl p-6 flex flex-col gap-3 bg-white"
                style={{
                  border: "2px solid #0C0C0E",
                  boxShadow: "4px 4px 0px #0C0C0E, 8px 8px 0px rgba(12,12,14,0.2)",
                }}
              >
                <p className="text-xs font-mono tracking-widest" style={{ color: "rgba(12,12,14,0.35)" }}>DETAILS</p>
                <div className="flex flex-col gap-2.5 text-sm" style={{ color: "rgba(12,12,14,0.6)" }}>
                  <span className="flex items-center gap-2"><MapPin size={13} style={{ color: "rgba(12,12,14,0.4)" }} />{job.location}</span>
                  <span className="flex items-center gap-2"><Clock size={13} style={{ color: "rgba(12,12,14,0.4)" }} />{job.type}</span>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-md border w-fit mt-1" style={{ color: "#1A56FF", border: "1px solid rgba(26,86,255,0.2)", background: "rgba(26,86,255,0.06)" }}>{job.exp}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
