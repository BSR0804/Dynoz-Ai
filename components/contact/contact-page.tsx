"use client";

import { useState } from "react";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const topics = ["Product & Support", "Partnerships", "Demo Request", "General Inquiry"];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function ContactPage() {
  const [topic, setTopic] = useState("Demo Request");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;
    const subject = `${topic} — ${name} via dynoz.ai`;
    const body = `Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n\n${message}`;
    window.location.href = `mailto:contact@dynoz.ai?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  return (
    <>
      <Nav />

      {/* ── Hero ── */}
      <section className="relative min-h-[48vh] flex flex-col justify-center overflow-hidden pt-16" style={{ background: "var(--paper)" }}>
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute blob-a -top-40 -left-40 w-[580px] h-[580px] rounded-full opacity-[0.17]"
            style={{ background: "radial-gradient(circle, #5B7CFF 0%, transparent 60%)", filter: "blur(80px)" }} />
          <div className="absolute blob-b top-0 right-[-100px] w-[520px] h-[520px] rounded-full opacity-[0.14]"
            style={{ background: "radial-gradient(circle, #E94B8A 0%, transparent 60%)", filter: "blur(90px)" }} />
          <div className="absolute inset-0 grid-drift opacity-50" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-28">
          <motion.div className="flex flex-col gap-5 max-w-xl"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
            <span className="inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.14em] uppercase px-3 py-1.5 rounded-md self-start"
              style={{ color: "var(--text-muted)", background: "rgba(12,12,14,0.04)", border: "1px solid var(--border)" }}>
              GET IN TOUCH
            </span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-[-0.028em]" style={{ color: "var(--ink)" }}>
              Talk to us.{" "}
              <span className="gradient-text">We move fast.</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: "var(--text)" }}>
              Get support, request a demo, or explore a partnership with Dynoz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Form + details ── */}
      <section className="py-24" style={{ background: "var(--paper-2)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start card-3d p-10 md:p-14 rounded-2xl"
            {...fadeUp()}
          >
            {/* Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-[-0.02em] mb-2" style={{ color: "var(--ink)" }}>
                Write to us
              </h2>
              <p className="text-sm mb-8" style={{ color: "var(--text)" }}>
                Fill in the form and we'll reach out within one business day.
              </p>

              {submitted ? (
                <div className="rounded-xl p-10 flex flex-col items-center gap-4 text-center card-3d">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center gradient-bg">
                    <Send size={20} className="text-white" />
                  </div>
                  <p className="font-semibold text-lg" style={{ color: "var(--ink)" }}>Message sent!</p>
                  <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                    Your email client should have opened. We'll reply within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { name: "name",  label: "Full name",  type: "text",  placeholder: "Your name" },
                      { name: "email", label: "Email",      type: "email", placeholder: "you@company.com" },
                    ].map((f) => (
                      <div key={f.name} className="flex flex-col gap-1.5">
                        <label className="text-xs font-medium tracking-wide" style={{ color: "var(--ink)" }}>{f.label}</label>
                        <input
                          name={f.name} type={f.type} required placeholder={f.placeholder}
                          className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-200"
                          style={{ border: "1px solid var(--border-strong)", background: "var(--paper)", color: "var(--ink)", outline: "none" }}
                          onFocus={(e) => { e.target.style.borderColor = "var(--accent)"; e.target.style.boxShadow = "0 0 0 3px var(--accent-dim)"; }}
                          onBlur={(e) => { e.target.style.borderColor = "var(--border-strong)"; e.target.style.boxShadow = "none"; }}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium tracking-wide" style={{ color: "var(--ink)" }}>Topic</label>
                    <div className="flex flex-wrap gap-2">
                      {topics.map((t) => (
                        <button key={t} type="button" onClick={() => setTopic(t)}
                          className="px-3.5 py-1.5 rounded-lg text-xs font-medium border transition-all duration-200"
                          style={{
                            background: topic === t ? "var(--accent-dim)" : "transparent",
                            borderColor: topic === t ? "var(--accent-border)" : "var(--border-strong)",
                            color: topic === t ? "var(--accent)" : "var(--text-muted)",
                          }}>
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium tracking-wide" style={{ color: "var(--ink)" }}>Message</label>
                    <textarea name="message" required rows={5} placeholder="How can we help?"
                      className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-200 resize-none"
                      style={{ border: "1px solid var(--border-strong)", background: "var(--paper)", color: "var(--ink)", outline: "none" }}
                      onFocus={(e) => { e.target.style.borderColor = "var(--accent)"; e.target.style.boxShadow = "0 0 0 3px var(--accent-dim)"; }}
                      onBlur={(e) => { e.target.style.borderColor = "var(--border-strong)"; e.target.style.boxShadow = "none"; }}
                    />
                  </div>

                  <button type="submit"
                    className="btn-grad flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-white font-semibold text-sm">
                    <Send size={14} />
                    Send message
                  </button>
                </form>
              )}
            </div>

            {/* Contact details */}
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="text-xl font-bold tracking-[-0.015em] mb-5" style={{ color: "var(--ink)" }}>
                  Head office
                </h3>
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="flex-shrink-0 mt-0.5" style={{ color: "var(--text-faint)" }} />
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text)" }}>
                      1150/T5, RPS 12th Avenue<br />
                      Faridabad, Haryana 121003<br />
                      India
                    </p>
                  </div>
                  <a href="mailto:contact@dynoz.ai" className="flex items-center gap-3 group">
                    <Mail size={16} className="flex-shrink-0" style={{ color: "var(--text-faint)" }} />
                    <span className="text-sm transition-colors duration-200 group-hover:text-[#1A56FF]" style={{ color: "var(--text)" }}>
                      contact@dynoz.ai
                    </span>
                  </a>
                  <a href="tel:+919821505063" className="flex items-center gap-3 group">
                    <Phone size={16} className="flex-shrink-0" style={{ color: "var(--text-faint)" }} />
                    <span className="text-sm transition-colors duration-200 group-hover:text-[#1A56FF]" style={{ color: "var(--text)" }}>
                      +91 9821505063
                    </span>
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden h-52 card-3d">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.3!2d77.3261!3d28.4089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdc7c3c3c3c3c%3A0x0!2sRPS+12th+Avenue%2C+Faridabad%2C+Haryana+121003!5e0!3m2!1sen!2sin!4v1"
                  width="100%" height="100%"
                  style={{ border: 0 }}
                  allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dynoz AI Office Location"
                />
              </div>

              {/* Response time */}
              <motion.div className="card-3d rounded-xl p-5 flex items-center gap-4" {...fadeUp(0.2)}>
                <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 gradient-bg">
                  <Mail size={15} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "var(--ink)" }}>
                    We&apos;re here when you need us
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                    Email{" "}
                    <a href="mailto:contact@dynoz.ai" className="hover:underline" style={{ color: "var(--accent)" }}>
                      contact@dynoz.ai
                    </a>{" "}
                    — we reply within one business day.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
