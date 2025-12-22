// Exercise 9 (Papers, Please 3)
// Today's date (day number)
const today = 22;

// Traveler queue - DO NOT MODIFY
const travelers = [
    {
        name: "Viktor Petrov",
        country: "Antegria",
        age: 42,
        passportExpiryDay: 25,
        isForeign: true,
        hasEntryPermit: true,
        isWorker: false,
        hasWorkPass: false
    },
    {
        name: "Elena Kovic",
        country: "Kolechia",
        age: 30,
        passportExpiryDay: 28,
        isForeign: true,
        hasEntryPermit: true,
        isWorker: false,
        hasWorkPass: false
    },
    {
        name: "Alexei Novak",
        country: "Arstotzka",
        age: 45,
        passportExpiryDay: 26,
        isForeign: false,
        hasEntryPermit: false,
        isWorker: false,
        hasWorkPass: false
    },
    {
        name: "Anna Malik",
        country: "Republia",
        age: 28,
        passportExpiryDay: 30,
        isForeign: true,
        hasEntryPermit: false,
        isWorker: false,
        hasWorkPass: false
    },
    {
        name: "Boris Antonov",
        country: "Obristan",
        age: 72,
        passportExpiryDay: 29,
        isForeign: true,
        hasEntryPermit: false,
        isWorker: false,
        hasWorkPass: false
    },
    {
        name: "Georg Hoffman",
        country: "Republia",
        age: 29,
        passportExpiryDay: 27,
        isForeign: true,
        hasEntryPermit: true,
        isWorker: true,
        hasWorkPass: false
    }
];

// TODO: Create function isPassportValid(expiryDay)
// Returns true if expiryDay >= today, false otherwise


// TODO: Create function isBannedCountry(country)
// Returns true if country is "Kolechia", false otherwise


// TODO: Create function needsEntryPermit(isForeign, age)
// Returns true if foreign AND under 65, false otherwise


// TODO: Create function needsWorkPass(isForeign, isWorker)
// Returns true if foreign AND is a worker, false otherwise


// TODO: Create function processEntry(traveler)
// Use the helper functions above to determine entry status
// Return an object: { status: "APPROVED" or "DENIED", reason: "..." }
// Check in this order:
// 1. Banned country? -> DENIED, "Citizens of Kolechia are banned"
// 2. Invalid passport? -> DENIED, "Passport has expired"
// 3. Needs work pass but doesn't have one? -> DENIED, "Foreign worker missing work pass"
// 4. Needs entry permit but doesn't have one? -> DENIED, "Foreign traveler missing entry permit"
// 5. Is citizen (not foreign)? -> APPROVED, "Citizen - no permit required"
// 6. Is senior (65+) without permit? -> APPROVED, "Senior exception - no permit required"
// 7. Otherwise -> APPROVED, "All documents valid"


// TODO: Create function printTraveler(traveler, number)
// Print traveler number, name, country, age, status, and reason
// Hint: Call processEntry(traveler) inside this function to get status and reason


// ============ MAIN PROGRAM ============
// DO NOT MODIFY BELOW THIS LINE

let approvedCount = 0;
let deniedCount = 0;

console.log("=== BORDER CHECKPOINT ===");
console.log("Processing " + travelers.length + " travelers...");
console.log("=========================");
console.log("");

for (let i = 0; i < travelers.length; i++) {
    printTraveler(travelers[i], i + 1);
    
    const result = processEntry(travelers[i]);
    if (result.status === "APPROVED") {
        approvedCount++;
    } else {
        deniedCount++;
    }
}

console.log("=== SHIFT COMPLETE ===");
console.log("Total Processed: " + travelers.length);
console.log("Approved: " + approvedCount);
console.log("Denied: " + deniedCount);
console.log("======================");