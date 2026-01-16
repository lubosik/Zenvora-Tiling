# Design System Documentation

## Overview
Design tokens and layout primitives for a luxury commercial tile supplier website, inspired by Ca' Pietra's clean layout and spacious rhythm.

## Design Tokens

### Colors

#### Neutral Palette (Warm Neutrals)
- `neutral-50` to `neutral-950`: Warm stone-inspired neutrals
- Primary text: `neutral-900`
- Secondary text: `neutral-600`
- Borders: `neutral-200`
- Backgrounds: `neutral-50`, `neutral-100`

#### Accent Palette (Warm Accents)
- `accent-50` to `accent-950`: Warm orange/amber tones
- Primary accent: `accent-500`
- Hover states: `accent-600`

### Typography

#### Font Families
- **Sans**: System font stack (system-ui, -apple-system, etc.)
- **Display**: Same as sans (can be customized with premium font later)

#### Font Scale
- `xs`: 0.75rem (12px) - Line height: 1.5
- `sm`: 0.875rem (14px) - Line height: 1.5
- `base`: 1rem (16px) - Line height: 1.6
- `lg`: 1.125rem (18px) - Line height: 1.6
- `xl`: 1.25rem (20px) - Line height: 1.6
- `2xl`: 1.5rem (24px) - Line height: 1.4
- `3xl`: 1.875rem (30px) - Line height: 1.3
- `4xl`: 2.25rem (36px) - Line height: 1.2
- `5xl`: 3rem (48px) - Line height: 1.1
- `6xl`: 3.75rem (60px) - Line height: 1.1
- `7xl`: 4.5rem (72px) - Line height: 1.0

### Spacing Scale
Extended spacing scale for generous whitespace:
- Standard: 0.25rem to 4rem (0-64px)
- Extended: 4.5rem (72px), 5.5rem (88px), 6.5rem (104px), 7.5rem (120px), 8.5rem (136px), 9.5rem (152px), 10.5rem (168px), 11.5rem (184px), 12.5rem (200px)

### Container Widths
- `container`: 1280px (default)
- `container-wide`: 1440px
- `container-narrow`: 1024px

### Border Radius
- `sm`: 0.25rem (4px)
- `DEFAULT`: 0.375rem (6px)
- `md`: 0.5rem (8px)
- `lg`: 0.75rem (12px)
- `xl`: 1rem (16px)
- `2xl`: 1.5rem (24px)

### Shadows
Subtle shadows for depth:
- `sm`: Minimal shadow
- `DEFAULT`: Standard shadow
- `md`: Medium shadow
- `lg`: Large shadow
- `xl`: Extra large shadow
- `2xl`: Maximum shadow

## Layout Primitives

### Container
Wraps content with max-width and horizontal padding.

**Props:**
- `children`: ReactNode
- `className?`: string
- `wide?`: boolean - Uses container-wide (1440px)
- `narrow?`: boolean - Uses container-narrow (1024px)

**Usage:**
```tsx
<Container>
  <p>Content</p>
</Container>
```

### Section
Semantic section wrapper with vertical spacing and background options.

**Props:**
- `children`: ReactNode
- `className?`: string
- `spacing?`: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' (default: 'md')
- `background?`: 'default' | 'neutral' | 'accent' (default: 'default')

**Usage:**
```tsx
<Section spacing="lg" background="neutral">
  <Container>Content</Container>
</Section>
```

### Stack
Vertical stack with consistent spacing between children.

**Props:**
- `children`: ReactNode
- `className?`: string
- `spacing?`: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' (default: 'md')
- `align?`: 'start' | 'center' | 'end' | 'stretch' (default: 'stretch')

**Usage:**
```tsx
<Stack spacing="lg" align="center">
  <div>Item 1</div>
  <div>Item 2</div>
</Stack>
```

### Grid
Responsive grid layout with configurable columns and gap.

**Props:**
- `children`: ReactNode
- `className?`: string
- `cols?`: 1 | 2 | 3 | 4 | 6 | 12 (default: 3)
- `gap?`: 'none' | 'sm' | 'md' | 'lg' | 'xl' (default: 'md')
- `responsive?`: boolean (default: true) - Enables responsive breakpoints

**Usage:**
```tsx
<Grid cols={3} gap="lg">
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
</Grid>
```

## UI Components

### Button
Accessible button with multiple variants and sizes.

**Props:**
- `children`: ReactNode
- `variant?`: 'primary' | 'secondary' | 'outline' | 'ghost' (default: 'primary')
- `size?`: 'sm' | 'md' | 'lg' (default: 'md')
- `fullWidth?`: boolean (default: false)
- All standard button HTML attributes

**Usage:**
```tsx
<Button variant="primary" size="lg">Click Me</Button>
```

### Tag
Small badge/tag component for labels.

**Props:**
- `children`: ReactNode
- `className?`: string
- `variant?`: 'default' | 'accent' | 'neutral' (default: 'default')
- `size?`: 'sm' | 'md' (default: 'md')

**Usage:**
```tsx
<Tag variant="accent">New</Tag>
```

### Card
Container card with optional hover effect.

**Props:**
- `children`: ReactNode
- `className?`: string
- `hover?`: boolean (default: false) - Enables hover shadow
- `padding?`: 'none' | 'sm' | 'md' | 'lg' (default: 'md')

**Usage:**
```tsx
<Card hover padding="lg">
  <h3>Card Title</h3>
  <p>Card content</p>
</Card>
```

## Motion Utilities

Motion utilities respect `prefers-reduced-motion` for accessibility.

### Classes
- `.motion-safe-transition`: Standard 200ms transition
- `.motion-safe-transition-slow`: 300ms transition
- `.motion-safe-fade-in`: Fade in animation
- `.motion-safe-slide-up`: Slide up animation

**Usage:**
```tsx
<div className="motion-safe-fade-in">
  Content that fades in
</div>
```

All motion utilities automatically disable when `prefers-reduced-motion: reduce` is detected.

## Best Practices

1. **Spacing**: Use generous spacing (md, lg, xl) for luxury feel
2. **Containers**: Always wrap content in Container for consistent max-width
3. **Sections**: Use Section for major page sections with appropriate spacing
4. **Motion**: Always use motion-safe-* classes to respect accessibility preferences
5. **Colors**: Prefer neutral palette for text and backgrounds; use accent sparingly for CTAs
6. **Typography**: Use appropriate scale - larger sizes for headings, base for body text

## Example Page

See `/app/_dev/design/page.tsx` for a complete example showcasing all primitives and components.

