import { InstructorRoadmap } from "@/components/instructors/instructor-roadmap";
import { PageHeader } from "@/components/site/page-header";
import { bookLinks, chapters, instructorRoadmaps } from "@/content/book";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Instructors",
  description:
    "Course planning paths for Machine Learning Refined with source-backed chapter resources, slides, exercises, and roadmap guidance.",
  path: "/instructors",
});

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
    <main className="min-h-screen bg-[#fbfaf4] text-[#071326]">
      <PageHeader activeHref="/instructors" />
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
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
              Course planning loop
            </p>
            <div className="grid grid-cols-3 gap-2 text-center text-sm font-black text-[#164b8f]">
              <span className="rounded-md bg-[#f7fbff] px-2 py-3">Fit</span>
              <span className="rounded-md bg-[#f7fbff] px-2 py-3">Path</span>
              <span className="rounded-md bg-[#f7fbff] px-2 py-3">Materials</span>
            </div>
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
