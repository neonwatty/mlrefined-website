export type BookChapter = {
  number: string;
  title: string;
  slug: string;
  intent: "learner" | "instructor" | "reference";
  summary: string;
};

export type SocialProofLogo = {
  name: string;
  image: string;
  width: number;
  height: number;
};

export type Testimonial = {
  name: string;
  role: string;
  image: string;
  summary: string;
};

export type ChapterTrack = {
  title: string;
  range: string;
  description: string;
  topics: string[];
  image: string;
  imageAlt: string;
  href: string;
};

export type LearningWidget = {
  title: string;
  topic: string;
  image: string;
  href: string;
};

export type StudyRoadmap = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
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

export const universityLogos: SocialProofLogo[] = [
  {
    name: "University of Michigan",
    image: "/social-proof/logos/university-of-michigan.png",
    width: 232,
    height: 134,
  },
  {
    name: "University of Toronto",
    image: "/social-proof/logos/university-of-toronto.png",
    width: 282,
    height: 190,
  },
  {
    name: "Texas A&M University",
    image: "/social-proof/logos/texas-am.png",
    width: 282,
    height: 232,
  },
  {
    name: "Penn State",
    image: "/social-proof/logos/penn-state.png",
    width: 270,
    height: 84,
  },
  {
    name: "New York University",
    image: "/social-proof/logos/nyu.png",
    width: 254,
    height: 60,
  },
  {
    name: "Kindai University",
    image: "/social-proof/logos/kindai.png",
    width: 270,
    height: 70,
  },
  {
    name: "Purdue University",
    image: "/social-proof/logos/purdue.png",
    width: 206,
    height: 70,
  },
  {
    name: "Georgia Tech",
    image: "/social-proof/logos/georgia-tech.png",
    width: 302,
    height: 70,
  },
  {
    name: "Arizona State University",
    image: "/social-proof/logos/asu.png",
    width: 350,
    height: 104,
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "John G. Proakis",
    role: "Professor Emeritus, Northeastern University",
    image: "/social-proof/people/john-proakis.jpeg",
    summary:
      "Highlights the book's path from basic principles to practical implementation.",
  },
  {
    name: "Osvaldo Simeone",
    role: "Professor, King's College London",
    image: "/social-proof/people/osvaldo-simeone.jpeg",
    summary:
      "Points to the first-principles presentation, geometric intuition, and Python exercises.",
  },
  {
    name: "David Duvenaud",
    role: "Associate Professor, University of Toronto",
    image: "/social-proof/people/david-duvenaud.jpg",
    summary:
      "Praises the steady build-up of tools, examples, runnable code, and detail.",
  },
  {
    name: "Kimiaki Shirahama",
    role: "Professor, Doshisha University",
    image: "/social-proof/people/kimiaki-shirahama.png",
    summary:
      "Emphasizes the unified optimization viewpoint and visual explanations.",
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

export const chapterTracks: ChapterTrack[] = [
  {
    title: "Optimization foundations",
    range: "Chapters 2-4",
    description:
      "Zero-, first-, and second-order methods give the book its unifying language for learning algorithms.",
    topics: ["gradient descent", "Newton methods", "step length", "automatic differentiation"],
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
    topics: ["feature engineering", "neural networks", "kernels", "trees", "cross-validation"],
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
