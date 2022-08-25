const gameOption = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    const randomGameOption = gameOption[Math.floor(Math.random() * gameOption.length)]
    return randomGameOption;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        return "You tied! You both chose " + computerSelection;
    }
    else if (playerSelection.toUpperCase() === "ROCK" && computerSelection === "Scissors"){
        return "You Win! " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase() + " beats " + computerSelection;
    }
    else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "Paper"){
        return "You Win! " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase() + " beats " + computerSelection;
    }
    else if (playerSelection.toUpperCase() === "PAPER" && computerSelection === "Scissors"){
        return "You Win! " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase() + " beats " + computerSelection;
    }
    else{
        return "You Lose! " + computerSelection + " beats " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Please Choose: Rock | Paper | Scissors... ");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();
