# Dynoz AI — Landing Site

Marketing site for **Dynoz AI**, an AI operations layer for the hospitality and travel industry. Built as a submission for the Web Developer Intern application by **Bhaskar Sharma**.

The site covers the home experience, product journey, how-it-works walkthrough, segment showcase, about, careers (with role detail pages and an application modal), contact (with embedded map), and full legal coverage (privacy, terms, disclaimer).

---

## Tech stack

- **Next.js 16** (App Router) + **React 19**
- **TypeScript 5**
- **Tailwind CSS v4**
- **Framer Motion** for entrance & modal animations
- **Lucide React** for iconography
- **GSAP** (available for advanced scroll choreography)

---

## Getting started

### Prerequisites
- Node.js 18.18 or newer
- npm

### Install & run

```bash
cd dynoz-landing
npm install
npm run dev
```

The site is served at [http://localhost:3000](http://localhost:3000).

### Available scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Generate a production build |
| `npm run start` | Serve the production build |

---

## Project structure

```
dynoz-landing/
├── app/                     # App Router pages
│   ├── page.tsx             # Home
│   ├── about/               # About page
│   ├── careers/             # Careers index + dynamic [slug] role pages
│   ├── contact/             # Contact + embedded Google Map
│   ├── privacy-policy/      # Legal
│   ├── terms-of-service/    # Legal
│   ├── disclaimer/          # Legal
│   ├── particle-demo/       # Static particle text experiment
│   ├── layout.tsx           # Root layout
│   └── globals.css          # Design tokens + global styles
│
├── components/              # Reusable UI components
│   ├── nav.tsx              # Top navigation
│   ├── footer.tsx           # Footer
│   ├── hero/                # Hero section + particle scene
│   ├── journey.tsx          # Guest journey phases
│   ├── how-it-works.tsx     # Step timeline with sticky integrations
│   ├── built-for.tsx        # Segment switcher with phone mockup
│   ├── metrics.tsx          # Key metrics strip
│   ├── trust-strip.tsx      # Logo strip
│   ├── cta-band.tsx         # Bottom CTA
│   ├── about/about-page.tsx
│   ├── careers/careers-page.tsx
│   ├── careers/job-page.tsx
│   └── contact/contact-page.tsx
│
├── lib/
│   ├── motion.ts            # Framer Motion variants
│   └── jobs-data.ts         # Static jobs catalog
│
└── public/                  # Static assets (logo, etc.)
```

---

## Design system

A single, consistent visual language is used across every page.

| Token | Value | Use |
| --- | --- | --- |
| Ink (primary dark) | `#0C0C0E` | Dark sections, nav, hero, CTA bands |
| Paper (primary light) | `#FAFAF8` | Light sections |
| Accent | `#1A56FF` | Buttons, active states, highlights |
| Card dark | `#2A2A2E` | Inner cards on dark surfaces |
| Card sub-dark | `#141418` | Subtle dark surface variants |

### Signature card treatment

The site's recurring 3D bulge-out card uses a hard black border with layered offset shadows:

```css
border: 2px solid #0C0C0E;
box-shadow:
  4px 4px 0px #0C0C0E,
  8px 8px 0px rgba(12,12,14,0.35),
  14px 14px 0px rgba(12,12,14,0.12);
```

This treatment is applied across the journey cards, built-for panel, phone mockup, contact form, careers cards, and the legal page blocks.

---

## Key features

- **Fully responsive** across mobile, tablet, and desktop
- **Per-segment phone mockup** with animated guest ↔ Dynoz conversations
- **Scroll-driven step timeline** for the "How It Works" section with per-step accent colors
- **Sticky integrations panel** in the steps section
- **Dynamic career role pages** with an apply modal (CV upload + project links)
- **Embedded Google Map** on the contact page
- **Working contact form** that opens the user's email client with a prefilled mailto
- **Full legal coverage**: Privacy Policy, Terms of Service, and Disclaimer
- **No back-navigation black screen** — `whileInView` animations were intentionally avoided where they conflict with browser back/forward cache

---

## Pages

| Path | Description |
| --- | --- |
| `/` | Home — hero, journey, how it works, built for, metrics, trust, CTA |
| `/about` | Mission, vision, principles, who it's for |
| `/careers` | Open roles + culture |
| `/careers/[slug]` | Individual role detail + application modal |
| `/contact` | Contact form + office details + embedded map |
| `/privacy-policy` | Privacy policy |
| `/terms-of-service` | Terms of service |
| `/disclaimer` | Site disclaimer |
| `/particle-demo` | Static particle text experiment |

---

## Author

**Bhaskar Sharma**
Web Developer Intern submission for Dynoz AI
Email: bhaskarshamoray11@gmail.com
