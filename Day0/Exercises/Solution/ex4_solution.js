//Exercise 4 (Getting Groceries)

// Budget
const budget = 35;

// Shopping list prices
const ricePrice = 13;
const soySaucePrice = 4;
const eggsPrice = 6;

// Calculate total spent and remaining
const totalSpent = ricePrice + soySaucePrice + eggsPrice;
const remaining = budget - totalSpent;

// Extra items
const cokePrice = 12;
const chickenWingsPrice = 14;

// Check if Greg can afford extras
const canAffordCoke = remaining >= cokePrice;
const canAffordChickenWings = remaining >= chickenWingsPrice;

// Print results
console.log("=== GREG'S GROCERY BUDGET ===");
console.log("Budget: $" + budget);
console.log("Total Spent: $" + totalSpent);
console.log("Remaining: $" + remaining);
console.log("-----------------------------");
console.log("Can afford Coke ($12): " + canAffordCoke);
console.log("Can afford Chicken Wings ($14): " + canAffordChickenWings);
console.log("=============================");