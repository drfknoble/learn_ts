---
marp: true
theme: learn-ts
title: Arrays and Objects
---

# Arrays and Objects

Organize related data with collections and object shapes.

---

## Creating Arrays

```ts
const scores: number[] = [8, 13, 21];
console.log(scores[0]);
```

```text
Output: 8
```

---

## Typed Arrays

- `number[]` and `string[]` describe an array's element type.
- `Array<T>` is an equivalent generic form.

```ts
const names: Array<string> = ["Ada", "Grace"];
console.log(names.length);
```

```text
Output: 2
```

---

## Common Array Methods

```ts
const numbers: number[] = [1, 2, 3];
const doubled = numbers.map((n) => n * 2);
console.log(doubled);
```

```text
Output: [ 2, 4, 6 ]
```

---

## Iterating Arrays

```ts
const fruits: string[] = ["apple", "pear"];
for (const fruit of fruits) {
  console.log(fruit);
}
```

```text
Output:
apple
pear
```

---

## Objects as Structures

```ts
const point = { x: 1, y: 2 };
console.log(`(${point.x}, ${point.y})`);
```

```text
Output: (1, 2)
```

---

## Next steps

- Create arrays of values.
- Describe object properties.
- Read and update structured data.
