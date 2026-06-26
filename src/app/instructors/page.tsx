import { InstructorRoadmap } from "@/components/instructors/instructor-roadmap";
import { BookSideRail } from "@/components/site/book-side-rail";
import { PageHeader } from "@/components/site/page-header";
import { bookLinks, chapters, instructorRoadmaps } from "@/content/book";
import { innerPageTitleClassName } from "@/lib/page-styles";
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
    <main className="min-h-screen text-[#071326]">
      <PageHeader activeHref="/instructors" />
      <div className="mx-auto grid w-[min(1480px,100%)] gap-5 px-5 py-4 md:px-6 lg:grid-cols-[250px_minmax(0,1fr)]">
        <BookSideRail
          description="Course roadmaps connect chapters, slides, exercises, and notebooks into teachable paths."
          eyebrow="Instructor context"
          eventLocation="instructors_side_rail"
          links={supportLinks.map((link) => ({
            ...link,
            resource: link.label,
          }))}
        />
        <div className="min-w-0">
          <section className="border-b border-[#d9e2ec] bg-[linear-gradient(90deg,#fffdf8,#ffffff_46%,#f7f4ed)] px-3 py-3">
            <div>
              <p className="mb-1.5 text-xs font-black uppercase tracking-[0.16em] text-[#8a6519]">
                Instructor adoption
              </p>
              <h1 className={innerPageTitleClassName}>Instructor Path</h1>
              <p className="mt-1.5 max-w-2xl text-sm leading-5 text-[#526070]">
                Compare course roadmaps, then jump straight to the chapters,
                slides, exercises, and notebooks behind each path.
              </p>
              <div className="mt-2.5 flex flex-wrap gap-2">
                <a className="inline-flex min-h-9 items-center rounded-md border border-[#c79222] bg-[#c79222] px-3 text-sm font-black text-[#06172d]" href="#instructor-roadmaps">
                  Choose roadmap
                </a>
                <a className="inline-flex min-h-9 items-center rounded-md border border-[#c79222]/50 bg-white px-3 text-sm font-black text-[#164b8f]" href="#instructor-support">
                  Adoption support
                </a>
              </div>
              <p className="mt-1.5 text-xs font-black text-[#6b5b3d]">
                Support links stay one step away: preface, slides, sample-copy
                request, and GitHub questions.
              </p>
            </div>
          </section>
          <nav className="sticky top-[72px] z-10 flex gap-2 bg-[#fbfaf4]/90 py-1 backdrop-blur" aria-label="Instructor page sections">
            <a className="rounded-md border border-[#ddcfad] bg-white px-3 py-1.5 text-sm font-black text-[#164b8f]" href="#instructor-roadmaps">
              Roadmaps
            </a>
            <a className="rounded-md border border-[#ddcfad] bg-white px-3 py-1.5 text-sm font-black text-[#164b8f]" href="#instructor-support">
              Support
            </a>
          </nav>
          <section className="mb-2 grid gap-2.5 rounded-lg border border-[#164b8f]/25 bg-[#f6fbff] p-2 md:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)_auto] md:items-center">
            <strong className="font-serif text-[#0b2545]">
              Most instructors start with Essentials
            </strong>
            <span className="text-sm leading-5 text-[#526070]">
              Core optimization, linear learning, unsupervised learning, and
              validation in a 12 to 16 week path.
            </span>
            <a className="inline-flex min-h-9 items-center justify-center rounded-md border border-[#c79222]/50 bg-white px-3 text-sm font-black text-[#164b8f]" href="#instructor-roadmaps">
              View Essentials roadmap
            </a>
          </section>

          <InstructorRoadmap
            chapters={chapters}
            prefaceHref={bookLinks.preface}
            roadmaps={instructorRoadmaps}
            supportLinks={supportLinks}
          />
        </div>
      </div>
    </main>
  );
}
