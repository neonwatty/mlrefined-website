import type { ChapterTrack, LearningWidget, StudyRoadmap } from "./book.types";

export const chapterTracks: ChapterTrack[] = [
  {
    title: "Optimization foundations",
    range: "Chapters 2-4",
    description:
      "Zero-, first-, and second-order methods give the book its unifying language for learning algorithms.",
    topics: [
      "gradient descent",
      "Newton methods",
      "step length",
      "automatic differentiation",
    ],
    image: "/learning-visuals/widgets/normalized-gradient-descent.gif",
    imageAlt: "Animated normalized gradient descent visualization",
    href: "https://github.com/neonwatty/machine-learning-refined/tree/main/notes/3_First_order_methods",
  },
  {
    title: "Linear learning",
    range: "Chapters 5-8",
    description:
      "Regression, classification, metrics, PCA, clustering, and matrix factorization from one model-fitting view.",
    topics: ["least squares", "logistic regression", "SVMs", "PCA", "K-means"],
    image: "/learning-visuals/widgets/logistic-regression.gif",
    imageAlt: "Animated logistic regression decision boundary visualization",
    href: "https://github.com/neonwatty/machine-learning-refined/tree/main/notes/6_Linear_twoclass_classification",
  },
  {
    title: "Feature learning and networks",
    range: "Chapters 10-14",
    description:
      "Nonlinear features, universal approximators, kernels, multilayer perceptrons, and tree-based learners.",
    topics: [
      "feature engineering",
      "neural networks",
      "kernels",
      "trees",
      "cross-validation",
    ],
    image: "/learning-visuals/widgets/function-approx-nn.gif",
    imageAlt: "Animated neural network function approximation visualization",
    href: "https://github.com/neonwatty/machine-learning-refined/tree/main/notes/13_Multilayer_perceptrons",
  },
];

export const learningWidgets: LearningWidget[] = [
  {
    title: "Cross-validation",
    topic: "Regression",
    image: "/learning-visuals/widgets/cross-validation-regression.gif",
    href: "https://github.com/neonwatty/machine-learning-refined/tree/main/notes/11_Feature_learning",
  },
  {
    title: "K-means clustering",
    topic: "Unsupervised learning",
    image: "/learning-visuals/widgets/kmeans.gif",
    href: "https://github.com/neonwatty/machine-learning-refined/tree/main/notes/8_Linear_unsupervised_learning",
  },
  {
    title: "Feature normalization",
    topic: "Feature engineering",
    image: "/learning-visuals/widgets/feature-normalization.gif",
    href: "https://github.com/neonwatty/machine-learning-refined/tree/main/notes/9_Feature_engineer_select",
  },
  {
    title: "Taylor series",
    topic: "Optimization geometry",
    image: "/learning-visuals/widgets/taylor-series.gif",
    href: "https://github.com/neonwatty/machine-learning-refined/tree/main/notes/3_First_order_methods",
  },
];

export const studyRoadmaps: StudyRoadmap[] = [
  {
    title: "Essentials course",
    description:
      "A compressed path for quarter systems, self-study, or courses where machine learning supports a broader program.",
    image: "/learning-visuals/roadmaps/essentials-roadmap.png",
    imageAlt: "Essentials machine learning course roadmap",
  },
  {
    title: "Full treatment",
    description:
      "A deeper semester path for senior undergraduate, early graduate, and motivated independent learners.",
    image: "/learning-visuals/roadmaps/full-treatment-roadmap.png",
    imageAlt: "Full standard machine learning course roadmap",
  },
  {
    title: "Optimization focus",
    description:
      "A path centered on mathematical optimization for machine learning and deep learning.",
    image: "/learning-visuals/roadmaps/optimization-roadmap.png",
    imageAlt: "Optimization for machine learning roadmap",
  },
  {
    title: "Deep learning intro",
    description:
      "A focused sequence for the early portion of a deep learning course.",
    image: "/learning-visuals/roadmaps/deep-learning-roadmap.png",
    imageAlt: "Deep learning introductory roadmap",
  },
];
