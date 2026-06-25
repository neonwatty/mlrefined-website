import { bookLinks } from "./book-links";
import type { ReaderReview, SocialProofLogo, Testimonial } from "./book.types";

export const universityLogos: SocialProofLogo[] = [
  {
    name: "University of Michigan",
    image: "/social-proof/logos/university-of-michigan.png",
    width: 232,
    height: 134,
  },
  {
    name: "University of Toronto",
    image: "/social-proof/logos/university-of-toronto.png",
    width: 282,
    height: 190,
  },
  {
    name: "Texas A&M University",
    image: "/social-proof/logos/texas-am.png",
    width: 282,
    height: 232,
  },
  {
    name: "Penn State",
    image: "/social-proof/logos/penn-state.png",
    width: 270,
    height: 84,
  },
  {
    name: "New York University",
    image: "/social-proof/logos/nyu.png",
    width: 254,
    height: 60,
  },
  {
    name: "Kindai University",
    image: "/social-proof/logos/kindai.png",
    width: 270,
    height: 70,
  },
  {
    name: "Purdue University",
    image: "/social-proof/logos/purdue.png",
    width: 206,
    height: 70,
  },
  {
    name: "Georgia Tech",
    image: "/social-proof/logos/georgia-tech.png",
    width: 302,
    height: 70,
  },
  {
    name: "Arizona State University",
    image: "/social-proof/logos/asu.png",
    width: 350,
    height: 104,
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "John G. Proakis",
    role: "Professor Emeritus, Northeastern University",
    image: "/social-proof/people/john-proakis.jpeg",
    summary:
      "Highlights the book's path from basic principles to practical implementation.",
  },
  {
    name: "Osvaldo Simeone",
    role: "Professor, King's College London",
    image: "/social-proof/people/osvaldo-simeone.jpeg",
    summary:
      "Points to the first-principles presentation, geometric intuition, and Python exercises.",
  },
  {
    name: "David Duvenaud",
    role: "Associate Professor, University of Toronto",
    image: "/social-proof/people/david-duvenaud.jpg",
    summary:
      "Praises the steady build-up of tools, examples, runnable code, and detail.",
  },
  {
    name: "Kimiaki Shirahama",
    role: "Professor, Doshisha University",
    image: "/social-proof/people/kimiaki-shirahama.png",
    summary:
      "Emphasizes the unified optimization viewpoint and visual explanations.",
  },
];

export const readerReviews: ReaderReview[] = [
  {
    name: "Reader",
    source: "Amazon",
    title: "One of the best books in Machine Learning",
    excerpt:
      "What is an absolute gem are the chapters on Feature Learning, Selections and Engineering.",
    href: "https://www.amazon.com/review/R2HSLH6FN0YA2N/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8",
  },
  {
    name: "Estefano Palacios",
    source: "Amazon",
    title: "Gold",
    excerpt: "teaching machine learning rigorously but from first principles",
    href: "https://www.amazon.com/review/R15OKLTHO19AQF/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8",
  },
  {
    name: "Rama Ramakrishnan",
    source: "Amazon",
    title: "Love this book!",
    excerpt:
      "The content, the painstakingly created figures, and the beautiful hardback edition are all excellent.",
    href: "https://www.amazon.com/review/RA6V9P1WKCOXN/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8",
  },
  {
    name: "Julio Perez Olvera",
    source: "Amazon",
    title: "One of the best books on the topic",
    excerpt: "Would definitely recommend to anyone starting with ML.",
    href: `${bookLinks.amazon}#customerReviews`,
  },
  {
    name: "Booker",
    source: "Amazon",
    title: "Excellent book, great content, improved Kindle edition",
    excerpt: "one of the best ML books available",
    href: "https://www.amazon.com/review/R2S6URCQT7NIAX/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8",
  },
  {
    name: "HBK",
    source: "Amazon",
    title: "Very good book with the right blend of theory and applications",
    excerpt: "covers almost all important topics in ML",
    href: "https://www.amazon.com/review/R19KAK61UM2S1A/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8",
  },
];
