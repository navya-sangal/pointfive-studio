# Point Five Studio — pointfivestudio.in

The website for Point Five Studio: fast websites, booking systems, WhatsApp and AI chatbots, and simple
owner dashboards for cafés, salons, clinics and small businesses in Gurgaon and Mumbai.

> *A fresh way to see your business online.* The name comes from the 0.5× wide-angle lens on a phone
> camera: it fits more into the frame.

Built with **Next.js 16 (App Router) + TypeScript + Tailwind CSS v4**, exported as a static site and
hosted on **Cloudflare Pages**. To put it live, follow **[DEPLOY.md](DEPLOY.md)**.

**Lighthouse (production build, measured locally):** Performance 96–97 mobile / 100 desktop ·
Accessibility 100 · Best Practices 100 · SEO 100.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:3000, with live reload
```

To see the real speed, build the static site and serve it (`npm run dev` is slower on purpose):

```bash
npm run build      # writes the finished site to out/
npx serve out      # http://localhost:3000
```

## Where to change things

| What | Where |
| --- | --- |
| **Every word on the site** (headlines, services, prices, FAQ, contact, SEO title/description) | `src/content/site.ts` |
| WhatsApp number (still a placeholder) | `site.whatsapp.number` in `src/content/site.ts`: country code + number, digits only, e.g. `919812345678` |
| Package prices | `site.packages.items[].price`: plain rupees, no commas (`34999` shows as "from ₹34,999") |
| Lighthouse scores in the Work section | `site.work.scores` |
| Colours | the `@theme` block at the top of `src/app/globals.css` |
| Kaapi & Co. screenshots | `public/work/` (WebP, two sizes each; keep the same file names) |
| Share image for WhatsApp/LinkedIn/X previews | `src/app/opengraph-image.png` (1200×630) and its `.alt.txt` |
| Browser tab icon / iPhone home-screen icon | `src/app/icon.svg`, `src/app/apple-icon.png` |
| Security and caching headers on Cloudflare | `public/_headers` |

After editing, commit and push to `main`. Cloudflare rebuilds and publishes the site in about a minute.

## Project structure

```
src/
  content/site.ts      ALL the text
  lib/links.ts         WhatsApp/email links and ₹ formatting
  app/
    layout.tsx         fonts, SEO metadata and structured data for Google
    page.tsx           puts the sections in order
    globals.css        colours, fonts, and the hero lens illustration
    sitemap.ts, robots.ts, icon.svg, apple-icon.png, opengraph-image.png
  components/
    Header, MobileMenu, Hero, LensSwitch, LensScene, Services, Process,
    Packages, Work, Faq, Contact, Footer, WhatsAppFab, Logo, Icons, SectionHeading
  fonts/bricolage-rupee.woff2   just the ₹ sign (see below)
public/
  _headers             Cloudflare Pages headers
  work/                case-study screenshots
```

## Notes

- **Hero lens.** The zoom pills (`.5`, `1`, `2`) work like a phone camera. The page opens at 1× on a single
  Instagram post, then pulls back to 0.5× to show the whole set-up once the lens is on screen. It's drawn
  in HTML and CSS (no images), sized in `cqw` so it scales with its frame. Visitors who prefer reduced
  motion see the wide view straight away. The illustration's text is in `site.lens.scene`.
- **Fonts.** Instrument Serif (headlines) and Bricolage Grotesque (everything else), self-hosted via
  `next/font`. Google's Latin font files don't include ₹, so `src/fonts/bricolage-rupee.woff2` (1.6 KB)
  supplies just that sign, and prices show ₹ in the brand font.
- **JavaScript** runs for only two things: the hero zoom pills and the mobile menu. The FAQ uses plain
  `<details>`. The scroll-in animations are CSS only and are skipped for visitors who prefer reduced
  motion.
- **Static export.** `next.config.ts` sets `output: "export"`, so there's no server. The site has no
  contact form. Enquiries go to WhatsApp and email.

## Credits

Fonts: [Instrument Serif](https://fonts.google.com/specimen/Instrument+Serif) and
[Bricolage Grotesque](https://fonts.google.com/specimen/Bricolage+Grotesque), both under the
[SIL Open Font License 1.1](https://openfontlicense.org). Icons adapted from
[Tabler Icons](https://tabler.io/icons) (MIT).
