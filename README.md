# Machine Learning Refined Website

Modern Vercel-backed website and analytics surface for
[Machine Learning Refined](https://www.mlrefined.com/).

The book resources remain canonical in
[neonwatty/machine-learning-refined](https://github.com/neonwatty/machine-learning-refined).
Static notebook/book figure assets are maintained separately in
[neonwatty/machine-learning-refined-notes-assets](https://github.com/neonwatty/machine-learning-refined-notes-assets).
This app exposes those resources through crawlable, mobile-friendly routes and
adds the measurement layer needed to improve technical and content SEO.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- PostHog client analytics scaffold
- Browser-based Google Search Console review workflow
- Vercel-ready metadata, sitemap, and robots file conventions

## Local Development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality Checks

Run the same local gate used by CI:

```bash
npm run ci
```

The gate runs ESLint, TypeScript, Knip, unit tests, and the Next.js build. ESLint
also enforces a 300-line limit for source files so page and content modules stay
small enough to review.

## Initial Routes

- `/` public homepage scaffold
- `/chapters` chapter index scaffold
- `/resources` resource index scaffold
- `/dashboard` owner analytics dashboard scaffold
- `/sitemap.xml` generated sitemap
- `/robots.txt` generated robots file

## Analytics Plan

PostHog is initialized through `src/instrumentation-client.ts` only when
`NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` is present. The first tracked action is
`github_resource_clicked`, emitted by `ResourceLink`.

Google Search Console is reviewed in the authenticated browser UI for query,
page, CTR, position, indexing, and sitemap evidence. No service-account private
key is required for the current workflow.

## Next Milestones

1. Import the full chapter/notebook/exercise inventory from the resource repo.
2. Add dynamic chapter pages under `/chapters/[slug]`.
3. Protect `/dashboard` before connecting private analytics data.
4. Use Search Console performance and indexing reports to prioritize the next
   SEO content/route slice.
5. Deploy to Vercel, then transfer `mlrefined.com` after preview verification.
