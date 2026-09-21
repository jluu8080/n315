# classNotes9_14

Practice project for n315 covering **BEM CSS naming** and a lightweight **MVC pattern** in vanilla JavaScript.

## What's in this project

- **MVC structure**
  - `model/model.js` — holds page content (`home`, `about`, `contact`, `services`) and exposes `changePage()` and `loadData()` via `export`.
  - `app/app.js` — the controller. Wires up nav link clicks and the "Load Data" button, calls into the model, and swaps the injected content in `#app`.
  - `index.html` — the view. Loads `app/app.js` as an ES module (`type="module"`).
- **SPA-style navigation** — clicking a nav link (`HOME`, `ABOUT`, `CONTACT`, `SERVICES`) prevents the default anchor behavior and calls `changePage(id)`, which swaps `#app`'s `innerHTML` based on the clicked link's `id`.
- **Callback example** — the "Load Data" button demonstrates passing a callback function (`myReturnedData`) into `loadData()` instead of invoking it directly.
- **BEM-styled card component** — `.card` block with `__image`, `__title`, `__text`, `__button` elements and `--primary` / `--secondary` button modifiers, defined in `scss/card.scss`.
- **Sass partials** — `scss/styles.scss` imports `structure.scss` (resets/base styles), `nav.scss`, and `card.scss`; compiled to `css/styles.css`.

## Project structure

```
├── app/
│   └── app.js          # Controller: event listeners, page navigation
├── model/
│   └── model.js         # Model: page data + exported functions
├── scss/
│   ├── styles.scss      # Entry point, imports partials
│   ├── structure.scss   # Base/reset styles
│   ├── nav.scss
│   └── card.scss        # BEM card component styles
├── css/
│   └── styles.css       # Compiled output (from scss)
├── images/
├── index.html            # View
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

- Page names in `model.js`'s `pages` object must exactly match the `id` of their corresponding nav link.
- `changePage("home")` is called on load so the home page renders by default.
