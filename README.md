# Dynoz AI — Landing Site

**Live:** [https://dynoz-ai.vercel.app]()

Dynoz AI is an AI operations platform for the hospitality and travel industry, deploying multilingual voice agents that handle guest calls, route requests, and resolve service needs around the clock. This repository contains the public-facing marketing site — a full-stack Next.js application covering the product, company, careers, and legal surfaces.

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Icons | Lucide React |
| Runtime | React 19 |
| Deployment | Vercel |

---

## Getting Started

**Prerequisites:** Node.js 18.18 or newer, npm.

```bash
cd dynoz-landing
npm install
npm run dev
```

The development server starts at [http://localhost:3000](http://localhost:3000).

| Script | Description |
|--------|-------------|
| `npm run dev` | Development server with hot reload |
| `npm run build` | Production build |
| `npm run start` | Serve production build |

---

## Site Structure

```
dynoz-landing/
├── app/
│   ├── page.tsx                  # Home
│   ├── about/                    # Company overview
│   ├── careers/                  # Careers index + dynamic [slug] role pages
│   ├── contact/                  # Contact form + embedded map
│   ├── privacy-policy/
│   ├── terms-of-service/
│   ├── disclaimer/
│   ├── layout.tsx                # Root layout, global providers
│   └── globals.css               # Design tokens, keyframes, utilities
│
├── components/
│   ├── nav.tsx                   # Scroll-aware navigation
│   ├── footer.tsx
│   ├── hero/                     # Hero section, waveform, transcript, particle field
│   ├── journey.tsx               # Guest journey phase cards
│   ├── how-it-works.tsx          # Step timeline with sticky integrations panel
│   ├── built-for.tsx             # Segment switcher with animated phone mockup
│   ├── metrics.tsx               # Count-up statistics strip
│   ├── trust-strip.tsx           # Infinite logo marquee
│   ├── cta-band.tsx              # Bottom call-to-action
│   ├── cursor.tsx                # Custom cursor system
│   ├── intro.tsx                 # Session-once splash screen
│   ├── scroll-progress.tsx       # Scroll progress indicator
│   ├── floating-orbs.tsx         # Ambient gradient background
│   ├── scroll-skew.tsx           # Scroll-velocity skew effect
│   ├── particle-field.tsx        # Canvas particle animation
│   ├── split-text.tsx            # Word-split reveal component
│   ├── tilt-card.tsx             # 3D mouse-tilt card wrapper
│   ├── legal-block.tsx           # Animated legal content blocks
│   ├── about/about-page.tsx
│   ├── careers/careers-page.tsx
│   ├── careers/job-page.tsx
│   └── contact/contact-page.tsx
│
├── lib/
│   ├── motion.ts                 # Shared Framer Motion variants
│   └── jobs-data.ts              # Static job listings catalog
│
└── public/
    ├── dynoz-d.png               # Brand icon, used as favicon
    ├── full_logo1.webp           # Full wordmark
    └── bg1.jpg                   # Hero visual asset
```

---

## Pages

| Route | Content |
|-------|---------|
| `/` | Hero, guest journey, how it works, built-for segment switcher, metrics, trust strip, CTA |
| `/about` | Mission, vision, operational model, principles, target segments |
| `/careers` | Culture values, open role listings |
| `/careers/[slug]` | Role detail, responsibilities, requirements, benefits, apply modal |
| `/contact` | Contact form, office details, embedded Google Map |
| `/privacy-policy` | Full privacy policy |
| `/terms-of-service` | Terms of service |
| `/disclaimer` | Site disclaimer |

---

## UI & UX Design

### Visual Language

The design is built around a light-dominant theme with a fixed brand gradient — orange, pink, purple, blue — used exclusively for accent elements, animated text, and interactive states. The base palette is white with transparent section backgrounds, allowing a soft radial gradient layer to persist across the full page height and remain visible through every section as the user scrolls.

All typographic accent elements (headline second lines, section gradient text, statistics) animate continuously through the brand gradient using a `background-position` sweep, giving the page a consistent sense of motion without relying on scroll triggers.

The signature card treatment — a solid 2px black border with layered hard-offset shadows — gives every content block a physical, tactile presence. This treatment is applied uniformly across the home page, careers, about, and all legal pages.

### Motion System

The site implements a layered motion architecture with 44 distinct animation effects across seven categories:

**Ambient and continuous**
- Six radial gradient orbs float across the page using three independent CSS keyframe patterns, each with different timing (18s–28s) and scale oscillation ranges.
- A canvas-based particle field runs in the hero section, with brand-colored dots drifting and pulsing independently via `requestAnimationFrame`.
- An ambient grid pattern drifts behind the hero over a 28-second cycle.
- The brand gradient sweeps continuously across all accent text at 6-second intervals.

**Scroll-linked**
- The hero image scales and translates on a `useScroll` / `useTransform` parallax track as the user scrolls past the fold.
- A scroll progress bar built from a `useState` + scroll event listener fills across the top of the viewport.
- A `requestAnimationFrame` loop reads scroll velocity and applies a real-time `skewY` CSS variable to the page content — the site subtly tilts while scrolling and springs back on release.
- The "How It Works" step connector lines fill top-to-bottom as each step becomes active.
- The navigation header transitions between transparent and frosted-glass states at 40px scroll depth.

**Entrance and reveal**
- Section content enters via scroll-triggered `whileInView` animations with staggered delays.
- Headline text is split word-by-word, each word entering with a `y: 110%` clip and a `rotateX: 40deg` perspective transform, creating a folding-in reveal effect.
- The session-once intro screen runs an 18-particle burst, two expanding ring pulses, a spring-based logo scale-in, and a staggered character-by-character wordmark reveal before sliding upward off the viewport.

**Interactive**
- Every card on the site is wrapped in a `TiltCard` component that reads mouse position relative to the element and applies `perspective(800px) rotateX() rotateY()` transforms in real time, with a smooth return to neutral on mouse leave.
- The custom cursor runs two layers via `requestAnimationFrame`: a 6px gradient dot that tracks 1:1 with the pointer, and a larger conic-gradient ring that trails behind using lerp spring interpolation and rotates continuously at variable speed depending on hover state.
- Primary CTA buttons animate their gradient background-position on hover, lift 1px on the Y axis, and pulse their box-shadow on a 3-second breathing cycle.
- The "Built For" section tab indicator and the navigation active underline both use Framer Motion `layoutId` for spring-based position transitions.

**Reduced motion**
All decorative animations — keyframes, transitions, canvas loops, cursor effects, and tilt interactions — are fully disabled when `prefers-reduced-motion: reduce` is set. The site remains fully functional and readable without any motion.

### Component Architecture

**`TiltCard`** — A client-side wrapper that applies 3D perspective tilt on `mousemove` and resets on `mouseleave`. Accepts `intensity` and `className` props. Applied to every card surface across all pages.

**`SplitText`** — Splits a string by word, wraps each in an `overflow: hidden` container, and animates each word in from `y: 110%` with `rotateX` on scroll entry. Accepts tag, delay, className, and style props.

**`FloatingOrbs`** — Renders six absolutely-positioned radial gradient divs with independent CSS keyframe float patterns. Fixed to the viewport to serve as the persistent background layer across all pages.

**`ScrollSkew`** — Null-rendering component that reads scroll velocity via event listener and writes a `--scroll-skew` CSS variable to `:root` each frame, consumed by the page wrapper.

**`ParticleField`** — Canvas element with a `ResizeObserver`-aware `requestAnimationFrame` loop. Particles wrap at viewport edges, pulse their alpha on a sine wave, and use brand colors.

**`ScrollProgress`** — Thin gradient bar at the top of the viewport, width driven by `scrollY / (documentHeight - viewportHeight)`.

**`LegalBlock`** — Shared card component used across the three legal pages. Wraps a `TiltCard` inside a `motion.div` with scroll-triggered fade and staggered index-based delay.

**`Intro`** — Session-once preloader using `sessionStorage` to prevent repeat display on navigation. Runs a multi-phase animation sequence: spark burst, ring pulses, logo spring, wordmark stagger, tagline fade, then slides the full-screen overlay upward to reveal the page.

### Responsive Design

The site is built mobile-first. Layouts shift at the `md` (768px) and `lg` (1024px) Tailwind breakpoints. The hero image, particle field, and tilt effects are suppressed on smaller screens. The navigation collapses to a hamburger menu with a full-screen overlay on mobile. All form inputs, modals, and card grids adapt to single-column layouts on small viewports.

---

## Key Features

- Animated live demo transcript in the hero — a looping multilingual guest/agent conversation with per-character typing and a synchronized waveform visualizer
- Scroll-driven "How It Works" step timeline with sticky integrations panel and dynamic connector line fill
- Per-segment tab switcher in "Built For" with an animated phone mockup and staggered message bubble entrances
- `requestAnimationFrame` count-up animation on all metric figures, triggered on scroll entry
- Infinite logo marquee in the trust strip, pausing on hover
- Dynamic career role pages generated from a static jobs catalog with slug-based routing
- Apply modal with CV upload field, project links, and a prefilled `mailto:` submission
- Contact form with embedded Google Map
- Full legal page coverage — Privacy Policy, Terms of Service, Disclaimer

---

## Author

**Bhaskar Shamo Ray**
bhaskarshamoray11@gmail.com
