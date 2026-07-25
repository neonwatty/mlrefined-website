# T015 L+14 SEO/GEO measurement checkpoint

Recorded: 2026-07-25 after `2026-07-25T21:36:42Z`

Launch timestamp `L`: `2026-07-11T21:36:42Z`

Exact PostHog window: `[2026-07-11T21:36:42Z, 2026-07-25T21:36:42Z)`

Search Console available-data window: 2026-07-12 through 2026-07-23. Search Console reported `Last update: 4 hours ago` and its daily chart ended on July 23, so this is a same-length 12-day comparison with T011, not a fabricated full 14-day Google window.

## Checkpoint reading

- The predeclared overall sample gate technically clears because the three guides earned **152 Search Console impressions**, above the 100-impression threshold.
- Adjusted PostHog has only **12 genuine guide pageviews / 9 people**, below the 20-human-landing threshold.
- Because the T011 insufficient-data rule requires both totals to be below threshold, the overall gate is not classified as `insufficient data`. However, per-guide reader and conversion samples remain too small for a winner, expansion, consolidation, or stop decision.
- All four learning URLs are now directly proven indexed by current URL Inspection. This is indexing proof, not an inference from the July 11 indexing requests.
- The only captured guide resource conversion was the known launch-verification workflow and is excluded from reader outcomes.
- L+14 direction: keep all three guides live through L+28; treat logistic and gradient as revision candidates, and k-means as the only early organic-click signal. Do not implement a content revision before the L+28 decision unless a live defect appears.

## Search Console performance

Property: `sc-domain:mlrefined.com`

### Same-length comparison

| Metric | T011 baseline, Jun 28-Jul 9 | Available post-launch, Jul 12-23 | Observed difference |
| --- | ---: | ---: | ---: |
| Clicks | 8 | 16 | +8 |
| Impressions | 312 | 497 | +185 |
| CTR | 2.6% | 3.2% | +0.6 percentage points |
| Average position | 4.9 | 13.8 | 8.9 positions worse |

The property-level counts improved while average position worsened because the post-launch query/page mix now includes new non-branded discovery at lower positions. These observations do not prove the launch caused the difference.

### Learning pages

| Page | Clicks | Impressions | CTR | Average position | Exposed query evidence |
| --- | ---: | ---: | ---: | ---: | --- |
| `/learn/logistic-regression-from-scratch` | 0 | 88 | 0% | 28.8 | `logistic regression python` 0/11; two from-scratch Python variants 0/2 each; four additional 1-impression variants |
| `/learn/k-means-clustering-from-scratch` | 1 | 38 | 2.6% | 22.3 | Search Console withheld the query rows |
| `/learn/gradient-descent-from-scratch` | 0 | 26 | 0% | 22.5 | `numpy gradient descent` 0/1 |
| `/learn` | 1 | 10 | 10% | not separately captured | hub page row |

The three guides total **1 click / 152 impressions**, or 0.7% observed CTR. Search Console exposes only privacy-safe query rows, so visible query counts do not sum to page impressions.

### Indexing and canonical evidence

Current URL Inspection showed `URL is on Google`, `Page is indexed`, successful fetch, crawl allowed, indexing allowed, Googlebot smartphone, and `Google-selected canonical: Inspected URL` for:

| URL | Last crawl shown |
| --- | --- |
| `/learn` | 13 Jul 2026, 01:13:32 |
| `/learn/gradient-descent-from-scratch` | 11 Jul 2026, 23:19:31 |
| `/learn/logistic-regression-from-scratch` | 13 Jul 2026, 07:43:11 |
| `/learn/k-means-clustering-from-scratch` | 11 Jul 2026, 23:18:21 |

The aggregate Page Indexing report is stale (`Last update: 09/07/2026`) and still says one indexed page. It is not used as current truth because direct URL Inspection and post-launch performance rows prove the four learning URLs are indexed.

### Sitemap

- `https://www.mlrefined.com/sitemap.xml`
- Status: `Success`
- Submitted: 11 Jul 2026
- Last read: 22 Jul 2026
- Discovered pages: 25
- Discovered videos: 0

## Live crawlability recheck

Direct production inspection at L+14 proved:

- `/learn` and all three guides return HTTP 200 without redirect.
- Each route renders its exact self-canonical.
- Each route renders `robots: index, follow` and no `noindex`.
- The sitemap returns HTTP 200 with 25 URLs and contains the hub plus all three guides.
- `robots.txt` returns HTTP 200, allows `/`, advertises the sitemap, and blocks only `/api/` and `/admin/`.

An initial broad negative check falsely matched any `Disallow: /...` as a site-wide block. Direct inspection corrected that verifier; there is no `Disallow: /` rule.

## PostHog

Project: `BugDrop + Foil + MLR` (`422537`)

Host: `www.mlrefined.com`

Project timezone: UTC

Traffic classification: verified `$virt_traffic_type`; `Regular` is used for reader metrics. PostHog emitted taxonomy warnings for the virtual property despite returning classified values; the event schema and query results both exposed the virtual fields.

### Bot and synthetic separation

Raw classified pageviews:

- `Regular`: 292 pageviews / 146 people
- `AI Agent`: 2 pageviews / 2 people

The AI-agent rows were both `/learn/gradient-descent-from-scratch`, classified as `NotebookLM`, operator `Google`, category `ai_assistant`, direct referrer. This is a captured GEO discovery signal, not proof of an answer citation or complete AI crawler coverage.

The only `learning_guide_resource_clicked` event inside the launch window occurred at `2026-07-11T21:55:54.860Z`. Its surrounding sequence was a rapid direct launch check:

`/` → `/learn` → gradient guide → matching chapter → PDF → `/learn` → logistic guide → notebooks.

It coincided with the launch verification and indexing workflow, carried the expected guide/location/resource/href properties, and is treated as known synthetic operator traffic. The identity attached to that event is excluded from all adjusted reader metrics below.

### Adjusted reader traffic

| Metric | T011 baseline | L+14 adjusted | Observed difference |
| --- | ---: | ---: | ---: |
| Pageviews | 180 | 282 | +102 |
| People | 95 | 145 | +50 |
| Ordered resource converters | 13 | 18 | +5 |
| Ordered conversion | 13.7% | 12.4% | -1.3 percentage points |

Traffic volume increased, but ordered conversion did not. This is an observed comparison, not a causal SEO claim.

### Learning traffic after synthetic exclusion

| Page | Pageviews | People | Internal guide-link events / people |
| --- | ---: | ---: | ---: |
| `/learn` | 21 | 11 | not applicable |
| gradient descent | 4 | 4 | 4 / 4 |
| logistic regression | 7 | 5 | 6 / 5 |
| k-means clustering | 1 | 1 | 0 / 0 |
| three guides combined | 12 | 9 | 10 / 8 |

`learning_guide_opened` is a click event from internal discovery surfaces, not a page-load event. Its verified locations are `learn_hub`, `notebook_featured`, and `chapter_detail`. The k-means pageview was a genuine direct Google landing at `2026-07-20T19:18:56.656Z`, so the absence of an internal-link event is expected. Pageview remains the landing source of truth.

Genuine `learning_guide_resource_clicked` events after synthetic exclusion: **0**.

### Resource usage after synthetic exclusion

| Event | Events | People |
| --- | ---: | ---: |
| `chapter_resource_clicked` | 14 | 11 |
| `side_rail_resource_clicked` | 11 | 5 |
| `footer_link_clicked` | 6 | 3 |
| `chapter_visual_source_clicked` | 4 | 3 |
| `notebook_resource_clicked` | 3 | 3 |
| `github_resource_clicked` | 2 | 2 |

The exact ordered person comparison uses first pageview followed by a later resource event within the bounded observation window. The documented `windowFunnel` form was rejected by the connector, so the verified fallback uses conditional first-pageview and last-resource timestamps. It produces 18 converters from 145 pageview people.

### Referrals after synthetic exclusion

Selected pageviews / people:

- direct: 201 / 104
- `www.google.com`: 25 / 19, plus `www.google.com.hk`: 2 / 1
- same-domain: 15 / 8
- `atcold.github.io`: 10 / 4
- Reddit web: 8 / 5
- Gmail Android: 5 / 1
- ChatGPT: 4 / 3
- Baidu: 4 / 1
- GitHub: 2 / 2
- DuckDuckGo: 1 / 1
- Bing: 1 / 1

Guide referrers:

- gradient: 2 direct, 1 Baidu, 1 Gmail Android
- logistic: 5 direct, 1 same-domain, 1 Gmail Android
- k-means: 1 Google

No human ChatGPT referral landed on a guide in this window. ChatGPT remained 4 pageviews versus 4 in T011, with 3 people versus 2. Client-side analytics still cannot observe non-JavaScript search or AI crawlers because no `$http_log`/Vercel access-log stream is connected; those signals remain uninstrumented, not zero.

## GitHub repository surface

GitHub traffic API snapshot for `neonwatty/machine-learning-refined`, calendar dates July 11-24:

- 695 repository views / 281 unique visitors
- 257 clones / 80 unique cloners
- popular referrers: Google 138/52, github.com 47/25, Instagram 22/10, `kenndanielso.github.io` 19/7, Bing 6/5
- popular paths: repository overview 318/210; `chapter_pdfs` 101/59; repository root tree 25/16; `exercises` 23/18; `presentations` 18/10; `notes` 17/14

There is no pre-launch GitHub traffic snapshot, so no repository lift is claimed. July 21 recorded 135 clones from only 8 unique cloners; treat this as repeat/automated behavior until contrary evidence exists.

## L+14 guide directions

These are directional hypotheses for L+28, not final decisions:

1. **Logistic regression — revise candidate.** It has the largest discovery surface (88 impressions) but zero clicks, average position 28.8, five adjusted visitors, and no resource actions. At L+28 inspect whether the strong `logistic regression python` family continues and whether title/description/content better satisfy that intent.
2. **Gradient descent — revise/watch candidate.** It has 26 impressions, zero clicks, four adjusted visitors, one exposed NumPy query, and the only captured AI-assistant pageviews. Preserve the page through L+28 and inspect NumPy intent plus genuine resource use.
3. **K-means — early organic signal, not a winner.** It has 38 impressions, the only guide click, and the only confirmed human Google landing, but just one adjusted visitor and no exposed queries or resource action. Its lack of an internal guide-link event is expected for a direct search landing.

No guide is expanded, consolidated, or stopped at L+14.

## L+28 requirements

At or after `2026-08-08T21:36:42Z`:

- rerun exact PostHog `[L, L+28)` human, AI-agent, referral, guide, and ordered-conversion queries;
- exclude the recorded launch-verification identity consistently;
- use the newest complete Search Console daily range and disclose reporting lag;
- re-inspect the four indexed canonicals if any page disappears from performance;
- decide expand, revise, consolidate, stop, or insufficient data for each guide;
- preserve the distinction between pageview landings and internal `learning_guide_opened` link clicks, and treat the absence of non-JS access logs as an explicit evidence limitation;
- prepare the final Judge audit only after those decisions are receipt-backed.

## Historical L+1 limitation

The reminder fired seven hours early on July 12 and no exact L+1 snapshot was recorded. An exact historical URL Inspection state cannot be reconstructed after the fact. This note does not fabricate one. The launch submission receipt proves the requests and sitemap state; this L+14 checkpoint provides stronger current indexing, canonical, live crawlability, and ingestion evidence.
