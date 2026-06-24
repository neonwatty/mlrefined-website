import Image from "next/image";
import Link from "next/link";

import { ResourceLink } from "@/components/analytics/resource-link";
import { featuredFigures } from "@/content/home-page";
import { TrackedLink } from "@/components/analytics/tracked-link";
import { primaryNav, siteConfig } from "@/lib/site";

import { GitHubMark } from "./icons";

export function HomeHero() {
  const heroFigureTitles = [
    "Feature Transformations",
    "Model Families Compared",
    "Boundary Families",
  ];
  const heroFigures = heroFigureTitles.flatMap((title) =>
    featuredFigures.filter((figure) => figure.title === title),
  );
  const mobilePreviewFigure = heroFigures[2] ?? heroFigures[0];

  return (
    <>
      <header className="sticky top-0 z-20 border-b border-[#ead4a4]/40 bg-[#06172d] text-[#fffaf0] shadow-lg shadow-[#071326]/15">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 md:px-8">
          <Link className="flex items-center gap-3" href="/">
            <span className="grid size-10 place-items-center border border-[#c79222] font-serif text-xs font-black text-[#c79222]">
              MLR
            </span>
            <span>
              <strong className="block font-serif text-lg leading-tight">
                Machine Learning Refined
              </strong>
              <span className="block text-[0.68rem] font-black uppercase tracking-[0.16em] text-[#ead4a4]">
                Foundations to implementation
              </span>
            </span>
          </Link>
          <div className="hidden items-center gap-2 text-sm font-bold text-[#fffaf0]/78 md:flex lg:gap-4">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                className={`rounded-md px-3 py-2 transition-colors ${
                  item.href === "/"
                    ? "bg-[#c79222] text-[#06172d]"
                    : "hover:bg-white/10 hover:text-white"
                }`}
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
        <div className="mx-auto grid max-w-7xl grid-cols-3 gap-2 px-5 pb-3 text-xs font-bold leading-tight text-[#fffaf0]/78 md:hidden">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              className={`inline-flex min-h-9 items-center justify-center rounded-md px-2 text-center transition-colors ${
                item.href === "/"
                  ? "bg-[#c79222] text-[#06172d]"
                  : "bg-white/5 hover:bg-white/10 hover:text-white"
              }`}
              aria-current={item.href === "/" ? "page" : undefined}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-10 md:px-8 lg:min-h-[680px] lg:grid-cols-[minmax(0,0.88fr)_minmax(520px,0.82fr)] lg:py-12">
        <div className="lg:max-w-2xl">
          <p className="mb-4 w-fit border-l-4 border-[#c79222] bg-white/70 px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#8a6519]">
            Foundations, Algorithms, and Applications
          </p>
          <h1 className="max-w-4xl font-serif text-4xl font-black leading-[0.95] tracking-normal sm:text-6xl md:text-7xl">
            Machine Learning Refined
            {" "}
            <span className="mt-3 block font-sans text-2xl font-black leading-tight text-[#164b8f] md:text-3xl">
              2nd Edition
            </span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#526070]">
            A visual, first-principles path into modern machine learning.
          </p>

          {mobilePreviewFigure ? (
            <ResourceLink
              className="mt-5 grid min-h-28 grid-cols-[118px_minmax(0,1fr)] gap-3 rounded-lg border border-[#ddcfad] bg-white p-2.5 shadow-lg shadow-[#071326]/5 transition-colors hover:border-[#164b8f]/50 lg:hidden"
              eventName="home_visual_clicked"
              eventProperties={{
                chapter: mobilePreviewFigure.chapter,
                location: "home_hero_mobile_visual",
                resource: mobilePreviewFigure.title,
              }}
              href={mobilePreviewFigure.href}
              rel="noreferrer"
              target="_blank"
            >
              <Image
                className="h-full min-h-24 w-full rounded-md border border-[#d9e2ec] bg-[#fbfaf4] object-contain p-1.5"
                src={mobilePreviewFigure.image}
                alt={mobilePreviewFigure.alt}
                width={280}
                height={180}
              />
              <span className="grid content-center gap-1">
                <span className="text-[0.68rem] font-black uppercase tracking-[0.14em] text-[#8a6519]">
                  {mobilePreviewFigure.chapter}
                </span>
                <strong className="font-serif text-lg font-black leading-tight text-[#0b2545]">
                  {mobilePreviewFigure.title}
                </strong>
              </span>
            </ResourceLink>
          ) : null}

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <TrackedLink className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#c79222] bg-[#c79222] px-5 text-sm font-black text-[#06172d] shadow-lg shadow-[#c79222]/15 transition-colors hover:bg-[#d7a02b]" eventName="primary_cta_clicked" eventProperties={{ location: "home_hero", label: "Browse chapters" }} href="/chapters">
              Browse chapters
            </TrackedLink>
            <TrackedLink className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#c79222]/50 bg-white px-5 text-sm font-black text-[#164b8f] transition-colors hover:bg-[#fff7e7]" eventName="primary_cta_clicked" eventProperties={{ location: "home_hero", label: "Browse notebooks" }} href="/notebooks">
              Browse notebooks
            </TrackedLink>
          </div>

          <ResourceLink className="mt-4 inline-flex items-center gap-2 text-sm font-black text-[#164b8f] transition-colors hover:text-[#0b2545]" eventName="github_resource_clicked" eventProperties={{ location: "home_hero", resource: "repo" }} href={siteConfig.githubRepo} target="_blank" rel="noreferrer">
            Open source resources
            <GitHubMark />
          </ResourceLink>
        </div>

        <div className="grid gap-4 sm:grid-cols-[minmax(180px,0.62fr)_minmax(0,1fr)] lg:justify-self-end">
          <figure className="mx-auto w-full max-w-[300px] sm:max-w-none">
            <Image
              className="h-auto w-full border border-[#ead4a4] shadow-2xl shadow-[#071326]/20"
              src="/book-cover-2nd.png"
              alt="Machine Learning Refined second edition book cover"
              width={760}
              height={1000}
              priority
            />
          </figure>

          <div className="grid gap-3">
            <div className="rounded-lg border border-[#ddcfad] bg-[#fffdf8] p-4 shadow-xl shadow-[#071326]/10">
              <p className="text-xs font-black uppercase tracking-[0.14em] text-[#8a6519]">
                Inside the book
              </p>
              <p className="mt-2 font-serif text-2xl font-black leading-tight text-[#0b2545]">
                Geometry first, then the algorithm.
              </p>
            </div>
            {heroFigures.map((figure) => (
              <ResourceLink
                key={figure.title}
                className="grid min-h-32 grid-cols-[132px_minmax(0,1fr)] gap-3 rounded-lg border border-[#ddcfad] bg-white p-2.5 shadow-lg shadow-[#071326]/5 transition-colors hover:border-[#164b8f]/50"
                eventName="home_visual_clicked"
                eventProperties={{
                  chapter: figure.chapter,
                  location: "home_hero_visual_stack",
                  resource: figure.title,
                }}
                href={figure.href}
                rel="noreferrer"
                target="_blank"
              >
                <Image
                  className="h-full min-h-28 w-full rounded-md border border-[#d9e2ec] bg-[#fbfaf4] object-contain p-1.5"
                  src={figure.image}
                  alt={figure.alt}
                  width={280}
                  height={180}
                />
                <span className="grid content-center gap-1">
                  <span className="text-[0.68rem] font-black uppercase tracking-[0.14em] text-[#8a6519]">
                    {figure.chapter}
                  </span>
                  <strong className="font-serif text-lg font-black leading-tight text-[#0b2545]">
                    {figure.title}
                  </strong>
                </span>
              </ResourceLink>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
