//For Loops
const word = "Strawberry";
let count = 0;

const wordlen = word.length;
for(let i = 0; i < wordlen; i++) {
    if(word[i] === 'r') {
        count++;
    }
}
console.log(`The letter 'r' appears ${count} times in the word "${word}".`);


console.log("-------------------")

//while Loops
let tries = 1; //What if you change this to 0?
function randomInt(max){ //Ignore this function for now
    return Math.floor(Math.random() * max);
}

while (randomInt(10) !== 5) {
    tries++;
};

console.log(`It took ${tries} tries to randomly generate the number 5.`);