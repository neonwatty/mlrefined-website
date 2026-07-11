# T010 release gate status

Date: 2026-07-11

Production deployment was deliberately not started because the required browser-based desktop/mobile, media, console, and click-event verification is still unavailable. The in-app Browser timed out attaching to its webview twice after the documented reconnect and visibility retry. The execution contract says not to deploy while local verification is red, and a missing verifier is not evidence of a pass.

Release-ready work completed:

- Website changes committed as `b0464ca` on `codex/seo-geo-growth-experiments`, rebased directly onto `origin/main` (`e9565a3`).
- Post-rebase `npm run ci` passes: lint, typecheck, Knip, 25 unit tests, and a 34-page production build.
- The branch is one commit ahead of `origin/main` and has not been pushed, avoiding an automatic preview deployment while the gate is red.
- Vercel CLI 55.0.0 authentication is valid as `jermwatt`; project linkage is `jermwatts-projects/mlrefined-website` (`prj_dnpbuBCaFgZpaN0X3ZjS3gB8VdJr`).
- Latest listed production deployment before this tranche is Ready and seven days old; the live domain still returns 404 for `/learn` and all three guides.
- Canonical resource-repository commit `c5bf0d4` is pushed on `codex/website-distribution-loop`, but PR creation is blocked by an invalid GitHub API token; the branch remains unmerged.

Exact recovery sequence:

1. Restore the Codex in-app Browser webview and complete the desktop/390px checks plus click-event proof.
2. Push `codex/seo-geo-growth-experiments` and create/inspect the website preview.
3. Deploy production with Vercel and record deployment URL/ID/alias/timestamp.
4. Prove the live `/learn` hub, three guides, changed chapter/notebook/resource paths, metadata, JSON-LD, sitemap, robots, images, console, analytics, and all sitemap URLs.
5. Re-authenticate GitHub CLI or restore connector PR-create permission; open the prepared resource-repository draft PR.
6. Only after all `/learn*` URLs return 200, mark the resource PR ready/merge and verify the live README/CFF surface.
7. Submit sitemap/URL inspection only within authenticated Search Console authority; record submission as a request, not indexing proof.
