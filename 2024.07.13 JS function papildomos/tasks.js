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
