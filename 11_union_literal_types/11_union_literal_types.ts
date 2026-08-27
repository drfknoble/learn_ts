// Union types
// let id: number | string;
// id = 42;
// id = "abc-42";
// console.log(id);
// Output: abc-42

// Literal types
// let direction: "up" | "down" | "left" | "right";
// direction = "up";
// console.log(direction);
// Output: up

// Narrowing with typeof
// function describe(value: number | string): string {
//   if (typeof value === "number") {
//     return `number: ${value}`;
//   }
//   return `string: ${value}`;
// }
// console.log(describe(5));
// Output: number: 5

// Intersection types
// type Named = { name: string };
// type Aged = { age: number };
// type Person = Named & Aged;
// const person: Person = { name: "Ada", age: 30 };
// console.log(person);
// Output: { name: 'Ada', age: 30 }
