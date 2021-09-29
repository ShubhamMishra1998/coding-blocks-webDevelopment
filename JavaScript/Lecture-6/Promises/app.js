"use strict";

// *********************Using Promises**********************************
const x = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let num = Math.random();
    console.log(num);
    if (num > 0.5) resolve();
    else reject();
  }, 3000);
});

x.then(function () {
  console.log("inside resolve");
}).catch(function () {
  console.log("inside reject");
});
