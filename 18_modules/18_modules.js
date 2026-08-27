"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importing named exports (requires math.ts in this folder)
const math_1 = require("./math");
console.log((0, math_1.add)(2, 3));
console.log(math_1.PI);
// Output:
// 5
// 3.14159
// Importing a default export (requires greeter.ts in this folder)
const greeter_1 = __importDefault(require("./greeter"));
console.log((0, greeter_1.default)("Ada"));
// Output: Hello, Ada
