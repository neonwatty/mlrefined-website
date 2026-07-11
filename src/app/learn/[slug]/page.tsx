import { notFound } from "next/navigation";

import { LearningGuidePage } from "@/components/learn/learning-guide-page";
import { PageHeader } from "@/components/site/page-header";
import {
  getLearningGuideBySlug,
  learningGuideHref,
  learningGuides,
} from "@/content/book";
import { learningGuideJsonLd, stringifyJsonLd } from "@/lib/seo";
import { createPageMetadata } from "@/lib/site";

type LearnGuidePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return learningGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: LearnGuidePageProps) {
  const { slug } = await params;
  const guide = getLearningGuideBySlug(slug);

  if (!guide) return {};

  return createPageMetadata({
    title: guide.title,
    description: guide.description,
    path: learningGuideHref(guide),
    keywords: guide.keywords,
  });
}

export default async function LearnGuidePage({ params }: LearnGuidePageProps) {
  const { slug } = await params;
  const guide = getLearningGuideBySlug(slug);

  if (!guide) notFound();

  const jsonLd = learningGuideJsonLd(guide);

  return (
    <main className="min-h-screen bg-[#fbfaf4] text-[#071326]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(jsonLd) }}
      />
      <PageHeader activeHref="/learn" />
      <LearningGuidePage guide={guide} />
    </main>
  );
}
