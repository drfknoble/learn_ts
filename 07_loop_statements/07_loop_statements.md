---
marp: true
theme: learn-ts
title: Loop Statements
---

# Loop Statements

Repeat work without duplicating code.

---

## for Loop

Use when the number of iterations is known.

The initializer runs once, the condition is checked before each iteration, and
the update runs after each iteration. `break` exits early; `continue` skips the
rest of the current iteration.

```ts
for (let step = 1; step <= 3; step += 1) {
  console.log(`Step ${step}`);
}
```

```text
Output:
Step 1
Step 2
Step 3
```

---

## while Loop

Use when iteration depends on a condition.

```ts
let count = 3;
while (count > 0) {
  console.log(count);
  count -= 1;
}
```

```text
Output:
3
2
1
```

---

## do-while Loop

Runs the body at least once before checking the condition.

```ts
let attempts = 0;
do {
  attempts += 1;
} while (attempts < 1);
console.log(attempts);
```

```text
Output: 1
```

---

## for...of Loop

Iterate directly over the values of a collection.

Choose `for...of` when the values matter more than their indexes. Use a
traditional `for` loop when you need the index or precise control over the
update, and `while` when the stopping condition comes from changing state.

```ts
const colors: string[] = ["red", "green", "blue"];
for (const color of colors) {
  console.log(color);
}
```

```text
Output:
red
green
blue
```

---

## Next steps

- Use `for` loops for counted work.
- Use `for...of` for collections.
- Keep loop state easy to inspect.
