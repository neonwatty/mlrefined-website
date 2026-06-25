"use client";

import Image from "next/image";
import { useMemo, useState, type ReactNode } from "react";

import { ResourceLink } from "@/components/analytics/resource-link";
import { bookLinks } from "@/content/book";
import type {
  BookChapter,
  ChapterTrack,
  LearningWidget,
  StaticVisual,
} from "@/content/book";

import {
  ChapterList,
  SelectedChapterPanel,
  chapterFigures,
  chapterWidgets,
} from "./chapter-panels";
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
  ["chapter_pdfs/README.md", "Dropbox PDF collection", bookLinks.pdfs],
  ["notes/", "Source notebooks and notes", bookLinks.notes],
  ["exercises/", "Exercise notebooks", bookLinks.exercises],
  ["presentations/README.md", "PPTX collection", bookLinks.slides],
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

  return (
    <div className="grid gap-5 lg:grid-cols-[230px_minmax(0,1fr)]">
      <aside className="grid content-start gap-4 rounded-lg border border-[#ddcfad] bg-[#fffdf8]/95 p-4 shadow-lg shadow-[#071326]/5">
        <Image
          className="mx-auto w-32 border border-[#ead4a4] shadow-lg shadow-[#071326]/10"
          src="/book-cover-2nd.png"
          alt="Machine Learning Refined second edition cover"
          width={760}
          height={1000}
        />
        <section>
          <h2 className="mb-2 text-sm font-black uppercase tracking-[0.08em] text-[#0b2545]">
            Verified Sources
          </h2>
          <p className="mt-2 text-sm leading-6 text-[#526070]">
            PDFs, slides, notebooks, and exercises link back to the book
            repository and publisher workflows.
          </p>
          <details className="mt-3 border-t border-[#ddcfad] pt-2">
            <summary className="cursor-pointer text-sm font-black text-[#164b8f]">
              Show source anchors
            </summary>
            <div className="mt-3 grid gap-2">
              {sourceEvidence.map(([title, label, href]) => (
                <ResourceLink
                  key={title}
                  className="rounded-md border border-[#ddcfad] bg-white p-2 text-sm transition-colors hover:border-[#164b8f]/50"
                  eventName="chapter_source_clicked"
                  eventProperties={{ location: "chapters_source_rail", resource: title }}
                  href={href}
                  rel="noreferrer"
                  target="_blank"
                >
                  <strong className="block text-[#0b2545]">{title}</strong>
                  <span className="text-xs leading-5 text-[#526070]">{label}</span>
                </ResourceLink>
              ))}
            </div>
          </details>
        </section>
      </aside>

      <div className="grid content-start gap-4">
        <section className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(280px,420px)] lg:items-end">
          <div>
            <p className="mb-2 text-xs font-black uppercase tracking-[0.16em] text-[#8a6519]">
              Chapter resource hub
            </p>
            <h1 className="font-serif text-[clamp(2.15rem,4vw,4rem)] font-black leading-tight">
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
            />
          </label>
          <FilterGroup label="Audience">
            {audienceFilters.map((filter) => (
              <FilterButton
                key={filter.key}
                isSelected={audienceKind === filter.key}
                onClick={() => setAudienceKind(filter.key)}
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
                onClick={() => setResourceKind(filter.key)}
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
          setSelectedNumber={setSelectedNumber}
          visuals={visuals}
          widgets={widgets}
        />

        <FigureAtlas
          query={query}
          selectedNumber={selectedChapter.number}
          setSelectedNumber={setSelectedNumber}
          visuals={visuals}
        />
      </div>
    </div>
  );
}

function FilterGroup({
  children,
  label,
}: {
  children: ReactNode;
  label: string;
}) {
  return (
    <div className="grid gap-2">
      <span className="text-xs font-black uppercase tracking-[0.14em] text-[#8a6519]">
        {label}
      </span>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

function FilterButton({
  children,
  isSelected,
  onClick,
}: {
  children: ReactNode;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className={`min-h-10 rounded-md border px-3 text-sm font-black transition-colors ${
        isSelected
          ? "border-[#c79222] bg-[#c79222] text-[#06172d]"
          : "border-[#ddcfad] bg-white text-[#164b8f] hover:bg-[#fff7e7]"
      }`}
      aria-pressed={isSelected}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function SummaryItem({ label, value }: { label: string; value: number }) {
  return (
    <li className="grid justify-items-center text-xs text-[#526070]">
      <strong className="font-serif text-xl font-black text-[#0b2545]">
        {value}
      </strong>
      <span>{label}</span>
    </li>
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
