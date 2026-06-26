"use client";

import Image from "next/image";
import type { ReactNode } from "react";

import { ResourceLink } from "@/components/analytics/resource-link";

type BookSideRailLink = {
  href: string;
  label: string;
  note?: string;
  resource: string;
};

type BookSideRailProps = {
  children?: ReactNode;
  description: string;
  eyebrow: string;
  eventLocation: string;
  links?: BookSideRailLink[];
};

export function BookSideRail({
  children,
  description,
  eyebrow,
  eventLocation,
  links = [],
}: BookSideRailProps) {
  return (
    <aside
      className="hidden content-start gap-3 rounded-lg border border-[#ddcfad] bg-[#fffdf8]/95 p-4 shadow-lg shadow-[#071326]/5 lg:grid"
      data-testid="book-side-rail"
    >
      <Image
        alt="Machine Learning Refined second edition cover"
        className="mx-auto h-auto w-32 border border-[#ead4a4] shadow-lg shadow-[#071326]/10"
        height={1000}
        src="/book-cover-2nd.png"
        width={760}
      />
      <section>
        <h2 className="mb-2 text-xs font-black uppercase tracking-[0.14em] text-[#0b2545]">
          {eyebrow}
        </h2>
        <p className="text-sm leading-6 text-[#526070]">{description}</p>
      </section>
      {links.length > 0 ? (
        <div className="grid gap-2 text-sm">
          {links.map((link) => (
            <ResourceLink
              key={`${link.resource}-${link.href}`}
              className="rounded-md border border-[#ddcfad] bg-white p-2 font-black text-[#164b8f] transition-colors hover:border-[#164b8f]/50 hover:bg-[#f7fbff] hover:text-[#0b2545]"
              eventName="side_rail_resource_clicked"
              eventProperties={{
                location: eventLocation,
                resource: link.resource,
              }}
              href={link.href}
              rel="noreferrer"
              target="_blank"
            >
              <span className="block">{link.label}</span>
              {link.note ? (
                <span className="mt-1 block text-xs font-semibold leading-4 text-[#526070]">
                  {link.note}
                </span>
              ) : null}
            </ResourceLink>
          ))}
        </div>
      ) : null}
      {children}
    </aside>
  );
}
