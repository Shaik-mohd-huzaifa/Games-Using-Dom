"use strict";

let reducingvalue = 20;

// Function to find out the right Secret Number
document.querySelector(".check").addEventListener("click", function () {
  const userGuessedValue = Number(document.querySelector("#numberinput").value);
  console.log(userGuessedValue);
  if (reducingvalue > 1) {
    if (!userGuessedValue) {
      document.querySelector(".guesscompliment").textContent =
        "🚫 No Number Entered";
    } else if (userGuessedValue === SecretNum) {
      document.querySelector(".guesscompliment").textContent =
        "🥳 Hurray Correct Guess";
      document.querySelector("#rightAnswerDisplayBox").textContent =
        userGuessedValue;
      document.querySelector("body").style.backgroundColor = "#5db761";
      document.querySelector("input").style.backgroundColor = "#5db761";
      document.querySelector("#highestscore").textContent = reducingvalue;
      //   document.querySelector(".check").disabled = "true";
    } else if (userGuessedValue > SecretNum) {
      document.querySelector(".guesscompliment").textContent = `📈Too High`;
      reducingvalue--;
      document.querySelector("#gasLeft").textContent = reducingvalue;
    } else if (userGuessedValue < SecretNum) {
      document.querySelector(".guesscompliment").textContent = `📉Too Low`;
      reducingvalue--;
      document.querySelector("#gasLeft").textContent = reducingvalue;
    } else {
      document.querySelector(".guesscompliment").textContent =
        "Start Guessing .....";
    }
  } else {
    document.querySelector(
      ".guesscompliment"
    ).textContent = `💥 You lost it! Play Again`;
  }
});

// Function to Clear the Previous input and number and generate a new number
document.querySelector("#againBtn").addEventListener("click", function () {
  document.querySelector("input").value = "";
  document.querySelector("#rightAnswerDisplayBox").textContent = "";
  document.querySelector("#gasLeft").textContent = 20;
  document.querySelector(".guesscompliment").textContent =
    "Start Guessing ......";
  document.querySelector("body").style.backgroundColor = "#333333";
  document.querySelector("input").style.backgroundColor = "#333333";
  reducingvalue = 20;
  SecretNum = Math.trunc(Math.random() * 20 + 1);
});
