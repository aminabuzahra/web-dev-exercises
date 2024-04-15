// 1. True or False
const isSunny = true;
const isWeekend = false;
console.log("1. Is it sunny day and is it weekend? " + (isSunny && isWeekend));

// 2. Checking conditions
const age = 20;
const license = true;
console.log(
  "2. Is he over 18 and has a driving license? " + (age >= 18 && license)
);

// 3. Either Or Secenario
const knowsJavaScript = false;
const knowsPython = true;
console.log(
  "3. Does he know JavaScript or knows python? " +
    (knowsJavaScript || knowsPython)
);

// 4. Negating a Boolean
const isRaining = true;
console.log("4. Not is raining! " + !isRaining);

// 5. Complex Logical Expression
const likesMusic = true;
const playsGuitar = true;
const hasTime = true;
console.log(
  "5. Does he like music or (doea he play guitar and also has time)? " +
    (likesMusic || (playsGuitar && hasTime))
);

// 6. Age Comparison
const personAge = 50;
console.log("6. Is his age greater than 18 ?" + (personAge > 18));

// 7. Temperature Check
const currentTemperature = 30;
console.log(
  "7. Is the temperature less than 20 or greater than 30? " +
    (currentTemperature < 20 || currentTemperature > 30)
);

// 8. Equality Check
const firstNumber = 10;
const secondNumber = "10";
console.log("Are both the numbers equal ? == " + (firstNumber == secondNumber));
console.log(
  "8. Are both the numbers equal ? === " + (firstNumber === secondNumber)
);

// 9. Budget Limit
const budget = 500;
const expense = 450;
console.log("9. Is the expense less than budget? " + (expense < budget));

// 10. Height Comaprison
const person1Height = 170;
const person2Height = 165;
console.log(
  "10. Is the height of person1 greater than person2? " +
    (person1Height > person2Height)
);
console.log(15 % 4)
