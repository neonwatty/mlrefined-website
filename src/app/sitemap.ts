import type { MetadataRoute } from "next";

import { chapters } from "@/content/book";
import { publicRoutes, siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = publicRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: route === "/" ? 1 : 0.8,
  }));

  const chapterRoutes = chapters.map((chapter) => ({
    url: `${siteConfig.url}/chapters/${chapter.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...chapterRoutes];
}
