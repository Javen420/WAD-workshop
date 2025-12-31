//Arrays
let shoppingList = ["apple", "orange", "pear"]; // Create an array named shoppingList
console.log("Initial shopping list:", shoppingList); // Display the initial array
console.log("Type of shoppingList:", typeof shoppingList); // Display the type of shoppingList

// Accessing Array Contents
let friends = ["Bello", "Artie", "Oscar"]; // Create an array named friends
let userData = ["Cody", 22, true, friends]; // Create a mixed array named userData
console.log(userData[0]); // Access and display the first element of userData
console.log(userData[2]); // Access and display the third element of userData

console.log(userData[-1]) // Accessing with negative index returns undefined in JavaScript
console.log(userData[userData.length - 1][0]); // Returns "Bello"
console.log(userData.at(-1)[0]); // Returns "Bello"


// Manipulating Arrays
shoppingList = ["Apple", "Pear", "Orange"];
shoppingList.push("grapes"); //Apple, Pear, Orange, Grapes
shoppingList[3] = "Durian"; //Apple, Pear, Orange, Durian
shoppingList[10] = "Pineapple"; //Apple, Pear, Orange, Durian, <6 empty items>, Pineapple

shoppingList.pop(); //Removes Pineapple //Apple, Pear, Orange, Durian, <6 empty items>
delete shoppingList[3]; //Removes Durian but leaves an empty item //Apple, Pear, Orange, <7 empty items>

console.log("Final shopping list:", shoppingList); // Display the final array