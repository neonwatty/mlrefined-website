# Machine Learning Refined Landing Page Reimagining Design

Date: 2026-06-21
Status: Draft for user review

## Purpose

Reimagine the Machine Learning Refined website as a modern public home for the
book and its open learning resources. The redesign should make the book feel
credible, visual, useful, and alive without copying the current mlrefined.com
styling.

The selected direction is a page-system exploration led by a Visual Learning Lab
homepage: animated learning visuals, notebooks, mathematical surfaces, and
resource discovery first; compact proof and accolades immediately after the
visual catch.

## Grounding Sources

- Book resource repository:
  `https://github.com/neonwatty/machine-learning-refined`
- Current public website:
  `https://www.mlrefined.com/`
- Local website assets:
  `public/book-cover-2nd.png`
  `public/learning-visuals/widgets/*`
  `public/learning-visuals/roadmaps/*`
  `public/social-proof/logos/*`
  `public/social-proof/people/*`

Use the current public website for content evidence only: adoption stat,
university list/logos, testimonials/accolades, purchase/resource destinations,
and the positioning that the book teaches concepts intuitively, visually,
mathematically, and in code.

Do not reuse the current website's styling, layout, typography, visual hierarchy,
or Wix-like UX patterns.

## Chosen Approach

Use a parallel page-system exploration rather than a homepage-only pass.

Five coordinated ideal screen families will be generated first:

1. Homepage
2. Visual Gallery
3. Chapter and Resource Discovery
4. Instructor Path
5. Reviews and Adoption

Each family will be explored as ideal screen imagery before implementation.
The strongest screens will become canonical inputs for Limner mockups and then
for the Next.js implementation.

## Visual Direction

The visual direction is Visual Learning Lab.

The website should feel like an elegant machine-learning workbench: animated
plots, notebook panes, equations, diagrams, resource maps, course paths, and
chapter structure anchored by the real book cover and a serious academic tone.

Use this palette direction:

- White and warm off-white paper surfaces
- Deep charcoal/navy from the book cover
- Cambridge-like gold accents
- Restrained academic blue accents
- Precise black typography and crisp rules

Avoid:

- Purple or purple-blue gradient themes
- Generic SaaS dashboards
- Decorative blobs, orbs, or stock-like backgrounds
- Overly cute illustration
- Marketing-page hero patterns that hide the actual resource experience

Generated imagery should look like polished UI screens or realistic educational
interfaces, not fantasy artwork.

## Page Designs

### Homepage

The homepage opens with a strong Visual Learning Lab hero. It should immediately
communicate that Machine Learning Refined teaches by seeing, deriving, and
building.

Required hero ingredients:

- Real book identity and visible book cover presence in the first viewport
- Animated/widget-rich learning visual surface
- Practical CTAs: download chapter PDFs, explore visual notes, view GitHub, or
  find chapters
- Short positioning around intuition, visualization, derivation, and Python
  implementation

Immediately below the visual catch, include a compact proof band:

- "Used as a reference text at 100+ universities and colleges" as the homepage
  proof claim
- A restrained university logo strip
- Two or three strong accolades from the current proof library

The proof band supports the experience but does not replace it.

### Visual Gallery

The Visual Gallery showcases the book's learning widgets and visual pedagogy.
It should use actual animation themes from the asset set and source repository,
including optimization, classification, clustering, feature normalization,
function approximation, cross-validation, trees, and Taylor series.

The page should help a visitor understand that the book is unusually visual and
conceptual, not only a PDF download.

Expected structures:

- Widget grid or guided carousel
- Topic filters or grouped sections
- Short explanations that connect visuals to chapters and notebooks
- CTAs to notebooks, Colab, and the relevant resource group

### Chapter And Resource Discovery

This page turns the GitHub repository into a refined public navigation layer.
It should make PDFs, notebooks, exercises, slides, and Colab paths discoverable
without requiring the user to parse the repository README.

Expected structures:

- Chapter map grouped by book parts
- Resource badges per chapter: PDF, notebook, exercise, slides, Colab
- Learning-goal filters for independent learners, instructors, and
  fundamentals-focused practitioners
- Clear links back to the canonical GitHub repository

### Instructor Path

This page helps instructors evaluate and adopt the book for a course.

Expected structures:

- Roadmap cards using actual roadmap assets
- Slides and exercise resources
- Suggested course tracks: essentials, full treatment, optimization focus,
  deep-learning introduction
- Compact adoption proof
- Publisher-facing sample-copy CTA for verified college and university
  instructors

### Reviews And Adoption

This page preserves the current site's full proof library while restyling it
into the new system.

Expected structures:

- University/adoption logo library
- Testimonial cards or editorial quote sections
- Segmentation between professor endorsements, reader reviews, and adoption
  context
- Links to book purchase/resource destinations where useful

The Reviews and Adoption page is included in the first visual exploration so the
design language scales. Implementation can be phased after the homepage and core
resource routes if schedule pressure requires it.

## Content Rules

- The resource repository remains canonical.
- The website is the refined, crawlable, mobile-friendly public navigation layer.
- Copy should serve real tasks: download, browse, learn, teach, verify, adopt.
- Keep text concise and concrete.
- Avoid vague hype about AI; lead with the book's actual strengths.
- Use current public-site accolades and university proof as evidence, but rewrite
  surrounding framing for the new UX.

## Worker Briefs

The first worker batch should use one shared grounding packet and five focused
briefs.

Shared grounding packet:

- Book repo URL and current public site URL
- Local asset inventory: cover, widgets, roadmaps, logos, portraits
- Visual direction and palette rules
- Ban on copying current-site styling
- Requirement to ground outputs in actual book assets and resource types

Worker briefs:

1. Homepage Worker: Visual Learning Lab hero and compact proof band.
2. Visual Gallery Worker: widget-forward exploration using real animation topics.
3. Chapter/Resource Worker: navigable resource map from actual repository
   structure.
4. Instructor Worker: roadmaps, slides, exercises, adoption proof, and
   course-planning flows.
5. Reviews/Adoption Worker: full proof library restyled into the new system.

Worker outputs should be ideal screen images first, not code. Each worker should
include desktop composition and mobile behavior notes.

## Conveyor And Limner Pipeline

1. Create an Agent Conveyor manager and five visible Codex app workers for the
   page families above.
2. Workers produce Codex image-generation prompts and ideal screen candidates.
3. Select or merge the strongest candidates into canonical reference images.
4. Use Limner `image-mockup` mode to convert selected images into editable
   HTML/CSS mockups.
5. Run Limner polish iterations until the mockups faithfully match the approved
   references.
6. Use Limner `mockup-implementation` mode after a Next.js implementation URL is
   available.
7. Implement the approved mockups in the app after user approval of the design
   and implementation plan.

## Verification Strategy

Top realistic failure modes:

1. The redesign drifts into generic SaaS/AI styling instead of grounded book
   assets.
2. The proof content becomes either too dominant or too hidden.
3. The resource architecture becomes beautiful but fails to map to real PDFs,
   notebooks, exercises, slides, and Colab/GitHub destinations.

Evidence expected before accepting implementation:

- Asset inventory checks for every referenced local image/GIF/roadmap/logo.
- Browser screenshots for desktop and mobile homepage, gallery, resource,
  instructor, and reviews routes.
- Direct rendered-link inspection for PDFs, notebooks, exercises, slides,
  GitHub, purchase, and sample-copy destinations.
- Rendered metadata, canonical URLs, sitemap, robots, crawlable copy, and
  structured data checks where applicable.
- `npm run lint`
- `npm run typecheck`
- `npm run knip:production`
- `npm run test:unit`
- `npm run build`

## Locked Decisions And Deferred Details

- The first worker batch uses five page-family workers: homepage, visual
  gallery, chapter/resource discovery, instructor path, and reviews/adoption.
- Final quote selection will be made from current mlrefined.com and local
  testimonial assets before implementation.
- Reviews/Adoption remains part of the first visual exploration. If
  implementation is phased, it follows the homepage and core resource routes.
