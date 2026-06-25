import { NotebookWorkbench } from "@/components/notebooks/notebook-workbench";
import { PageHeader } from "@/components/site/page-header";
import { chapters, learningWidgets } from "@/content/book";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Notebooks",
  description:
    "Curated visual notebook previews for Machine Learning Refined chapters, with source notebook and Colab links.",
  path: "/notebooks",
});

export default function NotebooksPage() {
  return (
    <main className="min-h-screen text-[#071326]">
      <PageHeader activeHref="/notebooks" />
      <div className="mx-auto w-[min(1680px,100%)] px-6 py-6 md:px-[26px]">
        <section className="mb-4 grid gap-5">
          <div>
            <p className="mb-2 text-xs font-black uppercase tracking-[0.16em] text-[#8a6519]">
              Animated companions
            </p>
            <h1 className="font-serif text-[clamp(2.7rem,5vw,5.2rem)] font-black leading-[0.92]">
              Notebooks
            </h1>
            <p className="mt-3 max-w-3xl text-base leading-7 text-[#526070]">
              Eight curated animated previews tied to source notebooks, chapter
              PDFs, and Colab-ready paths.
            </p>
          </div>
        </section>

        <NotebookWorkbench chapters={chapters} widgets={learningWidgets} />
      </div>
    </main>
  );
}
