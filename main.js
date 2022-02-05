const pcDisplay = document.querySelector(".pc__display");
const userDisplay = document.querySelector(".user__display");
const matchMsg = document.querySelector("#match-msg");
const pcScore = document.querySelector("#pc-score");
const userScore = document.querySelector("#user-score");
const pcPlay = document.querySelector("#pc-play");
const userPlay = document.querySelector("#user-play");

const rBtn = document.querySelector("#r-btn");
const pBtn = document.querySelector("#p-btn");
const sBtn = document.querySelector("#s-btn");

const plays = ["r", "p", "s"];
let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;

rBtn.addEventListener("click", () => {
  playerSelection = "r";
  playRound();
});
pBtn.addEventListener("click", () => {
  playerSelection = "p";
  playRound();
});
sBtn.addEventListener("click", () => {
  playerSelection = "s";
  playRound();
});

//computer play selection.
function computerPlay() {
  return plays[Math.floor(Math.random() * plays.length)];
}

function playRound() {
  computerSelection = computerPlay();

  //game logic.
  if (playerSelection == computerSelection) {
    matchMsg.textContent = "Tie";
    clearStyle();
    void pcDisplay.offsetWidth;
    void userDisplay.offsetWidth;
    //this trigger reflow to reset css animation properly.
    displayTie();
  } else if (
    (playerSelection == "r" && computerSelection == "p") ||
    (playerSelection == "p" && computerSelection == "s") ||
    (playerSelection == "s" && computerSelection == "r")
  ) {
    computerScore = ++computerScore;
    matchMsg.textContent = "You lose";
    clearStyle();
    void pcDisplay.offsetWidth;
    displayLose();
    score();
    game();
  } else if (
    (playerSelection == "r" && computerSelection == "s") ||
    (playerSelection == "p" && computerSelection == "r") ||
    (playerSelection == "s" && computerSelection == "p")
  ) {
    playerScore = ++playerScore;
    matchMsg.textContent = "You won";
    clearStyle();
    void userDisplay.offsetWidth;
    displayWin();
    score();
    game();
  }
}

//best of 5 points.
function game() {
  if (computerScore == 3) {
    computerScore = 0;
    playerScore = 0;
    showModal("You LOSE &#128554;");
  } else if (playerScore == 3) {
    computerScore = 0;
    playerScore = 0;
    showModal("You WIN &#128526;");
  }
}

//side functions
function score() {
  pcScore.textContent = `${computerScore}`;
  userScore.textContent = `${playerScore}`;
}

function displayStart() {
  matchMsg.textContent = "Choose your play";
  userPlay.innerHTML = "&#129312;";
  pcPlay.innerHTML = "&#129312;";
}

function displayWin() {
  if (playerSelection == "r") {
    userPlay.innerHTML = "&#9994;";
    pcPlay.innerHTML = "&#9996;";
  } else if (playerSelection == "p") {
    userPlay.innerHTML = "&#9995;";
    pcPlay.innerHTML = "&#9994;";
  } else if (playerSelection == "s") {
    userPlay.innerHTML = "&#9996;";
    pcPlay.innerHTML = "&#9995;";
  }
  userDisplay.classList.add("win-animation");
}

function displayLose() {
  if (playerSelection == "r") {
    userPlay.innerHTML = "&#9994;";
    pcPlay.innerHTML = "&#9995;";
  } else if (playerSelection == "p") {
    userPlay.innerHTML = "&#9995;";
    pcPlay.innerHTML = "&#9996;";
  } else if (playerSelection == "s") {
    userPlay.innerHTML = "&#9996;";
    pcPlay.innerHTML = "&#9994;";
  }
  pcDisplay.classList.add("win-animation");
}

function displayTie() {
  if (playerSelection == "r") {
    userPlay.innerHTML = "&#9994;";
    pcPlay.innerHTML = "&#9994;";
  } else if (playerSelection == "p") {
    userPlay.innerHTML = "&#9995;";
    pcPlay.innerHTML = "&#9995;";
  } else if (playerSelection == "s") {
    userPlay.innerHTML = "&#9996;";
    pcPlay.innerHTML = "&#9996;";
  }
  pcDisplay.classList.add("win-animation");
  userDisplay.classList.add("win-animation");
}

function clearStyle() {
  pcDisplay.classList.remove("win-animation");
  userDisplay.classList.remove("win-animation");
}

score();
displayStart();
