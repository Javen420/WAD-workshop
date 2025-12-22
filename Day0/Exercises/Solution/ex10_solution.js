// ============ GLOBAL VARIABLES ============
// These can be accessed anywhere in the program

const COFFEE_PRICE = 4.00;
const TEA_PRICE = 3.00;
const PASTRY_PRICE = 2.00;
const TAX_RATE = 0.10;

// Global tracking variables
let totalSales = 0;
let totalOrders = 0;

// ============ FUNCTIONS ============

// Calculate subtotal before tax
function calculateSubtotal(coffeeQty, teaQty, pastryQty) {
    const subtotal = (coffeeQty * COFFEE_PRICE) + (teaQty * TEA_PRICE) + (pastryQty * PASTRY_PRICE);
    return subtotal;
}

// Calculate tax amount
function calculateTax(subtotal) {
    const tax = subtotal * TAX_RATE;
    return tax;
}

// Get list of items as a string
function getItemsList(coffeeQty, teaQty, pastryQty) {
    const items = [];
    
    for (let i = 0; i < coffeeQty; i++) {
        items.push("Coffee");
    }
    
    for (let i = 0; i < teaQty; i++) {
        items.push("Tea");
    }
    
    for (let i = 0; i < pastryQty; i++) {
        items.push("Pastry");
    }
    
    return items.join(", ");
}

// Process a single order
function processOrder(orderNumber, coffeeQty, teaQty, pastryQty) {
    // Local variables - only exist within this function
    const subtotal = calculateSubtotal(coffeeQty, teaQty, pastryQty);
    const tax = calculateTax(subtotal);
    const orderTotal = subtotal + tax;
    const itemsList = getItemsList(coffeeQty, teaQty, pastryQty);
    
    // Print order details
    console.log("Processing Order " + orderNumber + "...");
    console.log("Items: " + itemsList);
    console.log("Subtotal: $" + subtotal);
    console.log("Tax: $" + tax);
    console.log("Order Total: $" + orderTotal);
    console.log("------------------");
    console.log("");
    
    // Update global variables
    totalSales = totalSales + orderTotal;
    totalOrders = totalOrders + 1;
}

// Print daily summary
function printDailySummary() {
    console.log("=== DAILY SUMMARY ===");
    console.log("Total Orders: " + totalOrders);
    console.log("Total Sales: $" + totalSales);
    console.log("=====================");
}

// ============ MAIN PROGRAM ============

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