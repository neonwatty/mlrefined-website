import Link from "next/link";

import { ResourceLink } from "@/components/analytics/resource-link";
import { bookLinks } from "@/content/book";

const setupUrl = `${bookLinks.repo}#software-installation-and-dependencies`;
const codeClass =
  "mt-4 max-w-full overflow-x-auto rounded-lg bg-[#06172d] p-4 text-xs leading-6 text-[#edf5ff] sm:text-sm";
const linkClass = "font-bold text-[#164b8f] underline underline-offset-4";

export function ResourceSetup() {
  return (
    <section aria-labelledby="notebook-setup" className="mt-12 min-w-0">
      <h2 id="notebook-setup" className="font-serif text-3xl font-black text-[#0b2545]">
        Run the Python notebooks
      </h2>
      <p className="mt-3 text-base leading-7 text-[#526070]">
        Basic Python and matrix mathematics are the starting prerequisites.
        Choose Colab for a browser session, or local Jupyter to work with the
        repository on your computer.
      </p>
      <div className="mt-6 grid grid-cols-1 gap-5">
        <section aria-labelledby="colab-setup" className="rounded-xl border border-[#ddcfad] bg-white p-5 sm:p-6">
          <h3 id="colab-setup" className="font-serif text-2xl font-black text-[#0b2545]">
            Option 1: Open in Google Colab
          </h3>
          <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-6 text-[#526070]">
            <li>
              Choose an example in the{" "}
              <Link className={linkClass} href="/notebooks">visual notebook collection</Link>
              {" "}and follow its Colab link. You can also find available Colab links
              on the <Link className={linkClass} href="/chapters">chapter pages</Link>.
            </li>
            <li>Sign in to Google if prompted. Save a copy in Drive if you want to keep your edits.</li>
            <li>
              Run cells from the top, including any setup or download cells,
              before running the examples. Read each notebook’s instructions
              for its data files and extra packages.
            </li>
          </ol>
          <p className="mt-4 text-sm leading-6 text-[#526070]">
            Most source notebooks can run in Colab without a local installation.
            Files and packages in a temporary runtime may need to be set up again
            when the session ends.
          </p>
        </section>
        <section aria-labelledby="local-setup" className="min-w-0 rounded-xl border border-[#ddcfad] bg-white p-5 sm:p-6">
          <h3 id="local-setup" className="font-serif text-2xl font-black text-[#0b2545]">
            Option 2: Run locally with Jupyter
          </h3>
          <p className="mt-3 text-sm leading-6 text-[#526070]">
            Install Git and Python 3.10 or newer first. Clone the full repository
            so the notebooks can find their helper modules and datasets. Run
            these commands in a terminal on macOS or Linux:
          </p>
          <pre className={codeClass}><code>{`git clone https://github.com/neonwatty/machine-learning-refined.git
cd machine-learning-refined
python3 -m venv .venv
.venv/bin/python -m pip install -r requirements.txt
.venv/bin/python -m notebook --ip=127.0.0.1`}</code></pre>
          <details className="mt-4 min-w-0">
            <summary className="cursor-pointer text-sm font-bold text-[#164b8f]">Windows (PowerShell) commands</summary>
            <pre className={codeClass}><code>{`git clone https://github.com/neonwatty/machine-learning-refined.git
cd machine-learning-refined
py -3 -m venv .venv
.\\.venv\\Scripts\\python.exe -m pip install -r requirements.txt
.\\.venv\\Scripts\\python.exe -m notebook --ip=127.0.0.1`}</code></pre>
          </details>
          <p className="mt-4 text-sm leading-6 text-[#526070]">
            Open the local URL printed by Jupyter, including its sign-in token
            if requested. Browse to a notebook under <code>notes/</code> or{" "}
            <code>exercises/</code>, select the environment’s Python kernel, and
            run its cells in order. Keep the terminal open while you work;
            stop the server with Ctrl+C when finished.
          </p>
          <p className="mt-3 text-sm leading-6 text-[#526070]">
            A missing module or data file usually means an environment or path
            needs attention. Check that you installed the repository’s{" "}
            <ResourceLink className={linkClass} eventName="github_resource_clicked" eventProperties={{ location: "resources_setup", resource: "requirements" }} href={`${bookLinks.repo}/blob/main/requirements.txt`} target="_blank" rel="noreferrer">requirements.txt</ResourceLink>
            {" "}in this environment and kept the repository folders intact.
            Some examples need additional tools such as FFmpeg for animation.
          </p>
        </section>
      </div>
      <p className="mt-5 text-sm leading-6 text-[#526070]">
        For alternative environments and notebook-specific guidance, consult the{" "}
        <ResourceLink className={linkClass} eventName="github_resource_clicked" eventProperties={{ location: "resources_setup", resource: "installation" }} href={setupUrl} target="_blank" rel="noreferrer">official installation instructions</ResourceLink>.
      </p>
      <section aria-labelledby="resource-questions" className="mt-10 rounded-xl border border-[#ddcfad] bg-[#fffdf8] p-5 sm:p-6">
        <h2 id="resource-questions" className="font-serif text-2xl font-black text-[#0b2545]">Before you download</h2>
        <h3 className="mt-5 font-bold">Which edition do these resources accompany?</h3>
        <p className="mt-2 text-sm leading-6 text-[#526070]">
          These collections accompany the second edition. The source notebooks
          include early-draft material; the final text expands on it and section
          numbering can differ. Use the chapter PDFs for the final presentation.
          The PDF and slide indexes label older first-edition collections separately.
        </p>
        <h3 className="mt-5 font-bold">Where are the exercises and datasets?</h3>
        <p className="mt-2 text-sm leading-6 text-[#526070]">
          Start in the repository’s chapter-specific exercise folders. Keep the
          notebooks alongside the supplied data and helper directories; a single
          downloaded notebook may not contain everything it imports or reads.
          Check its instructions for any additional downloads.
        </p>
        <h3 className="mt-5 font-bold">What should I study first?</h3>
        <p className="mt-2 text-sm leading-6 text-[#526070]">
          Start with the <Link className={linkClass} href="/learn/gradient-descent-from-scratch">gradient descent guide</Link>
          {" "}for a compact NumPy example with a checked result, or use the{" "}
          <ResourceLink className={linkClass} eventName="github_resource_clicked" eventProperties={{ location: "resources_setup", resource: "roadmap_guide" }} href={bookLinks.roadmapGuide} target="_blank" rel="noreferrer">book’s study roadmaps</ResourceLink>
          {" "}to plan a longer course.
        </p>
      </section>
    </section>
  );
}
