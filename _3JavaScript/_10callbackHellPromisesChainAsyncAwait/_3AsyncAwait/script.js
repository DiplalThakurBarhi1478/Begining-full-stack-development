function getData(a){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data ", a);
            resolve("success");
        }, 2000);
    })
}

async function getDataInfo(){
    await getData(1);
    await getData(2);
    await getData(3);
}