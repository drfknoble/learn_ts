---
marp: true
theme: learn-ts
title: Conditional Statements
---

# Conditional Statements

Choose an action based on a condition.

---

## if / else

Conditions use truthiness when a value is tested directly. The falsy values
are `false`, `0`, `""`, `null`, `undefined`, and `NaN`; other values are
truthy. Use an explicit comparison when treating a value such as `0` as a
valid case.

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

Each `case` compares with the switch value. `break` stops execution after a
matching case; without it, execution falls through into the next case. That
can be intentional, as with the two weekend cases below.

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
