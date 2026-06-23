import { HomeHero } from "@/components/home/home-hero";
import { PedagogyStrip } from "@/components/home/pedagogy-strip";
import { ProofAndResources } from "@/components/home/proof-and-resources";
import { VisualFunnel } from "@/components/home/visual-funnel";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#fbfaf4] text-[#071326]">
      <HomeHero />
      <PedagogyStrip />
      <VisualFunnel />
      <ProofAndResources />
    </main>
  );
}
