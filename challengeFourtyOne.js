"use strict";
// Given a string, find the number of different characters in it.
// Example
// For s = "cabca", the output should be differentSymbolsNaive(s) = 3.
// There are 3 different characters a, b and c.
function differentSymbolsNaive(s) {
    const str = s.split('');
    const sortedStr = [...new Set(str)];
    // * Can also do it like below
    // let count = 0
    // sortedStr.forEach(l => str.includes(l) ? count++ : l)
    // console.log(sortedStr.length)
    return sortedStr.length;
}
console.log(differentSymbolsNaive('cabca'));
console.log(differentSymbolsNaive("cabcxub"));
console.log(differentSymbolsNaive('Nazareth'));
