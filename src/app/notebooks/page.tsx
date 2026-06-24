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
    <main className="min-h-screen bg-[#fbfaf4] text-[#071326]">
      <PageHeader activeHref="/notebooks" />
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <section className="mt-8 grid gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.7fr)] lg:items-end">
          <div>
            <p className="mb-2 text-xs font-black uppercase tracking-[0.16em] text-[#8a6519]">
              Visual notebooks
            </p>
            <h1 className="font-serif text-5xl font-black leading-tight md:text-6xl">
              Notebooks
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-[#526070]">
              Move from intuition to runnable code through curated animated
              notebook previews. Each workbench points back to the source
              notebook, Colab path, and chapter package.
            </p>
          </div>

          <div className="grid gap-3 rounded-lg border border-[#ddcfad] bg-white p-4">
            <p className="font-serif text-xl font-black text-[#0b2545]">
              Eight visual notebooks
            </p>
            <p className="text-sm leading-6 text-[#526070]">
              A curated set of high-signal animations from the book resources,
              not a decorative tag wall or fabricated inventory.
            </p>
          </div>
        </section>

        <NotebookWorkbench chapters={chapters} widgets={learningWidgets} />
      </div>
    </main>
  );
}
