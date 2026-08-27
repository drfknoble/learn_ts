# Larger Projects

This tutorial brings TypeScript features together in a light-weight React app, scaffolded with [Vite](https://vitejs.dev)'s `react-ts` template.

This lesson is a brief teaser, not a full React course. The goal is to show TypeScript working across multiple files in a real project, not to teach React itself (JSX, hooks, event handling, etc.). Writing React apps with TypeScript is left for a separate, dedicated tutorial.

The lesson deck is [19_larger_projects.md](19_larger_projects.md). The app itself is in [app/](app/), with a focused, typed component in [app/src/Counter.tsx](app/src/Counter.tsx).

## Run the Example

From this folder:

```bash
cd app
npm install
npm run dev
```

Open the printed local URL in a browser to see the app. To produce a type-checked production build instead:

```bash
npm run build
```

Unlike earlier lessons, this project does not use `tsc`+`node` directly — `npm run build` runs `tsc -b` for type-checking and `vite build` to bundle the app.

The Marp deck is exported to [19_larger_projects.html](19_larger_projects.html).
