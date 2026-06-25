import { HomeHero } from "@/components/home/home-hero";
import { PedagogyStrip } from "@/components/home/pedagogy-strip";
import { ProofAndResources } from "@/components/home/proof-and-resources";
import { VisualFunnel } from "@/components/home/visual-funnel";
import { PageHeader } from "@/components/site/page-header";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip text-[#071326]">
      <PageHeader activeHref="/" />
      <HomeHero />
      <PedagogyStrip />
      <VisualFunnel />
      <ProofAndResources />
    </main>
  );
}
