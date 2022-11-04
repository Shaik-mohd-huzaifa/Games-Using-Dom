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

// Adds the eventlistener to the ModelContent container to remove the active
for (let i = 0; i < closewindow.length; i++) {
  closewindow[i].addEventListener("click", function () {
    modelContent[i].classList.remove("active");
    overlay.classList.remove("active");
  });
  // Eventlistner to add the remove active class in overlays
  overlay.addEventListener("click", function (e) {
    modelContent[i].classList.remove("active");
    overlay.classList.remove("active");
  });
  // Keyboard Events
  document.addEventListener("keyup", function (e) {
    if (e.key === "Escape" && modelContent[i].classList.contains("active")) {
      modelContent[i].classList.remove("active");
      overlay.classList.remove("active");
    }
  });
}
