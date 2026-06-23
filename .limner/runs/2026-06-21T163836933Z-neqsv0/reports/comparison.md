# Image To Reference Report

Target: `mlr-visual-gallery`

## Artifacts

- Ideal image: `targets/mlr-visual-gallery/source/ig_09deac95aeabce3a016a37e9913230819b9a148e19b149a1d2.png`
- Reference screenshot: `.limner/runs/2026-06-21T163836933Z-neqsv0/captures/reference.png`
- Side-by-side: `.limner/runs/2026-06-21T163836933Z-neqsv0/captures/side-by-side.png`


- Agent comparison prompt: `.limner/runs/2026-06-21T163836933Z-neqsv0/agent-comparison/agent-prompt.md`
- Codex comparison prompt: `.limner/runs/2026-06-21T163836933Z-neqsv0/agent-comparison/agent-prompt.codex.md`
- Claude comparison prompt: `.limner/runs/2026-06-21T163836933Z-neqsv0/agent-comparison/agent-prompt.claude.md`
- Agent comparison schema: `.limner/runs/2026-06-21T163836933Z-neqsv0/agent-comparison/agent-response.schema.json`
- Minimal response template: `.limner/runs/2026-06-21T163836933Z-neqsv0/agent-comparison/agent-response.minimal.json`
- Agent comparison response store: local SQLite ledger

## Scaffold State

- customized scaffold; 1/6 files match templates



## Capture Readiness

- Expected: not captured.
- Actual: not_applicable; final URL: `http://127.0.0.1:50007/`; requested: none


## Visible Text Inventory

- Expected: Text inventory is unavailable for image-only inputs without OCR.
- Actual: 14 visible text block(s) shown.
  - "Machine Learning Refined VISUAL LEARNING LAB Chapters Visual Gallery Notebooks Exercises GitHub Open resources INTERACTIVE COMPANIONS TO..." <main> @ 0,0 1440x1637
  - "Machine Learning Refined VISUAL LEARNING LAB Chapters Visual Gallery Notebooks Exercises GitHub Open resources" <header> @ 26,18 1388x86
  - "Machine Learning Refined repository" <a> @ 41,29 476x64
  - "Machine Learning Refined VISUAL LEARNING LAB" <span> @ 101,41 416x40
  - "Machine Learning Refined" <strong> @ 101,41 416x22
  - "Open resources" <a> @ 1253,41 146x41
  - "Primary" <nav> @ 539,43 692x37
  - "Chapters" <a> @ 646,43 85x37
  - "Visual Gallery" <a> @ 737,43 114x37
  - "Notebooks" <a> @ 857,43 96x37
  - "Exercises" <a> @ 960,43 87x37
  - "GitHub" <a> @ 1053,43 71x37
  - "VISUAL LEARNING LAB" <small> @ 101,68 416x13
  - "INTERACTIVE COMPANIONS TO THE BOOK Visual Gallery See, derive, and implement machine learning ideas through the book's optimization, clas..." <section> @ 26,104 1388x205


## Region Evidence

- Expected: no region evidence detected.
- Actual: 3 region hint(s) shown.
  - sidebar (selector, medium) @ 539,43 692x37 text="Chapters Visual Gallery Notebooks Exercises GitHub"
  - header (selector, medium) @ 26,18 1388x86 text="Machine Learning Refined VISUAL LEARNING LAB Chapters Visual Gallery Notebooks Exercises GitHub Open resources"
  - repeated-rows (heuristic, low) count=3 @ 1075,443 318x87 text="Ch. 2-4 Optimization foundations Zero-, first-, and second-order methods."


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
