# T999 final Judge audit

Date: 2026-07-11

Decision: **not_complete**

`full_outcome_complete: false`

The tranche has strong, source-backed local implementation and a pushed resource-repository commit, but the owner's original outcome requires a live and measured discovery/distribution system. That is not yet true. The production domain returns 404 for `/learn` and all three guides; the canonical repository change is unmerged; the mandatory responsive/console/click proof is unavailable; and no post-launch search/usage comparison can exist.

## Workstream evidence

### 1. Crawlable internal architecture and resource conversion

Status: locally complete and verified.

- T012 restores all 15 chapter detail anchors including Appendix C.
- `/resources` is site-wide navigation.
- Chapters, notebooks, and instructor roadmaps expose ordinary chapter links.
- Homepage has explicit official GitHub/PDF paths.
- Chapter detail resources emit stable properties; all 21 pre-guide sitemap URLs returned 200 locally.
- Lint, typecheck, Knip, tests, build, analytics debug, desktop/mobile proof, and route checks passed for this foundation before the in-app Browser later became unavailable.

### 2. Three substantive learning experiments

Status: implemented and statically verified, not release-accepted.

- T003 selected gradient descent, logistic regression, and K-means using fresh autocomplete, Search Console, current results, exact notebooks/exercises, and local animations.
- T004 required answer-shaped, non-duplicative pages with equations, visuals, executable NumPy, cautions, attribution, resources, metadata, and analytics.
- T005/T013 implemented `/learn` plus three guide routes, ordinary incoming links, JSON-LD, sitemap image entries, and exact NumPy snippets.
- Exact displayed Python code passes; 25 unit tests and a 34-page Next build pass; rendered HTML proves self-canonicals, LearningResource schema, substantive copy/code, and incoming links.
- Acceptance is incomplete because required desktop/390px screenshots, media/header/overflow/console inspection, and live click payload proof could not run after the in-app Browser webview failed twice.
- The production domain still returns 404 for all four new routes.

### 3. GitHub-to-site distribution and entity consistency

Status: prepared and pushed, not integrated.

- T006 found 2,237 stars/703 forks, zero README site links, 156 legacy Colab owner paths, one dead Cambridge link, and no citation file.
- T008 commit `c5bf0d4` on `codex/website-distribution-loop` adds the official site/guide panel, canonicalizes all 156 Colab segments with identical notebook suffixes, repairs Cambridge, and adds valid CFF 1.2.0 metadata.
- CFF, GitHub Markdown rendering, exact counts, and representative Colab 200s pass.
- SSH push succeeded. PR creation failed because the connector lacks access and the GitHub CLI token became invalid. The branch remains unmerged, intentionally preventing live README links to current 404 guide URLs.

### 4. GEO/crawler/entity foundation

Status: locally implemented, not live.

- T009 consolidates exact book title, edition, date, three authors, print/digital ISBN, DOI, Cambridge publisher, and canonical repository into stable linked JSON-LD IDs.
- Resources visibly supports the identity claims.
- Chapter and guide LearningResource entities reference the same Book/source entities.
- Robots explicitly allows Googlebot and OAI-SearchBot while preserving `/api/` and `/admin/` exclusions.
- Sitemap freshness is route-specific: 24 changed routes dated 2026-07-11; unchanged `/reviews` remains 2026-07-04.
- `/llms.txt` remains absent; no unsupported AI schema was added.
- CI and programmatic live-local proof pass; browser acceptance and production proof do not.

### 5. Release and measurement

Status: pre-launch baseline complete; launch and outcome measurement absent.

- Website commit `b0464ca` is rebased directly on `origin/main`, one local commit ahead, with post-rebase `npm run ci` passing.
- Vercel authentication and project linkage are valid, but no push/deploy occurred because the release rule forbids deployment with the browser gate red.
- Search Console baseline: 8 clicks, 312 impressions, 2.6% CTR, position 4.9.
- PostHog baseline: 180 human-classified pageviews / 95 people; ordered resource converters 13 / 95 (13.7%); GitHub 6 / 4; ChatGPT 4 / 2; Google 16 / 11; Bing 2 / 2.
- New guide events are absent pre-launch, giving a clean zero-observed baseline.
- L+1/L+14/L+28 and minimum-sample decision rules are defined, but no actual launch timestamp exists.

## Top three realistic failure modes

1. **The work never reaches readers.** Current production 404s prove this failure is present, not hypothetical. T014 must deploy and verify the production alias.
2. **The GitHub loop advertises dead pages or never merges.** Keeping the branch unmerged currently prevents the dead-link version; it also means the distribution objective is incomplete. T014 must create/merge only after live 200 proof.
3. **A statically correct page has mobile, media, console, or analytics defects.** CI/HTML tests reduce but do not eliminate this risk. The unavailable Browser means the required proof is missing; T014 must produce it before release acceptance.

## Residual risks and next work

- In-app Browser webview must be restored.
- GitHub API/CLI must be re-authenticated for PR creation.
- Website branch must be pushed only after visual proof, then previewed/deployed.
- Search Console and any available Bing submissions must be recorded without indexing claims.
- Post-launch event ingestion and delayed measurement must run from the actual launch timestamp.

Activate T014. T015 follows a successful release. A later final Judge must re-audit the original outcome; this T999 receipt is not permission to close the goal.
