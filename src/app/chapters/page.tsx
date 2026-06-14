import Image from "next/image";

import { ResourceLink } from "@/components/analytics/resource-link";
import { GitHubMark } from "@/components/github-mark";
import { SiteHeader } from "@/components/site-header";
import { chapterTracks, chapters } from "@/content/book";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "Chapters | Machine Learning Refined",
  description:
    "A chapter-by-chapter guide to Machine Learning Refined with notes, exercises, PDFs, and GitHub resources.",
};

const parts = [
  "Orientation",
  "Optimization",
  "Linear learning",
  "Nonlinear learning",
] as const;

function ChapterAction({
  href,
  label,
  chapter,
}: {
  href: string;
  label: string;
  chapter: string;
}) {
  return (
    <ResourceLink
      className="inline-flex h-9 items-center rounded-md border border-black/20 px-3 text-sm font-medium text-black transition-colors hover:border-[#155fac] hover:text-[#155fac]"
      eventName="chapter_resource_clicked"
      eventProperties={{ location: "chapters_page", chapter, resource: label }}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {label}
    </ResourceLink>
  );
}

export default function ChaptersPage() {
  return (
    <main className="min-h-screen bg-white text-[#0b0b0b]">
      <SiteHeader activeHref="/chapters" />

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-12 lg:grid-cols-[1fr_360px] lg:items-start">
        <div>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-normal md:text-6xl">
            Chapters and resources
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-black/68">
            Move from optimization foundations to linear models, nonlinear
            feature learning, kernels, neural networks, and trees with the
            book PDFs, runnable notes, and exercises close at hand.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <ResourceLink
              className="inline-flex h-12 items-center justify-center rounded-md bg-[#f6b91a] px-6 text-sm font-semibold text-black shadow-sm shadow-[#f6b91a]/20 transition-colors hover:bg-[#f0ad00]"
              eventName="chapter_resource_clicked"
              eventProperties={{ location: "chapters_hero", resource: "notes" }}
              href={`${siteConfig.resourceRepo}/notes`}
              target="_blank"
              rel="noreferrer"
            >
              Browse chapter notes
            </ResourceLink>
            <ResourceLink
              className="inline-flex h-12 items-center justify-center gap-3 rounded-md border border-black/35 px-6 text-sm font-semibold transition-colors hover:bg-black/[0.03]"
              eventName="github_resource_clicked"
              eventProperties={{ location: "chapters_hero", resource: "repo" }}
              href={siteConfig.githubRepo}
              target="_blank"
              rel="noreferrer"
            >
              Open GitHub repo
              <GitHubMark />
            </ResourceLink>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border border-black/15 bg-white shadow-sm shadow-black/5">
          <div className="bg-[#fbfbfb] p-5">
            <Image
              className="h-auto w-full rounded-md"
              src="/learning-visuals/widgets/normalized-gradient-descent.gif"
              alt="Animated normalized gradient descent visualization"
              width={330}
              height={330}
              unoptimized
            />
          </div>
          <div className="border-t border-black/10 px-5 py-4">
            <p className="text-sm font-semibold">Start with optimization.</p>
            <p className="mt-2 text-sm leading-6 text-black/62">
              The book uses optimization as the throughline for the models that
              follow.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-6 pb-12 md:grid-cols-3">
        {chapterTracks.map((track) => (
          <ResourceLink
            key={track.title}
            className="rounded-lg border border-black/12 p-5 transition-colors hover:border-[#155fac]"
            eventName="chapter_track_clicked"
            eventProperties={{ location: "chapters_tracks", track: track.title }}
            href={track.href}
            target="_blank"
            rel="noreferrer"
          >
            <p className="text-sm font-medium text-[#155fac]">{track.range}</p>
            <h2 className="mt-3 text-xl font-semibold">{track.title}</h2>
            <p className="mt-3 text-sm leading-6 text-black/62">
              {track.description}
            </p>
          </ResourceLink>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="border-t border-black/12">
          {parts.map((part) => (
            <div key={part} className="border-b border-black/12 py-8">
              <h2 className="text-2xl font-semibold">{part}</h2>
              <div className="mt-5 grid gap-4">
                {chapters
                  .filter((chapter) => chapter.part === part)
                  .map((chapter) => (
                    <article
                      key={chapter.slug}
                      className="grid gap-5 rounded-lg border border-black/10 p-5 md:grid-cols-[80px_1fr_auto]"
                    >
                      <p className="text-sm font-semibold text-black/50">
                        Chapter {chapter.number}
                      </p>
                      <div>
                        <h3 className="text-xl font-semibold">{chapter.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-black/62">
                          {chapter.summary}
                        </p>
                        <p className="mt-3 text-sm text-black/50">
                          {chapter.topics.join(" / ")}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2 md:justify-end">
                        {chapter.notesHref ? (
                          <ChapterAction
                            chapter={chapter.number}
                            href={chapter.notesHref}
                            label="Notes"
                          />
                        ) : null}
                        {chapter.exercisesHref ? (
                          <ChapterAction
                            chapter={chapter.number}
                            href={chapter.exercisesHref}
                            label="Exercises"
                          />
                        ) : null}
                        <ChapterAction
                          chapter={chapter.number}
                          href={chapter.pdfHref}
                          label="PDFs"
                        />
                      </div>
                    </article>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
