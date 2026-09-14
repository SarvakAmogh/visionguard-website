# VisionGuard Website

Premium cinematic website for **VisionGuard** — Privacy-first perception layer for browser AI agents.

## Project

- **Team**: AgentX
- **Product**: VisionGuard
- **Event**: Smart India Hackathon 2026
- **Core System**: PERCEIVE → REDACT → REASON → ACT

## Overview

A sophisticated, editorial-driven website inspired by high-end cinematic design (reference: White Desert). Minimal aesthetic, dramatic typography, restrained use of color. No generic SaaS styling, gradients, or dashboard layouts.

## Design System

### Colors
- **Near Black**: `#08090B` (primary background)
- **Dark Secondary**: `#111318`
- **Warm White**: `#F3F1EB` (primary text)
- **AgentX Blue**: `#1A3C6E` (accent, used sparingly)
- **Text Hierarchy**: Primary → Secondary → Muted

### Typography
- **Display**: Instrument Serif (huge, dramatic headings)
- **Body**: Inter (restrained body text)
- **Technical**: JetBrains Mono (labels, micro text)
- **Contrast**: Dramatic size differences between display and micro typography

### Spacing
- Fluid `clamp()` values for responsive gutters
- Generous whitespace
- Full-screen sections with centered content

### Animation
- Scroll-triggered fade-in (FadeInUp)
- Refined easing curves
- Respects `prefers-reduced-motion`
- No excessive bouncing, scaling, or effects

## Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout with Navigation
│   ├── page.tsx                # Home / Experience
│   ├── how-it-works/page.tsx   # How It Works
│   ├── agentx/page.tsx         # Team / Contact
│
├── components/
│   ├── Navigation.tsx          # Minimal editorial nav
│   ├── Section.tsx             # Layout wrapper (variants)
│   ├── Container.tsx           # Max-width wrapper
│   ├── FadeInUp.tsx            # Scroll animation
│   ├── Divider.tsx             # 1px editorial divider
│
├── hooks/
│   ├── useViewportSize.ts      # Responsive breakpoint hook
│   ├── useInView.ts            # Intersection observer hook
│
├── constants/
│   ├── theme.ts                # Design tokens
│
├── styles/
│   ├── globals.css             # Global styles, typography classes
```

## Getting Started

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production
```bash
npm run build
npm start
```

## Tech Stack

- **Next.js 14** — React framework with app router
- **React 18** — UI library
- **TypeScript** — Type safety
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Animation library
- **Inter & Instrument Serif** — Google Fonts

## Component Usage

### Section
Full-screen or editorial sections with variants:
```tsx
<Section variant="full" fullHeight>
  {/* Full-height, full-width content */}
</Section>

<Section variant="editorial">
  {/* Editorial section with padding */}
</Section>

<Section variant="narrow" size="sm">
  {/* Narrow text block (max-width: 32rem) */}
</Section>

<Section variant="wide">
  {/* Wide media section (max-width: 64rem) */}
</Section>
```

### FadeInUp
Scroll-triggered fade animation:
```tsx
<FadeInUp delay={0.2}>
  <h2>Animated heading</h2>
</FadeInUp>
```

### Divider
Subtle 1px separator:
```tsx
<Divider variant="subtle" />
<Divider variant="muted" />
```

### Container
Centered max-width wrapper:
```tsx
<Container size="lg">
  {/* lg: max-w-6xl, md: max-w-4xl, sm: max-w-2xl, full: no limit */}
</Container>
```

## Design Principles

- **Cinematic**: Immersive, full-viewport sections
- **Editorial**: Beautiful typography, dramatic contrast
- **Minimal**: Restrained color, whitespace-driven layout
- **Sophisticated**: Refined interactions, no skeuomorphism
- **Technical**: Precision typography, clear hierarchy
- **Premium**: Polished, high-end digital experience

## What's NOT Included

- Generic AI gradients or neon effects
- Purple SaaS styling
- Glassmorphism
- Excessive rounded cards
- Generic robot illustrations
- Stock corporate imagery
- Dashboard layouts
- Fake statistics, testimonials, or customers

## Next Steps

1. Build cinematic hero section with immersive imagery
2. Create editorial sections for core messaging
3. Develop the "PERCEIVE → REDACT → REASON → ACT" visual narrative
4. Add detailed technical documentation sections
5. Implement contact/CTAs aligned with premium aesthetic

## Development Notes

- All components use `'use client'` for interactivity
- Tailwind custom classes for typography (e.g., `.text-display-lg`)
- Theme tokens centralized in `src/constants/theme.ts`
- Animation hooks use IntersectionObserver for performance
- Responsive design uses fluid spacing (no breakpoint hacks)

---

Built for **Smart India Hackathon 2026** by **AgentX**.
