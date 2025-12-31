// Arithmetic Operators in JavaScript
let x = 4, y = 5;

console.log("x + y =", x + y); // Addition (4 + 5 = 9)
console.log("x - y =", x - y); // Subtraction (4 - 5 = -1)
console.log("x * y =", x * y); // Multiplication (4 * 5 = 20)
console.log("x / y =", x / y); // Division (4 / 5 = 0.8)
console.log("x ** y =", x ** y); // Power (4 to the power of 5 = 1024)
console.log("x % y =", x % y); // Modulo (4 % 5 = 4)

console.log("-------------------")

// Comparison Operators in JavaScript
console.log("x > y:", x > y); // Greater than (false)
console.log("x >= y:", x >= y); // Greater than or equal to (false)
console.log("x < y:", x < y); // Less than (true)
console.log("x <= y:", x <= y); // Less than or equal to (true)
console.log("x == y:", x == y); // Equal to (false)
console.log("x != y:", x != y); // Not equal to (true)


console.log("-------------------")
// Increment and Decrement Operators in JavaScript

console.log("x++ =", x++); // Post-increment (prints 4, then x becomes 5
console.log("After x++ , x =", x); // x is now 5

console.log("++y =", ++y); // Pre-increment (y becomes 6, then prints 6)
console.log("After ++y , y =", y); // y is now 6

console.log("y-- =", y--); // Post-decrement (prints 6, then y becomes 5
console.log("After y-- , y =", y); // y is now 5
console.log("--x =", --x); // Pre-decrement (x becomes 4, then prints 4)
console.log("After --x , x =", x); // x is now 4

console.log("-------------------")
// Logical Operators in JavaScript
let a = true, b = false;
console.log("a && b:", a && b); // Logical AND (false)
console.log("a || b:", a || b); // Logical OR (true)
console.log("!a:", !a); // Logical NOT (false)
console.log("!b:", !b); // Logical NOT (true)

console.log("-------------------")
// Assignment Operators in JavaScript
let c = 10;
console.log("c =", c); // c = 10
c += 5; // c = c + 5
console.log("c += 5:", c); // c = 15
c -= 3; // c = c - 3
console.log("c -= 3:", c); // c = 12
c *= 2; // c = c * 2
console.log("c *= 2:", c); // c = 24
c /= 4; // c = c / 4
console.log("c /= 4:", c); // c = 6
c %= 4; // c = c % 4
console.log("c %= 4:", c); // c = 2
console.log("-------------------")

// String Concatenation Operator in JavaScript
let str1 = "Hello, ";
let str2 = "World!";
let greeting = str1 + str2;
console.log("Greeting:", greeting); // Greeting: Hello, World!
console.log("-------------------")