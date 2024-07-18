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

const playGame = (numOfRounds) => {
  let computerScore = 0;
  let humanScore = 0;
  let humanSelection;
  let computerSelection;

  const playRound = (humanChoice, computerChoice) => {
    console.log(humanChoice, computerChoice);
    if (
      (humanChoice === "Rock" && computerChoice === "Paper") ||
      (humanChoice === "Paper" && computerChoice === "Scissors") ||
      (humanChoice === "Scissors" && computerChoice === "Rock")
    ) {
      computerScore++;
      console.log(`You loose, ${computerChoice} beats ${humanChoice}`);
    } else if (
      (humanChoice === "Rock" && computerChoice === "Scissors") ||
      (humanChoice === "Paper" && computerChoice === "Rock") ||
      (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
      humanScore++;
      console.log(`You win, ${humanChoice} beats ${computerChoice}`);
    } else {
      console.log("This one's a tie");
    }
  };

  for (let i = 1; i <= numOfRounds; i++) {
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    console.log(computerScore, humanScore);
    playRound(humanSelection, computerSelection);
    console.log(computerScore, humanScore);
  }
};

const checkForRounds = () => {
  const numOfRounds = parseInt(
    prompt("How many rounds would you like to play? (Enter a digit)")
  );
  alert(`Playing ${numOfRounds} rounds of Rock, Paper, Scissors. Let's Go!`);
  playGame(numOfRounds);
};

checkForRounds();
