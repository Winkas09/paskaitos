// let arr = [2, 3, 4];
// arr.unshift(1);
// console.log(arr); // [1, 2, 3, 4]

// let arr = [1, 2, 2, 3, 4, 4];
// let differentElements = [];

// for (let i = 0; i < arr.length; i++) {
//   if (!differentElements.includes(arr[i])) {
//     differentElements.push(arr[i]);
//   }
// }

// console.log(differentElements); // [1, 2, 3, 4]

// let arr = [1, 2, 3, 4, 3, 5];
// let element = 3;

// let doesRepeat = arr.indexOf(element) !== arr.lastIndexOf(element);
// console.log(doesRepeat); // true

// change every element: if number is even / 2, if not even - *3 . how to do that with the numbers -
// [1, 2, 3, 4, 5] -> [3, 1, 9, 2, 15]

// let arr = [1, 2, 3, 4, 5];
// let transformed = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     transformed.push(arr[i] / 2);
//   } else {
//     transformed.push(arr[i] * 3);
//   }
// }
// console.log(transformed); // [3, 1, 9, 2, 15]

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// let sum = 0;
// let i = 1;

// while (i <= 5) {
//   sum += i;
//   i++;
// }

// console.log(sum);

// for (let i = 2; i <= 10; i += 2) {
//   console.log(i);
// }

// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// let count = 0;
// let i = 1;

// while (i <= 20) {
//   if (i % 3 === 0) {
//     count++;
//   }
//   i++;
// }
// console.log(count); // 6

// let numbers = [9, 2, 3, 4, 7, 5, 6, 8, 1, 10];
// let max = numbers[0];
// let min = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] > max) {
//     max = numbers[i];
//   }
//   if (numbers[i] < min) {
//     min = numbers[i];
//   }
// }
// console.log(max); // 10
// console.log(min); // 1

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 1; i <= 15; i++) {
//   if (num % i === 0) {
//     console.log(i);
//   }
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let oddNumbers = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 !== 0) {
//     oddNumbers.push(arr[i]);
//   }
// }
// console.log(oddNumbers); // [1, 3, 5, 7, 9]

// function alertName(name) {
//   alert(name);
// }
// alertName("John");

// function nameAndSurnameLength(name, surname) {
//   return name.length + surname.length;
// }
// console.log(nameAndSurnameLength("Edvinas", "Pasinas")); // 7

// function getAlphabetLetter(number) {
//   return String.fromCharCode(96 + number);
// }
// console.log(getAlphabetLetter(1)); // a
// console.log(getAlphabetLetter(2)); // b
// console.log(getAlphabetLetter(3)); // c

// function calculate(n1, n2, operator) {
//   switch (operator) {
//     case "sum":
//       return n1 + n2;
//     case "sub":
//       return n1 - n2;
//     case "div":
//       return n1 / n2;
//     case "multi":
//       return n1 * n2;
//     default:
//       return "Invalid operator";
//   }
// }

// console.log(calculate(7, 3, "sum")); // 3
// console.log(calculate(5, 1, "sub")); // 4
// console.log(calculate(6, 3, "sum")); // 9
// console.log(calculate(8, 2, "div")); // 4
// console.log(calculate(7, 3, "multi")); // 21
// console.log(calculate(7, 3, "unknown")); // Invalid operator

// Generate a random number between 1 and 10
function generateRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}
console.log(generateRandomNumber());

// Return the square of the given number
function squareNumber(number) {
  return number * number;
}

// Generate and square random numbers, then log the results
console.log(squareNumber(generateRandomNumber()));
console.log(squareNumber(generateRandomNumber()));
console.log(squareNumber(generateRandomNumber()));
console.log(squareNumber(generateRandomNumber()));
console.log(squareNumber(generateRandomNumber()));
