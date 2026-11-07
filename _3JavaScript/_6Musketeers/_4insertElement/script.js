let myClass = document.querySelector(".myClass"); // accessing the div
// styling myClass div

myClass.style.backgroundColor = "blue";
myClass.style.height = "100px";

let el = document.createElement("div"); // creating a new div element
// styling the div first
el.style.backgroundColor = "yellow";
el.style.height = "100px";
el.style.width = "100px";

// adding div to first div
myClass.after(el);



