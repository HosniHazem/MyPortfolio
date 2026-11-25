// Build-time Open Graph cards, one per project plus a site default.
//
// Rendered as SVG and rasterised with sharp (already present as Astro's image service).
// No headless browser, no network, no runtime cost — these are static files in dist/.

import type { APIRoute } from 'astro';
import sharp from 'sharp';
import { projects } from '../../data/projects';
import { profile } from '../../data/profile';

const W = 1200;
const H = 630;

interface Card {
  slug: string;
  eyebrow: string;
  heading: string;
  sub: string;
}

const cards: Card[] = [
  {
    slug: 'default',
    eyebrow: profile.role.toUpperCase(),
    heading: profile.name,
    sub: profile.specialism,
  },
  ...projects.map((p) => ({
    slug: p.slug,
    eyebrow: `${p.year} · PROJECT`,
    heading: p.name,
    sub: p.tagline,
  })),
];

export function getStaticPaths() {
  return cards.map((card) => ({ params: { slug: card.slug }, props: { card } }));
}

/** Escape the five XML entities so project copy cannot break the SVG document. */
function esc(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/** Greedy wrap by approximate glyph width — good enough for two or three lines. */
function wrap(text: string, maxChars: number, maxLines: number): string[] {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let line = '';
  for (const w of words) {
    const next = line ? `${line} ${w}` : w;
    if (next.length > maxChars && line) {
      lines.push(line);
      line = w;
      if (lines.length === maxLines) break;
    } else {
      line = next;
    }
  }
  if (line && lines.length < maxLines) lines.push(line);
  if (lines.length === maxLines) {
    const last = lines[maxLines - 1];
    if (last.length > maxChars - 1) lines[maxLines - 1] = `${last.slice(0, maxChars - 1)}…`;
  }
  return lines;
}

function svg(card: Card): string {
  const headingLines = wrap(card.heading, 24, 2);
  const subLines = wrap(card.sub, 52, 2);
  const headingSize = headingLines.length > 1 ? 72 : 88;

  const heading = headingLines
    .map((l, i) => `<tspan x="80" dy="${i === 0 ? 0 : headingSize * 1.12}">${esc(l)}</tspan>`)
    .join('');
  const sub = subLines
    .map((l, i) => `<tspan x="80" dy="${i === 0 ? 0 : 46}">${esc(l)}</tspan>`)
    .join('');

  const headingY = 250 - (headingLines.length - 1) * (headingSize * 0.4);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#101014"/>
      <stop offset="100%" stop-color="#1b2b26"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect x="0" y="0" width="10" height="${H}" fill="#6fd6b2"/>
  <text x="80" y="140" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="26"
        letter-spacing="4" fill="#6fd6b2">${esc(card.eyebrow)}</text>
  <text x="80" y="${headingY}" font-family="Segoe UI, Helvetica, Arial, sans-serif"
        font-size="${headingSize}" font-weight="700" fill="#f4f4f6">${heading}</text>
  <text x="80" y="${headingY + headingSize * (headingLines.length - 1) * 1.12 + 80}"
        font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="36"
        fill="#a9a9b4">${sub}</text>
  <text x="80" y="${H - 70}" font-family="Segoe UI, Helvetica, Arial, sans-serif"
        font-size="28" fill="#76767f">hazemhosni-portfolio.netlify.app</text>
</svg>`;
}

export const GET: APIRoute = async ({ props }) => {
  const { card } = props as { card: Card };
  const png = await sharp(Buffer.from(svg(card))).png({ compressionLevel: 9 }).toBuffer();
  return new Response(new Uint8Array(png), {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
