# T007 Search Console Browser Review

Date: 2026-07-04

## Source

- Google Search Console property: `sc-domain:mlrefined.com`
- Report: Performance on Search results
- Date range: 3 months
- Last update shown in UI: 3 hours ago
- Review method: authenticated Chrome browser UI, not Search Console API credentials

## Performance Summary

| Metric | Value |
| --- | ---: |
| Total clicks | 5 |
| Total impressions | 143 |
| Average CTR | 3.5% |
| Average position | 5.0 |

## Query Evidence

| Query | Clicks | Impressions | CTR | Position |
| --- | ---: | ---: | ---: | ---: |
| `machine learning refined` | 4 | 51 | 7.8% | 2.9 |
| `machine learning refined github` | 0 | 6 | 0% | 8.0 |
| `machine learning refined 2nd edition pdf` | 0 | 2 | 0% | 5.0 |
| `machine learning refined pdf` | 0 | 2 | 0% | 6.5 |
| `machine learning refined: foundations, algorithms, and applications` | 0 | 1 | 0% | 6.0 |
| `ml devnew` | 0 | 1 | 0% | 94.0 |

## Page Evidence

| Page | Clicks | Impressions | CTR | Position |
| --- | ---: | ---: | ---: | ---: |
| `https://www.mlrefined.com/` | 5 | 143 | 3.5% | 5.0 |
| `https://www.mlrefined.com/chapters` | 0 | 1 | 0% | 3.0 |
| `https://www.mlrefined.com/instructors` | 0 | 1 | 0% | 3.0 |
| `https://www.mlrefined.com/notebooks` | 0 | 1 | 0% | 3.0 |
| `https://www.mlrefined.com/reviews` | 0 | 1 | 0% | 3.0 |

## Indexing And Sitemap Evidence

- Page indexing: 1 indexed page, 3 not-indexed redirect URLs.
- Indexed example: `https://www.mlrefined.com/`, last crawled 29 Jun 2026.
- Redirect examples are canonicalization-only:
  - `http://mlrefined.com/`
  - `https://mlrefined.com/`
  - `http://www.mlrefined.com/`
- Submitted sitemap: `https://www.mlrefined.com/sitemap.xml`.
- Search Console sitemap status: Success, submitted 1 Dec 2024, last read 27 Jun 2026, discovered pages 1.
- Direct production check on 2026-07-04 shows the sitemap currently lists six main public routes: `/`, `/notebooks`, `/chapters`, `/instructors`, `/resources`, and `/reviews`.

## SEO Priority

1. Homepage snippet/title work is the highest-impact Search Console move: it has all clicks/impressions, average position 5.0, and only 3.5% CTR.
2. Add a clear above-the-fold path to GitHub/PDF/book resources without promising solutions/manual content; Search Console already shows GitHub and PDF intent variants with impressions and zero clicks.
3. Get the new route architecture deployed and recrawled: Search Console only discovered one sitemap page even though production currently lists six main routes, and local work adds more chapter detail URLs beyond production.
4. After deployment, resubmit or revalidate the sitemap in Search Console and watch whether `/chapters`, `/notebooks`, `/resources`, and chapter detail pages start accumulating impressions.
5. Treat redirect warnings as low risk; the examples are normal canonical redirects to `https://www.mlrefined.com/`.
