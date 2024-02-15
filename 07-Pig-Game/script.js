"use strict";

const score0EL = document.querySelector("#score--0");

const score1EL = document.getElementById("score--1");

const current0EL = document.getElementById("current--0");
const current1EL = document.getElementById("current--1");

const diceEL = document.querySelector(".dice");

var btnNew = document.querySelector(".btn--new");
var btnRoll = document.querySelector(".btn--roll");
var btnHold = document.querySelector(".btn--hold");

score0EL.textContent = 0;
score1EL.textContent = 0;
diceEL.classList.add("hidden");

var currentscore = 0;
//rolling dice functionallity

btnRoll = document.addEventListener("click", function () {
  //1. Random number
  const dice = Math.trunc(Math.random() * 6) + 1;

  //2. Display
  diceEL.classList.remove("hidden");
  diceEL.src = `dice-${dice}.png`;

  //3. check rolled is 1
  if (dice !== 1) {
    currentscore = currentscore + dice;
    current0EL.textContent = currentscore;
  } else {
    currentscore = 0;
    current0EL.textContent = currentscore;
  }
});
