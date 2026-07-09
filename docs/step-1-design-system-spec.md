# STEP 1 - Figma-Style Design System Spec (Implementation Ready)

## Color Tokens

- `brand.500`: `#f59e0b` (primary CTA)
- `brand.600`: `#dd7602` (hover/active)
- `surface.light`: `#f8fafc`
- `surface.dark`: `#0f172a`
- `text.primary.light`: `#0f172a`
- `text.primary.dark`: `#f8fafc`

## Typography

- Display: 48/56, 700
- H1: 36/44, 700
- H2: 30/38, 600
- H3: 24/32, 600
- Body: 16/24, 400-500
- Small: 14/20, 400

## Spacing, Radius, Shadow

- Spacing scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64
- Radius scale: 8, 12, 16, 24
- Shadows:
  - Card: `0 8px 24px rgba(15, 23, 42, 0.08)`
  - Elevated CTA: `0 12px 28px rgba(245, 158, 11, 0.28)`

## Components

- **Button**: primary, secondary, ghost; min height 44px
- **Card**: service, testimonial, offer, dashboard metric
- **Input/Form**: labels above fields, inline validation text
- **Table**: admin lead table with status chips and action menu
- **Badge**: status-based (NEW, UNDER_REVIEW, APPROVED, REJECTED)
- **Modal**: calculator details, lead assignment
- **Navbar/Footer**: persistent trust and contact visibility

## Layout Grid and Breakpoints

- Container max width: 1280px
- Breakpoints:
  - `sm`: 640
  - `md`: 768
  - `lg`: 1024
  - `xl`: 1280

## Motion (Framer Motion)

- Enter animation: `opacity: 0 -> 1`, `y: 20 -> 0`, `duration: 0.4`
- Stagger sections on landing page
- CTA hover micro-scale: `1 -> 1.02`
- Respect reduced motion preference

## Tailwind Mapping

Defined in `frontend/tailwind.config.ts`:

- `theme.extend.colors.brand`
- `theme.extend.colors.surface`

Further phases should extend with semantic tokens:
- `success`, `warning`, `error`, `info`
- role-specific dashboard accents
