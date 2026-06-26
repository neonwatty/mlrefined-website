import Image from "next/image";

import { ResourceLink } from "@/components/analytics/resource-link";
import { BookSideRail } from "@/components/site/book-side-rail";
import type {
  ReaderReview,
  SocialProofLogo,
  Testimonial,
} from "@/content/book";
import { innerPageTitleClassName } from "@/lib/page-styles";

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
    <div className="grid gap-4 lg:grid-cols-[250px_minmax(0,1fr)]">
      <BookSideRail
        description="Machine Learning Refined is used as a reference text across engineering, computer science, data science, and applied mathematics."
        eyebrow="Adoption context"
        eventLocation="reviews_side_rail"
        links={[
          {
            href: publisherHref,
            label: "Publisher page",
            resource: "publisher",
          },
          {
            href: repoHref,
            label: "Resource repository",
            resource: "repo",
          },
          {
            href: goodreadsHref,
            label: "Goodreads source",
            resource: "goodreads",
          },
        ]}
      />

      <div className="grid gap-2.5">
        <section>
          <h1 className={innerPageTitleClassName}>Reviews &amp; Adoption</h1>
          <p className="mt-1.5 max-w-3xl text-lg leading-7 text-[#526070]">
            Used as a reference text at 100+ universities and colleges.
          </p>
        </section>
        <section aria-labelledby="adoption-logos-title">
          <div className="mb-2.5">
            <h2
              className="font-serif text-3xl font-black text-[#0b2545]"
              id="adoption-logos-title"
            >
              Selected Universities and Colleges
            </h2>
          </div>
          <div className="grid gap-2.5 sm:grid-cols-2 xl:grid-cols-3">
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
          <div className="mb-2.5">
            <h2
              className="font-serif text-3xl font-black text-[#0b2545]"
              id="endorsements-title"
            >
              Professor Endorsements
            </h2>
          </div>
          <div className="grid gap-2.5 sm:grid-cols-2 xl:grid-cols-4">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="rounded-lg border border-[#ddcfad] bg-white p-2"
              >
                <Image
                  alt={testimonial.name}
                  className="mb-2.5 h-[58px] w-[58px] rounded-full object-cover"
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
          <div className="mb-2.5">
            <h2
              className="font-serif text-3xl font-black text-[#0b2545]"
              id="reader-reviews-title"
            >
              Reader Review Signals
            </h2>
          </div>
          <div className="grid gap-2.5 md:grid-cols-3">
            {readerReviews.map((review) => (
              <article
                key={`${review.source}-${review.name}`}
                className="grid grid-cols-[42px_minmax(0,1fr)] gap-3 rounded-lg border border-[#ddcfad] bg-[#fffdf8] p-2"
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
                      {review.title}
                    </h3>
                    <p className="text-sm font-black text-[#164b8f]">
                      {review.name} on {review.source}
                    </p>
                  </div>
                  <p className="mt-2 text-base font-black leading-6 text-[#071326]">
                    &ldquo;{review.excerpt}&rdquo;
                  </p>
                  <ResourceLink
                    className="mt-2 inline-flex min-h-11 items-center rounded-md text-sm font-black text-[#164b8f] underline-offset-4 hover:underline"
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
                      ? "Open Amazon review"
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
