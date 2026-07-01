# piruthviraj.

Personal portfolio of **Piruthviraj Angamuthu Selvaraju** — data scientist / ML engineer.

A liquid-glass design over a full-bleed night-sky backdrop: frosted translucent cards, a draggable physics-based deck of featured projects on the home page, and a calm static grid on the projects page. Built with plain HTML, CSS, and JavaScript — no frameworks, no build step.

> 🚧 **Work in progress.** The visual skeleton is in place; content (bio, project details, links, imagery) is placeholder. See [TODO.md](TODO.md) for the running list of fixes and planned work.

## Running locally

Any static file server works:

```sh
python3 -m http.server 4173
# then open http://localhost:4173
```

## Structure

```
index.html          All five sections (Home · Projects · Services · Contact · Misc)
css/styles.css      Design system: glass surfaces, buttons, layout, responsive rules
js/data.js          Single source of truth for projects (featured flag → home deck)
js/deck.js          Home deck: drag/fling physics, momentum, auto-drift
js/grid.js          Projects page: static thumbnail grid
js/tabs.js          Section switching + floating contact bar
js/cursor.js        Soft light halo trailing the native cursor
assets/bg.jpg       Background image (swap this file to change the mood)
```

## Design notes

- **Glass recipe** — translucent white gradients + `backdrop-filter` blur/saturation + hairline borders with a top-edge highlight. Entrance animations are deliberately kept off glass elements (the blur doesn't render mid-animation and flashes).
- **The deck is 2D on purpose** — `backdrop-filter` breaks on 3D-rotated elements, so the frosted cards trade the old cover-flow tilt for seamless frost.
- **Typography** — [Hanken Grotesk](https://fonts.google.com/specimen/Hanken+Grotesk) throughout, hierarchy carried by weight and two-tone color.

## License

[MIT](LICENSE)
