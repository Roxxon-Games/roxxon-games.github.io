# ROXXON Games Website

React/Vite website for ROXXON Games, deployed to GitHub Pages.

## Structure

```text
.
├── .github/workflows/deploy.yml
├── public/
│   ├── images/
│   ├── app-ads.txt
│   └── .nojekyll
├── src/
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── components.json
```

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## GitHub Pages

The site builds to `dist/`. The GitHub Actions workflow deploys `dist/` to GitHub Pages, so generated build files should not be committed.
