
// printing window object and document object

console.log(window);
console.dir(window);

console.log(document);
console.dir(window);

// accessign by id

let id = document.getElementById("myId"); 
id.innerText = "I am Id";


// accessing by class

let classes = document.getElementsByClassName("myClass"); 
let idx = 1;
for(let c of classes){
    c.innerText = `I am ${idx} class`;
    idx++;
}

console.dir(classes); 


// accessing by tag

let tag = document.getElementsByTagName("div");
console.log(tag);


// accessing the children
// child property

// HTMLCollection  --> group of HTML Element with the same id, or same class, or same tagName
// since body is the single in the code so HTMLCollection is 1.


let bodyChildren = document.getElementsByTagName("body");
console.log(bodyChildren[0].firstChild);

let divChildren = document.getElementsByClassName("myClass");
console.log(divChildren[1].lastChild);

