import { pedagogySteps } from "@/content/home-page";

export function PedagogyStrip() {
  return (
    <section className="mx-auto my-4 grid w-[min(1480px,calc(100%_-_48px))] gap-7 rounded-lg bg-[radial-gradient(circle_at_12%_18%,rgba(199,146,34,0.28),transparent_34%),linear-gradient(135deg,#071326,#0b2545_58%,#071326)] px-6 py-7 text-[#fffaf0] shadow-2xl shadow-[#071326]/20 md:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
      <div>
        <p className="mb-2 text-xs font-black uppercase tracking-[0.16em] text-[#ead4a4]">
          The pedagogy
        </p>
        <h2 className="font-serif text-3xl font-black leading-tight md:text-4xl">
          From picture to proof to Python
        </h2>
        <p className="mt-4 max-w-xl leading-7 text-[#fffaf0]/74">
          Each topic is built as a compact progression: plain-language
          intuition, geometric visualization, mathematical derivation, then
          executable implementation.
        </p>
      </div>
      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
        {pedagogySteps.map((step) => (
          <li key={step.title} className="relative grid min-h-32 justify-items-center gap-2 px-3 py-4 text-center lg:before:absolute lg:before:left-0 lg:before:right-0 lg:before:top-8 lg:before:h-px lg:before:bg-[#ead4a4]/45">
            <span className="z-10 grid size-12 place-items-center rounded-full border border-[#ead4a4] bg-[#fffdf8] font-serif text-sm font-black text-[#164b8f] shadow-lg shadow-black/25">
              {step.number}
            </span>
            <strong className="font-serif text-lg font-black">
              {step.title}
            </strong>
            <span className="text-sm text-[#fffaf0]/70">{step.note}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
