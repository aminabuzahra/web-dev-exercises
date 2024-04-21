// 1. Character Name Capitalization
// Input: "iron warrior"

console.log("\n1. Character Name Capitalization:");

const characterName = "iron   warrior";
const wordsOfCharacterName = characterName.split(" ");
const capitalizedWords = [];

for (let i = 0; i < wordsOfCharacterName.length; i++) {
  if (wordsOfCharacterName[i]) {
    const capitalizedWord =
      wordsOfCharacterName[i][0].toUpperCase() +
      wordsOfCharacterName[i].slice(1);
    capitalizedWords.push(capitalizedWord);
  }
}

console.log(capitalizedWords.join(" "));

// 2. Item Search
// Input: ["Iron Sword", "Healing Potion", "Steel Shield", "Iron Axe"] and query "Iron"
console.log("\n2. Item Search:");
const inventoryItems = [
  "Iron Sword",
  "Healing Potion",
  "Steel Shield",
  "Iron Axe",
];
const query = "Iron";
const searchResults = [];
for (let i = 0; i < inventoryItems.length; i++) {
  if (inventoryItems[i].toLowerCase().includes(query.toLowerCase())) {
    searchResults.push(inventoryItems[i]);
  }
}
console.log(searchResults);

// 3. NPC Name Format
// Input: "Goblin, Grunty"
console.log("\n3. NPC Name Format:");
const npcName = "Goblin, Grunty";
const npcNameWords = npcName.split(", ");
const swappedNpcName = `${npcNameWords[1]} ${npcNameWords[0]}`;
console.log(swappedNpcName);

// 4. Quest Duration
// Input: "3h 45min"
console.log("\n4. Quest Duration:");
const questDuration = "3h 45min";
const questDurationTimeString = questDuration.split(" ");
const hours = parseInt(questDurationTimeString[0]);
const minutes = parseInt(questDurationTimeString[1]);
console.log(`${hours} hours and ${minutes} minutes`);

// 5. Game Title Acronym
// Input: "Epic Fantasy Battle"
console.log("\n5. Game Title Acronym:");
const gameTitle = "Epic Fantasy Battle";
const gameTitleWords = gameTitle.split(" ");
let gameTitleAcronym = "";
for (let i = 0; i < gameTitleWords.length; i++) {
  gameTitleAcronym += gameTitleWords[i][0].toUpperCase();
}
console.log(gameTitleAcronym);

// 6. Concatenate Character Details
// Input: 'Iron Warrior;Warrior;10'
console.log("\n6. Concatenate Character Details:");
const characterDetails = "Iron Warrior;Warrior;10";
const characterDetailsArray = characterDetails.split(";");
console.log(
  `${characterDetailsArray[0]}, Class: ${characterDetailsArray[1]}, Level: ${characterDetailsArray[2]}`
);

// 7. Location Slug
// Input: "Dark Forest"
console.log("\n7. Location Slug:");
const location = "Dark Forest";
const locationSlug = location.toLowerCase().split(" ").join("-");
console.log(locationSlug);

// 8. Quest Description Trimming
// Input: "Retrieve the sacred artifact from the dragon's lair. But beware, the dragon is cunning and powerful.", 50
console.log("\n8. Quest Description Trimming:");
const questDescription =
  "Retrieve the sacred artifact from the dragon's lair. But beware, the dragon is cunning and powerful.";
const maxLength = 50;
let trimmedQuestDescription = questDescription;
if (questDescription.length > maxLength) {
  trimmedQuestDescription = questDescription.slice(0, maxLength) + "...";
}
console.log(trimmedQuestDescription);

// 9. Monster List
// Input: "Goblin, Orc, Dragon"
console.log("\n9. Monster List:");
const monsters = "Goblin, Orc, Dragon";
const monstersArray = monsters.split(", ");
console.log(monstersArray);
