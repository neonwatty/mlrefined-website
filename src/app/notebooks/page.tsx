import { NotebookWorkbench } from "@/components/notebooks/notebook-workbench";
import { BookSideRail } from "@/components/site/book-side-rail";
import { PageHeader } from "@/components/site/page-header";
import { bookLinks, chapters, learningWidgets } from "@/content/book";
import { innerPageTitleClassName } from "@/lib/page-styles";
import { collectionPageJsonLd, stringifyJsonLd } from "@/lib/seo";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Machine Learning Refined GitHub Notebooks",
  description:
    "Browse Machine Learning Refined GitHub notebooks and Python notebook paths for optimization, regression, classification, neural networks, and chapter resources.",
  path: "/notebooks",
  keywords: [
    "Machine Learning Refined GitHub notebooks",
    "Machine Learning Refined Python notebooks",
    "machine learning notebooks",
    "Colab machine learning notebooks",
    "Jupyter notebooks machine learning",
  ],
});

export default function NotebooksPage() {
  const jsonLd = collectionPageJsonLd({
    name: "Machine Learning Refined GitHub Notebooks",
    description:
      "Browse GitHub-backed Machine Learning Refined notebook previews, Python notebook paths, and Colab-ready chapter resources.",
    path: "/notebooks",
    items: learningWidgets.map((widget) => ({
      name: widget.title,
      description: widget.description,
      url: widget.href,
    })),
  });

  return (
    <main className="min-h-screen text-[#071326]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(jsonLd) }}
      />
      <PageHeader activeHref="/notebooks" />
      <div className="mx-auto grid w-[min(1680px,100%)] gap-5 px-6 py-6 md:px-[26px] lg:grid-cols-[250px_minmax(0,1fr)]">
        <BookSideRail
          description="GitHub-backed Python notebook previews connect the book's visual intuition to source notebooks, chapter PDFs, and Colab-ready paths."
          eyebrow="Notebook context"
          eventLocation="notebooks_side_rail"
          links={[
            {
              href: bookLinks.notes,
              label: "Source notebooks",
              note: "Open the canonical GitHub notes directory.",
              resource: "notes",
            },
            {
              href: bookLinks.pdfs,
              label: "Chapter PDFs",
              note: "Pair notebooks with the source chapters.",
              resource: "pdfs",
            },
            {
              href: bookLinks.repo,
              label: "GitHub repository",
              note: "Browse the complete resource collection.",
              resource: "repo",
            },
          ]}
        />
        <div className="min-w-0">
          <section className="mb-4 grid gap-5">
            <div>
              <p className="mb-2 text-xs font-black uppercase tracking-[0.16em] text-[#8a6519]">
                Animated companions
              </p>
              <h1 className={innerPageTitleClassName}>Notebooks</h1>
              <p className="mt-3 max-w-3xl text-base leading-7 text-[#526070]">
                Eight curated GitHub-backed Python notebook previews tied to
                source notebooks, chapter PDFs, and Colab-ready paths.
              </p>
            </div>
          </section>

          <NotebookWorkbench chapters={chapters} widgets={learningWidgets} />
        </div>
      </div>
    </main>
  );
}
