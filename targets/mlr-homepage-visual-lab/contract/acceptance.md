# Acceptance Notes

Second-pass Limner mockup for `mlr-homepage-visual-lab`.

- Replaces the screenshot-backed scaffold with editable HTML/CSS for the top navigation, Visual Learning Lab hero, book cover identity, learning panels, resource rail, university proof band, and accolade summaries.
- Uses verified local assets copied into the target reference folder: `book-cover-2nd.png`, seven learning widget GIFs, nine social-proof logos, and four social-proof portraits.
- Keeps the generated homepage PNG only as the source visual target in `targets/mlr-homepage-visual-lab/source/`; it is no longer rendered as a production page asset.
- Uses existing site/repo resource categories and verified social-proof summary language from `src/content/book-resources.ts`, `src/content/book-learning.ts`, and `src/content/book-social-proof.ts`.
- Remaining fidelity gaps: the editable visual panels use real GIF assets rather than exact generated plot stills; the static reference approximates the generated browser chrome and panel geometry but does not reproduce every micro-label or chart axis; final implementation should wire real links, analytics, accessibility states, and responsive behavior in the Next.js app after approval.
