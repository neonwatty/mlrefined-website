import Image from "next/image";
import Link from "next/link";

import { ResourceLink } from "@/components/analytics/resource-link";
import { featuredFigures, homeAnimations, visualPath } from "@/content/home-page";

const featuredFigure = featuredFigures[0];

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
            Static figures reveal the geometry. Colab notebooks show the
            algorithm in motion. Every preview routes back to the chapter
            resources.
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
          <Link className="inline-flex min-h-10 items-center justify-center rounded-md border border-[#c79222]/50 bg-white px-5 text-sm font-black text-[#164b8f] transition-colors hover:bg-[#fff7e7]" href="/resources">
            Open resources
          </Link>
        </div>
      </div>

      <div className="mt-5 grid gap-4 xl:grid-cols-[minmax(0,1fr)_350px]">
        <FigureSpotlight />
        <AnimationRail />
      </div>
    </section>
  );
}

function FigureSpotlight() {
  return (
    <article className="grid gap-4 rounded-lg border border-[#ddcfad] bg-[#fffdf8]/95 p-4 shadow-xl shadow-[#071326]/10 lg:grid-cols-[minmax(360px,1.15fr)_minmax(300px,0.85fr)]">
      <ResourceLink className="grid min-h-[340px] place-items-center overflow-hidden rounded-md border border-[#d9e2ec] bg-white" eventName="github_resource_clicked" eventProperties={{ location: "home_figure_spotlight", resource: featuredFigure.title }} href={featuredFigure.href} target="_blank" rel="noreferrer" aria-label={`Open ${featuredFigure.title} chapter resources`}>
        <Image className="h-full w-full object-contain p-3" src={featuredFigure.image} alt={featuredFigure.alt} width={1978} height={1102} />
      </ResourceLink>
      <div className="grid content-center gap-4">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-[#8a6519]">
          {featuredFigure.chapter}
        </p>
        <h3 className="font-serif text-3xl font-black leading-tight text-[#0b2545]">
          {featuredFigure.title}
        </h3>
        <p className="text-[#526070]">{featuredFigure.description}</p>
        <div className="flex flex-wrap gap-2">
          <ResourceLink className="inline-flex min-h-10 items-center justify-center rounded-md border border-[#c79222]/50 bg-white px-4 text-sm font-black text-[#164b8f] transition-colors hover:bg-[#fff7e7]" eventName="github_resource_clicked" eventProperties={{ location: "home_figure_spotlight", resource: featuredFigure.title }} href={featuredFigure.href} target="_blank" rel="noreferrer">
            Open chapter package
          </ResourceLink>
          <Link className="inline-flex min-h-10 items-center justify-center rounded-md border border-[#c79222]/50 bg-white px-4 text-sm font-black text-[#164b8f] transition-colors hover:bg-[#fff7e7]" href="/resources">
            More figures
          </Link>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {featuredFigures.map((figure) => (
            <ResourceLink key={figure.title} className="grid min-h-16 place-items-center overflow-hidden rounded-md border border-[#ddcfad] bg-white p-1 transition-colors hover:border-[#164b8f]" eventName="github_resource_clicked" eventProperties={{ location: "home_figure_thumbnail", resource: figure.title }} href={figure.href} target="_blank" rel="noreferrer" aria-label={`Open ${figure.title} resources`}>
              <Image className="h-14 w-full object-contain" src={figure.image} alt="" width={260} height={160} />
            </ResourceLink>
          ))}
        </div>
      </div>
    </article>
  );
}

function AnimationRail() {
  return (
    <aside className="rounded-lg border border-[#ddcfad] bg-[#fffdf8]/95 p-4 shadow-xl shadow-[#071326]/10">
      <p className="mb-1 text-xs font-black uppercase tracking-[0.16em] text-[#8a6519]">
        Colab notebooks
      </p>
      <h3 className="font-serif text-2xl font-black text-[#0b2545]">
        Algorithms in motion
      </h3>
      <div className="mt-4 grid gap-3">
        {homeAnimations.map((item) => (
          <ResourceLink key={item.title} className="group grid min-h-28 grid-cols-[104px_minmax(0,1fr)] items-center gap-3 rounded-lg border border-[#ddcfad] bg-white p-2 text-left transition-all hover:-translate-y-0.5 hover:border-[#164b8f]/45 hover:shadow-lg hover:shadow-[#071326]/10" eventName="github_resource_clicked" eventProperties={{ location: "home_animation_rail", resource: item.title }} href={item.href} target="_blank" rel="noreferrer">
            <Image className="h-24 w-full rounded-md border border-[#d9e2ec] object-contain p-1" src={item.image} alt={item.imageAlt} width={220} height={180} unoptimized />
            <span className="grid gap-1">
              <small className="text-xs font-black uppercase tracking-wide text-[#164b8f]">
                {item.meta}
              </small>
              <strong className="font-serif text-lg font-black leading-tight text-[#0b2545]">
                {item.title}
              </strong>
            </span>
          </ResourceLink>
        ))}
      </div>
    </aside>
  );
}
