import Image from "next/image";
import Link from "next/link";

import { ResourceLink } from "@/components/analytics/resource-link";
import {
  chapterTracks,
  purchaseLinks,
  resourceGroups,
  studyRoadmaps,
  testimonials,
  universityLogos,
} from "@/content/book";
import { primaryNav, siteConfig } from "@/lib/site";

const featuredTrack = chapterTracks[1];
const featuredRoadmap = studyRoadmaps[1];
const featuredQuote = testimonials[1];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#111111]">
      <header className="border-b border-black/10 bg-white">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link className="text-sm font-semibold tracking-normal" href="/">
            Machine Learning Refined
          </Link>
          <div className="hidden items-center gap-7 text-sm text-black/55 md:flex">
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

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:py-20 lg:grid-cols-[1fr_360px] lg:items-center">
        <div>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[0.97] tracking-normal md:text-7xl">
            Machine Learning Refined
          </h1>
          <p className="mt-5 max-w-2xl text-2xl leading-tight text-black/75 md:text-3xl">
            Foundations, Algorithms, and Applications
          </p>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-black/62">
            A university textbook and open resource collection for learning
            machine learning from intuition and geometry through derivation and
            hands-on Python implementation.
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
              className="inline-flex h-12 items-center justify-center rounded-md border border-black/15 px-5 text-sm font-medium transition-colors hover:bg-black/[0.03]"
              eventName="github_resource_clicked"
              eventProperties={{ location: "home_hero", resource: "repo" }}
              href={siteConfig.githubRepo}
              target="_blank"
              rel="noreferrer"
            >
              View GitHub repo
            </ResourceLink>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[360px]">
          <Image
            className="h-auto w-full rounded-md shadow-2xl shadow-black/15"
            src="/book-cover-2nd.png"
            alt="Machine Learning Refined second edition book cover"
            width={760}
            height={1000}
            priority
          />
          <div className="mt-4 grid grid-cols-2 gap-3">
            {purchaseLinks.slice(0, 2).map((link) => (
              <ResourceLink
                key={link.title}
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-black/15 px-3 text-center text-sm font-medium leading-5 transition-colors hover:bg-black/[0.03]"
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
      </section>

      <section className="border-y border-black/10 bg-[#fafafa]">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold text-black/70">
                Used as a reference text at 100+ universities and colleges.
              </p>
              <div className="mt-5 flex items-center gap-3">
                <Image
                  className="size-10 rounded-full object-cover"
                  src={featuredQuote.image}
                  alt={featuredQuote.name}
                  width={120}
                  height={120}
                />
                <div>
                  <p className="text-sm font-medium">{featuredQuote.name}</p>
                  <p className="text-xs leading-5 text-black/50">
                    {featuredQuote.role}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="max-w-3xl text-lg leading-8 text-black/65">
                {featuredQuote.summary}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-5">
                {universityLogos.slice(0, 6).map((logo) => (
                  <Image
                    key={logo.name}
                    className="max-h-9 w-auto object-contain opacity-65 grayscale"
                    src={logo.image}
                    alt={`${logo.name} logo`}
                    width={logo.width}
                    height={logo.height}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="overflow-hidden rounded-lg border border-black/10 bg-[#f7f8fa] p-4">
          <Image
            className="h-auto w-full rounded-md"
            src={featuredTrack.image}
            alt={featuredTrack.imageAlt}
            width={900}
            height={560}
            unoptimized
          />
        </div>
        <div>
          <h2 className="max-w-xl text-3xl font-semibold leading-tight md:text-4xl">
            Visual notes for learning the ideas, not just using the tools.
          </h2>
          <p className="mt-5 max-w-xl leading-7 text-black/62">
            The supporting repo includes notebooks, animations, exercises,
            slides, and roadmaps. The new site can expose that material without
            making the homepage carry all of it.
          </p>
          <div className="mt-8 divide-y divide-black/10 border-y border-black/10">
            {chapterTracks.map((track) => (
              <ResourceLink
                key={track.title}
                className="group grid gap-1 py-4 md:grid-cols-[150px_1fr]"
                eventName="github_resource_clicked"
                eventProperties={{
                  location: "home_chapter_tracks",
                  resource: track.title,
                }}
                href={track.href}
                target="_blank"
                rel="noreferrer"
              >
                <p className="font-mono text-sm text-black/45">
                  {track.range}
                </p>
                <div>
                  <h3 className="font-medium transition-colors group-hover:text-[#245b90]">
                    {track.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-black/55">
                    {track.description}
                  </p>
                </div>
              </ResourceLink>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/10">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:py-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="max-w-lg text-3xl font-semibold leading-tight md:text-4xl">
              A clear route through a deep resource library.
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-black/62">
              Keep the homepage calm, then let focused pages do the heavier
              lifting for chapters, notebooks, slides, exercises, and SEO.
            </p>
            <div className="mt-8 rounded-lg border border-black/10 bg-[#fafafa] p-4">
              <div className="aspect-[16/10]">
                <Image
                  className="h-full w-full rounded-md object-contain"
                  src={featuredRoadmap.image}
                  alt={featuredRoadmap.imageAlt}
                  width={1200}
                  height={800}
                />
              </div>
              <p className="mt-4 text-sm font-medium">{featuredRoadmap.title}</p>
              <p className="mt-1 text-sm leading-6 text-black/55">
                {featuredRoadmap.description}
              </p>
            </div>
          </div>

          <div className="lg:pt-2">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-black/45">
              Resources
            </p>
            <div className="mt-5 divide-y divide-black/10 border-y border-black/10">
              {resourceGroups.slice(0, 4).map((resource) => (
                <ResourceLink
                  key={resource.title}
                  className="block py-5 transition-colors hover:bg-black/[0.02]"
                  eventName="github_resource_clicked"
                  eventProperties={{
                    location: "home_resource_list",
                    resource: resource.title,
                  }}
                  href={resource.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <h3 className="font-medium">{resource.title}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-black/58">
                    {resource.description}
                  </p>
                </ResourceLink>
              ))}
            </div>
            <Link
              className="mt-6 inline-flex text-sm font-medium text-black transition-colors hover:text-[#245b90]"
              href="/resources"
            >
              Browse all resources
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 bg-[#111111] text-white">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 px-6 py-10 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-semibold">
              Start with the book. Follow the code when you need it.
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/60">
              The homepage now points to the strongest next steps without trying
              to explain the entire ecosystem at once.
            </p>
          </div>
          <ResourceLink
            className="inline-flex h-11 shrink-0 items-center justify-center rounded-md bg-white px-4 text-sm font-medium text-black transition-colors hover:bg-white/90"
            eventName="github_resource_clicked"
            eventProperties={{ location: "home_footer", resource: "repo" }}
            href={siteConfig.githubRepo}
            target="_blank"
            rel="noreferrer"
          >
            Open the repo
          </ResourceLink>
        </div>
      </section>
    </main>
  );
}
