import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mlrefined.com"),
  title: {
    default: "Machine Learning Refined",
    template: "%s | Machine Learning Refined",
  },
  description:
    "Book resources, notebooks, exercises, and SEO analytics for Machine Learning Refined.",
  openGraph: {
    title: "Machine Learning Refined",
    description:
      "Book resources, notebooks, exercises, and SEO analytics for Machine Learning Refined.",
    url: "https://www.mlrefined.com",
    siteName: "Machine Learning Refined",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
