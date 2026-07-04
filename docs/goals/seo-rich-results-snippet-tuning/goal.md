# SEO Rich Results And Snippet Tuning

## Objective

Complete the next SEO tranche after sitemap resubmission and URL inspection: validate live structured data/rich-results readiness, tune high-value `/notebooks`, `/chapters`, and chapter-detail snippets before Google recrawls, deploy the verified changes, and leave a durable Search Console follow-up checkpoint.

## Original Request

"Plan a GoalBuddy prep board for this."

## Intake Summary

- Input shape: `existing_plan`
- Audience: Machine Learning Refined readers, instructors, independent learners, search crawlers, and the site owner.
- Authority: `requested`
- Proof type: `test | artifact | metric | review`
- Interpreted outcome: A GoalBuddy board exists that can drive the next SEO execution tranche from live schema validation through snippet improvements, production deployment, and follow-up evidence tracking.
- Completion proof: A final audit maps live structured-data/snippet evidence, changed files, local checks, deployed URLs, and Search Console follow-up status to the original next-step plan.
- Goal oracle: Live rendered metadata and JSON-LD for homepage, `/chapters`, `/notebooks`, and representative chapter pages validate cleanly or have documented residual risk; repo checks pass; production smoke checks prove the improved snippets and social metadata are live; Search Console follow-up evidence is recorded or scheduled.
- Likely misfire: Spending time on generic SEO copy or another planning document while failing to validate live schema, failing to tune the pages Google is about to recrawl, or failing to deploy and record evidence.
- Blind spots considered:
  - Google may not expose all rich-result eligibility for `Book`, `LearningResource`, or `CollectionPage` markup.
  - Search Console recrawl timing is outside local control.
  - Snippet copy must not promise solutions/manual content that is not actually available.
  - Existing dirty worktree includes prior SEO changes and should not be reverted.
  - Metadata/image changes must remain consistent with Next.js 16 file conventions.
- Existing plan facts:
  - First validate rich-results/structured data for homepage, `/chapters`, `/notebooks`, and one representative chapter detail page.
  - Then improve `/notebooks` snippet around GitHub notebooks, Python notebooks, and chapter resources.
  - Then improve `/chapters` and chapter detail snippets around chapter PDFs, exercises, slides, notebooks, and exact chapter topics.
  - Then add a Search Console checkpoint for indexing and impressions after Google recrawls.

## Current Tranche

Discover the exact live schema/snippet state, implement the largest safe verified snippet/schema package, deploy it to production, and record a follow-up Search Console checkpoint. The tranche is complete only when the deployed site has improved live metadata/copy/schema evidence and the remaining recrawl wait is explicit.

## Non-Negotiable Constraints

- Follow `AGENTS.md`: read local Next docs before Next metadata, sitemap, robots, route, or OG-image changes.
- Preserve user changes and unrelated dirty files.
- Do not overclaim content; no "solutions manual" promises unless real verified content exists.
- Use the canonical GitHub resource repo as the source of truth for resources.
- Public SEO changes need rendered proof, not only source inspection.
- Owner-only analytics/dashboard surfaces should not be advertised for indexing.
- Use repo checks where applicable: `npm run lint`, `npm run typecheck`, `npm run knip:production`, `npm run test:unit`, `npm run build`, `npm run ci`.
- For production changes, verify Vercel deployment status and live routes/tags after deploy.
- For Search Console work, use the authenticated browser UI unless an approved API credential is intentionally configured later.

## Goal Oracle

The oracle for this goal is:

`A final Judge/PM audit proves that live structured data and metadata were validated, the highest-value snippets were tuned without overclaiming, local checks passed, production contains the improved rendered tags/copy/schema, and Search Console follow-up evidence is recorded or explicitly waiting on Google recrawl timing.`

The PM must keep comparing receipts to this oracle. Planning, a passing local build, or a visual assumption is not enough.

## Goal Kind

`existing_plan`

## Stop Rule

Stop only after a final audit proves this tranche is complete or records the exact external recrawl wait state. Do not stop after Scout/Judge planning if a safe Worker task exists. Do not mark the goal done while required Worker tasks are queued or active.

## Board Health

Machine truth lives at:

`docs/goals/seo-rich-results-snippet-tuning/state.yaml`

If this charter and `state.yaml` disagree, `state.yaml` wins for task status, active task, receipts, and completion truth.

If the board looks stale or inconsistent, run:

```bash
node /Users/neonwatty/.codex/plugins/cache/goalbuddy/goalbuddy/0.3.9/skills/goalbuddy/scripts/check-goal-state.mjs docs/goals/seo-rich-results-snippet-tuning
```

## Run Command

```text
/goal Follow docs/goals/seo-rich-results-snippet-tuning/goal.md.
```

## PM Loop

On every `/goal` continuation:

1. Read this charter.
2. Read `state.yaml`.
3. Re-check the intake and likely misfire.
4. Work only on the active task.
5. Write a compact receipt.
6. Update the board.
7. Continue to the next safe task unless the final audit proves completion or a true external blocker remains.
