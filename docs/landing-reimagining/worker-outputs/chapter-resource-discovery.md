# Chapter And Resource Discovery Image Receipt

Role name: `mlr-resource-discovery`

## Candidate 1: Scan-First Resource Index

Generated image path: `/Users/neonwatty/.codex/generated_images/019eea5c-41e7-75b1-afaa-6480b145c789/ig_0553e087e3834b88016a37e933bce48199a43e57b316216b4a.png`

Dimensions verified with `sips`: 1536 x 1024.

Final prompt:

```text
Use case: ui-mockup
Asset type: ideal desktop chapter and resource discovery reference image for a website redesign
Primary request: Create a polished desktop Chapter and Resource Discovery page for Machine Learning Refined that turns the canonical GitHub resource repository into a refined public navigation layer. The screen should feel like an elegant machine-learning learning workbench, not a generic SaaS dashboard.
Scene/backdrop: A full desktop browser viewport, 16:9, warm off-white paper background, precise black typography, deep charcoal/navy navigation, Cambridge-like gold accents, restrained academic blue links, crisp hairline rules.
Subject: A dense but readable chapter map grouped by real book parts: "Introduction", "Part I Mathematical Optimization", "Part II Linear Learning", "Part III Nonlinear Learning", and "Part IV Appendices". Show representative rows for Chapter 1 Introduction; Chapter 2 Zero-Order Optimization Techniques; Chapter 3 First-Order Optimization Techniques; Chapter 4 Second-Order Optimization Techniques; Chapter 5 Linear Regression; Chapter 6 Two-Class Classification; Chapter 8 Linear Unsupervised Learning; Chapter 10 Principles of Nonlinear Feature Engineering; Chapter 11 Principles of Feature Learning; Chapter 13 Fully Connected Neural Networks; Appendix A Advanced Optimization; Appendix C Linear Algebra.
Layout: Left sidebar with learning-goal filters and a small book identity block; main content is a refined grouped table or row-card index; right rail shows a "Repository connection" panel with GitHub repository link, recent resource types, and a small notebook/plot preview inspired by learning widgets such as gradient descent, logistic regression, k-means, feature normalization, and cross-validation.
Text (verbatim, important labels): "Machine Learning Refined", "Chapter & Resource Discovery", "Find the chapter, then open the exact resource", "Independent Learner", "Instructor", "Practitioner Refresh", "PDF", "Notebook", "Exercise", "Slides", "Colab", "GitHub", "Canonical repository", "github.com/neonwatty/machine-learning-refined".
Resource truth: Indicate PDFs for chapters and appendices, notes/notebooks and Colab where available, exercises for chapters 2-14, slides/PPTX for chapters 2-14, and GitHub as the canonical source. Do not imply every resource exists for every appendix.
Style/medium: high-fidelity website UI mockup, editorial academic design, real product screen concept, no cartoon or fantasy art.
Composition/framing: Desktop 16:9 full-page screenshot, enough whitespace to breathe but optimized for scanning; readable page title, filter labels, badge labels, and repository URL; chapter descriptions may be realistic smaller UI text blocks.
Visual details: Use small resource badges as compact pills with tiny icons, subtle status dots for availability, section count summaries, and a visible book-cover thumbnail or navy/gold book identity chip. Include a small equation/plot motif only as a supporting preview, not as decoration.
Constraints: no watermark; no purple or purple-blue gradients; no decorative blobs, orbs, stock academia, generic AI hype, or current mlrefined.com/Wix-like styling; avoid nested cards and oversized marketing hero patterns; keep the experience first-screen useful and navigable.
```

Actual assets/content referenced:

- Shared grounding brief: `docs/landing-reimagining/worker-briefs/shared-grounding.md`
- Page-family brief: `docs/landing-reimagining/worker-briefs/chapter-resource-discovery.md`
- Campaign design spec: `docs/superpowers/specs/2026-06-21-landing-page-reimagining-design.md`
- Local book cover identity: `public/book-cover-2nd.png` verified at 1226 x 1746.
- Local widget topics used as visual cues: `public/learning-visuals/widgets/normalized-gradient-descent.gif`, `logistic-regression.gif`, `kmeans.gif`, `feature-normalization.gif`, and `cross-validation-regression.gif`.
- Canonical resource repository: `https://github.com/neonwatty/machine-learning-refined`, verified with `git ls-remote`.
- Repository content evidence from a shallow clone at `/tmp/mlr-resource-repo`: chapter PDFs README, presentations README, exercises folders for chapters 2-14, and notes notebooks under chapter topic folders.
- Actual book part grouping from `chapter_pdfs/README.md`: Introduction, Part I Mathematical Optimization, Part II Linear Learning, Part III Nonlinear Learning, and Part IV Appendices.

Critique: This candidate is the strongest practical implementation reference because it reads like a real resource finder rather than a decorative concept. The left filter rail, grouped chapter table, right repository panel, and widget previews make the user task obvious. It has a few generation artifacts, including an incorrect-looking cover author/name area and simplified resource counts, so implementation should use real data rather than copy the image literally. Its overall architecture, hierarchy, and information density are a good fit for the page family.

Mobile behavior notes: Collapse the persistent left rail into a top filter drawer or compact segmented control, keep search and learning-goal filters above the chapter list, turn each row into a full-width chapter card, and move the repository connection plus widget preview below the first chapter group. Resource badges should wrap in two rows max, with unavailable resources muted and still accessible to screen readers as unavailable.

## Candidate 2: Visual Resource Atlas

Generated image path: `/Users/neonwatty/.codex/generated_images/019eea5c-41e7-75b1-afaa-6480b145c789/ig_0553e087e3834b88016a37e9dd30ec8199bacc73c6f1d7e31c.png`

Dimensions verified with `sips`: 1536 x 1024.

Final prompt:

```text
Use case: ui-mockup
Asset type: alternate ideal desktop chapter and resource discovery reference image for a website redesign
Primary request: Create an alternate polished Chapter and Resource Discovery page for Machine Learning Refined. Emphasize a visual resource atlas rather than a pure table: book parts appear as horizontal learning pathways, chapter tiles sit inside each part, and every tile exposes the exact resource types a visitor can open.
Scene/backdrop: Full desktop browser viewport, 16:9, warm off-white paper surface, deep charcoal/navy header, crisp black serif/sans typography pairing, Cambridge-like gold dividers, restrained academic blue interactive states, fine grid and notebook-paper cues.
Subject: A public navigation layer for the canonical resource repository. Include grouped bands for "Part I Mathematical Optimization", "Part II Linear Learning", "Part III Nonlinear Learning", and "Part IV Appendices", plus a compact "Introduction" starter tile. Representative chapter tiles should include: Chapter 2 Zero-Order Optimization Techniques, Chapter 3 First-Order Optimization Techniques, Chapter 5 Linear Regression, Chapter 6 Two-Class Classification, Chapter 8 Linear Unsupervised Learning, Chapter 9 Feature Engineering and Selection, Chapter 10 Nonlinear Feature Engineering, Chapter 11 Feature Learning, Chapter 12 Kernel Methods, Chapter 13 Fully Connected Neural Networks, Chapter 14 Tree-Based Learners, Appendix B Automatic Differentiation, Appendix C Linear Algebra.
Layout: Top page title and compact search. Directly below, a three-option segmented control for learning goals. Main area: connected chapter-map lanes with part labels, chapter tiles, resource badge clusters, and subtle connector lines. A sticky-looking lower/right panel titled "Open from the source" shows the GitHub repository URL, resource coverage counters, and quick actions. Add a small book identity thumbnail and a mini visual-notebook preview with plots/equations in the margins.
Text (verbatim, important labels): "Chapter & Resource Discovery", "Browse by learning goal", "Independent Learner", "Instructor", "Practitioner Refresh", "PDF", "Notebook", "Exercise", "Slides", "Colab", "GitHub", "Open from the source", "github.com/neonwatty/machine-learning-refined", "PDFs for chapters and appendices", "Exercises and slides for Chapters 2-14".
Resource truth: PDFs exist for chapters and appendices; notes/notebooks and Colab links exist where available; exercise notebooks exist for chapters 2-14; PPTX slides exist for chapters 2-14; GitHub is the canonical repository. Visually represent unavailable resources with muted/disabled badges rather than pretending everything is universal.
Style/medium: high-fidelity editorial website UI mockup, serious academic design, practical resource finder, elegant learning-lab workbench.
Composition/framing: Desktop 16:9 full-page screenshot, no marketing hero card, no nested card clutter. Maintain readable primary labels and badges. The screen should look ready to translate into a real responsive Next.js page.
Visual details: Use chapter cards with 8px or smaller radius, compact icon+text badges, count chips, small plot thumbnails inspired by gradient descent contours, logistic boundary, k-means clusters, Taylor curve, cross-validation folds. Add subtle book-cover/navy-gold identity without relying on exact cover reproduction.
Constraints: no watermark; no purple gradients; no decorative blobs/orbs; no stock classroom photography; no fantasy art; no vague AI hype; do not copy current mlrefined.com styling; avoid one-note beige or one-note dark-blue dominance by balancing white paper, navy, gold, academic blue, and black.
```

Actual assets/content referenced:

- Shared grounding brief: `docs/landing-reimagining/worker-briefs/shared-grounding.md`
- Page-family brief: `docs/landing-reimagining/worker-briefs/chapter-resource-discovery.md`
- Campaign design spec: `docs/superpowers/specs/2026-06-21-landing-page-reimagining-design.md`
- Local book cover identity: `public/book-cover-2nd.png` verified at 1226 x 1746.
- Local widget topics used as visual cues: gradient descent contours, logistic boundary, k-means clusters, Taylor curve, and cross-validation folds from `public/learning-visuals/widgets/*`.
- Canonical resource repository: `https://github.com/neonwatty/machine-learning-refined`, verified with `git ls-remote`.
- Repository content evidence from `/tmp/mlr-resource-repo/chapter_pdfs/README.md`, `/tmp/mlr-resource-repo/presentations/README.md`, `/tmp/mlr-resource-repo/exercises`, and `/tmp/mlr-resource-repo/notes`.

Critique: This candidate has the richer "resource atlas" personality and makes the book parts visually memorable with lanes, connector rules, chapter tiles, and a strong "Open from the source" panel. It better communicates the Visual Learning Lab mood, but it is visually busier and could be harder to implement accessibly without careful responsive design. Some chapter labels and badge details are too small for direct use, and the generated cover is not faithful enough to reuse as content.

Mobile behavior notes: Convert part lanes into stacked accordion sections, one part per band, with a sticky learning-goal segmented control below search. Chapter tiles should become single-column cards with the plot thumbnail optional or hidden after the first few items. The "Open from the source" panel should become a compact source banner after the title, with coverage counters below the first two chapter groups.

## Recommendation

Recommended candidate: /Users/neonwatty/.codex/generated_images/019eea5c-41e7-75b1-afaa-6480b145c789/ig_0553e087e3834b88016a37e933bce48199a43e57b316216b4a.png

Rationale: Candidate 1 is the better canonical implementation reference because its information architecture is clearer, easier to make responsive, and closer to the real task of opening PDFs, notebooks, exercises, slides, Colab, and GitHub resources quickly. Candidate 2 should still inform visual texture, especially the book-part lanes and source panel treatment.

## Verification Notes

- Read `docs/landing-reimagining/worker-briefs/shared-grounding.md`.
- Read `docs/landing-reimagining/worker-briefs/chapter-resource-discovery.md`.
- Read `docs/superpowers/specs/2026-06-21-landing-page-reimagining-design.md`.
- Verified generated image dimensions with `sips -g pixelWidth -g pixelHeight`.
- Verified local book cover dimensions with `sips -g pixelWidth -g pixelHeight public/book-cover-2nd.png`.
- Verified canonical repository reachability with `git ls-remote https://github.com/neonwatty/machine-learning-refined.git HEAD`, returning HEAD `7edb5a0572f87d300520ac36cb688310b8d2876a`.
- Cloned the canonical resource repository to `/tmp/mlr-resource-repo` for direct inspection of chapter PDF, presentation, exercise, and notebook structure.
- Did not edit app code.
