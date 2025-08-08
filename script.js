let humanScore = 0;
let computerScore = 0;

function getHumanChoice(){
    const userInput = prompt("Choose Rock, Paper, or Scissors:")
    return userInput.toUpperCase()
}


function getComputerchoice() {
    const x = Math.floor(Math.random() * 3)
    if (x==0) return "ROCK";
    else if (x == 1) return "PAPER"
    else return "SCISSORS"
}


function playRound(humanChoice, computerChoice) {
    console.log("you choose;",humanChoice )
    console.log("Computer chose;",computerChoice)

  }
  
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerchoice();
  
  playRound(humanSelection, computerSelection);
  

// function getComputerChoice() {
//     const choices = ["Rock", "Paper", "Scissors"];
//     return choices[Math.floor(Math.random() * 3)];
//   }
  
//   console.log(getComputerChoice());
  
