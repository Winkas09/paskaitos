// let value = true;
// console.log(typeof value); // boolean

// value = String(value); // now value is a string "true"
// console.log(typeof value); // string

// console.log("6" / "2"); // 3, strings are converted to numbers

// let str = "123";
// console.log(typeof str); // string

// let num = Number(str); // becomes a number 123

// console.log(typeof num); // number

// console.log(Number("   123   ")); // 123
// console.log(Number("123z")); // NaN (error reading a number at "z")
// console.log(Number(true)); // 1
// console.log(Number(false)); // 0

// console.log(Boolean(1)); // true
// console.log(Boolean(0)); // false

// console.log(Boolean("hello")); // true
// console.log(Boolean("")); // false

// let a = 10;
// let b = 20;

// console.log(a + b); // 30

// let year = "2024";
// year -= 28;
// console.log(year); // 2020

// let name = "Edvinas";
// let surname = "Pasinas";
// console.log(name + " " + surname); // Edvinas Pasinas

// let celsijai = 30;
// let farenheitai = (9 / 5) * celsijai + 32;
// console.log(farenheitai); // 86

// let startingBalance = 999.99;
// let increasedBalance = startingBalance * 0.09;
// let doubledBalance = increasedBalance * 2;
// let finaBalance = doubledBalance - 50;
// // console.log(finaBalance); // 809.991

// colsole.log("Pradinis balansas:", startingBalance.toFixed(2));
// console.log("Pajamos:", increasedBalance.toFixed(2));
// console.log("Pajamu dvigubai:", doubledBalance.toFixed(2));
// console.log("Likutis po pirkimo:", finaBalance.toFixed(2));

// let startingBalance = 999.99;
// let increasedBalance = startingBalance * 0.09;
// let doubledBalance = increasedBalance * 2;
// let finalBalance = doubledBalance - 50; // Corrected variable name
// // console.log(finalBalance); // 809.991

// console.log("Pradinis balansas:", startingBalance.toFixed(2)); // Corrected typo in console.log
// console.log("Pajamos:", increasedBalance.toFixed(2));
// console.log("Pajamu dvigubai:", doubledBalance.toFixed(2));
// console.log("Likutis po pirkimo:", finalBalance.toFixed(2)); // Corrected variable name

// const text1 = "Labas";
// const text2 = "rytas";
// const result1 = text1 === text2;
// console.log(result1); // false

const text = "10";
const number = 10;
console.log(text == number); // true
console.log(text === number); // false
console.log(text !== number); // true

const currentBalance = 50;
const transaction = -50;
const result = currentBalance + transaction >= 0;
console.log(result); // true

const currentBalance1 = 50;
const transaction1 = 50;
const result1 = currentBalance1 + transaction1 >= 0;
console.log(result1); // true

const currentBalance2 = 50;
const transaction2 = -51;
const result2 = currentBalance2 + transaction2 >= 0;
console.log(result2); // true

const currentBalance3 = 50;
const transaction3 = 51;
const result3 = currentBalance3 + transaction3 >= 0;
console.log(result3); // true

const a = 15;
const b = 7;
const divisibleWithoutRemainder = a % b === 0;
console.log(divisibleWithoutRemainder); // false
