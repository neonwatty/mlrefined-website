const ROOT = "../../../targets";
const FIGURE_ROOT = "./assets/book-figures";

const links = {
  repo: "https://github.com/neonwatty/machine-learning-refined",
  notesAssets: "https://github.com/neonwatty/machine-learning-refined-notes-assets",
  preface: "https://www.dropbox.com/scl/fi/ww9csqm9luym160uerz0w/1_preface.pdf?rlkey=gu5j5ghii6txoijdfrexsvvti&st=4vfhw0cu&dl=0",
  roadmapGuide: "https://github.com/neonwatty/machine-learning-refined/blob/main/README.md#how-to-use-the-book",
  pdfs: "https://github.com/neonwatty/machine-learning-refined/blob/main/chapter_pdfs/README.md",
  slides: "https://github.com/neonwatty/machine-learning-refined/blob/main/presentations/README.md",
  notes: "https://github.com/neonwatty/machine-learning-refined/tree/main/notes",
  exercises: "https://github.com/neonwatty/machine-learning-refined/tree/main/exercises"
};

const widgets = [
  {
    title: "Normalized Gradient Descent",
    topic: "Optimization",
    chapter: "Ch. 3",
    image: `${ROOT}/mlr-visual-gallery/reference/assets/widgets/normalized-gradient-descent.gif`,
    alt: "Animated normalized gradient descent contour visualization",
    description: "Contours, path history, normalized steps, and convergence behavior for first-order methods.",
    notebook: "https://github.com/neonwatty/machine-learning-refined/blob/main/notes/3_First_order_methods/A_3_Normalized.ipynb",
    colab: "https://colab.research.google.com/github/neonwatty/machine-learning-refined/blob/main/notes/3_First_order_methods/A_3_Normalized.ipynb"
  },
  {
    title: "Logistic Regression",
    topic: "Classification",
    chapter: "Ch. 6",
    image: `${ROOT}/mlr-visual-gallery/reference/assets/widgets/logistic-regression.gif`,
    alt: "Animated logistic regression classification visualization",
    description: "Decision boundaries, sigmoid geometry, and cross entropy source notebook.",
    notebook: "https://github.com/neonwatty/machine-learning-refined/blob/main/notes/6_Linear_twoclass_classification/6_2_Cross_entropy.ipynb",
    colab: "https://colab.research.google.com/github/neonwatty/machine-learning-refined/blob/main/notes/6_Linear_twoclass_classification/6_2_Cross_entropy.ipynb"
  },
  {
    title: "K-Means Clustering",
    topic: "Clustering",
    chapter: "Ch. 8",
    image: `${ROOT}/mlr-visual-gallery/reference/assets/widgets/kmeans.gif`,
    alt: "Animated k-means clustering visualization",
    description: "Centroids, assignments, local minima, and source-backed unsupervised learning notes.",
    notebook: "https://github.com/neonwatty/machine-learning-refined/blob/main/notes/8_Linear_unsupervised_learning/8_5_Kmeans.ipynb",
    colab: "https://colab.research.google.com/github/neonwatty/machine-learning-refined/blob/main/notes/8_Linear_unsupervised_learning/8_5_Kmeans.ipynb"
  },
  {
    title: "Feature Normalization",
    topic: "Features",
    chapter: "Ch. 9",
    image: `${ROOT}/mlr-visual-gallery/reference/assets/widgets/feature-normalization.gif`,
    alt: "Animated feature normalization visualization",
    description: "Before-and-after feature scaling views for stable fitting and conditioning.",
    notebook: "https://github.com/neonwatty/machine-learning-refined/blob/main/notes/9_Feature_engineer_select/9_3_Scaling.ipynb",
    colab: "https://colab.research.google.com/github/neonwatty/machine-learning-refined/blob/main/notes/9_Feature_engineer_select/9_3_Scaling.ipynb"
  },
  {
    title: "Neural Network Approximation",
    topic: "Networks",
    chapter: "Ch. 13",
    image: `${ROOT}/mlr-visual-gallery/reference/assets/widgets/function-approx-nn.gif`,
    alt: "Animated neural network function approximation visualization",
    description: "A small multilayer perceptron fitting a nonlinear function.",
    notebook: "https://github.com/neonwatty/machine-learning-refined/blob/main/notes/13_Multilayer_perceptrons/13_2_Multi_layer_perceptrons.ipynb",
    colab: "https://colab.research.google.com/github/neonwatty/machine-learning-refined/blob/main/notes/13_Multilayer_perceptrons/13_2_Multi_layer_perceptrons.ipynb"
  },
  {
    title: "Cross-Validation",
    topic: "Validation",
    chapter: "Ch. 11",
    image: `${ROOT}/mlr-visual-gallery/reference/assets/widgets/cross-validation-regression.gif`,
    alt: "Animated cross-validation regression visualization",
    description: "Fold-based model checks and K-fold source notebook paths.",
    notebook: "https://github.com/neonwatty/machine-learning-refined/blob/main/notes/11_Feature_learning/11_10_Kfolds.ipynb",
    colab: "https://colab.research.google.com/github/neonwatty/machine-learning-refined/blob/main/notes/11_Feature_learning/11_10_Kfolds.ipynb"
  },
  {
    title: "Regression Trees",
    topic: "Trees",
    chapter: "Ch. 14",
    image: `${ROOT}/mlr-visual-gallery/reference/assets/widgets/regression-tree.gif`,
    alt: "Animated regression tree visualization",
    description: "Piecewise predictions and split diagrams paired with the tree-based learners exercise notebook.",
    notebook: "https://github.com/neonwatty/machine-learning-refined/blob/main/exercises/chapter_14/chapter_14_exercises.ipynb",
    colab: "https://colab.research.google.com/github/neonwatty/machine-learning-refined/blob/main/exercises/chapter_14/chapter_14_exercises.ipynb"
  },
  {
    title: "Taylor Series",
    topic: "Series",
    chapter: "Ch. 3",
    image: `${ROOT}/mlr-visual-gallery/reference/assets/widgets/taylor-series.gif`,
    alt: "Animated Taylor series visualization",
    description: "Local polynomial approximations that support optimization geometry.",
    notebook: "https://github.com/neonwatty/machine-learning-refined/blob/main/notes/3_First_order_methods/3_3_Geometry.ipynb",
    colab: "https://colab.research.google.com/github/neonwatty/machine-learning-refined/blob/main/notes/3_First_order_methods/3_3_Geometry.ipynb"
  }
];

const staticVisuals = [
  {
    title: "Regression as Optimization",
    topic: "Optimization",
    chapter: "Ch. 2",
    chapterTitle: "Zero-Order Optimization Techniques",
    noteHref: `${links.repo}/tree/main/notes/2_Zero_order_methods`,
    image: `${FIGURE_ROOT}/bigpicture_regression_optimization.png`,
    alt: "Static book figure connecting regression fitting to an optimization surface",
    description: "A first-principles view of fitting a regression model by minimizing a cost function.",
    href: `${links.notesAssets}/blob/main/notes/2_Zero_order_methods/chapter_2_images/bigpicture_regression_optimization.png`
  },
  {
    title: "Classification as Optimization",
    topic: "Classification",
    chapter: "Ch. 2",
    chapterTitle: "Zero-Order Optimization Techniques",
    noteHref: `${links.repo}/tree/main/notes/2_Zero_order_methods`,
    image: `${FIGURE_ROOT}/bigpicture_classification_optimization.png`,
    alt: "Static book figure connecting classification to an optimization surface",
    description: "A paired view of classifier boundaries and the cost landscape used to fit them.",
    href: `${links.notesAssets}/blob/main/notes/2_Zero_order_methods/chapter_2_images/bigpicture_classification_optimization.png`
  },
  {
    title: "Direction and Magnitude",
    topic: "Optimization",
    chapter: "Ch. 3",
    chapterTitle: "First-Order Optimization Techniques",
    noteHref: `${links.repo}/tree/main/notes/3_First_order_methods`,
    image: `${FIGURE_ROOT}/direction_magnitude.png`,
    alt: "Static book figure showing descent direction and step magnitude on contours",
    description: "A geometric explanation of descent direction and step length in first-order methods.",
    href: `${links.notesAssets}/blob/main/notes/3_First_order_methods/chapter_3_images/direction_magnitude.png`
  },
  {
    title: "Exact vs Backtracking",
    topic: "Optimization",
    chapter: "Ch. 3",
    chapterTitle: "First-Order Optimization Techniques",
    noteHref: `${links.repo}/tree/main/notes/3_First_order_methods`,
    image: `${FIGURE_ROOT}/exact_vs_backtrack.png`,
    alt: "Static book figure comparing exact and backtracking line search",
    description: "Line-search behavior shown with function geometry instead of only algebra.",
    href: `${links.notesAssets}/blob/main/notes/3_First_order_methods/chapter_3_images/exact_vs_backtrack.png`
  },
  {
    title: "Second-Order Geometry",
    topic: "Optimization",
    chapter: "Ch. 4",
    chapterTitle: "Second-Order Optimization Techniques",
    noteHref: `${links.repo}/tree/main/notes/4_Second_order_methods`,
    image: `${FIGURE_ROOT}/Fig_2_11.png`,
    alt: "Static book figure showing second-order optimization geometry",
    description: "A static view of curvature and local quadratic structure used in second-order methods.",
    href: `${links.notesAssets}/blob/main/notes/4_Second_order_methods/chapter_4_images/Fig_2_11.png`
  },
  {
    title: "Least Squares",
    topic: "Regression",
    chapter: "Ch. 5",
    chapterTitle: "Linear Regression",
    noteHref: `${links.repo}/tree/main/notes/5_Linear_regression`,
    image: `${FIGURE_ROOT}/Least_Squares.png`,
    alt: "Static book figure visualizing least squares residuals",
    description: "Residual geometry for ordinary least-squares linear regression.",
    href: `${links.notesAssets}/blob/main/notes/5_Linear_regression/chapter_5_images/Least_Squares.png`
  },
  {
    title: "Sigmoid Geometry",
    topic: "Classification",
    chapter: "Ch. 6",
    chapterTitle: "Two-Class Classification",
    noteHref: `${links.repo}/tree/main/notes/6_Linear_twoclass_classification`,
    image: `${FIGURE_ROOT}/sigmoid.png`,
    alt: "Static book figure showing sigmoid geometry for logistic regression",
    description: "The sigmoid transform presented as a shape and decision mechanism.",
    href: `${links.notesAssets}/blob/main/notes/6_Linear_twoclass_classification/chapter_6_images/sigmoid.png`
  },
  {
    title: "Distance to Boundary",
    topic: "Classification",
    chapter: "Ch. 6",
    chapterTitle: "Two-Class Classification",
    noteHref: `${links.repo}/tree/main/notes/6_Linear_twoclass_classification`,
    image: `${FIGURE_ROOT}/distance_to_boundary.png`,
    alt: "Static book figure showing point distances to a classification boundary",
    description: "A visual treatment of signed distance and classification boundaries.",
    href: `${links.notesAssets}/blob/main/notes/6_Linear_twoclass_classification/chapter_6_images/distance_to_boundary.png`
  },
  {
    title: "Multiclass Histogram",
    topic: "Classification",
    chapter: "Ch. 7",
    chapterTitle: "Linear Multi-Class Classification",
    noteHref: `${links.repo}/tree/main/notes/7_Linear_multiclass_classification`,
    image: `${FIGURE_ROOT}/multiclass_histogram.png`,
    alt: "Static book figure showing a multiclass histogram",
    description: "A vivid multiclass view that makes category structure and class evidence easy to scan.",
    href: `${links.notesAssets}/blob/main/notes/7_Linear_multiclass_classification/chapter_7_images/multiclass_histogram.png`
  },
  {
    title: "PCA Geometry",
    topic: "Unsupervised",
    chapter: "Ch. 8",
    chapterTitle: "Linear Unsupervised Learning",
    noteHref: `${links.repo}/tree/main/notes/8_Linear_unsupervised_learning`,
    image: `${FIGURE_ROOT}/pca_classic.png`,
    alt: "Static book figure showing principal component directions",
    description: "Principal components as directions in feature space.",
    href: `${links.notesAssets}/blob/main/notes/8_Linear_unsupervised_learning/chapter_8_images/pca_classic.png`
  },
  {
    title: "K-Means Regions",
    topic: "Unsupervised",
    chapter: "Ch. 8",
    chapterTitle: "Linear Unsupervised Learning",
    noteHref: `${links.repo}/tree/main/notes/8_Linear_unsupervised_learning`,
    image: `${FIGURE_ROOT}/Kmeans_2.png`,
    alt: "Static book figure showing K-means clusters and regions",
    description: "Centroids, assignments, and induced cluster regions in a static figure.",
    href: `${links.notesAssets}/blob/main/notes/8_Linear_unsupervised_learning/chapter_8_images/Kmeans_2.png`
  },
  {
    title: "Feature Scaling",
    topic: "Features",
    chapter: "Ch. 9",
    chapterTitle: "Feature Engineering and Selection",
    noteHref: `${links.repo}/tree/main/notes/9_Feature_engineer_select`,
    image: `${FIGURE_ROOT}/standard_normalization_data_and_contours.png`,
    alt: "Static book figure showing standard normalization and cost contours",
    description: "Before-and-after feature normalization tied directly to optimization contours.",
    href: `${links.notesAssets}/blob/main/notes/9_Feature_engineer_select/chapter_9_images/standard_normalization_data_and_contours.png`
  },
  {
    title: "Shared Nonlinear Architecture",
    topic: "Features",
    chapter: "Ch. 10",
    chapterTitle: "Principles of Nonlinear Feature Engineering",
    noteHref: `${links.repo}/tree/main/notes/10_Nonlinear_intro`,
    image: `${FIGURE_ROOT}/sharing_architecture_regression.png`,
    alt: "Static book figure showing shared nonlinear architecture for regression",
    description: "A chapter figure connecting nonlinear features to shared model architecture.",
    href: `${links.notesAssets}/blob/main/notes/10_Nonlinear_intro/chapter_10_images/sharing_architecture_regression.png`
  },
  {
    title: "Feature Learning",
    topic: "Features",
    chapter: "Ch. 11",
    chapterTitle: "Principles of Feature Learning",
    noteHref: `${links.repo}/tree/main/notes/11_Feature_learning`,
    image: `${FIGURE_ROOT}/Figure_11_1.png`,
    alt: "Static book figure introducing feature learning examples",
    description: "A compact example of learned nonlinear transformations and resulting structure.",
    href: `${links.notesAssets}/blob/main/notes/11_Feature_learning/chapter_11_images/Figure_11_1.png`
  },
  {
    title: "Feature Transformations",
    topic: "Feature Learning",
    chapter: "Ch. 11",
    chapterTitle: "Principles of Feature Learning",
    noteHref: `${links.repo}/tree/main/notes/11_Feature_learning`,
    image: `${FIGURE_ROOT}/Figure_11_17.png`,
    alt: "Static book figure showing multiple nonlinear feature transformations",
    description: "A compact atlas of transformations that make feature learning feel geometric instead of abstract.",
    href: `${links.notesAssets}/blob/main/notes/11_Feature_learning/chapter_11_images/Figure_11_17.png`
  },
  {
    title: "Validation Surface Grid",
    topic: "Feature Learning",
    chapter: "Ch. 11",
    chapterTitle: "Principles of Feature Learning",
    noteHref: `${links.repo}/tree/main/notes/11_Feature_learning`,
    image: `${FIGURE_ROOT}/Figure_11_35.png`,
    alt: "Static book figure showing validation behavior across learned feature models",
    description: "A richer chapter figure showing how model choices change validation behavior across examples.",
    href: `${links.notesAssets}/blob/main/notes/11_Feature_learning/chapter_11_images/Figure_11_35.png`
  },
  {
    title: "Learned Decision Boundaries",
    topic: "Feature Learning",
    chapter: "Ch. 11",
    chapterTitle: "Principles of Feature Learning",
    noteHref: `${links.repo}/tree/main/notes/11_Feature_learning`,
    image: `${FIGURE_ROOT}/Figure_11_50.png`,
    alt: "Static book figure showing learned nonlinear decision boundaries",
    description: "Several learned boundaries side-by-side, useful for showing how representation changes classification geometry.",
    href: `${links.notesAssets}/blob/main/notes/11_Feature_learning/chapter_11_images/Figure_11_50.png`
  },
  {
    title: "Feature Learning Complexity",
    topic: "Feature Learning",
    chapter: "Ch. 11",
    chapterTitle: "Principles of Feature Learning",
    noteHref: `${links.repo}/tree/main/notes/11_Feature_learning`,
    image: `${FIGURE_ROOT}/Figure_11_32.png`,
    alt: "Static book figure showing model complexity behavior in feature learning",
    description: "A compact visual of how increasing model complexity changes training and validation behavior.",
    href: `${links.notesAssets}/blob/main/notes/11_Feature_learning/chapter_11_images/Figure_11_32.png`
  },
  {
    title: "Regularized Feature Fits",
    topic: "Feature Learning",
    chapter: "Ch. 11",
    chapterTitle: "Principles of Feature Learning",
    noteHref: `${links.repo}/tree/main/notes/11_Feature_learning`,
    image: `${FIGURE_ROOT}/Figure_11_38.png`,
    alt: "Static book figure comparing regularized feature-learning fits",
    description: "A clean comparison of how regularization reshapes the learned fit and cost behavior.",
    href: `${links.notesAssets}/blob/main/notes/11_Feature_learning/chapter_11_images/Figure_11_38.png`
  },
  {
    title: "Model Families Compared",
    topic: "Feature Learning",
    chapter: "Ch. 11",
    chapterTitle: "Principles of Feature Learning",
    noteHref: `${links.repo}/tree/main/notes/11_Feature_learning`,
    image: `${FIGURE_ROOT}/Figure_11_48.png`,
    alt: "Static book figure comparing feature-learning model families",
    description: "Multiple model families shown together, making the tradeoffs between learned predictors visible.",
    href: `${links.notesAssets}/blob/main/notes/11_Feature_learning/chapter_11_images/Figure_11_48.png`
  },
  {
    title: "Boundary Families",
    topic: "Feature Learning",
    chapter: "Ch. 11",
    chapterTitle: "Principles of Feature Learning",
    noteHref: `${links.repo}/tree/main/notes/11_Feature_learning`,
    image: `${FIGURE_ROOT}/Figure_11_51.png`,
    alt: "Static book figure showing multiple nonlinear boundary families",
    description: "A dense comparison of feature-learning boundary families across the same dataset.",
    href: `${links.notesAssets}/blob/main/notes/11_Feature_learning/chapter_11_images/Figure_11_51.png`
  },
  {
    title: "Unfolded Network",
    topic: "Networks",
    chapter: "Ch. 13",
    chapterTitle: "Fully Connected Neural Networks",
    noteHref: `${links.repo}/tree/main/notes/13_Multilayer_perceptrons`,
    image: `${FIGURE_ROOT}/L_layer_network_unfolded.png`,
    alt: "Static book figure showing an unfolded L-layer neural network",
    description: "A multilayer perceptron drawn as an inspectable composition of units and layers.",
    href: `${links.notesAssets}/blob/main/notes/13_Multilayer_perceptrons/chapter_13_images/L_layer_network_unfolded.png`
  },
  {
    title: "Norm Balls",
    topic: "Linear Algebra",
    chapter: "Appendix C",
    chapterTitle: "Linear Algebra",
    noteHref: `${links.repo}/tree/main/notes/16_Linear_algebra`,
    image: `${FIGURE_ROOT}/norm_balls.png`,
    alt: "Static book figure comparing norm balls",
    description: "Linear algebra geometry that supports optimization and regularization intuition.",
    href: `${links.notesAssets}/blob/main/notes/16_Linear_algebra/chapter_16_images/norm_balls.png`
  }
];

const spotlightFigureTitles = [
  "Regression as Optimization",
  "Classification as Optimization",
  "Exact vs Backtracking",
  "Least Squares",
  "PCA Geometry",
  "Feature Transformations",
  "Validation Surface Grid",
  "Learned Decision Boundaries",
  "Feature Learning Complexity",
  "Regularized Feature Fits",
  "Model Families Compared",
  "Boundary Families",
  "Multiclass Histogram",
  "Unfolded Network"
];

const chapters = [
  {
    part: "Introduction",
    number: "1",
    title: "Introduction",
    description: "The machine learning landscape, modeling mindset, and refinement philosophy.",
    tags: ["learner"],
    resources: { pdf: links.pdfs }
  },
  {
    part: "Part I Mathematical Optimization",
    number: "2",
    title: "Zero-Order Optimization Techniques",
    description: "Search, random methods, and evolutionary strategies without derivatives.",
    tags: ["learner", "instructor"],
    resources: {
      pdf: links.pdfs,
      notebook: "https://github.com/neonwatty/machine-learning-refined/tree/main/notes/2_Zero_order_methods",
      exercise: "https://github.com/neonwatty/machine-learning-refined/tree/main/exercises/chapter_2",
      slides: links.slides
    }
  },
  {
    part: "Part I Mathematical Optimization",
    number: "3",
    title: "First-Order Optimization Techniques",
    description: "Gradient-based methods, line search, momentum, and adaptive algorithms.",
    tags: ["learner", "instructor"],
    resources: {
      pdf: links.pdfs,
      notebook: "https://github.com/neonwatty/machine-learning-refined/blob/main/notes/3_First_order_methods/3_5_Descent.ipynb",
      exercise: "https://github.com/neonwatty/machine-learning-refined/blob/main/exercises/chapter_3/chapter_3_exercises.ipynb",
      slides: links.slides
    }
  },
  {
    part: "Part I Mathematical Optimization",
    number: "4",
    title: "Second-Order Optimization Techniques",
    description: "Newton methods, quasi-Newton updates, trust regions, and curvature exploitation.",
    tags: ["learner", "instructor"],
    resources: {
      pdf: links.pdfs,
      notebook: "https://github.com/neonwatty/machine-learning-refined/tree/main/notes/4_Second_order_methods",
      exercise: "https://github.com/neonwatty/machine-learning-refined/tree/main/exercises/chapter_4",
      slides: links.slides
    }
  },
  {
    part: "Part II Linear Learning",
    number: "5",
    title: "Linear Regression",
    description: "Least squares, regularization, and statistical foundations of linear regression.",
    tags: ["learner", "instructor"],
    resources: {
      pdf: links.pdfs,
      notebook: "https://github.com/neonwatty/machine-learning-refined/tree/main/notes/5_Linear_regression",
      exercise: "https://github.com/neonwatty/machine-learning-refined/tree/main/exercises/chapter_5",
      slides: links.slides
    }
  },
  {
    part: "Part II Linear Learning",
    number: "6",
    title: "Two-Class Classification",
    description: "Logistic regression, decision boundaries, and probabilistic classification.",
    tags: ["learner", "instructor"],
    resources: {
      pdf: links.pdfs,
      notebook: "https://github.com/neonwatty/machine-learning-refined/blob/main/notes/6_Linear_twoclass_classification/6_2_Cross_entropy.ipynb",
      exercise: "https://github.com/neonwatty/machine-learning-refined/blob/main/exercises/chapter_6/chapter_6_exercises.ipynb",
      slides: links.slides
    }
  },
  {
    part: "Part II Linear Learning",
    number: "7",
    title: "Linear Multi-Class Classification",
    description: "One-versus-all, multiclass perceptrons, categorical encodings, and metrics.",
    tags: ["learner", "instructor"],
    resources: {
      pdf: links.pdfs,
      notebook: "https://github.com/neonwatty/machine-learning-refined/blob/main/notes/7_Linear_multiclass_classification/7_2_OvA.ipynb",
      exercise: "https://github.com/neonwatty/machine-learning-refined/blob/main/exercises/chapter_7/chapter_7_exercises.ipynb",
      slides: links.slides
    }
  },
  {
    part: "Part II Linear Learning",
    number: "8",
    title: "Linear Unsupervised Learning",
    description: "PCA, SVD, subspace methods, and structure discovery.",
    tags: ["learner", "instructor"],
    resources: {
      pdf: links.pdfs,
      notebook: "https://github.com/neonwatty/machine-learning-refined/blob/main/notes/8_Linear_unsupervised_learning/8_5_Kmeans.ipynb",
      exercise: "https://github.com/neonwatty/machine-learning-refined/blob/main/exercises/chapter_8/chapter_8_exercises.ipynb",
      slides: links.slides
    }
  },
  {
    part: "Part II Linear Learning",
    number: "9",
    title: "Feature Engineering and Selection",
    description: "Scaling, cleaning, PCA sphereing, boosting, and regularization.",
    tags: ["learner", "instructor"],
    resources: {
      pdf: links.pdfs,
      notebook: "https://github.com/neonwatty/machine-learning-refined/blob/main/notes/9_Feature_engineer_select/9_3_Scaling.ipynb",
      exercise: "https://github.com/neonwatty/machine-learning-refined/blob/main/exercises/chapter_9/chapter_9_exercises.ipynb",
      slides: links.slides
    }
  },
  {
    part: "Part III Nonlinear Learning",
    number: "10",
    title: "Principles of Nonlinear Feature Engineering",
    description: "Basis expansions, kernels, and handcrafted nonlinear representations.",
    tags: ["learner", "instructor"],
    resources: {
      pdf: links.pdfs,
      notebook: "https://github.com/neonwatty/machine-learning-refined/tree/main/notes/10_Nonlinear_intro",
      exercise: "https://github.com/neonwatty/machine-learning-refined/tree/main/exercises/chapter_10",
      slides: links.slides
    }
  },
  {
    part: "Part III Nonlinear Learning",
    number: "11",
    title: "Principles of Feature Learning",
    description: "Representation learning, autoencoders, validation, and learned embeddings.",
    tags: ["learner", "instructor"],
    resources: {
      pdf: links.pdfs,
      notebook: "https://github.com/neonwatty/machine-learning-refined/blob/main/notes/11_Feature_learning/11_10_Kfolds.ipynb",
      exercise: "https://github.com/neonwatty/machine-learning-refined/tree/main/exercises/chapter_11",
      slides: links.slides
    }
  },
  {
    part: "Part III Nonlinear Learning",
    number: "12",
    title: "Kernel Methods",
    description: "Fixed-shape universal approximators, the kernel trick, similarity measures, and kernelized optimization.",
    tags: ["learner", "instructor"],
    resources: {
      pdf: links.pdfs,
      exercise: "https://github.com/neonwatty/machine-learning-refined/blob/main/exercises/chapter_12/chapter_12_exercises.ipynb",
      slides: links.slides
    }
  },
  {
    part: "Part III Nonlinear Learning",
    number: "13",
    title: "Fully Connected Neural Networks",
    description: "MLPs, backpropagation, initialization, regularization, and training.",
    tags: ["learner", "instructor"],
    resources: {
      pdf: links.pdfs,
      notebook: "https://github.com/neonwatty/machine-learning-refined/blob/main/notes/13_Multilayer_perceptrons/13_2_Multi_layer_perceptrons.ipynb",
      exercise: "https://github.com/neonwatty/machine-learning-refined/tree/main/exercises/chapter_13",
      slides: links.slides
    }
  },
  {
    part: "Part III Nonlinear Learning",
    number: "14",
    title: "Tree-Based Learners",
    description: "Regression trees, classification trees, gradient boosting, random forests, and validation for recursive learners.",
    tags: ["learner", "instructor"],
    resources: {
      pdf: links.pdfs,
      exercise: "https://github.com/neonwatty/machine-learning-refined/blob/main/exercises/chapter_14/chapter_14_exercises.ipynb",
      slides: links.slides
    }
  },
  {
    part: "Part IV Appendices",
    number: "C",
    title: "Linear Algebra",
    description: "Vector spaces, norms, decompositions, and matrix calculus essentials.",
    tags: ["learner"],
    resources: {
      pdf: links.pdfs,
      notebook: "https://github.com/neonwatty/machine-learning-refined/tree/main/notes/16_Linear_algebra"
    }
  }
];

const sourceEvidence = [
  ["A_3_Normalized.ipynb", "Optimization notebook", "https://github.com/neonwatty/machine-learning-refined/blob/main/notes/3_First_order_methods/A_3_Normalized.ipynb"],
  ["chapter_3_exercises.ipynb", "Exercise notebook", "https://github.com/neonwatty/machine-learning-refined/blob/main/exercises/chapter_3/chapter_3_exercises.ipynb"],
  ["chapter_12_exercises.ipynb", "Kernel methods exercise notebook", "https://github.com/neonwatty/machine-learning-refined/blob/main/exercises/chapter_12/chapter_12_exercises.ipynb"],
  ["chapter_14_exercises.ipynb", "Tree-based learners exercise notebook", "https://github.com/neonwatty/machine-learning-refined/blob/main/exercises/chapter_14/chapter_14_exercises.ipynb"],
  ["chapter_pdfs/README.md", "Dropbox PDF collection", links.pdfs],
  ["presentations/README.md", "Dropbox PPTX collection", links.slides]
];

const tracks = [
  {
    id: "essentials",
    title: "Essentials",
    subtitle: "Core ML in one semester",
    badge: "Core semester",
    image: `${ROOT}/mlr-instructor-path/reference/assets/roadmaps/essentials-roadmap.png`,
    cadence: "12 to 16 week course",
    focus: "A compact path from optimization foundations into the central supervised and unsupervised learning chapters.",
    chapters: [
      ["2", "Cost landscapes", "zero-order search", "model fitting"],
      ["3", "Gradient descent", "line search", "momentum"],
      ["5", "Linear regression", "least squares", "regularization"],
      ["6", "Two-class classification", "logistic regression", "boundaries"],
      ["7", "Multiclass classification", "one-versus-all", "metrics"],
      ["8", "Unsupervised learning", "PCA", "K-means"],
      ["9", "Feature preparation", "scaling", "selection"],
      ["11", "Model validation", "feature learning", "cross-validation"]
    ]
  },
  {
    id: "full",
    title: "Full treatment",
    subtitle: "Complete coverage",
    badge: "Complete sequence",
    image: `${ROOT}/mlr-instructor-path/reference/assets/roadmaps/full-treatment-roadmap.png`,
    cadence: "Full semester or two-term sequence",
    focus: "The book-scale route through optimization, linear learning, nonlinear features, feature learning, and neural networks.",
    chapters: [
      ["1", "Orientation", "machine learning landscape", "course framing"],
      ["2", "Zero-order optimization", "search", "evolutionary methods"],
      ["3", "First-order optimization", "gradients", "descent"],
      ["4", "Second-order optimization", "Newton methods", "curvature"],
      ["5", "Linear regression", "least squares", "statistics"],
      ["6", "Binary classification", "logistic regression", "losses"],
      ["7", "Multiclass classification", "perceptrons", "categorical models"],
      ["8", "Linear unsupervised learning", "PCA", "clustering"],
      ["9", "Feature engineering", "scaling", "regularization"],
      ["10", "Nonlinear features", "basis functions", "kernels"],
      ["11", "Feature learning", "validation", "ensembles"],
      ["12", "Kernel methods", "kernel trick", "similarity"],
      ["13", "Neural networks", "MLPs", "backpropagation"],
      ["14", "Tree-based learners", "boosting", "random forests"],
      ["C", "Linear algebra appendix", "norms", "decompositions"]
    ]
  },
  {
    id: "optimization",
    title: "Optimization focus",
    subtitle: "Math and algorithm depth",
    badge: "Math depth",
    image: `${ROOT}/mlr-instructor-path/reference/assets/roadmaps/optimization-roadmap.png`,
    cadence: "Optimization-forward module",
    focus: "The mathematical spine of the book, with learning chapters used as concrete algorithmic laboratories.",
    chapters: [
      ["2", "Optimization setup", "cost functions", "search"],
      ["3", "Gradient methods", "geometry", "step rules"],
      ["4", "Curvature methods", "Newton", "second-order models"],
      ["5", "Least-squares fitting", "linear systems", "regularization"],
      ["6", "Classification losses", "logistic loss", "boundaries"],
      ["9", "Conditioning and scaling", "normalization", "regularization"],
      ["13", "Network training", "composition", "backpropagation"],
      ["C", "Linear algebra support", "norms", "matrix calculus"]
    ]
  },
  {
    id: "deep",
    title: "Deep learning intro",
    subtitle: "Foundations to networks",
    badge: "Deep learning bridge",
    image: `${ROOT}/mlr-instructor-path/reference/assets/roadmaps/deep-learning-roadmap.png`,
    cadence: "Deep learning bridge course",
    focus: "A route from linear prediction and feature preparation into learned representations and multilayer perceptrons.",
    chapters: [
      ["3", "Gradient foundations", "descent", "line search"],
      ["5", "Linear prediction", "regression", "losses"],
      ["6", "Classification", "logistic regression", "cross-entropy"],
      ["9", "Data conditioning", "scaling", "cleaning"],
      ["10", "Nonlinear feature maps", "basis expansion", "kernels"],
      ["11", "Feature learning", "validation", "learned transforms"],
      ["13", "Fully connected networks", "layers", "backpropagation"],
      ["C", "Linear algebra support", "norms", "matrix operations"]
    ]
  }
];

const logos = [
  ["University of Michigan", "university-of-michigan.png"],
  ["University of Toronto", "university-of-toronto.png"],
  ["Texas A&M University", "texas-am.png"],
  ["Penn State", "penn-state.png"],
  ["New York University", "nyu.png"],
  ["Purdue University", "purdue.png"],
  ["Georgia Tech", "georgia-tech.png"],
  ["Arizona State University", "asu.png"],
  ["Kindai University", "kindai.png"]
];

const endorsements = [
  ["John G. Proakis", "Professor Emeritus, Northeastern University", "Highlights the book's path from basic principles to practical implementation.", "john-proakis.jpeg"],
  ["Osvaldo Simeone", "Professor, King's College London", "Points to first-principles presentation, geometric intuition, and Python exercises.", "osvaldo-simeone.jpeg"],
  ["David Duvenaud", "Associate Professor, University of Toronto", "Praises the steady build-up of tools, examples, runnable code, and detail.", "david-duvenaud.jpg"],
  ["Kimiaki Shirahama", "Professor, Doshisha University", "Emphasizes the unified optimization viewpoint and visual explanations.", "kimiaki-shirahama.png"]
];

const reviews = [
  ["Veronica Medrano", "Reviewed MLR on Amazon", "\"One of the best books on the topic\"", "https://www.amazon.com/Machine-Learning-Refined-Foundations-Applications/dp/1108480721"],
  ["Julio Perez Olvera", "Reviewed MLR on Goodreads", "\"fluid description of the complex, theoretical side\"", "https://www.goodreads.com/en/book/show/28148174-machine-learning-refined"],
  ["Estefano Palacios", "Reviewed MLR on Goodreads", "\"teaching machine learning rigorously but from first principles\"", "https://www.goodreads.com/en/book/show/28148174-machine-learning-refined"]
];

let activeWidgetTopic = "All";
let activeFeaturedWidgetTitle = widgets[0].title;
let figureQuery = "";
let chapterQuery = "";
let resourceGoal = "all";
let resourceType = "all";
let activeChapterNumber = "6";
let activeTrack = tracks[0].id;
let activeRoadmapChapter = tracks[0].chapters[0][0];
let proofFilter = "all";
let activeFigureIndex = 0;
let activeSpotlightIndex = 0;
let spotlightAutoplayId = null;
let spotlightTransitionId = null;
let spotlightPreloadId = 0;
let isSpotlightPaused = false;
let isSpotlightHeld = false;
let isSpotlightExplicitlyResumed = false;
const SPOTLIGHT_AUTOPLAY_MS = 4000;

function bySelector(selector) {
  return document.querySelector(selector);
}

function all(selector) {
  return Array.from(document.querySelectorAll(selector));
}

function setRoute(route) {
  const validRoutes = ["home", "notebooks", "resources", "instructor", "reviews"];
  const safeRoute = validRoutes.includes(route) ? route : "home";
  all("[data-view]").forEach((view) => {
    view.hidden = view.dataset.view !== safeRoute;
  });
  all("[data-route]").forEach((link) => {
    link.classList.toggle("is-active", link.dataset.route === safeRoute);
  });
  if (location.hash.slice(1) !== safeRoute) {
    history.replaceState(null, "", `#${safeRoute}`);
  }
}

function matchesQuery(item, query) {
  if (!query) return true;
  const haystack = JSON.stringify(item).toLowerCase();
  return haystack.includes(query.toLowerCase());
}

function chapterLabel(number) {
  return number === "C" ? "Appendix C" : `Ch. ${number}`;
}

function itemChapterNumber(item) {
  if (!item?.chapter) return "";
  return item.chapter.replace("Ch. ", "").replace("Appendix ", "");
}

function chapterDisplayName(number) {
  return number === "C" ? "Appendix C" : `Chapter ${number}`;
}

function slugify(value) {
  return value.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function relatedFigures(number) {
  return staticVisuals
    .map((visual, index) => ({ visual, index }))
    .filter(({ visual }) => visual.chapter === chapterLabel(number));
}

function relatedWidgets(number) {
  return widgets
    .map((widget, index) => ({ widget, index }))
    .filter(({ widget }) => itemChapterNumber(widget) === number);
}

function selectedWidget() {
  const widget = widgets.find((item) => item.title === activeFeaturedWidgetTitle) || widgets[0];
  activeFeaturedWidgetTitle = widget.title;
  return widget;
}

function roadmapMatches(number) {
  return tracks.filter((track) => track.chapters.some(([chapterNumber]) => chapterNumber === number));
}

function primaryChapterHref(chapter) {
  return chapter.resources.notebook || chapter.resources.exercise || chapter.resources.pdf || links.pdfs;
}

function primaryChapterActionLabel(chapter) {
  if (chapter.resources.notebook) return "Open notes";
  if (chapter.resources.exercise) return "Open exercises";
  if (chapter.resources.pdf) return "Open PDF";
  return "Open resource";
}

function chapterHasResourceType(chapter, type) {
  if (type === "all") return true;
  if (type === "figures") return relatedFigures(chapter.number).length > 0;
  if (type === "notebooks") return Boolean(chapter.resources.notebook || relatedWidgets(chapter.number).length);
  if (type === "exercises") return Boolean(chapter.resources.exercise);
  if (type === "slides") return Boolean(chapter.resources.slides);
  return true;
}

function resourceBadge(label, isAvailable) {
  return `<span class="${isAvailable ? "" : "unavailable"}">${label}</span>`;
}

function spotlightFigures() {
  return spotlightFigureTitles
    .map((title) => staticVisuals.find((visual) => visual.title === title))
    .filter(Boolean)
    .map((visual) => ({ visual, index: staticVisuals.indexOf(visual) }));
}

function advanceSpotlight(direction = 1) {
  const total = spotlightFigures().length;
  if (!total) return;
  activeSpotlightIndex = (activeSpotlightIndex + total + direction) % total;
  renderFigureSpotlight();
}

function restartSpotlightAutoplay() {
  if (spotlightAutoplayId) window.clearInterval(spotlightAutoplayId);
  spotlightAutoplayId = window.setInterval(() => {
    if (isSpotlightPaused || (!isSpotlightExplicitlyResumed && isSpotlightHeld) || document.hidden || document.body.classList.contains("has-popover")) return;
    advanceSpotlight(1);
  }, SPOTLIGHT_AUTOPLAY_MS);
}

function pauseSpotlightAfterManualAction() {
  isSpotlightPaused = true;
  isSpotlightExplicitlyResumed = false;
  renderFigureSpotlight();
  restartSpotlightAutoplay();
}

function resetSpotlightTransition(stage, image, incoming) {
  stage.classList.add("is-resetting");
  image.src = incoming.src;
  image.alt = incoming.dataset.nextAlt || image.alt;
  stage.classList.remove("is-crossfading");
  incoming.removeAttribute("src");
  incoming.dataset.nextAlt = "";
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      stage.classList.remove("is-resetting");
    });
  });
}

function replaySpotlightTransition() {
  const stage = bySelector("[data-spotlight-stage]");
  const image = bySelector("[data-spotlight-image]");
  const incoming = bySelector("[data-spotlight-image-next]");
  if (!stage || !image || !incoming) return;
  stage.classList.remove("is-crossfading");
  void stage.offsetWidth;
  stage.classList.add("is-crossfading");

  if (spotlightTransitionId) window.clearTimeout(spotlightTransitionId);
  spotlightTransitionId = window.setTimeout(() => {
    resetSpotlightTransition(stage, image, incoming);
  }, 560);
}

function stageSpotlightImage(visual, image, incoming) {
  const preloadId = ++spotlightPreloadId;
  const preload = new Image();
  let isSettled = false;
  const completePreload = () => {
    if (isSettled) return;
    isSettled = true;
    if (preloadId !== spotlightPreloadId) return;
    incoming.src = visual.image;
    incoming.dataset.nextAlt = visual.alt;
    replaySpotlightTransition();
  };
  preload.onload = completePreload;
  preload.onerror = () => {
    if (isSettled) return;
    isSettled = true;
    if (preloadId !== spotlightPreloadId) return;
    image.src = visual.image;
    image.alt = visual.alt;
    incoming.removeAttribute("src");
    incoming.dataset.nextAlt = "";
  };
  preload.src = visual.image;
  if (preload.decode) {
    preload.decode().then(completePreload).catch(() => {
      if (preload.complete) completePreload();
    });
  }
}

function renderSpotlightShell(figures) {
  const container = bySelector("[data-figure-spotlight]");
  if (!container || bySelector("[data-spotlight-stage]")) return;
  container.innerHTML = `
    <button class="spotlight-stage" type="button" data-spotlight-stage>
      <img class="spotlight-image-current" data-spotlight-image alt="">
      <img class="spotlight-image-next" data-spotlight-image-next alt="" aria-hidden="true">
    </button>
    <div class="spotlight-copy" data-spotlight-copy>
      <p class="section-label" data-spotlight-meta></p>
      <h3 data-spotlight-title></h3>
      <p data-spotlight-description></p>
      <div class="spotlight-controls">
        <button type="button" data-spotlight-prev>Previous</button>
        <button type="button" data-spotlight-next>Next</button>
        <button type="button" data-spotlight-toggle>Pause</button>
      </div>
      <div class="chip-row">
        <button type="button" data-route-button="resources" data-spotlight-resource>Chapter resources</button>
        <button type="button" data-spotlight-inspect>Inspect image</button>
      </div>
      <div class="spotlight-thumbs" aria-label="Choose spotlight figure">
        ${figures.map(({ visual: thumb }, position) => `
          <button type="button" data-spotlight-select="${position}" aria-label="Show ${thumb.title}, ${chapterLabel(itemChapterNumber(thumb))}">
            <img src="${thumb.image}" alt="">
            <span>${chapterLabel(itemChapterNumber(thumb))}</span>
          </button>
        `).join("")}
      </div>
    </div>
  `;
}

function renderFigureSpotlight(options = {}) {
  const figures = spotlightFigures();
  const current = figures[activeSpotlightIndex] || figures[0];
  if (!current) return;
  const { visual, index } = current;
  const chapterNumber = itemChapterNumber(visual);
  renderSpotlightShell(figures);

  const stage = bySelector("[data-spotlight-stage]");
  const image = bySelector("[data-spotlight-image]");
  const incoming = bySelector("[data-spotlight-image-next]");
  const meta = bySelector("[data-spotlight-meta]");
  const title = bySelector("[data-spotlight-title]");
  const description = bySelector("[data-spotlight-description]");
  const resource = bySelector("[data-spotlight-resource]");
  const inspect = bySelector("[data-spotlight-inspect]");
  const toggle = bySelector("[data-spotlight-toggle]");

  if (stage) {
    stage.dataset.imagePopoverOpen = String(index);
    stage.setAttribute("aria-label", `Inspect ${visual.title}`);
  }
  if (image && incoming) {
    const currentSrc = image.getAttribute("src");
    const isSameImage = currentSrc === visual.image || image.src.endsWith(visual.image);
    if (options.animate === false || !currentSrc || isSameImage) {
      spotlightPreloadId += 1;
      if (spotlightTransitionId) window.clearTimeout(spotlightTransitionId);
      stage?.classList.remove("is-crossfading", "is-resetting");
      image.src = visual.image;
      image.alt = visual.alt;
      incoming.removeAttribute("src");
      incoming.dataset.nextAlt = "";
    } else {
      stageSpotlightImage(visual, image, incoming);
    }
  } else if (image) {
    image.src = visual.image;
    image.alt = visual.alt;
  }
  if (meta) meta.textContent = `${visual.chapter} / ${visual.topic}`;
  if (title) title.textContent = visual.title;
  if (description) description.textContent = visual.description;
  if (resource) resource.dataset.chapterJump = chapterNumber;
  if (inspect) inspect.dataset.imagePopoverOpen = String(index);
  if (toggle) {
    toggle.textContent = isSpotlightPaused ? "Resume" : "Pause";
    toggle.setAttribute("aria-pressed", isSpotlightPaused ? "true" : "false");
  }

  all("[data-spotlight-select]").forEach((button) => {
    const isSelected = Number(button.dataset.spotlightSelect) === activeSpotlightIndex;
    button.classList.toggle("is-selected", isSelected);
    button.setAttribute("aria-current", isSelected ? "true" : "false");
    button.setAttribute("aria-pressed", isSelected ? "true" : "false");
  });

}

function renderFeaturedWidget() {
  const widget = selectedWidget();
  const chapterNumber = itemChapterNumber(widget);
  bySelector("[data-featured-widget]").innerHTML = `
    <div>
      <p class="section-label">Featured workbench</p>
      <h2>${widget.title}</h2>
      <p>${widget.description}</p>
      <ol class="concept-steps" aria-label="${widget.title} concept path">
        <li><strong>Intuition</strong><span>Read the visual before the formula.</span></li>
        <li><strong>Geometry</strong><span>Watch the shape, boundary, or path change.</span></li>
        <li><strong>Update rule</strong><span>Connect motion back to the chapter derivation.</span></li>
        <li><strong>Run it</strong><span>Open the source notebook or Colab path.</span></li>
      </ol>
      <div class="meta-row">
        <span><b>${widget.chapter}</b> source chapter</span>
        <span><b>${widget.topic}</b> topic</span>
        <span><b>Live</b> visual reference</span>
      </div>
      <div class="action-row">
        <button class="button" type="button" data-route-button="resources" data-chapter-jump="${chapterNumber}">Chapter resources</button>
        <a class="button" href="${widget.notebook}">Source notebook</a>
        <a class="button primary" href="${widget.colab}">Open in Colab</a>
      </div>
    </div>
    <img src="${widget.image}" alt="${widget.alt}">
  `;
}

function renderWidgetFilters() {
  const topics = ["All", ...new Set(widgets.map((item) => item.topic))];
  const markup = topics.map((topic) => `
    <button class="${topic === activeWidgetTopic ? "is-selected" : ""}" type="button" data-widget-topic="${topic}">${topic} <span>${topic === "All" ? widgets.length : widgets.filter((widget) => widget.topic === topic).length}</span></button>
  `).join("");
  all("[data-widget-filters]").forEach((container) => {
    container.innerHTML = markup;
  });
}

function renderWidgets() {
  const filtered = widgets;
  const resultNode = bySelector("[data-widget-results]");
  if (resultNode) resultNode.textContent = `${filtered.length} ${filtered.length === 1 ? "notebook" : "notebooks"} shown.`;
  bySelector("[data-widget-grid]").innerHTML = filtered.map((widget) => {
    const index = widgets.indexOf(widget);
    const chapterNumber = itemChapterNumber(widget);
    return `
    <article class="resource-card ${widget.title === activeFeaturedWidgetTitle ? "is-selected" : ""}" data-widget-index="${index}" tabindex="0">
      <img src="${widget.image}" alt="${widget.alt}">
      <p class="section-label">${widget.topic}</p>
      <h3>${widget.title}</h3>
      <p>${widget.description}</p>
      <div class="chip-row">
        <button type="button" data-route-button="resources" data-chapter-jump="${chapterNumber}">Chapter resources</button>
        <a href="${widget.notebook}">Source notebook</a>
        <a href="${widget.colab}">Open in Colab</a>
      </div>
    </article>
  `;
  }).join("") || `<p class="empty-state">No widgets match this search.</p>`;
}

function renderFigureInspector() {
  const visual = staticVisuals[activeFigureIndex] || staticVisuals[0];
  const relatedWidget = relatedWidgets(itemChapterNumber(visual))[0]?.widget;
  bySelector("[data-figure-inspector]").innerHTML = `
    <div class="figure-inspector-image">
      <img src="${visual.image}" alt="${visual.alt}">
    </div>
    <div class="figure-inspector-copy">
      <p class="section-label">${visual.chapter} / ${visual.topic}</p>
      <h3>${visual.title}</h3>
      <p>${visual.description}</p>
      <div class="chip-row">
        <button type="button" data-image-popover-open="${activeFigureIndex}">Inspect image</button>
        <a href="${visual.href}">Source file</a>
        <a href="${visual.noteHref}">Chapter notes</a>
        ${relatedWidget ? `<button type="button" data-route-button="notebooks" data-topic-jump="${relatedWidget.topic}">Related notebook</button>` : ""}
        <button type="button" data-route-button="resources" data-chapter-jump="${itemChapterNumber(visual)}">Chapter resources</button>
      </div>
    </div>
  `;
}

function openImagePopover(index) {
  const visual = staticVisuals[index] || staticVisuals[activeFigureIndex] || staticVisuals[0];
  activeFigureIndex = staticVisuals.indexOf(visual);
  bySelector("[data-image-popover-content]").innerHTML = `
    <div class="image-popover-image">
      <img src="${visual.image}" alt="${visual.alt}">
    </div>
    <div class="image-popover-copy">
      <p class="section-label">${visual.chapter} / ${visual.topic}</p>
      <h2>${visual.title}</h2>
      <p>${visual.description}</p>
      <div class="chip-row">
        <a href="${visual.href}">Source file</a>
        <a href="${visual.noteHref}">Chapter notes</a>
        <button type="button" data-route-button="resources" data-chapter-jump="${itemChapterNumber(visual)}">Chapter resources</button>
      </div>
    </div>
  `;
  bySelector("[data-image-popover]").hidden = false;
  document.body.classList.add("has-popover");
}

function closeImagePopover() {
  bySelector("[data-image-popover]").hidden = true;
  document.body.classList.remove("has-popover");
}

function renderStaticAtlas() {
  const filtered = staticVisuals.filter((visual) => {
    return matchesQuery(visual, figureQuery);
  });
  const groups = filtered.reduce((memo, visual) => {
    memo[visual.chapter] = memo[visual.chapter] || [];
    memo[visual.chapter].push(visual);
    return memo;
  }, {});
  bySelector("[data-static-atlas]").innerHTML = Object.values(groups).map((visuals) => {
    const [firstVisual] = visuals;
    return `
      <section class="chapter-figure-group">
        <div class="chapter-figure-heading">
          <div>
            <p class="section-label">${firstVisual.chapter}</p>
            <h3>${firstVisual.chapterTitle}</h3>
          </div>
          <a href="${firstVisual.noteHref}">Open chapter notes</a>
        </div>
        <div class="chapter-figure-grid">
          ${visuals.map((visual) => {
            const index = staticVisuals.indexOf(visual);
            return `
            <article class="static-visual-card ${index === activeFigureIndex ? "is-selected" : ""}" data-figure-index="${index}" tabindex="0">
              <div class="figure-image-frame"><img src="${visual.image}" alt="${visual.alt}"></div>
              <div class="static-visual-content">
                <p class="section-label">${visual.topic}</p>
                <h3>${visual.title}</h3>
                <p>${visual.description}</p>
                <div class="figure-link-row">
                  <button type="button" data-image-popover-open="${index}">Inspect image</button>
                  <a href="${visual.noteHref}">Chapter notes</a>
                  <button type="button" data-route-button="resources" data-chapter-jump="${itemChapterNumber(visual)}">Chapter resources</button>
                </div>
              </div>
            </article>
          `;
          }).join("")}
        </div>
      </section>
    `;
  }).join("") || `<p class="empty-state">No static figures match this search.</p>`;
  renderFigureCoverage(filtered);
}

function renderFigureCoverage(figures = staticVisuals) {
  const container = bySelector("[data-figure-coverage]");
  if (!container) return;
  const counts = chapters.map((chapter) => {
    const count = figures.filter((visual) => visual.chapter === chapterLabel(chapter.number)).length;
    return { chapter, count };
  });
  container.innerHTML = counts.map(({ chapter, count }) => `
    <button class="${chapter.number === activeChapterNumber ? "is-selected" : ""}" type="button" data-route-button="resources" data-chapter-jump="${chapter.number}">
      <strong>${chapterDisplayName(chapter.number)}</strong>
      <span>${count ? `${count} figure${count === 1 ? "" : "s"}` : "No curated figure yet"}</span>
    </button>
  `).join("");
}

function renderSourceLists() {
  const widget = selectedWidget();
  const chapterNumber = itemChapterNumber(widget);
  const chapter = chapterByNumber(chapterNumber);
  const bundle = [
    ["Source notebook", widget.notebook, widget.notebook.split("/").pop()],
    ["Open in Colab", widget.colab, "Runnable notebook path"],
    ["Chapter resources", `#resources`, `${chapterDisplayName(chapterNumber)}: ${chapter?.title || widget.topic}`],
    ["Chapter PDFs", links.pdfs, "Canonical PDF collection"]
  ];
  bySelector("[data-source-list]").innerHTML = bundle.map(([label, href, detail]) => {
    const routeAttrs = label === "Chapter resources" ? ` data-route-button="resources" data-chapter-jump="${chapterNumber}"` : "";
    const tag = label === "Chapter resources" ? "button" : "a";
    const hrefAttr = tag === "a" ? ` href="${href}"` : "";
    return `
      <${tag} class="source-link"${hrefAttr}${routeAttrs}>
        <strong>${label}</strong>
        <span>${detail}</span>
      </${tag}>
    `;
  }).join("");
  bySelector("[data-resource-evidence]").innerHTML = sourceEvidence.map(([title, label, href]) => `
    <a class="source-link" href="${href}">
      <strong>${title}</strong>
      <span>${label}</span>
    </a>
  `).join("");
}

function renderChapters() {
  const filtered = chapters.filter((chapter) => {
    const goalMatch = resourceGoal === "all" || chapter.tags.includes(resourceGoal);
    const typeMatch = chapterHasResourceType(chapter, resourceType);
    return goalMatch && typeMatch && matchesQuery(chapter, chapterQuery);
  });
  if (!filtered.length) {
    bySelector("[data-chapter-hub]").innerHTML = `<p class="empty-state">No chapter package matches this search.</p>`;
    bySelector("[data-chapter-list]").innerHTML = `<p class="empty-state">No chapters match this search.</p>`;
    return;
  }
  if (filtered.length && !filtered.some((chapter) => chapter.number === activeChapterNumber)) {
    activeChapterNumber = filtered[0].number;
  }
  renderChapterHub(filtered[0]);
  let currentPart = "";
  bySelector("[data-chapter-list]").innerHTML = filtered.map((chapter) => {
    const partHeader = chapter.part !== currentPart ? `<h2 class="part-title">${chapter.part}</h2>` : "";
    currentPart = chapter.part;
    const isSelected = chapter.number === activeChapterNumber;
    return `
      ${partHeader}
      <article class="chapter-row ${isSelected ? "is-selected" : ""}" data-chapter-select="${chapter.number}" tabindex="0">
        <div class="chapter-number"><span>${chapter.number === "C" ? "Appendix" : "Chapter"}</span>${chapter.number}</div>
        <div>
          <h3>${chapter.title}</h3>
          <p>${chapter.description}</p>
          <div class="resource-badges" aria-label="Available resources">
            ${resourceBadge("Figures", relatedFigures(chapter.number).length)}
            ${resourceBadge("Notebooks", chapter.resources.notebook || relatedWidgets(chapter.number).length)}
            ${resourceBadge("Exercises", chapter.resources.exercise)}
            ${resourceBadge("Slides", chapter.resources.slides)}
          </div>
        </div>
        <div class="chapter-row-actions">
          <a class="button primary" href="${primaryChapterHref(chapter)}">${primaryChapterActionLabel(chapter)}</a>
          <button class="button" type="button" data-chapter-select="${chapter.number}">${isSelected ? "Viewing resources" : "Chapter resources"}</button>
          ${isSelected ? `<div class="chip-row compact-links">
            ${resourceLink("PDF", chapter.resources.pdf)}
            ${resourceLink("Notes", chapter.resources.notebook)}
            ${resourceLink("Exercises", chapter.resources.exercise)}
            ${resourceLink("Slides", chapter.resources.slides)}
          </div>` : ""}
        </div>
      </article>
    `;
  }).join("") || `<p class="empty-state">No chapters match this search.</p>`;
  renderMiniWidgets();
}

function renderChapterHub(fallbackChapter) {
  const chapter = chapterByNumber(activeChapterNumber) || fallbackChapter;
  if (!chapter) {
    bySelector("[data-chapter-hub]").innerHTML = `<p class="empty-state">No chapter package matches this search.</p>`;
    return;
  }
  const figures = relatedFigures(chapter.number);
  const chapterWidgets = relatedWidgets(chapter.number);
  const roadmaps = roadmapMatches(chapter.number);
  const heroFigure = figures[0];
  const heroWidget = chapterWidgets[0];
  bySelector("[data-chapter-hub]").innerHTML = `
    <div class="chapter-hub-main">
      <p class="section-label">Selected chapter package</p>
      <h2>${chapterDisplayName(chapter.number)}: ${chapter.title}</h2>
      <p>${chapter.description}</p>
      <div class="chapter-start-row">
        <a class="button primary" href="${primaryChapterHref(chapter)}">${primaryChapterActionLabel(chapter)}</a>
        ${resourceLink("Learn: PDF", chapter.resources.pdf)}
        ${resourceLink("Learn: Notes", chapter.resources.notebook)}
        ${resourceLink("Practice: Exercises", chapter.resources.exercise)}
        ${resourceLink("Teach: Slides", chapter.resources.slides)}
      </div>
      <details class="verified-source-disclosure">
        <summary>Verified source paths</summary>
        <p>Chapter resources resolve to the public book repository, notes assets, Dropbox PDF/PPTX collections, or Colab notebook paths.</p>
      </details>
    </div>
    <div class="chapter-feature-preview">
      ${heroFigure ? `
        <button type="button" data-image-popover-open="${heroFigure.index}">
          <img src="${heroFigure.visual.image}" alt="${heroFigure.visual.alt}">
          <span><strong>${heroFigure.visual.title}</strong><small>Book figure</small></span>
        </button>
      ` : heroWidget ? `
        <button type="button" data-route-button="notebooks" data-widget-jump="${heroWidget.index}" data-topic-jump="${heroWidget.widget.topic}">
          <img src="${heroWidget.widget.image}" alt="${heroWidget.widget.alt}">
          <span><strong>${heroWidget.widget.title}</strong><small>Notebook animation</small></span>
        </button>
      ` : `<p>No visual preview curated yet.</p>`}
      </div>
    <div class="chapter-hub-assets">
      <section>
        <h3>Book figures</h3>
        <div class="hub-thumb-row">
          ${figures.slice(0, 3).map(({ visual, index }) => `
            <button type="button" data-image-popover-open="${index}">
              <img src="${visual.image}" alt="">
              <span>${visual.title}</span>
            </button>
          `).join("") || `<p>No curated static figure yet.</p>`}
        </div>
      </section>
      <section>
        <h3>Notebook previews</h3>
        <div class="hub-thumb-row">
          ${chapterWidgets.slice(0, 3).map(({ widget, index }) => `
            <button type="button" data-route-button="notebooks" data-widget-jump="${index}" data-topic-jump="${widget.topic}">
              <img src="${widget.image}" alt="">
              <span>${widget.title}</span>
            </button>
          `).join("") || `<p>No curated widget yet.</p>`}
        </div>
      </section>
      <section>
        <h3>Instructor roadmaps</h3>
        <div class="hub-roadmap-row">
          ${roadmaps.map((track) => `<button type="button" data-route-button="instructor" data-track-jump="${track.id}">${track.title}</button>`).join("") || `<span>Not used in current roadmap set.</span>`}
        </div>
      </section>
    </div>
  `;
}

function resourceLink(label, href) {
  return href ? `<a href="${href}">${label}</a>` : `<span class="unavailable">${label}</span>`;
}

function chapterByNumber(number) {
  return chapters.find((chapter) => chapter.number === number);
}

function roadmapResourceLinks(chapter) {
  const resources = chapter?.resources || {};
  return `
    ${resourceLink("PDF", resources.pdf)}
    ${resourceLink("Notes", resources.notebook)}
    ${resourceLink("Exercises", resources.exercise)}
    ${resourceLink("Slides", resources.slides)}
  `;
}

function renderMiniWidgets() {
  const container = bySelector("[data-mini-widgets]");
  if (!container) return;
  const chapterWidgets = relatedWidgets(activeChapterNumber);
  const list = chapterWidgets.length ? chapterWidgets : widgets.slice(0, 5).map((widget, index) => ({ widget, index }));
  container.innerHTML = list.slice(0, 5).map(({ widget, index }) => `
    <button type="button" data-route-button="notebooks" data-widget-jump="${index}" data-topic-jump="${widget.topic}">
      <img src="${widget.image}" alt="">
      <span>${widget.title}</span>
    </button>
  `).join("");
}

function renderTracks() {
  bySelector("[data-track-picker]").innerHTML = `
    <h2>Choose a roadmap</h2>
    ${tracks.map((track) => `
      <button class="track-button ${track.id === activeTrack ? "is-selected" : ""}" type="button" data-track="${track.id}">
        <img src="${track.image}" alt="${track.title} roadmap preview">
        <span><strong>${track.title}</strong><small>${track.badge}</small><small>${track.subtitle}</small></span>
      </button>
    `).join("")}
  `;
  const track = tracks.find((item) => item.id === activeTrack) || tracks[0];
  if (!track.chapters.some(([number]) => number === activeRoadmapChapter)) {
    activeRoadmapChapter = track.chapters[0][0];
  }
  bySelector("[data-track-detail]").innerHTML = `
    <div class="timeline-head">
      <div>
        <p class="section-label">Interactive roadmap</p>
        <h2>${track.title} <span>${track.subtitle}</span></h2>
        <p>${track.focus}</p>
      </div>
      <strong>${track.badge}<span>${track.cadence}</span></strong>
    </div>
    <div class="roadmap-board" data-roadmap-board>
      ${track.chapters.map(([number, label, topicOne, topicTwo], index) => {
        const chapter = chapterByNumber(number);
        const title = chapter ? chapter.title : label;
        const isOpen = number === activeRoadmapChapter;
        return `
          <article class="roadmap-node ${isOpen ? "is-open" : ""}" data-roadmap-chapter="${number}" tabindex="0">
            <div class="roadmap-marker">
              <span>${index + 1}</span>
              <strong>Chapter ${number}</strong>
            </div>
            <div class="roadmap-copy">
              <p class="section-label">Chapter ${number}</p>
              <h3>${label}</h3>
              <p>${title}</p>
              <div class="roadmap-topics">
                <span>${topicOne}</span>
                <span>${topicTwo}</span>
              </div>
              <button class="button roadmap-toggle" type="button" data-roadmap-chapter="${number}">${isOpen ? "Hide resources" : "Show resources"}</button>
              ${isOpen ? `<div class="chip-row roadmap-links">
                ${roadmapResourceLinks(chapter)}
                <button type="button" data-route-button="resources" data-chapter-jump="${number}">Chapter resources</button>
              </div>` : ""}
            </div>
          </article>
        `;
      }).join("")}
    </div>
  `;
  bySelector("[data-track-support]").innerHTML = `
    <a href="${links.roadmapGuide}"><strong>For this path</strong><span>${track.title}: ${track.cadence}</span></a>
    <a href="${links.slides}"><strong>Teaching deck collection</strong><span>PPTX chapters for the selected roadmap</span></a>
    <a href="${links.exercises}"><strong>Exercise collection</strong><span>Practice material to pair with chapters</span></a>
  `;
}

function renderProof() {
  bySelector("[data-proof-section='logos']").hidden = proofFilter !== "all" && proofFilter !== "logos";
  bySelector("[data-proof-section='endorsements']").hidden = proofFilter !== "all" && proofFilter !== "endorsements";
  bySelector("[data-proof-section='reviews']").hidden = proofFilter !== "all" && proofFilter !== "reviews";
  all("[data-proof-title]").forEach((title) => {
    title.hidden = proofFilter !== "all" && title.dataset.proofTitle !== proofFilter;
  });
  all("[data-proof]").forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.proof === proofFilter);
  });
}

function renderProofContent() {
  bySelector("[data-proof-section='logos']").innerHTML = logos.map(([name, file]) => `
    <figure><img class="proof-logo proof-logo-${slugify(name)}" src="${ROOT}/mlr-reviews-adoption/reference/assets/logos/${file}" alt="${name}"><figcaption>${name}</figcaption></figure>
  `).join("");
  bySelector("[data-proof-section='endorsements']").innerHTML = endorsements.map(([name, role, copy, file]) => `
    <article class="endorsement-card">
      <img src="${ROOT}/mlr-reviews-adoption/reference/assets/people/${file}" alt="${name}">
      <h3>${name}</h3>
      <p class="role">${role}</p>
      <p>${copy}</p>
    </article>
  `).join("");
  bySelector("[data-proof-section='reviews']").innerHTML = reviews.map(([name, source, copy, href]) => `
    <article class="review-row">
      <div aria-hidden="true">${name[0]}</div>
      <span><strong>${name}</strong><em>${source}</em><p>${copy}</p><a href="${href}">${source.includes("Amazon") ? "Open Amazon listing" : "Open Goodreads reviews"}</a></span>
    </article>
  `).join("");
}

function bindEvents() {
  window.addEventListener("hashchange", () => setRoute(location.hash.slice(1)));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !bySelector("[data-image-popover]").hidden) {
      closeImagePopover();
    }
  });
  document.addEventListener("click", (event) => {
    const popoverOpen = event.target.closest("[data-image-popover-open]");
    if (popoverOpen) {
      openImagePopover(Number(popoverOpen.dataset.imagePopoverOpen));
      return;
    }

    if (event.target.closest("[data-image-popover-close]")) {
      closeImagePopover();
      return;
    }

    const routeButton = event.target.closest("[data-route-button]");
    if (routeButton) {
      const topic = routeButton.dataset.topicJump;
      const figureJump = routeButton.dataset.figureJump;
      const widgetJump = routeButton.dataset.widgetJump;
      const chapterJump = routeButton.dataset.chapterJump;
      const trackJump = routeButton.dataset.trackJump;
      if (topic) activeWidgetTopic = topic;
      if (figureJump) activeFigureIndex = Number(figureJump);
      if (widgetJump) activeFeaturedWidgetTitle = widgets[Number(widgetJump)]?.title || activeFeaturedWidgetTitle;
      if (chapterJump) activeChapterNumber = chapterJump;
      if (trackJump) {
        activeTrack = trackJump;
        activeRoadmapChapter = (tracks.find((track) => track.id === activeTrack) || tracks[0]).chapters[0][0];
      }
      if (!bySelector("[data-image-popover]").hidden) closeImagePopover();
      setRoute(routeButton.dataset.routeButton);
      renderWidgetFilters();
      renderFeaturedWidget();
      renderSourceLists();
      renderFigureInspector();
      renderStaticAtlas();
      renderWidgets();
      renderChapters();
      renderTracks();
    }

    const scrollTarget = event.target.closest("[data-scroll-target]");
    if (scrollTarget) {
      bySelector(`#${scrollTarget.dataset.scrollTarget}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    const spotlightSelect = event.target.closest("[data-spotlight-select]");
    if (spotlightSelect) {
      activeSpotlightIndex = Number(spotlightSelect.dataset.spotlightSelect);
      pauseSpotlightAfterManualAction();
    }

    const spotlightPrev = event.target.closest("[data-spotlight-prev]");
    if (spotlightPrev) {
      advanceSpotlight(-1);
      pauseSpotlightAfterManualAction();
    }

    const spotlightNext = event.target.closest("[data-spotlight-next]");
    if (spotlightNext) {
      advanceSpotlight(1);
      pauseSpotlightAfterManualAction();
    }

    const spotlightToggle = event.target.closest("[data-spotlight-toggle]");
    if (spotlightToggle) {
      isSpotlightPaused = !isSpotlightPaused;
      isSpotlightExplicitlyResumed = !isSpotlightPaused;
      renderFigureSpotlight({ animate: false });
      restartSpotlightAutoplay();
    }

    const widgetCard = event.target.closest("[data-widget-index]");
    if (widgetCard) {
      activeFeaturedWidgetTitle = widgets[Number(widgetCard.dataset.widgetIndex)]?.title || activeFeaturedWidgetTitle;
      renderFeaturedWidget();
      renderSourceLists();
      renderWidgets();
      bySelector("[data-featured-widget]").scrollIntoView({ behavior: "smooth", block: "start" });
    }

    const figureCard = event.target.closest("[data-figure-index]");
    if (figureCard) {
      activeFigureIndex = Number(figureCard.dataset.figureIndex);
      renderFigureInspector();
      renderStaticAtlas();
      bySelector("[data-figure-inspector]").scrollIntoView({ behavior: "smooth", block: "start" });
    }

    const topicButton = event.target.closest("[data-widget-topic]");
    if (topicButton) {
      activeWidgetTopic = topicButton.dataset.widgetTopic;
      renderWidgetFilters();
      renderFeaturedWidget();
      renderSourceLists();
      renderFigureInspector();
      renderStaticAtlas();
      renderWidgets();
    }

    const goalButton = event.target.closest("[data-goal]");
    if (goalButton) {
      resourceGoal = goalButton.dataset.goal;
      all("[data-goal]").forEach((button) => button.classList.toggle("is-selected", button === goalButton));
      renderChapters();
    }

    const resourceTypeButton = event.target.closest("[data-resource-type]");
    if (resourceTypeButton) {
      resourceType = resourceTypeButton.dataset.resourceType;
      all("[data-resource-type]").forEach((button) => button.classList.toggle("is-selected", button === resourceTypeButton));
      renderChapters();
    }

    const chapterRow = event.target.closest("[data-chapter-select]");
    if (chapterRow) {
      activeChapterNumber = chapterRow.dataset.chapterSelect;
      renderChapters();
      bySelector("[data-chapter-hub]").scrollIntoView({ behavior: "smooth", block: "start" });
    }

    const trackButton = event.target.closest("[data-track]");
    if (trackButton) {
      activeTrack = trackButton.dataset.track;
      activeRoadmapChapter = (tracks.find((track) => track.id === activeTrack) || tracks[0]).chapters[0][0];
      renderTracks();
    }

    const roadmapChapter = event.target.closest("[data-roadmap-chapter]");
    if (roadmapChapter) {
      activeRoadmapChapter = roadmapChapter.dataset.roadmapChapter;
      renderTracks();
    }

    const proofButton = event.target.closest("[data-proof]");
    if (proofButton) {
      proofFilter = proofButton.dataset.proof;
      renderProof();
    }
  });

  bySelector("[data-search='figures']")?.addEventListener("input", (event) => {
    figureQuery = event.target.value;
    renderStaticAtlas();
  });

  bySelector("[data-search='chapters']")?.addEventListener("input", (event) => {
    chapterQuery = event.target.value;
    renderChapters();
  });

  const spotlight = bySelector("[data-figure-spotlight]");
  spotlight?.addEventListener("mouseenter", () => {
    isSpotlightHeld = true;
  });
  spotlight?.addEventListener("mouseleave", () => {
    isSpotlightHeld = false;
    isSpotlightExplicitlyResumed = false;
  });
  spotlight?.addEventListener("focusin", () => {
    isSpotlightHeld = true;
  });
  spotlight?.addEventListener("focusout", () => {
    isSpotlightHeld = false;
  });

}

function init() {
  renderFigureSpotlight({ animate: false });
  restartSpotlightAutoplay();
  renderWidgetFilters();
  renderFeaturedWidget();
  renderFigureInspector();
  renderStaticAtlas();
  renderWidgets();
  renderSourceLists();
  renderChapters();
  renderMiniWidgets();
  renderTracks();
  renderProofContent();
  renderProof();
  bindEvents();
  setRoute(location.hash.slice(1) || "home");
}

init();
