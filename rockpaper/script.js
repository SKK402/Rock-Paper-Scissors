const humanScoreElement = document.getElementById("humanScore");
const computerScoreElement = document.getElementById("computerScore");
const resultText = document.getElementById("resultText");
const resetButton = document.querySelector(".reset");
const choiceButtons = document.querySelectorAll(".choice");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        resultText.textContent = `It's a tie! Both chose ${humanChoice}.`;
        return;
    }

    const humanWins =
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper");

    if (humanWins) {
        humanScore++;
        humanScoreElement.textContent = humanScore;
        resultText.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        computerScoreElement.textContent = computerScore;
        resultText.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
    }
}

choiceButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const humanChoice = button.id;
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });
});

resetButton.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    humanScoreElement.textContent = humanScore;
    computerScoreElement.textContent = computerScore;
    resultText.textContent = "Make your move!";
});
