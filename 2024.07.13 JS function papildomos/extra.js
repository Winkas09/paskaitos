// Sukurti žemiau nurodytas funkcijas:

// 1. Funkciją, kuri paverčia žmogaus metus į šuns metus:
// 1.1. Funkcija priima vieną parametrą: žmogaus amžius.
// 1.2. Funkcija grąžina atsakymą tokiu formatu: 5 žmogaus metai yra 35 šuns metai.

let humanyears = 5;
let dogyears = 7;

function humanToDogYears(humanyears) {
  let dogyears = humanyears * 7;
  return `${humanyears} žmogaus metai yra ${dogyears} šuns metai.`;
}
console.log(humanToDogYears(humanyears));

// 2. Funkciją, kuri skaičiuoja per kiek laiko reikia perskaityti knygą, kad pasiekti užsibrėžtą knygų per metaus skaičių:
// 2.1. Funkcija priima vieną parametrą: norimų per metus perskaityti knygų skaičių.
// 2.1. Funkcija grąžina atsakymą tokiu formatu: norint perskaityti 10 knygų per metus, vienai knygai perskaityti turėsi 36 dienas.

let knyguPerMetus = 10;
let dienosPerKnyga = 36;

function daysToReadBook(knyguPerMetus) {
  let dienosPerKnyga = 365 / knyguPerMetus;
  return `Norint perskaityti ${knyguPerMetus} knygų per metus, vienai knygai perskaityti turėsi ${dienosPerKnyga} dienas.`;
}
console.log(daysToReadBook(knyguPerMetus));

// 3. Funkciją, kuri konvertuoja dienas į savaites:
// 3.1. Funkcija priima vieną argumentą: dienų skaičių.
// 3.2. Funkcija grąžina atsakymą tokiu formatu: 35 dienos yra 5 savaitės.

let dienos = 35;
let savaites = 5;

function dienosISavaites(dienos) {
  let savaites = dienos / 7;
  return dienos + " dienos yra " + savaites + " savaitės.";
}
console.log(dienosISavaites(dienos));

// 4. Funkciją, kuri konvertuoja dienas į metus:
// 4.1. Funkcija priima vieną argumentą: dienų skaičių.
// 4.1. Funkcija grąžina atsakymą tokiu formatu (atsakymą apvalinant): 365 dienos yra 1 metai.

let DienosMetuose = 365;
let metai = 1;

function dienosIMetus(dienos) {
  let metai = dienos / 365;
  return dienos + " dienos yra " + metai + " metai.";
}
console.log(dienosIMetus(DienosMetuose));

// 5. Funkciją, kuri konvertuoja metus į valandas:
// 5.1. Funkcija priima vieną argumentą: metų skaičių.
// 5.2. Funkcija grąžina atsakymą tokiu formatu: 5 metai turi 43800 valandas.

let years = 5;
let valandos = 43800;

function metaiIValandas(years) {
  let valandos = years * 365 * 24;
  return years + " metai turi " + valandos + " valandas.";
}
console.log(metaiIValandas(years));

// 6. Funkciją, kuri konvertuoja mėnesius į valandas:
// 6.1. Funkcija priima vieną argumentą: mėnesių skaičių.
// 6.2. Funkcija grąžina atsakymą tokiu formatu: 3 mėnesiai turi 2190 valandas.

let menesiai = 3;
let valandosMenesiui = 730;

function menesiaiIValandas(menesiai) {
  let valandosMenesiui = menesiai * 30 * 24;
  return menesiai + " mėnesiai turi " + valandosMenesiui + " valandas.";
}
console.log(menesiaiIValandas(menesiai));

// 7. Funkciją, kuri konvertuoja mėnesius į minutes:
// 7.1. Funkcija priima vieną argumentą: mėnesių skaičių.
// 7.2. Funkcija grąžina atsakymą tokiu formatu: 2 mėnesiai turi 87600 minutes.

let menesiai2 = 2;
let minutesMenesiui = 43800;

function menesiaiIMinutes(menesiai2) {
  let minutesMenesiui = menesiai2 * 30 * 24 * 60;
  return menesiai2 + " mėnesiai turi " + minutesMenesiui + " minutes.";
}
console.log(menesiaiIMinutes(menesiai2));

// 8. Funkciją, kuri konvertuoja dienas į pasirinktą formatą (minutes, valandas, savaites, mėnesius arba metus):
// 8.1. Funkcija priima du argumentus:
//   8.1.1. Dienų skaičių.
//   8.1.2. Formatą. Galimos formato reikšmės yra:
//     8.1.2.1. minutes
//     8.1.2.2. hours
//     8.1.2.3. weeks
//     8.1.2.4. months
//     8.1.2.5. years
// 8.2. Funkcija konvertuoja dienas į pasirinktą formatą ir grąžina atsakymą tokiu formatu: 5 days - 7200 minutes.

function convertDays(days, format) {
  let result;
  switch (format) {
    case "minutes":
      result = days * 24 * 60;
      console.log(result);
    case "valandos":
      result = days * 24;
      console.log(result);
    case "savaites":
      result = days / 7;
      console.log(result);
    case "menesiai":
      result = days / 30;
      console.log(result);
    case "metai":
      result = days / 365;
      console.log(result);
    default:
      result = "Neteisingas formatas";
  }
  return `${days} days - ${result} ${format}.`;
}
console.log(convertDays(5, "menesiai"));

// 9. Funkciją, kuri patikrina ar skaičius dalinasi iš kito skaičiaus:
// 9.1. Funkcija priima du argumentus:
//   9.1.1. Skaičių, kuris bus dalinamas (dalinys).
//   9.1.2. Skaičių, iš kurio bus dalinama (daliklis).
// 9.2. Funkcija grąžina atsakymą tokiu formatu:
//   9.2.1. Jeigu dalinasi: 10 dalinasi iš 5.
//   9.2.2. Skaičius 11 nesidalina iš 5. Liekana yra 1.

function divideNumbers(dividend, divisor) {
  let remainder = dividend % divisor;
  if (remainder === 0) {
    return `${dividend} dalinasi iš ${divisor}.`;
  } else {
    return `Skaičius ${dividend} nesidalina iš ${divisor}. Liekana yra ${remainder}.`;
  }
}
console.log(divideNumbers(10, 5));

// 10. Funkciją, kuri patikrina ar įvestas tekstas turi porini raidžių skaičių ar neporinį.

function checkTextLength(text) {
  const length = text.length;
  if (length % 2 === 0) {
    return `Tekstas "${text}" turi porini raidžių skaičių.`;
  } else {
    return `Tekstas "${text}" turi neporini raidžių skaičių.`;
  }
}
console.log(checkTextLength("Labas"));

// 11. Funkciją, kuri paima nurodytą simbolį iš žodžio ar sakinio.
// 11.1. Funkcija priima du argumentus: tekstą ir kelintą simbolį reikia grąžinti.
// 11.2. Funkcija grąžina atsakymą tokiu formatu: Teksto "Labas" 3 raidė yra "b".

// 11.3. Jeigu nurodytas skaičius yra didesnis nei tekstas turi simbolių, tai reikia grąžinti error'ą tokiu formatu: Tekstas "Labas" turi 5 simbolius, o jūs nurodėte grąžinti 8.

// 11.4. Patobulinti funkciją, kad būtų galima įrašyti neigiamą skaičių, jeigu norima gauti teksto simbolį skaičiuojant nuo jo galo, o ne nuo priekio. Funkcija grąžina atsakymą tokiu formatu: Teksto "Labas" 3 raidė nuo galo yra "b".

// function getSymbol(text, index) {
//   const length = text.length;
//   if (index > length) {
//     return `Tekstas "${text}" turi ${length} simbolius, o jūs nurodėte grąžinti ${index}.`;
//   }
//   if (index < 0) {
//     return `Teksto "${text}" ${index} raidė nuo galo yra "${text[length + index]}".`;
//   }
//   return `Teksto "${text}" ${index} raidė yra "${text[index]}".`;
// }
// console.log(getSymbol("Labas", 3));
// console.log(getSymbol("Labas", 8));
// console.log(getSymbol("Labas", -3));

let getName = (name) => {
  return name;
};
console.log(getName("Jonas"));

let randomNumber = () => Math.floor(Math.random() * 5) + 1;
console.log(randomNumber());
console.log(randomNumber());
console.log(randomNumber());
console.log(randomNumber());
console.log(randomNumber());

let surnameAndNameLength = (name, surname) => name.length + surname.length;
console.log(surnameAndNameLength("John", "Doey"));

const getAlphabetLetter = (index) => {
  const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  return alphabet[index];
};
console.log(getAlphabetLetter(0));

const func1 = (n1, n2, operator) => {
  switch (operator) {
    case "sum":
      return n1 + n2;
    case "sub":
      return n1 - n2;
    case "multi":
      return n1 * n2;
    case "div":
      return n1 / n2;
    default:
      return "Neteisingas operatorius";
  }
};
console.log(func1(5, 1, "div"));

const squareNum = (num) => num * num;
const generateRandomNumber1 = () => Math.floor(Math.random() * 10) + 1;

console.log(`Random Number: ${generateRandomNumber1()}, Squared: ${squareNum(generateRandomNumber1())}`);

let convertMStoKMH = (ms) => ms * 3.6;
console.log(convertMStoKMH(10));

// let compareNumbers = (n1, n2) => {
//   if (n1 > n2) {
//     return n1;
//   } else if (n1 < n2) {
//     return n2;
//   } else {
//     return "equal";
//   }
// };

// console.log(compareNumber(4, 7)); // 7
// console.log(compareNumber(5, 5)); // "equal"
// console.log(compareNumber("5", 5)); // "Error: most arguments must be numbers"

let compareNumbers = (n1, n2) => {
  if (typeof n1 !== "number" || typeof n2 !== "number") {
    return "Error: most arguments must be numbers";
  }
  if (n1 > n2) {
    return n1;
  } else if (n1 < n2) {
    return n2;
  } else {
    return "equal";
  }
};
console.log(compareNumbers(4, 7)); // 7
console.log(compareNumbers(5, 5)); // "equal"
console.log(compareNumbers("5", 5)); // "Error: most arguments must be numbers"

let isLeapYear = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
};
console.log(isLeapYear(2020)); // true
console.log(isLeapYear(2021)); // false

const findMaxinArray = (arr) => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};
console.log(findMaxinArray([1, 2, 3, 4, 5])); // 5
console.log(findMaxinArray([5, 4, 3, 2, 1])); // 5
console.log(findMaxinArray([-1, -2, -3, -5, -4])); // 5

const sumArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
console.log(sumArray([1, 2, 3, 4, 5])); // 15
console.log(sumArray([5, 4, 3, 2, 1])); // 15
console.log(sumArray([-1, -2, -3, -5, -4])); // -15

const arMasyvaiLygus = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

console.log(arMasyvaiLygus([1, 2, 3], [1, 2, 3])); // true
console.log(arMasyvaiLygus([1, 2, 3], [1, 2, 4])); // false

const reverseString = (str) => {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
};
console.log(reverseString("Labas"));

// const isPalindrome = (str) => {
//   const reverse = (str) => {
//     let reverse = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//       reverse += str[i];
//     }
//     return reverse;
//   };
//   return str === reverse(str);
// };

// console.log(isPalindrome("savas"));
// console.log(isPalindrome("svetimas"));

// const printPyramid = (height) => {
//   for (let i = 1; i <= height; i++) {
//     let line = "";
//     for (let j = 0; j < i; j++) {
//       line += i;
//     }
//     console.log(line);
//   }
// };
// console.log(printPyramid(5));

// const newInputToEndOfArray = (arr, input) => {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArr[i] = arr[i];
//   }
//   newArr[arr.length] = input;
//   return newArr;
// };
// console.log(newInputToEndOfArray([1, 2, 3], 4));

// const NewInputToArray = (arr, input) => {
//   let newArr = [];
//   newArr[0] = input;

//   for (let i = 0; i < arr.length; i++) {
//     newArr[i + 1] = arr[i];
//   }
//   return newArr;
// };

// console.log(NewInputToArray([1, 2, 3], 4));

function convertToUpperCase(text) {
  return text.toUpperCase();
}
console.log(convertToUpperCase("labas"));

function extractSubstring(text, start, end) {
  return text.substring(start, end);
}
console.log(extractSubstring("Sveikas pasauli", 2, 7));

// function capitalizeFirstLetter(text) {
//   let words = text.split(" ");
//   let capitalizedWords = [];
//   for (let i = 0; i < words.length; i++) {
//     let word = words[i];
//     let capitalizedWord = word[0].toUpperCase() + word.substring(1);
//     capitalizedWords.push(capitalizedWord);
//   }
//   return capitalizedWords.join(" ");
// }
// console.log(capitalizeFirstLetter("labas rytas, lietuva"));

// function capitalizeFirstLetter(text) {
//   let words = text.split(" ");
//   let result = "";
//   for (let i = 0; i < words.length; i++) {
//     let word = words[i];
//     if (word) {
//       result += word[0].toUpperCase() + word.slice(1) + " ";
//     }
//   }
//   return result.trim();
// }

// console.log(capitalizeFirstLetter("labas rytas, lietuva!")); // Output: "Labas Rytas, Lietuva"

// function censorCurseWords(text, badWords) {
//   let words = text.split(" ");
//   let result = "";
//   for (let i = 0; i < words.length; i++) {
//     let words = words[i];
//     if (badWords.includes(word.toLowerCase())) {
//       result += "*".repeat(word.length) + " ";
//     }
//   }
//   return result.trim();
// }

// console.log(censorCurseWords("Labas rytas, lietuva", ["rytas"])); // Output: "Labas ***** lietuva"

// const censorCurseWords = (text, curseWords) => {
//   let censoredText = text;
//   for (let i = 0; i < curseWords.length; i++) {
//     const curseWord = curseWords[i];
//     while (censoredText.includes(curseWord)) {
//       censoredText = censoredText.replace(curseWord, "****");
//     }
//   }
//   return censoredText;
// };

// // Example usage
// console.log(censorCurseWords("This is a badword and another badword.", ["badword"])); // Output: "This is a **** and another ****."

// let milkPrice = 1.513;
// if (Number.isInteger(milkPrice)) {
//   alert("Centu nereik");
// } else {
//   alert("Centu reik");
// }

// alert(milkPrice.toFixed(2));

// function findMax(...numbers) {
//   return Math.max(...numbers);
// }
// console.log(findMax(1, 2, 3, 4, 5));

// let isLegalage = (age) => {
//   return age >= 18;
// };
// console.log(isLegalage(17));

let isLegalAge = true;
console.log(isLegalAge);
console.log(isLegalAge.toString());
