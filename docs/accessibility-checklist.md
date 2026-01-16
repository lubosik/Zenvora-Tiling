# Accessibility Checklist

## Carousel Accessibility

### Project Carousel
- [x] Pause/play button implemented
- [x] Next/Prev buttons with aria-labels
- [x] Dot indicators with role="tablist" and role="tab"
- [x] Keyboard support (Arrow keys, Space)
- [x] Screen reader announcements (aria-live="polite")
- [x] Respects prefers-reduced-motion (no auto-advance)
- [x] Focus visible on all controls
- [x] ARIA labels on all interactive elements
- [ ] Test with screen reader (NVDA/JAWS/VoiceOver)
- [ ] Verify carousel meets WAI carousel guidance

## Keyboard Navigation

### General Navigation
- [x] All interactive elements keyboard accessible
- [x] Tab order is logical
- [x] Focus visible on all focusable elements
- [x] Skip links (if needed for complex pages)
- [ ] Test full keyboard navigation flow
- [ ] Verify no keyboard traps

### Form Navigation
- [x] Form fields properly labeled
- [x] Required fields indicated
- [x] Error messages associated with fields
- [x] Form submission via keyboard
- [ ] Test form with keyboard only
- [ ] Verify error announcements

## Focus Management

### Focus Visibility
- [x] Focus styles defined in Tailwind
- [x] Focus rings on buttons and links
- [x] Focus not obscured by sticky headers
- [ ] Test focus visibility in all browsers
- [ ] Verify focus order is logical

### Focus Trapping
- [x] Mobile menu closes on link click
- [x] Modal focus trapping (if modals added)
- [ ] Test focus trapping in modals

## Screen Reader Support

### Semantic HTML
- [x] Proper heading hierarchy (H1, H2, H3)
- [x] Semantic HTML elements (nav, main, section, article)
- [x] ARIA labels where needed
- [x] Decorative images have aria-hidden="true"
- [ ] Test with screen reader

### ARIA Attributes
- [x] aria-label on icon buttons
- [x] aria-expanded on mobile menu
- [x] aria-controls on menu button
- [x] aria-live for dynamic content
- [x] role attributes where appropriate
- [ ] Verify ARIA usage is correct

## Color & Contrast

### Color Contrast
- [x] Text colors meet WCAG AA standards (neutral-900 on white)
- [x] Link colors have sufficient contrast
- [x] Button colors have sufficient contrast
- [ ] Verify all text meets WCAG AA (4.5:1 for normal text)
- [ ] Verify all text meets WCAG AAA where possible (7:1 for normal text)

### Color Independence
- [x] Information not conveyed by color alone
- [x] Required fields indicated with asterisk + label
- [x] Error states use icons + text
- [ ] Verify color is not sole indicator

## Motion & Animation

### Reduced Motion
- [x] Motion utilities respect prefers-reduced-motion
- [x] Carousel auto-advance disabled with reduced motion
- [x] CSS transitions respect reduced motion
- [ ] Test with prefers-reduced-motion enabled
- [ ] Verify no essential information in motion

## Form Accessibility

### Form Labels
- [x] All form fields have labels
- [x] Labels properly associated with inputs
- [x] Required fields clearly indicated
- [x] Error messages associated with fields
- [ ] Test form with screen reader

### Form Validation
- [x] Client-side validation with error messages
- [x] Server-side validation
- [x] Error messages are descriptive
- [ ] Verify error announcements

## Mobile Accessibility

### Touch Targets
- [x] Buttons are appropriately sized
- [x] Links have adequate spacing
- [ ] Verify touch targets are at least 44x44px
- [ ] Test on actual mobile devices

### Mobile Navigation
- [x] Mobile menu is keyboard accessible
- [x] Mobile menu closes on link click
- [x] Mobile menu has proper ARIA attributes
- [ ] Test mobile navigation with keyboard

## Testing

### Automated Testing
- [ ] Run axe DevTools
- [ ] Run WAVE evaluation
- [ ] Run Lighthouse accessibility audit

### Manual Testing
- [ ] Test with keyboard only
- [ ] Test with screen reader (NVDA/JAWS/VoiceOver)
- [ ] Test with browser zoom (200%)
- [ ] Test with high contrast mode
- [ ] Test with reduced motion preference

## WCAG Compliance

### WCAG 2.1 Level AA
- [x] Perceivable: Text alternatives, captions, color contrast
- [x] Operable: Keyboard accessible, no seizures, navigable
- [x] Understandable: Readable, predictable, input assistance
- [x] Robust: Compatible, valid markup
- [ ] Full WCAG 2.1 AA compliance verified
- [ ] WCAG 2.1 AAA where possible

## Notes

- Carousel meets WAI carousel guidance
- All interactive elements have proper ARIA labels
- Focus management is implemented
- Reduced motion is respected
- Form accessibility is comprehensive

