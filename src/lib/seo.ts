import { chapters, resourceGroups } from "@/content/book";
import type { BookChapter, ChapterResources } from "@/content/book";
import { absoluteUrl, siteConfig } from "@/lib/site";

const chapterResourceLabels: Record<keyof ChapterResources, string> = {
  pdf: "chapter PDF",
  notes: "Jupyter notebook notes",
  notebook: "Jupyter notebook",
  colab: "Colab notebook",
  exercise: "exercises",
  slides: "slides",
};

const chapterResourceDescriptions: Record<keyof ChapterResources, string> = {
  pdf: "Open the chapter PDF collection.",
  notes: "Browse the source Jupyter notebook notes.",
  notebook: "Open the source Jupyter notebook.",
  colab: "Open the chapter notebook in Google Colab.",
  exercise: "Open the chapter exercise notebook or folder.",
  slides: "Open the chapter slide deck collection.",
};

function humanList(items: string[]) {
  if (items.length <= 1) {
    return items[0] ?? "";
  }

  if (items.length === 2) {
    return `${items[0]} and ${items[1]}`;
  }

  return `${items.slice(0, -1).join(", ")}, and ${items.at(-1)}`;
}

export function stringifyJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export function chapterResourceEntries(chapter: BookChapter) {
  return Object.entries(chapter.resources)
    .filter((entry): entry is [keyof ChapterResources, string] =>
      Boolean(entry[1]),
    )
    .map(([kind, href]) => ({
      kind,
      title: chapterResourceLabels[kind],
      description: chapterResourceDescriptions[kind],
      href,
    }));
}

export function chapterResourceLabelList(chapter: BookChapter) {
  const labels = Array.from(
    new Set(chapterResourceEntries(chapter).map((resource) => resource.title)),
  );

  return humanList(labels);
}

export function chapterPageDescription(chapter: BookChapter) {
  return `${chapter.summary} Open the Machine Learning Refined ${chapterResourceLabelList(
    chapter,
  )} for this chapter.`;
}

export function chapterKeywords(chapter: BookChapter) {
  return [
    `Machine Learning Refined chapter ${chapter.number}`,
    chapter.title,
    chapter.part,
    ...chapter.title
      .toLowerCase()
      .split(/\s+/)
      .filter((term) => term.length > 3),
  ];
}

export function homeJsonLd() {
  const bookUrl = absoluteUrl("/");
  const chapterUrls = chapters.map((chapter) => ({
    "@type": "ListItem",
    name: `Chapter ${chapter.number}: ${chapter.title}`,
    url: absoluteUrl(`/chapters/${chapter.slug}`),
  }));
  const resourceUrls = resourceGroups.map((resource) => resource.href);

  return [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteConfig.name,
      url: bookUrl,
      description: siteConfig.description,
      inLanguage: "en-US",
    },
    {
      "@context": "https://schema.org",
      "@type": "Book",
      name: siteConfig.title,
      alternateName: "Machine Learning Refined 2nd Edition",
      url: bookUrl,
      image: absoluteUrl("/book-cover-2nd.png"),
      isbn: siteConfig.isbn,
      bookEdition: "2nd",
      datePublished: "2020-03-12",
      publisher: {
        "@type": "Organization",
        name: "Cambridge University Press",
        url: siteConfig.publisherUrl,
      },
      author: siteConfig.authors.map((name) => ({
        "@type": "Person",
        name,
      })),
      about: [
        "machine learning",
        "mathematical optimization",
        "linear regression",
        "classification",
        "neural networks",
        "Python exercises",
      ],
      workExample: resourceUrls,
      isPartOf: {
        "@type": "CreativeWorkSeries",
        name: "Machine Learning Refined",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Machine Learning Refined chapter highlights",
      itemListElement: chapterUrls.map((item, index) => ({
        ...item,
        position: index + 1,
      })),
    },
  ];
}

export function chapterJsonLd(chapter: BookChapter) {
  const chapterUrl = absoluteUrl(`/chapters/${chapter.slug}`);

  return [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: siteConfig.name,
          item: absoluteUrl("/"),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Chapters",
          item: absoluteUrl("/chapters"),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: chapter.title,
          item: chapterUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      name: `Chapter ${chapter.number}: ${chapter.title}`,
      url: chapterUrl,
      description: chapter.summary,
      isPartOf: {
        "@type": "Book",
        name: siteConfig.title,
        isbn: siteConfig.isbn,
      },
      about: chapterKeywords(chapter).slice(1),
      hasPart: chapterResourceEntries(chapter).map((resource) => ({
        "@type": "CreativeWork",
        name: resource.title,
        description: resource.description,
        url: resource.href,
      })),
    },
  ];
}

export function collectionPageJsonLd({
  name,
  description,
  path,
  items,
}: {
  name: string;
  description: string;
  path: string;
  items: Array<{
    name: string;
    description?: string;
    url?: string;
  }>;
}) {
  const pageUrl = absoluteUrl(path);

  return [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: siteConfig.name,
          item: absoluteUrl("/"),
        },
        {
          "@type": "ListItem",
          position: 2,
          name,
          item: pageUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name,
      url: pageUrl,
      description,
      isPartOf: {
        "@type": "WebSite",
        name: siteConfig.name,
        url: absoluteUrl("/"),
      },
      hasPart: items.map((item) => ({
        "@type": "CreativeWork",
        name: item.name,
        description: item.description,
        url: item.url,
      })),
    },
  ];
}

export function chaptersCollectionJsonLd() {
  return collectionPageJsonLd({
    name: "Machine Learning Refined Chapters",
    description:
      "Browse Machine Learning Refined chapter highlights, PDFs, notebooks, exercises, slides, and source resources.",
    path: "/chapters",
    items: chapters.map((chapter) => ({
      name: `Chapter ${chapter.number}: ${chapter.title}`,
      description: chapter.summary,
      url: absoluteUrl(`/chapters/${chapter.slug}`),
    })),
  });
}
