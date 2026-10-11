import { ChapterBrowser } from "@/components/chapters/chapter-browser";
import { PageHeader } from "@/components/site/page-header";
import {
  chapters,
  instructorRoadmaps,
  learningWidgets,
  staticVisuals,
} from "@/content/book";
import { chaptersCollectionJsonLd, stringifyJsonLd } from "@/lib/seo";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Chapters: PDFs, Notebooks & Exercises",
  description:
    "Find Machine Learning Refined chapter PDFs, Python notebooks, exercises, and slides. Browse by topic and open the official GitHub resources for each chapter.",
  path: "/chapters",
  keywords: [
    "Machine Learning Refined chapters",
    "machine learning chapter PDFs",
    "linear regression chapter",
    "logistic regression chapter",
    "optimization techniques machine learning",
    "neural network chapter",
  ],
});

export default function ChaptersPage() {
  const jsonLd = chaptersCollectionJsonLd();

  return (
    <main className="min-h-screen text-[#071326]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(jsonLd) }}
      />
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
