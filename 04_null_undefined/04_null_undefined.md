---
marp: true
theme: learn-ts
title: Null and Undefined
---

# Null and Undefined

Represent the absence of a value safely.

---

## undefined vs null

- `undefined` means a value has not been assigned yet.
- `null` means a value is intentionally empty.

```ts
let a: number | undefined;
let b: number | null = null;
console.log(a, b);
```

```text
Output: undefined null
```

---

## Optional Properties

A `?` marks a property as optional; it may be `undefined`.

```ts
const profile: { nickname?: string } = {};
console.log(profile.nickname);
```

```text
Output: undefined
```

---

## Optional Chaining

`?.` reads a property only if the value before it is not `null`/`undefined`.

```ts
const profile2: { nickname?: string } = {};
console.log(profile2.nickname?.toUpperCase());
```

```text
Output: undefined
```

---

## Nullish Coalescing

`??` supplies a fallback only for `null`/`undefined` (unlike `||`, which also replaces `0` and `""`).

```ts
const nickname: string | undefined = undefined;
console.log(nickname ?? "Anonymous");
```

```text
Output: Anonymous
```

---

## Next steps

- Prefer `??` over `||` when zero or an empty string are valid values.
- Use `?.` to safely access optional properties.
- Continue to user input and output.
