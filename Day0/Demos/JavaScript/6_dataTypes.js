//Data Types
let myString = "Hello, World!"; // String
let myString2 = 'Hello, World!'; // String with single quotes

let myNumber = 42; // Number (integer)
let myFloat = 3.14; // Number (floating-point)

let myBoolean = true; // Boolean

let myUndefined = undefined; // Undefined
let myUndefined2; // Also undefined


// Displaying Data Types
console.log(typeof "Hello"); // string
console.log(typeof 123); // number
console.log(typeof 3.14); // number
console.log(typeof true); // boolean
console.log(typeof myUndefined); // undefined
console.log(typeof null); // object (this is a known quirk in JavaScript)



console.log("-------------------");
//Type Conversion

//others -> number
console.log(typeof Number(true)); //converts boolean or string to number
console.log(typeof parseFloat("5.1")); //converts string to floating-point number
console.log(typeof parseInt("2")); //converts string to integer

//others -> string
let x = 3
console.log(typeof String(x)); //converts number or boolean to string