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

/* 

function getData(a, getNextData){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            //console.log("data", a);
            //resolve("success");

            // failure reject("failure");

            if(getNextData){
                getNextData();
            }
        }, 6000);
    })
}

*/

// **************************************************************
// after getting promise how do we use it


