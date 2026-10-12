import Link from "next/link";

import {
  linearRegressionExample,
  linearRegressionOutput,
  regressionObservations,
} from "@/content/linear-regression-example";

const heading = "scroll-mt-24 font-serif text-2xl font-black text-[#0b2545] sm:text-3xl";
const linkStyle = "font-bold text-[#164b8f] underline underline-offset-4 hover:text-[#0b2545]";
const notebookRoot = "https://github.com/neonwatty/machine-learning-refined/blob/main/notes/5_Linear_regression";

export function LinearRegressionLesson() {
  return (
    <article aria-label="Linear regression introduction" className="mt-10 max-w-3xl space-y-10 text-base leading-7 text-[#33475b]">
      <nav aria-label="On this page" className="flex flex-wrap gap-x-5 gap-y-2 border-y border-[#ddcfad] py-4 text-sm">
        <a className={linkStyle} href="#least-squares">Least squares</a>
        <a className={linkStyle} href="#residual-visual">See the residuals</a>
        <a className={linkStyle} href="#numpy-example">NumPy example</a>
        <a className={linkStyle} href="#chapter-resources">Chapter resources</a>
      </nav>
      <section aria-labelledby="least-squares">
        <h2 id="least-squares" className={heading}>What does linear regression learn?</h2>
        <p className="mt-4">Linear regression predicts a numerical target from input features. With one feature, it fits a line: the intercept sets the prediction at zero, and the slope tells us how much the prediction changes when the input increases by one unit. It is a useful starting point for continuous outcomes when an approximately linear relationship is plausible.</p>
        <p className="mt-4">Before starting, you should be comfortable with Python arrays, means, and basic algebra. By the end, you will be able to fit a line with NumPy, interpret its residuals, and calculate its training error. Derivatives help with the full chapter, but are not needed to run this example.</p>
        <div className="mt-5 rounded-xl border border-[#ddcfad] bg-white p-5">
          <p className="font-mono font-bold text-[#0b2545]">prediction = intercept + slope × x</p>
          <p className="mt-2 font-mono">residual = observed y − prediction</p>
          <p className="mt-2 font-mono">MSE = sum of squared residuals / number of observations</p>
        </div>
        <p className="mt-4">Least squares chooses the coefficients that minimize the sum of squared residuals. Dividing that sum by the number of observations gives mean squared error (MSE), with the same minimizer. Squaring prevents positive and negative errors from canceling and gives larger misses more influence. These are vertical errors in the target, not perpendicular distances to the line.</p>
        <p className="mt-4">For one feature with nonzero variance, we can solve directly using centered inputs and targets. For many features, a numerical least-squares solver or an iterative method is more practical. The <Link className={linkStyle} href="/learn/gradient-descent-from-scratch">gradient descent guide</Link> explains how iterative parameter updates minimize a cost.</p>
      </section>
      <section aria-labelledby="residual-visual">
        <h2 id="residual-visual" className={heading}>See what the line misses</h2>
        <figure className="mt-5 rounded-xl border border-[#ddcfad] bg-white p-4 sm:p-6">
          <svg viewBox="0 0 560 350" role="img" aria-labelledby="regression-plot-title regression-plot-desc" className="h-auto w-full">
            <title id="regression-plot-title">Least-squares line and residuals for five observations</title>
            <desc id="regression-plot-desc">Inputs 0, 1, 2, 3, 4 have observed targets 1, 2, 2, 4, 5. The fitted line is y equals 0.8 plus x. Dashed vertical segments show residuals of 0.2, 0.2, minus 0.8, 0.2, and 0.2.</desc>
            {[0, 1, 2, 3, 4, 5].map((y) => (
              <g key={y}>
                <line x1="60" y1={285 - y * 44} x2="505" y2={285 - y * 44} stroke="#e2e8ef" />
                <text x="43" y={290 - y * 44} textAnchor="end" fontSize="14" fill="#526070">{y}</text>
              </g>
            ))}
            <path d="M60 40 V285 H505" fill="none" stroke="#526070" strokeWidth="2" />
            <line x1="75" y1={285 - 0.8 * 44} x2="475" y2={285 - 4.8 * 44} stroke="#164b8f" strokeWidth="3" />
            {regressionObservations.map((y, x) => (
              <g key={x}>
                <line x1={75 + x * 100} x2={75 + x * 100} y1={285 - y * 44} y2={285 - (0.8 + x) * 44} stroke="#a36a10" strokeWidth="3" strokeDasharray="4 3" />
                <circle cx={75 + x * 100} cy={285 - y * 44} r="6" fill="#0b2545" />
                <text x={75 + x * 100} y="309" textAnchor="middle" fontSize="14" fill="#526070">{x}</text>
              </g>
            ))}
            <text x="65" y="24" fontSize="15" fill="#0b2545">Target y</text>
            <text x="275" y="337" textAnchor="middle" fontSize="15" fill="#0b2545">Input x</text>
            <text x="95" y="67" fontSize="16" fill="#164b8f">Fitted line: y = 0.8 + x</text>
          </svg>
          <figcaption className="mt-3 text-sm leading-6">Dots are observations; the blue line shows predictions. Dashed gold segments are residuals. At x = 2, the line predicts 2.8 but the observed target is 2: the residual is −0.8. Its squared error is 0.64, contributing most of the total squared error of 0.80.</figcaption>
        </figure>
      </section>
      <section aria-labelledby="numpy-example">
        <h2 id="numpy-example" className={heading}>Fit linear regression with NumPy</h2>
        <p className="mt-4">Run this complete example in a Python notebook with NumPy installed. It uses the same five illustrative observations as the plot, with no random seed or external dataset required. See the <Link className={linkStyle} href="/resources">Colab and local Jupyter setup instructions</Link> if you need an environment.</p>
        <pre className="mt-5 max-w-full overflow-x-auto rounded-xl bg-[#06172d] p-5 text-xs leading-6 text-[#edf5ff] sm:text-sm"><code>{linearRegressionExample}</code></pre>
        <h3 className="mt-6 text-lg font-black text-[#0b2545]">Expected output</h3>
        <pre className="mt-3 max-w-full overflow-x-auto rounded-xl border border-[#ddcfad] bg-white p-5 text-xs leading-6 sm:text-sm"><code>{linearRegressionOutput}</code></pre>
        <p className="mt-4">Centering subtracts the mean from each array. The ratio of the two dot products gives the slope, and the intercept puts the fitted line through the mean input and mean target. Here the model predicts 0.8 + x. The MSE is 0.16 in squared target units; it measures fit on these five training observations, not performance on new data.</p>
        <p className="mt-4"><strong>Try it:</strong> change the middle target from 2 to 8 and rerun. Watch the coefficients and error change. A single unusual observation can pull a least-squares fit away from the rest of the data.</p>
      </section>
      <section aria-labelledby="regression-pitfalls">
        <h2 id="regression-pitfalls" className={heading}>Common mistakes and next steps</h2>
        <ul className="mt-4 list-disc space-y-3 pl-5">
          <li><strong>Constant inputs:</strong> if every x is identical, the slope formula divides by zero. There is no information to identify a unique slope and intercept; check that inputs vary.</li>
          <li><strong>Training error as a promise:</strong> low training MSE does not establish generalization. Evaluate on held-out observations and compare with a baseline that predicts the training target mean.</li>
          <li><strong>Extrapolation and causation:</strong> a fitted trend can fail outside the observed input range, and an association does not show that changing x causes y to change.</li>
          <li><strong>Outliers and curved patterns:</strong> inspect residuals. Large errors can dominate least squares; a systematic pattern can indicate that a straight line misses important structure.</li>
        </ul>
        <p className="mt-5">Continue with the official <a className={linkStyle} href={`${notebookRoot}/5_2_Least.ipynb`}>least-squares notebook (Section 5.2)</a> for the full formulation, then <a className={linkStyle} href={`${notebookRoot}/5_4_Metrics.ipynb`}>regression quality metrics (Section 5.4)</a> to compare ways of measuring error. The chapter resources below include exercises and the PDF collection.</p>
        <p className="mt-4">For categorical targets, continue to <Link className={linkStyle} href="/learn/logistic-regression-from-scratch">logistic regression from scratch</Link>. Despite its name, logistic regression models class probabilities rather than an unrestricted numerical target.</p>
      </section>
    </article>
  );
}
