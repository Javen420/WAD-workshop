// Exercise 6: Count Occurrences

function countOccurrences(arr, target){
    let count = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            count++;
        }
    }
    return count;
}

console.log(countOccurrences([1, 2, 2, 3, 2], 2)) //3
console.log(countOccurrences([4, 5, 6], 1)) //0
console.log(countOccurrences([4, 8, 6, 10, 2, 8, 4, 1, 2], 8)) //2

////In the terminal, enter "node ex6.js" (Without quotes) to run code