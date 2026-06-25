# Agent Guide

Use this target folder as a structured workbench for visual fidelity.

Prompt profiles: `ideal-to-mockup` for Loop 1, and `mockup-to-implementation` for Loop 2.

## Loop 1: Image To Reference

1. Inspect `source/ideal.png`.
2. Fill out `contract/regions.json`, `contract/tokens.json`, and `contract/acceptance.md`.
3. Edit `reference/index.html` and `reference/styles.css` until the reference is a faithful HTML facsimile.
4. Run `limner compare image-reference --target <target>`.
5. Read `.limner/runs/<run-id>/agent-comparison/agent-prompt.codex.md`.
6. Submit JSON with `limner loop response submit --trajectory <trajectory-id> --from-run <run-id> --file ./response.json`.
7. Use the validated next-iteration guidance for one scoped mockup fix.

## Loop 2: Reference To Implementation

1. Treat the reference HTML as the approved design.
2. Add implementation selectors to `contract/regions.json` using `appSelector`.
3. Run `limner compare reference-implementation --target <target> --url <implementation-url>`.
4. Read `.limner/runs/<run-id>/agent-comparison/agent-prompt.codex.md`.
5. Submit JSON with `limner loop response submit --trajectory <trajectory-id> --from-run <run-id> --file ./response.json`.
6. Use the validated next-iteration guidance for one scoped implementation fix.

## Rule

Limner does not decide visual success automatically. It produces evidence and validates agent-authored UX comparisons so the next implementation iteration is focused.
