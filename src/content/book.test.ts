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

    for (const chapter of chapters) {
      expect(chapter.number).toBeTruthy();
      expect(chapter.title).toBeTruthy();
      expect(chapter.topics.length).toBeGreaterThan(0);
      expect(chapter.resources.length).toBeGreaterThan(0);
    }
  });

  it("keeps chapter resources pointed at source-backed locations", () => {
    for (const chapter of chapters) {
      for (const resource of chapter.resources) {
        expect(resource.href).toMatch(
          /^https:\/\/(github\.com\/neonwatty\/machine-learning-refined|www\.dropbox\.com)\//,
        );
      }
    }
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
