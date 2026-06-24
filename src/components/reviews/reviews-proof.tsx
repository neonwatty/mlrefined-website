import Image from "next/image";
import Link from "next/link";

import type {
  ReaderReview,
  SocialProofLogo,
  Testimonial,
} from "@/content/book";

type ReviewsProofProps = {
  amazonHref: string;
  goodreadsHref: string;
  logos: SocialProofLogo[];
  readerReviews: ReaderReview[];
  repoHref: string;
  testimonials: Testimonial[];
};

const sourceLinks = [
  { label: "Amazon reviews", source: "Amazon" },
  { label: "Goodreads reviews", source: "Goodreads" },
] as const;

export function ReviewsProof({
  amazonHref,
  goodreadsHref,
  logos,
  readerReviews,
  repoHref,
  testimonials,
}: ReviewsProofProps) {
  const hrefForSource = (source: "Amazon" | "Goodreads") =>
    source === "Amazon" ? amazonHref : goodreadsHref;

  return (
    <div className="mt-10 grid gap-7 lg:grid-cols-[280px_minmax(0,1fr)]">
      <aside className="grid content-start gap-4 rounded-lg border border-[#ddcfad] bg-[#fffdf8] p-5">
        <p className="text-xs font-black uppercase tracking-[0.14em] text-[#8a6519]">
          Source trail
        </p>
        <Image
          alt="Machine Learning Refined second edition cover"
          className="mx-auto h-auto w-44 rounded-md shadow-xl shadow-[#071326]/15"
          height={1746}
          priority
          src="/book-cover-2nd.png"
          width={1226}
        />
        <p className="text-sm leading-6 text-[#526070]">
          The page keeps readers on the site while every proof point remains one
          click from its source.
        </p>
        <div className="grid gap-2 text-sm font-black">
          <Link
            className="rounded-md border border-[#ddcfad] bg-white px-3 py-2 text-[#164b8f] transition-colors hover:border-[#164b8f]/50"
            href={repoHref}
          >
            Resource repository
          </Link>
          {sourceLinks.map((link) => (
            <Link
              key={link.source}
              className="rounded-md border border-[#ddcfad] bg-white px-3 py-2 text-[#164b8f] transition-colors hover:border-[#164b8f]/50"
              href={hrefForSource(link.source)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </aside>

      <div className="grid gap-8">
        <section aria-labelledby="adoption-logos-title">
          <div className="mb-4">
            <p className="text-xs font-black uppercase tracking-[0.14em] text-[#8a6519]">
              Adoption signals
            </p>
            <h2
              className="mt-2 font-serif text-3xl font-black text-[#0b2545]"
              id="adoption-logos-title"
            >
              Selected universities and colleges
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {logos.map((logo) => (
              <figure
                key={logo.name}
                className="grid min-h-36 grid-rows-[112px_auto] place-items-center rounded-lg border border-[#ddcfad] bg-white p-3"
              >
                <span className="relative grid h-28 w-full place-items-center overflow-hidden">
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
          <div className="mb-4">
            <p className="text-xs font-black uppercase tracking-[0.14em] text-[#8a6519]">
              Endorsements
            </p>
            <h2
              className="mt-2 font-serif text-3xl font-black text-[#0b2545]"
              id="endorsements-title"
            >
              Professor perspectives
            </h2>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="grid gap-4 rounded-lg border border-[#ddcfad] bg-white p-4 sm:grid-cols-[72px_minmax(0,1fr)]"
              >
                <Image
                  alt={testimonial.name}
                  className="h-16 w-16 rounded-full object-cover"
                  height={120}
                  src={testimonial.image}
                  width={120}
                />
                <div>
                  <h3 className="font-serif text-xl font-black text-[#0b2545]">
                    {testimonial.name}
                  </h3>
                  <p className="mt-1 text-sm font-black text-[#164b8f]">
                    {testimonial.role}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[#526070]">
                    {testimonial.summary}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="reader-reviews-title">
          <div className="mb-4">
            <p className="text-xs font-black uppercase tracking-[0.14em] text-[#8a6519]">
              Reader reviews
            </p>
            <h2
              className="mt-2 font-serif text-3xl font-black text-[#0b2545]"
              id="reader-reviews-title"
            >
              Short linked excerpts
            </h2>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {readerReviews.map((review) => (
              <article
                key={`${review.source}-${review.name}`}
                className="grid gap-4 rounded-lg border border-[#ddcfad] bg-[#fffdf8] p-4"
              >
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#071326] font-serif text-lg font-black uppercase text-white"
                  >
                    {review.name[0]}
                  </span>
                  <div>
                    <h3 className="font-serif text-lg font-black text-[#0b2545]">
                      {review.name}
                    </h3>
                    <p className="text-sm font-black text-[#164b8f]">
                      {review.source}
                    </p>
                  </div>
                </div>
                <p className="text-lg font-black leading-7 text-[#071326]">
                  &ldquo;{review.excerpt}&rdquo;
                </p>
                <Link
                  className="text-sm font-black text-[#164b8f] underline-offset-4 hover:underline"
                  href={review.href}
                >
                  Open {review.source} source
                </Link>
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
    return "w-64 max-w-none";
  }

  if (name === "University of Toronto") {
    return "w-64 max-w-none";
  }

  if (name === "Texas A&M University") {
    return "w-52 max-w-none";
  }

  return "max-h-16 max-w-[86%]";
}
