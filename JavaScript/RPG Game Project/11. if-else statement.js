// 1. Player Health Check
console.log("\n1.");
const playerHealth = 15;
if (playerHealth > 10) {
  console.log("Player is Strong!");
} else {
  console.log("Player is Weak");
}

// 2. Player Gold Range Check
console.log("\n2.");
const playerGold = 50;
if (playerGold > 1 && playerGold < 100) {
  console.log("Rich Player :)");
} else {
  console.log("Poor Player :(");
}

// 3. Nested If-Else for Weather and Time
console.log("\n3.");
const weather = "Sunny";
const timeOfDay = "Morning";
if (weather === "Sunny") {
  if (timeOfDay === "Morning") {
    console.log("Continue the adventure :)");
  } else {
    console.log("Seek shelter :(");
  }
}

// 4. Comparing Weapon Strength
console.log("\n4.");
const playerWeapon = "Sword";
const enemyWeapon = "Axe";
if (playerWeapon === enemyWeapon) {
  console.log("Weapons clashing!");
} else {
  console.log("Advantage");
}

// 5. Checking Player Age for Game Content:
console.log("\n5.");
const playerAge = 15;
if (playerAge > 13 && playerAge < 19) {
  console.log("Game content is restricted");
} else {
  console.log("Game content is available");
}

// 6. Game Score Evaluation with Ternary Operator
console.log("\n6.");
const gameScore = 100;
gameScore > 50 ? console.log("High Score!") : console.log("Low Score");

// 7. Check Number of Enemies (Even or Odd) with Ternary Operator
console.log("\n7.");
const numOfEnemies = 5;
numOfEnemies % 2 === 0
  ? console.log("Even Number of Enemies")
  : console.log("Odd Number of Enemies");

// 8. Character Age Group Classification
console.log("\n8.");
const characterAge = 50;
const ageGroup =
  characterAge < 13
    ? "Child"
    : characterAge < 19
    ? "Teen"
    : characterAge < 60
    ? "Adult"
    : "Senior";
console.log(ageGroup);

// 9. Player's Battle Skill Evaluation
console.log("\n9.");
const battleSkill = 75;
battleSkill > 70 ? console.log("Skilled Worrier") : console.log("Train Harder");

// 10. Game Session Duration Category
console.log("\n10.");
const sessionDuration = 160;
if (sessionDuration < 90) {
  console.log("Short");
} else if (sessionDuration <= 150) {
  console.log("Moderate");
} else {
  console.log("Marathon");
}

// 11. Check Potion Availability in Inventory
console.log("\n11.");
const totalPotions = 5;
const usedPotions = 3;
const availablePotions = totalPotions - usedPotions;
if (availablePotions > 0) {
  console.log("Potions available");
} else {
  console.log("Out of potions");
}

// 12. Vailating Player Age for Restricted Quest
console.log("\n12.");
const playerAge2 = 15;
const questAgeRestriction = 18;
if (playerAge2 >= questAgeRestriction) {
  console.log("Quest available");
} else {
  console.log("Quest restricted");
}

// 13. Special Weekend Events
console.log("\n13.");
const dayOfTheWeek = "Monday";
// const dayOfTheWeek = "Sunday";
if (dayOfTheWeek === "Saturday" || dayOfTheWeek === "Sunday") {
  console.log("Special event happening!");
} else {
  console.log("Regualr gameplay");
}

// 14. Identify Era of Game Setting
console.log("\n14.");
const gameSettingYear = 1300;
if (gameSettingYear >= 900 && gameSettingYear <= 1500) {
  console.log("Medieval Setting");
} else {
  console.log("Different Historical +Era");
}

// 15. Evaluate Character Class and Attributes
console.log("\n15.");
const characterClass = "Warrior";
const characterLevel = 15;
if (characterClass === "Warrior" && characterLevel >= 10) {
  console.log("Powerful Warrior");
} else {
  console.log("Average Character");
}

// 16. Determine Battle Readiness
console.log("\n16.");
const playerHealth2 = 70;
const enemyCount = 2;
if (playerHealth2 > 50 && enemyCount < 3) {
  console.log("Ready for battle");
} else {
  console.log("Proceed with caution");
}

// 17. Assess Quest Completion Status
console.log("\n17.");
const questProgress = 100;
const questDifficulty = 3;
if (questProgress === 100 && questDifficulty <= 5) {
  console.log("Quest completed");
} else {
  console.log("Quest in progress");
}

// 18. Check Player's Inventory
console.log("\n18.");
const inventorySize = 80;
if (inventorySize >= 90) {
  console.log("Inventory almost full");
} else {
  console.log("Plenty of space in the inventory");
}
