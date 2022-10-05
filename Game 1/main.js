"use strict";

let reducingvalue = 20;
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
