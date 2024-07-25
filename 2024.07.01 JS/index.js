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

// let age = prompt("Įveskite amžių: ");
// age = Number(age);

// if (isNaN(age)) {
//   alert("Netinkamai nurodytas amžius, amžius privalo būti skaičius.");
// } else if (age < 0) {
//   console.log("įvestas amžius yra per mažas");
// } else if (age > 110) {
//   console.log("įvestas amžius yra per didelis");
// } else if (age < 6) {
//   console.log("Į mokykla neina");
// } else if (age >= 19) {
//   console.log("mokyklą baigė");
// } else {
//   if (age === 6) {
//     console.log("Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas.");
//   } else if (age === 10) {
//     console.log("Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas.");
//   } else if (age === 14) {
//     console.log("Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas.");
//   } else if (age === 18) {
//     console.log("Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs.");
//   } else if (age <= 10) {
//     console.log("eina į pradinę klasę");
//   } else if (age <= 14) {
//     console.log("eina į pagrindinę mokyklą");
//   } else {
//     console.log("eina į gimnaziją");
//   }
// }

// GALVOSŪKIS: sukurti galvosūkį su keletu klausimu
// PIRMAS LYGIS:
// 1. Norint patekti į kitą lygį, reikia atsakyti bent į vieną klausimą iš dviejų:
// 2. Jeigu atsakytas tik vienas klausimas, tai papildomai reikia parašyti kuris klausimas buvo neteisingas.

// 1. Patekai i kita lygi: abu atsakymai teisingi.
// 2. Patekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras buvo teisingas.
// 3. Patekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas buvo teisingas.
// 4. Nepatekai i kita lygi: abu atsakymai buvo neteisingi.

// let qestion11 = "kiek yra 2+2?";
// let qestion12 = "kiek yra 2*2?";

// let answer11 = prompt(qestion11);
// let answer12 = prompt(qestion12);

// if (answer11 === "4" && answer12 === "4") {
//   alert("Patekai i kita lygi: abu atsakymai teisingi.");
// } else if (answer11 !== "4" && answer12 === "4") {
//   alert("Patekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras buvo teisingas.");
// } else if (answer11 === "4" && answer12 !== "4") {
//   alert("Patekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas buvo teisingas.");
// } else {
//   alert("Nepatekai i kita lygi: abu atsakymai buvo neteisingi.");
// }

// ANTRAS LYGIS:
// 1. Norint patekti į kitą lygį, reikia atsakyti į abu klausimus iš dviejų:
// 2. Jeigu atsakytas tik vienas klausimas, tai papildomai reikia parašyti kuris atsakymas buvo neteisingas.

// 1. Patekai i kita lygi: abu atsakymai teisingi.
// 2. Nepatekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras buvo teisingas.
// 3. Nepatekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas buvo teisingas.
// 4. Nepatekai i kita lygi: abu atsakymai buvo neteisingi.

// let qestion21 = "kiek yra 5+5?";
// let qestion22 = "kiek yra 5*5?";
// let answer21 = prompt(qestion21);
// let answer22 = prompt(qestion22);

// if (answer21 === "10" && answer22 === "25") {
//   alert("Patekai i kita lygi: abu atsakymai teisingi.");
// }
// if (answer21 !== "10" && answer22 === "25") {
//   alert("Nepatekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras buvo teisingas.");
// }
// if (answer21 === "10" && answer22 !== "25") {
//   alert("Nepatekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas buvo teisingas.");
// }
// if (answer21 !== "10" && answer22 !== "25") {
//   alert("Nepatekai i kita lygi: abu atsakymai buvo neteisingi.");
// }

// TREČIAS LYGIS:
// 1. Trys klausimai ir į kitą lygį pereinama, jeigu atsakomi bent du klausimai.
// 2. Jeigu atsakomi du klausimai, turi būti parodoma, kuris klausimas buvo neatsakytas.
// 3. Jeigu atsakomi mažiau nei du klausimai, tai turi parodyti, kuris klausimas buvo atsakytas.

// patenkama i kita lygi:    1 1 1
// patenkama i kita lygi:    1 1 0
// patenkama i kita lygi:    1 0 1
// patenkama i kita lygi:    0 1 1

// nepatenkama i kita lygi:  1 0 0
// nepatenkama i kita lygi:  0 1 0
// nepatenkama i kita lygi:  0 0 1
// nepatenkama i kita lygi:  0 0 0

// let qestion31 = "kiek yra 10+10?";
// let qestion32 = "kiek yra 10*10?";
// let qestion33 = "kiek yra 10/10?";

// let answer31 = prompt(qestion31);
// let answer32 = prompt(qestion32);
// let answer33 = prompt(qestion33);

// if (answer31 === "20" && answer32 === "100" && answer33 === "1") {
//   alert("Patekai i kita lygi: visi atsakymai teisingi.");
// }
// if (answer31 === "20" && answer32 === "100" && answer33 !== "1") {
//   alert("Patekai i kita lygi: trečias atsakymas buvo neteisingas.");
// }
// if (answer31 === "20" && answer32 !== "100" && answer33 === "1") {
//   alert("Patekai i kita lygi: antras atsakymas buvo neteisingas.");
// }
// if (answer31 !== "20" && answer32 === "100" && answer33 === "1") {
//   alert("Patekai i kita lygi: pirmas atsakymas buvo neteisingas.");
// }
// if (answer31 === "20" && answer32 !== "100" && answer33 !== "1") {
//   alert("Nepatekai i kita lygi: antras ir trečias atsakymai buvo neteisingi.");
// }
// if (answer31 !== "20" && answer32 === "100" && answer33 !== "1") {
//   alert("Nepatekai i kita lygi: pirmas ir trečias atsakymai buvo neteisingi.");
// }
// if (answer31 !== "20" && answer32 !== "100" && answer33 === "1") {
//   alert("Nepatekai i kita lygi: pirmas ir antras atsakymai buvo neteisingi.");
// }
// if (answer31 !== "20" && answer32 !== "100" && answer33 !== "1") {
//   alert("Nepatekai i kita lygi: visi atsakymai buvo neteisingi.");
// }

// PASISVEIKINIMAS:
// 1. Jeigu vartotojas prisijungęs (true/false), tai prie pasisveikinimo reikia prirašyti jo vardą, pvz. „Good Morning, Tom.".
// 2. Jeigu vartotojas nėra prisijungęs, tai išvesti tik tekstą „Good Morning".
// 3. Priklausomai nuo paros laiko, pasisveikinimas turėtų būti skirtingas:
// 3.1. 5-12 val. „Good Morning"
// 3.2. 13-18 val. „Good Afternoon"
// 3.3. 19-4 val. „Good Evening"
// 4. Jeigu vartotojas yra ir prisijungęs, ir šiandien yra jo gimtadienis, tai prie pasisveikinimo dar turi būti parašytas ir pasveikinimas, pvz.: „Good Morning, Tom and have a great birthday!"

// let isLoggedIn = false
// let userName = 'John'
// let time = 16
// let isBirthday = true

let isLoggedIn = false;
let userName = "John";
let time = 16;
let isBirthday = true;

let greeting = "";
if (time >= 5 && time <= 12) {
  greeting = "Good Morning";
} else if (time >= 13 && time <= 18) {
  greeting = "Good Afternoon";
} else {
  greeting = "Good Evening";
}

if (isLoggedIn) {
  if (isBirthday) {
    console.log(`${greeting}, ${userName} and have a great birthday!`);
  } else {
    console.log(`${greeting}, ${userName}`);
  }
} else {
  console.log(greeting);
}
