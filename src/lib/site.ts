import type { Metadata } from "next";

export const siteConfig = {
  name: "Machine Learning Refined",
  title: "Machine Learning Refined 2nd Edition | GitHub, PDFs & Notebooks",
  description:
    "Official Machine Learning Refined 2nd edition site with chapter PDFs, GitHub notebooks, exercises, slides, and Python resources for the Cambridge textbook.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.mlrefined.com").replace(
    /\/$/,
    "",
  ),
  githubRepo: "https://github.com/neonwatty/machine-learning-refined",
  resourceRepo:
    "https://github.com/neonwatty/machine-learning-refined/tree/main",
  publisherUrl:
    "https://www.cambridge.org/highereducation/books/machine-learning-refined/0A64B2370C2F7CE3ACF535835E9D7955",
  isbn: "9781108480727",
  authors: ["Jeremy Watt", "Reza Borhani", "Aggelos K. Katsaggelos"],
};

export const bookCoverImage = {
  url: "/book-cover-2nd.png",
  width: 1226,
  height: 1746,
  alt: "Machine Learning Refined second edition book cover",
} as const;

export const socialPreviewImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Machine Learning Refined second edition social preview with book cover, GitHub notebooks, chapter PDFs, exercises, and slides.",
} as const;

export const twitterPreviewImage = {
  url: "/twitter-image",
  width: 1200,
  height: 630,
  alt: socialPreviewImage.alt,
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function createPageMetadata({
  description,
  keywords = [],
  noIndex = false,
  path,
  title,
}: {
  description: string;
  keywords?: string[];
  noIndex?: boolean;
  path: string;
  title: string;
}): Metadata {
  const resolvedTitle =
    title === siteConfig.name ? siteConfig.name : `${title} | ${siteConfig.name}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
          googleBot: {
            index: false,
            follow: false,
          },
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      title: resolvedTitle,
      description,
      url: absoluteUrl(path),
      siteName: siteConfig.name,
      type: "website",
      images: [socialPreviewImage],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description,
      images: [twitterPreviewImage],
    },
  };
}

export const primaryNav = [
  { href: "/", label: "Home" },
  { href: "/notebooks", label: "Notebooks" },
  { href: "/chapters", label: "Chapters" },
  { href: "/instructors", label: "Instructors" },
  { href: "/reviews", label: "Reviews" },
];

export const approvedPublicNav = [
  { href: "/", label: "Home" },
  { href: "/notebooks", label: "Notebooks" },
  { href: "/chapters", label: "Chapters" },
  { href: "/instructors", label: "Instructors" },
  { href: "/reviews", label: "Reviews" },
];

export const publicRoutes = [
  "/",
  "/notebooks",
  "/chapters",
  "/instructors",
  "/resources",
  "/reviews",
];
