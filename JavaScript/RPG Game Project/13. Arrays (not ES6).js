// 1. Check if a Weapon Exists
console.log("1.");
const weaponInventory = ["Sword", "Bow", "Magic Staff"];
const weaponToCheck = "Sword";
if (weaponInventory.includes(weaponToCheck)) {
  console.log("Weapon exists in the inventory.");
} else {
  console.log("Weapon does not exist in the inventory.");
}

// 2. Reverse Quest Order
console.log("\n2.");
const questNames = [
  "Dragon's Lair",
  "The Lost Artifact",
  "Rescue the Princess",
];
const reversedQuestNames = questNames.reverse();
console.log(reversedQuestNames);

// 3. Create a String of Monster Types
console.log("\n3.");
const monsterTypes = ["Dragon", "Goblin", "Orc"];
const monsterTypesJoined = monsterTypes.join(", ");
console.log(monsterTypesJoined);

// 4. Check for a Specific Monster Typpe
console.log("\n4.");
const monsterTypes2 = ["Dragon", "Goblin", "Orc"];
const monsterToCheck = "Orc";
if (monsterTypes2.includes(monsterToCheck)) {
  console.log("Monster exists.");
} else {
  console.log("Monster does not exist.");
}

// 5. Find Index of a Specific Quest
console.log("\n5.");
const questNames2 = [
  "Dragon's Lair",
  "The Lost Artifact",
  "Rescue the Princess",
];
const specificQuest = "Rescue the Princess";
const questIndex = questNames2.lastIndexOf(specificQuest);
questIndex === -1
  ? console.log("Quest not found.")
  : console.log(`Rescue the Pricess found at index: ${questIndex}`);

// 6. Remove the Last Monster
console.log("\n6.");
const monsterList = ["Dragon", "Orc", "Goblin"];
const lastMonster = monsterList.pop();
console.log("Last Monster " + lastMonster);
console.log("The updated array:");
console.log(monsterList);

// 7. Insert a Monster at the Beginning
console.log("\n7.");
const monsterList2 = ["Orc", "Goblin"];
monsterList2.unshift("Dragon");
console.log("The updated array:");
console.log(monsterList2);

// 8. Remove the First Monster
console.log("\n8.");
const monsterList3 = ["Dragon", "Orc", "Goblin"];
const firstMonster = monsterList3.shift();
console.log("First Monster " + firstMonster);
console.log("The updated array:");
console.log(monsterList3);

// 9. Concatenate Two Arrays of Heroes
console.log("\n9.");
const heroList1 = ["Archer", "Mage"];
const heroList2 = ["Warrior", "Healer"];
const heroListCombined = heroList1.concat(heroList2);
console.log(heroListCombined);

// 10. Sort Quests Alphabetically
console.log("\n10.");
const questNames3 = [
  "Dragon's Lair",
  "The Lost Artifact",
  "Rescue the Princess",
];
const sortedQuestNames = questNames3.sort();
console.log(sortedQuestNames);

// 11. Create Array from Magic Spells
console.log("\n11.");
const spellsString = "Fireball, Heal, Ice, Lance";
const spellsArray = spellsString.split(", ");
console.log(spellsArray);

// 12. Slice Array to Get Upcoming Quests
console.log("\n12.");
const questNames4 = [
  "Dragon's Lair",
  "The Lost Artifact",
  "Rescue the Princess",
];
const n = 2;
const upcomingQuests = questNames4.slice(0, n);
console.log(upcomingQuests);

// 13. Empty the Monster Array
console.log("\n13.");
const monsterList4 = ["Dragon", "Orc", "Goblin"];
monsterList4.splice(0, monsterList4.length);
console.log("The updated array:");
console.log(monsterList4);

// 14. Equip a new Weapon
console.log("\n14.");
const weaponInventory2 = ["Sword", "Sheild"];
const newWeapon = "Bow";
weaponInventory2.push(newWeapon);
console.log("The updated array:");
console.log(weaponInventory2);

// 15. Sell the Last Item
console.log("\n15.");
const inventory = ["Gold", "Magic Potion", "Shield"];
const lastItem = inventory.pop();
console.log("Sold: " + lastItem);
console.log("The updated array:");
console.log(inventory);

// 16. Insert a New Quest at the Beginning
console.log("\n16.");
const questNames5 = ["Dragon's Lair", "Rescue the Princess"];
const newQuest = "Defeat the Goblin King";
questNames5.unshift(newQuest);
console.log("The updated array:");
console.log(questNames5);

// 17. List All Quests Alphabetically
console.log("\n17.");
const questNames6 = [
  "Dragon's Lair",
  "Rescue the Princess",
  "Defeat the Goblin King",
];
const sortedQuestNames2 = questNames6.sort();
console.log(sortedQuestNames2);

// 18. Check if Quest Exists
console.log("\n18.");
const questNames7 = [
  "Dragon's Lair",
  "Rescue the Princess",
  "Defeat the Goblin King",
];
const quest = "Rescue the Princess";
if (questNames7.includes(quest)) {
  console.log(`${quest} exists in the quest array.`);
}

// 19. Sort Scores
console.log("\n19.");
const scores = [30, 80, 60, 90];
const reversedScores = scores.reverse();
console.log(reversedScores);
