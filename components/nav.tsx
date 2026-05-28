"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home",       href: "/",           anchor: null },
  { label: "Product",    href: "/#journey",   anchor: "journey" },
  { label: "How It Works", href: "/#how-it-works", anchor: "how-it-works" },
  { label: "Solutions",  href: "/#built-for", anchor: "built-for" },
  { label: "About",      href: "/about",      anchor: null },
  { label: "Careers",    href: "/careers",    anchor: null },
  { label: "Contact",    href: "/contact",    anchor: null },
];

const anchorLinks = links.filter((l) => l.anchor).map((l) => l.anchor as string);

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeAnchor, setActiveAnchor] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (pathname !== "/") { setActiveAnchor(null); return; }
    const observers: IntersectionObserver[] = [];
    anchorLinks.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveAnchor(id); },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    const handleScroll = () => { if (window.scrollY < 80) setActiveAnchor(null); };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => { observers.forEach((o) => o.disconnect()); window.removeEventListener("scroll", handleScroll); };
  }, [pathname]);

  function handleClick(e: React.MouseEvent, href: string, anchor: string | null) {
    const onHome = pathname === "/";
    if (href === "/") {
      if (onHome) { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }
      return;
    }
    if (anchor && onHome) {
      e.preventDefault();
      document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    if (anchor && !onHome) {
      e.preventDefault();
      router.push(`/#${anchor}`);
      setTimeout(() => document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth" }), 400);
      return;
    }
  }

  function handleMobileClick(href: string, anchor: string | null) {
    setOpen(false);
    const onHome = pathname === "/";
    if (href === "/") { onHome ? window.scrollTo({ top: 0, behavior: "smooth" }) : router.push("/"); return; }
    if (anchor && onHome) { document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth" }); return; }
    if (anchor && !onHome) { router.push(`/#${anchor}`); setTimeout(() => document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth" }), 400); return; }
    router.push(href);
  }

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled || pathname !== "/" ? "rgba(12,12,14,0.95)" : "transparent",
          backdropFilter: scrolled || pathname !== "/" ? "blur(16px) saturate(180%)" : "none",
          borderBottom: "1px solid rgba(255,255,255,0.12)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 h-18 py-3 flex items-center justify-between">

          {/* Logo — show only the D icon (approx left 20% of image) with color, then white text */}
          <a href="/" className="flex items-center gap-2">
            <img src="/dynoz-d.png" alt="Dynoz AI" className="h-9 w-9" />
            <span className="text-white font-semibold text-[19px] tracking-tight">Dynoz AI</span>
          </a>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map((link) => {
              let isActive = false;
              if (link.href === "/") isActive = pathname === "/" && activeAnchor === null;
              else if (link.anchor) isActive = pathname === "/" && activeAnchor === link.anchor;
              else isActive = pathname === link.href;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href, link.anchor)}
                  className="relative flex flex-col items-center text-[15px] font-medium transition-colors duration-150 pb-0.5"
                  style={{ color: isActive ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.45)" }}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className="absolute -bottom-0.5 left-0 right-0 h-px rounded-full"
                      style={{ background: "#1A56FF" }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/contact"
              className="px-5 py-2 rounded-lg text-white text-[15px] font-semibold transition-all duration-150 hover:opacity-90"
              style={{ background: "#1A56FF" }}
            >
              Request a Demo
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden transition-colors duration-150"
            style={{ color: "rgba(255,255,255,0.6)" }}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-7 md:hidden"
            style={{ background: "#0C0C0E" }}
          >
            {links.map((link, i) => (
              <motion.button
                key={link.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                className="text-2xl font-semibold transition-colors"
                style={{ color: "rgba(255,255,255,0.75)" }}
                onClick={() => handleMobileClick(link.href, link.anchor)}
              >
                {link.label}
              </motion.button>
            ))}
            <motion.a
              href="/contact"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: links.length * 0.05 }}
              className="mt-2 px-8 py-3 rounded-lg text-white font-semibold text-lg"
              style={{ background: "#1A56FF" }}
              onClick={() => setOpen(false)}
            >
              Request a Demo
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function DynozLogo() {
  return (
    <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logoGrad" x1="10" y1="10" x2="90" y2="90" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FF7A3D" />
          <stop offset="55%" stopColor="#E94B8A" />
          <stop offset="100%" stopColor="#B547D6" />
        </linearGradient>
      </defs>
      <path
        d="M20 12 L46 12 Q72 12 82 30 Q90 44 90 50 Q90 56 82 70 Q72 88 46 88 L20 88 Q14 88 14 82 L14 18 Q14 12 20 12 Z"
        fill="url(#logoGrad)"
      />
      <path
        d="M34 30 L46 30 Q64 30 68 50 Q64 70 46 70 L34 70 Z"
        fill="white"
        opacity="0.92"
      />
    </svg>
  );
}
