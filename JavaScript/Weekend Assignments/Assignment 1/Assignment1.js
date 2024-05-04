// Basic
// Ex1.1 - Yes or No
console.log("Basic");
console.log("Ex1.1 - Yes or No");
console.log("=================");
console.log();
function yesNo(booleanValue) {
  return booleanValue ? "Yes" : "No";
}

console.log(yesNo(true));

// Simple Math
// Ex2.1 - Ex1.1 - Sum of lowest numbers
console.log("Simple Math");
console.log("Ex2.1 - Sum of lowest numbers");
console.log("===============================");
console.log();

// function sumOfTwoLowestNumbers(arrOfPositiveIntegers) {
//   let lowest = Infinity;
//   let secondLowest = Infinity;
//   for (let i = 0; i < arrOfPositiveIntegers.length; i++) {
//     if (arrOfPositiveIntegers[i] < lowest) {
//       secondLowest = lowest;
//       lowest = arrOfPositiveIntegers[i];
//     } else if (arrOfPositiveIntegers[i] < secondLowest) {
//       secondLowest = arrOfPositiveIntegers[i];
//     }
//   }
//   //   console.log(lowest1, lowest2);
//   return lowest + secondLowest;
// }
function sumOfTwoLowestNumbers(arrOfPositiveIntegers) {
  const sortedArr = arrOfPositiveIntegers.sort((a, b) => a - b);
  return sortedArr[0] + sortedArr[1];
}
console.log(sumOfTwoLowestNumbers([19, 5, 42, 2, 77]));
console.log(sumOfTwoLowestNumbers([10, 343445353, 3453445, 3453545353453]));

// Ex2.2 - One and Zero - Binary
console.log("Ex2.2 - One and Zero - Binary");
console.log("===============================");
console.log();

function binaryToNumber(binaryArray) {
  let num = 0;
  const length = binaryArray.length;
  for (let i = 0; i < length; i++) {
    num += binaryArray[i] * Math.pow(2, length - i - 1);
  }
  return num;
}
console.log(binaryToNumber([1, 1, 0, 1]));

// Ex2.3 - Find the Next Perfect Square
console.log("Ex2.3 - Find the Next Perfect Square");
console.log("=====================================");
console.log();

function findNextSquare(num) {
  let sqrt = Math.sqrt(num);
  perfectSqrt = Math.floor(sqrt);
  if (sqrt !== perfectSqrt) {
    return -1;
  }
  sqrt++;
  return sqrt * sqrt;
}
console.log(findNextSquare(121));
console.log(findNextSquare(625));
console.log(findNextSquare(114));

// Ex2.4 - Unique
console.log("Ex2.4 - Unique");
console.log("=====================================");
console.log();

function findUniq(numbers) {
  const sortedArr = numbers.sort((a, b) => a - b);
  if (sortedArr[0] !== sortedArr[1]) {
    return sortedArr[0];
  }
  if (sortedArr[sortedArr.length - 1] !== sortedArr[sortedArr.length - 2]) {
    return sortedArr[sortedArr.length - 1];
  }
}
console.log(findUniq([1, 1, 1, 2, 1, 1]));
console.log(findUniq([0, 0, 0.55, 0, 0]));

// Ex2.5 - Summation
console.log("Ex2.5 - Summation");
console.log("====================");
console.log();

function summation(value) {
  let sum = 0;
  for (let i = 1; i <= value; i++) {
    sum += i;
  }
  return sum;
}
console.log(summation(2));
console.log(summation(8));

// Ex2.6 - Years and Centuries
console.log("Ex2.6 - Years and Centuries");
console.log("================================");
console.log();

function centuryFromYear(years) {
  let century = Math.floor((years - 1) / 100) + 1;
  return century;
}
console.log(centuryFromYear(1705));
console.log(centuryFromYear(1900));
console.log(centuryFromYear(1601));
console.log(centuryFromYear(2000));

// Ex2.7 - Basic Math
console.log("Ex2.7 - Basic Math");
console.log("======================");
console.log();

function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
    default:
      return undefined;
  }
}
console.log(basicOp("+", 4, 7));
console.log(basicOp("-", 15, 18));
console.log(basicOp("*", 5, 5));
console.log(basicOp("/", 49, 7));

//Math In Story
// Ex3.1 - Growth Of population
console.log("Ex3.1 - Growth Of population");
console.log("============================");
console.log();

function nb_year(p0, percent, aug, p) {
  let years = 0;
  while (p0 < p) {
    p0 = p0 + (p0 * percent) / 100 + aug;
    years++;
  }
  return years;
}
console.log(nb_year(1500, 5, 100, 5000));
console.log(nb_year(1500000, 2.5, 10000, 2000000));
console.log(nb_year(1000, 2, 50, 1200));

// Ex3.2 - People on the Bus
console.log("Ex3.2 - People on the Bus");
console.log("===========================");
console.log();

const inOut = [
  [50, 0],
  [3, 5],
  [4, 15],
  [0, 30],
]; // = 7
const inOut2 = [];
const inOut3 = [
  [50, 1],
  [3, 5],
  [4, 15],
  [0, 30],
];
function peopleInBus(inOutArray) {
  let passengers = 0;
  if (inOutArray.length === 0) {
    console.log("inOutArray is empty!");
    return undefined;
  } else if (inOutArray[0][1] !== 0) {
    console.log(
      "At the first stop the bus is empty so passengers cannot get off the bus!"
    );
    return undefined;
  }
  for (let i = 0; i < inOutArray.length; i++) {
    passengers = passengers + inOutArray[i][0] - inOutArray[i][1];
  }
  if (passengers < 0) {
    passengers = undefined;
    console.log("inOutArray is invalid!");
  }
  return passengers;
}

console.log(peopleInBus(inOut));
console.log(peopleInBus(inOut2));
console.log(peopleInBus(inOut3));

// Advanced Math
// Ex4.1 - Fibonacci -
console.log("Ex4.1 - Fibonacci -");
console.log("======================");
console.log();

function fibonacci(n) {
  if (n < 0) {
    return undefined;
  } else if (n === 0) {
    return 0;
  }
  let a = 0;
  let b = 1;
  let sumAB = a + b;
  console.log(0);
  console.log(1);

  for (let i = 1; i < n; i++) {
    a = b;
    b = sumAB;
    sumAB = a + b;
    console.log(sumAB);
  }
  console.log("==========================");
  return sumAB;
}

console.log(fibonacci(5));

// Ex4.2 - Tribonacci -
console.log("Ex4.2 - Tribonacci -");
console.log("======================");
console.log();

function tribonacci(signature, n) {
  let tri = signature;
  if (n < 0) {
    console.log("n cannot be negative number");
    return undefined;
  } else if (n === 0) {
    return [];
  } else if (n < 3) {
    return signature.slice(0, n);
  }
  for (let i = 3; i < n; i++) {
    tri.push(tri[i - 1] + tri[i - 2] + tri[i - 3]);
  }
  return tri;
}
let n = 4;
console.log(tribonacci([1, 1, 1], n));
console.log(tribonacci([0, 0, 1], n));

// Basic Iteration Logic
// Ex5.1 - trimming string
console.log("Ex5.1 - trimming string");
console.log("======================");
console.log();

function trim(str) {
  if (str.length < 2) {
    return undefined;
  }
  let newString = str.slice(1).slice(0, str.length - 2);
  return newString;
}

console.log(trim("computer"));

// Ex5.2 - String Repeat
console.log("Ex5.2 - String Repeat");
console.log("======================");
console.log();

function repeatStr(n, s) {
  let repeats = "";
  for (let i = 0; i < n; i++) {
    repeats += s;
  }
  return repeats;
}
console.log(repeatStr(5, " computer "));

// Ex5.3 - To Camel Case
console.log("Ex5.3 - To Camel Case");
console.log("======================");
console.log();

function toCamelCase(str) {
  let words = [];
  let word = "";
  for (let i = 0; i < str.length; i++) {
    let temp = "";
    if (str[i] === "-" || str[i] === "_") {
      if (words.length === 0 && str[0].toLowerCase() === str[0]) {
        temp = word.toLowerCase();
      } else {
        temp = word[0].toUpperCase() + word.slice(1).toLowerCase();
      }
      words.push(temp);
      word = "";
      temp = "";
    } else if (i === str.length - 1) {
      word += str[i];
      if (words.length === 0 && str[0].toLowerCase() === str[0]) {
        temp = word.toLowerCase();
      } else {
        temp = word[0].toUpperCase() + word.slice(1).toLowerCase();
      }
      words.push(temp);
      word = "";
      temp = "";
    } else {
      word += str[i];
    }
  }
  return words.join("");
}

console.log(toCamelCase("The-stealTh_waRrior"));

// Ex5.4 - To Weird Case
console.log("Ex5.4 - To Weird Case");
console.log("======================");
console.log();

function toWeirdCase(str) {
  let words = str.split(" ");
  let weiredWords = [];
  let word = "";
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (j % 2 === 0) {
        word += words[i][j].toUpperCase();
      } else {
        word += words[i][j].toLowerCase();
      }
    }
    weiredWords.push(word);
    word = "";
  }
  return weiredWords.join(" ");
}

console.log(toWeirdCase("String"));
console.log(toWeirdCase("Weird string case"));

// Ex5.5 - Abbreviate two words
console.log("Ex5.5 - Abbreviate two words");
console.log("===========================");
console.log();

function abbrevName(name) {
  let abbrev = name.split(" ");
  let initials = abbrev[0][0].toUpperCase() + "." + abbrev[1][0].toUpperCase();
  return initials;
}
console.log(abbrevName("Sam harris"));
console.log(abbrevName("Patrick Feeney"));

// Ex5.6 - Mask
console.log("Ex5.6 - Mask");
console.log("===========================");
console.log();

function maskify(str) {
  let mask = "";
  for (let i = 0; i < str.length - 4; i++) {
    mask += "#";
  }
  return mask + str.slice(-4);
}
console.log(maskify("4556364607935616"));
console.log(maskify("1"));
console.log(maskify(" "));

// Ex5.7 - shortest words
console.log("Ex5.7 - shortest words");
console.log("===========================");
console.log();

// function findShort(str) {
//   let words = str.split(" ");
//   let shortestWordsArray = [];
//   let shortestLength = words[0].length;
//   for (let i = 1; i < words.length; i++) {
//     if (words[i].length < shortestLength) {
//       shortestLength = words[i].length;
//     }

//   }
// }

function splitAndSort(str) {
  let words = str.split(" ");
  let wordsAndLengths = [];
  for (let i = 0; i < words.length; i++) {
    wordsAndLengths.push([words[i].length, words[i]]);
  }
  wordsAndLengths.sort(sortFunction);

  function sortFunction(a, b) {
    if (a[0] === b[0]) {
      return 0;
    } else {
      return a[0] < b[0] ? -1 : 1;
    }
  }
  console.log(wordsAndLengths);
  return wordsAndLengths;
}

function getShortestWords(str) {
  let wordsAndLengths = splitAndSort(str);
  return wordsAndLengths[0][0];
}

console.log(
  "Shortest word(s) lenght is: " +
    getShortestWords("bitcoin take over the world maybe who knows perhaps")
);

// Ex5.8 - longest words version 2
console.log("Ex5.8 - longest words version 2");
console.log("===========================");
console.log();
function getLongestWords(str) {
  let wordsAndLengths = splitAndSort(str);
  return wordsAndLengths[wordsAndLengths.length - 1][0];
}

console.log(
  "Longest word(s) lenght is: " +
    getLongestWords("bitcoin take over the world maybe who knows perhaps")
);

//=======================================================================

//Advanced Iteration Logic
// Ex6.1 - Mumbling
console.log("Ex6.1 - Mumbling");
console.log("===========================");
console.log();

function accum(str) {
  let splitArr = str.toUpperCase().split("");
  for (let i = 1; i < splitArr.length; i++) {
    for (let j = 1; j < i + 1; j++) {
      splitArr[i] += splitArr[i][0].toLowerCase();
    }
  }
  return splitArr.join("-");
}
console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));

// Ex6.2 - Counting Duplicates
console.log("Ex6.2 - Counting Duplicates");
console.log("===========================");
console.log();

function duplicateCount(text) {
  let splitArr = text.toLowerCase().split("");
  let charactersCounts = {};
  let message = "";
  for (let i = 0; i < splitArr.length; i++) {
    if (charactersCounts[splitArr[i]]) {
      charactersCounts[splitArr[i]]++;
    } else {
      charactersCounts[splitArr[i]] = 1;
    }
  }
  let duplicates = 0;
  let firstTime = true;
  for (let key in charactersCounts) {
    if (charactersCounts[key] > 1) {
      duplicates++;
      if (!firstTime) {
        message += " and ";
      } else {
        firstTime = false;
      }
      let number =
        charactersCounts[key] === 2
          ? "twice"
          : "" + charactersCounts[key] + " times";
      message += `'${key}' occurs ${number}`;
    }
  }
  if (duplicates === 0) {
    message = "no characters repeats more than once";
  }
  message = duplicates + " # " + message;
  return message;
  // console.log(duplicates);
  // console.log(charactersCounts);
}

console.log(duplicateCount("abcd"));
console.log(duplicateCount("aabbcde"));
console.log(duplicateCount("aabbcde"));
console.log(duplicateCount("indivisibility"));
console.log(duplicateCount("Indivisibilities"));
console.log(duplicateCount("aA11"));
console.log(duplicateCount("ABBA"));

// Ex6.3 - organize strings
console.log("Ex6.3 - organize strings");
console.log("===========================");
console.log();

function organize(s1, s2) {
  let str = s1 + s2;
  let distinctLetters = {};
  for (let i = 0; i < str.length; i++) {
    if (distinctLetters[str[i]]) {
      distinctLetters[str[i]]++;
    } else {
      distinctLetters[str[i]] = 1;
    }
  }
  return Object.keys(distinctLetters).sort().join("");
}
console.log(organize("xyaabbbccccdefww", "xxxxyyyyabklmopq"));
console.log(
  organize("abcdefghijklimnopqrstuvwxyz", "abcdefghijklimnopqrstuvwxyz")
);

// Ex6.4 - isogramn

console.log("Ex6.4 - isogramn");
console.log("===========================");
console.log();

function isIsogram(str) {
  let splitArr = str.toLowerCase().split("");
  let charactersCounts = {};
  for (let i = 0; i < splitArr.length; i++) {
    if (charactersCounts[splitArr[i]]) {
      return false;
    } else {
      charactersCounts[splitArr[i]] = 1;
    }
  }
  return true;
}

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));

// Implement Functionality
//Ex7 - Implement The Following JS Methods
console.log("Ex7 - Implement The Following JS Methods");
console.log("=========================================");
console.log();

// Ex7.1 - filter
console.log("Filter Function");
const words = ["swim", "football", "travel", "tennis", "bascketball"];
const result1 = words.filter((word) => word.length > 6);
console.log(result1);

// Ex7.2 - forEach
console.log("ForEach Function");
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach((number) => {
  console.log(number);
});

// Ex7.3 - map
console.log("Map Function");
const numbersMap = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result2 = numbers.map((number) => number * 2);
console.log(result2);

// Ex 8 - Find the Perimeter of a Rectangle

console.log("Ex 8 - Find the Perimeter of a Rectangle");
console.log("========================================");
console.log();

function findPerimeter(length, width) {
  return 2 * (length + width);
}
console.log(findPerimeter(6, 7));
console.log(findPerimeter(20, 10));
console.log(findPerimeter(2, 9));
