// RPG Game
// Closures
// Exercise 1: Creating a Player Character
console.log("");
console.log("Exercise 1: Creating a Player Character");
console.log("=================================");
console.log();

function creatPlayerCharacter(name, initialLevel) {
  let playerName = name;
  let level = initialLevel;
  let xp = 0;
  return {
    levelUp: function () {
      level++;
      console.log(`The player's level was increased by one to be ${level}`);
    },

    addXP: function (number) {
      xp += number;
      console.log(`The player's xp was increased by ${number} to be ${xp}`);
    },
  };
}

let player = creatPlayerCharacter("subhi", 10);
player.levelUp();
player.addXP(5);
player.levelUp();

// RPG Game
// Closures
// Exercise 2: Creating a Player Character
console.log("");
console.log("Exercise 2: Managing Inventory");
console.log("=================================");
console.log();

function createInventory() {
  let inventory = [];
  return {
    addItem: function (item) {
      inventory.push(item);
      console.log(`${item} was added!`);
    },
    removeItem: function (item) {
      let i = inventory.indexOf(item);
      if (i === -1) {
        console.log(`${item} is not found!`);
        return;
      }
      inventory.splice(i, 1);
      console.log(`${item} was removed`);
    },
    getItems() {
      return inventory.slice();
    },
  };
}

items = createInventory();
console.log(items);

items.addItem("sword");
items.addItem("Magic bow");
items.addItem("flying boot");
items.addItem("dragon eye");
items.removeItem("sword");
items.removeItem("gun");

console.log(items.getItems());

// RPG Game
// Closures
// Exercise 3: Implementing Abilities
console.log("");
console.log("Exercise 3: Implementing Abilities");
console.log("==================================");
console.log();

function createAbility(name, power) {
  return {
    name,
    power,
    useAbility: function () {
      console.log(`Used ${this.name} ability and its power is ${this.power}`);
    },
  };
}
let ability1 = createAbility("Fireball", 10);
ability1.useAbility();

// RPG Game
// Closures
// Exercise 4: Handling Enemies
console.log("");
console.log("Exercise 4: Handling Enemies");
console.log("===============================");
console.log();

function createEnemy(name, health) {
  return {
    name,
    health,
    attack: function () {
      console.log(`${this.name} is attacking!`);
    },
    reduceHealth: function (damage) {
      this.health -= damage;
      if (this.isDefeated()) {
        console.log(`${this.name} is dead!`);
      } else {
        console.log(`${this.name} has ${this.health} health left!`);
      }
    },
    isDefeated: function () {
      if (this.health <= 0) {
        return true;
      } else {
        return false;
      }
    },
  };
}

let enemy1 = createEnemy("Goblin", 10);
enemy1.attack();
enemy1.reduceHealth(5);
