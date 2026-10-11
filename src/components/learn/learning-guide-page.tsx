import Image from "next/image";
import Link from "next/link";

import { ResourceLink } from "@/components/analytics/resource-link";
import { TrackedLink } from "@/components/analytics/tracked-link";
import type { LearningGuide } from "@/content/book";
import { chapterPageHref } from "@/lib/site";
import { GuideExampleResults } from "./guide-example-results";

export function LearningGuidePage({ guide }: { guide: LearningGuide }) {
  const chapter = { slug: guide.chapterSlug };

  return (
    <article className="mx-auto w-[min(1120px,100%)] px-5 py-10 md:px-8 md:py-16">
      <nav aria-label="Breadcrumb" className="text-sm font-black text-[#164b8f]">
        <Link className="hover:text-[#0b2545]" href="/learn">
          Learn
        </Link>
        <span className="px-2 text-[#8a96a4]" aria-hidden="true">
          /
        </span>
        <span className="text-[#526070]">{guide.shortTitle}</span>
      </nav>

      <header className="mt-8 max-w-4xl">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-[#8a6519]">
          From-scratch guide / Chapter {guide.chapterNumber} / Introductory
        </p>
        <h1 className="mt-3 font-serif text-4xl font-black leading-[1.05] text-[#0b2545] sm:text-5xl md:text-6xl">
          {guide.title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-[#33475b]">
          {guide.directAnswer}
        </p>
      </header>

      <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px]">
        <div className="min-w-0">
          <GuideSection id="how-it-works" title="How it works">
            <div className="rounded-lg border border-[#ddcfad] bg-[#fffdf8] p-5">
              <code className="block overflow-x-auto whitespace-pre-wrap break-words font-mono text-base font-black leading-7 text-[#0b2545]">
                {guide.equation}
              </code>
              <p className="mt-3 text-sm leading-6 text-[#526070]">
                {guide.equationExplanation}
              </p>
            </div>
            <ol className="mt-5 grid gap-3">
              {guide.steps.map((step, index) => (
                <li
                  key={step}
                  className="grid grid-cols-[2rem_minmax(0,1fr)] gap-3 text-base leading-7 text-[#33475b]"
                >
                  <span className="grid size-8 place-items-center rounded-full bg-[#0b2545] text-sm font-black text-white">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </GuideSection>

          <GuideSection id="visual-intuition" title="Visual intuition">
            <figure className="rounded-xl border border-[#d9e2ec] bg-[#f7fbff] p-5">
              <Image
                className="mx-auto max-h-[390px] w-full object-contain"
                src={guide.image.src}
                alt={guide.image.alt}
                width={guide.image.width}
                height={guide.image.height}
                unoptimized
              />
              <figcaption className="mt-4 text-sm leading-6 text-[#526070]">
                {guide.image.caption}
              </figcaption>
            </figure>
          </GuideSection>

          <GuideSection id="python-example" title="NumPy implementation">
            <p className="text-base leading-7 text-[#33475b]">
              This example is deterministic and uses NumPy for arrays and
              arithmetic, not a prebuilt optimizer or model implementation.
            </p>
            <pre className="mt-4 max-w-full overflow-x-auto rounded-xl bg-[#06172d] p-5 text-[0.78rem] leading-6 text-[#edf5ff] shadow-xl shadow-[#071326]/15 sm:text-sm">
              <code>{guide.code}</code>
            </pre>
            <div className="mt-5 grid gap-3">
              {guide.walkthrough.map((item) => (
                <p
                  key={item}
                  className="border-l-4 border-[#c79222] pl-4 text-sm leading-6 text-[#526070]"
                >
                  {item}
                </p>
              ))}
            </div>
          </GuideSection>

          <GuideSection id="worked-result" title="Check your result and choose parameters">
            <GuideExampleResults guide={guide} />
          </GuideSection>

          <GuideSection id="failure-modes" title="What can go wrong">
            <div className="grid gap-4 sm:grid-cols-2">
              {guide.cautions.map((caution) => (
                <section
                  key={caution.title}
                  className="rounded-lg border border-[#ead4a4] bg-[#fffdf8] p-5"
                >
                  <h3 className="font-serif text-xl font-black text-[#0b2545]">
                    {caution.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#526070]">
                    {caution.description}
                  </p>
                </section>
              ))}
            </div>
          </GuideSection>

          <GuideSection id="sources" title="Continue with the book and source">
            <p className="text-base leading-7 text-[#33475b]">
              This guide is grounded in Chapter {guide.chapterNumber},{" "}
              <em>{guide.chapterTitle}</em>, and the official Machine Learning
              Refined notebooks. Use the chapter for context, then open the
              exact sources below for the full treatment and exercises.
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <TrackedLink
                className="rounded-lg border border-[#164b8f]/35 bg-[#f7fbff] p-5 transition-colors hover:border-[#164b8f]"
                eventName="learning_guide_resource_clicked"
                eventProperties={{
                  guide: guide.slug,
                  location: "guide_sources",
                  resource: "chapter",
                }}
                href={chapterPageHref(chapter)}
              >
                <strong className="block font-serif text-xl font-black text-[#0b2545]">
                  Chapter {guide.chapterNumber}: {guide.chapterTitle}
                </strong>
                <span className="mt-2 block text-sm leading-6 text-[#526070]">
                  Read the chapter overview and browse its complete resource set.
                </span>
              </TrackedLink>
              <TrackedLink
                className="rounded-lg border border-[#164b8f]/35 bg-[#f7fbff] p-5 transition-colors hover:border-[#164b8f]"
                eventName="learning_guide_resource_clicked"
                eventProperties={{
                  guide: guide.slug,
                  location: "guide_sources",
                  resource: "notebook_workbench",
                }}
                href="/notebooks"
              >
                <strong className="block font-serif text-xl font-black text-[#0b2545]">
                  Visual notebook workbench
                </strong>
                <span className="mt-2 block text-sm leading-6 text-[#526070]">
                  Compare this animation with the other curated book notebooks.
                </span>
              </TrackedLink>
              {guide.resources.map((resource) => (
                <ResourceLink
                  key={`${resource.kind}-${resource.href}`}
                  className="rounded-lg border border-[#ddcfad] bg-white p-5 transition-colors hover:border-[#164b8f]/60"
                  eventName="learning_resource_clicked"
                  eventProperties={{
                    guide: guide.slug,
                    location: "guide_sources",
                    resource: resource.kind,
                  }}
                  href={resource.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  <strong className="block text-sm font-black text-[#164b8f]">
                    {resource.label}
                  </strong>
                  <span className="mt-2 block text-sm leading-6 text-[#526070]">
                    {resource.description}
                  </span>
                </ResourceLink>
              ))}
            </div>
          </GuideSection>
        </div>

        <aside className="h-fit rounded-xl border border-[#ddcfad] bg-[#fffdf8] p-5 lg:sticky lg:top-24">
          <p className="text-xs font-black uppercase tracking-[0.14em] text-[#8a6519]">
            On this page
          </p>
          <nav className="mt-3 grid gap-2 text-sm font-black text-[#164b8f]">
            <a className="min-h-10 py-2 hover:text-[#0b2545]" href="#how-it-works">
              How it works
            </a>
            <a className="min-h-10 py-2 hover:text-[#0b2545]" href="#visual-intuition">
              Visual intuition
            </a>
            <a className="min-h-10 py-2 hover:text-[#0b2545]" href="#python-example">
              NumPy implementation
            </a>
            <a className="min-h-10 py-2 hover:text-[#0b2545]" href="#worked-result">
              Results and parameters
            </a>
            <a className="min-h-10 py-2 hover:text-[#0b2545]" href="#failure-modes">
              What can go wrong
            </a>
            <a className="min-h-10 py-2 hover:text-[#0b2545]" href="#sources">
              Book and sources
            </a>
          </nav>
          <p className="mt-5 border-t border-[#ddcfad] pt-4 text-xs leading-5 text-[#526070]">
            Source: <em>Machine Learning Refined</em>, Chapter {guide.chapterNumber},{" "}
            {guide.chapterTitle}. Level: introductory machine learning.
          </p>
        </aside>
      </div>
    </article>
  );
}

function GuideSection({
  children,
  id,
  title,
}: {
  children: React.ReactNode;
  id: string;
  title: string;
}) {
  return (
    <section className="scroll-mt-24 border-b border-[#eadfca] py-9 first:pt-0" id={id}>
      <h2 className="mb-5 font-serif text-3xl font-black text-[#0b2545] sm:text-4xl">
        {title}
      </h2>
      {children}
    </section>
  );
}
