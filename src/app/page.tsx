import Image from "next/image";
import Link from "next/link";

import {
  audiencePaths,
  bookStats,
  chapters,
  pedagogy,
  purchaseLinks,
  resourceGroups,
} from "@/content/book";
import { ResourceLink } from "@/components/analytics/resource-link";
import { primaryNav, siteConfig } from "@/lib/site";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-black/10">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link className="font-semibold" href="/">
            Machine Learning Refined
          </Link>
          <div className="hidden gap-6 text-sm text-black/65 md:flex">
            {primaryNav.map((item) => (
              <Link key={item.href} className="hover:text-black" href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[1fr_380px] lg:items-center">
        <div>
          <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-normal md:text-7xl">
            Machine Learning Refined
          </h1>
          <h2 className="mt-4 text-2xl font-medium text-black/75 md:text-3xl">
            Foundations, Algorithms, and Applications
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-black/65">
            A university textbook and open resource collection for building
            machine learning understanding from intuition and geometry through
            derivation and hands-on Python implementation.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ResourceLink
              className="inline-flex h-12 items-center justify-center rounded-md bg-black px-5 text-sm font-medium text-white"
              eventName="chapter_pdf_clicked"
              eventProperties={{ location: "home_hero", resource: "chapter_pdfs" }}
              href="https://github.com/neonwatty/machine-learning-refined/tree/main/chapter_pdfs"
              target="_blank"
              rel="noreferrer"
            >
              Download chapter PDFs
            </ResourceLink>
            <ResourceLink
              className="inline-flex h-12 items-center justify-center rounded-md border border-black/15 px-5 text-sm font-medium"
              eventName="github_resource_clicked"
              eventProperties={{ location: "home_hero", resource: "repo" }}
              href={siteConfig.githubRepo}
              target="_blank"
              rel="noreferrer"
            >
              View GitHub repo
            </ResourceLink>
          </div>
          <div className="mt-10 grid max-w-2xl grid-cols-2 gap-5 md:grid-cols-4">
            {bookStats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-semibold">{stat.value}</p>
                <p className="mt-1 text-sm leading-5 text-black/55">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto w-full max-w-[380px]">
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
          <div className="mt-5 grid grid-cols-2 gap-3">
            {purchaseLinks.slice(0, 2).map((link) => (
              <ResourceLink
                key={link.title}
                className="inline-flex h-11 items-center justify-center rounded-md border border-black/15 px-3 text-center text-sm font-medium"
                eventName="purchase_link_clicked"
                eventProperties={{ location: "home_cover", retailer: link.title }}
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

      <section className="border-y border-black/10 bg-black text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-semibold">
              Mastery means seeing the same idea four ways.
            </h2>
            <p className="mt-4 leading-7 text-white/65">
              The book is organized around a durable learning loop: first
              intuition, then visualization, then mathematical derivation, then
              direct implementation.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {pedagogy.map((item) => (
              <div key={item.title} className="border-t border-white/15 pt-5">
                <h3 className="text-lg font-medium">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/60">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <h2 className="text-3xl font-semibold">Start from the path that fits.</h2>
              <p className="mt-3 max-w-2xl leading-7 text-black/60">
                The current site and repo already serve several audiences. The
                new site should make each path visible, measurable, and easy to
                improve.
              </p>
            </div>
            <Link className="text-sm font-medium" href="/resources">
              Browse resources
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {audiencePaths.map((path) => (
              <article key={path.title} className="rounded-lg border border-black/10 bg-white p-6">
                <h3 className="text-xl font-semibold">{path.title}</h3>
                <p className="mt-3 text-sm leading-6 text-black/60">
                  {path.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-3xl font-semibold">Featured chapter tracks</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {chapters.slice(0, 3).map((chapter) => (
              <article key={chapter.slug} className="rounded-lg border border-black/10 bg-white p-6">
              <p className="text-sm text-black/50">Chapter {chapter.number}</p>
              <h2 className="mt-3 text-xl font-semibold">{chapter.title}</h2>
              <p className="mt-3 text-sm leading-6 text-black/60">
                {chapter.summary}
              </p>
            </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-3xl font-semibold">Open teaching and study resources</h2>
        <p className="mt-3 max-w-2xl leading-7 text-black/60">
          The GitHub repo is more than a code dump. It contains the raw material
          for a searchable content library with chapter pages, runnable notes,
          exercises, slides, and study roadmaps.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {resourceGroups.map((resource) => (
            <ResourceLink
              key={resource.title}
              className="rounded-lg border border-black/10 p-5 transition-colors hover:bg-black/[0.02]"
              eventName="github_resource_clicked"
              eventProperties={{ location: "resource_foundation", resource: resource.title }}
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
      </section>
    </main>
  );
}
