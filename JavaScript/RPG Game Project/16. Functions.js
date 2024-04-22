// Impure Functions:
console.log("Impure Functions:");
console.log("=================");

// 1. Initialize Character Stats
console.log("1. Initialize Character Stats:");
var chracterStats;
function initializeCharacterStats() {
  chracterStats = [];
}

initializeCharacterStats();
console.log(chracterStats);

// 2. Add Character Stats
console.log("\n2. Add Character Stats:");
function addCharacterStat(characterName, strength) {
  chracterStats.push([characterName, strength]);
}

addCharacterStat("Amin", 100);
console.log(chracterStats);

// 3. Find Character Strength
console.log("\n3. Find Character Strength:");
console.log("I think this function is a pure function.");
function findCharacterStrength(characterName) {
  let characterStrength;
  for (let i = 0; i < chracterStats.length; i++) {
    if (chracterStats[i][0].toLowerCase() === characterName.toLowerCase()) {
      characterStrength = chracterStats[i][1];
      break;
    }
  }
  return characterStrength ? characterStrength : "Character was not found";
}

console.log(findCharacterStrength("Amin"));

// 4. Update Character Strength
console.log("\n4. Update Character Strength:");
function updateCharacterStrength(characterName, newStrength) {
  let characterFound = false;
  for (let i = 0; i < chracterStats.length; i++) {
    if (chracterStats[i][0].toLowerCase() === characterName.toLowerCase()) {
      chracterStats[i][1] = newStrength;
      characterFound = true;
      break;
    }
  }
  if (!characterFound) {
    console.log("Character was not found");
  }
}

updateCharacterStrength("Amin", 200);
console.log(chracterStats);

// 5. Remove Character Stat
console.log("\n5. Remove Character Stat:");
function removeCharacterStat(characterName) {
  for (let i = 0; i < chracterStats.length; i++) {
    if (chracterStats[i][0].toLowerCase() === characterName.toLowerCase()) {
      chracterStats.splice(i, 1);
      break;
    }
  }
}

removeCharacterStat("Amin");
console.log(chracterStats);

// 6. List All Characters and Strengths
console.log("\n6. List All Characters and Strengths:");
console.log("I think this function is a pure function.");

addCharacterStat("Amin", 100);
addCharacterStat("Smith", 600);
addCharacterStat("Ali", 200);
addCharacterStat("Doe", 500);
addCharacterStat("Jack", 700);
addCharacterStat("John", 400);
addCharacterStat("Sara", 300);

function listAllCharacters() {
  for (let i = 0; i < chracterStats.length; i++) {
    console.log(`${chracterStats[i][0]} - ${chracterStats[i][1]}`);
  }
}

listAllCharacters();

// 7. Find Strongest Character
console.log("\n7. Find Strongest Character:");
console.log("I think this function is a pure function.");
function findStrongestCharacter() {
  if (!chracterStats) {
    return "No characters found";
  }
  let strongestCharacter = chracterStats[0];
  for (let i = 1; i < chracterStats.length; i++) {
    if (chracterStats[i][1] > strongestCharacter[1]) {
      strongestCharacter = chracterStats[i];
    }
  }
  return strongestCharacter;
}

console.log(findStrongestCharacter());

// Pure Functions
console.log("\nPure Functions:");
console.log("=================");

// 1. Determine the Average Rating of Games
// Input: [8.5, 7.9, 6.3, 9.2, 8.1]
console.log("1. Determine the Average Rating of Games:");
const gameRatings = [8.5, 7.9, 6.3, 9.2, 8.1];
function calculateAverageRating(ratings) {
  let total = 0;
  for (let i = 0; i < ratings.length; i++) {
    total += ratings[i];
  }
  return total / ratings.length;
}
console.log(calculateAverageRating(gameRatings));

// 2. Extract Developer Names from Game Titles
// Input Example: ['The Legend of Zelda: Breath of the Wild (2017) - Developed by Nintendo', 'Final Fantasy VII (1997) - Developed by Square Enix', 'Halo: Combat Evolved (2001) - Developed by Bungie']
console.log("\n2. Extract Developer Names from Game Titles:");
const gameTitles = [
  "The Legend of Zelda: Breath of the Wild (2017) - Developed by Nintendo",
  "Final Fantasy VII (1997) - Developed by Square Enix",
  "Halo: Combat Evolved (2001) - Developed by Bungie",
];

function extractDeveloperNames(titles) {
  const devlopedByString = "Developed by ";
  const developers = [];
  for (let i = 0; i < titles.length; i++) {
    const title = titles[i];
    developers.push(title.split(devlopedByString)[1]);
    // const startIndex =
    //   title.indexOf(devlopedByString) + devlopedByString.length;
    // const endIndex = title.length;
    // const developer = title.slice(startIndex, endIndex);
    // developers.push(developer);
  }
  return developers;
}
console.log(extractDeveloperNames(gameTitles));

// 3. Check if a Game Title Contains a Specific Word
// Input: ('Final Fantasy VII', 'Fantasy')
console.log("\n3. Check if a Game Title Contains a Specific Word:");
const gameTitle = "Final Fantasy VII";
wordQuery = "Fantasy";
function contaainsWorldInTitle(title, word) {
  return title.includes(word);
}
console.log(contaainsWorldInTitle(gameTitle, wordQuery));

// 4. Check if All Game Titles Start with the Same Letter
// Input: ['Assassin's Creed', 'Age of Empires', 'Animal Crossing']
console.log("\n4. Check if All Game Titles Start with the Same Letter:");
const gameTitles4 = ["Assassin's Creed", "Age of Empires", "Animal Crossing"];
function allTitlesStartWithSameLetter(titles) {
  all = true;
  for (let i = 0; i < titles.length - 1; i++) {
    if (titles[i][0].toLowerCase() !== titles[i + 1][0].toLowerCase()) {
      all = false;
      break;
    }
  }
  return all;
}
console.log(allTitlesStartWithSameLetter(gameTitles4));

// 5. Concatenate All Game Genres into a Single String
// Input: ['RPG', 'Action', 'Adventure']
console.log("\n5. Concatenate All Game Genres into a Single String:");
const gameGenres = ["RPG", "Action", "Adventure"];

function concatenateGenres(genres) {
  let result = genres[0];
  for (let i = 1; i < genres.length; i++) {
    result += ", " + genres[i];
  }
  return result;
}
console.log(concatenateGenres(gameGenres));

// 6. Count Battles in XP Range
// Input: ([50, 75, 100, 30, 20, 100], 75, 100)
console.log("\n6. Count Battles in XP Range:");
const xpValues = [50, 75, 100, 30, 20, 100];
const lowerBound = 75;
const upperBound = 100;
function countInXpRange(xpValues, lower, upper) {
  let count = 0;
  for (let i = 0; i < xpValues.length; i++) {
    if (xpValues[i] >= lower && xpValues[i] <= upper) {
      count++;
    }
  }
  return count;
}
console.log(countInXpRange(xpValues, lowerBound, upperBound));

// 7. Find Games Developed by a Specific Developer
// Input Example: ['The Legend of Zelda', 'Final Fantasy', 'Halo: Combat Evolved'], ['Nintendo', 'Square Enix', 'Bungie'], 'Nintendo'
console.log("\n7. Find Games Developed by a Specific Developer:");

const gameTitles7 = [
  "The Legend of Zelda",
  "Final Fantasy",
  "Halo: Combat Evolved",
];

const developers7 = ["Nintendo", "Square Enix", "Bungie"];
const developerQuery = "Nintendo";

function findGamesByDeveloper(titles, developers, query) {
  const filterdGames = [];
  for (let i = 0; i < developers.length; i++) {
    if (developers[i] === query) {
      filterdGames.push(titles[i]);
    }
  }

  return filterdGames;
}

console.log(findGamesByDeveloper(gameTitles7, developers7, developerQuery));

// 8. Capitalize the First Letter of Each Game Title
// Input: ['the legend of zelda', 'final fantasy', 'halo: combat evolved']
console.log("\n8. Capitalize the First Letter of Each Game Title:");
const gameTitles8 = [
  "the legend of zelda",
  "final fantasy",
  "halo: combat evolved",
];

function capitalizeFirstLetter(titles) {
  const capitalizedTitles = [];
  for (let i = 0; i < titles.length; i++) {
    const title = titles[i];
    const firstLetter = title[0].toUpperCase();
    const restOfTitle = title.slice(1);
    capitalizedTitles.push(firstLetter + restOfTitle);
  }
  return capitalizedTitles;
}
console.log(capitalizeFirstLetter(gameTitles8));

// 9. Filter Unique XP Values
// Input: [100, 50, 75, 50, 100, 75, 100]
console.log("\n9. Filter Unique XP Values:");
const xpValues9 = [100, 50, 75, 50, 100, 75, 100];

function uniqueXP(xpValues) {
  const uniqueValues = [];
  for (let i = 0; i < xpValues.length; i++) {
    if (!uniqueValues.includes(xpValues[i])) {
      uniqueValues.push(xpValues[i]);
    }
  }
  return uniqueValues;
}
console.log(uniqueXP(xpValues9));

// 10. Sort Game Titles Alphabetically
// Input: ['The Legend of Zelda', 'Final Fantasy', 'Halo: Combat Evolved']
console.log("\n10. Sort Game Titles Alphabetically:");
const gameTitles10 = [
  "The Legend of Zelda",
  "Final Fantasy",
  "Halo: Combat Evolved",
];

function sortTitlesAlphabetically(titles) {
  return titles.sort();
}
console.log(sortTitlesAlphabetically(gameTitles10));

// 11. Filter XP by Multiple Criteria
// Input: ([10, 20, 30, 40, 50], greaterThan=20, lessThan=50)
console.log("\n11. Filter XP by Multiple Criteria:");
const xpValues11 = [10, 20, 30, 40, 50];
const greaterThan = 20;
const lessThan = 50;

function filterXPByCriteria(xpValues, greaterThan, lessThan) {
  const filteredValues = [];
  for (let i = 0; i < xpValues.length; i++) {
    if (xpValues[i] > greaterThan && xpValues[i] < lessThan) {
      filteredValues.push(xpValues[i]);
    }
  }
  return filteredValues;
}
console.log(filterXPByCriteria(xpValues11, greaterThan, lessThan));

// Bonus Exercises

// 1. Sort Experience Points
// Input: [100, 50, 75, 25, 10]
console.log("\nBonus Exercises\n1. Sort Experience Points:");
const xpValuesBonus = [100, 50, 75, 25, 10];

function sortXP(xpValues) {
  xpSortedValues = xpValues.slice();
  for (let i = 0; i < xpSortedValues.length - 1; i++) {
    for (let j = 0; j < xpSortedValues.length - 1 - i; j++) {
      if (xpSortedValues[j] > xpSortedValues[j + 1]) {
        const temp = xpSortedValues[j];
        xpSortedValues[j] = xpSortedValues[j + 1];
        xpSortedValues[j + 1] = temp;
      }
    }
  }
  return xpSortedValues;
}

console.log(sortXP(xpValuesBonus));

// 2. Average XP of Top N Battles
// Input: ([50, 10, 100, 75, 25], 3)
console.log("\n2. Average XP of Top N Battles:");
const xpValuesBonus2 = [50, 10, 100, 75, 25];
const topNXP = 3;

function averageOfTopNXP(xpValues, n) {
  const sortedXP = sortXP(xpValues);
  let total = 0;
  for (let i = sortedXP.length - 1; i > sortedXP.length - 1 - n; i--) {
    total += sortedXP[i];
  }
  return total / n;
}
console.log(averageOfTopNXP(xpValuesBonus2, topNXP));

// 3. Normalize Experience Points
// Input: ([0, 25, 50, 75, 100], 0, 10)
console.log("\n3. Normalize Experience Points:");
const xpValuesBonus3 = [0, 25, 50, 75, 100];
const minXP = 0;
const maxXP = 10;

function normalizeXP(xpValues, min, max) {
  const normalizedXP = [];
  for (let i = 0; i < xpValues.length; i++) {
    const normalizedValue = xpValues[i] / (max - min);
    normalizedXP.push(normalizedValue);
  }
  return normalizedXP;
}
console.log(normalizeXP(xpValuesBonus3, minXP, maxXP));
