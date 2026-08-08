# T015 L+28 SEO/GEO measurement checkpoint

Recorded: 2026-08-08 after `2026-08-08T21:36:42Z`

Launch timestamp (`L`): `2026-07-11T21:36:42Z`

Exact cumulative observation window: `[2026-07-11T21:36:42Z, 2026-08-08T21:36:42Z)`

Exact second-half window: `[2026-07-25T21:36:42Z, 2026-08-08T21:36:42Z)`

## Outcome

The L+28 checkpoint is complete with one explicit platform limitation: the supported authenticated Search Console browser surface was not callable in this run. The newest directly observed Search Console range therefore remains the L+14 capture for July 12-23, which had a two-day reporting lag when recorded on July 25. This limitation is **unavailable current evidence**, not zero traffic, zero indexing, or a reconstructed L+28 report.

Decisions:

1. **Logistic regression: revise.** Preserve the URL and substantive page, but revise the search-to-resource pathway around the demonstrated `logistic regression python` intent. The last direct Search Console evidence showed 88 impressions and zero clicks; the exact L+28 PostHog window has 9 pageviews / 6 people, including the first human ChatGPT guide referral, but zero genuine guide resource actions.
2. **Gradient descent: revise.** Preserve the URL and strengthen the NumPy/Python intent match and the path to runnable source material. The last direct Search Console evidence showed 26 impressions and zero clicks; L+28 has 6 pageviews / 5 people, two human Google pageviews from one person, two NotebookLM-classified guide pageviews, and zero genuine guide resource actions.
3. **K-means: insufficient data.** Keep the page live without declaring it a winner or revising from one observation. The last direct Search Console evidence showed 38 impressions / 1 click, while the exact L+28 PostHog window still contains only 1 pageview / 1 person, the same human Google landing observed at L+14, and no resource action.

No guide qualifies for **expand** because none produced a genuine guide resource action. No guide qualifies for **consolidate** because the latest direct Google inspection selected each page's own canonical and the current live pages remain distinct and self-canonical. No guide qualifies for **stop** because the pages are substantive, live, crawlable, and have no demonstrated quality, duplication, usability, or maintenance failure.

The recorded minimum-sample rule was: default to insufficient data only when both total guide impressions are below 100 and human guide landings are below 20. The last directly observed guide total already reached 152 impressions, so the overall gate is met even though L+28 adjusted guide landings remain only 16 pageviews / 11 people. Per-guide evidence can still be insufficient, as it is for k-means.

## Search Console and indexed canonicals

### Newest directly observed performance range

The supported authenticated Search Console browser was unavailable at L+28. The newest directly observed complete range remains July 12-23 from the L+14 receipt:

- all property traffic: 16 clicks / 497 impressions / 3.2% CTR / average position 13.8;
- three guides combined: 1 click / 152 impressions;
- logistic regression: 0 clicks / 88 impressions / average position 28.8;
- k-means: 1 click / 38 impressions / average position 22.3;
- gradient descent: 0 clicks / 26 impressions / average position 22.5;
- exposed query evidence included `logistic regression python` at 0/11 and `numpy gradient descent` at 0/1.

That report was captured July 25 with data complete through July 23, a two-day lag. No L+28 lag is estimated because no current report was accessible.

### Indexing and canonical evidence

The newest direct Google URL Inspection evidence remains the L+14 receipt: `/learn` and all three guides were indexed, with Google-selected canonicals matching the declared self-canonicals. The sitemap reported Success, 25 discovered URLs, and a July 22 last read.

Current production inspection at L+28 proves only live eligibility, not current Google indexing:

- `/learn` and all three guides return HTTP 200 without a redirect;
- all four emit `index, follow`, no `noindex`, and an exact self-canonical;
- the sitemap returns 200, contains 25 URLs, and includes all three guides;
- robots returns 200, has no exact root disallow, permits Googlebot, OAI-SearchBot, and the general user agent, and advertises the sitemap.

An indexing request, live URL test, self-canonical, or sitemap entry is never treated as indexing proof. Current Google-selected canonical and performance evidence remain unavailable until Search Console can be read again.

## PostHog

Project: `Experimental Apps` / previously documented `BugDrop + Foil + MLR` (`422537`)

Host: `www.mlrefined.com`

Project timezone: UTC

Traffic classification: the verified `$virt_traffic_type` event property is used. PostHog again emitted a taxonomy warning for the virtual property while returning classified values; both event schema discovery and query results expose it.

### Raw traffic classes and launch-verification separation

Raw classified pageviews in `[L, L+28)`:

- `Regular`: 513 pageviews / 258 people;
- `AI Agent`: 3 pageviews / 3 people.

The known launch-verification identity was re-derived from the single `learning_guide_resource_clicked` event at `2026-07-11T21:55:54.860Z`, using its one-second bounded event lookup rather than a guessed identity. Excluding that identity removes 10 pageviews and the only guide-resource event from the reader series.

Adjusted reader totals:

| Metric | T011 baseline | L+14 | L+28 cumulative | Exact second half |
| --- | ---: | ---: | ---: | ---: |
| Pageviews | 180 | 282 | 503 | 221 |
| People | 95 | 145 | 257 | 118 |
| Ordered resource converters | 13 | 18 | 32 | 15 |
| Ordered conversion | 13.7% | 12.4% | 12.5% | 12.7% |

The cumulative L+28 ordered conversion is `32 / 257 = 12.45%`, 1.23 percentage points below the T011 baseline and effectively unchanged from L+14. Counts across unequal windows are not interpreted as causal lift. The exact second half independently remains near the same conversion rate.

The ordered conversion query uses each person's first pageview followed by a later resource event inside the bounded window. It includes chapter, notebook, GitHub, side-rail, instructor, visual-source, footer, and guide resource events. It uses `person_id`, exact timestamp and host filters, and the same launch-verification exclusion.

### Guide landings and internal discovery

| Guide | L+14 pageviews / people | L+28 pageviews / people | Second-half pageviews / people |
| --- | ---: | ---: | ---: |
| Gradient descent | 4 / 4 | 6 / 5 | 2 / 1 |
| Logistic regression | 7 / 5 | 9 / 6 | 2 / 1 |
| K-means | 1 / 1 | 1 / 1 | 0 / 0 |
| Combined | 12 / 9 | 16 / 11 | 4 / 2 |

Adjusted `learning_guide_opened`: 11 events / 9 people. These are internal-link clicks, not page loads. The recorded locations remain `learn_hub`, `notebook_featured`, and `chapter_detail`.

Adjusted `learning_guide_resource_clicked`: **0 events / 0 people**. The raw single event remains the known launch verification. The absence of genuine guide actions is the principal reason neither revision candidate is expanded.

### Resource actions

Adjusted cumulative resource events / people:

- `chapter_resource_clicked`: 31 / 20;
- `side_rail_resource_clicked`: 15 / 9;
- `github_resource_clicked`: 7 / 5;
- `notebook_resource_clicked`: 7 / 6;
- `footer_link_clicked`: 6 / 3;
- `chapter_visual_source_clicked`: 5 / 4;
- `instructor_chapter_resource_clicked`: 2 / 2;
- `learning_guide_resource_clicked`: 0 / 0.

Site-wide resource use exists and GitHub resource clicks increased from the L+14 cumulative 2 events / 2 people to 7 / 5. The guide-specific pathway has not yet contributed a genuine action.

### Referrals and GEO signals

Adjusted cumulative pageviews / people:

- direct: 280 / 145;
- Google: 60 / 28, plus Google Hong Kong 2 / 1;
- `atcold.github.io`: 28 / 6;
- same-domain: 20 / 9;
- ChatGPT: 18 / 8;
- GitHub: 13 / 5;
- Reddit web: 12 / 7;
- Bing domains combined: 3 / 3;
- DuckDuckGo: 4 / 4;
- Baidu: 4 / 1.

ChatGPT grew from 4 pageviews / 3 people at L+14 to a cumulative 18 / 8. Its two logistic-regression pageviews from one person are the first captured human ChatGPT guide landing. This is a referral/usage signal, not proof of an answer citation, answer impression, or complete generative-search coverage.

AI Agent pageviews are 3 / 3: two NotebookLM/Google `ai_assistant` visits to the gradient guide already observed at L+14, plus one additional NotebookLM visit to the homepage. Client-side PostHog still cannot see crawlers that do not run JavaScript because no Vercel access-log or `$http_log` stream is connected. Non-JS AI/search crawling remains uninstrumented, not zero.

PostHog classified a 43-pageview / 43-person Yandex-referral burst as `Regular`. The rows were all Russian homepage landings, mostly on August 3, spread across Chrome, Yandex Browser, Safari, Firefox, and Edge. The primary series preserves PostHog's verified classification; the burst is disclosed as a sensitivity concern. It does not touch a guide landing and therefore does not change any per-guide decision.

## GitHub repository surface

GitHub's traffic API exposes rolling calendar-day snapshots rather than the exact timestamp-bounded PostHog window. The L+28 call returned July 25 through August 7, the 14 calendar days adjacent to the L+14 July 11-24 snapshot:

| Metric | July 11-24 | July 25-August 7 | Observed difference |
| --- | ---: | ---: | ---: |
| Repository views | 695 | 658 | -37 (-5.3%) |
| Unique visitors | 281 | 229 | -52 (-18.5%) |
| Clones | 257 | 75 | -182 (-70.8%) |
| Unique cloners | 80 | 45 | -35 (-43.8%) |

The prior period's 135-clone / 8-unique-cloner July 21 anomaly did not repeat, which explains much of the clone decline. There is no pre-launch GitHub baseline, and no causal website-to-repository lift is claimed.

Current popular surface:

- Google referrer: 123 views / 61 unique visitors;
- repository overview: 355 / 147;
- `chapter_pdfs` tree: 76 / 47;
- `chapter_pdfs/README.md`: 32 / 18;
- exercises: 18 / 14;
- presentations: 9 / 8;
- notes: 9 / 7.

The repository and its canonical resource directories continue to receive material traffic. Website-side `github_resource_clicked` and GitHub's own rolling traffic are independent indicators; neither proves the other caused the visit.

## Decision follow-up

The next content iteration should be a new, separately scoped growth tranche rather than silently extending this launch experiment:

- logistic regression: test a search snippet/internal-distribution revision explicitly centered on the existing complete NumPy implementation and expose the canonical notebook/code resource earlier;
- gradient descent: tighten the NumPy implementation intent and expose the runnable notebook/source path earlier while preserving the explanatory material;
- k-means: make no content decision until a later Search Console range or at least materially more human landings appears;
- keep `learning_guide_resource_clicked` as the guide-success action and do not substitute generic site conversion for guide usefulness;
- reconnect the authenticated Search Console surface before the next revision baseline, and add server/access-log ingestion if complete crawler evidence becomes important.

## Evidence limitations

- Current L+28 Search Console performance, sitemap UI, and URL Inspection were unavailable because the supported authenticated browser surface was not callable. They are not reported as zero.
- The last direct Google index/canonical proof is the L+14 URL Inspection capture; current live eligibility is not current Google indexing proof.
- Bing Webmaster and platform-native generative reports remain unavailable.
- PostHog is client-side and incomplete for non-JavaScript crawlers.
- GitHub traffic is a rolling calendar-day API and has no pre-launch comparison.
- Low guide-specific actions make revision direction higher confidence than content-effect magnitude.

## Final-audit preparation

T015 now supplies the delayed-measurement evidence that the earlier not-complete T999 audit required: exact launch-window human/AI/synthetic separation, live crawl eligibility, a direct L+14 Search Console follow-up, an honest L+28 Search Console limitation, current referrals and conversions, GitHub distribution traffic, and per-guide decisions. A new final Judge/PM audit must evaluate the entire goal oracle rather than reuse the earlier not-complete decision.
