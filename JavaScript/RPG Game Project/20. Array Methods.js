// Array methods
// 1. Retrieve Player Names
console.log("\n1. Retrieve Player Names");
console.log("==========================");
console.log();

const arr = [{ name: "Hero" }, { name: "Warrior" }, { name: "Mage" }];

let newArr = arr.map((n) => n.name);

console.log(newArr);
