# T006 PostHog Prioritization Receipt

Date: 2026-07-04

## Access

- PostHog connector access is available.
- Active project was switched to `BugDrop + Foil + MLR` because it is the only visible project name that plausibly contains MLR traffic.
- Client-side PostHog is now configured locally in ignored `.env.local` with `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST`.
- Google Search Console is reviewed manually in the authenticated browser UI for `sc-domain:mlrefined.com`; no service-account private key is required.

## PostHog Evidence

Query:

```text
query-web-stats Page, includeHost=true, includeBounceRate=true, includeAvgTimeOnPage=true, filterTestAccounts=true, limit=25, dateRange=-90d
```

Top `www.mlrefined.com` rows in the last 90 days:

| Page | Visitors | Pageviews | Avg time on page | Bounce rate |
| --- | ---: | ---: | ---: | ---: |
| `/` | 46 | 58 | 222.42s | 77.36% |
| `/chapters` | 6 | 6 | 1.67s | 0.00% |
| `/notebooks` | 4 | 6 | 13.11s | 0.00% |
| `/instructors` | 3 | 3 | 1.17s | 0.00% |
| `/reviews` | 3 | 3 | 0.00s | 0.00% |

Preview traffic also appears on `mlrefined-website.vercel.app`, confirming the analytics project has recorded MLR-related route activity beyond production.

Acquisition-channel query for the same 90-day window:

| Channel | Visitors | Pageviews |
| --- | ---: | ---: |
| Direct | 37 | 100 |
| Referral | 7 | 22 |
| Organic Search | 7 | 9 |
| Organic Social | 2 | 2 |

## Prioritization

1. Improve homepage search intent matching and internal routes: highest traffic and highest bounce rate.
2. Keep chapter detail pages and resource links crawlable: `/chapters` has modest traffic but is a high-intent navigation route.
3. Give `/notebooks` stronger above-the-fold resource discovery: notebook search demand appeared in autocomplete and the page has early traffic.
4. Treat `/instructors` and `/reviews` as trust pages: low current volume but useful for conversion proof once Search Console exposes impressions/queries.
5. Use Search Console next: Organic Search is present in PostHog, but PostHog cannot reveal Google query impressions, CTR, and average position.

## Search Console Workflow

Run `npm run seo:readiness -- --json` to verify local PostHog client readiness and confirm that Search Console evidence should come from the browser UI:

- Performance report: queries, pages, clicks, impressions, CTR, and position.
- Indexing reports: pages, sitemap status, and crawl/indexing issues.
- Manual screenshots or notes should be attached to this goal when Search Console is reviewed.
