# Image To Reference Report

Target: `mlr-instructor-path`

## Artifacts

- Ideal image: `targets/mlr-instructor-path/source/ig_0df1de113427452a016a37e93b699c819ab46fe912af9c90f2.png`
- Reference screenshot: `.limner/runs/2026-06-21T215811133Z-vmzils/captures/reference.png`
- Side-by-side: `.limner/runs/2026-06-21T215811133Z-vmzils/captures/side-by-side.png`


- Agent comparison prompt: `.limner/runs/2026-06-21T215811133Z-vmzils/agent-comparison/agent-prompt.md`
- Codex comparison prompt: `.limner/runs/2026-06-21T215811133Z-vmzils/agent-comparison/agent-prompt.codex.md`
- Claude comparison prompt: `.limner/runs/2026-06-21T215811133Z-vmzils/agent-comparison/agent-prompt.claude.md`
- Agent comparison schema: `.limner/runs/2026-06-21T215811133Z-vmzils/agent-comparison/agent-response.schema.json`
- Minimal response template: `.limner/runs/2026-06-21T215811133Z-vmzils/agent-comparison/agent-response.minimal.json`
- Agent comparison response store: local SQLite ledger

## Scaffold State

- customized scaffold; 1/6 files match templates



## Capture Readiness

- Expected: not captured.
- Actual: not_applicable; final URL: `http://127.0.0.1:55971/`; requested: none


## Visible Text Inventory

- Expected: Text inventory is unavailable for image-only inputs without OCR.
- Actual: 14 visible text block(s) shown.
  - "MLR MACHINE LEARNING REFINED Overview Book Resources Instructor Path Exercises Community Request sample copy Contact INSTRUCTOR ADOPTION..." <main> @ 0,0 1440x1188
  - "MLR MACHINE LEARNING REFINED Overview Book Resources Instructor Path Exercises Community Request sample copy Contact" <header> @ 0,0 1440x67
  - "Primary navigation" <nav> @ 374,8 704x50
  - "Overview" <a> @ 448,8 63x50
  - "Book" <a> @ 540,8 34x50
  - "Resources" <a> @ 603,8 69x50
  - "Instructor Path" <a> @ 701,8 103x50
  - "Exercises" <a> @ 832,8 63x50
  - "Community" <a> @ 924,8 80x50
  - "Machine Learning Refined home" <a> @ 24,14 330x38
  - "MLR" <span> @ 24,14 38x38
  - "Request sample copy Contact" <div> @ 1098,16 318x34
  - "Request sample copy" <a> @ 1098,16 209x34
  - "MACHINE LEARNING REFINED" <span> @ 74,17 260x33


## Region Evidence

- Expected: no region evidence detected.
- Actual: 5 region hint(s) shown.
  - sidebar (selector, medium) @ 374,8 704x50 text="Overview Book Resources Instructor Path Exercises Community"
  - header (selector, medium) @ 0,0 1440x67 text="MLR MACHINE LEARNING REFINED Overview Book Resources Instructor Path Exercises Community Request sample copy Contact"
  - toolbar (selector, low) @ 1098,16 318x34 text="Request sample copy Contact"
  - main-list (selector, low) @ 36,285 369x99 text="Rigorous modern coverage from fundamentals to deep learning Course-ready resources designed to save setup time Flexib..."
  - repeated-rows (heuristic, low) count=6 @ 36,285 369x34 text="Rigorous modern coverage from fundamentals to deep learning"


## Agent Critique

- Hierarchy:
- Density:
- Typography:
- Color and tokens:
- Component anatomy:
- Intentional deviations:

## Next Fix

- Record the highest-value scoped fix here.




## Agent Comparison

- Status: awaiting agent response.
- Next step: have an agent inspect the comparison prompt, then submit JSON with `limner loop response submit`.
