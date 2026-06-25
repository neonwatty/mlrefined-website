import { featuredFigures, visualPath } from "@/content/home-page";

import { FigureCarousel } from "./figure-carousel";

export function VisualFunnel() {
  return (
    <section className="mx-auto my-5 w-[min(1680px,calc(100%_-_48px))] border-y border-[#ddcfad] bg-[#fffdf8]/72 px-5 py-5 md:px-7">
      <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="mb-2 text-xs font-black uppercase tracking-[0.16em] text-[#8a6519]">
            Visual learning system
          </p>
          <h2 className="max-w-5xl font-serif text-[clamp(1.35rem,2vw,2.1rem)] font-black leading-tight">
            Intuitive visuals that pull you into each chapter
          </h2>
          <p className="mt-3 max-w-3xl leading-6 text-[#526070]">
            Source-backed figures and animations reveal the geometry, then
            take readers straight to the relevant chapter materials.
          </p>
          <ol className="mt-4 flex flex-wrap gap-2">
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
      </div>

      <div className="mt-4">
        <FigureCarousel figures={featuredFigures} />
      </div>
    </section>
  );
}
