const randomNumber = Math.floor(Math.random() * 100) + 1;
let guess;

do {
    guess = parseInt(prompt("Guess a number between 1 and 100:"));

    if (guess > randomNumber) {
        console.log("Too high! Guess again.");
    } else if (guess < randomNumber) {
        console.log("Too low! Guess again.");
    }
} while (guess !== randomNumber);

console.log("Congratulations! You guessed the number correctly.");
