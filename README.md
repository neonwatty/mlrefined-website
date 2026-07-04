# Machine Learning Refined Website

Modern web home for [Machine Learning Refined](https://www.mlrefined.com/).

Canonical book resources live in:

- [neonwatty/machine-learning-refined](https://github.com/neonwatty/machine-learning-refined)
- [neonwatty/machine-learning-refined-notes-assets](https://github.com/neonwatty/machine-learning-refined-notes-assets)

This app turns the book, chapter resources, notebooks, figures, and adoption
signals into a mobile-friendly Next.js site with crawlable routes, analytics
readiness, and Vercel-friendly deployment.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Vitest
- Knip
- PostHog client analytics scaffold
- Browser-based Google Search Console review workflow

## Development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Checks

```bash
npm run ci
```

CI runs lint, TypeScript, Knip, unit coverage, and the production build.

## Analytics

PostHog is initialized through `src/instrumentation-client.ts` only when
`NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` is present.

Google Search Console is reviewed in the authenticated browser UI for query,
page, CTR, position, indexing, and sitemap evidence. No service-account private
key is required for the current workflow.
