---
marp: true
theme: learn-ts
title: Classes
---

# Classes

Model data and behavior together.

---

## Defining a Class

```ts
class Counter {
  value: number;
}
```

- A class describes the shape of its instances.
- `value: number` declares a typed property.

---

## Constructors & Properties

```ts
class Counter {
  constructor(public value: number) {}
}
console.log(new Counter(3).value);
```

```text
Output: 3
```

---

## Methods

```ts
class Counter {
  constructor(public value: number) {}
  increment(): void {
    this.value += 1;
  }
}
const counter = new Counter(3);
counter.increment();
console.log(counter.value);
```

```text
Output: 4
```

---

## Inheritance

`extends` reuses a parent class's behavior. A subclass constructor must call
`super(...)` before it can use `this`, and `super.method()` can call the parent
implementation when overriding a method.

```ts
class SteppedCounter extends Counter {
  increment(): void {
    this.value += 2;
  }
}
const stepped = new SteppedCounter(0);
stepped.increment();
console.log(stepped.value);
```

```text
Output: 2
```

---

## Access Modifiers

- `public` — accessible anywhere (the default).
- `private` — accessible only within the class.
- `protected` — accessible within the class and its subclasses.

Use a class when data needs shared behavior and instance identity. For plain
data, an object described by an interface or type alias is often simpler.

```ts
class Account {
  private balance = 0;
  deposit(amount: number): void {
    this.balance += amount;
  }
}
```

---

## Next steps

- Define a class.
- Initialize instances with a constructor.
- Keep responsibilities focused.
