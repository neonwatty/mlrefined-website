import type { LearningGuide } from "@/content/book";

export function GuideExampleResults({ guide }: { guide: LearningGuide }) {
  return (
    <div className="grid grid-cols-1 gap-5 text-[#33475b]">
      <p className="text-base leading-7">
        Run the example above in Python with NumPy installed, then append these
        lines to inspect the result. The output shown uses the default inputs
        and parameters.
      </p>
      <pre className="max-w-full overflow-x-auto rounded-xl bg-[#06172d] p-5 text-[0.78rem] leading-6 text-[#edf5ff] sm:text-sm">
        <code>{guide.outputCode}</code>
      </pre>
      <div>
        <h3 className="mb-3 font-serif text-xl font-black text-[#0b2545]">
          Expected output
        </h3>
        <pre className="max-w-full overflow-x-auto rounded-lg border border-[#ddcfad] bg-[#fffdf8] p-5 text-sm leading-6">
          <code>{guide.expectedOutput}</code>
        </pre>
      </div>
      <p className="text-base leading-7">{guide.resultExplanation}</p>
      {guide.parameterNotes.map((note) => (
        <div key={note.title}>
          <h3 className="font-serif text-xl font-black text-[#0b2545]">
            {note.title}
          </h3>
          <p className="mt-2 text-sm leading-6">{note.description}</p>
        </div>
      ))}
      <div className="rounded-lg border border-[#d9e2ec] bg-[#f7fbff] p-5">
        <h3 className="font-serif text-xl font-black text-[#0b2545]">
          Try it yourself
        </h3>
        <p className="mt-2 text-sm leading-6">{guide.experiment}</p>
      </div>
    </div>
  );
}
