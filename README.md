# 🔩 METAL KIT — Metal Fabrication Website

![Status](https://img.shields.io/badge/status-in_development-f9b234?style=for-the-badge)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![React Router](https://img.shields.io/badge/React_Router-7-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-10-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)

A multi-page marketing website for **METAL KIT**, a custom metal fabrication workshop that builds carports, staircases, gazebos and hangars. It is built with React 19, React Router 7 and Tailwind CSS 4 on Vite. The site has four routed pages (Home, Services, Projects, Contacts) plus a 404 page, a filterable project portfolio, and a validated quote request form. Data comes from a mock API layer that can later be replaced with a real backend.

---

## ✨ Features

- **Four-page site with a 404 route:** Home, Services, Projects and Contacts share one layout (navbar and footer). Any unknown URL shows a "Page not found" screen.
- **Hero with a quote CTA:** a full-height photo hero, a full-width "Request a quote" button that jumps to the form, and a strip of four selling points (build time, fixed deadlines, delivery & installation, 2-year warranty).
- **Services overview and catalogue:** the home page shows numbered service cards. Each card links to an anchored section on the Services page, which has a description, a photo gallery, a "Get a price" button and, where the portfolio has examples, a "View projects" link.
- **Filterable project gallery:** category chips (All, Canopies, Staircases, Railings) show item counts. While loading, the gallery shows shimmer skeletons. It reveals captions on hover and has a Retry button if loading fails.
- **Quote request form:** name, phone and consent fields with inline validation. The phone field formats a Russian number as you type (`+7 (916) 123-45-67`). The form has loading, success ("Send another") and error states.
- **Audience, About and Process sections:** who the structures are for, company background, and a six-step "How we work" timeline with filled and outlined numerals.
- **FAQ accordion:** five common questions, with one panel open at a time.
- **Contact details:** workshop address with a "Get directions" link to Yandex Maps, clickable `tel:` and `mailto:` links, and WhatsApp / Telegram buttons.
- **Responsive navigation:** desktop links with an animated active underline. Below `lg`, a hamburger opens a collapsible menu that closes on navigation or <kbd>Esc</kbd>.
- **Motion:** page-to-page transitions and scroll-triggered reveal animations, both of which respect `prefers-reduced-motion`.

---

## 🛠️ Tech Stack

- **UI library:** React 19 (`react`, `react-dom` ^19.3)
- **Routing:** React Router 7 (`react-router-dom` ^7.18) with `BrowserRouter`
- **Styling:** Tailwind CSS 4 (`tailwindcss` ^4.3) via the `@tailwindcss/vite` plugin, with design tokens defined in `@theme`
- **Class utilities:** `clsx` ^2.1 and `tailwind-merge` ^3.7, combined in a `cn()` helper
- **Build tool:** Vite 8 (`vite` ^8.3) with `@vitejs/plugin-react` ^6.1
- **Linting:** ESLint 10 (flat config) with `eslint-plugin-react-hooks` ^7 and `eslint-plugin-react-refresh` ^0.5
- **Fonts:** Onest (body) and Unbounded (numerals) from Google Fonts
- **Language:** JavaScript (JSX), with a `@/` path alias to `src/` configured in `vite.config.js` and `jsconfig.json`

---

## 🧠 Engineering Highlights

### Performance
- **Route-level code splitting:** every page is loaded with `React.lazy` inside `<Suspense>`. The fallback (`PageLoader`) takes up the full viewport height so the footer doesn't jump.
- **LCP-focused hero:** `index.html` preloads the hero image with `imagesrcset` (640w / 1200w) and `fetchpriority="high"`. The first page load is not animated, so the hero renders right away.
- **CLS-safe `<Image>` component:** a box sized by aspect ratio, explicit `width`/`height`, `loading="lazy"`, a shimmer skeleton until the image decodes, and the alt text as a fallback if the image fails to load.
- **Memoized shell:** `Layout` doesn't subscribe to the router location, and `Navbar`/`Footer` are wrapped in `memo`. The footer doesn't re-render on route changes.
- **WebP images throughout**, served from `public/images`.

### Custom hooks & utilities
- **`useFetch`:** a small data-fetching hook that aborts the previous request with an `AbortController` whenever its key changes. It supports `refetch()`, uses React 19's `useEffectEvent`, and computes `loading` from the current state instead of storing it, so a new key shows the loading state on the same render.
- **`useScrolled`:** built on `useSyncExternalStore` with a passive scroll listener. It only re-renders when the threshold is crossed, and the navbar uses it to switch to its solid background.
- **`cn()`:** `clsx` + `tailwind-merge`, extended with the project's custom `text-*` and `shadow-*` tokens. Without that extension, `tailwind-merge` would treat `text-h2` as a color and drop it when `text-primary` is also present.
- **Mock API (`utils/api.js`):** `getProjects` and `submitLead` simulate a 900 ms response time that can be cancelled with an abort signal. They use the same signal-in / Promise-out signatures that real `fetch()` calls would.
- **Phone mask (`utils/validators.js`):** normalizes leading `8` or a missing `7`, and handles backspace over formatting characters so deleting a digit doesn't get stuck on `)` or `-`.

### Animation without a library
- **`AnimatedOutlet`:** route transitions built on CSS keyframes. The old page plays `page-out`, then on `animationend` it is swapped out and the new page plays `fade-up`. Navigating to a hash on the same page swaps immediately. Hash targets on lazy-loaded pages are retried until the target element exists.
- **`Reveal`:** `IntersectionObserver` and the Web Animations API. Elements already on screen at mount are left alone, so there's no flash, and sibling animations are staggered with a `delay` prop.
- **Reduced motion:** under `prefers-reduced-motion`, animation durations are shortened to `0.01ms` instead of removed, so `animationend` still fires and route swaps keep working.

### Accessibility
- **Skip link** that moves focus to `<main>` without changing the URL. After each route transition, focus also moves to `<main>`.
- **Accessible menu and accordion:** `aria-expanded` and `aria-controls` on toggles. Closed accordion panels are `invisible`, which keeps their content out of the tab order.
- **Form errors:** `aria-invalid` and `aria-describedby` on invalid fields, focus moves to the first invalid field, and submit failures use `role="alert"`.
- **Live regions:** the gallery announces loading and result counts through an `aria-live="polite"` status.
- **Visible focus:** a 2px amber `focus-visible` outline on interactive elements, plus screen-reader-only headings where the design has no visible title.

### SEO
- **Per-page metadata** via a `<Seo>` component using React 19's built-in hoisting of `<title>`, `<meta>` and `<link>` into `<head>`: canonical URL, Open Graph, Twitter card, and `noindex` on the 404 page.
- **Structured data:** JSON-LD for `LocalBusiness` and `FAQPage` on the home page, with `<` escaped so the data can't close the script tag early.
- **`robots.txt` and `sitemap.xml`** in `public/`.

---

## 📁 Folder Structure

```text
MetalKit/
├── public/
│   ├── images/
│   │   ├── audience/          # Photos for the "Who it's for" section
│   │   ├── bands/             # Background photos for lead-form bands
│   │   ├── projects/          # Portfolio images p-01 … p-12
│   │   ├── services/          # Service card and catalogue photos
│   │   ├── about.webp         # About section / Projects page hero
│   │   ├── hero-640.webp      # Hero image, small
│   │   ├── hero-1200.webp     # Hero image, large (preloaded LCP)
│   │   ├── logo.png           # Logo (PNG)
│   │   └── logo.webp          # Logo used in navbar and footer
│   ├── favicon.svg            # Site icon
│   ├── robots.txt             # Crawler rules + sitemap location
│   └── sitemap.xml            # The four public routes
├── src/
│   ├── components/
│   │   ├── layout/            # Navbar, Footer, SkipLink, AnimatedOutlet (route transitions)
│   │   ├── sections/          # Page sections: Hero, ServicesGrid, LeadForm, ProjectsGallery, Faq, …
│   │   ├── seo/               # Seo: per-page <title>, meta tags and JSON-LD
│   │   └── ui/                # Reusable UI: Button, Image, Reveal, Accordion, Field, Skeleton, …
│   ├── data/
│   │   └── content.js         # All static copy: nav, services, projects, FAQ, contacts, page meta
│   ├── hooks/
│   │   ├── useFetch.js        # Abortable data fetching with refetch
│   │   └── useScrolled.js     # Scroll-threshold flag via useSyncExternalStore
│   ├── layouts/
│   │   └── Layout.jsx         # Persistent shell (skip link, navbar, main, footer)
│   ├── pages/                 # Home, Services, Projects, Contacts, NotFound
│   ├── utils/
│   │   ├── api.js             # Mock API (getProjects, submitLead)
│   │   ├── cn.js              # clsx + tailwind-merge helper
│   │   ├── seo.js             # Site constants and JSON-LD builders
│   │   └── validators.js      # Phone validation and as-you-type formatting
│   ├── App.jsx                # Route table with lazy-loaded pages
│   ├── index.css              # Tailwind import, design tokens, custom utilities, base styles
│   └── main.jsx               # Entry point: React root + BrowserRouter
├── .gitignore                 # Ignored files (node_modules, dist, logs, editor folders)
├── eslint.config.js           # ESLint flat config (React Hooks + React Refresh)
├── index.html                 # HTML template, fonts, hero preload
├── jsconfig.json              # @/ path alias for the editor
├── package.json               # Scripts and dependencies
├── package-lock.json          # Locked dependency versions
└── vite.config.js             # Vite config: React + Tailwind plugins, @/ alias
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 20.19+ or 22.13+ (required by Vite 8 and ESLint 10)
- **npm** (bundled with Node.js)
- **Git**

### Installation

1. Clone the repository:

```bash
git clone https://github.com/K01J10W19/MetalKit.git
```

2. Move into the project folder:

```bash
cd MetalKit
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server (http://localhost:5173):

```bash
npm run dev
```

5. Build for production (outputs to `dist/`):

```bash
npm run build
```

6. Preview the production build locally:

```bash
npm run preview
```

Optionally, lint the project:

```bash
npm run lint
```

> **Hosting note:** the app uses `BrowserRouter`, so the host must serve `index.html` for every route (SPA fallback). Otherwise, refreshing `/services` or `/projects` returns a 404.

---

## 📱 Responsive Strategy

The layout is mobile-first. Tailwind's default breakpoints are replaced in `src/index.css` with three custom tiers (`md` and `xl` are removed):

| Tier | Min width | Token |
| --- | --- | --- |
| Base | < 640px | — |
| `sm` | 640px (`40rem`) | `--breakpoint-sm` |
| `lg` | 1024px (`64rem`) | `--breakpoint-lg` |
| `2xl` | 1440px (`90rem`) | `--breakpoint-2xl` |

### Layout changes per breakpoint

| Component | Base | `sm` | `lg` | `2xl` |
| --- | --- | --- | --- | --- |
| Navbar | Logo + hamburger menu | + "Get in touch" button | Inline links, hamburger hidden | — |
| Feature strip | 2 × 2 grid | — | 4 in one row | — |
| Service cards (Home) | 1 column | 2 columns | 4 columns | — |
| Audience / Process steps | 1 column | 2 columns | 3 columns | — |
| Project gallery | 2 columns | — | 4 columns | — |
| Service catalogue gallery | 1 column | 2 columns | 3 columns | — |
| Footer columns | 1 column | 2 columns | 3 columns | — |
| Lead form | Full width, photo fills the band | Larger padding | Form takes the right half, photo covers 58% | Larger vertical padding |
| Contact details rows | Label above value | Label in a ⅓-width column | — | — |
| Section headers | Eyebrow above title | — | Eyebrow in a ¼-width column (`eyebrow-col`), content aligned past it (`offset-col`) | — |
| Section padding | 64px | — | 96px | 128px |

### Fluid sizing

- **Page container (`shell`):** full width up to a 1440px maximum, with gutters that scale from 16px to 48px via `clamp(1rem, 3.333vw, 3rem)`.
- **Fluid type scale:** headings, leads and numerals use `clamp()` values (e.g. `--text-h1: clamp(2rem, 1.25rem + 3vw, 4.5rem)`), so text scales smoothly between breakpoints.
- **Responsive images:** the hero uses `srcset` with 640w and 1200w sources and `sizes="100vw"`, and its height is capped at `min(100svh, 55rem)`.
- **Touch targets:** buttons, nav links and filter chips have a minimum height of 40–64px (`min-h-10` to `min-h-16`), and mobile menu rows are 64px tall.
