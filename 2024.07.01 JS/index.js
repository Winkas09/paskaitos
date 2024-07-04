// SLAPTAŽODIS:
// 1. Jeigu slaptažodis yra trumpesnis už 16 simbolių, tai parašyti jog „Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo."
// 2. Jeigu slaptažodis yra ilgesnis už 15 simbolių, tai:
// 2.1. Patikrinti ar jis yra ilgesnis už 20 simbolių. Jeigu ilgesnis, tai parašyti: „Slaptažodis tinkamas".
// 2.2. Jeigu jis nėra ilgesnis už 20 simbolių, tai parašyti jog: „Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo."

// 3. Jeigu slaptažodis neturi grotažymių (#), tai parašyti: „Slaptažodis privalo turėti grotažymes"

// let password = "123456789011";
// if (password.length < 16) {
//   console.log("Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo.");
// } else if (password.length > 15) {
//   if (password.length > 20) {
//     console.log("Slaptažodis tinkamas");
//   } else {
//     console.log("Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo.");
//   }
// }

// if (!password.includes("#")) {
//   console.log("Slaptažodis privalo turėti grotažymes");
// }

// AMŽIUS
// Pagal amžiu surašyti į kurią klasė eina mokinys:
// 1. Iki 6 metų į mokyklą neina.
// 2. 7-10 metų eina į pradinę klasę.
// 3. 11-14 metų eina į pagrindinę.
// 4. 15-18 metų eina į gimnaziją.
// 5. 19+ mokyklą baigė.
// 6.1. Jeigu amžius yra mažiau nei 0, tai parašyti jog įvestas amžius yra per mažas.
// // 6.2. Jeigu amžius yra daugau nei 120, tai parašyti jog įvestas amžius yra per didelis.
// 7.1. Jeigu amžius yra 6 metai, tai parašyti: "Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas."
// 7.2. Jeigu amžius yra 10 metai, tai parašyti: "Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas."
// 7.3. Jeigu amžius yra 14 metai, tai parašyti: "Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas."
// 7.4. Jeigu amžius yra 18 metai, tai parašyti: "Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs."
// 8. Jeigu įvestas ne amžius (t.y. ne skaičius), tai parašyti: "Netinkamai nurodytas amžius, amžius privalo būti skaičius."
// 9. Panaudoti prompt funkciją amžiui įvesti.

// let age = prompt("Įveskite amžių: ");
// if (isNaN(age)) {
//   alert("Netinkamai nurodytas amžius, amžius privalo būti skaičius.");
// } else if (age < 0) {
//   console.log("įvestas amžius yra per mažas");
// } else if (age < 6) {
//   console.log("Į mokykla neina");
// } else if (age === 6) {
//   console.log("Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas.");
// } else if (age === 10) {
//   console.log("Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas.");
// } else if (age === 14) {
//   console.log("Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas.");
// } else if (age === 18) {
//   console.log("Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs.");
// } else if (age >= 7 && age <= 10) {
//   console.log("eina į pradinę klasę");
// } else if (age >= 11 && age <= 14) {
//   console.log("eina į pagrindinę mokyklą");
// } else if (age >= 15 && age <= 18) {
//   console.log("eina į gimnaziją");
// } else if (age > 110) {
//   console.log("įvestas amžius yra per didelis");
// } else if (age >= 19) {
//   console.log("mokyklą baigė");
// }

// optimizuotas kodas ??

let age = prompt("Įveskite amžių: ");
age = Number(age);

if (isNaN(age)) {
  alert("Netinkamai nurodytas amžius, amžius privalo būti skaičius.");
} else if (age < 0) {
  console.log("įvestas amžius yra per mažas");
} else if (age > 110) {
  console.log("įvestas amžius yra per didelis");
} else if (age < 6) {
  console.log("Į mokykla neina");
} else if (age >= 19) {
  console.log("mokyklą baigė");
} else {
  if (age === 6) {
    console.log("Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas.");
  } else if (age === 10) {
    console.log("Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas.");
  } else if (age === 14) {
    console.log("Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas.");
  } else if (age === 18) {
    console.log("Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs.");
  } else if (age <= 10) {
    console.log("eina į pradinę klasę");
  } else if (age <= 14) {
    console.log("eina į pagrindinę mokyklą");
  } else {
    console.log("eina į gimnaziją");
  }
}
