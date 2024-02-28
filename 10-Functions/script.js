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


const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24739479284) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
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
