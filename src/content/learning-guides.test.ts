import { describe, expect, it } from "vitest";

import {
  learningGuideHref,
  learningGuides,
  runGradientDescentExample,
  runKMeansExample,
  runLogisticRegressionExample,
} from "./learning-guides";

describe("learning guide content", () => {
  it("defines three unique, source-backed guide routes", () => {
    expect(learningGuides).toHaveLength(3);
    expect(new Set(learningGuides.map(learningGuideHref)).size).toBe(3);
    expect(new Set(learningGuides.map((guide) => guide.chapterSlug)).size).toBe(
      3,
    );

    for (const guide of learningGuides) {
      expect(guide.resources.some((resource) => resource.kind === "notebook"))
        .toBe(true);
      expect(guide.resources.some((resource) => resource.kind === "exercise"))
        .toBe(true);
      expect(guide.resources.some((resource) => resource.kind === "pdf")).toBe(
        true,
      );
      expect(guide.resources.some((resource) => resource.kind === "repository"))
        .toBe(true);
      expect(guide.steps.length).toBeGreaterThanOrEqual(4);
      expect(guide.cautions.length).toBeGreaterThanOrEqual(3);
      expect(guide.code).toContain("import numpy as np");
    }
  });

  it("executes the gradient descent example against its known minimum", () => {
    const result = runGradientDescentExample();

    expect(result.history).toHaveLength(31);
    expect(result.minimum).toBeCloseTo(3, 5);
    expect(Math.abs(result.history.at(-1)! - 3)).toBeLessThan(
      Math.abs(result.history[0] - 3),
    );
  });

  it("executes the logistic regression example on a deterministic binary set", () => {
    const result = runLogisticRegressionExample();

    expect(result.predictions).toEqual([0, 0, 0, 1, 1, 1]);
    expect(result.intercept).toBeCloseTo(0, 8);
    expect(result.slope).toBeGreaterThan(0);
  });

  it("executes the K-means example with stable assignments and centroids", () => {
    const result = runKMeansExample();

    expect(result.labels).toEqual([0, 0, 0, 1, 1, 1]);
    expect(result.centroids[0]).toEqual([
      expect.closeTo(1 / 3, 8),
      expect.closeTo(1 / 3, 8),
    ]);
    expect(result.centroids[1]).toEqual([
      expect.closeTo(25 / 3, 8),
      expect.closeTo(25 / 3, 8),
    ]);
  });
});
