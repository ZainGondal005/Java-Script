"use strict";

// const private=34;
// const interface='jonas';

var driverlicence = false;
if (driverlicence !== true) driverlicence = true;
if (driverlicence) console.log("You can drive");

//functions
function cutfruit(fruit) {
  return fruit * 3;
}
function fruits(apples, watermelon) {
  console.log(apples, watermelon);
  const applesnew = cutfruit(apples);
  const watermelonnew = cutfruit(watermelon);

  const juice = `juice of ${applesnew} apples and ${watermelonnew} watermelon`;
  console.log(juice);

  return juice;
}
const ju = fruits(3, 5);
console.log(ju);

// Coding Challenge #1

/*
Two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

*/

function calcAverage(score1, score2, score3) {
  return (score1 + score2 + score3) / 3;
}
function checkWinner(avgKoal, avgDolhi) {
  if (avgKoal >= avgDolhi * 2) {
    return `Koalas win ${avgKoal} vs ${avgDolhi}`;
  } else if (avgDolhi >= avgKoal * 2) {
    return `Dolphins win  ${avgDolhi} vs ${avgKoal}`;
  }
  return `no team wins
  Dolphins scorces are ${avgDolhi} and Koalas scorces are ${avgKoal} `;
}

const avgDolhins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);

console.log(checkWinner(avgKoalas, avgDolhins));

// Arrays

const friends = ["ali", "zain", "masood"];
console.log(friends);
console.log(friends[friends.length - 1]);
const person = ["zain", "masood", 2024 - 2004, friends];
console.log(person);

// Exercise
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
};
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);

years.push(2004);
years.unshift(2000);
console.log(years);
years.pop(); //last
years.shift(); //first
console.log(years);

console.log(years.indexOf(1967));

console.log(years.includes(2002));
console.log(years.includes(2004));
console.log(years.includes(23));

if (years.includes(2002)) {
  console.log("You have a friend called Steven");
}
