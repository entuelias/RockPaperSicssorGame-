let humanScore = 0; 
let computerScore = 0;

function getHumanChoice() {
    const userInput = prompt("Choose Rock, Paper, or Scissors:");
    return userInput.toUpperCase(); // Makes input case-insensitive
}

function getComputerChoice() {
    const x = Math.floor(Math.random() * 3);
    if (x === 0) return "ROCK";
    else if (x === 1) return "PAPER";
    else return "SCISSORS";
}

function playRound(humanChoice, computerChoice) {
    console.log("You chose:", humanChoice);
    console.log("Computer chose:", computerChoice);

    if (humanChoice === "ROCK" && computerChoice === "SCISSORS") {
        humanScore++;
        console.log("You win! Rock beats Scissors.");
    } else if (humanChoice === "ROCK" && computerChoice === "PAPER") {
        computerScore++;
        console.log("You lose! Paper beats Rock.");
    } else if (humanChoice === "PAPER" && computerChoice === "ROCK") {
        humanScore++;
        console.log("You win! Paper beats Rock.");
    } else if (humanChoice === "SCISSORS" && computerChoice === "ROCK") {
        computerScore++;
        console.log("You lose! Rock beats Scissors.");
    } else if (humanChoice === "SCISSORS" && computerChoice === "PAPER") {
        humanScore++;
        console.log("You win! Scissors beats Paper.");
    } else if (humanChoice === "PAPER" && computerChoice === "SCISSORS") {
        computerScore++;
        console.log("You lose! Scissors beats Paper.");
    } else {
        console.log("It's a tie or invalid input. Try again.");
    }

    console.log(`Your Score: ${humanScore} | Computer Score: ${computerScore}`);
}

// Play one round
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);

// function getComputerChoice() {
//     const choices = ["Rock", "Paper", "Scissors"];
//     return choices[Math.floor(Math.random() * 3)];
//   }
  
//   console.log(getComputerChoice());
  
