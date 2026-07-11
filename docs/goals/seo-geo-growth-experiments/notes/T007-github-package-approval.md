# T007 Judge decision: approve a draft cross-repository distribution package

Date: 2026-07-11

Decision: **approved as a separate draft PR; merge is release-gated**.

## Authority and boundary

The owner explicitly asked to drive usage to the corresponding resources and GitHub repository, the authenticated account owns/administers the canonical repository, and the proposed mutations are limited to its primary discovery/citation surfaces. Preparing a branch, pushing it, and opening a draft PR is within that scope. Directly pushing to `main`, merging while guide URLs return 404, changing licensing attribution, or contacting third parties is not authorized by this package.

The canonical resource repository is not locally checked out. T008 may create a sparse clone at:

`/Users/neonwatty/Desktop/machine-learning-refined-seo-distribution`

Branch:

`codex/website-distribution-loop`

The sparse checkout must contain only the root files required for this package. Product edits are limited to:

- `README.md`
- new `CITATION.cff`

Git metadata created by clone/branch/commit is an ordinary setup artifact, not permission to edit other repository files.

## Approved README contract

### Opening distribution panel

Add a compact block immediately after the welcome/introduction and before the audience branches. It must:

- identify `https://www.mlrefined.com/` as the official companion site;
- describe `/learn` as visual, step-by-step Python/NumPy guides rather than raw source notebooks;
- link with descriptive anchor text to the `/learn` hub and the three exact guides;
- retain direct canonical repository paths for chapter PDFs, source notebooks, exercises, and slides;
- avoid ranking, completeness, solutions-manual, or “official answers” claims;
- use clean durable URLs without UTM parameters. GitHub referrer plus site landing/resource events is the initial measurement contract.

### Visible citation/entity block

Add a compact “Book and citation” section near the physical-copy/publisher section or another semantically appropriate point. It must visibly state:

- *Machine Learning Refined: Foundations, Algorithms, and Applications*, second edition;
- Jeremy Watt, Reza Borhani, and Aggelos K. Katsaggelos;
- Cambridge University Press, 2020;
- print ISBN 9781108480727;
- DOI `10.1017/9781108690935`;
- links to the current official Cambridge page, official companion site, and `CITATION.cff`.

### Canonicalization and repair

- Mechanically replace only the exact 156 occurrences of `github/jermwatt/machine_learning_refined/` with `github/neonwatty/machine-learning-refined/`.
- Replace the dead `cambridge.force.com/Samples` instructor link with the current official Cambridge second-edition page. Retain examination-copy wording only after verifying the page visibly offers that action.
- Do not otherwise rewrite the long chapter catalog, notebook paths, retailer links, or copy.

## Approved CFF contract

Use CFF schema 1.2.0 with a root record for the companion resources and `preferred-citation` for the book:

- Root title: `Machine Learning Refined companion resources`.
- Root authors: Jeremy Watt and Reza Borhani, matching the existing repository license attribution; do not infer additional repository-material authors.
- Root type: `software`; repository-code is the canonical repository; URL is the official site.
- Message: cite the second-edition book in `preferred-citation` when using the resources.
- Preferred citation type: `book`.
- Preferred citation authors: Jeremy Watt; Reza Borhani; Aggelos K. Katsaggelos.
- Preferred title: `Machine Learning Refined: Foundations, Algorithms, and Applications`.
- Edition: `2` or `2nd`, whichever validates under CFF 1.2.0.
- Cambridge University Press; publication date/year 2020; print ISBN 9781108480727; DOI `10.1017/9781108690935`; current official Cambridge URL.

The Worker must validate with the official `cffconvert --validate` path (a temporary `uvx --from cffconvert` environment is acceptable) and inspect GitHub's rendered citation recognition on the draft PR/repository branch when available.

## Draft PR and merge gate

T008 may commit, push the branch, and open a draft PR. The PR body must include:

- exact README count changes;
- CFF validation result;
- representative Colab and new-link checks;
- explicit note that `/learn` URLs return 404 in production at PR creation time;
- merge checklist requiring production 200 for `/learn` and all three guides.

T008 must not mark the PR ready or merge it. T010 owns the coordinated release sequence:

1. deploy and verify website production;
2. confirm all five new site/guide URLs in the README return 200;
3. re-check the draft PR, mark ready/merge within current authority, and verify the live README/citation surface;
4. record resulting website deployment and resource-repository commit/PR URLs.

## Worker package

Objective: prepare, validate, commit, push, and open a draft PR for the canonical repository's official-site/guide distribution panel, canonical Colab paths, live publisher link, visible book entity block, and valid preferred citation—without merging ahead of the website deploy.

Allowed files and paths:

- sparse clone/worktree setup at `/Users/neonwatty/Desktop/machine-learning-refined-seo-distribution/.git/**`
- `/Users/neonwatty/Desktop/machine-learning-refined-seo-distribution/README.md`
- `/Users/neonwatty/Desktop/machine-learning-refined-seo-distribution/CITATION.cff`
- `docs/goals/seo-geo-growth-experiments/notes/**`
- `docs/goals/seo-geo-growth-experiments/state.yaml`

Verification:

- Clone/fetch canonical `main`, create `codex/website-distribution-loop`, and prove the base commit/repository identity.
- `git diff --check` and a diff limited to `README.md` plus `CITATION.cff`.
- Exact legacy segment count changes from 156 to 0; canonical replacement count rises by exactly 156; notebook suffix/path multiset is unchanged.
- Representative legacy and canonical Colab GETs return 200 before the rewrite; representative resulting Colab GETs return 200 after it.
- Dead force.com link is absent; current Cambridge link returns 200 and still offers examination-copy behavior.
- Official site currently returns 200; record expected 404 for all undeployed `/learn*` routes in the draft PR merge checklist.
- Every new descriptive anchor and visible author/ISBN/DOI field is present once in the intended section.
- `uvx --from cffconvert cffconvert --validate` passes from the sparse checkout.
- Render README Markdown locally with a trustworthy parser or inspect the GitHub draft PR rendering for malformed HTML/links.
- Commit intentionally, push the branch, and create a draft PR; verify it is draft and unmerged.

Stop if:

- The clone target exists with unrelated state or a dirty worktree.
- The base repository/branch differs from the audited canonical repository/main.
- A replacement changes notebook path suffixes or more than the exact owner/repository segment.
- CFF validation requires changing license attribution or inventing contributor identity.
- GitHub permissions differ from the audit or branch protection rejects the scoped branch/PR flow.
- Any requested edit falls outside README.md and CITATION.cff.
- The operation would merge or publish guide links on main before production 200 proof.

## Failure modes the Worker must rule out

1. Broken Colab links from bulk replacement: exact count and path-multiset proof plus live checks.
2. Citation/license conflict: schema validation, root/preferred-citation separation, existing license untouched.
3. README sends users to 404 guides: draft-only PR and explicit production-dependent merge gate.
