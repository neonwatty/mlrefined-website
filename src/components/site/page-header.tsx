import { TrackedLink } from "@/components/analytics/tracked-link";
import { primaryNav } from "@/lib/site";

type PageHeaderProps = {
  activeHref: string;
};

export function PageHeader({ activeHref }: PageHeaderProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-[#ead4a4]/40 bg-[linear-gradient(180deg,#06172d,#04101f)] text-[#fffaf0] shadow-lg shadow-[#071326]/20">
      <nav className="mx-auto grid min-h-[72px] w-[min(1680px,100%)] gap-[18px] px-5 py-2.5 md:grid-cols-[minmax(260px,0.75fr)_minmax(0,1.25fr)] md:items-center">
        <TrackedLink
          className="flex items-center gap-3"
          eventName="nav_clicked"
          eventProperties={{ label: "Brand", location: "site_header" }}
          href="/"
        >
          <span className="grid size-10 place-items-center border border-[#c79222] font-serif text-xs font-black text-[#c79222]">
            MLR
          </span>
          <span>
            <strong className="block font-serif text-lg leading-tight">
              Machine Learning Refined
            </strong>
            <span className="mt-1 block text-[0.7rem] font-black uppercase tracking-[0.08em] text-[#ead4a4]">
              Unified page-system prototype
            </span>
          </span>
        </TrackedLink>
        <div className="flex flex-wrap justify-start gap-1.5 text-[0.84rem] font-bold leading-tight text-[#ecf2fa] md:justify-center">
          {primaryNav.map((item) => {
            const isActive = item.href === activeHref;

            return (
              <TrackedLink
                key={item.href}
                className={`inline-flex min-h-10 items-center justify-center whitespace-nowrap rounded-md border px-3 text-center transition-colors ${
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
    </header>
  );
}
