
const buttons = document.querySelectorAll(".btn");
const signs = document.querySelectorAll(".sign");
const resultContainer = document.querySelector("#resContainer");
const deleteBtn = document.querySelector("#delete");

let firstNumber = "";
let secondNumber = "";
let operator = "";
let number = "";

// 1. Number buttons
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        let value = btn.innerText;

        // Equals button
        if (value === "=") {
            if (firstNumber === "" || operator === "" || number === "") {
                return;
            }

            secondNumber = number;

            let result;

            switch (operator) {
                case "+":
                    result = Number(firstNumber) + Number(secondNumber);
                    break;

                case "-":
                    result = Number(firstNumber) - Number(secondNumber);
                    break;

                case "*":
                    result = Number(firstNumber) * Number(secondNumber);
                    break;

                case "/":
                    result = Number(firstNumber) / Number(secondNumber);
                    break;
            }

            resultContainer.innerText = result;

            // Prepare for another calculation
            number = String(result);
            firstNumber = "";
            secondNumber = "";
            operator = "";

            return;
        }

        // Prevent multiple decimal points
        if (value === "." && number.includes(".")) {
            return;
        }

        number += value;
        resultContainer.innerText = number;
    });
});

// 2. Operator buttons
signs.forEach((sign) => {
    sign.addEventListener("click", () => {

        if (number === "") return;

        firstNumber = number;
        operator = sign.innerText;

        number = "";

        console.log(firstNumber, operator);
    });
});

// 3. Delete button
deleteBtn.addEventListener("click", () => {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    number = "";

    resultContainer.innerText = "";
});
