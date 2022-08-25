const gameOption = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    const randomGameOption = gameOption[Math.floor(Math.random() * gameOption.length)]
    return randomGameOption;
}

function playRound(playerSelection, computerSelection) {
    let draw = "You tied! Better luck next time";
    let lose = "You Lose! Paper beats Rock";
    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        return draw;
    }
    else{
        return lose;
    }
}

const playerSelection = "rock";
const computerSelection = getComputerSelection();
console.log(playRound(playerSelection, computerSelection));