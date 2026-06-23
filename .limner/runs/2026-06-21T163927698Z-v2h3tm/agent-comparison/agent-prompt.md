# Limner Agent UX Comparison

Profile: `ideal-to-mockup`
Expected role: ideal image
Actual role: HTML mockup screenshot
Editable surface: mockup

Focus on changes to the HTML/CSS mockup that will make the next screenshot closer to the ideal.

## Image Inputs

- Expected image: `targets/mlr-reviews-adoption/source/ig_09f8ccafb0b45a8e016a37e91005d08199ab5661081e3331f1.png`
- Actual image: `.limner/runs/2026-06-21T163927698Z-v2h3tm/captures/reference.png`

## Comparison Context

- Capture note: Known local dev overlays were hidden before screenshot capture. See *.capture.json beside screenshots for selectors.

Use these notes to separate intentional fixture, data-shape, or capture-environment differences from true UX drift.


## Capture Readiness

- Expected: not captured.
- Actual: not_applicable; final URL: `http://127.0.0.1:50093/`; requested: none

Use readiness evidence to avoid comparing skeleton, loading, or pre-hydration states.


## Visible Text Inventory

- Expected: Text inventory is unavailable for image-only inputs without OCR.
- Actual: 14 visible text block(s) shown.
  - "E[x] = mu Var(x) = sigma² ML Machine Learning Refined THE BOOK VISUAL LEARNING LAB RESOURCES PROOFS LIBRARY REVIEWS & ADOPTION ABOUT ADOP..." <main> @ 0,0 1440x1008
  - "E[x] = mu Var(x) = sigma²" <aside> @ 0,0 44x1008
  - "Reviews and adoption reference page" <section> @ 44,0 1354x1008
  - "Primary" <nav> @ 45,0 1352x64
  - "Foundations Models Algorithms Improvements Appendices" <aside> @ 1398,0 42x1008
  - "Page links" <div> @ 656,1 651x61
  - "THE BOOK" <a> @ 656,1 57x61
  - "VISUAL LEARNING LAB" <a> @ 741,1 126x61
  - "RESOURCES" <a> @ 895,1 68x61
  - "PROOFS LIBRARY" <a> @ 991,1 97x61
  - "REVIEWS & ADOPTION" <a> @ 1116,1 124x61
  - "ABOUT" <a> @ 1268,1 39x61
  - "Machine Learning Refined home" <a> @ 73,15 559x34
  - "ML" <span> @ 73,15 34x34

Use this DOM-derived text as compact context. Image-only inputs may not have text inventory.


## Region Evidence

- Expected: no region evidence detected.
- Actual: 3 region hint(s) shown.
  - sidebar (selector, medium) @ 0,0 44x1008 text="E[x] = mu Var(x) = sigma²"
  - header (selector, medium) @ 341,102 1016x184 text="Reviews & Adoption Used as a reference text at 100+ universities and colleges L(theta) = sum log p(y | x, theta)"
  - repeated-rows (heuristic, low) count=3 @ 976,608 381x106 text="a Amazon ★★★★★ Reader-review channel referenced by the current proof library."

Regions are compact DOM hints with source/confidence labels, not proof of semantic intent.


## Input Fingerprint

Copy these values exactly into `inputFingerprint`. Limner uses them to reject stale responses after screenshots or structure files change.

- `expectedImageSha256`: `8fb0fe16e42c5dcb2b3184fd7468097cc08bd1ac4a846e20e66887253962dcd9`
- `actualImageSha256`: `ff4c1ffd14947929552953e715b0b7f821c249d82a8f8d524d2d34b5d8fbce18`


Inspect the expected and actual images separately before using side-by-side context.
Focus on the next implementation iteration, not exhaustive critique.
Name only high-signal UX diffs: layout, hierarchy, typography, color, spacing, structure, component anatomy, copy/state, and attention flow.

Use this JSON schema:

- `.limner/runs/2026-06-21T163927698Z-v2h3tm/agent-comparison/agent-response.schema.json`

Minimal valid response template:

- `.limner/runs/2026-06-21T163927698Z-v2h3tm/agent-comparison/agent-response.minimal.json`

Submit valid JSON through Limner's local SQLite ledger:

- `limner loop response submit --trajectory traj_104d71d1e4351794 --from-run 2026-06-21T163927698Z-v2h3tm --file <response.json>`

Rules:

- Scores are 0..1 estimates, not pass/fail judgments.
- Do not invent diffs when the artifacts match; empty `majorDiffAreas` and empty next steps are valid.
- Every diff must include evidence, impact, and a recommended change for the editable surface.
- Use `systemFeedback` only for issues with Limner inputs, missing context, or prompt/tooling quality.
