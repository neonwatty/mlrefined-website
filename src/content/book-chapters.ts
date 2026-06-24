import { bookLinks, colabPath, repoPath } from "./book-links";
import type { BookChapter } from "./book.types";

export const chapters: BookChapter[] = [
  {
    part: "Introduction",
    number: "1",
    title: "Introduction",
    slug: "introduction",
    summary:
      "The machine learning landscape, modeling mindset, and refinement philosophy.",
    audience: ["learner"],
    resources: { pdf: bookLinks.pdfs },
  },
  {
    part: "Part I Mathematical Optimization",
    number: "2",
    title: "Zero-Order Optimization Techniques",
    slug: "zero-order-optimization-techniques",
    summary:
      "Search, random methods, and evolutionary strategies without derivatives.",
    audience: ["learner", "instructor"],
    resources: {
      pdf: bookLinks.pdfs,
      notes: repoPath("tree/main/notes/2_Zero_order_methods"),
      exercise: repoPath("tree/main/exercises/chapter_2"),
      slides: bookLinks.slides,
    },
  },
  {
    part: "Part I Mathematical Optimization",
    number: "3",
    title: "First-Order Optimization Techniques",
    slug: "first-order-optimization-techniques",
    summary:
      "Gradient-based methods, line search, momentum, and adaptive algorithms.",
    audience: ["learner", "instructor"],
    resources: {
      pdf: bookLinks.pdfs,
      notebook: repoPath("blob/main/notes/3_First_order_methods/3_5_Descent.ipynb"),
      colab: colabPath("notes/3_First_order_methods/3_5_Descent.ipynb"),
      exercise: repoPath("blob/main/exercises/chapter_3/chapter_3_exercises.ipynb"),
      slides: bookLinks.slides,
    },
  },
  {
    part: "Part I Mathematical Optimization",
    number: "4",
    title: "Second-Order Optimization Techniques",
    slug: "second-order-optimization-techniques",
    summary:
      "Newton methods, quasi-Newton updates, trust regions, and curvature exploitation.",
    audience: ["learner", "instructor"],
    resources: {
      pdf: bookLinks.pdfs,
      notes: repoPath("tree/main/notes/4_Second_order_methods"),
      exercise: repoPath("tree/main/exercises/chapter_4"),
      slides: bookLinks.slides,
    },
  },
  {
    part: "Part II Linear Learning",
    number: "5",
    title: "Linear Regression",
    slug: "linear-regression",
    summary:
      "Least squares, regularization, and statistical foundations of linear regression.",
    audience: ["learner", "instructor"],
    resources: {
      pdf: bookLinks.pdfs,
      notes: repoPath("tree/main/notes/5_Linear_regression"),
      exercise: repoPath("tree/main/exercises/chapter_5"),
      slides: bookLinks.slides,
    },
  },
  {
    part: "Part II Linear Learning",
    number: "6",
    title: "Two-Class Classification",
    slug: "two-class-classification",
    summary:
      "Logistic regression, decision boundaries, and probabilistic classification.",
    audience: ["learner", "instructor"],
    resources: {
      pdf: bookLinks.pdfs,
      notebook: repoPath(
        "blob/main/notes/6_Linear_twoclass_classification/6_2_Cross_entropy.ipynb",
      ),
      colab: colabPath("notes/6_Linear_twoclass_classification/6_2_Cross_entropy.ipynb"),
      exercise: repoPath("blob/main/exercises/chapter_6/chapter_6_exercises.ipynb"),
      slides: bookLinks.slides,
    },
  },
  {
    part: "Part II Linear Learning",
    number: "7",
    title: "Linear Multi-Class Classification",
    slug: "linear-multi-class-classification",
    summary:
      "One-versus-all, multiclass perceptrons, categorical encodings, and metrics.",
    audience: ["learner", "instructor"],
    resources: {
      pdf: bookLinks.pdfs,
      notebook: repoPath("blob/main/notes/7_Linear_multiclass_classification/7_2_OvA.ipynb"),
      colab: colabPath("notes/7_Linear_multiclass_classification/7_2_OvA.ipynb"),
      exercise: repoPath("blob/main/exercises/chapter_7/chapter_7_exercises.ipynb"),
      slides: bookLinks.slides,
    },
  },
  {
    part: "Part II Linear Learning",
    number: "8",
    title: "Linear Unsupervised Learning",
    slug: "linear-unsupervised-learning",
    summary: "PCA, SVD, subspace methods, and structure discovery.",
    audience: ["learner", "instructor"],
    resources: {
      pdf: bookLinks.pdfs,
      notebook: repoPath("blob/main/notes/8_Linear_unsupervised_learning/8_5_Kmeans.ipynb"),
      colab: colabPath("notes/8_Linear_unsupervised_learning/8_5_Kmeans.ipynb"),
      exercise: repoPath("blob/main/exercises/chapter_8/chapter_8_exercises.ipynb"),
      slides: bookLinks.slides,
    },
  },
  {
    part: "Part II Linear Learning",
    number: "9",
    title: "Feature Engineering and Selection",
    slug: "feature-engineering-and-selection",
    summary: "Scaling, cleaning, PCA sphereing, boosting, and regularization.",
    audience: ["learner", "instructor"],
    resources: {
      pdf: bookLinks.pdfs,
      notebook: repoPath("blob/main/notes/9_Feature_engineer_select/9_3_Scaling.ipynb"),
      colab: colabPath("notes/9_Feature_engineer_select/9_3_Scaling.ipynb"),
      exercise: repoPath("blob/main/exercises/chapter_9/chapter_9_exercises.ipynb"),
      slides: bookLinks.slides,
    },
  },
  {
    part: "Part III Nonlinear Learning",
    number: "10",
    title: "Principles of Nonlinear Feature Engineering",
    slug: "principles-of-nonlinear-feature-engineering",
    summary:
      "Basis expansions, kernels, and handcrafted nonlinear representations.",
    audience: ["learner", "instructor"],
    resources: {
      pdf: bookLinks.pdfs,
      notes: repoPath("tree/main/notes/10_Nonlinear_intro"),
      exercise: repoPath("tree/main/exercises/chapter_10"),
      slides: bookLinks.slides,
    },
  },
  {
    part: "Part III Nonlinear Learning",
    number: "11",
    title: "Principles of Feature Learning",
    slug: "principles-of-feature-learning",
    summary:
      "Representation learning, autoencoders, validation, and learned embeddings.",
    audience: ["learner", "instructor"],
    resources: {
      pdf: bookLinks.pdfs,
      notebook: repoPath("blob/main/notes/11_Feature_learning/11_10_Kfolds.ipynb"),
      colab: colabPath("notes/11_Feature_learning/11_10_Kfolds.ipynb"),
      exercise: repoPath("tree/main/exercises/chapter_11"),
      slides: bookLinks.slides,
    },
  },
  {
    part: "Part III Nonlinear Learning",
    number: "12",
    title: "Kernel Methods",
    slug: "kernel-methods",
    summary:
      "Fixed-shape universal approximators, similarity measures, and kernelized optimization.",
    audience: ["learner", "instructor"],
    resources: {
      pdf: bookLinks.pdfs,
      exercise: repoPath("blob/main/exercises/chapter_12/chapter_12_exercises.ipynb"),
      slides: bookLinks.slides,
    },
  },
  {
    part: "Part III Nonlinear Learning",
    number: "13",
    title: "Fully Connected Neural Networks",
    slug: "fully-connected-neural-networks",
    summary:
      "MLPs, backpropagation, initialization, regularization, and training.",
    audience: ["learner", "instructor"],
    resources: {
      pdf: bookLinks.pdfs,
      notebook: repoPath(
        "blob/main/notes/13_Multilayer_perceptrons/13_2_Multi_layer_perceptrons.ipynb",
      ),
      colab: colabPath("notes/13_Multilayer_perceptrons/13_2_Multi_layer_perceptrons.ipynb"),
      exercise: repoPath("tree/main/exercises/chapter_13"),
      slides: bookLinks.slides,
    },
  },
  {
    part: "Part III Nonlinear Learning",
    number: "14",
    title: "Tree-Based Learners",
    slug: "tree-based-learners",
    summary:
      "Regression trees, classification trees, gradient boosting, random forests, and validation.",
    audience: ["learner", "instructor"],
    resources: {
      pdf: bookLinks.pdfs,
      exercise: repoPath("blob/main/exercises/chapter_14/chapter_14_exercises.ipynb"),
      slides: bookLinks.slides,
    },
  },
  {
    part: "Part IV Appendices",
    number: "C",
    title: "Linear Algebra",
    slug: "linear-algebra",
    summary:
      "Vector spaces, norms, decompositions, and matrix calculus essentials.",
    audience: ["learner"],
    resources: {
      pdf: bookLinks.pdfs,
      notes: repoPath("tree/main/notes/16_Linear_algebra"),
    },
  },
];
