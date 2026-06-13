import Link from "next/link";

import { chapters } from "@/content/book";

export const metadata = {
  title: "Chapters | Machine Learning Refined",
  description:
    "Chapter landing pages for Machine Learning Refined, including notebooks, exercises, PDFs, and GitHub resources.",
};

export default function ChaptersPage() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-16">
      <Link className="text-sm text-black/55" href="/">
        Machine Learning Refined
      </Link>
      <h1 className="mt-8 text-4xl font-semibold">Chapters</h1>
      <p className="mt-4 max-w-2xl leading-7 text-black/65">
        This route will become the crawlable chapter hub, with each chapter
        linking to PDFs, notebooks, exercises, Colab launches, and canonical
        GitHub source pages.
      </p>
      <div className="mt-10 grid gap-4">
        {chapters.map((chapter) => (
          <article key={chapter.slug} className="rounded-lg border border-black/10 p-5">
            <p className="text-sm text-black/50">Chapter {chapter.number}</p>
            <h2 className="mt-2 text-xl font-medium">{chapter.title}</h2>
            <p className="mt-2 text-sm leading-6 text-black/60">
              {chapter.summary}
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}
