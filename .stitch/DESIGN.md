# Super Battle Golf — Design System

## 1. Brand Identity

**Super Battle Golf** is a full-contact, explosives-permitted competitive sport derived from traditional golf. The brand is aggressive, electric, and unapologetically loud — equal parts sports league and combat league.

**Tagline:** *Where Every Stroke is a Battle*

---

## 2. Color Palette

| Role | Name | Hex |
|------|------|-----|
| Background (dark) | Bunker Black | `#0A0B0D` |
| Surface | Fairway Dark | `#111318` |
| Surface Elevated | Iron Gray | `#1A1D25` |
| Primary Accent | Battle Green | `#00FF41` |
| Secondary Accent | Explosion Orange | `#FF6B00` |
| Tertiary | Electric Blue | `#00C8FF` |
| Text Primary | Snow White | `#F0F4FF` |
| Text Secondary | Ash | `#8892A4` |
| Border | Crater | `#2A2D38` |
| Danger/Power | Blood Red | `#FF1744` |

---

## 3. Typography

- **Display / Headlines:** `'Bebas Neue', 'Impact', sans-serif` — All caps, ultra-bold, wide tracking
- **Body:** `'Inter', 'Segoe UI', sans-serif` — Clean, readable
- **Monospace / Stats:** `'JetBrains Mono', monospace` — Numbers, scores, leaderboards

---

## 4. Component Patterns

- **Cards:** Dark surface `#1A1D25`, 1px border `#2A2D38`, subtle glow on hover with accent color
- **Buttons Primary:** `#00FF41` bg, `#0A0B0D` text, 2px border, all-caps, hover lifts with glow
- **Buttons Secondary:** Transparent bg, `#00FF41` border & text, hover fills
- **Nav:** Sticky, `#0A0B0D` bg with bottom border `#2A2D38`, logo left, links right
- **Badges:** Pill-shaped, colored by tier (Gold/Silver/Bronze)
- **Tables:** Striped dark rows, accent-colored header, monospace numbers

---

## 5. Spatial System

- Base unit: 8px
- Border radius: 4px (small), 8px (medium), 16px (large cards)
- Section padding: `80px 0`
- Container max-width: `1200px`
- Gutter: `24px`

---

## 6. Design System Notes for Stitch Generation

```
Dark, aggressive sports website with military-meets-golf aesthetic.

DESIGN SYSTEM (REQUIRED):
- Platform: Web, Desktop-first (responsive)
- Palette: Bunker Black (#0A0B0D) background, Battle Green (#00FF41) primary, Explosion Orange (#FF6B00) secondary, Snow White (#F0F4FF) text
- Typography: Bebas Neue / Impact for headers (all-caps, tracked), Inter for body
- Styles: Sharp corners (4-8px radius), subtle neon glow effects on interactive elements, high contrast
- Atmosphere: Dark cyberpunk-sports aesthetic — think ESPN meets military operation meets golf
```

---

## 7. Visual Direction

- **Hero sections:** Full-width dark panels with angled dividers, large display type, green accent underlines
- **Section dividers:** Diagonal cuts `clip-path: polygon(...)` for energy and movement
- **Iconography:** Custom golf + combat hybrid icons (golf balls with flames, clubs as weapons)
- **Photography placeholders:** Dark-tinted sport imagery with green/orange color overlays
- **Animations:** Subtle glow pulses, counter animations on stats, slide-in on scroll
