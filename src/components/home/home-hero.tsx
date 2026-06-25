import Image from "next/image";

import { TrackedLink } from "@/components/analytics/tracked-link";

export function HomeHero() {
  return (
    <section className="mx-auto grid min-h-[min(590px,calc(100vh-96px))] w-[min(1680px,100%)] items-center gap-7 px-6 py-5 md:px-[26px] lg:grid-cols-[minmax(420px,1fr)_minmax(240px,0.34fr)] lg:gap-[clamp(28px,5vw,74px)]">
      <div className="min-w-0">
        <h1 className="max-w-[780px] font-serif text-[clamp(3rem,5vw,4.65rem)] font-black leading-[0.92] tracking-normal">
          Machine Learning Refined
          <span className="mt-2 block font-sans text-[clamp(1.15rem,2vw,1.9rem)] font-extrabold leading-tight text-[#164b8f]">
            2nd Edition
          </span>
        </h1>
        <p className="-mt-0.5 mb-3 font-serif text-[clamp(1.1rem,1.8vw,1.55rem)] font-extrabold text-[#8a6519]">
          Foundations, Algorithms, and Applications
        </p>
        <p className="max-w-[660px] text-[1.04rem] leading-[1.46] text-[#526070]">
          A second-edition textbook that teaches machine learning from
          intuition and geometry to derivations and executable Python resources.
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

      <figure className="m-0 justify-self-center">
        <Image
          className="h-auto w-[min(100%,410px)] max-h-[min(540px,calc(100vh-150px))] border border-[#ead4a4]/75 object-contain shadow-2xl shadow-[#071326]/20"
          src="/book-cover-2nd.png"
          alt="Machine Learning Refined second edition book cover"
          width={760}
          height={1000}
          priority
        />
      </figure>
    </section>
  );
}
