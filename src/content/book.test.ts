import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

import { approvedPublicNav } from "@/lib/site";
import {
  bookLinks,
  chapterTracks,
  chapters,
  instructorRoadmaps,
  learningWidgets,
  readerReviews,
  resourceGroups,
  spotlightFigureTitles,
  staticVisuals,
  testimonials,
  universityLogos,
} from "./book";

function publicAssetExists(publicPath: string) {
  const relativePath = publicPath.replace(/^\//, "");

  return fs.existsSync(path.join(process.cwd(), "public", relativePath));
}

describe("book content contracts", () => {
  it("keeps canonical repository resource links visible", () => {
    expect(resourceGroups).toHaveLength(4);
    expect(bookLinks.repo).toBe("https://github.com/neonwatty/machine-learning-refined");
    expect(bookLinks.notesAssets).toBe(
      "https://github.com/neonwatty/machine-learning-refined-notes-assets",
    );

    for (const resource of resourceGroups) {
      expect(resource.href).toMatch(
        /^https:\/\/github\.com\/neonwatty\/machine-learning-refined/,
      );
    }
  });

  it("models the approved public navigation without advertising unbuilt routes", () => {
    expect(approvedPublicNav.map((item) => item.label)).toEqual([
      "Home",
      "Notebooks",
      "Chapters",
      "Instructors",
      "Reviews",
    ]);
  });

  it("keeps full chapter metadata crawlable and unique", () => {
    const slugs = new Set(chapters.map((chapter) => chapter.slug));
    const numbers = chapters.map((chapter) => chapter.number);

    expect(chapters).toHaveLength(15);
    expect(slugs.size).toBe(chapters.length);
    expect(numbers).toEqual([
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "C",
    ]);
    expect(chapters.every((chapter) => chapter.number && chapter.title)).toBe(
      true,
    );
  });

  it("uses local public assets for visual and social proof imagery", () => {
    const localAssets = [
      ...universityLogos.map((logo) => logo.image),
      ...testimonials.map((testimonial) => testimonial.image),
      ...learningWidgets.map((widget) => widget.image),
      ...chapterTracks.map((track) => track.image),
      ...instructorRoadmaps.map((track) => track.image),
      ...staticVisuals.map((visual) => visual.image),
    ];

    for (const asset of localAssets) {
      expect(publicAssetExists(asset), asset).toBe(true);
    }
  });

  it("keeps figure and widget source links backed by the known repos", () => {
    expect(staticVisuals).toHaveLength(24);
    expect(spotlightFigureTitles).toHaveLength(12);
    expect(learningWidgets).toHaveLength(8);

    for (const visual of staticVisuals) {
      expect(visual.sourceHref).toMatch(
        /^https:\/\/github\.com\/neonwatty\/machine-learning-refined-notes-assets\/blob\/main\//,
      );
      expect(visual.chapterHref).toMatch(
        /^https:\/\/github\.com\/neonwatty\/machine-learning-refined\/tree\/main\/notes\//,
      );
    }

    for (const widget of learningWidgets) {
      expect(widget.href).toMatch(
        /^https:\/\/github\.com\/neonwatty\/machine-learning-refined\/blob\/main\//,
      );
      expect(widget.colab).toMatch(/^https:\/\/colab\.research\.google\.com\//);
    }
  });

  it("keeps instructor and review data source-backed", () => {
    expect(instructorRoadmaps).toHaveLength(4);
    expect(readerReviews).toHaveLength(3);
    expect(universityLogos).toHaveLength(9);
    expect(testimonials).toHaveLength(4);

    for (const track of instructorRoadmaps) {
      expect(track.href).toBe(bookLinks.roadmapGuide);
      expect(track.chapters.length).toBeGreaterThanOrEqual(8);
    }

    for (const review of readerReviews) {
      expect([bookLinks.amazon, bookLinks.goodreads]).toContain(review.href);
      expect(review.excerpt.length).toBeGreaterThan(10);
    }
  });
});
