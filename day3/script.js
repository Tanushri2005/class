let userScore = 0;
let computerScore = 0;
const winningScore = 5;

const resultEl = document.getElementById("result");
const userScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");
const resetBtn = document.getElementById("reset-btn");

const buttons = {
  rock: document.getElementById("rock"),
  paper: document.getElementById("paper"),
  scissors: document.getElementById("scissors")
};

function disableButtons() {
  Object.values(buttons).forEach(btn => btn.disabled = true);
  resetBtn.style.display = "inline-block";
}

function enableButtons() {
  Object.values(buttons).forEach(btn => btn.disabled = false);
  resetBtn.style.display = "none";
}

function play(option) {
  if (userScore >= winningScore || computerScore >= winningScore) return;

  const options = ["rock", "paper", "scissors"];
  const computerOption = options[Math.floor(Math.random() * 3)];

  if (option === computerOption) {
    resultEl.innerHTML = `🤝 It's a draw! You both chose <strong>${option}</strong>.`;
  } else if (
    (option === "rock" && computerOption === "scissors") ||
    (option === "paper" && computerOption === "rock") ||
    (option === "scissors" && computerOption === "paper")
  ) {
    userScore++;
    userScoreEl.textContent = userScore;
    resultEl.innerHTML = `🎉 You win! <strong>${option}</strong> beats <strong>${computerOption}</strong>.`;
  } else {
    computerScore++;
    computerScoreEl.textContent = computerScore;
    resultEl.innerHTML = `💻 Computer wins! <strong>${computerOption}</strong> beats <strong>${option}</strong>.`;
  }

  if (userScore === winningScore) {
    resultEl.innerHTML = `🏆 <strong>You reached ${winningScore}!</strong> You win the game!`;
    disableButtons();
  } else if (computerScore === winningScore) {
    resultEl.innerHTML = `💻 <strong>Computer reached ${winningScore}!</strong> Computer wins the game!`;
    disableButtons();
  }
}

resetBtn.addEventListener("click", () => {
  userScore = 0;
  computerScore = 0;
  userScoreEl.textContent = userScore;
  computerScoreEl.textContent = computerScore;
  resultEl.textContent = "Make your move!";
  enableButtons();
});

["rock", "paper", "scissors"].forEach(opt => {
  buttons[opt].addEventListener("click", () => play(opt));
});
