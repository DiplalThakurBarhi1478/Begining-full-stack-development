let us = 0;
let cs = 0;

const Choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScore = document.querySelector("#user-score");
const compScore = document.querySelector("#comp-score");
const resetBtn = document.querySelector("#reset");

// step 3: we have to find the random computer choice so we create array of choice then use Math function to get the index

const genCompChoice = () => {
    let options = ["stone", "paper", "scissors"];
    const index = Math.floor(Math.random() * 3);
    return options[index];
}


const drawGame = () => {
    msg.innerText = "Game was draw.";
    msg.style.backgroundColor = "yellow";
    msg.style.color = "blue";
}



// step 4: this will update the innerText of the tag ont the html DOM page.
const showWin = (userWin, userChoice, compChoice) => {
    if(userWin){
        msg.innerText = `Your ${userChoice} beats computer's ${compChoice} `;
        msg.style.backgroundColor = "green";
        msg.style.color = "white";
        us++;
        userScore.innerText = us;

    }else{
        msg.innerText = `Computer's ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        msg.style.color = "white";
        cs++;
        compScore.innerText = cs;
    }
}

const playGame = (userChoice) => {
    // we got the user choice next we want computer choice show call the compChoice function
    console.log("user choice : ", userChoice);

    // calling the compChoice function afterward we will compare the choices 
    const compChoice = genCompChoice();

    // after getting the computer choice we will check in conditions
    console.log("comp choice : ", compChoice);


    // checking games who wins
    if(userChoice === compChoice){
        // draw function will be called if the condition is met
        drawGame(); 
    }// else we will have other conditions
    else{
        let userWin = true;
        if(userChoice === "stone"){
            userWin = compChoice === "paper" ? false : true; 
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else{
            userWin = compChoice === "stone" ? false : true;
        }

        // after knowing the result we will call the showwinner function 
        showWin(userWin, userChoice, compChoice);
    }
}


// step 1: we should get all choices and when any choice is clicked then we should the id attribute
Choices.forEach((choice) =>{             
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        
        // step 2: calling the playgame function to play game
        playGame(userChoice) 
    })
})


resetBtn.addEventListener("click", () =>{
    us = 0;
    cs = 0;
    userScore.innerText = us;
    compScore.innerText = cs;

    msg.innerText = "Play Your Move";
    msg.style.backgroundColor = "black";
    msg.style.color = "white";
})