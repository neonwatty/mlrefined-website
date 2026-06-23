# Limner Agent UX Comparison

Profile: `ideal-to-mockup`
Expected role: ideal image
Actual role: HTML mockup screenshot
Editable surface: mockup

Focus on changes to the HTML/CSS mockup that will make the next screenshot closer to the ideal.

## Image Inputs

- Expected image: `targets/mlr-homepage-visual-lab/source/ig_0df464ee8e4366cc016a37e95159208198bfe02a469e9a919d.png`
- Actual image: `.limner/runs/2026-06-21T135405857Z-tyg0ri/captures/reference.png`

## Comparison Context

- Capture note: Known local dev overlays were hidden before screenshot capture. See *.capture.json beside screenshots for selectors.

Use these notes to separate intentional fixture, data-shape, or capture-environment differences from true UX drift.


## Capture Readiness

- Expected: not captured.
- Actual: not_applicable; final URL: `http://127.0.0.1:58748/`; requested: none

Use readiness evidence to avoid comparing skeleton, loading, or pre-hydration states.


## Visible Text Inventory

- Expected: Text inventory is unavailable for image-only inputs without OCR.
- Actual: 5 visible text block(s) shown.
  - "LIMNER REFERENCE Recreate the input image here Replace this scaffold with faithful HTML and CSS. Add data-limner-region attributes to reg..." <section> @ 340,360 760x179
  - "LIMNER REFERENCE" <p> @ 369,389 702x19
  - "Recreate the input image here" <h1> @ 369,416 702x35
  - "Replace this scaffold with faithful HTML and CSS. Add data-limner-region attributes to regions that should be compared against app select..." <p> @ 369,461 702x50
  - "data-limner-region" <code> @ 765,467 140x15

Use this DOM-derived text as compact context. Image-only inputs may not have text inventory.


## Region Evidence

- Expected: no region evidence detected.
- Actual: no region evidence detected.

Regions are compact DOM hints with source/confidence labels, not proof of semantic intent.


## Input Fingerprint

Copy these values exactly into `inputFingerprint`. Limner uses them to reject stale responses after screenshots or structure files change.

- `expectedImageSha256`: `070703a955e9c5d508e0f048670c10019bf8cb4a79f656f47ed6970856f0b36d`
- `actualImageSha256`: `539898d651b3916f408718d5a5ba497f163e15f23c482e0ff66e77c00d353c01`


Inspect the expected and actual images separately before using side-by-side context.
Focus on the next implementation iteration, not exhaustive critique.
Name only high-signal UX diffs: layout, hierarchy, typography, color, spacing, structure, component anatomy, copy/state, and attention flow.

Use this JSON schema:

- `.limner/runs/2026-06-21T135405857Z-tyg0ri/agent-comparison/agent-response.schema.json`

Minimal valid response template:

- `.limner/runs/2026-06-21T135405857Z-tyg0ri/agent-comparison/agent-response.minimal.json`

Submit valid JSON through Limner's local SQLite ledger:

- `limner loop response submit --trajectory traj_fcc1f7b39a213a3e --from-run 2026-06-21T135405857Z-tyg0ri --file <response.json>`

Rules:

- Scores are 0..1 estimates, not pass/fail judgments.
- Do not invent diffs when the artifacts match; empty `majorDiffAreas` and empty next steps are valid.
- Every diff must include evidence, impact, and a recommended change for the editable surface.
- Use `systemFeedback` only for issues with Limner inputs, missing context, or prompt/tooling quality.

## Codex Instructions

Read the local files directly. Produce JSON matching the schema, then submit it with the Limner command above.
