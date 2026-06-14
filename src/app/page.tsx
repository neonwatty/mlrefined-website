import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { ResourceLink } from "@/components/analytics/resource-link";
import {
  audiencePaths,
  bookStats,
  chapterTracks,
  learningWidgets,
  pedagogy,
  purchaseLinks,
  resourceGroups,
  studyRoadmaps,
  testimonials,
  universityLogos,
} from "@/content/book";
import { primaryNav, siteConfig } from "@/lib/site";

function SectionHeader({
  title,
  description,
  action,
  tone = "light",
}: {
  title: string;
  description: string;
  action?: ReactNode;
  tone?: "light" | "dark";
}) {
  const titleClass = tone === "dark" ? "text-white" : "text-[#141414]";
  const descriptionClass = tone === "dark" ? "text-white/65" : "text-black/60";

  return (
    <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
      <div>
        <h2
          className={`max-w-3xl text-3xl font-semibold leading-tight md:text-4xl ${titleClass}`}
        >
          {title}
        </h2>
        <p className={`mt-4 max-w-2xl leading-7 ${descriptionClass}`}>
          {description}
        </p>
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbfbf8] text-[#141414]">
      <header className="border-b border-black/10 bg-[#fbfbf8]/95">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link className="font-semibold" href="/">
            Machine Learning Refined
          </Link>
          <div className="hidden gap-6 text-sm text-black/65 md:flex">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                className="transition-colors hover:text-black"
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-14 lg:min-h-[720px] lg:grid-cols-[1fr_390px] lg:items-center">
          <div>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[0.96] tracking-normal md:text-7xl">
              Machine Learning Refined
            </h1>
            <h2 className="mt-5 max-w-2xl text-2xl font-medium leading-tight text-black/75 md:text-3xl">
              Foundations, Algorithms, and Applications
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/65">
              A university textbook and open resource collection for building
              machine learning understanding from intuition and geometry through
              derivation and hands-on Python implementation.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ResourceLink
                className="inline-flex h-12 items-center justify-center rounded-md bg-black px-5 text-sm font-medium text-white transition-colors hover:bg-black/85"
                eventName="chapter_pdf_clicked"
                eventProperties={{
                  location: "home_hero",
                  resource: "chapter_pdfs",
                }}
                href="https://github.com/neonwatty/machine-learning-refined/tree/main/chapter_pdfs"
                target="_blank"
                rel="noreferrer"
              >
                Download chapter PDFs
              </ResourceLink>
              <ResourceLink
                className="inline-flex h-12 items-center justify-center rounded-md border border-black/15 bg-white px-5 text-sm font-medium transition-colors hover:bg-black/[0.03]"
                eventName="github_resource_clicked"
                eventProperties={{ location: "home_hero", resource: "repo" }}
                href={siteConfig.githubRepo}
                target="_blank"
                rel="noreferrer"
              >
                View GitHub repo
              </ResourceLink>
            </div>

            <div className="mt-11 grid max-w-2xl grid-cols-2 gap-5 md:grid-cols-4">
              {bookStats.map((stat) => (
                <div key={stat.label} className="border-t border-black/15 pt-4">
                  <p className="text-3xl font-semibold">{stat.value}</p>
                  <p className="mt-1 text-sm leading-5 text-black/55">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto w-full max-w-[390px]">
            <div className="rounded-lg border border-black/10 bg-white p-4 shadow-2xl shadow-black/10">
              <Image
                className="h-auto w-full rounded-md"
                src="/book-cover-2nd.png"
                alt="Machine Learning Refined second edition book cover"
                width={760}
                height={1000}
                priority
              />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {purchaseLinks.slice(0, 2).map((link) => (
                <ResourceLink
                  key={link.title}
                  className="inline-flex min-h-12 items-center justify-center rounded-md border border-black/15 bg-white px-3 text-center text-sm font-medium leading-5 transition-colors hover:bg-black/[0.03]"
                  eventName="purchase_link_clicked"
                  eventProperties={{
                    location: "home_cover",
                    retailer: link.title,
                  }}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.title}
                </ResourceLink>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#07101f] text-white">
        <div className="mx-auto grid max-w-6xl gap-9 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <h2 className="max-w-xl text-3xl font-semibold leading-tight md:text-4xl">
              Mastery means seeing the same idea four ways.
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-white/65">
              The book is organized around a durable learning loop: first
              intuition, then visualization, then mathematical derivation, then
              direct implementation.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {pedagogy.map((item, index) => (
              <div
                key={item.title}
                className="border-t border-white/15 pt-5"
              >
                <p className="font-mono text-sm text-[#f3d44e]">
                  0{index + 1}
                </p>
                <h3 className="mt-3 text-lg font-medium">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/60">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeader
          title="Used in courses around the world."
          description="The current site notes adoption as a reference text in more than 100 universities and colleges. This proof layer brings that story into the new experience."
          action={
            <p className="text-sm font-medium text-black/55">
              Social proof from the current site
            </p>
          }
        />

        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-9">
          {universityLogos.map((logo) => (
            <div
              key={logo.name}
              className="flex h-24 items-center justify-center rounded-lg border border-black/10 bg-white p-4"
            >
              <Image
                className="max-h-14 w-auto object-contain"
                src={logo.image}
                alt={`${logo.name} logo`}
                width={logo.width}
                height={logo.height}
              />
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-lg border border-black/10 bg-white p-5"
            >
              <div className="flex items-center gap-3">
                <Image
                  className="size-12 rounded-full object-cover"
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={120}
                  height={120}
                />
                <div>
                  <h3 className="text-sm font-semibold">{testimonial.name}</h3>
                  <p className="mt-1 text-xs leading-5 text-black/50">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-black/65">
                {testimonial.summary}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-black/10 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeader
            title="Start from the path that fits."
            description="The current site and repo already serve several audiences. The new site should make each path visible, measurable, and easy to improve."
            action={
              <Link className="text-sm font-medium" href="/resources">
                Browse resources
              </Link>
            }
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {audiencePaths.map((path) => (
              <article
                key={path.title}
                className="rounded-lg border border-black/10 bg-[#fbfbf8] p-6"
              >
                <h3 className="text-xl font-semibold">{path.title}</h3>
                <p className="mt-3 text-sm leading-6 text-black/60">
                  {path.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeader
          title="Chapter tracks with the visuals still attached."
          description="The repo already contains the strongest evidence for the book's teaching style: notebooks, animations, chapter PDFs, exercises, and roadmaps. These tracks turn that material into browsable entry points."
        />
        <div className="mt-9 grid gap-5 lg:grid-cols-3">
          {chapterTracks.map((track) => (
            <ResourceLink
              key={track.title}
              className="group overflow-hidden rounded-lg border border-black/10 bg-white"
              eventName="github_resource_clicked"
              eventProperties={{
                location: "chapter_tracks",
                resource: track.title,
              }}
              href={track.href}
              target="_blank"
              rel="noreferrer"
            >
              <div className="aspect-[4/3] bg-[#f7f8fa] p-3">
                <Image
                  className="h-full w-full rounded-md object-contain"
                  src={track.image}
                  alt={track.imageAlt}
                  width={640}
                  height={480}
                  unoptimized
                />
              </div>
              <div className="p-5">
                <p className="font-mono text-sm text-black/45">
                  {track.range}
                </p>
                <h3 className="mt-2 text-xl font-semibold transition-colors group-hover:text-[#245b90]">
                  {track.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-black/60">
                  {track.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {track.topics.map((topic) => (
                    <span
                      key={topic}
                      className="rounded-full border border-black/10 px-3 py-1 text-xs text-black/55"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </ResourceLink>
          ))}
        </div>
      </section>

      <section className="bg-[#07101f] text-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeader
            title="The notes are visual, interactive, and runnable."
            description="Notebook widgets make abstract ideas tangible: decision boundaries, validation splits, optimization geometry, feature transformations, and model families."
            tone="dark"
            action={
              <ResourceLink
                className="text-sm font-medium text-white"
                eventName="github_resource_clicked"
                eventProperties={{ location: "widget_gallery", resource: "notes" }}
                href="https://github.com/neonwatty/machine-learning-refined/tree/main/notes"
                target="_blank"
                rel="noreferrer"
              >
                View all notes
              </ResourceLink>
            }
          />
          <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {learningWidgets.map((widget) => (
              <ResourceLink
                key={widget.title}
                className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.04]"
                eventName="github_resource_clicked"
                eventProperties={{
                  location: "widget_gallery",
                  resource: widget.title,
                }}
                href={widget.href}
                target="_blank"
                rel="noreferrer"
              >
                <div className="aspect-[4/3] bg-white p-2">
                  <Image
                    className="h-full w-full rounded-md object-contain"
                    src={widget.image}
                    alt={`${widget.title} animated widget`}
                    width={640}
                    height={480}
                    unoptimized
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-[#f3d44e]">
                    {widget.topic}
                  </p>
                  <h3 className="mt-2 font-medium">{widget.title}</h3>
                </div>
              </ResourceLink>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeader
          title="Roadmaps for courses and self-study."
          description="The README already contains four suggested paths through the material. Surfacing these helps learners and instructors choose a route before they ever touch the repo."
        />
        <div className="mt-9 grid gap-5 md:grid-cols-2">
          {studyRoadmaps.map((roadmap) => (
            <article
              key={roadmap.title}
              className="overflow-hidden rounded-lg border border-black/10 bg-white"
            >
              <div className="aspect-[16/10] bg-[#f7f8fa] p-4">
                <Image
                  className="h-full w-full rounded-md object-contain"
                  src={roadmap.image}
                  alt={roadmap.imageAlt}
                  width={1200}
                  height={800}
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">{roadmap.title}</h3>
                <p className="mt-2 text-sm leading-6 text-black/60">
                  {roadmap.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-black/10 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeader
            title="Open teaching and study resources."
            description="The GitHub repo is more than a code dump. It contains the raw material for a searchable content library with chapter pages, runnable notes, exercises, slides, and study roadmaps."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {resourceGroups.map((resource) => (
              <ResourceLink
                key={resource.title}
                className="rounded-lg border border-black/10 bg-[#fbfbf8] p-5 transition-colors hover:bg-white"
                eventName="github_resource_clicked"
                eventProperties={{
                  location: "resource_foundation",
                  resource: resource.title,
                }}
                href={resource.href}
                target="_blank"
                rel="noreferrer"
              >
                <h3 className="font-medium">{resource.title}</h3>
                <p className="mt-2 text-sm leading-6 text-black/60">
                  {resource.description}
                </p>
              </ResourceLink>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
