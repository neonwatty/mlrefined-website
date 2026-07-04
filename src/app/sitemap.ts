import type { MetadataRoute } from "next";

import { chapters } from "@/content/book";
import { absoluteUrl } from "@/lib/seo";
import { publicRoutes } from "@/lib/site";

export const sitemapLastModified = new Date("2026-07-04T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const publicRouteEntries = publicRoutes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: sitemapLastModified,
    changeFrequency: "weekly" as const,
    priority: route === "/" ? 1 : 0.8,
    images: route === "/" ? [absoluteUrl("/book-cover-2nd.png")] : undefined,
  }));

  const chapterRouteEntries = chapters.map((chapter) => ({
    url: absoluteUrl(`/chapters/${chapter.slug}`),
    lastModified: sitemapLastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...publicRouteEntries, ...chapterRouteEntries];
}
