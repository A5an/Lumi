# Stimuler Landing — 1:1 React + Tailwind + Framer Motion

This repository reconstructs **https://stimuler.tech/** as a **pixel-perfect, animation-identical** local project using **React + Vite + TailwindCSS + Framer Motion**.

> You confirmed ownership and granted permission to reproduce all assets for redevelopment.

## Stack
- React 18 + Vite
- TailwindCSS 3
- Framer Motion 11

## Setup
```bash
npm install
npm run dev
```

## One-time steps for 100% parity

1. **Drop assets** under `public/assets/` using the exact names referenced in code:
   - `logo.svg`, `device-1.png`, `device-2.png`, `device-3.png`
   - `feature-impromptu.png`, `feature-themes.png`, `feature-tests.png`
   - `avatar-1.png`, `avatar-2.png`, `avatar-3.png`
   - `press-inc42.png`, `noise.png`
2. **Paste exact tokens**
   - Open `src/index.css` and replace all `--color-*`, `--radius-*`, `--shadow-*`, `--ease-*`, `--dur-*`, and typography sizes with the values from your live DOM (Chrome DevTools → Computed).
   - If the site uses a non-default font, adjust `--font-sans` and add the correct Google Fonts import or `@font-face` in `index.html`.
3. **Match breakpoints**
   - If your live layout uses custom widths, add/update them in `tailwind.config.js > theme.extend.screens`.
4. **Content**
   - Replace any placeholder snippets with the exact live copy inside components.
5. **QA**
   - Use DevTools rulers and overlay to verify exact paddings/margins and container widths.
   - Verify easing and durations through Framer Motion inspector or computed styles.

## Notes
- This repo avoids creative deviation. All values are **tokenized** so you can paste exact numbers and ship a clone indistinguishable from production.
