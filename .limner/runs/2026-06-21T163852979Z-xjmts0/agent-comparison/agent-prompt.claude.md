# Limner Agent UX Comparison

Profile: `ideal-to-mockup`
Expected role: ideal image
Actual role: HTML mockup screenshot
Editable surface: mockup

Focus on changes to the HTML/CSS mockup that will make the next screenshot closer to the ideal.

## Image Inputs

- Expected image: `targets/mlr-resource-discovery/source/ig_0553e087e3834b88016a37e933bce48199a43e57b316216b4a.png`
- Actual image: `.limner/runs/2026-06-21T163852979Z-xjmts0/captures/reference.png`

## Comparison Context

- Capture note: Known local dev overlays were hidden before screenshot capture. See *.capture.json beside screenshots for selectors.

Use these notes to separate intentional fixture, data-shape, or capture-environment differences from true UX drift.


## Capture Readiness

- Expected: not captured.
- Actual: not_applicable; final URL: `http://127.0.0.1:50049/`; requested: none

Use readiness evidence to avoid comparing skeleton, loading, or pre-hydration states.


## Visible Text Inventory

- Expected: Text inventory is unavailable for image-only inputs without OCR.
- Actual: 14 visible text block(s) shown.
  - "MLR Machine Learning Refined Chapters & Resources Roadmap Study Guides Community About Search chapters, topics, resources Cmd K Machine L..." <main> @ 0,0 1440x1514
  - "Primary" <header> @ 0,0 1440x55
  - "Machine Learning Refined home" <a> @ 18,10 300x34
  - "MLR" <span> @ 18,10 34x34
  - "Site sections" <nav> @ 338,11 684x33
  - "Chapters & Resources" <a> @ 395,11 158x33
  - "Roadmap" <a> @ 583,11 69x33
  - "Study Guides" <a> @ 682,11 95x33
  - "Community" <a> @ 807,11 85x33
  - "About" <a> @ 922,11 44x33
  - "Search chapters, topics, resources Cmd K" <form> @ 1042,11 380x33
  - "Machine Learning Refined" <span> @ 62,17 246x21
  - "Cmd K" <kbd> @ 1362,18 51x19
  - "Machine Learning Refined by Michael Watty LEARNING GOAL ID Independent Learner IN Instructor PR Practitioner Refresh FILTER CHAPTERS All..." <div> @ 0,55 1440x1459

Use this DOM-derived text as compact context. Image-only inputs may not have text inventory.


## Region Evidence

- Expected: no region evidence detected.
- Actual: 4 region hint(s) shown.
  - sidebar (selector, medium) @ 338,11 684x33 text="Chapters & Resources Roadmap Study Guides Community About"
  - header (selector, medium) @ 0,0 1440x55 text="MLR Machine Learning Refined Chapters & Resources Roadmap Study Guides Community About Search chapters, topics, resou..."
  - main-list (selector, low) @ 33,427 224x130 text="ID Independent Learner IN Instructor PR Practitioner Refresh"
  - repeated-rows (heuristic, medium) count=13 @ 294,335 820x32 text="CHAPTER DESCRIPTION RESOURCES"

Regions are compact DOM hints with source/confidence labels, not proof of semantic intent.


## Input Fingerprint

Copy these values exactly into `inputFingerprint`. Limner uses them to reject stale responses after screenshots or structure files change.

- `expectedImageSha256`: `c9f139b889ea7b56cc181a2d12beec673abc6700ca5d76fa53d79579c74c97fa`
- `actualImageSha256`: `8f9c977cc157c7eb14a2c7950f452944d2f9cf34e6252192233da345494101d8`


Inspect the expected and actual images separately before using side-by-side context.
Focus on the next implementation iteration, not exhaustive critique.
Name only high-signal UX diffs: layout, hierarchy, typography, color, spacing, structure, component anatomy, copy/state, and attention flow.

Use this JSON schema:

- `.limner/runs/2026-06-21T163852979Z-xjmts0/agent-comparison/agent-response.schema.json`

Minimal valid response template:

- `.limner/runs/2026-06-21T163852979Z-xjmts0/agent-comparison/agent-response.minimal.json`

Submit valid JSON through Limner's local SQLite ledger:

- `limner loop response submit --trajectory traj_28d6039a71a6b223 --from-run 2026-06-21T163852979Z-xjmts0 --file <response.json>`

Rules:

- Scores are 0..1 estimates, not pass/fail judgments.
- Do not invent diffs when the artifacts match; empty `majorDiffAreas` and empty next steps are valid.
- Every diff must include evidence, impact, and a recommended change for the editable surface.
- Use `systemFeedback` only for issues with Limner inputs, missing context, or prompt/tooling quality.

## Claude Instructions

Attach the referenced images, inspect them separately, and return JSON matching the schema. Submit that JSON with the Limner command above.
