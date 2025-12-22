# Tatawur AI - Marketing Website

A modern, professional marketing website for Tatawur AI LLC, a consulting firm specializing in software and AI automation solutions for the Architecture, Engineering, and Construction (AEC) industry.

**Brand Name**: Tatawur AI (Arabic: تطور - meaning "evolution")

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Radix UI primitives
- **Fonts**: Outfit (headings), DM Sans (body), JetBrains Mono (code)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Development

The development server runs at `http://localhost:3000`

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles and Tailwind config
│   ├── layout.tsx       # Root layout with fonts and metadata
│   └── page.tsx         # Main marketing page
├── components/
│   ├── Navigation.tsx   # Sticky nav with mobile menu
│   ├── Hero.tsx         # Hero section with animations
│   ├── Overview.tsx     # Company overview and value props
│   ├── Services.tsx     # Service offerings grid
│   ├── About.tsx        # Founder bio and credentials
│   ├── Contact.tsx      # Contact form with validation
│   ├── Footer.tsx       # Site footer
│   └── index.ts         # Component exports
└── lib/
    └── utils.ts         # Utility functions (cn helper)
```

## Features

- ✅ Fully responsive (mobile-first design)
- ✅ Smooth scrolling navigation
- ✅ Animated sections with Framer Motion
- ✅ SEO optimized with meta tags and Open Graph
- ✅ Accessible components (keyboard navigation, ARIA)
- ✅ Contact form with client-side validation
- ✅ Modern glass-morphism effects
- ✅ Custom color palette (blues, teals, orange accents)

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Primary (Deep Blue) | `#0A2463` | Trust, professionalism |
| Secondary (Teal) | `#3BCEAC` | Innovation, technology |
| Accent (Warm Orange) | `#FB8B24` | Construction, energy |
| Neutral Dark | `#2B2D42` | Text, borders |
| Neutral Light | `#E5E5E5` | Backgrounds, dividers |

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Deploy the .next folder
```

## Customization

### Adding Images

Replace placeholder images in the components:
- Hero background
- Profile photo in About section
- Service icons (currently using Lucide icons)

### Contact Form Integration

The contact form is ready for integration with:
- Netlify Forms
- Formspree
- Custom API endpoint

Update the `handleSubmit` function in `src/components/Contact.tsx` to connect to your backend.

## License

© 2025 Tatawur AI LLC. All rights reserved.
