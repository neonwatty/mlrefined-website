# Acceptance Notes

Editable Limner mockup for `mlr-reviews-adoption`.

- Replace the previous image-backed scaffold with real HTML/CSS modules for masthead, adoption context rail, hero proof claim, verified university logo library, professor endorsements, reader-review source modules, and responsive mobile stacking.
- Keep the selected generated PNG only as source guidance in `targets/mlr-reviews-adoption/source/`; do not render it as a production/reference asset.
- Use verified local assets only: `public/book-cover-2nd.png`, `public/social-proof/logos/*`, and `public/social-proof/people/*`; target-local copies live under `targets/mlr-reviews-adoption/reference/assets/` so Limner can serve them.
- Use source-backed proof copy from `src/content/book-facts.ts`, `src/content/book-social-proof.ts`, and `src/content/book-resources.ts`; avoid generated or unverified quote text.
- Remaining fidelity gaps: logo grid is constrained to the nine verified local logos instead of the larger generated grid, reader-review body text is conservative source-channel copy rather than exact long public-site excerpts, and pixel polish around the right-side tabs/background equations should be refined in a later Limner pass.
