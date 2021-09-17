"use strict";
const a = [];
a.push(1, 2, 3, 4);
a.push(5);
a.push(6);
console.log(a);
let d = a.pop();
console.log(a, d);
console.log(a.slice(3));
// ---------------------
const s1 = "https://youtube/com/codingblocks/myvideo";
console.log(s1.split("/").pop());
