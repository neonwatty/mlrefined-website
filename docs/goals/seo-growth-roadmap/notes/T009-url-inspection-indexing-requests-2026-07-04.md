# T009 URL Inspection Indexing Requests

Date: 2026-07-04

## Source

- Google Search Console property: `sc-domain:mlrefined.com`
- Workflow: URL Inspection in authenticated Chrome browser UI
- Action: requested indexing for priority URLs after the production SEO deployment

## Submitted URLs

| URL | Search Console inspection state | Request indexing result |
| --- | --- | --- |
| `https://www.mlrefined.com/` | URL is on Google; page is indexed; served over HTTPS | Indexing requested; URL was added to a priority crawl queue |
| `https://www.mlrefined.com/chapters` | URL is not on Google; page is not indexed: Discovered - currently not indexed | Indexing requested; URL was added to a priority crawl queue |
| `https://www.mlrefined.com/notebooks` | URL is not on Google; page is not indexed: URL is unknown to Google | Indexing requested; URL was added to a priority crawl queue |
| `https://www.mlrefined.com/chapters/introduction-to-machine-learning` | URL is not on Google; page is not indexed: Discovered - currently not indexed | Indexing requested; URL was added to a priority crawl queue |
| `https://www.mlrefined.com/chapters/linear-regression` | URL is not on Google; page is not indexed: Discovered - currently not indexed | Indexing requested; URL was added to a priority crawl queue |

## Follow-Up

Recheck Search Console after Google recrawls. Success means the sitemap's discovered page count increases beyond `1`, the submitted URLs move out of `Discovered - currently not indexed` or `URL is unknown to Google`, and the new pages begin accumulating impressions.
