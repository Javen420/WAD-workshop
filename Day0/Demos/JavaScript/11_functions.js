//defining a function
function metresToFeet(metres) {
    const feet = metres * 3.28084;
    return feet;
}

console.log("5 metres is", metresToFeet(5), "feet"); //calling the function and logging the result

//Function Scope
let personName = "Cody"

function changeName(name){
    const newName = `Name: ${name}`;
    personName = newName
}

changeName(personName)
console.log(newName); //What will happen if we try to log newName here?
