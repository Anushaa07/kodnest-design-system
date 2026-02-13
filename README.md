# KodNest Premium Build System

A premium SaaS design system. Calm, intentional, coherent, confident.

## Design Philosophy

- **Calm** — No gradients, glassmorphism, neon, or animation noise
- **Intentional** — Consistent spacing, typography, and interaction patterns
- **Coherent** — Maximum 4 colors, one visual language
- **Confident** — Serif headings, generous whitespace, clear hierarchy

## File Structure

```
kodnest-design-system/
├── design-tokens.css   # Colors, typography, spacing, layout variables
├── base.css            # Reset, typography, body styles
├── layout.css          # Top bar, context header, workspace, panel, proof footer
├── components.css      # Buttons, inputs, cards, prompt box, error/empty states
├── utilities.css       # Spacing, transitions, text helpers
├── kodnest.css         # Single entry point (imports all)
├── index.html          # Design system showcase
└── README.md
```

## Usage

Link the main stylesheet:

```html
<link rel="stylesheet" href="kodnest.css">
```

## Layout Structure

Every page follows:

1. **Top Bar** — Project name | Progress (Step X / Y) | Status badge
2. **Context Header** — Serif headline + 1-line subtext
3. **Main** — Primary Workspace (70%) + Secondary Panel (30%)
4. **Proof Footer** — Checklist (UI Built, Logic Working, Test Passed, Deployed)

## Design Tokens

| Token | Value |
|-------|-------|
| Background | #F7F6F3 |
| Primary text | #111111 |
| Accent | #8B0000 |
| Success | #4A6B4A |
| Warning | #8B6914 |
| Spacing | 8, 16, 24, 40, 64px |
| Transition | 175ms ease-in-out |
| Border radius | 6px |

## Typography

- **Headings:** Libre Baskerville (serif)
- **Body:** Source Sans 3 (sans-serif), 16–18px, line-height 1.6–1.8
- **Text max width:** 720px

## Components

- **Primary button:** Solid deep red
- **Secondary button:** Outlined
- **Cards:** Subtle border, no drop shadows
- **Inputs:** Clean borders, clear focus state

---

*Everything must feel like one mind designed it. No visual drift.*
