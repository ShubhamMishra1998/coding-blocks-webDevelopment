"use strict";

const submit = document.querySelector("#submit");
const inp = document.querySelector("#input");
const ul = document.querySelector("#ulist");
const innerHtmlLi = `<p class="p-class">fefwefwefe</p>
          <i class="fas fa-trash-alt fa-2x"></i>`;
submit.addEventListener("click", (e) => {
  const text = inp.value;
  if (text === "") return;
  input.value = "";
  const li = document.createElement("li");
  const r = Math.round(Math.random() * 133);
  const g = Math.round(Math.random() * 100);
  const b = Math.round(Math.random() * 78);
  const x = Math.random();
  li.style.backgroundColor = `rgba(${r}, ${g}, ${b},${x})`;
  // li.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  li.classList.add("li-class");
  // console.log(li.classList);
  li.innerHTML = innerHtmlLi;
  li.children[0].innerText = text;
  li.children[0].style.color = "#ccc";
  ul.append(li);
  li.children[1].addEventListener("click", (e) => {
    li.remove();
  });
});
