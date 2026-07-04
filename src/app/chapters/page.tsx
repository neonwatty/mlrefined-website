import Link from "next/link";

import { chapters } from "@/content/book";
import {
  chaptersCollectionJsonLd,
  createPageMetadata,
  stringifyJsonLd,
} from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Machine Learning Refined Chapters",
  description:
    "Browse Machine Learning Refined chapter highlights for optimization, linear regression, classification, neural networks, PDFs, notebooks, exercises, and GitHub resources.",
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
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(jsonLd) }}
      />
      <Link className="text-sm text-black/55" href="/">
        Machine Learning Refined
      </Link>
      <h1 className="mt-8 text-4xl font-semibold">Chapters</h1>
      <p className="mt-4 max-w-2xl leading-7 text-black/65">
        Browse the highlighted Machine Learning Refined chapters, then open the
        source-backed PDFs, notebooks, exercises, slides, and canonical GitHub
        resource pages for each topic.
      </p>
      <div className="mt-10 grid gap-4">
        {chapters.map((chapter) => (
          <article
            key={chapter.slug}
            className="rounded-lg border border-black/10 p-5"
            id={chapter.slug}
          >
            <p className="text-sm text-black/50">Chapter {chapter.number}</p>
            <h2 className="mt-2 text-xl font-medium">
              <Link
                className="transition-colors hover:text-[#155fac]"
                href={`/chapters/${chapter.slug}`}
              >
                {chapter.title}
              </Link>
            </h2>
            <p className="mt-2 text-sm leading-6 text-black/60">
              {chapter.summary}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {chapter.resources.map((resource) => (
                <span
                  key={resource.title}
                  className="rounded border border-black/10 px-2 py-1 text-xs font-medium text-black/58"
                >
                  {resource.title}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
