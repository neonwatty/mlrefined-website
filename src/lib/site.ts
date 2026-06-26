import type { Metadata } from "next";

export const siteConfig = {
  name: "Machine Learning Refined",
  description:
    "Machine Learning Refined: Foundations, Algorithms, and Applications. Explore the textbook, chapter resources, visual notebooks, instructor paths, and adoption proof.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.mlrefined.com",
  githubRepo: "https://github.com/neonwatty/machine-learning-refined",
  resourceRepo:
    "https://github.com/neonwatty/machine-learning-refined/tree/main",
};

export const bookCoverImage = {
  url: "/book-cover-2nd.png",
  width: 1226,
  height: 1746,
  alt: "Machine Learning Refined second edition book cover",
} as const;

export const socialPreviewImage = {
  url: "/opengraph-image.png",
  width: 1200,
  height: 630,
  alt: "Machine Learning Refined book cover with the line Machine learning, from intuition to implementation.",
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function createPageMetadata({
  description,
  path,
  title,
}: {
  description: string;
  path: string;
  title: string;
}): Metadata {
  const resolvedTitle =
    title === siteConfig.name ? siteConfig.name : `${title} | ${siteConfig.name}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
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
      images: [socialPreviewImage],
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
  "/reviews",
];
