---
marp: true
theme: marp_theme
title: Union and Literal Types
---

# Union and Literal Types

Model values that can be one of several shapes.

---

## Union Types

A union allows a value to be one of several types.

```ts
let id: number | string;
id = 42;
id = "abc-42";
console.log(id);
```

```text
Output: abc-42
```

---

## Literal Types

A literal type restricts a value to specific, exact values.

```ts
let direction: "up" | "down" | "left" | "right";
direction = "up";
console.log(direction);
```

```text
Output: up
```

---

## Narrowing with typeof

Check a union's runtime type before using type-specific members.

TypeScript will not allow an operation unless it is valid for every member of
the union. A type guard such as `typeof` narrows the value inside that branch.
Other common guards include `instanceof`, the `in` operator, and a shared
literal property such as `kind` in a discriminated union.

```ts
function describe(value: number | string): string {
  if (typeof value === "number") {
    return `number: ${value}`;
  }
  return `string: ${value}`;
}
console.log(describe(5));
```

```text
Output: number: 5
```

---

## Intersection Types

An intersection combines multiple types into one.

```ts
type Named = { name: string };
type Aged = { age: number };
type Person = Named & Aged;
const person: Person = { name: "Ada", age: 30 };
console.log(person);
```

```text
Output: { name: 'Ada', age: 30 }
```

---

## Next steps

- Combine types with `|` for alternatives.
- Combine types with `&` to merge shapes.
- Narrow a union with `typeof` before using type-specific members.
