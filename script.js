const result = document.createElement("div");
const scoreDiv = document.createElement("div");
const winnerDiv = document.createElement("div");

const buttons = document.querySelectorAll("button");
const mainDiv = document.getElementById("buttonContainer");

let computerScore = 0;
let humanScore = 0;
let rounds = 0;

const getComputerChoice = () => {
  const rnd = Math.floor(Math.random() * 3);
  let choice = "";
  if (rnd === 0) {
    choice = "Rock";
  } else if (rnd === 1) {
    choice = "Paper";
  } else {
    choice = "Scissors";
  }
  return choice;
};

const getHumanChoice = () => {
  let choice = prompt("Please choose Rock, Paper or Scissors: ");
  choice = choice.toLowerCase();

  switch (choice) {
    case "rock":
      return "Rock";
    case "paper":
      return "Paper";
    case "scissors":
      return "Scissors";
    default:
      alert("Wrong Input, try again!");
      return getHumanChoice();
  }
};

const resetGame = () => {
  humanScore = 0;
  computerScore = 0;
  rounds = 0;
  mainDiv.removeChild(result);
  mainDiv.removeChild(scoreDiv);
  mainDiv.removeChild(winnerDiv);
};

const playRound = (humanChoice, computerChoice) => {
  console.log(humanChoice, computerChoice);
  if (
    (humanChoice === "Rock" && computerChoice === "Paper") ||
    (humanChoice === "Paper" && computerChoice === "Scissors") ||
    (humanChoice === "Scissors" && computerChoice === "Rock")
  ) {
    computerScore++;
    rounds++;
    result.textContent = `You loose, ${computerChoice} beats ${humanChoice}`;
    scoreDiv.textContent = `You: ${humanScore} || Computer: ${computerScore}`;
    mainDiv.appendChild(result);
    mainDiv.appendChild(scoreDiv);
  } else if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {
    humanScore++;
    rounds++;
    result.textContent = `You win, ${humanChoice} beats ${computerChoice}`;
    scoreDiv.textContent = `You: ${humanScore} || Computer: ${computerScore}`;
    mainDiv.appendChild(result);
    mainDiv.appendChild(scoreDiv);
  } else {
    result.textContent = "This one's a tie";
    scoreDiv.textContent = `You: ${humanScore} || Computer: ${computerScore}`;
    mainDiv.appendChild(result);
    mainDiv.appendChild(scoreDiv);
  }

  if (computerScore >= 5) {
    winnerDiv.textContent = "GOOD GAME, Computer won!";
    mainDiv.appendChild(winnerDiv);
    setTimeout(() => {
      resetGame();
    }, 2000);
  } else if (humanScore >= 5) {
    winnerDiv.textContent = "GOOD GAME, you won!";
    mainDiv.appendChild(winnerDiv);
    setTimeout(() => {
      resetGame();
    }, 2000);
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let compChoice = getComputerChoice();
    let humChoice = e.target.value;
    playRound(compChoice, humChoice);
  });
});
