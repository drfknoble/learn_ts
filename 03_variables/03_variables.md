---
marp: true
theme: learn-ts
title: Variables
---

# Variables

Give values meaningful names with TypeScript.

---

## Declaring Variables

- `let` declares a variable that can be reassigned.
- `const` declares a variable that cannot be reassigned.
- Prefer `const` unless a value needs to change.

```ts
let score = 0;
const maxScore = 100;
```

---

## Primitive Types

TypeScript's core primitive types:

```ts
const age: number = 30;
const learnerName: string = "Ada";
const active: boolean = true;
console.log(age, learnerName, active);
```

```text
Output: 30 Ada true
```

---

## Type Annotations

- `: type` after a name declares its type explicitly.
- Assigning a mismatched value is a compile error.

```ts
let lessonCount: number = 12;
// lessonCount = "twelve"; // Error: string is not assignable to number
```

---

## Type Inference

- TypeScript infers a type from the initial value.
- Explicit annotations are optional when inference is clear.

```ts
let title = "Variables"; // inferred as string
console.log(title);
```

```text
Output: Variables
```

---

## Objects as Structures

Group related values into a single object:

```ts
const lesson = { title: "Variables", number: 3 };
console.log(lesson.title);
```

```text
Output: Variables
```

---

## Next steps

- Declare values with `const` and `let`.
- Add type annotations where they help.
- Compile the example source.
