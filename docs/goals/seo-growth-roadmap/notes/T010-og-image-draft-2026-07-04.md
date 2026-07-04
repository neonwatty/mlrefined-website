# T010 OG Image Draft

Date: 2026-07-04

## Change

- Added generated `opengraph-image` and `twitter-image` metadata routes.
- Updated shared SEO metadata to use the generated landscape social preview image instead of the raw vertical book cover.
- Kept JSON-LD book `image` pointed at the actual book cover.

## Visual Direction

- 1200 by 630 landscape card.
- Left side: Machine Learning Refined second-edition positioning and resource-intent copy.
- Right side: real second-edition book cover in a dark panel.
- Intent chips: PDFs, Notebooks, Exercises, Slides.
- Domain label: `mlrefined.com`.

## Evidence

- `npm run test:unit -- src/lib/seo.test.ts`: pass.
- `npm run lint`: pass.
- `npm run typecheck`: pass.
- `npm run build`: pass; build includes `/opengraph-image` and `/twitter-image`.
- `npm run ci`: pass.
- Local image fetch: `http://localhost:3025/opengraph-image` returned `image/png`, 1200 by 630, 99,626 bytes.
- Local page head includes `og:image`, `og:image:width=1200`, `og:image:height=630`, `og:image:alt`, `twitter:image`, and Twitter image dimensions.

## Production Deployment

- Vercel deployment id: `dpl_7n7TPZhwDDv6DVyqUdMmTawoc7ei`
- Production deployment URL: `https://mlrefined-website-q5s43634o-jermwatts-projects.vercel.app`
- Production alias verified: `https://www.mlrefined.com`
- Deployment target: `production`
- Deployment status: `Ready`

## Live Evidence

- `https://www.mlrefined.com/opengraph-image` returned `image/png`, 1200 by 630, 99,626 bytes.
- `https://www.mlrefined.com/twitter-image` returned `image/png`, 1200 by 630, 99,626 bytes.
- Live homepage contains `data-dpl-id="dpl_7n7TPZhwDDv6DVyqUdMmTawoc7ei"`.
- Live homepage contains:
  - `og:image`: `https://www.mlrefined.com/opengraph-image?e02c426b89edede8`
  - `og:image:width`: `1200`
  - `og:image:height`: `630`
  - `og:image:alt`: `Machine Learning Refined second edition social preview with book cover, PDFs, notebooks, exercises, and slides`
  - `twitter:image`: `https://www.mlrefined.com/twitter-image?73d24cd490d3a68d`
  - Twitter image width and height: `1200` by `630`

## Status

Shipped to production.
