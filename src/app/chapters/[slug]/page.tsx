import Link from "next/link";
import { notFound } from "next/navigation";

import { chapters, getChapterBySlug } from "@/content/book";
import {
  chapterPageDescription,
  chapterJsonLd,
  createPageMetadata,
  stringifyJsonLd,
} from "@/lib/seo";

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
    title: `Chapter ${chapter.number}: ${chapter.title}`,
    description: chapterPageDescription(chapter),
    path: `/chapters/${chapter.slug}`,
    keywords: [
      `Machine Learning Refined chapter ${chapter.number}`,
      chapter.title,
      ...chapter.topics,
    ],
  });
}

export default async function ChapterPage({ params }: ChapterPageProps) {
  const { slug } = await params;
  const chapter = getChapterBySlug(slug);

  if (!chapter) {
    notFound();
  }

  const jsonLd = chapterJsonLd(chapter);

  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(jsonLd) }}
      />
      <Link className="text-sm text-black/55" href="/chapters">
        Chapters
      </Link>

      <p className="mt-8 text-sm font-medium text-black/50">
        {chapter.part} / Chapter {chapter.number}
      </p>
      <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight">
        {chapter.title}
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-black/65">
        {chapter.summary}
      </p>

      <section aria-labelledby="chapter-topics" className="mt-10">
        <h2 id="chapter-topics" className="text-2xl font-semibold">
          Topics
        </h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {chapter.topics.map((topic) => (
            <li
              key={topic}
              className="rounded border border-black/12 px-3 py-2 text-sm text-black/65"
            >
              {topic}
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="chapter-resources" className="mt-12">
        <h2 id="chapter-resources" className="text-2xl font-semibold">
          Chapter resources
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-black/60">
          Open the available chapter downloads and GitHub-backed source
          resources for this chapter.
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {chapter.resources.map((resource) => (
            <a
              key={resource.href}
              className="rounded-lg border border-black/10 p-5 transition-colors hover:border-[#155fac]/40 hover:bg-black/[0.02]"
              href={resource.href}
              rel="noreferrer"
              target="_blank"
            >
              <p className="text-xs font-semibold uppercase text-black/45">
                {resource.kind}
              </p>
              <h3 className="mt-2 text-xl font-medium">{resource.title}</h3>
              <p className="mt-3 text-sm leading-6 text-black/60">
                {resource.description}
              </p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
