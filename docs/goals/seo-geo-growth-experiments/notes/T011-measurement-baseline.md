# T011 pre-launch measurement baseline and decision plan

Recorded: 2026-07-11

Status: pre-launch baseline complete; post-launch checkpoint blocked until T010 deploys the website.

## Search Console baseline

Property: `sc-domain:mlrefined.com`

Window: 2026-06-28 through 2026-07-09

- 8 clicks
- 312 impressions
- 2.6% CTR
- average position 4.9
- `machine learning refined`: 4 clicks / 78 impressions
- `machine learning refined github`: 0 / 14
- full book title: 0 / 7
- `machine learning refined 2nd ed pdf`: 0 / 4
- `machine learning refined pdf`: 0 / 4
- only eight queries were exposed; no selected non-branded topic query appeared
- sitemap baseline: 12 discovered URLs versus 21 submitted/live sitemap URLs on 2026-07-11 before this tranche

Interpretation: the property is too new and the samples are too small for percentage-lift claims. The selected guides have a zero-observed query baseline, not proven zero demand.

## PostHog baseline

Connected environment: PostHog project `BugDrop + Foil + MLR` (project 422537), filtered to `$host = 'www.mlrefined.com'`.

Window: 2026-06-28 00:00:00 UTC through 2026-07-12 00:00:00 UTC (data observed through 2026-07-11 15:23:53 UTC).

Traffic classification: `getTrafficType(properties.$raw_user_agent)`. All captured client-side pageviews in this window classified as `Regular`. This does not prove crawlers did not visit: client-side PostHog cannot see bots that do not execute JavaScript, and the event taxonomy has no `$http_log`/Vercel access-log stream.

### Reader traffic

- 180 pageviews
- 95 unique people
- first observed pageview in the window: 2026-06-28 21:46:57 UTC
- last observed pageview: 2026-07-11 15:23:53 UTC

Pageviews / unique people:

- `/`: 128 / 89
- `/chapters`: 26 / 22
- `/notebooks`: 12 / 10
- `/instructors`: 8 / 7
- `/reviews`: 6 / 6
- `/resources`, chapter details, `/learn`, and guide routes: zero observed in the queried baseline

### Referrals

Pageviews / unique people:

- direct: 104 / 58
- `atcold.github.io`: 16 / 5
- Google: 16 / 11
- same-domain: 12 / 3
- DuckDuckGo: 10 / 3
- Reddit web: 8 / 7
- GitHub: 6 / 4
- ChatGPT: 4 / 2
- Bing: 2 / 2
- Reddit app: 1 / 1
- `kenndanielso.github.io`: 1 / 1

ChatGPT referral traffic is the only current direct generative-discovery signal. It is a usage/referral signal, not proof of an AI citation or answer impression.

### Resource usage

Tracked events / unique people:

- `chapter_resource_clicked`: 5 / 4
- `notebook_resource_clicked`: 4 / 3
- `chapter_visual_source_clicked`: 4 / 4
- `side_rail_resource_clicked`: 3 / 3
- `github_resource_clicked`: 1 / 1
- `footer_link_clicked`: 1 / 1

Total event occurrences across those rows: 18. Do not sum unique people across rows because the same person can appear in multiple events.

Ordered 14-day person funnel:

- pageview step: 95 people
- subsequent tracked resource action: 13 people
- conversion: 13.7%

This is the comparison baseline for the same host/time-window/event set after launch.

### Clean zero-observed event baseline

These planned event names are absent from the live project taxonomy before deployment:

- `learning_guide_opened`
- `learning_guide_resource_clicked`
- `learning_resource_clicked`
- `book_entity_clicked`

After deployment, first prove they ingest with the required `guide`, `location`, `resource`, and `href` properties before using them in a conversion decision.

## Bing and AI visibility baseline

- No connected Bing Webmaster performance report was available in the current tool/browser context.
- No Google or Bing generative-performance report was available.
- PostHog currently measures ChatGPT referrals but not non-JavaScript AI/search crawler access.
- Do not report “zero AI visibility”; report “not instrumented/available,” alongside the 4 ChatGPT referral pageviews.

## Checkpoint schedule

Because launch has not occurred, a fixed search-impact date would be false precision. Use the actual production alias timestamp `L` recorded by T010:

1. `L + 1 day`: ingestion/indexability gate—events/properties present, sitemap fetched/submitted, canonical selected where available, no live errors.
2. `L + 14 days`: first discovery checkpoint—Search Console pages/queries/indexing, guide impressions, GitHub/ChatGPT referrals, and ordered resource conversion. If fewer than 100 total guide impressions and fewer than 20 human guide landings, record `insufficient data`; do not choose a winner.
3. `L + 28 days`: first experiment decision, provided the same minimum sample thresholds are met.

If production launches by 2026-07-12, the exact target dates are 2026-07-13, 2026-07-26, and 2026-08-09. Otherwise T010 must stamp replacement dates from the real launch time.

The next release-readiness recheck is 2026-07-12. It must first resolve the in-app Browser and GitHub API authentication gates; there is no meaningful post-launch measurement before then.

## Experiment decision rules

For each guide, compare its exact/from-scratch/Python/NumPy/notebook query family, indexed canonical, impressions, clicks, CTR, average position, human landing views, and `learning_resource_clicked` actions.

- **Expand** only when the page is indexed/canonical, earns non-branded impressions, and produces useful resource actions without a corresponding loss on its chapter/notebook route.
- **Revise** when impressions exist but CTR is weak, query intent mismatches visible content, or landings do not reach resources.
- **Consolidate** when Google selects another canonical or the guide and chapter/notebook route compete for the same query intent.
- **Stop** when the page remains thin/misleading after revision, is persistently excluded for quality/duplication, or creates a measurable usability/maintenance burden.
- **Insufficient data** is the default before thresholds; never manufacture a percentage lift from single-digit changes.

## Reproducible PostHog query contract

- host: `www.mlrefined.com`
- human filter: `NOT isLikelyBot(properties.$raw_user_agent)`
- pageview: `$pageview`
- existing resource set: chapter/notebook/GitHub/side-rail/instructor/visual/footer resource events listed above
- future guide set: `learning_guide_opened`, `learning_guide_resource_clicked`, `learning_resource_clicked`, `book_entity_clicked`
- ordered comparison: `windowFunnel` from pageview to any resource action with an explicit 14-day window
- every query must use exact UTC bounds and repeat the host filter
