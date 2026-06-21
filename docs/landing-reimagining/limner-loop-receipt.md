# Limner Loop Receipt

Limner CLI `0.1.28` initialized five `image-mockup` trajectories and produced initial comparison runs. The older `limner assets contact-sheet` command is not available in this installed CLI, so the comparison artifact recorded for each trajectory is `captures/side-by-side.png`.

## Trajectories

- `mlr-homepage-visual-lab`: trajectory `traj_fcc1f7b39a213a3e`, initial run `.limner/runs/2026-06-21T135405857Z-tyg0ri`, report `.limner/runs/2026-06-21T135405857Z-tyg0ri/reports/comparison.md`, side-by-side `.limner/runs/2026-06-21T135405857Z-tyg0ri/captures/side-by-side.png`, agent prompt `.limner/runs/2026-06-21T135405857Z-tyg0ri/agent-comparison/agent-prompt.codex.md`.
- `mlr-visual-gallery`: trajectory `traj_8a3e81be4482dbc4`, initial run `.limner/runs/2026-06-21T135406943Z-2cx32b`, report `.limner/runs/2026-06-21T135406943Z-2cx32b/reports/comparison.md`, side-by-side `.limner/runs/2026-06-21T135406943Z-2cx32b/captures/side-by-side.png`, agent prompt `.limner/runs/2026-06-21T135406943Z-2cx32b/agent-comparison/agent-prompt.codex.md`.
- `mlr-resource-discovery`: trajectory `traj_28d6039a71a6b223`, initial run `.limner/runs/2026-06-21T135408002Z-wkhdba`, report `.limner/runs/2026-06-21T135408002Z-wkhdba/reports/comparison.md`, side-by-side `.limner/runs/2026-06-21T135408002Z-wkhdba/captures/side-by-side.png`, agent prompt `.limner/runs/2026-06-21T135408002Z-wkhdba/agent-comparison/agent-prompt.codex.md`.
- `mlr-instructor-path`: trajectory `traj_81224d1d0bec1a4f`, initial run `.limner/runs/2026-06-21T135409044Z-hh1fb5`, report `.limner/runs/2026-06-21T135409044Z-hh1fb5/reports/comparison.md`, side-by-side `.limner/runs/2026-06-21T135409044Z-hh1fb5/captures/side-by-side.png`, agent prompt `.limner/runs/2026-06-21T135409044Z-hh1fb5/agent-comparison/agent-prompt.codex.md`.
- `mlr-reviews-adoption`: trajectory `traj_104d71d1e4351794`, initial run `.limner/runs/2026-06-21T135410112Z-oqifpj`, report `.limner/runs/2026-06-21T135410112Z-oqifpj/reports/comparison.md`, side-by-side `.limner/runs/2026-06-21T135410112Z-oqifpj/captures/side-by-side.png`, agent prompt `.limner/runs/2026-06-21T135410112Z-oqifpj/agent-comparison/agent-prompt.codex.md`.

## Commands Run

- `node /Users/neonwatty/.codex/plugins/cache/limner/limner-polish/0.1.28/scripts/validate-plugin-surface.mjs`
- `node /Users/neonwatty/.codex/plugins/cache/limner/limner-polish/0.1.28/scripts/loop-command-envelope.mjs --mode image-mockup --target <target> --name <target>-polish --iterations 5`
- `limner loop start --mode image-mockup --target <target> --name <target>-polish --max-iterations 5`
- `limner loop compare --trajectory <trajectory> --format json`

## Current State

Every trajectory is active at `iter_001` with `maxIterations` set to `5`. Each initial comparison is awaiting a fresh agent response before any polish edits are applied.

## First Polish Pass

Each target scaffold was replaced with a first-pass image-backed editable reference shell. This preserves the selected generated image at full fidelity while establishing target-specific HTML regions and acceptance notes for the next iteration. The next Limner polish pass should replace image-backed regions with DOM modules.

- `mlr-homepage-visual-lab`: actions `act_03964903cd494ef9` and `act_c0f716ae844b4a9b`, corrected run `.limner/runs/2026-06-21T140032642Z-apdxm9`, report `.limner/runs/2026-06-21T140032642Z-apdxm9/reports/comparison.md`, side-by-side `.limner/runs/2026-06-21T140032642Z-apdxm9/captures/side-by-side.png`.
- `mlr-visual-gallery`: actions `act_03b32e262e3a430d` and `act_815369a5ba364f15`, corrected run `.limner/runs/2026-06-21T140034011Z-m5hroz`, report `.limner/runs/2026-06-21T140034011Z-m5hroz/reports/comparison.md`, side-by-side `.limner/runs/2026-06-21T140034011Z-m5hroz/captures/side-by-side.png`.
- `mlr-resource-discovery`: actions `act_83586585290a4b10` and `act_b9fb105437b54553`, corrected run `.limner/runs/2026-06-21T140035340Z-a117ge`, report `.limner/runs/2026-06-21T140035340Z-a117ge/reports/comparison.md`, side-by-side `.limner/runs/2026-06-21T140035340Z-a117ge/captures/side-by-side.png`.
- `mlr-instructor-path`: actions `act_b317ed122e414c34` and `act_a1b8f0c409ba4cf5`, corrected run `.limner/runs/2026-06-21T140036607Z-0ypst8`, report `.limner/runs/2026-06-21T140036607Z-0ypst8/reports/comparison.md`, side-by-side `.limner/runs/2026-06-21T140036607Z-0ypst8/captures/side-by-side.png`.
- `mlr-reviews-adoption`: actions `act_ea5cf6123c9244f5` and `act_2e97ea451de84490`, corrected run `.limner/runs/2026-06-21T140037912Z-zl9ojc`, report `.limner/runs/2026-06-21T140037912Z-zl9ojc/reports/comparison.md`, side-by-side `.limner/runs/2026-06-21T140037912Z-zl9ojc/captures/side-by-side.png`.

Superseded post-edit runs `2026-06-21T135816978Z-hc6qrt`, `2026-06-21T135818043Z-fuq2ab`, `2026-06-21T135819152Z-bgdi99`, `2026-06-21T135820214Z-fu8fmg`, and `2026-06-21T135821307Z-6suko9` captured a broken sibling-source image URL and were replaced by the corrected runs above.
