import Image from "next/image";
import Link from "next/link";

import { learningWidgets } from "@/content/book";

export const metadata = {
  title: "Notebooks | Machine Learning Refined",
  description:
    "Curated visual notebook previews for Machine Learning Refined chapters, with source notebook and Colab links.",
};

export default function NotebooksPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf4] px-5 py-12 text-[#071326] md:px-8">
      <div className="mx-auto max-w-7xl">
        <Link className="text-sm font-bold text-black/55" href="/">
          Machine Learning Refined
        </Link>
        <div className="mt-8 max-w-3xl">
          <p className="mb-2 text-xs font-black uppercase tracking-[0.16em] text-[#8a6519]">
            Visual notebooks
          </p>
          <h1 className="font-serif text-5xl font-black leading-tight">
            Notebooks
          </h1>
          <p className="mt-4 leading-7 text-[#526070]">
            A curated set of animated notebook previews from the book. The full
            guided workbench will build on these source-backed entries.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {learningWidgets.map((widget) => (
            <article key={widget.title} className="rounded-lg border border-[#ddcfad] bg-white p-3 shadow-lg shadow-[#071326]/5">
              <Image
                className="h-40 w-full rounded-md border border-[#d9e2ec] object-contain p-2"
                src={widget.image}
                alt={widget.imageAlt}
                width={320}
                height={220}
                unoptimized
              />
              <p className="mt-4 text-xs font-black uppercase tracking-[0.14em] text-[#164b8f]">
                {widget.chapter} / {widget.topic}
              </p>
              <h2 className="mt-2 font-serif text-xl font-black">
                {widget.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-[#526070]">
                {widget.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Link className="inline-flex min-h-10 items-center justify-center rounded-md border border-[#c79222]/50 px-3 text-sm font-black text-[#164b8f]" href={widget.href}>
                  Source notebook
                </Link>
                <Link className="inline-flex min-h-10 items-center justify-center rounded-md border border-[#c79222] bg-[#c79222] px-3 text-sm font-black text-[#06172d]" href={widget.colab}>
                  Open Colab
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
