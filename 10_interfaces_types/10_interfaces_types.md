---
marp: true
theme: marp_theme
title: Interfaces and Type Aliases
---

# Interfaces and Type Aliases

Describe the shape of data with reusable, named types.

---

## Why Name a Shape?

- Object literal types can be repeated across a file.
- `interface` and `type` let you name a shape once and reuse it.

TypeScript uses **structural typing**: an object is compatible with a type when
it has the required shape, even if the object was not created from that type.
These names are compile-time descriptions; neither `interface` nor `type`
creates a runtime object.

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

An alias can name an object shape, a primitive, a union, or an intersection.
Interfaces are often a good choice for extensible object contracts, while
aliases are useful when combining types with `&` or `|`.

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

`extends` creates a new interface that includes the members of the original.
This is different from an intersection alias, which combines types with `&`:

```ts
type Point3DByAlias = Point & { z: number };
```

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
