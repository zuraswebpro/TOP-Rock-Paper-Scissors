const compChoice = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * compChoice.length);
  return compChoice[computerChoice];
}

console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
      
}