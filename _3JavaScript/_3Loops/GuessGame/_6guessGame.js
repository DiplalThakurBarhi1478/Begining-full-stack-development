const prompt = require('prompt-sync')();

// Your loop will now work perfectly here:
let guess = 0;
do {
   guess = parseInt(prompt("Enter again : "), 10);
} while (guess !== 10);

console.log("Success! You found 10.");
