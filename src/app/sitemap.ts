import type { MetadataRoute } from "next";

import { chapters, learningGuideHref, learningGuides } from "@/content/book";
import { absoluteUrl, publicRoutes } from "@/lib/site";

export const routeLastModified: Record<string, Date> = {
  "/": new Date("2026-07-11T00:00:00.000Z"),
  "/learn": new Date("2026-10-11T00:00:00.000Z"),
  "/notebooks": new Date("2026-07-11T00:00:00.000Z"),
  "/chapters": new Date("2026-10-11T00:00:00.000Z"),
  "/instructors": new Date("2026-07-11T00:00:00.000Z"),
  "/resources": new Date("2026-07-11T00:00:00.000Z"),
  "/reviews": new Date("2026-07-04T00:00:00.000Z"),
};
export const chaptersLastModified = new Date("2026-07-11T00:00:00.000Z");
export const learningGuidesLastModified = new Date("2026-10-11T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const publicRouteEntries = publicRoutes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: routeLastModified[route],
    changeFrequency: "weekly" as const,
    priority: route === "/" ? 1 : 0.8,
    images: route === "/" ? [absoluteUrl("/book-cover-2nd.png")] : undefined,
  }));

  const chapterRouteEntries = chapters.map((chapter) => ({
    url: absoluteUrl(`/chapters/${chapter.slug}`),
    lastModified: chaptersLastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const learningGuideEntries = learningGuides.map((guide) => ({
    url: absoluteUrl(learningGuideHref(guide)),
    lastModified: learningGuidesLastModified,
    changeFrequency: "monthly" as const,
    priority: 0.75,
    images: [absoluteUrl(guide.image.src)],
  }));

  return [...publicRouteEntries, ...chapterRouteEntries, ...learningGuideEntries];
}
