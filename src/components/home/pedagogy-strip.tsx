import { pedagogySteps } from "@/content/home-page";

export function PedagogyStrip() {
  return (
    <section className="mx-auto my-4 grid w-[min(1480px,calc(100%_-_48px))] gap-5 rounded-lg bg-[radial-gradient(circle_at_12%_18%,rgba(199,146,34,0.24),transparent_34%),linear-gradient(135deg,#071326,#0b2545_58%,#071326)] px-5 py-5 text-[#fffaf0] shadow-2xl shadow-[#071326]/18 md:px-7 lg:grid-cols-[0.68fr_1.32fr] lg:items-center">
      <div>
        <p className="mb-1.5 text-[0.68rem] font-black uppercase tracking-[0.16em] text-[#ead4a4]">
          The pedagogy
        </p>
        <h2 className="font-serif text-2xl font-black leading-tight md:text-3xl">
          From picture to proof to Python
        </h2>
        <p className="mt-2 max-w-xl text-sm leading-6 text-[#fffaf0]/74">
          Each topic is built as a compact progression: plain-language
          intuition, geometric visualization, mathematical derivation, then
          executable implementation.
        </p>
      </div>
      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
        {pedagogySteps.map((step) => (
          <li key={step.title} className="relative grid min-h-24 justify-items-center gap-1.5 px-3 py-3 text-center lg:before:absolute lg:before:left-0 lg:before:right-0 lg:before:top-7 lg:before:h-px lg:before:bg-[#ead4a4]/45">
            <span className="z-10 grid size-10 place-items-center rounded-full border border-[#ead4a4] bg-[#fffdf8] font-serif text-xs font-black text-[#164b8f] shadow-lg shadow-black/25">
              {step.number}
            </span>
            <strong className="font-serif text-base font-black">
              {step.title}
            </strong>
            <span className="text-xs text-[#fffaf0]/70">{step.note}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
