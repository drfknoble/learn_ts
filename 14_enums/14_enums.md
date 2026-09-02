---
marp: true
theme: marp_theme
title: Enums
---

# Enums

Give names to a fixed set of related values.

---

## Numeric Enums

Numeric enums create a runtime object. TypeScript also gives them reverse
mapping, so `Direction[0]` looks up the member name for the numeric value.

```ts
enum Direction {
  Up,
  Down,
  Left,
  Right,
}
console.log(Direction.Up);
console.log(Direction[0]);
```

```text
Output: 0
Up
```

---

## String Enums

String enums map names to readable values, but do not provide the numeric
reverse mapping. Explicit values are useful when the value crosses an API or
must remain stable if members are reordered.

```ts
enum Status {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
}
console.log(Status.Active);
```

```text
Output: ACTIVE
```

---

## const enum

`const enum` is inlined at compile time, avoiding a runtime lookup object.
That saves the runtime object but means there is nothing to inspect or iterate
over at runtime.

```ts
const enum Level {
  Low,
  Medium,
  High,
}
console.log(Level.Medium);
```

```text
Output: 1
```

---

## Enums vs Literal Unions

- A literal union (`"up" | "down"`) has no runtime object.
- An `enum` exists at runtime and can be inspected or iterated.
- Prefer literal unions for simple cases; enums for a named, stable set.

---

## Next steps

- Use enums for a small, fixed set of related constants.
- Prefer string enums for readable runtime values.
- Continue to classes.
