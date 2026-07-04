import { describe, expect, it } from "vitest";

import { chapters } from "@/content/book";
import {
  chapterPageDescription,
  chapterJsonLd,
  chapterResourceLabelList,
  chaptersCollectionJsonLd,
  collectionPageJsonLd,
  homeJsonLd,
  stringifyJsonLd,
} from "./seo";
import {
  absoluteUrl,
  createPageMetadata,
  siteConfig,
  socialPreviewImage,
} from "./site";

describe("seo helpers", () => {
  it("builds canonical absolute URLs from the configured site URL", () => {
    expect(absoluteUrl("/chapters")).toBe(`${siteConfig.url}/chapters`);
    expect(absoluteUrl("resources")).toBe(`${siteConfig.url}/resources`);
  });

  it("creates indexable metadata with canonical and social URLs", () => {
    const metadata = createPageMetadata({
      title: "Machine Learning Refined Resources",
      description: "Find PDFs, notebooks, exercises, and slides.",
      path: "/resources",
    });

    expect(metadata.alternates?.canonical).toBe("/resources");
    expect(metadata.robots).toMatchObject({ index: true, follow: true });
    expect(metadata.openGraph).toMatchObject({
      url: `${siteConfig.url}/resources`,
      siteName: siteConfig.name,
    });
    expect(metadata.openGraph?.images).toEqual([socialPreviewImage]);
    expect(metadata.twitter).toMatchObject({
      card: "summary_large_image",
    });
    expect(metadata.twitter?.images).toEqual([socialPreviewImage]);
  });

  it("creates noindex metadata for owner-only surfaces", () => {
    const metadata = createPageMetadata({
      title: "Analytics Dashboard",
      description: "Owner-only analytics surface.",
      path: "/dashboard",
      noIndex: true,
    });

    expect(metadata.alternates?.canonical).toBe("/dashboard");
    expect(metadata.robots).toMatchObject({ index: false, follow: false });
  });

  it("serializes parseable JSON-LD without raw less-than characters", () => {
    const jsonLd = homeJsonLd();
    const serialized = stringifyJsonLd([...jsonLd, { unsafe: "<script>" }]);
    const parsed = JSON.parse(serialized);

    expect(serialized).not.toContain("<");
    expect(parsed).toHaveLength(4);
    expect(parsed[1]).toMatchObject({
      "@type": "Book",
      isbn: siteConfig.isbn,
      bookEdition: "2nd",
    });
  });

  it("keeps every highlighted chapter represented in homepage JSON-LD", () => {
    const itemList = homeJsonLd()[2];
    const itemListElement = itemList.itemListElement ?? [];
    const firstItem = itemListElement[0];

    expect(itemListElement).toHaveLength(chapters.length);
    expect(firstItem).toBeDefined();
    expect(firstItem?.url).toBe(
      `${siteConfig.url}/chapters/${chapters[0].slug}`,
    );
  });

  it("creates parseable chapter JSON-LD with breadcrumbs and resource parts", () => {
    const chapter = chapters[0];
    const serialized = stringifyJsonLd(chapterJsonLd(chapter));
    const parsed = JSON.parse(serialized);

    expect(parsed[0]).toMatchObject({
      "@type": "BreadcrumbList",
    });
    expect(parsed[1]).toMatchObject({
      "@type": "LearningResource",
      name: `Chapter ${chapter.number}: ${chapter.title}`,
    });
    expect(parsed[1].hasPart).toHaveLength(
      Object.values(chapter.resources).filter(Boolean).length,
    );
  });

  it("creates chapter descriptions from actual resource kinds", () => {
    const intro = chapters[0];
    const linearRegression = chapters.find(
      (chapter) => chapter.slug === "linear-regression",
    );

    expect(chapterResourceLabelList(intro)).toBe("chapter PDF");
    expect(chapterPageDescription(intro)).not.toMatch(
      /notebooks|exercises|slides/i,
    );
    expect(linearRegression).toBeDefined();
    expect(chapterResourceLabelList(linearRegression!)).toBe(
      "chapter PDF, Jupyter notebook notes, exercises, and slides",
    );
  });

  it("creates parseable collection page JSON-LD", () => {
    const serialized = stringifyJsonLd(
      collectionPageJsonLd({
        name: "Machine Learning Refined Notebooks",
        description: "Notebook resources.",
        path: "/notebooks",
        items: [{ name: "Optimization foundations", url: "/chapters" }],
      }),
    );
    const parsed = JSON.parse(serialized);

    expect(parsed[0]).toMatchObject({ "@type": "BreadcrumbList" });
    expect(parsed[1]).toMatchObject({
      "@type": "CollectionPage",
      url: `${siteConfig.url}/notebooks`,
    });
    expect(parsed[1].hasPart).toHaveLength(1);
  });

  it("creates parseable chapters collection JSON-LD", () => {
    const serialized = stringifyJsonLd(chaptersCollectionJsonLd());
    const parsed = JSON.parse(serialized);

    expect(parsed[0]).toMatchObject({ "@type": "BreadcrumbList" });
    expect(parsed[1]).toMatchObject({
      "@type": "CollectionPage",
      url: `${siteConfig.url}/chapters`,
    });
    expect(parsed[1].hasPart).toHaveLength(chapters.length);
  });
});
