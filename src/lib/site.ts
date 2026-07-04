export const siteConfig = {
  name: "Machine Learning Refined",
  title:
    "Machine Learning Refined 2nd Edition | GitHub, PDFs & Notebooks",
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

export const primaryNav = [
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
