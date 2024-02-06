const compChoice = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * compChoice.length);
  return compChoice[computerChoice];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "It's a tie! Play again!";
  } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
    return "Player Wins!";
  } else if (playerSelection == "Paper" && computerSelection == "Rock") {
    return "Player Wins!";
  } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    return "Player Wins!";
  } else {
    return "Computer Wins!";
  }
}
const playerSelection = prompt("What is your choice?").toLowerCase();
const computerSelection = getComputerChoice().toLowerCase();

function playGame() {
  return playRound(playerSelection, computerSelection);
}
console.log(playGame());
console.log(playGame());
console.log(playGame());
console.log(playGame());
console.log(playGame());
