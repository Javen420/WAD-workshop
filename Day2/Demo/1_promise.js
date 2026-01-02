new Promise((res, rej) => {}) // Promise Example

//Turning setTimeout into a Promise
setTimeout(() =>{}, 2000);

const sleep = () => new Promise((res,rej) => setTimeout(res, 2000));

sleep().then(() => console.log("2 seconds later"));