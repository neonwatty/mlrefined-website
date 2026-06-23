# Implementation Readiness

## Approved Limner Targets

- `mlr-homepage-visual-lab`: `.limner/runs/2026-06-21T140032642Z-apdxm9/reports/comparison.md`
- `mlr-visual-gallery`: `.limner/runs/2026-06-21T140034011Z-m5hroz/reports/comparison.md`
- `mlr-resource-discovery`: `.limner/runs/2026-06-21T140035340Z-a117ge/reports/comparison.md`
- `mlr-instructor-path`: `.limner/runs/2026-06-21T140036607Z-0ypst8/reports/comparison.md`
- `mlr-reviews-adoption`: `.limner/runs/2026-06-21T140037912Z-zl9ojc/reports/comparison.md`

These are first-pass Limner references. They preserve selected generated images in editable target shells and are ready for the next Limner iteration, which should replace image-backed regions with DOM modules before Next.js implementation.

## Current App Checks

- `npm run lint`: PASS, `eslint` completed with no reported errors.
- `npm run typecheck`: PASS, `tsc --noEmit` completed.
- `npm run knip:production`: PASS, `knip --production` completed.
- `npm run test:unit`: PASS, Vitest reported `2 passed (2)` test files and `4 passed (4)` tests.
- `npm run build`: PASS, Next.js `16.2.9` compiled successfully and prerendered `/`, `/_not-found`, `/chapters`, `/dashboard`, `/resources`, `/robots.txt`, and `/sitemap.xml`.

## Dev Server Smoke

- `npm run dev`: PASS, dev server started at `http://localhost:3000`.
- `curl http://localhost:3000/`: PASS, `200`, `41003` bytes.
- `curl http://localhost:3000/chapters`: PASS, `200`, `21092` bytes.
- `curl http://localhost:3000/resources`: PASS, `200`, `20267` bytes.
- `curl http://localhost:3000/sitemap.xml`: PASS, `200`, `742` bytes.
- `curl http://localhost:3000/robots.txt`: PASS, `200`, `137` bytes.

## Next Plan Requirement

Before editing Next.js app code, read the relevant Next.js 16 guide under `node_modules/next/dist/docs/`, then write a separate implementation plan for routes, components, content modules, analytics, SEO, accessibility, responsive behavior, and verification.

The implementation plan must account for these campaign caveats:

- Generated image text, logos, portraits, institution lists, publisher references, and review snippets are not production truth.
- Production content must use `public/book-cover-2nd.png`, `public/learning-visuals/widgets/*`, `public/learning-visuals/roadmaps/*`, `public/social-proof/logos/*`, `public/social-proof/people/*`, the canonical resource repository, and current-site proof/accolade content only where verified.
- Instructor sample-copy, verified-instructor, sign-in, and publisher flows need explicit product decisions before implementation.
- The current Limner references are image-backed; convert them into real DOM components before treating them as shippable UI.
