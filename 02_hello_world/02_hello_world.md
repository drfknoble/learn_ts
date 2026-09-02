---
marp: true
theme: marp_theme
title: Hello World
---

# Hello World

Write and run a first TypeScript program.

---

## JavaScript and TypeScript

- JavaScript runs in browsers and in Node.js.
- TypeScript is a superset of JavaScript that adds static types.
- Every valid JavaScript program is also valid TypeScript.

---

## Similarities

- Same syntax for variables, functions, and control flow.
- Same runtime behavior — TypeScript compiles down to JavaScript.
- Same standard library (`console`, arrays, strings, etc.).

---

## Differences

- TypeScript adds type annotations, e.g. `: string`, `: number`.
- TypeScript catches type errors before the code runs.
- TypeScript source must be compiled to JavaScript to run.

Compilation is a two-part step: `tsc` checks the types and emits JavaScript;
then Node.js or a browser runs that JavaScript. Type annotations are removed
from the emitted file because they guide development but are not runtime
values.

---

## Hello World in JavaScript

```js
console.log("Hello, World!");
```

```text
Output: Hello, World!
```

---

## Hello World in TypeScript

```ts
let message: string = "Hello, TypeScript";
console.log(message);
```

```text
Output: Hello, TypeScript
```

---

## Next steps

- Add a simple output statement.
- Compile the TypeScript source.
- Run the generated JavaScript.
