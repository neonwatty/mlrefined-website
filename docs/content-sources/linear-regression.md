# Chapter 5 page source receipt

The page summarizes the published second edition, rather than presenting a new generic tutorial. Prose is a concise paraphrase; notation, figure numbers and section references were checked against the official Chapter 5 PDF on 2026-10-12.

## Published chapter

- [Official repository PDF index](https://github.com/neonwatty/machine-learning-refined/blob/main/chapter_pdfs/README.md)
- [Chapter 5 PDF](https://www.dropbox.com/scl/fi/g2w41g4cg4rpi3dxr5gq1/chapter_5.pdf?rlkey=fqmi4ttvzgothvlqifka3dk82&dl=0)
- Sections 5.2.1–5.2.4, pp. 99–107: observation pairs, bias and feature-touching weights, augmented input, model/cost decomposition.
- Equations 5.7, 5.9 and 5.11: model and averaged Least Squares cost.
- Example 5.2, pp. 103–105: 75 gradient-descent steps, alpha 0.5; comparison with alpha 0.01.
- Figures 5.2 (p. 102) and 5.4 (p. 104) are cropped from the original PDF, not redrawn. Captions on the web page are paraphrases with attribution. Full-size image links support mobile inspection.
- Image production: PyMuPDF at 4x resolution. PDF page indices 3 and 5; crop rectangles (166,143,519,265) and (165,565,518,699). Outputs 1412x488 and 1412x536 PNGs.

## Runnable notebook adaptation

- [Section 5.2 notebook](https://github.com/neonwatty/machine-learning-refined/blob/90bbdae8eac176d86002eaec8f48753be668a6bb/notes/5_Linear_regression/5_2_Least.ipynb)
- Vectorized `model` / `least_squares`: cell 45 (zero-based).
- Dataset and array layout: cell 51; initial weights, learning rate, and iteration count: cell 60 (notebook Example 3).
- [Pinned original CSV](https://raw.githubusercontent.com/neonwatty/machine-learning-refined-notes-assets/63161442406ebbdd331af1e22e6327eabd81d344/notes/5_Linear_regression/chapter_5_datasets/2d_linregress_data.csv). The public downloadable copy is byte-identical.
- Intentional adaptation: regular NumPy plus an explicit analytic gradient replaces autograd and the chapter's helper module. No newly generated data or different optimizer is substituted. Results shown are from executing this adaptation, not claimed to be transcribed from the printed book.
- The page explicitly identifies the companion notebook as an early-draft resource, since its example numbering differs from the published edition.

## Verification

`python scripts/verify-linear-regression-example.py` (NumPy required, internet required) executes the published string, checks exact displayed output, verifies the pinned source data, compares with an independent least-squares solution and finite-difference gradient, checks the learning-rate comparison, and checks one-observation cost normalization.

The 75-step run is an approximate solution, not the exact least-squares minimizer. This Python check is separate from Node CI.
