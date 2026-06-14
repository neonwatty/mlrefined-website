import Image from "next/image";
import Link from "next/link";

import { ResourceLink } from "@/components/analytics/resource-link";
import { GitHubMark } from "@/components/github-mark";
import { SiteHeader } from "@/components/site-header";
import { chapterTracks, resourceGroups, universityLogos } from "@/content/book";
import { siteConfig } from "@/lib/site";

const featuredTrack = chapterTracks[1];

const resourceIconClasses = [
  "border-[#f5b31b] text-[#f5b31b]",
  "border-[#1f65c1] text-[#1f65c1]",
  "border-black/55 text-black/55",
  "border-[#1f65c1] text-[#1f65c1]",
];

function ResourceGlyph({ index }: { index: number }) {
  const isCode = index === 1;
  const isPencil = index === 2;

  return (
    <span
      className={`flex size-6 items-center justify-center rounded border ${resourceIconClasses[index]}`}
    >
      {isCode ? (
        <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 16 16">
          <path
            d="m6 5-3 3 3 3M10 5l3 3-3 3"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
        </svg>
      ) : isPencil ? (
        <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 16 16">
          <path
            d="m10.9 2.7 2.4 2.4-7 7-3.1.7.7-3.1 7-7Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      ) : (
        <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 16 16">
          <path
            d="M4.5 2.5h5L12 5v8.5H4.5v-11Z"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="1.4"
          />
          <path
            d="M6 7h4M6 9.5h4"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.4"
          />
        </svg>
      )}
    </span>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#0b0b0b]">
      <SiteHeader activeHref="/" />

      <section className="mx-auto grid max-w-6xl gap-12 px-6 pb-8 pt-12 md:pt-14 lg:grid-cols-[1fr_360px] lg:items-start">
        <div>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-normal md:text-7xl">
            Machine Learning Refined
          </h1>
          <p className="mt-5 max-w-2xl text-xl font-semibold leading-tight md:text-2xl">
            Foundations, Algorithms, and Applications
          </p>
          <p className="mt-7 max-w-xl text-lg leading-8 text-black/68">
            A university textbook and open resource collection for learning
            machine learning from intuition and geometry through derivation and
            hands-on Python implementation.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <ResourceLink
              className="inline-flex h-12 items-center justify-center rounded-md bg-[#f6b91a] px-6 text-sm font-semibold text-black shadow-sm shadow-[#f6b91a]/20 transition-colors hover:bg-[#f0ad00]"
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
              className="inline-flex h-12 items-center justify-center gap-3 rounded-md border border-black/35 px-6 text-sm font-semibold transition-colors hover:bg-black/[0.03]"
              eventName="github_resource_clicked"
              eventProperties={{ location: "home_hero", resource: "repo" }}
              href={siteConfig.githubRepo}
              target="_blank"
              rel="noreferrer"
            >
              View GitHub repo
              <GitHubMark />
            </ResourceLink>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[330px]">
          <Image
            className="h-auto w-full rounded-md shadow-2xl shadow-black/20"
            src="/book-cover-2nd.png"
            alt="Machine Learning Refined second edition book cover"
            width={760}
            height={1000}
            priority
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl border-y border-black/12 px-6 py-5">
        <p className="text-center text-sm font-medium text-black/82 md:text-base">
          Used as a reference text at 100+ universities and colleges.
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-11 gap-y-5">
          {universityLogos.slice(0, 6).map((logo) => (
            <Image
              key={logo.name}
              className="max-h-8 w-auto object-contain opacity-75 grayscale"
              src={logo.image}
              alt={`${logo.name} logo`}
              width={logo.width}
              height={logo.height}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-9 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
        <div className="overflow-hidden rounded-lg border border-black/15 bg-white shadow-sm shadow-black/5">
          <div className="bg-[#fbfbfb] p-6">
            <Image
              className="h-auto w-full rounded-md"
              src={featuredTrack.image}
              alt={featuredTrack.imageAlt}
              width={900}
              height={560}
              unoptimized
            />
          </div>
          <div className="flex items-center gap-4 border-t border-black/10 px-5 py-3 text-sm text-black/75">
            <span aria-hidden="true" className="text-lg leading-none">
              ▶
            </span>
            <span>0:04 / 0:12</span>
            <div className="h-1 flex-1 rounded-full bg-black/15">
              <div className="h-full w-[34%] rounded-full bg-[#1f65c1]" />
            </div>
            <span>1x</span>
          </div>
        </div>

        <div className="lg:pt-4">
          <h2 className="max-w-xl text-3xl font-semibold leading-tight md:text-4xl">
            Visual notes for learning the ideas, not just using the tools.
          </h2>
          <p className="mt-4 max-w-xl leading-7 text-black/62">
            Derivations, geometric intuition, and interactive visualizations
            that build real understanding.
          </p>

          <div className="mt-7 divide-y divide-black/12 border-y border-black/12">
            {resourceGroups.slice(0, 4).map((resource, index) => (
              <ResourceLink
                key={resource.title}
                className="group flex items-center gap-4 py-4 text-black transition-colors hover:text-[#155fac]"
                eventName="github_resource_clicked"
                eventProperties={{
                  location: "home_visual_resources",
                  resource: resource.title,
                }}
                href={resource.href}
                target="_blank"
                rel="noreferrer"
              >
                <ResourceGlyph index={index} />
                <span className="flex-1 font-medium">{resource.title}</span>
                <span
                  aria-hidden="true"
                  className="text-xl leading-none text-black/55 transition-transform group-hover:translate-x-1"
                >
                  ›
                </span>
              </ResourceLink>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto flex max-w-6xl items-center gap-5 px-6 pb-9">
        <div className="h-px flex-1 bg-black/10" />
        <Link
          className="inline-flex items-center gap-2 text-sm font-medium text-black transition-colors hover:text-[#155fac]"
          href="/chapters"
        >
          Continue to chapters
          <span aria-hidden="true">⌄</span>
        </Link>
        <div className="h-px flex-1 bg-black/10" />
      </div>
    </main>
  );
}
