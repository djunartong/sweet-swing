# Sweet Swing Tennis 🎾

A playful, inclusive landing page for **Sweet Swing Tennis** — a tennis coaching business based in Kudus, Indonesia. Built with React + Vite as a hands-on project for learning JavaScript and React.

🔗 **Live site:** [sweetswingtennis.com](https://sweetswingtennis.com)

---

## About the Brand

Sweet Swing Tennis offers coaching for all skill levels with an emphasis on **fun, community, and accessibility** — "Tennis for Everyone." The site copy is written in casual, conversational Bahasa Indonesia (_"bareng," "asik," "yuk," "jago"_) to match the brand's warm, welcoming tone.

---

## Tech Stack

| Tool                       | Purpose                                           |
| -------------------------- | ------------------------------------------------- |
| **React + Vite**           | Framework and build tool                          |
| **Vercel**                 | Hosting and deployment (auto-deploys from GitHub) |
| **WhatsApp Click-to-Chat** | Direct messaging via `wa.me` links                |
| **Elfsight**               | Embedded live Instagram feed widget               |
| **Google Search Console**  | SEO indexing and verification                     |

---

## Project Structure

```
sweet-swing-tennis/
├── .env                 # Real environment values (gitignored, never committed)
├── .env.example          # Safe template — shows required variables without real values
├── .gitignore
├── index.html            # Entry HTML — title, meta tags, favicon, SEO tags
├── package.json
├── vite.config.js
├── public/
│   ├── images/            # Static images (logo, coach photos, etc.)
│   ├── robots.txt
│   └── sitemap.xml
└── src/
    ├── main.jsx            # React entry point — mounts <App /> to the DOM
    ├── App.jsx             # Assembles all section components
    ├── index.css           # All styles, brand colour variables, layout, responsive rules
    ├── Navbar.jsx          # Sticky nav with hamburger menu (mobile)
    ├── Hero.jsx            # Landing section with image carousel
    ├── Programs.jsx        # Program cards (Open Class, Private Session, Kids' Class, Brand Collaboration)
    ├── About.jsx           # Coach profiles carousel
    ├── Testimonials.jsx    # Student reviews
    ├── InstagramFeed.jsx   # Embedded Elfsight Instagram widget
    ├── Contact.jsx         # Contact form (sends to Whatsapp) + WhatsApp/Telegram chat links
    ├── Footer.jsx          # Logo, copyright, social links
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/sweet-swing-tennis.git
cd sweet-swing-tennis
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Copy the example file and fill in your real values:

```bash
cp .env.example .env
```

See [Environment Variables](#environment-variables) below for what each value does and how to obtain it.

### 4. Run the development server

```bash
npm run dev
```

Visit `http://localhost:5173` to view the site locally.

### 5. Build for production

```bash
npm run build
npm run preview   # preview the production build locally before deploying
```

---

## Environment Variables

All variables must be prefixed `VITE_` to be accessible in the code (a Vite requirement). Real values live in `.env` (gitignored); `.env.example` documents what's needed without exposing real data.

| Variable                  | Description                                                        | How to get it                                                                      |
| ------------------------- | ------------------------------------------------------------------ | ---------------------------------------------------------------------------------- |
| `VITE_WHATSAPP_NUMBER`    | WhatsApp number for click-to-chat (country code, no `+` or spaces) | Your business WhatsApp number                                                      |
| `VITE_TELEGRAM_USERNAME`  | Telegram username for direct chat link                             | Your Telegram `@username`                                                          |
| `VITE_TELEGRAM_BOT_TOKEN` | Bot token for sending form submissions to Telegram                 | Message [@BotFather](https://t.me/BotFather) → `/newbot`                           |
| `VITE_TELEGRAM_CHAT_ID`   | Chat ID where form submissions are delivered                       | Message your bot once, then visit `https://api.telegram.org/bot<TOKEN>/getUpdates` |
| `VITE_PHONE`              | Displayed phone number                                             | —                                                                                  |
| `VITE_EMAIL`              | Displayed email address                                            | —                                                                                  |
| `VITE_LOCATION`           | Displayed business address                                         | —                                                                                  |
| `VITE_ELFSIGHT_WIDGET_ID` | Instagram feed widget ID                                           | [elfsight.com](https://elfsight.com) → create Instagram Feed widget                |

> ⚠️ **Never commit `.env` to GitHub.** It's already listed in `.gitignore`. If you ever need to rotate a leaked credential, regenerate it at the source (e.g. new bot token from BotFather) — deleting it from a later commit does not remove it from Git history.

---

## Brand Colour Palette

Defined as CSS custom properties in `index.css`:

| Variable         | Hex       | Usage                                         |
| ---------------- | --------- | --------------------------------------------- |
| `--pink`         | `#F2C4D0` | Hero background, navbar, testimonials section |
| `--pink-card`    | `#F5B8C8` | Card accents                                  |
| `--yellow-green` | `#CEDA58` | Primary brand accent, CTAs, headlines         |
| `--dark-green`   | `#4B5E1C` | Body text, contact section background         |
| `--yellow`       | `#F5E06A` | Program card accent                           |
| `--mint`         | `#C8EDD6` | Program card accent                           |
| `--sky`          | `#A8D8EA` | Program card accent                           |
| `--cream`        | `#F0EDE8` | Alternating section background                |
| `--charcoal`     | `#1A1A1A` | Primary text                                  |

---

## Key Features

- **Mobile hamburger menu** — animated slide-down navigation for small screens
- **Whatsapp-powered contact form** — submissions arrive instantly as Whatsapp message, no backend required
- **WhatsApp click-to-chat** — pre-fills a message with the visitor's form details
- **Live Instagram feed** — embedded via Elfsight, updates automatically without code changes
- **SEO-ready** — includes `sitemap.xml`, `robots.txt`, Open Graph tags, and Google Search Console verification

---

## Deployment

Hosted on **Vercel**, connected to this GitHub repository for automatic deployments.

1. Push to `main` → Vercel automatically builds and deploys
2. Environment variables are configured separately in **Vercel → Project Settings → Environment Variables** (not read from `.env`, which never leaves your local machine)
3. Build command: `npm run build` · Output directory: `dist`

To deploy your own copy, see [Vercel's documentation](https://vercel.com/docs) for connecting a GitHub repository.

---

## Learning Notes

This project was built as a hands-on way to learn React fundamentals, including:

- State management with `useState` or `useEffect` (form state, carousel index, mobile menu toggle)
- Side effects and cleanup with `useEffect` (auto-advancing carousel, dynamic script loading)
- Refs with `useRef` (swipe gesture detection)
- Environment variables and `.gitignore` for keeping credentials out of version control

---

## License

This project is privately maintained for Sweet Swing Tennis. Not licensed for reuse without permission.
