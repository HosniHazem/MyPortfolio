// Personal projects.
//
// Every `demo` and `repo` URL here was checked and returned 200 on 2026-11-24.
// Do not add a link without testing it — a dead link is worse than no link.
//
// The repo list on the site is reconciled against the GitHub API at build time
// (see src/lib/github.ts), so stars, languages and last-pushed dates cannot go stale.

export interface Project {
  slug: string;
  name: string;
  year: number;
  tagline: string;
  description: string;
  stack: string[];
  repo?: string;          // GitHub URL, omitted when the repo is private
  demo?: string;          // live deployment, omitted when there is none
  npm?: string;
  featured: boolean;
  note?: string;
}

export const projects: Project[] = [
  {
    slug: 'medflow',
    name: 'MedFlow',
    year: 2025,
    tagline: 'Multi-tenant clinic management SaaS',
    description:
      'A medical clinic management platform built around tenant isolation: authentication, '
      + 'patient records, appointments, consultations and Stripe billing. Containerised with '
      + 'Docker and deployed through a GitHub Actions pipeline.',
    stack: ['Next.js 14', 'TypeScript', 'Prisma', 'PostgreSQL', 'Docker', 'GitHub Actions', 'Stripe', 'Vercel'],
    repo: 'https://github.com/HosniHazem/medflow',
    demo: 'https://clinic-sass2.vercel.app',
    featured: true,
  },
  {
    slug: 'houmem-moto-pro',
    name: 'Houmem Moto Pro',
    year: 2026,
    tagline: 'Bilingual offline-first e-commerce catalogue',
    description:
      'A French/Arabic e-commerce catalogue and admin panel for a Tunisian motorcycle shop, '
      + 'with full right-to-left support. Offline-first sync to Supabase over plain REST, '
      + 'Supabase Auth with row-level security and Storage, and WhatsApp ordering. The entire '
      + 'backend was provisioned through the CLI and Management API rather than the dashboard.',
    stack: ['Vanilla JS', 'Supabase', 'Row-level security', 'Vercel'],
    demo: 'https://houmem-moto-pro.vercel.app',
    featured: true,
  },
  {
    slug: 'cv-analyser',
    name: 'CV Analyser',
    year: 2025,
    tagline: 'AI résumé parsing and feedback',
    description:
      'Upload a CV as a PDF and get structured, ATS-oriented feedback: résumé parsing, skill '
      + 'extraction and automated feedback generation, with the AI work handled through Puter.js.',
    stack: ['React Router v7', 'TypeScript', 'Puter.js', 'PDF parsing'],
    repo: 'https://github.com/HosniHazem/Puter-CV-Analyser',
    demo: 'https://puter.com/app/cv-analayser',
    featured: true,
  },
  {
    slug: 'analytics-sdk',
    name: 'Analytics SDK',
    year: 2025,
    tagline: 'Published TypeScript analytics client',
    description:
      'A lightweight analytics SDK with automatic event batching, local-storage persistence '
      + 'and retry logic. Published to npm with a maintained changelog.',
    stack: ['TypeScript', 'npm', 'Event batching'],
    repo: 'https://github.com/HosniHazem/AnalyticsSDK',
    npm: 'https://www.npmjs.com/package/@haz3m/analytics-sdk',
    featured: true,
  },
  {
    slug: 'cicd-k8s',
    name: 'CI/CD on Kubernetes',
    year: 2025,
    tagline: 'Containerised service through a full deployment pipeline',
    description:
      'A reference project taking a Dockerised Express service through GitHub Actions to a '
      + 'Kubernetes deployment — the pipeline, manifests and rollout, rather than the app.',
    stack: ['Docker', 'Kubernetes', 'GitHub Actions', 'Express'],
    repo: 'https://github.com/HosniHazem/CICD-K8s-Project',
    featured: true,
  },
  {
    slug: 'qr-scanner-extension',
    name: 'QR Scanner Extension',
    year: 2025,
    tagline: 'Chrome Manifest V3 extension',
    description:
      'A browser extension that scans QR codes from the camera or an image file, built on '
      + 'Manifest V3 with its service-worker model and permission constraints.',
    stack: ['Chrome Manifest V3', 'React', 'Vite', 'ZXing'],
    repo: 'https://github.com/HosniHazem/qr-scanner-extension',
    featured: true,
  },
  {
    slug: 'bikerzone',
    name: 'BikerZone',
    year: 2025,
    tagline: 'Motorcycle community platform',
    description:
      'A community platform for motorcyclists spanning mobile and web: tutorial videos, a '
      + 'social feed and real-time traffic alerts.',
    stack: ['TypeScript', 'React', 'Mobile'],
    repo: 'https://github.com/HosniHazem/BikerZone',
    featured: false,
  },
  {
    slug: 'portfolio-3d',
    name: 'Interactive 3D Portfolio',
    year: 2023,
    tagline: 'WebGL scenes and animation',
    description:
      'An interactive portfolio rendered in WebGL, with 3D scenes and animation driven by '
      + 'React Three Fiber.',
    stack: ['Three.js', 'React Three Fiber', 'WebGL', 'Tailwind CSS'],
    repo: 'https://github.com/HosniHazem/Portfolio3D',
    featured: false,
  },
  {
    slug: 'job-finder',
    name: 'Job Finder',
    year: 2022,
    tagline: 'Job search mobile app',
    description:
      'A job search application for mobile with dynamic filtering and a third-party jobs API, '
      + 'built with React Native and Expo Router.',
    stack: ['React Native', 'Expo', 'Tailwind CSS'],
    repo: 'https://github.com/HosniHazem/Jobs_Project',
    featured: false,
  },
  {
    slug: 'security-audit-report-generator',
    name: 'Security Audit Report Generator',
    year: 2024,
    tagline: 'Automated vulnerability reporting',
    description:
      'Generates vulnerability reports from security tooling output, integrating Nessus and '
      + 'OWASP ZAP. Built at Smart Skills, it cut manual reporting time by over 60%.',
    stack: ['React', 'Laravel', 'PostgreSQL', 'Nessus', 'OWASP ZAP'],
    featured: false,
    note: 'Source is private — the repository contains third-party audit documents.',
  },
  {
    slug: 'media-catalog-prototypes',
    name: 'Media Catalog Prototypes',
    year: 2026,
    tagline: 'Android and React Native media clients',
    description:
      'Android and React Native/Expo media-catalogue prototypes with API-backed screens, '
      + 'playback, WebView integration and Android TV navigation.',
    stack: ['Android', 'React Native', 'Expo', 'Android TV'],
    featured: false,
  },
];

export const featured = projects.filter((p) => p.featured);
export const byYear = [...projects].sort((a, b) => b.year - a.year || a.name.localeCompare(b.name));
