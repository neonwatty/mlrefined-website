import { notesAssetPath, repoPath } from "./book-links";
import type { StaticVisual } from "./book.types";

const fig = "/learning-visuals/book-figures";

function visual(
  title: string,
  topic: string,
  chapter: string,
  chapterTitle: string,
  filename: string,
  sourcePath: string,
  description: string,
): StaticVisual {
  return {
    title,
    topic,
    chapter,
    chapterTitle,
    image: `${fig}/${filename}`,
    alt: `${title} figure from Machine Learning Refined`,
    description,
    sourceHref: notesAssetPath(sourcePath),
    chapterHref: repoPath(`tree/main/notes/${sourcePath.split("/chapter_")[0].replace("notes/", "")}`),
  };
}

export const staticVisuals: StaticVisual[] = [
  visual(
    "Regression as Optimization",
    "Optimization",
    "Ch. 2",
    "Zero-Order Optimization Techniques",
    "bigpicture_regression_optimization.png",
    "notes/2_Zero_order_methods/chapter_2_images/bigpicture_regression_optimization.png",
    "Regression fitting introduced as cost minimization.",
  ),
  visual(
    "Classification as Optimization",
    "Classification",
    "Ch. 2",
    "Zero-Order Optimization Techniques",
    "bigpicture_classification_optimization.png",
    "notes/2_Zero_order_methods/chapter_2_images/bigpicture_classification_optimization.png",
    "Decision boundaries and cost geometry in one picture.",
  ),
  visual(
    "Direction and Magnitude",
    "Optimization",
    "Ch. 3",
    "First-Order Optimization Techniques",
    "direction_magnitude.png",
    "notes/3_First_order_methods/chapter_3_images/direction_magnitude.png",
    "Descent direction and step length shown on contours.",
  ),
  visual(
    "Exact vs Backtracking",
    "Optimization",
    "Ch. 3",
    "First-Order Optimization Techniques",
    "exact_vs_backtrack.png",
    "notes/3_First_order_methods/chapter_3_images/exact_vs_backtrack.png",
    "Line-search behavior shown with function geometry.",
  ),
  visual(
    "Second-Order Geometry",
    "Optimization",
    "Ch. 4",
    "Second-Order Optimization Techniques",
    "Fig_2_11.png",
    "notes/4_Second_order_methods/chapter_4_images/Fig_2_11.png",
    "Curvature and local quadratic structure for second-order methods.",
  ),
  visual("Least Squares", "Regression", "Ch. 5", "Linear Regression", "Least_Squares.png", "notes/5_Linear_regression/chapter_5_images/Least_Squares.png", "Residual geometry for ordinary least squares."),
  visual("Sigmoid Geometry", "Classification", "Ch. 6", "Two-Class Classification", "sigmoid.png", "notes/6_Linear_twoclass_classification/chapter_6_images/sigmoid.png", "The sigmoid transform as shape and decision mechanism."),
  visual("Distance to Boundary", "Classification", "Ch. 6", "Two-Class Classification", "distance_to_boundary.png", "notes/6_Linear_twoclass_classification/chapter_6_images/distance_to_boundary.png", "Signed distance and classification boundaries."),
  visual("Multiclass Histogram", "Classification", "Ch. 7", "Linear Multi-Class Classification", "multiclass_histogram.png", "notes/7_Linear_multiclass_classification/chapter_7_images/multiclass_histogram.png", "A vivid multiclass view of category structure."),
  visual("PCA Geometry", "Unsupervised", "Ch. 8", "Linear Unsupervised Learning", "pca_classic.png", "notes/8_Linear_unsupervised_learning/chapter_8_images/pca_classic.png", "Principal components as directions in feature space."),
  visual("K-Means Regions", "Unsupervised", "Ch. 8", "Linear Unsupervised Learning", "Kmeans_2.png", "notes/8_Linear_unsupervised_learning/chapter_8_images/Kmeans_2.png", "Centroids, assignments, and cluster regions."),
  visual("Feature Scaling", "Features", "Ch. 9", "Feature Engineering and Selection", "standard_normalization_data_and_contours.png", "notes/9_Feature_engineer_select/chapter_9_images/standard_normalization_data_and_contours.png", "Feature normalization tied to optimization contours."),
  visual("Shared Nonlinear Architecture", "Features", "Ch. 10", "Principles of Nonlinear Feature Engineering", "sharing_architecture_regression.png", "notes/10_Nonlinear_intro/chapter_10_images/sharing_architecture_regression.png", "Nonlinear features connected to shared model architecture."),
  visual("Feature Learning", "Features", "Ch. 11", "Principles of Feature Learning", "Figure_11_1.png", "notes/11_Feature_learning/chapter_11_images/Figure_11_1.png", "Learned nonlinear transformations and resulting structure."),
  visual("Feature Transformations", "Feature Learning", "Ch. 11", "Principles of Feature Learning", "Figure_11_17.png", "notes/11_Feature_learning/chapter_11_images/Figure_11_17.png", "Transformations that make feature learning geometric."),
  visual("Feature Learning Complexity", "Feature Learning", "Ch. 11", "Principles of Feature Learning", "Figure_11_32.png", "notes/11_Feature_learning/chapter_11_images/Figure_11_32.png", "Model complexity changing training and validation behavior."),
  visual("Validation Surface Grid", "Feature Learning", "Ch. 11", "Principles of Feature Learning", "Figure_11_35.png", "notes/11_Feature_learning/chapter_11_images/Figure_11_35.png", "Model choices changing validation behavior across examples."),
  visual("Regularized Feature Fits", "Feature Learning", "Ch. 11", "Principles of Feature Learning", "Figure_11_38.png", "notes/11_Feature_learning/chapter_11_images/Figure_11_38.png", "Regularization reshaping learned fits and costs."),
  visual("Model Families Compared", "Feature Learning", "Ch. 11", "Principles of Feature Learning", "Figure_11_48.png", "notes/11_Feature_learning/chapter_11_images/Figure_11_48.png", "Multiple model families shown together."),
  visual("Learned Decision Boundaries", "Feature Learning", "Ch. 11", "Principles of Feature Learning", "Figure_11_50.png", "notes/11_Feature_learning/chapter_11_images/Figure_11_50.png", "Learned boundaries side-by-side."),
  visual("Boundary Families", "Feature Learning", "Ch. 11", "Principles of Feature Learning", "Figure_11_51.png", "notes/11_Feature_learning/chapter_11_images/Figure_11_51.png", "Feature-learning boundary families across the same dataset."),
  visual("Feature Learning Grid", "Feature Learning", "Ch. 11", "Principles of Feature Learning", "Figure_11_55.png", "notes/11_Feature_learning/chapter_11_images/Figure_11_55.png", "A dense grid of feature-learning outcomes."),
  visual("Unfolded Network", "Networks", "Ch. 13", "Fully Connected Neural Networks", "L_layer_network_unfolded.png", "notes/13_Multilayer_perceptrons/chapter_13_images/L_layer_network_unfolded.png", "A multilayer perceptron as inspectable layer composition."),
  visual("Norm Balls", "Linear Algebra", "Appendix C", "Linear Algebra", "norm_balls.png", "notes/16_Linear_algebra/chapter_16_images/norm_balls.png", "Linear algebra geometry for optimization and regularization."),
];

export const spotlightFigureTitles = [
  "Regression as Optimization",
  "Classification as Optimization",
  "Exact vs Backtracking",
  "Least Squares",
  "PCA Geometry",
  "Feature Transformations",
  "Feature Learning Complexity",
  "Regularized Feature Fits",
  "Model Families Compared",
  "Boundary Families",
  "Multiclass Histogram",
  "Unfolded Network",
] as const;
