<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project Intent

This repository is the modern web home for *Machine Learning Refined*. Prioritize clear book positioning, reader trust, mobile-friendly UX, chapter and resource discovery, technical SEO readiness, analytics readiness, and Vercel-friendly deployment.

# Burden Of Proof

Assume the implementation is still wrong until evidence proves otherwise. Do not accept optimistic UI, happy-path tests, generated summaries, `done`, `tests passed`, or agent claims as proof by themselves.

For meaningful work, identify the top three realistic failure modes before calling the task complete. Verify each with a command, test, trace, screenshot, audit record, analytics query, deployed smoke check, or direct programmatic inspection. Either fix the failure mode or document the evidence that rules it out.

Treat unverified assumptions as residual risk or explicit follow-up work. If a needed proof cannot be produced by an existing CLI, test, dashboard, MCP query, or script, create the narrowest useful verifier before calling the work accepted.

# Standard Verification

Use the repo's actual checks when they apply:

- `npm run lint`
- `npm run typecheck`
- `npm run knip:production`
- `npm run test:unit`
- `npm run build`
- `npm run ci`

# Risk-Scaled Evidence

Standard code changes:
Use lint, typecheck, focused tests, Knip, and build output.

UX and content changes:
Use browser inspection, desktop and mobile screenshots when relevant, console inspection, and direct copy/image checks.

SEO changes:
Verify rendered metadata, canonical URLs, sitemap or robots behavior, structured data when present, crawlable links, and meaningful page copy.

Analytics changes:
Verify PostHog or Google Search Console configuration and events with real query or dashboard evidence when credentials are available. Include at least one negative or adversarial check for user-facing workflow, SEO, analytics, or external-integration changes.

Deployment and environment changes:
Verify Vercel preview or production status, environment assumptions, and a live route smoke check when deployment is in scope.

Media and asset changes:
Verify image existence, dimensions or optimization behavior when relevant, alt text, load behavior, and mobile layout impact.

# Handoff Receipt

Final handoffs should include:

- files changed
- user-facing claims made
- exact commands, checks, URLs, screenshots, or artifacts used as evidence
- pass/fail results
- remaining risks or assumptions

`Tested locally` and `looks good` are not receipts. Name the actual command, URL, file, line, screenshot, trace, query, or dashboard result.
