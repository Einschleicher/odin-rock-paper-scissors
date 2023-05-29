// Calc computers choice
function getComputerChoice() {
    const randomNumber = Math.floor((Math.random() * 3) + 1);
    if (randomNumber === 1) {
        return "rock";
    }
    else if (randomNumber === 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

// Play one round of RPS and return a win or lose str
function playRound(playerSelection, computerSelection) {
    
    playerSelection = playerSelection.toLowerCase();
    
    if (playerSelection === computerSelection) {
        return `Tie! Both of you did choose ${playerSelection}`
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        userScore++;
        return "You win! Paper beats rock";
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        return "You lose! Scissors beats paper";
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        return "You lose! Paper beats rock";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        userScore++;
        return "You win! Rock beats scissors";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        userScore++;
        return "You win! Scissors beats paper";
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        return "You lose! Rock beats Scissors";
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Pick rock, paper or scissors");
        while (playerSelection !== "rock"
            && playerSelection !== "paper"
            && playerSelection !== "scissors") {
                playerSelection = prompt("Invalid text input! Please pick only rock, paper or scissors");
            }
        console.log(playRound(playerSelection, getComputerChoice()));
    }

    if (userScore > computerScore) {
        console.log("You won the game! Congratulations!");
    }
    else if (userScore < computerScore) {
        console.log("You lost the game! Better luck next time!");
    }
    else {
        console.log("It's a tie! Fair game!");
    }
}

let userScore = 0;
let computerScore = 0;
playGame();