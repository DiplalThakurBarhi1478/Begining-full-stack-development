function countVowels(str){  // defining the function
    let count = 0;
    for(let c of str){      // looping into the string
        if(c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u'){
            count++;
        }
    }
    return count;
}

const totalVowels = countVowels("diplal"); // callling the function
console.log(totalVowels);  // printing the function

// -----------------------------------------------------------------------------
// using arrow function
let countVow = (str) =>{
    let count = 0;
    for(let c of str){      // looping into the string
        if(c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u'){
            count++;
        }
    }
    return count;
}

console.log(countVow("diplal"));