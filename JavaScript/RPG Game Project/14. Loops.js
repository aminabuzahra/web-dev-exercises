// 1. Calculate Total Player Experience
console.log("\n1. Calculate Total Player Experience:");
const experiencePoints1 = [100, 150, 75];
let totalExperience = 0;
for (let i = 0; i < experiencePoints1.length; i++) {
  totalExperience += experiencePoints1[i];
}
console.log("Total Experience: " + totalExperience);

// 2. Locate Quest by Title
console.log("\n2. Locate Quest by Title:");
const questTitles2 = ["Quest 1", "Quest 2", "Quest 3"];
for (let i = 0; i < questTitles2.length; i++) {
  if (questTitles2[i] === "Quest 2") {
    console.log("Quest 2 found at index: " + i);
  }
}

// 3. List Enemies Above Health Threshold
console.log("\n3. List Enemies Above Health Threshold:");
const enemyHealths3 = [80, 120, 65];
const healthThreshold = 100;
for (let i = 0; i < enemyHealths3.length; i++) {
  if (enemyHealths3[i] > healthThreshold) {
    console.log(`Enemy array index ${i} has health above threshold.`);
  }
}

// 4. Enhance All Quest Rewards
console.log("\n4. Enhance All Quest Rewards:");
const questRewards4 = [50, 100, 75];
const rewardIncrease = 20;
for (let i = 0; i < questRewards4.length; i++) {
  questRewards4[i] += rewardIncrease;
}
console.log(questRewards4.join(", "));

// 5. Count Occurrences of a Specific Reward
console.log("\n5. Count Occurrences of a Specific Reward:");
const questRewards5 = [50, 100, 75, 100];
const specificReward5 = 100;
let rewardCount = 0;
for (let i = 0; i < questRewards5.length; i++) {
  if (questRewards5[i] === specificReward5) {
    rewardCount++;
  }
}
console.log(`Reward ${specificReward5} occurs ${rewardCount} times.`);

// 6. Verify All Quests Offer Sufficient Challenge
console.log("\n6. Verify All Quests Offer Sufficient Challenge:");
const questChallenges6 = [120, 150, 75];
const challengeThreshold = 100;
let allChallenging = true;
for (let i = 0; i < questChallenges6.length; i++) {
  if (questChallenges6[i] < challengeThreshold) {
    allChallenging = false;
    break;
  }
}
console.log("All quests are challenging: " + allChallenging);

// 7. Discover the Quest with the Maximum Reward
console.log("\n7. Discover the Quest with the Maximum Reward:");
const questRewards7 = [50, 100, 75, 150];
let maxReward = questRewards7[0];
for (let i = 1; i < questRewards7.length; i++) {
  if (questRewards7[i] > maxReward) {
    maxReward = questRewards7[i];
  }
}
console.log("Maximum Reward: " + maxReward);

// 8. Combine Enemy Powers for a Total Assault Value
console.log("\n8. Combine Enemy Powers for a Total Assault Value:");
const enemyPowers8 = [50, 80, 65, 90];
const enemyHealths8 = [80, 120, 60, 100];
let totalAssault = 0;
for (let i = 0; i < enemyPowers8.length; i++) {
  totalAssault += enemyPowers8[i] * enemyHealths8[i];
}
console.log("Total Assault Value: " + totalAssault);

// 9. Calculate Total Experience from Quest Matrix
console.log("\n9. Calculate Total Experience from Quest Matrix:");
const questExperienceMatrix9 = [
  [100, 200],
  [150, 175],
  [120, 250],
];
let totalExperience9 = 0;
for (let i = 0; i < questExperienceMatrix9.length; i++) {
  for (let j = 0; j < questExperienceMatrix9[i].length; j++) {
    totalExperience9 += questExperienceMatrix9[i][j];
  }
}
console.log("Total Experience: " + totalExperience9);

// 10. Find the Quest with Highest Experience in Each Category (Column)
console.log("\n10. Find the Quest with Highest Experience in Each Category:");
const questExperienceMatrix10 = [
  [100, 200],
  [150, 175],
  [120, 250],
];
const highestExperiences = [];
let maxExperienceInEachCategory = 0;
for (let j = 0; j < questExperienceMatrix10[0].length; j++) {
  for (let i = 0; i < questExperienceMatrix10.length; i++) {
    if (questExperienceMatrix10[i][j] > maxExperienceInEachCategory) {
      maxExperienceInEachCategory = questExperienceMatrix10[i][j];
    }
  }
  highestExperiences.push(maxExperienceInEachCategory);
  maxExperienceInEachCategory = 0;
}
console.log(
  "Highest Experiences in Each Group (Column): " + highestExperiences.join(", ")
);

// 11. Count High-Difficulty Quests in Each Category
console.log("\n11. Count High-Difficulty Quests in Each Category:");
const questDifficultyMatrix11 = [
  [5, 7],
  [8, 6],
  [9, 7],
];
const highDifficulty = 7;
const highDifficultyCounts = [];
let highDifficultyCount = 0;
for (let j = 0; j < questDifficultyMatrix11[0].length; j++) {
  for (let i = 0; i < questDifficultyMatrix11.length; i++) {
    if (questDifficultyMatrix11[i][j] >= highDifficulty) {
      highDifficultyCount++;
    }
  }
  highDifficultyCounts.push(highDifficultyCount);
  highDifficultyCount = 0;
}
console.log(
  "High Difficulty Counts in Each Group (Column): " +
    highDifficultyCounts.join(", ")
);

// 12. Sum of Rewards for High-Reward Quests by Category
console.log("\n12. Sum of Rewards for High-Reward Quests by Category:");
const questRewardsMatrix12 = [
  [50, 200],
  [300, 175],
  [120, 500],
];
const highReward = 250;
const highRewardSums = [];
let highRewardSum = 0;
for (let j = 0; j < questRewardsMatrix12[0].length; j++) {
  for (let i = 0; i < questRewardsMatrix12.length; i++) {
    if (questRewardsMatrix12[i][j] >= highReward) {
      highRewardSum += questRewardsMatrix12[i][j];
    }
  }
  highRewardSums.push(highRewardSum);
  highRewardSum = 0;
}
console.log(
  "High Reward Sums in Each Group (Column): " + highRewardSums.join(", ")
);

// 13. Average Health of Enemies by Type
console.log("\n13. Average Health of Enemies by Type:");
const enemyHealthMatrix13 = [
  [80, 120],
  [60, 90],
  [200, 150],
];

const averageHealths = [];
let totalHealth = 0;
for (let i = 0; i < enemyHealthMatrix13.length; i++) {
  for (let j = 0; j < enemyHealthMatrix13[i].length; j++) {
    totalHealth += enemyHealthMatrix13[i][j];
  }
  averageHealths.push(totalHealth / enemyHealthMatrix13[i].length);
  totalHealth = 0;
}
console.log("Average Health for each enemy type: " + averageHealths.join(", "));
