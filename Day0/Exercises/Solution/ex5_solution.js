// Exercise 5: Sum of Array Values

function sumArray(arr){
    let total = 0;
    
    for(let i = 0; i < arr.length; i++){
        total += arr[i];
    }

    return total;
}

console.log(sumArray([1,2,3,4])) //10
console.log(sumArray([5,-2,7])) //10
console.log(sumArray([11,20,-4, 40])) //67

//In the terminal, enter "node ex5.js" (Without quotes) to run code