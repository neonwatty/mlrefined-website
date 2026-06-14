import { describe, expect, it } from "vitest";

import {
  chapterTracks,
  chapters,
  resourceGroups,
  universityLogos,
} from "./book";

describe("book content contracts", () => {
  it("keeps resource links pointed at canonical GitHub resources", () => {
    expect(resourceGroups).toHaveLength(4);

    for (const resource of resourceGroups) {
      expect(resource.href).toMatch(
        /^https:\/\/github\.com\/neonwatty\/machine-learning-refined/,
      );
    }
  });

  it("keeps chapter metadata crawlable and unique", () => {
    const slugs = new Set(chapters.map((chapter) => chapter.slug));

    expect(slugs.size).toBe(chapters.length);
    expect(chapters.every((chapter) => chapter.number && chapter.title)).toBe(
      true,
    );
  });

  it("uses local visual assets for proof and track imagery", () => {
    expect(universityLogos).toHaveLength(9);

    for (const logo of universityLogos) {
      expect(logo.image).toMatch(/^\/social-proof\/logos\/.+\.(png|jpe?g)$/);
      expect(logo.width).toBeGreaterThan(0);
      expect(logo.height).toBeGreaterThan(0);
    }

    for (const track of chapterTracks) {
      expect(track.image).toMatch(/^\/learning-visuals\/widgets\/.+\.gif$/);
      expect(track.href).toContain("github.com/neonwatty/machine-learning-refined");
    }
  });
});
