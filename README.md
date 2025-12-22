# Tatawur AI

Marketing website for Tatawur AI LLC — a consulting firm specializing in software and AI automation solutions for the Architecture, Engineering, and Construction (AEC) industry.

The name "Tatawur" (تطور) means "evolution" in Arabic.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- SCSS Modules
- Framer Motion
- Lucide React

## Quick Start

```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
bun run build
bun start
```

## Project Structure

```
src/
  app/
    layout.tsx        Root layout with fonts
    page.tsx          Main page

  components/
    Navigation.tsx    Header with mobile menu
    Hero.tsx          Landing section
    Overview.tsx      Value propositions
    Services.tsx      Service offerings
    About.tsx         Founder information
    Contact.tsx       Contact details
    Footer.tsx        Site footer
    Logo.tsx          Brand logo

  styles/
    _variables.scss   Design tokens
    _mixins.scss      Reusable mixins
    globals.scss      Base styles

  lib/
    utils.ts          Utilities
```

## Fonts

- Outfit — headings
- DM Sans — body text
- Aref Ruqaa — Arabic calligraphy

## Colors

| Name      | Hex       |
| --------- | --------- |
| Primary   | `#0a2463` |
| Secondary | `#3bceac` |
| Accent    | `#fb8b24` |

## License

Copyright 2025 Tatawur AI LLC
