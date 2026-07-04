import Image from "next/image";
import Link from "next/link";

import { purchaseLinks, testimonials, universityLogos } from "@/content/book";
import {
  collectionPageJsonLd,
  createPageMetadata,
  stringifyJsonLd,
} from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Machine Learning Refined Reviews and Adoption",
  description:
    "Review source-backed adoption context, university proof logos, professor endorsements, and purchase links for Machine Learning Refined.",
  path: "/reviews",
  keywords: [
    "Machine Learning Refined reviews",
    "Machine Learning Refined adoption",
    "machine learning textbook reviews",
    "Machine Learning Refined professors",
  ],
});

export default function ReviewsPage() {
  const jsonLd = collectionPageJsonLd({
    name: "Machine Learning Refined Reviews and Adoption",
    description: metadata.description ?? "",
    path: "/reviews",
    items: [
      ...testimonials.map((testimonial) => ({
        name: testimonial.name,
        description: testimonial.summary,
      })),
      ...purchaseLinks.map((link) => ({
        name: link.title,
        url: link.href,
      })),
    ],
  });

  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(jsonLd) }}
      />
      <Link className="text-sm text-black/55" href="/">
        Machine Learning Refined
      </Link>
      <h1 className="mt-8 max-w-3xl text-4xl font-semibold">
        Reviews & Adoption
      </h1>
      <p className="mt-4 max-w-2xl leading-7 text-black/65">
        Machine Learning Refined is used as a reference text at 100+
        universities and colleges, with professor praise for its visual,
        first-principles approach to machine learning.
      </p>

      <section aria-labelledby="adoption-logos" className="mt-12">
        <h2 id="adoption-logos" className="text-2xl font-semibold">
          Adoption proof
        </h2>
        <div className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {universityLogos.map((logo) => (
            <figure
              key={logo.name}
              className="grid min-h-24 place-items-center rounded-lg border border-black/10 p-4"
            >
              <Image
                className="max-h-12 w-auto object-contain grayscale"
                src={logo.image}
                alt={`${logo.name} logo`}
                width={logo.width}
                height={logo.height}
              />
            </figure>
          ))}
        </div>
      </section>

      <section aria-labelledby="professor-endorsements" className="mt-12">
        <h2 id="professor-endorsements" className="text-2xl font-semibold">
          Professor endorsements
        </h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="grid grid-cols-[64px_1fr] gap-4 rounded-lg border border-black/10 p-5"
            >
              <Image
                className="size-16 rounded-full object-cover"
                src={testimonial.image}
                alt={testimonial.name}
                width={96}
                height={96}
              />
              <div>
                <h3 className="font-medium">{testimonial.name}</h3>
                <p className="mt-1 text-sm text-black/50">
                  {testimonial.role}
                </p>
                <p className="mt-3 text-sm leading-6 text-black/60">
                  {testimonial.summary}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="purchase-links" className="mt-12">
        <h2 id="purchase-links" className="text-2xl font-semibold">
          Publisher and retailer links
        </h2>
        <div className="mt-5 flex flex-wrap gap-3">
          {purchaseLinks.map((link) => (
            <a
              key={link.title}
              className="rounded border border-black/15 px-4 py-3 text-sm font-medium transition-colors hover:border-[#155fac]/40"
              href={link.href}
              rel="noreferrer"
              target="_blank"
            >
              {link.title}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
