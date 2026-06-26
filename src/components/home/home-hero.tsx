import Image from "next/image";

import { TrackedLink } from "@/components/analytics/tracked-link";
import { pedagogySteps } from "@/content/home-page";

export function HomeHero() {
  return (
    <section className="mx-auto mb-5 mt-3 grid w-[min(1480px,calc(100%_-_24px))] gap-4 overflow-hidden rounded-lg border border-[#ddcfad] bg-[#fffdf8]/90 px-4 py-5 shadow-xl shadow-[#071326]/10 sm:w-[min(1480px,calc(100%_-_48px))] sm:px-5 sm:py-6 md:px-8 lg:grid-cols-[minmax(520px,720px)_minmax(300px,390px)] lg:items-center lg:justify-center lg:gap-x-[clamp(24px,3vw,44px)] lg:gap-y-5 lg:px-10 lg:py-8">
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

        <div className="mt-4 grid gap-2 sm:flex sm:flex-wrap">
          <TrackedLink className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#c79222] bg-[#c79222] px-4 text-[0.82rem] font-black text-[#06172d] shadow-lg shadow-[#c79222]/20 transition-colors hover:bg-[#d7a02b]" eventName="primary_cta_clicked" eventProperties={{ location: "home_hero", label: "Explore chapter resources" }} href="/chapters">
            Explore chapter resources
          </TrackedLink>
          <TrackedLink className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#c79222]/50 bg-white px-4 text-[0.82rem] font-black text-[#164b8f] transition-colors hover:bg-[#fff7e7]" eventName="primary_cta_clicked" eventProperties={{ location: "home_hero", label: "Open Python notebooks" }} href="/notebooks">
            Open Python notebooks
          </TrackedLink>
        </div>

        <p className="mt-3 max-w-[610px] text-sm font-bold text-[#6b5b3d]">
          Used as a reference text at 100+ universities and colleges.
        </p>
      </div>

      <figure className="m-0 w-full justify-self-center sm:w-auto lg:justify-self-start">
        <Image
          className="h-auto w-full border border-[#ead4a4]/75 object-contain shadow-2xl shadow-[#071326]/20 sm:w-[min(74%,300px)] lg:w-[min(100%,370px)] lg:max-h-[min(460px,calc(100vh-190px))]"
          src="/book-cover-2nd.png"
          alt="Machine Learning Refined second edition book cover"
          width={760}
          height={1000}
          sizes="(max-width: 640px) calc(100vw - 56px), (max-width: 1024px) 300px, 370px"
          priority
        />
      </figure>

      <div className="rounded-md bg-[linear-gradient(135deg,#071326,#0b2545_58%,#071326)] p-3.5 text-[#fffaf0] shadow-lg shadow-[#071326]/12 sm:p-5 lg:col-span-2 lg:grid lg:grid-cols-[minmax(260px,0.55fr)_minmax(0,1.45fr)] lg:items-center lg:gap-6">
        <div className="max-w-[460px]">
          <p className="mb-1.5 text-[0.66rem] font-black uppercase tracking-[0.16em] text-[#ead4a4]">
            The pedagogy
          </p>
          <h2 className="font-serif text-[1.7rem] font-black leading-[1.03] sm:text-3xl lg:text-2xl">
            Visualize. Derive. Implement.
          </h2>
          <p className="mt-2 text-sm leading-5 text-[#fffaf0]/74 sm:leading-6">
            Every topic moves from geometric intuition to precise math to executable Python.
          </p>
        </div>
        <ol className="mt-3 grid gap-2 sm:grid-cols-3 lg:mt-0 lg:gap-3">
          {pedagogySteps.map((step) => (
            <li
              key={step.title}
              className="grid grid-cols-[32px_minmax(0,1fr)] items-start gap-2.5 rounded-md border border-white/10 bg-white/[0.055] p-2.5 text-left sm:min-h-[126px] sm:grid-cols-1 sm:justify-items-start sm:p-3.5 lg:min-h-0"
            >
              <span className="grid size-8 place-items-center rounded-full border border-[#ead4a4] bg-[#fffdf8] font-serif text-[0.6rem] font-black text-[#164b8f] shadow-md shadow-black/20">
                {step.number}
              </span>
              <span className="min-w-0">
                <strong className="block font-serif text-[0.98rem] font-black leading-tight sm:text-base">
                  {step.title}
                </strong>
                <span className="mt-0.5 block text-[0.82rem] leading-5 text-[#fffaf0]/70 sm:mt-1 sm:text-[0.78rem]">
                  {step.note}
                </span>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
