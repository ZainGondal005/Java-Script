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

//conversion

const inputyear = "2000";
console.log(inputyear, Number(inputyear));
console.log(Number(inputyear) + 4);

console.log(String(1005), 1005);

//type coercen
//moves form left to right
console.log("I am " + name + " age is : " + (now_year - Birthdate)); // + is coercen means convert one or two data types
console.log("23" - "10" - 3); // - convert to numbers now//10
console.log("23" + "10" - 3); //2307
console.log("23" - "10" + 3); //16
// - comes string converts to number
console.log("23" * "10" - 3);
console.log("293" / "10" - 3);

var n = "1" + 1;
n--;
console.log(n);

console.log("10" - "4" - "3" - 2 + "5"); //15

const person_valid = true;
const Idvalid = false;
console.log(person_valid && Idvalid);
console.log(person_valid || Idvalid);

const dolscorce = (96 + 108 + 89) / 3;
const koalas = (88 + 91 + 110) / 3;

if (dolscorce > koalas) {
  console.log("dolscorce is more");
} else if (dolscorce === koalas) {
  console.log("dolscorce and koalas are equals");
} else {
  console.log("koalas is more");
}

const day = Number(prompt("Enter a day number"));
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thusday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saurday");
    break;
  case 7:
    console.log("Sunday");
    break;

  default:
    
    console.log("Invalid number");
    
    break;
}
