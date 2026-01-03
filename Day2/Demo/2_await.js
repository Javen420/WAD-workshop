// Using Await in Functions
//await orderItems(); // (X) Await expressions are not allowed at the top level

function distributeItems(){
    console.log("Distributing items to customers");
}

function orderItems(){
    return new Promise((res,rej) => {
        console.log("Customer is ordering items...");
        setTimeout(() => {
            console.log("Customer completed ordering items");
            res() //What happens if you remove this?
        }, 2000);
    });
}

// function order(){
//     //await orderItems(); // Syntax Error: await is only valid in async functions
//     distributeItems();
// }

async function order(){
    //What happens if we don't use await here?
    await orderItems(); // (✓) Valid use of await inside an async function
    distributeItems();
}

order();
