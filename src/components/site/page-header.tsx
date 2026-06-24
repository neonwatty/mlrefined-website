import Link from "next/link";

import { primaryNav } from "@/lib/site";

type PageHeaderProps = {
  activeHref: string;
};

export function PageHeader({ activeHref }: PageHeaderProps) {
  return (
    <header className="border-b border-[#ead4a4]/55 bg-[#06172d] text-[#fffaf0] shadow-lg shadow-[#071326]/10">
      <nav className="mx-auto grid max-w-7xl gap-4 px-5 py-4 md:px-8 lg:grid-cols-[auto_1fr] lg:items-center">
        <Link className="flex items-center gap-3" href="/">
          <span className="grid size-10 place-items-center border border-[#c79222] font-serif text-xs font-black text-[#c79222]">
            MLR
          </span>
          <span>
            <strong className="block font-serif text-lg leading-tight">
              Machine Learning Refined
            </strong>
            <span className="block text-[0.68rem] font-black uppercase tracking-[0.16em] text-[#ead4a4]">
              Foundations to implementation
            </span>
          </span>
        </Link>
        <div className="grid grid-cols-2 gap-2 text-sm font-bold text-[#fffaf0]/78 min-[420px]:grid-cols-3 lg:flex lg:justify-end">
          {primaryNav.map((item) => {
            const isActive = item.href === activeHref;

            return (
              <Link
                key={item.href}
                className={`inline-flex min-h-10 items-center justify-center rounded-md px-3 transition-colors lg:justify-start ${
                  isActive
                    ? "bg-[#c79222] text-[#06172d]"
                    : "bg-white/5 hover:bg-white/10 hover:text-white"
                }`}
                aria-current={isActive ? "page" : undefined}
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
