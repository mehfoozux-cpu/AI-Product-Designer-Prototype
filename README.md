# Adalfi — AI-Native Product Design Prototype

**Live Demo →** [mehfoozux-cpu.github.io/AI-Product-Designer-Prototype](https://mehfoozux-cpu.github.io/AI-Product-Designer-Prototype)

A fintech UI prototype designed and shipped entirely through a prompt-driven AI workflow — no developer handoff, no manual code. Built by a Product Designer to demonstrate how AI tools can collapse the gap between design intent and live product.

---

## Project Overview

**Adalfi** is a smart lending product for a fintech startup. This prototype covers the complete user journey: eligibility check, offer comparison, loan customisation, and confirmation — all built as interactive, mobile-first HTML screens from a token-based design system.

The goal was not just to design a great product, but to prove a new workflow: **Figma → Design Tokens → Prompt → Prototype → Public URL** — in a single sprint, without writing a line of code by hand.

---

## Design Challenge

> *"Can a Product Designer ship a recruiter-ready, interactive prototype — with a real design system — using only AI as the build engine?"*

**Constraints:**
- No developer or code handoff
- Must use the Adelphi design system (not ad-hoc styling)
- Must be publicly accessible via URL
- Must run correctly in a real browser (not just a Figma mirror)

---

## AI Workflow

### Step 1 — Token Extraction
Extracted every design decision from the Figma source file: colour roles (primary, surface, error, etc.), type scale (Display → Caption), spacing scale, border radii, elevation shadows, and control sizes. Encoded them as CSS custom properties in `adelphi-tokens.css`.

### Step 2 — Semantic Token Architecture
Built a two-layer token system:
- **Primitives** (`--p-*`) — raw values (hex, px, rem). The "ink".
- **Semantic** (`--color-*`, `--text-*`, `--space-*`) — named by role, not value.

This means changing a brand colour in one line cascades across every screen automatically. Both Light and Dark modes are encoded; switching is a single `data-theme` attribute.

### Step 3 — Tailwind Mapping
Mapped all semantic tokens to Tailwind config so that AI tools (v0, Figma Make, Cursor) generate on-system output automatically — no hard-coded hex values, no rogue px values.

### Step 4 — Prompt-Driven Screen Build
Each screen was built by prompting Claude with:
1. The token file as context
2. The screen's information architecture and user goal
3. The instruction: *"Use ONLY semantic tokens. Never hard-code values."*

Output: production-quality HTML/CSS for each screen, token-compliant by construction.

### Step 5 — Flow Assembly
Assembled all screens into a single interactive file with iOS-style phone shell, smooth transitions, navigation logic, and real-time state.

---

## Tools Used

| Tool | Role |
|---|---|
| **Figma** | Source of truth — design system, components, intent |
| **Claude (Anthropic)** | Primary build engine for token architecture + screen code |
| **Figma Make / v0** | Rapid UI generation constrained to Adelphi tokens |
| **GitHub Pages** | Zero-config public hosting |

---

## Files

```
/
├── index.html              ← Portfolio landing page
├── smart-lending-flow.html ← Interactive prototype (main deliverable)
├── preview.html            ← Live design token preview + dark/light toggle
├── adelphi-tokens.css      ← Complete design token system (CSS)
└── tailwind.config.js      ← Token → Tailwind class mapping
```

---

## Design System Highlights

- **Two-layer token architecture** — primitives + semantic roles
- **Light + Dark mode** — single attribute toggle, zero component changes
- **Full type scale** — Display / Headline / Title / Body / Caption / CTA
- **Spacing system** — 4px base grid with semantic intent aliases
- **Elevation system** — 4 levels assembled from Figma effect values
- **Control sizing** — button heights and icon sizes (tiny → large)

---

## Resume Bullets

- **Designed and shipped a fintech prototype (Adalfi)** using a prompt-to-prototype AI workflow — from Figma token extraction through live GitHub Pages deployment — without a developer or code handoff
- **Built a token-based design system** (Adelphi) with a two-layer CSS architecture covering colour, type, spacing, radius, and elevation across Light and Dark modes, mapped to Tailwind for AI-tool output consistency
- **Demonstrated AI-native product design process** by prompting Claude with structured design context to generate token-compliant, production-quality HTML/CSS screens — collapsing a full design-to-dev sprint into a solo workflow

---

## Designer

**Mehfooz Ali** — Product Designer
mehfooz.ux@gmail.com
