"use strict";

// async function add(x, y, z) {
//   return x + y + z;
// }

// add(2, 3, 4)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

async function fun() {
  console.log("starting the fun function");
  console.log("starting to fetch data");
  const res = await fetch("https://api.cryptonator.com/api/ticker/btc-usd");
  console.log("startig to parse the data");
  const data = await res.json();
  console.log("printing the data");
  console.log(data);
  console.log("fun function executed");
  console.log("every thing is done");
}

console.log("start");
fun();
console.log("after fun");
console.log("after fun");
console.log("after fun");
console.log("after fun");
console.log("after fun");
console.log("after fun");
