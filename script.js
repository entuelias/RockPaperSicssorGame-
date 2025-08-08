function playGame(){
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

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "ROCK" && computerChoice === "SCISSORS") ||
        (humanChoice === "PAPER" && computerChoice === "ROCK") ||
        (humanChoice === "SCISSORS" && computerChoice === "PAPER")
    ) {
        humanScore++;
        console.log("You win this round!");
    } else {
        computerScore++;
        console.log("You lose this round!");
    }
    
}

for (let i=1 ; i<=5; i++){
console.log(`\n--- Round ${i} ---`);
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);

}
console.log(`\nFinal Score: You ${humanScore} - Computer ${computerScore}`);
if (humanScore > computerScore) {
    console.log("🎉 YOU WIN THE GAME!");
} else if (computerScore > humanScore) {
    console.log("😢 COMPUTER WINS THE GAME!");
} else {
    console.log("🤝 IT'S A TIE GAME!");
}
}
playGame()
// function getComputerChoice() {
//     const choices = ["Rock", "Paper", "Scissors"];
//     return choices[Math.floor(Math.random() * 3)];
//   }
  
//   console.log(getComputerChoice());
  
