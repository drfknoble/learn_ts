# Modules

This tutorial will introduce splitting code across files with `import` and `export`.

The lesson deck is [18_modules.md](18_modules.md). Its examples are in [18_modules.ts](18_modules.ts), which imports the supporting modules [math.ts](math.ts) and [greeter.ts](greeter.ts).

## Run the Example

This lesson compiles multiple files together, so it uses a local `tsconfig.json` (with `"module": "commonjs"`) instead of compiling a single file directly. From this folder, run:

```bash
tsc && node 18_modules.js
```

`tsc` (with no filename) follows the `import` statements and compiles `math.ts` and `greeter.ts` alongside `18_modules.ts`.

The Marp deck is exported to [18_modules.html](18_modules.html).
