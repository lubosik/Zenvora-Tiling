# Zenvora Tiling – Full Site Context

Use this document when editing the site so you have complete context on structure, design system, content, and conventions.

---

## 1. Project overview

- **Brand**: Zenvora Tiling  
- **Positioning**: Premium tiles for high-ticket commercial projects worldwide (malls, hotels, offices, towers, fit-out). UAE-based support, worldwide delivery. Also welcomes premium residential and international buyers.  
- **Tone**: Premium, confident, procurement-friendly. Focus on BOQ-based pricing and project execution.  
- **Copy rules**: No em-dashes in website copy (use commas, periods, or colons instead). Voice should feel human, friendly and speak directly to the reader.  
- **Site domain** (for SEO/canonical): `https://zenvoratiling.com` (set in `lib/metadata.ts` and `lib/structured-data.ts`; `app/sitemap.ts` and `app/robots.ts` still use `commercialtiling.com` and should be updated to match).

---

## 2. Tech stack & commands

- **Framework**: Next.js 15 (App Router), React 19, TypeScript  
- **Styling**: Tailwind CSS, semantic CSS variables in `app/globals.css`  
- **Fonts**: DM Serif Display (headings), Inter (body) – loaded in `app/layout.tsx` via `next/font/google`  
- **Key deps**: `clsx`, `tailwind-merge`, `zod`, `resend`  

**Commands:**

- `npm run dev` – local dev server (http://localhost:3000)  
- `npm run build` – production build  
- `npm run start` – run production build  
- `npm run lint` – ESLint  
- `npm run format`` / `npm run format:check` – Prettier  

---

## 3. File structure (high level)

```
app/
  layout.tsx          # Root layout: fonts, Header, main, Footer, StructuredData (org)
  page.tsx            # Homepage
  globals.css         # Tailwind + design tokens + base typography
  sitemap.ts          # XML sitemap (baseUrl still commercialtiling.com)
  robots.ts           # robots.txt (baseUrl still commercialtiling.com)
  request-pricing/
    page.tsx          # BOQ / Request Pricing form page
  products/
    page.tsx          # Products index
    [category]/
      page.tsx        # Dynamic product category (slug from content)
  industries/
    page.tsx
    [industry]/
      page.tsx
  services/
    page.tsx
  locations/
    page.tsx
    [location]/
      page.tsx
  resources/
    page.tsx          # Resources index (articles list)
    [slug]/
      page.tsx        # Article page (MDX or fallback)
    faqs/
      page.tsx
    downloads/
      page.tsx
  api/
    request-pricing/
      route.ts         # POST handler: validate, rate-limit, Resend email
  _dev/
    design/
      page.tsx        # Design system / dev page (use Section variant, not background)

components/
  layout/              # Header, Footer, Container, Section, Grid, Stack
  home/                # Hero, BuiltFor, CollectionsGallery, ProcessTimeline, ProjectsLookbook, SEOTextBlock (and legacy: WhoWeServe, WhatWeDeliver, TheOffer, SocialProof, ProjectCarousel)
  ui/                  # Button, Card, Tag
  forms/               # RequestPricingForm
  seo/                 # StructuredData, FAQSchema
  projects/            # ProjectsGallery
  services/            # StickyCTA

content/
  products/
    categories.ts      # ProductCategory[] + getCategoryBySlug, getAllCategorySlugs
  industries/
    industries.ts      # Industry[] + getIndustryBySlug, getAllIndustrySlugs
  locations/
    locations.ts       # Location[] + getLocationBySlug, getAllLocationSlugs, getLocationsByRegion
  projects/
    projects.ts        # Project[] + getProjectBySlug, getFeaturedProjects, etc.
    featured.ts        # (if used)
  resources/
    articles.ts        # Article[] + getArticleBySlug, getAllArticleSlugs
    faqs.ts            # articleFAQs (Record<slug, FAQ[]>), getFAQsForArticle
    mdx/               # e.g. what-is-boq-in-construction.mdx
  images.ts            # (if used)

lib/
  metadata.ts          # createMetadata(), defaultMetadata, siteConfig (name, description, url, ogImage, twitterHandle)
  structured-data.ts   # Organization, BreadcrumbItem/Schema, generateBreadcrumbs, generateBreadcrumbSchema, generateOrganizationSchema
  internal-links.ts    # internalLinks map + createInternalLink, getLinksByCategory
  validations.ts       # requestPricingSchema (Zod), RequestPricingFormData type
  utils.ts             # cn() (clsx + tailwind-merge)

public/
  logo.png
  favicon.png
  hero-desktop.png
  hero-mobile.png
  placeholders/        # products/, projects/ (referenced in content)
```

---

## 4. Design system

### 4.1 CSS variables (globals.css)

Use these tokens everywhere instead of raw hexes so the theme stays consistent.

**Dark theme (default):**

- Surfaces: `--bg` (#0B0B0B), `--surface-1`, `--surface-2`, `--surface-3`  
- Borders: `--border-dark`  
- Text: `--text-strong` (headings), `--text`, `--text-muted`, `--text-subtle`  
- Accent: `--accent` (#C9A24A), `--accent-hover`  

**Light sections (alternating):**

- Surfaces: `--bg-light`, `--surface-light-1`, `--surface-light-2`  
- Borders: `--border-light`  
- Text: `--text-dark-strong`, `--text-dark`, `--text-dark-muted`  

**Legacy aliases:** `--bg2` → surface-1, `--muted` → text-muted, `--accentHover`, `--border` → border-dark.

**Typography:** `--font-heading`, `--font-body` (set by next/font in layout).

**Base styles:**

- Headings: `font-heading`, bold, `--text-strong`, letter-spacing -0.02em.  
- Body/paragraphs: `--text`, max-width 70ch, line-height 1.75.  
- Light sections: class `section-light` applies light background and dark text; `section-dark-elevated` is darker elevated strip.

### 4.2 Section component

**File:** `components/layout/Section.tsx`

- **No `background` prop.** Use **`variant`** only.  
- **Props:**  
  - `variant?: 'dark' | 'light' | 'darkElevated'` (default `'dark'`)  
  - `spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'` (default `'md'`)  
  - `className?`, `children`  

**Mapping:**

- `dark` → default dark background and text  
- `light` → light background, dark text (uses `section-light`)  
- `darkElevated` → slightly elevated dark strip (`--surface-2`)  

Any page or component that still passes `background="..."` will cause a TypeScript error; replace with the correct `variant`.

### 4.3 Tailwind (tailwind.config.ts)

- **Colors:** `neutral` (50–950), `accent` (50–950) aligned with jet-black and champagne-gold.  
- **Fonts:** `font-sans` → body, `font-heading` / `font-display` → heading (both use CSS variables).  
- **Max-widths:** `max-w-container`, `max-w-container-wide`, `max-w-container-narrow`.  
- **Border radius:** Prefer `rounded-[14px]` for buttons; cards use `rounded-xl`.  

Use semantic tokens in class names when possible, e.g. `text-[var(--text-strong)]`, `bg-[var(--accent)]`, `border-[var(--border-dark)]`.

### 4.4 Header

- **Sticky**, white background (`bg-white`), dark nav text (`text-neutral-800`), hover accent.  
- Logo: `next/image` from `/logo.png` (Zenvora Tiling), responsive height.  
- Nav links: Home, Products, Industries, Services, Projects, Locations, Resources.  
- CTA: “Request Pricing / Send BOQ” → `/request-pricing`.  
- Mobile: hamburger, same links + CTA; use `Link` and `aria-*` for accessibility.

### 4.5 Footer

- Background `bg-[var(--bg2)]`, text `text-[var(--muted)]`, links hover to `text-[var(--text)]`.  
- Columns: Get Started (CTA), Products, Industries, Company + Support.  
- Trust line: UAE-Based Support, Worldwide Delivery, Premium Quality.  
- Copyright: “© {year} Zenvora Tiling.”

---

## 5. Layout primitives

- **Container:** `mx-auto px-4 sm:px-6 lg:px-8`, `max-w-container` (or `wide` / `narrow`).  
- **Grid:** `cols` (1–12), `gap` (none/sm/md/lg/xl), `responsive` (boolean).  
- **Stack:** vertical flex, `spacing` (none/xs/sm/md/lg/xl), `align` (start/center/end/stretch).  

Use `cn()` from `@/lib/utils` for conditional classes.

---

## 6. UI components

- **Button:**  
  - `variant`: `primary` | `secondary` | `outline` | `ghost`  
  - `size`: `sm` | `md` | `lg`  
  - `fullWidth?`, `href?` (renders as Link when `href` is set).  
  - All use semantic tokens (e.g. primary = accent, outline = border-dark).

- **Card:**  
  - `padding`: `none` | `sm` | `md` | `lg`  
  - `hover?: boolean`  
  - **`id?: string`** (optional; pass when you need an anchor or section id).  
  - Background `bg-[var(--bg2)]`, border `border-[var(--border)]`.

- **Tag:**  
  - `variant`: `default` | `accent` | `neutral`  
  - `size`: `sm` | `md`  

---

## 7. Routes & pages (App Router)

| Route | Purpose |
|-------|--------|
| `/` | Home: Hero, BuiltFor, CollectionsGallery, ProcessTimeline, ProjectsLookbook, SEOTextBlock |
| `/request-pricing` | BOQ / Request Pricing form + trust blocks |
| `/products` | Product categories list (from content) |
| `/products/[category]` | Single category; use `getCategoryBySlug`, `generateStaticParams` from categories |
| `/industries` | Industries list |
| `/industries/[industry]` | Single industry; use industries content |
| `/services` | Services page (BOQ pricing, samples, etc.); uses Cards with `id` for anchors |
| `/projects` | Projects gallery |
| `/projects/[slug]` | Case study; use projects content |
| `/locations` | Locations index |
| `/locations/[location]` | Single location; use locations content |
| `/resources` | Articles list |
| `/resources/[slug]` | Article; use articles content + MDX when present |
| `/resources/faqs` | FAQs page |
| `/resources/downloads` | Downloads library |

**Conventions:**

- Use **`Link` from `next/link`** for all internal links. Do **not** use raw `<a href="/...">` for in-app navigation (ESLint rule and consistency).  
- Each page that needs breadcrumbs: `generateBreadcrumbs(path)`, `generateBreadcrumbSchema(...)`, then `<StructuredData breadcrumbs={breadcrumbs} />`.  
- Metadata: use `createMetadata({ title, description, path, noIndex? })` from `lib/metadata.ts`; for dynamic routes use `generateMetadata` and `getXBySlug` from content.

---

## 8. Content & data

All editable content lives under `content/`. Types and helpers are exported from each file.

- **Products:** `content/products/categories.ts` – `ProductCategory` (id, name, slug, description, shortDescription, ctaText, image). Slugs drive `app/products/[category]`.  
- **Industries:** `content/industries/industries.ts` – `Industry` (id, name, slug, description, useCases, relevantSpecs, suggestedCategories, caseStudySnippet?).  
- **Locations:** `content/locations/locations.ts` – `Location` (id, name, slug, country, region?, description, keyPoints, industries, relatedProjects?).  
- **Projects:** `content/projects/projects.ts` – `Project` (id, slug, title, type, location, volume?, tileTypes, outcome, description, image, imageAlt, clientConfidential?, featured?).  
- **Articles:** `content/resources/articles.ts` – `Article` (slug, title, description, category, date, readTime, hasFAQs?).  
- **FAQs:** `content/resources/faqs.ts` – `articleFAQs` (Record of slug → FAQ[]), `getFAQsForArticle(slug)`.  
- **MDX:** `content/resources/mdx/*.mdx` for full article body when used.

To add a new product category, industry, location, project, or article: edit the corresponding array in `content/` and ensure the slug is used in `generateStaticParams` where applicable (categories, industries, locations, projects, resources).

---

## 9. SEO

- **Metadata:** `lib/metadata.ts` – `siteConfig` (name, description, url, ogImage, twitterHandle). Every page should call `createMetadata({ title, description, path })` (or `generateMetadata` for dynamic routes).  
- **Structured data:** `lib/structured-data.ts` – Organization (in layout), BreadcrumbList per page. Rendered by `components/seo/StructuredData` (organization + optional breadcrumbs).  
- **Sitemap:** `app/sitemap.ts` – returns URLs; **baseUrl is still `https://commercialtiling.com`** – change to `https://zenvoratiling.com` for consistency.  
- **Robots:** `app/robots.ts` – allow `/`, disallow `/api/`, `/_dev/`; sitemap URL – **same baseUrl update**.  
- **Internal links:** Use `internalLinks` from `lib/internal-links.ts` for CTAs and cross-links so labels and hrefs stay consistent and SEO-friendly.

---

## 10. Request Pricing form & API

- **Page:** `app/request-pricing/page.tsx` – intro, `<RequestPricingForm />` inside a Card, trust blocks.  
- **Form:** `components/forms/RequestPricingForm.tsx` – client component. Fields: projectName, companyName, location, deadline, approxSQM, tileType (floor/wall/both), requiredFinishes, email, whatsapp, boqFile, drawingFile, honeypot (hidden). Submits JSON to `POST /api/request-pricing`.  
- **Validation:** `lib/validations.ts` – `requestPricingSchema` (Zod). For optional strings with a max length, call **`.max(n).optional()`** (not `.optional().max(n)`), e.g. `whatsapp: z.string().max(50).optional()`.  
- **API:** `app/api/request-pricing/route.ts` – rate limit (e.g. 5 per 15 min per IP), validate with schema, honeypot check, then send email via Resend.  
- **Resend:** Client is only created if `process.env.RESEND_API_KEY` is set (so build does not require it). If missing, API still returns 200 but logs a warning and does not send email.  
- **Env vars:** `RESEND_API_KEY`, `CONTACT_EMAIL`, `EMAIL_FROM` (optional; have fallbacks in code).

---

## 11. Conventions & gotchas

1. **Internal navigation:** Always use `<Link href="...">` from `next/link`; no `<a href="/...">` for in-app routes.  
2. **Section:** Use `variant="dark" | "light" | "darkElevated"` only; there is no `background` prop.  
3. **Card:** Has optional `id`; use it when you need an anchor (e.g. services page).  
4. **Zod:** Optional string with max length: `z.string().max(n).optional()`.  
5. **Headings:** Site-wide, headings use `font-heading` and bold; on dark sections they use `--text-strong` (white). On light sections, global `.section-light` switches headings to `--text-dark-strong`.  
6. **Images:** Use `next/image`; assets in `public/` (logo, favicon, hero-desktop, hero-mobile, placeholders).  
7. **Motion:** `styles/motion.css` provides motion-safe transitions/animations and respects `prefers-reduced-motion`.

---

## 12. Environment variables

- **Build/deploy:** None required for build (Resend is optional at build time).  
- **Runtime (request-pricing):**  
  - `RESEND_API_KEY` – send emails (optional; build succeeds without it).  
  - `CONTACT_EMAIL` – recipient (default `info@commercialtiling.com`).  
  - `EMAIL_FROM` – sender (default `noreply@commercialtiling.com`).  

For Vercel, set these in the project’s Environment Variables.

---

## 13. Public assets

- `logo.png` – header logo (Zenvora Tiling).  
- `favicon.png` – favicon (referenced in layout and metadata).  
- `hero-desktop.png` / `hero-mobile.png` – hero background (used in `components/home/Hero.tsx`).  
- `placeholders/products/`, `placeholders/projects/` – referenced in content for categories and projects (create or replace with real assets as needed).  
- `og-image.jpg` – referenced in metadata for social; add if needed.

---

## 14. Homepage sections (current)

- **Hero** – headline, subline, CTAs (Request Pricing / Send BOQ, Browse Collections), hero images.  
- **BuiltFor** – who the site is for (e.g. procurement, quantity surveyors, designers).  
- **CollectionsGallery** – product collections with imagery.  
- **ProcessTimeline** – procurement process steps.  
- **ProjectsLookbook** – featured projects.  
- **SEOTextBlock** – SEO copy block.  

Legacy components (WhoWeServe, WhatWeDeliver, TheOffer, SocialProof, ProjectCarousel) exist but are not used on the homepage; they can be removed or repurposed.

---

## 15. Quick reference: where to change what

| Change | Where |
|--------|--------|
| Site name, tagline, canonical URL | `lib/metadata.ts`, `lib/structured-data.ts` |
| Sitemap/robots base URL | `app/sitemap.ts`, `app/robots.ts` |
| Header nav links / CTA | `components/layout/Header.tsx` |
| Footer links / copy | `components/layout/Footer.tsx` |
| Hero headline, subline, CTAs | `components/home/Hero.tsx` |
| Section colors / spacing | `components/layout/Section.tsx` (variants), `app/globals.css` (tokens) |
| Global colors/typography | `app/globals.css`, `tailwind.config.ts` |
| Product categories | `content/products/categories.ts` |
| Industries | `content/industries/industries.ts` |
| Locations | `content/locations/locations.ts` |
| Projects | `content/projects/projects.ts` |
| Articles / FAQs | `content/resources/articles.ts`, `content/resources/faqs.ts` |
| Internal link labels/hrefs | `lib/internal-links.ts` |
| Request pricing form fields / validation | `components/forms/RequestPricingForm.tsx`, `lib/validations.ts` |
| Request pricing email behavior | `app/api/request-pricing/route.ts` |

Use this document when editing the site so all structure, design, content, and conventions stay consistent.
