import Link from "next/link";

import { InstructorRoadmap } from "@/components/instructors/instructor-roadmap";
import { bookLinks, chapters, instructorRoadmaps } from "@/content/book";

export const metadata = {
  title: "Instructors | Machine Learning Refined",
  description:
    "Course planning paths for Machine Learning Refined with source-backed chapter resources, slides, exercises, and roadmap guidance.",
};

const supportLinks = [
  {
    href: bookLinks.roadmapGuide,
    label: "How to use the book",
    note: "Course-roadmap guidance from the canonical book repository.",
  },
  {
    href: bookLinks.slides,
    label: "Teaching decks",
    note: "PPTX chapter materials for selected course paths.",
  },
  {
    href: bookLinks.exercises,
    label: "Exercises",
    note: "Practice notebooks and datasets to pair with chapters.",
  },
];

export default function InstructorsPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf4] px-5 py-12 text-[#071326] md:px-8">
      <div className="mx-auto max-w-7xl">
        <Link className="text-sm font-bold text-black/55" href="/">
          Machine Learning Refined
        </Link>

        <section className="mt-8 grid gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.7fr)] lg:items-end">
          <div>
            <p className="mb-2 text-xs font-black uppercase tracking-[0.16em] text-[#8a6519]">
              Instructor path
            </p>
            <h1 className="font-serif text-5xl font-black leading-tight md:text-6xl">
              Instructors
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-[#526070]">
              Choose the course shape that fits your term, then inspect the
              exact chapter resources behind each stop: PDFs, notes, exercises,
              slides, and runnable notebooks where available.
            </p>
          </div>

          <div className="grid gap-3 rounded-lg border border-[#ddcfad] bg-white p-4">
            <p className="font-serif text-xl font-black text-[#0b2545]">
              Start with fit, then inspect materials
            </p>
            <p className="text-sm leading-6 text-[#526070]">
              The paths below are sourced from the book repository guidance and
              tied directly to chapter packages for adoption planning.
            </p>
          </div>
        </section>

        <InstructorRoadmap
          chapters={chapters}
          prefaceHref={bookLinks.preface}
          roadmaps={instructorRoadmaps}
          supportLinks={supportLinks}
        />
      </div>
    </main>
  );
}
