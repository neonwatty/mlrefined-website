# SEO Growth Roadmap

## Objective

Turn the Machine Learning Refined website into a stronger crawlable learning-resource hub by building the next technical/content SEO tranche: per-chapter/resource discovery, schema where it fits, public-route hygiene, and Search Console-backed prioritization once credentials are available.

## Original Request

"Create a GoalBuddy prep board for the next SEO work, and say what credentials are needed."

## Intake Summary

- Input shape: `specific`
- Audience: Machine Learning Refined readers, instructors, independent learners, search crawlers, and the site owner.
- Authority: `requested`
- Proof type: `test | demo | metric | review`
- Completion proof: A final audit shows the selected public SEO routes/pages render crawlable metadata/content, sitemap/robots are correct, local checks pass, and any available Search Console/PostHog evidence has been used or explicitly blocked by missing credentials.
- Goal oracle: Rendered route inspection plus standard repo checks, sitemap/robots output, structured-data parseability, desktop/mobile screenshots for changed public pages, and Search Console/PostHog query evidence when credentials are present.
- Likely misfire: Shipping more metadata while leaving the site without crawlable chapter/notebook/instructor/review pages or verified search demand evidence.
- Blind spots considered: Production/local route drift, owner-only dashboard indexing, structured data overclaiming, missing Search Console credentials, missing PostHog credentials, live Vercel verification, and the need not to promise solutions/manual content the site does not provide.
- Existing plan facts: Next best concrete move is `/chapters/[slug]` plus a richer `/chapters` hub; follow-ups include `/notebooks`, `/instructors`, `/reviews`, OG/Twitter image generation, Search Console, and page-specific structured data.

## Goal Oracle

The oracle for this goal is:

`A final Judge/PM audit maps implemented SEO route/content/schema work to rendered HTML, sitemap/robots output, local checks, screenshot evidence, and available analytics/search evidence; it rejects completion if crawlable resource architecture remains only planned or if credential-gated work lacks explicit blocked receipts.`

The PM must keep comparing task receipts to this oracle. Planning, discovery, a passing tiny slice, or a clean-looking board is not enough. The goal finishes only when a final Judge/PM audit maps receipts and verification back to this oracle and records `full_outcome_complete: true`.

## Goal Kind

`specific`

## Current Tranche

Complete successive safe, verified SEO slices until the site has a materially better crawlable resource architecture. Start by validating the current local/prod route landscape and choosing the largest safe first implementation package, with a strong default toward a richer `/chapters` hub and `/chapters/[slug]` pages if the repo supports it. Continue into notebook/resource/instructor/review routes, structured data, OG images, or analytics integration only when the active evidence says that is the next highest-leverage slice.

Credential-gated analytics work should not block local SEO architecture work. When credentials are missing, block only the specific analytics task with a receipt and continue with local, non-destructive work.

## Non-Negotiable Constraints

- Follow `AGENTS.md`: read local Next docs before Next API/convention changes.
- Do not overclaim content; no "solutions manual" promises unless real verified content exists.
- Keep the canonical GitHub resource repo as the source of truth for downloadable resources.
- Preserve user changes and unrelated dirty worktree files.
- Public SEO pages need rendered proof, not just code inspection.
- Owner-only analytics/dashboard surfaces should not be advertised for indexing.
- Use repo-standard verification where applicable: `npm run lint`, `npm run typecheck`, `npm run knip:production`, `npm run test:unit`, `npm run build`, `npm run ci`.

## Stop Rule

Stop only when a final audit proves the full original outcome is complete.

Do not stop after planning, discovery, or Judge selection if a safe Worker task can be activated.

Do not stop after a single verified Worker package when the broader owner outcome still has safe local follow-up work. Advance the board to the next highest-leverage safe Worker package and continue unless a phase, risk, rejected-verification, ambiguity, or final-completion review is due.

Do not create one Worker/Judge pair per repeated route, page, or helper. Put repeated same-shape work into one Worker package and review the package as a whole.

Do not stop because a slice needs owner input, credentials, production access, destructive operations, or policy decisions. Mark that exact slice blocked with a receipt, create the smallest safe follow-up or workaround task, and continue all local, non-destructive work that can still move the goal toward the full outcome.

## Slice Sizing

Safe means bounded, explicit, verified, and reversible. It does not mean tiny.

A good task is the largest safe useful slice.

Small is not the goal. Useful is the goal.

A Worker should finish the whole assigned slice. A Judge should judge the whole assigned slice. A PM should reorient the board when tasks are safe but not moving the outcome.

Tiny tasks are allowed when the failure is isolated, the risk is high, the scope is unknown, or the tiny task unlocks a larger slice. Tiny tasks are bad when they keep happening, do not change behavior, only add wrappers/contracts/proof files, or avoid the real milestone.

## Board Health

The PM owns board health. If the board looks stale, misleading, offline, or inconsistent, run the bundled checker:

```bash
node /Users/neonwatty/.codex/plugins/cache/goalbuddy/goalbuddy/0.3.9/skills/goalbuddy/scripts/check-goal-state.mjs docs/goals/seo-growth-roadmap
```

If the local board is running, compare `state.yaml` to the live board API. Repair only GoalBuddy control files unless an active Worker or PM task explicitly allows product-file edits.

## Canonical Board

Machine truth lives at:

`docs/goals/seo-growth-roadmap/state.yaml`

If this charter and `state.yaml` disagree, `state.yaml` wins for task status, active task, receipts, verification freshness, and completion truth.

## Run Command

```text
/goal Follow docs/goals/seo-growth-roadmap/goal.md.
```

## PM Loop

On every `/goal` continuation:

1. Read this charter.
2. Read `state.yaml`.
3. Run the bundled GoalBuddy update checker when available and mention a newer version without blocking.
4. Re-check the intake: original request, input shape, authority, proof, blind spots, existing plan facts, and likely misfire.
5. Work only on the active board task.
6. Assign Scout, Judge, Worker, or PM according to the task.
7. Write a compact task receipt.
8. Update the board.
9. If safe local work remains, choose the next largest reversible Worker package and continue unless blocked.
10. Review at phase, risk, rejected-verification, ambiguity, or final-completion boundaries; do not review every small Worker by habit.
11. Finish only with a Judge/PM audit receipt that maps receipts and verification back to the original user outcome and records `full_outcome_complete: true`.
