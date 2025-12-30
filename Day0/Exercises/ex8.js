// Exercise 8 (Papers, Please 2)
// Today's date (day number)
const today = 23;

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
        name: "Sergei Volkov",
        country: "Impor",
        age: 35,
        passportExpiryDay: 18,
        isForeign: true,
        hasEntryPermit: true,
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
        name: "Maria Santos",
        country: "Impor",
        age: 34,
        passportExpiryDay: 24,
        isForeign: true,
        hasEntryPermit: true,
        isWorker: true,
        hasWorkPass: true
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

// TODO: Create counters for approved and denied travelers


console.log("=== BORDER CHECKPOINT ===");
console.log("Processing " + travelers.length + " travelers...");
console.log("=========================");
console.log("");

// TODO: Create a for loop to iterate through all travelers


    // TODO: Access the current traveler using travelers[i]


    // TODO: Print traveler number and details


    // TODO: Create variables for status and reason


    // TODO: Write conditional statements to determine entry status
    // Check in this order:
    // 1. Is traveler from Kolechia? -> DENIED, "Citizens of Kolechia are banned"
    // 2. Is passport expired? -> DENIED, "Passport has expired"
    // 3. Is foreign worker without work pass? -> DENIED, "Foreign worker missing work pass"
    // 4. Is foreign, under 65, and no entry permit? -> DENIED, "Foreign traveler missing entry permit"
    // 5. Is foreign, 65+, and no entry permit? -> APPROVED, "Senior exception - no permit required"
    // 6. Is citizen (not foreign)? -> APPROVED, "Citizen - no permit required"
    // 7. Otherwise -> APPROVED, "All documents valid"


    // TODO: Print status and reason


    // TODO: Update counters based on status


    // console.log("------------------");
    // console.log("");


// TODO: Print shift summary
console.log("=== SHIFT COMPLETE ===");
// console.log("Total Processed: " + ???);
// console.log("Approved: " + ???);
// console.log("Denied: " + ???);
console.log("======================");