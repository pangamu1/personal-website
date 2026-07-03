# TODO / Design tracker

Running list of agreed fixes and planned work. Check items off as they land.

## Pending fixes (from review on 2026-07-02)

- [x] **Replace background image** — resolved (2026-07-03) with no image at all: pure-CSS deep-blue gradient sky (light pooling center-left, darker right edge, vignette) + SVG film-grain overlay + masked micro-dot grid, all in `.sky` / `.sky::before` / `.sky::after`. Piruthviraj chose this over a warm-horizon dusk variant after seeing both live. `assets/bg.jpg` deleted.
- [x] **"Featured work" label** — bumped to 14px / weight 700 / `--ink-dim` with a soft text shadow. (2026-07-03)
- [x] **Social chips (GitHub / LinkedIn / Resume / Kaggle)** — glass treatment: stronger fill (0.15) and border (0.34), backdrop blur, inner highlight + drop shadow, full-ink text. (2026-07-03)
- [x] **Deck progress slider placement** — moved out of the header row; now centered under the deck viewport, slightly wider/taller. Added a `max-height: 900px` compact mode (smaller cards via `--card-h`, tighter paddings) so Home fits laptop screens without scrolling and the slider clears the bottom bar. (2026-07-03)

## Planned / larger items

- [ ] Light/dark mode toggle (sun ↔ moon) — design light mode as its own skin, not an inversion.
- [ ] Real project thumbnails to replace procedural gradient art (`window.projectArt` in `js/data.js`).
- [ ] Real content pass: name/bio, actual project details, real links (chips are `href="#"` placeholders), contact info, pricing.
- [ ] Click-to-open case studies from the Projects grid.
- [ ] Wire contact form to a backend (Formspree or similar) — currently non-functional.
- [ ] Accessibility pass: keyboard navigation for deck and tabs, focus states.
- [ ] Favicon, meta/OG tags.
