console.log("Synchronous");
console.log("1");
console.log("2");
console.log("3");
console.log("4");


console.log("Asynchronous");
console.log("1");
console.log("2");

// using callback method: passing a function and time to take
setTimeout(() => {
    console.log("3");
}, 4000);

console.log("4");