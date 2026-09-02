---
marp: true
theme: marp_theme
title: Async and Promises
---

# Async and Promises

Handle work that finishes later.

---

## Promises

A `Promise` represents a value that will be available later.

It moves through one of three states: **pending**, **fulfilled**, or
**rejected**. A promise settles when it becomes fulfilled or rejected, and it
cannot change state again. `.then()` handles a fulfilled value; `.catch()` can
handle a rejection.

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

An `async` function always returns a promise, even when it returns an ordinary
value. `await` gives the fulfilled value back to the local variable and turns a
rejection into an exception that `try`/`catch` can handle. It pauses this
function, not the entire JavaScript process.

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

The promises begin when they are created, so putting them in `Promise.all`
allows independent work to overlap. The result keeps the input order. If any
promise rejects, `Promise.all` rejects as a whole; use separate error handling
when partial results are useful.

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
