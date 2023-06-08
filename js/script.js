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

// Old function to play 5 rounds, not in use in the current version
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

// Check if player or computer has 5 points, then print a winner and disable buttons
function checkWinner() {
    if (userScore === 5) {
        finish.textContent = "You won the game! Congratulations! Press F5 to play again.";
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }
    else if (computerScore === 5) {
        finish.textContent = "You lost the game! Better luck next time! Press F5 to play again.";
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }
}

// Initialize scores
let userScore = 0;
let computerScore = 0;

// Initialize buttons
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

// Initialize text field "round result"
const result = document.querySelector("#result");

// Initialize text fields scores
const userScoreElement = document.querySelector("#player_score");
const computerScoreElement = document.querySelector("#computer_score");

// Add event listeners for button clicking
rock.addEventListener('click', function() {
    result.textContent = playRound('rock', getComputerChoice());
    userScoreElement.textContent = `Player: ${userScore}`;
    computerScoreElement.textContent = `Computer: ${computerScore}`;
    checkWinner();
});

paper.addEventListener('click', function() {
    result.textContent = playRound('paper', getComputerChoice());
    userScoreElement.textContent = `Player: ${userScore}`;
    computerScoreElement.textContent = `Computer: ${computerScore}`;
    checkWinner();
});

scissors.addEventListener('click', function() {
    result.textContent = playRound('scissors', getComputerChoice());
    userScoreElement.textContent = `Player: ${userScore}`;
    computerScoreElement.textContent = `Computer: ${computerScore}`;
    checkWinner();
});