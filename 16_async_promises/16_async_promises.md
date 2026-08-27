---
marp: true
theme: learn-ts
title: Async and Promises
---

# Async and Promises

Handle work that finishes later.

---

## Promises

A `Promise` represents a value that will be available later.

```ts
const loaded: Promise<string> = Promise.resolve("done");
loaded.then((value) => console.log(value));
```

```text
Output: done
```

---

## async / await

`await` pauses inside an `async` function until a promise settles.

```ts
async function loadMessage(): Promise<string> {
  return "Hello, async TypeScript";
}
async function main(): Promise<void> {
  const message = await loadMessage();
  console.log(message);
}
main();
```

```text
Output: Hello, async TypeScript
```

---

## Handling Errors

Wrap `await` in `try`/`catch` to handle a rejected promise.

```ts
async function risky(): Promise<void> {
  throw new Error("Something failed");
}
async function main2(): Promise<void> {
  try {
    await risky();
  } catch (error) {
    console.log((error as Error).message);
  }
}
main2();
```

```text
Output: Something failed
```

---

## Running Tasks in Parallel

`Promise.all` waits for several promises together.

```ts
async function main3(): Promise<void> {
  const [a, b] = await Promise.all([Promise.resolve(1), Promise.resolve(2)]);
  console.log(a, b);
}
main3();
```

```text
Output: 1 2
```

---

## Next steps

- Use `async`/`await` instead of chaining `.then`.
- Wrap `await` calls in `try`/`catch`.
- Continue to file input and output.
