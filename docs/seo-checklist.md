# SEO Checklist

## Technical SEO Foundation

### Metadata & Titles
- [x] Default metadata template created (`lib/metadata.ts`)
- [x] Per-page metadata overrides implemented
- [x] Unique titles per page (format: "Page Title | Commercial Tiling Company")
- [x] Unique meta descriptions per page (150-160 characters)
- [x] OpenGraph tags implemented (title, description, image, url, type)
- [x] Twitter Card tags implemented (summary_large_image)
- [x] Canonical URLs implemented per page
- [ ] OG image created and optimized (1200x630px)
- [ ] Twitter handle confirmed and added

### Sitemap & Robots
- [x] XML sitemap generated (`app/sitemap.ts`)
- [x] All static routes included in sitemap
- [x] Priority and changeFrequency set appropriately
- [x] Robots.txt generated (`app/robots.ts`)
- [x] Sitemap referenced in robots.txt
- [x] Disallow rules for /api/ and /_dev/
- [ ] Verify sitemap loads at /sitemap.xml (in production)
- [ ] Verify robots.txt loads at /robots.txt (in production)

### Canonical URLs
- [x] Canonical strategy implemented
- [x] Canonical per page via metadata
- [x] Base URL configured (update with actual domain)
- [ ] Verify no trailing slash duplication
- [ ] Verify canonical URLs match actual URLs

### Structured Data (JSON-LD)
- [x] Organization schema (sitewide)
- [x] BreadcrumbList schema (per page, dynamic)
- [x] JSON-LD rendered server-side (not client-only)
- [x] FAQPage schema implemented (Phase 16)
- [ ] Validate Organization schema with Google Rich Results Test
- [ ] Validate BreadcrumbList schema with Google Rich Results Test
- [ ] Validate FAQPage schema with Google Rich Results Test
- [ ] Product schema (to be added for product detail pages if needed)

### Internal Linking
- [x] Internal linking helpers created (`lib/internal-links.ts`)
- [x] Descriptive anchor text for all internal links
- [x] Link structure documented
- [x] Internal links added to homepage content (SEO text block, sections)
- [x] Internal links added to product pages (category links, request pricing)
- [x] Internal links added to industry pages (product categories, services, projects)
- [x] Internal links added to service pages (request pricing, industries)
- [x] Cross-linking between Products/Services/Industries/Projects (implemented throughout)

## Content SEO

### Homepage
- [x] H1 tag with primary keyword ("Premium Commercial Tiles for Dubai's Most Ambitious Projects")
- [x] SEO text block with internal links (Phase 9)
- [x] Internal links with descriptive anchors
- [ ] Image alt text optimized (when actual images added)

### Product Pages
- [x] Unique H1 per category
- [x] Product descriptions with keywords
- [x] Internal links to related products/industries (request pricing, services)
- [ ] Image alt text (when actual images added)

### Industry Pages
- [x] Unique H1 per industry
- [x] Industry-specific content (not thin/duplicated)
- [x] Internal links to relevant products/services
- [x] Case study snippets

### Service Pages
- [x] Unique H1 and content
- [x] Service descriptions
- [x] Internal links to Request Pricing

### Project Pages
- [x] Project descriptions
- [x] Internal links to related industries/products
- [ ] Image alt text (when actual images added)

### Resource Pages
- [x] Article titles optimized
- [x] Article content structure (MDX ready)
- [x] Internal links within articles (related resources)
- [x] FAQ schema where applicable (Phase 16)

## Performance SEO

### Core Web Vitals
- [x] LCP optimized (hero uses CSS gradients = no image load, fast LCP)
- [x] Hero image will have priority prop when actual image added
- [x] Hero image will NOT be lazy-loaded (commented code shows implementation)
- [x] CLS minimized (font strategy: system fonts, fixed dimensions on components)
- [x] INP optimized (lightweight carousel, minimal JS)
- [ ] Lighthouse score > 90 (to be measured)

### Images
- [x] next/image configured for AVIF and WebP formats
- [x] Image registry created for asset management
- [x] LCP image not lazy-loaded (CSS gradients currently, priority when image added)
- [ ] Responsive images (srcset/sizes) - ready when images added
- [ ] Alt text on all images (when actual images added)

### Mobile
- [x] Mobile-friendly (responsive design throughout)
- [x] Touch targets appropriately sized (buttons, links)
- [ ] Mobile page speed optimized (to be measured)

## Local SEO (To be added)

- [ ] Google Business Profile setup
- [ ] NAP (Name, Address, Phone) consistent
- [ ] Location pages optimized
- [ ] Local schema markup (if applicable)

## Notes

- Base URL currently set to `https://commercialtiling.com` - update with actual domain
- OG image placeholder path set - create and optimize actual image
- Twitter handle placeholder - update when available
- Organization contact details (email, phone) to be added when available
- Social media profiles (sameAs) to be added when available

