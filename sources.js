const gameOption = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    const randomGameOption = gameOption[Math.floor(Math.random() * gameOption.length)]
    return randomGameOption;
}

function playRound(playerSelection, computerSelection) {
    let draw = "You tied! You both chose " + computerSelection;
    let lose = "You Lose! " + computerSelection + " beats " + playerSelection;
    let win = "You Win! " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase() + " beats " + computerSelection;
    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        return draw;
    }
    else if (playerSelection.toUpperCase() === "ROCK" && computerSelection === "Scissors"){
        return win;
    }
    else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "Paper"){
        return win;
    }
    else if (playerSelection.toUpperCase() === "PAPER" && computerSelection === "Scissors"){
        return win;
    }
    else{
        return lose;
    }
}

function game() {
    for (let i = 0; i < 5; i++)
    {
        let playerSelection = prompt("Please Choose: Rock | Paper | Scissors... ");
        const computerSelection = getComputerChoice();
        return console.log(playRound(playerSelection, computerSelection));
    }
}

game();
