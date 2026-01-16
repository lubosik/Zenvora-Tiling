# Zenvora Tiling Rebrand Summary

## Overview
Rebranded from "Commercial Tiling Company" to "Zenvora Tiling" with updated positioning to target high-ticket commercial projects worldwide while welcoming premium residential clients and international buyers.

## Key Positioning Changes

### Brand Identity
- **Old**: "Commercial Tiling Company"
- **New**: "Zenvora Tiling"
- **Tagline Approach**: Premium tiles for high-ticket commercial projects worldwide

### Target Market
- **Primary**: High-ticket commercial projects (malls, hotels, offices, towers, fit-out)
- **Secondary**: Premium residential clients
- **Geographic**: Worldwide delivery with UAE-based support

### Location Strategy
- **Site-wide**: Removed hardcoded "Dubai-only" language
- **Locations Pages**: Dubai/UAE references maintained for SEO (via dedicated `/locations` pages)
- **Phrasing**: "UAE-based support" and "worldwide delivery" used throughout

## Files Updated

### Core Branding
1. **`components/layout/Header.tsx`**
   - Updated logo text from "Commercial Tiling" to "Zenvora Tiling"

2. **`lib/metadata.ts`**
   - Updated `siteConfig.name` to "Zenvora Tiling"
   - Updated description to reflect worldwide positioning
   - Updated default metadata title

3. **`lib/structured-data.ts`**
   - Updated organization schema name to "Zenvora Tiling"
   - Updated URLs to `zenvoratiling.com` (placeholder)

### Homepage Components
4. **`components/home/Hero.tsx`**
   - **H1**: "Premium Tiles for High-Ticket Commercial Projects Worldwide"
   - **Subheadline**: "BOQ-based pricing and project execution for malls, hotels, offices, towers, and fit-out projects. UAE-based support with worldwide delivery."
   - **Trust Line**: Added "Commercial + Residential" and "Worldwide Delivery" badges
   - **CTAs**: "Get BOQ Pricing" and "Browse Picks"

5. **`components/home/WhoWeServe.tsx`**
   - Updated description to mention "high-ticket commercial projects worldwide"
   - Added reference to malls, hotels, offices, towers, and fit-out projects

6. **`components/home/WhatWeDeliver.tsx`**
   - Updated to mention "high-ticket commercial and premium residential projects worldwide"

7. **`components/home/SEOTextBlock.tsx`**
   - **H2**: Changed from "Global Tile Supply, With Dubai Focus" to "Premium Tile Supply for Global Commercial Projects"
   - Removed Dubai-centric language
   - Added references to worldwide projects, premium residential, and international buyers
   - Maintained link to Dubai location page for SEO

8. **`app/page.tsx`**
   - Updated metadata title and description

### Other Pages
9. **`app/products/page.tsx`**
   - Removed "Dubai and the UAE" reference
   - Updated to "high-ticket commercial and premium residential projects worldwide"

10. **`app/industries/page.tsx`**
    - Removed "Dubai and the UAE" reference
    - Updated to mention malls, hotels, offices, towers, fit-out projects worldwide

11. **`app/request-pricing/page.tsx`**
    - Updated metadata description to reflect worldwide positioning

### Footer
12. **`components/layout/Footer.tsx`**
    - Updated copyright to "Zenvora Tiling"
    - Changed trust cues from "Dubai, UAE" to "UAE-Based Support" and "Worldwide Delivery"
    - Updated CTA copy to include residential projects

### Internal Links
13. **`lib/internal-links.ts`**
    - Updated `browseProducts.label` from "Browse Commercial Tiles" to "Browse Picks"

## Location SEO Strategy

### Maintained for SEO
- Dubai/UAE references kept in:
  - `/locations` pages (master and city pages)
  - Project case studies (location data)
  - Industry examples (location data)
  - Structured data (organization address)

### Removed from General Copy
- Hardcoded "Dubai" in hero, homepage sections, product descriptions
- "Dubai-only" positioning language
- Geographic limitations in service descriptions

## Tone & Messaging

### Maintained
- Premium, confident, procurement-friendly tone
- BOQ-based pricing focus
- Project execution emphasis
- Risk reduction messaging

### Added
- Worldwide delivery capability
- Premium residential welcome
- International buyer focus
- UAE-based support (not Dubai-only)

## Next Steps

1. **Domain**: Update actual domain when available (currently `zenvoratiling.com` placeholder)
2. **Logo**: Replace text logo with actual Zenvora Tiling logo asset
3. **Social Media**: Update Twitter handle if available
4. **OG Image**: Create branded Open Graph image
5. **Content Review**: Review all location-specific pages to ensure Dubai/UAE SEO is optimized
6. **Analytics**: Update tracking codes and property names

## Testing Checklist

- [ ] Verify all "Zenvora Tiling" brand name appears correctly
- [ ] Check hero H1 and CTAs display properly
- [ ] Confirm trust line badges show "Commercial + Residential" and "Worldwide Delivery"
- [ ] Verify no hardcoded "Dubai-only" language remains in general copy
- [ ] Confirm Dubai/UAE references still exist in `/locations` pages
- [ ] Test all internal links work correctly
- [ ] Verify metadata updates in page source
- [ ] Check structured data includes correct organization name

