import { ChapterBrowser } from "@/components/chapters/chapter-browser";
import { PageHeader } from "@/components/site/page-header";
import {
  chapters,
  instructorRoadmaps,
  learningWidgets,
  staticVisuals,
} from "@/content/book";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Chapters",
  description:
    "Browse Machine Learning Refined chapters with source-backed notebooks, exercises, slides, and representative book figures.",
  path: "/chapters",
});

export default function ChaptersPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf4] text-[#071326]">
      <PageHeader activeHref="/chapters" />
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <section className="mt-8 grid gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.7fr)] lg:items-end">
          <div>
            <p className="mb-2 text-xs font-black uppercase tracking-[0.16em] text-[#8a6519]">
              Chapter resource hub
            </p>
            <h1 className="font-serif text-5xl font-black leading-tight md:text-6xl">
              Chapters
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-[#526070]">
              Move through the book chapter-by-chapter: scan the concepts,
              inspect representative figures, and jump to the canonical PDFs,
              notes, notebooks, exercises, and teaching materials.
            </p>
          </div>

          <div className="grid gap-3 rounded-lg border border-[#ddcfad] bg-white p-4">
            <p className="font-serif text-xl font-black text-[#0b2545]">
              Source-backed coverage
            </p>
            <p className="text-sm leading-6 text-[#526070]">
              This hub uses real repository paths and real static figures from
              the book asset sources. Chapter 11 opens first because it has one
              of the richest visual sets; every chapter remains one click away.
            </p>
          </div>
        </section>

        <ChapterBrowser
          chapters={chapters}
          visuals={staticVisuals}
          widgets={learningWidgets}
          roadmaps={instructorRoadmaps}
        />
      </div>
    </main>
  );
}
