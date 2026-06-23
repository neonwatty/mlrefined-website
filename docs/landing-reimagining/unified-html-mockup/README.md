# Unified HTML Mockup

Date: 2026-06-21

Purpose: Single interactive HTML/CSS/JS prototype that wires the polished Limner reference page families into one browsable page-system mockup before production Next.js implementation.

Open:

```text
docs/landing-reimagining/unified-html-mockup/index.html
```

## Included Views

- Home / Visual Lab
- Notebooks
- Chapter & Resource Discovery
- Instructor Path
- Reviews & Adoption

## Interactions

- Hash-routed navigation across the visible five-view mockup.
- Home now uses a cleaner book-first hero with a one-sentence subtitle, one dominant chapter-resource CTA, quieter secondary paths, and the book cover. University proof is kept lower on the page instead of in the hero.
- Home pedagogy section is a dark editorial progression from intuition to visualization to derivation to Python.
- Home visual funnel is now a single source-backed static figure spotlight; it auto-rotates every 4 seconds with a smooth fade/slide transition, figure clicks inspect/zoom images, and explicit buttons route to chapter resources while the hero keeps Notebooks as a quieter secondary CTA.
- Production Next.js homepage now mirrors the refined funnel: book-first hero, dark pedagogy progression, real static figure spotlight, animated notebook rail, university proof, and resource cards.
- Static figure inspection now happens through a closeable in-page image popover; GitHub remains available as a secondary source link.
- Notebooks removes search, topic filters, and count strips because the page is a curated set of eight animated notebook previews.
- Notebook cards update a guided featured workbench with Intuition, Geometry, Update rule, and Run it steps.
- The Notebooks source panel is contextual to the active widget, with source notebook, Colab, chapter package, and PDF paths.
- Notebooks currently shows a curated set of animated visual notebook previews, not the full source notebook inventory.
- Chapter-by-chapter static figure atlas now lives inside Chapters, with figure search, per-chapter coverage indicators, source figure links, and requisite chapter-note links.
- Non-destructive CSS `MLR` watermark overlays on displayed static book figures.
- Chapters exposes visible chapter search, learner/instructor filters, resource-type filters, chapter packages, the scan-first chapter list, and the integrated figure atlas.
- Instructor Path removes the hero image/course-art card, verified-resources card, and course-planning checklist; it now centers on roadmap selection and adoption support.
- Instructor roadmap selector includes fit badges, one expanded chapter at a time, chapter package routing, and contextual selected-path support links.
- Reviews removes boxed proof stats and proof filter buttons; the page now presents universities, endorsements, and verification channels as a simple source-backed sequence.

## Assets Used

- Existing target-local book covers, widget GIFs, roadmap PNGs, social proof logos, and people portraits from the five Limner reference directories.
- Static book figures copied from `neonwatty/machine-learning-refined-notes-assets` into `assets/book-figures/`.
- Homepage static figures: `bigpicture_regression_optimization.png`, `bigpicture_classification_optimization.png`, `exact_vs_backtrack.png`, and `L_layer_network_unfolded.png`.
- Static atlas source figures: 16 copied PNGs covering Ch. 2, Ch. 3, Ch. 4, Ch. 5, Ch. 6, Ch. 7, Ch. 8, Ch. 9, Ch. 10, Ch. 11, Ch. 13, and Appendix C.
- Additional visual-funnel figures copied from `machine-learning-refined-notes-assets`: `Figure_11_17.png`, `Figure_11_32.png`, `Figure_11_35.png`, `Figure_11_38.png`, `Figure_11_48.png`, `Figure_11_50.png`, `Figure_11_51.png`, and Ch. 7 `multiclass_histogram.png`.
- Full static-image inventory check: `machine-learning-refined-notes-assets` has 167 static image files across the available chapter image folders at commit `63161442406ebbdd331af1e22e6327eabd81d344`; this prototype intentionally uses a curated subset.
- Real source repository anchors from `neonwatty/machine-learning-refined`, including notebook, exercise, PDF README, and PPTX README links.
- Chapter/resource model includes Ch. 12 Kernel Methods and Ch. 14 Tree-Based Learners; both use real exercise notebook anchors because notes-assets/static figure folders are not available for those chapters.
- Real static figure source anchors from `neonwatty/machine-learning-refined-notes-assets`.
- Instructor Path sources include the `chapter_pdfs/README.md` Preface PDF link and the main README `How to use the book?` roadmap guide.
- Reader-review snippets use short actual excerpt cards from Veronica Medrano on Amazon, Julio Perez Olvera on Goodreads, and Estefano Palacios on Goodreads, with source links preserved in the Reviews view.
- Book-positioning copy is adapted from the current `mlrefined.com` homepage and canonical repository framing: foundations, algorithms, applications; intuition, visuals, mathematics, and code.
- Production static figure assets copied into `public/learning-visuals/book-figures/`: `bigpicture_regression_optimization.png`, `bigpicture_classification_optimization.png`, `exact_vs_backtrack.png`, and `L_layer_network_unfolded.png`.

No new images were generated.
Copied source figures were not edited; watermarks are display-only CSS overlays.

## Verification

- `node --check docs/landing-reimagining/unified-html-mockup/app.js`: passed.
- `git diff --check -- docs/landing-reimagining/unified-html-mockup/index.html docs/landing-reimagining/unified-html-mockup/styles.css docs/landing-reimagining/unified-html-mockup/app.js`: passed.
- Asset-reference verifier: `asset references ok: 44`.
- Rendered reference scan for generated-image leakage terms: no matches outside this receipt.
- Browser QA with bundled Playwright: visible routes render; Notebooks search/filter passed; GIF previews verified as `object-fit: contain`; Instructor Path toolkit/preface/roadmap links passed; resource search/filter passed; image load check passed; desktop/mobile horizontal overflow checks passed; console/page errors `[]`.
- Critique-driven UX polish QA with bundled Playwright: all five routes render at 1440px and 390px, no horizontal overflow, console/page errors `[]`; Notebooks renders 4 workbench concept steps and contextual source bundle; Resources resource-type filtering renders selected chapter preview and availability badges; Instructor renders exactly one expanded roadmap node and 3 contextual support links; Reviews renders 9 logo captions and 3 proof section headings.
- Simplification QA with bundled Playwright: all five routes render at 1440px and 390px, no horizontal overflow, console/page errors `[]`; Home has no hero university proof pill or proof chips; Notebooks has no search, filters, or count strip and still renders exactly 8 notebook cards; Chapters has no chapter search, resource filter bar, or right selected-widget rail; Instructor has no hero image/course-art card, no verified-resources card, and no course-planning checklist; Reviews has no boxed proof stats or proof filter buttons.
- Feedback QA with bundled Playwright: Home CTAs render as `Browse chapters` and `Browse notebooks`; home spotlight includes Ch. 11 feature-learning thumbnails, the requested Ch. 7 multiclass histogram, and no `Health Feature Example`; Instructor lead uses roadmap/materials copy; Reviews renders named Amazon/Goodreads review excerpts, and enlarged Michigan/Toronto/Texas A&M logo classes; desktop/mobile overflow checks passed.
- Merged feature-gallery QA with bundled Playwright: landing page renders 8 feature-learning gallery cards inside the visual funnel, with `Multiclass Histogram` correctly labeled `Ch. 7`, Ch. 11 cards labeled `Ch. 11`, 2-column desktop layout, 1-column mobile layout, and no horizontal overflow.
- Mockup critique-fix QA with bundled Playwright: unreachable Gallery view removed; primary nav renders Home, Notebooks, Chapters, Instructors, Reviews; stale CTA labels are absent; Chapters renders visible chapter and figure search controls, 14 chapter rows including Ch. 12 Kernel Methods and Ch. 14 Tree-Based Learners, 15 figure coverage buttons, and 12 atlas groups; exact chapter search for `Kernel Methods` returns only Ch. 12; figure filtering excludes Ch. 12/14 because they have no curated static figures; Ch. 14 routes to the tree exercise notebook; spotlight image click opens the image popover; desktop/mobile overflow checks passed; console/page errors `[]`.
- Focused Home funnel QA with local Playwright: Home has one figure spotlight, no `animation-rail`, no `.home-gif-card`, no bottom visual gallery nodes, no old `Colab notebooks` or `Algorithms in motion` copy, CTAs render as `Browse chapters` and `Browse notebooks`, carousel auto-rotates with smooth animation names applied, Notebooks still renders 8 GIF-backed widget cards, desktop/mobile overflow checks passed, and console/page errors `[]`.
- Home figure/GIF funnel QA with bundled Playwright: Gallery is absent from primary nav, `#gallery` falls back to Home, 4 landing GIF cards render, GIF card click routes into the selected Notebooks workbench, Resource chapter figure buttons open the in-page popover, and mobile overflow check passed.
- Irresistible Home funnel QA with bundled Playwright: hero proof and pithier pedagogy lead render, hero has exactly 3 CTAs, dark pedagogy progression renders all 4 steps, old split figure/GIF section copy is absent, the bland counts row is absent, combined visual funnel renders 2 CTAs, figure spotlight and 4 GIF cards load, desktop/mobile horizontal overflow checks passed, and console/page errors `[]`.
- Production homepage QA at `http://127.0.0.1:3017/` with bundled Playwright: H1 text renders as `Machine Learning Refined 2nd Edition`, primary hero CTA routes to `/chapters`, proof/pedagogy/visual-path copy renders, 5 rendered static book-figure images and 4 widget GIFs load after scroll, desktop/mobile horizontal overflow checks passed, and console/page errors `[]`.
- Connected mockup QA with bundled Playwright: Notebooks cards update the featured workbench; Resource chapter rows update the chapter package hub; hub figure buttons open the image popover; hub widget/roadmap jumps route to the correct selected view; mobile resource hub overflow check passed; console/page errors `[]`.
- Home figure spotlight QA with bundled Playwright: 7 curated figures render, next and thumbnail selection update the spotlight, Inspect opens the image popover, primary figure click routes to the matching Resources chapter package, and desktop/mobile overflow checks passed.
- Instructor/figure refinement QA with bundled Playwright: adoption checklist title rendered with 6 decision cards, removed duplicate teaching-resource row, adoption support rail has 3 links, image popover opens without navigating away, source file remains available inside the popover, close button and Escape close the popover, mobile popover overflow check passed, console/page errors `[]`.
- Mobile QA with bundled Playwright at 390px width: all visible routes render active nav and page headings, visible images load, no horizontal overflow, and console/page errors `[]`.
- Instructor Path interactive-roadmap QA: toolkit title visible at desktop y=470, 6 adoption cards rendered, all four roadmap selectors update selected state, 8-13 chapter nodes render per selected roadmap, 30-47 source resource links render per selected roadmap, and mobile horizontal overflow check passed.
- Clean gallery atlas capture: 16 static book-figure cards across 12 chapter sections rendered, image load check passed, desktop horizontal overflow check passed, console/page errors `[]`.
- `npm run ci`: passed.

Screenshots:

- `screenshots/desktop-home.png`
- `screenshots/desktop-home-simple-funnel.png`
- `screenshots/desktop-home-irresistible-funnel.png`
- `screenshots/desktop-home-figure-spotlight.png`
- `screenshots/desktop-gallery-static-atlas.png`
- `screenshots/desktop-gallery-figure-inspector.png`
- `screenshots/desktop-gallery-image-popover.png`
- `screenshots/desktop-instructor.png`
- `screenshots/desktop-instructor-adoption-checklist.png`
- `screenshots/desktop-instructor-top-viewport.png`
- `screenshots/desktop-instructor-roadmap-panel.png`
- `screenshots/desktop-instructor-interactive-roadmap.png`
- `screenshots/desktop-notebooks.png`
- `screenshots/desktop-notebooks-selected-workbench.png`
- `screenshots/desktop-resources-chapter-hub.png`
- `screenshots/desktop-gallery-filtered.png`
- `screenshots/mobile-gallery.png`
- `screenshots/mobile-notebooks.png`
- `screenshots/mobile-home.png`
- `screenshots/mobile-home-simple-funnel.png`
- `screenshots/mobile-home-irresistible-funnel.png`
- `screenshots/production-desktop-home-funnel.png`
- `screenshots/production-mobile-home-funnel.png`
- `screenshots/mobile-home-figure-spotlight.png`
- `screenshots/mobile-resources-chapter-hub.png`
- `screenshots/mobile-instructor-interactive-roadmap.png`
- `screenshots/desktop-notebooks-guided-workbench.png`
- `screenshots/desktop-resources-guided-discovery.png`
- `screenshots/desktop-instructor-guided-adoption.png`
- `screenshots/desktop-reviews-proof-hierarchy.png`
- `screenshots/mobile-resources-guided-discovery.png`
- `screenshots/mobile-reviews-proof-hierarchy.png`
- `screenshots/desktop-home-simplified-hero.png`
- `screenshots/desktop-notebooks-simplified.png`
- `screenshots/desktop-resources-simplified.png`
- `screenshots/desktop-instructor-simplified.png`
- `screenshots/desktop-reviews-simplified.png`
- `screenshots/mobile-resources-simplified.png`
- `screenshots/mobile-instructor-simplified.png`
- `screenshots/desktop-home-ch11-carousel.png`
- `screenshots/desktop-reviews-reader-signals.png`
- `screenshots/mobile-reviews-reader-signals.png`
- `screenshots/desktop-home-ch11-showcase-large.png`
- `screenshots/desktop-home-merged-visual-showcase.png`
- `screenshots/desktop-mockup-critique-fixes.png`
- `screenshots/mobile-mockup-critique-fixes.png`
- `screenshots/desktop-reviews-actual-excerpts.png`
- `screenshots/mobile-reviews-actual-excerpts.png`

## Remaining Gaps

- This is a static prototype, not production Next.js.
- Some chapter rows remain representative rather than an exhaustive generated index.
- Notebooks view is curated around 8 visual widgets; source inventory check found 84 note notebooks in `machine-learning-refined/notes`.
- Static source figure coverage reflects the available `machine-learning-refined-notes-assets` chapter folders; no static figure folder was found there for Ch. 1, Ch. 12, or Ch. 14.
- External Colab/GitHub/Publisher links are wired but not opened live during verification.
