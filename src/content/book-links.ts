export const bookLinks = {
  repo: "https://github.com/neonwatty/machine-learning-refined",
  notesAssets:
    "https://github.com/neonwatty/machine-learning-refined-notes-assets",
  pdfs:
    "https://github.com/neonwatty/machine-learning-refined/blob/main/chapter_pdfs/README.md",
  slides:
    "https://github.com/neonwatty/machine-learning-refined/blob/main/presentations/README.md",
  notes: "https://github.com/neonwatty/machine-learning-refined/tree/main/notes",
  exercises:
    "https://github.com/neonwatty/machine-learning-refined/tree/main/exercises",
  roadmapGuide:
    "https://github.com/neonwatty/machine-learning-refined/blob/main/README.md#how-to-use-the-book",
  preface:
    "https://www.dropbox.com/scl/fi/ww9csqm9luym160uerz0w/1_preface.pdf?rlkey=gu5j5ghii6txoijdfrexsvvti&st=4vfhw0cu&dl=0",
  amazon:
    "https://www.amazon.com/Machine-Learning-Refined-Foundations-Applications/dp/1108480721",
  goodreads:
    "https://www.goodreads.com/en/book/show/28148174-machine-learning-refined",
  publisher:
    "https://www.cambridge.org/us/academic/subjects/engineering/communications-and-signal-processing/machine-learning-refined-foundations-algorithms-and-applications-2nd-edition?format=HB",
} as const;

export function repoPath(path: string) {
  return `${bookLinks.repo}/${path}`;
}

export function colabPath(path: string) {
  return `https://colab.research.google.com/github/neonwatty/machine-learning-refined/blob/main/${path}`;
}

export function notesAssetPath(path: string) {
  return `${bookLinks.notesAssets}/blob/main/${path}`;
}
