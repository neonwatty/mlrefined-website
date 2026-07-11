# T003 content experiment selection

Date: 2026-07-11

## Decision

Select these three substantive learning-page experiments, in this order:

1. `/learn/gradient-descent-from-scratch`
2. `/learn/logistic-regression-from-scratch`
3. `/learn/k-means-clustering-from-scratch`

Each page should answer an implementation-and-understanding query. It must not replace the corresponding chapter detail (book navigation and resource index) or notebook workbench (visual notebook chooser). The learning page should provide a direct answer, a compact source-backed explanation, a visible algorithm or derivation, an executable-from-scratch Python example, a canonical book visual, and paths into the chapter, notebook, PDF, exercise, and repository.

## Demand and source matrix

| Candidate | Fresh demand evidence | Canonical repository depth | Existing visual | Intent separation | Decision |
| --- | --- | --- | --- | --- | --- |
| Gradient descent from scratch | Google autocomplete returned `gradient descent from scratch python`, `stochastic gradient descent from scratch python`, `implement gradient descent from scratch python`, `gradient descent explained`, and an exact `gradient descent jupyter notebook` suggestion. Current results include notebook and from-scratch implementations, confirming tutorial intent. | 13 files / 8,508,979 bytes across Chapter 3 notes and exercises. Anchor notebooks: `3_5_Descent.ipynb` (1,916,054 bytes), `A_3_Normalized.ipynb` (1,012,532 bytes), and `chapter_3_exercises.ipynb`. | `normalized-gradient-descent.gif`, 330 x 330. | Distinct learning intent: understand the update rule and implement it in NumPy. | Select |
| Logistic regression from scratch | Autocomplete returned exact, GitHub, multiclass, implement, multinomial, example, gradient-descent, L2, and one-vs-all variants; notebook autocomplete returned exact/code/Python/example/explain variants. Current results include IBM and multiple tutorial/notebook implementations. | 10 files / 4,706,575 bytes across Chapter 6 notes and exercises. Anchors: `6_2_Cross_entropy.ipynb` (1,192,727 bytes) and `chapter_6_exercises.ipynb`. | `logistic-regression.gif`, 467 x 206. | Distinct learning intent: connect sigmoid, cross-entropy, gradient updates, and a binary classifier implemented without a model library. | Select |
| K-means clustering from scratch | Autocomplete returned exact, algorithm, Python, code, GitHub, implementation/library/program variants; notebook autocomplete returned exact and Python-notebook variants. Current results contain multiple from-scratch notebooks and tutorials. | 6 files / 31,718,145 bytes across Chapter 8 notes and exercises. Anchors: `8_5_Kmeans.ipynb` (1,553,595 bytes) and `chapter_8_exercises.ipynb`. | `kmeans.gif`, 251 x 238. | Distinct learning intent: understand alternating assignment/update steps and implement a reproducible NumPy loop. | Select |
| Feature normalization | Autocomplete showed feature-normalization/scaling demand; 7 Chapter 9 note files plus `9_3_Scaling.ipynb` and exercises; dedicated GIF exists. | Strong enough for a later page. | `feature-normalization.gif`, 277 x 277. | Search vocabulary fragments across normalization, standardization, and scaling, increasing cannibalization risk before a tighter brief. | Reserve |
| Cross-validation | Autocomplete showed cross-validation and k-fold-from-scratch demand; 8 Chapter 11 note files plus `11_10_Kfolds.ipynb` and exercises; dedicated GIF exists. | Strong enough for a later page. | `cross-validation-regression.gif`, 286 x 301. | A useful follow-up, but this first tranche has a clearer shared “algorithm from scratch” hypothesis with the selected three. | Reserve |
| Machine-learning course roadmap | Autocomplete showed course-roadmap demand. | Existing instructor roadmaps and book sequence supply material. | Existing roadmap art. | Already served by `/instructors`; a second page would duplicate current intent. | Reject |
| Solutions manual / exercise answers | Branded autocomplete and Search Console can expose PDF/solution language. | The repository has exercise notebooks, not an authorized public solutions manual. | N/A | A target page would risk a false or piracy-adjacent promise. | Reject |

## Page briefs for Judge review

### Gradient descent from scratch

- Primary intent: “Show me how gradient descent works and how to implement the core loop in Python/NumPy.”
- Canonical URL: `/learn/gradient-descent-from-scratch`.
- Required visible material: one-sentence answer; update rule `w <- w - alpha * grad g(w)`; plain-language meanings for gradient and step size; a small convex objective; a short NumPy implementation; convergence/step-size cautions; animated normalized-gradient-descent visual with accurate alt text.
- Canonical sources: Chapter 3; `notes/3_First_order_methods/3_5_Descent.ipynb`; `notes/3_First_order_methods/A_3_Normalized.ipynb`; `exercises/chapter_3/chapter_3_exercises.ipynb`; Chapter 3 PDF path.
- Reader actions: open Chapter 3, source notebook, exercise notebook, PDF index, and repository.

### Logistic regression from scratch

- Primary intent: “Explain binary logistic regression and build it from sigmoid probabilities and cross-entropy with NumPy.”
- Canonical URL: `/learn/logistic-regression-from-scratch`.
- Required visible material: direct definition; sigmoid equation; cross-entropy equation; gradient-training outline; concise NumPy fit/predict example; decision-threshold and numerical-stability cautions; canonical animated boundary visual.
- Canonical sources: Chapter 6; `notes/6_Linear_twoclass_classification/6_2_Cross_entropy.ipynb`; `exercises/chapter_6/chapter_6_exercises.ipynb`; Chapter 6 PDF path.
- Reader actions: open Chapter 6, source notebook, exercise notebook, PDF index, and repository.

### K-means clustering from scratch

- Primary intent: “Explain K-means' alternating steps and implement clustering with NumPy.”
- Canonical URL: `/learn/k-means-clustering-from-scratch`.
- Required visible material: direct definition; objective in words/equation; initialize/assign/update/repeat algorithm; concise deterministic NumPy implementation; empty-cluster/local-minimum/scaling cautions; canonical centroid animation.
- Canonical sources: Chapter 8; `notes/8_Linear_unsupervised_learning/8_5_Kmeans.ipynb`; `exercises/chapter_8/chapter_8_exercises.ipynb`; Chapter 8 PDF path.
- Reader actions: open Chapter 8, source notebook, exercise notebook, PDF index, and repository.

## Baseline and measurement contract

Search Console, 2026-06-28 through 2026-07-09:

- Site total: 8 clicks, 312 impressions, 2.6% CTR, average position 4.9.
- `machine learning refined`: 4 clicks / 78 impressions.
- `machine learning refined github`: 0 / 14.
- Full book title: 0 / 7.
- `machine learning refined 2nd ed pdf`: 0 / 4.
- `machine learning refined pdf`: 0 / 4.
- Only eight queries were exposed; no non-branded topic query had enough data to appear. This is a zero-observed baseline, not proof of zero demand.

For each experiment, preserve an exact launch date and compare after crawl latency:

- query families: exact page title, topic + `from scratch`, topic + `python`, topic + `numpy`, topic + `jupyter notebook`, and close autocomplete variants;
- page metrics: impressions, clicks, CTR, average position, indexing state, referring query count, and canonical selected by Google;
- usage metrics: landing views; chapter/notebook/PDF/exercise/GitHub outbound clicks; and landing-to-resource conversion;
- quality guardrails: no cannibalization loss on the corresponding chapter/notebook route, no misleading result title, no thin-page indexing, and no unsupported educational claims.

## Evidence collected

- Authenticated Google Search Console Performance report for `sc-domain:mlrefined.com`, read 2026-07-11.
- Fresh Google autocomplete families collected 2026-07-11.
- Current web results checked 2026-07-11 for the three proposed from-scratch tutorial queries.
- GitHub recursive tree API for `neonwatty/machine-learning-refined`, `main`, used to count files, sizes, and exact source paths.
- Local content manifests `src/content/book-learning.ts` and `src/content/book-chapters.ts` plus direct `file` inspection of the five candidate GIFs.

## Risks for the Judge

1. Thin-content risk: reject a page unless it includes the source-backed algorithm, visible example, visual, cautions, attribution, and next actions described above.
2. Cannibalization risk: keep `/learn/*` answer-shaped and implementation-oriented; do not duplicate the chapter summary or notebook gallery.
3. Code-trust risk: test every displayed code sample against a deterministic fixture and keep examples compact enough to audit.
