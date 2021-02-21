"use strict";
// Given a string, enclose it in round brackets.
// Example
// For inputString = "abacaba", the output should be encloseInBrackets(inputString) = "(abacaba)".
function encloseInBrackets(inputString) {
    // const newStr = inputString.split('')
    // newStr.push(')')
    // newStr.unshift('(')
    return `(${inputString})`;
}
console.log(encloseInBrackets('abacaba'));
