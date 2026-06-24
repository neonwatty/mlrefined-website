"use client";

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
    <div className="mt-10 grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
      <aside className="grid content-start gap-3">
        {roadmaps.map((roadmap) => (
          <button
            key={roadmap.id}
            className={`rounded-lg border bg-white p-4 text-left transition-all ${
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
            <span className="text-xs font-black uppercase tracking-[0.14em] text-[#8a6519]">
              {roadmap.badge}
            </span>
            <strong className="mt-2 block font-serif text-xl font-black text-[#0b2545]">
              {roadmap.title}
            </strong>
            <span className="mt-1 block text-sm leading-6 text-[#526070]">
              {roadmap.cadence}
            </span>
          </button>
        ))}
        <ResourceLink
          className="rounded-lg border border-[#ddcfad] bg-[#fffdf8] p-4 text-sm font-black text-[#164b8f]"
          eventName="instructor_resource_clicked"
          eventProperties={{ location: "roadmap_picker", resource: "Preface" }}
          href={prefaceHref}
          rel="noreferrer"
          target="_blank"
        >
          Read the preface
        </ResourceLink>
      </aside>

      <section className="grid gap-5 rounded-lg border border-[#ddcfad] bg-[#fffdf8] p-5">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.14em] text-[#8a6519]">
            Interactive roadmap
          </p>
          <h2 className="mt-2 font-serif text-4xl font-black text-[#0b2545]">
            {activeRoadmap.title}
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-[#526070]">
            {activeRoadmap.description}
          </p>
        </div>

        <div className="grid gap-3">
          {activeRoadmap.chapters.map((roadmapChapter, index) => {
            const chapter = chapters.find((item) => item.number === roadmapChapter.number);
            const isOpen = openChapter === roadmapChapter.number;

            return (
              <article key={`${activeRoadmap.id}-${roadmapChapter.number}`} className={`rounded-lg border bg-white p-4 ${isOpen ? "border-[#164b8f]" : "border-[#ddcfad]"}`}>
                <button
                  className="grid w-full gap-3 text-left md:grid-cols-[120px_minmax(0,1fr)_auto] md:items-center"
                  aria-expanded={isOpen}
                  type="button"
                  onClick={() => setOpenChapter(roadmapChapter.number)}
                >
                  <span className="text-xs font-black uppercase tracking-[0.14em] text-[#8a6519]">
                    Step {index + 1}
                    <span className="block text-[#164b8f]">Chapter {roadmapChapter.number}</span>
                  </span>
                  <span>
                    <strong className="block font-serif text-xl font-black text-[#0b2545]">
                      {roadmapChapter.label}
                    </strong>
                    <span className="mt-1 block text-sm leading-6 text-[#526070]">
                      {chapter?.title ?? "Chapter resource"}
                    </span>
                  </span>
                  <span className="text-sm font-black text-[#164b8f]">
                    {isOpen ? "Viewing" : "Show resources"}
                  </span>
                </button>
                {isOpen ? (
                  <div className="mt-4 grid gap-3 border-t border-[#ddcfad] pt-4">
                    <div className="flex flex-wrap gap-2">
                      {roadmapChapter.topics.map((topic) => (
                        <span key={topic} className="rounded-md bg-[#f7fbff] px-3 py-2 text-xs font-black text-[#164b8f]">
                          {topic}
                        </span>
                      ))}
                    </div>
                    {chapter ? <ChapterResourceLinks chapter={chapter} /> : null}
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>

        <div className="grid gap-3 border-t border-[#ddcfad] pt-5 md:grid-cols-3">
          {supportLinks.map((link) => (
            <ResourceLink
              key={link.label}
              className="rounded-md border border-[#ddcfad] bg-white p-4 transition-colors hover:border-[#164b8f]/50"
              eventName="instructor_resource_clicked"
              eventProperties={{
                location: "roadmap_support",
                resource: link.label,
              }}
              href={link.href}
              rel="noreferrer"
              target="_blank"
            >
              <strong className="block font-serif text-lg font-black text-[#0b2545]">{link.label}</strong>
              <span className="mt-1 block text-sm leading-6 text-[#526070]">{link.note}</span>
            </ResourceLink>
          ))}
        </div>
      </section>
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
    <div className="flex flex-wrap gap-2">
      {resources.map(([label, href]) => (
        <ResourceLink
          key={label}
          className="inline-flex min-h-10 items-center rounded-md border border-[#c79222]/50 bg-white px-3 text-sm font-black text-[#164b8f] hover:bg-[#fff7e7]"
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
