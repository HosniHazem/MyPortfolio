// Professional experience.
//
// DETAIL POLICY: this is held to exactly the level of detail already in the circulated CV —
// outcomes and stack, no internal code, no screenshots, no client data. If a line is not in
// the CV, it does not belong here.

export interface Role {
  slug: string;
  company: string;
  title: string;
  period: string;
  start: string;          // ISO, for sorting and JSON-LD
  end: string | null;     // null = current
  location: string;
  summary: string;
  highlights: string[];
  stack: string[];
  link?: { label: string; href: string };
}

export const experience: Role[] = [
  {
    slug: 'storyteller',
    company: 'Storyteller',
    title: 'Software Engineer (B2B Contractor)',
    period: '02/2026 – Present',
    start: '2026-02-01',
    end: null,
    location: 'Remote',
    summary:
      'Feature work across a TypeScript/.NET product suite and a native macOS application, '
      + 'spanning analytics dashboards, LLM usage observability, screen recording and release '
      + 'validation.',
    highlights: [
      'Developed React/Next.js/TypeScript features and C#/.NET APIs for the Storypilot product — analytics dashboards, campaign management, report sharing and role-based access.',
      'Improved X-Pulse group loading by splitting header, analytics, posts and reports into independently loaded paths, backed by regression tests, browser validation and API contract updates.',
      'Implemented a tenant-scoped API and MCP tool aggregating LLM usage per model configuration — tokens, costs, failure rates, primary and failover attempts — with updated OpenAPI/Zod schemas and MCP documentation.',
      'Built a Node.js research CLI over 27 configured sources with concurrent fetching, ranking, deduplication and optional drafting.',
      'Developed native Swift recording and screenshot features for the StoryMeet macOS app: screen, window and area capture, microphone and system audio, webcam overlays, pause/resume, and screenshot annotation.',
      'Implemented resilient StoryMeet uploads — cancellation, retry, checkpoints, processing recovery — and local-media transcription with durable jobs, idempotency and timestamped segments.',
      'Implemented organisation-hierarchy imports, external-account reconciliation safeguards and scoped Skill authorisation for the StoryOS platform.',
      'Optimised PostgreSQL delivery-metadata parsing, cutting projection latency by 59.3% in a local production-sized benchmark (7.58 ms → 3.09 ms).',
      'Hardened macOS release validation: packaged-app launch checks, missing-resource tests, signing and notarization checks, and Sparkle update validation.',
    ],
    stack: ['TypeScript', 'React', 'Next.js', 'C#/.NET', 'Swift', 'SwiftUI', 'AppKit', 'Rust', 'Tauri', 'Node.js', 'PostgreSQL', 'Azure', 'Cloudflare', 'MCP', 'OpenAI API', 'GitHub Actions'],
    link: { label: 'Work GitHub', href: 'https://github.com/HazemStoryTeller' },
  },
  {
    slug: 'overlord-media-itfacto',
    company: 'Overlord Media / ITfacto group',
    title: 'Full-Stack Developer (Freelance Contract)',
    period: '04/2026 – Present',
    start: '2026-04-01',
    end: null,
    location: 'Remote',
    summary:
      'Sole developer on an internal paid-ads cockpit, plus LLM document extraction, mobile '
      + 'push infrastructure and production operations across the group’s media brands.',
    highlights: [
      'Sole developer of Tour de Contrôle, the group’s internal paid-ads cockpit for Meta, Google Ads and LinkedIn: turned a 130-requirement spec into a 156 dev-day retroplanning, negotiated a two-week v0 scope, and delivered it with Next.js 16, TypeScript, PostgreSQL 17 (row-level security, immutable migrations), Kysely and Entra ID OIDC SSO.',
      'Built connectors for the Meta Marketing, Google Ads and LinkedIn Ads APIs behind a platform-agnostic contract, with a sync engine (nightly and hourly crons, change diffing, run journaling) and campaign actions guarded by confirmations, rate caps, verify-by-reread and an undo journal. Metrics library held above 95% test coverage with Vitest and pgTAP.',
      'For the Annonces Légales platform (Strapi 5 + Next.js monorepo), built an LLM extraction pipeline for company statutes with confidence scoring, validated on real legal documents, and an in-house templating and PDF engine using versioned templates, Nunjucks and Gotenberg.',
      'Found and fixed an SSTI → RCE vulnerability during adversarial review.',
      'Built the Firebase Cloud Messaging backend for the Le Revenu iOS and Android apps in Strapi: an SDK-less FCM HTTP v1 client, token lifecycle handling, audience deduplication and a purge cron, with 177 tests and an API contract for the Flutter team.',
      'Engineered gated B2B lead-generation campaigns for the group’s media brands — landing pages, lead capture, GDPR consent and asset delivery — on WordPress and Astro + Strapi.',
      'Handled production operations on legacy PHP 8 systems for Le Monde Informatique: recovered a disk-full back-office outage and traced it to log rotation, and fixed SEO redirect-loop and canonical bugs. After a DNS cutover to a stale snapshot, restored four campaign landing pages and their forms on the new server.',
      'Audited the internal campaign tool (Node/Express, React 19, AWS ECS) and produced the gap analysis behind the team’s build-versus-extend decision.',
    ],
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Kysely', 'Strapi 5', 'PHP 8', 'WordPress', 'Astro', 'Docker', 'Railway', 'AWS (ECS, RDS)', 'Entra ID', 'Firebase', 'Brevo', 'Claude API', 'Vitest', 'pgTAP'],
  },
  {
    slug: 'kicom-tunisia',
    company: 'Kicom Tunisia',
    title: 'Full-Stack Developer',
    period: '06/2024 – 01/2026',
    start: '2024-06-01',
    end: '2026-01-31',
    location: 'Tunis, Tunisia',
    summary:
      'Web interfaces, secure Python APIs and single sign-on across an ecosystem of internal '
      + 'tools.',
    highlights: [
      'Developed responsive web interfaces from Figma mockups using React and Material UI.',
      'Implemented secure Flask APIs with multi-factor authentication and role-based access control.',
      'Managed real-time communication over WebSockets and integrated with Odoo, Nextcloud and Home Assistant.',
      'Integrated a single sign-on system connecting internal apps across the Oki ecosystem, providing unified authentication.',
      'Developed a Chrome extension (popup and sidebar) for the Oki project.',
      'Set up CI/CD pipelines with GitLab and handled Docker containerisation.',
      'Worked with containerised services and microservice architectures, ensuring secure communication between backend components.',
    ],
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Python', 'Flask', 'PostgreSQL', 'Docker', 'GitLab', 'WebSockets', 'Go', 'Odoo', 'Manifest V3'],
  },
  {
    slug: 'smart-skills',
    company: 'Smart Skills',
    title: 'Full-Stack Developer',
    period: '08/2022 – 06/2024',
    start: '2022-08-01',
    end: '2024-06-30',
    location: 'Ariana, Tunisia',
    summary:
      'Full-stack web and mobile delivery on the MERN and Laravel stacks, including security '
      + 'tooling and deployment infrastructure.',
    highlights: [
      'Developed full-stack web applications using React, Laravel, Node.js/Express and MongoDB.',
      'Designed reusable REST API modules, authentication flows (JWT/OAuth) and role-based access control for internal platforms.',
      'Built and deployed a React Native mobile prototype enabling automated security audit planning.',
      'Created an automated vulnerability report generator integrating Nessus and OWASP ZAP, reducing manual reporting time by over 60%.',
      'Managed continuous deployment pipelines and maintained virtualisation infrastructure.',
    ],
    stack: ['React', 'Next.js', 'React Native', 'Node.js', 'Express', 'MongoDB', 'Python', 'Laravel', 'Odoo', 'VMware', 'SonarQube', 'Material UI'],
  },
];
