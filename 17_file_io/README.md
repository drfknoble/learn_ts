# File Input and Output

This tutorial will introduce reading and writing files with TypeScript and Node.js.

The lesson deck is [17_file_io.md](17_file_io.md), and its examples are in [17_file_io.ts](17_file_io.ts).

## Run the Example

This lesson reads and writes real files, so it needs Node's type definitions (`fs` is a Node.js API, not a TypeScript language feature). From this folder, run:

```bash
npm install
tsc && node 17_file_io.js
```

`npm install` installs `@types/node` (declared in `package.json`), and the local `tsconfig.json` enables `"types": ["node"]` so `tsc` (with no filename) picks it up automatically.

The Marp deck is exported to [17_file_io.html](17_file_io.html).
