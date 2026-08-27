---
marp: true
theme: learn-ts
title: Interfaces and Type Aliases
---

# Interfaces and Type Aliases

Describe the shape of data with reusable, named types.

---

## Why Name a Shape?

- Object literal types can be repeated across a file.
- `interface` and `type` let you name a shape once and reuse it.

---

## interface

```ts
interface Point {
  x: number;
  y: number;
}
const originPoint: Point = { x: 0, y: 0 };
console.log(originPoint);
```

```text
Output: { x: 0, y: 0 }
```

---

## type Alias

```ts
type Size = { width: number; height: number };
const box: Size = { width: 3, height: 4 };
console.log(box);
```

```text
Output: { width: 3, height: 4 }
```

---

## Extending an Interface

```ts
interface Point3D extends Point {
  z: number;
}
const point3d: Point3D = { x: 1, y: 2, z: 3 };
console.log(point3d);
```

```text
Output: { x: 1, y: 2, z: 3 }
```

---

## Optional and Readonly Properties

```ts
interface Config {
  readonly id: number;
  label?: string;
}
const config: Config = { id: 1 };
console.log(config);
```

```text
Output: { id: 1 }
```

---

## Next steps

- Name shared shapes instead of repeating them.
- Reach for `interface` when a shape may need to be extended.
- Reach for `type` for aliases, unions, and simpler cases.
