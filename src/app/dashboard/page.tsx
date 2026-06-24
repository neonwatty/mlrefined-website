import { PageHeader } from "@/components/site/page-header";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Analytics Dashboard",
  description:
    "Owner dashboard scaffold for PostHog events, Google Search Console trends, and content SEO opportunities.",
  path: "/dashboard",
});

const dashboardSections = [
  "Search Console query opportunities",
  "PostHog resource click funnels",
  "Chapter engagement by learner intent",
  "Technical SEO checks and sitemap health",
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf4] text-[#071326]">
      <PageHeader activeHref="/dashboard" />
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-4xl font-semibold">Analytics dashboard</h1>
        <p className="mt-4 max-w-2xl leading-7 text-black/65">
          This owner-facing route will combine PostHog behavioral events with
          Google Search Console performance data so content improvements are
          tied to real search and engagement signals.
        </p>
        <div className="mt-10 grid gap-4">
          {dashboardSections.map((section) => (
            <div key={section} className="rounded-lg border border-black/10 p-5">
              <h2 className="font-medium">{section}</h2>
              <p className="mt-2 text-sm text-black/55">
                Planned for the next implementation pass.
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
