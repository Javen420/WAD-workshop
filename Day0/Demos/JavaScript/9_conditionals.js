//conditional statements
const birthYear = 2001;

let generation;
if((birthYear <= 2012) && (birthYear > 1996)) {
    generation = "Generation Z";
} else if((birthYear <= 1996) && (birthYear > 1980)) {
    generation = "Millennial";
} else if((birthYear <= 1980) && (birthYear > 1964)) {
    generation = "Generation X";
} else {
    generation = "Baby Boomer or older";
}

console.log("You belong to:", generation);