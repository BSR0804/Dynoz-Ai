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
    <footer style={{ background: "var(--paper-2)", borderTop: "1px solid var(--hairline)" }}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">

          {/* Brand */}
          <div className="col-span-2 flex flex-col gap-5">
            <div className="flex items-center gap-2.5">
              <img src="/dynoz-d.png" alt="Dynoz AI" className="h-7 w-7" />
              <span className="font-semibold text-base tracking-tight" style={{ color: "var(--ink)" }}>
                Dynoz AI
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "var(--text)" }}>
              Where Service Meets Intelligence.
              <br />
              The AI operations layer for hospitality and travel.
            </p>
            <div className="flex flex-col gap-2 text-sm" style={{ color: "var(--text-muted)" }}>
              <a href="mailto:contact@dynoz.ai" className="flex items-center gap-2 transition-colors hover:text-[#B547D6]">
                <Mail size={12} />contact@dynoz.ai
              </a>
              <a href="tel:+919821505063" className="flex items-center gap-2 transition-colors hover:text-[#B547D6]">
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
              <p className="text-[11px] font-mono tracking-[0.14em]" style={{ color: "var(--text-muted)" }}>
                {group.toUpperCase()}
              </p>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors duration-150 hover:text-[#B547D6]"
                      style={{ color: "var(--text-strong)" }}
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
          style={{ borderTop: "1px solid var(--hairline)" }}
        >
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            © 2026 Centora Technologies Private Limited. All rights reserved.
          </p>
          <p className="text-xs font-mono" style={{ color: "var(--text-faint)" }}>
            www.dynoz.ai
          </p>
        </div>
      </div>
    </footer>
  );
}

