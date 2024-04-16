// 1. Quest Days of the Week
console.log("\n1.");
const dayOfWeek = 7;

switch (dayOfWeek) {
  case 1: // Sunday
    console.log("Navigate the caves network to find the Crystal Ball.");
    break;
  case 2: // Monday
    console.log("Track the Bronze Stag in the forest for its magical horn.");
    break;
  case 3: // Tuesday
    console.log(
      "Decode the ancient script on the obelisk located on the Island of Spirits to acquire black stones."
    );
    break;
  case 4: // Wednesday
    console.log("Dive into the Red Hole and bring the Lost Sword of Fire.");
    break;
  case 5: // Thursday
    console.log(
      "Trade with ghostly merchants at the forst gate to get the mysterious map."
    );
    break;
  case 6: // Friday
    console.log("Defeat the Wizards in a duel to claim the Primary Key.");
    break;
  case 7: // Saturday
    console.log("Solve pushing rocks puzzle to uncover the Shield of Shadows.");
    break;
  default:
    console.log("They did not invent this day yet ;)");
}

// 2. Game Theme Color Setting
console.log("\n2.");
const dungeonColor = "dungeon";
switch (dungeonColor) {
  case "light":
    console.log("light");
    break;
  case "dark":
    console.log("dark");
    break;
  case "dungeon":
    console.log("dungeon");
    break;
  default:
    console.log("Unsuppoerted color theme!");
}

// 3. Quest Botification Status
console.log("\n3.");
const questStatus = "new";
switch (questStatus) {
  case "new":
  case "unread":
  case "unopened":
    console.log("You have new quests awaiting!");
    break;
  default:
    console.log("Completed");
}

// 4. Player Level Classification
console.log("\n4.");
const playerLevel = "Beginner";

switch (playerLevel) {
  case "Beginner":
    console.log(
      "Welcome, novice adventurer! You're at the start of your journey, mastering basic skills and understanding game mechanics."
    );
    break;
  case "Intermediate":
    console.log(
      "As an intermediate player, you've developed key skills and are now facing tougher challenges and enemies."
    );
    break;
  case "Advanced":
    console.log(
      "Advanced players engage with complex game strategies, difficult quests, and explore deeper storylines."
    );
    break;
  case "Expert":
    console.log(
      "Experts have a profound understanding of all game aspects, facing some of the toughest challenges and enemies with ease."
    );
    break;
  case "Master":
    console.log(
      "Masters are at the pinnacle of gameplay, often involved in influencing major game events and mentoring other players."
    );
    break;
  default:
    console.log("Unknown player level.");
}

// 5.
console.log("\n5.");
// const inventoryItem = "Sheild";
const inventoryItem = "Potion";
switch (inventoryItem) {
  case "Potion":
    console.log("Potion");
  case "Sword":
    console.log("Sword");
  case "Sheild":
    console.log("Sheild");
}

// 6. Player Score Ranges
console.log("\n6.");
const playerScore = 90;
switch (true) {
  case playerScore >= 90:
    console.log("Legend");
    break;
  case playerScore <= 89 && playerScore >= 70:
    console.log("Champion");
    break;
  case playerScore <= 70 && playerScore >= 0:
    console.log("Rookie");
    break;
  default:
    console.log("Rookie Habibi");
}

// 7. Seasonal Quests
console.log("\n7.");
const questMonth = 1;
let questDescription = "";
switch (questMonth) {
  case 1: // January
    questDescription = "Ice Kingdonm Adventure";
    break;
  case 2: // February
    questDescription = "Valentine's Day Quest";
    break;
  case 3: // March
    questDescription = "Spring Blossom Hunt";
    break;
  case 4: // April
    questDescription = "Easter Egg Hunt";
    break;
  case 5: // May
    questDescription = "Flower Festival Celebration";
    break;
  case 6: // June
    questDescription = "Summer Solstice Quest";
    break;
  case 7: // July
    questDescription = "Beach Party Bonanza";
    break;
  case 8: // August
    questDescription = "Underwater Expedition";
    break;
  case 9: // September
    questDescription = "Harvest Festival Quest";
    break;
  case 10: // October
    questDescription = "Haunted Mansion Mystery";
    break;
  case 11: // November
    questDescription = "Turkey Trot Adventure";
    break;
  case 12: // December
    questDescription = "Frosty Festivities";
    break;
  default:
    questDescription = "Invalid month number!";
}
console.log(questDescription);

// 8. Player Input Handling
console.log("\n8.");
let playerInput;
playerInput = "Attack";
switch (typeof playerInput) {
  case "string":
    console.log("String");
    break;
  case "number":
    console.log("Number");
    break;
  case "boolean":
    console.log("Boolean");
    break;
  default:
    console.log("Unknown data type!");
}

// 9. Game Update Release Schedule
console.log("\n9.");
const updateMonth = 4;
switch (updateMonth) {
  case 1:
  case 2:
  case 3:
    console.log("Q1");
    break;
  case 4:
  case 5:
  case 6:
    console.log("Q2");
    break;
  case 7:
  case 8:
  case 9:
    console.log("Q3");
    break;
  case 10:
  case 11:
  case 12:
    console.log("Q4");
    break;
  default:
    console.log("Invalid month number!");
}
