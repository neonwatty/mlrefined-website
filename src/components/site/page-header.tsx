"use client";

import { useState } from "react";

import { TrackedLink } from "@/components/analytics/tracked-link";
import { primaryNav } from "@/lib/site";

type PageHeaderProps = {
  activeHref: string;
};

export function PageHeader({ activeHref }: PageHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-[#ead4a4]/40 bg-[linear-gradient(180deg,#06172d,#04101f)] text-[#fffaf0] shadow-lg shadow-[#071326]/20">
      <nav className="mx-auto flex w-[min(1680px,100%)] items-center justify-between gap-3 px-4 py-2 md:px-6 lg:min-h-16 lg:gap-6 lg:px-8 lg:py-0">
        <TrackedLink
          className="flex min-h-11 min-w-0 items-center gap-2.5 lg:gap-3"
          eventName="nav_clicked"
          eventProperties={{ label: "Brand", location: "site_header" }}
          href="/"
          aria-label="Machine Learning Refined home"
          onClick={() => setIsOpen(false)}
        >
          <span className="grid size-8 shrink-0 place-items-center border border-[#c79222] font-serif text-[0.62rem] font-black text-[#c79222] sm:size-10 sm:text-xs lg:size-11">
            MLR
          </span>
          <strong className="min-w-0 font-serif text-base font-black leading-tight text-white sm:text-xl">
            Machine Learning Refined
          </strong>
        </TrackedLink>
        <button
          className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-md border border-[#c79222]/55 px-3 text-sm font-black text-[#ffe0a3] transition-colors hover:bg-white/10 lg:hidden"
          type="button"
          aria-controls="mobile-site-navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          Menu
        </button>
        <div className="hidden max-w-full gap-1 text-[0.84rem] font-bold leading-tight text-[#ecf2fa] lg:flex lg:justify-end">
          {primaryNav.map((item) => {
            const isActive = item.href === activeHref;

            return (
              <TrackedLink
                key={item.href}
                className={`inline-flex min-h-11 shrink-0 items-center justify-center whitespace-nowrap rounded-md border px-3 text-center transition-colors ${
                  isActive
                    ? "border-[#c79222] bg-[#c79222]/20 text-[#ffe0a3]"
                    : "border-transparent hover:bg-white/10 hover:text-white"
                }`}
                aria-current={isActive ? "page" : undefined}
                eventName="nav_clicked"
                eventProperties={{ label: item.label, location: "site_header" }}
                href={item.href}
              >
                {item.label}
              </TrackedLink>
            );
          })}
        </div>
      </nav>
      <div
        className={`border-t border-[#ead4a4]/20 px-4 pb-3 pt-1 lg:hidden ${
          isOpen ? "block" : "hidden"
        }`}
        id="mobile-site-navigation"
      >
        <div className="mx-auto grid w-[min(1680px,100%)] gap-2">
          {primaryNav.map((item) => {
            const isActive = item.href === activeHref;

            return (
              <TrackedLink
                key={item.href}
                className={`inline-flex min-h-11 items-center justify-between rounded-md border px-3 text-sm font-black transition-colors ${
                  isActive
                    ? "border-[#c79222] bg-[#c79222]/20 text-[#ffe0a3]"
                    : "border-white/10 bg-white/5 text-[#ecf2fa] hover:bg-white/10 hover:text-white"
                }`}
                aria-current={isActive ? "page" : undefined}
                eventName="nav_clicked"
                eventProperties={{ label: item.label, location: "site_header_mobile" }}
                href={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
                {isActive ? (
                  <span className="text-xs font-black uppercase tracking-[0.12em] text-[#ead4a4]">
                    Current
                  </span>
                ) : null}
              </TrackedLink>
            );
          })}
        </div>
      </div>
    </header>
  );
}
