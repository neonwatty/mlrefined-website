import { chapterTracks, learningWidgets } from "./book-learning";
import { spotlightFigureTitles, staticVisuals } from "./book-visuals";

export const pedagogySteps = [
  { number: "01", title: "Intuition", note: "See the idea" },
  { number: "02", title: "Visualization", note: "Watch the geometry" },
  { number: "03", title: "Derivation", note: "Earn the notation" },
  { number: "04", title: "Implementation", note: "Build it in Python" },
];

export const visualPath = [
  ["Look", "Start with a real book figure."],
  ["Learn", "Open the chapter package behind it."],
  ["Run", "Continue in a Colab notebook."],
] as const;

export const featuredFigures = spotlightFigureTitles
  .map((title) => staticVisuals.find((visual) => visual.title === title))
  .filter((visual) => visual !== undefined)
  .map((visual) => ({
    chapter: `${visual.chapter} / ${visual.topic}`,
    title: visual.title,
    description: visual.description,
    image: visual.image,
    alt: visual.alt,
    href: visual.chapterHref,
    sourceHref: visual.sourceHref,
  }));

export const homeAnimations = [
  {
    title: chapterTracks[0].title,
    meta: chapterTracks[0].range,
    image: chapterTracks[0].image,
    imageAlt: chapterTracks[0].imageAlt,
    href: chapterTracks[0].href,
  },
  {
    title: chapterTracks[1].title,
    meta: chapterTracks[1].range,
    image: chapterTracks[1].image,
    imageAlt: chapterTracks[1].imageAlt,
    href: chapterTracks[1].href,
  },
  {
    title: learningWidgets[1].title,
    meta: learningWidgets[1].topic,
    image: learningWidgets[1].image,
    imageAlt: `${learningWidgets[1].title} Colab notebook preview`,
    href: learningWidgets[1].href,
  },
  {
    title: learningWidgets[2].title,
    meta: learningWidgets[2].topic,
    image: learningWidgets[2].image,
    imageAlt: `${learningWidgets[2].title} Colab notebook preview`,
    href: learningWidgets[2].href,
  },
];
