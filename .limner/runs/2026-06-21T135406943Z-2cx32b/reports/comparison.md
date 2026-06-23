# Image To Reference Report

Target: `mlr-visual-gallery`

## Artifacts

- Ideal image: `targets/mlr-visual-gallery/source/ig_09deac95aeabce3a016a37e9913230819b9a148e19b149a1d2.png`
- Reference screenshot: `.limner/runs/2026-06-21T135406943Z-2cx32b/captures/reference.png`
- Side-by-side: `.limner/runs/2026-06-21T135406943Z-2cx32b/captures/side-by-side.png`


- Agent comparison prompt: `.limner/runs/2026-06-21T135406943Z-2cx32b/agent-comparison/agent-prompt.md`
- Codex comparison prompt: `.limner/runs/2026-06-21T135406943Z-2cx32b/agent-comparison/agent-prompt.codex.md`
- Claude comparison prompt: `.limner/runs/2026-06-21T135406943Z-2cx32b/agent-comparison/agent-prompt.claude.md`
- Agent comparison schema: `.limner/runs/2026-06-21T135406943Z-2cx32b/agent-comparison/agent-response.schema.json`
- Minimal response template: `.limner/runs/2026-06-21T135406943Z-2cx32b/agent-comparison/agent-response.minimal.json`
- Agent comparison response store: local SQLite ledger

## Scaffold State

- untouched template scaffold; 6/6 files match templates



## Capture Readiness

- Expected: not captured.
- Actual: not_applicable; final URL: `http://127.0.0.1:58750/`; requested: none


## Visible Text Inventory

- Expected: Text inventory is unavailable for image-only inputs without OCR.
- Actual: 5 visible text block(s) shown.
  - "LIMNER REFERENCE Recreate the input image here Replace this scaffold with faithful HTML and CSS. Add data-limner-region attributes to reg..." <section> @ 340,360 760x179
  - "LIMNER REFERENCE" <p> @ 369,389 702x19
  - "Recreate the input image here" <h1> @ 369,416 702x35
  - "Replace this scaffold with faithful HTML and CSS. Add data-limner-region attributes to regions that should be compared against app select..." <p> @ 369,461 702x50
  - "data-limner-region" <code> @ 765,467 140x15


## Region Evidence

- Expected: no region evidence detected.
- Actual: no region evidence detected.


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
