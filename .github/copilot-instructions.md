# AI Coding Agent Guide (React + Vite Portfolio)

This repo is a React + Vite single-page application for a design portfolio. The app uses `HashRouter` for GitHub Pages compatibility, SCSS design tokens/mixins for styling, and an `@` alias for clean imports.

## Big Picture

- **Entry & Mount:** `index.html` loads `src/main.jsx`, which mounts `App` into `#root`.
- **Routing:** `App.jsx` uses `HashRouter` with routes under `/`, `/about`, and `/project/*`.
- **Structure:**
  - **Pages:** `src/pages/**` hold top-level views (e.g., `Home`, `About`, project pages).
  - **Components:** `src/components/**` for reusable UI (e.g., `layout/Header`, `Footer`, `ProjectCard`).
  - **Styles:** `src/styles/**` with SCSS tokens (`tokens/`) and shared mixins (`mixins.scss`).
  - **Assets:** images/videos under `src/assets/**`; public icons in `public/`.
- **Import Alias:** `vite.config.js` sets `@` → `src` for absolute-like imports.

## Dev Workflow

- **Start dev:** `npm run dev` (Vite dev server on port 5173, strict, opens automatically).
- **Build:** `npm run build` (outputs to `dist`, sourcemaps enabled).
- **Preview build:** `npm run preview` (serves `dist` on port 8080).
- **Lint:** `npm run lint` (ESLint with React hooks/refresh; ignores `dist`).

## Routing & Navigation

- **Hash-based routing:** `HashRouter` avoids 404s on GitHub Pages.
- **Add a page:**
  1. Create `src/pages/MyPage/MyPage.jsx` and optional `MyPage.scss`.
  2. Import in `App.jsx` and add `<Route path="/my-page" element={<MyPage/>} />`.
  3. Link via `Header` using `NavLink` or within pages using `Link`.
- **Project routes:** Follow `"/project/<slug>"` (see `Rouge`, `Koyekola`, `BaMbuma`, `GuessJeans`).

## Styling System

- **Tokens:** Use SCSS tokens in `src/styles/tokens/` for colors, layout spacing/breakpoints, and typography.
- **Mixins:** Common layout helpers in `src/styles/mixins.scss` (e.g., `container`, `section-padding`, `soft-card`, `button`). These are globally available via `vite.config.js` `additionalData`.
- **Usage pattern:**
  ```scss
  @use "@/styles/tokens/colors" as *;
  @use "@/styles/tokens/layout" as *;
  @use "@/styles/tokens/typography" as *;
  @use "@/styles/mixins" as *;
  ```
- **Typography:** Utility classes (`.h1`, `.h2`, `.button-label`, etc.) from `_typography.scss`.

## Components & Patterns

- **Layout/Header:** Sticky header with `NavLink` active state (underline via `::after`). See `components/layout/Header/Header.jsx` and `.scss`.
- **Layout/Footer:** Reusable footer with props (e.g., `linkedin`).
- **ProjectCard:** Media-first card supporting image/video and variants (`phone`, `laptop`, `book`). See `components/ProjectCard/*`.
- **Home page:** Demonstrates grid/listing, badges, and large video/image blocks.

## Assets & Performance

- **Preload critical assets:** `index.html` preloads Guess project images and fonts.
- **Video usage:** Use `autoPlay muted loop playsInline preload="metadata"` for hero/project previews.
- **Images:** Prefer `loading="lazy"` and constrained `max-width` via layout tokens.

## Linting & Conventions

- **ESLint rule:** `no-unused-vars` errors, but ignores UPPER*SNAKE_CASE vars (pattern `^[A-Z*]`).
- **Imports:** Prefer `@/...` alias over relative paths.
- **SCSS:** Use `@use` with tokens/mixins; avoid `@import`.
- **File placement:** Pages under `src/pages/<Section>/<Name>`, components under `src/components/<Category>/<Name>`.

## Deployment

- **GitHub Pages:**
  - `package.json` has `homepage` and `deploy` script (`gh-pages -d dist -b gh-pages`).
  - `vite.config.js` uses `env.VITE_BASE || "/"` for `base`. For Pages under `/portfolio/`, set `VITE_BASE="/portfolio/"` when building.
  - Use `HashRouter` in `App.jsx` (already configured).
- **Deploy flow:**
  ```bash
  npm run build
  npm run deploy
  ```

## Example: Add a project tile

- Add media to `src/assets/{videos|images}/`.
- Create a route under `src/pages/Projects/<Project>/<Project>.jsx`.
- In `Home.jsx`, add a `Link` with preview media and badges.
- For reusable listing, use `ProjectCard` with `src`, `title`, `subtitle`, and optional `to`.

## Notes

- **Server config:** Dev server is strict on port `5173`, host enabled, polling watch (good for some environments).
- **Preview port:** `8080` for built previews.
- **Sourcemaps:** Enabled in both dev and build for easier debugging.
