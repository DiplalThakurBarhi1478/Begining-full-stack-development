function getData(a, getNextData){
    setTimeout(() => {
        console.log(a);
        if(getNextData){
            getNextData(); // this calls the function again if wantt to print again
        }
    }, 1000);
}

getData(1, () => {
    getData(2, () => {
        getData(3, () => {
            getData(4);
        });
    });
});  

// this is just passing the function not calling it
