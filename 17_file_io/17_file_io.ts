// Writing a file
// import * as fs from "fs";
// fs.writeFileSync("output.txt", "A file can preserve this text.");
// Output: output.txt is created with the given text.

// Reading a file
// import * as fs from "fs";
// const contents = fs.readFileSync("output.txt", "utf-8");
// console.log(contents);
// Output: A file can preserve this text.

// Appending to a file
// import * as fs from "fs";
// fs.appendFileSync("output.txt", "\nA second line.");
// Output: output.txt now has two lines.

// Handling failures
// import * as fs from "fs";
// try {
//   fs.readFileSync("missing.txt", "utf-8");
// } catch (error) {
//   console.log("File not found");
// }
// Output: File not found
