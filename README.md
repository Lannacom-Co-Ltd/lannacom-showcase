# Lannacom Showcase (BrightSign / TV)

Stand-alone, static 1920×1080 page that looks **exactly like the Digital Twin's 3D view** (same top bar, same left/right panels, same CSS)
on top of a screenshot of the 3D building, with **live building data** in the panels. It is **not** part of the Digital Twin web app:
it only reads one public, read-only JSON endpoint (`/api/showcase`, building totals only, no entity ids).

Real sensor values: energy-flow diagram (solar / grid / building load / battery), environment (temperature, humidity, CO₂, PM2.5), equipment health,
sustainability (year solar vs grid kWh, savings), weather pill. Decoration only (not data): system/overlay chips, floor buttons, view bar, background picture.

## Files
- `index.html` — page (generated); `index.src.html` is its template
- `twin.css` — the Digital Twin's own `style.css` + fixed light/dark theme + a 1536×864 stage scaled ×1.25 to 1920×1080 (**generated**)
- `twin-ui.js` — the Twin's own drawing code (energy-flow diagram, icons, comfort ranks) + Thai/English texts (**generated**)
- `showcase.js` — fetches the data and fills the panels (hand-written; ES5/ES2015, no `?.`/`??` so old BrightSign Chromium runs it)
- `config.js` — `api` (data URL), `refreshSeconds`, `lang` (`th`/`en`), `theme` (`light`/`dark`), `fillMissing`
- `bg.jpg` — background (screenshot of the twin's 3D view, scaled to cover)
- `.nojekyll` — tells GitHub Pages to serve the files as they are

`twin.css`, `twin-ui.js` and `index.html` are generated from the Digital Twin sources by `node tools/build-showcase.js` (in the Digital Twin repo) — don't edit them by hand.

## Host on GitHub Pages
Repo → Settings → Pages → Deploy from branch → `main` / root. Link: `https://<owner>.github.io/<repo>/`.
Free GitHub plans only offer Pages for **public** repos.

## Try it
- `?demo=1` — sample data for every field (battery, room sensors…), only to look at the layout (not real values)
- `?api=http://localhost:8080/api/showcase` — read from another server · `?lang=en` · `?theme=dark` · `?fill=1` (fill room-sensor gaps with sample values)

## BrightSign
HTML widget (BrightAuthor:connected / BrightSign OS 8+): point the widget to the Pages link. The page rescales to the screen,
refreshes the numbers every 20 s, reloads itself every 6 h, and keeps the last values if the network drops (a small amber note appears bottom-left).
A value that has no real source (e.g. a room sensor Home Assistant doesn't send) shows `--`, exactly like the Digital Twin.

## Data credit
The surroundings in the background come from OpenStreetMap (ODbL), Microsoft building footprints (ODbL) and ESA WorldCover 2021 (CC BY 4.0).
The credit line at the bottom-right of the page carries this — keep it.
