"use strict";

const submit = document.querySelector("#submit");
const inp = document.querySelector("#input");
const ul = document.querySelector("#ulist");
const innerHtmlLi = `<p class="p-class"></p>
          <i class="fas fa-trash-alt fa-2x"></i>`;

let num = 0;
let storageStrings = [];
// localStorage.clear();
// *******************************
// console.log(localStorage.length);
for (let i = 0; i < localStorage.length; i++) {
  const str = localStorage.getItem(localStorage.key(i));
  storageStrings.push(str);
}
localStorage.clear();

for (let text of storageStrings) {
  const li = document.createElement("li");
  const r = Math.round(Math.random() * 256);
  const g = Math.round(Math.random() * 256);
  const b = Math.round(Math.random() * 256);
  const x = Math.random();
  li.style.backgroundColor = `rgba(${r}, ${g}, ${b},${x})`;
  li.classList.add("li-class");
  li.innerHTML = innerHtmlLi;
  li.children[0].innerText = text;
  li.children[0].style.color = "#ccc";
  li.children[1].style.color = "#ccc";
  // console.log(li.innerHTML);
  num++;
  li.classList.add(String(num));
  // console.log(li.children[0].classList);
  localStorage.setItem(num + "", text);
  ul.append(li);
  // console.log(localStorage.getItem(num + ""));

  li.children[1].addEventListener("click", (e) => {
    let cl = li.classList[1];
    // console.log(cl);
    localStorage.removeItem(cl);
    // console.log(localStorage.length);
    li.remove();
  });
}
// ************************submit**********************************************************
submit.addEventListener("click", (e) => {
  const text = inp.value;
  if (text === "") return;
  input.value = "";
  const li = document.createElement("li");
  const r = Math.round(Math.random() * 256);
  const g = Math.round(Math.random() * 256);
  const b = Math.round(Math.random() * 256);
  const x = Math.random();
  li.style.backgroundColor = `rgba(${r}, ${g}, ${b},${x})`;
  li.classList.add("li-class");
  li.innerHTML = innerHtmlLi;
  li.children[0].innerText = text;
  li.children[0].style.color = "#ccc";
  li.children[1].style.color = "#ccc";
  // console.log(li.innerHTML);
  num++;
  li.classList.add(String(num));
  // console.log(li.children[0].classList);
  localStorage.setItem(num + "", text);
  // console.log(li.classList);
  // console.log(localStorage.length);
  console.log(localStorage.getItem(li.classList[1]));

  ul.append(li);
  // console.log(localStorage.getItem(num + ""));

  li.children[1].addEventListener("click", (e) => {
    let cl = li.classList[1];
    // console.log(cl);
    localStorage.removeItem(cl);
    // console.log(localStorage.length);
    li.remove();
  });
});
