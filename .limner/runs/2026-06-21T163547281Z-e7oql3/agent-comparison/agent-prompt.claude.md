# Limner Agent UX Comparison

Profile: `ideal-to-mockup`
Expected role: ideal image
Actual role: HTML mockup screenshot
Editable surface: mockup

Focus on changes to the HTML/CSS mockup that will make the next screenshot closer to the ideal.

## Image Inputs

- Expected image: `targets/mlr-homepage-visual-lab/source/ig_0df464ee8e4366cc016a37e95159208198bfe02a469e9a919d.png`
- Actual image: `.limner/runs/2026-06-21T163547281Z-e7oql3/captures/reference.png`

## Comparison Context

- Capture note: Known local dev overlays were hidden before screenshot capture. See *.capture.json beside screenshots for selectors.

Use these notes to separate intentional fixture, data-shape, or capture-environment differences from true UX drift.


## Capture Readiness

- Expected: not captured.
- Actual: not_applicable; final URL: `http://127.0.0.1:49751/`; requested: none

Use readiness evidence to avoid comparing skeleton, loading, or pre-hydration states.


## Visible Text Inventory

- Expected: Text inventory is unavailable for image-only inputs without OCR.
- Actual: 14 visible text block(s) shown.
  - "MACHINE LEARNING REFINED Foundations, Algorithms, and Applications Visual Gallery Chapters & Resources For Instructors Reviews & Adoption..." <main> @ 0,0 1440x1096
  - "MACHINE LEARNING REFINED Foundations, Algorithms, and Applications Visual Gallery Chapters & Resources For Instructors Reviews & Adoption..." <header> @ 0,0 1440x70
  - "GitHub" <a> @ 1192,14 48x42
  - "Get the book" <a> @ 1264,14 148x42
  - "Machine Learning Refined home" <a> @ 28,16 360x38
  - "MACHINE LEARNING REFINED Foundations, Algorithms, and Applications" <span> @ 82,16 306x38
  - "MACHINE LEARNING REFINED" <strong> @ 82,16 306x20
  - "Primary" <nav> @ 462,26 655x17
  - "Visual Gallery" <a> @ 462,26 97x17
  - "Chapters & Resources" <a> @ 588,26 157x17
  - "For Instructors" <a> @ 773,26 105x17
  - "Reviews & Adoption" <a> @ 906,26 140x17
  - "About" <a> @ 1075,26 43x17
  - "Foundations, Algorithms, and Applications" <em> @ 82,38 306x16

Use this DOM-derived text as compact context. Image-only inputs may not have text inventory.


## Region Evidence

- Expected: no region evidence detected.
- Actual: 3 region hint(s) shown.
  - sidebar (selector, medium) @ 462,26 655x17 text="Visual Gallery Chapters & Resources For Instructors Reviews & Adoption About"
  - header (selector, medium) @ 0,0 1440x70 text="MACHINE LEARNING REFINED Foundations, Algorithms, and Applications Visual Gallery Chapters & Resources For Instructor..."
  - main-list (selector, low) @ 678,153 727x44 text="Intuition Visualization Derivation Python"

Regions are compact DOM hints with source/confidence labels, not proof of semantic intent.


## Input Fingerprint

Copy these values exactly into `inputFingerprint`. Limner uses them to reject stale responses after screenshots or structure files change.

- `expectedImageSha256`: `070703a955e9c5d508e0f048670c10019bf8cb4a79f656f47ed6970856f0b36d`
- `actualImageSha256`: `8080de51db42df6da5d5b7b8032b26ca18083c6810a07b384637bcecbf195ea1`


Inspect the expected and actual images separately before using side-by-side context.
Focus on the next implementation iteration, not exhaustive critique.
Name only high-signal UX diffs: layout, hierarchy, typography, color, spacing, structure, component anatomy, copy/state, and attention flow.

Use this JSON schema:

- `.limner/runs/2026-06-21T163547281Z-e7oql3/agent-comparison/agent-response.schema.json`

Minimal valid response template:

- `.limner/runs/2026-06-21T163547281Z-e7oql3/agent-comparison/agent-response.minimal.json`

Submit valid JSON through Limner's local SQLite ledger:

- `limner loop response submit --trajectory traj_fcc1f7b39a213a3e --from-run 2026-06-21T163547281Z-e7oql3 --file <response.json>`

Rules:

- Scores are 0..1 estimates, not pass/fail judgments.
- Do not invent diffs when the artifacts match; empty `majorDiffAreas` and empty next steps are valid.
- Every diff must include evidence, impact, and a recommended change for the editable surface.
- Use `systemFeedback` only for issues with Limner inputs, missing context, or prompt/tooling quality.

## Claude Instructions

Attach the referenced images, inspect them separately, and return JSON matching the schema. Submit that JSON with the Limner command above.
