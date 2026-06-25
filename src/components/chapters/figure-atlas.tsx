"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import { ResourceLink } from "@/components/analytics/resource-link";
import type { StaticVisual } from "@/content/book";

type FigureAtlasProps = {
  query: string;
  selectedNumber: string;
  setSelectedNumber: (number: string) => void;
  visuals: StaticVisual[];
};

export function FigureAtlas({
  query,
  selectedNumber,
  setSelectedNumber,
  visuals,
}: FigureAtlasProps) {
  const [figureQuery, setFigureQuery] = useState("");
  const filteredVisuals = visuals.filter((visual) =>
    matchesQuery(visual, `${query} ${figureQuery}`.trim()),
  );
  const selectedVisual =
    filteredVisuals.find((visual) => chapterNumber(visual.chapter) === selectedNumber) ??
    filteredVisuals[0] ??
    visuals[0];
  const coverage = useMemo(() => {
    const counts = new Map<string, number>();

    for (const visual of visuals) {
      counts.set(visual.chapter, (counts.get(visual.chapter) ?? 0) + 1);
    }

    return Array.from(counts.entries());
  }, [visuals]);

  return (
    <section className="grid gap-4 rounded-lg border border-transparent pt-1">
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.14em] text-[#8a6519]">Static figure atlas</p>
          <h2 className="mt-2 font-serif text-3xl font-black text-[#0b2545]">Representative book figures by chapter</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-[#526070]">
            Search source-backed figures from the notes-assets repository, then inspect the image or jump back to its chapter package.
          </p>
        </div>
        <label className="grid gap-2">
          <span className="text-xs font-black uppercase tracking-[0.14em] text-[#8a6519]">
            Search figures
          </span>
          <input
            className="min-h-10 rounded-md border border-[#ddcfad] bg-white px-3 text-sm outline-none transition-colors focus:border-[#164b8f]"
            type="search"
            value={figureQuery}
            placeholder="Search figures, topics, chapters"
            onChange={(event) => setFigureQuery(event.target.value)}
          />
        </label>
      </div>
      <FigureCoverage
        coverage={coverage}
        selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}
      />
      {selectedVisual ? <FigureInspector visual={selectedVisual} /> : null}
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {filteredVisuals.map((visual) => (
          <FigureCard
            key={visual.title}
            selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber}
            visual={visual}
          />
        ))}
      </div>
    </section>
  );
}

function FigureCoverage({
  coverage,
  selectedNumber,
  setSelectedNumber,
}: {
  coverage: Array<[string, number]>;
  selectedNumber: string;
  setSelectedNumber: (number: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {coverage.map(([chapter, count]) => {
        const number = chapterNumber(chapter);

        return (
          <button
            key={chapter}
            className={`inline-flex min-h-9 items-center gap-2 rounded-md border px-3 text-xs font-black transition-colors ${
              number === selectedNumber
                ? "border-[#164b8f] bg-[#e9f1fb] text-[#0b2545]"
                : "border-[#ddcfad] bg-white text-[#164b8f] hover:bg-[#fff7e7]"
            }`}
            aria-pressed={number === selectedNumber}
            type="button"
            onClick={() => setSelectedNumber(number)}
          >
            <span>{chapter}</span>
            <span className="text-[#526070]">{count} figures</span>
          </button>
        );
      })}
    </div>
  );
}

function FigureInspector({ visual }: { visual: StaticVisual }) {
  return (
    <section className="grid gap-4 rounded-lg border border-[#ddcfad] bg-[#fffdf8]/95 p-3 shadow-lg shadow-[#071326]/5 md:grid-cols-[minmax(260px,0.72fr)_minmax(0,1fr)]">
      <Image
        className="h-56 w-full rounded-md border border-[#d9e2ec] bg-white object-contain p-2"
        src={visual.image}
        alt={visual.alt}
        width={760}
        height={460}
        loading="eager"
        unoptimized
      />
      <div className="grid content-center gap-3">
        <p className="text-xs font-black uppercase tracking-[0.14em] text-[#8a6519]">
          {visual.chapter} / {visual.topic}
        </p>
        <h3 className="font-serif text-2xl font-black text-[#0b2545]">{visual.title}</h3>
        <p className="text-sm leading-6 text-[#526070]">{visual.description}</p>
        <div className="flex flex-wrap gap-2">
          <AtlasLink href={visual.sourceHref} label="Source figure" visual={visual} />
          <AtlasLink href={visual.chapterHref} label="Chapter resources" visual={visual} />
        </div>
      </div>
    </section>
  );
}

function FigureCard({
  selectedNumber,
  setSelectedNumber,
  visual,
}: {
  selectedNumber: string;
  setSelectedNumber: (number: string) => void;
  visual: StaticVisual;
}) {
  const number = chapterNumber(visual.chapter);

  return (
    <button
      className={`grid gap-2 rounded-lg border bg-white p-2 text-left transition-colors ${number === selectedNumber ? "border-[#164b8f]" : "border-[#ddcfad] hover:border-[#164b8f]/50"}`}
      aria-pressed={number === selectedNumber}
      type="button"
      onClick={() => setSelectedNumber(number)}
    >
      <Image
        className="h-[135px] w-full rounded-md border border-[#d9e2ec] bg-white object-contain p-1.5"
        src={visual.image}
        alt={visual.alt}
        width={520}
        height={320}
        loading={number === selectedNumber ? "eager" : "lazy"}
        unoptimized
      />
      <span className="text-[0.7rem] font-black uppercase tracking-[0.12em] text-[#8a6519]">
        {visual.chapter} / {visual.topic}
      </span>
      <strong className="font-serif text-base font-black text-[#0b2545]">{visual.title}</strong>
    </button>
  );
}

function AtlasLink({
  href,
  label,
  visual,
}: {
  href: string;
  label: string;
  visual: StaticVisual;
}) {
  return (
    <ResourceLink
      className="inline-flex min-h-9 items-center rounded-md border border-[#c79222]/50 bg-white px-3 text-sm font-black text-[#164b8f] hover:bg-[#fff7e7]"
      eventName="chapter_visual_source_clicked"
      eventProperties={{
        chapter: visual.chapter,
        location: "figure_atlas_inspector",
        resource: visual.title,
      }}
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      {label}
    </ResourceLink>
  );
}

function matchesQuery(item: unknown, query: string) {
  return !query || JSON.stringify(item).toLowerCase().includes(query.toLowerCase());
}

function chapterNumber(label: string) {
  return label.replace("Ch. ", "").replace("Appendix ", "");
}
