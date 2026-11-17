const canvas = document.querySelector("#board");
const scoreDisplay = document.querySelector("#score");
const ctx = canvas.getContext("2d");
const modal = document.querySelector("#gameOverModal");
const finalScoreText = document.querySelector("#finalScoreText");
const foodEatenText = document.querySelector("#foodEatenText");
const playAgainBtn = document.querySelector("#playAgainBtn");
const cancelBtn = document.querySelector("#cancelBtn");

//console.log(ctx);

//Making small grid inside the canvas
const box = 20;
const gridSize = canvas.width / box; // 400/20 = 20

// -----------------------------------------------------------------
//Making snake
let snake = [{x: 10, y: 10}];
let dx = 1; // initially moving snake in the right direction
let dy = 0;

//Spreading food
let food = spawnFood();

//Changing direction
let changeDirection = false;

//changing score
let score = 0;

// -----------------------------------------------------------------

document.addEventListener("keydown", changingDirection);

// every move after certain time
const gameLoop = setInterval(update, 300);


function update(){
    changeDirection = false;

    // new head position
    const head = {
        x: snake[0].x + dx,
        y: snake[0].y + dy
    }

    if(head.x < 0 || head.x >= gridSize || 
       head.y < 0 || head.y >= gridSize ||
       snake.some(seg => seg.x === head.x && seg.y === head.y)
    ){
        clearInterval(gameLoop);
        showGameOverPopup();
        return;
    }
   
    snake.unshift(head); // Add new head


// checking if snake eats food
    if(head.x === food.x && head.y === food.y){
        score += 10;
        scoreDisplay.textContent = score;
        food = spawnFood(); 
    }else{
        snake.pop();
    }

    draw();
}

function showGameOverPopup() {
    finalScoreText.textContent = "Final Score: " + score;
    foodEatenText.textContent = "Apples Eaten: " + (score / 10);
    modal.classList.remove("hidden");
}


function draw(){
    // clear board
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    //draw food
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x * box, food.y * box, box - 2, box - 2);

    //draw snake
    snake.forEach((segment, index) =>{
        ctx.fillStyle = index === 0 ? "#76ff03" : "#4caf50";
        ctx.fillRect(segment.x * box, segment.y * box, box - 2, box - 2 );
    });
}


function spawnFood(){
    let newFood;
    while(true){
        newFood ={
            x: Math.floor(Math.random() * gridSize),
            y: Math.floor(Math.random() * gridSize)
        };
        
        let onSnake = false;

        snake.forEach(seg => {
            if(seg.x === newFood.x && seg.y === newFood.y){
                onSnake = true;
            }
        });

        if(!onSnake) break;
    }
return newFood;
}


function changingDirection(event){

    if (changeDirection) return true;

    const key = event.key;
    const goingUp = dy === -1;
    const goingDown = dy === 1;
    const goingRight = dx === 1;
    const goingLeft = dx === -1;

    if(key === "ArrowDown" && !goingUp){ dx = 0; dy = 1; changeDirection = true;};
    if(key === "ArrowUp" && !goingDown){ dx = 0; dy = -1; changeDirection = true;};
    if(key === "ArrowLeft" && !goingRight){ dx = -1; dy = 0; changeDirection = true;};
    if(key === "ArrowRight" && !goingLeft){ dx = 1; dy = 0; changeDirection = true;};

}


function resetGame() {
    snake = [{x: 10, y: 10}];
    dx = 1;
    dy = 0;
    score = 0;
    scoreDisplay.textContent = score;
    food = spawnFood();
    modal.classList.add("hidden");
    gameLoop = setInterval(update, 500);
}

// Button listeners
playAgainBtn.addEventListener("click", resetGame);

cancelBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
});


