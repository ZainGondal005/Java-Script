let js = "zainMasood";
if (js == "zainMasood") {
  // alert("javascript is fun");
  console.log(js);
}

let seetype = "zain"; //any data type change into other data type

console.log(typeof seetype);
seetype = true;
console.log(typeof seetype);

let year; //value not assigned are called undefined
year = 1992;
console.log(typeof year);

year = null; // null is considered as object
console.log(typeof year);

// const variable and var

const num1 = 2934;
const num2 = num1 - 1439;
const num3 = num1 + 4332;

console.log(num2, num3);

console.log(num2 * 2, num3 / 2);

console.log(num2 > num2);

let x, y;
x = y = 25 - 100 - 5;

console.log(x, y);

const massMark = 78;
const opMark = 1.68;
const massjon = 92;
const op = 1.95;

const BMIMark = massMark / op ** 2;
const BMIjon = massjon / (op * opMark);
const opp = BMIMark > BMIjon;
console.log(BMIMark, BMIjon, opp);

const Birthdate = 2004;
const now_year = 2024;
const name = "zain";

const person = "I am " + name + " age is : " + (now_year - Birthdate);

console.log(person);

const newperson = `I'm ${name}, a ${now_year - Birthdate}`;

console.log(newperson);

console.log(`templates 
multiple
lines`);

const driverage = 15;
const isold = driverage >= 18;
if (isold) {
  console.log("You can drive");
} else {
  console.log(
    "you are under arrest because left years are : " + (18 - driverage)
  );
}
