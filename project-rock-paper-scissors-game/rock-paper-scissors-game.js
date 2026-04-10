

let humanScore = 0;
let computerScore = 0;
let roundCount = 0;
const maxRounds = 5;

function getComputerChoice() {
    let randomChoice = Math.random();
    if (randomChoice < 0.33) {
        return "rock";
    } else if (randomChoice < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }    
}

// Select the elements
const buttons = document.querySelectorAll('button');
const resultsDiv = document.querySelector('#results');

// Add Listener to each button
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        // The Id of the button is our player selection! ("Rock", "Paper", "Scissors")
        const playerSelection = button.id;
        const computerSelection = getComputerChoice();

        // Play the round and get the result as a string
        const roundResult = playRound(playerSelection, computerSelection);

        // Update the results div with the round result and current scores
        resultsDiv.textContent = roundResult;

        // Increment the round count
        roundCount++;

        // Check if we've reached the max rounds
        if (roundCount >= maxRounds) {
            showFinalScore();
            // Disable buttons after the game is over
            buttons.forEach((btn) => btn.disabled = true);
            buttons.forEach((btn) => btn.style.backgroundColor = "#ccc");
        }
   });
});

    function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "it's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        humanScore++;
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        computerScore++;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function showFinalScore() {
    let message;
  if (humanScore > computerScore) {
    message = "Congratulations! You won the game!";
  } else if (humanScore < computerScore) {
    message = "Game over! The computer won.";
  } else {
    message = "The game ended in a draw.";
  }
  // Final Tally
    message += ` Final Scores - Your Score is: ${humanScore}, Computer Score is: ${computerScore}`;
    resultsDiv.textContent = message;
}