// Textual RPG
// Callback functions
// Exercise 1:
console.log("Callback functions");
console.log("Exercise 1:");
console.log("============");
console.log();

const enemies = [
  {
    id: 1,
    name: "Godzilla",
    health: 100,
  },

  {
    id: 2,
    name: "monster-zero",
    health: 500,
  },

  {
    id: 3,
    name: "Witch",
    health: 50,
  },
];

function processEnemies(enemyObjects, callbackFunction) {
  // 1
  if (!Array.isArray(enemyObjects)) {
    throw new Error("Expected an array of enemies");
  }

  // 2
  let missingProperty = false;
  for (let enemy of enemyObjects) {
    if (
      !Object.hasOwn(enemy, "name") ||
      !(typeof enemy.name === "string") ||
      !Object.hasOwn(enemy, "health") ||
      !(typeof enemy.health === "number")
    ) {
      console.log(`Enemy the ID ${enemy.id} is not in the right structure`);
      missingProperty = true;
    }
  }

  if (missingProperty) {
    throw new Error("Enemies objects are not in the right structure");
  }

  // 3
  const newEnemies = JSON.parse(JSON.stringify(enemyObjects));

  // 4
  newEnemies.forEach(callbackFunction);

  // 5
  return newEnemies;
}

function callback(obj) {
  obj.health += 5;
}

let nArr = processEnemies(enemies, callback);
console.log(enemies);
console.log(nArr);

// Exercise 2:

console.log();
console.log("Exercise 2:");
console.log("============");
console.log();

const quests = [
  {
    id: 1,
    name: "find treasure",
    experience: 100,
  },

  {
    id: 2,
    name: "kill a monster",
    experience: 500,
  },

  {
    id: 3,
    name: "solve map puzzle",
    experience: 50,
  },
];

function processQuests(questObjects, callbackFunction) {
  // 1
  if (!Array.isArray(questObjects)) {
    throw new Error("Expected an array of quests");
  }

  // 2
  let missingProperty = false;
  for (let quest of questObjects) {
    if (
      !Object.hasOwn(quest, "name") ||
      !(typeof quest.name === "string") ||
      !Object.hasOwn(quest, "experience") ||
      !(typeof quest.experience === "number")
    ) {
      console.log(`Quest ID ${quest.id} is not in the right structure`);
      missingProperty = true;
    }
  }

  if (missingProperty) {
    throw new Error("Quests objects are not in the right structure");
  }

  // 3
  const newQuests = JSON.parse(JSON.stringify(questObjects));

  // 4
  newQuests.forEach(callbackFunction);

  // 5
  return newQuests;
}

function callback(obj) {
  obj.experience += 10;
}

let nArr2 = processQuests(quests, callback);
console.log(quests);
console.log(nArr2);

// Exercise 3:

console.log();
console.log("Exercise 3:");
console.log("============");
console.log();

const players = [
  {
    id: "1",
    name: "MasterChief",
    health: 150,
    level: 1,
    location: "island",
    inventory: ["Bow", "burned arrow head"],
    // inventory: "Bow",
  },

  {
    id: "2",
    name: "GhostRider",
    health: 120,
    level: 2,
    location: "forest",
    inventory: ["glock", "ak-47", "ak-107"],
  },

  {
    id: "3",
    name: "bruce wayne",
    health: 70,
    level: 3,
    location: "castle",
    inventory: ["dagger", "health potion"],
  },
];

function processPlayers(playerObjects, callbackFunction) {
  // 1
  if (!Array.isArray(playerObjects)) {
    throw new Error("Expected an array of players");
  }

  // 2
  let missingProperty = false;
  for (let player of playerObjects) {
    if (
      !player.hasOwnProperty("name") ||
      !(typeof player.name === "string") ||
      !player.hasOwnProperty("health") ||
      !(typeof player.health === "number") ||
      !player.hasOwnProperty("level") ||
      !(typeof player.level === "number") ||
      !player.hasOwnProperty("location") ||
      !(typeof player.location === "string") ||
      !player.hasOwnProperty("inventory") ||
      !Array.isArray(player.inventory)
    ) {
      console.log(`player ID ${player.id} is not in the right structure`);
      missingProperty = true;
    }
  }

  if (missingProperty) {
    throw new Error("Players objects are not in the right structure");
  }

  // 3
  const newPlayers = JSON.parse(JSON.stringify(playerObjects));

  // 4
  newPlayers.forEach(callbackFunction);

  // 5
  return newPlayers;
}

function callback(obj) {
  obj.health += 10;
}

let nArr3 = processPlayers(players, callback);
// console.log(players);
console.log(nArr3);
