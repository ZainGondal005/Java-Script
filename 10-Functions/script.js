"use strict";

const bookings = [];
const create_booking = function (
  flightNum = "XYZ05",
  numpassengers = 1,
  price = 199 * numpassengers
) {
  const booking = {
    flightNum,
    numpassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

create_booking("lqr3", undefined, 1000);

const flight = "LH234";
const jonas = {
  name: "Jonas Schmedtmann",
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === 24739479284) {
    // alert('Checked in');
  } else {
    // alert('Wrong passport!');
  }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// Is the same as doing...
// const flightNum = flight;
// const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(jonas);
checkIn(flight, jonas);

// Functions Accepting Callback Functions
const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer("JavaScript is the best!", upperFirstWord);
transformer("JavaScript is the best!", oneWord);

// Functions Returning Functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey");
greeterHey("Jonas");
greeterHey("Steven");

greet("Hello")("Jonas");

const greetnow = (greeting) => (name) => console.log(`${greeting} ${name}`);
greetnow("Hi")("Jonas");

const PIA = {
  airline: "PIA",
  PIAcode: "op",
  bookingPIA: [],
  book(numberPIA, name) {
    console.log(
      `${name} booked seat  on ${this.airline} flight ${this.PIAcode} ${numberPIA}`
    );
    this.bookingPIA.push({ flight: `${this.PIAcode} ${numberPIA}`, name });
  },
};

PIA.book(239, "ZAIN Masood");
PIA.book(635, "ZAIN op");

const eurowings = {
  airline: "Eurowings",
  PIAcode: "EW",
  bookingPIA: [],
};

const book = PIA.book;

// Does NOT work
// book(23, 'Sarah Williams');

// Call method
book.call(eurowings, 23, "Sarah Williams");
console.log(eurowings);

book.call(PIA, 239, "Mary Cooper");
console.log(PIA);

const swiss = {
  airline: "swiss",
  PIAcode: "LW",
  bookingPIA: [],
};
book.call(swiss, 583, "Mary Cooper");

// Apply method
const flightData = [583, "George Cooper"];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

// The bind Method
// book.call(eurowings, 23, 'Sarah Williams');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(PIA);
const bookLX = book.bind(swiss);

bookEW(23, "Steven Williams");

const bookEW23 = book.bind(eurowings, 23);
bookEW23("ZAIN Masood");
bookEW23("Martha Cooper");

// With Event Listeners
PIA.planes = 300;
PIA.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
// PIA.buyPlane();

document
  .querySelector(".buy")
  .addEventListener("click", PIA.buyPlane.bind(PIA));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
