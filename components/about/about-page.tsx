"use client";

import Nav from "@/components/nav";
import Footer from "@/components/footer";
import {
  Target, Eye, Zap, Shield, Handshake, Lightbulb,
  Building2, Globe, Plane, ArrowRight,
} from "lucide-react";

const principles = [
  { icon: Shield,    title: "Trust",       desc: "Enterprise-grade reliability and transparency, built into every layer of our platform." },
  { icon: Lightbulb, title: "Innovation",  desc: "Continuous improvement focused on making customer engagement seamless and effortless." },
  { icon: Handshake, title: "Partnership", desc: "Long-term partnerships focused on operational impact and real outcomes for your guests." },
];

const segments = [
  { icon: Building2, label: "Hotels & Stays",    desc: "Automates front desk calls, concierge requests, and in-stay interactions with real-time PMS integration to execute, not just respond." },
  { icon: Globe,     label: "Travel Platforms",  desc: "Embed Dynoz as a native AI agent in your platform, powering voice and chat across support, bookings, and service workflows." },
  { icon: Plane,     label: "Airlines",          desc: "Delivers always-on voice and chat support across traveller interactions, from status queries and rebooking to FAQs, in the traveller's language." },
];

const journey = [
  { phase: "Before Arrival", headline: "Reservations & preparation",  body: "Dynoz manages reservation inquiries and guest preparation before they arrive — in their language, at any hour." },
  { phase: "During Stay",    headline: "Instant routing & response",  body: "AI agents answer guest requests in real time and route them instantly to the correct hotel department with full context." },
  { phase: "After Checkout", headline: "Feedback & recovery",         body: "Dynoz handles feedback collection, service recovery workflows, and loyalty building — turning every stay into a relationship." },
];

export default function AboutPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="relative min-h-[52vh] flex flex-col justify-center overflow-hidden pt-16" style={{ background: "#0C0C0E" }}>
        <div aria-hidden className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] opacity-[0.1]"
          style={{ background: "radial-gradient(circle at top right, #1A56FF, transparent 65%)" }} />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
          <div className="flex flex-col gap-5 max-w-2xl">
            <p className="text-xs font-mono tracking-[0.16em]" style={{ color: "rgba(255,255,255,0.3)" }}>ABOUT DYNOZ</p>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-tight tracking-[-0.025em]">
              Every customer.{" "}<span style={{ color: "rgba(255,255,255,0.35)" }}>Seamlessly attended.</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.42)" }}>
              Dynoz helps hospitality and travel businesses handle customer interactions faster, reduce operational load, and deliver consistent service at scale.
            </p>
          </div>
        </div>
      </section>

      {/* Mission + Vision */}
      <section className="py-24" style={{ background: "#FAFAF8" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-xs font-mono tracking-[0.16em] mb-3" style={{ color: "rgba(12,12,14,0.5)" }}>WHY WE EXIST</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em]" style={{ color: "#0C0C0E" }}>
              Mission &amp; Vision
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-8 flex flex-col gap-5" style={{ background: "#fff", border: "2px solid #0C0C0E", boxShadow: "4px 4px 0px #0C0C0E, 8px 8px 0px rgba(12,12,14,0.2)" }}>
              <div className="flex flex-col gap-2">
                <p className="text-[11px] font-mono tracking-[0.15em]" style={{ color: "#1A56FF" }}>OUR MISSION</p>
                <h2 className="text-xl font-bold leading-snug" style={{ color: "#0C0C0E" }}>Transform how the industry serves guests through AI.</h2>
                <p className="text-sm leading-relaxed pt-1" style={{ color: "rgba(12,12,14,0.6)" }}>
                  We are building the AI operations layer that handles guest operations across the full guest journey — from reservation to post-checkout — through multilingual AI voice agents, so hospitality teams can focus on what humans do best.
                </p>
              </div>
            </div>
            <div className="rounded-xl p-8 flex flex-col gap-5" style={{ background: "#fff", border: "2px solid #0C0C0E", boxShadow: "4px 4px 0px #0C0C0E, 8px 8px 0px rgba(12,12,14,0.2)" }}>
              <div className="flex flex-col gap-2">
                <p className="text-[11px] font-mono tracking-[0.15em]" style={{ color: "#1A56FF" }}>OUR VISION</p>
                <h2 className="text-xl font-bold leading-snug" style={{ color: "#0C0C0E" }}>Seamless service as the standard across every property.</h2>
                <p className="text-sm leading-relaxed pt-1" style={{ color: "rgba(12,12,14,0.6)" }}>
                  A world where seamless service is the standard across every property, platform, and travel brand — where every guest feels attended to, no matter the language, the hour, or the channel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Dynoz is */}
      <section className="py-24" style={{ background: "#0C0C0E", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-xs font-mono tracking-[0.16em] mb-3" style={{ color: "rgba(255,255,255,0.28)" }}>WHAT DYNOZ IS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-[-0.02em]">
              An AI operations layer for{" "}<span style={{ color: "rgba(255,255,255,0.35)" }}>the full guest journey.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {journey.map((item) => (
              <div key={item.phase} className="rounded-xl p-6 flex flex-col gap-4" style={{ background: "#141418", border: "1px solid rgba(255,255,255,0.07)" }}>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-md self-start" style={{ color: "#1A56FF", background: "rgba(26,86,255,0.1)", border: "1px solid rgba(26,86,255,0.2)" }}>
                  {item.phase}
                </span>
                <h3 className="text-white font-semibold text-base">{item.headline}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.42)" }}>{item.body}</p>
              </div>
            ))}
          </div>
          <div className="rounded-xl p-5 flex items-start gap-3" style={{ background: "#141418", border: "1px solid rgba(255,255,255,0.07)" }}>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              By integrating deeply with hotel systems, Dynoz enables faster request handling, 24/7 multilingual guest support, and more personalised experiences through access to guest history and preferences — while reducing repetitive operational load so hotel teams can focus on human interactions.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-24" style={{ background: "#FAFAF8", borderTop: "1px solid rgba(12,12,14,0.06)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-xs font-mono tracking-[0.16em] mb-3" style={{ color: "rgba(12,12,14,0.5)" }}>WHAT DRIVES US</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em]" style={{ color: "#0C0C0E" }}>
              Principles that guide how{" "}<span style={{ color: "rgba(12,12,14,0.4)" }}>we build and operate.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {principles.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="rounded-xl p-7 flex flex-col gap-4" style={{ background: "#fff", border: "2px solid #0C0C0E", boxShadow: "4px 4px 0px #0C0C0E, 8px 8px 0px rgba(12,12,14,0.2)" }}>
                    <div className="flex flex-col gap-1.5">
                    <h3 className="text-base font-semibold" style={{ color: "#0C0C0E" }}>{p.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(12,12,14,0.6)" }}>{p.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-24" style={{ background: "#FAFAF8", borderTop: "1px solid rgba(12,12,14,0.06)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-xs font-mono tracking-[0.16em] mb-3" style={{ color: "rgba(12,12,14,0.5)" }}>WHO IT&apos;S BUILT FOR</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em]" style={{ color: "#0C0C0E" }}>
              Designed for modern{" "}<span style={{ color: "rgba(12,12,14,0.4)" }}>hospitality &amp; travel.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {segments.map((seg) => {
              const Icon = seg.icon;
              return (
                <div key={seg.label} className="rounded-xl p-7 flex flex-col gap-4" style={{ background: "#fff", border: "2px solid #0C0C0E", boxShadow: "4px 4px 0px #0C0C0E, 8px 8px 0px rgba(12,12,14,0.2)" }}>
                    <div className="flex flex-col gap-1.5">
                    <h3 className="text-base font-semibold" style={{ color: "#0C0C0E" }}>{seg.label}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(12,12,14,0.6)" }}>{seg.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "#FAFAF8", borderTop: "1px solid rgba(12,12,14,0.06)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative rounded-2xl overflow-hidden px-10 md:px-20 py-16 flex flex-col items-start gap-6" style={{ background: "#0C0C0E", border: "2px solid #0C0C0E", boxShadow: "4px 4px 0px #0C0C0E, 8px 8px 0px rgba(12,12,14,0.35), 14px 14px 0px rgba(12,12,14,0.12)" }}>
            <div aria-hidden className="absolute top-0 left-0 w-[400px] h-[400px] pointer-events-none" style={{ background: "radial-gradient(circle at top left, rgba(26,86,255,0.18), transparent 65%)" }} />
            <div className="relative z-10 flex flex-col gap-4 max-w-xl">
              <p className="text-xs font-mono tracking-[0.16em]" style={{ color: "rgba(255,255,255,0.3)" }}>GET IN TOUCH</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight tracking-[-0.02em]">
                Ready to transform how your business serves guests?
              </h2>
            </div>
            <a href="/contact" className="relative z-10 flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold text-sm transition-all duration-200 hover:opacity-90" style={{ background: "#1A56FF" }}>
              Get in Touch <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
