// 1. Adding two numbers
const num1 = 8;
const num2 = 15;
const sum = num1 + num2;
console.log(`The sum of ${num1} and ${num2} is ${sum}.`);

// 2. Subtracting Numbers
const a = 30;
const b = 12;
const difference = a - b;
console.log(`The difference between ${a} and ${b} is ${difference}.`);

// 3. Multiplying Numbers
const x = 7;
const y = 3;
const multiplication = x * y;
console.log(`The multiplication of ${x} and ${y} is ${multiplication}.`);

// 4. Dividing and Finding the Remainder
const dividend = 20;
const divisor = 4;
const quotient = dividend / divisor;
const remainder = dividend % divisor;
console.log(
  `The quotient of ${dividend} divided by ${divisor} is ${quotient}.`
);
console.log(
  `The remainder of ${dividend} divided by ${divisor} is ${remainder}.`
);

// 5. Average of Three Numbers
const number1 = 15;
const number2 = 25;
const number3 = 10;

const average = (number1 + number2 + number3) / 3;
console.log(
  `The average of ${number1}, ${number2} and ${number3} is ${average}.`
);

// 6. Modulo Operator Basics

/*
The modulo operator (%) returns the remainder of the division of two numbers.
For example, 26 % 5 returns 1 because 26 divided by 5 is 5 with a remainder of 1.
*/

const num = 26;
const divisor2 = 5;
const remainder2 = num % divisor2;
console.log(`The remainder of ${num} divided by ${divisor2} is ${remainder2}.`);

// 7. Even or Odd Detector
const number = 14;
if (number % 2 === 0) {
  console.log(`${number} is an even number.`);
} else {
  console.log(`${number} is an odd number.`);
}

// 8. Divisablitiy Check
const num3 = 21;
const divisor3 = 7;
const divisor4 = 5;

if (num3 % divisor3 === 0) {
  console.log(`${num3} is divisible by ${divisor3}.`);
} else {
  console.log(`${num3} is not divisible by ${divisor3}.`);
}
if (num3 % divisor4 === 0) {
  console.log(`${num3} is divisible by ${divisor4}.`);
} else { 
  console.log(`${num3} is not divisible by ${divisor4}.`);
}

// 9. Counting by Steps
const start = 1;
const end = 20;
const step = 4;
for (let i = start; i <= end; i += 1) {
  if (i % step === 0) console.log(i);
}

// 10. Logical AND Operator
const number6 = 15;
if (number6 > 10 && number6 < 20) {
  console.log(`${number6} is between 10 and 20.`);
} else {
  console.log(`${number6} is not between 10 and 20.`);
}

// 11. Logical OR Operator
const number7 = 15;
if (number7 < -5 || number7 > 10) {
  console.log(`${number7} is less than -5 or greater than 10.`);
} else {
  console.log(`${number7} is between -5 and 10.`);
}

// 12. Logical NOT Operator
const booleanValue = true;
console.log(`The opposite of ${booleanValue} is ${!booleanValue}.`);

// 13. Combining Logical Operators
const number8 = 15;
if ((number8 > 5 && number8 < 10) || (number8 > 20 && number8 < 30)) {
  console.log(`${number8} satisfies the condition.`);
} else {
  console.log(`${number8} does not satisfy the condition.`);
}
