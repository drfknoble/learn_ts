---
marp: true
theme: marp_theme
title: Generics
---

# Generics

Write reusable code that works with many types.

---

## A Generic Function

`<T>` stands in for a type that is decided when the function is called.

Generics solve a reuse problem: without them, we might write separate
`identityNumber` and `identityString` functions. Unlike `any`, a generic keeps
the relationship between the input and output, so a number comes back as a
number and a string comes back as a string.

```ts
function identity<T>(value: T): T {
  return value;
}
console.log(identity<number>(5));
console.log(identity("hello"));
```

```text
Output: 5
hello
```

---

## Generic Constraints

`extends` restricts a generic to types with certain members.

```ts
function lengthOf<T extends { length: number }>(value: T): number {
  return value.length;
}
console.log(lengthOf("TypeScript"));
console.log(lengthOf([1, 2, 3]));
```

```text
Output: 10
3
```

---

## Generic Interfaces

```ts
interface Box<T> {
  contents: T;
}
const numberBox: Box<number> = { contents: 42 };
console.log(numberBox.contents);
```

```text
Output: 42
```

---

## Generic Classes

The same class implementation can serve different element types. In
`Stack<string>`, `T` becomes `string`, so `push` accepts strings and `pop`
returns `string | undefined`. The `undefined` case matters because an empty
stack has no item to return.

```ts
class Stack<T> {
  private items: T[] = [];
  push(item: T): void {
    this.items.push(item);
  }
  pop(): T | undefined {
    return this.items.pop();
  }
}
const stack = new Stack<string>();
stack.push("a");
stack.push("b");
console.log(stack.pop());
```

```text
Output: b
```

---

## Next steps

- Use generics instead of duplicating code per type.
- Constrain generics with `extends` when a member is required.
- Continue to enums.
