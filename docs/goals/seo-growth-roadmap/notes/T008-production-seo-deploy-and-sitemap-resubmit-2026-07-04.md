# T008 Production SEO Deploy And Sitemap Resubmission

Date: 2026-07-04

## Production Deployment

- Vercel deployment id: `dpl_AVXtUnA6kztFYae8DyR9FrxPovcp`
- Production deployment URL: `https://mlrefined-website-lzdwet4bk-jermwatts-projects.vercel.app`
- Production alias verified: `https://www.mlrefined.com`
- Deployment target: `production`
- Deployment status: `Ready`

## Live SEO Evidence

- `https://www.mlrefined.com/` returns the updated homepage title:
  `Machine Learning Refined 2nd Edition | GitHub, PDFs & Notebooks`
- Homepage meta description contains the updated GitHub, chapter PDF, exercise, slide, Python resource, and Cambridge textbook wording.
- Homepage Open Graph title now matches the richer homepage title.
- Homepage canonical is `https://www.mlrefined.com`.
- Homepage copy includes the official second-edition positioning and the `Browse Python notebooks` internal CTA.
- Homepage JSON-LD points chapter items at crawlable `/chapters/[slug]` URLs.
- Live route checks returned `200` for `/`, `/chapters`, `/notebooks`, `/resources`, `/reviews`, `/instructors`, `/chapters/linear-regression`, and `/chapters/introduction-to-machine-learning`.
- Live sitemap lists the main public routes plus six chapter detail URLs.

## Search Console Resubmission

- Search Console property: `sc-domain:mlrefined.com`
- Submitted sitemap: `https://www.mlrefined.com/sitemap.xml`
- Submission method: authenticated Chrome browser UI.
- Search Console response: `Sitemap submitted successfully`.
- Table row after submission:
  `https://www.mlrefined.com/sitemap.xml	 Sitemap index	 4 Jul 2026	 27 Jun 2026	 Success	 1	 0`

## Remaining Search Console Risk

Google accepted the sitemap resubmission, but it had not reread the expanded sitemap during the browser check. The table still showed `Last read` as `27 Jun 2026` and `Discovered pages` as `1`. Recheck after Google's next crawl to confirm the chapter detail URLs are discovered and indexed.
