# odin-rock-paper-scissors

Game will be played against the computer 
RPS will be managed through the console for now

CREATE getComputerChoice function that will randomly return rock, paper, or scissors. Function will choose the computer's choice for the game. 
Test using the console to make sure it returns a random selection

CREATE function to play a single round of Rock Paper Scissors. gameRound (playerSelection, computerSelection);
Function should return a string to console declaring the winner of the round. 
EX: You Lose! Paper beats Rock, You Win! Rock beats Scissors

player selection should be case-insensitive. (Take input RoCk, rock, ROCK).
return results of function call not console.log 

CREATE function called game() that runs gameRound 5 times and keeps track of the score and display the results of each round and the overall winner.
USE prompt() to get input from the user. 

Changelog: 

V1:
I think the code could have been simplified better, might revisit and create a helper function to pull some of the user input options out and fix the repetitive calling of capitalizing the first letter of user input and combining it with the other spliced lower characters to create "Rock" "Paper" and "Scissors" strings.
~ 90 minutes from start to finish.
Excited to add the GUI in the future and improve functionality. 