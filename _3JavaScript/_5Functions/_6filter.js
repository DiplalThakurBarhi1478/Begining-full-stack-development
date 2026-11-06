// arr.filter(callBack Function) = create a new array of filtered parts
// arr.filter(callBack FUnction) = return only those values which satisfies.

const arr = [ 1, 2, 3, 4, 5, 6, 7];

let newArr = arr.filter((val) =>{
    return val % 2 === 0;
})

console.log(newArr);