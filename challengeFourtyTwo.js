"use strict";
// Let's define digit degree of some positive integer as the number of times we need to replace this number with the sum of its digits until we get to a one digit number.
// Given an integer, find its digit degree.
// Example
// For n = 5, the output should be digitDegree(n) = 0;
// For n = 100, the output should be digitDegree(n) = 1. 1 + 0 + 0 = 1.
// For n = 91, the output should be digitDegree(n) = 2. 9 + 1 = 10 -> 1 + 0 = 1.
function digitDegree(n) {
    if (n.toString().length < 2)
        return 0;
    const num = n.toString().split('');
    let total = num.reduce((a, n) => a + parseInt(n), 0);
    if (total.toString().length > 1) {
        total = total.toString().split('').reduce((a, n) => a + parseInt(n), 0);
    }
    return total;
}
console.log(digitDegree(5));
console.log(digitDegree(10));
console.log(digitDegree(91));
console.log(digitDegree(109));
