export type BookChapter = {
  number: string;
  title: string;
  slug: string;
  intent: "learner" | "instructor" | "reference";
  summary: string;
};

export const bookStats = [
  { value: "2nd", label: "edition" },
  { value: "100+", label: "universities and colleges" },
  { value: "84", label: "notebooks in the resource repo" },
  { value: "13", label: "exercise notebooks" },
];

export const pedagogy = [
  {
    title: "Intuition",
    description: "Explain the idea plainly before formalizing it.",
  },
  {
    title: "Visualization",
    description: "Use geometry and animations to make the model visible.",
  },
  {
    title: "Mathematics",
    description: "Derive the costs, models, and optimization routines.",
  },
  {
    title: "Implementation",
    description: "Code the method directly in Python with fundamental tools.",
  },
];

export const audiencePaths = [
  {
    title: "Independent learners",
    description:
      "Start with chapter PDFs, online notes, Colab notebooks, and guided roadmaps.",
  },
  {
    title: "Instructors",
    description:
      "Use slides, exercise wrappers, datasets, and course-oriented study plans.",
  },
  {
    title: "Practitioners returning to fundamentals",
    description:
      "Revisit regression, classification, clustering, optimization, and deep learning from a unified viewpoint.",
  },
];

export const purchaseLinks = [
  {
    title: "Cambridge University Press",
    href: "https://www.cambridge.org/us/academic/subjects/engineering/communications-and-signal-processing/machine-learning-refined-foundations-algorithms-and-applications-2nd-edition?format=HB",
  },
  {
    title: "Amazon",
    href: "https://www.amazon.com/Machine-Learning-Refined-Foundations-Applications/dp/1108480721",
  },
  {
    title: "Barnes & Noble",
    href: "https://www.barnesandnoble.com/w/machine-learning-refined-jeremy-watt/1136155294?ean=9781108480727",
  },
];

export const chapters: BookChapter[] = [
  {
    number: "1",
    title: "Introduction to Machine Learning",
    slug: "introduction-to-machine-learning",
    intent: "learner",
    summary: "Book orientation, taxonomy, and the optimization viewpoint.",
  },
  {
    number: "2",
    title: "Zero-Order Optimization Techniques",
    slug: "zero-order-optimization-techniques",
    intent: "learner",
    summary: "Search, coordinate descent, local methods, and global methods.",
  },
  {
    number: "3",
    title: "First-Order Optimization Techniques",
    slug: "first-order-optimization-techniques",
    intent: "learner",
    summary: "Gradients, descent geometry, step lengths, and mini-batch methods.",
  },
  {
    number: "5",
    title: "Linear Regression",
    slug: "linear-regression",
    intent: "reference",
    summary: "Least squares, absolute deviations, metrics, and probabilistic framing.",
  },
  {
    number: "6",
    title: "Linear Two-Class Classification",
    slug: "linear-two-class-classification",
    intent: "reference",
    summary: "Logistic regression, perceptrons, SVMs, losses, and metrics.",
  },
  {
    number: "13",
    title: "Fully Connected Neural Networks",
    slug: "fully-connected-neural-networks",
    intent: "learner",
    summary: "Multilayer perceptrons, activation functions, optimization, and backprop.",
  },
];

export const resourceGroups = [
  {
    title: "Chapter PDFs",
    description:
      "Sample chapters and book PDFs linked back to the canonical GitHub repo.",
    href: "https://github.com/neonwatty/machine-learning-refined/tree/main/chapter_pdfs",
  },
  {
    title: "Colab and Jupyter notebooks",
    description:
      "Interactive notes for optimization, regression, classification, clustering, and neural networks.",
    href: "https://github.com/neonwatty/machine-learning-refined/tree/main/notes",
  },
  {
    title: "Exercises",
    description:
      "Exercise wrappers and datasets for hands-on Python practice.",
    href: "https://github.com/neonwatty/machine-learning-refined/tree/main/exercises",
  },
  {
    title: "Slides and roadmaps",
    description:
      "Instructor-facing presentations and recommended study paths for different courses.",
    href: "https://github.com/neonwatty/machine-learning-refined/tree/main/presentations",
  },
];
