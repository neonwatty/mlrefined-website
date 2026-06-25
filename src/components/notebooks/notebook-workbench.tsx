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
    <div className="mt-3 grid gap-3">
      <section className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_340px]">
        <div className="grid gap-3 rounded-lg border border-[#ddcfad] bg-[#fffdf8]/95 p-3 shadow-xl shadow-[#071326]/10 lg:grid-cols-[minmax(300px,1fr)_minmax(280px,0.78fr)]">
          <div className="grid content-center gap-3">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#8a6519]">
              Featured workbench
            </p>
            <h2 className="font-serif text-3xl font-black leading-tight text-[#0b2545]">
              {selectedWidget.title}
            </h2>
            <p className="max-w-2xl text-sm leading-6 text-[#526070]">
              {selectedWidget.description}
            </p>
            <ol className="grid gap-2 sm:grid-cols-4">
              {conceptSteps.map(([title, note]) => (
                <li key={title} className="rounded-md border border-[#d9e2ec] bg-[#f6fbff] p-2">
                  <strong className="font-serif text-base font-black text-[#164b8f]">
                    {title}
                  </strong>
                  <span className="mt-1 block text-xs leading-5 text-[#526070]">
                    {note}
                  </span>
                </li>
              ))}
            </ol>
            <div className="grid gap-2 sm:grid-cols-3">
              <span className="rounded-md border border-[#164b8f]/20 bg-[#e9f1fb] p-2 text-xs font-black text-[#164b8f]">
                <b className="block text-[#071326]">{selectedWidget.chapter}</b>
                source chapter
              </span>
              <span className="rounded-md border border-[#164b8f]/20 bg-[#e9f1fb] p-2 text-xs font-black text-[#164b8f]">
                <b className="block text-[#071326]">{selectedWidget.topic}</b>
                topic
              </span>
              <span className="rounded-md border border-[#164b8f]/20 bg-[#e9f1fb] p-2 text-xs font-black text-[#164b8f]">
                <b className="block text-[#071326]">Live</b>
                visual reference
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {selectedChapter ? (
                <SourceLink
                  className="inline-flex min-h-10 items-center justify-center rounded-md border border-[#c79222]/50 bg-white px-3 text-sm font-black text-[#164b8f] hover:bg-[#fff7e7]"
                  detail=""
                  href={selectedChapter.resources.notes ?? selectedChapter.resources.notebook ?? selectedWidget.href}
                  label="Chapter resources"
                  resource={selectedWidget.title}
                />
              ) : null}
              <SourceLink
                className="inline-flex min-h-10 items-center justify-center rounded-md border border-[#c79222]/50 bg-white px-3 text-sm font-black text-[#164b8f] hover:bg-[#fff7e7]"
                detail=""
                href={selectedWidget.href}
                label="Source notebook"
                resource={selectedWidget.title}
              />
              <SourceLink
                className="inline-flex min-h-10 items-center justify-center rounded-md border border-[#c79222] bg-[#c79222] px-3 text-sm font-black text-[#06172d] hover:bg-[#d7a02b]"
                detail=""
                href={selectedWidget.colab}
                label="Open in Colab"
                resource={selectedWidget.title}
              />
            </div>
          </div>
          <Image
            className="h-[230px] w-full max-w-[560px] justify-self-center rounded-md border border-[#d9e2ec] bg-white object-contain p-3"
            src={selectedWidget.image}
            alt={selectedWidget.imageAlt}
            width={760}
            height={520}
            loading="eager"
            priority
            unoptimized
          />
        </div>
        <SourceBundle chapter={selectedChapter} widget={selectedWidget} />
      </section>

      <section>
        <div className="mb-3">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-[#8a6519]">
            Animated widgets
          </p>
          <h2 className="font-serif text-3xl font-black leading-tight text-[#0b2545]">
            Concept-by-concept notebooks
          </h2>
        </div>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {widgets.map((widget) => (
            <article
              key={widget.title}
              className={`grid min-h-[335px] content-start gap-2 rounded-lg border bg-white p-2.5 text-left shadow-lg shadow-[#071326]/5 transition-all ${
                widget.title === selectedWidget.title
                  ? "border-[#164b8f]"
                  : "border-[#ddcfad] hover:-translate-y-0.5 hover:border-[#164b8f]/50"
              }`}
            >
              <button
                className="grid gap-2.5 text-left"
                aria-pressed={widget.title === selectedWidget.title}
                type="button"
                onClick={() => setSelectedTitle(widget.title)}
              >
                <Image
                  className="h-[136px] w-full rounded-md border border-[#d9e2ec] bg-white object-contain p-2"
                  src={widget.image}
                  alt={widget.imageAlt}
                  width={320}
                  height={220}
                  loading={widget.title === selectedWidget.title ? "eager" : "lazy"}
                  unoptimized
                />
                <span className="text-xs font-black uppercase tracking-[0.14em] text-[#164b8f]">
                  {widget.chapter} / {widget.topic}
                </span>
                <strong className="font-serif text-lg font-black text-[#0b2545]">
                  {widget.title}
                </strong>
                <span className="text-sm leading-5 text-[#526070]">
                  {widget.description}
                </span>
              </button>
              <div className="mt-auto grid grid-cols-3 gap-1.5">
                <SourceLink
                  className="inline-flex min-h-8 items-center justify-center rounded-md border border-[#c79222]/50 bg-white px-1.5 text-center text-[0.68rem] font-black leading-[0.875rem] text-[#164b8f] hover:bg-[#fff7e7]"
                  detail=""
                  href={chapterHrefForWidget(chapters, widget)}
                  label="Chapter resources"
                  resource={widget.title}
                />
                <SourceLink
                  className="inline-flex min-h-8 items-center justify-center rounded-md border border-[#c79222]/50 bg-white px-1.5 text-center text-[0.68rem] font-black leading-[0.875rem] text-[#164b8f] hover:bg-[#fff7e7]"
                  detail=""
                  href={widget.href}
                  label="Source notebook"
                  resource={widget.title}
                />
                <SourceLink
                  className="inline-flex min-h-8 items-center justify-center rounded-md border border-[#c79222]/50 bg-white px-1.5 text-center text-[0.68rem] font-black leading-[0.875rem] text-[#164b8f] hover:bg-[#fff7e7]"
                  detail=""
                  href={widget.colab}
                  label="Open in Colab"
                  resource={widget.title}
                />
              </div>
            </article>
          ))}
        </div>
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
    <aside className="grid content-start gap-2 rounded-lg border border-[#ddcfad] bg-[#fffdf8]/95 p-3 shadow-xl shadow-[#071326]/10">
      <h2 className="font-serif text-2xl font-black leading-tight text-[#0b2545]">
        Everything behind the active notebook
      </h2>
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
    </aside>
  );
}

function SourceLink({
  className,
  detail,
  href,
  label,
  resource,
}: {
  className?: string;
  detail: string;
  href: string;
  label: string;
  resource: string;
}) {
  return (
    <ResourceLink
      className={className ?? "rounded-md border border-[#d9e2ec] bg-white p-3 transition-colors hover:border-[#164b8f]/50 hover:bg-[#f7fbff]"}
      eventName="notebook_resource_clicked"
      eventProperties={{ location: "notebook_workbench", resource, type: label }}
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      <strong className="block text-sm font-black text-[#164b8f]">{label}</strong>
      {detail ? <span className="mt-1 block text-xs leading-5 text-[#526070]">{detail}</span> : null}
    </ResourceLink>
  );
}

function chapterNumber(label?: string) {
  return label?.replace("Ch. ", "").replace("Appendix ", "");
}

function chapterHrefForWidget(chapters: BookChapter[], widget: LearningWidget) {
  const chapter = chapters.find((item) => item.number === chapterNumber(widget.chapter));

  return chapter?.resources.notes ?? chapter?.resources.notebook ?? widget.href;
}

function fileName(href: string) {
  return href.split("/").pop() ?? "Source file";
}
