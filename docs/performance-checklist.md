# Performance Checklist

## Core Web Vitals

### Largest Contentful Paint (LCP)
- [x] Hero image uses CSS gradients (no image load = fast LCP)
- [x] When actual hero image is added, it will have `priority` prop
- [x] Hero image will NOT be lazy-loaded
- [x] Hero section structure ready for width/height attributes
- [ ] Verify LCP < 2.5s in Lighthouse (to be tested with actual images)
- [ ] Hero image optimized (WebP/AVIF formats)
- [ ] Hero image properly sized (not oversized)

### Cumulative Layout Shift (CLS)
- [x] Image placeholders have aspect ratios defined
- [x] Font loading strategy (system fonts = no layout shift)
- [x] Fixed dimensions on timeline circles
- [x] Fixed dimensions on carousel controls
- [ ] Verify CLS < 0.1 in Lighthouse
- [ ] All images have width/height attributes (when actual images added)
- [ ] No dynamic content injection above the fold

### Interaction to Next Paint (INP)
- [x] Lightweight carousel implementation (no heavy slider libs)
- [x] Form validation is client-side (no blocking)
- [x] Minimal JavaScript for interactions
- [ ] Verify INP < 200ms in Lighthouse
- [ ] Avoid heavy computations in event handlers
- [ ] Debounce/throttle where appropriate

## Image Optimization

### Responsive Images
- [x] next/image configured for AVIF and WebP formats
- [x] Image registry created for easy asset management
- [ ] All images use next/image component
- [ ] srcset/sizes attributes properly configured
- [ ] Images properly sized for viewport

### Lazy Loading
- [x] Hero image will NOT be lazy-loaded (priority)
- [x] Below-the-fold images can be lazy-loaded
- [ ] Lazy loading implemented for below-the-fold images
- [ ] No lazy loading on LCP image

### Image Formats
- [x] next.config.ts configured for AVIF and WebP
- [ ] Actual images converted to modern formats
- [ ] Fallback formats provided

## Font Strategy

### Font Loading
- [x] Using system fonts (no external font loading)
- [x] No FOUT/FOIT issues
- [x] Font-display strategy not needed (system fonts)
- [ ] If custom fonts added later, use font-display: swap

## JavaScript Optimization

### Bundle Size
- [x] No heavy slider libraries
- [x] Lightweight carousel implementation
- [x] Minimal dependencies
- [ ] Verify bundle size in build output
- [ ] Code splitting implemented where appropriate

### Third-Party Scripts
- [ ] No unnecessary third-party scripts
- [ ] Analytics scripts loaded asynchronously (if added)
- [ ] Third-party scripts don't block rendering

## Caching & Delivery

### Static Assets
- [x] Next.js automatic static optimization
- [ ] CDN configuration (if applicable)
- [ ] Cache headers properly set

### API Routes
- [x] API routes for form submission
- [ ] Rate limiting implemented (basic version in place)
- [ ] Error handling optimized

## Performance Metrics

### Lighthouse Scores (To be measured)
- [ ] Performance score > 90
- [ ] Accessibility score > 90
- [ ] Best Practices score > 90
- [ ] SEO score > 90

### Real User Metrics
- [ ] LCP < 2.5s (75th percentile)
- [ ] CLS < 0.1 (75th percentile)
- [ ] INP < 200ms (75th percentile)

## Notes

- Hero currently uses CSS gradients (no image load) = excellent LCP
- System fonts used = no font loading issues
- Lightweight carousel = good INP
- When actual images are added, ensure:
  - Hero image has priority prop
  - Hero image has width/height
  - Below-fold images are lazy-loaded
  - Images are optimized (WebP/AVIF)

