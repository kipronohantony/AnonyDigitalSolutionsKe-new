
  # Business Website Development

  This is a code bundle for Business Website Development. The original project is available at https://www.figma.com/design/WyY4P1NMrhKM3GwKpkyY6A/Business-Website-Development.

  ## Running the code

  






  This is a Vite + React app. The build output directory is `build/` (configured in `vite.config.ts`).

  ## Quick commands

  Install dependencies and build:

  ```powershell
  npm ci
  npm run build
  ```

  Serve locally (build then serve on port 3000):

  ```powershell
  $env:PORT=3000; npm start
  # or without adding `serve` to deps:
  npx serve -s build -l 3000
  ```

  Preview with Vite:

  ```powershell
  $env:PORT=3000; npm run preview
  ```

  ## Key notes for hosting platforms

  - The production build output directory is `build/`. Configure your host to publish that directory.
  - Ensure your host runs the build step (`npm run build`) and uses `npm start` (or serves the `build/` folder) as the run command.
  - If deploying to a sub-path (e.g. GitHub Pages), set `base` in `vite.config.ts` appropriately.
  - For single-page apps (SPA) enable a fallback to `index.html` so client-side routes don't 404.

  ### Railway

  - Build command: `npm run build`
  - Start command: `npm start`
  - The `start` script uses `npx serve -s build -l $PORT`, so it will respect Railway's `$PORT` env var.

  ### Netlify

  - Build command: `npm run build`
  - Publish directory: `build`
  - Add `_redirects` with `/* /index.html 200` to support SPA routing.

  ### Vercel

  - Vercel usually auto-detects frameworks. If not, set build command to `npm run build` and output directory to `build`.

  ### GitHub Pages

  - Set `base` in `vite.config.ts` to the repo subpath (e.g. `/repo-name/`) before building.
  - Publish the contents of `build/` to GitHub Pages.

  ## Troubleshooting

  - Blank page / missing assets: check the browser console for 404s and adjust `base` or publish directory.
  - App starts but routes 404: configure rewrites to `index.html` on your host.
  - Port errors: hosts provide a PORT env var — `npm start` must honor it.

  ## Next steps I can do for you

  - Change `build.outDir` to `dist` if your host expects that by default.
  - Add a `_redirects` file for Netlify.
  - Diagnose a live deployment URL (paste it) and I'll fetch console/network errors and recommend fixes.

  ---

  I'll now build and start the app locally to verify `http://localhost:3000` is serving the built site.
