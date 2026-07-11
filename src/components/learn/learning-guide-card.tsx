import Image from "next/image";

import { TrackedLink } from "@/components/analytics/tracked-link";
import type { LearningGuide } from "@/content/book";
import { learningGuideHref } from "@/content/book";

export function LearningGuideCard({
  guide,
  eager = false,
}: {
  guide: LearningGuide;
  eager?: boolean;
}) {
  return (
    <article className="grid overflow-hidden rounded-xl border border-[#ddcfad] bg-white shadow-lg shadow-[#071326]/5">
      <div className="grid min-h-64 place-items-center bg-[#f7fbff] p-5">
        <Image
          className="max-h-56 w-full object-contain"
          src={guide.image.src}
          alt={guide.image.alt}
          width={guide.image.width}
          height={guide.image.height}
          loading={eager ? "eager" : "lazy"}
          unoptimized
        />
      </div>
      <div className="grid content-start gap-3 p-5">
        <p className="text-xs font-black uppercase tracking-[0.14em] text-[#8a6519]">
          Chapter {guide.chapterNumber} / Introductory
        </p>
        <h2 className="font-serif text-2xl font-black leading-tight text-[#0b2545]">
          {guide.title}
        </h2>
        <p className="text-sm leading-6 text-[#526070]">{guide.description}</p>
        <TrackedLink
          className="mt-1 inline-flex min-h-11 items-center justify-center rounded-md border border-[#c79222] bg-[#c79222] px-4 text-sm font-black text-[#06172d] transition-colors hover:bg-[#d7a02b]"
          eventName="learning_guide_opened"
          eventProperties={{
            guide: guide.slug,
            location: "learn_hub",
            resource: "guide",
          }}
          href={learningGuideHref(guide)}
        >
          Read the guide
        </TrackedLink>
      </div>
    </article>
  );
}
