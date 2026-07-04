import Image from "next/image";
import Link from "next/link";

import { chapterTracks, learningWidgets } from "@/content/book";
import {
  collectionPageJsonLd,
  createPageMetadata,
  stringifyJsonLd,
} from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Machine Learning Refined GitHub Notebooks",
  description:
    "Browse Machine Learning Refined GitHub notebooks and Python notebook paths for optimization, regression, classification, neural networks, and chapter resources.",
  path: "/notebooks",
  keywords: [
    "Machine Learning Refined notebooks",
    "machine learning Python notebooks",
    "Jupyter notebooks machine learning",
    "optimization notebooks",
    "neural network notebooks",
  ],
});

export default function NotebooksPage() {
  const jsonLd = collectionPageJsonLd({
    name: "Machine Learning Refined Notebooks",
    description: metadata.description ?? "",
    path: "/notebooks",
    items: [
      ...chapterTracks.map((track) => ({
        name: track.title,
        description: track.description,
        url: track.href,
      })),
      ...learningWidgets.map((widget) => ({
        name: widget.title,
        description: widget.topic,
        url: widget.href,
      })),
    ],
  });

  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(jsonLd) }}
      />
      <Link className="text-sm text-black/55" href="/">
        Machine Learning Refined
      </Link>
      <h1 className="mt-8 max-w-3xl text-4xl font-semibold">Notebooks</h1>
      <p className="mt-4 max-w-2xl leading-7 text-black/65">
        Open GitHub-backed Python notebook paths for optimization, regression,
        classification, feature learning, clustering, and neural networks.
        Each preview links back to the canonical source notebooks and related
        chapter resources.
      </p>

      <section aria-labelledby="notebook-tracks" className="mt-12">
        <h2 id="notebook-tracks" className="text-2xl font-semibold">
          Chapter notebook tracks
        </h2>
        <div className="mt-5 grid gap-5 lg:grid-cols-3">
          {chapterTracks.map((track) => (
            <a
              key={track.title}
              className="overflow-hidden rounded-lg border border-black/10 transition-colors hover:border-[#155fac]/40"
              href={track.href}
              rel="noreferrer"
              target="_blank"
            >
              <Image
                className="h-44 w-full object-cover"
                src={track.image}
                alt={track.imageAlt}
                width={900}
                height={560}
                unoptimized
              />
              <div className="p-5">
                <p className="text-sm font-medium text-black/50">
                  {track.range}
                </p>
                <h3 className="mt-2 text-xl font-medium">{track.title}</h3>
                <p className="mt-3 text-sm leading-6 text-black/60">
                  {track.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section aria-labelledby="notebook-widgets" className="mt-12">
        <h2 id="notebook-widgets" className="text-2xl font-semibold">
          Visual notebook previews
        </h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {learningWidgets.map((widget) => (
            <a
              key={widget.title}
              className="rounded-lg border border-black/10 p-4 transition-colors hover:border-[#155fac]/40"
              href={widget.href}
              rel="noreferrer"
              target="_blank"
            >
              <Image
                className="h-32 w-full rounded-md object-cover"
                src={widget.image}
                alt={`${widget.title} notebook visualization`}
                width={600}
                height={380}
                unoptimized
              />
              <p className="mt-4 text-xs font-semibold uppercase text-black/45">
                {widget.topic}
              </p>
              <h3 className="mt-2 font-medium">{widget.title}</h3>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
