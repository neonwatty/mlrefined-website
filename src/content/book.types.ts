export type BookChapter = {
  number: string;
  title: string;
  slug: string;
  intent: "learner" | "instructor" | "reference";
  part: string;
  summary: string;
  topics: string[];
  resources: ChapterResource[];
};

export type ChapterResource = {
  title: string;
  kind: "pdf" | "notes" | "exercise" | "slides" | "source";
  description: string;
  href: string;
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
