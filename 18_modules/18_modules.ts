// Importing named exports (requires math.ts in this folder)
import { add, PI } from "./math";
console.log(add(2, 3));
console.log(PI);
// Output:
// 5
// 3.14159

// Importing a default export (requires greeter.ts in this folder)
import greet from "./greeter";
console.log(greet("Ada"));
// Output: Hello, Ada
