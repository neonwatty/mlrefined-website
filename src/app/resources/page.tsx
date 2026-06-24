import { ResourceLink } from "@/components/analytics/resource-link";
import { PageHeader } from "@/components/site/page-header";
import { bookLinks, resourceGroups } from "@/content/book";
import { createPageMetadata } from "@/lib/site";

const resourceCues = {
  "Chapter PDFs": {
    count: "PDFs",
    cue: "Best for reading offline or assigning chapter excerpts.",
  },
  "Colab and Jupyter notebooks": {
    count: "Notes + notebooks",
    cue: "Best for moving from the page into runnable examples.",
  },
  Exercises: {
    count: "Practice sets",
    cue: "Best for homework, labs, and self-checks.",
  },
  "Slides and roadmaps": {
    count: "Course materials",
    cue: "Best for planning a syllabus or lecture sequence.",
  },
} as const;

export const metadata = createPageMetadata({
  title: "Resources",
  description:
    "Machine Learning Refined resources, including PDFs, notebooks, exercises, presentations, and GitHub source links.",
  path: "/resources",
});

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf4] text-[#071326]">
      <PageHeader activeHref="/resources" />
      <div className="mx-auto max-w-5xl px-6 py-16">
        <p className="mb-2 text-xs font-black uppercase tracking-[0.16em] text-[#8a6519]">
          Canonical resource index
        </p>
        <h1 className="font-serif text-5xl font-black leading-tight text-[#0b2545]">
          Resources
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-[#526070]">
          Jump straight to the book&apos;s source-backed PDFs, notes,
          notebooks, exercises, slides, and roadmap guidance. The chapter and
          notebook pages provide the guided path; this page is the compact index.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
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
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {resourceGroups.map((resource) => {
            const cue = resourceCues[resource.title as keyof typeof resourceCues];

            return (
              <ResourceLink
                key={resource.title}
                className="group rounded-lg border border-[#ddcfad] bg-white p-5 shadow-lg shadow-[#071326]/5 transition-all hover:-translate-y-0.5 hover:border-[#164b8f]/45 hover:shadow-[#071326]/10"
                eventName="github_resource_clicked"
                eventProperties={{
                  location: "resources_page",
                  resource: resource.title,
                }}
                href={resource.href}
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
                  Open resource
                </span>
              </ResourceLink>
            );
          })}
        </div>
      </div>
    </main>
  );
}
