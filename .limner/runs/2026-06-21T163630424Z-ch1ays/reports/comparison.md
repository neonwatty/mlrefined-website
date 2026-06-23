# Agent Comparison Report

Profile: `ideal-to-mockup`
Comparison mode: `image-mockup`

## Status

- Status: validated.
- Freshness: fresh.
- Image score: 0.46
- Top fix: Fix local asset loading for the rebuilt editable reference.

## Scaffold State

- customized scaffold; 1/6 files match templates

## Inputs

- Expected image: `targets/mlr-reviews-adoption/source/ig_09f8ccafb0b45a8e016a37e91005d08199ab5661081e3331f1.png`
- Actual image: `.limner/runs/2026-06-21T163630424Z-ch1ays/captures/reference.png`

## Capture Readiness

- Expected: not captured.
- Actual: not_applicable; final URL: `http://127.0.0.1:49820/`; requested: none

## Visible Text Inventory

- Expected: Text inventory is unavailable for image-only inputs without OCR.
- Actual: 14 visible text block(s) shown.
  - "E[x] = mu Var(x) = sigma² ML Machine Learning Refined THE BOOK VISUAL LEARNING LAB RESOURCES PROOFS LIBRARY REVIEWS & ADOPTION ABOUT ADOP..." <main> @ 0,0 1440x1001
  - "E[x] = mu Var(x) = sigma²" <aside> @ 0,0 44x1001
  - "Reviews and adoption reference page" <section> @ 44,0 1354x1001
  - "Primary" <nav> @ 45,0 1352x64
  - "Foundations Models Algorithms Improvements Appendices" <aside> @ 1398,0 42x1001
  - "Page links" <div> @ 656,1 651x61
  - "THE BOOK" <a> @ 656,1 57x61
  - "VISUAL LEARNING LAB" <a> @ 741,1 126x61
  - "RESOURCES" <a> @ 895,1 68x61
  - "PROOFS LIBRARY" <a> @ 991,1 97x61
  - "REVIEWS & ADOPTION" <a> @ 1116,1 124x61
  - "ABOUT" <a> @ 1268,1 39x61
  - "Machine Learning Refined home" <a> @ 73,15 559x34
  - "ML" <span> @ 73,15 34x34

## Region Evidence

- Expected: no region evidence detected.
- Actual: 3 region hint(s) shown.
  - sidebar (selector, medium) @ 0,0 44x1001 text="E[x] = mu Var(x) = sigma²"
  - header (selector, medium) @ 341,102 1016x184 text="Reviews & Adoption Used as a reference text at 100+ universities and colleges L(theta) = sum log p(y | x, theta)"
  - repeated-rows (heuristic, low) count=3 @ 976,601 381x106 text="a Amazon ★★★★★ Reader-review channel referenced by the current proof library."

## Artifacts

- Image comparison: `.limner/runs/2026-06-21T163630424Z-ch1ays/captures/image-comparison.json`
- Comparison summary: `.limner/runs/2026-06-21T163630424Z-ch1ays/captures/comparison-summary.json`
- Agent comparison response store: local SQLite ledger
