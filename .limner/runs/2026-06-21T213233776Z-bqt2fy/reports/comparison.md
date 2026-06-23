# Agent Comparison Report

Profile: `ideal-to-mockup`
Comparison mode: `image-mockup`

## Status

- Status: validated.
- Freshness: fresh.
- Image score: 0.5
- Top fix: Verify the highest-impact visible mismatch, then make one scoped polish change.

## Scaffold State

- customized scaffold; 1/6 files match templates

## Inputs

- Expected image: `targets/mlr-instructor-path/source/ig_0df1de113427452a016a37e93b699c819ab46fe912af9c90f2.png`
- Actual image: `.limner/runs/2026-06-21T213233776Z-bqt2fy/captures/reference.png`

## Capture Readiness

- Expected: not captured.
- Actual: not_applicable; final URL: `http://127.0.0.1:53277/`; requested: none

## Visible Text Inventory

- Expected: Text inventory is unavailable for image-only inputs without OCR.
- Actual: 14 visible text block(s) shown.
  - "MLR MACHINE LEARNING REFINED Overview Book Resources Instructor Path Solutions Community Request sample copy Sign in INSTRUCTOR ADOPTION..." <main> @ 0,0 1440x1204
  - "MLR MACHINE LEARNING REFINED Overview Book Resources Instructor Path Solutions Community Request sample copy Sign in" <header> @ 0,0 1440x67
  - "Primary navigation" <nav> @ 374,8 709x50
  - "Overview" <a> @ 451,8 63x50
  - "Book" <a> @ 543,8 34x50
  - "Resources" <a> @ 606,8 69x50
  - "Instructor Path" <a> @ 703,8 103x50
  - "Solutions" <a> @ 835,8 63x50
  - "Community" <a> @ 927,8 80x50
  - "Machine Learning Refined home" <a> @ 24,14 330x38
  - "MLR" <span> @ 24,14 38x38
  - "Request sample copy Sign in" <div> @ 1103,16 313x34
  - "Request sample copy" <a> @ 1103,16 209x34
  - "MACHINE LEARNING REFINED" <span> @ 74,17 260x33

## Region Evidence

- Expected: no region evidence detected.
- Actual: 5 region hint(s) shown.
  - sidebar (selector, medium) @ 374,8 709x50 text="Overview Book Resources Instructor Path Solutions Community"
  - header (selector, medium) @ 0,0 1440x67 text="MLR MACHINE LEARNING REFINED Overview Book Resources Instructor Path Solutions Community Request sample copy Sign in"
  - toolbar (selector, low) @ 1103,16 313x34 text="Request sample copy Sign in"
  - main-list (selector, low) @ 36,285 369x99 text="Rigorous modern coverage from fundamentals to deep learning Course-ready resources designed to save setup time Flexib..."
  - repeated-rows (heuristic, low) count=6 @ 36,285 369x34 text="Rigorous modern coverage from fundamentals to deep learning"

## Artifacts

- Image comparison: `.limner/runs/2026-06-21T213233776Z-bqt2fy/captures/image-comparison.json`
- Comparison summary: `.limner/runs/2026-06-21T213233776Z-bqt2fy/captures/comparison-summary.json`
- Agent comparison response store: local SQLite ledger
