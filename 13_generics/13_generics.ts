// A generic function
// function identity<T>(value: T): T {
//   return value;
// }
// console.log(identity<number>(5));
// console.log(identity("hello"));
// Output: 5, hello

// Generic constraints
// function lengthOf<T extends { length: number }>(value: T): number {
//   return value.length;
// }
// console.log(lengthOf("TypeScript"));
// console.log(lengthOf([1, 2, 3]));
// Output: 10, 3

// Generic interfaces
// interface Box<T> {
//   contents: T;
// }
// const numberBox: Box<number> = { contents: 42 };
// console.log(numberBox.contents);
// Output: 42

// Generic classes
// class Stack<T> {
//   private items: T[] = [];
//   push(item: T): void {
//     this.items.push(item);
//   }
//   pop(): T | undefined {
//     return this.items.pop();
//   }
// }
// const stack = new Stack<string>();
// stack.push("a");
// stack.push("b");
// console.log(stack.pop());
// Output: b
