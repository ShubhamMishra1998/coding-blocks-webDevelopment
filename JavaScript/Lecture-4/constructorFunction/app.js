"use strict";

const person = function (name, age) {
  this.name = name;
  this.age = age;
};
person.prototype.sayHello = function () {
  console.log(`name is ${this.name}`);
};
const p1 = new person("garvit", 24);
const p2 = new person("pratik", 23);
