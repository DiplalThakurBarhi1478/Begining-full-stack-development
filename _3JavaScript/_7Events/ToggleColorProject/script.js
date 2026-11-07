// using javascript accessing and changing the html and css

let btn = document.querySelector("button");
let body = document.querySelector("body");

/* 
btn.addEventListener("click", () => {
    if(body.style.backgroundColor === "white"){
        body.style.backgroundColor = "black";
    }
    else{
        body.style.backgroundColor = "white";
    }

}) */


// using javascript to use class of html and CSS
let currMode = "white";

btn.addEventListener("click", () => {

    if(currMode === "white"){
        currMode = "black";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        currMode = "white";
        body.classList.add("light");
        body.classList.remove("dark");
    }

    console.log(currMode);
})