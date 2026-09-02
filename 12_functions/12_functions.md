---
marp: true
theme: marp_theme
title: Functions
---

# Functions

Package behavior into reusable, typed units.

---

## Declaring Functions

```ts
function double(value: number): number {
  return value * 2;
}
console.log(double(6));
```

```text
Output: 12
```

---

## Parameters & Return Types

- Parameter types are annotated like variables.
- The return type comes after the parameter list.

The annotations form a contract: callers must supply the right arguments, and
the implementation must return the promised type. A function can also be
stored in a variable or passed to another function as a callback.

```ts
function greet(name: string): string {
  return `Hello, ${name}`;
}
console.log(greet("Ada"));
```

```text
Output: Hello, Ada
```

---

## Optional & Default Parameters

```ts
function power(base: number, exponent = 2): number {
  return base ** exponent;
}
console.log(power(3));
console.log(power(2, 3));
```

```text
Output: 9
8
```

---

## Arrow Functions

A compact syntax for writing functions, often used inline.

An arrow function is still a value with a function type. This makes it useful
for callbacks such as array transformations. Arrow functions also capture
`this` from their surrounding scope, unlike a regular function's dynamic
`this`.

```ts
const triple = (value: number): number => value * 3;
console.log(triple(4));
```

```text
Output: 12
```

---

## Next steps

- Accept typed parameters.
- Return useful values.
- Compose small functions into larger tasks.
