import Image from "next/image";

import { ResourceLink } from "@/components/analytics/resource-link";
import { GitHubMark } from "@/components/github-mark";
import { SiteHeader } from "@/components/site-header";
import {
  learningWidgets,
  resourceGroups,
  studyRoadmaps,
  testimonials,
} from "@/content/book";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "Resources | Machine Learning Refined",
  description:
    "Machine Learning Refined resources, including PDFs, notebooks, exercises, presentations, roadmaps, widgets, and GitHub source links.",
};

const audiences = [
  {
    title: "Independent learners",
    copy: "Start with PDFs, follow the notes, then use exercises to rebuild models from scratch.",
  },
  {
    title: "Instructors",
    copy: "Use roadmaps, slides, notebooks, and exercises to shape a quarter, semester, or focused module.",
  },
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-white text-[#0b0b0b]">
      <SiteHeader activeHref="/resources" />

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:items-start">
          <div>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-normal md:text-6xl">
              A working library for learning and teaching ML.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-black/68">
              PDFs, notebooks, exercises, slides, roadmaps, and visual widgets
              from the Machine Learning Refined GitHub repo, organized for
              readers who want the next useful thing quickly.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <ResourceLink
                className="inline-flex h-12 items-center justify-center rounded-md bg-[#f6b91a] px-6 text-sm font-semibold text-black shadow-sm shadow-[#f6b91a]/20 transition-colors hover:bg-[#f0ad00]"
                eventName="resource_library_clicked"
                eventProperties={{ location: "resources_hero", resource: "pdfs" }}
                href={`${siteConfig.resourceRepo}/chapter_pdfs`}
                target="_blank"
                rel="noreferrer"
              >
                Download chapter PDFs
              </ResourceLink>
              <ResourceLink
                className="inline-flex h-12 items-center justify-center gap-3 rounded-md border border-black/35 px-6 text-sm font-semibold transition-colors hover:bg-black/[0.03]"
                eventName="github_resource_clicked"
                eventProperties={{ location: "resources_hero", resource: "repo" }}
                href={siteConfig.githubRepo}
                target="_blank"
                rel="noreferrer"
              >
                Open GitHub repo
                <GitHubMark />
              </ResourceLink>
            </div>
          </div>

          <div className="divide-y divide-black/12 border-y border-black/12">
            {audiences.map((audience) => (
              <div key={audience.title} className="py-5">
                <h2 className="text-lg font-semibold">{audience.title}</h2>
                <p className="mt-2 text-sm leading-6 text-black/62">
                  {audience.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-6 pb-14 md:grid-cols-2">
        {resourceGroups.map((resource) => (
          <ResourceLink
            key={resource.title}
            className="rounded-lg border border-black/12 p-5 transition-colors hover:border-[#155fac]"
            eventName="github_resource_clicked"
            eventProperties={{ location: "resources_library", resource: resource.title }}
            href={resource.href}
            target="_blank"
            rel="noreferrer"
          >
            <h2 className="text-2xl font-semibold">{resource.title}</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-black/62">
              {resource.description}
            </p>
          </ResourceLink>
        ))}
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 border-y border-black/12 px-6 py-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <h2 className="text-3xl font-semibold leading-tight">
            Visual widgets worth surfacing.
          </h2>
          <p className="mt-4 leading-7 text-black/62">
            The repo includes small animated explanations that make abstract
            ideas more inspectable before a reader opens a notebook.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {learningWidgets.map((widget) => (
            <ResourceLink
              key={widget.title}
              className="group rounded-lg border border-black/12 p-4 transition-colors hover:border-[#155fac]"
              eventName="learning_widget_clicked"
              eventProperties={{ location: "resources_widgets", widget: widget.title }}
              href={widget.href}
              target="_blank"
              rel="noreferrer"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-[#fbfbfb]">
                <Image
                  className="object-contain p-3"
                  src={widget.image}
                  alt={`${widget.title} visualization`}
                  fill
                  sizes="(min-width: 768px) 260px, 100vw"
                  unoptimized
                />
              </div>
              <p className="mt-4 text-sm font-medium text-[#155fac]">
                {widget.topic}
              </p>
              <h3 className="mt-1 text-lg font-semibold group-hover:text-[#155fac]">
                {widget.title}
              </h3>
            </ResourceLink>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-3xl font-semibold leading-tight">Study roadmaps</h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {studyRoadmaps.map((roadmap) => (
            <article key={roadmap.title} className="rounded-lg border border-black/12 p-4">
              <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-[#fbfbfb]">
                <Image
                  className="object-contain p-3"
                  src={roadmap.image}
                  alt={roadmap.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 250px, (min-width: 768px) 50vw, 100vw"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{roadmap.title}</h3>
              <p className="mt-2 text-sm leading-6 text-black/62">
                {roadmap.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-4 border-t border-black/12 pt-8 md:grid-cols-4">
          {testimonials.map((person) => (
            <article key={person.name} className="flex gap-4">
              <Image
                className="size-12 shrink-0 rounded-full object-cover"
                src={person.image}
                alt={person.name}
                width={120}
                height={120}
              />
              <div>
                <h3 className="text-sm font-semibold">{person.name}</h3>
                <p className="mt-1 text-xs leading-5 text-black/50">{person.role}</p>
                <p className="mt-2 text-sm leading-6 text-black/62">
                  {person.summary}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
