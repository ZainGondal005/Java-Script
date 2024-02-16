"use strict";

const player0EL = document.querySelector(".player--0");
const player1EL = document.querySelector(".player--1");

const score0EL = document.querySelector("#score--0");
const score1EL = document.getElementById("score--1");

const current0EL = document.getElementById("current--0");
const current1EL = document.getElementById("current--1");

const diceEL = document.querySelector(".dice");
var btnNew = document.querySelector(".btn--new");
var btnRoll = document.querySelector(".btn--roll");
var btnHold = document.querySelector(".btn--hold");

let currentscore, activePlayer, scores, playerwon;

const init = function () {
  currentscore = 0;
  activePlayer = 0;
  scores = [0, 0];
  playerwon = true;

  score0EL.textContent = 0;
  score1EL.textContent = 0;
  current0EL.textContent = 0;
  current1EL.textContent = 0;

  diceEL.classList.add("hidden");
  player0EL.classList.remove("player--winner");
  player1EL.classList.remove("player--winner");
  player0EL.classList.add("player--active");
  player1EL.classList.remove("player--active");
};

init();
//rolling dice functionallity

btnRoll = document.addEventListener("click", function () {
  if (playerwon) {
    //1. Random number
    const dice = Math.trunc(Math.random() * 6) + 1;

    //2. Display
    diceEL.classList.remove("hidden");
    diceEL.src = `dice-${dice}.png`;

    //3. check rolled is 1
    if (dice !== 1) {
      currentscore = currentscore + dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentscore;
    } else {
      Switch_Player();
    }
  }
});
const Switch_Player = function () {
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentscore = 0;
  current0EL.textContent = currentscore;
  current1EL.textContent = currentscore;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  player0EL.classList.toggle("player--active");
  player1EL.classList.toggle("player--active");
};

btnHold.addEventListener("click", function () {
  if (playerwon) {
    scores[activePlayer] += currentscore;
    // console.log(scores[0], scorces[1]);
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      playerwon = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--active");

      btnHold.classList.add("hidden");

      document.querySelector(".btn--roll").classList.add("hidden");

      diceEL.classList.add("hidden");
    } else {
      Switch_Player();
    }
  }
});

btnNew.addEventListener("click", function () {
  document.querySelector(`.btn--roll`).classList.remove("hidden");

  btnHold.classList.remove("hidden");

  init();
});
