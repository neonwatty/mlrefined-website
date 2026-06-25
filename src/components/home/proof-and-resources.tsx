import Image from "next/image";

import { TrackedLink } from "@/components/analytics/tracked-link";
import { readerReviews, universityLogos } from "@/content/book";

export function ProofAndResources() {
  return (
    <section className="mx-auto grid w-[min(1680px,100%)] gap-5 border-y border-[#ddcfad] bg-[#fffdf8]/72 px-6 py-5 md:px-[26px] lg:grid-cols-[300px_minmax(0,1fr)_360px] lg:items-center">
      <div className="grid gap-3">
        <p className="font-serif text-lg font-black leading-tight">
          Used as a reference text at 100+ universities and colleges
        </p>
        <div className="flex flex-wrap gap-2">
          <TrackedLink className="inline-flex min-h-10 items-center justify-center rounded-md border border-[#c79222]/50 bg-white px-3 text-sm font-black text-[#164b8f] transition-colors hover:bg-[#fff7e7]" eventName="primary_cta_clicked" eventProperties={{ location: "home_proof_band", label: "For instructors" }} href="/instructors">
            For instructors
          </TrackedLink>
          <TrackedLink className="inline-flex min-h-10 items-center justify-center rounded-md border border-transparent bg-transparent px-2 text-sm font-black text-[#164b8f] transition-colors hover:bg-[#fff7e7]" eventName="primary_cta_clicked" eventProperties={{ location: "home_proof_band", label: "See adoption proof" }} href="/reviews">
            See adoption proof
          </TrackedLink>
        </div>
      </div>
      <div className="grid grid-cols-4 items-center gap-x-5 gap-y-3 sm:grid-cols-8 lg:border-x lg:border-[#ddcfad] lg:px-5">
        {universityLogos.slice(0, 8).map((logo) => (
          <Image key={logo.name} className="max-h-12 w-auto object-contain" src={logo.image} alt={`${logo.name} logo`} width={logo.width} height={logo.height} />
        ))}
      </div>
      <div className="grid gap-2">
        <p className="text-xs font-black uppercase tracking-[0.14em] text-[#8a6519]">
          Reader signals
        </p>
        <div className="grid gap-2 sm:grid-cols-3 lg:grid-cols-1">
          {readerReviews.map((review) => (
            <TrackedLink
              key={`${review.source}-${review.name}`}
              className="rounded-md border border-[#ddcfad] bg-white p-2.5 transition-colors hover:border-[#164b8f]/50 hover:bg-[#f7fbff]"
              eventName="primary_cta_clicked"
              eventProperties={{
                label: `Review: ${review.source}`,
                location: "home_proof_band",
              }}
              href={review.href}
              rel="noreferrer"
              target="_blank"
            >
              <strong className="block font-serif text-sm font-black text-[#0b2545]">
                {review.excerpt}
              </strong>
              <span className="mt-1 block text-xs font-bold text-[#164b8f]">
                {review.source} review
              </span>
            </TrackedLink>
          ))}
        </div>
      </div>
    </section>
  );
}
