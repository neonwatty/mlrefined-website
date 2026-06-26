"use client";

import Image from "next/image";
import { useMemo, useRef, useState } from "react";

import { captureAnalyticsEvent } from "@/components/analytics/capture";
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
  const [selectedVisualTitle, setSelectedVisualTitle] = useState<string | null>(null);
  const lastCommittedFigureSearch = useRef("");
  const filteredVisuals = useMemo(
    () => visuals.filter((visual) => matchesQuery(visual, `${query} ${figureQuery}`.trim())),
    [figureQuery, query, visuals],
  );
  const selectedVisual =
    filteredVisuals.find(
      (visual) =>
        visual.title === selectedVisualTitle &&
        chapterNumber(visual.chapter) === selectedNumber,
    ) ??
    filteredVisuals.find((visual) => chapterNumber(visual.chapter) === selectedNumber) ??
    filteredVisuals[0] ??
    visuals[0];
  const visualGroups = useMemo(() => {
    const groups = new Map<string, StaticVisual[]>();

    for (const visual of filteredVisuals) {
      groups.set(visual.chapter, [...(groups.get(visual.chapter) ?? []), visual]);
    }

    return Array.from(groups.entries());
  }, [filteredVisuals]);
  const coverage = useMemo(() => {
    const counts = new Map<string, number>();

    for (const visual of visuals) {
      counts.set(visual.chapter, (counts.get(visual.chapter) ?? 0) + 1);
    }

    return Array.from(counts.entries());
  }, [visuals]);
  const commitFigureSearch = () => {
    const normalizedQuery = figureQuery.trim();

    if (!normalizedQuery) return;

    const searchSignature = `${normalizedQuery}:${filteredVisuals.length}`;
    if (searchSignature === lastCommittedFigureSearch.current) return;

    lastCommittedFigureSearch.current = searchSignature;
    captureAnalyticsEvent("figure_search_submitted", {
      location: "figure_atlas",
      query_length: normalizedQuery.length,
      results: filteredVisuals.length,
    });
  };

  return (
    <section className="mt-1 grid gap-2 border-t border-[#ddcfad] pt-3">
      <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-end">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.14em] text-[#8a6519]">Static figure atlas</p>
          <h2 className="mt-1.5 font-serif text-2xl font-black text-[#0b2545]">Book figures by chapter</h2>
          <p className="mt-1.5 max-w-3xl text-sm leading-5 text-[#526070]">
            Search source-backed figures from the notes-assets repository, then inspect the image or jump back to its chapter package.
          </p>
        </div>
        <label className="grid gap-2">
          <span className="text-xs font-black uppercase tracking-[0.14em] text-[#8a6519]">
            Search figures
          </span>
          <input
            className="min-h-11 rounded-md border border-[#ddcfad] bg-white px-3 text-sm outline-none transition-colors focus:border-[#164b8f]"
            type="search"
            value={figureQuery}
            placeholder="Search figures, topics, chapters"
            onChange={(event) => setFigureQuery(event.target.value)}
            onBlur={commitFigureSearch}
            onKeyDown={(event) => {
              if (event.key === "Enter") commitFigureSearch();
            }}
          />
        </label>
      </div>
      <FigureCoverage
        coverage={coverage}
        selectedNumber={selectedNumber}
        setSelectedVisualTitle={setSelectedVisualTitle}
        setSelectedNumber={setSelectedNumber}
      />
      {selectedVisual ? <FigureInspector visual={selectedVisual} /> : null}
      <div className="grid gap-2.5">
        {visualGroups.map(([chapter, groupVisuals]) => (
          <FigureGroup
            key={chapter}
            selectedVisual={selectedVisual}
            setSelectedNumber={setSelectedNumber}
            setSelectedVisualTitle={setSelectedVisualTitle}
            visuals={groupVisuals}
          />
        ))}
      </div>
    </section>
  );
}

function FigureCoverage({
  coverage,
  selectedNumber,
  setSelectedVisualTitle,
  setSelectedNumber,
}: {
  coverage: Array<[string, number]>;
  selectedNumber: string;
  setSelectedVisualTitle: (title: string | null) => void;
  setSelectedNumber: (number: string) => void;
}) {
  return (
    <div className="grid gap-1.5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-7">
      {coverage.map(([chapter, count]) => {
        const number = chapterNumber(chapter);

        return (
          <button
            key={chapter}
            className={`inline-flex min-h-11 items-center justify-center gap-1.5 rounded-md border px-2.5 text-[0.78rem] font-black transition-colors sm:justify-start sm:text-[0.7rem] ${
              number === selectedNumber
                ? "border-[#164b8f] bg-[#e9f1fb] text-[#0b2545]"
                : "border-[#ddcfad] bg-white text-[#164b8f] hover:bg-[#fff7e7]"
            }`}
            aria-pressed={number === selectedNumber}
            type="button"
            onClick={() => {
              captureAnalyticsEvent("figure_atlas_chapter_filter_clicked", {
                chapter: number,
                location: "figure_atlas_coverage",
              });
              setSelectedVisualTitle(null);
              setSelectedNumber(number);
            }}
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
    <section className="my-1 grid gap-2.5 rounded-lg border border-[#ddcfad] bg-[#fffdf8]/95 p-2.5 shadow-lg shadow-[#071326]/5 md:grid-cols-[minmax(260px,0.82fr)_minmax(340px,1.18fr)]">
      <Image
        className="h-48 w-full rounded-md border border-[#d9e2ec] bg-white object-contain p-2"
        src={visual.image}
        alt={visual.alt}
        width={760}
        height={460}
        loading="eager"
        unoptimized
      />
      <div className="grid content-center gap-2">
        <p className="text-xs font-black uppercase tracking-[0.14em] text-[#8a6519]">
          {visual.chapter} / {visual.topic}
        </p>
        <h3 className="font-serif text-xl font-black text-[#0b2545]">{visual.title}</h3>
        <p className="text-sm leading-5 text-[#526070]">{visual.description}</p>
        <div className="grid gap-2 sm:flex sm:flex-wrap">
          <AtlasLink href={visual.sourceHref} label="Source figure" visual={visual} />
          <AtlasLink href={visual.chapterHref} label="Chapter resources" visual={visual} />
        </div>
      </div>
    </section>
  );
}

function FigureGroup({
  selectedVisual,
  setSelectedNumber,
  setSelectedVisualTitle,
  visuals,
}: {
  selectedVisual: StaticVisual | undefined;
  setSelectedNumber: (number: string) => void;
  setSelectedVisualTitle: (title: string | null) => void;
  visuals: StaticVisual[];
}) {
  const [firstVisual] = visuals;

  if (!firstVisual) {
    return null;
  }

  return (
    <section className="grid gap-2 rounded-md border border-[#ddcfad]/75 bg-[#fffdf8]/75 p-2">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.14em] text-[#8a6519]">
            {firstVisual.chapter}
          </p>
          <h3 className="mt-0.5 font-serif text-lg font-black text-[#0b2545]">
            {firstVisual.chapterTitle}
          </h3>
        </div>
        <AtlasLink href={firstVisual.chapterHref} label="Open chapter notes" visual={firstVisual} />
      </div>
      <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {visuals.map((visual) => (
          <FigureCard
            key={visual.title}
            isSelected={visual.title === selectedVisual?.title}
            setSelectedNumber={setSelectedNumber}
            setSelectedVisualTitle={setSelectedVisualTitle}
            visual={visual}
          />
        ))}
      </div>
    </section>
  );
}

function FigureCard({
  isSelected,
  setSelectedNumber,
  setSelectedVisualTitle,
  visual,
}: {
  isSelected: boolean;
  setSelectedNumber: (number: string) => void;
  setSelectedVisualTitle: (title: string | null) => void;
  visual: StaticVisual;
}) {
  const number = chapterNumber(visual.chapter);

  return (
    <button
      className={`grid overflow-hidden rounded-lg border bg-white text-left transition-colors ${isSelected ? "border-[#164b8f] shadow-lg shadow-[#1f6db7]/10" : "border-[#ddcfad] hover:border-[#164b8f]/50"}`}
      aria-pressed={isSelected}
      type="button"
      onClick={() => {
        captureAnalyticsEvent("figure_atlas_visual_selected", {
          chapter: visual.chapter,
          location: "figure_atlas_card",
          resource: visual.title,
        });
        setSelectedVisualTitle(visual.title);
        setSelectedNumber(number);
      }}
    >
      <Image
        className="h-[118px] w-full border-b border-[#ddcfad] bg-white object-contain p-2"
        src={visual.image}
        alt={visual.alt}
        width={520}
        height={320}
        loading="eager"
        unoptimized
      />
      <span className="grid gap-0.5 p-2">
        <span className="text-[0.7rem] font-black uppercase tracking-[0.12em] text-[#8a6519]">
          {visual.topic}
        </span>
        <strong className="font-serif text-sm font-black leading-tight text-[#0b2545]">{visual.title}</strong>
        <span className="overflow-hidden text-[0.7rem] leading-[1.25] text-[#526070] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
          {visual.description}
        </span>
      </span>
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
      className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#c79222]/50 bg-white px-2.5 text-sm font-black text-[#164b8f] hover:bg-[#fff7e7] sm:text-xs"
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
