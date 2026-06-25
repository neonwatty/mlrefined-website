import Image from "next/image";

import { ResourceLink } from "@/components/analytics/resource-link";
import type {
  ReaderReview,
  SocialProofLogo,
  Testimonial,
} from "@/content/book";

type ReviewsProofProps = {
  goodreadsHref: string;
  logos: SocialProofLogo[];
  publisherHref: string;
  readerReviews: ReaderReview[];
  repoHref: string;
  testimonials: Testimonial[];
};

export function ReviewsProof({
  goodreadsHref,
  logos,
  publisherHref,
  readerReviews,
  repoHref,
  testimonials,
}: ReviewsProofProps) {
  return (
    <div className="grid gap-5 lg:grid-cols-[285px_minmax(0,1fr)]">
      <aside
        aria-labelledby="source-trail-title"
        className="grid content-start gap-3 rounded-lg border border-[#ddcfad] bg-[#fffdf8]/95 p-4 shadow-lg shadow-[#071326]/5"
      >
        <p
          className="text-xs font-black uppercase tracking-[0.14em] text-[#526070]"
          id="source-trail-title"
        >
          Adoption context
        </p>
        <p className="text-sm leading-6 text-[#526070]">
          Machine Learning Refined is used as a reference text across
          engineering, computer science, data science, and applied mathematics.
        </p>
        <Image
          alt="Machine Learning Refined second edition cover"
          className="mx-auto h-auto w-36 shadow-xl shadow-[#071326]/15"
          height={1746}
          priority
          src="/book-cover-2nd.png"
          width={1226}
        />
        <div className="grid gap-2 text-sm font-black">
          <ResourceLink
            className="border-b border-[#ddcfad] py-2 text-[#164b8f] transition-colors hover:text-[#0b2545]"
            eventName="proof_source_clicked"
            eventProperties={{ location: "reviews_source_rail", resource: "publisher" }}
            href={publisherHref}
            rel="noreferrer"
            target="_blank"
          >
            Publisher page
          </ResourceLink>
          <ResourceLink
            className="border-b border-[#ddcfad] py-2 text-[#164b8f] transition-colors hover:text-[#0b2545]"
            eventName="proof_source_clicked"
            eventProperties={{ location: "reviews_source_rail", resource: "repo" }}
            href={repoHref}
            rel="noreferrer"
            target="_blank"
          >
            Resource repository
          </ResourceLink>
          <ResourceLink
            className="border-b border-[#ddcfad] py-2 text-[#164b8f] transition-colors hover:text-[#0b2545]"
            eventName="proof_source_clicked"
            eventProperties={{
              location: "reviews_source_rail",
              resource: "Goodreads",
            }}
            href={goodreadsHref}
            rel="noreferrer"
            target="_blank"
          >
            Goodreads source
          </ResourceLink>
        </div>
      </aside>

      <div className="grid gap-3">
        <section>
          <h1 className="font-serif text-[clamp(2.7rem,5vw,5.2rem)] font-black leading-[0.92]">
            Reviews &amp; Adoption
          </h1>
          <p className="mt-2 max-w-3xl text-lg leading-7 text-[#526070]">
            Used as a reference text at 100+ universities and colleges.
          </p>
        </section>
        <section aria-labelledby="adoption-logos-title">
          <div className="mb-3">
            <h2
              className="font-serif text-3xl font-black text-[#0b2545]"
              id="adoption-logos-title"
            >
              Selected Universities and Colleges
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {logos.map((logo) => (
              <figure
                key={logo.name}
                className="grid min-h-[92px] grid-rows-[68px_auto] place-items-center rounded-lg border border-[#ddcfad] bg-white p-2.5"
              >
                <span className="relative grid h-[68px] w-full place-items-center overflow-hidden">
                  <Image
                    alt={logo.name}
                    className={`h-auto object-contain ${logoClassName(
                      logo.name,
                    )}`}
                    height={logo.height}
                    src={logo.image}
                    width={logo.width}
                  />
                </span>
                <figcaption className="text-center text-xs font-black text-[#0b2545]">
                  {logo.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section aria-labelledby="endorsements-title">
          <div className="mb-3">
            <h2
              className="font-serif text-3xl font-black text-[#0b2545]"
              id="endorsements-title"
            >
              Professor Endorsements
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="rounded-lg border border-[#ddcfad] bg-white p-2.5"
              >
                <Image
                  alt={testimonial.name}
                  className="mb-3 h-[58px] w-[58px] rounded-full object-cover"
                  height={120}
                  src={testimonial.image}
                  width={120}
                />
                <div>
                  <h3 className="font-serif text-lg font-black text-[#0b2545]">
                    {testimonial.name}
                  </h3>
                  <p className="mt-1 text-xs font-black leading-5 text-[#164b8f]">
                    {testimonial.role}
                  </p>
                  <p className="mt-2 text-sm leading-5 text-[#526070]">
                    {testimonial.summary}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="reader-reviews-title">
          <div className="mb-3">
            <h2
              className="font-serif text-3xl font-black text-[#0b2545]"
              id="reader-reviews-title"
            >
              Reader Review Signals
            </h2>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {readerReviews.map((review) => (
              <article
                key={`${review.source}-${review.name}`}
                className="grid grid-cols-[42px_minmax(0,1fr)] gap-3 rounded-lg border border-[#ddcfad] bg-[#fffdf8] p-2.5"
              >
                <span
                  aria-hidden="true"
                  className="grid h-[42px] w-[42px] shrink-0 place-items-center rounded-full bg-[#071326] font-serif text-lg font-black uppercase text-white"
                >
                  {review.name[0]}
                </span>
                <div>
                  <div>
                    <h3 className="font-serif text-lg font-black text-[#0b2545]">
                      {review.name}
                    </h3>
                    <p className="text-sm font-black text-[#164b8f]">
                      Reviewed MLR on {review.source}
                    </p>
                  </div>
                  <p className="mt-2 text-base font-black leading-6 text-[#071326]">
                    &ldquo;{review.excerpt}&rdquo;
                  </p>
                  <ResourceLink
                    className="mt-2 inline-flex text-sm font-black text-[#164b8f] underline-offset-4 hover:underline"
                    eventName="reader_review_source_clicked"
                    eventProperties={{
                      location: "reviews_reader_reviews",
                      resource: review.source,
                      reviewer: review.name,
                    }}
                    href={review.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {review.source === "Amazon"
                      ? "Open Amazon listing"
                      : "Open Goodreads reviews"}
                  </ResourceLink>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function logoClassName(name: string) {
  if (name === "University of Michigan") {
    return "absolute left-1/2 top-[-58px] w-80 max-w-none -translate-x-1/2";
  }

  if (name === "University of Toronto") {
    return "absolute left-1/2 top-[-68px] w-[300px] max-w-none -translate-x-1/2";
  }

  if (name === "Texas A&M University") {
    return "absolute left-1/2 top-[-48px] w-[200px] max-w-none -translate-x-1/2";
  }

  return "h-auto w-auto max-h-[54px] max-w-[86%]";
}
