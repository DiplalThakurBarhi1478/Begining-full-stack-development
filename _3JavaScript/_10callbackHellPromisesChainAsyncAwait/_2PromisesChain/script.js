const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am a promise");
         resolve("success");
        //reject("failure");
    });
};


let promise = getPromise();


promise.then((res) => {
    console.log("Promise is fulfilled,", res);
});


promise.catch((err) => {
    console.log("Promise failed,", err);
})