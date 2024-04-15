// 1. Convert Number to String
const number = 123;
const numberAsString = number.toString();
// const numberAsString = String(number);
console.log("1.", numberAsString);

// 2. Convert String to Number
const numString = "456";
const num = parseInt(numString);
// const num = Number(numString);

console.log("2.", num);

// 3. Convert String to Float
const floatNum = parseFloat("78.9");
console.log("3.", floatNum);

// 4. Combining a Number and a String
const numAndString = 5 + "3";
console.log("4.", numAndString);
/* The result is 53 */

// 5. Number to Boolean Conversion
console.log("5.");
console.log(Boolean(0));
console.log(Boolean(1));

// 6. String to Number with a Unary Operator
const stringToNumber = +"24";
console.log("6.", stringToNumber);

// 7. True or False to Number
console.log("7.");
console.log(Number(true));
console.log(Number(false));

// 8. Convert null to Number
console.log("8.", Number(null));
