// IIFE : Immediately Invoked Function Expression

console.log("first type : ");
(function sum(){
    console.log("The sum is: ", 2 + 3);
})();

console.log("Second type :" );
(() => {
    console.log("The sum is : ", 3 + 5);
})();


console.log("Third type : ");
function getData(a){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(a);
            resolve("success");
        }, 2000);
    })
};

(async function getDataInfo(){
    await getData(1);
    await getData(2);
    await getData(3);
})();