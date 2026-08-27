---
marp: true
theme: learn-ts
title: String Objects
---

# String Objects

Transform and inspect text safely.

---

## String Basics

```ts
const label: string = "TypeScript";
console.log(label.length);
```

```text
Output: 10
```

---

## Template Literals

Embed expressions inside backtick strings.

```ts
const learnerName = "Ada";
console.log(`Hello, ${learnerName}!`);
```

```text
Output: Hello, Ada!
```

---

## Common String Methods

```ts
const label: string = "TypeScript";
console.log(label.toUpperCase());
console.log(label.slice(0, 4));
```

```text
Output: TYPESCRIPT
Type
```

---

## Searching Strings

```ts
const sentence = "Learn TypeScript today";
console.log(sentence.includes("TypeScript"));
console.log(sentence.indexOf("today"));
```

```text
Output: true
17
```

---

## Next steps

- Combine and split strings.
- Match text patterns.
- Keep text transformations readable.
