"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import { captureAnalyticsEvent } from "@/components/analytics/capture";
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
  const showPrevious = () => {
    captureAnalyticsEvent("home_visual_carousel_control_clicked", {
      action: "previous",
      chapter: activeFigure.chapter,
      resource: activeFigure.title,
    });
    setIndex((current) => (current - 1 + safeFigures.length) % safeFigures.length);
    setIsPaused(true);
  };
  const showNext = () => {
    captureAnalyticsEvent("home_visual_carousel_control_clicked", {
      action: "next",
      chapter: activeFigure.chapter,
      resource: activeFigure.title,
    });
    setIndex((current) => (current + 1) % safeFigures.length);
    setIsPaused(true);
  };

  useEffect(() => {
    if (isPaused || safeFigures.length < 2) return;

    const interval = window.setInterval(() => {
      setIndex((current) => (current + 1) % safeFigures.length);
    }, rotationMs);

    return () => window.clearInterval(interval);
  }, [isPaused, safeFigures.length]);

  if (!activeFigure) return null;

  return (
    <article className="grid gap-3.5 rounded-lg border border-[#ddcfad] bg-[#fffdf8]/95 p-3.5 shadow-xl shadow-[#071326]/10 lg:grid-cols-[minmax(360px,1.15fr)_minmax(300px,0.85fr)]">
      <ResourceLink
        className="relative grid h-[clamp(390px,34vw,500px)] min-h-0 place-items-center overflow-hidden rounded-md border border-[#d9e2ec] bg-white"
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
            className={`absolute inset-0 h-full w-full object-contain p-3 transition-all duration-700 ease-out ${
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

      <div className="grid min-h-0 content-center gap-2.5">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-[#8a6519]">
          {activeFigure.chapter}
        </p>
        <h3 className="font-serif text-3xl font-black leading-tight text-[#0b2545]">
          {activeFigure.title}
        </h3>
        <p className="min-h-[4.6rem] text-[#526070]">{activeFigure.description}</p>
        <div className="flex flex-wrap gap-2">
          <button
            className="inline-flex min-h-10 items-center justify-center rounded-md border border-[#c79222]/50 bg-white px-4 text-sm font-black text-[#164b8f] transition-colors hover:bg-[#fff7e7]"
            type="button"
            onClick={showPrevious}
          >
            Previous
          </button>
          <button
            className="inline-flex min-h-10 items-center justify-center rounded-md border border-[#c79222]/50 bg-white px-4 text-sm font-black text-[#164b8f] transition-colors hover:bg-[#fff7e7]"
            type="button"
            onClick={showNext}
          >
            Next
          </button>
          <button
            className="inline-flex min-h-10 items-center justify-center rounded-md border border-[#c79222]/50 bg-white px-4 text-sm font-black text-[#164b8f] transition-colors hover:bg-[#fff7e7]"
            type="button"
            aria-pressed={isPaused}
            onClick={() => {
              captureAnalyticsEvent("home_visual_carousel_control_clicked", {
                action: isPaused ? "resume" : "pause",
                chapter: activeFigure.chapter,
                resource: activeFigure.title,
              });
              setIsPaused((current) => !current);
            }}
          >
            {isPaused ? "Resume" : "Pause"}
          </button>
        </div>
        <div className="grid gap-2 sm:grid-cols-2">
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
            Chapter resources
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
              Inspect image
            </ResourceLink>
          ) : null}
        </div>
        <div className="grid grid-cols-4 gap-1.5 sm:grid-cols-6 xl:grid-cols-7">
          {safeFigures.map((figure, figureIndex) => (
            <button
              key={figure.title}
              className={`grid min-h-[54px] place-items-center overflow-hidden rounded-md border bg-white p-1 transition-colors ${
                figureIndex === index
                  ? "border-[#164b8f]"
                  : "border-[#ddcfad] hover:border-[#164b8f]"
              }`}
              type="button"
              aria-label={`Show ${figure.title}`}
              aria-current={figureIndex === index}
              onClick={() => {
                captureAnalyticsEvent("home_visual_carousel_control_clicked", {
                  action: "thumbnail",
                  chapter: figure.chapter,
                  resource: figure.title,
                });
                setIndex(figureIndex);
                setIsPaused(true);
              }}
            >
              <Image
                className="h-11 w-full object-contain"
                src={figure.image}
                alt=""
                aria-hidden="true"
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
