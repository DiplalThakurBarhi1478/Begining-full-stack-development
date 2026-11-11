// promises means either we will (resolve it) or (reject it)
// promise is an object in javascript
// three state : a) pending b) resolved c) rejected

/* 

let promise = new Promise((resolve, reject) => {
    console.log("I am a Promise.");
    resolve()
})

*/

// normally we only handle promises we do not create it.
// Basic use of promise
// Basically this is done by other person
//***************************************************************



function getData(a){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data ", a);
            resolve("Success");
        }, 3000);
    });
}

// Promise Chaining

getData(1).then((res) =>{
    return getData(2);
}).then((res) => {
    return getData(3);
}).then((res) => {
    console.log(res);
});


