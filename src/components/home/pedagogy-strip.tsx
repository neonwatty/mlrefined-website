import { pedagogySteps } from "@/content/home-page";

export function PedagogyStrip() {
  return (
    <section className="mx-auto my-3 grid w-[min(1480px,calc(100%_-_48px))] gap-3 rounded-lg bg-[radial-gradient(circle_at_12%_18%,rgba(199,146,34,0.22),transparent_34%),linear-gradient(135deg,#071326,#0b2545_58%,#071326)] px-5 py-3 text-[#fffaf0] shadow-xl shadow-[#071326]/16 md:px-6 lg:grid-cols-[0.62fr_1.38fr] lg:items-center">
      <div>
        <p className="mb-1 text-[0.66rem] font-black uppercase tracking-[0.16em] text-[#ead4a4]">
          The pedagogy
        </p>
        <h2 className="font-serif text-xl font-black leading-tight md:text-2xl">
          Visualize. Derive. Implement.
        </h2>
        <p className="mt-1.5 max-w-xl text-sm leading-5 text-[#fffaf0]/74">
          Geometry builds intuition, derivations make it precise, and Python
          makes it real.
        </p>
      </div>
      <ol className="grid grid-cols-3 gap-1 lg:gap-0">
        {pedagogySteps.map((step) => (
          <li key={step.title} className="relative grid min-h-14 justify-items-center gap-1 px-1 py-1.5 text-center lg:px-2 lg:before:absolute lg:before:left-0 lg:before:right-0 lg:before:top-6 lg:before:h-px lg:before:bg-[#ead4a4]/42">
            <span className="z-10 grid size-7 place-items-center rounded-full border border-[#ead4a4] bg-[#fffdf8] font-serif text-[0.64rem] font-black text-[#164b8f] shadow-md shadow-black/20 lg:size-8 lg:text-[0.68rem]">
              {step.number}
            </span>
            <strong className="font-serif text-[0.58rem] font-black leading-3 sm:text-sm sm:leading-tight">
              {step.title}
            </strong>
            <span className="hidden text-[0.68rem] leading-4 text-[#fffaf0]/70 sm:block">
              {step.note}
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}
