# Limner Agent UX Comparison

Profile: `ideal-to-mockup`
Expected role: ideal image
Actual role: HTML mockup screenshot
Editable surface: mockup

Focus on changes to the HTML/CSS mockup that will make the next screenshot closer to the ideal.

## Image Inputs

- Expected image: `targets/mlr-instructor-path/source/ig_0df1de113427452a016a37e93b699c819ab46fe912af9c90f2.png`
- Actual image: `.limner/runs/2026-06-21T140036607Z-0ypst8/captures/reference.png`

## Comparison Context

- Capture note: Known local dev overlays were hidden before screenshot capture. See *.capture.json beside screenshots for selectors.

Use these notes to separate intentional fixture, data-shape, or capture-environment differences from true UX drift.


## Capture Readiness

- Expected: not captured.
- Actual: not_applicable; final URL: `http://127.0.0.1:59110/`; requested: none

Use readiness evidence to avoid comparing skeleton, loading, or pre-hydration states.


## Visible Text Inventory

- Expected: Text inventory is unavailable for image-only inputs without OCR.
- Actual: 5 visible text block(s) shown.
  - "MACHINE LEARNING REFINED Instructor Path Course planning workbench, roadmap selector, teaching resources, and adoption support" <header> @ 18,18 1404x92
  - "MACHINE LEARNING REFINED" <p> @ 35,31 226x66
  - "Instructor Path" <h1> @ 285,31 1120x40
  - "Course planning workbench, roadmap selector, teaching resources, and adoption support" <p> @ 285,75 1120x22
  - "Selected generated reference image" <section> @ 18,124 1404x791

Use this DOM-derived text as compact context. Image-only inputs may not have text inventory.


## Region Evidence

- Expected: no region evidence detected.
- Actual: 1 region hint(s) shown.
  - header (selector, medium) @ 18,18 1404x92 text="MACHINE LEARNING REFINED Instructor Path Course planning workbench, roadmap selector, teaching resources, and adoptio..."

Regions are compact DOM hints with source/confidence labels, not proof of semantic intent.


## Input Fingerprint

Copy these values exactly into `inputFingerprint`. Limner uses them to reject stale responses after screenshots or structure files change.

- `expectedImageSha256`: `029679e725ba6bbede88b6dbf1cc896f42949cda8b9ab5d8b0c8b1adcb690aff`
- `actualImageSha256`: `416e87eac6b503e2fc6d5fcc7facfa0f5f597600dcdfe1c12222a9074f5d8b3a`


Inspect the expected and actual images separately before using side-by-side context.
Focus on the next implementation iteration, not exhaustive critique.
Name only high-signal UX diffs: layout, hierarchy, typography, color, spacing, structure, component anatomy, copy/state, and attention flow.

Use this JSON schema:

- `.limner/runs/2026-06-21T140036607Z-0ypst8/agent-comparison/agent-response.schema.json`

Minimal valid response template:

- `.limner/runs/2026-06-21T140036607Z-0ypst8/agent-comparison/agent-response.minimal.json`

Submit valid JSON through Limner's local SQLite ledger:

- `limner loop response submit --trajectory traj_81224d1d0bec1a4f --from-run 2026-06-21T140036607Z-0ypst8 --file <response.json>`

Rules:

- Scores are 0..1 estimates, not pass/fail judgments.
- Do not invent diffs when the artifacts match; empty `majorDiffAreas` and empty next steps are valid.
- Every diff must include evidence, impact, and a recommended change for the editable surface.
- Use `systemFeedback` only for issues with Limner inputs, missing context, or prompt/tooling quality.

## Claude Instructions

Attach the referenced images, inspect them separately, and return JSON matching the schema. Submit that JSON with the Limner command above.
