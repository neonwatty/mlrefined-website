import type { BookChapter } from "./book.types";

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
    summary:
      "Least squares, absolute deviations, metrics, and probabilistic framing.",
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
    summary:
      "Multilayer perceptrons, activation functions, optimization, and backprop.",
  },
];
