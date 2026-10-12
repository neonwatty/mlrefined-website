import Link from "next/link";

import { ResourceSetup } from "@/components/resources/resource-setup";
import { ResourceLink } from "@/components/analytics/resource-link";
import { TrackedLink } from "@/components/analytics/tracked-link";
import { BookSideRail } from "@/components/site/book-side-rail";
import { PageHeader } from "@/components/site/page-header";
import { bookLinks, resourceGroups } from "@/content/book";
import { createPageMetadata, siteConfig } from "@/lib/site";

const resourceCues = {
  "Chapter PDFs": {
    count: "PDFs · GitHub index",
    action: "Choose a chapter PDF",
    href: bookLinks.pdfs,
    cue: "Best for reading offline or assigning chapter excerpts.",
  },
  "Colab and Jupyter notebooks": {
    count: "Python · GitHub",
    action: "Browse Jupyter notebooks",
    href: bookLinks.notes,
    cue: "Best for moving from the page into runnable examples.",
  },
  Exercises: {
    count: "Practice · GitHub",
    action: "Browse exercises and datasets",
    href: bookLinks.exercises,
    cue: "Best for homework, labs, and self-checks.",
  },
  "Slides and roadmaps": {
    count: "PPTX · GitHub index",
    action: "Choose lecture slides",
    href: bookLinks.slides,
    cue: "Best for planning a syllabus or lecture sequence.",
  },
} as const;

export const metadata = createPageMetadata({
  title: "Resources: PDFs, Notebooks & Slides",
  description:
    "Get official Machine Learning Refined chapter PDFs, Python notebooks, exercises, and slides. Follow setup instructions for Google Colab or local Jupyter.",
  path: "/resources",
  keywords: [
    "Machine Learning Refined resources",
    "machine learning Python notebooks",
    "machine learning exercises",
    "machine learning PDFs",
    "Colab machine learning notebooks",
    "machine learning slides",
  ],
});

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf4] text-[#071326]">
      <PageHeader activeHref="/resources" />
      <div className="mx-auto grid w-[min(1320px,100%)] gap-5 px-5 py-9 md:px-8 md:py-16 lg:grid-cols-[250px_minmax(0,1fr)]">
        <BookSideRail
          description="Use the resource index when you already know which PDFs, notebooks, exercises, slides, or roadmaps you need."
          eyebrow="Resource context"
          eventLocation="resources_side_rail"
          links={[
            {
              href: bookLinks.repo,
              label: "Source repository",
              note: "Browse the complete resource collection.",
              resource: "repo",
            },
            {
              href: bookLinks.notesAssets,
              label: "Figure assets",
              note: "Open the companion visual asset repository.",
              resource: "notes_assets",
            },
            {
              href: bookLinks.roadmapGuide,
              label: "Roadmap guide",
              note: "See how to use the book paths.",
              resource: "roadmap_guide",
            },
          ]}
        />
        <div className="min-w-0">
          <p className="mb-2 text-xs font-black uppercase tracking-[0.16em] text-[#8a6519]">
            Official second-edition resources
          </p>
          <h1 className="font-serif text-4xl font-black leading-tight text-[#0b2545] sm:text-5xl">
            PDFs, notebooks, and setup instructions
          </h1>
          <p className="mt-3 max-w-3xl text-base leading-7 text-[#526070] md:mt-4 md:text-lg md:leading-8">
            Get the official Machine Learning Refined downloads and choose how to
            run the Python notebooks. Start with a resource below, or browse{" "}
            <Link className="font-bold text-[#164b8f] underline" href="/chapters">
              chapters by topic
            </Link>
            . The PDF and slide indexes on GitHub link to the authors’ Dropbox
            downloads; notebooks and exercises live in the source repository.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {resourceGroups.map((resource) => {
              const cue =
                resourceCues[resource.title as keyof typeof resourceCues];

              return (
                <ResourceLink
                  key={resource.title}
                  className="group rounded-lg border border-[#ddcfad] bg-white p-5 shadow-lg shadow-[#071326]/5 transition-all hover:-translate-y-0.5 hover:border-[#164b8f]/45 hover:shadow-[#071326]/10"
                  eventName="github_resource_clicked"
                  eventProperties={{
                    location: "resources_page",
                    resource: resource.title,
                  }}
                  href={cue?.href ?? resource.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {cue ? (
                    <span className="mb-3 inline-flex rounded-md bg-[#f7fbff] px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-[#164b8f]">
                      {cue.count}
                    </span>
                  ) : null}
                  <h2 className="font-serif text-2xl font-black text-[#0b2545]">
                    {resource.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-[#526070]">
                    {resource.description}
                  </p>
                  {cue ? (
                    <p className="mt-3 text-sm font-black leading-6 text-[#0b2545]">
                      {cue.cue}
                    </p>
                  ) : null}
                  <span className="mt-4 inline-flex text-sm font-black text-[#164b8f] transition-transform group-hover:translate-x-1">
                    {cue?.action ?? "Open resource"}
                  </span>
                </ResourceLink>
              );
            })}
          </div>
          <ResourceSetup />
          <section
            aria-labelledby="book-identity"
            className="mt-6 max-w-4xl rounded-xl border border-[#ddcfad] bg-[#fffdf8] p-5"
          >
            <p className="text-xs font-black uppercase tracking-[0.14em] text-[#8a6519]">
              Book identity
            </p>
            <h2
              className="mt-2 font-serif text-2xl font-black text-[#0b2545]"
              id="book-identity"
            >
              {siteConfig.bookTitle}
            </h2>
            <p className="mt-2 text-sm leading-6 text-[#526070]">
              Second edition by {siteConfig.authors.join(", ")}, published by
              Cambridge University Press on March 12, 2020.
            </p>
            <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-3">
              <div>
                <dt className="font-black text-[#0b2545]">Print ISBN</dt>
                <dd className="mt-1 text-[#526070]">{siteConfig.isbn}</dd>
              </div>
              <div>
                <dt className="font-black text-[#0b2545]">Digital ISBN</dt>
                <dd className="mt-1 text-[#526070]">{siteConfig.digitalIsbn}</dd>
              </div>
              <div>
                <dt className="font-black text-[#0b2545]">DOI</dt>
                <dd className="mt-1">
                  <ResourceLink
                    className="font-bold text-[#164b8f] hover:underline"
                    eventName="book_entity_clicked"
                    eventProperties={{
                      location: "resources_page",
                      resource: "doi",
                    }}
                    href={siteConfig.doiUrl}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {siteConfig.doi}
                  </ResourceLink>
                </dd>
              </div>
            </dl>
          </section>
          <div className="mt-6 flex flex-wrap gap-3">
            <TrackedLink
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#164b8f]/40 bg-[#f7fbff] px-5 text-sm font-black text-[#164b8f] transition-colors hover:bg-[#eaf4ff]"
              eventName="learning_guide_opened"
              eventProperties={{ location: "resources_page", resource: "learn_hub" }}
              href="/learn"
            >
              Start with learning guides
            </TrackedLink>
            <ResourceLink
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#c79222] bg-[#c79222] px-5 text-sm font-black text-[#06172d] transition-colors hover:bg-[#d7a02b]"
              eventName="github_resource_clicked"
              eventProperties={{ location: "resources_page", resource: "canonical_repo" }}
              href={bookLinks.repo}
              rel="noreferrer"
              target="_blank"
            >
              Open source repository
            </ResourceLink>
            <ResourceLink
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#c79222]/50 bg-white px-5 text-sm font-black text-[#164b8f] transition-colors hover:bg-[#fff7e7]"
              eventName="github_resource_clicked"
              eventProperties={{ location: "resources_page", resource: "notes_assets_repo" }}
              href={bookLinks.notesAssets}
              rel="noreferrer"
              target="_blank"
            >
              Open figure assets
            </ResourceLink>
          </div>

        </div>
      </div>
    </main>
  );
}
