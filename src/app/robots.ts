import type { MetadataRoute } from "next";

import { absoluteUrl, siteConfig } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const publicCrawlerRules = {
    allow: "/",
    disallow: ["/api/", "/admin/"],
  };

  return {
    rules: [
      { userAgent: "Googlebot", ...publicCrawlerRules },
      { userAgent: "OAI-SearchBot", ...publicCrawlerRules },
      { userAgent: "*", ...publicCrawlerRules },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: siteConfig.url,
  };
}
