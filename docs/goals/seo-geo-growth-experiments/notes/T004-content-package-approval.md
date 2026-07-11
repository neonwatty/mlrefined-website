# T004 Judge decision: approve three-page learning package

Date: 2026-07-11

Decision: **approved**, with the contracts and implementation boundary below.

## Why this is a coherent experiment

The package tests one falsifiable discovery hypothesis across three well-supported topics: an answer-shaped, visual, executable “from scratch” guide can earn non-branded impressions and move readers into the canonical book resources more effectively than a chapter index or notebook gallery alone. T003 supplies fresh autocomplete evidence, current-result confirmation, exact repository sources, exercises, and a local animation for all three topics. The existing chapter pages remain book/resource indexes; `/notebooks` remains a chooser; `/learn/*` will teach and implement one concept.

## Shared page contract

Every page must visibly include all of the following:

1. A direct answer beneath the H1 that defines the method and states the result the reader will build.
2. A short “how it works” explanation with the core equation or objective and terms explained in prose.
3. The canonical animated visual, its intrinsic dimensions, meaningful alt text, and a caption that describes what changes in the animation.
4. A compact, deterministic, copyable NumPy example that implements the core method without scikit-learn or another model implementation.
5. A short walkthrough connecting code lines to the algorithm.
6. A “what can go wrong” section with at least three topic-specific cautions.
7. A source/next-step section with ordinary internal links to the matching chapter and `/notebooks`, plus tracked external links to the exact source notebook, exercise notebook, chapter PDF index, and canonical GitHub repository.
8. Visible attribution to *Machine Learning Refined*, the chapter number/title, and the canonical source notebook path.
9. Static metadata, self-canonical URL, meaningful title/description, crawlable initial HTML, sitemap entry with its real launch `lastModified`, and JSON-LD whose claims exactly match visible content.
10. A stable `learning_resource_clicked` event with `guide`, `location`, `resource`, and `href` for every external resource action.

The code examples must be tested as executable functions or against deterministic fixtures in unit tests. Do not rely on copying display text and merely checking substrings.

## Per-page contracts

### `/learn/gradient-descent-from-scratch`

- H1: “Gradient Descent from Scratch in Python”.
- Direct answer: gradient descent repeatedly subtracts a step-size-scaled gradient from the current parameters to reduce a differentiable objective.
- Visible equation: `w_(k+1) = w_k - alpha * grad g(w_k)` with `w`, `alpha`, and `grad g` explained.
- Example: fit a one-parameter convex quadratic or similarly auditable objective with a deterministic initial value; expose objective, gradient, update loop, and returned history.
- Required cautions: step size too large, step size too small, and local/flat/poorly conditioned landscapes; distinguish standard from normalized gradient descent because the reused GIF is normalized.
- Visual: `/learning-visuals/widgets/normalized-gradient-descent.gif`, 330 x 330; caption explicitly says the animation shows normalized steps and that the code demonstrates the standard update.
- Sources: Chapter 3, `3_5_Descent.ipynb`, `A_3_Normalized.ipynb`, Chapter 3 exercises, and PDF index.

### `/learn/logistic-regression-from-scratch`

- H1: “Logistic Regression from Scratch in Python”.
- Direct answer: binary logistic regression maps a linear score through the sigmoid and fits weights by minimizing binary cross-entropy.
- Visible equations: sigmoid and mean binary cross-entropy; explain score, probability, label, and epsilon/clipping or a stable equivalent.
- Example: deterministic small binary dataset; vectorized NumPy `fit` and probability/prediction functions; fixed iteration count and learning rate; no library model.
- Required cautions: feature scaling/optimization sensitivity, threshold choice is not training, and numerical stability for logs/sigmoid.
- Visual: `/learning-visuals/widgets/logistic-regression.gif`, 467 x 206; caption describes the changing linear decision boundary and class probabilities without claiming calibrated performance.
- Sources: Chapter 6, `6_2_Cross_entropy.ipynb`, Chapter 6 exercises, and PDF index.

### `/learn/k-means-clustering-from-scratch`

- H1: “K-Means Clustering from Scratch in Python”.
- Direct answer: K-means alternates assigning each sample to its nearest centroid and replacing every centroid with its assigned mean to reduce within-cluster squared distance.
- Visible objective or precise prose-equivalent plus the initialize / assign / update / stop sequence.
- Example: deterministic 2D points and explicit initial centroids or a seeded generator; vectorized distances; assignment and centroid update functions; convergence tolerance; a truthful empty-cluster policy.
- Required cautions: initialization/local minima, choosing `k`, feature scale, and empty clusters.
- Visual: `/learning-visuals/widgets/kmeans.gif`, 251 x 238; caption explains alternating assignments and centroid movement.
- Sources: Chapter 8, `8_5_Kmeans.ipynb`, Chapter 8 exercises, and PDF index.

## Internal distribution boundary

- Add `/learn` as a crawlable hub and a visible site-wide “Learn” navigation item. Seven compact desktop navigation items must be verified at the real breakpoints before acceptance.
- The hub must introduce the experiment set and link to all three guides with descriptive anchors.
- Matching Chapter 3, 6, and 8 detail pages must link to their guide.
- Matching notebook cards must link to their guide without replacing notebook/Colab actions.
- The resources page must link to `/learn` as the route for readers who want explanations before raw source material.
- No keyword-variant pages, tag archives, or generated synonyms are authorized.

## Structured data contract

Use one parseable `BreadcrumbList` and one `LearningResource` per guide. The `LearningResource` may include only visible/backed fields: name, URL, description, image, `learningResourceType`, `educationalLevel` if visible, `about`, `isPartOf` the book, authors from the official site configuration, and `hasPart` resource URLs that are visible on the page. Do not add FAQ, HowTo, rating, course, estimated time, proficiency claims, or outcomes that are not visibly supported.

## Success and stop criteria

Launch baseline is zero observed non-branded Search Console topic queries, alongside the T003 site baseline. At the delayed checkpoint compare each page’s exact/from-scratch/Python/NumPy/notebook query family, indexing/canonical state, impressions, clicks, CTR, position, and `learning_resource_clicked` conversion. The first checkpoint may report “insufficient data”; do not manufacture lift.

Stop or revise a page if it cannot pass any of these gates:

- visible content/source audit;
- executable deterministic example test;
- unique title/description/canonical and aligned JSON-LD;
- ordinary internal anchors from the hub plus its chapter and notebook surfaces;
- no broken links/images, console errors, horizontal overflow, or header collision on desktop and 390px mobile;
- no intent duplication with the existing chapter or notebook route.

## T005 Worker package

Objective: build and verify the complete three-page source-backed learning experiment package, the `/learn` hub, internal distribution, truthful metadata/JSON-LD, executable example tests, sitemap coverage, and outbound resource analytics.

Allowed files:

- `src/content/learning-guides.ts`
- `src/content/learning-guides.test.ts`
- `src/content/book.ts`
- `src/components/learn/**`
- `src/app/learn/page.tsx`
- `src/app/learn/[slug]/page.tsx`
- `src/app/chapters/[slug]/page.tsx`
- `src/components/notebooks/notebook-workbench.tsx`
- `src/app/resources/page.tsx`
- `src/lib/site.ts`
- `src/lib/seo.ts`
- `src/lib/seo.test.ts`
- `src/app/sitemap.ts`
- `src/app/sitemap.test.ts`
- `src/**/*.test.tsx`
- `docs/goals/seo-geo-growth-experiments/notes/**`
- `docs/goals/seo-geo-growth-experiments/state.yaml`

Required verification:

- Read the repository’s local Next.js 16.2.9 dynamic-route, Link, metadata, sitemap, and Image documentation before edits.
- Focused unit tests execute the three example implementations against deterministic fixtures and assert source/route uniqueness.
- Metadata/JSON-LD tests prove unique self-canonicals, visible-content alignment, parseability, book/source attribution, and no disallowed schema claims.
- Sitemap tests prove `/learn` plus all three guide URLs and image URLs appear once with truthful launch `lastModified`.
- Rendered HTML/DOM proof that all four new routes are crawlable and that every guide is linked from `/learn`, its matching chapter, and its matching notebook card.
- Analytics debug proof for at least one internal guide navigation and one external resource action, including `guide`, `location`, `resource`, and `href`.
- `npm run lint`
- `npm run typecheck`
- `npm run knip:production`
- `npm run test:unit`
- `npm run build`
- Desktop and 390px mobile browser inspection of `/learn`, all three guides, `/chapters/first-order-optimization-techniques`, `/chapters/two-class-classification`, `/chapters/linear-unsupervised-learning`, `/notebooks`, and `/resources`.
- Console, broken-link, image, header-collision, and horizontal-overflow checks on all changed routes.
- Runtime smoke check that every sitemap URL returns 200.
- `git diff --check`.

Stop if:

- Any educational assertion or displayed implementation cannot be reconciled with the named canonical notebook/chapter source.
- A needed product file falls outside the allowed list.
- Adding “Learn” causes an unresolved navigation collision at a supported breakpoint.
- A page would need a misleading solution/manual promise, unsupported rich-result markup, or content duplicated from another route.
- A deterministic code fixture fails twice for the same reason.
- Full verification fails twice with the same failure outside the allowed scope.

## Top failure modes the Worker must rule out

1. Thin/orphaned content: prove visible substantive sections and ordinary incoming anchors from three relevant surfaces.
2. Educational/code error: execute the examples and audit equations/cautions against source notebooks.
3. SEO/UX regression: prove metadata/schema/sitemap truth plus desktop/mobile header, media, console, and route health.
