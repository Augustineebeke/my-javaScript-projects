

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

function getHumanChoice() {
    let humanChoice = prompt("Please enter your choice! Chose Rock, Paper, or Scissors to play the game");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("it's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
    } else {
        computerScore++;
        console.log(`You Lose ${computerChoice} beats ${humanChoice}`);
    }
}

// 3. Round 1
  const humanSelection1 = getHumanChoice();
  const computerSelection1 = getComputerChoice();
  playRound(humanSelection1, computerSelection1);

  // 3. Round 2
  const humanSelection2 = getHumanChoice();
  const computerSelection2 = getComputerChoice();
  playRound(humanSelection2, computerSelection2);

  // 3. Round 3
  const humanSelection3 = getHumanChoice();
  const computerSelection3 = getComputerChoice();
  playRound(humanSelection3, computerSelection3);

  // 3. Round 4
  const humanSelection4 = getHumanChoice();
  const computerSelection4 = getComputerChoice();
  playRound(humanSelection4, computerSelection4);

  // 3. Round 5
  const humanSelection5 = getHumanChoice();
  const computerSelection5 = getComputerChoice();
  playRound(humanSelection5, computerSelection5);

  if (humanScore > computerScore) {
    console.log("Congratulations! You won the game!");
  } else if (humanScore < computerScore) {
    console.log("Game over! The computer won.");
  } else {
    console.log("The game ended in a draw.");
  }
  // Final Tally
    console.log("Final Scores - Your Score is:" + humanScore + " Computer score is:" + computerScore);
}
playGame();
