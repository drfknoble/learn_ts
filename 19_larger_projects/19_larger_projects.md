---
marp: true
theme: marp_theme
title: Larger Projects
---

# Larger Projects

Combine small, typed pieces into a maintainable program.

---

## Scope of This Lesson

- This course is about TypeScript, not React.
- This lesson is a brief teaser showing TypeScript at work across multiple files.
- Writing React apps is a large topic on its own, covered in a separate tutorial.

---

## From Scripts to Projects

- Lessons 02-11 ran a single `.ts` file with `tsc` and `node`.
- Real applications split code into components with clear boundaries.
- A light-weight React app shows this at a small scale.

The goal of a boundary is to make assumptions explicit: a component receives
typed props, owns its local state, and exposes only what other files need. This
keeps a change in one part of the application from requiring unrelated files
to know its implementation details.

---

## Scaffolding with Vite

Vite creates a ready-to-run React + TypeScript project:

```bash
npm create vite@latest app -- --template react-ts
cd app
npm install
```

- The `react-ts` template wires up React, TypeScript, and a dev server.

Scaffolding supplies the build pipeline, but it does not design the application
for you. The useful TypeScript habit is to keep the compiler involved as the
project grows instead of treating types as something added at the end.

---

## Project Structure

```text
app/
  src/
    main.tsx     # entry point
    App.tsx      # root component
    Counter.tsx  # a focused, typed component
```

- Each file has one responsibility.
- Props and state are typed, just like function parameters in lesson 12.

`main.tsx` is the entry point that mounts the app. `App.tsx` composes the main
view, while `Counter.tsx` owns one reusable piece of behavior. The exact names
are not important; the separation makes ownership and dependencies easier to
see.

---

## A Typed Component

```tsx
import { useState } from "react";

interface CounterProps {
  label: string;
}

function Counter({ label }: CounterProps) {
  const [count, setCount] = useState<number>(0);
  return <button onClick={() => setCount((c) => c + 1)}>{label} is {count}</button>;
}

export default Counter;
```

---

## Running the App

```bash
npm run dev    # start a local dev server with hot reload
npm run build  # type-check and produce a production build in dist/
```

---

## Next steps

- Separate responsibilities.
- Choose clear data boundaries.
- Test each part before composing the whole.
