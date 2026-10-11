/* eslint-disable max-lines -- SEO contracts stay centralized so visible claims and schema share one audit surface */
import { chapters, learningGuideHref, resourceGroups } from "@/content/book";
import type {
  BookChapter,
  ChapterResources,
  LearningGuide,
} from "@/content/book";
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

const entityIds = {
  book: absoluteUrl("/#book"),
  resources: `${siteConfig.githubRepo}#companion-resources`,
  website: absoluteUrl("/#website"),
} as const;

function authorJsonLd() {
  return siteConfig.authorEntities.map((author) => ({
    "@type": "Person",
    "@id": absoluteUrl(
      `/#author-${author.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
    ),
    name: author.name,
    ...(author.sameAs.length > 0 ? { sameAs: author.sameAs } : {}),
  }));
}

function bookJsonLdReference() {
  return {
    "@type": "Book",
    "@id": entityIds.book,
    name: siteConfig.bookTitle,
    isbn: siteConfig.isbn,
  };
}

function sourceJsonLdReference() {
  return {
    "@type": "SoftwareSourceCode",
    "@id": entityIds.resources,
    name: "Machine Learning Refined companion resources",
    url: siteConfig.githubRepo,
    codeRepository: siteConfig.githubRepo,
  };
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
      "@id": entityIds.website,
      name: siteConfig.name,
      url: bookUrl,
      description: siteConfig.description,
      inLanguage: "en-US",
    },
    {
      "@context": "https://schema.org",
      "@type": "Book",
      "@id": entityIds.book,
      name: siteConfig.bookTitle,
      alternateName: "Machine Learning Refined 2nd Edition",
      url: bookUrl,
      image: absoluteUrl("/book-cover-2nd.png"),
      isbn: siteConfig.isbn,
      identifier: [
        {
          "@type": "PropertyValue",
          propertyID: "Digital ISBN",
          value: siteConfig.digitalIsbn,
        },
        {
          "@type": "PropertyValue",
          propertyID: "DOI",
          value: siteConfig.doi,
          url: siteConfig.doiUrl,
        },
      ],
      sameAs: [siteConfig.publisherUrl, siteConfig.doiUrl],
      bookEdition: siteConfig.bookEdition,
      datePublished: siteConfig.datePublished,
      publisher: {
        "@type": "Organization",
        name: "Cambridge University Press",
        url: siteConfig.publisherUrl,
      },
      author: authorJsonLd(),
      about: [
        "machine learning",
        "mathematical optimization",
        "linear regression",
        "classification",
        "neural networks",
        "Python exercises",
      ],
      workExample: [{ "@id": entityIds.resources }, ...resourceUrls],
      isPartOf: {
        "@type": "CreativeWorkSeries",
        name: "Machine Learning Refined",
      },
    },
    {
      "@context": "https://schema.org",
      ...sourceJsonLdReference(),
      description:
        "Official Python notebooks, exercises, chapter PDFs, slides, and companion resources for Machine Learning Refined.",
      programmingLanguage: "Python",
      license: `${siteConfig.githubRepo}/blob/main/LICENSE.md`,
      isPartOf: bookJsonLdReference(),
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
      "@id": `${chapterUrl}#learning-resource`,
      name: `Chapter ${chapter.number}: ${chapter.title}`,
      url: chapterUrl,
      description: chapter.summary,
      isPartOf: bookJsonLdReference(),
      isBasedOn: sourceJsonLdReference(),
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
        "@id": entityIds.website,
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
      "Find Machine Learning Refined chapter PDFs, Python notebooks, exercises, and slides. Browse by topic and open the official GitHub resources for each chapter.",
    path: "/chapters",
    items: chapters.map((chapter) => ({
      name: `Chapter ${chapter.number}: ${chapter.title}`,
      description: chapter.summary,
      url: absoluteUrl(`/chapters/${chapter.slug}`),
    })),
  });
}

export function learningGuideJsonLd(guide: LearningGuide) {
  const path = learningGuideHref(guide);
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
          name: "Learn",
          item: absoluteUrl("/learn"),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: guide.title,
          item: pageUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "@id": `${pageUrl}#learning-resource`,
      name: guide.title,
      url: pageUrl,
      description: guide.description,
      image: absoluteUrl(guide.image.src),
      learningResourceType: "Programming tutorial",
      educationalLevel: "Introductory machine learning",
      about: guide.keywords,
      author: authorJsonLd(),
      isPartOf: bookJsonLdReference(),
      isBasedOn: {
        "@type": "DigitalDocument",
        name: guide.resources.find((resource) => resource.kind === "notebook")
          ?.label,
        url: guide.resources.find((resource) => resource.kind === "notebook")
          ?.href,
        isPartOf: sourceJsonLdReference(),
      },
      hasPart: guide.resources.map((resource) => ({
        "@type": "CreativeWork",
        name: resource.label,
        description: resource.description,
        url: resource.href,
      })),
    },
  ];
}

export function learningGuidesCollectionJsonLd(guides: LearningGuide[]) {
  return collectionPageJsonLd({
    name: "Machine Learning from Scratch Guides",
    description:
      "Visual, source-backed Python guides for implementing core machine learning algorithms from scratch.",
    path: "/learn",
    items: guides.map((guide) => ({
      name: guide.title,
      description: guide.description,
      url: absoluteUrl(learningGuideHref(guide)),
    })),
  });
}
