import Image from "next/image";

import { ResourceLink } from "@/components/analytics/resource-link";
import { resourceGroups, universityLogos } from "@/content/book";

import { Arrow } from "./icons";

export function ProofAndResources() {
  return (
    <>
      <section className="mx-auto grid max-w-7xl gap-5 border-y border-[#ddcfad] bg-[#fffdf8]/72 px-5 py-5 md:px-8 lg:grid-cols-[320px_1fr] lg:items-center">
        <p className="font-serif text-lg font-black leading-tight">
          Used as a reference text at 100+ universities and colleges
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 lg:justify-between">
          {universityLogos.slice(0, 8).map((logo) => (
            <Image key={logo.name} className="max-h-9 w-auto object-contain" src={logo.image} alt={`${logo.name} logo`} width={logo.width} height={logo.height} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 md:px-8">
        <div className="grid gap-3 md:grid-cols-4">
          {resourceGroups.map((resource) => (
            <ResourceLink key={resource.title} className="group grid gap-3 rounded-lg border border-[#ddcfad] bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-[#164b8f]/45 hover:shadow-lg hover:shadow-[#071326]/10" eventName="github_resource_clicked" eventProperties={{ location: "home_resource_footer", resource: resource.title }} href={resource.href} target="_blank" rel="noreferrer">
              <span className="flex items-center justify-between gap-3">
                <strong className="font-serif text-xl font-black text-[#0b2545]">
                  {resource.title}
                </strong>
                <span className="text-[#164b8f] transition-transform group-hover:translate-x-1">
                  <Arrow />
                </span>
              </span>
              <span className="text-sm leading-6 text-[#526070]">
                {resource.description}
              </span>
            </ResourceLink>
          ))}
        </div>
      </section>
    </>
  );
}
