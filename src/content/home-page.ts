import { chapterTracks, learningWidgets } from "./book-learning";

export const pedagogySteps = [
  { number: "01", title: "Intuition", note: "See the idea" },
  { number: "02", title: "Visualization", note: "Watch the geometry" },
  { number: "03", title: "Derivation", note: "Earn the notation" },
  { number: "04", title: "Implementation", note: "Build it in Python" },
];

export const visualPath = [
  ["Look", "Start with a real book figure."],
  ["Learn", "Open the chapter package behind it."],
  ["Run", "Continue in an animated notebook."],
] as const;

export const featuredFigures = [
  {
    chapter: "Ch. 2 / Optimization",
    title: "Regression as Optimization",
    description:
      "A first-principles view of fitting a regression model by minimizing a cost function.",
    image: "/learning-visuals/book-figures/bigpicture_regression_optimization.png",
    alt: "Regression model fitting visualized as cost minimization",
    href: "https://github.com/neonwatty/machine-learning-refined/tree/main/notes/2_Zero_order_methods",
  },
  {
    chapter: "Ch. 2 / Optimization",
    title: "Classification as Optimization",
    description:
      "Decision boundaries, costs, and geometric intuition brought into the same picture.",
    image:
      "/learning-visuals/book-figures/bigpicture_classification_optimization.png",
    alt: "Classification model fitting visualized as optimization",
    href: "https://github.com/neonwatty/machine-learning-refined/tree/main/notes/2_Zero_order_methods",
  },
  {
    chapter: "Ch. 3 / First-order Methods",
    title: "Exact vs. Backtracking Search",
    description:
      "Step-length choices made visible before the optimization routine becomes code.",
    image: "/learning-visuals/book-figures/exact_vs_backtrack.png",
    alt: "Exact line search compared with backtracking line search",
    href: "https://github.com/neonwatty/machine-learning-refined/tree/main/notes/3_First_order_methods",
  },
  {
    chapter: "Ch. 13 / Neural Networks",
    title: "Layer-by-layer Networks",
    description:
      "A multilayer network unfolded into a readable sequence of transformations.",
    image: "/learning-visuals/book-figures/L_layer_network_unfolded.png",
    alt: "Multilayer neural network unfolded layer by layer",
    href: "https://github.com/neonwatty/machine-learning-refined/tree/main/notes/13_Multilayer_perceptrons",
  },
];

export const homeAnimations = [
  {
    title: chapterTracks[0].title,
    meta: chapterTracks[0].range,
    image: chapterTracks[0].image,
    imageAlt: chapterTracks[0].imageAlt,
    href: chapterTracks[0].href,
  },
  {
    title: chapterTracks[1].title,
    meta: chapterTracks[1].range,
    image: chapterTracks[1].image,
    imageAlt: chapterTracks[1].imageAlt,
    href: chapterTracks[1].href,
  },
  {
    title: learningWidgets[1].title,
    meta: learningWidgets[1].topic,
    image: learningWidgets[1].image,
    imageAlt: `${learningWidgets[1].title} animated notebook preview`,
    href: learningWidgets[1].href,
  },
  {
    title: learningWidgets[2].title,
    meta: learningWidgets[2].topic,
    image: learningWidgets[2].image,
    imageAlt: `${learningWidgets[2].title} animated notebook preview`,
    href: learningWidgets[2].href,
  },
];
