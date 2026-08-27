---
marp: true
theme: learn-ts
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

---

## Scaffolding with Vite

Vite creates a ready-to-run React + TypeScript project:

```bash
npm create vite@latest app -- --template react-ts
cd app
npm install
```

- The `react-ts` template wires up React, TypeScript, and a dev server.

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
