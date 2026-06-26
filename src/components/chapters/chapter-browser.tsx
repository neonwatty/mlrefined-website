"use client";

import { useMemo, useRef, useState } from "react";

import { captureAnalyticsEvent } from "@/components/analytics/capture";
import { BookSideRail } from "@/components/site/book-side-rail";
import { bookLinks } from "@/content/book";
import type {
  BookChapter,
  ChapterTrack,
  LearningWidget,
  StaticVisual,
} from "@/content/book";
import { innerPageTitleClassName } from "@/lib/page-styles";

import {
  ChapterList,
  SelectedChapterPanel,
  chapterFigures,
  chapterWidgets,
} from "./chapter-panels";
import { FilterButton, FilterGroup, SummaryItem } from "./chapter-filter-controls";
import { FigureAtlas } from "./figure-atlas";

type ResourceKind = "all" | "figures" | "notebooks" | "exercises" | "slides";
type AudienceKind = "all" | "learner" | "instructor";

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

const audienceFilters: Array<{ key: AudienceKind; label: string }> = [
  { key: "all", label: "All" },
  { key: "learner", label: "Learners" },
  { key: "instructor", label: "Instructors" },
];

const sourceEvidence = [
  {
    href: bookLinks.pdfs,
    label: "chapter_pdfs/README.md",
    note: "Dropbox PDF collection",
    resource: "chapter_pdfs",
  },
  {
    href: bookLinks.notes,
    label: "notes/",
    note: "Source notebooks and notes",
    resource: "notes",
  },
  {
    href: bookLinks.exercises,
    label: "exercises/",
    note: "Exercise notebooks",
    resource: "exercises",
  },
  {
    href: bookLinks.slides,
    label: "presentations/README.md",
    note: "PPTX collection",
    resource: "slides",
  },
];

export function ChapterBrowser({
  chapters,
  visuals,
  widgets,
  roadmaps,
}: ChapterBrowserProps) {
  const [query, setQuery] = useState("");
  const [audienceKind, setAudienceKind] = useState<AudienceKind>("all");
  const [resourceKind, setResourceKind] = useState<ResourceKind>("all");
  const [selectedNumber, setSelectedNumber] = useState("6");
  const lastCommittedSearch = useRef("");
  const primaryChapters = useMemo(
    () => chapters.filter((chapter) => chapter.number !== "C"),
    [chapters],
  );

  const filteredChapters = useMemo(() => {
    return primaryChapters.filter((chapter) => {
      return matchesAudience(chapter, audienceKind) &&
        matchesQuery(chapter, query) &&
        hasResource(chapter, resourceKind, visuals, widgets);
    });
  }, [audienceKind, primaryChapters, query, resourceKind, visuals, widgets]);

  const selectedChapter =
    chapters.find((chapter) => chapter.number === selectedNumber) ??
    filteredChapters[0] ??
    chapters[0];
  const selectedFigures = chapterFigures(visuals, selectedChapter.number);
  const selectedWidgets = chapterWidgets(widgets, selectedChapter.number);
  const selectedRoadmaps = roadmaps.filter((roadmap) =>
    roadmap.chapters.some((chapter) => chapter.number === selectedChapter.number),
  );
  const commitSearch = () => {
    const normalizedQuery = query.trim();

    if (!normalizedQuery) return;

    const searchSignature = `${normalizedQuery}:${filteredChapters.length}`;
    if (searchSignature === lastCommittedSearch.current) return;

    lastCommittedSearch.current = searchSignature;
    captureAnalyticsEvent("chapter_search_submitted", {
      location: "chapters_filter_bar",
      query_length: normalizedQuery.length,
      results: filteredChapters.length,
    });
  };
  const selectChapter = (number: string, location: string) => {
    captureAnalyticsEvent("chapter_selected", {
      chapter: number,
      location,
    });
    setSelectedNumber(number);
  };

  return (
    <div className="grid gap-5 lg:grid-cols-[250px_minmax(0,1fr)]">
      <BookSideRail
        description="PDFs, slides, notebooks, and exercises link back to the book repository and publisher workflows."
        eyebrow="Verified sources"
        eventLocation="chapters_side_rail"
        links={sourceEvidence}
      />

      <div className="grid content-start gap-4">
        <section className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(280px,420px)] lg:items-end">
          <div>
            <p className="mb-2 text-xs font-black uppercase tracking-[0.16em] text-[#8a6519]">
              Chapter resource hub
            </p>
            <h1 className={innerPageTitleClassName}>
              Find the chapter, then open the exact resource
            </h1>
          </div>
        </section>

        <section className="grid gap-3 rounded-lg border border-[#ddcfad] bg-[#fffdf8]/90 p-3 lg:grid-cols-[minmax(220px,0.7fr)_minmax(260px,0.9fr)_minmax(360px,1.2fr)] lg:items-end">
          <label className="grid gap-2">
            <span className="text-xs font-black uppercase tracking-[0.14em] text-[#8a6519]">
              Search chapters
            </span>
            <input
              className="min-h-10 rounded-md border border-[#ddcfad] bg-white px-3 text-sm outline-none transition-colors focus:border-[#164b8f]"
              type="search"
              value={query}
              placeholder="Search chapters, topics, resources"
              onChange={(event) => setQuery(event.target.value)}
              onBlur={commitSearch}
              onKeyDown={(event) => {
                if (event.key === "Enter") commitSearch();
              }}
            />
          </label>
          <FilterGroup label="Audience">
            {audienceFilters.map((filter) => (
              <FilterButton
                key={filter.key}
                isSelected={audienceKind === filter.key}
                onClick={() => {
                  captureAnalyticsEvent("chapter_filter_clicked", {
                    filter_group: "audience",
                    filter_value: filter.key,
                    location: "chapters_filter_bar",
                  });
                  setAudienceKind(filter.key);
                }}
              >
                {filter.label}
              </FilterButton>
            ))}
          </FilterGroup>
          <FilterGroup label="Resource type">
            {resourceFilters.map((filter) => (
              <FilterButton
                key={filter.key}
                isSelected={resourceKind === filter.key}
                onClick={() => {
                  captureAnalyticsEvent("chapter_filter_clicked", {
                    filter_group: "resource_type",
                    filter_value: filter.key,
                    location: "chapters_filter_bar",
                  });
                  setResourceKind(filter.key);
                }}
              >
                {filter.label}
              </FilterButton>
            ))}
          </FilterGroup>
        </section>

        <ul className="flex flex-wrap justify-end gap-5">
          <SummaryItem value={filteredChapters.length} label="Chapters shown" />
          <SummaryItem value={84} label="Note notebooks" />
          <SummaryItem value={primaryChapters.filter((chapter) => chapter.resources.exercise).length} label="Exercise sets" />
          <SummaryItem value={primaryChapters.filter((chapter) => chapter.resources.slides).length} label="PPTX chapters" />
        </ul>

        <SelectedChapterPanel
          chapter={selectedChapter}
          figures={selectedFigures}
          widgets={selectedWidgets}
          roadmaps={selectedRoadmaps}
        />

        <ChapterList
          chapters={filteredChapters}
          selectedNumber={selectedChapter.number}
          setSelectedNumber={(number) => selectChapter(number, "chapter_list")}
          visuals={visuals}
          widgets={widgets}
        />

        <FigureAtlas
          query={query}
          selectedNumber={selectedChapter.number}
          setSelectedNumber={(number) => selectChapter(number, "figure_atlas")}
          visuals={visuals}
        />
      </div>
    </div>
  );
}

function matchesQuery(item: unknown, query: string) {
  return !query || JSON.stringify(item).toLowerCase().includes(query.toLowerCase());
}

function matchesAudience(chapter: BookChapter, audience: AudienceKind) {
  return audience === "all" || chapter.audience.includes(audience);
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
