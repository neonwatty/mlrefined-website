import Link from "next/link";

import { primaryNav } from "@/lib/site";

type SiteHeaderProps = {
  activeHref: string;
};

export function SiteHeader({ activeHref }: SiteHeaderProps) {
  return (
    <header className="border-b border-black/10 bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link className="text-lg font-semibold tracking-normal" href="/">
          Machine Learning Refined
        </Link>
        <div className="hidden items-center gap-10 text-sm font-medium text-black/70 md:flex">
          {primaryNav.map((item) => {
            const isActive = item.href === activeHref;

            return (
              <Link
                key={item.href}
                className={`border-b-2 pb-2 transition-colors ${
                  isActive
                    ? "border-[#155fac] text-black"
                    : "border-transparent hover:text-black"
                }`}
                href={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
