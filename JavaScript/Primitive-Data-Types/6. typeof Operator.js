// 1.Type Identification
const num = 10;
const str = "Hello";
const bool = true;
console.log("typeof(num) is: " + typeof num);
console.log("typeof(str) is: " + typeof str);
console.log("typeof(bool) is: " + typeof bool);
console.log("\n");

// 2.Comapring Variable Types
const firstVar = 42;
const secondVar = "42";

if (typeof firstVar === typeof secondVar) {
  console.log("Both variables have the same type");
} else {
  console.log("The variables have different types!");
}
console.log("\n");

// 3.Undefined and Null Types
let noValue;
let emptyValue = null;
console.log("noValue = " + noValue);
console.log("emptyValue = " + emptyValue);
console.log("\n");
/*
The output of the above code will be:

noValue = undefined
emptyValue = null

*/

// 4. Debugging Variables
const number = 5;
const text = "Hello";
const isTrue = true;

console.log(
  "The value of number is " + number + " and its type is " + typeof number
);
console.log("The value of text is " + text + " and its type is " + typeof text);
console.log(
  "The value of isTrue is " + isTrue + " and its type is " + typeof isTrue
);
