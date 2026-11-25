// Reconcile project links against the GitHub API at build time, so language, topics and
// last-pushed dates cannot drift out of date the way hand-written copy does.
//
// This runs at build time only. It must never fail the build: GitHub rate-limits anonymous
// requests to 60/hour, and Netlify builds share egress IPs. On any error we fall back to the
// hand-written data and the page still renders.

export interface RepoFacts {
  language: string | null;
  pushedAt: string;
  topics: string[];
  archived: boolean;
}

const cache = new Map<string, RepoFacts | null>();

function parse(repoUrl: string): string | null {
  const m = repoUrl.match(/^https:\/\/github\.com\/([^/]+)\/([^/]+?)(?:\.git)?\/?$/);
  return m ? `${m[1]}/${m[2]}` : null;
}

async function fetchOne(repoUrl: string): Promise<RepoFacts | null> {
  if (cache.has(repoUrl)) return cache.get(repoUrl)!;

  const slug = parse(repoUrl);
  if (!slug) {
    cache.set(repoUrl, null);
    return null;
  }

  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'hazemhosni-portfolio-build',
  };
  // Optional: lifts the anonymous rate limit on CI. Never required.
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

  try {
    const res = await fetch(`https://api.github.com/repos/${slug}`, {
      headers,
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) {
      console.warn(`[github] ${slug} -> HTTP ${res.status}; using static data`);
      cache.set(repoUrl, null);
      return null;
    }
    const json: any = await res.json();
    const facts: RepoFacts = {
      language: json.language ?? null,
      pushedAt: new Date(json.pushed_at).toLocaleDateString('en-GB', {
        year: 'numeric',
        month: 'long',
      }),
      topics: Array.isArray(json.topics) ? json.topics : [],
      archived: Boolean(json.archived),
    };
    cache.set(repoUrl, facts);
    return facts;
  } catch (err) {
    console.warn(`[github] ${slug} lookup failed (${(err as Error).message}); using static data`);
    cache.set(repoUrl, null);
    return null;
  }
}

export async function getRepoFacts(
  repoUrls: string[],
): Promise<Record<string, RepoFacts | undefined>> {
  const unique = [...new Set(repoUrls)];
  const results = await Promise.all(unique.map(fetchOne));
  const out: Record<string, RepoFacts | undefined> = {};
  unique.forEach((url, i) => {
    out[url] = results[i] ?? undefined;
  });
  return out;
}
