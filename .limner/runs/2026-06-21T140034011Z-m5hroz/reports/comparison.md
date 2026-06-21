# Image To Reference Report

Target: `mlr-visual-gallery`

## Artifacts

- Ideal image: `targets/mlr-visual-gallery/source/ig_09deac95aeabce3a016a37e9913230819b9a148e19b149a1d2.png`
- Reference screenshot: `.limner/runs/2026-06-21T140034011Z-m5hroz/captures/reference.png`
- Side-by-side: `.limner/runs/2026-06-21T140034011Z-m5hroz/captures/side-by-side.png`


- Agent comparison prompt: `.limner/runs/2026-06-21T140034011Z-m5hroz/agent-comparison/agent-prompt.md`
- Codex comparison prompt: `.limner/runs/2026-06-21T140034011Z-m5hroz/agent-comparison/agent-prompt.codex.md`
- Claude comparison prompt: `.limner/runs/2026-06-21T140034011Z-m5hroz/agent-comparison/agent-prompt.claude.md`
- Agent comparison schema: `.limner/runs/2026-06-21T140034011Z-m5hroz/agent-comparison/agent-response.schema.json`
- Minimal response template: `.limner/runs/2026-06-21T140034011Z-m5hroz/agent-comparison/agent-response.minimal.json`
- Agent comparison response store: local SQLite ledger

## Scaffold State

- customized scaffold; 3/6 files match templates



## Capture Readiness

- Expected: not captured.
- Actual: not_applicable; final URL: `http://127.0.0.1:59098/`; requested: none


## Visible Text Inventory

- Expected: Text inventory is unavailable for image-only inputs without OCR.
- Actual: 5 visible text block(s) shown.
  - "MACHINE LEARNING REFINED Visual Gallery Featured optimization workbench, learning path, filters, and widget cards" <header> @ 18,18 1404x92
  - "MACHINE LEARNING REFINED" <p> @ 35,31 226x66
  - "Visual Gallery" <h1> @ 285,31 1120x40
  - "Featured optimization workbench, learning path, filters, and widget cards" <p> @ 285,75 1120x22
  - "Selected generated reference image" <section> @ 18,124 1404x791


## Region Evidence

- Expected: no region evidence detected.
- Actual: 1 region hint(s) shown.
  - header (selector, medium) @ 18,18 1404x92 text="MACHINE LEARNING REFINED Visual Gallery Featured optimization workbench, learning path, filters, and widget cards"


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
