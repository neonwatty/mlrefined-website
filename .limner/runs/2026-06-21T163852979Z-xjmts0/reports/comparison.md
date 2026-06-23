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

- Expected image: `targets/mlr-resource-discovery/source/ig_0553e087e3834b88016a37e933bce48199a43e57b316216b4a.png`
- Actual image: `.limner/runs/2026-06-21T163852979Z-xjmts0/captures/reference.png`

## Capture Readiness

- Expected: not captured.
- Actual: not_applicable; final URL: `http://127.0.0.1:50049/`; requested: none

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

## Region Evidence

- Expected: no region evidence detected.
- Actual: 4 region hint(s) shown.
  - sidebar (selector, medium) @ 338,11 684x33 text="Chapters & Resources Roadmap Study Guides Community About"
  - header (selector, medium) @ 0,0 1440x55 text="MLR Machine Learning Refined Chapters & Resources Roadmap Study Guides Community About Search chapters, topics, resou..."
  - main-list (selector, low) @ 33,427 224x130 text="ID Independent Learner IN Instructor PR Practitioner Refresh"
  - repeated-rows (heuristic, medium) count=13 @ 294,335 820x32 text="CHAPTER DESCRIPTION RESOURCES"

## Artifacts

- Image comparison: `.limner/runs/2026-06-21T163852979Z-xjmts0/captures/image-comparison.json`
- Comparison summary: `.limner/runs/2026-06-21T163852979Z-xjmts0/captures/comparison-summary.json`
- Agent comparison response store: local SQLite ledger
