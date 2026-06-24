import { ReviewsProof } from "@/components/reviews/reviews-proof";
import { PageHeader } from "@/components/site/page-header";
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
    <main className="min-h-screen bg-[#fbfaf4] text-[#071326]">
      <PageHeader activeHref="/reviews" />
      <div className="mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-12">
        <section className="mt-4 grid gap-5 md:mt-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.7fr)] lg:items-end">
          <div>
            <p className="mb-2 text-xs font-black uppercase tracking-[0.16em] text-[#8a6519]">
              Reviews and adoption
            </p>
            <h1 className="font-serif text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
              Trusted in classrooms and by independent readers
            </h1>
            <p className="mt-3 max-w-3xl text-base leading-7 text-[#526070] md:mt-4 md:text-lg md:leading-8">
              A compact proof page for the book: institution signals, named
              professor endorsements, and short reader-review excerpts that link
              back to their source pages.
            </p>
          </div>

          <div className="grid gap-3 rounded-lg border border-[#ddcfad] bg-white p-4">
            <p className="font-serif text-xl font-black text-[#0b2545]">
              {adoptionStat?.value ?? "100+"} universities and colleges
            </p>
            <div className="grid gap-2 text-sm font-black text-[#164b8f] sm:grid-cols-3 lg:grid-cols-1">
              <a className="rounded-md bg-[#f7fbff] px-3 py-2 transition-colors hover:bg-[#eaf4ff]" href="#endorsements-title">
                Named endorsements
              </a>
              <a className="rounded-md bg-[#f7fbff] px-3 py-2 transition-colors hover:bg-[#eaf4ff]" href="#reader-reviews-title">
                Reader excerpts
              </a>
              <a className="rounded-md bg-[#f7fbff] px-3 py-2 transition-colors hover:bg-[#eaf4ff]" href="#source-trail-title">
                Source links
              </a>
            </div>
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
