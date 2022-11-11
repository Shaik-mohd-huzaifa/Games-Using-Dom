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

function afterfirstplayersName() {
  player2Name = playerNameInput.value;
  console.log();
  //   playerDetailsEle.classList.add("hidden");
}
