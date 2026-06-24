"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import { ResourceLink } from "@/components/analytics/resource-link";
import type { featuredFigures } from "@/content/home-page";

type Figure = (typeof featuredFigures)[number];

type FigureCarouselProps = {
  figures: Figure[];
};

const rotationMs = 4500;

export function FigureCarousel({ figures }: FigureCarouselProps) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const activeFigure = figures[index] ?? figures[0];
  const safeFigures = useMemo(() => figures.slice(0, 12), [figures]);

  useEffect(() => {
    if (isPaused || safeFigures.length < 2) return;

    const interval = window.setInterval(() => {
      setIndex((current) => (current + 1) % safeFigures.length);
    }, rotationMs);

    return () => window.clearInterval(interval);
  }, [isPaused, safeFigures.length]);

  if (!activeFigure) return null;

  return (
    <article className="grid gap-4 rounded-lg border border-[#ddcfad] bg-[#fffdf8]/95 p-4 shadow-xl shadow-[#071326]/10 lg:grid-cols-[minmax(360px,1.15fr)_minmax(300px,0.85fr)]">
      <ResourceLink
        className="relative grid min-h-[360px] place-items-center overflow-hidden rounded-md border border-[#d9e2ec] bg-white"
        eventName="home_visual_clicked"
        eventProperties={{
          chapter: activeFigure.chapter,
          location: "home_carousel_image",
          resource: activeFigure.title,
        }}
        href={activeFigure.href}
        rel="noreferrer"
        target="_blank"
      >
        {safeFigures.map((figure, figureIndex) => (
          <Image
            key={figure.title}
            className={`absolute inset-0 h-full w-full object-contain p-4 transition-all duration-700 ease-out ${
              figureIndex === index
                ? "translate-y-0 opacity-100"
                : "translate-y-3 opacity-0"
            }`}
            src={figure.image}
            alt={figure.alt}
            width={1600}
            height={950}
            priority={figureIndex === 0}
          />
        ))}
      </ResourceLink>

      <div className="grid content-center gap-4">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-[#8a6519]">
          {activeFigure.chapter}
        </p>
        <h3 className="font-serif text-3xl font-black leading-tight text-[#0b2545]">
          {activeFigure.title}
        </h3>
        <p className="min-h-20 text-[#526070]">{activeFigure.description}</p>
        <div className="flex flex-wrap gap-2">
          <ResourceLink
            className="inline-flex min-h-10 items-center justify-center rounded-md border border-[#c79222]/50 bg-white px-4 text-sm font-black text-[#164b8f] transition-colors hover:bg-[#fff7e7]"
            eventName="home_visual_clicked"
            eventProperties={{
              chapter: activeFigure.chapter,
              location: "home_carousel_cta",
              resource: activeFigure.title,
            }}
            href={activeFigure.href}
            rel="noreferrer"
            target="_blank"
          >
            Open chapter package
          </ResourceLink>
          {activeFigure.sourceHref ? (
            <ResourceLink
              className="inline-flex min-h-10 items-center justify-center rounded-md border border-[#c79222]/50 bg-white px-4 text-sm font-black text-[#164b8f] transition-colors hover:bg-[#fff7e7]"
              eventName="home_visual_source_clicked"
              eventProperties={{
                chapter: activeFigure.chapter,
                location: "home_carousel_cta",
                resource: activeFigure.title,
              }}
              href={activeFigure.sourceHref}
              rel="noreferrer"
              target="_blank"
            >
              Source figure
            </ResourceLink>
          ) : null}
          <button
            className="inline-flex min-h-10 items-center justify-center rounded-md border border-[#c79222]/50 bg-white px-4 text-sm font-black text-[#164b8f] transition-colors hover:bg-[#fff7e7]"
            type="button"
            aria-pressed={isPaused}
            onClick={() => setIsPaused((current) => !current)}
          >
            {isPaused ? "Resume" : "Pause"}
          </button>
        </div>
        <div className="grid grid-cols-4 gap-2 sm:grid-cols-6">
          {safeFigures.map((figure, figureIndex) => (
            <button
              key={figure.title}
              className={`grid min-h-16 place-items-center overflow-hidden rounded-md border bg-white p-1 transition-colors ${
                figureIndex === index
                  ? "border-[#164b8f]"
                  : "border-[#ddcfad] hover:border-[#164b8f]"
              }`}
              type="button"
              aria-label={`Show ${figure.title}`}
              aria-current={figureIndex === index}
              onClick={() => {
                setIndex(figureIndex);
                setIsPaused(true);
              }}
            >
              <Image
                className="h-14 w-full object-contain"
                src={figure.image}
                alt=""
                width={220}
                height={140}
              />
            </button>
          ))}
        </div>
      </div>
    </article>
  );
}
