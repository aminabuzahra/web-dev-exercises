// 1. Move Player
console.log("\n1. Move Player:");
const gameWorld1 = [
  [0, 2, 0],
  [1, 3, 0],
  [0, 2, 0],
];
const playerPosition1 = { x: 1, y: 1 };
const direction1 = "north";

function movePlayer(gameWorld, playerPosition, direction) {
  let newX = playerPosition.x;
  let newY = playerPosition.y;

  if (direction === "north") {
    newY--;
  } else if (direction === "south") {
    newY++;
  } else if (direction === "west") {
    newX--;
  } else if (direction === "east") {
    newX++;
  }

  if (gameWorld[newX] && gameWorld[newX][newY]) {
    playerPosition.x = newX;
    playerPosition.y = newY;
  }
  return { x: newX, y: newY };
}

console.log(movePlayer(gameWorld1, playerPosition1, "north"));

// 2. Battle Simulation
console.log("\n2. Battle Simulation:");
const playerHP2 = 100;
const playerAttack2 = 20;
const enemyHP2 = 50;
const enemyAttack2 = 15;

function battleSimulation(playerHP, playerAttack, enemyHP, enemyAttack) {
  let round = 0;
  console.log(`Game Start! Player HP: ${playerHP} | Enemy HP: ${enemyHP}`);
  while (playerHP > 0 && enemyHP > 0) {
    console.log(`Round ${++round}`);
    enemyHP -= playerAttack;
    if (enemyHP <= 0) {
      console.log(`Player HP: ${playerHP} | Enemy HP: ${enemyHP}`);
      return "\nPlayer wins!";
    }
    playerHP -= enemyAttack;
    if (playerHP <= 0) {
      console.log(`Player HP: ${playerHP} | Enemy HP: ${enemyHP}`);
      return "\nEnemy wins!";
    }
    console.log(`Player HP: ${playerHP} | Enemy HP: ${enemyHP}`);
  }
}
console.log(battleSimulation(playerHP2, playerAttack2, enemyHP2, enemyAttack2));

// 3. Find Enemies
console.log("\n3. Find Enemies:");
const gameWorld3 = [
  [0, 2, 0],
  [1, 3, 0],
  [0, 2, 0],
];

function findEnemies(gameWorld) {
  const enemies = [];

  for (let y = 0; y < gameWorld.length; y++) {
    for (let x = 0; x < gameWorld[y].length; x++) {
      if (gameWorld[y][x] === 2) {
        enemies.push({ x, y });
      }
    }
  }

  return enemies;
}
console.log(findEnemies(gameWorld3));

// 4. Find Path to Goal
const playerPosition4 = { x: 1, y: 1 };
const goalPosition4 = { x: 0, y: 2 };

function findPathToGoal(playerPosition, goalPosition) {
  const path = [];
  let currentX = playerPosition.x;
  let currentY = playerPosition.y;
  const goalX = goalPosition.x;
  const goalY = goalPosition.y;

  while (currentX !== goalX || currentY !== goalY) {
    if (currentY < goalY) {
      path.push("south");
      currentY += 1;
    } else if (currentY > goalY) {
      path.push("north");
      currentY -= 1;
    }

    if (currentX < goalX) {
      path.push("east");
      currentX += 1;
    } else if (currentX > goalX) {
      path.push("west");
      currentX -= 1;
    }
  }

  return path;
}

console.log(findPathToGoal(playerPosition4, goalPosition4));
