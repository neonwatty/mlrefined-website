# T005 Search Console Follow-Up Checkpoint

Date: 2026-07-04

## Current State

The schema/snippet tranche was deployed to production on 2026-07-04 as Vercel deployment `dpl_F5q1RdPak81e64Yonq4j6tTYo7Vg`.

Search Console URL Inspection requests were already submitted earlier on 2026-07-04 for:

- `https://www.mlrefined.com/`
- `https://www.mlrefined.com/chapters`
- `https://www.mlrefined.com/notebooks`
- `https://www.mlrefined.com/chapters/introduction-to-machine-learning`
- `https://www.mlrefined.com/chapters/linear-regression`

The new production deployment now serves:

- `/chapters` with `BreadcrumbList` and `CollectionPage` JSON-LD.
- `/notebooks` with GitHub/Python notebook title, description, and visible copy.
- Chapter detail descriptions generated from each chapter's actual resource kinds.
- Sitemap `lastmod` values set to `2026-07-04T00:00:00.000Z`.

## Follow-Up Window

Recommended first Search Console recheck: **2026-07-07 to 2026-07-11**.

Reason: Google's own structured-data workflow notes that after deployment and recrawl requests, re-crawling and re-indexing can take several days.

## Search Console Checks

Use the authenticated browser UI for `sc-domain:mlrefined.com`.

1. Sitemaps
   - Check `https://www.mlrefined.com/sitemap.xml`.
   - Evidence to record:
     - Status.
     - Last read date.
     - Discovered pages.
   - Success signal:
     - Last read is after 2026-07-04.
     - Discovered pages increases beyond `1`.

2. URL Inspection
   - Recheck:
     - `https://www.mlrefined.com/chapters`
     - `https://www.mlrefined.com/notebooks`
     - `https://www.mlrefined.com/chapters/introduction-to-machine-learning`
     - `https://www.mlrefined.com/chapters/linear-regression`
   - Evidence to record:
     - Indexed or not indexed state.
     - Last crawl date, if shown.
     - Any structured-data/enhancement notes Search Console exposes.
   - Success signal:
     - URLs move out of `Discovered - currently not indexed` or `URL is unknown to Google`.

3. Performance
   - Date range: compare latest available 7 days and 28 days after recrawl.
   - Query/page evidence to watch:
     - `machine learning refined github`
     - `machine learning refined pdf`
     - `machine learning refined notebooks`
     - `/chapters`
     - `/notebooks`
     - representative `/chapters/[slug]` URLs
   - Success signal:
     - New impressions on `/chapters`, `/notebooks`, or chapter detail URLs.
     - Improved CTR on GitHub/PDF/notebook intent queries after recrawl.

## Residual Risk

The current goal can consider the Search Console follow-up scheduled, but indexing and impressions remain external to Google. A future checkpoint should update this note or add a new receipt with the actual Search Console evidence.
