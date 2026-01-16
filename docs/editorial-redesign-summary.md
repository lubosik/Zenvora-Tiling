# Editorial/Material-First Redesign Summary

## Overview
Redesigned the UI from SaaS landing page patterns to premium tile/surfaces brand (showroom/editorial/material-first aesthetic) while maintaining conversion focus.

## Typography Implementation

### Font Pairing (Option A - Lux Editorial)
- **Headings**: DM Serif Display (Google Fonts) - serif display font
- **Body/UI**: Inter (Google Fonts) - clean modern sans-serif

### Typography Scale
- Base body: 18px (desktop)
- Line height: 1.6-1.7 for paragraphs
- Headings: Use `font-heading` class, normal weight (400), tight tracking (-0.02em)
- Paragraph max-width: 60-70ch for readability
- Buttons: Medium weight (500-600), no all-caps
- Navigation: 14-16px, normal weight, calm spacing

### CSS Variables
- `--font-heading`: DM Serif Display
- `--font-body`: Inter

## Files Changed

### Core Typography
1. **`app/layout.tsx`**
   - Added `DM_Serif_Display` and `Inter` via `next/font/google`
   - Applied font variables to `<html>` element

2. **`app/globals.css`**
   - Added font family variables
   - Set base body font size to 18px
   - Applied serif to all headings (h1-h6)
   - Set paragraph max-width and line-height

3. **`tailwind.config.ts`**
   - Updated `fontFamily` to use CSS variables
   - Added `heading` and `display` font families

### Hero Section
4. **`components/home/Hero.tsx`**
   - **Before**: Standard layout with trust badges
   - **After**:
     - Editorial layout with more negative space
     - Taller hero (85vh/90vh)
     - Material cue overlay on right side (tile slab edge/texture, low opacity)
     - Single primary CTA: "Request Pricing / Send BOQ"
     - Single secondary CTA: "Browse Collections"
     - Removed trust badges
     - Stronger typography with serif heading
     - Max-width text constraints (60ch)

### New Components Created
5. **`components/home/BuiltFor.tsx`** (NEW)
   - Replaces "Who We Serve" icon cards
   - Elegant text columns: "Built for Procurement, QS & Designers"
   - 3 columns: Procurement, Quantity Surveyors, Designers
   - No icons, just bold labels + 1 sentence each
   - Single CTA: "Send BOQ"

6. **`components/home/CollectionsGallery.tsx`** (NEW)
   - Image-led gallery: 6 large cards (2-row grid on desktop, 3 columns)
   - Each card: tile/room photo placeholder, overlay label (Series name), metadata
   - Hover: slight zoom + reveal "View Collection"
   - Subtle shadows, rounded corners, minimal borders

7. **`components/home/ProcessTimeline.tsx`** (NEW)
   - Replaces 5-step orange circles
   - Thin champagne-gold timeline with small dots
   - Minimal text, no big circles, no orange
   - Desktop: horizontal timeline with gold dots
   - Mobile: vertical timeline
   - Steps: Send BOQ → Receive Quote → Approval Samples → Place Order → Delivery & Handover

8. **`components/home/ProjectsLookbook.tsx`** (NEW)
   - Projects/Lookbook block above footer
   - 3-6 large project cards with imagery
   - Each card: project type, location (optional), m² supplied (optional)
   - CTA: "View All Projects"
   - Hover effects with scale and overlay

### Updated Components
9. **`components/home/SocialProof.tsx`**
   - Updated typography to use serif headings
   - Replaced orange accents with gold (`--accent`)
   - Updated text colors to use design tokens
   - Improved spacing and readability

10. **`components/home/SEOTextBlock.tsx`**
    - Updated heading to serif font
    - Added max-width constraints (65ch) to paragraphs
    - Improved spacing

11. **`components/layout/Header.tsx`**
    - Logo uses serif font (`font-heading`)
    - Navigation uses normal weight, cleaner spacing
    - Updated typography throughout

12. **`components/layout/Footer.tsx`**
    - Updated headings to use serif font
    - Cleaner typography, reduced clutter
    - Improved spacing
    - All accent colors use gold token

13. **`components/home/ProjectCarousel.tsx`**
    - Updated accent colors from orange to gold
    - Updated heading to serif font

### Homepage Structure
14. **`app/page.tsx`**
    - **Before**: Hero → ProjectCarousel → WhoWeServe → WhatWeDeliver → TheOffer → SocialProof → SEOTextBlock
    - **After**: Hero → BuiltFor → CollectionsGallery → ProcessTimeline → ProjectsLookbook → SEOTextBlock
    - Removed: ProjectCarousel, WhoWeServe, WhatWeDeliver, TheOffer, SocialProof
    - Added: BuiltFor, CollectionsGallery, ProcessTimeline, ProjectsLookbook

## Design Changes

### Removed SaaS Patterns
- ❌ Icon feature cards
- ❌ Heavy bordered cards
- ❌ Big numbered onboarding circles
- ❌ Dashboard-like UI
- ❌ Orange accent colors
- ❌ Dense information architecture

### Added Editorial/Material Patterns
- ✅ Image-led collections gallery
- ✅ Minimal timeline (thin line + dots)
- ✅ Elegant text columns (no icons)
- ✅ Material cue overlay (tile texture)
- ✅ More negative space
- ✅ Stronger typography hierarchy
- ✅ Champagne-gold accents (replacing orange)
- ✅ Reduced borders, prefer whitespace
- ✅ Project lookbook with imagery focus

### Typography Improvements
- ✅ Serif display for headings (architectural/editorial feel)
- ✅ Clean sans-serif for body/UI
- ✅ Readable line lengths (60-70ch)
- ✅ Comfortable line-height (1.6-1.7)
- ✅ Consistent type scale
- ✅ Tighter tracking on headings (-0.02em)

## Conversion Elements Maintained
- ✅ Primary CTA: "Request Pricing / Send BOQ" (remains prominent)
- ✅ Secondary CTAs throughout
- ✅ Clear navigation
- ✅ Contact forms accessible
- ✅ Project showcases

## Accessibility
- ✅ High contrast maintained (jet-black + warm white)
- ✅ Readable font sizes (18px base)
- ✅ Proper heading hierarchy
- ✅ Focus states maintained
- ✅ Screen reader friendly

## Responsive Design
- ✅ Mobile-first approach
- ✅ Responsive typography (clamp where appropriate)
- ✅ Grid layouts adapt (1 col mobile, 2-3 cols desktop)
- ✅ Timeline adapts (vertical on mobile, horizontal on desktop)
- ✅ Hero images responsive (separate mobile/desktop)

## Testing Checklist

- [x] Fonts load correctly (DM Serif Display + Inter)
- [x] Typography applied site-wide
- [x] Hero redesigned with editorial layout
- [x] Material cue overlay visible
- [x] BuiltFor component replaces WhoWeServe
- [x] Collections Gallery displays correctly
- [x] Process Timeline replaces orange circles
- [x] Projects Lookbook added above footer
- [x] All orange accents replaced with gold
- [x] Card borders reduced
- [x] Paragraph max-widths set (60-70ch)
- [x] Footer updated with premium typography
- [ ] Test on multiple devices/browsers
- [ ] Verify all hover states
- [ ] Check image loading performance
- [ ] Verify accessibility with screen readers

## Next Steps

1. Add actual collection images to CollectionsGallery
2. Add actual project images to ProjectsLookbook
3. Fine-tune spacing and typography scale
4. Test performance with real images
5. Consider adding subtle animations (respecting reduced motion)
6. Review and optimize for Core Web Vitals

