// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const x = '23';

if (x === 23) console.log(23);

const calcAge = birthYear => 2037 - birthYear;
console.log(calcAge(1991));

/*
PROBLEM 1:
We work for a company buildind a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."
*/

const temperatures = [3, -2, -6, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: diference between highest and lowest temp
// - How to compute the max and min temp?
// - What a sensor error? And what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - find max value in temp array
// - find min value in temp array
// - subtract min from max (amplitude) and return it

const calcTempAmplitude = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') continue;

    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude([3, 5, 1], [9, 0, 5]);
console.log(amplitude);

/*
PROBLEM 2:
Function should now receive 2 arrays of temps

1) Understanding the problem
- with 2 arrays, should we implement functionality twice? NO! Just merge two arrays

2) Breaking up into sub-problems
- Merge 2 arrays
*/

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: Number(prompt('Degrees celsius:')), //prompt sempre retorna uma string
  };

  console.table(measurement);

  //console.log(measurement.value);
  //console.warn(measurement.value);
  //console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());
