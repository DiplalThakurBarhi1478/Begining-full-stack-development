// call back function = passing the function inside the functions
// forEach(callBack Function) = this applies to array only
// forEach(callBack Function) = takes the each element from the array and helps to do operation

const arr = [1, 2, 3, 4, 5, 6, 7];

arr.forEach((val) =>{
    console.log(val * val);
})
