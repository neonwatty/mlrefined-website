import { ResourceLink } from "@/components/analytics/resource-link";
import { bookLinks } from "@/content/book";

const bookFooterLinks = [
  {
    label: "GitHub repository",
    href: bookLinks.repo,
  },
  {
    label: "Amazon",
    href: bookLinks.amazon,
  },
  {
    label: "Cambridge",
    href: bookLinks.publisher,
  },
] as const;

const authorFooterRows = [
  {
    name: "Jeremy Watt",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/neonwatty",
      },
      {
        label: "Personal website",
        href: "https://neonwatty.com",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/jeremy-watt",
      },
    ],
  },
  {
    name: "Reza Borhani",
    links: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/reza-borhani-1692ba79",
      },
    ],
  },
  {
    name: "Aggelos Katsaggelos",
    links: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/aggelos-katsaggelos-85b6b95",
      },
      {
        label: "Northwestern University",
        href: "https://www.mccormick.northwestern.edu/research-faculty/directory/profiles/katsaggelos-aggelos.html",
      },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-[#ddcfad] bg-[#071326] text-[#fffaf0]">
      <div className="mx-auto w-[min(1680px,100%)] px-5 py-7 text-sm md:px-8 lg:px-10">
        <div className="grid gap-7 md:grid-cols-[minmax(0,1fr)_1px_minmax(0,1fr)] md:items-start md:gap-10">
          <FooterLinkGroup label="Book links" links={bookFooterLinks} />
          <div
            aria-hidden="true"
            className="hidden h-full min-h-16 w-px bg-[#c79222]/55 md:block"
          />
          <AuthorLinkGroup rows={authorFooterRows} />
        </div>
        <p className="mt-7 border-t border-[#c79222]/45 pt-5 text-center text-xs font-semibold leading-5 text-[#c7d0dc]">
          © 2026 Jeremy Watt
        </p>
      </div>
    </footer>
  );
}

type FooterLink = {
  label: string;
  href: string;
};

function FooterLinkGroup({
  label,
  links,
}: {
  label: string;
  links: readonly FooterLink[];
}) {
  return (
    <div>
      <p className="text-xs font-black uppercase tracking-[0.2em] text-[#ead4a4]">
        {label}
      </p>
      <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 md:mt-4 md:items-baseline md:gap-x-4 md:gap-y-2">
        <FooterLinkList links={links} section={label} />
      </div>
    </div>
  );
}

type AuthorFooterRow = {
  name: string;
  links: readonly FooterLink[];
};

function AuthorLinkGroup({ rows }: { rows: readonly AuthorFooterRow[] }) {
  return (
    <div>
      <p className="text-xs font-black uppercase tracking-[0.2em] text-[#ead4a4]">
        Authors
      </p>
      <div className="mt-3 space-y-2 md:mt-4">
        {rows.map((row) => (
          <div
            key={row.name}
            className="flex flex-wrap items-center gap-x-3 gap-y-1 md:items-baseline md:gap-x-4 md:gap-y-2"
          >
            <p className="font-bold leading-6 text-white">{row.name}</p>
            <FooterLinkList
              links={row.links}
              section={`Authors / ${row.name}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function FooterLinkList({
  links,
  section,
}: {
  links: readonly FooterLink[];
  section: string;
}) {
  return (
    <ul className="flex flex-wrap items-center gap-x-2 gap-y-1 md:gap-x-3 md:gap-y-2">
      {links.map((link, index) => (
        <li key={link.href} className="flex items-center gap-x-3">
          {index > 0 ? (
            <span
              aria-hidden="true"
            className="hidden text-[#ead4a4]/45 md:inline"
            >
              |
            </span>
          ) : null}
          <ResourceLink
            className="inline-flex min-h-11 items-center rounded-md px-1 font-bold leading-6 text-[#ecf2fa] transition-colors hover:text-[#ffe0a3] hover:underline hover:decoration-[#c79222] hover:underline-offset-4 md:min-h-6 md:px-0"
            eventName="footer_link_clicked"
            eventProperties={{
              label: link.label,
              location: "site_footer",
              section,
            }}
            href={link.href}
            target="_blank"
          >
            {link.label}
          </ResourceLink>
        </li>
      ))}
    </ul>
  );
}
