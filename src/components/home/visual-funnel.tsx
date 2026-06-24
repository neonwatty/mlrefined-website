import Link from "next/link";

import { featuredFigures, visualPath } from "@/content/home-page";

import { FigureCarousel } from "./figure-carousel";

export function VisualFunnel() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-10 md:px-8">
      <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="mb-2 text-xs font-black uppercase tracking-[0.16em] text-[#8a6519]">
            Visual learning system
          </p>
          <h2 className="max-w-5xl font-serif text-4xl font-black leading-tight md:text-5xl">
            Intuitive visuals and animations that pull you into each chapter
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-[#526070]">
            Static figures reveal the geometry. Notebook animations show the
            algorithm in motion. Every preview routes back to chapter resources.
          </p>
          <ol className="mt-5 flex flex-wrap gap-2">
            {visualPath.map(([title, note]) => (
              <li key={title} className="grid min-h-12 grid-cols-[auto_1fr] items-baseline gap-x-2 rounded-md border border-[#c79222]/35 bg-[#fffdf8]/86 px-3 py-2">
                <strong className="font-serif font-black text-[#164b8f]">
                  {title}
                </strong>
                <span className="text-sm leading-5 text-[#526070]">{note}</span>
              </li>
            ))}
          </ol>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link className="inline-flex min-h-10 items-center justify-center rounded-md border border-[#c79222] bg-[#c79222] px-5 text-sm font-black text-[#06172d] transition-colors hover:bg-[#d7a02b]" href="/chapters">
            Browse chapters
          </Link>
          <Link className="inline-flex min-h-10 items-center justify-center rounded-md border border-[#c79222]/50 bg-white px-5 text-sm font-black text-[#164b8f] transition-colors hover:bg-[#fff7e7]" href="/notebooks">
            Browse notebooks
          </Link>
        </div>
      </div>

      <div className="mt-5">
        <FigureCarousel figures={featuredFigures} />
      </div>
    </section>
  );
}
