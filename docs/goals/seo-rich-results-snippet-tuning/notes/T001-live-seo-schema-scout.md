# T001 Live SEO Schema Scout

Date: 2026-07-04

## Scope

Read-only Scout pass for the active GoalBuddy task. The pass checked live rendered metadata, JSON-LD, crawl surfaces, existing route/source shape, Search Console receipts, and current Google structured-data/title/snippet guidance.

## Evidence Commands

- `node` live metadata/JSON-LD extractor for `/`, `/chapters`, `/notebooks`, `/chapters/introduction-to-machine-learning`, and `/chapters/linear-regression`.
- `node` structured-data sanity checker for required fields on `WebSite`, `Book`, `ItemList`, `BreadcrumbList`, `CollectionPage`, and `LearningResource`.
- `curl -sS https://www.mlrefined.com/robots.txt`
- `curl -sS https://www.mlrefined.com/sitemap.xml | rg -n '<loc>|lastmod|chapters/linear-regression|notebooks|chapters</loc>'`
- `HEAD` checks for `https://www.mlrefined.com/opengraph-image`, `https://www.mlrefined.com/twitter-image`, and `https://www.mlrefined.com/book-cover-2nd.png`.
- Source reads: `src/app/chapters/page.tsx`, `src/app/notebooks/page.tsx`, `src/app/chapters/[slug]/page.tsx`, `src/lib/seo.ts`.

## Live Metadata And JSON-LD Baseline

| Route | Status | Title/description state | JSON-LD state | Notable term coverage |
| --- | ---: | --- | --- | --- |
| `/` | 200 | Strong homepage title and description target 2nd edition, GitHub, PDFs, notebooks, exercises, slides, Python resources, Cambridge textbook. | Parseable `WebSite`, `Book`, `ItemList`; sanity checker error count 0. | GitHub/PDF/notebooks/exercises/slides present; no solutions/manual overclaim. |
| `/chapters` | 200 | Description already includes optimization, regression, classification, neural networks, PDFs, notebooks, exercises, GitHub resources. | No JSON-LD script on live page. | Strong visible PDF/notebooks/exercises/slides/GitHub coverage; no solutions/manual overclaim. |
| `/notebooks` | 200 | Description says visual Python notebook previews, optimization, regression, clustering, feature engineering, neural network topics. | Parseable `BreadcrumbList`, `CollectionPage`; sanity checker error count 0. | Notebooks present, but visible/body text lacks GitHub, PDF, exercises, and slides terms. |
| `/chapters/introduction-to-machine-learning` | 200 | Chapter-specific title and description present. | Parseable `BreadcrumbList`, `LearningResource`; sanity checker error count 0. | PDF present; notebooks/exercises/slides not visible in extracted text for this chapter because resources differ. |
| `/chapters/linear-regression` | 200 | Chapter-specific title and description present. | Parseable `BreadcrumbList`, `LearningResource`; sanity checker error count 0. | PDF/notebooks/exercises/slides present; no solutions/manual overclaim. |

## Crawl And Media Evidence

- `robots.txt` allows `/`, disallows only `/api/` and `/admin/`, and points to `https://www.mlrefined.com/sitemap.xml`.
- Live sitemap lists `/`, `/notebooks`, `/chapters`, `/instructors`, `/resources`, `/reviews`, and six chapter detail URLs.
- Live sitemap `lastmod` values still show `2026-06-26T00:00:00.000Z`, even though SEO deployments and Search Console URL inspection happened on 2026-07-04.
- Live image routes return `200 image/png`:
  - `https://www.mlrefined.com/opengraph-image`
  - `https://www.mlrefined.com/twitter-image`
  - `https://www.mlrefined.com/book-cover-2nd.png`

## Google Guidance Used

- Google says the Rich Results Test is the official Google-specific structured-data tool, while Schema Markup Validator is generic Schema.org validation.
- Google says valid structured data does not guarantee rich-result display, and content in structured data must be representative of visible page content.
- Google title-link guidance emphasizes descriptive concise titles, avoiding boilerplate/keyword stuffing, and notes Google uses `<title>`, visible H1, `og:title`, page text, anchor text, and `WebSite` structured data.
- Google snippet guidance says snippets are generated primarily from page content, sometimes from meta descriptions, and recommends unique high-quality descriptions that accurately summarize the page.
- Google course-list guidance is relevant as a possible future rich-result direction, but it requires `Course`/`ItemList` markup with required properties and should not be added unless the site can truthfully present the chapter/notebook tracks as courses.

## Snippet And Schema Gaps Ranked

1. `/notebooks` is the highest-impact Worker target: Search Console already found notebook/resource impressions, but the live visible page lacks GitHub/PDF/exercise/slide language and its meta description omits GitHub/source-resource intent.
2. `/chapters` should get collection JSON-LD: it is the chapter hub, already has strong visible page copy, but currently has no JSON-LD. A `CollectionPage` + `BreadcrumbList` built from the existing chapter list is a safe, visible-content-aligned improvement.
3. Chapter details should tune visible labels/copy for consistency: some chapters, such as introduction, do not expose notebook/exercise/slide terms in body text when those resources are not present; descriptions currently use a generic "PDFs, notebooks, exercises, slides" phrase for every chapter. This is safe only if generated from actual `chapter.resources`.
4. Sitemap `lastmod` values should be updated or made source-driven: all live URLs currently advertise June 26 despite July 4 content and metadata deployments.

## Top Three Failure Modes

1. **Schema overclaiming:** adding `Course` or richer educational schema that is not visibly supported by page content or lacks Google-required properties. Evidence: current safe schema types are parseable; Google guidance says structured data must represent visible page content.
2. **Snippet mismatch:** metadata says GitHub/PDF/exercises/slides while visible page copy or actual resources do not support those terms. Evidence: `/notebooks` lacks several high-intent visible terms; chapter descriptions are generic across chapters.
3. **Recrawl stale signals:** sitemap `lastmod` remains June 26 and Search Console still needs Google recrawl; improvements may be slower to register if changed URLs do not advertise fresh modification dates.

## Recommended First Worker Package

Implement one vertical SEO package:

- Add `collectionPageJsonLd` to `/chapters` using existing chapter data.
- Tune `/notebooks` title/description/intro copy to include GitHub notebooks, Python notebooks, and source-backed chapter resources without claiming PDFs/exercises/slides are hosted on that page.
- Generate chapter detail descriptions from each chapter's actual resource kinds instead of the current generic all-resource phrase.
- Update sitemap `lastModified` behavior so current changed routes advertise a truthful July 4, 2026 modification date or a code-level constant matching the deployed SEO tranche.
- Verify with lint, typecheck, focused tests, build, rendered metadata/JSON-LD checks for changed routes, and live checks after deployment.
