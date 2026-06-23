# Landing Page Reimagining Campaign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Run the first coordinated Agent Conveyor, Codex image-generation, and Limner campaign for the Machine Learning Refined page-system redesign.

**Architecture:** Agent Conveyor coordinates one manager and five page-family workers. Workers generate grounded ideal screen candidates from the approved design spec. Limner stores approved generated images as durable assets, then converts selected references into editable HTML/CSS mockups through `image-mockup` loops.

**Tech Stack:** Codex app threads, Agent Conveyor CLI, Codex image generation, Limner CLI, Limner polish plugin, Markdown campaign artifacts, Next.js app verification gates after mockup approval.

---

## Scope

This plan covers the visual campaign and Limner mockup setup. It does not implement the Next.js UI. Create a separate implementation plan after the approved Limner mockups exist, because component structure, routes, and final copy depend on the selected references.

## File Structure

- Modify: `.gitignore`
  - Ignore local Agent Conveyor and brainstorming companion artifacts.
- Create: `docs/landing-reimagining/worker-briefs/shared-grounding.md`
  - Shared source, style, asset, and exclusion rules for every worker.
- Create: `docs/landing-reimagining/worker-briefs/homepage.md`
  - Homepage image-generation brief.
- Create: `docs/landing-reimagining/worker-briefs/visual-gallery.md`
  - Visual Gallery image-generation brief.
- Create: `docs/landing-reimagining/worker-briefs/chapter-resource-discovery.md`
  - Chapter and Resource Discovery image-generation brief.
- Create: `docs/landing-reimagining/worker-briefs/instructor-path.md`
  - Instructor Path image-generation brief.
- Create: `docs/landing-reimagining/worker-briefs/reviews-adoption.md`
  - Reviews and Adoption image-generation brief.
- Create: `docs/landing-reimagining/selection-matrix.md`
  - Human-readable scoring matrix for choosing generated image references.
- Create during execution: `docs/landing-reimagining/worker-outputs/*.md`
  - Worker receipts with prompts, generated image paths, critique, and recommended candidate.
- Create during execution through Limner: `targets/mlr-homepage-visual-lab/**`
- Create during execution through Limner: `targets/mlr-visual-gallery/**`
- Create during execution through Limner: `targets/mlr-resource-discovery/**`
- Create during execution through Limner: `targets/mlr-instructor-path/**`
- Create during execution through Limner: `targets/mlr-reviews-adoption/**`
- Created by Limner: `.limner/runs/**`
- Local only: `.codex-workers/workerctl.db`
- Local only: `.superpowers/brainstorm/**`

## Task 1: Ignore Local Campaign Artifacts

**Files:**
- Modify: `.gitignore`

- [ ] **Step 1: Add local artifact ignores**

Use `apply_patch` to append these lines near the `# misc` section:

```gitignore
# local agent/workflow artifacts
.codex-workers/
.superpowers/
```

- [ ] **Step 2: Verify only expected tracked changes remain visible**

Run:

```bash
git status --short
```

Expected: `.codex-workers/` and `.superpowers/` are no longer listed as untracked. `.gitignore` is listed as modified.

- [ ] **Step 3: Commit artifact ignore rule**

Run:

```bash
git add .gitignore
git commit -m "Ignore local campaign artifacts"
```

Expected: commit succeeds.

## Task 2: Create Shared Worker Grounding Brief

**Files:**
- Create: `docs/landing-reimagining/worker-briefs/shared-grounding.md`

- [ ] **Step 1: Create the worker brief directory**

Run:

```bash
mkdir -p docs/landing-reimagining/worker-briefs docs/landing-reimagining/worker-outputs
```

Expected: command exits successfully.

- [ ] **Step 2: Write shared grounding content**

Use `apply_patch` to create `docs/landing-reimagining/worker-briefs/shared-grounding.md` with this content:

```markdown
# Shared Grounding Brief

Use this for every Machine Learning Refined visual worker.

## Canonical Sources

- Approved design spec: `docs/superpowers/specs/2026-06-21-landing-page-reimagining-design.md`
- Book/resource repository: `https://github.com/neonwatty/machine-learning-refined`
- Current public site for proof/content evidence only: `https://www.mlrefined.com/`
- Local cover: `public/book-cover-2nd.png`
- Local widgets: `public/learning-visuals/widgets/*`
- Local roadmaps: `public/learning-visuals/roadmaps/*`
- Local proof assets: `public/social-proof/logos/*`, `public/social-proof/people/*`

## Required Direction

Design in the Visual Learning Lab direction: an elegant machine-learning workbench with animated plots, notebook panes, equations, diagrams, resource maps, course paths, and visible book identity.

Use white and warm off-white paper surfaces, deep charcoal/navy, Cambridge-like gold, restrained academic blue, precise black typography, and crisp rules.

## Content Truth

Ground screens in the actual book/resource system:

- Chapter PDFs
- Colab and Jupyter notebooks
- Exercises
- Slides and instructor resources
- Study roadmaps
- GitHub repository
- Purchase/publisher paths
- University/adoption proof from the current public site
- Testimonials/accolades from the current public site and local proof assets

## Exclusions

Do not copy the current mlrefined.com styling, layout, typography, or Wix-like UX.

Avoid purple gradients, generic SaaS dashboards, decorative blobs, stock-like academia, fantasy artwork, and vague AI hype.

## Output Receipt

Each worker must create one Markdown receipt under `docs/landing-reimagining/worker-outputs/` with:

- Role name
- Final prompt used for each generated image
- Generated image path shown by Codex
- Which actual assets/content the image references
- One-paragraph critique
- Recommended candidate path
- Mobile behavior notes
```

- [ ] **Step 3: Review shared grounding for unresolved markers**

Run:

```bash
rg -n "TBD|TODO|UNRESOLVED|FILL_ME" docs/landing-reimagining/worker-briefs/shared-grounding.md
```

Expected: no matches.

## Task 3: Create Page-Family Worker Briefs

**Files:**
- Create: `docs/landing-reimagining/worker-briefs/homepage.md`
- Create: `docs/landing-reimagining/worker-briefs/visual-gallery.md`
- Create: `docs/landing-reimagining/worker-briefs/chapter-resource-discovery.md`
- Create: `docs/landing-reimagining/worker-briefs/instructor-path.md`
- Create: `docs/landing-reimagining/worker-briefs/reviews-adoption.md`

- [ ] **Step 1: Create Homepage Worker brief**

Use `apply_patch` to create `docs/landing-reimagining/worker-briefs/homepage.md`:

```markdown
# Homepage Worker Brief

Role: `mlr-homepage-visual-lab`

Target: `mlr-homepage-visual-lab`

Generate two ideal desktop homepage screen images in the Visual Learning Lab direction.

Required content:

- First viewport shows `Machine Learning Refined` and visible book cover identity.
- Hero communicates intuition, visualization, derivation, and Python implementation.
- Hero includes a polished learning-lab surface with animated-widget panels, notebook/code panes, and mathematical diagrams.
- Primary CTAs: Download chapter PDFs, Explore visual notes, View GitHub repo.
- Directly below the hero: compact proof band with "Used as a reference text at 100+ universities and colleges", restrained university logo strip, and two or three strong accolades.

Prompt starter:

```text
Use case: ui-mockup
Asset type: ideal desktop landing page reference image
Primary request: Create a polished desktop homepage mockup for Machine Learning Refined in a Visual Learning Lab direction. Use real book/resource context: a university textbook with chapter PDFs, animated learning widgets, notebooks, exercises, slides, and GitHub resources. The first viewport must show the title Machine Learning Refined, visible book cover identity, a visually rich learning-lab hero with animated plot panels, notebook/code panes, equations, and practical CTAs. Directly below the hero, include a compact proof band with 100+ universities and colleges, university logos, and a few concise accolades.
Palette: white/off-white paper, deep charcoal/navy, Cambridge-like gold, restrained academic blue, precise black typography.
Avoid: current mlrefined.com styling, purple gradients, decorative blobs, generic SaaS dashboard, stock academia, fantasy art.
Text constraints: The title Machine Learning Refined and CTA labels should be readable; smaller body text may be realistic UI text blocks.
Output: high-fidelity website screen concept, desktop 16:9, no watermark.
```
```

- [ ] **Step 2: Create Visual Gallery Worker brief**

Use `apply_patch` to create `docs/landing-reimagining/worker-briefs/visual-gallery.md`:

```markdown
# Visual Gallery Worker Brief

Role: `mlr-visual-gallery`

Target: `mlr-visual-gallery`

Generate two ideal desktop Visual Gallery screen images.

Required content:

- Widget-forward page showcasing optimization, classification, clustering, feature normalization, function approximation, cross-validation, trees, and Taylor series.
- Visuals should feel connected to actual local GIF assets under `public/learning-visuals/widgets/`.
- Include topic filters or grouped sections.
- Include links or affordances to notebooks, Colab, and relevant chapters.

Prompt starter:

```text
Use case: ui-mockup
Asset type: ideal desktop visual gallery reference image
Primary request: Create a polished Visual Gallery page for Machine Learning Refined. The page showcases learning widgets and visual pedagogy: optimization, logistic regression/classification, K-means clustering, feature normalization, neural network function approximation, cross-validation, regression trees, and Taylor series. Design a browsable gallery with topic filters, chapter links, notebook/Colab affordances, and short explanatory text.
Palette: white/off-white paper, deep charcoal/navy, Cambridge-like gold, restrained academic blue, precise black typography.
Avoid: current mlrefined.com styling, purple gradients, decorative blobs, generic SaaS dashboard, stock academia, fantasy art.
Text constraints: Main page title and filter labels should be readable; small descriptions may be realistic UI text blocks.
Output: high-fidelity website screen concept, desktop 16:9, no watermark.
```
```

- [ ] **Step 3: Create Chapter/Resource Worker brief**

Use `apply_patch` to create `docs/landing-reimagining/worker-briefs/chapter-resource-discovery.md`:

```markdown
# Chapter And Resource Discovery Worker Brief

Role: `mlr-resource-discovery`

Target: `mlr-resource-discovery`

Generate two ideal desktop Chapter and Resource Discovery screen images.

Required content:

- Chapter map grouped by book parts.
- Resource badges per chapter: PDF, Notebook, Exercise, Slides, Colab, GitHub.
- Learning-goal filters: Independent Learner, Instructor, Practitioner Refresh.
- Clear connection to the canonical GitHub repository.

Prompt starter:

```text
Use case: ui-mockup
Asset type: ideal desktop chapter and resource discovery reference image
Primary request: Create a polished Chapter and Resource Discovery page for Machine Learning Refined. Turn the actual resource repository idea into a refined public navigation layer with book parts, chapter rows/cards, and resource badges for PDF, Notebook, Exercise, Slides, Colab, and GitHub. Include learning-goal filters for independent learners, instructors, and practitioners returning to fundamentals.
Palette: white/off-white paper, deep charcoal/navy, Cambridge-like gold, restrained academic blue, precise black typography.
Avoid: current mlrefined.com styling, purple gradients, decorative blobs, generic SaaS dashboard, stock academia, fantasy art.
Text constraints: Page title, filter labels, and resource badge labels should be readable; chapter descriptions may be realistic UI text blocks.
Output: high-fidelity website screen concept, desktop 16:9, no watermark.
```
```

- [ ] **Step 4: Create Instructor Worker brief**

Use `apply_patch` to create `docs/landing-reimagining/worker-briefs/instructor-path.md`:

```markdown
# Instructor Path Worker Brief

Role: `mlr-instructor-path`

Target: `mlr-instructor-path`

Generate two ideal desktop Instructor Path screen images.

Required content:

- Course adoption surface for instructors.
- Roadmap cards based on actual roadmap assets: essentials, full treatment, optimization focus, deep learning intro.
- Slides, exercises, datasets, and course-planning resources.
- Compact adoption proof.
- Publisher-facing sample-copy CTA for verified college and university instructors.

Prompt starter:

```text
Use case: ui-mockup
Asset type: ideal desktop instructor path reference image
Primary request: Create a polished Instructor Path page for Machine Learning Refined. The page helps instructors evaluate and adopt the book, with roadmap cards for essentials, full treatment, optimization focus, and deep-learning introduction; links to slides, exercises, datasets, chapter PDFs, and notebooks; compact adoption proof; and a publisher-facing sample-copy CTA for verified college and university instructors.
Palette: white/off-white paper, deep charcoal/navy, Cambridge-like gold, restrained academic blue, precise black typography.
Avoid: current mlrefined.com styling, purple gradients, decorative blobs, generic SaaS dashboard, stock academia, fantasy art.
Text constraints: Page title, roadmap names, and CTA labels should be readable; small descriptions may be realistic UI text blocks.
Output: high-fidelity website screen concept, desktop 16:9, no watermark.
```
```

- [ ] **Step 5: Create Reviews/Adoption Worker brief**

Use `apply_patch` to create `docs/landing-reimagining/worker-briefs/reviews-adoption.md`:

```markdown
# Reviews And Adoption Worker Brief

Role: `mlr-reviews-adoption`

Target: `mlr-reviews-adoption`

Generate two ideal desktop Reviews and Adoption screen images.

Required content:

- Full proof library treatment using current mlrefined.com for content evidence.
- University/adoption logo library.
- Testimonials from professor endorsements and reader reviews.
- Segmentation between professor endorsements, reader reviews, and adoption context.
- The page must feel editorial and credible, not like a marketing testimonial wall.

Prompt starter:

```text
Use case: ui-mockup
Asset type: ideal desktop reviews and adoption reference image
Primary request: Create a polished Reviews and Adoption page for Machine Learning Refined. The page restyles the current public site's proof library into the new Visual Learning Lab system: university/adoption logo library, professor endorsements, reader reviews, and adoption context. Keep it editorial, credible, and scholarly, with strong typography and restrained proof modules.
Palette: white/off-white paper, deep charcoal/navy, Cambridge-like gold, restrained academic blue, precise black typography.
Avoid: current mlrefined.com styling, purple gradients, decorative blobs, generic SaaS dashboard, stock academia, fantasy art.
Text constraints: Page title, section labels, and a few names may be readable; long quote text may be realistic UI text blocks.
Output: high-fidelity website screen concept, desktop 16:9, no watermark.
```
```

- [ ] **Step 6: Verify briefs contain role and target names**

Run:

```bash
rg -n "Role:|Target:|Prompt starter" docs/landing-reimagining/worker-briefs
```

Expected: every page-family brief reports role, target, and prompt starter lines.

- [ ] **Step 7: Commit worker briefs**

Run:

```bash
git add docs/landing-reimagining/worker-briefs
git commit -m "Add landing reimagining worker briefs"
```

Expected: commit succeeds.

## Task 4: Create Selection Matrix

**Files:**
- Create: `docs/landing-reimagining/selection-matrix.md`

- [ ] **Step 1: Write the scoring matrix**

Use `apply_patch` to create `docs/landing-reimagining/selection-matrix.md`:

```markdown
# Landing Reimagining Image Selection Matrix

Score each candidate from 1 to 5.

| Candidate | Page Family | Grounded in actual assets | Visual Learning Lab energy | Book credibility | Resource clarity | Mobile potential | Avoids banned styles | Notes |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | --- |
|  | Homepage |  |  |  |  |  |  |  |
|  | Visual Gallery |  |  |  |  |  |  |  |
|  | Chapter/Resource Discovery |  |  |  |  |  |  |  |
|  | Instructor Path |  |  |  |  |  |  |  |
|  | Reviews/Adoption |  |  |  |  |  |  |  |

## Acceptance Bar

A selected canonical image must:

- Score at least 4 for grounded in actual assets.
- Score at least 4 for Visual Learning Lab energy on the homepage and visual gallery.
- Score at least 4 for resource clarity on chapter/resource discovery and instructor path.
- Score at least 4 for book credibility on homepage and reviews/adoption.
- Score 5 for avoids banned styles.
- Have a worker receipt with prompt, generated image path, critique, and mobile notes.
```

- [ ] **Step 2: Commit the matrix**

Run:

```bash
git add docs/landing-reimagining/selection-matrix.md
git commit -m "Add generated image selection matrix"
```

Expected: commit succeeds.

## Task 5: Create Agent Conveyor Worker Set

**Files:**
- Creates local DB: `.codex-workers/workerctl.db`

- [ ] **Step 1: Confirm current project directory**

Run:

```bash
pwd
```

Expected: `/Users/neonwatty/Desktop/mlrefined-website`

- [ ] **Step 2: Create local Conveyor ledger directory**

Run:

```bash
mkdir -p .codex-workers
```

Expected: command exits successfully.

- [ ] **Step 3: Create Codex app threads**

Use Codex thread tools to create one manager thread and five worker threads with these exact titles:

```text
MLR Reimagining Manager
MLR Homepage Visual Lab Worker
MLR Visual Gallery Worker
MLR Resource Discovery Worker
MLR Instructor Path Worker
MLR Reviews Adoption Worker
```

Expected: six created thread IDs are available in the tool response.

- [ ] **Step 4: Bind worker tasks to manager**

Set shell variables from the thread creation output and run these commands from `/Users/neonwatty/Desktop/mlrefined-website`:

```bash
LEDGER="$PWD/.codex-workers/workerctl.db"
MANAGER_NAME="mlr-reimagining-manager"
MANAGER_THREAD_ID="$MLR_REIMAGINING_MANAGER_THREAD_ID"
MANAGER_THREAD_TITLE="MLR Reimagining Manager"
```

Then run one binding command per worker, replacing only the `WORKER_THREAD_ID` value with the matching returned thread ID:

```bash
conveyor create-disposable-binding "mlr-homepage-visual-lab-image-brief" \
  --worker "mlr-homepage-visual-lab" \
  --manager "$MANAGER_NAME" \
  --worker-codex-app-thread-id "$WORKER_THREAD_ID" \
  --worker-codex-app-thread-title "MLR Homepage Visual Lab Worker" \
  --manager-codex-app-thread-id "$MANAGER_THREAD_ID" \
  --manager-codex-app-thread-title "$MANAGER_THREAD_TITLE" \
  --path "$LEDGER" \
  --json
```

```bash
conveyor create-disposable-binding "mlr-visual-gallery-image-brief" \
  --worker "mlr-visual-gallery" \
  --manager "$MANAGER_NAME" \
  --worker-codex-app-thread-id "$WORKER_THREAD_ID" \
  --worker-codex-app-thread-title "MLR Visual Gallery Worker" \
  --manager-codex-app-thread-id "$MANAGER_THREAD_ID" \
  --manager-codex-app-thread-title "$MANAGER_THREAD_TITLE" \
  --path "$LEDGER" \
  --json
```

```bash
conveyor create-disposable-binding "mlr-resource-discovery-image-brief" \
  --worker "mlr-resource-discovery" \
  --manager "$MANAGER_NAME" \
  --worker-codex-app-thread-id "$WORKER_THREAD_ID" \
  --worker-codex-app-thread-title "MLR Resource Discovery Worker" \
  --manager-codex-app-thread-id "$MANAGER_THREAD_ID" \
  --manager-codex-app-thread-title "$MANAGER_THREAD_TITLE" \
  --path "$LEDGER" \
  --json
```

```bash
conveyor create-disposable-binding "mlr-instructor-path-image-brief" \
  --worker "mlr-instructor-path" \
  --manager "$MANAGER_NAME" \
  --worker-codex-app-thread-id "$WORKER_THREAD_ID" \
  --worker-codex-app-thread-title "MLR Instructor Path Worker" \
  --manager-codex-app-thread-id "$MANAGER_THREAD_ID" \
  --manager-codex-app-thread-title "$MANAGER_THREAD_TITLE" \
  --path "$LEDGER" \
  --json
```

```bash
conveyor create-disposable-binding "mlr-reviews-adoption-image-brief" \
  --worker "mlr-reviews-adoption" \
  --manager "$MANAGER_NAME" \
  --worker-codex-app-thread-id "$WORKER_THREAD_ID" \
  --worker-codex-app-thread-title "MLR Reviews Adoption Worker" \
  --manager-codex-app-thread-id "$MANAGER_THREAD_ID" \
  --manager-codex-app-thread-title "$MANAGER_THREAD_TITLE" \
  --path "$LEDGER" \
  --json
```

Expected: each command prints JSON confirming the binding.

- [ ] **Step 5: Record setup receipt**

Create `docs/landing-reimagining/conveyor-receipt.md` with:

```markdown
# Conveyor Receipt

Ledger: `.codex-workers/workerctl.db`

Manager:

- `mlr-reimagining-manager`: MLR Reimagining Manager

Workers:

- `mlr-homepage-visual-lab`: MLR Homepage Visual Lab Worker
- `mlr-visual-gallery`: MLR Visual Gallery Worker
- `mlr-resource-discovery`: MLR Resource Discovery Worker
- `mlr-instructor-path`: MLR Instructor Path Worker
- `mlr-reviews-adoption`: MLR Reviews Adoption Worker

Status command:

```bash
conveyor status --path .codex-workers/workerctl.db
```
```

Add the actual thread IDs and binding JSON summaries under each role after the binding commands succeed.

- [ ] **Step 6: Commit the receipt**

Run:

```bash
git add docs/landing-reimagining/conveyor-receipt.md
git commit -m "Record landing reimagining conveyor setup"
```

Expected: commit succeeds.

## Task 6: Dispatch Worker Image Generation Assignments

**Files:**
- Create during execution: `docs/landing-reimagining/worker-outputs/homepage.md`
- Create during execution: `docs/landing-reimagining/worker-outputs/visual-gallery.md`
- Create during execution: `docs/landing-reimagining/worker-outputs/chapter-resource-discovery.md`
- Create during execution: `docs/landing-reimagining/worker-outputs/instructor-path.md`
- Create during execution: `docs/landing-reimagining/worker-outputs/reviews-adoption.md`

- [ ] **Step 1: Send each worker its assignment**

Use Codex thread tools or Agent Conveyor dispatch to send each worker the shared brief plus its page-family brief. Every worker message must include this instruction:

```text
Generate two Codex image-generation candidates for your assigned page family. Use the shared grounding brief and your page-family brief. Do not write app code. Create a receipt under docs/landing-reimagining/worker-outputs using your page family filename. Include role name, final prompts, generated image paths, actual assets/content referenced, critique, mobile behavior notes, and one exact line that starts with `Recommended candidate:` followed by the full absolute PNG path under `/Users/neonwatty/.codex/generated_images/`.
```

Expected: each worker acknowledges the assignment.

- [ ] **Step 2: Check receipts exist**

Run:

```bash
ls docs/landing-reimagining/worker-outputs
```

Expected: the five Markdown receipts are present.

- [ ] **Step 3: Validate receipts include generated image paths**

Run:

```bash
rg -n "/Users/neonwatty/.codex/generated_images|Recommended candidate|Mobile behavior" docs/landing-reimagining/worker-outputs
```

Expected: each receipt has at least one generated image path, a recommended candidate, and mobile behavior notes.

- [ ] **Step 4: Commit worker receipts**

Run:

```bash
git add docs/landing-reimagining/worker-outputs
git commit -m "Record landing reimagining worker image outputs"
```

Expected: commit succeeds.

## Task 7: Select Canonical References

**Files:**
- Modify: `docs/landing-reimagining/selection-matrix.md`
- Create: `docs/landing-reimagining/canonical-references.md`

- [ ] **Step 1: Score candidates**

Open each worker receipt and score every candidate in `docs/landing-reimagining/selection-matrix.md` using the matrix created in Task 4.

Expected: at least one candidate per page family clears the acceptance bar.

- [ ] **Step 2: Create canonical reference record**

Generate `docs/landing-reimagining/canonical-references.md` from the actual worker receipts with this script. It expects each receipt to contain one line that starts with `Recommended candidate:` followed by a full absolute PNG path under `/Users/neonwatty/.codex/generated_images/`.

```bash
node - <<'NODE'
const fs = require('fs');
const pages = [
  ['Homepage', 'mlr-homepage-visual-lab', 'homepage.md', 'strongest Visual Learning Lab hero with compact proof band'],
  ['Visual Gallery', 'mlr-visual-gallery', 'visual-gallery.md', 'strongest grounded widget and notebook discovery surface'],
  ['Chapter And Resource Discovery', 'mlr-resource-discovery', 'chapter-resource-discovery.md', 'clearest mapping between chapters and real resource types'],
  ['Instructor Path', 'mlr-instructor-path', 'instructor-path.md', 'clearest course-planning and adoption flow'],
  ['Reviews And Adoption', 'mlr-reviews-adoption', 'reviews-adoption.md', 'strongest proof-library treatment without copying current site styling'],
];
let out = '# Canonical Generated References\n\n';
for (const [title, target, receipt, reason] of pages) {
  const receiptPath = `docs/landing-reimagining/worker-outputs/${receipt}`;
  const text = fs.readFileSync(receiptPath, 'utf8');
  const match = text.match(/^Recommended candidate:\s*(`?)(\/Users\/neonwatty\/\.codex\/generated_images\/[^\s`]+\.png)\1\s*$/m);
  if (!match) {
    throw new Error(`Missing recommended candidate path in ${receiptPath}`);
  }
  const imagePath = match[2];
  if (!fs.existsSync(imagePath)) {
    throw new Error(`Recommended candidate does not exist: ${imagePath}`);
  }
  out += `## ${title}\n\n`;
  out += `- Target: \`${target}\`\n`;
  out += `- Source image: \`${imagePath}\`\n`;
  out += `- Selection reason: ${reason}.\n\n`;
}
fs.writeFileSync('docs/landing-reimagining/canonical-references.md', out);
console.log('Wrote docs/landing-reimagining/canonical-references.md');
NODE
```

- [ ] **Step 3: Verify all selected paths are concrete files**

Run:

```bash
rg -n "TBD|TODO|UNRESOLVED|FILL_ME" docs/landing-reimagining/canonical-references.md
node - <<'NODE'
const fs = require('fs');
const text = fs.readFileSync('docs/landing-reimagining/canonical-references.md', 'utf8');
const paths = [...text.matchAll(/^- Source image: `([^`]+)`/gm)].map((m) => m[1]);
if (paths.length !== 5) {
  throw new Error(`Expected 5 source images, found ${paths.length}`);
}
for (const path of paths) {
  if (!fs.existsSync(path)) {
    throw new Error(`Missing selected image: ${path}`);
  }
}
console.log(`Verified ${paths.length} selected generated images`);
NODE
```

Expected: `rg` prints no matches and Node prints `Verified 5 selected generated images`.

- [ ] **Step 4: Commit selections**

Run:

```bash
git add docs/landing-reimagining/selection-matrix.md docs/landing-reimagining/canonical-references.md
git commit -m "Select landing reimagining canonical references"
```

Expected: commit succeeds.

## Task 8: Register Selected Images With Limner

**Files:**
- Create through Limner: Limner asset provenance records
- Create: `docs/landing-reimagining/limner-assets.md`

- [ ] **Step 1: Register every selected generated image**

Run this script to register every selected generated image:

```bash
node - <<'NODE'
const { execFileSync } = require('child_process');
const fs = require('fs');
const text = fs.readFileSync('docs/landing-reimagining/canonical-references.md', 'utf8');
const entries = [...text.matchAll(/- Target: `([^`]+)`\n- Source image: `([^`]+)`/g)];
if (entries.length !== 5) {
  throw new Error(`Expected 5 canonical references, found ${entries.length}`);
}
fs.mkdirSync('docs/landing-reimagining/limner-json', { recursive: true });
for (const [, target, image] of entries) {
  const json = execFileSync('limner', ['assets', 'add', image, '--source-label', 'imagegen_original', '--concept', target, '--format', 'json'], { encoding: 'utf8' });
  fs.writeFileSync(`docs/landing-reimagining/limner-json/${target}-assets-add.json`, json);
  console.log(`Registered ${target}`);
}
NODE
```

Expected: each command returns JSON with asset identity, source label, dimensions, and hash/checksum metadata.

- [ ] **Step 2: Reconcile selected image paths**

Run this script to reconcile every selected image:

```bash
node - <<'NODE'
const { execFileSync } = require('child_process');
const fs = require('fs');
const text = fs.readFileSync('docs/landing-reimagining/canonical-references.md', 'utf8');
const entries = [...text.matchAll(/- Target: `([^`]+)`\n- Source image: `([^`]+)`/g)];
for (const [, target, image] of entries) {
  const json = execFileSync('limner', ['assets', 'reconcile', image, '--format', 'json'], { encoding: 'utf8' });
  fs.writeFileSync(`docs/landing-reimagining/limner-json/${target}-assets-reconcile.json`, json);
  console.log(`Reconciled ${target}`);
}
NODE
```

Expected: each selected image reconciles to a registered Limner asset.

- [ ] **Step 3: Record asset provenance**

Create `docs/landing-reimagining/limner-assets.md` with this script:

```bash
node - <<'NODE'
const fs = require('fs');
const targets = [
  ['Homepage', 'mlr-homepage-visual-lab'],
  ['Visual Gallery', 'mlr-visual-gallery'],
  ['Chapter And Resource Discovery', 'mlr-resource-discovery'],
  ['Instructor Path', 'mlr-instructor-path'],
  ['Reviews And Adoption', 'mlr-reviews-adoption'],
];
let out = '# Limner Asset Provenance\n\n';
for (const [title, target] of targets) {
  const addPath = `docs/landing-reimagining/limner-json/${target}-assets-add.json`;
  const reconcilePath = `docs/landing-reimagining/limner-json/${target}-assets-reconcile.json`;
  const addJson = fs.readFileSync(addPath, 'utf8').trim();
  const reconcileJson = fs.readFileSync(reconcilePath, 'utf8').trim();
  out += `## ${title}\n\n`;
  out += `- Target: \`${target}\`\n`;
  out += '- Source label: `imagegen_original`\n';
  out += `- Registered asset JSON path: \`${addPath}\`\n`;
  out += `- Reconcile JSON path: \`${reconcilePath}\`\n\n`;
  out += 'Registered asset JSON:\n\n```json\n' + addJson + '\n```\n\n';
  out += 'Reconcile JSON:\n\n```json\n' + reconcileJson + '\n```\n\n';
}
fs.writeFileSync('docs/landing-reimagining/limner-assets.md', out);
NODE
```

- [ ] **Step 4: Verify provenance doc references every target**

Run:

```bash
rg -n "mlr-homepage-visual-lab|mlr-visual-gallery|mlr-resource-discovery|mlr-instructor-path|mlr-reviews-adoption|imagegen_original" docs/landing-reimagining/limner-assets.md
```

Expected: every target name appears and `imagegen_original` appears at least five times.

- [ ] **Step 5: Commit Limner asset provenance**

Run:

```bash
git add docs/landing-reimagining/limner-assets.md docs/landing-reimagining/limner-json
git commit -m "Record Limner provenance for generated references"
```

Expected: commit succeeds.

## Task 9: Initialize Limner Targets

**Files:**
- Create through Limner: `targets/mlr-homepage-visual-lab/**`
- Create through Limner: `targets/mlr-visual-gallery/**`
- Create through Limner: `targets/mlr-resource-discovery/**`
- Create through Limner: `targets/mlr-instructor-path/**`
- Create through Limner: `targets/mlr-reviews-adoption/**`

- [ ] **Step 1: Initialize targets**

Run this script to initialize each Limner target from its selected generated image:

```bash
node - <<'NODE'
const { execFileSync } = require('child_process');
const fs = require('fs');
const text = fs.readFileSync('docs/landing-reimagining/canonical-references.md', 'utf8');
const entries = [...text.matchAll(/- Target: `([^`]+)`\n- Source image: `([^`]+)`/g)];
if (entries.length !== 5) {
  throw new Error(`Expected 5 canonical references, found ${entries.length}`);
}
for (const [, target, image] of entries) {
  execFileSync('limner', ['init', image, '--target', target], { stdio: 'inherit' });
}
NODE
```

Expected: each command creates a Limner target under its matching `targets/mlr-*` directory.

- [ ] **Step 2: Check target status**

Run:

```bash
limner target list --json
limner target status --target mlr-homepage-visual-lab --json
limner target status --target mlr-visual-gallery --json
limner target status --target mlr-resource-discovery --json
limner target status --target mlr-instructor-path --json
limner target status --target mlr-reviews-adoption --json
```

Expected: every target reports a usable source image and scaffolded reference.

- [ ] **Step 3: Commit initialized targets**

Run:

```bash
git add targets/mlr-homepage-visual-lab targets/mlr-visual-gallery targets/mlr-resource-discovery targets/mlr-instructor-path targets/mlr-reviews-adoption
git commit -m "Initialize Limner targets for landing reimagining"
```

Expected: commit succeeds.

## Task 10: Start Limner Image-Mockup Loops

**Files:**
- Creates through Limner: `.limner/runs/**`

- [ ] **Step 1: Validate plugin surface**

Run:

```bash
node /Users/neonwatty/.codex/plugins/cache/limner/limner-polish/0.1.28/scripts/validate-plugin-surface.mjs
```

Expected: command exits successfully.

- [ ] **Step 2: Generate command envelopes**

Run:

```bash
node /Users/neonwatty/.codex/plugins/cache/limner/limner-polish/0.1.28/scripts/loop-command-envelope.mjs --mode image-mockup --target mlr-homepage-visual-lab --name mlr-homepage-visual-lab-polish --iterations 5
node /Users/neonwatty/.codex/plugins/cache/limner/limner-polish/0.1.28/scripts/loop-command-envelope.mjs --mode image-mockup --target mlr-visual-gallery --name mlr-visual-gallery-polish --iterations 5
node /Users/neonwatty/.codex/plugins/cache/limner/limner-polish/0.1.28/scripts/loop-command-envelope.mjs --mode image-mockup --target mlr-resource-discovery --name mlr-resource-discovery-polish --iterations 5
node /Users/neonwatty/.codex/plugins/cache/limner/limner-polish/0.1.28/scripts/loop-command-envelope.mjs --mode image-mockup --target mlr-instructor-path --name mlr-instructor-path-polish --iterations 5
node /Users/neonwatty/.codex/plugins/cache/limner/limner-polish/0.1.28/scripts/loop-command-envelope.mjs --mode image-mockup --target mlr-reviews-adoption --name mlr-reviews-adoption-polish --iterations 5
```

Expected: each command prints the exact `limner loop start`, `limner loop compare`, task, action, and export commands to use. Preserve any emitted `LIMNER_LEDGER_HOME` prefix.

- [ ] **Step 3: Start each image-mockup loop**

Run the emitted `limner loop start` commands from the envelopes. Add `--require-registered-assets` when the envelope allows extra flags, or run a strict compare with registered assets immediately after start.

Expected: each loop prints a trajectory identifier.

- [ ] **Step 4: Run initial compare for each trajectory**

Run the emitted `limner loop compare --trajectory TRAJECTORY_VALUE --format json` command for each trajectory, using the exact trajectory value printed by `limner loop start`.

Expected: each compare creates a run under `.limner/runs/` with captures, agent prompt, schema, and report.

- [ ] **Step 5: Create contact sheets**

Create contact sheets for every current Limner run directory with this script:

```bash
node - <<'NODE'
const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const runsRoot = '.limner/runs';
for (const name of fs.readdirSync(runsRoot)) {
  const runDir = path.join(runsRoot, name);
  if (!fs.statSync(runDir).isDirectory()) {
    continue;
  }
  execFileSync('limner', ['assets', 'contact-sheet', '--run-dir', runDir, '--format', 'json'], { stdio: 'inherit' });
}
NODE
```

Expected: each command writes `assets/contact-sheet.png` under the corresponding run directory.

- [ ] **Step 6: Record loop ledger receipt**

Create `docs/landing-reimagining/limner-loop-receipt.md` with:

```markdown
# Limner Loop Receipt

## Trajectories

- `mlr-homepage-visual-lab`: trajectory value, initial run directory, report path, contact sheet path
- `mlr-visual-gallery`: trajectory value, initial run directory, report path, contact sheet path
- `mlr-resource-discovery`: trajectory value, initial run directory, report path, contact sheet path
- `mlr-instructor-path`: trajectory value, initial run directory, report path, contact sheet path
- `mlr-reviews-adoption`: trajectory value, initial run directory, report path, contact sheet path
```

Fill each bullet with the actual values before committing.

- [ ] **Step 7: Verify no generic ID text remains**

Run:

```bash
rg -n "trajectory value|initial run directory|TBD|TODO|UNRESOLVED|FILL_ME" docs/landing-reimagining/limner-loop-receipt.md
```

Expected: no matches.

- [ ] **Step 8: Commit loop receipt**

Run:

```bash
git add docs/landing-reimagining/limner-loop-receipt.md
git commit -m "Record Limner image mockup loop setup"
```

Expected: commit succeeds.

## Task 11: Polish HTML Mockups

**Files:**
- Modify through loop work: `targets/*/reference/index.html`
- Modify through loop work: `targets/*/reference/styles.css`
- Modify through loop work: `targets/*/contract/acceptance.md`

- [ ] **Step 1: For each target, submit comparison response**

Inspect the run artifacts for one target at a time:

```bash
test -n "$RUN_DIR"
open "$RUN_DIR/captures/side-by-side.png"
sed -n '1,220p' "$RUN_DIR/agent-comparison/agent-prompt.codex.md"
```

Set `RUN_DIR` from `docs/landing-reimagining/limner-loop-receipt.md` before running these commands.

Create a schema-valid response using:

```bash
node /Users/neonwatty/.codex/plugins/cache/limner/limner-polish/0.1.28/scripts/response-skeleton.mjs --mode image-mockup > /tmp/mlr-limner-response.json
```

Edit `/tmp/mlr-limner-response.json` with the actual visual comparison findings, then submit:

```bash
test -n "$TRAJECTORY_VALUE"
test -n "$RUN_VALUE"
limner loop response submit --trajectory "$TRAJECTORY_VALUE" --from-run "$RUN_VALUE" --file /tmp/mlr-limner-response.json --format json
```

Set `TRAJECTORY_VALUE` and `RUN_VALUE` from `docs/landing-reimagining/limner-loop-receipt.md` before running the submit command.

Expected: response validates and refreshes the run's `reports/comparison.md`.

- [ ] **Step 2: Request next task from Limner**

Run:

```bash
test -n "$TRAJECTORY_VALUE"
limner loop task --trajectory "$TRAJECTORY_VALUE" --executor subagent --format json
```

Expected: Limner returns a focused edit task with command envelope and file guidance.

- [ ] **Step 3: Record action start**

Run the action start command emitted by `limner loop task`.

Expected: Limner returns an action ID.

- [ ] **Step 4: Edit only the target reference files named by Limner**

Use `apply_patch` for manual edits to:

```text
targets/mlr-homepage-visual-lab/reference/index.html
targets/mlr-homepage-visual-lab/reference/styles.css
targets/mlr-homepage-visual-lab/contract/acceptance.md
targets/mlr-visual-gallery/reference/index.html
targets/mlr-visual-gallery/reference/styles.css
targets/mlr-visual-gallery/contract/acceptance.md
targets/mlr-resource-discovery/reference/index.html
targets/mlr-resource-discovery/reference/styles.css
targets/mlr-resource-discovery/contract/acceptance.md
targets/mlr-instructor-path/reference/index.html
targets/mlr-instructor-path/reference/styles.css
targets/mlr-instructor-path/contract/acceptance.md
targets/mlr-reviews-adoption/reference/index.html
targets/mlr-reviews-adoption/reference/styles.css
targets/mlr-reviews-adoption/contract/acceptance.md
```

Expected: the edit addresses the top visual gap from the Limner task.

- [ ] **Step 5: Record action complete**

Run the action complete command emitted by Limner, including the edited file list.

Expected: action completes in the Limner ledger.

- [ ] **Step 6: Recompare**

Run:

```bash
test -n "$TRAJECTORY_VALUE"
limner loop compare --trajectory "$TRAJECTORY_VALUE" --format json
```

Expected: new run artifacts are created.

- [ ] **Step 7: Repeat up to five iterations per target**

Stop a target when the comparison response records that the HTML mockup faithfully matches the approved generated reference for layout, hierarchy, palette, major assets, and content placement.

Expected: every target has a final comparison report and accepted reference mockup.

- [ ] **Step 8: Commit polished mockups**

Run:

```bash
git add targets docs/landing-reimagining
git commit -m "Polish Limner references for landing reimagining"
```

Expected: commit succeeds.

## Task 12: Prepare Next.js Implementation Plan Gate

**Files:**
- Create: `docs/landing-reimagining/implementation-readiness.md`

- [ ] **Step 1: Start dev server for route inventory**

Run:

```bash
npm run dev
```

Expected: Next.js dev server starts and prints a local URL.

- [ ] **Step 2: In a separate terminal, run current app gates**

Run:

```bash
npm run lint
npm run typecheck
npm run knip:production
npm run test:unit
npm run build
```

Expected: all commands pass before implementation planning begins.

- [ ] **Step 3: Record readiness receipt**

Create `docs/landing-reimagining/implementation-readiness.md` with:

```markdown
# Implementation Readiness

## Approved Limner Targets

- `mlr-homepage-visual-lab`: exact final comparison report path
- `mlr-visual-gallery`: exact final comparison report path
- `mlr-resource-discovery`: exact final comparison report path
- `mlr-instructor-path`: exact final comparison report path
- `mlr-reviews-adoption`: exact final comparison report path

## Current App Checks

- `npm run lint`: PASS, key output copied from terminal
- `npm run typecheck`: PASS, key output copied from terminal
- `npm run knip:production`: PASS, key output copied from terminal
- `npm run test:unit`: PASS, key output copied from terminal
- `npm run build`: PASS, key output copied from terminal

## Next Plan Requirement

Before editing Next.js app code, read the relevant Next.js 16 guide under `node_modules/next/dist/docs/`, then write a separate implementation plan for routes, components, content modules, analytics, SEO, and verification.
```

Replace each `exact final comparison report path` phrase with the actual comparison report path under `.limner/runs/` before committing. Keep `PASS` only for commands that passed.

- [ ] **Step 4: Verify readiness doc has no unresolved phrases**

Run:

```bash
rg -n "exact final comparison report path|TBD|TODO|UNRESOLVED|FILL_ME" docs/landing-reimagining/implementation-readiness.md
```

Expected: no matches.

- [ ] **Step 5: Commit readiness receipt**

Run:

```bash
git add docs/landing-reimagining/implementation-readiness.md
git commit -m "Record implementation readiness for landing reimagining"
```

Expected: commit succeeds.

## Final Verification

- [ ] Run:

```bash
git status --short
```

Expected: no unintended tracked changes. Local ignored artifacts may exist under `.codex-workers/`, `.superpowers/`, and `.limner/`.

- [ ] Run:

```bash
limner target list --json
limner ledger list --active --format json
```

Expected: all five page-family targets exist, and active trajectories are visible or intentionally closed.

- [ ] Review:

```bash
sed -n '1,260p' docs/landing-reimagining/implementation-readiness.md
```

Expected: the next app-implementation plan has exact Limner references and current check evidence.
