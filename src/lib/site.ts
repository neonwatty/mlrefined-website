export const siteConfig = {
  name: "Machine Learning Refined",
  description:
    "A modern web home for Machine Learning Refined: book resources, chapter guides, notebooks, exercises, and SEO analytics.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.mlrefined.com",
  githubRepo: "https://github.com/neonwatty/machine-learning-refined",
  resourceRepo:
    "https://github.com/neonwatty/machine-learning-refined/tree/main",
};

export const primaryNav = [
  { href: "/", label: "Home" },
  { href: "/chapters", label: "Chapters" },
  { href: "/notebooks", label: "Notebooks" },
  { href: "/instructors", label: "Instructors" },
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
  "/chapters",
  "/notebooks",
  "/instructors",
  "/resources",
  "/dashboard",
];
