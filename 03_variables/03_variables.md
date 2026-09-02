---
marp: true
theme: marp_theme
title: Variables
---

# Variables

Give values meaningful names with TypeScript.

---

## Declaring Variables

- `let` declares a variable that can be reassigned.
- `const` declares a variable that cannot be reassigned.
- Prefer `const` unless a value needs to change.

`const` prevents reassigning the binding; it does not freeze an object or
array stored in that binding. Use `let` when the binding itself must point to a
different value later, and avoid the older function-scoped `var` in new code.

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

Inference keeps local code concise. Add an annotation when it documents an
important boundary, such as a function parameter or return type, or when the
initial value does not communicate the intended type clearly.

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
