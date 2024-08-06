// Užduotis:
// 1. Sukurti HTML elementą, kurio id „numbers"
// 2. JavaScript pagalba šio elemento viduje sukurti: h3 elementą ir du mygtukų elementus
// 3. h3 elemento tekstas turėtų būti „5"
// 4. Mygtukų tekstas turėtų būti „+" ir „-"
// 5. Sukurti „click" (paspaudimo) event listener'ius abiems mygtukams.
// 6. „-" mygtuko event listeneris turėtų iškviesti funkciją, kuri sumažina skaičių h3 elemente, o „+" mygtuko paspaudimas turėtų skaičių padidinti

// 7. Jeigu skaitmuo h3 komponente yra mažesnis už du, tai „-" mygtukas turėtų patapti neveiksnus (disabled)- element.setAttribute('disabled', true) / element.removeAttribute('disabled')
// 8. Jeigu skaitmuo h3 komponente yra didesnis už 9, tai „+" mygtukas turėtų patapti neveiksnus (disabled)

// 9. Jeigu skaitmuo yra 5 arba daugiau, tai jo spalva turėtų būti žalia. Kitu atveju - raudona.

// 10. Sukurti naują mygtuką „Reset". Jį paspaudus viskas atstatoma į pradinę padėtį.

// 11. Sukurti du naujus mygtukus, kurie:
// 11.1. Prideda dvejetą prie esamos h3 elemento reikšmės.
// 11.2. Atima dvejetą iš esamos h3 elemento reikšmės.

// 12. Sukurti du naujus mygtukus, kurie:
// 12.1. Prideda 5 prie esamos h3 elemento reikšmės.
// 12.2. Atima 5 iš esamos h3 elemento reikšmės..

// const numbersElement = document.querySelector("#numbers");

// const display = document.createElement("h3");
// const minus1Button = document.createElement("button");
// const plus1Button = document.createElement("button");

// display.textContent = "5";
// minus1Button.textContent = "-";
// plus1Button.textContent = "+";

// numbersElement.append(display, minus1Button, plus1Button);

// 5. Sukurti „click" (paspaudimo) event listener'ius abiems mygtukams.

// minus1Button.addEventListener("click", () => {
//   console.log("minus1Button clicked");
// });

// plus1Button.addEventListener("click", () => {
//   console.log("plus1Button clicked");
// });

// 6. „-" mygtuko event listeneris turėtų iškviesti funkciją, kuri sumažina skaičių h3 elemente, o „+" mygtuko paspaudimas turėtų skaičių padidinti

// minus1Button.addEventListener("click", () => {
//   const number = parseInt(display.textContent);
//   display.textContent = number - 1;
// });

// plus1Button.addEventListener("click", () => {
//   const number = parseInt(display.textContent);
//   display.textContent = number + 1;
// });

// 7. Jeigu skaitmuo h3 komponente yra mažesnis už du, tai „-" mygtukas turėtų patapti neveiksnus (disabled)- element.setAttribute('disabled', true) / element.removeAttribute('disabled')

// minus1Button.addEventListener("click", () => {
//   const number = parseInt(display.textContent);
//   display.textContent = number - 1;
//   if (number - 1 < 2) {
//     minus1Button.setAttribute("disabled", true);
//   }
// });

// // 8. Jeigu skaitmuo h3 komponente yra didesnis už 9, tai „+" mygtukas turėtų patapti neveiksnus (disabled)

// plus1Button.addEventListener("click", () => {
//   const number = parseInt(display.textContent);
//   display.textContent = number + 1;
//   if (number + 1 > 9) {
//     plus1Button.setAttribute("disabled", true);
//   }
// });

// 9. Jeigu skaitmuo yra 5 arba daugiau, tai jo spalva turėtų būti žalia. Kitu atveju - raudona.

// minus1Button.addEventListener("click", () => {
//   const number = parseInt(display.textContent);
//   display.textContent = number - 1;
//   if (number - 1 < 2) {
//     minus1Button.setAttribute("disabled", true);
//   }
//   if (number - 1 >= 5) {
//     display.style.color = "green";
//   } else {
//     display.style.color = "red";
//   }
// });

// plus1Button.addEventListener("click", () => {
//   const number = parseInt(display.textContent);
//   display.textContent = number + 1;
//   if (number + 1 > 9) {
//     plus1Button.setAttribute("disabled", true);
//   }
//   if (number + 1 >= 5) {
//     display.style.color = "green";
//   } else {
//     display.style.color = "red";
//   }
// });

// // 10. Sukurti naują mygtuką „Reset". Jį paspaudus viskas atstatoma į pradinę padėtį.

// const resetButton = document.createElement("button");
// resetButton.textContent = "Reset";
// numbersElement.append(resetButton);

// resetButton.addEventListener("click", () => {
//   display.textContent = "5";
//   display.style.color = "black";
//   minus1Button.removeAttribute("disabled");
//   plus1Button.removeAttribute("disabled");
// });

// // 11. Sukurti du naujus mygtukus, kurie:
// // 11.1. Prideda dvejetą prie esamos h3 elemento reikšmės.

// const plus2Button = document.createElement("button");
// plus2Button.textContent = "+2";
// numbersElement.append(plus2Button);

// plus2Button.addEventListener("click", () => {
//   const number = parseInt(display.textContent);
//   display.textContent = number + 2;
//   if (number + 2 > 9) {
//     plus1Button.setAttribute("disabled", true);
//   }
//   if (number + 2 >= 5) {
//     display.style.color = "green";
//   } else {
//     display.style.color = "red";
//   }
// });

// // 11.2. Atima dvejetą iš esamos h3 elemento reikšmės.

// const minus2Button = document.createElement("button");
// minus2Button.textContent = "-2";
// numbersElement.append(minus2Button);

// minus2Button.addEventListener("click", () => {
//   const number = parseInt(display.textContent);
//   display.textContent = number - 2;
//   if (number - 2 < 2) {
//     minus1Button.setAttribute("disabled", true);
//   }
//   if (number - 2 >= 5) {
//     display.style.color = "green";
//   } else {
//     display.style.color = "red";
//   }
// });

// // 12. Sukurti du naujus mygtukus, kurie:
// // 12.1. Prideda 5 prie esamos h3 elemento reikšmės.

// const plus5Button = document.createElement("button");
// plus5Button.textContent = "+5";
// numbersElement.append(plus5Button);

// plus5Button.addEventListener("click", () => {
//   const number = parseInt(display.textContent);
//   display.textContent = number + 5;
//   if (number + 5 > 9) {
//     plus1Button.setAttribute("disabled", true);
//   }
//   if (number + 5 >= 5) {
//     display.style.color = "green";
//   } else {
//     display.style.color = "red";
//   }
// });

// // 12.2. Atima 5 iš esamos h3 elemento reikšmės..

// const minus5Button = document.createElement("button");
// minus5Button.textContent = "-5";
// numbersElement.append(minus5Button);

// minus5Button.addEventListener("click", () => {
//   const number = parseInt(display.textContent);
//   display.textContent = number - 5;
//   if (number - 5 < 2) {
//     minus1Button.setAttribute("disabled", true);
//   }
//   if (number - 5 >= 5) {
//     display.style.color = "green";
//   } else {
//     display.style.color = "red";
//   }
// });

// can i make everything in one ?

const numbersElement = document.querySelector("#numbers");

const display = document.createElement("h3");
const minus1Button = document.createElement("button");
const plus1Button = document.createElement("button");
const resetButton = document.createElement("button");
const plus2Button = document.createElement("button");
const minus2Button = document.createElement("button");
const plus5Button = document.createElement("button");
const minus5Button = document.createElement("button");

display.textContent = "5";
minus1Button.textContent = "-";
plus1Button.textContent = "+";
resetButton.textContent = "Reset";
plus2Button.textContent = "+2";
minus2Button.textContent = "-2";
plus5Button.textContent = "+5";
minus5Button.textContent = "-5";

numbersElement.append(display, minus1Button, plus1Button, resetButton, plus2Button, minus2Button, plus5Button, minus5Button);

minus1Button.addEventListener("click", () => {
  const number = parseInt(display.textContent);
  display.textContent = number - 1;
  if (number - 1 < 2) {
    minus1Button.setAttribute("disabled", true);
  }
  if (number - 1 >= 5) {
    display.style.color = "green";
  } else {
    display.style.color = "red";
  }
});

plus1Button.addEventListener("click", () => {
  const number = parseInt(display.textContent);
  display.textContent = number + 1;
  if (number + 1 > 9) {
    plus1Button.setAttribute("disabled", true);
  }
  if (number + 1 >= 5) {
    display.style.color = "green";
  } else {
    display.style.color = "red";
  }
});

resetButton.addEventListener("click", () => {
  display.textContent = "5";
  display.style.color = "black";
  minus1Button.removeAttribute("disabled");
  plus1Button.removeAttribute("disabled");
});

plus2Button.addEventListener("click", () => {
  const number = parseInt(display.textContent);
  display.textContent = number + 2;
  if (number + 2 > 9) {
    plus1Button.setAttribute("disabled", true);
  }
  if (number + 2 >= 5) {
    display.style.color = "green";
  } else {
    display.style.color = "red";
  }
});

minus2Button.addEventListener("click", () => {
  const number = parseInt(display.textContent);
  display.textContent = number - 2;
  if (number - 2 < 2) {
    minus1Button.setAttribute("disabled", true);
  }
  if (number - 2 >= 5) {
    display.style.color = "green";
  } else {
    display.style.color = "red";
  }
});

plus5Button.addEventListener("click", () => {
  const number = parseInt(display.textContent);
  display.textContent = number + 5;
  if (number + 5 > 9) {
    plus1Button.setAttribute("disabled", true);
  }
  if (number + 5 >= 5) {
    display.style.color = "green";
  } else {
    display.style.color = "red";
  }
});

minus5Button.addEventListener("click", () => {
  const number = parseInt(display.textContent);
  display.textContent = number - 5;
  if (number - 5 < 2) {
    minus1Button.setAttribute("disabled", true);
  }
  if (number - 5 >= 5) {
    display.style.color = "green";
  } else {
    display.style.color = "red";
  }
});
