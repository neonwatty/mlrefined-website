import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

import { chapters, learningGuideHref, learningGuides } from "@/content/book";
import {
  absoluteUrl,
  createPageMetadata,
  publicRoutes,
  siteConfig,
  socialPreviewImage,
  twitterPreviewImage,
} from "@/lib/site";
import robots from "./robots";
import sitemap, {
  chaptersLastModified,
  learningGuidesLastModified,
  routeLastModified,
} from "./sitemap";

function pageFileForRoute(route: string) {
  if (route === "/") {
    return path.join(process.cwd(), "src/app/page.tsx");
  }

  return path.join(process.cwd(), "src/app", route, "page.tsx");
}

describe("sitemap metadata route", () => {
  it("only advertises implemented public app routes, chapters, and learning guides", () => {
    const entries = sitemap();
    const sitemapPaths = entries.map((entry) => new URL(entry.url).pathname);
    const chapterRoutes = chapters.map((chapter) => `/chapters/${chapter.slug}`);
    const learningGuideRoutes = learningGuides.map(learningGuideHref);

    expect(sitemapPaths).toEqual([
      ...publicRoutes,
      ...chapterRoutes,
      ...learningGuideRoutes,
    ]);
    expect(sitemapPaths).not.toContain("/dashboard");
    expect(new Set(sitemapPaths).size).toBe(sitemapPaths.length);

    for (const route of publicRoutes) {
      const entry = entries.find(
        (candidate) => new URL(candidate.url).pathname === route,
      );
      expect(entry?.lastModified).toBe(routeLastModified[route]);
    }

    for (const chapter of chapters) {
      const entry = entries.find(
        (candidate) =>
          new URL(candidate.url).pathname === `/chapters/${chapter.slug}`,
      );
      expect(entry?.lastModified).toBe(chaptersLastModified);
    }

    for (const guide of learningGuides) {
      const entry = entries.find(
        (candidate) => new URL(candidate.url).pathname === learningGuideHref(guide),
      );
      expect(entry?.lastModified).toBe(learningGuidesLastModified);
      expect(entry?.images).toEqual([absoluteUrl(guide.image.src)]);
    }

    for (const route of publicRoutes) {
      expect(fs.existsSync(pageFileForRoute(route)), route).toBe(true);
    }
  });

  it("allows public pages while disallowing private systems", () => {
    const rules = robots().rules;

    expect(rules).toEqual([
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
    ]);
    expect(JSON.stringify(rules)).not.toContain("/dashboard");
  });
});

describe("site metadata helpers", () => {
  it("builds absolute URLs and page metadata without duplicated site titles", () => {
    expect(absoluteUrl("/reviews")).toBe("https://www.mlrefined.com/reviews");

    const reviewsMetadata = createPageMetadata({
      title: "Reviews",
      description: "Reader and adoption proof.",
      path: "/reviews",
    });
    expect(reviewsMetadata.title).toBe("Reviews");
    expect(reviewsMetadata.alternates?.canonical).toBe("/reviews");
    expect(reviewsMetadata.openGraph?.title).toBe(
      "Reviews | Machine Learning Refined",
    );
    expect(reviewsMetadata.openGraph?.images).toEqual([socialPreviewImage]);
    expect(reviewsMetadata.twitter?.images).toEqual([twitterPreviewImage]);

    const homeMetadata = createPageMetadata({
      title: siteConfig.name,
      description: siteConfig.description,
      path: "/",
    });
    expect(homeMetadata.openGraph?.title).toBe(siteConfig.name);
  });
});
