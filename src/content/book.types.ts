export type BookChapter = {
  number: string;
  title: string;
  slug: string;
  part: string;
  summary: string;
  audience: Array<"learner" | "instructor">;
  resources: ChapterResources;
};

export type ChapterResources = {
  pdf?: string;
  notes?: string;
  notebook?: string;
  colab?: string;
  exercise?: string;
  slides?: string;
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
  id: string;
  title: string;
  range: string;
  subtitle: string;
  badge: string;
  cadence: string;
  description: string;
  topics: string[];
  image: string;
  imageAlt: string;
  href: string;
  chapters: RoadmapChapter[];
};

export type LearningWidget = {
  title: string;
  topic: string;
  chapter: string;
  description: string;
  image: string;
  imageAlt: string;
  notebook: string;
  colab: string;
  href: string;
};

export type StaticVisual = {
  title: string;
  topic: string;
  chapter: string;
  chapterTitle: string;
  image: string;
  alt: string;
  description: string;
  sourceHref: string;
  chapterHref: string;
};

export type StudyRoadmap = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export type RoadmapChapter = {
  number: string;
  label: string;
  topics: [string, string];
};

export type ReaderReview = {
  name: string;
  source: "Amazon" | "Goodreads";
  title: string;
  excerpt: string;
  href: string;
};
