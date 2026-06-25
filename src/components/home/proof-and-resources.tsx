import Image from "next/image";

import { TrackedLink } from "@/components/analytics/tracked-link";
import { universityLogos } from "@/content/book";

export function ProofAndResources() {
  return (
    <section className="mx-auto grid w-[min(1680px,100%)] gap-5 border-y border-[#ddcfad] bg-[#fffdf8]/72 px-6 py-4 md:px-[26px] lg:grid-cols-[320px_1fr] lg:items-center">
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
      <div className="grid grid-cols-4 items-center gap-x-6 gap-y-4 sm:grid-cols-8">
        {universityLogos.slice(0, 8).map((logo) => (
          <Image key={logo.name} className="max-h-11 w-auto object-contain" src={logo.image} alt={`${logo.name} logo`} width={logo.width} height={logo.height} />
        ))}
      </div>
    </section>
  );
}
