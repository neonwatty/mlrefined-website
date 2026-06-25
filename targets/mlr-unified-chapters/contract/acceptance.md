# Acceptance Notes

## Required Regions

- `reference-root`: the complete reference surface.

## Intentional Differences

- Record any visual or product-truth deviations here before treating the reference as approved.

## Forbidden Affordances

- Do not add fake navigation, forms, or actions that do not exist in the app implementation.

## Top Failure Modes

1. The reference HTML captures the rough layout but misses the visual hierarchy of the input image.
2. The app implementation matches colors or copy while missing the actual region proportions.
3. Disabled or unavailable actions look enabled.

## Negative Checks

- Confirm clipped text, overflow, and disabled affordances are explicitly reviewed.
