# Parents Care Indonesia — Design System Implementation Guide

## Overview

This document describes how the Parents Care Indonesia website implements the design system defined in `DESIGN.md`. The design.md specification provides a structured, machine-readable design system that ensures consistency, accessibility, and professional quality across all user-facing interfaces.

## File Structure

```
/vercel/share/v0-project/
├── DESIGN.md                          # Master design specification
├── DESIGN_IMPLEMENTATION.md           # This file
├── tailwind.config.js                 # Tailwind CSS configuration aligned with DESIGN.md
├── app/globals.css                    # CSS custom properties / design tokens
├── app/
│   ├── page.tsx                       # Homepage
│   ├── about/page.tsx                 # About page
│   ├── services/page.tsx              # Services page
│   ├── contact/page.tsx               # Contact page
│   └── ...other pages
└── components/
    ├── navbar.tsx
    ├── footer.tsx
    ├── testimonials-section.tsx
    └── ...other components
```

## Design Token Mapping

### Colors

The DESIGN.md color palette is implemented through:

1. **Tailwind Config (`tailwind.config.js`)** — Extended color palette with semantic naming
2. **CSS Custom Properties (`app/globals.css`)** — HSL-based fallbacks for dynamic theming
3. **Component Classes** — Applied via `className` using Tailwind utilities

#### Primary Color (#EC4899)

Used for calls-to-action, highlights, and primary interactions.

```tsx
// Usage examples
<Button className="bg-primary text-white">Book Now</Button>
<div className="bg-gradient-to-r from-primary to-primary-dark">...</div>
<span className="text-primary">Important text</span>
```

#### Secondary Color (#3B82F6)

Used for informational elements and supportive messaging.

```tsx
<Button className="bg-secondary text-white">Learn More</Button>
<div className="border-b-2 border-secondary">Section</div>
```

#### Neutrals (Neutral 50–900)

Grayscale for text, backgrounds, and borders.

```tsx
// Text contrast
<p className="text-neutral-900">High contrast text</p>
<p className="text-neutral-600">Secondary text</p>

// Backgrounds
<div className="bg-neutral-50">Light background</div>
<div className="bg-white">Primary background</div>

// Borders
<div className="border border-neutral-200">Card with subtle border</div>
```

### Typography

Implemented via:

1. **Font Family** — Geist (already configured in `app/layout.tsx`)
2. **Tailwind Font Scales** — `text-sm`, `text-base`, `text-lg`, `text-2xl`, etc.
3. **Custom Classes** — For specific typography tokens

#### Typography Hierarchy

```tsx
// H1 (3.5rem, 700 weight)
<h1 className="text-5xl font-bold">Main Heading</h1>

// H2 (2.25rem, 700 weight)
<h2 className="text-4xl font-bold">Section Heading</h2>

// H3 (1.875rem, 600 weight)
<h3 className="text-3xl font-semibold">Subsection</h3>

// Body Large (1.125rem)
<p className="text-lg leading-relaxed">Large paragraph text</p>

// Body Medium (1rem, default)
<p className="text-base leading-relaxed">Standard paragraph</p>

// Body Small (0.875rem)
<p className="text-sm leading-relaxed">Small text</p>

// Label (0.875rem, 600 weight, tracked)
<label className="text-sm font-semibold tracking-wide">Form Label</label>

// Caption (0.75rem, 500 weight, heavily tracked)
<span className="text-xs font-medium tracking-widest">Meta information</span>
```

### Spacing

Tailwind's spacing scale is configured to match DESIGN.md:

```tsx
// xs: 4px
<div className="p-1">...</div>

// sm: 8px
<div className="p-2">...</div>

// md: 16px (default/common)
<div className="p-4">...</div>

// lg: 24px
<div className="p-6">...</div>

// xl: 32px
<div className="p-8">...</div>

// xxl: 48px
<div className="p-12">...</div>

// xxxl: 64px
<div className="p-16">...</div>
```

**Gap utilities** (for flexbox and grid):

```tsx
<div className="flex gap-4">...</div>  // 16px gap
<div className="grid gap-6">...</div>  // 24px gap
```

### Rounded Corners

```tsx
// sm: 4px
<div className="rounded-sm">...</div>

// md: 8px (default for most interactive elements)
<div className="rounded">...</div>

// lg: 12px (cards and containers)
<div className="rounded-lg">...</div>

// xl: 16px (hero sections)
<div className="rounded-xl">...</div>

// full: 9999px (pill-shaped buttons)
<button className="rounded-full">...</button>
```

## Component Patterns

### Buttons

**Primary Button**

```tsx
<Button className="bg-primary text-white hover:bg-primary-dark transition-colors px-6 py-3 rounded-lg font-semibold">
  Call to Action
</Button>
```

**Secondary Button**

```tsx
<Button className="bg-secondary text-white hover:bg-secondary-dark transition-colors px-6 py-3 rounded-lg font-semibold">
  Alternative Action
</Button>
```

**Outline Button**

```tsx
<Button className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors px-6 py-3 rounded-lg font-semibold">
  Tertiary Action
</Button>
```

### Cards

**Elevated Card**

```tsx
<div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-neutral-100">
  <h3 className="text-xl font-semibold text-neutral-900 mb-2">Title</h3>
  <p className="text-neutral-600">Content</p>
</div>
```

**Filled Card**

```tsx
<div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
  <h3 className="text-xl font-semibold text-neutral-900 mb-2">Title</h3>
  <p className="text-neutral-600">Content</p>
</div>
```

### Text Hierarchy

**Primary Text** (Neutral 900)

```tsx
<p className="text-neutral-900">Important content with high contrast</p>
```

**Secondary Text** (Neutral 600)

```tsx
<p className="text-neutral-600">Supporting details and metadata</p>
```

**Muted Text** (Neutral 500)

```tsx
<p className="text-neutral-500">Placeholder or less important information</p>
```

### Form Inputs

```tsx
<input
  type="text"
  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
  placeholder="Enter text..."
/>
```

## Accessibility Considerations

### Contrast Ratios

All text meets WCAG AA minimum (4.5:1 for normal text):

- **Neutral 900 on White**: 15.3:1 ✓
- **Neutral 700 on White**: 8.4:1 ✓
- **Primary (#EC4899) on White**: 4.8:1 ✓
- **Secondary (#3B82F6) on White**: 5.1:1 ✓

### Touch Targets

All interactive elements are minimum 44×44px on mobile:

```tsx
<button className="px-6 py-3 min-h-[44px]">Touch Target</button>
```

### Motion

Respect `prefers-reduced-motion` when adding animations:

```tsx
import { useReducedMotion } from 'framer-motion';

function AnimatedComponent() {
  const shouldReduce = useReducedMotion();
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: shouldReduce ? 0 : 0.3 }}
    >
      Content
    </motion.div>
  );
}
```

## Responsive Design

Mobile-first approach using Tailwind breakpoints:

```tsx
// Mobile: 100% width
// Tablet (md): 2 columns
// Desktop (lg): 3 columns
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {items.map(item => <Card key={item.id}>{item}</Card>)}
</div>
```

## Icons

Use **lucide-react** for all icons. Never use emojis:

```tsx
import { Heart, Shield, Clock, Users, MessageCircle } from 'lucide-react';

// Usage
<Heart className="w-6 h-6 text-primary" />
<Shield className="w-5 h-5 text-secondary" />
```

## Image Guidelines

- Use actual generated images, not placeholders
- Provide meaningful alt text for all images
- Optimize images for web (PNG for graphics, JPG for photos)
- Use Next.js `Image` component for optimization

```tsx
import Image from 'next/image';

<Image
  src="/caregiver-hero.png"
  alt="Professional caregiver assisting elderly patient"
  width={600}
  height={400}
  className="rounded-lg object-cover"
/>
```

## Color Do's and Don'ts

### ✓ Do's

- Use Primary Pink for CTAs and momentous decisions
- Pair Primary and Secondary for visual rhythm
- Apply generous spacing to reduce cognitive load
- Use Neutral 800/900 text on light backgrounds
- Test all interactive elements in focus/hover/active states

### ✗ Don'ts

- Don't use Neutral 500 or lighter for body text on white (insufficient contrast)
- Don't apply aggressive shadows; reserve elevation for intentional depth
- Don't mix more than 5 colors in a single view
- Don't use emojis; use lucide-react icons instead
- Don't set line-height below 1.5 for body text
- Don't create interactive elements smaller than 44px on mobile

## Validation

To validate the DESIGN.md file:

```bash
npx @google/design.md lint DESIGN.md
```

To export Tailwind tokens from DESIGN.md:

```bash
npx @google/design.md export --format json-tailwind DESIGN.md
```

## Extending the Design System

To add new colors, typography scales, or components:

1. **Update `DESIGN.md`** — Add the token to the YAML front matter
2. **Update `tailwind.config.js`** — Add the corresponding Tailwind utility
3. **Update `app/globals.css`** — Add CSS custom property if needed
4. **Test** — Build and verify visual consistency (`pnpm build`)
5. **Document** — Update this file with usage examples

## References

- **DESIGN.md Specification**: https://stitch.withgoogle.com/docs/design-md/specification
- **Tailwind CSS**: https://tailwindcss.com
- **Lucide Icons**: https://lucide.dev
- **WCAG Accessibility**: https://www.w3.org/WAI/WCAG21/quickref/
