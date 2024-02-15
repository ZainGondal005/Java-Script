"use strict";
/*
console.log(document.querySelector(".message").textContent);

document.querySelector(".message").textContent = "Correct Number";

console.log(document.querySelector(".message").textContent);

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/
var secret_number = Math.trunc(Math.random() * 20) + 1;
// document.querySelector(".number").textContent = secret_number;

var score_points = 20;
var highscore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
//action second argument reactionor performed
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  // When there is no input
  if (!guess) {
    // document.querySelector(".message").textContent = "No Number! ";
    displayMessage("⛔️ No number!");
  }
  // When player wins
  else if (guess === secret_number) {
    // document.querySelector(".message").textContent = "Correct Number! ";
    displayMessage("🎉 Correct Number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score_points > highscore) {
      highscore = score_points;
      document.querySelector(".highscore").textContent = highscore;
    }
  } // When guess is wrong
  else if (guess !== secret_number) {
    if (score_points > 1) {
      // document.querySelector('.message').textContent =
      // guess > secret_number ? '📈 Too high!' : '📉 Too low!';
      score_points--;
      document.querySelector(".score").textContent = score_points;
      displayMessage(guess > secret_number ? "📈 Too high!" : "📉 Too low!");
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage("💥 You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
  // When guess is too high
  //   else if (guess > secret_number) {
  //     if (score_points > 1) {
  //       document.querySelector(".message").textContent = "Too High! ";
  //       score_points--;
  //       document.querySelector(".score").textContent = score_points;
  //     } else {
  //       document.querySelector(".message").textContent = "You Lost the Game! ";
  //       document.querySelector(".score").textContent = 0;
  //     }
  //   }
  //   // When guess is too low
  //   else if (guess < secret_number) {
  //     if (score_points > 1) {
  //       document.querySelector(".message").textContent = "Too Low! ";
  //       score_points--;
  //       document.querySelector(".score").textContent = score_points;
  //     } else {
  //       document.querySelector(".message").textContent = "You Lost the Game! ";
  //       document.querySelector(".score").textContent = 0;
  //     }
  //   }
});

document.querySelector(".again").addEventListener("click", function () {
  score_points = 20;
  secret_number = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".message").textContent = "Start guessing...";
  // displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score_points;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
