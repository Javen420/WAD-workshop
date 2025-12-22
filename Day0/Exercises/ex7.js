// Exercise 7 (Papers, Please)
// Today's date (day number)
const today = 22;

// Traveler data - DO NOT MODIFY
const travelers = [
    {
        name: "Viktor Petrov",
        country: "Antegria",
        age: 42,
        passportExpiryDay: 25,
        hasEntryPermit: true
    },
    {
        name: "Elena Kovic",
        country: "Kolechia",
        age: 30,
        passportExpiryDay: 28,
        hasEntryPermit: true
    },
    {
        name: "Boris Antonov",
        country: "Antegria",
        age: 72,
        passportExpiryDay: 26,
        hasEntryPermit: false
    }
];

// Access each traveler using array index
// Example: travelers[0].name gives "Viktor Petrov"

// ============ TRAVELER 1 ============
const traveler1 = travelers[0];

console.log("=== BORDER CHECKPOINT ===");
console.log("Name: " + traveler1.name);
console.log("Country: " + traveler1.country);
console.log("Age: " + traveler1.age);
console.log("Passport Expiry Day: " + traveler1.passportExpiryDay);
console.log("Has Entry Permit: " + traveler1.hasEntryPermit);
console.log("-------------------------");

// TODO: Create variables for status and reason


// TODO: Write conditional statements to check:
// 1. Is traveler from Kolechia? -> DENIED, "Citizens of Kolechia are banned"
// 2. Is passport expired? -> DENIED, "Passport has expired"
// 3. No permit AND under 65? -> DENIED, "Missing entry permit"
// 4. No permit AND 65 or older? -> APPROVED, "Senior exception - no permit required"
// 5. Otherwise -> APPROVED, "All documents valid"


// TODO: Print status and reason

console.log("=========================");
console.log("");

// ============ TRAVELER 2 ============
const traveler2 = travelers[1];

console.log("=== BORDER CHECKPOINT ===");
console.log("Name: " + traveler2.name);
console.log("Country: " + traveler2.country);
console.log("Age: " + traveler2.age);
console.log("Passport Expiry Day: " + traveler2.passportExpiryDay);
console.log("Has Entry Permit: " + traveler2.hasEntryPermit);
console.log("-------------------------");

// TODO: Write conditional statements for traveler 2


// TODO: Print status and reason

console.log("=========================");
console.log("");

// ============ TRAVELER 3 ============
const traveler3 = travelers[2];

console.log("=== BORDER CHECKPOINT ===");
console.log("Name: " + traveler3.name);
console.log("Country: " + traveler3.country);
console.log("Age: " + traveler3.age);
console.log("Passport Expiry Day: " + traveler3.passportExpiryDay);
console.log("Has Entry Permit: " + traveler3.hasEntryPermit);
console.log("-------------------------");

// TODO: Write conditional statements for traveler 3


// TODO: Print status and reason

console.log("=========================");