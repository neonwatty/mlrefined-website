import { ReviewsProof } from "@/components/reviews/reviews-proof";
import { PageHeader } from "@/components/site/page-header";
import {
  bookLinks,
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
  return (
    <main className="min-h-screen text-[#071326]">
      <PageHeader activeHref="/reviews" />
      <div className="mx-auto w-[min(1680px,100%)] px-6 py-6 md:px-[26px]">
        <ReviewsProof
          goodreadsHref={bookLinks.goodreads}
          logos={universityLogos}
          publisherHref={bookLinks.publisher}
          readerReviews={readerReviews}
          repoHref={bookLinks.repo}
          testimonials={testimonials}
        />
      </div>
    </main>
  );
}
