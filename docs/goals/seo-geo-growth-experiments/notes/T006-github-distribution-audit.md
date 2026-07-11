# T006 GitHub distribution and entity audit

Date: 2026-07-11

## Executive finding

The canonical repository already has substantial authority and healthy GitHub metadata, but its 57 KB README does not link to `mlrefined.com` at all, does not identify the three authors, and sends every Colab action through the repository's pre-rename owner/path. The smallest high-leverage loop is therefore a concise top-of-README official-site/learning-guide panel, a mechanical canonicalization of legacy Colab paths, one dead publisher-link repair, and a citation file grounded in Cambridge's ISBN/DOI metadata. Do not publish learning-guide links until those production URLs return 200.

## Repository availability and authority

- Canonical repository: `https://github.com/neonwatty/machine-learning-refined`.
- Default branch: `main`; public; not archived; not a fork.
- GitHub metadata is already strong:
  - description: “Master the fundamentals of machine learning, deep learning, and mathematical optimization by building key concepts and models from scratch using Python.”
  - homepage: `https://www.mlrefined.com/`
  - topics: `machine-learning`, `deep-learning`, `artificial-intelligence`, `data-science`, `jupyter-notebook`, `numpy`, `python`.
- Authority: the authenticated `neonwatty` account has `admin`, `maintain`, `push`, `pull`, and `triage` permission. Token scopes include `repo`.
- Distribution surface: 2,237 stars, 703 forks, and 82 watchers at audit time. This is materially stronger existing authority than the relaunched domain.
- No local checkout of the canonical resource repository exists beside the website checkout. Any implementation needs a separate sparse clone/worktree and its own branch/commit/PR boundary; it must not be mixed into the website repository.

## README and canonical URL inventory

- README size: 57,407 bytes.
- URL occurrences: 297; 120 unique URLs.
- `mlrefined.com` occurrences: **0**, despite the GitHub About homepage being configured.
- Canonical repository URL occurrences: 55.
- Legacy `jermwatt/machine_learning_refined` Colab occurrences: **156**.
- Every README Colab link uses the old owner/name form. GitHub redirects the legacy repository URL to `neonwatty/machine-learning-refined`; representative legacy and canonical Colab GETs both return 200. The legacy paths work today but weaken canonical consistency and depend on redirect behavior.
- The README's instructor-examination link points to `http://cambridge.force.com/Samples?...` and returns 404.
- The current official Cambridge book page returns 200 at `https://www.cambridge.org/highereducation/books/machine-learning-refined/0A64B2370C2F7CE3ACF535835E9D7955` and exposes an examination-copy path.
- The repository has `README.md`, `LICENSE.md`, `requirements.txt`, and resource READMEs, but no `CITATION.cff`, `codemeta.json`, or other machine-readable citation record.
- README occurrences of author names: Jeremy Watt 0; Reza Borhani 0; Aggelos K. Katsaggelos 0.
- README literal `ISBN` occurrences: 0, although the ISBN digits occur twice inside retailer/publisher URLs.
- The custom license attributes repository material to Jeremy Watt and Reza Borhani. This may intentionally describe companion-resource authorship and must not be changed merely to match the three-author book without an owner/legal decision.

## Production dependency

At audit time:

- `https://www.mlrefined.com/` returns 200.
- `/learn` and all three proposed guide URLs return 404 because the website package has not been deployed.

Therefore, a repository change that links the guides must be prepared but not merged before the website production deployment. The safe sequence is:

1. Prepare the canonical-repository branch and verify its rendered Markdown/link contract.
2. Deploy the website and prove all guide URLs return 200.
3. Rebase if needed, merge/push the repository change, and verify the live GitHub README links.

If the board requires T008 before T010, T008 should stop at a verified branch/patch or draft PR and leave merge as an explicit T010 release action.

## Ranked distribution changes

### P0 — Official site and learning-guide entry panel

Add a compact section near the README's opening, before the independent-learner/instructor branches:

- “Official site” → `https://www.mlrefined.com/`
- “Visual learning guides” → `https://www.mlrefined.com/learn`
- “Gradient descent from scratch” → exact guide URL
- “Logistic regression from scratch” → exact guide URL
- “K-means clustering from scratch” → exact guide URL
- “Chapter PDFs”, “notebooks”, and “exercises” retain canonical repository destinations.

Use descriptive anchors and a short sentence distinguishing the site guides from raw source notebooks. Add stable campaign parameters only if the analytics owner prefers explicit attribution; otherwise GitHub referrer plus landing/resource events is sufficient and produces cleaner durable links.

Expected leverage: the README is the repository's primary surface, the repository has 2,237 stars/703 forks, and Search Console already shows `machine learning refined github` impressions with zero clicks.

### P0 — Canonicalize 156 Colab links

Replace only this exact string throughout `README.md`:

`github/jermwatt/machine_learning_refined/` → `github/neonwatty/machine-learning-refined/`

This is a bounded mechanical rewrite. Verify count goes from 156 to zero, canonical count rises accordingly, representative Colab GETs remain 200, and no notebook path changes.

### P0 — Repair dead Cambridge instructor link

Replace the 404 `cambridge.force.com/Samples` link with the current official Cambridge second-edition page. Phrase the anchor as “request an instructor examination copy from Cambridge University Press” only if the current page still visibly offers that action at verification time.

### P1 — Add `CITATION.cff`

Add a machine-readable preferred citation for the second-edition book, grounded in official Cambridge metadata:

- title: *Machine Learning Refined: Foundations, Algorithms, and Applications*
- edition: 2
- authors: Jeremy Watt; Reza Borhani; Aggelos K. Katsaggelos
- publisher: Cambridge University Press
- publication date: 2020-03-12
- print ISBN: 9781108480727
- digital ISBN: 9781108690935
- DOI: `10.1017/9781108690935`
- repository URL and official site URL

Validate with GitHub's supported CFF schema/tooling. The file should make clear whether users are citing the book or the companion repository; do not overwrite the existing license attribution.

### P1 — Visible entity block

Add one compact README “Book and citation” block with the three official authors, second edition, Cambridge University Press, ISBN, DOI, current publisher page, and official site. This improves human/entity consistency and gives the future `CITATION.cff` a visible counterpart.

## Changes not recommended in this tranche

- Do not change repository topics or homepage; both are already well configured.
- Do not rewrite the entire 57 KB README or reorganize all chapters. That increases conflict and review risk without being necessary for the distribution loop.
- Do not alter `LICENSE.md` author attribution without an explicit legal/ownership decision.
- Do not add badges, keyword lists, generated landing pages, `llms.txt`, or speculative AI markup.
- Do not contact Cambridge, Northwestern, authors, or third parties as part of this Worker package.
- Do not link the new guides before live 200 proof.

## Entity evidence and site follow-up

Official primary sources agree on the second edition:

- Cambridge: three authors, Cambridge University Press, published 2020, print ISBN 9781108480727, digital ISBN 9781108690935, DOI `10.1017/9781108690935`.
- Northwestern's 2020 announcement: the second edition is co-authored by Jeremy Watt, Reza Borhani, and Aggelos K. Katsaggelos.
- Northwestern maintains official profile pages for Jeremy Watt and Aggelos K. Katsaggelos and describes the book/site relationship.

T009 should use these official sources to decide whether visible author/publisher/DOI links and `sameAs` fields belong in site entity JSON-LD. It should not invent a `sameAs` URL for an author lacking a verified official profile.

## Exact safe implementation boundary for Judge review

- Separate sparse clone/worktree of `neonwatty/machine-learning-refined`.
- Candidate files: `README.md` and new `CITATION.cff` only.
- Separate branch with `codex/` prefix.
- No direct push to `main`.
- Render/parse Markdown, validate all newly added URLs, run exact legacy/canonical count checks, validate CFF, and inspect the GitHub-rendered README or draft PR before merge.
- Prepare branch/draft PR before website deployment if needed; merge only after all new `mlrefined.com/learn*` URLs return 200.

## Top failure modes

1. **Publishing dead guide links:** currently real; prevent merge until production 200 proof.
2. **Breaking 156 Colab actions with a bulk rewrite:** constrain replacement to the exact owner/repository segment and test representative plus path counts.
3. **Creating conflicting book/repository attribution:** ground citation fields in Cambridge, leave the license untouched, and visibly distinguish citing the book from licensing companion materials.
