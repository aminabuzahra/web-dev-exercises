const player = {
  name: "John",
  health: 85,
  items: [
    {
      name: "Sword",
      value: 50,
    },
    {
      name: "Shield",
      value: 40,
    },
    {
      name: "Potion",
      value: 20,
    },
  ],
};

// 1. Simple Arrow Function Conversion
console.log("1. Simple Arrow Function Conversion");
console.log("==================================");
console.log();

function getPlayerName(player) {
  return player.name;
}

const getPlayerNameArrow = (player) => {
  return player.name;
};

console.log(getPlayerNameArrow(player));

// 2. Control Flow in Arrow Functions
console.log("2. Control Flow in Arrow Functions");
console.log("==================================");
console.log();

function getPlayerHealth(health) {
  if (health > 70) {
    return "High";
  } else if (health > 40) {
    return "Medium";
  } else {
    return "Low";
  }
}

const getPlayerHealthArrow = (health) => {
  if (health > 70) {
    return "High";
  } else if (health > 40) {
    return "Medium";
  } else {
    return "Low";
  }
};

console.log(getPlayerHealthArrow(player.health));

// 3. Arrow Functions with Multiple Operations
console.log("3. Arrow Functions with Multiple Operations");
console.log("===========================================");
console.log();
function getTotalInventoryValue(items) {
  let totalValue = 0;
  for (let i = 0; i < items.length; i++) {
    totalValue += items[i].value;
  }
  return "Total inventory value is " + totalValue;
}

const getTotalInventoryValueArrow = (items) => {
  let totalValue = 0;
  for (let i = 0; i < items.length; i++) {
    totalValue += items[i].value;
  }
  return "Total inventory value is " + totalValue;
};

console.log(getTotalInventoryValueArrow(player.items));

// 4. Arrow Functions as Callbacks
console.log("4. Arrow Functions as Callbacks");
console.log("===============================");
console.log();

const sortedItems = player.items.sort(function (a, b) {
  return b.value - a.value;
});

const sortedItemsArrow = player.items.sort((a, b) => a.value - b.value);
console.log(sortedItemsArrow);

// 5. Implicit Return with Arrow Functions
console.log("5. Implicit Return with Arrow Functions");
console.log("=======================================");
console.log();
function getItemNames(items) {
  return items.map(function (item) {
    return item.name;
  });
}

const getItemNamesArrow = (items) => items.map((item) => item.name);
console.log(getItemNamesArrow(player.items));
