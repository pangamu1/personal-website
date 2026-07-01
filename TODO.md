# TODO / Design tracker

Running list of agreed fixes and planned work. Check items off as they land.

## Pending fixes (from review on 2026-07-02)

- [ ] **Replace background image** — current `assets/bg.jpg` (Milky Way mountains) doesn't sit right and quality is poor. Piruthviraj will source the image himself. Drop the new file in as `assets/bg.jpg` (or update the path in `css/styles.css` → `.sky`); the `.sky-tint` scrim layer may need retuning to match the new image's brightness.
- [ ] **"Featured work" label** — barely visible and too small. Increase size/weight/contrast so the section header reads clearly against the background.
- [ ] **Social chips (GitHub / LinkedIn / Resume / Kaggle)** — barely visible. Needs stronger fill/border or a different treatment so they read as clickable.
- [ ] **Deck progress slider placement** — currently far right in the Featured-work header row, feels disconnected from the deck. Re-anchor it so it visually belongs to the cards (e.g. centered under the deck with clearance from the bottom bar, or integrated into the deck viewport).

## Planned / larger items

- [ ] Light/dark mode toggle (sun ↔ moon) — design light mode as its own skin, not an inversion.
- [ ] Real project thumbnails to replace procedural gradient art (`window.projectArt` in `js/data.js`).
- [ ] Real content pass: name/bio, actual project details, real links (chips are `href="#"` placeholders), contact info, pricing.
- [ ] Click-to-open case studies from the Projects grid.
- [ ] Wire contact form to a backend (Formspree or similar) — currently non-functional.
- [ ] Accessibility pass: keyboard navigation for deck and tabs, focus states.
- [ ] Favicon, meta/OG tags.
