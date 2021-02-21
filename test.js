"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.factorializeANumber = void 0;
function extractEachKth(inputArray, k) {
    // let newArr = []
    // for (let i = 0; i < inputArray.length; i++) {
    //   if (inputArray[i] % k !== 0) {
    //     newArr.push(inputArray[i])
    //   }
    // }
    // return newArr
    return inputArray.filter(num => num % k !== 0);
}
console.log(extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
function factorializeANumber(num) {
    const nums = [];
    for (let i = 1; i <= num; i++) {
        nums.push(i);
    }
    return nums.reduce((acc, num) => acc * num);
}
exports.factorializeANumber = factorializeANumber;
console.log(factorializeANumber(5));
console.log(factorializeANumber(10));
function sortByLength(inputArray) {
    return inputArray.sort((a, b) => a.length - b.length);
}
console.log(sortByLength(["abc",
    "",
    "aaa",
    "a",
    "zz"]));
function evenDigitsOnly(n) {
    return n.toString().split('').every(num => parseInt(num) % 2 === 0);
}
console.log(evenDigitsOnly(248622));
console.log(evenDigitsOnly(642386));
