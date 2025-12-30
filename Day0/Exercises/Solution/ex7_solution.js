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

// ============ TRAVELER 1 ============
const traveler1 = travelers[0];

console.log("=== BORDER CHECKPOINT ===");
console.log("Name: " + traveler1.name);
console.log("Country: " + traveler1.country);
console.log("Age: " + traveler1.age);
console.log("Passport Expiry Day: " + traveler1.passportExpiryDay);
console.log("Has Entry Permit: " + traveler1.hasEntryPermit);
console.log("-------------------------");

let status1;
let reason1;

if (traveler1.country === "Kolechia") {
    status1 = "DENIED";
    reason1 = "Citizens of Kolechia are banned";
} else if (traveler1.passportExpiryDay < today) {
    status1 = "DENIED";
    reason1 = "Passport has expired";
} else if (!traveler1.hasEntryPermit && traveler1.age < 65) {
    status1 = "DENIED";
    reason1 = "Missing entry permit";
} else if (!traveler1.hasEntryPermit && traveler1.age >= 65) {
    status1 = "APPROVED";
    reason1 = "Senior exception - no permit required";
} else {
    status1 = "APPROVED";
    reason1 = "All documents valid";
}

console.log("Status: " + status1);
console.log("Reason: " + reason1);
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

let status2;
let reason2;

if (traveler2.country === "Kolechia") {
    status2 = "DENIED";
    reason2 = "Citizens of Kolechia are banned";
} else if (traveler2.passportExpiryDay < today) {
    status2 = "DENIED";
    reason2 = "Passport has expired";
} else if (!traveler2.hasEntryPermit && traveler2.age < 65) {
    status2 = "DENIED";
    reason2 = "Missing entry permit";
} else if (!traveler2.hasEntryPermit && traveler2.age >= 65) {
    status2 = "APPROVED";
    reason2 = "Senior exception - no permit required";
} else {
    status2 = "APPROVED";
    reason2 = "All documents valid";
}

console.log("Status: " + status2);
console.log("Reason: " + reason2);
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

let status3;
let reason3;

if (traveler3.country === "Kolechia") {
    status3 = "DENIED";
    reason3 = "Citizens of Kolechia are banned";
} else if (traveler3.passportExpiryDay < today) {
    status3 = "DENIED";
    reason3 = "Passport has expired";
} else if (!traveler3.hasEntryPermit && traveler3.age < 65) {
    status3 = "DENIED";
    reason3 = "Missing entry permit";
} else if (!traveler3.hasEntryPermit && traveler3.age >= 65) {
    status3 = "APPROVED";
    reason3 = "Senior exception - no permit required";
} else {
    status3 = "APPROVED";
    reason3 = "All documents valid";
}

console.log("Status: " + status3);
console.log("Reason: " + reason3);
console.log("=========================");