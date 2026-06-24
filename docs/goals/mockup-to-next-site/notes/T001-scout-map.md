# T001 Scout Map

## Current App Route And Component Map

- `src/app/layout.tsx` defines root metadata, fonts, global CSS, and the required App Router root layout.
- `src/app/page.tsx` currently renders a partial mockup-inspired home using `HomeHero`, `PedagogyStrip`, `VisualFunnel`, and `ProofAndResources`.
- `src/app/chapters/page.tsx` is a scaffolded chapter hub with a small subset of chapters from `src/content/book-chapters.ts`.
- `src/app/resources/page.tsx` is a scaffolded resource-link page using `ResourceLink` and `resourceGroups`.
- `src/app/dashboard/page.tsx` is an owner-facing analytics scaffold, not part of the approved public mockup funnel.
- `src/app/sitemap.ts`, `src/app/robots.ts`, and `src/app/sitemap.test.ts` already enforce public route coverage against `src/lib/site.ts`.
- `src/components/analytics/resource-link.tsx` is a small client component for PostHog event capture on external resource links.
- `src/content/*` provides the current structured content layer, but it is narrower than the unified mockup data model.

## Approved Mockup Inventory

Authoritative mockup files:

- `docs/landing-reimagining/unified-html-mockup/index.html`
- `docs/landing-reimagining/unified-html-mockup/styles.css`
- `docs/landing-reimagining/unified-html-mockup/app.js`
- `docs/landing-reimagining/unified-html-mockup/README.md`

Mockup views:

- Home
- Notebooks
- Chapters
- Instructors
- Reviews

Mockup data and interaction inventory:

- 8 animated notebook widgets with GitHub and Colab links.
- 24 curated static visuals, including strong Chapter 11 feature-learning figures and the Chapter 7 multiclass histogram.
- 14 spotlight figure titles used by the home carousel/funnel.
- 13 numbered chapter rows plus Appendix C in the chapter/resource model.
- 4 instructor roadmaps: Essentials, Full treatment, Optimization focus, Deep learning intro.
- 9 institution logos, 4 endorsement cards, and 3 short Amazon/Goodreads review excerpt cards.
- Stable home spotlight shell with preloading/crossfade logic, pause/resume, thumbnail selection, image popover, and resource routing.
- Chapters view includes figure atlas, chapter package hub, chapter/resource filtering, and chapter-to-notebook/instructor cross-links.
- Notebooks view includes a curated featured workbench, concept steps, source notebook links, and Colab links.
- Instructors view includes clickable roadmap nodes and selected-path support links.
- Reviews view intentionally avoids stats/filter clutter and presents source-backed proof in a simple sequence.

## Asset Inventory

Production `public/` currently has 30 local asset files relevant to this work:

- `public/book-cover-2nd.png`
- 4 static book figures in `public/learning-visuals/book-figures/`
- 8 widget GIFs in `public/learning-visuals/widgets/`
- 4 roadmap PNGs in `public/learning-visuals/roadmaps/`
- 9 institution logos in `public/social-proof/logos/`
- 4 person portraits in `public/social-proof/people/`

Mockup-only curated static figures live at:

- `docs/landing-reimagining/unified-html-mockup/assets/book-figures/`

Key production gap:

- Production has only 4 of the 24 curated mockup static figures. The missing production set includes important Chapter 11 figures: `Figure_11_17.png`, `Figure_11_32.png`, `Figure_11_35.png`, `Figure_11_38.png`, `Figure_11_48.png`, `Figure_11_50.png`, `Figure_11_51.png`, and other chapter/appendix static figures.

External source repo status:

- `neonwatty/machine-learning-refined` is reachable on GitHub with default branch `main`.
- `neonwatty/machine-learning-refined-notes-assets` is reachable on GitHub with default branch `main`.
- No local checkout of either source repo was found in a shallow Desktop directory scan; a Worker should intentionally fetch/copy/source assets rather than assume local repo paths.

## Next.js Docs And Conventions Read

Read from `node_modules/next/dist/docs/`:

- `01-app/index.md`
- `01-app/01-getting-started/02-project-structure.md`
- `01-app/01-getting-started/03-layouts-and-pages.md`
- `01-app/01-getting-started/04-linking-and-navigating.md`
- `01-app/01-getting-started/05-server-and-client-components.md`
- `01-app/01-getting-started/12-images.md`
- `01-app/01-getting-started/14-metadata-and-og-images.md`
- `03-architecture/accessibility.md`

Implementation implications:

- Keep App Router pages/layouts under `src/app`.
- Use Server Components by default and isolate carousel/popover/filter behavior into focused Client Components.
- Use `next/link` for internal navigation.
- Use `next/image` or explicit dimensions/aspect-ratio constraints for visual stability.
- Static assets in `public/` should be referenced from root-relative URLs.
- Route metadata should be exported from Server Components or layouts/pages.
- Each page should have a unique descriptive title because route announcements use `document.title`, then `h1`, then pathname.
- Accessibility linting and image alt text are built into the repo's Next lint stack and should be treated as first-class verification.

## Verification Commands

Repo checks:

- `npm run lint`
- `npm run typecheck`
- `npm run knip:production`
- `npm run test:unit`
- `npm run build`
- `npm run ci`

GoalBuddy checks:

- `node /Users/neonwatty/.codex/plugins/cache/goalbuddy/goalbuddy/0.3.9/skills/goalbuddy/scripts/check-goal-state.mjs docs/goals/mockup-to-next-site/state.yaml`

UX/media checks needed after Worker implementation:

- Start `npm run dev` on an available port.
- Browser-check `/`, `/chapters`, `/notebooks`, `/instructors`, and `/reviews` at desktop and mobile widths.
- Check console/page errors.
- Programmatically check visible images for `naturalWidth > 0`.
- Check carousel container dimensions do not jump across slide changes.
- Check keyboard/touch behavior for carousel controls and image popover.
- Check sitemap includes implemented public routes and no unimplemented routes.

## Top Risks

1. The production content layer is too narrow: `src/content/book-chapters.ts` has only 6 chapter entries, while the mockup models Chapters 1-14 plus Appendix C.
2. The production asset layer lacks most curated static figures, especially the strongest Chapter 11 visuals requested for the landing funnel.
3. The current public nav and routes still expose `Resources` and `Analytics`, while the approved mockup expects `Notebooks`, `Chapters`, `Instructors`, and `Reviews`.
4. The home implementation uses static cards/rails rather than the approved stable rotating spotlight behavior with popover and pause/resume controls.
5. Reviews and instructor content include source-backed material in the mockup, but production types/routes do not yet model actual review excerpts, course roadmaps, source paths, or chapter packages.
6. External GitHub/Colab/source links need source-backed inventory and should not be invented or silently copied from stale assumptions.

## Recommended First Worker Slice

The first safe implementation slice should be the shared content and asset foundation, not a single visual page.

Recommended Worker objective:

> Build the production content/asset foundation from the approved mockup and current source-backed assets: expand typed content models for routes, chapters, widgets, static figures, instructor roadmaps, reviews/social proof, and public navigation; copy the curated mockup static figures into `public/learning-visuals/book-figures/` or establish an equivalent source-backed public asset path; update tests so the data layer proves route coverage, local asset references, unique chapter slugs, and source-backed external links.

Why first:

- It unlocks the landing carousel, chapters, notebooks, instructors, and reviews without duplicating hard-coded data in each page.
- It closes the largest gap between mockup and production: missing typed data and missing public static figures.
- It is reversible and testable before UI polish begins.
- It lets later Worker slices build real pages from structured data instead of copying static mockup DOM.

Suggested allowed files for Judge to consider:

- `src/lib/site.ts`
- `src/content/**`
- `src/content/*.test.ts`
- `public/learning-visuals/book-figures/**`
- possibly `docs/landing-reimagining/unified-html-mockup/assets/book-figures/**` as read-only source assets

Suggested verification:

- `npm run lint`
- `npm run typecheck`
- `npm run test:unit`
- a narrow asset-reference test that ensures every local image path in the structured content exists under `public/`
- `git diff --check`
