const arr = [92, 67, 93, 87, 86];

// using forEach()

/*
arr.forEach((val) =>{
    if(val > 90){
        console.log(val);
    }
})

*/

// using filter()

let newArr = arr.filter((val) =>{
    return val > 90;
})

console.log(newArr);