const canvas = document.querySelector("#board");
const scoreDisplay = document.querySelector("#score");
const ctx = canvas.getContext("2d");

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

function spawnFood(){
    let newFood;
    while(true){
        newFood ={
            x: Math.floor(Math.random() * gridSize),
            y: Math.floor(Math.random() * gridSize)
        };
        const onSnake = snake.some(seg => seg.x === newFood.x && seg.y === newFood.y);
        if(!onSnake) break;
    }

return newFood;

}


