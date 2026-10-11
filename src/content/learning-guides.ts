/* eslint-disable max-lines -- source-backed guide copy and executable fixtures form one audited content catalog */
import { bookLinks, repoPath } from "./book-links";

export type LearningGuideResource = {
  kind: "notebook" | "companion" | "exercise" | "pdf" | "repository";
  label: string;
  description: string;
  href: string;
};

export type LearningGuide = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  directAnswer: string;
  chapterNumber: "3" | "6" | "8";
  chapterTitle: string;
  chapterSlug: string;
  image: {
    src: string;
    width: number;
    height: number;
    alt: string;
    caption: string;
  };
  equation: string;
  equationExplanation: string;
  steps: string[];
  code: string;
  walkthrough: string[];
  outputCode: string;
  expectedOutput: string;
  resultExplanation: string;
  parameterNotes: Array<{ title: string; description: string }>;
  experiment: string;
  cautions: Array<{ title: string; description: string }>;
  resources: LearningGuideResource[];
  keywords: string[];
};

const chapterPdfResource: LearningGuideResource = {
  kind: "pdf",
  label: "Chapter PDF collection",
  description: "Open the official chapter PDF index for the book.",
  href: bookLinks.pdfs,
};

const repositoryResource: LearningGuideResource = {
  kind: "repository",
  label: "Canonical GitHub repository",
  description: "Browse the complete Machine Learning Refined source collection.",
  href: bookLinks.repo,
};

export const learningGuides: LearningGuide[] = [
  {
    slug: "gradient-descent-from-scratch",
    title: "Gradient Descent from Scratch in Python",
    shortTitle: "Gradient descent from scratch",
    description:
      "Understand the gradient descent update rule, implement it with NumPy, and see how step size changes convergence.",
    directAnswer:
      "Gradient descent minimizes a differentiable objective by repeatedly moving the parameters opposite the gradient. In the example below, you will implement that update directly in NumPy and keep the full optimization path so you can inspect convergence.",
    chapterNumber: "3",
    chapterTitle: "First-Order Optimization Techniques",
    chapterSlug: "first-order-optimization-techniques",
    image: {
      src: "/learning-visuals/widgets/normalized-gradient-descent.gif",
      width: 330,
      height: 330,
      alt: "Normalized gradient descent steps moving across objective contours toward a minimum",
      caption:
        "The animation shows normalized gradient steps: direction comes from the negative gradient while every displayed step has a controlled length. The code example uses standard gradient descent, where gradient magnitude also affects the step.",
    },
    equation: "w_(k+1) = w_k - alpha * grad g(w_k)",
    equationExplanation:
      "Here w_k is the current parameter, grad g(w_k) is the local slope of the objective, and alpha is the positive step size. The minus sign makes the update move downhill.",
    steps: [
      "Choose an initial parameter value and a positive step size.",
      "Evaluate the gradient at the current parameter.",
      "Subtract the step-size-scaled gradient.",
      "Repeat until the gradient or parameter change is sufficiently small.",
    ],
    code: `import numpy as np

def objective(w):
    return (w - 3.0) ** 2

def gradient(w):
    return 2.0 * (w - 3.0)

def gradient_descent(initial_w, step_size=0.2, iterations=30):
    w = float(initial_w)
    history = [w]

    for _ in range(iterations):
        w = w - step_size * gradient(w)
        history.append(w)

    return w, np.asarray(history)

minimum, path = gradient_descent(initial_w=8.0)`,
    walkthrough: [
      "The objective has its minimum at w = 3, so the example has a result we can verify exactly.",
      "The gradient function returns the local slope; the loop contains the complete learning rule rather than calling an optimizer.",
      "Keeping history makes the optimization path available for plotting or convergence checks.",
    ],
    outputCode: `print(f"minimum = {minimum:.6f}")
print(f"objective = {objective(minimum):.2e}")
print("first steps:", np.round(path[:4], 2))`,
    expectedOutput: `minimum = 3.000001
objective = 1.22e-12
first steps: [8.   6.   4.8  4.08]`,
    resultExplanation:
      "Starting at 8, the first update is 8 - 0.2 × 10 = 6. After 30 updates the parameter is within about one millionth of the known minimum, 3. The objective is nearly zero; this verifies convergence for this quadratic, not for every objective.",
    parameterNotes: [
      {
        title: "Why step_size=0.2?",
        description:
          "For this objective, the error w - 3 is multiplied by 1 - 2 × step_size each iteration. At 0.2, that factor is 0.6, so the error shrinks without changing sign. Convergence requires 0 < step_size < 1 for this particular quadratic.",
      },
      {
        title: "Why 30 iterations?",
        description:
          "Thirty updates make the initial error of 5 shrink to 5 × 0.6^30. For an objective without a known solution, monitor the gradient norm and objective instead of treating a fixed iteration count as proof of convergence.",
      },
    ],
    experiment:
      "Run gradient_descent(initial_w=8.0, step_size=1.0, iterations=6). The path alternates between 8 and -2, so the objective never improves. Then try 0.05 and compare how many updates it takes to approach 3.",
    cautions: [
      {
        title: "A large step can overshoot",
        description:
          "If alpha is too large, successive updates can bounce across the minimum or diverge.",
      },
      {
        title: "A tiny step can stall progress",
        description:
          "A very small alpha may be stable but require far more iterations than the same objective needs with a better-scaled step.",
      },
      {
        title: "Geometry still matters",
        description:
          "Flat, poorly conditioned, or non-convex objectives can make first-order progress slow or lead to different stationary points.",
      },
    ],
    resources: [
      {
        kind: "notebook",
        label: "Gradient descent source notebook",
        description: "Read the Chapter 3 notebook that develops descent methods.",
        href: repoPath("blob/main/notes/3_First_order_methods/3_5_Descent.ipynb"),
      },
      {
        kind: "companion",
        label: "Normalized descent companion",
        description: "Open the notebook behind the normalized-step animation.",
        href: repoPath("blob/main/notes/3_First_order_methods/A_3_Normalized.ipynb"),
      },
      {
        kind: "exercise",
        label: "Chapter 3 exercises",
        description: "Practice first-order optimization with the official exercise notebook.",
        href: repoPath("blob/main/exercises/chapter_3/chapter_3_exercises.ipynb"),
      },
      chapterPdfResource,
      repositoryResource,
    ],
    keywords: [
      "gradient descent from scratch Python",
      "gradient descent NumPy",
      "gradient descent explained",
      "gradient descent Jupyter notebook",
    ],
  },
  {
    slug: "logistic-regression-from-scratch",
    title: "Logistic Regression from Scratch in Python",
    shortTitle: "Logistic regression from scratch",
    description:
      "Build binary logistic regression with NumPy from the sigmoid, cross-entropy loss, and gradient update.",
    directAnswer:
      "Binary logistic regression turns a linear score into a probability with the sigmoid function, then learns the weights by minimizing binary cross-entropy. The implementation below exposes the probability, loss gradient, and thresholded prediction instead of calling a model library.",
    chapterNumber: "6",
    chapterTitle: "Two-Class Classification",
    chapterSlug: "two-class-classification",
    image: {
      src: "/learning-visuals/widgets/logistic-regression.gif",
      width: 467,
      height: 206,
      alt: "Logistic regression decision boundary changing as a two-class model is fitted",
      caption:
        "The animation follows a linear decision boundary during fitting. It illustrates model geometry; it does not by itself establish probability calibration or test-set performance.",
    },
    equation:
      "p(y=1 | x) = 1 / (1 + exp(-w^T x));  L = -mean[y log(p) + (1-y) log(1-p)]",
    equationExplanation:
      "The linear score w^T x becomes a probability p through the sigmoid. Cross-entropy penalizes confident wrong probabilities, and its gradient supplies the weight update.",
    steps: [
      "Add a constant feature if the model needs an intercept.",
      "Compute linear scores and map them through a numerically stable sigmoid.",
      "Use the mean cross-entropy gradient X^T(p - y) / n.",
      "Update the weights, then choose a probability threshold for predictions.",
    ],
    code: `import numpy as np

def sigmoid(scores):
    scores = np.clip(scores, -500.0, 500.0)
    return 1.0 / (1.0 + np.exp(-scores))

def fit_logistic_regression(X, y, step_size=0.2, iterations=2000):
    X = np.asarray(X, dtype=float)
    y = np.asarray(y, dtype=float)
    weights = np.zeros(X.shape[1])

    for _ in range(iterations):
        probabilities = sigmoid(X @ weights)
        gradient = X.T @ (probabilities - y) / len(y)
        weights = weights - step_size * gradient

    return weights

def predict_proba(X, weights):
    return sigmoid(np.asarray(X, dtype=float) @ weights)

X = np.array([
    [1.0, -2.0], [1.0, -1.0], [1.0, -0.5],
    [1.0,  0.5], [1.0,  1.0], [1.0,  2.0],
])
y = np.array([0, 0, 0, 1, 1, 1])
weights = fit_logistic_regression(X, y)
predictions = (predict_proba(X, weights) >= 0.5).astype(int)`,
    walkthrough: [
      "The first column of X is the intercept feature; the second contains the one-dimensional measurements.",
      "Clipping scores keeps exp from overflowing while leaving ordinary score values unchanged.",
      "The training loop is the full vectorized gradient method, and the threshold is applied only after probabilities are computed.",
    ],
    outputCode: `probabilities = predict_proba(X, weights)
loss = np.mean(np.logaddexp(0, X @ weights) - y * (X @ weights))
print("predictions:", predictions)
print("probabilities:", np.round(probabilities, 3))
print(f"training loss = {loss:.4f}")`,
    expectedOutput: `predictions: [0 0 0 1 1 1]
probabilities: [0.    0.001 0.026 0.974 0.999 1.   ]
training loss = 0.0089`,
    resultExplanation:
      "The six predictions match the six training labels. Mean cross-entropy falls from about 0.6931 at zero weights to 0.0089. Displayed probabilities are rounded; 0 and 1 here do not mean exact certainty. This tiny, separable training set is a learning example, not a held-out accuracy or calibration result.",
    parameterNotes: [
      {
        title: "Step size and feature scale",
        description:
          "A step size of 0.2 works for these small feature values. For other data, standardize features using training-set statistics and monitor loss while choosing the step size. The same value is not guaranteed to work for a different scale.",
      },
      {
        title: "Iterations and the 0.5 threshold",
        description:
          "The 2,000 updates produce the result shown, but unregularized logistic regression on separable data can keep increasing weight magnitude. Use regularization and validation in a practical model. The 0.5 threshold is a separate decision rule chosen after fitting.",
      },
    ],
    experiment:
      "Change only the prediction threshold to 0.99: the point x=0.5 switches to class 0 while the learned weights stay the same. Compare 200 and 2,000 training iterations using the stable loss calculation above; lower training loss alone does not establish better generalization.",
    cautions: [
      {
        title: "Scale affects optimization",
        description:
          "Features on very different scales can make one global step size inefficient or unstable.",
      },
      {
        title: "The threshold is a decision choice",
        description:
          "Changing 0.5 changes predicted labels; it does not retrain the probability model or fix class imbalance.",
      },
      {
        title: "Probability code needs numerical care",
        description:
          "Extreme scores can overflow exp, and direct log-loss calculations must clip probabilities or use a stable equivalent.",
      },
    ],
    resources: [
      {
        kind: "notebook",
        label: "Cross-entropy source notebook",
        description: "Read the Chapter 6 notebook behind this classifier and animation.",
        href: repoPath("blob/main/notes/6_Linear_twoclass_classification/6_2_Cross_entropy.ipynb"),
      },
      {
        kind: "exercise",
        label: "Chapter 6 exercises",
        description: "Practice two-class classification with the official exercise notebook.",
        href: repoPath("blob/main/exercises/chapter_6/chapter_6_exercises.ipynb"),
      },
      chapterPdfResource,
      repositoryResource,
    ],
    keywords: [
      "logistic regression from scratch Python",
      "logistic regression NumPy",
      "binary logistic regression explained",
      "logistic regression Jupyter notebook",
    ],
  },
  {
    slug: "k-means-clustering-from-scratch",
    title: "K-Means Clustering from Scratch in Python",
    shortTitle: "K-means clustering from scratch",
    description:
      "Implement K-means clustering with NumPy by alternating nearest-centroid assignments and centroid updates.",
    directAnswer:
      "K-means partitions samples by alternating two operations: assign each sample to its nearest centroid, then replace each centroid with the mean of its assigned samples. The loop below implements both operations and stops when the centroids no longer move materially.",
    chapterNumber: "8",
    chapterTitle: "Linear Unsupervised Learning",
    chapterSlug: "linear-unsupervised-learning",
    image: {
      src: "/learning-visuals/widgets/kmeans.gif",
      width: 251,
      height: 238,
      alt: "K-means points changing cluster assignments as centroids move",
      caption:
        "The animation alternates point assignments and centroid movement. Different initial centroids can produce a different final partition.",
    },
    equation: "minimize sum_i ||x_i - mu_(assignment_i)||^2",
    equationExplanation:
      "Each sample x_i contributes its squared distance to the centroid mu of its assigned cluster. Assignment and update steps never increase this objective, but they can settle at a local minimum.",
    steps: [
      "Choose k initial centroids, using explicit or seeded initialization for reproducibility.",
      "Assign every sample to the nearest centroid by squared distance.",
      "Replace each non-empty centroid with the mean of its assigned samples.",
      "Repeat until centroid movement is below a tolerance or the iteration limit is reached.",
    ],
    code: `import numpy as np

def assign_clusters(X, centroids):
    squared_distances = ((X[:, None, :] - centroids[None, :, :]) ** 2).sum(axis=2)
    return squared_distances.argmin(axis=1)

def update_centroids(X, labels, centroids):
    updated = centroids.copy()
    for cluster in range(len(centroids)):
        members = X[labels == cluster]
        if len(members):
            updated[cluster] = members.mean(axis=0)
    return updated

def kmeans(X, initial_centroids, max_iterations=100, tolerance=1e-8):
    X = np.asarray(X, dtype=float)
    centroids = np.asarray(initial_centroids, dtype=float).copy()

    for _ in range(max_iterations):
        labels = assign_clusters(X, centroids)
        updated = update_centroids(X, labels, centroids)
        if np.linalg.norm(updated - centroids) <= tolerance:
            centroids = updated
            break
        centroids = updated

    return centroids, assign_clusters(X, centroids)

X = np.array([[0, 0], [0, 1], [1, 0], [8, 8], [8, 9], [9, 8]])
centroids, labels = kmeans(X, initial_centroids=np.array([[0, 0], [9, 9]]))`,
    walkthrough: [
      "Broadcasting constructs every sample-to-centroid squared distance without a Python loop over samples.",
      "An empty cluster keeps its previous centroid, making the edge-case policy explicit rather than producing a NaN mean.",
      "The convergence check compares successive centroid arrays; assignments are recomputed once for the returned centroids.",
    ],
    outputCode: `inertia = ((X - centroids[labels]) ** 2).sum()
print("centroids:")
print(np.round(centroids, 3))
print("labels:", labels)
print(f"inertia = {inertia:.4f}")`,
    expectedOutput: `centroids:
[[0.333 0.333]
 [8.333 8.333]]
labels: [0 0 0 1 1 1]
inertia = 2.6667`,
    resultExplanation:
      "The first three points have mean (1/3, 1/3), and the last three have mean (25/3, 25/3). The returned centers match those means. Inertia is the sum of squared distances to assigned centers, not a classification accuracy. Cluster numbers are arbitrary labels.",
    parameterNotes: [
      {
        title: "Two centers, chosen explicitly",
        description:
          "The number of initial centers sets k=2. Starting at (0, 0) and (9, 9) places one center near each visible group. For unfamiliar data, compare multiple initializations at a fixed k and inspect both inertia and the resulting groups.",
      },
      {
        title: "Tolerance and iteration limit",
        description:
          "The tolerance 1e-8 measures the norm of the change in the entire centroid array, in feature units. This small example settles after two iterations. The limit of 100 is a safety cap, not evidence that a larger dataset has converged.",
      },
    ],
    experiment:
      "Swap the order of the two initial centers. The final geometry and inertia stay the same, but the labels switch to [1, 1, 1, 0, 0, 0]. This shows why comparing raw cluster numbers across runs can be misleading.",
    cautions: [
      {
        title: "Initialization changes the answer",
        description:
          "K-means can stop at different local minima, so practical runs compare multiple seeds or use a stronger initializer.",
      },
      {
        title: "You still have to choose k",
        description:
          "The algorithm optimizes for a supplied cluster count; domain evidence or validation must justify that count.",
      },
      {
        title: "Distance reflects feature scale",
        description:
          "A large-scale feature can dominate Euclidean distance unless the chosen representation or scaling is appropriate.",
      },
      {
        title: "Clusters can become empty",
        description:
          "This example retains the previous centroid; other explicit policies reinitialize it, but silently averaging zero members is invalid.",
      },
    ],
    resources: [
      {
        kind: "notebook",
        label: "K-means source notebook",
        description: "Read the Chapter 8 notebook behind this clustering visual.",
        href: repoPath("blob/main/notes/8_Linear_unsupervised_learning/8_5_Kmeans.ipynb"),
      },
      {
        kind: "exercise",
        label: "Chapter 8 exercises",
        description: "Practice unsupervised learning with the official exercise notebook.",
        href: repoPath("blob/main/exercises/chapter_8/chapter_8_exercises.ipynb"),
      },
      chapterPdfResource,
      repositoryResource,
    ],
    keywords: [
      "K-means clustering from scratch Python",
      "K-means NumPy implementation",
      "K-means algorithm explained",
      "K-means Jupyter notebook",
    ],
  },
];

export function learningGuideHref(guide: Pick<LearningGuide, "slug">) {
  return `/learn/${guide.slug}`;
}

export function getLearningGuideBySlug(slug: string) {
  return learningGuides.find((guide) => guide.slug === slug);
}

export function getLearningGuideByChapter(chapter: string) {
  return learningGuides.find(
    (guide) => guide.chapterSlug === chapter || guide.chapterNumber === chapter,
  );
}

export function runGradientDescentExample({
  initial = 8,
  iterations = 30,
  stepSize = 0.2,
} = {}) {
  let value = initial;
  const history = [value];

  for (let iteration = 0; iteration < iterations; iteration += 1) {
    const gradient = 2 * (value - 3);
    value -= stepSize * gradient;
    history.push(value);
  }

  return { history, minimum: value };
}

export function runLogisticRegressionExample() {
  const features = [-2, -1, -0.5, 0.5, 1, 2];
  const labels = [0, 0, 0, 1, 1, 1];
  let intercept = 0;
  let slope = 0;

  for (let iteration = 0; iteration < 2000; iteration += 1) {
    const probabilities = features.map((feature) =>
      sigmoid(intercept + slope * feature),
    );
    const interceptGradient = mean(
      probabilities.map((probability, index) => probability - labels[index]),
    );
    const slopeGradient = mean(
      probabilities.map(
        (probability, index) =>
          (probability - labels[index]) * features[index],
      ),
    );

    intercept -= 0.2 * interceptGradient;
    slope -= 0.2 * slopeGradient;
  }

  const predictions = features.map((feature) =>
    sigmoid(intercept + slope * feature) >= 0.5 ? 1 : 0,
  );

  return { intercept, predictions, slope };
}

export function runKMeansExample() {
  const points = [
    [0, 0],
    [0, 1],
    [1, 0],
    [8, 8],
    [8, 9],
    [9, 8],
  ];
  let centroids = [
    [0, 0],
    [9, 9],
  ];

  for (let iteration = 0; iteration < 100; iteration += 1) {
    const labels = assignClusters(points, centroids);
    const updated = centroids.map((centroid, cluster) => {
      const members = points.filter((_, index) => labels[index] === cluster);
      if (members.length === 0) return centroid;

      return [
        mean(members.map((point) => point[0])),
        mean(members.map((point) => point[1])),
      ];
    });
    const movement = Math.sqrt(
      updated.reduce(
        (total, centroid, cluster) =>
          total +
          centroid.reduce(
            (clusterTotal, value, dimension) =>
              clusterTotal + (value - centroids[cluster][dimension]) ** 2,
            0,
          ),
        0,
      ),
    );
    centroids = updated;
    if (movement <= 1e-8) break;
  }

  return { centroids, labels: assignClusters(points, centroids) };
}

function sigmoid(score: number) {
  const clipped = Math.max(-500, Math.min(500, score));
  return 1 / (1 + Math.exp(-clipped));
}

function mean(values: number[]) {
  return values.reduce((total, value) => total + value, 0) / values.length;
}

function assignClusters(points: number[][], centroids: number[][]) {
  return points.map((point) => {
    const distances = centroids.map((centroid) =>
      point.reduce(
        (total, value, dimension) =>
          total + (value - centroid[dimension]) ** 2,
        0,
      ),
    );
    return distances[0] <= distances[1] ? 0 : 1;
  });
}
