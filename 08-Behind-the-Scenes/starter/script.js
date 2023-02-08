'use strict';

function calcAge(birthYear) {
  //definida no global scope
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}.`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      //Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven'; //In the console show Steven instead Jonas because JavaScript look the variable name in the current scope
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      //Reassigning outer scope's variable
      output = 'NEW OUTPUT';
    }
    //console.log(str); => const and let variables are block scoped

    console.log(millenial); //var variables are function scoped

    //console.log(add(2, 3)); => it doesn't work because functions are block scoped in strict mode

    console.log(output);
  }
  printAge();

  return age;
} //this function creates his own scope and it's equivalent to the variable environment of it's execution context

const firstName = 'Jonas';
calcAge(1991);
