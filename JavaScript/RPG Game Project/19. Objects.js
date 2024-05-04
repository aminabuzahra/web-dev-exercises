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
    combat();
  }

  return encounter;
};

// gameWorld.combat = function (player, enemy) {
//   const dealDamage = (attacker, defender) => {
//     const damage = Math.floor(Math.random() * 10) + 1;
//     defender.health -= damage;
//     console.log(`${attacker.name} deals ${damage} damage to ${defender.name}.`);

//     if (defender.health <= 0) {
//       defender.health = 0;
//       console.log(`${defender.name} has been defeated.`);
//       this.removeEntity(
//         defender instanceof Player ? "players" : "enemies",
//         defender
//       );
//     } else {
//       console.log(`${defender.name} has ${defender.health} health remaining.`);
//     }
//   };

//   while (player.health > 0 && enemy.health > 0) {
//     dealDamage(player, enemy);
//     if (enemy.health > 0) {
//       dealDamage(enemy, player);
//     }
//   }
// };

// let player = { name: "Hero", health: 50 };
// let enemy = { name: "Goblin", health: 30 };
// gameWorld.players.push(player);
// gameWorld.enemies.push(enemy);

// console.log("Starting combat...");
// gameWorld.combat(player, enemy);

// Rawaa solution
const gameWorld = {
  removeMovie: function (movieTitle) {
    this.movies = this.movies.filter(function (movie) {
      return movie.title !== movieTitle;
    });
  },
};
