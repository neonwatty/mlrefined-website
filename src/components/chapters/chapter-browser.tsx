"use client";

import { useMemo, useState } from "react";

import type {
  BookChapter,
  ChapterTrack,
  LearningWidget,
  StaticVisual,
} from "@/content/book";

import {
  ChapterList,
  FigureAtlas,
  SelectedChapterPanel,
  chapterFigures,
  chapterWidgets,
} from "./chapter-panels";

type ResourceKind = "all" | "figures" | "notebooks" | "exercises" | "slides";

type ChapterBrowserProps = {
  chapters: BookChapter[];
  visuals: StaticVisual[];
  widgets: LearningWidget[];
  roadmaps: ChapterTrack[];
};

const resourceFilters: Array<{ key: ResourceKind; label: string }> = [
  { key: "all", label: "All" },
  { key: "figures", label: "Figures" },
  { key: "notebooks", label: "Notebooks" },
  { key: "exercises", label: "Exercises" },
  { key: "slides", label: "Slides" },
];

export function ChapterBrowser({
  chapters,
  visuals,
  widgets,
  roadmaps,
}: ChapterBrowserProps) {
  const [query, setQuery] = useState("");
  const [resourceKind, setResourceKind] = useState<ResourceKind>("all");
  const [selectedNumber, setSelectedNumber] = useState("11");

  const filteredChapters = useMemo(() => {
    return chapters.filter((chapter) => {
      return matchesQuery(chapter, query) && hasResource(chapter, resourceKind, visuals, widgets);
    });
  }, [chapters, query, resourceKind, visuals, widgets]);

  const selectedChapter =
    chapters.find((chapter) => chapter.number === selectedNumber) ??
    filteredChapters[0] ??
    chapters[0];
  const selectedFigures = chapterFigures(visuals, selectedChapter.number);
  const selectedWidgets = chapterWidgets(widgets, selectedChapter.number);
  const selectedRoadmaps = roadmaps.filter((roadmap) =>
    roadmap.chapters.some((chapter) => chapter.number === selectedChapter.number),
  );

  return (
    <div className="mt-10 grid gap-8">
      <div className="grid gap-3 rounded-lg border border-[#ddcfad] bg-white p-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
        <label className="grid gap-2">
          <span className="text-xs font-black uppercase tracking-[0.14em] text-[#8a6519]">
            Search chapters and figures
          </span>
          <input
            className="min-h-12 rounded-md border border-[#ddcfad] bg-[#fffdf8] px-4 text-base outline-none transition-colors focus:border-[#164b8f]"
            type="search"
            value={query}
            placeholder="Try feature learning, K-means, kernel, Chapter 11..."
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
        <div className="flex flex-wrap gap-2" aria-label="Resource filters">
          {resourceFilters.map((filter) => (
            <button
              key={filter.key}
              className={`min-h-10 rounded-md border px-3 text-sm font-black transition-colors ${
                resourceKind === filter.key
                  ? "border-[#c79222] bg-[#c79222] text-[#06172d]"
                  : "border-[#ddcfad] bg-white text-[#164b8f] hover:bg-[#fff7e7]"
              }`}
              aria-pressed={resourceKind === filter.key}
              type="button"
              onClick={() => setResourceKind(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <section className="grid gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(360px,1.1fr)]">
        <ChapterList
          chapters={filteredChapters}
          selectedNumber={selectedChapter.number}
          setSelectedNumber={setSelectedNumber}
          visuals={visuals}
          widgets={widgets}
        />
        <SelectedChapterPanel
          chapter={selectedChapter}
          figures={selectedFigures}
          widgets={selectedWidgets}
          roadmaps={selectedRoadmaps}
        />
      </section>

      <FigureAtlas
        query={query}
        selectedNumber={selectedChapter.number}
        setSelectedNumber={setSelectedNumber}
        visuals={visuals}
      />
    </div>
  );
}

function matchesQuery(item: unknown, query: string) {
  return !query || JSON.stringify(item).toLowerCase().includes(query.toLowerCase());
}

function hasResource(
  chapter: BookChapter,
  kind: ResourceKind,
  visuals: StaticVisual[],
  widgets: LearningWidget[],
) {
  if (kind === "all") return true;
  if (kind === "figures") return chapterFigures(visuals, chapter.number).length > 0;
  if (kind === "notebooks") {
    return Boolean(chapter.resources.notebook || chapter.resources.notes) ||
      chapterWidgets(widgets, chapter.number).length > 0;
  }
  if (kind === "exercises") return Boolean(chapter.resources.exercise);
  if (kind === "slides") return Boolean(chapter.resources.slides);
}
