// document.querySelector("button").addEventListener("click", () => alert("John"));

// document.querySelector("button").addEventListener("click", () => {
//   document.querySelector("p").textContent = "Tekstas apie mane";
// });

const h1 = document.createElement("h1");
h1.id = "number";
h1.textContent = "0";

const button = document.createElement("button");
button.id = "increamentButton";
button.textContent = "Padidinti";

document.body.appendChild(h1);
document.body.appendChild(button);

button.addEventListener("click", () => {
  let currentNumber = parseInt(h1.textContent);
  h1.textContent = currentNumber + 1;
  button.style.backgroundColor = "red";
  button.style.color = "white";
  button.style.fontSize = "20px";
  button.style.border = "none";
  button.style.padding = "10px";
  button.style.borderRadius = "5px";
  button.style.margin = "10px";
  button.style.cursor = "pointer";
  button.style.display = "block";
  button.style.margin = "auto";
  button.style.marginTop = "20px";
  button.style.textAlign = "center";
  button.style.textDecoration = "none";
  button.style.textTransform = "uppercase";
  button.style.fontWeight = "bold";
  button.style.fontFamily = "Arial";
  button.style.letterSpacing = "1px";
  button.style.transition = "all 0.5s";
  button.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
  button.style.outline = "none";
  button.style.border = "none";
  button.style.borderRadius = "5px";
  button.style.backgroundColor = "blue";

  h1.style.fontSize = "50px";
  h1.style.textAlign = "center";
  h1.style.margin = "20px";
  h1.style.fontFamily = "Arial";
  h1.style.fontWeight = "bold";
  h1.style.letterSpacing = "1px";
});

// document.querySelector("p").addEventListener("copy", () => {
//   event.preventDefault();
//   alert("You are not allowed to copy this text");
// });

document.addEventListener("DOMContentLoaded", () => {
  const gameBoard = document.getElementById("game-board");
  const movesElement = document.getElementById("moves");
  const timerElement = document.getElementById("timer");
  let moves = 0;
  let timer = 0;
  let revealedCards = [];
  let matchedCards = 0;
  let interval;
  const symbols = ["❤️", "🌟", "🍀", "🌙", "🍄", "❤️", "🌟", "🍀", "🌙", "🍄"];

  function startGame() {
    moves = 0;
    timer = 0;
    revealedCards = [];
    matchedCards = 0;
    movesElement.textContent = moves;
    timerElement.textContent = timer;
    clearInterval(interval); // stop the timer
    interval = setInterval(() => {
      timer++;
      timerElement.textContent = timer;
    }, 1000);
    gameBoard.innerHTML = "";
    const shuffledSymbols = symbols.sort(() => 0.5 - Math.random());
    shuffledSymbols.forEach((symbol) => {
      const card = createCard(symbol);
      gameBoard.appendChild(card);
    });
  }

  function createCard(symbol) {
    const card = document.createElement("div");
    card.classList.add("card", "hidden");
    card.dataset.symbol = symbol;
    card.addEventListener("click", onCardClick);
    return card;
  }

  function onCardClick(event) {
    const card = event.target;
    if (card.classList.contains("revealed") || card.classList.contains("matched") || revealedCards.length === 2) {
      return;
    }
    revealCard(card);
    revealedCards.push(card);
    if (revealedCards.length === 2) {
      moves++;
      movesElement.textContent = moves;
      checkMatch();
    }
  }

  function revealCard(card) {
    card.classList.remove("hidden");
    card.classList.add("revealed");
    card.textContent = card.dataset.symbol;
  }

  function hideCard(card) {
    card.classList.remove("revealed");
    card.classList.add("hidden");
    card.textContent = "";
  }

  function checkMatch() {
    const [card1, card2] = revealedCards;
    if (card1.dataset.symbol === card2.dataset.symbol) {
      card1.classList.add("matched");
      card2.classList.add("matched");
      matchedCards += 2;
      if (matchedCards === symbols.length) {
        clearInterval(interval);
        alert(`Game over! Moves: ${moves}, Time: ${timer} s`);
      }
    } else {
      setTimeout(() => {
        hideCard(card1);
        hideCard(card2);
      }, 1000);
    }
    revealedCards = [];
  }

  startGame();
});
