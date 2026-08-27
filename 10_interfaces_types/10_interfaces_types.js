"use strict";
// interface
// interface Point {
//   x: number;
//   y: number;
// }
// const originPoint: Point = { x: 0, y: 0 };
// console.log(originPoint);
// Output: { x: 0, y: 0 }
// type alias
// type Size = { width: number; height: number };
// const box: Size = { width: 3, height: 4 };
// console.log(box);
// Output: { width: 3, height: 4 }
// Extending an interface
// interface BasePoint {
//   x: number;
//   y: number;
// }
// interface Point3D extends BasePoint {
//   z: number;
// }
// const point3d: Point3D = { x: 1, y: 2, z: 3 };
// console.log(point3d);
// Output: { x: 1, y: 2, z: 3 }
// Optional and readonly properties
// interface Config {
//   readonly id: number;
//   label?: string;
// }
// const config: Config = { id: 1 };
// console.log(config);
// Output: { id: 1 }
