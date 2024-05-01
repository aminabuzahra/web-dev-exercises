// Excercise 1:
console.log("\nExcercise 1:");
console.log("===========");
console.log();
const character = {
  name: "Amin",
  level: 1,
  abilities: ["Strength", "Dexterity", "Intelligence"],
  stats: {
    strength: 15,
    dexerity: 12,
    intelligence: 13,
  },
  class: "Warrior",
  getOverallStrength: function () {
    return this.stats.strength + this.stats.dexerity + this.stats.intelligence;
  },
};

// Excercise 2:
console.log("\nExcercise 2:");
console.log("===========");
console.log();
character.equipment = {
  weapon: "Sword",
  armor: "Leather",
  accessory: "Ring",
};

console.log(character.abilities[0]);
console.log(character["abilities"][0]);
console.log(character.equipment.armor);
console.log(character["equipment"]["armor"]);

// Excercise 3:
console.log("\nExcercise 3:");
console.log("===========");
console.log();
character.stats.strength = 20;
character.abilities.push("Charisma");
delete character.class;
character.equipment.weapon = "Axe";
character["equipment"]["weapon"] = "Axe";
if (character.hasOwnProperty("stats")) {
  console.log("The character object has a 'stats' property.");
} else {
  console.log("The character object does not have a 'stats' property.");
}

// Excercise 4:
console.log("\nExcercise 4:");
console.log("===========");
console.log();
const characters = [
  { name: "Eldrin", attributes: { health: 100, mana: 50 } },
  { name: "Mira", attributes: { health: 85, mana: 60 } },
];
console.log(characters[0].attributes.health);

function healthAverage(characters) {
  sumHealth = 0;
  for (let character of characters) {
    sumHealth += character.attributes.health;
  }
  return sumHealth / characters.length;
}
console.log(healthAverage(characters));

// Excercise 5:
console.log("\nExercise 5:");
console.log("===========");
console.log();
const combinedCharacter = {
  name: characters[0].name + " " + characters[1].name,
  attributes: {
    health: characters[0].attributes.health + characters[1].attributes.health,
    mana: characters[0].attributes.mana + characters[1].attributes.mana,
  },
};

console.log(combinedCharacter);

Object.freeze(combinedCharacter.attributes);
Object.freeze(combinedCharacter);

console.log("Is combinedCharacter frozen?", Object.isFrozen(combinedCharacter));
console.log(
  "Are combinedCharacter's attributes frozen?",
  Object.isFrozen(combinedCharacter.attributes)
);

Object.seal(combinedCharacter.attributes);
Object.seal(combinedCharacter);

console.log("Is combinedCharacter sealed?", Object.isSealed(combinedCharacter));
console.log(
  "Are combinedCharacter's attributes sealed?",
  Object.isSealed(combinedCharacter.attributes)
);

// Excercise 6:
console.log("\nExercise 6:");
console.log("===========");
console.log();
const characterStats = {
  name: "Eldrin",
  class: "Mage",
  level: 7,
  health: 100,
  mana: 200,
};

Object.keys(characterStats).forEach((key) => {
  console.log(`${key}: ${characterStats[key]}`);
});

// Excercise 7:
console.log("\nExercise 7:");
console.log("===========");
console.log();
const gameScores = {
  Eldrin: 950,
  Mira: 1200,
  Thorn: 800,
};

function increaseScore(player, amount) {
  Object.entries(gameScores).forEach(([key, value]) => {
    if (key === "Thorn" && value < 1000) {
      value += 100;
      gameScores[key] = value;
    }
  });
}
increaseScore("Thorn", 100);
console.log(gameScores);

// Excercise 8:
console.log("\nExercise 8:");
console.log("===========");
console.log();
const quests = {
  1: { name: "Find the Lost Sword", difficulty: "Easy", reward: "100 gold" },
  2: { name: "Defeat the Dragon", difficulty: "Hard", reward: "500 gold" },
  3: { name: "Escort the Merchant", difficulty: "Medium", reward: "250 gold" },
};

function getHardQuests(quests) {
  const hardQuests = [];
  Object.entries(quests).forEach(([key, value]) => {
    if (value.difficulty === "Hard") {
      value = { ...value, isHard: true };
      hardQuests.push(value);
    }
  });

  return hardQuests;
}

console.log(getHardQuests(quests));

// Excercise 9:
console.log("\nExercise 9:");
console.log("===========");
console.log();
const skillLevels = {
  Ranger: [8, 9, 7, 10, 8.5],
  Mage: [8.5, 8, 9, 9.5, 7.5],
  Warrior: [7, 7.5, 8, 8.5, 9],
};

function calculateAndLogAverageSkillLevels(skillLevels) {
  Object.keys(skillLevels).forEach((key) => {
    const total = skillLevels[key].reduce((acc, curr) => acc + curr);
    let average = total / skillLevels[key].length;
    console.log(`${key}: ${average}`);
  });
}

calculateAndLogAverageSkillLevels(skillLevels);

// Excercise 10:
console.log("\nExercise 10:");
console.log("===========");
console.log();
const questRewards = {
  "Find the Lost Sword": "Legendary Weapon",
  "Defeat the Dragon": "Epic Armor",
  "Escort the Merchant": "Gold",
  "Discover the Ancient Ruins": "Legendary Weapon",
};

function questsByReward(questRewards) {
  const quests = {};
  Object.entries(questRewards).forEach(([key, value]) => {
    if (!quests[value]) {
      quests[value] = [];
    }
    // if (!quests[value].includes(key)) {
    quests[value].push(key);
    // }
  });

  return quests;
}

console.log(questsByReward(questRewards));
