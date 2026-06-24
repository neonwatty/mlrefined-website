import { bookLinks, colabPath, repoPath } from "./book-links";
import type { ChapterTrack, LearningWidget, StudyRoadmap } from "./book.types";

export const learningWidgets: LearningWidget[] = [
  widget("Normalized Gradient Descent", "Optimization", "Ch. 3", "normalized-gradient-descent.gif", "notes/3_First_order_methods/A_3_Normalized.ipynb", "Contours, path history, normalized steps, and convergence behavior."),
  widget("Logistic Regression", "Classification", "Ch. 6", "logistic-regression.gif", "notes/6_Linear_twoclass_classification/6_2_Cross_entropy.ipynb", "Decision boundaries, sigmoid geometry, and cross entropy source notebook."),
  widget("K-means clustering", "Clustering", "Ch. 8", "kmeans.gif", "notes/8_Linear_unsupervised_learning/8_5_Kmeans.ipynb", "Centroids, assignments, local minima, and unsupervised learning notes."),
  widget("Feature normalization", "Features", "Ch. 9", "feature-normalization.gif", "notes/9_Feature_engineer_select/9_3_Scaling.ipynb", "Before-and-after feature scaling views for stable fitting."),
  widget("Neural Network Approximation", "Networks", "Ch. 13", "function-approx-nn.gif", "notes/13_Multilayer_perceptrons/13_2_Multi_layer_perceptrons.ipynb", "A small multilayer perceptron fitting a nonlinear function."),
  widget("Cross-validation", "Validation", "Ch. 11", "cross-validation-regression.gif", "notes/11_Feature_learning/11_10_Kfolds.ipynb", "Fold-based model checks and K-fold source notebook paths."),
  widget("Regression Trees", "Trees", "Ch. 14", "regression-tree.gif", "exercises/chapter_14/chapter_14_exercises.ipynb", "Piecewise predictions and split diagrams for tree-based learners."),
  widget("Taylor series", "Series", "Ch. 3", "taylor-series.gif", "notes/3_First_order_methods/3_3_Geometry.ipynb", "Local polynomial approximations that support optimization geometry."),
];

export const instructorRoadmaps: ChapterTrack[] = [
  {
    id: "essentials",
    title: "Essentials",
    range: "Chapters 2-11",
    subtitle: "Core ML in one semester",
    badge: "Core semester",
    cadence: "12 to 16 week course",
    description:
      "A compact path from optimization foundations into supervised and unsupervised learning.",
    topics: ["optimization", "regression", "classification", "PCA", "validation"],
    image: "/learning-visuals/roadmaps/essentials-roadmap.png",
    imageAlt: "Essentials machine learning course roadmap",
    href: bookLinks.roadmapGuide,
    chapters: [
      step("2", "Cost landscapes", "zero-order search", "model fitting"),
      step("3", "Gradient descent", "line search", "momentum"),
      step("5", "Linear regression", "least squares", "regularization"),
      step("6", "Two-class classification", "logistic regression", "boundaries"),
      step("7", "Multiclass classification", "one-versus-all", "metrics"),
      step("8", "Unsupervised learning", "PCA", "K-means"),
      step("9", "Feature preparation", "scaling", "selection"),
      step("11", "Model validation", "feature learning", "cross-validation"),
    ],
  },
  {
    id: "full",
    title: "Full treatment",
    range: "Chapters 1-14 + Appendix C",
    subtitle: "Complete coverage",
    badge: "Complete sequence",
    cadence: "Full semester or two-term sequence",
    description:
      "The book-scale route through optimization, linear learning, nonlinear features, and networks.",
    topics: ["optimization", "linear learning", "features", "kernels", "networks"],
    image: "/learning-visuals/roadmaps/full-treatment-roadmap.png",
    imageAlt: "Full standard machine learning course roadmap",
    href: bookLinks.roadmapGuide,
    chapters: [
      step("1", "Orientation", "machine learning landscape", "course framing"),
      step("2", "Zero-order optimization", "search", "evolutionary methods"),
      step("3", "First-order optimization", "gradients", "descent"),
      step("4", "Second-order optimization", "Newton methods", "curvature"),
      step("5", "Linear regression", "least squares", "statistics"),
      step("6", "Binary classification", "logistic regression", "losses"),
      step("7", "Multiclass classification", "perceptrons", "categorical models"),
      step("8", "Linear unsupervised learning", "PCA", "clustering"),
      step("9", "Feature engineering", "scaling", "regularization"),
      step("10", "Nonlinear features", "basis functions", "kernels"),
      step("11", "Feature learning", "validation", "ensembles"),
      step("12", "Kernel methods", "kernel trick", "similarity"),
      step("13", "Neural networks", "layers", "backpropagation"),
      step("14", "Tree-based learners", "boosting", "random forests"),
      step("C", "Linear algebra appendix", "norms", "decompositions"),
    ],
  },
  {
    id: "optimization",
    title: "Optimization focus",
    range: "Chapters 2-6, 9, 13, C",
    subtitle: "Math and algorithm depth",
    badge: "Math depth",
    cadence: "Optimization-forward module",
    description:
      "The mathematical spine of the book, with learning chapters as algorithmic laboratories.",
    topics: ["cost functions", "gradients", "curvature", "conditioning"],
    image: "/learning-visuals/roadmaps/optimization-roadmap.png",
    imageAlt: "Optimization for machine learning roadmap",
    href: bookLinks.roadmapGuide,
    chapters: [
      step("2", "Optimization setup", "cost functions", "search"),
      step("3", "Gradient methods", "geometry", "step rules"),
      step("4", "Curvature methods", "Newton", "second-order models"),
      step("5", "Least-squares fitting", "linear systems", "regularization"),
      step("6", "Classification losses", "logistic loss", "boundaries"),
      step("9", "Conditioning and scaling", "normalization", "regularization"),
      step("13", "Network training", "composition", "backpropagation"),
      step("C", "Linear algebra support", "norms", "matrix calculus"),
    ],
  },
  {
    id: "deep",
    title: "Deep learning intro",
    range: "Chapters 3, 5, 6, 9-11, 13, C",
    subtitle: "Foundations to networks",
    badge: "Deep learning bridge",
    cadence: "Deep learning bridge course",
    description:
      "A route from linear prediction and feature preparation into learned representations.",
    topics: ["descent", "prediction", "features", "networks"],
    image: "/learning-visuals/roadmaps/deep-learning-roadmap.png",
    imageAlt: "Deep learning introductory roadmap",
    href: bookLinks.roadmapGuide,
    chapters: [
      step("3", "Gradient foundations", "descent", "line search"),
      step("5", "Linear prediction", "regression", "losses"),
      step("6", "Classification", "logistic regression", "cross-entropy"),
      step("9", "Data conditioning", "scaling", "cleaning"),
      step("10", "Nonlinear feature maps", "basis expansion", "kernels"),
      step("11", "Feature learning", "validation", "learned transforms"),
      step("13", "Fully connected networks", "layers", "backpropagation"),
      step("C", "Linear algebra support", "norms", "matrix operations"),
    ],
  },
];

export const chapterTracks: ChapterTrack[] = [
  learningTrack(
    "optimization-foundations",
    "Optimization foundations",
    "Chapters 2-4",
    "Zero-, first-, and second-order methods give the book its unifying language for learning algorithms.",
    ["gradient descent", "Newton methods", "step length", "automatic differentiation"],
    "/learning-visuals/widgets/normalized-gradient-descent.gif",
    "Animated normalized gradient descent visualization",
    repoPath("tree/main/notes/3_First_order_methods"),
  ),
  learningTrack(
    "linear-learning",
    "Linear learning",
    "Chapters 5-8",
    "Regression, classification, metrics, PCA, clustering, and matrix factorization from one model-fitting view.",
    ["least squares", "logistic regression", "SVMs", "PCA", "K-means"],
    "/learning-visuals/widgets/logistic-regression.gif",
    "Animated logistic regression decision boundary visualization",
    repoPath("tree/main/notes/6_Linear_twoclass_classification"),
  ),
  learningTrack(
    "feature-learning-and-networks",
    "Feature learning and networks",
    "Chapters 10-14",
    "Nonlinear features, universal approximators, kernels, multilayer perceptrons, and tree-based learners.",
    ["feature engineering", "neural networks", "kernels", "trees", "cross-validation"],
    "/learning-visuals/widgets/function-approx-nn.gif",
    "Animated neural network function approximation visualization",
    repoPath("tree/main/notes/13_Multilayer_perceptrons"),
  ),
];

export const studyRoadmaps: StudyRoadmap[] = instructorRoadmaps.map((track) => ({
  title: track.title,
  description: track.description,
  image: track.image,
  imageAlt: track.imageAlt,
}));

function widget(
  title: string,
  topic: string,
  chapter: string,
  image: string,
  path: string,
  description: string,
): LearningWidget {
  return {
    title,
    topic,
    chapter,
    description,
    image: `/learning-visuals/widgets/${image}`,
    imageAlt: `${title} visual notebook preview`,
    notebook: repoPath(`blob/main/${path}`),
    colab: colabPath(path),
    href: repoPath(`blob/main/${path}`),
  };
}

function learningTrack(
  id: string,
  title: string,
  range: string,
  description: string,
  topics: string[],
  image: string,
  imageAlt: string,
  href: string,
): ChapterTrack {
  return {
    id,
    title,
    range,
    subtitle: range,
    badge: "Learning track",
    cadence: "Self-paced",
    description,
    topics,
    image,
    imageAlt,
    href,
    chapters: [],
  };
}

function step(number: string, label: string, topicOne: string, topicTwo: string) {
  return { number, label, topics: [topicOne, topicTwo] as [string, string] };
}
