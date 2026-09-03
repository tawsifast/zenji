# ZENJI — Anime Streetwear Australia

A static e-commerce storefront for an Australian anime-inspired streetwear brand. Built with cutting-edge, edge-case-driven UI: neon-brutalist typography, custom scroll/reveal animations, a splash intro, sticky-stacked product showcases, and a full cart + checkout flow.

> **Design prototype.** This project is a frontend design clone. There is no backend, no database, no real authentication, and no real payment processing — checkout and all forms resolve locally on the client.

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org) (App Router) — 16.3.3 |
| **UI** | React 19.2.8 with the React Compiler |
| **Styling** | Tailwind CSS v4 |
| **Fonts** | Google Fonts via `next/font`: Anton, Archivo, JetBrains Mono, IBM Plex Mono, Space Mono |
| **Media** | Cloudinary (`res.cloudinary.com`) via `next/image` |
| **State** | React Context + `useSyncExternalStore`, persisted to `localStorage` |
| **Deploy** | [Vercel](https://vercel.com) |

## Getting Started

Prerequisites: [Node.js](https://nodejs.org).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create an optimized production build |
| `npm start` | Run the production build |
| `npm run lint` | Run ESLint |

## Pages & Features

| Route | Description |
|---|---|
| `/` | Homepage: splash intro, marquee, nav, hero, Four Worlds, sticky drop showcase, latest drops, ethos |
| `/drop` | Upcoming "Awakening" drop: hero, live countdown, waitlist, sale collection |
| `/drop/[slug]` | Product detail page for all 10 tees (statically generated). Gallery, size selector, accordion details, sticky mobile add-to-cart |
| `/collection` | Full product archive. Filter bar (ALL / SALE / NEW_ARRIVAL / LIMITED / ZANGETSU) + **URL-driven search** (`?search=...`) |
| `/lookbook` | Editorial masonry gallery with FRONT / BACK / ON MODEL views |
| `/our-story` | Brand story with animated word-reveal sections |
| `/checkout` | 4-step checkout: delivery, shipping, payment (mock Stripe-style UI), billing. Promo code `ZENJI10` = 10% off |
| `/wishlist` | Device-local wishlist grid |
| `/login` | Mock sign-in / create account UI (no real auth) |
| `/account/*` | Stub pages that redirect to login |
| `/faq`, `/review`, `/contact` | Support & community: accordion FAQ, review UI + form, contact form |
| `/terms`, `/privacy-policy`, `/return-policy` | Legal pages |

### Search

Navbar search (desktop and mobile) navigates to `/collection?search=<query>`. The collection grid reads the query param to filter products by name and description. Collection search works both on initial load and during client-side navigation (no refresh required).

## Project Structure

```
src/
├── app/            # Routes & pages (layout, home, drop, collection, ...)
│   ├── drop/[slug] # Dynamic product detail pages
│   ├── account/    # Stub pages redirecting to login
│   └── ...
├── components/     # UI building blocks
│   ├── shared/     # Nav, Footer, Marquee, CartProvider, CartDrawer, ProductCard, WordReveal
│   ├── home/       # Homepage sections (Splash, Hero, Ethos, ...)
│   ├── drop/       # Drop & product detail components
│   ├── collection/ # CollectionGrid, NotifyMe
│   ├── lookbook/   # LookbookGrid
│   ├── checkout/   # CheckoutClient, StripePaymentLook
│   └── ...         # faq, contact, review
└── data/           # Hardcoded content
    ├── products.js # 10 products (PRODUCTS, SALE_PRODUCTS, getProduct)
    ├── shop.js     # Shipping constants & helpers
    └── faqs.js     # 22 FAQs across 5 sections
```

## Data & Content

- **Products:** 10 hardcoded anime-inspired tees (Blue Flame, Bushido, Demon Blood, Domain Expansion, Free Soul, Limitless, Paradise Spirit, Warrior Spirit, Water Breathing, Will of the Sun). Each has slug, SKU, badge, colorway, price, sizes, size stock, descriptions, and 5 Cloudinary images. 4 pieces are on sale at A$33.99.
- **Shipping:** free over A$100, otherwise A$9.99 flat. Helpers in `shop.js` (`fmtMoney`, `calcShipping`, `calcTotal`).
- **FAQs:** 22 entries in 5 sections (Orders & Shipping, Stock & Drops, Products, Returns & Refunds, Brand).

## Prototype Notes

- **No backend:** there are no API routes, server actions, database, or sessions.
- **Forms are local-only:** waitlist, contact, review, and checkout all show confirmation on the client without sending data anywhere.
- **Cart & wishlist:** persist to `localStorage` under `zenji_cart_v2` and `zenji-wishlist-guest`.
- **Checkout is a mock:** no payment is taken and nothing ships. The order is simulated with a brief processing delay.
- **Auth is a mock:** login/signup buttons and forms do not create accounts or sessions.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) — learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) — an interactive Next.js tutorial.

## Deploy on Vercel

Deploy using the [Vercel Platform](https://vercel.com/new). See the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for details.
