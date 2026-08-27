---
marp: true
theme: learn-ts
title: Conditional Statements
---

# Conditional Statements

Choose an action based on a condition.

---

## if / else

```ts
const temperature: number = 18;
if (temperature >= 20) {
  console.log("Warm");
} else {
  console.log("Cool");
}
```

```text
Output: Cool
```

---

## else if Chains

```ts
const score: number = 72;
if (score >= 90) {
  console.log("A");
} else if (score >= 70) {
  console.log("B");
} else {
  console.log("C");
}
```

```text
Output: B
```

---

## switch Statements

```ts
const day: string = "Mon";
switch (day) {
  case "Sat":
  case "Sun":
    console.log("Weekend");
    break;
  default:
    console.log("Weekday");
}
```

```text
Output: Weekday
```

---

## Ternary Operator

A compact form of `if` / `else` that returns a value.

```ts
const temperature: number = 18;
console.log(temperature >= 20 ? "Warm" : "Cool");
```

```text
Output: Cool
```

---

## Next steps

- Compare values.
- Branch with `if` and `else`.
- Make invalid states visible in the code.
