# T017 production release receipt

Launch timestamp `L`: **2026-07-11T21:36:42Z** — creation time of the final Ready main-branch Vercel production deployment serving `www.mlrefined.com`.

## Website release

- Branch `codex/seo-geo-growth-experiments` was pushed after `npm run ci` passed locally.
- Vercel preview `dpl_4Tqm9WNxqdunopEvRvYRrmQY3PZN` became Ready. Authenticated preview requests returned HTTP 200 for `/`, `/learn`, all three guides, `robots.txt`, and `sitemap.xml`; `/llms.txt` returned the intentional HTTP 404.
- Direct production deployment `dpl_4YQqW16DSHSZWhwzeE9VV2w59FVz` became Ready and aliased to `www.mlrefined.com`.
- Website PR [#44](https://github.com/neonwatty/mlrefined-website/pull/44) passed Dependabot Gate, `Lint, Typecheck, Knip, Test, Build`, Vercel, and Vercel Preview Comments.
- PR #44 merged to `main` as `06856c21f56f54ea6036639c224cfa44b96b29f5` at 2026-07-11T21:36:39Z.
- The merge-generated production deployment `dpl_2t8GM4QuE8BzBn8SSaPCa3iLRL4w` became Ready. Live HTML on `www.mlrefined.com` carries that exact deployment identifier.

## Live crawl and browser proof

- All 25 URLs in the live sitemap return HTTP 200.
- `/learn`, all three guides, their three matching chapters, `/notebooks`, `/resources`, `robots.txt`, and `sitemap.xml` return HTTP 200; `/llms.txt` returns HTTP 404.
- Googlebot and OAI-SearchBot are explicitly allowed while `/api/` and `/admin/` remain disallowed.
- Every guide has a self-canonical, `BreadcrumbList` plus `LearningResource` JSON-LD, stable `#book` and three author references, and an HTTP 200 visual asset.
- At 1440x1000, the guide header ends at 64px and the article starts at 65px; `scrollWidth === clientWidth` and the browser recorded no new warnings/errors.
- At 390x844, the hub, three guides, three matching chapters, notebooks, and resources all have `scrollWidth === clientWidth`; guide headings start below the 60px header; all guide visuals load with non-zero dimensions; the browser recorded no new warnings/errors.
- The hub loads only its first visual eagerly; the remaining two stay lazy.

## GitHub distribution proof

- Resource PR [#50](https://github.com/neonwatty/machine-learning-refined/pull/50) was opened only after all four live learning URLs returned HTTP 200.
- `CITATION.cff` validated against schema 1.2.0 immediately before merge; the diff remained limited to `README.md` and `CITATION.cff`.
- PR #50 merged as `4c62f70558f8b4ce59c6d4088b7f7204d996dea9` at 2026-07-11T21:32:22Z.
- GitHub's rendered default-branch README exposes the official site and all three guide links. The merged CFF still validates.

## Search Console and analytics proof

- Property: `sc-domain:mlrefined.com`.
- The existing sitemap submission is `https://www.mlrefined.com/sitemap.xml`, status Success, submitted and last read 2026-07-04, with the earlier 12-page discovery count. This is a stale pre-launch read, not evidence against the current 25-URL sitemap.
- URL Inspection initially reported the new gradient guide unknown to Google, as expected immediately after launch.
- Search Console live test at 2026-07-11 14:34 MST reported **URL is available to Google**, **Page can be indexed**, and **Breadcrumbs: 1 valid item detected**.
- No re-submission or indexing-request form was submitted; natural sitemap/internal-link discovery remains the launch path unless the owner separately authorizes that external action.
- A live browser click at 2026-07-11T21:30:51.505Z navigated from the gradient guide to its Chapter 3 page.
- PostHog project 422537 recorded `learning_guide_resource_clicked` at `2026-07-11T21:30:51.760Z` with `guide=gradient-descent-from-scratch`, `location=guide_sources`, `resource=chapter`, `href=/chapters/first-order-optimization-techniques`, the exact guide current URL, host `www.mlrefined.com`, and traffic type `Regular`.
- The PostHog warehouse-schema helper was unavailable, but event taxonomy and property taxonomy were verified before the bounded, time-filtered event query.

## Measurement handoff

- `L+1`: 2026-07-12T21:36:42Z
- `L+14`: 2026-07-25T21:36:42Z
- `L+28`: 2026-08-08T21:36:42Z
- T015 owns those checkpoints and must keep the T011 minimum-sample rules: fewer than 100 total guide impressions and fewer than 20 human guide landings is `insufficient data`, not a winner.
