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

function playRound(playerSelection, computerSelection) {
    
    playerSelection = playerSelection.toLowerCase();
    
    if (playerSelection === computerSelection) {
        return `Tie! Both of you did choose ${playerSelection}`
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats rock";
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beats paper";
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats rock";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats scissors";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beats paper";
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats Scissors";
    }
}

// Code testing
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));