// Dirbti su šiuo masyvu:
// [4, 5, -5556, 155, 640, '15x', 6789, -5564, 478, 654, 'obuolys', 789, -51, 55, -222, 0, -357, -56, 'trylika', 444, 7778, 4154, 4751];

// 1. Dirbant su šiuo masyvu eilės tvarka atlikti žemiau pateiktas užduotis. Naudoti metodus: pop, push, shift, unshift, splice.
// 1.1. Pašalinti pirmą masyvo narį.
// 1.2. Pašalinti paskutinį masyvo narį.
// 1.3. Rasti vidurinį masyvo narį ir jį pašalinti.
// 1.4. Pašalinti priešpaskutinį masyvo narį.
// 1.5. Pašalinti antrą masyvo narį.
// 1.6. Pašalinti 7 ir 8 masyvo narius.
// 1.7. Pašalinti 4, 5 ir 6 masyvo narius skaičiuojant nuo galo.
// 1.8. Pašalinti trečią masyvo narį ir į jo vietą įdėti skaičių 888.
// 1.9. Pašalinti dešimtą masyvo narį ir į jo vietą įdėti skaičius: 33, 789 ir 6543.
// 1.10. Pašalinti paskutinį masyvo narį į jo vietą įdėti skaičius: 321, 654, 987.
// 1.11. Tarp pirmo ir antro masyvo narių įdėti skaičių 11.
// 1.12. Tarp 13 ir 14 masyvo narių įdėti skaičių 1.
// 1.13. Tarp paskutinio ir priešpaskutinio masyvo narių įdėti skaičių -1.
// 1.14. Į masyvo pradžią pridėti skaičius: 1, 2, 3.
// 1.15. Į masyvo pabaigą pridėti skaičius: -333, -321, -312.
// 1.16. Į masyvo vidurį pridėti skaičių 0.
// 1.17. Pašalinti pirmą masyvo narį.
// 1.18. Pašalinti paskutinį masyvo narį.
// 1.19. Į masyvo pradžią pridėti žodį "start".
// 1.20. Į masyvo pabaigą pridėti žodį "end".

// Atlikus šias užduotis eilės tvarka masyvas turėtų atrodyti taip:
// ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']

const arr = [4, 5, -5556, 155, 640, "15x", 6789, -5564, 478, 654, "obuolys", 789, -51, 55, -222, 0, -357, -56, "trylika", 444, 7778, 4154, 4751];

// 1.1. Pašalinti pirmą masyvo narį.
arr.shift();
console.log(arr);

// 1.2. Pašalinti paskutinį masyvo narį.

arr.pop();
console.log(arr);

// 1.3. Rasti vidurinį masyvo narį ir jį pašalinti.
const middleIndex = Math.floor(arr.length / 2);
arr.splice(middleIndex, 1);
console.log(arr);

// 1.4. Pašalinti priešpaskutinį masyvo narį.
arr.splice(-2, 1);
console.log(arr);

// 1.5. Pašalinti antrą masyvo narį.
arr.splice(1, 1);
console.log(arr);

// 1.6. Pašalinti 7 ir 8 masyvo narius.
arr.splice(6, 2);
console.log(arr);

// 1.7. Pašalinti 4, 5 ir 6 masyvo narius skaičiuojant nuo galo.
arr.splice(-6, 3);
console.log(arr);

// 1.8. Pašalinti trečią masyvo narį ir į jo vietą įdėti skaičių 888.
arr.splice(2, 1, 888);
console.log(arr);

// 1.9. Pašalinti dešimtą masyvo narį ir į jo vietą įdėti skaičius: 33, 789 ir 6543.
arr.splice(9, 1, 33, 789, 6543);
console.log(arr);

// 1.10. Pašalinti paskutinį masyvo narį į jo vietą įdėti skaičius: 321, 654, 987.
arr.splice(-1, 1, 321, 654, 987);
console.log(arr);

// 1.11. Tarp pirmo ir antro masyvo narių įdėti skaičių 11.
arr.splice(1, 0, 11);
console.log(arr);

// 1.12. Tarp 13 ir 14 masyvo narių įdėti skaičių 1.
arr.splice(13, 0, 1);
console.log(arr);

// 1.13. Tarp paskutinio ir priešpaskutinio masyvo narių įdėti skaičių -1.
arr.splice(-1, 0, -1);
console.log(arr);

// 1.14. Į masyvo pradžią pridėti skaičius: 1, 2, 3.
arr.unshift(1, 2, 3);
console.log(arr);

// 1.15. Į masyvo pabaigą pridėti skaičius: -333, -321, -312.
arr.push(-333, -321, -312);
console.log(arr);

// 1.16. Į masyvo vidurį pridėti skaičių 0.
arr.splice(middleIndex, 0, 0);
console.log(arr);

// 1.17. Pašalinti pirmą masyvo narį.
arr.shift();

// 1.18. Pašalinti paskutinį masyvo narį.
arr.pop();

// 1.19. Į masyvo pradžią pridėti žodį "start".
arr.unshift("start");
console.log(arr);

// 1.20. Į masyvo pabaigą pridėti žodį "end".
arr.push("end");
console.log(arr);

// ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']

// 2. Tęsiant darbą su šiuo masyvu atlikti šias užduotis naudojant slice metodą. Kiekvienai užduočiai sukurti naują kintamąjį, jame išsaugoti reikšmę, kurią grąžina slice metodas, ir šį kintamąjį išvesti į konsolę:
// 2.1. Gauti pirmą masyvo narį.
// 2.2. Gauti paskutinį masyvo narį.
// 2.3. Gauti antrą masyvo narį.
// 2.4. Gauti priešpaskutinį masyvo narį.
// 2.5. Gauti aštuntą masyvo narį.
// 2.6. Gauti devintą masyvo narį skaičiuojant nuo galo.
// 2.7. Gauti vidurinį masyvo narį.
// 2.8. Gauti pirmus tris masyvo narius.
// 2.9. Gauti paskutinius tris masyvo narius.
// 2.10. Gauti pirmus 10 masyvo narius.
// 2.11. Gauti paskutinius 10 masyvo narius.
// 2.12. Gauti nuo 3 iki 8 masyvo nario (iš viso 6 nariai).
// 2.13. Gauti nuo 5 iki 9 masyvo nario skaičiuojant nuo masyvo pabaigos (iš viso 5 nariai).
// 2.14. Gauti nuo 11 iki 19 masyvo nario (iš viso 9 nariai).
// 2.15. Gauti nuo 9 iki 17 masyvo nario skaičiuojant nuo masyvo pabaigos (iš viso 9 nariai).
// 2.16. Gauti visus masyvo narius išskyrus pirmą.
// 2.17. Gauti visus masyvo narius išskyrus paskutinį.
// 2.18. Gauti visus masyvo narius išskyrus pirmus 5.
// 2.19. Gauti visus masyvo narius išskyrus paskutinius 5.
// 2.20. Gauti visus masyvo narius iki vidurinio masyvo nario, vidurinio nario neįskaičiuojant (iš viso 13 narių).
// 2.21. Gauti visus masyvo narius nuo vidurinio masyvo nario, vidurinio nario neįskaičiuojant, iki pabaigos (iš viso 13 narių).
// 2.22. Gauti visus narius išskyrus pirmą ir paskutinį.
// 2.23. Gauti visus narius išskyrus pirmus penkis ir paskutinius tris.
// 2.24. Gauti visus narius išskyrus pirmą ir paskutinius 8.
// 2.25. Gauti visus narius išskyrus pirmus 7 ir paskutinį.
// 2.26. Gauti visus narius išskyrus pirmus 9 ir paskutinius 12.
// 2.27. Gauti 9 narius skaičiuojant nuo 11.
// 2.28. Gauti 12 narių skaičiuojant nuo 8.
// 2.29. Gauti pirmus penkis ir paskutinius šešis masyvo narius. Šiuos narius gauti viename masyve. Reikės atlikti daugiau veiksmų nei prieš tai uždaviniuose.
// 2.30. Gauti masyvo narius nuo 3 iki 5 ir nuo 15 iki 17. Šiuos narius gauti viename masyve. Reikės atlikti daugiau veiksmų nei prieš tai uždaviniuose.

// 2.1. Gauti pirmą masyvo narį.
const firstElement = arr.splice(0, 1);
console.log(firstElement);

// 2.2. Gauti paskutinį masyvo narį.
const lastElement = arr.slice(-1);
console.log(lastElement);

// 2.3. Gauti antrą masyvo narį.
const secondElement = arr.slice(1, 2);
console.log(secondElement);

// 2.4. Gauti priešpaskutinį masyvo narį.
const beforeLastElement = arr.slice(-2, -1);
console.log(beforeLastElement);

// 2.5. Gauti aštuntą masyvo narį.
const eightElement = arr.slice(7, 8);
console.log(eightElement);

// 2.6. Gauti devintą masyvo narį skaičiuojant nuo galo.
const ninthElement = arr.slice(-9, -8);
console.log(ninthElement);

// 2.7. Gauti vidurinį masyvo narį.
const middleElement = arr.slice(middleIndex, middleIndex + 1);
console.log(middleElement);

// 2.8. Gauti pirmus tris masyvo narius.
const ThreeFirstElements = arr.slice(0, 3);
console.log(ThreeFirstElements);

// 2.9. Gauti paskutinius tris masyvo narius.
const ThreeLastElements = arr.slice(-3);
console.log(ThreeLastElements);

// 2.10. Gauti pirmus 10 masyvo narius.
const tenFirstElements = arr.slice(0, 10);
console.log(tenFirstElements);

// 2.11. Gauti paskutinius 10 masyvo narius.
const tenLastElements = arr.slice(-10);
console.log(tenLastElements);

// 2.12. Gauti nuo 3 iki 8 masyvo nario (iš viso 6 nariai).
const sixElements = arr.slice(2, 8);
console.log(arr);
console.log(sixElements);

// 2.13. Gauti nuo 5 iki 9 masyvo nario skaičiuojant nuo masyvo pabaigos (iš viso 5 nariai).
const fiveElementsEnd = arr.slice(-9, -4);
console.log(fiveElementsEnd);

// 2.14. Gauti nuo 11 iki 19 masyvo nario (iš viso 9 nariai).
const nineElements = arr.slice(10, 19);
console.log(nineElements);

// 2.15. Gauti nuo 9 iki 17 masyvo nario skaičiuojant nuo masyvo pabaigos (iš viso 9 nariai).
const nineElementsEnd = arr.slice(-17, -8);
console.log(nineElementsEnd);

// 2.16. Gauti visus masyvo narius išskyrus pirmą.
const allbutNotFirst = arr.slice(1);
console.log(arr);
console.log(allbutNotFirst); // why when i choose slice(0) it returns full array ?

// 2.17. Gauti visus masyvo narius išskyrus paskutinį.
const allbutNotLast = arr.slice(0, -1);
console.log(allbutNotLast);

// 2.18. Gauti visus masyvo narius išskyrus pirmus 5.
const allbutNotFirstFive = arr.slice(5);
console.log(allbutNotFirstFive);

// 2.19. Gauti visus masyvo narius išskyrus paskutinius 5.
const allbutNotLastFive = arr.slice(0, -5);
console.log(allbutNotLastFive);

// 2.20. Gauti visus masyvo narius iki vidurinio masyvo nario, vidurinio nario neįskaičiuojant (iš viso 13 narių).
const beforeMiddle = arr.slice(0, middleIndex);
console.log(beforeMiddle);

// // 2.21. Gauti visus masyvo narius nuo vidurinio masyvo nario, vidurinio nario neįskaičiuojant, iki pabaigos (iš viso 13 narių).
// const midIndex = Math.floor(arr.length / 2);
// const afterMiddle = arr.slice(middleIndex + 1);
// console.log(afterMiddle);

// 2.22. Gauti visus narius išskyrus pirmą ir paskutinį.
const allbutFirstLast = arr.slice(1, -1);
console.log(arr);
console.log(allbutFirstLast);

// 2.23. Gauti visus narius išskyrus pirmus penkis ir paskutinius tris.
const allbutFirstFiveLastThree = arr.slice(5, -3);
console.log(allbutFirstFiveLastThree);

// 2.24. Gauti visus narius išskyrus pirmą ir paskutinius 8.
const allbutFirstLastEight = arr.slice(1, -8);
console.log(allbutFirstLastEight);

// 2.25. Gauti visus narius išskyrus pirmus 7 ir paskutinį.
const allbutFirstSevenLast = arr.slice(7, -1);
console.log(allbutFirstSevenLast);

// 2.26. Gauti visus narius išskyrus pirmus 9 ir paskutinius 12.
const allbutFirstNineLastTwelve = arr.slice(9, -12);
console.log(allbutFirstNineLastTwelve);

// 2.27. Gauti 9 narius skaičiuojant nuo 11.
const nineFromEleven = arr.slice(11, 20);
console.log(nineFromEleven);

// 2.28. Gauti 12 narių skaičiuojant nuo 8.
const twelveFromEight = arr.slice(8, 20);
console.log(twelveFromEight);

// 2.29. Gauti pirmus penkis ir paskutinius šešis masyvo narius. Šiuos narius gauti viename masyve. Reikės atlikti daugiau veiksmų nei prieš tai uždaviniuose.
const firstFiveLastSix = arr.slice(0, 5).concat(arr.slice(-6));
console.log(arr);
console.log(firstFiveLastSix);

// 2.30. Gauti masyvo narius nuo 3 iki 5 ir nuo 15 iki 17. Šiuos narius gauti viename masyve. Reikės atlikti daugiau veiksmų nei prieš tai uždaviniuose.
const fromThreeToFiveAndFifteenToSeventeen = arr.slice(2, 5).concat(arr.slice(14, 17));
console.log(arr);
console.log(fromThreeToFiveAndFifteenToSeventeen);

// ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']

// 3. Tęsiant darbą su ankstesniu masyvu atlikti šias užduotis naudojant filter metodą. Kiekvienai užduočiai sukurti naują kintamąjį, jame išsaugoti reikšmę, kurią grąžina filter metodas, ir šį kintamąjį išvesti į konsolę:
// 3.1. Gauti tik teigiamus skaičius.
// 3.2. Gauti tik neigiamus skaičius.
// 3.3. Gauti tik skaičius, kurie dalinasi iš 2.
// 3.4. Gauti tik skaičius, kurie dalinasi iš 3.
// 3.5. Gauti tik skaičius, kurie dalinasi iš 5.
// 3.6. Gauti tik skaičius, kurie dalinasi iš 11.
// 3.7. Gauti tik skaičius, kurie dalinasi iš 31.
// 3.8. Gauti tik skaičius, kurie dalinasi iš 2 ir iš 3.
// 3.9. Gauti tik skaičius, kurie dalinasi iš 3 ir iš 7.
// 3.10. Gauti tik skaičius, kurie dalinasi iš 5 ir iš 9.
// 3.11. Gauti tik skaičius, kurie dalinasi iš 5 ir iš 11.
// 3.12. Gauti tik skaičius, kurie dalinasi iš 2, 8 ir 12.
// 3.13. Gauti tik skaičius, kurie dalinasi iš 2 arba iš 3.
// 3.14. Gauti tik skaičius, kurie dalinasi iš 3 arba iš 5.
// 3.15. Gauti tik skaičius, kurie dalinasi iš 5 arba iš 6.
// 3.16. Gauti tik skaičius, kurie dalinasi iš 7 arba iš 8.
// 3.17. Gauti tik skaičius, kurie dalinasi iš 9 arba iš 13.
// 3.18. Gauti tik skaičius, kurie dalinasi iš 2, 3 arba iš 5.
// 3.19. Gauti tik skaičius, kurie dalinasi iš 5, 7 arba iš 9.
// 3.20. Gauti tik skaičius, kurie dalinasi iš 7, 8 arba iš 11.
// 3.21. Gauti tik skaičius, kurie dalinasi iš 9, 12 arba iš 13.
// 3.22. Gauti tik skaičius, kurie yra didesni už 100.
// 3.23. Gauti tik skaičius, kurie yra didesni už 555.
// 3.24. Gauti tik skaičius, kurie yra didesni arba lygūs 888.
// 3.25. Gauti tik skaičius, kurie yra didesni arba lygūs 6789.
// 3.26. Gauti tik skaičius, kurie yra mažesni už 50.
// 3.27. Gauti tik skaičius, kurie yra mažesni už 1000.
// 3.28. Gauti tik skaičius, kurie yra mažesni arba lygūs -1.
// 3.29. Gauti tik skaičius, kurie yra mažesni arba lygūs -5564.
// 3.30. Gauti tik skaičius, kurie yra mažesni už 1000 ir didesni už 500.
// 3.31. Gauti tik skaičius, kurie yra mažesni už 100 ir didesni už 0.
// 3.32. Gauti tik skaičius, kurie yra mažesni už 0 ir didesni už -50.
// 3.33. Gauti tik skaičius, kurie yra mažesni arba lygūs 0 ir didesni už -100.
// 3.34. Gauti tik skaičius, kurie yra didesni arba lygūs 0 ir mažesni už 55.
// 3.35. Gauti tik skaičius, kurie yra didesni arba lygūs 444 ir mažesni arba lygūs 654.
// 3.36. Gauti tik teigiamus skaičius, kurie dalinasi iš 2.
// 3.37. Gauti tik teigiamus skaičius, kurie dalinasi iš 3.
// 3.38. Gauti tik neigiamus skaičius, kurie dalinasi iš 4.
// 3.39. Gauti tik neigiamus skaičius, kurie dalinasi iš 111.
// 3.40. Gauti tik skaičius, kurie yra didesni už 500 ir kurie dalinasi iš 2.
// 3.41. Gauti tik skaičius, kurie yra didesni už 1000 ir kurie dalinasi iš 3.
// 3.42. Gauti tik skaičius, kurie yra mažesni už 1000 ir kurie dalinasi iš 9.
// 3.43. Gauti tik skaičius, kurie yra mažesni už 500 ir kurie dalinasi iš 2.
// 3.44. Gauti tik skaičius, kurie yra didesni arba lygūs 33 ir kurie dalinasi iš 3.
// 3.45. Gauti tik skaičius, kurie yra didesni arba lygūs 444 ir kurie dalinasi iš 12.
// 3.46. Gauti tik skaičius, kurie yra mažesni arba lygūs 155 ir kurie dalinasi iš 5.
// 3.47. Gauti tik skaičius, kurie yra mažesni arba lygūs -333 ir kurie dalinasi iš 9.
// 3.48. Gauti tik skaičius, kurie yra didesni už 100, mažesni už 500 ir kurie dalinasi iš 5.
// 3.49. Gauti tik skaičius, kurie yra didesni arba lygūs 888, mažesni už 1000 ir kurie dalinasi iš 2.
// 3.50. Gauti tik skaičius, kurie yra mažesni arba lygūs 888, didesni arba lygūs -333, dalinasi iš 3 ir nėra nulis.
// 3.51. Gauti tik skaičius.
// 3.52. Gauti tik tekstus (string).
// 3.53. Gauti tik tekstus (string), kurie turi daugiau nei 5 simbolius.
// 3.54. Gauti tik tekstus (string), kurie turi mažiau arba lygiai 5 simbolius.
// 3.55. Gauti tik tekstus (string), kurie turi mažiau nei 7 simbolius.
// 3.56. Gauti tik tekstus (string), kurie turi raidę t.
// 3.57. Gauti tik tekstus (string), kurie turi raidę y.
// 3.58. Gauti tik tekstus (string), kurie turi raides e arba a.
// 3.59. Gauti tik tekstus (string), kurie turi raides t ir i.
// 3.60. Gauti tik tekstus (string), kurie turi raide t, bet neturi raidės k.
// 3.61. Gauti tik tekstus (string), kurie turi raide a, bet neturi raidės s.
// 3.62. Gauti tik tekstus (string), kurie turi daugiau nei vieną raidę t.
// 3.63. Gauti tik tekstus (string), kurie turi raidžių junginį st.
// 3.64. Gauti tik tekstus (string), kurie turi raidžių junginį nd.
// 3.65. Gauti tik tekstus (string), kurie neturi raidės s.
// 3.66. Gauti tik tekstus (string), kurie neturi raidės t.
// 3.67. Gauti tik tekstus (string), kurie neturi raidės r ir l.
// 3.68. Gauti tik tekstus (string), kurie prasideda skaičiumi.
// 3.69. Gauti tik tekstus (string), kurie prasideda raide s.
// 3.70. Gauti tik tekstus (string), kurie prasideda raide o.
// 3.70. Gauti tik tekstus (string), kurie baigiasi raide d.
// 3.71. Gauti tik tekstus (string), kurie baigiasi raide s.
// 3.72. Gauti tik tekstus (string), kurie turi daugiau nei 4 simbolius ir turi raidę o.
// 3.73. Gauti tik tekstus (string), kurie turi daugiau arba lygiai 5 simbolius ir turi raidę a.
// 3.74. Gauti tik tekstus (string), kurie turi porinį simbolių skaičių.
// 3.75. Gauti tik tekstus (string), kurie turi neporinį simbolių skaičių ir turi raidę s.
// 3.76. Gauti tik tekstus (string), kurių trečias simbolis yra a.
// 3.77. Gauti tik tekstus (string), kurių ketvirtas simbolis yra l.
// 3.78. Gauti tik tekstus (string), kurių penktas simbolis nėra t ir kurie turi daugiau simbolių nei 4.
// 3.79. Gauti tik tekstus (string), kurių pirmas simbolis nėra e, kurie turi mažiau simbolių nei 6 ir kurie neprasideda skaičiumi.

let arr1 = ["start", 2, 3, 5, 11, 155, 888, "15x", 6789, -5564, "obuolys", -51, 55, 0, 33, 789, 6543, 1, "trylika", 444, 321, 654, -1, 987, -333, -321, "end"];

// 3.1. Gauti tik teigiamus skaičius.
const positiveNumbers = arr1.filter((el) => typeof el === "number" && el > 0);
console.log(positiveNumbers);

// 3.2. Gauti tik neigiamus skaičius.
const negativeNumbers = arr1.filter((el) => typeof el === "number" && el < 0);
console.log(negativeNumbers);

// 3.3. Gauti tik skaičius, kurie dalinasi iš 2.
const dividedByTwo = arr1.filter((el) => typeof el === "number" && el % 2 === 0);
console.log(dividedByTwo);

// 3.4. Gauti tik skaičius, kurie dalinasi iš 3.
const dividedByThree = arr1.filter((el) => typeof el === "number" && el % 3 === 0);
console.log(dividedByThree);

// 3.5. Gauti tik skaičius, kurie dalinasi iš 5.
const dividedByFive = arr1.filter((el) => typeof el === "number" && el % 5 === 0);
console.log(dividedByFive);

// 3.6. Gauti tik skaičius, kurie dalinasi iš 11.
const dividedByEleven = arr1.filter((el) => typeof el === "number" && el % 11 === 0);
console.log(dividedByEleven);

// 3.7. Gauti tik skaičius, kurie dalinasi iš 31.
const dividedByThirtyOne = arr1.filter((el) => typeof el === "number" && el % 31 === 0);
console.log(dividedByThirtyOne);

// 3.8. Gauti tik skaičius, kurie dalinasi iš 2 ir iš 3.
const dividedByTwoAndThree = arr1.filter((el) => typeof el === "number" && el % 2 === 0 && el % 3 === 0);
console.log(dividedByTwoAndThree);

// 3.9. Gauti tik skaičius, kurie dalinasi iš 3 ir iš 7.
const dividedByThreeAndSeven = arr1.filter((el) => typeof el === "number" && el % 3 === 0 && el % 7 === 0);
console.log(dividedByThreeAndSeven);

// 3.10. Gauti tik skaičius, kurie dalinasi iš 5 ir iš 9.
const dividedByFiveAndNine = arr1.filter((el) => typeof el === "number" && el % 5 === 0 && el % 9 === 0);
console.log(dividedByFiveAndNine);

// 3.11. Gauti tik skaičius, kurie dalinasi iš 5 ir iš 11.
const dividedByFiveAndEleven = arr1.filter((el) => typeof el === "number" && el % 5 === 0 && el % 11 === 0);
console.log(dividedByFiveAndEleven);

// 3.12. Gauti tik skaičius, kurie dalinasi iš 2, 8 ir 12.
const dividedByTwoEightTwelve = arr1.filter((el) => typeof el === "number" && el % 2 === 0 && el % 8 === 0 && el % 12 === 0);
console.log(dividedByTwoEightTwelve);

// 3.13. Gauti tik skaičius, kurie dalinasi iš 2 arba iš 3.
const dividedByTwoOrThree = arr1.filter((el) => typeof el === "number" && (el % 2 === 0 || el % 3 === 0));
console.log(dividedByTwoOrThree);

// 3.14. Gauti tik skaičius, kurie dalinasi iš 3 arba iš 5.
const dividedByThreeOrFive = arr1.filter((el) => typeof el === "number" && (el % 3 === 0 || el % 5 === 0));
console.log(dividedByThreeOrFive);

// 3.15. Gauti tik skaičius, kurie dalinasi iš 5 arba iš 6.
const dividedByFiveOrSix = arr1.filter((el) => typeof el === "number" && (el % 5 === 0 || el % 6 === 0));
console.log(dividedByFiveOrSix);

// 3.16. Gauti tik skaičius, kurie dalinasi iš 7 arba iš 8.
const dividedBySevenOrEight = arr1.filter((el) => typeof el === "number" && (el % 7 === 0 || el % 8 === 0));
console.log(dividedBySevenOrEight);

// 3.17. Gauti tik skaičius, kurie dalinasi iš 9 arba iš 13.
const dividedByNineOrThirteen = arr1.filter((el) => typeof el === "number" && (el % 9 === 0 || el % 13 === 0));
console.log(dividedByNineOrThirteen);

// 3.18. Gauti tik skaičius, kurie dalinasi iš 2, 3 arba iš 5.
const dividedByTwoThreeFive = arr1.filter((el) => typeof el === "number" && (el % 2 === 0 || el % 3 === 0 || el % 5 === 0));
console.log(dividedByTwoThreeFive);

// 3.19. Gauti tik skaičius, kurie dalinasi iš 5, 7 arba iš 9.
const dividedByFiveSevenNine = arr1.filter((el) => typeof el === "number" && (el % 5 === 0 || el % 7 === 0 || el % 9 === 0));
console.log(dividedByFiveSevenNine);

// 3.20. Gauti tik skaičius, kurie dalinasi iš 7, 8 arba iš 11.
const dividedBySevenEightEleven = arr1.filter((el) => typeof el === "number" && (el % 7 === 0 || el % 8 === 0 || el % 11 === 0));
console.log(dividedBySevenEightEleven);

// 3.21. Gauti tik skaičius, kurie dalinasi iš 9, 12 arba iš 13.
const dividedByNineWelveThirteen = arr1.filter((el) => typeof el === "number" && (el % 9 === 0 || el % 12 === 0 || el % 13 === 0));
console.log(dividedByNineWelveThirteen);

// 3.22. Gauti tik skaičius, kurie yra didesni už 100.
const biggerThanHundred = arr1.filter((el) => typeof el === "number" && el > 100);
console.log(biggerThanHundred);

// 3.23. Gauti tik skaičius, kurie yra didesni už 555.
const biggerThanFiveHundredsFiftyFive = arr1.filter((el) => typeof el === "number" && el > 555);
console.log(biggerThanFiveHundredsFiftyFive);

// 3.24. Gauti tik skaičius, kurie yra didesni arba lygūs 888.
const biggerThanEightHundredEightyEight = arr1.filter((el) => typeof el === "number" && el >= 888);
console.log(biggerThanEightHundredEightyEight);

// 3.25. Gauti tik skaičius, kurie yra didesni arba lygūs 6789.
const biggerThanSixThousandsSevenHundredsEightyNine = arr1.filter((el) => typeof el === "number" && el >= 6789);
console.log(biggerThanSixThousandsSevenHundredsEightyNine);

// 3.26. Gauti tik skaičius, kurie yra mažesni už 50.
const smallerThanFifty = arr1.filter((el) => typeof el === "number" && el < 50);
console.log(smallerThanFifty);

// 3.27. Gauti tik skaičius, kurie yra mažesni už 1000.
const smallerThanThousand = arr1.filter((el) => typeof el === "number" && el < 1000);
console.log(smallerThanThousand);

// 3.28. Gauti tik skaičius, kurie yra mažesni arba lygūs -1.
const smallerOrEqualToMinusOne = arr1.filter((el) => typeof el === "number" && el <= -1);
console.log(smallerOrEqualToMinusOne);

// 3.29. Gauti tik skaičius, kurie yra mažesni arba lygūs -5564.
const smallerOrEqualToMinusFiveThousandFiveHundredSixtyFour = arr1.filter((el) => typeof el === "number" && el <= -5564);
console.log(smallerOrEqualToMinusFiveThousandFiveHundredSixtyFour);

// 3.30. Gauti tik skaičius, kurie yra mažesni už 1000 ir didesni už 500.
const smallerThanThousandBiggerThanFiveHundred = arr1.filter((el) => typeof el === "number" && el < 1000 && el > 500);
console.log(smallerThanThousandBiggerThanFiveHundred);

// 3.31. Gauti tik skaičius, kurie yra mažesni už 100 ir didesni už 0.
const smallerThanHundredBiggerThanZero = arr1.filter((el) => typeof el === "number" && el < 100 && el > 0);
console.log(smallerThanHundredBiggerThanZero);

// 3.32. Gauti tik skaičius, kurie yra mažesni už 0 ir didesni už -50.
const smallerThanZeroBiggerThanMinusFifty = arr1.filter((el) => typeof el === "number" && el < 0 && el > -50);
console.log(smallerThanZeroBiggerThanMinusFifty);

// 3.33. Gauti tik skaičius, kurie yra mažesni arba lygūs 0 ir didesni už -100.
const smallerOrEqualToZeroBiggerThanMinusHundred = arr1.filter((el) => typeof el === "number" && el <= 0 && el > -100);
console.log(smallerOrEqualToZeroBiggerThanMinusHundred);

// 3.34. Gauti tik skaičius, kurie yra didesni arba lygūs 0 ir mažesni už 55.
const biggerOrEqualToZeroSmallerThanFiftyFive = arr1.filter((el) => typeof el === "number" && el >= 0 && el < 55);
console.log(biggerOrEqualToZeroSmallerThanFiftyFive);

// 3.35. Gauti tik skaičius, kurie yra didesni arba lygūs 444 ir mažesni arba lygūs 654.
const biggerOrEqualToFourFourFourSmallerOrEqualToSixFiveFour = arr1.filter((el) => typeof el === "number" && el >= 444 && el <= 654);
console.log(biggerOrEqualToFourFourFourSmallerOrEqualToSixFiveFour);

// 3.36. Gauti tik teigiamus skaičius, kurie dalinasi iš 2.
const positiveDividedByTwo = arr1.filter((el) => typeof el === "number" && el > 0 && el % 2 === 0);
console.log(positiveDividedByTwo);

// 3.37. Gauti tik teigiamus skaičius, kurie dalinasi iš 3.
const positiveDividedByThree = arr1.filter((el) => typeof el === "numer" && el > 0 && el % 3 === 0);
console.log(positiveDividedByThree);

// 3.38. Gauti tik neigiamus skaičius, kurie dalinasi iš 4.
const negativeDividedByFour = arr1.filter((el) => typeof el === "number" && el < 0 && el % 4 === 0);
console.log(negativeDividedByFour);

// 3.39. Gauti tik neigiamus skaičius, kurie dalinasi iš 111.
const negativeDividedByOneOneOne = arr1.filter((el) => typeof el === "number" && el < 0 && el % 111 === 0);
console.log(negativeDividedByOneOneOne);

// 3.40. Gauti tik skaičius, kurie yra didesni už 500 ir kurie dalinasi iš 2.
const biggerThanFiveHundredsDividedByTwo = arr1.filter((el) => typeof el === "numer" && el > 500 && el % 2 === 0);
console.log(biggerThanFiveHundredsDividedByTwo);

// 3.41. Gauti tik skaičius, kurie yra didesni už 1000 ir kurie dalinasi iš 3.
const biggerThanThousandDividedByThree = arr1.filter((el) => typeof el === "number" && el > 1000 && el % 3 === 0);
console.log(biggerThanThousandDividedByThree);

// 3.42. Gauti tik skaičius, kurie yra mažesni už 1000 ir kurie dalinasi iš 9.
const smallerThanThousandDividedByNine = arr1.filter((el) => typeof el === "number" && el < 1000 && el % 9 === 0);
console.log(smallerThanThousandDividedByNine);

// 3.43. Gauti tik skaičius, kurie yra mažesni už 500 ir kurie dalinasi iš 2.
const smallerThanFiveHundredsDividedByTwo = arr1.filter((el) => typeof el === "number" && el < 500 && el % 2 === 0);
console.log(smallerThanFiveHundredsDividedByTwo);

// 3.44. Gauti tik skaičius, kurie yra didesni arba lygūs 33 ir kurie dalinasi iš 3.
const threeFourFour = arr1.filter((el) => typeof el === "number" && el >= 33 && el % 3 === 0);
console.log(threeFourFour);

// 3.45. Gauti tik skaičius, kurie yra didesni arba lygūs 444 ir kurie dalinasi iš 12.
const threeFourFive = arr1.filter((el) => typeof el === "number" && el >= 444 && el % 12 === 0);
console.log(threeFourFive);

// 3.46. Gauti tik skaičius, kurie yra mažesni arba lygūs 155 ir kurie dalinasi iš 5.
const threeFourSix = arr1.filter((el) => typeof el === "number" && el <= 155 && el % 5 === 0);
console.log(threeFourSix);

// 3.47. Gauti tik skaičius, kurie yra mažesni arba lygūs -333 ir kurie dalinasi iš 9.
const threeFourSeven = arr1.filter((el) => typeof el === "number" && el <= -333 && el % 9 === 0);
console.log(threeFourSeven);

// 3.48. Gauti tik skaičius, kurie yra didesni už 100, mažesni už 500 ir kurie dalinasi iš 5.
const threeFourEight = arr1.filter((el) => typeof el === "number" && el > 100 && el < 500 && el % 5 === 0);
console.log(threeFourEight);

// 3.49. Gauti tik skaičius, kurie yra didesni arba lygūs 888, mažesni už 1000 ir kurie dalinasi iš 2.
const threeFourNine = arr1.filter((el) => typeof el === "number" && el >= 888 && el < 1000 && el % 2 === 0);
console.log(threeFourNine);

// 3.50. Gauti tik skaičius, kurie yra mažesni arba lygūs 888, didesni arba lygūs -333, dalinasi iš 3 ir nėra nulis.
const threeFiveZero = arr1.filter((el) => typeof el === "number" && el <= 888 && el >= -333 && el % 3 === 0 && el !== 0);
console.log(threeFiveZero);

// 3.51. Gauti tik skaičius.
const onlyNumbers = arr1.filter((el) => typeof el === "number");
console.log(onlyNumbers);

// 3.52. Gauti tik tekstus (string).
const onlyStrings = arr1.filter((el) => typeof el === "string");
console.log(onlyStrings);

// 3.53. Gauti tik tekstus (string), kurie turi daugiau nei 5 simbolius.
const threeFiveThree = arr1.filter((el) => typeof el === "string" && el.length > 5);
console.log(threeFiveThree);

// 3.54. Gauti tik tekstus (string), kurie turi mažiau arba lygiai 5 simbolius.
const threeFiveFour = arr1.filter((el) => typeof el === "string" && el.length <= 5);
console.log(threeFiveFour);

// 3.55. Gauti tik tekstus (string), kurie turi mažiau nei 7 simbolius.
const threeFiveFive = arr1.filter((el) => typeof el === "string" && el.length < 7);
console.log(threeFiveFive);

// 3.56. Gauti tik tekstus (string), kurie turi raidę t.
const threeFiveSix = arr1.filter((el) => typeof el === "string" && el.includes("t"));
console.log(threeFiveSix);

// 3.57. Gauti tik tekstus (string), kurie turi raidę y.
const threeFiveSeven = arr1.filter((el) => typeof el === "string" && el.includes("y"));
console.log(threeFiveSeven);

// 3.58. Gauti tik tekstus (string), kurie turi raides e arba a.
const threeFiveEight = arr1.filter((el) => typeof el === "string" && (el.includes("e") || el.includes("a")));
console.log(threeFiveEight);

// 3.59. Gauti tik tekstus (string), kurie turi raides t ir i.
const threeFiveNine = arr1.filter((el) => typeof el === "string" && el.includes("t") && el.includes("i"));
console.log(threeFiveNine);

// 3.60. Gauti tik tekstus (string), kurie turi raide t, bet neturi raidės k.
const threeSixZero = arr1.filter((el) => typeof el === "string" && el.includes("t") && !el.includes("k"));
console.log(threeSixZero);

// 3.61. Gauti tik tekstus (string), kurie turi raide a, bet neturi raidės s.
const threeSixOne = arr1.filter((el) => typeof el === "string" && el.includes("a") && !el.includes("s"));
console.log(threeSixOne);

// 3.62. Gauti tik tekstus (string), kurie turi daugiau nei vieną raidę t.
const threeSixTwo = arr1.filter((el) => typeof el === "string" && el.split("t").length - 1 > 1);
console.log(threeSixTwo);

// 3.63. Gauti tik tekstus (string), kurie turi raidžių junginį st.
const threeSixThree = arr1.filter((el) => typeof el === "string" && el.includes("st"));
console.log(threeSixThree);

// 3.64. Gauti tik tekstus (string), kurie turi raidžių junginį nd.
const threeSixFour = arr1.filter((el) => typeof el === "string" && el.includes("nd"));
console.log(threeSixFour);

// 3.65. Gauti tik tekstus (string), kurie neturi raidės s.
const threeSixFive = arr1.filter((el) => typeof el === "string" && !el.includes("s"));
console.log(threeSixFive);

// 3.66. Gauti tik tekstus (string), kurie neturi raidės t.
const threeSixSix = arr1.filter((el) => typeof el === "string" && !el.includes("t"));
console.log(threeSixSix);

// 3.67. Gauti tik tekstus (string), kurie neturi raidės r ir l.
const threeSixSeven = arr1.filter((el) => typeof el === "string" && !el.includes("r") && !el.includes("l"));
console.log(threeSixSeven);

// 3.68. Gauti tik tekstus (string), kurie prasideda skaičiumi.
const threeSixEight = arr1.filter((el) => typeof el === "string" && !isNaN(el[0]));
console.log(threeSixEight);

// 3.69. Gauti tik tekstus (string), kurie prasideda raide s.
const threeSixNine = arr1.filter((el) => typeof el === "string" && el[0] === "s");
console.log(threeSixNine);

// 3.70. Gauti tik tekstus (string), kurie prasideda raide o.
const threeSevenZero = arr1.filter((el) => typeof el === "string" && el[0] === "o");
console.log(threeSevenZero);

// 3.70. Gauti tik tekstus (string), kurie baigiasi raide d.
const threeSevenZero1 = arr1.filter((el) => typeof el === "string" && el[el.length - 1] === "d");
console.log(threeSevenZero1);

// 3.71. Gauti tik tekstus (string), kurie baigiasi raide s.
const threeSevenOne = arr1.filter((el) => typeof el === "string" && el[el.length - 1] === "s");
console.log(threeSevenOne);

// 3.72. Gauti tik tekstus (string), kurie turi daugiau nei 4 simbolius ir turi raidę o.
const threeSevenTwo = arr1.filter((el) => typeof el === "string" && el.length > 4 && el.includes("o"));
console.log(threeSevenTwo);

// 3.73. Gauti tik tekstus (string), kurie turi daugiau arba lygiai 5 simbolius ir turi raidę a.
const threeSevenThree = arr1.filter((el) => typeof el === "string" && el.length >= 5 && el.includes("a"));
console.log(threeSevenThree);

// 3.74. Gauti tik tekstus (string), kurie turi porinį simbolių skaičių.
const threeSevenFour = arr1.filter((el) => typeof el === "string" && el.length % 2 === 0);
console.log(threeSevenFour);

// 3.75. Gauti tik tekstus (string), kurie turi neporinį simbolių skaičių ir turi raidę s.
const threeSevenFive = arr1.filter((el) => typeof el === "string" && el.length % 2 !== 0 && el.includes("s"));
console.log(threeSevenFive);

// 3.76. Gauti tik tekstus (string), kurių trečias simbolis yra a.
const threeSevenSix = arr1.filter((el) => typeof el === "string" && el[2] === "a");
console.log(threeSevenSix);

// 3.77. Gauti tik tekstus (string), kurių ketvirtas simbolis yra l.
const threeSevenSeven = arr1.filter((el) => typeof el === "string" && el.length > 3 && el[3] === "l");
console.log(threeSevenSeven);

// 3.78. Gauti tik tekstus (string), kurių penktas simbolis nėra t ir kurie turi daugiau simbolių nei 4.

const threeSevenEight = arr1.filter((el) => typeof el === "string" && el.length > 4 && el[4] !== "t");
console.log(threeSevenEight);

// 3.79. Gauti tik tekstus (string), kurių pirmas simbolis nėra e, kurie turi mažiau simbolių nei 6 ir kurie neprasideda skaičiumi.
const threeSevenNine = arr1.filter((el) => typeof el === "string" && el[0] !== "e" && el.length < 6 && isNaN(el[0]));
console.log(threeSevenNine);

// ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']

// 4. Tęsiant darbą su ankstesniu masyvu atlikti šias užduotis naudojant for ciklą ir map/forEach metodą. Kiekvieną užduotį atlikti abiem būdais (for ciklu ir map/forEach metodu). Visus narius išvesti į konsole pagal žemiau pateiktas sąlygas:
// 4.1. Tik skaičius (number tipo duomenis).
// 4.2. Tik tekstą (string tipo duomenis).
// 4.3. Tik skaičius (number tipo duomenis) ir juos pakelti 4-tuoju laipsniu.
// 4.4. Tik skaičius (number tipo duomenis) ir prie jų pridėti 55.
// 4.5. Tik skaičius (number tipo duomenis) ir juos padalinti iš 2.
// 4.6. Tik skaičius (number tipo duomenis) ir prieš juos pridėti teksta, tokiu formatu: "Number: 2".
// 4.7. Tik skaičius (number tipo duomenis) ir pridėti tekstą su jų pačių indeksais, pvz.:
//   "Index: 0, Number: 2"
//   "Index: 1, Number: 3"
//   "Index: 2, Number: 5"
//   Ir t.t.
// 4.8. Tik skaičius (number tipo duomenis) ir juos padauginti iš jų pačių indekso.
// 4.9. Tik skaičius (number tipo duomenis) ir juos padauginti iš ankstesnio nario, pvz.:
//   - Pirmo skaičiaus dauginti nereikia.
//   - Antrą skaičių dauginti iš pirmo.
//   - Trečią skaičių dauginti iš antro.
//   - Ketvirta skaičių dauginti iš trečio.
//   - Penktą skaičių dauginti iš ketvirto.
//   Ir t.t.
// 4.10. Tik tuos skaičius (number tipo duomenis), kuriuos padauginus iš 5, atsakymas gaunasi didesnis už 350.
// 4.11. Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti kiek simbolių jis turi, pvz. "Start has 5 symbols".
// 4.12. Tik tekstą (string tipo duomenis), tačiau kiekviena žodžio raidę išskiriant brūkšniu ir paverčiant ją didžiąja raide, pvz.: "S-T-A-R-T".
// 4.13. Tik tekstą (string tipo duomenis), tačiau kiekviena žodžio pirmą ir trečią raidę pakeičiant brūkšniu (underscore), pvz.: "_t_rt";
// 4.14. Tik tekstą (string tipo duomenis), tačiau žodį parašant atvirkščiai, pvz.: vietoje "start" parašyti "trats";
// 4.15. Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti tarp kokių narių masyve jis yra, pvz.: "Word obuolys is between -5564 and -51 in the array".

const arr2 = ["start", 2, 3, 5, 11, 155, 888, "15x", 6789, -5564, "obuolys", -51, 55, 0, 33, 789, 6543, 1, "trylika", 444, 321, 654, -1, 987, -333, -321, "end"];

// 4. Tęsiant darbą su ankstesniu masyvu atlikti šias užduotis naudojant for ciklą ir map/forEach metodą. Kiekvieną užduotį atlikti abiem būdais (for ciklu ir map/forEach metodu). Visus narius išvesti į konsole pagal žemiau pateiktas sąlygas:
// 4.1. Tik skaičius (number tipo duomenis).
const numbersForLoop = [];
for (let i = 0; i < arr2.length; i++) {
  if (typeof arr2[i] === "number") {
    numbersForLoop.push(arr2[i]);
  }
}
console.log(numbersForLoop);

const numbersMap = arr2
  .map((el) => {
    if (typeof el === "number") {
      return el;
    } else {
      return null;
    }
  })
  .filter((el) => {
    if (el !== null) {
      return true;
    } else {
      return false;
    }
  });
console.log(numbersMap);

// 4.2. Tik tekstą (string tipo duomenis).

const stringsForLoop = [];
for (let i = 0; i < arr2.length; i++) {
  if (typeof arr2[i] === "string") {
    stringsForLoop.push(arr2[i]);
  }
}
console.log(stringsForLoop);

const stringsMap = arr2
  .map((el) => {
    if (typeof el === "string") {
      return el;
    } else {
      return null;
    }
  })
  .filter((el) => {
    if (el !== null) {
      return true;
    } else {
      return false;
    }
  });
console.log(stringsMap);

// 4.3. Tik skaičius (number tipo duomenis) ir juos pakelti 4-tuoju laipsniu.

const numbersToPowerFourForLoop = [];
for (let i = 0; i < arr2.length; i++) {
  if (typeof arr2[i] === "number") {
    numbersToPowerFourForLoop.push(arr2[i] ** 4);
  }
}
console.log(numbersToPowerFourForLoop);

const numbersToPowerFourMap = arr2
  .map((el) => {
    if (typeof el === "number") {
      return el ** 4;
    } else {
      return null;
    }
  })
  .filter((el) => {
    if (el !== null) {
      return true;
    } else {
      return false;
    }
  });
console.log(numbersToPowerFourMap);

// 4.4. Tik skaičius (number tipo duomenis) ir prie jų pridėti 55.

const numbersPlusFiftyFiveForLoop = [];
for (let i = 0; i < arr2.length; i++) {
  if (typeof arr2[i] === "number") {
    numbersPlusFiftyFiveForLoop.push(arr2[i] + 55);
  }
}
console.log(numbersPlusFiftyFiveForLoop);

const numbersPlusFiftyFiveMap = arr2
  .map((el) => {
    if (typeof el === "number") {
      return el + 55;
    } else {
      return null;
    }
  })
  .filter((el) => {
    if (el !== null) {
      return true;
    } else {
      return false;
    }
  });
console.log(numbersPlusFiftyFiveMap);

// 4.5. Tik skaičius (number tipo duomenis) ir juos padalinti iš 2.

const numbersDividedByTwoForLoop = [];
for (let i = 0; i < arr2.length; i++) {
  if (typeof arr2[i] === "number") {
    numbersDividedByTwoForLoop.push(arr2[i] / 2);
  }
}
console.log(numbersDividedByTwoForLoop);

const numbersDividedByTwoMap = arr2.filter((el) => typeof el === "number").map((el) => el / 2);
console.log(numbersDividedByTwoMap);

// 4.6. Tik skaičius (number tipo duomenis) ir prieš juos pridėti teksta, tokiu formatu: "Number: 2".

const numbersWithTextForLoop = [];
for (let i = 0; i < arr2.length; i++) {
  if (typeof arr2[i] === "number") {
    numbersWithTextForLoop.push(`Number: ${arr2[i]}`);
  }
}
console.log(numbersWithTextForLoop);

const numbersWithTextMap = arr2.filter((el) => typeof el === "number").map((el) => `Number: ${el}`);
console.log(numbersWithTextMap);

// 4.7. Tik skaičius (number tipo duomenis) ir pridėti tekstą su jų pačių indeksais, pvz.
//   "Index: 0, Number: 2"
//   "Index: 1, Number: 3"
//   "Index: 2, Number: 5"

const numbersWithIndexForLoop = [];
for (let i = 0; i < arr2.length; i++) {
  if (typeof arr2[i] === "number") {
    numbersWithIndexForLoop.push(`Index: ${i}, Number: ${arr2[i]}`);
  }
}
console.log(numbersWithIndexForLoop);

const numbersWithIndexMap = arr2
  .map((el, i) => {
    if (typeof el === "number") {
      return `Index: ${i}, Number: ${el}`;
    } else {
      return null;
    }
  })
  .filter((el) => {
    if (el !== null) {
      return true;
    } else {
      return false;
    }
  });
console.log(numbersWithIndexMap);

// 4.8. Tik skaičius (number tipo duomenis) ir juos padauginti iš jų pačių indekso.

const numbersMultipliedByIndexForLoop = [];
for (let i = 0; i < arr2.length; i++) {
  if (typeof arr2[i] === "number") {
    numbersMultipliedByIndexForLoop.push(arr2[i] * i);
  }
}
console.log(numbersMultipliedByIndexForLoop);

const numbersMultipliedByIndexMap = arr2.filter((el) => typeof el === "number").map((el, i) => el * i);

console.log(numbersMultipliedByIndexMap);

// 4.9. Tik skaičius (number tipo duomenis) ir juos padauginti iš ankstesnio nario, pvz.:
//   - Pirmo skaičiaus dauginti nereikia.
//   - Antrą skaičių dauginti iš pirmo.
//   - Trečią skaičių dauginti iš antro.
//   - Ketvirta skaičių dauginti iš trečio.
//   - Penktą skaičių dauginti iš ketvirto.
//   Ir t.t.

const numbersMultipliedByPreviousForLoop = [];
for (let i = 1; i < arr2.length; i++) {
  if (typeof arr2[i] === "number" && typeof arr2[i - 1] === "number") {
    numbersMultipliedByPreviousForLoop.push(arr2[i] * arr2[i - 1]);
  }
}
console.log(numbersMultipliedByPreviousForLoop);

const numbersMultipliedByPreviousMap = arr2
  .map((el, i, arr) => {
    if (typeof el === "number" && typeof arr[i - 1] === "number") {
      return el * arr[i - 1];
    } else {
      return null;
    }
  })
  .filter((el) => {
    if (el !== null) {
      return true;
    } else {
      return false;
    }
  });
console.log(numbersMultipliedByPreviousMap);

// 4.10. Tik tuos skaičius (number tipo duomenis), kuriuos padauginus iš 5, atsakymas gaunasi didesnis už 350.

const numbersMultipliedByFiveForLoop = [];
for (let i = 0; i < arr2.length; i++) {
  if (typeof arr2[i] === "number" && arr2[i] * 5 > 350) {
    numbersMultipliedByFiveForLoop.push(arr2[i]);
  }
  console.log(numbersMultipliedByFiveForLoop);
  console.log(arr2);
}
console.log(numbersMultipliedByFiveForLoop);

const numbersMultipliedByFiveMap = arr2.filter((el) => typeof el === "number" && el * 5 > 350);
console.log(numbersMultipliedByFiveMap);

// 4.11. Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti kiek simbolių jis turi, pvz. "Start has 5 symbols".

const stringsWithSymbolsForLoop = [];
for (let i = 0; i < arr2.length; i++) {
  if (typeof arr2[i] === "string") {
    stringsWithSymbolsForLoop.push(`${arr2[i]} has ${arr2[i].length} symbols`);
  }
}
console.log(stringsWithSymbolsForLoop);

const stringsWithSymbolsMap = arr2.filter((el) => typeof el === "string").map((el) => `${el} has ${el.length} symbols`);
console.log(stringsWithSymbolsMap);

// 4.12. Tik tekstą (string tipo duomenis), tačiau kiekviena žodžio raidę išskiriant brūkšniu ir paverčiant ją didžiąja raide, pvz.: "S-T-A-R-T".

const stringsWithDashesForLoop = [];
for (let i = 0; i < arr2.length; i++) {
  if (typeof arr2[i] === "string") {
    stringsWithDashesForLoop.push(arr2[i].split("").join("-").toUpperCase());
  }
}
console.log(stringsWithDashesForLoop);

const stringsWithDashesMap = arr2
  .concat()
  .filter((el) => typeof el === "string")
  .map((el) => el.split("").join("-").toUpperCase());

console.log(stringsWithDashesMap);

// 4.13. Tik tekstą (string tipo duomenis), tačiau kiekviena žodžio pirmą ir trečią raidę pakeičiant brūkšniu (underscore), pvz.: "_t_rt";

const stringsWithUnderscoresForLoop = [];
for (let i = 0; i < arr2.length; i++) {
  if (typeof arr2[i] === "string") {
    stringsWithUnderscoresForLoop.push(arr2[i].replace(/^(.)(.)(.)/, "_$2_"));
  }
}
console.log(stringsWithUnderscoresForLoop);

const stringsWithUnderscoresMap = arr2.filter((el) => typeof el === "string").map((el) => el.replace(/^(.)(.)(.)/, "_$2_"));
console.log(stringsWithUnderscoresMap);

// 4.14. Tik tekstą (string tipo duomenis), tačiau žodį parašant atvirkščiai, pvz.: vietoje "start" parašyti "trats";

const stringsReversedForLoop = [];
for (let i = 0; i < arr2.length; i++) {
  if (typeof arr2[i] === "string") {
    stringsReversedForLoop.push(arr2[i].split("").reverse().join(""));
  }
}
console.log(stringsReversedForLoop);

const stringsReversedMap = arr2.filter((el) => typeof el === "string").map((el) => el.split("").reverse().join(""));
console.log(stringsReversedMap);

// 4.15. Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti tarp kokių narių masyve jis yra, pvz.: "Word obuolys is between -5564 and -51 in the array".

const stringsWithIndexesForLoop = [];
for (let i = 0; i < arr2.length; i++) {
  console.log(arr2[i]);
  if (typeof arr2[i] === "string") {
    const prev = i > 0 ? arr2[i - 1] : "start";
    const next = i < arr2.length - 1 ? arr2[i + 1] : "end";
    stringsWithIndexesForLoop.push(`${arr2[i]} is between ${prev} and ${next} in the array`);
  }
}
console.log(stringsWithIndexesForLoop);

const posts = [
  {
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  },
  {
    id: 4,
    title: "eum et est occaecati",
    body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
  },
  {
    id: 5,
    title: "nesciunt quas odio",
    body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
  },
  {
    id: 6,
    title: "dolorem eum magni eos aperiam quia",
    body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
  },
  {
    id: 7,
    title: "magnam facilis autem",
    body: "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
  },
  {
    id: 8,
    title: "dolorem dolore est ipsam",
    body: "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae",
  },
  {
    id: 9,
    title: "nesciunt iure omnis dolorem tempora et accusantium",
    body: "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
  },
  {
    id: 10,
    title: "optio molestias id quia eum",
    body: "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error",
  },
  {
    id: 11,
    title: "et ea vero quia laudantium autem",
    body: "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi",
  },
  {
    id: 12,
    title: "in quibusdam tempore odit est dolorem",
    body: "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio",
  },
  {
    id: 13,
    title: "dolorum ut in voluptas mollitia et saepe quo animi",
    body: "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam",
  },
  {
    id: 14,
    title: "voluptatem eligendi optio",
    body: "fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum",
  },
  {
    id: 15,
    title: "eveniet quod temporibus",
    body: "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae",
  },
  {
    id: 16,
    title: "sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio",
    body: "suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta",
  },
  {
    id: 17,
    title: "fugit voluptas sed molestias voluptatem provident",
    body: "eos voluptas et aut odit natus earum\naspernatur fuga molestiae ullam\ndeserunt ratione qui eos\nqui nihil ratione nemo velit ut aut id quo",
  },
  {
    id: 18,
    title: "voluptate et itaque vero tempora molestiae",
    body: "eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam",
  },
  {
    id: 19,
    title: "adipisci placeat illum aut reiciendis qui",
    body: "illum quis cupiditate provident sit magnam\nea sed aut omnis\nveniam maiores ullam consequatur atque\nadipisci quo iste expedita sit quos voluptas",
  },
  {
    id: 20,
    title: "doloribus ad provident suscipit at",
    body: "qui consequuntur ducimus possimus quisquam amet similique\nsuscipit porro ipsam amet\neos veritatis officiis exercitationem vel fugit aut necessitatibus totam\nomnis rerum consequatur expedita quidem cumque explicabo",
  },
  {
    id: 21,
    title: "asperiores ea ipsam voluptatibus modi minima quia sint",
    body: "repellat aliquid praesentium dolorem quo\nsed totam minus non itaque\nnihil labore molestiae sunt dolor eveniet hic recusandae veniam\ntempora et tenetur expedita sunt",
  },
  {
    id: 22,
    title: "dolor sint quo a velit explicabo quia nam",
    body: "eos qui et ipsum ipsam suscipit aut\nsed omnis non odio\nexpedita earum mollitia molestiae aut atque rem suscipit\nnam impedit esse",
  },
  {
    id: 23,
    title: "maxime id vitae nihil numquam",
    body: "veritatis unde neque eligendi\nquae quod architecto quo neque vitae\nest illo sit tempora doloremque fugit quod\net et vel beatae sequi ullam sed tenetur perspiciatis",
  },
  {
    id: 24,
    title: "autem hic labore sunt dolores incidunt",
    body: "enim et ex nulla\nomnis voluptas quia qui\nvoluptatem consequatur numquam aliquam sunt\ntotam recusandae id dignissimos aut sed asperiores deserunt",
  },
  {
    id: 25,
    title: "rem alias distinctio quo quis",
    body: "ullam consequatur ut\nomnis quis sit vel consequuntur\nipsa eligendi ipsum molestiae et omnis error nostrum\nmolestiae illo tempore quia et distinctio",
  },
];

// 7. Naudojant posts masyvą, atlikti žemiau nurodytas užduotis ir atsakymus išvesti į konsolę. Visoms užduotis kurti funkciją ir jai, kaip parametrą, paduoti nurodytą masyvą.
// 7.1. Gauti pirmo masyvo nario reikšmę.
// 7.2. Gauti paskutinio masyvo nario reikšmę.
// 7.3. Gauti 15 masyvo nario reikšmę.
// 7.4. Gauti 13 masyvo nario reikšmę skaičiuojant nuo galo.
// 7.5. Gauti vidurinio masyvo nario reikšmę.
// 7.6. Gauti pirmų keturių masyvo narių reikšmes.
// 7.7. Gauti paskutinių penkių masyvo narių reikšmes.
// 7.8. Gauti nuo penkto iki penkiolikto masyvo narių reikšmes.
// 7.9. Gauti kas antro masyvo nario reikšmes.
// 7.10. Gauti pirmo ir paskutinio masyvo narių reikšmes.

// 7.11. Gauti pirmą masyvo narį ir į konsolę išvesti jo property "title" reikšmę.
// 7.12. Gauti antrą masyvo narį ir į konsolę išvesti jo property "body" reikšmę.
// 7.13. Gauti trečią masyvo narį ir į konsolę išvesti jo property "title" ir "body" reikšmes tokiu formatu: Post title is: 'post title' and the content is: 'post content'.
// 7.14. Išvesti visus masyvo narius į konsolę.
// 7.15. Išvesti visų masyvo narių property "title" į konsolę.
// 7.16. Išvesti visų masyvo narių property "body" į konsolę.
// 7.17. Išvesti visų masyvo narių property "title" ir "body" į konsolę tokiu formatu: Title: "post title". Content: "post content".
// 7.18. Išvesti pirmų keturių masyvo narių property "title" ir "body" į konsolę tokiu formatu: Title: "post title". Content: "post content".
// 7.19. Išvesti paskutinių septynių masyvo narių property "title" ir "body" į konsolę tokiu formatu: Title: "post title". Content: "post content".

// 7.20. Sukurti naują masyvą, kurio nariai bus posts masyvo narių property "title" reikšmė, pvz.: ['Pirmo posts masyvo nario title', 'Antro posts masyvo nario title', 'Trečio posts masyvo nario title'...]
// 7.21. Sukurti naują masyvą, kurio nariai bus posts masyvo narių property "title" ir "body" tokiu formatu: Title: "post title". Content: "post content".
// 7.22. Tokiu pačiu formatu, kaip ankstesnėje užduotyje, sukurti naują masyvą tik iš tų posts masyvo narių kurių pavadinimas prasideda raide "s".
// 7.23. Tokiu pačiu formatu, kaip ankstesnėje užduotyje, sukurti naują masyvą tik iš tų posts masyvo narių kurių pavadinimas baigiasi "t" arba "m".
// 7.24. Tokiu pačiu formatu, kaip ankstesnėje užduotyje, sukurti naują masyvą tik iš tų posts masyvo narių kurių pavadinimas turi daugiau simbolių nei 15.

// 7.25. Tokiu pačiu formatu, kaip ankstesnėje užduotyje, sukurti naują masyvą tik iš tų posts masyvo narių kurių pavadinimas turi mažiau simbolių nei 20 ir kurių "body" turi daugiau simbolių nei 50.
// 7.26. Tokiu pačiu formatu, kaip ankstesnėje užduotyje, sukurti naują masyvą tik iš tų posts masyvo narių kurių pavadinimas turi tarp 20 ir 30 simbolių ir kurių "body" turi tarp 70 ir 130 simbolių.
// 7.27. Tokiu pačiu formatu, kaip ankstesnėje užduotyje, sukurti naują masyvą tik iš tų posts masyvo narių kurių pavadinimas turi simbolių junginį "it", o "body" turi simbolių junginį "quo".
// 7.28. Tokiu pačiu formatu, kaip ankstesnėje užduotyje, sukurti naują masyvą tik iš tų posts masyvo narių kurių "body" turi žodį "sit". Jeigu žodis turi šį simbolių junginį, tačiau tai nėra pilna jo reikšmė (pvz. žodžiai "sitto" ar "quasit"), jie neturėtų būti atvaizduojami.
// 7.29. Tokiu pačiu formatu, kaip ankstesnėje užduotyje, sukurti naują masyvą tik iš tų posts masyvo narių kurių pavadinimas turi daugiau nei 3 "a" raides, o "body" turi mažiau nei 7 "o" raides.

// 7.30. Sukurti naują masyvą, kurio nariai bus posts masyvo narių property "title" reikšmė, tačiau surūšiuoti nuo mažiausiai iki daugiausiai raidžių "body" property turinčių narių. Papildomai, prie išvesto teksto pridėti ir "body" raidžių skaičių.

// 7.1. Gauti pirmo masyvo nario reikšmę.

function getFirstPost(posts) {
  return posts[0];
}
console.log(getFirstPost(posts));

// 7.2. Gauti paskutinio masyvo nario reikšmę.

function getLastPost(posts) {
  return posts[posts.length - 1];
}
console.log(getLastPost(posts));

// 7.3. Gauti 15 masyvo nario reikšmę.

function sevenThree(posts) {
  return posts[14];
}
console.log(sevenThree(posts));

// 7.4. Gauti 13 masyvo nario reikšmę skaičiuojant nuo galo.

function sevenFour(posts) {
  return posts[posts.length - 14];
}
console.log(sevenFour(posts));

// 7.5. Gauti vidurinio masyvo nario reikšmę.

function sevenFive(posts) {
  return posts[Math.floor(posts.length / 2)];
}
console.log(sevenFive(posts));

// 7.6. Gauti pirmų keturių masyvo narių reikšmes.

function sevenSix(posts) {
  return posts.slice(0, 4);
}
console.log(sevenSix(posts));

// 7.7. Gauti paskutinių penkių masyvo narių reikšmes.

function sevenSeven(posts) {
  return posts.slice(-5);
}
console.log(sevenSeven(posts));

// 7.8. Gauti nuo penkto iki penkiolikto masyvo narių reikšmes.

function sevenEight(posts) {
  return posts.slice(4, 16);
}
console.log(sevenEight(posts));

// 7.9. Gauti kas antro masyvo nario reikšmes.

function sevenNine(posts) {
  return posts.filter((el, i) => i % 2 === 0);
}
console.log(sevenNine(posts));

// 7.10. Gauti pirmo ir paskutinio masyvo narių reikšmes.

function sevenTen(posts) {
  return [posts[0], posts[posts.length - 1]];
}
console.log(sevenTen(posts));

// 7.11. Gauti pirmą masyvo narį ir į konsolę išvesti jo property "title" reikšmę.

function sevenEleven(posts) {
  return posts[0].title;
}
console.log(sevenEleven(posts));

// 7.12. Gauti antrą masyvo narį ir į konsolę išvesti jo property "body" reikšmę.

function sevenTwelve(posts) {
  return posts[1].body;
}
console.log(sevenTwelve(posts));

// 7.13. Gauti trečią masyvo narį ir į konsolę išvesti jo property "title" ir "body" reikšmes tokiu formatu: Post title is: 'post title' and the content is: 'post content'.

function sevenThirteen(posts) {
  return `Post title is: '${posts[2].title}' and the content is: '${posts[2].body}'`;
}
console.log(sevenThirteen(posts));

// 7.14. Išvesti visus masyvo narius į konsolę.

function sevenFourteen(posts) {
  return posts;
}
console.log(sevenFourteen(posts));

// 7.15. Išvesti visų masyvo narių property "title" į konsolę.

function sevenFifteen(posts) {
  return posts.map((el) => el.title);
}
console.log(sevenFifteen(posts));

// 7.16. Išvesti visų masyvo narių property "body" į konsolę.

function sevenSixteen(posts) {
  return posts.map((el) => el.body);
}
console.log(sevenSixteen(posts));

// 7.17. Išvesti visų masyvo narių property "title" ir "body" į konsolę tokiu formatu: Title: "post title". Content: "post content".

function sevenSeventeen(posts) {
  return posts.map((el) => `Title: "${el.title}". Content: "${el.body}"`);
}
console.log(sevenSeventeen(posts));

// 7.18. Išvesti pirmų keturių masyvo narių property "title" ir "body" į konsolę tokiu formatu: Title: "post title". Content: "post content".

function sevenEighteen(posts) {
  return posts.slice(0, 4).map((el) => `Title: "${el.title}". Content: "${el.body}"`);
}
console.log(sevenEighteen(posts));

// 7.19. Išvesti paskutinių septynių masyvo narių property "title" ir "body" į konsolę tokiu formatu: Title: "post title". Content: "post content".

function sevenNineteen(posts) {
  return posts.slice(-7).map((el) => `Title: "${el.title}". Content: "${el.body}"`);
}
console.log(sevenNineteen(posts));

// 7.20. Sukurti naują masyvą, kurio nariai bus posts masyvo narių property "title" reikšmė, pvz.: ['Pirmo posts masyvo nario title', 'Antro posts masyvo nario title', 'Trečio posts masyvo nario title'...]

function sevenTwenty(posts) {
  return posts.map((el) => el.title);
}
console.log(sevenTwenty(posts));

// 7.21. Sukurti naują masyvą, kurio nariai bus posts masyvo narių property "title" ir "body" tokiu formatu: Title: "post title". Content: "post content".

function sevenTwentyOne(posts) {
  return posts.map((el) => `Title: "${el.title}". Content: "${el.body}"`);
}
console.log(sevenTwentyOne(posts));

// 7.22. Tokiu pačiu formatu, kaip ankstesnėje užduotyje, sukurti naują masyvą tik iš tų posts masyvo narių kurių pavadinimas prasideda raide "s".

function sevenTwentyTwo(posts) {
  return posts.filter((el) => el.title[0].toLowerCase() === "s").map((el) => `Title: "${el.title}". Content: "${el.body}"`);
}
console.log(sevenTwentyTwo(posts));

// 7.23. Tokiu pačiu formatu, kaip ankstesnėje užduotyje, sukurti naują masyvą tik iš tų posts masyvo narių kurių pavadinimas baigiasi "t" arba "m".

function sevenTwentyThree(posts) {
  return posts.filter((el) => el.title[el.title.length - 1].toLowerCase() === "t" || el.title[el.title.length - 1].toLowerCase() === "m").map((el) => `Title: "${el.title}". Content: "${el.body}"`);
}
console.log(sevenTwentyThree(posts));

// 7.24. Tokiu pačiu formatu, kaip ankstesnėje užduotyje, sukurti naują masyvą tik iš tų posts masyvo narių kurių pavadinimas turi daugiau simbolių nei 15.

function sevenTwentyFour(psots) {
  return posts.filter((el) => el.title.length > 15).map((el) => `Title: "${el.title}". Content: "${el.body}"`);
}
console.log(sevenTwentyFour(posts));

// 7.25. Tokiu pačiu formatu, kaip ankstesnėje užduotyje, sukurti naują masyvą tik iš tų posts masyvo narių kurių pavadinimas turi mažiau simbolių nei 20 ir kurių "body" turi daugiau simbolių nei 50.

function sevenTwentyFive(posts) {
  return posts.filter((el) => el.title.length < 20 && el.body.length > 50).map((el) => `Title: "${el.title}". Content: "${el.body}"`);
}
console.log(sevenTwentyFive(posts));

// 7.26. Tokiu pačiu formatu, kaip ankstesnėje užduotyje, sukurti naują masyvą tik iš tų posts masyvo narių kurių pavadinimas turi tarp 20 ir 30 simbolių ir kurių "body" turi tarp 70 ir 130 simbolių.

function sevenTwentySix(posts) {
  return posts.filter((el) => el.title.length > 20 && el.title.length < 30 && el.body.length > 70 && el.body.length < 130).map((el) => `Title: "${el.title}". Content: "${el.body}"`);
}
console.log(sevenTwentySix(posts));

// 7.27. Tokiu pačiu formatu, kaip ankstesnėje užduotyje, sukurti naują masyvą tik iš tų posts masyvo narių kurių pavadinimas turi simbolių junginį "it", o "body" turi simbolių junginį "quo".

function sevenTwentySeven(posts) {
  return posts.filter((el) => el.title.includes("it") && el.body.includes("quo")).map((el) => `Title: "${el.title}". Content: "${el.body}"`);
}
console.log(sevenTwentySeven(posts));

// 7.28. Tokiu pačiu formatu, kaip ankstesnėje užduotyje, sukurti naują masyvą tik iš tų posts masyvo narių kurių "body" turi žodį "sit". Jeigu žodis turi šį simbolių junginį, tačiau tai nėra pilna jo reikšmė (pvz. žodžiai "sitto" ar "quasit"), jie neturėtų būti atvaizduojami.

function sevenTwentyEight(posts) {
  return posts.filter((el) => el.body.includes("sit") && !el.body.includes("sitto") && !el.body.includes("quasit")).map((el) => `Title: "${el.title}". Content: "${el.body}"`);
}
console.log(sevenTwentyEight(posts));

// 7.29. Tokiu pačiu formatu, kaip ankstesnėje užduotyje, sukurti naują masyvą tik iš tų posts masyvo narių kurių pavadinimas turi daugiau nei 3 "a" raides, o "body" turi mažiau nei 7 "o" raides.

function sevenTwentyNine(posts) {
  return posts.filter((el) => el.title.split("a").length - 1 > 3 && el.body.split("o").length - 1 < 7).map((el) => `Title: "${el.title}". Content: "${el.body}"`);
}
console.log(sevenTwentyNine(posts));

// 7.30. Sukurti naują masyvą, kurio nariai bus posts masyvo narių property "title" reikšmė, tačiau surūšiuoti nuo mažiausiai iki daugiausiai raidžių "body" property turinčių narių. Papildomai, prie išvesto teksto pridėti ir "body" raidžių skaičių.

function sevenThirty(posts) {
  return posts
    .map((el) => ({ title: el.title, bodyLength: el.body.length }))
    .sort((a, b) => a.bodyLength - b.bodyLength)
    .map((el) => `${el.title} ${el.bodyLength}`);
}
console.log(sevenThirty(posts));
