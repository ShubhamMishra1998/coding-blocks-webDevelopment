"use strict";
// ES6 Classes
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   sayName() {
//     console.log(`name is ${this.name}`);
//   }
// }

// const p1 = new Person("shubham", 22);
// const p2 = new Person("mishra", 23);

class Car {
  constructor(name, color, price) {
    this.name = name;
    this.color = color;
    this.price = price;
  }

  getName() {
    return this.name;
  }
  // getter and setters
  get getName() {
    return this.name;
  }
  get getPrice() {
    return this.price;
  }
  set setPrice(newPrice) {
    this.price = newPrice;
  }
}

// let c1 = new Car("mersedies", "black", 20000000000);

class RacingCar extends Car {
  constructor(name, color, price, maxSpeed, discBreak) {
    super(name, color, price);
    this.maxSpeed = maxSpeed;
    this.discBreak = discBreak;
  }
  get getMaxSpeed() {
    return this.maxSpeed;
  }
}

const r1 = new RacingCar("BMW", "red", 1200000, 400, true);
