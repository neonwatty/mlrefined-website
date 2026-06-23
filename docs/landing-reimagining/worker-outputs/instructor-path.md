# Instructor Path Image Generation Receipt

Role name: `mlr-instructor-path`

## Candidate A

Generated image path: `/Users/neonwatty/.codex/generated_images/019eea5c-55a0-7bd0-8d10-78917acb16bb/ig_0df1de113427452a016a37e8ed6548819aaee38d089990b625.png`

Dimensions verified with `sips`: 1536 x 1024.

Final prompt:

```text
Use case: ui-mockup
Asset type: ideal desktop instructor path reference image for Machine Learning Refined website
Primary request: Create a polished high-fidelity desktop website screen concept for the Machine Learning Refined Instructor Path. This page helps college and university instructors evaluate and adopt the book for a course.
Scene/backdrop: elegant Visual Learning Lab website interface, white and warm off-white paper surfaces, crisp rules, book/resource workbench feeling, not a generic dashboard.
Subject: an instructor adoption/course-planning page with a strong first viewport: top nav, page title "Instructor Path", short positioning copy, compact proof band "Used as a reference text at 100+ universities and colleges", and a publisher-facing CTA for verified instructors.
Required UI content: four roadmap cards using the real local roadmap themes and names: "Essentials", "Full treatment", "Optimization focus", "Deep learning intro". Include resource links or chips for "Slides", "Exercises", "Datasets", "Chapter PDFs", "Jupyter notebooks", "Colab". Include a primary CTA label "Request sample copy" and secondary CTA "View instructor resources". Include compact university proof labels or logo placeholders for University of Michigan, University of Toronto, Texas A&M, Penn State, NYU, Purdue, Georgia Tech, ASU.
Composition/framing: desktop 16:9 full-page screenshot concept. Left side has a refined course-planning intro and sample-copy CTA; right side has a 2x2 grid of roadmap cards with small thumbnail map previews; below is a dense but airy resource strip and proof band. Keep all UI within viewport; professional spacing; 8px-or-less card radii.
Style/medium: high-fidelity modern academic web UI mockup, precise black typography, restrained line work, realistic small UI elements, elegant educational interface.
Lighting/mood: bright paper surface, serious, trusted, calm, instructor-ready.
Color palette: white/off-white, deep charcoal/navy, Cambridge-like gold accents, restrained academic blue, precise black type.
Text constraints: Page title, roadmap names, resource labels, proof line, and CTA labels should be readable and spelled correctly; small descriptions may be realistic compact UI text blocks.
Constraints: ground visual language in Machine Learning Refined resources and course adoption; show roadmap cards as concrete learning-path previews; include compact proof but do not let logos dominate.
Avoid: current mlrefined.com styling, Wix-like layout, purple gradients, decorative blobs/orbs, generic SaaS dashboard, stock academia photos, fantasy art, vague AI hype, watermark, browser chrome.
```

Critique: Candidate A is the cleaner editorial composition. It strongly communicates the four instructor roadmaps, resource categories, sample-copy CTA, and compact adoption proof without letting proof dominate. The 2x2 roadmap grid is immediately reusable as implementation guidance, and the resource strip at the bottom maps well to real instructor tasks. Weaknesses: the generated page brand reads as "Visual Learning Lab" rather than clearly leading with Machine Learning Refined, the aspect ratio is 3:2 instead of the requested desktop 16:9, and the university marks are generated approximations that must be replaced with the real local logo files during implementation.

Mobile behavior notes: On mobile, this candidate should stack as title and proof first, followed by the sample-copy CTA, then a one-column sequence of roadmap cards. The resource strip should become a compact horizontal carousel or two-column icon grid. The logo band should collapse to a short proof line plus a horizontally scrollable logo row using the real logos.

## Candidate B

Generated image path: `/Users/neonwatty/.codex/generated_images/019eea5c-55a0-7bd0-8d10-78917acb16bb/ig_0df1de113427452a016a37e93b699c819ab46fe912af9c90f2.png`

Dimensions verified with `sips`: 1672 x 941.

Final prompt:

```text
Use case: ui-mockup
Asset type: ideal desktop instructor path reference image for Machine Learning Refined website
Primary request: Create a second distinct polished high-fidelity desktop website screen concept for the Machine Learning Refined Instructor Path, focused on course planning and instructor adoption.
Scene/backdrop: Visual Learning Lab course-planning workbench, warm academic paper, crisp black rules, deep navy section headers, Cambridge-like gold highlights, restrained academic blue accents.
Subject: a complete Instructor Path page that makes adoption practical: title "Instructor Path", subtitle about evaluating, adopting, and teaching with Machine Learning Refined; prominent verified-instructor sample-copy module; compact adoption proof; roadmap chooser; and teaching resources.
Required UI content: four actual roadmap themes and card titles: "Essentials", "Full treatment", "Optimization focus", "Deep learning intro". Teaching resource modules labeled "Slides", "Exercises", "Datasets", "Chapter PDFs", "Jupyter notebooks", "Colab". Proof line "Used as a reference text at 100+ universities and colleges". CTA labels "Request sample copy" and "Build a course plan". Include subtle logo/proof labels for University of Michigan, University of Toronto, Texas A&M, Penn State, NYU, Purdue, Georgia Tech, ASU.
Composition/framing: desktop 16:9 full-page screenshot concept. Top third is a refined adoption header with a small book/course-planning artifact, sample-copy CTA, and proof line. Middle uses a wide horizontal course timeline/semester planner with the four roadmap tracks as selectable tabs or cards, showing weeks, chapters, notebooks, and assignments. Right side or lower band contains a publisher-facing verified instructor panel. Bottom band contains teaching resource cards and compact university proof. Dense enough for real instructors, but calm and scannable.
Style/medium: high-fidelity modern academic web UI mockup, not marketing fluff; refined education/product interface with realistic widgets, tab controls, resource chips, small roadmap thumbnails, equation/notebook accents.
Lighting/mood: bright, trustworthy, serious, practical, scholarly.
Color palette: white/off-white paper, deep charcoal/navy, Cambridge-like gold, restrained academic blue, precise black typography; very limited color accents from roadmap lines.
Text constraints: Page title, roadmap names, resource labels, proof line, and CTA labels should be readable and spelled correctly; small paragraphs may be realistic compact UI text blocks.
Constraints: emphasize actual teaching workflows: sample copy eligibility, course tracks, slides, exercises, datasets, PDFs, notebooks, Colab, adoption proof. Roadmap cards should feel based on real roadmap image assets rather than abstract tiles.
Avoid: current mlrefined.com styling, Wix-like UX, purple gradients, decorative blobs/orbs, generic SaaS dashboard, stock academia photos, fantasy art, vague AI hype, huge empty hero, watermark, browser chrome.
```

Critique: Candidate B is the recommended direction because it is closer to the requested desktop 16:9 frame and gives instructors a concrete course-planning workflow rather than only an adoption overview. The top header includes book identity, sample-copy CTA, and proof; the middle semester-planning grid makes the roadmap concept feel actionable; and the bottom resource cards map directly to slides, exercises, datasets, PDFs, notebooks, and Colab. Weaknesses: the generated book cover and university logos are visual approximations, not production assets; some tiny UI text should be treated as placeholder; and the dense timeline will need careful responsive simplification.

Mobile behavior notes: On mobile, preserve the order as adoption header, sample-copy CTA, proof line, roadmap selector, current selected roadmap details, then teaching resources. The semester timeline should not shrink into unreadability; use a selected-roadmap summary with expandable week groups or horizontal scroll. The verified-instructor benefits panel can become a compact accordion below the primary CTA.

## Actual Assets And Content Referenced

- `public/book-cover-2nd.png` for real Machine Learning Refined book identity.
- `public/learning-visuals/roadmaps/essentials-roadmap.png`
- `public/learning-visuals/roadmaps/full-treatment-roadmap.png`
- `public/learning-visuals/roadmaps/optimization-roadmap.png`
- `public/learning-visuals/roadmaps/deep-learning-roadmap.png`
- `public/social-proof/logos/university-of-michigan.png`
- `public/social-proof/logos/university-of-toronto.png`
- `public/social-proof/logos/texas-am.png`
- `public/social-proof/logos/penn-state.png`
- `public/social-proof/logos/nyu.png`
- `public/social-proof/logos/purdue.png`
- `public/social-proof/logos/georgia-tech.png`
- `public/social-proof/logos/asu.png`
- Content/resource types from the shared brief and public proof/resource framing: chapter PDFs, Jupyter notebooks, Colab notebooks, exercises, slides, datasets, GitHub repository, course-planning resources, adoption proof, and publisher-facing sample-copy CTA for verified college and university instructors.
- Adoption proof claim used in both candidates: "Used as a reference text at 100+ universities and colleges."

Recommended candidate: /Users/neonwatty/.codex/generated_images/019eea5c-55a0-7bd0-8d10-78917acb16bb/ig_0df1de113427452a016a37e93b699c819ab46fe912af9c90f2.png

## Verification Notes

- Read `docs/landing-reimagining/worker-briefs/shared-grounding.md`.
- Read `docs/landing-reimagining/worker-briefs/instructor-path.md`.
- Read `docs/superpowers/specs/2026-06-21-landing-page-reimagining-design.md`.
- Verified local roadmap and proof asset inventory with `rg --files public/learning-visuals public/social-proof docs/superpowers/specs | sort`.
- Verified generated PNG dimensions with `sips -g pixelWidth -g pixelHeight`.
- Visually inspected both generated PNGs before selecting the recommendation.

## Limner Editable Mockup Update

Date: 2026-06-21

Trajectory: `traj_81224d1d0bec1a4f`

Final Limner run: `.limner/runs/2026-06-21T163604269Z-lx1sbe`

Comparison report: `.limner/runs/2026-06-21T163604269Z-lx1sbe/reports/comparison.md`

Side-by-side artifact: `.limner/runs/2026-06-21T163604269Z-lx1sbe/captures/side-by-side.png`

Reference screenshot: `.limner/runs/2026-06-21T163604269Z-lx1sbe/captures/reference.png`

Implementation summary: Replaced the image-backed first-pass shell with editable HTML/CSS modules for the top navigation, instructor hero, verified-instructor CTA, adoption proof strip, course-planning workbench, roadmap selector, teaching resources, and adoption support. The selected generated image remains visual guidance only and is not referenced by the new HTML.

Assets used in the editable reference:

- `targets/mlr-instructor-path/reference/assets/book-cover-2nd.png`, copied from `public/book-cover-2nd.png`.
- `targets/mlr-instructor-path/reference/assets/roadmaps/essentials-roadmap.png`, copied from `public/learning-visuals/roadmaps/essentials-roadmap.png`.
- `targets/mlr-instructor-path/reference/assets/roadmaps/full-treatment-roadmap.png`, copied from `public/learning-visuals/roadmaps/full-treatment-roadmap.png`.
- `targets/mlr-instructor-path/reference/assets/roadmaps/optimization-roadmap.png`, copied from `public/learning-visuals/roadmaps/optimization-roadmap.png`.
- `targets/mlr-instructor-path/reference/assets/roadmaps/deep-learning-roadmap.png`, copied from `public/learning-visuals/roadmaps/deep-learning-roadmap.png`.
- `targets/mlr-instructor-path/reference/assets/logos/university-of-michigan.png`, `university-of-toronto.png`, `texas-am.png`, `penn-state.png`, `nyu.png`, `purdue.png`, `georgia-tech.png`, and `asu.png`, copied from `public/social-proof/logos/`.

Content sources used: `src/content/book-facts.ts` for the `100+` adoption proof and resource-repo counts, `src/content/book-resources.ts` for Chapter PDFs, Colab/Jupyter notebooks, Exercises, and Slides/roadmaps copy, and `src/content/book-social-proof.ts` for verified university logo names.

Remaining fidelity gaps: The editable reference is taller than the generated ideal, so the teaching-resource band appears lower in the captured viewport. The hero art is recreated with real cover art and CSS-drawn notes/diagrams rather than the generated open-book composition, so proportions differ. Verified-instructor/sample-copy copy remains product-direction placeholder text until publisher eligibility details are confirmed.

## Manager Follow-up Polish

Date: 2026-06-21

Reason: Manager review confirmed the worker-noted issue was actionable: the hero/right verification card consumed too much vertical space, so the course-planning workbench and teaching resources landed lower than the ideal first viewport.

Response and action evidence:

- Fresh Limner response: `resp_b99d8ef55a194e07`
- Action: `act_0ce64cfde36e4881`
- Edited file: `targets/mlr-instructor-path/reference/styles.css`

Updated final Limner run: `.limner/runs/2026-06-21T213233776Z-bqt2fy`

Updated comparison report: `.limner/runs/2026-06-21T213233776Z-bqt2fy/reports/comparison.md`

Updated side-by-side: `.limner/runs/2026-06-21T213233776Z-bqt2fy/captures/side-by-side.png`

Polish summary: Reduced topbar/hero height, tightened the verified-instructor card, shrank the book/course-stage art, compressed the proof strip, and tightened the workbench/resource spacing. No content or asset provenance changed.

Post-polish evidence:

- `limner loop compare --trajectory traj_81224d1d0bec1a4f`: succeeded.
- `.limner/runs/2026-06-21T213233776Z-bqt2fy/captures/reference.png.console.json`: `[]`.
- `sips -g pixelWidth -g pixelHeight .limner/runs/2026-06-21T213233776Z-bqt2fy/captures/reference.png`: `1440 x 900`.

Remaining gaps after manager polish: hero art is still a real-cover/CSS reconstruction rather than the generated open-book composition; verified-instructor/sample-copy copy remains product-direction placeholder text until publisher eligibility details are confirmed.

## Source Repository HTML Polish

Date: 2026-06-21

Reason: Manager follow-up confirmed the instructor reference should ground resource cards and CTAs in exact book/source repository anchors.

Action evidence:

- Source-repo response: `resp_5bf00f48d39b4436`
- Action: `act_d2fc46430b23410b`
- Edited file: `targets/mlr-instructor-path/reference/index.html`
- Final Limner run: `.limner/runs/2026-06-21T215811133Z-vmzils`
- Final comparison report: `.limner/runs/2026-06-21T215811133Z-vmzils/reports/comparison.md`
- Final side-by-side: `.limner/runs/2026-06-21T215811133Z-vmzils/captures/side-by-side.png`

Source assets and anchors used:

- Existing target-local copy of `public/book-cover-2nd.png`.
- Existing target-local roadmap images from `public/learning-visuals/roadmaps/`.
- Existing target-local proof logos from `public/social-proof/logos/`.
- `README.md#instructors`
- Publisher sample-copy URL from the source README.
- `chapter_pdfs/README.md`
- `presentations/README.md`
- `notes/3_First_order_methods/A_3_Normalized.ipynb`
- `notes/6_Linear_twoclass_classification/6_2_Cross_entropy.ipynb`
- `notes/13_Multilayer_perceptrons/13_2_Multi_layer_perceptrons.ipynb`
- `exercises/chapter_3/chapter_3_exercises.ipynb`

Polish summary: Replaced placeholder links with repository or publisher anchors, changed the standalone datasets card to "Notebook-linked data" after source inspection found no local dataset directory, and made the source package panel point to README/PPTX/notebook resources.

Post-polish evidence:

- `limner loop compare --trajectory traj_81224d1d0bec1a4f --format json`: succeeded.
- `.limner/runs/2026-06-21T215811133Z-vmzils/captures/reference.png.console.json`: `[]`.
- `sips -g pixelWidth -g pixelHeight .limner/runs/2026-06-21T215811133Z-vmzils/captures/reference.png`: `1440 x 900`.

Remaining gaps after source polish: the course timeline remains illustrative rather than generated from a canonical syllabus file; Colab example URL was formatted from an exact notebook path but not opened live.
