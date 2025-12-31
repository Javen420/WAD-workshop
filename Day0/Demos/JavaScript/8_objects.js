//Objects

const address = {
  building: "SMU SCIS 1",
  line1: "80 Stamford Rd",
  line2: null,
  country: "Singapore",
  postalCode: 178902
};

console.log("Type of address:", typeof address); // Display the type of address object
console.log("--------------------");

console.log("Address Object:", address); // Display the address object
console.log("Building:", address.building); // Access and display the building property
console.log("Line 1:", address["line1"]); // Access and display the line1 property
console.log("Line 2:", address["line2"]); // Access and display the line2 property
console.log("Country:", address.country); // Access and display the country property
console.log("Postal Code:", address.postalCode); // Access and display the postalCode property

console.log("--------------------");

//Manipulating Object Properties

address = {
    building: "SMU SCIS 1",
    country: "Singapore",
    postalCode: 178902
};
console.log("Initial Address Object:", address); // Display the initial address object

address.building = "SMU SCIS 2"; // Update the building property
address["postalCode"] = 178903; // Update the postalCode property

console.log("Updated Address Object:", address); // Display the updated address object

address.line1 = "80 Stamford Rd"; // Add a new property line1

delete address.country; // Delete the country property

console.log("Final Address Object:", address); // Display the final address object