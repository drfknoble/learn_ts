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

```ts
import * as fs from "fs";

fs.writeFileSync("output.txt", "A file can preserve this text.");
```

```text
Output: output.txt is created with the given text.
```

---

## Reading a File

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
