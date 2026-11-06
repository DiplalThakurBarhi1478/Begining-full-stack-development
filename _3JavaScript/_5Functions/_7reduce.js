// arr.reduce(callBackFunction) = do some operation and return single value

const arr = [1, 2, 3, 4, 5, 6, 7];


let sumTotal = arr.reduce((sum, currVal) =>{
    return sum + currVal;
})

console.log(sumTotal);