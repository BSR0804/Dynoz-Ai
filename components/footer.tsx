import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  Solutions: [
    { label: "Hotels & Stays", href: "/#built-for" },
    { label: "Travel Platforms", href: "/#built-for" },
    { label: "Airlines", href: "/#built-for" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Disclaimer", href: "/disclaimer" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: "#0C0C0E", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">

          {/* Brand */}
          <div className="col-span-2 flex flex-col gap-5">
            <div className="flex items-center gap-2.5">
              <FooterLogo />
              <span className="text-white font-semibold text-base tracking-tight">
                Dynoz <span className="gradient-text">AI</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
              Where Service Meets Intelligence.
              <br />
              The AI operations layer for hospitality and travel.
            </p>
            <div className="flex flex-col gap-2 text-sm" style={{ color: "rgba(255,255,255,0.25)" }}>
              <a href="mailto:contact@dynoz.ai" className="flex items-center gap-2 hover:text-white/50 transition-colors">
                <Mail size={12} />contact@dynoz.ai
              </a>
              <a href="tel:+919821505063" className="flex items-center gap-2 hover:text-white/50 transition-colors">
                <Phone size={12} />+91 9821505063
              </a>
              <span className="flex items-start gap-2">
                <MapPin size={12} className="mt-0.5 flex-shrink-0" />
                1150/T5, RPS 12th Avenue,<br />Faridabad, Haryana 121003
              </span>
            </div>
          </div>

          {/* Link cols */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group} className="flex flex-col gap-4">
              <p className="text-[11px] font-mono tracking-[0.14em]" style={{ color: "rgba(255,255,255,0.25)" }}>
                {group.toUpperCase()}
              </p>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors duration-150 text-white/35 hover:text-white/70"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div
          className="mt-14 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.18)" }}>
            © 2026 Centora Technologies Private Limited. All rights reserved.
          </p>
          <p className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.12)" }}>
            www.dynoz.ai
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLogo() {
  return (
    <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="footerGrad" x1="10" y1="10" x2="90" y2="90" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FF7A3D" />
          <stop offset="55%" stopColor="#E94B8A" />
          <stop offset="100%" stopColor="#B547D6" />
        </linearGradient>
      </defs>
      <path d="M20 12 L46 12 Q72 12 82 30 Q90 44 90 50 Q90 56 82 70 Q72 88 46 88 L20 88 Q14 88 14 82 L14 18 Q14 12 20 12 Z" fill="url(#footerGrad)" />
      <path d="M34 30 L46 30 Q64 30 68 50 Q64 70 46 70 L34 70 Z" fill="white" opacity="0.92" />
    </svg>
  );
}
