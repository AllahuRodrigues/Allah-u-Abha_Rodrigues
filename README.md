# allahurodrigues.com

Personal site of Allah-u-Abha Rodrigues — engineer & artist. A single-page
"studio" built like a gallery: cream paper, ink, and a pinned horizontal
corridor of graphite drawings from Maputo and Lakeville.

## Stack

- Next.js 14 (app router) · React 18 · TypeScript
- Tailwind CSS (design tokens in `app/globals.css`)
- GSAP ScrollTrigger (gallery corridor, ink-in paragraph, hero parallax)
- Lenis (smooth scroll)
- Fonts: Instrument Serif · Space Grotesk · Space Mono

## Editing content

Everything editable lives in **`lib/studio.ts`** — bio words, artworks
(titles, years, statements), projects, snapshots, and links. Components in
`components/studio/` are layout only.

## Images

- `public/art/` and `public/photos/` hold the web-optimized copies used by
  the site (≤1800px JPEGs).
- `public/art-portfolio/` and `public/me/` are the **originals** (scans,
  statements, private docs). They are gitignored on purpose — never commit
  or deploy them.

## Develop

```bash
pnpm install
pnpm dev
```

Build with `pnpm build` (also regenerates the sitemap). Deployed on Vercel.
