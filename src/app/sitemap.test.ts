import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

import { publicRoutes } from "@/lib/site";
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

    for (const route of sitemapPaths) {
      expect(fs.existsSync(pageFileForRoute(route)), route).toBe(true);
    }
  });
});
