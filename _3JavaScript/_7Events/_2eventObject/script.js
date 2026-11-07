let myId = document.querySelector("#btn");

console.log(myId);

myId.onclick = (e) => {
    console.log(e.type);
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.innerText);
}