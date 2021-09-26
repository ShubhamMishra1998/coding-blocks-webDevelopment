"use strict";
// new scope for var x is createed output 10 5 *****************************
// var x = 5;
// function a() {
//   var x = 10;
//   console.log(x);
// }
// a();
// console.log(x);
// *****************************************

// no new scope for x is created x remain same and output is 60 60 we areonlyredefining***********
// var x = 50;
// if (x > 1) {
//   var x = 60;
//   console.log(x);
// }
// console.log(x);
// *************************************************************

// *******************************************

// let and const have block scope and new scope is created output is 10 50
let x = 50;
if (x > 10) {
  let x = 10;
  console.log(x);
}
console.log(x);
