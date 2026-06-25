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
    <main className="min-h-screen text-[#071326]">
      <PageHeader activeHref="/chapters" />
      <div className="mx-auto w-[min(1680px,100%)] px-6 py-6 md:px-[26px]">
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
