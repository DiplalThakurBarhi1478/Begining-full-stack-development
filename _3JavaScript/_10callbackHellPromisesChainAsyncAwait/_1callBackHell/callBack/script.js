/* function sum(a, b){
    console.log("The sum is : ", a + b);
}

function calculator(a, b, sumCallBack){
    sumCallBack(a, b);
}

calculator(1, 2, sum);
 */
// in the function named calculator, we pass two numbers and a function, 
// then inside it, that two numbers inside the function named sum and print the sum of them.

// making myown

function bulb1(){
    console.log("Bulb1 is On");
}

function bulb2(){
    console.log("Bulb2 is On")
}

function turnOnAllBulbs(bulbOne, bulbTwo){
    bulbOne();
    bulbTwo();
}

turnOnAllBulbs(bulb1, bulb2)  // pass function without parenthesis

// here are passing function inside the function
// this is an example of the function callback

