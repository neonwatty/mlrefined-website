import Image from "next/image";
import Link from "next/link";

import { ResourceLink } from "@/components/analytics/resource-link";
import { primaryNav, siteConfig } from "@/lib/site";

import { GitHubMark } from "./icons";

export function HomeHero() {
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
          <div className="hidden items-center gap-8 text-sm font-bold text-[#fffaf0]/78 md:flex">
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
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 pb-4 text-sm font-bold text-[#fffaf0]/78 md:hidden">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              className={`inline-flex min-h-10 shrink-0 items-center rounded-md px-3 transition-colors ${
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

      <section className="mx-auto grid min-h-[calc(100vh-82px)] max-w-7xl items-center gap-10 px-5 py-12 md:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(260px,430px)] lg:py-16">
        <div>
          <p className="mb-4 w-fit border-l-4 border-[#c79222] bg-white/70 px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#8a6519]">
            Foundations, Algorithms, and Applications
          </p>
          <h1 className="max-w-4xl font-serif text-6xl font-black leading-[0.9] tracking-normal md:text-8xl">
            Machine Learning Refined
            {" "}
            <span className="mt-3 block font-sans text-2xl font-black leading-tight text-[#164b8f] md:text-4xl">
              2nd Edition
            </span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#526070]">
            A visual, first-principles path into modern machine learning.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#c79222] bg-[#c79222] px-5 text-sm font-black text-[#06172d] shadow-lg shadow-[#c79222]/15 transition-colors hover:bg-[#d7a02b]" href="/chapters">
              Browse chapters
            </Link>
            <Link className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#c79222]/50 bg-white px-5 text-sm font-black text-[#164b8f] transition-colors hover:bg-[#fff7e7]" href="/notebooks">
              Browse notebooks
            </Link>
          </div>

          <ResourceLink className="mt-4 inline-flex items-center gap-2 text-sm font-black text-[#164b8f] transition-colors hover:text-[#0b2545]" eventName="github_resource_clicked" eventProperties={{ location: "home_hero", resource: "repo" }} href={siteConfig.githubRepo} target="_blank" rel="noreferrer">
            Open source resources
            <GitHubMark />
          </ResourceLink>
        </div>

        <figure className="mx-auto w-full max-w-[430px] lg:justify-self-end">
          <Image
            className="h-auto w-full border border-[#ead4a4] shadow-2xl shadow-[#071326]/20"
            src="/book-cover-2nd.png"
            alt="Machine Learning Refined second edition book cover"
            width={760}
            height={1000}
            priority
          />
        </figure>
      </section>
    </>
  );
}
