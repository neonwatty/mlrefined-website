import Link from "next/link";

import { chapters, resourceGroups } from "@/content/book";
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

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-normal md:text-6xl">
            Learn machine learning from first principles.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-black/65">
            A modern home for the Machine Learning Refined book, notebooks,
            exercises, chapter PDFs, and instructor resources, built to make
            content easier to find, measure, and improve.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              className="inline-flex h-12 items-center justify-center rounded-md bg-black px-5 text-sm font-medium text-white"
              href="/chapters"
            >
              Explore chapters
            </Link>
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
        </div>

        <div className="rounded-lg border border-black/10 bg-black p-6 text-white">
          <p className="text-sm uppercase tracking-[0.18em] text-white/55">
            Build focus
          </p>
          <div className="mt-8 grid gap-5">
            {[
              ["SEO control", "Metadata, sitemap, structured routes"],
              ["Content graph", "Chapters, notebooks, PDFs, exercises"],
              ["Analytics loop", "PostHog events plus Search Console data"],
            ].map(([title, detail]) => (
              <div key={title} className="border-t border-white/15 pt-5">
                <h2 className="text-lg font-medium">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-white/60">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 bg-black/[0.02]">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-14 md:grid-cols-3">
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
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-3xl font-semibold">Resource foundation</h2>
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
