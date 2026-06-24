"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import { ResourceLink } from "@/components/analytics/resource-link";
import type { BookChapter, LearningWidget } from "@/content/book";

type NotebookWorkbenchProps = {
  chapters: BookChapter[];
  widgets: LearningWidget[];
};

const conceptSteps = [
  ["Intuition", "Read the visual before the formula."],
  ["Geometry", "Watch the path, boundary, or shape change."],
  ["Update rule", "Connect motion back to the derivation."],
  ["Run it", "Open the source notebook or Colab path."],
] as const;

export function NotebookWorkbench({ chapters, widgets }: NotebookWorkbenchProps) {
  const [selectedTitle, setSelectedTitle] = useState(widgets[0]?.title ?? "");
  const selectedWidget =
    widgets.find((widget) => widget.title === selectedTitle) ?? widgets[0];
  const selectedChapter = useMemo(() => {
    return chapters.find((chapter) => chapter.number === chapterNumber(selectedWidget?.chapter));
  }, [chapters, selectedWidget]);

  if (!selectedWidget) return null;

  return (
    <div className="mt-10 grid gap-8">
      <section className="grid gap-5 rounded-lg border border-[#ddcfad] bg-[#fffdf8] p-4 shadow-xl shadow-[#071326]/10 lg:grid-cols-[minmax(320px,0.85fr)_minmax(0,1.15fr)]">
        <Image
          className="h-full min-h-[300px] w-full rounded-md border border-[#d9e2ec] bg-white object-contain p-3"
          src={selectedWidget.image}
          alt={selectedWidget.imageAlt}
          width={760}
          height={520}
          loading="eager"
          unoptimized
        />
        <div className="grid content-center gap-4">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-[#8a6519]">
            Featured workbench / {selectedWidget.chapter}
          </p>
          <h2 className="font-serif text-4xl font-black leading-tight text-[#0b2545]">
            {selectedWidget.title}
          </h2>
          <p className="max-w-2xl leading-7 text-[#526070]">
            {selectedWidget.description}
          </p>
          <ol className="grid gap-2 sm:grid-cols-2">
            {conceptSteps.map(([title, note]) => (
              <li key={title} className="rounded-md border border-[#ddcfad] bg-white p-3">
                <strong className="font-serif text-lg font-black text-[#0b2545]">
                  {title}
                </strong>
                <span className="mt-1 block text-sm leading-6 text-[#526070]">
                  {note}
                </span>
              </li>
            ))}
          </ol>
          <SourceBundle chapter={selectedChapter} widget={selectedWidget} />
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {widgets.map((widget) => (
          <button
            key={widget.title}
            className={`grid gap-3 rounded-lg border bg-white p-3 text-left shadow-lg shadow-[#071326]/5 transition-all ${
              widget.title === selectedWidget.title
                ? "border-[#164b8f]"
                : "border-[#ddcfad] hover:-translate-y-0.5 hover:border-[#164b8f]/50"
            }`}
            aria-pressed={widget.title === selectedWidget.title}
            type="button"
            onClick={() => setSelectedTitle(widget.title)}
          >
            <Image
              className="h-40 w-full rounded-md border border-[#d9e2ec] object-contain p-2"
              src={widget.image}
              alt={widget.imageAlt}
              width={320}
              height={220}
              unoptimized
            />
            <span className="text-xs font-black uppercase tracking-[0.14em] text-[#164b8f]">
              {widget.chapter} / {widget.topic}
            </span>
            <strong className="font-serif text-xl font-black text-[#0b2545]">
              {widget.title}
            </strong>
            <span className="text-sm leading-6 text-[#526070]">
              {widget.description}
            </span>
          </button>
        ))}
      </section>
    </div>
  );
}

function SourceBundle({
  chapter,
  widget,
}: {
  chapter?: BookChapter;
  widget: LearningWidget;
}) {
  const chapterHref = chapter?.resources.notes ?? chapter?.resources.notebook;

  return (
    <div className="grid gap-2 rounded-md border border-[#ddcfad] bg-white p-3 sm:grid-cols-2">
      <SourceLink
        detail={fileName(widget.href)}
        href={widget.href}
        label="Source notebook"
        resource={widget.title}
      />
      <SourceLink
        detail="Runnable notebook path"
        href={widget.colab}
        label="Open in Colab"
        resource={widget.title}
      />
      {chapterHref ? (
        <SourceLink
          detail={chapter?.title ?? widget.topic}
          href={chapterHref}
          label="Chapter package"
          resource={widget.title}
        />
      ) : null}
      {chapter?.resources.pdf ? (
        <SourceLink
          detail="Canonical PDF collection"
          href={chapter.resources.pdf}
          label="Chapter PDFs"
          resource={widget.title}
        />
      ) : null}
    </div>
  );
}

function SourceLink({
  detail,
  href,
  label,
  resource,
}: {
  detail: string;
  href: string;
  label: string;
  resource: string;
}) {
  return (
    <ResourceLink
      className="rounded-md border border-[#d9e2ec] p-3 transition-colors hover:border-[#164b8f]/50 hover:bg-[#f7fbff]"
      eventName="notebook_resource_clicked"
      eventProperties={{ location: "notebook_workbench", resource, type: label }}
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      <strong className="block text-sm font-black text-[#164b8f]">{label}</strong>
      <span className="mt-1 block text-xs leading-5 text-[#526070]">{detail}</span>
    </ResourceLink>
  );
}

function chapterNumber(label?: string) {
  return label?.replace("Ch. ", "").replace("Appendix ", "");
}

function fileName(href: string) {
  return href.split("/").pop() ?? "Source file";
}
