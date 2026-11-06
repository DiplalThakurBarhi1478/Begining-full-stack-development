const arr = [];

let n = prompt("Enter a number : ");

for(let i = 1; i <= n; i++){
    arr.push(i);
}

let Sum = arr.reduce((sum, currVal) =>{
    return sum + currVal;
})

console.log(Sum);
