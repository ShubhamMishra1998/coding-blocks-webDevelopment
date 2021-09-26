"use strict";

function delay(n) {
  for (let i = 1; i <= n; i++) {
    const x = new Date().getTime();
    while (new Date().getTime() < x + 1000) {}
  }
  fun();
}

function fun() {
  console.log("fun");
}
console.log("start");
// delay(5);
setTimeout(function () {
  console.log("Inside fun");
}, 5000);
console.log("stop");
