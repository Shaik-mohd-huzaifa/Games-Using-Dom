"use strict";
let model = document.querySelectorAll(".modal");
let modelContent = document.querySelectorAll(".Model-content");
let modelContentrem;
let overlay = document.querySelector(".overlay");
let closewindow = document.querySelector(".closewindow");
console.log(model.length);

// Adds the eventlistener to add active
for (let i = 0; i < model.length; i++) {
  model[i].addEventListener("click", function () {
    // console.log(model[i].id);
    modelContent[i].classList.add("active");
    overlay.classList.add("active");
  });
}
