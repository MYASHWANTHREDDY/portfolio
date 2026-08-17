# Portfolio — Yashwanth Reddy Mallareddygari

Personal portfolio site. React 19 + Vite + Tailwind, deployed on Vercel.

**Live:** https://portfolio-dun-one-90.vercel.app

A single-page site covering seven projects, work experience, skills, education,
and leadership. Every metric shown on a project card is taken from that project's
own repository README — see [Content rules](#content-rules) below.

---

## Stack

| Layer | Choice |
|---|---|
| Framework | React 19 |
| Build | Vite 8 |
| Styling | Tailwind CSS 3 |
| Animation | Framer Motion |
| Icons | react-icons (Feather) |
| Fonts | Inter (body), Space Grotesk (display) |
| Hosting | Vercel |

## Running locally

```bash
npm install
npm run dev      # http://localhost:5173
```

```bash
npm run build    # production build to dist/
npm run preview  # serve the production build
npm run lint     # eslint, must exit 0
```

## Structure

```
src/
├── data/portfolioData.js   # all site content — the only file to edit for updates
├── components/
│   ├── Hero.jsx            # name, typewriter titles, tagline, CTAs
│   ├── About.jsx           # bio, contact line, education cards
│   ├── Skills.jsx          # 8 categories, colour-coded per category
│   ├── Projects.jsx        # metric-first cards with expandable details
│   ├── ProjectCarousel.jsx # screenshot carousel, renders only if screenshots exist
│   ├── Experience.jsx      # timeline
│   ├── Leadership.jsx      # roles and awards
│   ├── Contact.jsx
│   └── Navbar.jsx
└── index.css               # theme utilities (.gradient-text, .glass, .section-*)
public/screenshots/         # project screenshots referenced from portfolioData.js
```

**All content lives in `src/data/portfolioData.js`.** Components read from it and
should not need editing to add a project, skill, or role.

## Design notes

The palette is deliberately not the slate-900 / indigo-500 default that most
generated portfolios ship with:

| Token | Value | Role |
|---|---|---|
| `bg` | `#0c0a09` | warm near-black ground |
| `card` | `#15120f` | raised surface |
| `border` | `#2b2521` | hairlines and card edges |
| `accent` | `#f0b429` | the single signal hue |
| `sky` | `#e08b3a` | secondary warm tone, used sparingly |
| `textPrimary` | `#f6f1e9` | warm off-white |
| `textSecondary` | `#a49b90` | warm grey |

Two rules keep it coherent:

1. **Amber is reserved for signal** — metrics, links, active states, the logo.
   Headings are flat off-white ink, not gradient text. The numbers should be the
   brightest thing on a project card, because the numbers are the point.
2. **One display face.** Space Grotesk for headings and metric values, Inter for
   everything else.

Project cards lead with three headline metrics and a one-line summary; the full
detail bullets and screenshots sit behind a **Details** toggle. That reveal
animates height only — driving it from opacity risks leaving the content
invisible if the animation never lands.

## Content rules

When updating a project entry:

- **The repo's README is the source of truth for its metrics.** Fetch it rather
  than recalling figures:
  ```bash
  gh api repos/MYASHWANTHREDDY/<repo>/readme --jq '.content' | base64 -d
  ```
- Never link a private repository — it renders as a working link that 404s for
  every visitor.
- Every path in a project's `screenshots` array must exist in
  `public/screenshots/`. Quick check:
  ```bash
  for f in $(grep -o "screenshots/[a-z0-9-]*\.png" src/data/portfolioData.js); do
    [ -f "public/$f" ] || echo "BROKEN /$f"
  done
  ```
- If a figure appears in more than one place (a project stat and the bio, say),
  update both.
- `stats` renders in a three-column grid, so give each project exactly three.

## Featured projects

| Project | What it is |
|---|---|
| [patient-identity-resolution](https://github.com/MYASHWANTHREDDY/patient-identity-resolution) | Healthcare MDM — Fellegi-Sunter record linkage, verified on a 5M-record GCP run |
| [trialsage](https://github.com/MYASHWANTHREDDY/trialsage) | LangGraph clinical trial screening agent with three-valued eligibility |
| [medbridge-mcp](https://github.com/MYASHWANTHREDDY/medbridge-mcp) | MCP server exposing clinical trials, FDA recalls, and drug labels as typed tools |
| [medcite](https://github.com/MYASHWANTHREDDY/medcite) | Healthcare RAG with per-claim citations and two-tier evaluation |
| [ecommerce-streaming-analytics](https://github.com/MYASHWANTHREDDY/ecommerce-streaming-analytics) | Kafka → Spark → dbt lakehouse with Airflow orchestration |
| [csuf-scheduler](https://github.com/MYASHWANTHREDDY/csuf-scheduler) | OR-Tools CP-SAT workforce scheduling platform |
| [HINDU-YUVA](https://github.com/MYASHWANTHREDDY/HINDU-YUVA) | Full-stack club platform, React 19 + Express, CI/CD to Vercel and Railway |

## Contact

- **Email** — yashwanthmallareddygari@gmail.com
- **LinkedIn** — https://linkedin.com/in/yashwanthreddymallareddygari
- **GitHub** — https://github.com/MYASHWANTHREDDY
