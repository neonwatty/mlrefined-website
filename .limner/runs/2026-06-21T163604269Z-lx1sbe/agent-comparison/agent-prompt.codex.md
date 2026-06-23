# Limner Agent UX Comparison

Profile: `ideal-to-mockup`
Expected role: ideal image
Actual role: HTML mockup screenshot
Editable surface: mockup

Focus on changes to the HTML/CSS mockup that will make the next screenshot closer to the ideal.

## Image Inputs

- Expected image: `targets/mlr-instructor-path/source/ig_0df1de113427452a016a37e93b699c819ab46fe912af9c90f2.png`
- Actual image: `.limner/runs/2026-06-21T163604269Z-lx1sbe/captures/reference.png`

## Comparison Context

- Capture note: Known local dev overlays were hidden before screenshot capture. See *.capture.json beside screenshots for selectors.

Use these notes to separate intentional fixture, data-shape, or capture-environment differences from true UX drift.


## Capture Readiness

- Expected: not captured.
- Actual: not_applicable; final URL: `http://127.0.0.1:49783/`; requested: none

Use readiness evidence to avoid comparing skeleton, loading, or pre-hydration states.


## Visible Text Inventory

- Expected: Text inventory is unavailable for image-only inputs without OCR.
- Actual: 14 visible text block(s) shown.
  - "MLR MACHINE LEARNING REFINED Overview Book Resources Instructor Path Solutions Community Request sample copy Sign in INSTRUCTOR ADOPTION..." <main> @ 0,0 1440x1376
  - "MLR MACHINE LEARNING REFINED Overview Book Resources Instructor Path Solutions Community Request sample copy Sign in" <header> @ 0,0 1440x80
  - "Primary navigation" <nav> @ 378,10 693x59
  - "Overview" <a> @ 447,10 63x59
  - "Book" <a> @ 539,10 34x59
  - "Resources" <a> @ 602,10 69x59
  - "Instructor Path" <a> @ 699,10 103x59
  - "Solutions" <a> @ 831,10 63x59
  - "Community" <a> @ 923,10 80x59
  - "Machine Learning Refined home" <a> @ 24,21 330x38
  - "MLR" <span> @ 24,21 38x38
  - "MACHINE LEARNING REFINED" <span> @ 74,23 260x33
  - "MACHINE LEARNING" <strong> @ 74,23 260x18
  - "Request sample copy Sign in" <div> @ 1095,23 321x34

Use this DOM-derived text as compact context. Image-only inputs may not have text inventory.


## Region Evidence

- Expected: no region evidence detected.
- Actual: 5 region hint(s) shown.
  - sidebar (selector, medium) @ 378,10 693x59 text="Overview Book Resources Instructor Path Solutions Community"
  - header (selector, medium) @ 0,0 1440x80 text="MLR MACHINE LEARNING REFINED Overview Book Resources Instructor Path Solutions Community Request sample copy Sign in"
  - toolbar (selector, low) @ 1095,23 321x34 text="Request sample copy Sign in"
  - main-list (selector, low) @ 36,334 362x108 text="Rigorous modern coverage from fundamentals to deep learning Course-ready resources designed to save setup time Flexib..."
  - repeated-rows (heuristic, low) count=6 @ 36,334 362x36 text="Rigorous modern coverage from fundamentals to deep learning"

Regions are compact DOM hints with source/confidence labels, not proof of semantic intent.


## Input Fingerprint

Copy these values exactly into `inputFingerprint`. Limner uses them to reject stale responses after screenshots or structure files change.

- `expectedImageSha256`: `029679e725ba6bbede88b6dbf1cc896f42949cda8b9ab5d8b0c8b1adcb690aff`
- `actualImageSha256`: `a7a68b38bd03b68d4bff11eddab3bc0beedc70546a592189c36049f272c5f4f9`


Inspect the expected and actual images separately before using side-by-side context.
Focus on the next implementation iteration, not exhaustive critique.
Name only high-signal UX diffs: layout, hierarchy, typography, color, spacing, structure, component anatomy, copy/state, and attention flow.

Use this JSON schema:

- `.limner/runs/2026-06-21T163604269Z-lx1sbe/agent-comparison/agent-response.schema.json`

Minimal valid response template:

- `.limner/runs/2026-06-21T163604269Z-lx1sbe/agent-comparison/agent-response.minimal.json`

Submit valid JSON through Limner's local SQLite ledger:

- `limner loop response submit --trajectory traj_81224d1d0bec1a4f --from-run 2026-06-21T163604269Z-lx1sbe --file <response.json>`

Rules:

- Scores are 0..1 estimates, not pass/fail judgments.
- Do not invent diffs when the artifacts match; empty `majorDiffAreas` and empty next steps are valid.
- Every diff must include evidence, impact, and a recommended change for the editable surface.
- Use `systemFeedback` only for issues with Limner inputs, missing context, or prompt/tooling quality.

## Codex Instructions

Read the local files directly. Produce JSON matching the schema, then submit it with the Limner command above.
