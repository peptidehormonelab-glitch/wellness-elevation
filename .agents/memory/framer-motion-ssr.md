---
name: Framer Motion SSR Animation Pattern
description: How scroll animations are safely used with TanStack Start SSR without hydration issues.
---

## Rule
All scroll-triggered animations use `useInView({ once: true, amount: 0.12 })` from framer-motion in a shared `src/components/Motion.tsx` wrapper. Named exports: FadeUp, FadeIn, SlideLeft, SlideRight, ScaleIn, StaggerContainer, StaggerItem.

**Why:** Direct use of `useInView` in component bodies with `initial="hidden"` can cause SSR hydration mismatch if the server renders the final visible state but client starts hidden. The wrapper components handle this cleanly.

**How to apply:** Import animation wrappers from `@/components/Motion` and wrap sections. Never pass `initial` and `animate` directly to elements with scroll-detection logic on SSR pages.
