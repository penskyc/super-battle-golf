# Super Battle Golf League

**The official website of the SBGL — the world's premier full-contact, explosives-permitted golf competition.**

> *Where Every Stroke is a Battle*

## About

Super Battle Golf is a real sport. Professional athletes compete on specially designed Battle Courses using regulation golf equipment and approved tactical munitions. The SBGL governs all official competition across 18 countries.

This site covers Season 7 — featuring 12 elite competitors, $2.4M in total prize money, and the most dangerous courses on earth.

## Pages

| Page | Description |
|------|-------------|
| [Home](site/public/index.html) | Live ticker, hero section, season stats, player cards, news |
| [About](site/public/about.html) | Origin story, official rules, Arsenal Catalog, Battle Courses |
| [Players](site/public/players.html) | Season 7 roster — 12 competitors with stats and specialties |
| [Schedule](site/public/schedule.html) | Tournament calendar, live event banner, prize pools |
| [Leaderboard](site/public/leaderboard.html) | Season standings, stat leaders, Grand Slam qualification |
| [News](site/public/news.html) | Match reports, player news, league updates |

## Built With

This site was a collaborative effort between some powerful AI tools:

- **[Google Stitch](https://stitch.withgoogle.com/)** — AI-powered UI design tool that generated the page layouts, component structure, and visual design system from text prompts. Stitch did the heavy lifting on the actual design — the dark cyberpunk-sports aesthetic, the Tailwind config, the component patterns, all of it.

- **[Claude Code](https://claude.ai/code)** — Used to orchestrate the Stitch MCP server, download and integrate the generated HTML, standardize navigation and footers across all pages, fix design consistency issues, and handle the GitHub deployment pipeline.

- **[Tailwind CSS](https://tailwindcss.com/)** (via CDN) — Utility-first CSS used throughout all pages, configured by Stitch with a custom dark theme token set.

- **[Google Fonts](https://fonts.google.com/)** — Space Grotesk (headlines), Inter (body), JetBrains Mono (stats/numbers), Material Symbols (icons).

## Design System

| Token | Value | Role |
|-------|-------|------|
| Bunker Black | `#0d0e10` | Page background |
| Battle Green | `#9cff93` / `#00fc40` | Primary accent, active states |
| Explosion Orange | `#ff7524` | Secondary accent, highlights |
| Snow White | `#fdfbfe` | Primary text |
| Iron Gray | `#181a1c` | Surface / nav background |

## Development

The project uses a [Stitch Loop](https://stitch.withgoogle.com/docs/) baton pattern for iterative page generation. Design files, prompts, and screen metadata live in `.stitch/`.

```
stitch-project/
├── .stitch/          # Stitch project metadata, design system, prompts
│   ├── DESIGN.md     # Design system source of truth
│   ├── SITE.md       # Site vision and sitemap
│   ├── metadata.json # Stitch project & screen IDs
│   └── designs/      # Raw HTML downloaded from Stitch
└── site/
    └── public/       # Production pages (deployed to GitHub Pages)
```

To generate the next page, update `.stitch/next-prompt.md` and run the stitch-loop skill via Claude Code.

## License

SBGL is a fictional sports league inspired by the video game *Super Battle Golf*. All content is for creative/demo purposes.
