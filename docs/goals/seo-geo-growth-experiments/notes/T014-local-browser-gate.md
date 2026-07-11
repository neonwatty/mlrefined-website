# T014 local browser gate

Date: 2026-07-11

The previously unavailable in-app Browser recovered. Local release verification covered the learning hub, all three guides, their matching chapter pages, notebooks, and resources at 1440x1000 and 390x844.

Passing evidence:

- Every tested page had `scrollWidth === clientWidth`; no horizontal overflow was observed.
- All three guide GIFs loaded with non-zero natural dimensions after entering the rendered page.
- The desktop guide header ended at 64px and the article began at 65px; the mobile header ended at 60px and guide headings began at 198px.
- The mobile menu changed from `Menu` to expanded `Close`, rendered all seven navigation destinations, and navigated to `/learn`.
- The tracked guide-to-chapter link navigated from the gradient descent guide to `/chapters/first-order-optimization-techniques` at 2026-07-11T21:22:29Z.
- GitHub CLI 2.89.0 is authenticated as `neonwatty` with `repo` scope; the resource branch remains clean and pushed.

Release defect found:

- Next.js emitted an LCP warning because `/learning-visuals/widgets/normalized-gradient-descent.gif`, the first above-the-fold hub visual, retained the default lazy loading behavior.
- T014 prohibits product-file edits, so T016 is a bounded Worker task limited to the learning hub and guide-card component. T017 resumes release work after that fix.

Analytics status:

- Navigation behavior is proven. The new event had not appeared in PostHog taxonomy immediately after the local click, so ingestion remains unproved and must be rechecked after T016/preview rather than inferred.
