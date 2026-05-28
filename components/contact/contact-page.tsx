"use client";

import { useState } from "react";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const topics = ["Product & Support", "Partnerships", "Demo Request", "General Inquiry"];

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

      {/* Hero */}
      <section
        className="relative min-h-[44vh] flex flex-col justify-center overflow-hidden pt-16"
        style={{ background: "#0C0C0E" }}
      >
        <div aria-hidden className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] opacity-[0.1]"
          style={{ background: "radial-gradient(circle at top right, #1A56FF, transparent 65%)" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
          <div className="flex flex-col gap-5 max-w-xl">
            <p className="text-xs font-mono tracking-[0.16em]" style={{ color: "rgba(255,255,255,0.3)" }}>
              GET IN TOUCH
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-[-0.025em]">
              Talk to us.{" "}
              <span style={{ color: "rgba(255,255,255,0.35)" }}>We move fast.</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.42)" }}>
              Get support, request a demo, or explore a partnership with Dynoz.
            </p>
          </div>
        </div>
      </section>

      {/* Form + details */}
      <section className="py-24" style={{ background: "#FAFAF8", borderTop: "1px solid rgba(12,12,14,0.06)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start rounded-2xl p-10 md:p-14"
            style={{
              background: "#fff",
              border: "2px solid #0C0C0E",
              boxShadow: "4px 4px 0px #0C0C0E, 8px 8px 0px rgba(12,12,14,0.35), 14px 14px 0px rgba(12,12,14,0.12)",
            }}
          >
            {/* Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-[-0.02em] mb-2" style={{ color: "#0C0C0E" }}>
                Write to us
              </h2>
              <p className="text-sm mb-8" style={{ color: "rgba(12,12,14,0.7)" }}>
                Fill in the form and we'll reach out within one business day.
              </p>

              {submitted ? (
                <div
                  className="rounded-xl p-10 flex flex-col items-center gap-4 text-center"
                  style={{ background: "rgba(26,86,255,0.04)", border: "1px solid rgba(26,86,255,0.12)" }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "rgba(26,86,255,0.12)" }}>
                    <Send size={20} style={{ color: "#1A56FF" }} />
                  </div>
                  <p className="font-semibold text-lg" style={{ color: "#0C0C0E" }}>Message sent!</p>
                  <p className="text-sm" style={{ color: "rgba(12,12,14,0.5)" }}>
                    Your email client should have opened. We'll reply within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium tracking-wide" style={{ color: "#0C0C0E" }}>Full name</label>
                      <input
                        name="name"
                        required
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-200"
                        style={{
                          border: "1px solid rgba(12,12,14,0.2)",
                          background: "#fff",
                          color: "#0C0C0E",
                          outline: "none",
                        }}
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
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-200"
                        style={{
                          border: "1px solid rgba(12,12,14,0.2)",
                          background: "#fff",
                          color: "#0C0C0E",
                          outline: "none",
                        }}
                        onFocus={(e) => { e.target.style.borderColor = "#1A56FF"; e.target.style.boxShadow = "0 0 0 3px rgba(26,86,255,0.1)"; }}
                        onBlur={(e) => { e.target.style.borderColor = "rgba(12,12,14,0.2)"; e.target.style.boxShadow = "none"; }}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium tracking-wide" style={{ color: "#0C0C0E" }}>Topic</label>
                    <div className="flex flex-wrap gap-2">
                      {topics.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setTopic(t)}
                          className="px-3.5 py-1.5 rounded-lg text-xs font-medium border transition-all duration-200"
                          style={{
                            background: topic === t ? "rgba(26,86,255,0.08)" : "transparent",
                            borderColor: topic === t ? "rgba(26,86,255,0.3)" : "rgba(12,12,14,0.12)",
                            color: topic === t ? "#1A56FF" : "rgba(12,12,14,0.5)",
                          }}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium tracking-wide" style={{ color: "#0C0C0E" }}>Message</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="How can we help?"
                      className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-200 resize-none"
                      style={{
                        border: "1px solid rgba(12,12,14,0.2)",
                        background: "#fff",
                        color: "#0C0C0E",
                        outline: "none",
                      }}
                      onFocus={(e) => { e.target.style.borderColor = "#1A56FF"; e.target.style.boxShadow = "0 0 0 3px rgba(26,86,255,0.1)"; }}
                      onBlur={(e) => { e.target.style.borderColor = "rgba(12,12,14,0.2)"; e.target.style.boxShadow = "none"; }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-white font-semibold text-sm transition-all duration-200 hover:opacity-90"
                    style={{ background: "#1A56FF" }}
                  >
                    <Send size={14} />
                    Send message
                  </button>
                </form>
              )}
            </div>

            {/* Contact details */}
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="text-xl font-bold tracking-[-0.015em] mb-5" style={{ color: "#0C0C0E" }}>
                  Head office
                </h3>
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="flex-shrink-0 mt-0.5" style={{ color: "rgba(12,12,14,0.35)" }} />
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(12,12,14,0.85)" }}>
                      1150/T5, RPS 12th Avenue<br />
                      Faridabad, Haryana 121003<br />
                      India
                    </p>
                  </div>
                  <a href="mailto:contact@dynoz.ai" className="flex items-center gap-3 group">
                    <Mail size={16} className="flex-shrink-0" style={{ color: "rgba(12,12,14,0.35)" }} />
                    <span className="text-sm transition-colors duration-200 group-hover:text-[#1A56FF]" style={{ color: "rgba(12,12,14,0.85)" }}>
                      contact@dynoz.ai
                    </span>
                  </a>
                  <a href="tel:+919821505063" className="flex items-center gap-3 group">
                    <Phone size={16} className="flex-shrink-0" style={{ color: "rgba(12,12,14,0.35)" }} />
                    <span className="text-sm transition-colors duration-200 group-hover:text-[#1A56FF]" style={{ color: "rgba(12,12,14,0.85)" }}>
                      +91 9821505063
                    </span>
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden h-52" style={{ border: "2px solid #0C0C0E", boxShadow: "4px 4px 0px #0C0C0E, 8px 8px 0px rgba(12,12,14,0.2)" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.3!2d77.3261!3d28.4089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdc7c3c3c3c3c%3A0x0!2sRPS+12th+Avenue%2C+Faridabad%2C+Haryana+121003!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dynoz AI Office Location"
                />
              </div>

              {/* Response time */}
              <div
                className="rounded-xl p-5 flex items-center gap-4"
                style={{
                  background: "rgba(26,86,255,0.04)",
                  border: "1px solid rgba(26,86,255,0.12)",
                }}
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(26,86,255,0.1)" }}
                >
                  <Mail size={15} style={{ color: "#1A56FF" }} />
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "#0C0C0E" }}>
                    We&apos;re here when you need us
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: "rgba(12,12,14,0.7)" }}>
                    Email{" "}
                    <a href="mailto:contact@dynoz.ai" className="hover:underline" style={{ color: "#1A56FF" }}>
                      contact@dynoz.ai
                    </a>{" "}
                    — we reply within one business day.
                  </p>
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
