import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

import { chapters } from "@/content/book";
import {
  absoluteUrl,
  createPageMetadata,
  publicRoutes,
  siteConfig,
  socialPreviewImage,
  twitterPreviewImage,
} from "@/lib/site";
import robots from "./robots";
import sitemap, { sitemapLastModified } from "./sitemap";

function pageFileForRoute(route: string) {
  if (route === "/") {
    return path.join(process.cwd(), "src/app/page.tsx");
  }

  return path.join(process.cwd(), "src/app", route, "page.tsx");
}

describe("sitemap metadata route", () => {
  it("only advertises implemented public app routes and chapter detail pages", () => {
    const entries = sitemap();
    const sitemapPaths = entries.map((entry) => new URL(entry.url).pathname);
    const chapterRoutes = chapters.map((chapter) => `/chapters/${chapter.slug}`);

    expect(sitemapPaths).toEqual([...publicRoutes, ...chapterRoutes]);
    expect(sitemapPaths).not.toContain("/dashboard");
    expect(entries.every((entry) => entry.lastModified === sitemapLastModified))
      .toBe(true);

    for (const route of publicRoutes) {
      expect(fs.existsSync(pageFileForRoute(route)), route).toBe(true);
    }
  });

  it("allows public pages while disallowing private systems", () => {
    const rules = robots().rules;

    expect(rules).toMatchObject({
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/"],
    });
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
