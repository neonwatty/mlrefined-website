import Link from "next/link";
import { notFound } from "next/navigation";

import { ResourceLink } from "@/components/analytics/resource-link";
import { TrackedLink } from "@/components/analytics/tracked-link";
import { LinearRegressionLesson } from "@/components/chapters/linear-regression-lesson";
import { PageHeader } from "@/components/site/page-header";
import {
  chapters,
  getChapterBySlug,
  getLearningGuideByChapter,
  learningGuideHref,
} from "@/content/book";
import { innerPageTitleClassName } from "@/lib/page-styles";
import {
  chapterJsonLd,
  chapterKeywords,
  chapterPageDescription,
  chapterResourceEntries,
  stringifyJsonLd,
} from "@/lib/seo";
import { createPageMetadata } from "@/lib/site";

type ChapterPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return chapters.map((chapter) => ({ slug: chapter.slug }));
}

export async function generateMetadata({ params }: ChapterPageProps) {
  const { slug } = await params;
  const chapter = getChapterBySlug(slug);

  if (!chapter) {
    return {};
  }

  return createPageMetadata({
    title: chapter.slug === "linear-regression"
      ? "Linear Regression: Least Squares & NumPy Example"
      : `Chapter ${chapter.number}: ${chapter.title}`,
    description: chapterPageDescription(chapter),
    path: `/chapters/${chapter.slug}`,
    keywords: chapterKeywords(chapter),
  });
}

export default async function ChapterPage({ params }: ChapterPageProps) {
  const { slug } = await params;
  const chapter = getChapterBySlug(slug);

  if (!chapter) {
    notFound();
  }

  const jsonLd = chapterJsonLd(chapter);
  const resources = chapterResourceEntries(chapter);
  const learningGuide = getLearningGuideByChapter(chapter.slug);

  return (
    <main className="min-h-screen bg-[#fbfaf4] text-[#071326]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(jsonLd) }}
      />
      <PageHeader activeHref="/chapters" />
      <div className="mx-auto w-[min(1120px,100%)] px-5 py-10 md:px-8 md:py-16">
        <Link
          className="text-sm font-black text-[#164b8f] transition-colors hover:text-[#0b2545]"
          href="/chapters"
        >
          Chapters
        </Link>

        <p className="mt-8 text-xs font-black uppercase tracking-[0.16em] text-[#8a6519]">
          {chapter.part} / Chapter {chapter.number}
        </p>
        <h1 className={innerPageTitleClassName}>{chapter.title}</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-[#526070]">
          {chapter.summary}
        </p>

        {chapter.slug === "linear-regression" ? <LinearRegressionLesson /> : null}

        {learningGuide ? (
          <aside className="mt-8 max-w-3xl rounded-xl border border-[#c79222]/45 bg-[#fff7e7] p-5">
            <p className="text-xs font-black uppercase tracking-[0.14em] text-[#8a6519]">
              Step-by-step learning guide
            </p>
            <h2 className="mt-2 font-serif text-2xl font-black text-[#0b2545]">
              {learningGuide.title}
            </h2>
            <p className="mt-2 text-sm leading-6 text-[#526070]">
              Follow the equation, animated intuition, tested NumPy example,
              and common failure modes before opening the full source notebook.
            </p>
            <TrackedLink
              className="mt-4 inline-flex min-h-11 items-center justify-center rounded-md border border-[#c79222] bg-[#c79222] px-4 text-sm font-black text-[#06172d] hover:bg-[#d7a02b]"
              eventName="learning_guide_opened"
              eventProperties={{
                chapter: chapter.number,
                guide: learningGuide.slug,
                location: "chapter_detail",
                resource: "guide",
              }}
              href={learningGuideHref(learningGuide)}
            >
              Read the from-scratch guide
            </TrackedLink>
          </aside>
        ) : null}

        <section aria-labelledby="chapter-resources" className="mt-10">
          <h2
            className="scroll-mt-24 font-serif text-3xl font-black text-[#0b2545]"
            id="chapter-resources"
          >
            Chapter resources
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#526070]">
            Open the available chapter downloads and GitHub-backed source
            resources for this chapter.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {resources.map((resource) => (
              <ResourceLink
                key={`${resource.kind}-${resource.href}`}
                className="group rounded-lg border border-[#ddcfad] bg-white p-5 shadow-lg shadow-[#071326]/5 transition-all hover:-translate-y-0.5 hover:border-[#164b8f]/45 hover:shadow-[#071326]/10"
                eventName="chapter_resource_clicked"
                eventProperties={{
                  chapter: chapter.number,
                  location: "chapter_detail",
                  resource: resource.kind,
                }}
                href={resource.href}
                rel="noreferrer"
                target="_blank"
              >
                <p className="text-xs font-black uppercase tracking-[0.12em] text-[#8a6519]">
                  {resource.kind}
                </p>
                <h3 className="mt-2 font-serif text-2xl font-black text-[#0b2545]">
                  {resource.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#526070]">
                  {resource.description}
                </p>
                <span className="mt-4 inline-flex text-sm font-black text-[#164b8f] transition-transform group-hover:translate-x-1">
                  Open resource
                </span>
              </ResourceLink>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
