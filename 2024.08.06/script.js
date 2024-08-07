const numbersElement = document.querySelector("#numbers");

const display = document.createElement("h3");
const minus5Button = document.createElement("button");
const minus2Button = document.createElement("button");
const minus1Button = document.createElement("button");
const plus1Button = document.createElement("button");
const plus2Button = document.createElement("button");
const plus5Button = document.createElement("button");
const resetButton = document.createElement("button");

minus5Button.textContent = "-5";
minus2Button.textContent = "-2";
minus1Button.textContent = "-";
plus1Button.textContent = "+";
plus2Button.textContent = "+2";
plus5Button.textContent = "+5";
resetButton.textContent = "Reset";

numbersElement.append(display, minus5Button, minus2Button, minus1Button, plus1Button, plus2Button, plus5Button, resetButton);

const initialCounter = 5;
let counter = initialCounter;
checkData(0);

minus5Button.addEventListener("click", () => checkData(-5));
minus2Button.addEventListener("click", () => checkData(-2));
minus1Button.addEventListener("click", () => checkData(-1));
plus1Button.addEventListener("click", () => checkData(1));
plus2Button.addEventListener("click", () => checkData(2));
plus5Button.addEventListener("click", () => checkData(5));

resetButton.addEventListener("click", () => {
  counter = initialCounter;
  checkData(0);
});

function checkData(num) {
  counter = counter + num;

  display.textContent = counter;
  setColor();
  checkCounter();
}

function checkCounter() {
  if (counter <= 1) {
    minus1Button.setAttribute("disabled", true);
  } else {
    minus1Button.removeAttribute("disabled");
  }

  if (counter <= 2) {
    minus2Button.setAttribute("disabled", true);
  } else {
    minus2Button.removeAttribute("disabled");
  }

  if (counter <= 5) {
    minus5Button.setAttribute("disabled", true);
  } else {
    minus5Button.removeAttribute("disabled");
  }

  if (counter > 5) {
    plus5Button.setAttribute("disabled", true);
  } else {
    plus5Button.removeAttribute("disabled");
  }

  if (counter > 8) {
    plus2Button.setAttribute("disabled", true);
  } else {
    plus2Button.removeAttribute("disabled");
  }

  if (counter > 9) {
    plus1Button.setAttribute("disabled", true);
  } else {
    plus1Button.removeAttribute("disabled");
  }
}

function setColor() {
  if (counter < 5) {
    display.style.color = "red";
  } else if (counter < 7) {
    display.style.color = "blue";
  } else {
    display.style.color = "green";
  }
}

// 13. Sukurti input elementą (number tipo) ir jame įrašytą skaičių pridėti kaip h3 elemento tekstą.

// const inputElement = document.createElement("input");
// inputElement.type = "number";
// inputElement.addEventListener("input", () => {
//   const value = inputElement.value;
//   display.textContent = value;

//   let color;
//   if (value < 5) {
//     color = "red";
//   } else if (value < 7) {
//     color = "blue";
//   } else {
//     color = "green";
//   }

//   display.style.color = color;
// });
// numbersElement.append(inputElement);

// // 14. Sukurti naują elementą (h4) ir jį pridėti į „numbers" elemento pabaigą.

// const h4Element = document.createElement("h4");

// // 14.1. Šio elemento tekstas turėtų būti „Balai:"

// h4Element.textContent = "Balai:";

// // 15. Sukurti naują elementą (ul) ir jį pridėti į „numbers" elemento pabaigą.

// const ulElement = document.createElement("ul");
// numbersElement.append(ulElement);

// // 15.1. Sukurti naują mygtuką, kurio teksta būtų „Įrašyti balą".

// const addScoreButton = document.createElement("button");
// addScoreButton.textContent = "Įrašyti balą";
// numbersElement.append(addScoreButton);

// // 15.2. Paspaudus šį mygtuką, reikia paimti reikšmę iš h3 elemento ir sukurti naują li elementą bei jį prepend'inti prie ul elemento.

// addScoreButton.addEventListener("click", () => {
//   const liElement = document.createElement("li");
//   liElement.textContent = display.textContent;
//   liElement.style.color = display.style.color;

//   const deleteButton = document.createElement("button");
//   deleteButton.textContent = "Ištrinti";
//   liElement.append(deleteButton);

//   deleteButton.addEventListener("click", () => {
//     liElement.remove();
//   });

//   ulElement.prepend(liElement);
// });

// // 16. Į li elementą įrašytas balas turi būti tos pačios spalvos kaip ir h3 elemente.

// // 17.1. Sukurti mygtuką ir jį įdėti į li elementą.

// // 17.2. Paspaudus šį mygtuką, li elementas su balu turi būti ištrintas.

// // 18. Po h4 elementu pridėti mygtuką, kurio tekstas būtų „Ištrinti visus balus". Paspaudus šį mygtuką, ištrinami visi li elementai.

// function deleleteAllScores() {
//   ulElement.innerHTML = "";
// }

// const deleteAllButton = document.createElement("button");
// deleteAllButton.textContent = "Ištrinti visus balus";
// numbersElement.append(deleteAllButton);

// deleteAllButton.addEventListener("click", deleleteAllScores);

// REFACTORED CODE

// sukuria input elementa

function createInputElement() {
  const inputElement = document.createElement("input");
  inputElement.type = "number";
  inputElement.addEventListener("input", () => {
    const value = inputElement.value;
    display.textContent = value;

    let color;
    if (value < 5) {
      color = "red";
    } else if (value < 7) {
      color = "blue";
    } else {
      color = "green";
    }

    display.style.color = color;
  });
  numbersElement.append(inputElement);
}

// sukuria h4 su tekstu balai

function createH4Element() {
  const h4Element = document.createElement("h4");
  h4Element.textContent = "Balai:";
  numbersElement.append(h4Element);
}

// sukuria ul elementa

function createUlElement() {
  const ulElement = document.createElement("ul");
  numbersElement.append(ulElement);
  return ulElement;
}

// sukuria mygtuka

function createButton(text, onClick) {
  const button = document.createElement("button");
  button.textContent = text;
  button.addEventListener("click", onClick);
  return button;
}

// prideda score

function addScore() {
  const liElement = document.createElement("li");
  liElement.textContent = display.textContent;
  liElement.style.color = display.style.color;

  const deleteButton = createButton("Ištrinti", () => {
    liElement.remove();
  });
  liElement.append(deleteButton);
  ulElement.prepend(liElement);
}

// istrina visus score

function deletelAllScores() {
  ulElement.innerHtml = "";
}

createInputElement();
createH4Element();

const ulElement = createUlElement();
const addScoreButton = createButton("Įrašyti balą", addScore);
numbersElement.append(addScoreButton);

const deleteAllButton = createButton("Ištrinti visus balus", deletelAllScores);
numbersElement.append(deleteAllButton);
