//Exercise 6 (Pancake's Pet Profile)
const petProfile = {
    name: 'Pancakes',
    breed: 'Cavalier King Charles',
    age: 3,
    vaccinated: true,
    favorite_foods: ["Chicken", "Salmon", "Carrots"]
}

console.log("=== PET PROFILE ===");
console.log("Name: " + petProfile.name);
console.log("Breed: " + petProfile.breed);
console.log("Age: " + petProfile.age);
console.log("Vaccinated: " + petProfile.vaccinated);
console.log("Favorite Foods: " + petProfile.favorite_foods);
console.log("===================");

console.log("");

petProfile.age = 4;
petProfile.favorite_foods.push("Scrambled Eggs");
petProfile.weight = 7.5;
petProfile.favorite_foods.splice(1,1);
delete petProfile.vaccinated;

console.log("=== PET PROFILE ===");
console.log("Name: " + petProfile.name);
console.log("Breed: " + petProfile.breed);
console.log("Age: " + petProfile.age);
console.log("Weight: " + petProfile.weight + "kg")
console.log("Favorite Foods: " + petProfile.favorite_foods);
console.log("===================");