# Reviews And Adoption Image Generation Receipt

Role name: `mlr-reviews-adoption`

## Generated Image Paths

- Candidate 1: `/Users/neonwatty/.codex/generated_images/019eea5c-6d1e-7400-9ebd-de69077c3cb3/ig_09f8ccafb0b45a8e016a37e91005d08199ab5661081e3331f1.png`
- Candidate 2: `/Users/neonwatty/.codex/generated_images/019eea5c-6d1e-7400-9ebd-de69077c3cb3/ig_09f8ccafb0b45a8e016a37e9acbacc8199a3a1fc335590a4d3.png`

## Candidate 1

Final prompt:

```text
Use case: ui-mockup
Asset type: ideal desktop reviews and adoption reference image
Primary request: Create a polished desktop 16:9 Reviews and Adoption page for Machine Learning Refined. Restyle the current public site's full proof library into the new Visual Learning Lab system as a credible scholarly proof archive, not a marketing testimonial wall.
Scene/backdrop: A high-fidelity website screen concept on warm off-white paper with crisp black rules, an elegant academic editorial layout, and subtle machine-learning workbench details such as tiny plot thumbnails, notebook tabs, and equation marginalia.
Subject: Reviews and adoption proof page with clear segmentation: adoption context, university/adoption logo library, professor endorsements, and reader reviews.
Composition/framing: Desktop webpage screenshot, 16:9. Top masthead/navigation is compact. First viewport headline reads "Reviews & Adoption" with a subheading around "Used as a reference text at 100+ universities and colleges". Left column: adoption context with a small book-cover thumbnail and resource/publisher links. Main area: dense but refined university logo library grid featuring University of Michigan, University of Toronto, Texas A&M, Penn State, NYU, Kindai University, Purdue, Georgia Tech, Arizona State, and other institutions as restrained monochrome/blue marks. Lower area: editorial quote modules separated into "Professor endorsements" and "Reader reviews".
Style/medium: High-fidelity UI mockup, editorial academic web design, realistic typography hierarchy, subtle paper texture, no browser chrome.
Lighting/mood: Bright, trustworthy, scholarly, quiet confidence.
Color palette: white and warm off-white paper surfaces, deep charcoal/navy, Cambridge-like gold accents, restrained academic blue, precise black typography.
Text (verbatim, only key headings must be legible): "Machine Learning Refined", "Reviews & Adoption", "Used as a reference text at 100+ universities and colleges", "Professor endorsements", "Reader reviews", "Adoption context", "John G. Proakis", "Osvaldo Simeone", "David Duvenaud", "Kimiaki Shirahama", "Amazon", "Goodreads".
Constraints: Make it feel like a serious proof library and editorial evidence page. Include portrait placeholders for professor endorsements and avatar placeholders for reader reviews. Long testimonial body copy can be realistic UI text blocks, not necessarily fully readable. Keep spacing responsive and modular, with a hint of how it could stack on mobile.
Avoid: current mlrefined.com styling, Wix-like layout, purple gradients, decorative blobs/orbs, generic SaaS dashboard, stock academia photography, fantasy art, vague AI hype, oversized marketing cards, watermark.
```

## Candidate 2

Final prompt:

```text
Use case: ui-mockup
Asset type: ideal desktop reviews and adoption reference image
Primary request: Create a second polished desktop 16:9 Reviews and Adoption page concept for Machine Learning Refined. This version should feel like an adoption dossier and scholarly evidence workbench, translating the current public site's proof library into the Visual Learning Lab design language.
Scene/backdrop: A refined academic web interface laid out like a curated evidence desk: paper panels, tabbed dossier rails, small charts, quote annotations, logo index, and crisp typographic dividers.
Subject: Reviews and adoption page that separates "Adoption evidence", "Professor endorsements", "Reader reviews", and "Teaching context". It should clearly communicate credibility without becoming a generic testimonial wall.
Composition/framing: Desktop webpage screenshot, 16:9. Top area has a slim navigation and a title block reading "Reviews & Adoption" with a small evidence summary: "100+ universities and colleges" and "professor endorsements + reader reviews". Center-left: a sortable-looking institution index/logo library with selected universities: University of Michigan, University of Toronto, Texas A&M, Penn State, NYU, Kindai University, Purdue, Georgia Tech, Arizona State. Center-right: a featured endorsement column with portrait medallions and names John G. Proakis, Osvaldo Simeone, David Duvenaud, and Kimiaki Shirahama. Bottom band: reader review excerpts from Amazon and Goodreads, plus a compact adoption-context timeline showing undergraduate courses, graduate courses, instructors, independent learners. Include a small Machine Learning Refined book-cover tile and subtle visual-learning motifs: optimization plot, notebook code line, geometric margin diagram.
Style/medium: High-fidelity website UI reference image, editorial magazine-like academic design, polished but restrained, realistic screen composition.
Lighting/mood: Clear, credible, measured, institutional, library-like.
Color palette: white and warm off-white paper, deep charcoal/navy, Cambridge-like gold, restrained academic blue, precise black typography, thin black rules.
Text (verbatim, only major UI labels must be readable): "Machine Learning Refined", "Reviews & Adoption", "Adoption evidence", "100+ universities and colleges", "Professor endorsements", "Reader reviews", "Teaching context", "Amazon", "Goodreads", "View source library".
Constraints: Use compact modules, clear section labels, and believable academic proof content. Long quote bodies can be realistic text blocks. Logo marks may be simplified but should read as an institution library. Design for later responsive stacking: no tiny critical controls at page edges, no overlapping modules.
Avoid: current mlrefined.com styling, purple gradients, decorative blobs/orbs, generic SaaS dashboard, stock academia, fantasy artwork, hype language, oversized rounded cards, watermark.
```

## Actual Assets And Content Referenced

- Shared grounding and family brief: `docs/landing-reimagining/worker-briefs/shared-grounding.md` and `docs/landing-reimagining/worker-briefs/reviews-adoption.md`.
- Approved design spec: `docs/superpowers/specs/2026-06-21-landing-page-reimagining-design.md`.
- Local book identity asset: `public/book-cover-2nd.png`.
- Local university/adoption logo assets: `public/social-proof/logos/asu.png`, `georgia-tech.png`, `kindai.png`, `nyu.png`, `penn-state.png`, `purdue.png`, `texas-am.png`, `university-of-michigan.png`, and `university-of-toronto.png`.
- Local proof portrait assets: `public/social-proof/people/david-duvenaud.jpg`, `john-proakis.jpeg`, `kimiaki-shirahama.png`, and `osvaldo-simeone.jpeg`.
- Current public-site proof/content evidence requested by the brief: the "100+ universities and colleges" adoption claim, university/adoption proof library, professor endorsements, reader reviews, Amazon and Goodreads review context, and purchase/resource context from `https://www.mlrefined.com/`.

## Critique

Candidate 1 is the stronger page-family reference. It feels like an editorial proof archive: the book remains visible, the 100+ university claim is prominent but not shouty, the institution grid has real weight, and professor endorsements and reader reviews are clearly segmented. It also preserves the Visual Learning Lab language through paper surfaces, crisp rules, margin equations, and restrained academic color. Its main caveat is that the generated logo library expands beyond the local asset set with plausible extra institutions, so later implementation should constrain the final logo grid to verified local or public-site proof assets. Candidate 2 is visually energetic and useful as a workbench alternative, with strong ML motifs and clearer adoption-context modules, but it drifts slightly toward dashboard/product UI and invents numeric teaching-context metrics that should not be used without evidence.

## Mobile Behavior

Mobile behavior notes:

- Candidate 1 should stack into a mobile sequence of headline and adoption claim, book/resource context, horizontally scrollable or two-column logo grid, professor endorsements, then reader reviews.
- Candidate 1's side book/context rail should become an inline "Adoption context" section under the page intro rather than remaining a fixed sidebar.
- Candidate 2's left vertical navigation should be dropped on mobile or converted to a compact top tab row; the institution index and endorsement list should become full-width modules.
- For both candidates, logos need fixed-height cells and text excerpts need truncation or expandable detail so quote blocks do not dominate narrow screens.

## Verification Notes

- Failure mode checked: generated files missing or unusable. Evidence: `sips -g pixelWidth -g pixelHeight` reported Candidate 1 at 1672 x 941 and Candidate 2 at 1536 x 1024.
- Failure mode checked: drift into generic SaaS or current-site styling. Evidence: visual inspection confirmed both candidates use the requested paper/editorial academic direction; Candidate 2 has residual dashboard risk noted above.
- Failure mode checked: app code edited accidentally. Evidence before writing this receipt: `git status --short` showed no modified files in the worktree.

Recommended candidate: /Users/neonwatty/.codex/generated_images/019eea5c-6d1e-7400-9ebd-de69077c3cb3/ig_09f8ccafb0b45a8e016a37e91005d08199ab5661081e3331f1.png
