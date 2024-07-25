// function alertName(text) {
//   alert(text);
// }

// function consoleName(text) {
//   console.log(text);
// }

// function mainFunction(name, callback) {
//   const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
//   callback(capitalizedName);
// }

// mainFunction("edvInas", alertName);

// let namesArr = ["Edvinas", "Jonas", "Petras", "Antanas", "Kazys", "Tomas", "Mantas", "Marius", "Darius", "Domas"];
// namesArr.sort((a, b) => (b > a ? 1 : -1));
// console.log(namesArr);

// let numsArr = [5, 10, 20, 11, 12, 1, 0, 14, 25];
// numsArr.sort((a, b) => b - a);
// console.log(numsArr);

// let numArr = [10, 5, 20, 4];
// numArr.sort((a, b) => b - a);
// console.log(numArr[0]);

// const people = [
//   {
//     name: "Petras",
//     age: "18",
//   },
//   {
//     name: "Jonas",
//     age: 15,
//   },
//   {
//     name: "Antanas",
//     age: 20,
//   },
//   {
//     name: "Urtė",
//     age: 10,
//   },
//   {
//     name: "Diana",
//     age: 25,
//   },
//   {
//     name: "Ieva",
//     age: 16,
//   },
// ];

// console.log(
//   people
//     .filter((x) => x.age >= 18)
//     .map((x) => x.name)
//     .sort()
// );

// const drinks = [
//   { name: "Lemonade", price: 50 },
//   { name: "Cola", price: 60 },
// ];

// function DrinksPrice(items) {
//   items.sort((a, b) => a.price - b.price);
//   return { pigiausias: items[0].name, brangiausias: items[items.length - 1].name };
// }

// console.log(DrinksPrice(drinks));

// const addElement = (arr, element) => {
//   arr.push(element);
//   return arr;
// };

// console.log(addElement([2, 6, 8], 10));

// const mergeArrays = (arr1, arr2) => [...arr1, ...arr2];
// console.log(mergeArrays([1, 2, 3], [4, 5, 6]));

// const addMultipleElements = (arr, ...elements) => {
//   arr.push(...elements);
//   return arr;
// };
// console.log(addMultipleElements([1, 2, 3], 4, 5, 6, 7, 8, 9, 10));

// const doubleElements = (arr) => arr.map((x) => x * 2);
// console.log(doubleElements([1, 2, 3, 4, 5]));

// const findUnique = (arr) => [...new Set(arr)];
// console.log(findUnique([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]

// // const planTrip = (items) => items.reduce((total, item) => total + item) <= 200;
// // console.log(planTrip([30, 70, 90])); // true
// // console.log(planTrip([100, 85, 60])); // false

// // function planTrip(items) {
// //   return items.reduce((total, items) => total + items) <= 200;
// // }

// function planTrip(items) {
//   const totalWeight = items.reduce((total, items) => total + items, 0);
//   console.log(totalWeight);
//   return totalWeight <= 200;
//   console.log(totalWeight);
// }

// console.log(planTrip([30, 70, 90])); // true
// console.log(planTrip([100, 85, 60])); // false

// function optimizeQueue(items) {
//   const sortedItems = items.sort((a, b) => a.size - b.size);
//   console.log(sortedItems);
//   const sortedIds = sortedItems.map((item) => item.id);
//   console.log(sortedIds);
//   return sortedIds;
// }

// // const optimizeQueue = (items) => items.sort((a, b) => a.size - b.size).map((item) => item.id);

// console.log(
//   optimizeQueue([
//     { id: 1, size: 5 },
//     { id: 2, size: 3 },
//     { id: 3, size: 8 },
//   ])
// ); // [2, 1, 3]

// function findMostFrequent(arr) {
//   const frequencyMap = {};

//   for (const item of arr) {
//     if (frequencyMap[item]) {
//       frequencyMap[item]++;
//     } else {
//       frequencyMap[item] = 1;
//     }
//   }

//   console.log(frequencyMap);

//   let mostFrequent = null;
//   let maxCount = 0;

//   for (const item in frequencyMap) {
//     if (frequencyMap[item] > maxCount) {
//       mostFrequent = item;
//       maxCount = frequencyMap[item];
//     }
//   }
//   console.log(mostFrequent);

//   return mostFrequent;
// }

// console.log(findMostFrequent([1, 2, 3, 4, 4, 4, 5, 5, 5, 5, 8, 9, 9, 9, 9, 9, 9, 10, 11])); // 5

// // function findMissingNumber(arr) {
// //   arr.sort((a, b) => a - b); // Sort the array

// //   for (let i = 0; i < arr.length; i++) {
// //     if (arr[i] !== i + 1) {
// //       return i + 1;
// //     }
// //   }

// //   return arr.length + 1;
// // }

// function findMissingNumber(arr) {
//   const n = arr.length + 1;
//   const totalSum = (n * (n + 1)) / 2;
//   const actualSum = arr.reduce((totalSum, num) => totalSum + num, 0);
//   return totalSum - actualSum;
// }

// console.log(findMissingNumber([1, 2, 4, 5, 6])); // 3
// console.log(findMissingNumber([1, 2, 3, 4, 5, 6])); // 7
// console.log(findMissingNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 11

// function generateChessBoard(size) {
//   const board = [];

//   for (let i = 0; i < size; i++) {
//     const row = [];
//     for (let j = 0; j < size; j++) {
//       if ((i + j) % 2 === 0) {
//         row.push("W");
//       } else {
//         row.push("B");
//       }
//     }
//     board.push(row);
//   }
//   return board;
// }

// console.log(generateChessBoard(3)); // [['W', 'B', 'W'], ['B', 'W', 'B'], ['W', 'B', 'W']]

// function removeDuplicates(arr) {
//   return arr.filter((item, index) => arr.indexOf(item) === index);
// }

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]

// function flattenArray(arr) {
//   return (
//     (arr.reduce = (acc, val) => {
//       if ((Array, isArray(val))) {
//         return acc.concat(flattenArray(val));
//       } else {
//         return acc.concat(val);
//       }
//     }),
//     []
//   );
// }

// console.log(flattenArray([1, [2, [3, [4, 5]]]])); // [1, 2, 3, 4, 5]
// console.log(flattenArray([[1, 2, 3], [4, 5], [6]])); // [1, 2, 3, 4, 5, 6]
// console.log(flattenArray([1, [2, 3], 4, [5, [6, 7]]])); // [1, 2, 3, 4, 5, 6, 7]
