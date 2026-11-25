# Personal Portfolio

My portfolio site: [hazemhosni-portfolio.netlify.app](https://hazemhosni-portfolio.netlify.app)

Static HTML, generated at build time with Astro. Seventeen pages — work history,
eleven project write-ups, an about page and client-side search.

## Why static

The previous version of this site (Next.js, client-rendered — still in this repository's
history) shipped 854 bytes of HTML whose only visible text was "Personal Portfolio".
Everything else arrived via JavaScript.

That is fine for a browser and useless for everything else. LinkedIn, Slack and iMessage
preview fetchers do not run JavaScript, so a shared link showed an empty card. Search
crawlers see rather less than a browser does.

This version renders everything at build time. The home page alone carries about 2,000
characters of real text before any script runs, and the whole site loads exactly one
script — the search index, on `/search/` only.

## What's here

| | |
|---|---|
| Pages | Home, work, projects index, 11 project pages, about, search, 404 |
| Metadata | Per-page canonical, Open Graph and Twitter tags |
| Structured data | JSON-LD `Person` sitewide, plus `ProfilePage`, `CollectionPage`, `SoftwareSourceCode` |
| Social cards | A 1200×630 PNG per project, rendered from SVG at build time with sharp |
| Search | Pagefind, with the full index also rendered as plain links so it works without JS |
| Theming | Light and dark via `prefers-color-scheme` — no theme script, no flash |

Repository facts on the project pages — language, last push, topics — are reconciled
against the GitHub API during the build. If that call fails or hits a rate limit, the build
falls back to the static data rather than failing the deploy.

## Structure

```
src/
  data/        profile, experience, projects — content lives here, not in markup
  layouts/     Base.astro: head, metadata, nav, skip link
  lib/         github.ts: build-time API reconciliation
  pages/       routes, including og/[slug].png.ts for the social cards
  styles/      global.css: design tokens, light and dark
```

## Running locally

Needs Node 22.23.4 or newer.

```bash
npm install
npm run dev      # dev server
npm run build    # astro build, then the pagefind index
npm run preview  # serve the built site
```

On Windows, `npm run build` needs the Visual C++ runtime installed — Astro's Markdown
processor loads a native module. Without it the build fails with "Cannot find native
binding", which is misleading: the binding is there, the DLL it depends on is not.

## Deployment

Netlify, from `main`. Build and header configuration is in `netlify.toml` — note that
build settings in the Netlify UI override that file if both are set.

Assets under `/_astro/` are fingerprinted and cached immutably. The social cards under
`/og/` are not fingerprinted, so they are deliberately cached for a day with revalidation
rather than permanently.
