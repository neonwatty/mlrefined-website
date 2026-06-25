import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

import { publicRoutes } from "@/lib/site";
import {
  absoluteUrl,
  createPageMetadata,
  siteConfig,
  socialPreviewImage,
} from "@/lib/site";
import sitemap from "./sitemap";

function pageFileForRoute(route: string) {
  if (route === "/") {
    return path.join(process.cwd(), "src/app/page.tsx");
  }

  return path.join(process.cwd(), "src/app", route, "page.tsx");
}

describe("sitemap metadata route", () => {
  it("only advertises implemented public app routes", () => {
    const sitemapPaths = sitemap().map((entry) => new URL(entry.url).pathname);

    expect(sitemapPaths).toEqual(publicRoutes);
    expect(sitemapPaths).not.toContain("/chapters/introduction-to-machine-learning");
    expect(sitemapPaths).not.toContain("/dashboard");

    for (const route of sitemapPaths) {
      expect(fs.existsSync(pageFileForRoute(route)), route).toBe(true);
    }
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
    expect(reviewsMetadata.twitter?.images).toEqual([socialPreviewImage]);

    const homeMetadata = createPageMetadata({
      title: siteConfig.name,
      description: siteConfig.description,
      path: "/",
    });
    expect(homeMetadata.openGraph?.title).toBe(siteConfig.name);
  });
});
