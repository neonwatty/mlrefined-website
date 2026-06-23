# HTML Mockup Polish Review

Date: 2026-06-21

Scope: Manager audit of the five Limner image-mockup worker receipts after conversion from image-backed references into editable HTML/CSS. The selected generated images remain source guidance only; target references should use real project/book assets.

## Final Limner Runs

| Page family | Target | Final run | Report | Result |
| --- | --- | --- | --- | --- |
| Homepage / Visual Lab | `mlr-homepage-visual-lab` | `.limner/runs/2026-06-21T163837081Z-simfjs` | `.limner/runs/2026-06-21T163837081Z-simfjs/reports/comparison.md` | Accepted for implementation planning |
| Visual Gallery | `mlr-visual-gallery` | `.limner/runs/2026-06-21T215759397Z-f15zym` | `.limner/runs/2026-06-21T215759397Z-f15zym/reports/comparison.md` | Source-backed HTML polish accepted |
| Chapter / Resource Discovery | `mlr-resource-discovery` | `.limner/runs/2026-06-21T215805120Z-wofisp` | `.limner/runs/2026-06-21T215805120Z-wofisp/reports/comparison.md` | Source-backed HTML polish accepted |
| Instructor Path | `mlr-instructor-path` | `.limner/runs/2026-06-21T215811133Z-vmzils` | `.limner/runs/2026-06-21T215811133Z-vmzils/reports/comparison.md` | Source-backed HTML polish accepted |
| Reviews / Adoption | `mlr-reviews-adoption` | `.limner/runs/2026-06-21T163927698Z-v2h3tm` | `.limner/runs/2026-06-21T163927698Z-v2h3tm/reports/comparison.md` | Accepted for implementation planning |

## Manager Follow-up Work

Two worker receipts described gaps that were better fixed before the app implementation plan.

- `mlr-visual-gallery`: submitted fresh response `resp_e311c8bc53304aa8`, recorded action `act_addb7d8ba8864599`, edited `targets/mlr-visual-gallery/reference/styles.css`, and reran comparison to `.limner/runs/2026-06-21T213233501Z-uh9edw`.
- `mlr-instructor-path`: submitted fresh response `resp_b99d8ef55a194e07`, recorded action `act_0ce64cfde36e4881`, edited `targets/mlr-instructor-path/reference/styles.css`, and reran comparison to `.limner/runs/2026-06-21T213233776Z-bqt2fy`.
- `mlr-visual-gallery`: recorded source-repo action `act_ec3e15d9c4144601`, edited `targets/mlr-visual-gallery/reference/index.html` and `targets/mlr-visual-gallery/reference/styles.css`, and reran comparison to `.limner/runs/2026-06-21T215759397Z-f15zym`.
- `mlr-resource-discovery`: recorded source-repo action `act_4e909dfd204f44ba`, edited `targets/mlr-resource-discovery/reference/index.html` and `targets/mlr-resource-discovery/reference/styles.css`, and reran comparison to `.limner/runs/2026-06-21T215805120Z-wofisp`.
- `mlr-instructor-path`: recorded source-repo action `act_d2fc46430b23410b`, edited `targets/mlr-instructor-path/reference/index.html`, and reran comparison to `.limner/runs/2026-06-21T215811133Z-vmzils`.

No new images were generated. No production Next.js app files were edited.

## Source Repository Enrichment

The source-backed polish used a shallow local clone of `https://github.com/neonwatty/machine-learning-refined` at `/tmp/machine-learning-refined`, revision `7edb5a0`.

Evidence from the clone:

- `find /tmp/machine-learning-refined/notes -type f -name '*.ipynb' | wc -l`: `84` note notebooks.
- `find /tmp/machine-learning-refined/exercises -type f -name '*.ipynb' | wc -l`: `13` exercise notebooks.
- `find /tmp/machine-learning-refined -type f \( -iname '*.png' -o -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.gif' -o -iname '*.svg' \)`: no local image files in the source repo clone.
- `chapter_pdfs/README.md`: README-backed Dropbox PDF collection.
- `presentations/README.md`: README-backed Dropbox PPTX collection.

Representative exact source anchors added to the editable HTML:

- `notes/3_First_order_methods/A_3_Normalized.ipynb`
- `notes/6_Linear_twoclass_classification/6_2_Cross_entropy.ipynb`
- `notes/8_Linear_unsupervised_learning/8_5_Kmeans.ipynb`
- `notes/11_Feature_learning/11_10_Kfolds.ipynb`
- `notes/13_Multilayer_perceptrons/13_2_Multi_layer_perceptrons.ipynb`
- `exercises/chapter_3/chapter_3_exercises.ipynb`
- `chapter_pdfs/README.md`
- `presentations/README.md`

## Failure Modes Checked

1. Image-backed references still used as rendered page assets.
   Evidence: `rg -n "generated_images|source-reference|ig_[a-f0-9]|\\.codex/generated_images" targets/mlr-visual-gallery/reference targets/mlr-resource-discovery/reference targets/mlr-instructor-path/reference` returned no matches. The editable target HTML/CSS uses target-local copies of existing site assets plus real repository links.

2. Broken or blank Limner captures.
   Evidence: final `limner loop compare` captures exist for all five targets. For the three source-polished runs, `sips -g pixelWidth -g pixelHeight` reported `1440 x 900`, and `.limner/runs/<run>/captures/reference.png.console.json` was `[]`.

3. Source repo assets overstated.
   Evidence: the source clone contains no local image files, so the enrichment used exact notebook/exercise/README anchors rather than inventing book figures or adding generated screenshots. The instructor "Datasets" card was narrowed to "Notebook-linked data" after source inspection found no standalone dataset directory in the clone.

## Accepted Gaps

- Static mockups do not implement search/filter behavior.
- Some resource links point to canonical GitHub folders until a complete per-widget resource index is available.
- Source-repo figure screenshots were not added because the cloned book repo does not contain local image assets.
- Real verified assets differ from generated reference art, especially book-cover/open-book compositions and logo library size.
- Reviews / Adoption uses conservative proof-source copy instead of long exact review excerpts.
- Instructor sample-copy/verification copy remains product-direction placeholder text until publisher eligibility details are confirmed.
- Mobile implementation still needs real Next.js responsive QA, even where worker screenshots or CSS breakpoints exist.

## Next Gate

Before implementing production pages, run the repo checks from the campaign worktree:

```bash
npm run lint
npm run typecheck
npm run knip:production
npm run test:unit
npm run build
npm run ci
```

Then create the Next.js implementation plan using these five accepted references as design inputs, not by rendering the generated source images.
