// Array Methods
// arr.map(callBack Functions) = create a new array with some results
// arr.map(callBackFnx(value, index, array))
// arr.map(callBack Functions) = it prints all those values which satisfies or not.

let arr = [1, 2, 3, 4, 5, 6];

let newArr = arr.map((val) => {
    if(val % 2 === 0){
        return val;
    }
})

console.log(newArr);