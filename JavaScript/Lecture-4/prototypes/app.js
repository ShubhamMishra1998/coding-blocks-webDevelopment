"use strict";

const person = {
  Name: "Shubham",
  Age: 24,
  isAdult: true,
};

let p1 = Object.create(person);
let p2 = Object.create(p1);
