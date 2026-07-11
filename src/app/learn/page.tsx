import { LearningGuideCard } from "@/components/learn/learning-guide-card";
import { PageHeader } from "@/components/site/page-header";
import { learningGuides } from "@/content/book";
import {
  learningGuidesCollectionJsonLd,
  stringifyJsonLd,
} from "@/lib/seo";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Machine Learning from Scratch Guides",
  description:
    "Learn gradient descent, logistic regression, and K-means from scratch with visual explanations, tested NumPy examples, and official Machine Learning Refined notebooks.",
  path: "/learn",
  keywords: [
    "machine learning from scratch Python",
    "machine learning NumPy tutorials",
    "gradient descent from scratch",
    "logistic regression from scratch",
    "K-means from scratch",
  ],
});

export default function LearnPage() {
  const jsonLd = learningGuidesCollectionJsonLd(learningGuides);

  return (
    <main className="min-h-screen bg-[#fbfaf4] text-[#071326]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(jsonLd) }}
      />
      <PageHeader activeHref="/learn" />
      <div className="mx-auto w-[min(1320px,100%)] px-5 py-10 md:px-8 md:py-16">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-[#8a6519]">
          Visual, executable learning guides
        </p>
        <h1 className="mt-3 max-w-4xl font-serif text-4xl font-black leading-tight text-[#0b2545] sm:text-5xl md:text-6xl">
          Machine learning from scratch
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[#526070]">
          Build core algorithms from their equations with compact, tested NumPy
          examples. Every guide connects its visual explanation to the official
          Machine Learning Refined chapter, notebook, exercises, and source
          repository.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {learningGuides.map((guide) => (
            <LearningGuideCard key={guide.slug} guide={guide} />
          ))}
        </div>
      </div>
    </main>
  );
}
