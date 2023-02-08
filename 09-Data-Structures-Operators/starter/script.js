'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekDays1 = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const hours1 = {
  mon: {
    open: 13,
    close: 18,
  },
  tues: {
    open: 14,
    close: 19,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES6 Enhanced Object Literals (Aula 112)
  hours1,
  //function to order a food
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

/*
104. Destructuring Objects
*/

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//Deafult values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating variables
let d = 111;
let e = 999;
const obj = { d: 23, e: 7, f: 14 };
({ d, e } = obj);
console.log(d, e);

//Nested objects
const {
  fri: { open: op, close: clo },
} = openingHours;
console.log(op, clo);

/*
103. Destructuring Arrays
*/

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr; // this is the destructuring arrays
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//switching variables using destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary);

//Receive 2 return values from the order function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//nested arrays (arrays aninhadas/ uma dentro da outra)
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

//Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

/*
105. The Spread Operator (...)
*/

const arr1 = [7, 8, 9];
const badNewArray = [1, 2, arr1[0], arr1[1], arr1[2]];
console.log(badNewArray);

const newArr = [1, 2, ...arr1];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//Copy array
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays or more
const menu1 = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu1);

//Iterables: arrays, string, maps, sets. NOT objects

const str = 'Jonas';
const letters = [...str];
console.log(letters);
console.log(...str);

/*
const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?'),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]); //bad way to call the function

restaurant.orderPasta(...ingredients); //good way to call the function
*/

//Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Giuseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorant Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

/*
106. Rest Pattern and Parameters
*/

//1. Destructuring

const [a1, b1, ...others] = [1, 2, 3, 4, 5];
console.log(a1, b1, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//Objects
const { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays);

//2. Functions

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x1 = [23, 5, 7];
add(...x1);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');

/*
107. Short Circuiting (&& and ||)
*/

// OR Operator
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);
console.log(0 || true);
console.log(undefined || undefined);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

//restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

//AND Operator

console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'Jonas');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrroms', 'spinach');

/*
108. The Nullish Coalescing Operator (??)
*/

restaurant.numGuests = 0;
const guests3 = restaurant.numGuests || 10;
console.log(guests3);

const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);

/* 
109. Logical Assignment Operators
*/

const rest1 = {
  name: 'Capri',
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

//rest1.numGuests = rest1.numGuests || 10;
//rest2.numGuests = rest2.numGuests || 10;

//rest1.numGuests ||= 10;
//rest2.numGuests ||= 10;

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

//rest1.owner = rest1.owner && '<ANONYMOUS>';
//rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);

/* 
111. Looping Arrays: The for-of Loop
*/

const menu2 = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu2) console.log(item);

for (const [i, el] of menu2.entries()) {
  console.log(`${i + 1}: ${el}`);
}

/*
112. Enhanced Object Literals
It was done in the restaurant aobject.
*/

/*
113. Optional Chaining (.?)
*/

//Without Optional Chaining
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

//WITH Optional Chaining
console.log(restaurant.openingHours.mon?.open);

const weekDays2 = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const days2 of weekDays2) {
  console.log(days2);
  const open = restaurant.openingHours[days2]?.open ?? 'closed';
  console.log(`On ${days2}, we open at ${open}`);
}

//Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

//Arrays
const users = [{ name: 'Jonas', email: 'hellojonas@jonas.io' }];
console.log(users[0]?.name ?? 'User array empty');

/*
114. Looping Objects: Object Keys, Values, and Entries
*/

//Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day},`;
}

console.log(openStr);

//Property VALUES
const values = Object.values(openingHours);
console.log(values);

//Property ENTRIES
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

/*
116. Sets
*/

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);

console.log(new Set('Jonas'));

console.log(ordersSet.size);

console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));

ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
//ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

//Example

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('gustavoachcarfilho').size);

/*
117. Maps: Fundamentals
*/
const rest3 = new Map();
rest3.set('name', 'Classico Italiano');
rest3.set(1, 'Firenze, Italy');
rest3.set(2, 'Lisbon, Portugal');
console.log(rest3);

rest3
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed');

console.log(rest3.get('name'));
console.log(rest3.get(true));

const time = 21;
rest3.get(time > rest3.get('open') && time < rest3.get('close'));

console.log(rest3.has('categories'));

rest3.delete(2);
const arr2 = [1, 2];
rest3.set(arr2, 'Test');
rest3.set(document.querySelector('h1'), 'Heading');

//rest3.set([1, 2], 'Test');
console.log(rest3);
//rest3.clear();
console.log(rest3.size);
console.log(rest3.get(arr2));

/* 
118. Maps: Iteration
*/

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct!!!'],
  [false, 'Try again!'],
]);

console.log(question);

//Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

//const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);

if (answer === 3) console.log(question.get(true));
else console.log(question.get(false));

answer === question.get('correct')
  ? console.log(question.get(true))
  : console.log(question.get(false));

console.log(question.get(question.get('correct') === answer));

//Convert Map to Array
console.log(...question);
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);

/*
121. Working With Strings - Part 1
*/

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  //B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat');
  else console.log('You got lucky');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('jonas'));
console.log(typeof new String('jonas'));

/*
122. Working With Strings - Part 2
*/

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//Fix capitalization in name

const passenger = 'jOnAS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//Comparing emails
const email = 'hello@jonas.io';
const loginEMail = '  Hello@Jonas.Io  \n';
const lowerEmail = loginEMail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEMail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

//Replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));

console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane1 = 'Airbus A320neo';
console.log(plane1.includes('A320'));
console.log(plane1.includes('Boeing'));
console.log(plane1.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}

//Practice Exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some foof and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

/*
123. Working With Strings - Part 3
*/

console.log('a+very+nice+string'.split('+'));
console.log('Gustavo Achcar Filho'.split(' '));

const [firstName, secondName, lastName] = 'Gustavo Achcar Filho'.split(' ');

const newName = ['Mr.', firstName, secondName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    //namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};
capitalizeName('jessica ann smith davis');
capitalizeName('gustavo achcar');

//Padding
const message = 'Got to gate 23!';
console.log(message.padStart(25, '+'));
console.log('Jonas'.padStart(25, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + ''; //convert a numer to a string
  const last = str.slice(-4); //take the last 4 number
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(8127649248512659));
console.log(maskCreditCard('872354875634585'));

//Repeat
const message2 = 'Bad weather... All Departues Delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};

planesInLine(5);
planesInLine(3);
planesInLine(12);

/*
125. String Methods Practice
*/

const flights1 =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

//    🔴 Delayed Departure from FAO to TXL (11h25)
//                 Arrival from BRU to FAO (11h45)
//     🔴 Delayed Arrival from HEL to FAO (12h05)
//                Delayed from FAO to LIS (12h30)

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights1.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
  console.log(output);
}
