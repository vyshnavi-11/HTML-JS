const prompt = require('prompt-sync')(); 
const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;

const divide = (num1, num2) => {

    if (num2 !== 0) {
        return num1 / num2;
    } else {
        return "Error: Division by zero!";
    }
};

const calculator = (operation, num1, num2) => {
    switch (operation) {
        case 1:
            return add(num1, num2); 
        case 2:
            return subtract(num1, num2); 
        case 3:
            return multiply(num1, num2); 
        case 4:
            return divide(num1, num2); 
        default:
            return "Invalid operation";
    }
};

const num1 = parseInt(prompt("Enter the first number: "));
const num2 = parseInt(prompt("Enter the second number: "));
console.log("Choose operation:");
console.log("1. Addition");
console.log("2. Subtraction");
console.log("3. Multiplication");
console.log("4. Division");
const operation = parseInt(prompt("Enter your operation:")); 

console.log(calculator(operation, num1, num2));


