"use strict";

const btns = document.querySelectorAll("section button");
for (let btn of btns) {
  btn.addEventListener("mouseenter", (e) => {
    console.log(e);
  });
}
