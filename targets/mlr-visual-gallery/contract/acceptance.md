# Acceptance Notes

Second-pass Limner mockup for `mlr-visual-gallery`.

- The selected generated reference is retained only as visual guidance in `source/` and `reference/source-reference.png`; it is no longer used as the rendered production-like surface.
- The reference implementation now renders editable DOM sections for the global header, Visual Gallery hero, featured optimization workbench, learning path, topic filters, and widget-card gallery.
- The rendered mockup uses copied local target assets derived from `public/book-cover-2nd.png` and `public/learning-visuals/widgets/*`; no new images, stock imagery, or generated production assets are used.
- Resource links point to the canonical `neonwatty/machine-learning-refined` GitHub repository paths used elsewhere in the site content.
- Remaining fidelity gaps: the reference is still a static HTML/CSS mockup, filter controls do not execute behavior, and regression-tree/Colab deep links should be tightened when the canonical resource index is expanded.
