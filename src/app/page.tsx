import { HomeHero } from "@/components/home/home-hero";
import { ProofAndResources } from "@/components/home/proof-and-resources";
import { VisualFunnel } from "@/components/home/visual-funnel";
import { PageHeader } from "@/components/site/page-header";
import { homeJsonLd, stringifyJsonLd } from "@/lib/seo";

export default function Home() {
  const jsonLd = homeJsonLd();

  return (
    <main className="min-h-screen overflow-x-clip text-[#071326]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(jsonLd) }}
      />
      <PageHeader activeHref="/" />
      <HomeHero />
      <VisualFunnel />
      <ProofAndResources />
    </main>
  );
}
