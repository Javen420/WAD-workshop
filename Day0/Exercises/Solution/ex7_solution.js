// Exercise 7: Remove Duplicates

function removeDuplicates(arr, target){
    let result = []
    for(let i = 0; i < arr.length; i++){
        let exists = false;
        for (let j = 0; j < result.length; j++){
            if(arr[i] === result[j]){
                exists = true;
                break
            }
        }
        if(!exists){
            result.push(arr[i])
        }
    }
    return result
}

console.log(removeDuplicates([1, 2, 2, 3, 1])) //[1, 2, 3]
console.log(removeDuplicates([4, 4, 4, 4])) //[4]
console.log(removeDuplicates([1, 3, 3, 1, 2, 5, 4, 4, 3, 2, 1, 5])) //[ 1, 3, 2, 5, 4 ]

////In the terminal, enter "node ex7.js" (Without quotes) to run code