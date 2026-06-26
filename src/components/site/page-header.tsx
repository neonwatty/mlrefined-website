import { TrackedLink } from "@/components/analytics/tracked-link";
import { primaryNav } from "@/lib/site";

type PageHeaderProps = {
  activeHref: string;
};

export function PageHeader({ activeHref }: PageHeaderProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-[#ead4a4]/40 bg-[linear-gradient(180deg,#06172d,#04101f)] text-[#fffaf0] shadow-lg shadow-[#071326]/20">
      <nav className="mx-auto flex w-[min(1680px,100%)] flex-col gap-2 px-4 py-2 md:px-6 lg:min-h-16 lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:px-8 lg:py-0">
        <TrackedLink
          className="flex min-w-0 items-center gap-2.5 lg:gap-3"
          eventName="nav_clicked"
          eventProperties={{ label: "Brand", location: "site_header" }}
          href="/"
          aria-label="Machine Learning Refined home"
        >
          <span className="grid size-8 shrink-0 place-items-center border border-[#c79222] font-serif text-[0.62rem] font-black text-[#c79222] sm:size-10 sm:text-xs lg:size-11">
            MLR
          </span>
          <strong className="min-w-0 font-serif text-[1.05rem] font-black leading-tight text-white sm:text-xl">
            Machine Learning Refined
          </strong>
        </TrackedLink>
        <div className="grid max-w-full grid-cols-[repeat(3,max-content)] gap-1 text-[0.78rem] font-bold leading-tight text-[#ecf2fa] sm:flex sm:flex-wrap sm:text-[0.84rem] lg:justify-end">
          {primaryNav.map((item) => {
            const isActive = item.href === activeHref;

            return (
              <TrackedLink
                key={item.href}
                className={`inline-flex min-h-8 shrink-0 items-center justify-center whitespace-nowrap rounded-md border px-2.5 text-center transition-colors sm:min-h-9 sm:px-3 lg:min-h-10 ${
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
