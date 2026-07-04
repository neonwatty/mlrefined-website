import type { BookChapter } from "./book.types";

const repoBase = "https://github.com/neonwatty/machine-learning-refined";

export const chapters: BookChapter[] = [
  {
    number: "1",
    title: "Introduction to Machine Learning",
    slug: "introduction-to-machine-learning",
    intent: "learner",
    part: "Orientation",
    summary: "Book orientation, taxonomy, and the optimization viewpoint.",
    topics: ["machine learning taxonomy", "model fitting", "optimization"],
    resources: [
      {
        title: "Chapter PDF",
        kind: "pdf",
        description: "Download the introductory chapter PDF.",
        href: "https://www.dropbox.com/scl/fi/38yjpyxwezjic8ouxppp8/chapter_1.pdf?rlkey=2cmhkez6xqtjkrca3c6zd848v&st=p0w2488l&dl=0",
      },
      {
        title: "PDF source index",
        kind: "source",
        description: "Open the canonical chapter PDF index.",
        href: `${repoBase}/tree/main/chapter_pdfs`,
      },
    ],
  },
  {
    number: "2",
    title: "Zero-Order Optimization Techniques",
    slug: "zero-order-optimization-techniques",
    intent: "learner",
    part: "Mathematical Optimization",
    summary: "Search, coordinate descent, local methods, and global methods.",
    topics: [
      "zero-order optimization",
      "coordinate descent",
      "local search",
      "global search",
    ],
    resources: [
      {
        title: "Chapter PDF",
        kind: "pdf",
        description: "Download the zero-order optimization chapter PDF.",
        href: "https://www.dropbox.com/scl/fi/8y8qgxk1nz9x9di0xtaz9/chapter_2.pdf?rlkey=s6g6u168xa14xzt1b7la6xb6p&st=cz76pezz&dl=0",
      },
      {
        title: "Notebook notes",
        kind: "notes",
        description: "Browse the source Jupyter notebooks for chapter 2.",
        href: `${repoBase}/tree/main/notes/2_Zero_order_methods`,
      },
      {
        title: "Exercises",
        kind: "exercise",
        description: "Open the chapter 2 exercise notebook wrapper.",
        href: `${repoBase}/tree/main/exercises/chapter_2`,
      },
      {
        title: "Slides",
        kind: "slides",
        description: "Download the chapter 2 presentation deck folder.",
        href: "https://www.dropbox.com/scl/fo/ovmrlv1xjcv58ng2rqu26/AJI1SIGgxtcPDFKaRbSKHNE?rlkey=eixgy0646ll5addkusb44q72r&st=ddyrqupl&dl=0",
      },
    ],
  },
  {
    number: "3",
    title: "First-Order Optimization Techniques",
    slug: "first-order-optimization-techniques",
    intent: "learner",
    part: "Mathematical Optimization",
    summary: "Gradients, descent geometry, step lengths, and mini-batch methods.",
    topics: [
      "gradient descent",
      "descent geometry",
      "step length",
      "mini-batch methods",
    ],
    resources: [
      {
        title: "Chapter PDF",
        kind: "pdf",
        description: "Download the first-order optimization chapter PDF.",
        href: "https://www.dropbox.com/scl/fi/8qg41w4cehr3i7ggj5agw/chapter_3.pdf?rlkey=15ndxxiba8xxq4v2ab6tg46kc&st=adr5lby1&dl=0",
      },
      {
        title: "Notebook notes",
        kind: "notes",
        description: "Browse the source Jupyter notebooks for chapter 3.",
        href: `${repoBase}/tree/main/notes/3_First_order_methods`,
      },
      {
        title: "Exercises",
        kind: "exercise",
        description: "Open the chapter 3 exercise notebook wrapper.",
        href: `${repoBase}/tree/main/exercises/chapter_3`,
      },
      {
        title: "Slides",
        kind: "slides",
        description: "Download the chapter 3 presentation deck folder.",
        href: "https://www.dropbox.com/scl/fo/xs1hawbl18ss9ht1acy34/AH5_CgdF-eHuBW8ABS5fG58?rlkey=vwickkxq4aye6tgqb8y9hx6kb&st=jeqms9h4&dl=0",
      },
    ],
  },
  {
    number: "5",
    title: "Linear Regression",
    slug: "linear-regression",
    intent: "reference",
    part: "Linear Learning",
    summary:
      "Least squares, absolute deviations, metrics, and probabilistic framing.",
    topics: [
      "linear regression",
      "least squares",
      "absolute deviations",
      "regression metrics",
    ],
    resources: [
      {
        title: "Chapter PDF",
        kind: "pdf",
        description: "Download the linear regression chapter PDF.",
        href: "https://www.dropbox.com/scl/fi/g2w41g4cg4rpi3dxr5gq1/chapter_5.pdf?rlkey=fqmi4ttvzgothvlqifka3dk82&st=gzn8dipq&dl=0",
      },
      {
        title: "Notebook notes",
        kind: "notes",
        description: "Browse the source Jupyter notebooks for chapter 5.",
        href: `${repoBase}/tree/main/notes/5_Linear_regression`,
      },
      {
        title: "Exercises",
        kind: "exercise",
        description: "Open the chapter 5 exercise notebook wrapper.",
        href: `${repoBase}/tree/main/exercises/chapter_5`,
      },
      {
        title: "Slides",
        kind: "slides",
        description: "Download the chapter 5 presentation deck folder.",
        href: "https://www.dropbox.com/scl/fo/ylz4jqnx5161swuvuz496/AE-OG8b8j2dcXf3Al09XwZs?rlkey=0xxec2sgeunh21w03aamwdmhb&st=38ytti62&dl=0",
      },
    ],
  },
  {
    number: "6",
    title: "Linear Two-Class Classification",
    slug: "linear-two-class-classification",
    intent: "reference",
    part: "Linear Learning",
    summary: "Logistic regression, perceptrons, SVMs, losses, and metrics.",
    topics: [
      "logistic regression",
      "perceptron",
      "support vector machines",
      "classification metrics",
    ],
    resources: [
      {
        title: "Chapter PDF",
        kind: "pdf",
        description: "Download the two-class classification chapter PDF.",
        href: "https://www.dropbox.com/scl/fi/yyhy41z562cdj4fx5ki06/chapter_6.pdf?rlkey=wvy5y6zv3lr75l913zpokj3ws&st=83mngoyc&dl=0",
      },
      {
        title: "Notebook notes",
        kind: "notes",
        description: "Browse the source Jupyter notebooks for chapter 6.",
        href: `${repoBase}/tree/main/notes/6_Linear_twoclass_classification`,
      },
      {
        title: "Exercises",
        kind: "exercise",
        description: "Open the chapter 6 exercise notebook wrapper.",
        href: `${repoBase}/tree/main/exercises/chapter_6`,
      },
      {
        title: "Slides",
        kind: "slides",
        description: "Download the chapter 6 presentation deck folder.",
        href: "https://www.dropbox.com/scl/fo/lxpfn6ujp08cbqccadpq7/AGFNBZvxkZAGlhKku9utONU?rlkey=7580a6t9mfskoigv8wczze1bx&st=v76fgfaw&dl=0",
      },
    ],
  },
  {
    number: "13",
    title: "Fully Connected Neural Networks",
    slug: "fully-connected-neural-networks",
    intent: "learner",
    part: "Nonlinear Learning",
    summary:
      "Multilayer perceptrons, activation functions, optimization, and backprop.",
    topics: [
      "neural networks",
      "multilayer perceptrons",
      "backpropagation",
      "activation functions",
    ],
    resources: [
      {
        title: "Chapter PDF",
        kind: "pdf",
        description: "Download the neural networks chapter PDF.",
        href: "https://www.dropbox.com/scl/fi/f9xmtqh9o51ozq89csz5o/chapter_13.pdf?rlkey=p7sq7ylifac0wex3bcyzon62k&st=isb5e07i&dl=0",
      },
      {
        title: "Notebook notes",
        kind: "notes",
        description: "Browse the source Jupyter notebooks for chapter 13.",
        href: `${repoBase}/tree/main/notes/13_Multilayer_perceptrons`,
      },
      {
        title: "Exercises",
        kind: "exercise",
        description: "Open the chapter 13 exercise notebook wrapper.",
        href: `${repoBase}/tree/main/exercises/chapter_13`,
      },
      {
        title: "Slides",
        kind: "slides",
        description: "Download the chapter 13 presentation deck folder.",
        href: "https://www.dropbox.com/scl/fo/fi5g50ss69muxqh82j0vo/AF9g3zTfzmemghI2KJBQagU?rlkey=nt4kww5fudhvlougblfbdohd8&st=abv5f66l&dl=0",
      },
    ],
  },
];

export function getChapterBySlug(slug: string) {
  return chapters.find((chapter) => chapter.slug === slug);
}
