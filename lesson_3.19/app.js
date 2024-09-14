const kompiyuter = document.getElementById("komp");
const you = document.getElementById("you");
const select = document.querySelector("select");


let elWin = document.getElementById("win")
const gameArr = ["fa-scissors", "fa-hand-back-fist", "fa-hand"];

function randomChois() {
  const randomIndex = Math.floor(Math.random() * gameArr.length);
  return gameArr[randomIndex];
}

function winner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "Durrang!";
  }

  if (
    (playerChoice === "fa-scissors" && computerChoice === "fa-hand") ||
    (playerChoice === "fa-hand-back-fist" && computerChoice === "fa-scissors") ||
    (playerChoice === "fa-hand" && computerChoice === "fa-hand-back-fist")
  ) {
    return "Siz yutdingiz!";
  } else {
    return "Kompyuter yutdi!";
  }
}

function resetGame() {
  select.value = ""; 
  you.innerHTML = ""; 
  kompiyuter.innerHTML = "";
  resultDisplay.textContent = ""; 
  elWin.classList.remove("win"); 
  elWin.textContent = "";
}



select.addEventListener("input", (e) => {
  const playerChoice = e.target.value;
  const computerChoice = randomChois();

  you.innerHTML = `<i class="fa-solid ${playerChoice}"></i>`;
  kompiyuter.innerHTML = `<i class="fa-solid ${computerChoice}"></i>`;

  const result = winner(playerChoice, computerChoice);

  elWin.classList.add("win")
  elWin.textContent = result


  setTimeout(() => {
    elWin.classList.remove("win");
    elWin.textContent = "";
  }, 2000);

  setTimeout(resetGame, 2000);

});
