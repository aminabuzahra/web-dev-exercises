// Recursion
// Exercise 1: Sum of natural Numbers
console.log("");
console.log("Exercise 1: Sum of natural Numbers");
console.log("==================================");
console.log();

function numbers(n) {
  if (n < 0) {
    return undefined;
  } else if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }
  return n + numbers(n - 1);
}
console.log(numbers(5));

// Exercise 2: Reverse a String
console.log("");
console.log("Exercise 2: Reverse a String");
console.log("==================================");
console.log();

const reverseString = (str) => {
  if (str.length === 0) {
    return "";
  } else if (str.length === 1) {
    return str;
  }

  return str[str.length - 1] + reverseString(str.slice(0, str.length - 1));
};
console.log("h");
console.log("");
console.log(reverseString("hello"));

// Exercise 3: Count Down
console.log("");
console.log("Exercise 3: Count Down");
console.log("==================================");
console.log();

function countDown(n) {
  if (n <= 0) {
    return;
  }
  console.log(n);
  countDown(--n);
}
countDown(5);

// Exercise 4: Print an Array
console.log("");
console.log("Exercise 4: Print an Array");
console.log("==================================");
console.log();

function printArr(arr, index = 0) {
  if (index >= arr.length) {
    return;
  }
  console.log(arr[index]);
  printArr(arr, ++index);
}

printArr(["Sarah", "Sami", "Maria", "Omar"]);
printArr([1, 2, 3, 4, 5]);
