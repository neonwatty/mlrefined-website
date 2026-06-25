"use client";

import Image from "next/image";
import { useState } from "react";

import { ResourceLink } from "@/components/analytics/resource-link";
import type { BookChapter, ChapterTrack } from "@/content/book";

type InstructorRoadmapProps = {
  chapters: BookChapter[];
  prefaceHref: string;
  roadmaps: ChapterTrack[];
  supportLinks: Array<{ href: string; label: string; note: string }>;
};

export function InstructorRoadmap({
  chapters,
  prefaceHref,
  roadmaps,
  supportLinks,
}: InstructorRoadmapProps) {
  const [activeRoadmapId, setActiveRoadmapId] = useState(roadmaps[0]?.id ?? "");
  const activeRoadmap =
    roadmaps.find((roadmap) => roadmap.id === activeRoadmapId) ?? roadmaps[0];
  const [openChapter, setOpenChapter] = useState(activeRoadmap?.chapters[0]?.number ?? "2");

  if (!activeRoadmap) return null;

  return (
    <div id="instructor-roadmaps" className="mt-2 grid gap-2 lg:grid-cols-[240px_minmax(520px,1fr)_260px]">
      <aside className="grid content-start gap-2">
        <h2 className="font-serif text-xs font-black uppercase text-[#0b2545]">
          Choose a roadmap
        </h2>
        {roadmaps.map((roadmap) => (
          <button
            key={roadmap.id}
            className={`grid min-h-[54px] grid-cols-[42px_1fr] items-center gap-1.5 rounded-md border bg-white p-1.5 text-left transition-all ${
              roadmap.id === activeRoadmap.id
                ? "border-[#164b8f] shadow-lg shadow-[#071326]/10"
                : "border-[#ddcfad] hover:border-[#164b8f]/50"
            }`}
            aria-pressed={roadmap.id === activeRoadmap.id}
            type="button"
            onClick={() => {
              setActiveRoadmapId(roadmap.id);
              setOpenChapter(roadmap.chapters[0]?.number ?? "2");
            }}
          >
            <Image
              className="h-[28px] w-[42px] object-cover"
              src={roadmap.image}
              alt={roadmap.imageAlt}
              width={116}
              height={76}
            />
            <span>
              <strong className="block font-serif text-sm font-black leading-tight text-[#0b2545]">
                {roadmap.title}
              </strong>
              <small className="block text-[0.68rem] font-bold leading-4 text-[#526070]">
                {roadmap.badge}
              </small>
              <small className="block text-[0.68rem] leading-4 text-[#526070]">
                {roadmap.subtitle}
              </small>
            </span>
          </button>
        ))}
        <ResourceLink
          className="rounded-lg border border-[#ddcfad] bg-[#fffdf8] p-2 text-sm font-black text-[#164b8f]"
          eventName="instructor_resource_clicked"
          eventProperties={{ location: "roadmap_picker", resource: "Preface" }}
          href={prefaceHref}
          rel="noreferrer"
          target="_blank"
        >
          Read the preface
        </ResourceLink>
      </aside>

      <section className="grid gap-1.5 overflow-hidden rounded-lg border border-[#ddcfad] bg-[#fffdf8] p-2 shadow-lg shadow-[#071326]/5">
        <div className="grid gap-2 border-b border-[#d9e2ec] pb-1.5 md:grid-cols-[minmax(0,1fr)_auto] md:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.14em] text-[#8a6519]">
              Interactive roadmap
            </p>
            <h2 className="mt-0.5 font-serif text-sm font-black text-[#164b8f]">
              {activeRoadmap.title}{" "}
              <span className="font-sans text-xs font-bold text-[#526070]">
                {activeRoadmap.subtitle}
              </span>
            </h2>
            <p className="mt-0.5 max-w-3xl text-xs leading-4 text-[#526070]">
              {activeRoadmap.description}
            </p>
          </div>
          <strong className="rounded-md border border-[#d9e2ec] bg-[#f8fbff] px-2 py-1 text-center text-[0.66rem] font-black text-[#164b8f]">
            {activeRoadmap.badge}
            <span className="mt-1 block text-[#526070]">{activeRoadmap.cadence}</span>
          </strong>
        </div>

        <div className="relative grid gap-1 pl-5 before:absolute before:bottom-4 before:left-8 before:top-4 before:w-0.5 before:rounded-full before:bg-[linear-gradient(#1f6db7,#50a28b)]">
          {activeRoadmap.chapters.map((roadmapChapter, index) => {
            const chapter = chapters.find((item) => item.number === roadmapChapter.number);
            const isOpen = openChapter === roadmapChapter.number;

            return (
              <article key={`${activeRoadmap.id}-${roadmapChapter.number}`} className="relative grid grid-cols-[62px_minmax(0,1fr)] gap-1.5">
                <div className="relative z-10 grid content-start justify-items-center gap-1.5 pt-2">
                  <span className="grid size-7 place-items-center rounded-full border-[3px] border-white bg-[#164b8f] text-xs font-black text-white shadow-lg shadow-[#164b8f]/25">
                    {index + 1}
                  </span>
                  <strong className="rounded-md border border-[#d9e2ec] bg-white px-1.5 py-1 text-center text-[0.62rem] font-black text-[#0b2545]">
                    Chapter {roadmapChapter.number}
                  </strong>
                </div>
                <div className={`rounded-md border bg-white p-1.5 ${isOpen ? "border-[#164b8f] shadow-md shadow-[#071326]/10" : "border-[#d9e2ec]"}`}>
                <button
                  className="grid w-full gap-2 text-left md:grid-cols-[minmax(0,1fr)_auto] md:items-center"
                  aria-expanded={isOpen}
                  type="button"
                  onClick={() => setOpenChapter(roadmapChapter.number)}
                >
                  <span>
                    <span className="text-xs font-black uppercase tracking-[0.14em] text-[#8a6519]">
                      Chapter {roadmapChapter.number}
                    </span>
                    <strong className="block font-serif text-sm font-black text-[#0b2545]">
                      {roadmapChapter.label}
                    </strong>
                    <span className="mt-0.5 block text-xs leading-4 text-[#526070]">
                      {chapter?.title ?? "Chapter resource"}
                    </span>
                  </span>
                  <span className="text-xs font-black text-[#164b8f]">
                    {isOpen ? "Viewing" : "Show resources"}
                  </span>
                </button>
                {isOpen ? (
                  <div className="mt-2 grid gap-2 border-t border-[#ddcfad] pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {roadmapChapter.topics.map((topic) => (
                        <span key={topic} className="rounded-md bg-[#f7fbff] px-2 py-1 text-[0.68rem] font-black text-[#164b8f]">
                          {topic}
                        </span>
                      ))}
                    </div>
                    {chapter ? <ChapterResourceLinks chapter={chapter} /> : null}
                  </div>
                ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <aside id="instructor-support" className="grid content-start gap-2 rounded-lg border border-[#ddcfad] bg-[#fffdf8] p-2.5 shadow-lg shadow-[#071326]/5">
        <h2 className="font-serif text-xs font-black uppercase text-[#0b2545]">
          Adoption Support
        </h2>
        <div className="grid gap-1 border-b border-[#ddcfad] pb-2">
          <strong className="font-serif text-sm text-[#0b2545]">For this path</strong>
          <span className="text-xs leading-5 text-[#526070]">
            {activeRoadmap.title}: {activeRoadmap.cadence}
          </span>
        </div>
        {supportLinks.map((link) => (
          <ResourceLink
            key={link.label}
            className="grid gap-1 border-b border-[#d9e2ec] py-1.5 transition-colors hover:text-[#164b8f]"
            eventName="instructor_resource_clicked"
            eventProperties={{
              location: "roadmap_support",
              resource: link.label,
            }}
            href={link.href}
            rel="noreferrer"
            target="_blank"
          >
            <strong className="font-serif text-sm text-[#0b2545]">{link.label}</strong>
            <span className="text-xs leading-5 text-[#526070]">{link.note}</span>
          </ResourceLink>
        ))}
      </aside>
    </div>
  );
}

function ChapterResourceLinks({ chapter }: { chapter: BookChapter }) {
  const resources = [
    ["PDF", chapter.resources.pdf],
    ["Notes", chapter.resources.notes ?? chapter.resources.notebook],
    ["Colab", chapter.resources.colab],
    ["Exercises", chapter.resources.exercise],
    ["Slides", chapter.resources.slides],
  ].filter((resource): resource is [string, string] => Boolean(resource[1]));

  return (
    <div className="flex flex-wrap gap-1.5">
      {resources.map(([label, href]) => (
        <ResourceLink
          key={label}
          className="inline-flex min-h-7 items-center rounded-md border border-[#c79222]/50 bg-white px-2 text-xs font-black text-[#164b8f] hover:bg-[#fff7e7]"
          eventName="instructor_chapter_resource_clicked"
          eventProperties={{
            chapter: chapter.number,
            location: "roadmap_chapter_resources",
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
