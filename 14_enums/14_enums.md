---
marp: true
theme: learn-ts
title: Enums
---

# Enums

Give names to a fixed set of related values.

---

## Numeric Enums

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
