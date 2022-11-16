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

nextbutton.addEventListener("click", playerNameDeclaration);
document.querySelector("body").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    playerNameDeclaration();
  } else if (e.key === "Escape") {
    playerDetailsEle.classList.add("hidden");
  }
});

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

// Game working Elements
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const currentScore0El = document.querySelector("#current--0");
const currentScore1El = document.querySelector("#current--1");
const diceEl = document.querySelector(".dice");
const btnHold = document.querySelector(".btn--hold");
const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");
const player0Cn = document.querySelector(".player--0");
const player1Cn = document.querySelector(".player--1");

// First declaring the values outside the function because we cannot used the value initalized inside the function can be access with simple syntax we need to use scope
let currentScore0, activePlayer, playing, scores;
// This function will basically initalize the game elements again and start a new game
const init = function () {
  currentScore0 = 0;
  activePlayer = 0;
  playing = true;
  scores = [0, 0];
  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;
  player0Cn.classList.add("player--active");
  player1Cn.classList.remove("player--active");
  player0Cn.classList.remove("winner");
  player1Cn.classList.remove("winner");
};

init();

function switchplayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Cn.classList.toggle("player--active");
  player1Cn.classList.toggle("player--active");
  currentScore0 = 0;
}

diceEl.classList.add("hidden");

btnRoll.addEventListener("click", function () {
  if (playing) {
    const randomDice = Math.trunc(Math.random() * 6) + 1;
    diceEl.src = `dice-${randomDice}.png`;
    diceEl.classList.remove("hidden");
    if (randomDice !== 1) {
      currentScore0 += randomDice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore0;
    } else {
      switchplayer();
      // Using Dry principles
    }
  }
});

// Event listener for the Hold
btnHold.addEventListener("click", function () {
  if (playing) {
    // Generates the current score and displayes it on the page
    scores[activePlayer] += currentScore0;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 10) {
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      playing = false;
    } else {
      // switchs the next player
      switchplayer();
    }
  }
});
