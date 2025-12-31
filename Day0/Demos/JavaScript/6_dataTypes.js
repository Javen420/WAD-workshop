//Data Types
let myString = "Hello, World!"; // String
let myString2 = 'Hello, World!'; // String with single quotes

let myNumber = 42; // Number (integer)
let myFloat = 3.14; // Number (floating-point)

let myBooleanTrue = true; // Boolean
let myBooleanFalse = false; // Boolean

let myArray = [1, 2, 3]; // Array
let myObject = { name: "Cody", age: 22 }; // Object

let myUndefined; // Undefined
let myUndefined2 = undefined; // Undefined

let myNull = null; // Null

// Displaying Data Types
console.log("myString:", myString, "Type:", typeof myString);
console.log("myString2:", myString2, "Type:", typeof myString2);
console.log("myNumber:", myNumber, "Type:", typeof myNumber);
console.log("myFloat:", myFloat, "Type:", typeof myFloat);
console.log("myBooleanTrue:", myBooleanTrue, "Type:", typeof myBooleanTrue);
console.log("myBooleanFalse:", myBooleanFalse, "Type:", typeof myBooleanFalse);
console.log("myArray:", myArray, "Type:", typeof myArray);
console.log("myObject:", myObject, "Type:", typeof myObject);
console.log("myUndefined:", myUndefined, "Type:", typeof myUndefined);
console.log("myUndefined2:", myUndefined2, "Type:", typeof myUndefined2);
console.log("myNull:", myNull, "Type:", typeof myNull); // Note: typeof null returns 'object' due to a historical bug in JavaScript


console.log("-------------------");
//Type Conversion

//others -> number
let strNum = "123";
let convertedNum = Number(strNum); // Convert string to number
console.log(`Converted "${strNum}" to number:`, convertedNum, "Type:", typeof convertedNum);
let convertedFloat = parseFloat("3.14"); // Convert string to float
console.log(`Converted "3.14" to float:`, convertedFloat, "Type:", typeof convertedFloat);
let convertedInt = parseInt("42"); // Convert string to integer
console.log(`Converted "42" to integer:`, convertedInt, "Type:", typeof convertedInt);

//others -> string
let numToStr = 456;
let convertedStr = String(numToStr); // Convert number to string
console.log(`Converted ${numToStr} to string:`, convertedStr, "Type:", typeof convertedStr);
let boolToStr = true;
let convertedBoolStr = String(boolToStr); // Convert boolean to string
console.log(`Converted ${boolToStr} to string:`, convertedBoolStr, "Type:", typeof convertedBoolStr);

