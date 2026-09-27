# classNotes9_21

Practice project for n315 covering **hash-based routing** and a **module-per-page** approach to the MVC pattern in vanilla JavaScript.

## What we did today

- **Hash routing instead of click handlers** — navigation moved away from `click` listeners on each nav link. `app/app.js` now listens for the browser's `hashchange` event, strips the `#` off `window.location.hash`, and passes the resulting page ID to the model.
- **Controller** — `app/app.js` exposes `initApp()`, which loads the `home` page on startup and registers `changeRoute()` as the `hashchange` handler.
- **Model as a router** — `model/model.js` imports each page module and uses a `switch` on the page ID to set `<main>`'s `innerHTML`.
- **Page content split into modules** — page markup moved out of the model into `pages/`, with each file doing a `export default` of a template literal (`home.js`, `about.js`, `services.js`). The model imports them at the top.
- **Sass partials** — `scss/styles.scss` imports `structure.scss` (resets/base styles) and `header.scss` (nav bar), compiled to `css/styles.css`.

## Project structure

```
├── app/
│   └── app.js           # Controller: hashchange routing
├── model/
│   └── model.js         # Model: maps page ID to page module, renders into <main>
├── pages/
│   ├── home.js          # Each page exports its markup as a template literal
│   ├── about.js
│   └── services.js
├── scss/
│   ├── styles.scss      # Entry point, imports partials
│   ├── structure.scss   # Base/reset styles
│   └── header.scss      # Nav bar styles
├── css/
│   └── styles.css       # Compiled output (from scss)
├── images/
├── index.html           # View
├── package.json
└── package-lock.json
```

## Setup

```
npm install
```

## Scripts

- `npm run serve` — starts a live-reloading dev server (`live-server`).
- `npm run compile:sass` — watches and compiles `scss/styles.scss` to `css/styles.css` (no source map).

## Notes

- Nav links use `href="#home"`, `#about`, etc. The text after the `#` must match a `case` in `model.js`'s `switch`.
- The `CONTACT` link is in the nav but there is no `pages/contact.js` or matching `case` yet, so clicking it leaves the current page rendered.
- `loadPage("home")` runs on startup so the home page shows before any hash change happens.
