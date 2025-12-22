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

// Check if passport is valid
function isPassportValid(expiryDay) {
    return expiryDay >= today;
}

// Check if country is banned
function isBannedCountry(country) {
    return country === "Kolechia";
}

// Check if entry permit is needed
function needsEntryPermit(isForeign, age) {
    return isForeign && age < 65;
}

// Check if work pass is needed
function needsWorkPass(isForeign, isWorker) {
    return isForeign && isWorker;
}

// Process entry and return status with reason
function processEntry(traveler) {
    if (isBannedCountry(traveler.country)) {
        return { status: "DENIED", reason: "Citizens of Kolechia are banned" };
    }
    
    if (!isPassportValid(traveler.passportExpiryDay)) {
        return { status: "DENIED", reason: "Passport has expired" };
    }
    
    if (needsWorkPass(traveler.isForeign, traveler.isWorker) && !traveler.hasWorkPass) {
        return { status: "DENIED", reason: "Foreign worker missing work pass" };
    }
    
    if (needsEntryPermit(traveler.isForeign, traveler.age) && !traveler.hasEntryPermit) {
        return { status: "DENIED", reason: "Foreign traveler missing entry permit" };
    }
    
    if (!traveler.isForeign) {
        return { status: "APPROVED", reason: "Citizen - no permit required" };
    }
    
    if (traveler.isForeign && traveler.age >= 65 && !traveler.hasEntryPermit) {
        return { status: "APPROVED", reason: "Senior exception - no permit required" };
    }
    
    return { status: "APPROVED", reason: "All documents valid" };
}

// Print traveler details and status
function printTraveler(traveler, number) {
    const result = processEntry(traveler);
    
    console.log("--- Traveler " + number + " ---");
    console.log("Name: " + traveler.name);
    console.log("Country: " + traveler.country);
    console.log("Age: " + traveler.age);
    console.log("Status: " + result.status);
    console.log("Reason: " + result.reason);
    console.log("------------------");
    console.log("");
}

// ============ MAIN PROGRAM ============

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