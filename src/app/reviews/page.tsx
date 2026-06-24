import Link from "next/link";

import { ReviewsProof } from "@/components/reviews/reviews-proof";
import {
  bookLinks,
  bookStats,
  readerReviews,
  testimonials,
  universityLogos,
} from "@/content/book";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Reviews",
  description:
    "Source-backed adoption context, university proof logos, professor endorsements, and linked reader review excerpts for Machine Learning Refined.",
  path: "/reviews",
});

export default function ReviewsPage() {
  const adoptionStat = bookStats.find((stat) =>
    stat.label.includes("universities"),
  );

  return (
    <main className="min-h-screen bg-[#fbfaf4] px-5 py-12 text-[#071326] md:px-8">
      <div className="mx-auto max-w-7xl">
        <Link className="text-sm font-bold text-black/55" href="/">
          Machine Learning Refined
        </Link>

        <section className="mt-8 grid gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.7fr)] lg:items-end">
          <div>
            <p className="mb-2 text-xs font-black uppercase tracking-[0.16em] text-[#8a6519]">
              Reviews and adoption
            </p>
            <h1 className="font-serif text-5xl font-black leading-tight md:text-6xl">
              Trusted in classrooms and by independent readers
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-[#526070]">
              A compact proof page for the book: institution signals, named
              professor endorsements, and short reader-review excerpts that link
              back to their source pages.
            </p>
          </div>

          <div className="grid gap-3 rounded-lg border border-[#ddcfad] bg-white p-4">
            <p className="font-serif text-xl font-black text-[#0b2545]">
              {adoptionStat?.value ?? "100+"} universities and colleges
            </p>
            <p className="text-sm leading-6 text-[#526070]">
              The proof below uses existing book/site assets and verified source
              links only. No filters, counters, or fabricated blurbs.
            </p>
          </div>
        </section>

        <ReviewsProof
          amazonHref={bookLinks.amazon}
          goodreadsHref={bookLinks.goodreads}
          logos={universityLogos}
          readerReviews={readerReviews}
          repoHref={bookLinks.repo}
          testimonials={testimonials}
        />
      </div>
    </main>
  );
}
