// Exercise 1: Creating the RPG World
console.log("\nExercise 1: Creating the RPG World");
console.log("===================================");
console.log();

const gameWorld = {
  players: [],
  enemies: [],
  items: [],
  npcs: [],

  createPlayer(name, health, position, inventory) {
    const player = {
      name,
      health,
      position,
      inventory,
      abilities,
      level,
      xp,
      playerClass,
    };
    return player;
  },

  createEnemy(name, health, position, inventory) {
    const enemy = {
      name,
      health,
      position,
      inventory,
    };
    return enemy;
  },
};

console.log(gameWorld);

// Exercise 2: Adding and Removing Entities
console.log("\nExercise 2: Adding and Removing Entities");
console.log("=========================================");
console.log();

gameWorld.addPlayer = function (player) {
  this.players.push(player);
};

gameWorld.removePlayer = function (player) {
  this.players = this.players.filter((p) => p !== player);
};

gameWorld.addEnemy = function (enemy) {
  this.enemies.push(enemy);
};

gameWorld.removeEnemy = function (enemy) {
  this.enemies = this.enemies.filter((e) => e !== enemy);
};

gameWorld.addItem = function (item) {
  this.items.push(item);
};

gameWorld.removeItem = function (item) {
  this.items = this.items.filter((i) => i !== item);
};

gameWorld.addNpc = function (npc) {
  this.npcs.push(npc);
};

gameWorld.removeNpc = function (npc) {
  this.npcs = this.npcs.filter((n) => n !== npc);
};

console.log(gameWorld);

// Exercise 3: Movement in the RPG World
console.log("\nExercise 3: Movement in the RPG World");
console.log("=======================================");
console.log();

gameWorld.createPlayer = function (name, health, position, inventory) {
  const player = {
    name,
    health,
    position,
    inventory,
    move(newPosition) {
      this.position.x = newPosition.x;
      this.position.y = newPosition.y;
    },
  };
  this.players.push(player);
  return player;
};

const player = gameWorld.createPlayer(
  "Khadra",
  10,
  { x: 0, y: 0 },
  { gold: 100, sword: 1, shield: 1 }
);

gameWorld.addPlayer(player);
player.move({ x: 10, y: 10 });

// Exercise 4: Encounters and Combat
console.log("\nExercise 4: Encounters and Combat");
console.log("====================================");
console.log();

gameWorld.checkforEncounter = function (player, enemies) {
  const encounter = enemies.find(
    (enemy) =>
      enemy.position.x === player.position.x &&
      enemy.position.y === player.position.y
  );
  if (encounter) {
    combat(player, enemy);
  }

  return encounter;
};

gameWorld.combat = function (player, enemy) {
  console.log(`Combat started between ${player.name} and ${enemy.name}.`);
  console.log();
  const damage = (attacker, defender) => {
    const damage = Math.floor(Math.random() * 10) + 1;
    defender.health -= damage;
    console.log(`${attacker.name} damaged ${defender.name} ${damage} damages.`);

    if (defender.health <= 0) {
      defender.health = 0;
      console.log(`${defender.name} defeated!`);
      console.log(`combat ended.`);
    } else {
      console.log(`${defender.name} health remaining ${defender.health}`);
      console.log();
    }
  };

  while (player.health > 0 && enemy.health > 0) {
    damage(player, enemy);
    if (enemy.health > 0) {
      damage(enemy, player);
    }
  }
};

let player2 = { name: "Amin", health: 50 };
let enemy2 = { name: "Evil", health: 30 };
gameWorld.players.push(player2);
gameWorld.enemies.push(enemy2);

gameWorld.combat(player2, enemy2);

// Exercise 5: Item Interaction
console.log("\nExercise 5: Item Interaction");
console.log("==============================");
console.log();

gameWorld.createPlayer = function (name, health, position, inventory) {
  const player = {
    name,
    health,
    position,
    inventory,
    move(newPosition) {
      this.position.x = newPosition.x;
      this.position.y = newPosition.y;
    },
    pickUpItem(item) {
      if (
        item.position.x === this.position.x &&
        item.position.y === this.position.y
      ) {
        this.inventory.push(item);
        gameWorld.removeItem(item);
      }
    },
    useItem(item) {
      if (this.inventory.includes(item)) {
        item.effect(this);
        this.inventory = this.inventory.filter((i) => i !== item);
      }
    },
  };

  gameWorld.createItem = function (name, position, effect) {
    const item = {
      name,
      position,
      effect,
    };
    return item;
  };

  this.players.push(player);
  return player;
};

// Exercise 6: Adding Abilities
console.log("\nExercise 6: Adding Abilities");
console.log("=============================");
console.log();

gameWorld.createAbility = function (name, effect) {
  const ability = {
    name,
    effect,
  };
  return ability;
};

gameWorld.createPlayer = function (
  name,
  health,
  position,
  inventory,
  abilities
) {
  const player = {
    name,
    health,
    position,
    inventory,
    abilities,
    move(newPosition) {
      this.position.x = newPosition.x;
      this.position.y = newPosition.y;
    },
    pickUpItem(item) {
      if (
        item.position.x === this.position.x &&
        item.position.y === this.position.y
      ) {
        this.inventory.push(item);
        gameWorld.removeItem(item);
      }
    },
    useItem(item) {
      if (this.inventory.includes(item)) {
        item.effect(this);
        this.inventory = this.inventory.filter((i) => i !== item);
      }
    },
  };
};

gameWorld.createEnemy = function (
  name,
  health,
  position,
  inventory,
  abilities
) {
  const enemy = {
    name,
    health,
    position,
    inventory,
    abilities,
  };
};

gameWorld.createAbility = function (name, effect) {
  const ability = {
    name,
    effect,
  };
  return ability;
};

// Exercise 7: Advanced Combat
console.log("\nExercise 7: Advanced Combat");
console.log("============================");
console.log();

gameWorld.combat = function (player, enemy) {
  console.log(`Combat started between ${player.name} and ${enemy.name}.`);
  console.log();
  const damage = (attacker, defender) => {
    const rnd = Math.floor(Math.random() * 10) + 1;
    // console.log(`random value: ${rnd}`);
    const damage = rnd + attacker.abilities[0].effect;
    defender.health -= damage;
    console.log(`${attacker.name} damaged ${defender.name} ${damage} damages.`);

    if (defender.health <= 0) {
      defender.health = 0;
      console.log(`${defender.name} defeated!`);
      console.log(`combat ended.`);
    } else {
      console.log(`${defender.name} health remaining ${defender.health}`);
      console.log();
    }
  };

  while (player.health > 0 && enemy.health > 0) {
    damage(player, enemy);
    if (enemy.health > 0) {
      damage(enemy, player);
    }
  }
  if (player.health <= 0) {
    gameWorld.removePlayer(player);
  }
  if (enemy.health <= 0) {
    gameWorld.removeEnemy(enemy);
  }
};

let player3 = {
  name: "Amin",
  health: 50,
  abilities: [{ name: "Sword", effect: 5 }],
};
let enemy3 = {
  name: "Evil",
  health: 30,
  abilities: [{ name: "Fireball", effect: 10 }],
};
gameWorld.players.push(player3);
gameWorld.enemies.push(enemy3);

gameWorld.combat(player3, enemy3);

// Exercise 8: Leveling System
console.log("\nExercise 8: Leveling System");
console.log("============================");
console.log();

gameWorld.createPlayer = function (
  name,
  health,
  position,
  inventory,
  abilities
) {
  const player = {
    name,
    health,
    position,
    inventory,
    abilities,
    level,
    xp,
    move(newPosition) {
      this.position.x = newPosition.x;
      this.position.y = newPosition.y;
    },
    pickUpItem(item) {
      if (
        item.position.x === this.position.x &&
        item.position.y === this.position.y
      ) {
        this.inventory.push(item);
        gameWorld.removeItem(item);
      }
    },
    useItem(item) {
      if (this.inventory.includes(item)) {
        item.effect(this);
        this.inventory = this.inventory.filter((i) => i !== item);
      }
    },
    levelUp() {
      if (this.xp >= 100) {
        const levelIncrease = Math.floor(this.xp / 100);
        this.level += levelIncrease;
        this.xp -= levelIncrease * 100;
        this.health += levelIncrease * 10;
      }
    },
  };
};

// Exercise 9: Class System
console.log("\nExercise 9: Class System");
console.log("==========================");
console.log();

gameWorld.createPlayer = function (
  name,
  health,
  position,
  inventory,
  abilities
) {
  const player = {
    name,
    health,
    position,
    inventory,
    abilities,
    level,
    xp,
    playerClass,

    move(newPosition) {
      this.position.x = newPosition.x;
      this.position.y = newPosition.y;
    },
    pickUpItem(item) {
      if (
        item.position.x === this.position.x &&
        item.position.y === this.position.y
      ) {
        this.inventory.push(item);
        gameWorld.removeItem(item);
      }
    },
    useItem(item) {
      if (this.inventory.includes(item)) {
        item.effect(this);
        this.inventory = this.inventory.filter((i) => i !== item);
      }
    },
    levelUp() {
      if (this.xp >= 100) {
        const levelIncrease = Math.floor(this.xp / 100);
        this.level += levelIncrease;
        this.xp -= levelIncrease * 100;
        this.health += levelIncrease * 10;
      }
    },
  };
};
