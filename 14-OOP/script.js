"use strict";

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jonas = new Person("jonas", 1991);
console.log(jonas);

const matilda = new Person("Matilda", 2017);
const jack = new Person("Jack", 1975);

console.log(jonas instanceof Person);

//   Person.hey = function () {
//     console.log('Hey there 👋');
//     console.log(this);
//   };
//   Person.hey();

///////////////////////////////////////
// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));
Person.prototype.species = "Homo Sapiens";
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty("firstName"));
console.log(jonas.hasOwnProperty("species"));

// Prototypal Inheritance on Built-In Objects
console.log(jonas.__proto__);
// Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector("h1");
console.dir((x) => x + 1);
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
Car.prototype.break = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
const bmw = new Car("BMWs", 120);
const mercedes = new Car("Mercedes", 95);
bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.break();
mercedes.accelerate();
mercedes.accelerate();
mercedes.accelerate();

class PersonCl {
  constructor(firstName, age) {
    this.fullName = firstName;
    this.age = age;
  }
  calcAge() {
    console.log(2024 - this.age);
  }
  get agee() {
    return 2024 - this.age;
  }
  // Set a property that already exists
  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
  // Static method
  static hey() {
    console.log("Hey there 👋");
    console.log(this);
  }
}
const Person1 = new PersonCl("zain masood", 20);

console.log(Person1);
Person1.calcAge();
console.log(Person1.agee);
const walter = new PersonCl("Walter White", 1965);
const account = {
  owner: "zain",
  movements: [200, 400, -699, 800],

  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};
console.log(account.latest);
account.latest = 50;
console.log(account.movements);
// Object.create
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = "Steven";
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init("Sarah", 1979);
sarah.calcAge();

///////////////////////////////////////
// Coding Challenge #2

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;

    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
  break() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}
const supra = new CarCl("SuprA", 300);

supra.accelerate();
supra.accelerate();
supra.break();
console.log(supra.speedUS);
supra.speedUS = 50;
console.log(supra);

///////////////////////////////////////
// Inheritance

const student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};
student.prototype = Object.create(Person.prototype);
student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};
const mike = new student("Mike", 2020, "Computer Science");
student.prototype.constructor = student;
mike.introduce();
console.log(mike);
console.log(mike.__proto__.__proto__);
mike.calcAge();

///////////////////////////////////////
// Coding Challenge #3

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};
EV.prototype = Object.create(Car.prototype);
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going on ${this.speed}km/h with charge of ${this.charge}`
  );
};
const tesla = new EV("tesla", 200, 90);
tesla.chargeBattery(90);
tesla.break();
console.log(tesla);
tesla.accelerate();
// Now with ES6 Classes

class StudentCl extends PersonCl {
  constructor(fullname, birthYear, course) {
    super(fullname, birthYear);
    this.course = course;
  }
  introduce = function () {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  };
}
const ahmad = new StudentCl("AHMAD MASOOD", 2004, "Computer Science");
// console.log(ahmad);
ahmad.introduce();
class Account {
  // public field
  locale = navigator.language;
  // private field
  #movements = [];
  #pin; //if arguments are passed in constructor so we just define it
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    //  protected property
    this.#pin = pin;
    // now pin is protected
    // this.movements = [];
    // this.locale = navigator.language;
  }
  // public method
  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  withdrwal(val) {
    this.deposit(-val);
    return this;
  }
  getmovements() {
    return this.#movements;
  }

  requestloan(val) {
    if (this._approveloan(val)) this.deposit(val);
    console.log(`Loan of ${val} is approved `);

    return this;
  }
  // private methods(private cannot run brower so it make this function as private field)
  // #approveloan(Val) {

  _approveloan(Val) {
    return true;
  }
  // static function
  static helper() {
    console.log("Helper");
  }
}
const acc1 = new Account("zain", "EUR", 5555);
acc1.deposit(250);
acc1.deposit(500);
acc1.withdrwal(-100);
acc1.requestloan(400);
console.log(acc1);
Account.helper();

// chaining
acc1.deposit(100).deposit(400).withdrwal(150).requestloan(300);
///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
class EVCL extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going on ${this.speed}km/h with charge of ${
        this.#charge
      }`
    );
    return this;
  }
}
const riven = new EVCL("riven", 200, 60);
console.log(riven);
riven
  .accelerate()
  .accelerate()
  .accelerate()
  .break()
  .chargeBattery(50)
  .accelerate();
console.log(riven.speedUS);
