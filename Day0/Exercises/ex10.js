// ============ GLOBAL VARIABLES ============
// These can be accessed anywhere in the program

const COFFEE_PRICE = 4.00;
const TEA_PRICE = 3.00;
const PASTRY_PRICE = 2.00;
const TAX_RATE = 0.10;

// TODO: Create a global variable to track total daily sales (start at 0)


// TODO: Create a global variable to track total orders completed (start at 0)


// ============ FUNCTIONS ============

// TODO: Create function calculateSubtotal(coffeeQty, teaQty, pastryQty)
// This should calculate and return the subtotal before tax
// Hint: Use the global price constants


// TODO: Create function calculateTax(subtotal)
// This should calculate and return the tax amount
// Hint: Use the global TAX_RATE constant


// TODO: Create function getItemsList(coffeeQty, teaQty, pastryQty)
// Returns a string of items ordered
// Example: if coffeeQty=1, teaQty=0, pastryQty=2
// Return: "Coffee, Pastry, Pastry"
// Hint: Create a LOCAL array, push items based on quantity, then join with ", "


// TODO: Create function processOrder(orderNumber, coffeeQty, teaQty, pastryQty)
// This function should:
// 1. Create LOCAL variables for subtotal, tax, and orderTotal
// 2. Call calculateSubtotal() and calculateTax()
// 3. Print the order details
// 4. Update the GLOBAL variables (totalSales and totalOrders)
// 
// Print format:
// Processing Order [number]...
// Items: [list items ordered]
// Subtotal: $[subtotal]
// Tax: $[tax]
// Order Total: $[orderTotal]
// ------------------


// TODO: Create function printDailySummary()
// This should print the daily summary using the GLOBAL variables
// Print format:
// === DAILY SUMMARY ===
// Total Orders: [totalOrders]
// Total Sales: $[totalSales]
// =====================


// ============ MAIN PROGRAM ============
// DO NOT MODIFY BELOW THIS LINE

console.log("=== COFFEE SHOP ===");
console.log("");

// Order 1: 1 Coffee, 0 Tea, 1 Pastry
processOrder(1, 1, 0, 1);

// Order 2: 0 Coffee, 2 Tea, 1 Pastry
processOrder(2, 0, 2, 1);

// Order 3: 2 Coffee, 1 Tea, 0 Pastry
processOrder(3, 2, 1, 0);

console.log("");
printDailySummary();