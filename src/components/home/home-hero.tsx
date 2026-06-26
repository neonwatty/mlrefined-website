import Image from "next/image";

import { TrackedLink } from "@/components/analytics/tracked-link";
import { pedagogySteps } from "@/content/home-page";

export function HomeHero() {
  return (
    <section className="mx-auto mb-5 mt-4 grid w-[min(1480px,calc(100%_-_24px))] gap-4 overflow-hidden rounded-lg border border-[#ddcfad] bg-[#fffdf8]/90 px-5 py-6 shadow-xl shadow-[#071326]/10 sm:w-[min(1480px,calc(100%_-_48px))] md:px-8 lg:grid-cols-[minmax(520px,720px)_minmax(300px,390px)] lg:items-center lg:justify-center lg:gap-x-[clamp(24px,3vw,44px)] lg:gap-y-5 lg:px-10 lg:py-8">
      <div className="min-w-0 lg:justify-self-end">
        <h1 className="max-w-[720px] font-serif text-[clamp(2.75rem,5vw,4.55rem)] font-black leading-[0.92] tracking-normal">
          Machine Learning Refined
        </h1>
        <p className="mt-2 font-sans text-[clamp(1.05rem,2vw,1.75rem)] font-extrabold leading-tight text-[#164b8f]">
          2nd Edition
        </p>
        <p className="mt-0.5 mb-3 font-serif text-[clamp(1.05rem,1.8vw,1.5rem)] font-extrabold leading-tight text-[#8a6519]">
          Foundations, Algorithms, and Applications
        </p>
        <p className="max-w-[640px] text-base leading-[1.48] text-[#526070] sm:text-[1.04rem]">
          Learn the foundations of machine learning, from scratch.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <TrackedLink className="inline-flex min-h-10 items-center justify-center rounded-md border border-[#c79222] bg-[#c79222] px-4 text-[0.82rem] font-black text-[#06172d] shadow-lg shadow-[#c79222]/20 transition-colors hover:bg-[#d7a02b]" eventName="primary_cta_clicked" eventProperties={{ location: "home_hero", label: "Explore chapter resources" }} href="/chapters">
            Explore chapter resources
          </TrackedLink>
          <TrackedLink className="inline-flex min-h-10 items-center justify-center rounded-md border border-[#c79222]/50 bg-white px-4 text-[0.82rem] font-black text-[#164b8f] transition-colors hover:bg-[#fff7e7]" eventName="primary_cta_clicked" eventProperties={{ location: "home_hero", label: "Open Python notebooks" }} href="/notebooks">
            Open Python notebooks
          </TrackedLink>
        </div>

        <p className="mt-3 max-w-[610px] text-sm font-bold text-[#6b5b3d]">
          Used as a reference text at 100+ universities and colleges.
        </p>
      </div>

      <figure className="m-0 justify-self-center lg:justify-self-start">
        <Image
          className="h-auto w-[min(100%,200px)] border border-[#ead4a4]/75 object-contain shadow-2xl shadow-[#071326]/20 sm:w-[min(74%,300px)] lg:w-[min(100%,370px)] lg:max-h-[min(460px,calc(100vh-190px))]"
          src="/book-cover-2nd.png"
          alt="Machine Learning Refined second edition book cover"
          width={760}
          height={1000}
          sizes="(max-width: 640px) 200px, (max-width: 1024px) 300px, 370px"
          priority
        />
      </figure>

      <div className="rounded-md bg-[linear-gradient(135deg,#071326,#0b2545_58%,#071326)] p-3.5 text-[#fffaf0] shadow-lg shadow-[#071326]/12 lg:col-span-2 lg:grid lg:grid-cols-[minmax(260px,0.62fr)_minmax(0,1.38fr)] lg:items-center lg:gap-5">
        <div>
          <p className="mb-1 text-[0.66rem] font-black uppercase tracking-[0.16em] text-[#ead4a4]">
            The pedagogy
          </p>
          <h2 className="font-serif text-lg font-black leading-tight md:text-2xl">
            Visualize. Derive. Implement.
          </h2>
        </div>
        <ol className="mt-3 grid grid-cols-3 gap-1 lg:mt-0 lg:gap-0">
          {pedagogySteps.map((step) => (
            <li key={step.title} className="relative grid min-h-12 justify-items-center gap-1 px-1 py-1 text-center lg:px-2 lg:before:absolute lg:before:left-0 lg:before:right-0 lg:before:top-5 lg:before:h-px lg:before:bg-[#ead4a4]/42">
              <span className="z-10 grid size-7 place-items-center rounded-full border border-[#ead4a4] bg-[#fffdf8] font-serif text-[0.64rem] font-black text-[#164b8f] shadow-md shadow-black/20 lg:size-7 lg:text-[0.64rem]">
                {step.number}
              </span>
              <strong className="font-serif text-[0.64rem] font-black leading-3 sm:text-sm sm:leading-tight">
                {step.title}
              </strong>
              <span className="hidden text-[0.68rem] leading-4 text-[#fffaf0]/70 sm:block">
                {step.note}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
