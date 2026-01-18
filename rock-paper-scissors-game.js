let humanScore = 0;
let computerScore = 0;

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
    let humanChoice = prompt("Please enter your choice!");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}

console.log(getComputerChoice());
console.log(getHumanChoice());