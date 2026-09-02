---
marp: true
theme: marp_theme
title: Installation
---

# Installation

Set up Node.js and TypeScript to run TypeScript code from a terminal.

---

## What you need

- **Node.js** — provides `npm` and runs the compiled JavaScript.
- **TypeScript compiler (`tsc`)** — compiles `.ts` files into `.js`.

TypeScript code cannot run directly; it must first be compiled to JavaScript.

---

## Step 1: Install Node.js

Download and install Node.js (LTS version) from [nodejs.org](https://nodejs.org).

On Linux, you can also use a package manager:

```bash
sudo apt update && sudo apt install -y nodejs npm
```

---

## Step 2: Verify Node.js and npm

Confirm both tools installed correctly:

```bash
node --version
npm --version
```

Each command should print a version number, e.g. `v20.11.0` and `10.2.4`.

---

## Step 3: Install the TypeScript compiler

Install TypeScript globally using npm:

```bash
npm install --global typescript
```

This makes the `tsc` command available in any terminal.

---

## Step 4: Verify TypeScript

Check that `tsc` is installed and see its version:

```bash
tsc --version
```

This should print something like `Version 5.4.5`.

---

## Step 5: Compile and run a `.ts` file

Compile a TypeScript file to JavaScript, then run it with Node.js:

```bash
tsc 01_installation.ts
node 01_installation.js
```

`tsc` produces a `.js` file with the same name; `node` executes it.

---

## Next steps

- Install Node.js and the TypeScript compiler.
- Run the example in `01_installation.ts`.
- Continue to the next tutorial.
