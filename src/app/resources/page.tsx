import Link from "next/link";

import { ResourceLink } from "@/components/analytics/resource-link";
import { resourceGroups } from "@/content/book";

export const metadata = {
  title: "Resources | Machine Learning Refined",
  description:
    "Machine Learning Refined resources, including PDFs, notebooks, exercises, presentations, and GitHub source links.",
};

export default function ResourcesPage() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-16">
      <Link className="text-sm text-black/55" href="/">
        Machine Learning Refined
      </Link>
      <h1 className="mt-8 text-4xl font-semibold">Resources</h1>
      <p className="mt-4 max-w-2xl leading-7 text-black/65">
        A searchable resource library will live here. The first scaffold keeps
        the canonical GitHub links visible and instrumentable.
      </p>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {resourceGroups.map((resource) => (
          <ResourceLink
            key={resource.title}
            className="rounded-lg border border-black/10 p-5"
            eventName="github_resource_clicked"
            eventProperties={{ location: "resources_page", resource: resource.title }}
            href={resource.href}
            target="_blank"
            rel="noreferrer"
          >
            <h2 className="text-xl font-medium">{resource.title}</h2>
            <p className="mt-3 text-sm leading-6 text-black/60">
              {resource.description}
            </p>
          </ResourceLink>
        ))}
      </div>
    </main>
  );
}
