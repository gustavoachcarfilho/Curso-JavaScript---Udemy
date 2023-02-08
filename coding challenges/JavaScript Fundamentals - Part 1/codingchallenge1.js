const massMark1 = 78;
const heightMark1 = 1.69;
const massJohn1 = 92;
const heightJohn1 = 1.95;

const massMark2 = 95;
const heightMark2 = 1.88;
const massJohn2 = 85;
const heightJohn2 = 1.76;

const imcMark1 = massMark1 / heightMark1 ** 2;
const imcJohn1 = massJohn1 / (heightJohn1 * heightJohn1);

const imcMark2 = massMark2 / (heightMark2 * heightMark2);
const imcJohn2 = massJohn2 / heightJohn2 ** 2;

const markHigherIMC1 = imcMark1 > imcJohn1;
const markHigherIMC2 = imcMark2 > imcJohn2;

console.log("Test Data 1:", "Mark's IMC:", imcMark1, "John's IMC:", imcJohn1);

console.log("Test Data 2:", "Mark's IMC:", imcMark2, "John's IMC:", imcJohn2);

console.log("In the Test Data 1, does Mark have the BMI(IMC em ingles) higher than John?", markHigherIMC1);

console.log("In the Test Data 2, does Mark have the BMI(IMC em ingles) higher than John?", markHigherIMC2);