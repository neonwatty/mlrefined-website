import Image from "next/image";
import Link from "next/link";

import {
  linearRegressionExample,
  linearRegressionOutput,
} from "@/content/linear-regression-example";

const heading = "scroll-mt-24 font-serif text-2xl font-bold text-[#0b2545] sm:text-3xl";
const linkStyle = "text-[#164b8f] underline underline-offset-4 hover:text-[#0b2545]";
const notebookRoot = "https://github.com/neonwatty/machine-learning-refined/blob/main/notes/5_Linear_regression";
const chapterPdf = "https://www.dropbox.com/scl/fi/g2w41g4cg4rpi3dxr5gq1/chapter_5.pdf?rlkey=fqmi4ttvzgothvlqifka3dk82&dl=0";

export function LinearRegressionLesson() {
  return (
    <article aria-label="Chapter 5 reading companion" className="mt-8 max-w-3xl space-y-10 text-base leading-8 text-[#33475b]">
      <p className="border-l-2 border-[#c79222] pl-5 text-sm leading-7">
        A reading companion to <a className={linkStyle} href={chapterPdf}>Chapter 5 of the second edition</a>,
        by Jeremy Watt, Reza Borhani, and Aggelos K. Katsaggelos. The explanation below follows
        Sections 5.2.1–5.2.4 (pp. 99–107); the figures are reproduced from the published chapter.
        The runnable example adapts the <a className={linkStyle} href={`${notebookRoot}/5_2_Least.ipynb`}>Section 5.2 companion notebook</a>,
        which accompanies an earlier draft of the book.
      </p>
      <nav aria-label="On this page" className="flex flex-wrap gap-x-5 gap-y-2 border-y border-[#ddcfad] py-4 text-sm">
        <a className={linkStyle} href="#notation">Notation</a>
        <a className={linkStyle} href="#least-squares">Least Squares cost</a>
        <a className={linkStyle} href="#minimization">Gradient descent</a>
        <a className={linkStyle} href="#numpy-example">Notebook example</a>
        <a className={linkStyle} href="#chapter-resources">Resources</a>
      </nav>
      <section aria-labelledby="notation">
        <h2 id="notation" className={heading}>5.2.1 Notation and modeling</h2>
        <p className="mt-4">The chapter begins with P input/output pairs (xₚ, yₚ). Each input xₚ is a column vector with N features; the output yₚ is a scalar. The task is to fit a line when N = 1, or a hyperplane when there are multiple input features.</p>
        <p className="my-5 font-serif text-xl text-[#0b2545]">w₀ + x₁,ₚw₁ + ⋯ + x<sub>N,p</sub>w<sub>N</sub> ≈ yₚ</p>
        <p>The parameter w₀ is the <em>bias</em>. The remaining parameters are the book’s <em>feature-touching weights</em>: each multiplies one input feature. The approximate equality matters because the observations need not lie exactly on one line or hyperplane.</p>
        <p className="mt-4">The book stacks a 1 above xₚ to form the augmented input x̊ₚ, and collects the bias and feature weights in the vector <strong>w</strong>. Equations (5.7) and (5.11) then express the same model compactly:</p>
        <p className="my-5 font-serif text-xl text-[#0b2545]">model(xₚ, <strong>w</strong>) = x̊ₚᵀ<strong>w</strong> ≈ yₚ</p>
        <p className="text-sm">Prerequisites: vectors, dot products, and the gradient-descent update from Chapter 3. The code below keeps the bias separate, so its input array contains the N features without an added row of ones.</p>
      </section>
      <section aria-labelledby="least-squares">
        <h2 id="least-squares" className={heading}>5.2.2 The Least Squares cost function</h2>
        <p className="mt-4">For one observation, the chapter measures error with the squared difference between the model and its target. Averaging these point-wise costs over the P observations gives Equation (5.9):</p>
        <div className="my-5 border-y border-[#ddcfad] py-5 font-serif text-xl leading-9 text-[#0b2545]">
          <p>gₚ(<strong>w</strong>) = (x̊ₚᵀ<strong>w</strong> − yₚ)²</p>
          <p>g(<strong>w</strong>) = (1/P) ∑<sub>p=1</sub><sup>P</sup> (x̊ₚᵀ<strong>w</strong> − yₚ)²</p>
        </div>
        <p>Squaring treats errors of equal magnitude alike, regardless of sign. The dataset stays fixed while we tune <strong>w</strong> to minimize g(<strong>w</strong>). This turns fitting a model into the kind of optimization problem developed in Chapters 2–4.</p>
        <figure className="mt-6">
          <a href="/learning-visuals/chapter-5/figure-5-2.png" aria-label="Open Figure 5.2 at full size">
            <Image src="/learning-visuals/chapter-5/figure-5-2.png" width={1412} height={488} sizes="(max-width: 768px) 100vw, 768px" alt="Figure 5.2: a fitted line with vertical error bars on the left; the same errors form the sides of blue squares on the right." className="h-auto w-full bg-white" />
          </a>
          <figcaption className="mt-3 text-sm leading-6"><strong>Figure 5.2 · Least Squares geometry.</strong> The left panel marks the prediction errors; the right represents their squares as areas. Minimizing the sum of those areas gives the same weights as minimizing their average. Reproduced from Chapter 5, p. 102. <a href={chapterPdf} className={linkStyle}>Read in the book</a>. Select the figure to enlarge it.</figcaption>
        </figure>
      </section>
      <section aria-labelledby="minimization">
        <h2 id="minimization" className={heading}>5.2.3 Minimizing the cost</h2>
        <p className="mt-4">Least Squares is a convex quadratic in the weights. Example 5.1 introduces a dataset of 50 observations near the line y = x and visualizes its cost surface. Example 5.2 then applies gradient descent with a fixed steplength α = 0.5 for 75 steps.</p>
        <figure className="mt-6">
          <a href="/learning-visuals/chapter-5/figure-5-4.png" aria-label="Open Figure 5.4 at full size">
            <Image src="/learning-visuals/chapter-5/figure-5-4.png" width={1412} height={536} sizes="(max-width: 768px) 100vw, 768px" alt="Figure 5.4: four stages of gradient descent, with steps on cost contours above and corresponding fitted lines below, progressing from green to red." className="h-auto w-full bg-white" />
          </a>
          <figcaption className="mt-3 text-sm leading-6"><strong>Figure 5.4 · Example 5.2.</strong> Read from left to right: the top row tracks movement through weight space, while the bottom row shows the line defined by those weights. Reproduced from Chapter 5, p. 104. <a href={chapterPdf} className={linkStyle}>Read in the book</a>. Select the figure to enlarge it.</figcaption>
        </figure>
        <p className="mt-5">The steplength still needs attention even though the cost is convex. The chapter compares α = 0.5 with α = 0.01 in Figure 5.5; the smaller value makes slower progress over this run. Revisit the <Link className={linkStyle} href="/learn/gradient-descent-from-scratch">gradient descent guide</Link> for the update rule.</p>
      </section>
      <section aria-labelledby="numpy-example">
        <h2 id="numpy-example" className={heading}>5.2.4 From the model to Python</h2>
        <p className="mt-4">The book separates implementation into <code>model</code> and <code>least_squares</code>. The model computes the bias plus a dot product; the cost averages squared errors. Inputs have shape N × P and outputs have shape 1 × P, with one observation per column.</p>
        <p className="mt-4">This NumPy adaptation uses the companion notebook’s actual <a className={linkStyle} href="/learning-data/chapter-5/2d_linregress_data.csv" download>50-point CSV dataset</a>, initial weights [−1, −2]ᵀ, steplength 0.5, and 75 iterations. It retains the notebook’s vectorized model and cost, replacing its <code>autograd</code> optimizer helper with the analytic gradient. The code downloads a pinned revision of the dataset, so it needs internet access and NumPy. <Link className={linkStyle} href="/resources">Set up Python or Colab</Link>.</p>
        <details className="mt-5 border-y border-[#ddcfad] py-4" open>
          <summary className="cursor-pointer font-bold text-[#0b2545]">Run the Section 5.2 example</summary>
          <pre className="mt-4 max-w-full overflow-x-auto bg-[#f1f3f5] p-4 text-xs leading-6 text-[#152a3f] sm:text-sm"><code>{linearRegressionExample}</code></pre>
        </details>
        <h3 className="mt-5 font-serif text-xl font-bold text-[#0b2545]">Verified output</h3>
        <pre className="mt-3 max-w-full overflow-x-auto border-l-2 border-[#c79222] pl-4 text-xs leading-6 sm:text-sm"><code>{linearRegressionOutput}</code></pre>
        <p className="mt-4">The cost falls from about 5.96 to 0.00230, and the weights approach a line with bias near zero and slope near one. These are results of the adaptation above, rounded to six decimal places, rather than values transcribed from the printed figure.</p>
        <p className="mt-4"><strong>Repeat the chapter’s comparison:</strong> change α from 0.5 to 0.01 and keep 75 steps. Compare the final costs. For the original animations, automatic differentiation, and the two-feature example, open the <a className={linkStyle} href={`${notebookRoot}/5_2_Least.ipynb`}>complete Section 5.2 notebook</a>.</p>
      </section>
      <section aria-labelledby="beyond-least-squares">
        <h2 id="beyond-least-squares" className={heading}>Continue through Chapter 5</h2>
        <p className="mt-4">Least Squares is the starting point, not the whole chapter. Section 5.3 introduces Least Absolute Deviations, Section 5.4 examines regression quality metrics, and Sections 5.5–5.6 extend the formulation to weighted and multi-output regression.</p>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li><a className={linkStyle} href={`${notebookRoot}/5_3_Absolute.ipynb`}>5.3 · Least Absolute Deviations</a></li>
          <li><a className={linkStyle} href={`${notebookRoot}/5_4_Metrics.ipynb`}>5.4 · Regression Quality Metrics</a></li>
          <li><a className={linkStyle} href={`${notebookRoot}/5_5_Weighted.ipynb`}>5.5 · Weighted Regression</a></li>
          <li><a className={linkStyle} href={`${notebookRoot}/5_6_Multi.ipynb`}>5.6 · Multi-Output Regression</a></li>
        </ul>
      </section>
    </article>
  );
}
