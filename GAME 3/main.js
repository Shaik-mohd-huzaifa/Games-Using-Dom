"use strict";
// Storing the elements into variables

// PopUp container Elements
const closeButton = document.querySelector(".close");
const playerDetailsEle = document.querySelector(".playerDetails");
const playerNameInput = document.querySelector(".playernameinput");
const nextbutton = document.querySelector(".next-ok");
let okbutton;
const previousbutton = document.querySelector(".previous");
let player1Name;
let player2Name;
// const errormessage = document.querySelector(".error");
const playerHeader = document.querySelector(".playerNumber");

// Game elements

const player1NameDisplay = document.getElementById("name--0");
const player2NameDisplay = document.getElementById("name--1");

// function afterfirstplayersName() {
//   player2Name = playerNameInput.value;
//   console.log();
//   //   playerDetailsEle.classList.add("hidden");
// }

function playerNameFinal(p1, p2) {
  player1NameDisplay.textContent = p1;
  player2NameDisplay.textContent = p2;
}

const playerNameDeclaration = function () {
  console.log(nextbutton.className);
  if (nextbutton.className === "next-ok next") {
    player1Name = playerNameInput.value;
    playerNameInput.value = "";
    playerHeader.textContent = "2";
    nextbutton.classList.remove("next");
    nextbutton.classList.add("ok");
    nextbutton.textContent = "OK";
  } else if ((nextbutton.className = "next-ok ok")) {
    player2Name = playerNameInput.value;
    playerDetailsEle.classList.add("hidden");
    playerNameFinal(player1Name, player2Name);
  }
};

previousbutton.addEventListener("click", function () {
  nextbutton.classList.remove("ok");
  nextbutton.classList.add("next");
  playerHeader.textContent = "1";
  playerNameInput.value = player1Name;
});

closeButton.addEventListener("click", function () {
  playerDetailsEle.classList.add("hidden");
  playerNameFinal(player1Name, player2Name);
});
