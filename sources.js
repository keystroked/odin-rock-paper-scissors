let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const gameOption = ["Rock", "Paper", "Scissors"];
    const randomGameOption = gameOption[Math.floor(Math.random() * gameOption.length)]
    return randomGameOption;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        return "You tied! You both chose " + computerSelection;
    }
    else if ((playerSelection.toUpperCase() === "ROCK" && computerSelection === "Scissors")
        || (playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "Paper")
        || (playerSelection.toUpperCase() === "PAPER" && computerSelection === "Scissors")){
        playerScore++;
        return "You Win! " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase() + " beats " + computerSelection;
    }
    else{
        computerScore++;
        return "You Lose! " + computerSelection + " beats " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Please Choose: Rock | Paper | Scissors... ");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
    if (playerScore > computerScore){
        console.log("You are the overall winner of this bo5!");
    }
    else if (playerScore === computerScore)
    {
        console.log("You tied the computer in this bo5");
    }
    else {
        console.log("You lost this bo5! Please try again...");
    }
}

game();
