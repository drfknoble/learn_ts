---
marp: true
theme: marp_theme
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

Array methods communicate what should happen to a collection:

- `map` transforms every element and returns a new array.
- `filter` keeps only elements that pass a test.
- `reduce` combines the elements into one result, such as a total.

```ts
const numbers: number[] = [1, 2, 3];
const doubled = numbers.map((n) => n * 2);
console.log(doubled);
```

```text
Output: [ 2, 4, 6 ]
```

The example leaves `numbers` unchanged. Methods such as `map` and `filter`
return new arrays; methods such as `push` change the existing array.

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

Arrays and objects are values that can contain other values. A `const` binding
prevents replacing the array or object, but it does not prevent changing its
contents. TypeScript checks the element and property types while you write the
code; JavaScript performs the operations when the program runs.

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
