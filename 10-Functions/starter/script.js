"use strict";

/*
128. Default Parameters
*/

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //ES5
  //numPassengers = numPassengers || 1; //short circuiting with OR (take the first truthy value)
  //price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 2, 800);
createBooking("LH123", 5);
createBooking("LH123", undefined, 1000); //the default value for numPassengers still working and the undefined does not appear

/*
129. How Passing Arguments Works: Value vs. Reference
*/

const flight = "LH234";
const gustavo = {
  name: "Gustavo Achcar Filho",
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr." + passenger.name;

  if (passenger.passport === 24739479284) {
    alert("Check in");
  } else {
    alert("Wrong passport!");
  }
};

//checkIn(flight, gustavo);
//console.log(flight);
//console.log(gustavo);

/*
131. Functions Accepting Callback Functions
*/

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

//Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer("JavaScript is the best!", upperFirstWord);
transformer("JavaScript is the best!", oneWord);

const high5 = function () {
  console.log("👋");
};

document.body.addEventListener("click", high5);

/*
132. Functions Returning Functions
*/

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey");
greeterHey("Gustavo");
greeterHey("Diego");

greet("Hello")("Aloisio");

//Challenge

const greetArrow = (greetingArrow) => (nameArrow) =>
  console.log(`${greetingArrow} ${nameArrow}`);

const greeterHi = greetArrow("Hi");
greeterHi("Gustavo");

greetArrow("Hi")("Leticia");

/*
133. The call and apply Methods
*/

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name }); //adiciona um objeto dentro de bookings
  },
};

lufthansa.book(239, "Gustavo Achcar Filho");
lufthansa.book(635, "Leticia Dias Vendramini");
console.log(lufthansa);

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book; //fazendo cópia de métodos

// book(23, "Sarah Williams"); -> não funciona, pois fazendo a cópia do método agora o this keyword aponta para undefined

//Call method
book.call(eurowings, 23, "Sarah Williams");
book.call(lufthansa, 666, "Giovana Pereira de Oliveira Silva");

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
};

book.call(swiss, 583, "Doralice Terezinha Oliveira Silva");
console.log(swiss);

//Apply method
const flightData = [798, "Maria Lúcia de Oliveira Achcar"];
book.apply(swiss, flightData);
book.call(swiss, ...flightData);
book.apply(swiss, [219, "Mauro de Oliveira Achcar"]);
console.log(swiss);

/*
134. The bind Method
*/

//Bind method

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(764, "Miguel Rodrigues Fiales");

const bookEW23 = book.bind(eurowings, 23);
bookEW23("Giovana Pereira");

//With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

//Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);

//Challenge
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
