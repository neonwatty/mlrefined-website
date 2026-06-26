"use client";

import Image from "next/image";

import { ResourceLink } from "@/components/analytics/resource-link";
import type {
  BookChapter,
  ChapterTrack,
  LearningWidget,
  StaticVisual,
} from "@/content/book";

export function ChapterList({
  chapters,
  selectedNumber,
  setSelectedNumber,
  visuals,
  widgets,
}: {
  chapters: BookChapter[];
  selectedNumber: string;
  setSelectedNumber: (number: string) => void;
  visuals: StaticVisual[];
  widgets: LearningWidget[];
}) {
  if (!chapters.length) {
    return <p className="rounded-lg border border-[#ddcfad] bg-white p-5 text-[#526070]">No chapters match that search yet.</p>;
  }

  return (
    <div className="grid content-start gap-2">
      {chapters.map((chapter) => (
        <button
          key={chapter.slug}
          className={`grid gap-2 rounded-lg border bg-white p-3 text-left transition-all md:grid-cols-[74px_minmax(0,1fr)_minmax(210px,0.48fr)] md:items-center ${chapter.number === selectedNumber ? "border-[#164b8f] shadow-lg shadow-[#071326]/10" : "border-[#ddcfad] hover:border-[#164b8f]/50"}`}
          aria-pressed={chapter.number === selectedNumber}
          type="button"
          onClick={() => setSelectedNumber(chapter.number)}
        >
          <span className="font-serif text-3xl font-black leading-none text-[#164b8f]">
            <span className="block font-sans text-[0.62rem] uppercase tracking-[0.1em] text-[#526070]">
              {chapter.number === "C" ? "Appendix" : "Chapter"}
            </span>
            {chapter.number}
          </span>
          <span>
            <strong className="block font-serif text-xl font-black text-[#0b2545]">
              {chapter.title}
            </strong>
            <span className="mt-1 block text-sm leading-6 text-[#526070]">{chapter.summary}</span>
          </span>
          <span className="flex flex-wrap gap-2 text-xs font-black text-[#164b8f] md:justify-end">
            <span>{chapterFigures(visuals, chapter.number).length} figures</span>
            <span>{chapterWidgets(widgets, chapter.number).length} notebooks</span>
            {chapter.resources.exercise ? <span>Exercises</span> : null}
            {chapter.resources.slides ? <span>Slides</span> : null}
          </span>
        </button>
      ))}
    </div>
  );
}

export function SelectedChapterPanel({
  chapter,
  figures,
  widgets,
  roadmaps,
}: {
  chapter: BookChapter;
  figures: StaticVisual[];
  widgets: LearningWidget[];
  roadmaps: ChapterTrack[];
}) {
  const heroFigure = figures[0];
  const heroWidget = widgets[0];

  return (
    <section className="grid gap-4 rounded-lg border border-[#ddcfad] bg-[#fffdf8]/95 p-3 shadow-lg shadow-[#071326]/5 sm:p-4 lg:grid-cols-[minmax(260px,0.72fr)_minmax(280px,0.58fr)_minmax(340px,1fr)]">
      <div className="grid content-start gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-xs font-black uppercase tracking-[0.14em] text-[#8a6519]">Selected chapter package</p>
        </div>
        <h2 className="mt-2 font-serif text-3xl font-black text-[#0b2545]">
          {chapter.number === "C" ? "Appendix C" : `Chapter ${chapter.number}`}: {chapter.title}
        </h2>
        <p className="mt-3 leading-7 text-[#526070]">{chapter.summary}</p>
        <ResourceLinks chapter={chapter} />
      </div>
      {heroFigure ? <VisualPreview visual={heroFigure} /> : null}
      {!heroFigure && heroWidget ? <WidgetPreview widget={heroWidget} /> : null}
      <RelatedAssets figures={figures} widgets={widgets} roadmaps={roadmaps} />
    </section>
  );
}

function VisualPreview({ visual }: { visual: StaticVisual }) {
  return (
    <ResourceLink
      className="grid gap-3 rounded-md border border-[#d9e2ec] bg-white p-3"
      eventName="chapter_visual_source_clicked"
      eventProperties={{
        chapter: visual.chapter,
        location: "selected_chapter_panel",
        resource: visual.title,
      }}
      href={visual.sourceHref}
      rel="noreferrer"
      target="_blank"
    >
      <Image className="h-56 w-full rounded-md border border-[#d9e2ec] bg-white object-contain p-2" src={visual.image} alt={visual.alt} width={900} height={560} loading="eager" priority unoptimized />
      <span>
        <strong className="block font-serif text-xl font-black text-[#0b2545]">{visual.title}</strong>
        <span className="mt-1 block text-sm leading-6 text-[#526070]">{visual.description}</span>
      </span>
    </ResourceLink>
  );
}

function WidgetPreview({ widget }: { widget: LearningWidget }) {
  return (
    <ResourceLink
      className="grid gap-3 rounded-md border border-[#d9e2ec] bg-white p-3"
      eventName="chapter_widget_source_clicked"
      eventProperties={{
        chapter: widget.chapter,
        location: "selected_chapter_panel",
        resource: widget.title,
      }}
      href={widget.href}
      rel="noreferrer"
      target="_blank"
    >
      <Image className="h-56 w-full rounded-md border border-[#d9e2ec] bg-white object-contain p-2" src={widget.image} alt={widget.imageAlt} width={520} height={320} unoptimized />
      <strong className="font-serif text-xl font-black text-[#0b2545]">{widget.title}</strong>
    </ResourceLink>
  );
}

function ResourceLinks({ chapter }: { chapter: BookChapter }) {
  const resources = [
    ["PDF", chapter.resources.pdf],
    ["Notes", chapter.resources.notes ?? chapter.resources.notebook],
    ["Colab", chapter.resources.colab],
    ["Exercises", chapter.resources.exercise],
    ["Slides", chapter.resources.slides],
  ].filter((resource): resource is [string, string] => Boolean(resource[1]));

  return (
    <div className="grid gap-2 sm:flex sm:flex-wrap">
      {resources.map(([label, href]) => (
        <ResourceLink
          key={label}
          className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#c79222]/50 bg-white px-3 text-sm font-black text-[#164b8f] hover:bg-[#fff7e7]"
          eventName="chapter_resource_clicked"
          eventProperties={{
            chapter: chapter.number,
            location: "selected_chapter_panel",
            resource: label,
          }}
          href={href}
          rel="noreferrer"
          target="_blank"
        >
          {label}
        </ResourceLink>
      ))}
    </div>
  );
}

function RelatedAssets({
  figures,
  widgets,
  roadmaps,
}: {
  figures: StaticVisual[];
  widgets: LearningWidget[];
  roadmaps: ChapterTrack[];
}) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <AssetColumn title="Book figures" items={figures.map((figure) => figure.title)} />
      <AssetColumn title="Notebooks" items={widgets.map((widget) => widget.title)} />
      <AssetColumn title="Roadmaps" items={roadmaps.map((roadmap) => roadmap.title)} />
    </div>
  );
}

function AssetColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-sm font-black text-[#0b2545]">{title}</h3>
      <ul className="mt-2 grid gap-1 text-sm leading-6 text-[#526070]">
        {items.length ? items.slice(0, 4).map((item) => <li key={item}>{item}</li>) : <li>None curated yet</li>}
      </ul>
    </div>
  );
}

function chapterNumber(label: string) {
  return label.replace("Ch. ", "").replace("Appendix ", "");
}

export function chapterFigures(visuals: StaticVisual[], number: string) {
  return visuals.filter((visual) => chapterNumber(visual.chapter) === number);
}

export function chapterWidgets(widgets: LearningWidget[], number: string) {
  return widgets.filter((widget) => chapterNumber(widget.chapter) === number);
}
