---
version: alpha
name: Parents Care Indonesia
description: A compassionate healthcare caregiving design system prioritizing trust, accessibility, and family wellness
colors:
  primary: "#EC4899"
  primary-dark: "#BE185D"
  primary-light: "#F472B6"
  secondary: "#3B82F6"
  secondary-dark: "#1D4ED8"
  secondary-light: "#93C5FD"
  success: "#10B981"
  success-dark: "#047857"
  warning: "#F59E0B"
  warning-dark: "#D97706"
  danger: "#EF4444"
  danger-dark: "#DC2626"
  neutral-50: "#F9FAFB"
  neutral-100: "#F3F4F6"
  neutral-200: "#E5E7EB"
  neutral-300: "#D1D5DB"
  neutral-400: "#9CA3AF"
  neutral-500: "#6B7280"
  neutral-600: "#4B5563"
  neutral-700: "#374151"
  neutral-800: "#1F2937"
  neutral-900: "#111827"
  background: "#FFFFFF"
  surface: "#F9FAFB"
  muted-foreground: "#6B7280"
  foreground: "#111827"
  border: "#E5E7EB"
typography:
  h1:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: 3.5rem
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  h2:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: 2.25rem
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  h3:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: 1.875rem
    fontWeight: 600
    lineHeight: 1.3
  h4:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: 1.5rem
    fontWeight: 600
    lineHeight: 1.3
  body-lg:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: 1.125rem
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0em"
  body-md:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: 0.875rem
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.025em"
  caption:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: 0.75rem
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.05em"
rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  xxxl: 64px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#FFFFFF"
    typography: "{typography.label}"
    rounded: "{rounded.lg}"
    padding: "12px 24px"
    height: 44px
  button-primary-hover:
    backgroundColor: "{colors.primary-dark}"
    textColor: "#FFFFFF"
  button-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "#FFFFFF"
    typography: "{typography.label}"
    rounded: "{rounded.lg}"
    padding: "12px 24px"
    height: 44px
  button-secondary-hover:
    backgroundColor: "{colors.secondary-dark}"
    textColor: "#FFFFFF"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.label}"
    rounded: "{rounded.lg}"
    padding: "12px 24px"
    height: 44px
  card-elevated:
    backgroundColor: "{colors.background}"
    rounded: "{rounded.xl}"
    padding: "{spacing.lg}"
  card-filled:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.xl}"
    padding: "{spacing.lg}"
  text-primary:
    textColor: "{colors.foreground}"
    typography: "{typography.body-md}"
  text-muted:
    textColor: "{colors.muted-foreground}"
    typography: "{typography.body-sm}"
---

## Overview

**Parents Care Indonesia** is a trusted home healthcare caregiving platform dedicated to supporting Indonesian families with professional, compassionate care. The design system reflects our core values: **Trust** through clean, professional aesthetics; **Accessibility** via clear typography and inclusive interactions; and **Warmth** through a balanced color palette combining trust-building neutrals with supportive, energetic accents.

The visual identity combines:
- **Medical Professionalism**: Neutral grounding with controlled accent colors, ensuring users feel confident in our expertise
- **Compassionate Warmth**: Pink and blue accents that convey care, connection, and approachability
- **Modern Clarity**: Sans-serif typography and spacious layouts that reduce cognitive load for elderly users and their families
- **Accessibility First**: High contrast ratios, readable font sizes, and large interactive targets

## Colors

### Core Palette

**Primary (#EC4899)** — Energetic Pink
The primary brand color representing care, compassion, and vitality. Used for calls-to-action, highlights, and key interactions. This warm pink builds emotional connection while remaining professional.

**Secondary (#3B82F6)** — Trust Blue
A dependable blue representing health, stability, and trust. Used for informational elements, secondary actions, and supportive messaging. Complements the primary pink and creates visual rhythm.

**Neutrals (Neutral 50–900)** — Professional Foundation
A carefully calibrated grayscale from off-white (50) to near-black (900). Neutrals carry the visual weight of content hierarchy, text, and backgrounds. The progression ensures sufficient contrast for accessibility while maintaining a cohesive, modern aesthetic.

### Semantic Colors

**Success (#10B981)** — Confirmation
Used for successful bookings, completed tasks, and positive affirmations. Provides clear, universal feedback that an action succeeded.

**Warning (#F59E0B)** — Caution
Highlights important notifications, verification steps, or action required. Captures attention without alarm.

**Danger (#EF4444)** — Critical
Reserved for cancellations, errors, or destructive actions. Signals high importance and requires user attention.

### Application

- **Text**: Neutral 800 or 900 on light backgrounds for maximum readability
- **Backgrounds**: Neutral 50 or White for primary surfaces; Neutral 100 for secondary surfaces
- **Borders**: Neutral 200 for subtle definition without visual noise
- **Interactive Elements**: Primary or Secondary with hover states (darker shades)
- **Accessibility**: All interactive elements meet WCAG AA contrast ratios (4.5:1 minimum for text, 3:1 for UI components)

## Typography

### Font Family

**Geist** is the primary typeface across all text. Its humanist sans-serif structure is both modern and approachable, reducing anxiety for elderly users while maintaining professional authority.

### Type Scale

- **H1–H4**: Display and sectional headings with generous line-height (1.1–1.3) to ease reading
- **Body**: Three scales (lg, md, sm) supporting various content contexts—paragraphs, labels, and captions
- **Labels**: Semi-bold with letter-spacing for UI labels and button text
- **Captions**: Small, slightly tracked text for metadata and helper copy

### Line Height & Spacing

All body text uses 1.6 line-height for comfort, especially for elderly users who may have vision challenges. Headings use tighter 1.1–1.3 line-height for visual hierarchy.

## Layout

### Spacing System

The spacing scale (4px, 8px, 16px, 24px, 32px, 48px, 64px) is grounded in multiples of 4px, ensuring alignment and visual consistency across all breakpoints.

- **Micro spacing (xs, sm)**: Component padding, icon separation
- **Regular spacing (md, lg)**: Section padding, card gaps
- **Large spacing (xl, xxl, xxxl)**: Page sections, hero areas

### Layout Method Priority

1. **Flexbox**: Default for navigation, hero sections, and component layouts
2. **Grid**: Complex multi-column layouts (service cards, feature grids)
3. **Positioned elements**: Minimal use; reserved for overlays and modals

### Responsive Design

- **Mobile-first approach**: Design starts at 375px (small phones) and scales to 1920px+ (desktop)
- **Breakpoints**: `sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`
- **Touch targets**: Minimum 44×44px for mobile interactions

## Elevation & Depth

### Shadow System

- **Subtle (card-subtle)**: `0 1px 2px rgba(0,0,0,0.05)` — Default card elevation
- **Medium (card-medium)**: `0 4px 6px rgba(0,0,0,0.07)` — Hover states, floating elements
- **Strong (card-strong)**: `0 10px 15px rgba(0,0,0,0.1)` — Modal overlays, prominent dropdowns

### Layering Strategy

Cards and sections stack with subtle shadows to indicate depth without overwhelming the interface. Hover states elevate slightly (medium shadow) to indicate interactivity.

## Shapes

### Border Radius

- **None (0px)**: Sharp edges for strict geometric elements
- **Small (4px)**: Subtle rounding for minimal softening
- **Medium (8px)**: Default for most interactive elements
- **Large (12px)**: Cards and containers
- **Extra Large (16px)**: Hero sections and major containers
- **Full (9999px)**: Buttons and pill-shaped elements

Rounding always remains subtle; we avoid excessive softening that diminishes professional credibility.

## Components

### Buttons

**Primary Button**: Vibrant pink (`#EC4899`) background with white text. Used for primary actions (Book Now, Submit, etc.). Hover state darkens to `#BE185D` for tactile feedback.

**Secondary Button**: Blue (`#3B82F6`) background. Used for alternative actions (Learn More, Cancel, etc.). Maintains visual hierarchy while providing clear alternatives.

**Outline Button**: Transparent background with pink text and border. Used for tertiary actions or toggles.

All buttons have:
- Minimum height of 44px for mobile touch accessibility
- Label-weight typography for clarity
- Smooth color transitions (200ms) on hover/active states

### Cards

**Elevated Card**: White background with subtle shadow, rounded corners. Used for content containers that require prominence (testimonials, service details).

**Filled Card**: Light neutral background (`#F9FAFB`) with no shadow. Used for grouped content or secondary information areas.

Both card types use consistent padding (`{spacing.lg}`) and `{rounded.xl}` for cohesion.

### Text Styles

**Primary Text**: Dark neutral (`#111827`) on light backgrounds. Used for all body content and headlines.

**Muted Text**: Medium neutral (`#6B7280`) on light backgrounds. Used for supporting text, metadata, or secondary information.

Contrast ratios exceed WCAG AA across all combinations.

### Forms & Inputs

Input fields share these properties:
- Subtle border (`#E5E7EB`)
- Rounded corners (`{rounded.lg}`)
- Minimum height 44px
- Padding `{spacing.md}`
- Focus state: pink border, subtle shadow

## Do's and Don'ts

### Do's

✓ Use Primary Pink for calls-to-action and moments requiring user decision  
✓ Pair Primary and Secondary colors to create visual rhythm and guide user flow  
✓ Apply generous spacing to reduce cognitive load, especially for elderly users  
✓ Use high-contrast text (Neutral 800/900) on light backgrounds for readability  
✓ Employ icons alongside text labels for clarity and accessibility  
✓ Test hover, focus, and active states on all interactive elements  
✓ Ensure all text is at least 16px on mobile, 14px on desktop (minimum)  

### Don'ts

✗ Don't use colors below Neutral 500 as text on light backgrounds (insufficient contrast)  
✗ Don't apply shadow effects aggressively; reserve elevation for intentional depth  
✗ Don't mix more than 5 colors in a single interface section  
✗ Don't use emojis; replace with appropriate lucide-react icons  
✗ Don't set line-height below 1.5 for body text  
✗ Don't create interactive elements smaller than 44×44px on mobile  
✗ Don't animate rapidly or without user control; respect `prefers-reduced-motion`  
