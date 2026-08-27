"use strict";
// Promises
// const loaded: Promise<string> = Promise.resolve("done");
// loaded.then((value) => console.log(value));
// Output: done
// async / await
// async function loadMessage(): Promise<string> {
//   return "Hello, async TypeScript";
// }
// async function main(): Promise<void> {
//   const message = await loadMessage();
//   console.log(message);
// }
// main();
// Output: Hello, async TypeScript
// Handling errors
// async function risky(): Promise<void> {
//   throw new Error("Something failed");
// }
// async function main2(): Promise<void> {
//   try {
//     await risky();
//   } catch (error) {
//     console.log((error as Error).message);
//   }
// }
// main2();
// Output: Something failed
// Running tasks in parallel
// async function main3(): Promise<void> {
//   const [a, b] = await Promise.all([Promise.resolve(1), Promise.resolve(2)]);
//   console.log(a, b);
// }
// main3();
// Output: 1 2
