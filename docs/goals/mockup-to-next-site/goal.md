# Mockup To Next Site

## Objective

Turn the approved unified HTML mockup for the Machine Learning Refined reimagining into the real Next.js website, preserving the strongest product direction while improving reliability, mobile UX, asset handling, SEO readiness, analytics readiness, and deployability.

## Original Request

Create a detailed GoalBuddy prep board for translating the unified HTML mockup into the actual Next.js app routes/components.

## Intake Summary

- Input shape: `existing_plan`
- Audience: prospective readers, instructors, current adopters, and the site owner.
- Authority: `approved`
- Proof type: `demo`
- Completion proof: a final Judge/PM audit verifies that the Next.js site implements the approved mockup's core funnel across desktop and mobile, uses real book/repo assets, passes the repo quality gates, and has browser evidence for the main user paths.
- Goal oracle: local and/or preview browser walkthrough of the Next.js app showing the landing, chapters, notebooks, instructors, and reviews experiences working with real assets, plus `npm run ci` passing.
- Likely misfire: copying the HTML mockup too literally into Next.js without real app structure, responsive polish, stable assets, SEO metadata, analytics considerations, or proof that the site works outside the mockup file.
- Blind spots considered: mockup-only styling that does not fit the current app architecture; broken or unstable image paths; carousel jitter/regressions; mobile layout failures; stale or fabricated content; missing alt text/SEO; analytics not preserved; over-scoping into unrelated redesigns.
- Existing plan facts: use the unified HTML mockup as the approved visual/product direction; preserve the simplified landing funnel; keep the gallery folded into the landing carousel; include real book assets from the book/source repos and notes-assets repo; keep chapters, notebooks, instructors, and reviews as first-class experiences; do not generate new images or add stock imagery.

## Goal Oracle

The oracle for this goal is:

`A browser walkthrough of the real Next.js app, on desktop and mobile, proves the main MLR site paths match the approved mockup direction with real book assets, stable images, accessible navigation, and no console/image-load regressions, while npm run ci passes.`

The PM must keep comparing task receipts to this oracle. Planning, discovery, a passing tiny slice, or a clean-looking board is not enough. The goal finishes only when a final Judge/PM audit maps receipts and verification back to this oracle and records `full_outcome_complete: true`.

## Goal Kind

`existing_plan`

## Current Tranche

This tranche should complete the first production-quality Next.js implementation of the approved mockup direction. The PM should discover the current app shape and asset inventory, choose coherent vertical implementation slices, verify each slice with commands and browser evidence, and keep advancing until the real app can replace the HTML mockup for review.

## Non-Negotiable Constraints

- Read the Next.js docs shipped in `node_modules/next/dist/docs/` before editing Next.js code because this repo's Next version may differ from training assumptions.
- Use only existing assets from this repo, the book/source repo `neonwatty/machine-learning-refined`, and `neonwatty/machine-learning-refined-notes-assets`.
- Do not generate new images.
- Do not add stock imagery.
- Do not invent fabricated reviews, recommendations, university logos, book figures, screenshots, or adoption claims.
- Keep changes scoped to the Next.js site implementation, supporting assets/copy, tests/checks, and GoalBuddy receipts.
- Preserve mobile-friendly UX and stable carousel/image containers.
- Prefer real app components and structured data over one-off mockup code.
- Preserve or improve SEO, accessibility, and analytics readiness.
- Do not merge or deploy without verification evidence.

## Stop Rule

Stop only when a final audit proves the full original outcome is complete.

Do not stop after planning, discovery, or Judge selection if a safe Worker task can be activated.

Do not stop after a single verified Worker package when the broader owner outcome still has safe local follow-up work. Advance the board to the next highest-leverage safe Worker package and continue unless a phase, risk, rejected-verification, ambiguity, or final-completion review is due.

Do not create one Worker/Judge pair per repeated file, page, card, or helper. Put repeated same-shape work into one Worker package and review the package as a whole.

## Slice Sizing

Safe means bounded, explicit, verified, and reversible. It does not mean tiny.

A good task is the largest safe useful slice.

Small is not the goal. Useful is the goal.

Worker tasks should produce coherent, reviewable milestones: an app shell, a page family, a data/content layer, an asset pipeline, or a verification pass.

## Board Health

The PM owns board health. If the board looks stale, misleading, offline, or inconsistent, run:

```bash
node /Users/neonwatty/.codex/plugins/cache/goalbuddy/goalbuddy/0.3.9/skills/goalbuddy/scripts/check-goal-state.mjs docs/goals/mockup-to-next-site
```

If the local board is running, compare `state.yaml` to the live board API. Repair only GoalBuddy control files unless an active Worker or PM task explicitly allows product-file edits.

## Canonical Board

Machine truth lives at:

`docs/goals/mockup-to-next-site/state.yaml`

If this charter and `state.yaml` disagree, `state.yaml` wins for task status, active task, receipts, verification freshness, and completion truth.

## Run Command

```text
/goal Follow docs/goals/mockup-to-next-site/goal.md.
```

## PM Loop

On every `/goal` continuation:

1. Read this charter.
2. Read `state.yaml`.
3. Run the bundled GoalBuddy update checker when available and mention a newer version without blocking.
4. Re-check the intake, oracle, constraints, likely misfire, and existing plan facts.
5. Work only on the active board task.
6. Assign Scout, Judge, Worker, or PM according to the task.
7. Write a compact task receipt.
8. Update the board.
9. If safe local work remains, choose the next largest reversible Worker package and continue unless blocked.
10. Review at phase, risk, rejected-verification, ambiguity, or final-completion boundaries.
11. Finish only with a Judge/PM audit receipt that maps receipts and verification back to the original user outcome and records `full_outcome_complete: true`.
