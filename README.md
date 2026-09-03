# Learn TypeScript (TS)

[![Ko-fi](https://img.shields.io/badge/Ko--fi-Support-29abe0?logo=ko-fi&logoColor=white)](https://ko-fi.com/drfknoble) ![Language: TypeScript](https://img.shields.io/badge/Language-TypeScript-blue)

Learn TypeScript through a step-by-step tutorial series, with examples and explanations written in TypeScript.

## What This Repository Contains

- 19 lesson folders, each focused on one topic and divided into Marp slides.
- Lesson source slides in Markdown (e.g. [01_installation.md](01_installation/01_installation.md)) and rendered HTML (e.g. [01_installation.html](01_installation/01_installation.html)).
- A `.ts` file per lesson with runnable examples, each commented out so it can be uncommented and run independently.
- A lesson-level README in each folder summarizing the content and how to run it.

## Prerequisites

- Node.js 18+ (recommended)
- TypeScript compiler (`tsc`)

If TypeScript is not installed:

```bash
npm install --global typescript
```

## Getting Started

Most lessons run by compiling a lesson's `.ts` file and running the output:

```bash
tsc 02_hello_world/02_hello_world.ts && node 02_hello_world/02_hello_world.js
```

Uncomment one example block in the `.ts` file at a time to try it. You can do the same for any lesson folder by replacing the path.

A few lessons need an extra step:

- **17 File Input and Output** needs Node's type definitions. Run `npm install` inside [17_file_io](17_file_io/) before compiling.
- **18 Modules** compiles multiple files together. Run `tsc && node 18_modules.js` inside [18_modules](18_modules/) instead of compiling a single file.
- **19 Larger Projects** is a Vite + React app rather than a single script. Run `npm install` and `npm run dev` inside [19_larger_projects/app](19_larger_projects/app/).

See each lesson's README for exact commands.

## Course Outline

1. [01 Installation](01_installation/README.md)
2. [02 Hello World](02_hello_world/README.md)
3. [03 Variables](03_variables/README.md)
4. [04 Null and Undefined](04_null_undefined/README.md)
5. [05 User Input and Output](05_user_io/README.md)
6. [06 Conditional Statements](06_conditional_statements/README.md)
7. [07 Loop Statements](07_loop_statements/README.md)
8. [08 Arrays and Objects](08_array_objects/README.md)
9. [09 String Objects](09_string_objects/README.md)
10. [10 Interfaces and Type Aliases](10_interfaces_types/README.md)
11. [11 Union and Literal Types](11_union_literal_types/README.md)
12. [12 Functions](12_functions/README.md)
13. [13 Generics](13_generics/README.md)
14. [14 Enums](14_enums/README.md)
15. [15 Classes](15_classes/README.md)
16. [16 Async and Promises](16_async_promises/README.md)
17. [17 File Input and Output](17_file_io/README.md)
18. [18 Modules](18_modules/README.md)
19. [19 Larger Projects](19_larger_projects/README.md)

## Learning Path

Follow lessons in order from 01 to 19 for a progressive path.

- Lesson 01 sets up the tools needed to run TypeScript.
- Lessons 02-09 build core language foundations, including how to handle missing values.
- Lessons 10-14 cover TypeScript's type system in depth: object shapes, unions, generics, and enums.
- Lessons 15-18 apply everything to classes, asynchronous code, files, and modules.
- Lesson 19 shows those foundations at work in a small multi-file project. It is a brief teaser, not a React course — writing React apps with TypeScript is intentionally out of scope here and left for a separate, dedicated tutorial.

## License

The educational materials, including Markdown lessons, lesson READMEs, and other non-code content, are licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). See [LICENSE_MATERIAL](LICENSE_MATERIAL) for the full terms.

- Free to use and adapt for non-commercial purposes.
- Attribution is required.
- Commercial use is **not** allowed.
- Derivative work must be shared under the same license.

The source code and runnable examples, including `.ts`, `.js`, and `.html` files, are licensed under the terms in [LICENSE_CODE](LICENSE_CODE). This license permits personal, educational, non-profit, and commercial use, but prohibits selling, distributing, or commercially capitalizing on the code and commercial distribution or sale of derivative works.

## Credits

Created by @drfknoble.

- [YouTube](https://www.youtube.com/@drfknoble)
- [Ko-fi](https://ko-fi.com/drfknoble)
