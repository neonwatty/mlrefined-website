# Limner Agent UX Comparison

Profile: `ideal-to-mockup`
Expected role: ideal image
Actual role: HTML mockup screenshot
Editable surface: mockup

Focus on changes to the HTML/CSS mockup that will make the next screenshot closer to the ideal.

## Image Inputs

- Expected image: `targets/mlr-visual-gallery/source/ig_09deac95aeabce3a016a37e9913230819b9a148e19b149a1d2.png`
- Actual image: `.limner/runs/2026-06-21T215759397Z-f15zym/captures/reference.png`

## Comparison Context

- Capture note: Known local dev overlays were hidden before screenshot capture. See *.capture.json beside screenshots for selectors.

Use these notes to separate intentional fixture, data-shape, or capture-environment differences from true UX drift.


## Capture Readiness

- Expected: not captured.
- Actual: not_applicable; final URL: `http://127.0.0.1:55944/`; requested: none

Use readiness evidence to avoid comparing skeleton, loading, or pre-hydration states.


## Visible Text Inventory

- Expected: Text inventory is unavailable for image-only inputs without OCR.
- Actual: 14 visible text block(s) shown.
  - "Machine Learning Refined VISUAL LEARNING LAB Chapters Visual Gallery Notebooks Exercises GitHub Open resources INTERACTIVE COMPANIONS TO..." <main> @ 0,0 1440x1480
  - "Machine Learning Refined VISUAL LEARNING LAB Chapters Visual Gallery Notebooks Exercises GitHub Open resources" <header> @ 26,14 1388x82
  - "Machine Learning Refined repository" <a> @ 41,23 476x64
  - "Machine Learning Refined VISUAL LEARNING LAB" <span> @ 101,35 416x40
  - "Machine Learning Refined" <strong> @ 101,35 416x22
  - "Open resources" <a> @ 1253,35 146x41
  - "Primary" <nav> @ 539,37 692x37
  - "Chapters" <a> @ 646,37 85x37
  - "Visual Gallery" <a> @ 737,37 114x37
  - "Notebooks" <a> @ 857,37 96x37
  - "Exercises" <a> @ 960,37 87x37
  - "GitHub" <a> @ 1053,37 71x37
  - "VISUAL LEARNING LAB" <small> @ 101,62 416x13
  - "INTERACTIVE COMPANIONS TO THE BOOK Visual Gallery See, derive, and implement machine learning ideas through the book's optimization, clas..." <section> @ 26,96 1388x150

Use this DOM-derived text as compact context. Image-only inputs may not have text inventory.


## Region Evidence

- Expected: no region evidence detected.
- Actual: 3 region hint(s) shown.
  - sidebar (selector, medium) @ 539,37 692x37 text="Chapters Visual Gallery Notebooks Exercises GitHub"
  - header (selector, medium) @ 26,14 1388x82 text="Machine Learning Refined VISUAL LEARNING LAB Chapters Visual Gallery Notebooks Exercises GitHub Open resources"
  - repeated-rows (heuristic, low) count=3 @ 1069,362 330x77 text="Ch. 2-4 Optimization foundations Zero-, first-, and second-order methods."

Regions are compact DOM hints with source/confidence labels, not proof of semantic intent.


## Input Fingerprint

Copy these values exactly into `inputFingerprint`. Limner uses them to reject stale responses after screenshots or structure files change.

- `expectedImageSha256`: `6718474f96e3135d3c06424c15bb494c3cb95ba16b48f5995507cee9c643fad8`
- `actualImageSha256`: `d8eb371e76a7cee65deed1b91f8c0898f2346b3c65b69d5586e12092adfb573f`


Inspect the expected and actual images separately before using side-by-side context.
Focus on the next implementation iteration, not exhaustive critique.
Name only high-signal UX diffs: layout, hierarchy, typography, color, spacing, structure, component anatomy, copy/state, and attention flow.

Use this JSON schema:

- `.limner/runs/2026-06-21T215759397Z-f15zym/agent-comparison/agent-response.schema.json`

Minimal valid response template:

- `.limner/runs/2026-06-21T215759397Z-f15zym/agent-comparison/agent-response.minimal.json`

Submit valid JSON through Limner's local SQLite ledger:

- `limner loop response submit --trajectory traj_8a3e81be4482dbc4 --from-run 2026-06-21T215759397Z-f15zym --file <response.json>`

Rules:

- Scores are 0..1 estimates, not pass/fail judgments.
- Do not invent diffs when the artifacts match; empty `majorDiffAreas` and empty next steps are valid.
- Every diff must include evidence, impact, and a recommended change for the editable surface.
- Use `systemFeedback` only for issues with Limner inputs, missing context, or prompt/tooling quality.

## Codex Instructions

Read the local files directly. Produce JSON matching the schema, then submit it with the Limner command above.
