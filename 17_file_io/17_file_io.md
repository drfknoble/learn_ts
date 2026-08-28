---
marp: true
theme: learn-ts
title: File Input and Output
---

# File Input and Output

Work with data stored outside the running program.

---

## Setting Up

- File I/O uses Node's `fs` module, not a TypeScript language feature.
- Install type definitions once per lesson folder:

```bash
npm install
```

- A `tsconfig.json` in this folder enables `"types": ["node"]`.

---

## Writing a File

The `Sync` methods block the Node.js thread until the operating system finishes
the file operation. They are convenient for a small script, but asynchronous
methods are preferable in a server so other work can continue while a disk
operation is waiting.

```ts
import * as fs from "fs";

fs.writeFileSync("output.txt", "A file can preserve this text.");
```

```text
Output: output.txt is created with the given text.
```

---

## Reading a File

Passing `"utf-8"` asks Node.js to return text. Without an encoding, the result
is a `Buffer`, which is useful when handling binary data.

```ts
import * as fs from "fs";

const contents = fs.readFileSync("output.txt", "utf-8");
console.log(contents);
```

```text
Output: A file can preserve this text.
```

---

## Appending to a File

```ts
import * as fs from "fs";

fs.appendFileSync("output.txt", "\nA second line.");
```

```text
Output: output.txt now has two lines.
```

---

## Handling Failures

```ts
import * as fs from "fs";

try {
  fs.readFileSync("missing.txt", "utf-8");
} catch (error) {
  console.log("File not found");
}
```

```text
Output: File not found
```

---

## Next steps

- Identify a file path.
- Read and write text with Node.js.
- Handle failures explicitly.
