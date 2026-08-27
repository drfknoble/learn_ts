---
marp: true
theme: learn-ts
title: User Input and Output
---

# User Input and Output

Communicate with a program through the terminal.

---

## console.log for Output

- `console.log` writes text to standard output.
- Template literals (`` `...` ``) embed values in a message.

```ts
const response: string = "ready";
console.log(`Status: ${response}`);
```

```text
Output: Status: ready
```

---

## Other Console Methods

- `console.error` writes to standard error.
- `console.table` prints structured data as a table.

```ts
console.error("Something went wrong");
console.table([{ id: 1, name: "Ada" }]);
```

---

## Reading Input with readline

Node.js provides `readline/promises` to read a line from the terminal.

```ts
import { createInterface } from "readline/promises";

async function main() {
	const rl = createInterface({ input: process.stdin, output: process.stdout });
	const name = await rl.question("What is your name? ");
	rl.close();
	console.log(`Hello, ${name}`);
}

main();
```

---

## Async Input Handling

- Reading input is asynchronous — use `await` inside an `async` function.
- Always close the interface when done to let the program exit.

```text
Output (after typing "Ada"):
Hello, Ada
```

---

## Next steps

- Display useful messages.
- Represent input as typed data.
- Run each example independently.
