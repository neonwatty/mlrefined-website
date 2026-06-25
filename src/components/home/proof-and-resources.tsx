import Image from "next/image";

import { TrackedLink } from "@/components/analytics/tracked-link";
import { readerReviews, testimonials, universityLogos } from "@/content/book";

export function ProofAndResources() {
  return (
    <section className="mx-auto mb-8 mt-5 w-[min(1480px,calc(100%_-_48px))] rounded-lg border border-[#ddcfad] bg-[#fffdf8]/90 p-5 shadow-xl shadow-[#071326]/10 md:p-6">
      <div className="grid gap-5 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:items-end">
        <div>
          <p className="mb-2 text-xs font-black uppercase tracking-[0.14em] text-[#8a6519]">
            Reviews &amp; adoption
          </p>
          <h2 className="font-serif text-[clamp(1.75rem,2.7vw,3rem)] font-black leading-tight text-[#0b2545]">
            Readers love it. Courses use it.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#526070]">
            A classroom-tested text with professor endorsements, university
            adoption, and reader reviews from Amazon and Goodreads.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 lg:justify-end">
          <TrackedLink className="inline-flex min-h-10 items-center justify-center rounded-md border border-[#c79222]/50 bg-white px-3 text-sm font-black text-[#164b8f] transition-colors hover:bg-[#fff7e7]" eventName="primary_cta_clicked" eventProperties={{ location: "home_proof_panel", label: "For instructors" }} href="/instructors">
            For instructors
          </TrackedLink>
          <TrackedLink className="inline-flex min-h-10 items-center justify-center rounded-md border border-[#c79222] bg-[#c79222] px-3 text-sm font-black text-[#06172d] transition-colors hover:bg-[#d7a02b]" eventName="primary_cta_clicked" eventProperties={{ location: "home_proof_panel", label: "See adoption proof" }} href="/reviews">
            See adoption proof
          </TrackedLink>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 items-center gap-2.5 sm:grid-cols-4 lg:grid-cols-8">
        {universityLogos.slice(0, 8).map((logo) => (
          <figure key={logo.name} className="grid min-h-[64px] place-items-center rounded-md border border-[#ddcfad] bg-white p-2">
            <Image className="max-h-11 w-auto object-contain" src={logo.image} alt={`${logo.name} logo`} width={logo.width} height={logo.height} />
          </figure>
        ))}
      </div>

      <div className="mt-5 grid gap-3 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <section aria-labelledby="home-endorsements-title">
          <h3 className="mb-2 font-serif text-xl font-black text-[#0b2545]" id="home-endorsements-title">
            Professor endorsements
          </h3>
          <div className="grid gap-2 sm:grid-cols-2">
            {testimonials.slice(0, 4).map((testimonial) => (
              <article key={testimonial.name} className="rounded-md border border-[#ddcfad] bg-white p-3">
                <strong className="block font-serif text-base font-black text-[#0b2545]">
                  {testimonial.name}
                </strong>
                <span className="mt-1 block text-xs font-black leading-4 text-[#164b8f]">
                  {testimonial.role}
                </span>
                <p className="mt-2 text-sm leading-5 text-[#526070]">
                  {testimonial.summary}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="home-reader-reviews-title">
          <h3 className="mb-2 font-serif text-xl font-black text-[#0b2545]" id="home-reader-reviews-title">
            Reader praise
          </h3>
          <div className="grid gap-2">
            {readerReviews.map((review) => (
              <TrackedLink
                key={`${review.source}-${review.name}`}
                className="grid gap-1 rounded-md border border-[#ddcfad] bg-white p-3 transition-colors hover:border-[#164b8f]/50 hover:bg-[#f7fbff]"
                eventName="primary_cta_clicked"
                eventProperties={{
                  label: `Review: ${review.source}`,
                  location: "home_proof_panel",
                }}
                href={review.href}
                rel="noreferrer"
                target="_blank"
              >
                <strong className="font-serif text-base font-black leading-tight text-[#0b2545]">
                  &ldquo;{review.excerpt}&rdquo;
                </strong>
                <span className="text-xs font-bold text-[#164b8f]">
                  {review.name} on {review.source}
                </span>
              </TrackedLink>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
