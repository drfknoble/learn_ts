---
marp: true
theme: learn-ts
title: Modules
---

# Modules

Split code across files with `import` and `export`.

---

## Exporting from a Module

These are ES modules (ESM), the modern JavaScript module system. Node.js can
also use CommonJS with `require` and `module.exports`; a project should choose
one module style and configure TypeScript and Node.js consistently.

```ts
// math.ts
export function add(a: number, b: number): number {
  return a + b;
}
export const PI = 3.14159;
```

- Only exported names are visible to other files.

---

## Importing Named Exports

```ts
import { add, PI } from "./math";
console.log(add(2, 3));
console.log(PI);
```

```text
Output: 5
3.14159
```

---

## Default Exports

An importer may choose any local name for a default export. Named exports keep
their exported name, which makes the dependency visible at the import site.

```ts
// greeter.ts
export default function greet(name: string): string {
  return `Hello, ${name}`;
}
```

```ts
import greet from "./greeter";
console.log(greet("Ada"));
```

```text
Output: Hello, Ada
```

---

## Why Split Code into Modules?

- Each file has one responsibility, like the components in the larger project lesson.
- A module's private details stay private unless explicitly exported.

---

## Next steps

- Export the values a module should share.
- Import only what a file needs.
- Continue to larger projects.
