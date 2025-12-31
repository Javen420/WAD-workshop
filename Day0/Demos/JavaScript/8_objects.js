//Objects

const basicAddress = {
  building: "SMU SCIS 1",
  line1: "80 Stamford Rd",
  line2: null,
  country: "Singapore",
  postalCode: 178902
};

console.log("Type of basic_address:", typeof basicAddress); // Display the type of basic_address object
console.log("--------------------");

console.log("Address Object:", basicAddress); // Display the basic_address object
console.log("Building:", basicAddress.building); // Access and display the building property
console.log("Line 1:", basicAddress["line1"]); // Access and display the line1 property
console.log("Line 2:", basicAddress["line2"]); // Access and display the line2 property
console.log("Country:", basicAddress.country); // Access and display the country property
console.log("Postal Code:", basicAddress.postalCode); // Access and display the postalCode property

console.log("--------------------");

//Manipulating Object Properties

const address = {
    building: "SMU SCIS 1",
    country: "Singapore",
    postalCode: 178902
};
console.log("Initial Address Object:", address); // Display the initial address object

address.building = "SMU SCIS 2"; // Update the building property
address["postalCode"] = 178903; // Update the postalCode property

console.log("Updated Address Object:", address); // Display the updated address object

address.line1 = "90 Stamford Rd"; // Add a new property line1

delete address.line1; // Delete the line1 property

console.log("Final Address Object:", address); // Display the final address object