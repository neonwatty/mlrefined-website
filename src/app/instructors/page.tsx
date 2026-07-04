import Image from "next/image";
import Link from "next/link";

import { resourceGroups, studyRoadmaps } from "@/content/book";
import {
  collectionPageJsonLd,
  createPageMetadata,
  stringifyJsonLd,
} from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Machine Learning Refined for Instructors",
  description:
    "Plan a Machine Learning Refined course with source-backed slides, exercises, chapter resources, and study roadmaps for essentials, full treatment, optimization, and deep learning paths.",
  path: "/instructors",
  keywords: [
    "Machine Learning Refined instructors",
    "machine learning course slides",
    "machine learning exercises",
    "machine learning course roadmap",
    "optimization course machine learning",
  ],
});

export default function InstructorsPage() {
  const instructorResources = resourceGroups.filter((resource) =>
    /Exercises|Slides/.test(resource.title),
  );
  const jsonLd = collectionPageJsonLd({
    name: "Machine Learning Refined for Instructors",
    description: metadata.description ?? "",
    path: "/instructors",
    items: [
      ...studyRoadmaps.map((roadmap) => ({
        name: roadmap.title,
        description: roadmap.description,
      })),
      ...instructorResources.map((resource) => ({
        name: resource.title,
        description: resource.description,
        url: resource.href,
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
      <h1 className="mt-8 max-w-3xl text-4xl font-semibold">
        Instructor Path
      </h1>
      <p className="mt-4 max-w-2xl leading-7 text-black/65">
        Course planning paths for Machine Learning Refined, with roadmap
        visuals, slides, exercises, and chapter resources grounded in the
        canonical source repository.
      </p>

      <section aria-labelledby="course-roadmaps" className="mt-12">
        <h2 id="course-roadmaps" className="text-2xl font-semibold">
          Course roadmaps
        </h2>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {studyRoadmaps.map((roadmap) => (
            <article
              key={roadmap.title}
              className="overflow-hidden rounded-lg border border-black/10"
            >
              <Image
                className="h-auto w-full border-b border-black/10"
                src={roadmap.image}
                alt={roadmap.imageAlt}
                width={900}
                height={560}
              />
              <div className="p-5">
                <h3 className="text-xl font-medium">{roadmap.title}</h3>
                <p className="mt-3 text-sm leading-6 text-black/60">
                  {roadmap.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="instructor-resources" className="mt-12">
        <h2 id="instructor-resources" className="text-2xl font-semibold">
          Instructor resources
        </h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {instructorResources.map((resource) => (
            <a
              key={resource.title}
              className="rounded-lg border border-black/10 p-5 transition-colors hover:border-[#155fac]/40"
              href={resource.href}
              rel="noreferrer"
              target="_blank"
            >
              <h3 className="text-xl font-medium">{resource.title}</h3>
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
