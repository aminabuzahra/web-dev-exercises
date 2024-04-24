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
function getPlayerName(player) {
  return player.name;
}

const getPlayerNameArrow = (player) => player.name;
console.log(getPlayerNameArrow(player));






// 2. Control Flow in Arrow Functions
function getPlayerHealth(health) {
  if (health > 70) {
    return "High";
  } else if (health > 40) {
    return "Medium";
  } else {
    return "Low";
  }
}

// 3. Arrow Functions with Multiple Operations
function getTotalInventoryValue(items) {
  let totalValue = 0;
  for (let i = 0; i < items.length; i++) {
    totalValue += items[i].value;
  }
  return "Total inventory value is " + totalValue;
}

// 4. Arrow Functions as Callbacks
const sortedItems = items.sort(function (a, b) {
  return b.value - a.value;
});

// 5. Implicit Return with Arrow Functions
function getItemNames(items) {
  return items.map(function (item) {
    return item.name;
  });
}
