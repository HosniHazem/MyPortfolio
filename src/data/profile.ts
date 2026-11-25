// Identity and contact details. Sourced from the CV (Software_Engineer_HazemHosni_EN.pdf).

export const site = {
  url: 'https://hazemhosni-portfolio.netlify.app',
  title: 'Hazem Hosni — Full-Stack Software Engineer',
  shortTitle: 'Hazem Hosni',
  description:
    'Full-stack software engineer with 4+ years building web, backend and native macOS '
    + 'applications — Next.js, TypeScript, C#/.NET, Swift, and LLM-assisted pipelines.',
  locale: 'en',
};

export const profile = {
  name: 'Hazem Hosni',
  role: 'Full-Stack Software Engineer',
  specialism: 'Web, Native macOS & AI-Assisted Development',
  location: 'Ariana, Tunisia',
  email: 'hosnii.hazem@gmail.com',
  summary:
    'Full-stack software engineer with over four years of experience delivering web, backend '
    + 'and native applications, often as the sole developer on a project. I work across modern '
    + 'TypeScript monorepos and legacy PHP production systems, covering PostgreSQL design and '
    + 'performance, security hardening, release engineering and production incident response.',
  availability: 'Open to contract and full-time work, remote or hybrid.',
};

export const links = [
  { label: 'GitHub', href: 'https://github.com/HosniHazem', handle: 'HosniHazem' },
  { label: 'GitHub (work)', href: 'https://github.com/HazemStoryTeller', handle: 'HazemStoryTeller' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hazem-hosni', handle: 'hazem-hosni' },
  { label: 'Behance', href: 'https://behance.net/hazemhosni', handle: 'hazemhosni' },
  { label: 'Email', href: 'mailto:hosnii.hazem@gmail.com', handle: 'hosnii.hazem@gmail.com' },
];

export const skills = [
  { group: 'Languages', items: ['TypeScript', 'JavaScript', 'C# (.NET)', 'Swift', 'PHP 8', 'Python', 'Rust', 'Go', 'Java', 'SQL'] },
  { group: 'Frontend', items: ['React', 'Next.js', 'Astro', 'Angular', 'Vue.js', 'Redux Toolkit', 'Zustand', 'GraphQL', 'Tailwind CSS', 'Material UI', 'Storybook', 'SASS', 'Figma'] },
  { group: 'Backend', items: ['.NET (C#)', 'Strapi 5', 'Node.js (Express)', 'Python (FastAPI, Flask, Django)', 'PHP (Laravel, WordPress)', 'Java (Spring Boot)', 'REST APIs', 'OpenAPI/Zod', 'Microservices'] },
  { group: 'Native & Desktop', items: ['Swift', 'SwiftUI', 'AppKit (macOS)', 'Rust', 'Tauri', 'React Native / Expo', 'Android', 'Chrome Extensions (Manifest V3)'] },
  { group: 'AI tooling', items: ['LLM extraction pipelines (Claude API)', 'MCP', 'OpenAI API', 'LLM usage & cost observability', 'Claude Code / Codex', 'Multi-agent code review'] },
  { group: 'Integrations', items: ['Meta Marketing API', 'Google Ads API', 'LinkedIn Ads API', 'Firebase Cloud Messaging (HTTP v1)', 'Brevo', 'Mailjet', 'WordPress / Formidable'] },
  { group: 'Cloud & DevOps', items: ['AWS (ECS, RDS)', 'Azure', 'Cloudflare', 'Railway', 'Vercel', 'Docker', 'GitHub Actions', 'GitLab CI/CD', 'Entra ID / OIDC', 'Kubernetes', 'Ansible'] },
  { group: 'Release engineering', items: ['macOS code signing & notarization', 'Sparkle updates', 'Packaged-app launch validation', 'Production health checks'] },
  { group: 'Databases', items: ['PostgreSQL (RLS, immutable migrations, query performance)', 'MariaDB', 'MySQL', 'MongoDB', 'Redis', 'Supabase', 'Kysely', 'Prisma', 'TypeORM'] },
  { group: 'Testing & QA', items: ['Automated regression testing', 'Vitest', 'pgTAP', 'Jest', 'Cypress', 'Playwright', 'Postman', 'API contract testing'] },
  { group: 'Security', items: ['JWT', 'OAuth2', 'MFA', 'SSO', 'RBAC / row-level security', 'SSTI/RCE remediation', 'AES-256-GCM secret storage', 'GDPR consent design', 'SonarQube', 'Burp Suite'] },
  { group: 'Observability', items: ['Logging & incident investigation', 'Grafana', 'Prometheus', 'Loki'] },
];

export const education = [
  {
    period: '2023 – 2026',
    qualification: 'Engineering Diploma, Software Engineering and Information Systems',
    institution: 'TEK-UP University',
    location: 'Tunisia',
  },
  {
    period: '2019 – 2023',
    qualification: "Bachelor's in Information System Development",
    institution: 'ISET Bizerte',
    location: 'Tunisia',
  },
];

export const languages = [
  { name: 'Arabic', level: 'Native' },
  { name: 'French', level: 'Fluent' },
  { name: 'English', level: 'Fluent' },
];

export const engagement = {
  period: '2019 – 2023',
  role: 'Vice President of B2B & B2C, and Local President',
  organisation: 'AIESEC Tunisia',
  location: 'Tunisia / Costa Rica',
  detail:
    'Supervised over 15 members and led international impact projects. Managed partnerships '
    + 'and marketing campaigns that increased organisational reach by 35%.',
};
