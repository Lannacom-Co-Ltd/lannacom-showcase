# Lannacom Showcase (BrightSign / TV)

Stand-alone, static 1920×1080 dashboard that sits on a screenshot of the 3D building and shows **live building data**
(energy flow, environment, equipment status, systems, sustainability). It is **not** part of the Digital Twin web app:
it only reads one public, read-only JSON endpoint (`/api/showcase`, building totals only, no entity ids).

## Files
- `index.html` — the whole page (inline CSS/JS, old-Chromium safe: no `?.`, `??`, flex `gap`)
- `config.js` — `api` (data URL), `refreshSeconds`, `lang` (`th`/`en`)
- `bg.jpg` — background (screenshot of the twin's 3D view, 1918×927, scaled to cover 1920×1080)
- `.nojekyll` — tells GitHub Pages to serve the files as they are

## Host on GitHub Pages
Repo → Settings → Pages → Deploy from branch → `main` / root. Link: `https://<owner>.github.io/<repo>/`.
Free GitHub plans only offer Pages for **public** repos.

## Try it
`index.html?api=http://localhost:8080/api/showcase&lang=en` — `?api=` and `?lang=` override `config.js`.

## BrightSign
HTML widget (BrightAuthor:connected / BrightSign OS 8+): point the widget to the Pages link. The page rescales to the screen,
refreshes the numbers every 20 s, reloads itself every 6 h, and keeps the last values if the network drops (the pill turns amber: "Last reading").

## Data credit
The surroundings in the background come from OpenStreetMap (ODbL), Microsoft building footprints (ODbL) and ESA WorldCover 2021 (CC BY 4.0).
The footer on the page carries this credit — keep it.
